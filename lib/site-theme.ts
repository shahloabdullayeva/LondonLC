// Site-wide theme (landing, dashboards, auth). Totally separate from the
// per-test theme handled inside TestClient.tsx — students adjust their
// test theme for comprehension, this one is just a chrome preference.
"use client";
import { useEffect, useState, useSyncExternalStore } from "react";

export type SiteTheme = "dark" | "sepia" | "slate";
const STORAGE_KEY = "london-lc.site-theme";
const DEFAULT: SiteTheme = "dark";
const ORDER: SiteTheme[] = ["dark", "sepia", "slate"];

function readStored(): SiteTheme {
  if (typeof window === "undefined") return DEFAULT;
  const raw = window.localStorage.getItem(STORAGE_KEY);
  return raw === "sepia" || raw === "slate" || raw === "dark" ? raw : DEFAULT;
}

function apply(theme: SiteTheme) {
  if (typeof document === "undefined") return;
  document.documentElement.dataset.siteTheme = theme;
}

// External store for the current theme, so every consumer
// re-renders when the user cycles it. `storage` events cover
// cross-tab syncing; a custom event covers same-tab updates.
const listeners = new Set<() => void>();
function subscribe(cb: () => void): () => void {
  listeners.add(cb);
  const onStorage = (e: StorageEvent) => { if (e.key === STORAGE_KEY) cb(); };
  const onCustom = () => cb();
  window.addEventListener("storage", onStorage);
  window.addEventListener("london-lc:theme", onCustom);
  return () => {
    listeners.delete(cb);
    window.removeEventListener("storage", onStorage);
    window.removeEventListener("london-lc:theme", onCustom);
  };
}

/** Read the current theme (client-only). Falls back to dark on SSR. */
export function useSiteTheme(): [SiteTheme, (next: SiteTheme) => void, () => void] {
  // Guard against SSR: use `subscribe`/`getSnapshot` only on the client.
  const theme = useSyncExternalStore(
    subscribe,
    readStored,
    () => DEFAULT,
  );

  const setTheme = (next: SiteTheme) => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem(STORAGE_KEY, next);
    apply(next);
    window.dispatchEvent(new Event("london-lc:theme"));
  };

  const cycle = () => {
    const i = ORDER.indexOf(theme);
    setTheme(ORDER[(i + 1) % ORDER.length]);
  };

  return [theme, setTheme, cycle];
}

/**
 * Mount this once at the root so the stored theme is applied to
 * <html> before the first render. Doing this via a `useEffect`
 * inside the layout flashes the default theme briefly; keep the
 * inline script in layout.tsx as the real no-flash solution.
 */
export function useApplyStoredTheme() {
  const [theme] = useSiteTheme();
  useEffect(() => { apply(theme); }, [theme]);
}

// Re-export the storage key so the inline no-flash script in
// layout.tsx can reference the same string.
export const SITE_THEME_STORAGE_KEY = STORAGE_KEY;
// Intentionally not re-exporting useState — silences the import
// warning from tree-shakers if the hook is unused.
void useState;
