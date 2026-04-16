// Karaoke-style player — embeds YouTube for playback and overlays
// synced lyrics pulled from lrclib.net. The current line follows
// the video in real time, and clicking any line jumps the video
// to that timestamp (great for language learners who want to
// replay a tricky phrase).
//
// No server state — lrclib is a public API with CORS enabled, so
// we fetch straight from the browser. If lrclib returns no synced
// version we fall back to its plain lyrics (no highlight).
"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import type { Song } from "@/data/songs";
import { setOverride, getOverride } from "@/lib/song-overrides";

// ── Types for the YouTube IFrame API (loaded dynamically) ────────
type YTPlayer = {
  getCurrentTime: () => number;
  seekTo: (seconds: number, allowSeekAhead: boolean) => void;
  getIframe?: () => HTMLIFrameElement;
  destroy?: () => void;
};

type LrcLine = { time: number; text: string };

// ── LRC parser ────────────────────────────────────────────────────
// lrclib's syncedLyrics field looks like:
//   [00:12.34]First line
//   [00:17.20]Second line
// We parse each bracketed timestamp into a number of seconds.
function parseLRC(lrc: string): LrcLine[] {
  const out: LrcLine[] = [];
  const re = /^\[(\d+):(\d+)(?:\.(\d+))?\](.*)$/;
  for (const raw of lrc.split("\n")) {
    const m = raw.match(re);
    if (!m) continue;
    const [, mm, ss, ms = "0", text] = m;
    const msNorm = (ms + "000").slice(0, 3); // pad to ms precision
    const time = parseInt(mm, 10) * 60 + parseInt(ss, 10) + parseInt(msNorm, 10) / 1000;
    out.push({ time, text: text.trim() });
  }
  return out.sort((a, b) => a.time - b.time);
}

// ── lrclib fetch ──────────────────────────────────────────────────
async function fetchLyrics(song: Song): Promise<{
  synced?: LrcLine[];
  plain?: string;
} | null> {
  // Try `/get` first — requires exact artist + track (+ optional
  // album + duration for better matching).
  const params = new URLSearchParams({
    artist_name: song.artist,
    track_name: song.title,
  });
  if (song.album) params.set("album_name", song.album);
  if (song.duration) params.set("duration", String(song.duration));

  let data: { syncedLyrics?: string; plainLyrics?: string } | null = null;
  try {
    const r = await fetch(`https://lrclib.net/api/get?${params.toString()}`);
    if (r.ok) data = await r.json();
  } catch { /* fall through to search */ }

  // If the strict lookup failed (404), fall back to `/search` and
  // take the first result. Still constrained to the artist/track.
  if (!data) {
    try {
      const s = new URLSearchParams({ artist_name: song.artist, track_name: song.title });
      const r = await fetch(`https://lrclib.net/api/search?${s.toString()}`);
      if (r.ok) {
        const arr = (await r.json()) as Array<{ syncedLyrics?: string; plainLyrics?: string }>;
        if (arr.length > 0) data = arr[0];
      }
    } catch { /* swallow */ }
  }

  if (!data) return null;
  return {
    synced: data.syncedLyrics ? parseLRC(data.syncedLyrics) : undefined,
    plain: data.plainLyrics || undefined,
  };
}

// ── YouTube API loader (singleton) ────────────────────────────────
let ytApiPromise: Promise<void> | null = null;
function loadYouTubeApi(): Promise<void> {
  if (ytApiPromise) return ytApiPromise;
  ytApiPromise = new Promise((resolve) => {
    const w = window as unknown as { YT?: { Player: unknown }; onYouTubeIframeAPIReady?: () => void };
    if (w.YT && w.YT.Player) { resolve(); return; }
    w.onYouTubeIframeAPIReady = () => resolve();
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    tag.async = true;
    document.head.appendChild(tag);
  });
  return ytApiPromise;
}

// Shared style for the +/- sync buttons so the row stays compact.
const syncBtn: React.CSSProperties = {
  minWidth: 32, height: 30, padding: "0 8px",
  borderRadius: 8,
  background: "var(--site-card)", color: "var(--site-text-muted)",
  border: "1px solid var(--site-border-strong)",
  cursor: "pointer", fontSize: 12, fontWeight: 700,
  fontFamily: "'IBM Plex Mono', monospace",
};

// ── Component ─────────────────────────────────────────────────────
export default function LyricsPlayer({ song, isAdmin = false }: { song: Song; isAdmin?: boolean }) {
  const playerContainerRef = useRef<HTMLDivElement | null>(null);
  const playerRef = useRef<YTPlayer | null>(null);
  const [ready, setReady] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  const [lyricsState, setLyricsState] = useState<
    { kind: "loading" } | { kind: "error" } | { kind: "none" } | { kind: "synced"; lines: LrcLine[] } | { kind: "plain"; text: string }
  >({ kind: "loading" });

  // Sync offset in seconds — positive = lyrics advance earlier
  // (use when highlighting is behind the vocal); negative = later.
  // lrclib timestamps are based on the studio recording, but
  // YouTube videos often add intro bumpers or start slightly
  // offset, so users need a way to nudge the sync.
  //
  // Seeded from the song's saved override, if any. Teachers can
  // save new values via the "Save" button; students see whatever
  // was saved and can nudge locally for the session.
  const [offset, setOffset] = useState(song.offset ?? 0);
  const [savedOffset, setSavedOffset] = useState(song.offset ?? 0);
  useEffect(() => {
    const seed = song.offset ?? 0;
    setOffset(seed);
    setSavedOffset(seed);
  }, [song.id, song.offset]);

  const saveOffset = () => {
    const existing = getOverride(song.id) || {};
    setOverride(song.id, { ...existing, offset });
    setSavedOffset(offset);
  };

  // ── Create the YouTube player when the song changes ──────────
  useEffect(() => {
    let destroyed = false;
    setReady(false);
    setPlaying(false);
    setCurrentTime(0);

    loadYouTubeApi().then(() => {
      if (destroyed || !playerContainerRef.current) return;
      // Clear any previous player
      playerContainerRef.current.innerHTML = "";
      const host = document.createElement("div");
      host.id = `yt-${song.id}`;
      // Fill the aspect-ratio wrapper so the iframe YT creates
      // inside has a non-zero box to expand into.
      host.style.width = "100%";
      host.style.height = "100%";
      playerContainerRef.current.appendChild(host);

      const w = window as unknown as { YT: { Player: new (id: string, opts: Record<string, unknown>) => YTPlayer } };
      // Don't pass "100%" as a string for width/height — the YT API
      // expects numbers and silently misbehaves on strings. We size
      // the iframe AFTER onReady via getIframe() + inline styles.
      const p = new w.YT.Player(host.id, {
        videoId: song.youtubeId,
        playerVars: {
          rel: 0,          // no unrelated suggestions at the end
          modestbranding: 1, // minimal YT branding
          playsinline: 1,   // iOS inline playback
        },
        events: {
          onReady: (e: { target: YTPlayer }) => {
            if (destroyed) return;
            const iframe = e.target.getIframe?.();
            if (iframe) {
              iframe.style.width = "100%";
              iframe.style.height = "100%";
              iframe.style.border = "0";
              iframe.setAttribute("allowfullscreen", "");
            }
            setReady(true);
          },
          // 1 = PLAYING (YT.PlayerState.PLAYING)
          onStateChange: (e: { data: number }) => !destroyed && setPlaying(e.data === 1),
        },
      });
      playerRef.current = p;
    });

    return () => {
      destroyed = true;
      try { playerRef.current?.destroy?.(); } catch { /* ignore */ }
      playerRef.current = null;
    };
  }, [song.id, song.youtubeId]);

  // ── Fetch lyrics when the song changes ───────────────────────
  useEffect(() => {
    let cancelled = false;
    setLyricsState({ kind: "loading" });
    fetchLyrics(song).then((res) => {
      if (cancelled) return;
      if (!res) return setLyricsState({ kind: "error" });
      if (res.synced && res.synced.length > 0) return setLyricsState({ kind: "synced", lines: res.synced });
      if (res.plain) return setLyricsState({ kind: "plain", text: res.plain });
      setLyricsState({ kind: "none" });
    });
    return () => { cancelled = true; };
  }, [song.id, song.artist, song.title, song.album, song.duration]);

  // ── Poll current playback time while playing ─────────────────
  useEffect(() => {
    if (!ready || !playing) return;
    const id = window.setInterval(() => {
      const t = playerRef.current?.getCurrentTime?.();
      if (typeof t === "number") setCurrentTime(t);
    }, 200);
    return () => window.clearInterval(id);
  }, [ready, playing]);

  // ── Find the currently-active line index ─────────────────────
  const activeIndex = useMemo(() => {
    if (lyricsState.kind !== "synced") return -1;
    const lines = lyricsState.lines;
    // Apply the user-set sync offset before searching.
    const target = currentTime + offset;
    // Binary search for the latest line whose timestamp is <= target.
    let lo = 0, hi = lines.length - 1, ans = -1;
    while (lo <= hi) {
      const mid = (lo + hi) >> 1;
      if (lines[mid].time <= target) { ans = mid; lo = mid + 1; }
      else hi = mid - 1;
    }
    return ans;
  }, [lyricsState, currentTime, offset]);

  // ── Auto-scroll the active line into view ────────────────────
  const lyricsScrollRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (activeIndex < 0) return;
    const el = lyricsScrollRef.current?.querySelector<HTMLElement>(`[data-lrc-line="${activeIndex}"]`);
    el?.scrollIntoView({ behavior: "smooth", block: "center" });
  }, [activeIndex]);

  const seekTo = (seconds: number) => {
    playerRef.current?.seekTo(Math.max(0, seconds - 0.2), true);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16, width: "100%", maxWidth: 960 }}>
      {/* Video */}
      <div style={{ position: "relative", width: "100%", aspectRatio: "16/9", background: "#000", borderRadius: 14, overflow: "hidden", border: "1px solid var(--site-border-strong)" }}>
        <div ref={playerContainerRef} style={{ position: "absolute", inset: 0 }} />
      </div>

      {/* Song meta + sync controls */}
      <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 16, flexWrap: "wrap" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 2, minWidth: 0 }}>
          <div style={{ fontFamily: `"Fraunces", serif`, fontSize: 26, fontWeight: 500, color: "var(--site-text)", letterSpacing: "-0.01em" }}>
            {song.title}
          </div>
          <div style={{ fontSize: 13, color: "var(--site-text-muted)", letterSpacing: "0.06em" }}>
            {song.artist}{song.album ? ` · ${song.album}` : ""}
          </div>
        </div>

        {lyricsState.kind === "synced" && (
          <div style={{ display: "flex", alignItems: "center", gap: 6, flexShrink: 0, flexWrap: "wrap" }}>
            <span style={{ fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--site-text-sub)", fontWeight: 700, marginRight: 2 }}>
              Sync
            </span>
            {/* Bigger coarse step for large intros */}
            <button
              onClick={() => setOffset(o => +(o - 1).toFixed(1))}
              title="Delay lyrics by 1 s"
              style={syncBtn}
            >−1s</button>
            <button
              onClick={() => setOffset(o => +(o - 0.2).toFixed(1))}
              title="Delay lyrics by 0.2 s"
              style={syncBtn}
            >−</button>
            <span style={{ minWidth: 56, textAlign: "center", fontSize: 12, color: "var(--site-text)", fontFamily: "'IBM Plex Mono', monospace", fontWeight: 700 }}>
              {offset >= 0 ? "+" : ""}{offset.toFixed(1)}s
            </span>
            <button
              onClick={() => setOffset(o => +(o + 0.2).toFixed(1))}
              title="Advance lyrics by 0.2 s"
              style={syncBtn}
            >+</button>
            <button
              onClick={() => setOffset(o => +(o + 1).toFixed(1))}
              title="Advance lyrics by 1 s"
              style={syncBtn}
            >+1s</button>
            {offset !== savedOffset && (
              <>
                {isAdmin && (
                  <button
                    onClick={saveOffset}
                    title="Save this offset so everyone sees it"
                    style={{ marginLeft: 2, padding: "6px 12px", borderRadius: 8, background: "var(--site-accent)", color: "var(--site-bg)", border: "none", cursor: "pointer", fontSize: 11, fontWeight: 700, letterSpacing: "0.04em" }}
                  >Save</button>
                )}
                <button
                  onClick={() => setOffset(savedOffset)}
                  title={savedOffset === 0 ? "Reset to 0" : `Reset to saved (${savedOffset.toFixed(1)}s)`}
                  style={{ padding: "6px 10px", borderRadius: 8, background: "transparent", color: "var(--site-text-sub)", border: "1px solid var(--site-border)", cursor: "pointer", fontSize: 11, fontWeight: 600 }}
                >Reset</button>
              </>
            )}
          </div>
        )}
      </div>

      {/* Lyrics */}
      <div
        ref={lyricsScrollRef}
        style={{
          height: 420, overflowY: "auto", padding: "24px 20px",
          background: "var(--site-card)", border: "1px solid var(--site-border)", borderRadius: 14,
          scrollbarWidth: "thin",
        }}
      >
        {lyricsState.kind === "loading" && (
          <p style={{ color: "var(--site-text-sub)", fontSize: 13, textAlign: "center", marginTop: 40 }}>
            Loading lyrics…
          </p>
        )}

        {lyricsState.kind === "error" && (
          <p style={{ color: "var(--site-text-sub)", fontSize: 13, textAlign: "center", marginTop: 40 }}>
            Couldn&apos;t fetch lyrics for this song.
          </p>
        )}

        {lyricsState.kind === "none" && (
          <p style={{ color: "var(--site-text-sub)", fontSize: 13, textAlign: "center", marginTop: 40 }}>
            No lyrics found on lrclib.net for this track.
          </p>
        )}

        {lyricsState.kind === "plain" && (
          <pre style={{ color: "var(--site-text-muted)", fontSize: 15, lineHeight: 1.8, margin: 0, whiteSpace: "pre-wrap", fontFamily: "inherit" }}>
            {lyricsState.text}
            <span style={{ display: "block", marginTop: 18, fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--site-text-sub)" }}>
              (plain lyrics — no timestamps available)
            </span>
          </pre>
        )}

        {lyricsState.kind === "synced" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            {lyricsState.lines.map((ln, i) => {
              const active = i === activeIndex;
              const past = i < activeIndex;
              return (
                <button
                  key={`${i}-${ln.time}`}
                  data-lrc-line={i}
                  onClick={() => seekTo(ln.time)}
                  title={`Jump to ${Math.floor(ln.time / 60)}:${String(Math.floor(ln.time % 60)).padStart(2, "0")}`}
                  style={{
                    textAlign: "left", background: "transparent", border: "none", cursor: "pointer",
                    padding: "8px 12px", borderRadius: 8,
                    fontSize: active ? 19 : 15,
                    fontWeight: active ? 700 : 500,
                    lineHeight: 1.4,
                    color: active ? "var(--site-accent)" : past ? "var(--site-text-sub)" : "var(--site-text-muted)",
                    transition: "all 0.25s ease",
                    fontFamily: "inherit",
                  }}
                >
                  {ln.text || " "}
                </button>
              );
            })}
          </div>
        )}
      </div>

      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
        <p style={{ fontSize: 11, color: "var(--site-text-sub)", letterSpacing: "0.1em", textTransform: "uppercase", margin: 0 }}>
          Tap any line to jump to it · Lyrics from lrclib.net
        </p>
        {/* Always-visible fallback link — if the embed says "Video
            unavailable" (restricted, embed-disabled, wrong ID, etc.)
            the student can still open the track on YouTube directly. */}
        <a
          href={`https://www.youtube.com/watch?v=${song.youtubeId}`}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase",
            color: "var(--site-accent)", textDecoration: "none",
            padding: "6px 12px", borderRadius: 8,
            border: "1px solid var(--site-accent-border)",
            background: "var(--site-accent-dim)",
            fontWeight: 600,
          }}
        >
          Watch on YouTube ↗
        </a>
      </div>
    </div>
  );
}
