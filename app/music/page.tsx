"use client";
import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { Pencil, X, Check, RotateCcw } from "lucide-react";
import StudentShell from "@/components/StudentShell";
import LyricsPlayer from "@/components/LyricsPlayer";
import { starterSongs, type Song } from "@/data/songs";
import { getSession, type StudentSession } from "@/lib/store";
import { getAllOverrides, setOverride, clearOverride, extractYouTubeId } from "@/lib/song-overrides";

export default function MusicPage() {
  const router = useRouter();
  const [session, setSession] = useState<StudentSession | null>(null);
  const [selectedId, setSelectedId] = useState<string>(starterSongs[0]?.id || "");
  const [autoPlayNext, setAutoPlayNext] = useState(false);
  const [overridesTick, setOverridesTick] = useState(0);

  useEffect(() => {
    const s = getSession();
    if (!s) { router.push("/auth/login"); return; }
    setSession(s);
  }, [router]);

  useEffect(() => {
    const bump = () => setOverridesTick(t => t + 1);
    window.addEventListener("london-lc:song-overrides", bump);
    return () => window.removeEventListener("london-lc:song-overrides", bump);
  }, []);

  const isAdmin = !!session?.isAdmin;

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
  }, [overridesTick]);

  const selected = songs.find(s => s.id === selectedId) || songs[0];

  const playNext = () => {
    if (!songs.length) return;
    const idx = songs.findIndex(s => s.id === selected?.id);
    const next = songs[(idx + 1) % songs.length];
    if (next) { setAutoPlayNext(true); setSelectedId(next.id); }
  };

  const selectSong = (id: string) => { setAutoPlayNext(false); setSelectedId(id); };

  return (
    <StudentShell wide>
      <h1 className="h1" style={{ marginBottom: 32 }}><em>Music</em></h1>

      <div className="music-layout" style={{
        display: "flex", gap: 24, minHeight: 0,
      }}>
        <aside className="music-song-list" style={{
          width: 280, flexShrink: 0,
          display: "flex", flexDirection: "column", gap: 4,
          maxHeight: "calc(100vh - 240px)", overflowY: "auto",
        }}>
          <p style={{ fontFamily: "var(--ff-mono)", fontSize: 10, fontWeight: 500, color: "var(--text-3)", letterSpacing: "0.22em", textTransform: "uppercase", margin: "4px 12px 10px" }}>
            Catalogue · {songs.length}
          </p>
          {songs.map((s) => (
            <SongRow
              key={s.id}
              song={s}
              active={s.id === selectedId}
              isAdmin={isAdmin}
              onSelect={() => selectSong(s.id)}
            />
          ))}
        </aside>

        <main style={{ flex: 1, minWidth: 0, display: "flex" }}>
          {selected && <LyricsPlayer key={selected.id} song={selected} isAdmin={isAdmin} onEnded={playNext} autoPlay={autoPlayNext} />}
        </main>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .music-layout { flex-direction: column !important; }
          .music-song-list { width: 100% !important; flex-direction: row !important; overflow-x: auto !important; gap: 8px !important; -webkit-overflow-scrolling: touch; padding-bottom: 4px; max-height: none !important; }
          .music-song-list p { display: none !important; }
          .music-song-list > div { min-width: 200px; flex-shrink: 0; }
        }
      `}</style>
    </StudentShell>
  );
}

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

  return (
    <div style={{
      padding: "12px 14px", borderRadius: 8,
      background: active ? "var(--surface-2)" : "transparent",
      borderLeft: active ? "2px solid var(--accent)" : "2px solid transparent",
      transition: "background 0.15s",
      display: "flex", flexDirection: "column", gap: 6, flexShrink: 0,
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <button
          onClick={onSelect}
          style={{
            flex: 1, minWidth: 0, display: "flex", flexDirection: "column", alignItems: "flex-start",
            textAlign: "left", padding: 0, background: "transparent", border: "none",
            cursor: "pointer", fontFamily: "inherit",
          }}
        >
          <span style={{ fontFamily: "var(--ff-serif)", fontSize: 15, fontWeight: 500, lineHeight: 1.25, marginBottom: 2, color: active ? "var(--text)" : "var(--text-2)" }}>
            {song.title}
          </span>
          <span style={{ fontFamily: "var(--ff-mono)", fontSize: 10, color: "var(--text-3)", letterSpacing: "0.08em", textTransform: "uppercase" }}>
            {song.artist}
          </span>
        </button>
        {isAdmin && (
          <button
            onClick={() => { setEditing(e => !e); setError(""); }}
            title={editing ? "Close editor" : "Change YouTube URL"}
            className="btn icon ghost"
            style={{ flexShrink: 0 }}
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
              background: "var(--bg)", color: "var(--text)",
              border: `1px solid ${error ? "var(--danger)" : "var(--line-2)"}`,
              outline: "none", fontFamily: "var(--ff-mono)",
            }}
          />
          {error && (
            <div style={{ fontSize: 10.5, color: "var(--danger)", lineHeight: 1.3 }}>{error}</div>
          )}
          <div style={{ display: "flex", gap: 6 }}>
            <button onClick={save} className="btn primary sm" style={{ flex: 1 }}>
              <Check size={12} /> Save
            </button>
            <button onClick={reset} className="btn ghost sm" title="Remove override">
              <RotateCcw size={11} /> Reset
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
