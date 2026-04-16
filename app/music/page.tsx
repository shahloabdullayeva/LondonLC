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
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Music } from "lucide-react";
import Brand from "@/components/Brand";
import LyricsPlayer from "@/components/LyricsPlayer";
import { starterSongs, type Song } from "@/data/songs";
import { getSession } from "@/lib/store";

const DISPLAY_FONT = `"Fraunces", "Iowan Old Style", Georgia, serif`;
const BODY_FONT = `"Inter", system-ui, sans-serif`;

export default function MusicPage() {
  const router = useRouter();
  const [songs] = useState<Song[]>(starterSongs);
  const [selectedId, setSelectedId] = useState<string>(starterSongs[0]?.id || "");

  // Require login — anyone signed in can access. Both students and
  // teachers (admins) can use the music page for now.
  useEffect(() => {
    const s = getSession();
    if (!s) router.push("/auth/login");
  }, [router]);

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
      <header style={{ padding: "32px 36px 20px", maxWidth: 1200, margin: "0 auto", width: "100%" }}>
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

      {/* Main layout */}
      <div className="music-layout" style={{
        flex: 1, display: "flex", gap: 24,
        padding: "8px 36px 56px",
        maxWidth: 1200, margin: "0 auto", width: "100%",
      }}>
        {/* Song list */}
        <aside className="music-song-list" style={{
          width: 280, flexShrink: 0,
          display: "flex", flexDirection: "column", gap: 4,
        }}>
          <p style={{ fontSize: 10, fontWeight: 700, color: "var(--site-text-sub)", letterSpacing: "0.22em", textTransform: "uppercase", margin: "4px 12px 10px" }}>
            Catalogue · {songs.length}
          </p>
          {songs.map((s) => {
            const active = s.id === selectedId;
            return (
              <button
                key={s.id}
                onClick={() => setSelectedId(s.id)}
                style={{
                  display: "flex", flexDirection: "column", alignItems: "flex-start",
                  textAlign: "left", padding: "10px 14px", borderRadius: 10,
                  background: active ? "var(--site-accent-dim)" : "transparent",
                  border: `1px solid ${active ? "var(--site-accent-border)" : "transparent"}`,
                  cursor: "pointer", transition: "all 0.15s",
                  color: active ? "var(--site-accent)" : "var(--site-text-muted)",
                  fontFamily: "inherit",
                }}
                onMouseEnter={(e) => { if (!active) e.currentTarget.style.background = "var(--site-border)"; }}
                onMouseLeave={(e) => { if (!active) e.currentTarget.style.background = "transparent"; }}
              >
                <span style={{ fontSize: 14, fontWeight: 600, lineHeight: 1.2, marginBottom: 2 }}>
                  {s.title}
                </span>
                <span style={{ fontSize: 11, color: "var(--site-text-sub)", letterSpacing: "0.04em" }}>
                  {s.artist}
                </span>
              </button>
            );
          })}
        </aside>

        {/* Player */}
        <main style={{ flex: 1, minWidth: 0, display: "flex", justifyContent: "center" }}>
          {selected && <LyricsPlayer key={selected.id} song={selected} />}
        </main>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .music-layout { flex-direction: column !important; padding: 8px 16px 40px !important; }
          .music-song-list { width: 100% !important; flex-direction: row !important; overflow-x: auto !important; gap: 8px !important; -webkit-overflow-scrolling: touch; padding-bottom: 4px; }
          .music-song-list p { display: none !important; }
          .music-song-list button { min-width: 200px; flex-shrink: 0; }
        }
      `}</style>
    </div>
  );
}
