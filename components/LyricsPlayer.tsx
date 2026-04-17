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

  // If the strict lookup missed or returned no synced lyrics,
  // try `/search` and pick the first result that HAS synced
  // lyrics — preferring synced over plain.
  if (!data || !data.syncedLyrics) {
    try {
      const s = new URLSearchParams({ artist_name: song.artist, track_name: song.title });
      const r = await fetch(`https://lrclib.net/api/search?${s.toString()}`);
      if (r.ok) {
        const arr = (await r.json()) as Array<{ syncedLyrics?: string; plainLyrics?: string }>;
        // Prefer a result that has synced lyrics over one with only plain.
        const synced = arr.find(x => x.syncedLyrics);
        const fallback = arr[0];
        const best = synced || fallback;
        if (best) {
          // Keep the existing data if it has synced and the search
          // doesn't — but upgrade from plain to synced when possible.
          if (!data?.syncedLyrics && best.syncedLyrics) data = best;
          else if (!data) data = best;
        }
      }
    } catch { /* swallow */ }
  }

  if (!data) return null;
  // Strip LRC metadata tags that sometimes leak into plainLyrics
  // (e.g. [ti:...], [ar:...], [al:...], [by:...], [offset:0]).
  const cleanPlain = (text: string) =>
    text.replace(/^\[(?:ti|ar|al|au|by|offset|length|re|ve|#|encoding):[^\]]*\]\s*$/gim, "").trim();

  return {
    synced: data.syncedLyrics ? parseLRC(data.syncedLyrics) : undefined,
    plain: data.plainLyrics ? cleanPlain(data.plainLyrics) : undefined,
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

  // ── Resizable divider between video and lyrics columns ───
  const [lyricsWidthPct, setLyricsWidthPct] = useState(35);
  const isResizingRef = useRef(false);
  const handleDividerMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    isResizingRef.current = true;
    const startX = e.clientX;
    const startPct = lyricsWidthPct;
    const container = (e.currentTarget as HTMLElement).parentElement;
    if (!container) return;
    const containerWidth = container.getBoundingClientRect().width;

    const onMove = (ev: MouseEvent) => {
      const dx = ev.clientX - startX;
      const deltaPct = (dx / containerWidth) * 100;
      // Moving right → lyrics gets smaller; moving left → bigger
      const next = Math.min(65, Math.max(20, startPct - deltaPct));
      setLyricsWidthPct(next);
    };
    const onUp = () => {
      isResizingRef.current = false;
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseup", onUp);
    };
    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseup", onUp);
  };

  return (
    <div className="lyrics-player" style={{ display: "flex", flexDirection: "column", width: "100%", gap: 0, flex: 1, minHeight: 0 }}>
      {/* ── Desktop: side-by-side | Mobile: stacked ────────── */}
      <div className="lp-main" style={{ display: "flex", gap: 16, flex: 1, minHeight: 0 }}>
        {/* Left column: video + song info + sync */}
        <div className="lp-video-col" style={{ display: "flex", flexDirection: "column", gap: 12, flex: 1, minWidth: 0 }}>
          {/* Video */}
          <div style={{ position: "relative", width: "100%", aspectRatio: "16/9", background: "#000", borderRadius: 14, overflow: "hidden", border: "1px solid var(--site-border-strong)", flexShrink: 0 }}>
            <div ref={playerContainerRef} style={{ position: "absolute", inset: 0 }} />
          </div>

          {/* Song meta + sync controls */}
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 2, minWidth: 0 }}>
              <div style={{ fontFamily: `"Fraunces", serif`, fontSize: 22, fontWeight: 500, color: "var(--site-text)", letterSpacing: "-0.01em" }}>
                {song.title}
              </div>
              <div style={{ fontSize: 12, color: "var(--site-text-muted)", letterSpacing: "0.06em" }}>
                {song.artist}{song.album ? ` · ${song.album}` : ""}
              </div>
            </div>

            {lyricsState.kind === "synced" && (
              <div style={{ display: "flex", alignItems: "center", gap: 6, flexShrink: 0, flexWrap: "wrap" }}>
                <span style={{ fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--site-text-sub)", fontWeight: 700, marginRight: 2 }}>Sync</span>
                <button onClick={() => setOffset(o => +(o - 1).toFixed(1))} style={syncBtn}>−1s</button>
                <button onClick={() => setOffset(o => +(o - 0.2).toFixed(1))} style={syncBtn}>−</button>
                {isAdmin ? (
                  <input type="number" step="0.1" value={offset}
                    onChange={(e) => { const v = parseFloat(e.target.value); if (!isNaN(v)) setOffset(v); }}
                    style={{ width: 68, textAlign: "center", fontSize: 12, color: "var(--site-text)", fontFamily: "'IBM Plex Mono', monospace", fontWeight: 700, background: "var(--site-bg)", border: "1px solid var(--site-border-strong)", borderRadius: 6, padding: "4px 6px", outline: "none" }}
                  />
                ) : (
                  <span style={{ minWidth: 50, textAlign: "center", fontSize: 12, color: "var(--site-text)", fontFamily: "'IBM Plex Mono', monospace", fontWeight: 700 }}>
                    {offset >= 0 ? "+" : ""}{offset.toFixed(1)}s
                  </span>
                )}
                <button onClick={() => setOffset(o => +(o + 0.2).toFixed(1))} style={syncBtn}>+</button>
                <button onClick={() => setOffset(o => +(o + 1).toFixed(1))} style={syncBtn}>+1s</button>
                {offset !== savedOffset && (
                  <>
                    {isAdmin && (
                      <button onClick={saveOffset} style={{ marginLeft: 2, padding: "5px 10px", borderRadius: 8, background: "var(--site-accent)", color: "var(--site-bg)", border: "none", cursor: "pointer", fontSize: 10, fontWeight: 700 }}>Save</button>
                    )}
                    <button onClick={() => setOffset(savedOffset)} style={{ padding: "5px 8px", borderRadius: 8, background: "transparent", color: "var(--site-text-sub)", border: "1px solid var(--site-border)", cursor: "pointer", fontSize: 10, fontWeight: 600 }}>Reset</button>
                  </>
                )}
              </div>
            )}
          </div>

          {/* Watch on YouTube fallback */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
            <span style={{ fontSize: 10, color: "var(--site-text-sub)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
              Tap any line to jump · lrclib.net
            </span>
            <a href={`https://www.youtube.com/watch?v=${song.youtubeId}`} target="_blank" rel="noopener noreferrer"
              style={{ fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--site-accent)", textDecoration: "none", padding: "5px 10px", borderRadius: 8, border: "1px solid var(--site-accent-border)", background: "var(--site-accent-dim)", fontWeight: 600 }}>
              YouTube ↗
            </a>
          </div>
        </div>

        {/* Draggable divider — desktop only */}
        <div className="lp-divider"
          onMouseDown={handleDividerMouseDown}
          style={{
            width: 10, flexShrink: 0, cursor: "col-resize",
            display: "flex", alignItems: "center", justifyContent: "center",
            zIndex: 5, userSelect: "none",
          }}
        >
          <div style={{ width: 4, height: 40, borderRadius: 4, background: "var(--site-border-strong)", transition: "background 0.15s" }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "var(--site-accent)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "var(--site-border-strong)")}
          />
        </div>

        {/* Right column: lyrics (desktop) / below video (mobile) */}
        <div className="lp-lyrics-col" ref={lyricsScrollRef}
          style={{
            width: `${lyricsWidthPct}%`, flexShrink: 0, overflowY: "auto", padding: "20px 16px",
            background: "var(--site-card)", border: "1px solid var(--site-border)", borderRadius: 14,
            scrollbarWidth: "thin", minHeight: 300,
          }}
        >
          {lyricsState.kind === "loading" && (
            <p style={{ color: "var(--site-text-sub)", fontSize: 13, textAlign: "center", marginTop: 40 }}>Loading lyrics…</p>
          )}
          {lyricsState.kind === "error" && (
            <p style={{ color: "var(--site-text-sub)", fontSize: 13, textAlign: "center", marginTop: 40 }}>Couldn&apos;t fetch lyrics for this song.</p>
          )}
          {lyricsState.kind === "none" && (
            <p style={{ color: "var(--site-text-sub)", fontSize: 13, textAlign: "center", marginTop: 40 }}>No lyrics found on lrclib.net for this track.</p>
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
                  <button key={`${i}-${ln.time}`} data-lrc-line={i} onClick={() => seekTo(ln.time)}
                    title={`Jump to ${Math.floor(ln.time / 60)}:${String(Math.floor(ln.time % 60)).padStart(2, "0")}`}
                    style={{
                      textAlign: "left", background: "transparent", border: "none", cursor: "pointer",
                      padding: "6px 10px", borderRadius: 8,
                      fontSize: active ? 18 : 14, fontWeight: active ? 700 : 500, lineHeight: 1.4,
                      color: active ? "var(--site-accent)" : past ? "var(--site-text-sub)" : "var(--site-text-muted)",
                      transition: "all 0.25s ease", fontFamily: "inherit",
                    }}
                  >
                    {ln.text || " "}
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* ── Responsive overrides ──────────────────────────── */}
      <style>{`
        /* Desktop: side by side with draggable divider */
        @media (min-width: 900px) {
          .lp-main { flex-direction: row !important; }
          .lp-video-col { flex: 1 !important; min-width: 0 !important; }
          .lp-lyrics-col { height: calc(100vh - 260px) !important; }
          .lp-divider { display: flex !important; }
        }
        /* Mobile: stacked Spotify-style, hide divider */
        @media (max-width: 899px) {
          .lp-main { flex-direction: column !important; }
          .lp-video-col { flex: none !important; }
          .lp-divider { display: none !important; }
          .lp-lyrics-col {
            width: 100% !important;
            flex: 1 !important;
            min-height: 50vh !important;
            border-radius: 18px 18px 0 0 !important;
            padding: 28px 20px !important;
          }
          .lp-lyrics-col button {
            text-align: center !important;
            font-size: 16px !important;
            padding: 10px 8px !important;
          }
        }
      `}</style>
    </div>
  );
}
