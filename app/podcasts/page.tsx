// /podcasts — Phase 3 redesign. Wrapped in StudentShell with the new
// design tokens (eyebrow / h1 / lede + episode list with accent rail).
// Keeps the real YouTube iframe player and the admin override flow so
// teachers can swap videos without redeploying.
"use client";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Pencil, X, Check, RotateCcw } from "lucide-react";
import StudentShell from "@/components/StudentShell";
import { starterEpisodes, type Episode } from "@/data/podcasts";
import { getSession, type StudentSession } from "@/lib/store";

// ── YouTube API loader (singleton) ──────────────────────────
type YTPlayer = { destroy?: () => void; getIframe?: () => HTMLIFrameElement };
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

// ── Per-episode YouTube-ID override (localStorage) ──────────
const STORAGE_KEY = "london-lc.podcast-overrides";
type Overrides = Record<string, { youtubeId?: string }>;
function readOverrides(): Overrides { try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}"); } catch { return {}; } }
function writeOverride(id: string, youtubeId: string) { const all = readOverrides(); all[id] = { youtubeId }; localStorage.setItem(STORAGE_KEY, JSON.stringify(all)); }
function clearOverrideFor(id: string) { const all = readOverrides(); delete all[id]; localStorage.setItem(STORAGE_KEY, JSON.stringify(all)); }

function extractYouTubeId(input: string): string | null {
  const t = input.trim();
  if (/^[A-Za-z0-9_-]{11}$/.test(t)) return t;
  try {
    const u = new URL(t);
    const h = u.hostname.replace(/^www\./, "").replace(/^m\./, "");
    if (h === "youtu.be") { const id = u.pathname.replace(/^\//, "").split("/")[0]; return /^[A-Za-z0-9_-]{11}$/.test(id) ? id : null; }
    if (h.includes("youtube")) { const v = u.searchParams.get("v"); if (v && /^[A-Za-z0-9_-]{11}$/.test(v)) return v; const m = u.pathname.match(/\/(?:embed|shorts|v)\/([A-Za-z0-9_-]{11})/); if (m) return m[1]; }
  } catch {}
  return null;
}

function formatDuration(s?: number): string {
  if (!s) return "";
  const m = Math.floor(s / 60);
  return m < 60 ? `${m} min` : `${Math.floor(m / 60)}h ${m % 60}m`;
}

export default function PodcastsPage() {
  const router = useRouter();
  const [session, setSession] = useState<StudentSession | null>(null);
  const [selectedId, setSelectedId] = useState(starterEpisodes[0]?.id || "");
  const [tick, setTick] = useState(0);
  const playerContainerRef = useRef<HTMLDivElement | null>(null);
  const playerRef = useRef<YTPlayer | null>(null);

  useEffect(() => {
    const s = getSession();
    if (!s) { router.push("/auth/login"); return; }
    setSession(s);
  }, [router]);

  const isAdmin = !!session?.isAdmin;
  const overrides = readOverrides();
  const episodes = starterEpisodes.map(e => {
    const o = overrides[e.id];
    return o?.youtubeId ? { ...e, youtubeId: o.youtubeId } : e;
  });
  const selected = episodes.find(e => e.id === selectedId) || episodes[0];

  useEffect(() => {
    if (!selected) return;
    let destroyed = false;
    loadYouTubeApi().then(() => {
      if (destroyed || !playerContainerRef.current) return;
      playerContainerRef.current.innerHTML = "";
      const host = document.createElement("div");
      host.id = `yt-pod-${selected.id}`;
      host.style.width = "100%";
      host.style.height = "100%";
      playerContainerRef.current.appendChild(host);
      const w = window as unknown as { YT: { Player: new (id: string, opts: Record<string, unknown>) => YTPlayer } };
      const p = new w.YT.Player(host.id, {
        videoId: selected.youtubeId,
        playerVars: { rel: 0, modestbranding: 1, playsinline: 1 },
        events: {
          onReady: (e: { target: YTPlayer }) => {
            if (destroyed) return;
            const iframe = e.target.getIframe?.();
            if (iframe) { iframe.style.width = "100%"; iframe.style.height = "100%"; iframe.style.border = "0"; iframe.setAttribute("allowfullscreen", ""); }
          },
        },
      });
      playerRef.current = p;
    });
    return () => { destroyed = true; try { playerRef.current?.destroy?.(); } catch {} playerRef.current = null; };
  }, [selected?.id, selected?.youtubeId, tick]);

  if (!session) return null;

  return (
    <StudentShell>
      <p className="eyebrow">Library · Audio</p>
      <h1 className="h1">Podcasts <em>& episodes</em></h1>
      <p className="lede" style={{ marginTop: 16, marginBottom: 32 }}>
        English-learning episodes curated weekly — BBC 6 Minute English, TED-Ed, and longer
        TED talks for advanced listeners. Streamed directly from YouTube.
      </p>

      <div className="pod-grid" style={{ display: "grid", gridTemplateColumns: "320px 1fr 300px", gap: 24 }}>
        {/* Episode list */}
        <div className="card flush pod-list" style={{ maxHeight: 600, overflowY: "auto" }}>
          <div className="card-hd" style={{ paddingBottom: 14 }}>
            <span className="sub">Episodes · {episodes.length}</span>
          </div>
          {episodes.map(ep => (
            <EpisodeRow
              key={ep.id}
              episode={ep}
              active={ep.id === selectedId}
              isAdmin={isAdmin}
              onSelect={() => setSelectedId(ep.id)}
              onOverrideChange={() => setTick(t => t + 1)}
            />
          ))}
        </div>

        {/* Player card */}
        <div className="card" style={{ padding: 28 }}>
          <p className="eyebrow">{selected?.channel}</p>
          <h2 style={{ fontFamily: "var(--ff-serif)", fontSize: 28, fontWeight: 500, letterSpacing: "-0.01em", margin: "6px 0 10px", lineHeight: 1.2, color: "var(--text)" }}>
            {selected?.title}
          </h2>
          <div style={{ fontFamily: "var(--ff-mono)", fontSize: 11, color: "var(--text-3)", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 20 }}>
            {selected?.channel}{selected?.duration ? ` · ${formatDuration(selected.duration)}` : ""}
          </div>

          <div style={{ aspectRatio: "16 / 9", borderRadius: 10, overflow: "hidden", border: "1px solid var(--line-2)", background: "#000", marginBottom: 16 }}>
            <div ref={playerContainerRef} style={{ width: "100%", height: "100%" }} />
          </div>

          <div className="flex g8" style={{ flexWrap: "wrap" }}>
            <a
              href={`https://www.youtube.com/watch?v=${selected?.youtubeId}`}
              target="_blank"
              rel="noreferrer"
              className="chip"
              style={{ textDecoration: "none", cursor: "pointer" }}
            >
              open on YouTube ↗
            </a>
            {selected?.duration && (
              <span className="chip" style={{ marginLeft: "auto" }}>{formatDuration(selected.duration)}</span>
            )}
          </div>
        </div>

        {/* About panel */}
        <div className="card pod-about">
          <p className="eyebrow">About this episode</p>
          <p style={{ fontSize: 14, color: "var(--text-2)", lineHeight: 1.65, margin: "10px 0 0" }}>
            {selected?.description || "No description available for this episode."}
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 1100px) {
          .pod-grid { grid-template-columns: 280px 1fr !important; }
          .pod-about { grid-column: 1 / -1 !important; }
        }
        @media (max-width: 780px) {
          .pod-grid { grid-template-columns: 1fr !important; }
          .pod-list { max-height: 320px !important; }
        }
      `}</style>
    </StudentShell>
  );
}

// ── Episode row (with inline admin YouTube-ID editor) ─────
function EpisodeRow({ episode, active, isAdmin, onSelect, onOverrideChange }: {
  episode: Episode; active: boolean; isAdmin: boolean; onSelect: () => void; onOverrideChange: () => void;
}) {
  const [editing, setEditing] = useState(false);
  const [url, setUrl] = useState("");
  const [error, setError] = useState("");

  const save = () => {
    const id = extractYouTubeId(url);
    if (!id) { setError("Paste a YouTube URL or 11-char ID."); return; }
    writeOverride(episode.id, id);
    setError(""); setEditing(false); setUrl(""); onOverrideChange();
  };
  const reset = () => { clearOverrideFor(episode.id); setEditing(false); setUrl(""); setError(""); onOverrideChange(); };

  return (
    <div
      onClick={onSelect}
      style={{
        padding: "14px 20px",
        borderTop: "1px solid var(--line)",
        background: active ? "var(--surface-2)" : "transparent",
        borderLeft: active ? "2px solid var(--accent)" : "2px solid transparent",
        cursor: "pointer",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontFamily: "var(--ff-mono)", fontSize: 9.5, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-3)", marginBottom: 4 }}>
            {episode.channel}
          </div>
          <div style={{ fontFamily: "var(--ff-serif)", fontSize: 15, fontWeight: 500, letterSpacing: "-0.005em", lineHeight: 1.3, marginBottom: 4, color: "var(--text)" }}>
            {episode.title}
          </div>
          <div style={{ fontFamily: "var(--ff-mono)", fontSize: 10.5, color: "var(--text-3)" }}>
            {formatDuration(episode.duration)}
          </div>
        </div>
        {isAdmin && (
          <button
            onClick={(e) => { e.stopPropagation(); setEditing(v => !v); setError(""); }}
            className="btn icon ghost"
            style={{ flexShrink: 0 }}
            aria-label={editing ? "Cancel edit" : "Edit YouTube ID"}
          >
            {editing ? <X size={12} /> : <Pencil size={12} />}
          </button>
        )}
      </div>
      {editing && (
        <div onClick={(e) => e.stopPropagation()} style={{ display: "flex", flexDirection: "column", gap: 6, marginTop: 10 }}>
          <input
            type="text"
            value={url}
            onChange={e => { setUrl(e.target.value); setError(""); }}
            onKeyDown={e => { if (e.key === "Enter") save(); }}
            placeholder="Paste YouTube URL…"
            autoFocus
            style={{
              padding: "7px 10px", borderRadius: 6, fontSize: 12,
              background: "var(--bg)", color: "var(--text)",
              border: `1px solid ${error ? "var(--danger)" : "var(--line-2)"}`,
              outline: "none", fontFamily: "var(--ff-mono)",
            }}
          />
          {error && <div style={{ fontSize: 10.5, color: "var(--danger)", lineHeight: 1.3 }}>{error}</div>}
          <div style={{ display: "flex", gap: 6 }}>
            <button onClick={save} className="btn primary sm" style={{ flex: 1 }}>
              <Check size={12} /> Save
            </button>
            <button onClick={reset} className="btn ghost sm">
              <RotateCcw size={11} /> Reset
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
