// /podcasts — YouTube-based English learning episodes. Same
// side-by-side layout as /music but without lyric sync —
// just the video + a description panel.
"use client";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Mic, Pencil, X, Check, RotateCcw } from "lucide-react";
import Brand from "@/components/Brand";
import { starterEpisodes, type Episode } from "@/data/podcasts";
import { getSession, type StudentSession } from "@/lib/store";

const DISPLAY_FONT = `"Fraunces", "Iowan Old Style", Georgia, serif`;

// ── YouTube API loader (singleton, shared with music page) ───
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

// ── Simple localStorage override for episode YouTube IDs ─────
const STORAGE_KEY = "london-lc.podcast-overrides";
type Overrides = Record<string, { youtubeId?: string }>;
function readOverrides(): Overrides { try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}"); } catch { return {}; } }
function writeOverride(id: string, youtubeId: string) { const all = readOverrides(); all[id] = { youtubeId }; localStorage.setItem(STORAGE_KEY, JSON.stringify(all)); }
function clearOverride(id: string) { const all = readOverrides(); delete all[id]; localStorage.setItem(STORAGE_KEY, JSON.stringify(all)); }

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

  // ── YouTube player ─────────────────────────────────────────
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

  // ── Resizable divider ──────────────────────────────────────
  const [descWidthPct, setDescWidthPct] = useState(35);
  const isResizingRef = useRef(false);
  const handleDividerMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    isResizingRef.current = true;
    const startX = e.clientX;
    const startPct = descWidthPct;
    const container = (e.currentTarget as HTMLElement).parentElement;
    if (!container) return;
    const cw = container.getBoundingClientRect().width;
    const onMove = (ev: MouseEvent) => { const dx = ev.clientX - startX; setDescWidthPct(Math.min(65, Math.max(20, startPct - (dx / cw) * 100))); };
    const onUp = () => { isResizingRef.current = false; document.removeEventListener("mousemove", onMove); document.removeEventListener("mouseup", onUp); };
    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseup", onUp);
  };

  return (
    <div style={{ minHeight: "100vh", background: "var(--site-bg)", color: "var(--site-text)", fontFamily: "Inter, system-ui, sans-serif", display: "flex", flexDirection: "column" }}>
      <nav style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "18px 32px", borderBottom: "1px solid var(--site-border)" }}>
        <Brand href="/" size={20} />
        <Link href="/student/dashboard" style={{ marginRight: 52, fontSize: 13, color: "var(--site-text-muted)", textDecoration: "none", fontWeight: 500 }}>← Back to dashboard</Link>
      </nav>

      <header style={{ padding: "32px 36px 20px", width: "100%" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 6 }}>
          <div style={{ width: 36, height: 36, borderRadius: 10, background: "var(--site-accent-dim)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--site-accent)" }}><Mic size={18} /></div>
          <h1 style={{ fontFamily: DISPLAY_FONT, fontSize: 34, fontWeight: 500, letterSpacing: "-0.02em", color: "var(--site-text)", margin: 0 }}>
            Podcasts <em style={{ fontStyle: "italic", fontWeight: 300, color: "var(--site-text-muted)" }}>& episodes</em>
          </h1>
        </div>
        <p style={{ color: "var(--site-text-muted)", fontSize: 14, margin: "0 0 0 48px", lineHeight: 1.5 }}>English learning episodes — BBC, TED-Ed, and more.</p>
      </header>

      <div className="pod-layout" style={{ flex: 1, display: "flex", gap: 24, padding: "8px 36px 56px", width: "100%", minHeight: 0 }}>
        {/* Episode list */}
        <aside className="pod-list" style={{ width: 280, flexShrink: 0, display: "flex", flexDirection: "column", gap: 4, maxHeight: "calc(100vh - 220px)", overflowY: "auto" }}>
          <p style={{ fontSize: 10, fontWeight: 700, color: "var(--site-text-sub)", letterSpacing: "0.22em", textTransform: "uppercase", margin: "4px 12px 10px" }}>Episodes · {episodes.length}</p>
          {episodes.map(ep => (
            <EpisodeRow key={ep.id} episode={ep} active={ep.id === selectedId} isAdmin={isAdmin} onSelect={() => setSelectedId(ep.id)} onOverrideChange={() => setTick(t => t + 1)} />
          ))}
        </aside>

        {/* Main area */}
        <div className="pod-main" style={{ flex: 1, display: "flex", gap: 0, minHeight: 0 }}>
          {/* Video column */}
          <div className="pod-video-col" style={{ display: "flex", flexDirection: "column", gap: 8, flex: 1, minWidth: 0 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 1, flexShrink: 0 }}>
              <div style={{ fontFamily: DISPLAY_FONT, fontSize: 20, fontWeight: 500, color: "var(--site-text)", lineHeight: 1.2 }}>{selected?.title}</div>
              <div style={{ fontSize: 11, color: "var(--site-text-muted)" }}>
                {selected?.channel}{selected?.duration ? ` · ${formatDuration(selected.duration)}` : ""}
                {" · "}<a href={`https://www.youtube.com/watch?v=${selected?.youtubeId}`} target="_blank" rel="noopener noreferrer" style={{ color: "var(--site-accent)", textDecoration: "none", fontWeight: 600 }}>YouTube ↗</a>
              </div>
            </div>
            <div style={{ position: "relative", width: "100%", flex: 1, minHeight: 200, background: "#000", borderRadius: 14, overflow: "hidden", border: "1px solid var(--site-border-strong)" }}>
              <div ref={playerContainerRef} style={{ position: "absolute", inset: 0 }} />
            </div>
          </div>

          {/* Divider */}
          <div className="pod-divider" onMouseDown={handleDividerMouseDown} style={{ width: 10, flexShrink: 0, cursor: "col-resize", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 5, userSelect: "none" }}>
            <div style={{ width: 4, height: 40, borderRadius: 4, background: "var(--site-border-strong)", transition: "background 0.15s" }}
              onMouseEnter={e => (e.currentTarget.style.background = "var(--site-accent)")}
              onMouseLeave={e => (e.currentTarget.style.background = "var(--site-border-strong)")} />
          </div>

          {/* Description / transcript panel */}
          <div className="pod-desc-col" style={{ width: `${descWidthPct}%`, flexShrink: 0, overflowY: "auto", padding: "20px 18px", background: "var(--site-card)", border: "1px solid var(--site-border)", borderRadius: 14, minHeight: 300 }}>
            <p style={{ fontSize: 10, fontWeight: 700, color: "var(--site-text-sub)", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 14 }}>About this episode</p>
            <p style={{ fontSize: 15, color: "var(--site-text-muted)", lineHeight: 1.8 }}>
              {selected?.description || "No description available for this episode."}
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 900px) {
          .pod-main { flex-direction: row !important; }
          .pod-video-col { flex: 1 !important; min-width: 0 !important; }
          .pod-desc-col { height: calc(100vh - 260px) !important; }
          .pod-divider { display: flex !important; }
        }
        @media (max-width: 899px) {
          .pod-layout { flex-direction: column !important; padding: 8px 16px 40px !important; }
          .pod-list { width: 100% !important; flex-direction: row !important; overflow-x: auto !important; gap: 8px !important; max-height: none !important; }
          .pod-list p { display: none !important; }
          .pod-main { flex-direction: column !important; }
          .pod-divider { display: none !important; }
          .pod-desc-col { width: 100% !important; min-height: auto !important; }
        }
      `}</style>
    </div>
  );
}

// ── Episode row with inline URL editor for admins ─────────
function EpisodeRow({ episode, active, isAdmin, onSelect, onOverrideChange }: {
  episode: Episode; active: boolean; isAdmin: boolean; onSelect: () => void; onOverrideChange: () => void;
}) {
  const [editing, setEditing] = useState(false);
  const [url, setUrl] = useState("");
  const [error, setError] = useState("");

  const save = () => {
    const id = extractYouTubeId(url);
    if (!id) { setError("Paste a YouTube URL or 11-char video ID."); return; }
    writeOverride(episode.id, id);
    setError(""); setEditing(false); setUrl(""); onOverrideChange();
  };
  const reset = () => { clearOverride(episode.id); setEditing(false); setUrl(""); setError(""); onOverrideChange(); };

  return (
    <div style={{ padding: "10px 12px 10px 14px", borderRadius: 10, background: active ? "var(--site-accent-dim)" : "transparent", border: `1px solid ${active ? "var(--site-accent-border)" : "transparent"}`, transition: "all 0.15s", display: "flex", flexDirection: "column", gap: 6, flexShrink: 0 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <button onClick={onSelect} style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column", alignItems: "flex-start", textAlign: "left", padding: 0, background: "transparent", border: "none", cursor: "pointer", color: active ? "var(--site-accent)" : "var(--site-text-muted)", fontFamily: "inherit" }}>
          <span style={{ fontSize: 13, fontWeight: 600, lineHeight: 1.2, marginBottom: 2 }}>{episode.title}</span>
          <span style={{ fontSize: 10, color: "var(--site-text-sub)", letterSpacing: "0.04em" }}>{episode.channel}{episode.duration ? ` · ${formatDuration(episode.duration)}` : ""}</span>
        </button>
        {isAdmin && (
          <button onClick={() => { setEditing(e => !e); setError(""); }} style={{ width: 26, height: 26, borderRadius: 6, background: editing ? "var(--site-accent)" : "transparent", color: editing ? "var(--site-bg)" : "var(--site-text-sub)", border: `1px solid ${editing ? "var(--site-accent)" : "var(--site-border-strong)"}`, cursor: "pointer", display: "inline-flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            {editing ? <X size={12} /> : <Pencil size={12} />}
          </button>
        )}
      </div>
      {editing && (
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          <input type="text" value={url} onChange={e => { setUrl(e.target.value); setError(""); }} onKeyDown={e => { if (e.key === "Enter") save(); }} placeholder="Paste YouTube URL…" autoFocus
            style={{ padding: "7px 10px", borderRadius: 6, fontSize: 12, background: "var(--site-bg)", color: "var(--site-text)", border: `1px solid ${error ? "#ef4444" : "var(--site-border-strong)"}`, outline: "none", fontFamily: "'IBM Plex Mono', monospace" }} />
          {error && <div style={{ fontSize: 10.5, color: "#ef4444", lineHeight: 1.3 }}>{error}</div>}
          <div style={{ display: "flex", gap: 6 }}>
            <button onClick={save} style={{ flex: 1, padding: "6px 10px", borderRadius: 6, background: "var(--site-accent)", color: "var(--site-bg)", border: "none", cursor: "pointer", fontSize: 11, fontWeight: 700, display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 4 }}><Check size={12} /> Save</button>
            <button onClick={reset} style={{ padding: "6px 10px", borderRadius: 6, background: "transparent", color: "var(--site-text-sub)", border: "1px solid var(--site-border-strong)", cursor: "pointer", fontSize: 11, fontWeight: 600, display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 4 }}><RotateCcw size={11} /> Reset</button>
          </div>
        </div>
      )}
    </div>
  );
}
