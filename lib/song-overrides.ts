// Admin-editable overrides for the music catalogue. Teachers can
// paste a fresh YouTube URL on the /music page when a hardcoded
// song is broken (wrong ID, embed disabled by the uploader, etc.)
// and the new ID is saved here.
//
// For v1 this is browser-local (localStorage). That means every
// teacher device / browser keeps its own overrides — good enough
// for experimenting. When the UX is finalised we'll migrate to a
// `song_overrides` table in Supabase so everyone sees the same
// curated list.
"use client";

const STORAGE_KEY = "london-lc.song-overrides";

export type SongOverride = {
  /** YouTube video ID — 11 chars, A-Za-z0-9 _- */
  youtubeId?: string;
  /** Optional manual duration override (seconds). */
  duration?: number;
};

type OverridesMap = Record<string, SongOverride>;

function readAll(): OverridesMap {
  if (typeof window === "undefined") return {};
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as OverridesMap) : {};
  } catch {
    return {};
  }
}

function writeAll(map: OverridesMap) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(map));
    window.dispatchEvent(new Event("london-lc:song-overrides"));
  } catch { /* quota exceeded — silently ignore */ }
}

export function getOverride(songId: string): SongOverride | undefined {
  return readAll()[songId];
}

export function setOverride(songId: string, override: SongOverride) {
  const all = readAll();
  all[songId] = override;
  writeAll(all);
}

export function clearOverride(songId: string) {
  const all = readAll();
  delete all[songId];
  writeAll(all);
}

export function getAllOverrides(): OverridesMap {
  return readAll();
}

/**
 * Accepts any reasonable YouTube URL shape (full, short, embed,
 * mobile, music, with extra query params) and returns the 11-char
 * video ID, or null if we can't recognise it.
 */
export function extractYouTubeId(input: string): string | null {
  const trimmed = input.trim();
  if (!trimmed) return null;

  // Bare 11-char ID
  if (/^[A-Za-z0-9_-]{11}$/.test(trimmed)) return trimmed;

  // Try URL parsing for everything else
  try {
    const u = new URL(trimmed);
    const host = u.hostname.replace(/^www\./, "").replace(/^m\./, "");

    // youtu.be/<id>
    if (host === "youtu.be") {
      const id = u.pathname.replace(/^\//, "").split("/")[0];
      if (/^[A-Za-z0-9_-]{11}$/.test(id)) return id;
    }

    if (host === "youtube.com" || host === "music.youtube.com" || host === "youtube-nocookie.com") {
      // /watch?v=<id>
      const v = u.searchParams.get("v");
      if (v && /^[A-Za-z0-9_-]{11}$/.test(v)) return v;
      // /embed/<id>, /shorts/<id>, /v/<id>
      const m = u.pathname.match(/^\/(?:embed|shorts|v)\/([A-Za-z0-9_-]{11})/);
      if (m) return m[1];
    }
  } catch { /* not a URL */ }

  return null;
}
