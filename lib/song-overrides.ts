"use client";

const STORAGE_KEY = "london-lc.song-overrides";

export type SongOverride = {
  youtubeId?: string;
  duration?: number;
  offset?: number;
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

export function extractYouTubeId(input: string): string | null {
  const trimmed = input.trim();
  if (!trimmed) return null;

  if (/^[A-Za-z0-9_-]{11}$/.test(trimmed)) return trimmed;

  try {
    const u = new URL(trimmed);
    const host = u.hostname.replace(/^www\./, "").replace(/^m\./, "");

    if (host === "youtu.be") {
      const id = u.pathname.replace(/^\//, "").split("/")[0];
      if (/^[A-Za-z0-9_-]{11}$/.test(id)) return id;
    }

    if (host === "youtube.com" || host === "music.youtube.com" || host === "youtube-nocookie.com") {
      const v = u.searchParams.get("v");
      if (v && /^[A-Za-z0-9_-]{11}$/.test(v)) return v;
      const m = u.pathname.match(/^\/(?:embed|shorts|v)\/([A-Za-z0-9_-]{11})/);
      if (m) return m[1];
    }
  } catch { /* not a URL */ }

  return null;
}
