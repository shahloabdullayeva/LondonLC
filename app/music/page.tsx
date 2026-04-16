// /music — karaoke-style page combining YouTube playback with
// synced lyrics from lrclib.net. Students click a track on the
// left, watch it play, and follow along with highlighted lyrics
// that auto-scroll and respond to clicks (jump-to-line).
//
// The song catalogue starts as a hardcoded curated list in
// data/songs.ts. Teachers will get an admin UI for adding their
// own tracks in a follow-up — until then, new entries go in that
// file.
"use client";
import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Music, Pencil, X, Check, RotateCcw } from "lucide-react";
import Brand from "@/components/Brand";
import LyricsPlayer from "@/components/LyricsPlayer";
import { starterSongs, type Song } from "@/data/songs";
import { getSession, type StudentSession } from "@/lib/store";
import { getAllOverrides, setOverride, clearOverride, extractYouTubeId } from "@/lib/song-overrides";

const DISPLAY_FONT = `"Fraunces", "Iowan Old Style", Georgia, serif`;
const BODY_FONT = `"Inter", system-ui, sans-serif`;

export default function MusicPage() {
  const router = useRouter();
  const [session, setSession] = useState<StudentSession | null>(null);
  const [selectedId, setSelectedId] = useState<string>(starterSongs[0]?.id || "");
  // Bump this to re-read overrides from localStorage after an edit.
  const [overridesTick, setOverridesTick] = useState(0);

  // Require login — anyone signed in can access. Both students and
  // teachers (admins) can use the music page for now.
  useEffect(() => {
    const s = getSession();
    if (!s) { router.push("/auth/login"); return; }
    setSession(s);
  }, [router]);

  // Subscribe to cross-component override changes (e.g. if the
  // teacher opens edit on one song then another).
  useEffect(() => {
    const bump = () => setOverridesTick(t => t + 1);
    window.addEventListener("london-lc:song-overrides", bump);
    return () => window.removeEventListener("london-lc:song-overrides", bump);
  }, []);

  const isAdmin = !!session?.isAdmin;

  // Merge hardcoded catalogue + per-song admin overrides.
  const songs: Song[] = useMemo(() => {
    const overrides = getAllOverrides();
    return starterSongs.map((s) => {
      const o = overrides[s.id];
      if (!o) return s;
      return {
        ...s,
        youtubeId: o.youtubeId ?? s.youtubeId,
        duration: o.duration ?? s.duration,
        offset: o.offset ?? s.offset,
      };
    });
    // overridesTick invalidates the memo when localStorage changes.
  }, [overridesTick]);

  const selected = songs.find(s => s.id === selectedId) || songs[0];

  return (
    <div style={{
      minHeight: "100vh",
      background: "var(--site-bg)",
      color: "var(--site-text)",
      fontFamily: BODY_FONT,
      display: "flex", flexDirection: "column",
    }}>
      {/* Nav */}
      <nav style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "18px 32px",
        borderBottom: "1px solid var(--site-border)",
      }}>
        <Brand href="/" size={20} />
        <Link href="/student/dashboard" style={{
          marginRight: 52, /* clear of the floating theme toggle */
          fontSize: 13, color: "var(--site-text-muted)",
          textDecoration: "none", fontWeight: 500,
        }}>
          ← Back to dashboard
        </Link>
      </nav>

      {/* Header */}
      <header style={{ padding: "32px 36px 20px", width: "100%" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 6 }}>
          <div style={{ width: 36, height: 36, borderRadius: 10, background: "var(--site-accent-dim)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--site-accent)" }}>
            <Music size={18} />
          </div>
          <h1 style={{
            fontFamily: DISPLAY_FONT, fontSize: 34, fontWeight: 500,
            letterSpacing: "-0.02em", color: "var(--site-text)", margin: 0,
          }}>
            Music <em style={{ fontStyle: "italic", fontWeight: 300, color: "var(--site-text-muted)" }}>& lyrics</em>
          </h1>
        </div>
        <p style={{ color: "var(--site-text-muted)", fontSize: 14, margin: "0 0 0 48px", lineHeight: 1.5 }}>
          Follow along with synced lyrics — tap any line to replay it.
        </p>
      </header>

      {/* Main layout — full viewport width, no maxWidth cap */}
      <div className="music-layout" style={{
        flex: 1, display: "flex", gap: 24,
        padding: "8px 36px 56px",
        width: "100%", minHeight: 0,
      }}>
        {/* Song list */}
        <aside className="music-song-list" style={{
          width: 280, flexShrink: 0,
          display: "flex", flexDirection: "column", gap: 4,
          maxHeight: "calc(100vh - 220px)", overflowY: "auto",
        }}>
          <p style={{ fontSize: 10, fontWeight: 700, color: "var(--site-text-sub)", letterSpacing: "0.22em", textTransform: "uppercase", margin: "4px 12px 10px" }}>
            Catalogue · {songs.length}
          </p>
          {songs.map((s) => (
            <SongRow
              key={s.id}
              song={s}
              active={s.id === selectedId}
              isAdmin={isAdmin}
              onSelect={() => setSelectedId(s.id)}
            />
          ))}
        </aside>

        {/* Player — fills the remaining width */}
        <main style={{ flex: 1, minWidth: 0, display: "flex", justifyContent: "stretch" }}>
          {selected && <LyricsPlayer key={selected.id} song={selected} isAdmin={isAdmin} />}
        </main>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .music-layout { flex-direction: column !important; padding: 8px 16px 40px !important; }
          .music-song-list { width: 100% !important; flex-direction: row !important; overflow-x: auto !important; gap: 8px !important; -webkit-overflow-scrolling: touch; padding-bottom: 4px; max-height: none !important; }
          .music-song-list p { display: none !important; }
          .music-song-list button { min-width: 200px; flex-shrink: 0; }
        }
      `}</style>
    </div>
  );
}

// ── Song row with inline YouTube-URL editor for admins ─────────
function SongRow({ song, active, isAdmin, onSelect }: {
  song: Song;
  active: boolean;
  isAdmin: boolean;
  onSelect: () => void;
}) {
  const [editing, setEditing] = useState(false);
  const [url, setUrl] = useState("");
  const [error, setError] = useState("");

  const save = () => {
    const id = extractYouTubeId(url);
    if (!id) {
      setError("Paste a YouTube URL or 11-char video ID.");
      return;
    }
    setOverride(song.id, { youtubeId: id });
    setError("");
    setEditing(false);
    setUrl("");
  };

  const reset = () => {
    clearOverride(song.id);
    setEditing(false);
    setUrl("");
    setError("");
  };

  const rowBg = active ? "var(--site-accent-dim)" : "transparent";
  const rowBorder = active ? "var(--site-accent-border)" : "transparent";

  return (
    <div style={{
      padding: "10px 12px 10px 14px", borderRadius: 10,
      background: rowBg,
      border: `1px solid ${rowBorder}`,
      transition: "all 0.15s",
      display: "flex", flexDirection: "column", gap: 6, flexShrink: 0,
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <button
          onClick={onSelect}
          style={{
            flex: 1, minWidth: 0, display: "flex", flexDirection: "column", alignItems: "flex-start",
            textAlign: "left", padding: 0, background: "transparent", border: "none",
            cursor: "pointer", color: active ? "var(--site-accent)" : "var(--site-text-muted)",
            fontFamily: "inherit",
          }}
        >
          <span style={{ fontSize: 14, fontWeight: 600, lineHeight: 1.2, marginBottom: 2 }}>
            {song.title}
          </span>
          <span style={{ fontSize: 11, color: "var(--site-text-sub)", letterSpacing: "0.04em" }}>
            {song.artist}
          </span>
        </button>
        {isAdmin && (
          <button
            onClick={() => { setEditing(e => !e); setError(""); }}
            title={editing ? "Close editor" : "Change YouTube URL"}
            style={{
              width: 26, height: 26, borderRadius: 6,
              background: editing ? "var(--site-accent)" : "transparent",
              color: editing ? "var(--site-bg)" : "var(--site-text-sub)",
              border: `1px solid ${editing ? "var(--site-accent)" : "var(--site-border-strong)"}`,
              cursor: "pointer", display: "inline-flex", alignItems: "center", justifyContent: "center",
              flexShrink: 0,
            }}
          >
            {editing ? <X size={12} /> : <Pencil size={12} />}
          </button>
        )}
      </div>

      {editing && (
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          <input
            type="text"
            value={url}
            onChange={(e) => { setUrl(e.target.value); setError(""); }}
            onKeyDown={(e) => { if (e.key === "Enter") save(); }}
            placeholder="Paste YouTube URL…"
            autoFocus
            style={{
              padding: "7px 10px", borderRadius: 6, fontSize: 12,
              background: "var(--site-bg)", color: "var(--site-text)",
              border: `1px solid ${error ? "#ef4444" : "var(--site-border-strong)"}`,
              outline: "none",
              fontFamily: "'IBM Plex Mono', monospace",
            }}
          />
          {error && (
            <div style={{ fontSize: 10.5, color: "#ef4444", lineHeight: 1.3 }}>{error}</div>
          )}
          <div style={{ display: "flex", gap: 6 }}>
            <button
              onClick={save}
              style={{
                flex: 1, padding: "6px 10px", borderRadius: 6,
                background: "var(--site-accent)", color: "var(--site-bg)",
                border: "none", cursor: "pointer", fontSize: 11, fontWeight: 700,
                letterSpacing: "0.05em", display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 4,
              }}
            >
              <Check size={12} /> Save
            </button>
            <button
              onClick={reset}
              title="Remove override — revert to the hardcoded ID"
              style={{
                padding: "6px 10px", borderRadius: 6,
                background: "transparent", color: "var(--site-text-sub)",
                border: "1px solid var(--site-border-strong)",
                cursor: "pointer", fontSize: 11, fontWeight: 600,
                display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 4,
              }}
            >
              <RotateCcw size={11} /> Reset
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
