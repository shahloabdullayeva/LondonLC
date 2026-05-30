// Site-wide theme (landing, dashboards, auth). Totally separate from
// the per-test theme handled inside TestClient.tsx — students adjust
// their test theme for comprehension, this one is just a chrome
// preference.
//
// There are two kinds of theme:
//   • `preset` — one of "dark" / "sepia" / "slate" (hand-tuned palettes
//     defined in globals.css as html[data-site-theme="…"] blocks).
//   • `custom` — a user-picked base background. Text / card / border
//     colors are auto-computed from the base's luminance so any hex
//     produces a legible UI. Text can optionally be overridden.
"use client";
import { useEffect, useSyncExternalStore } from "react";

export type PresetName = "terminal" | "academy" | "dusk";
export type ThemeChoice =
  | { kind: "preset"; name: PresetName }
  | { kind: "custom"; bg: string; text?: string; accent?: string };

const STORAGE_KEY = "london-lc.site-theme";
const DEFAULT: ThemeChoice = { kind: "preset", name: "terminal" };
const ORDER: PresetName[] = ["terminal", "academy", "dusk"];

// ── Persistence ──────────────────────────────────────────────────────
function parseStored(): ThemeChoice {
  if (typeof window === "undefined") return DEFAULT;
  const raw = window.localStorage.getItem(STORAGE_KEY);
  if (!raw) return DEFAULT;
  // Legacy (v1): plain preset name stored as a bare string.
  if (raw === "terminal" || raw === "academy" || raw === "dusk") {
    return { kind: "preset", name: raw };
  }
  // Migration from old preset names.
  if (raw === "dark") return { kind: "preset", name: "terminal" };
  if (raw === "sepia") return { kind: "preset", name: "academy" };
  if (raw === "slate") return { kind: "preset", name: "dusk" };
  // v2: JSON-serialised ThemeChoice.
  try {
    const parsed = JSON.parse(raw) as ThemeChoice;
    if (parsed && parsed.kind === "preset" && ORDER.includes(parsed.name)) return parsed;
    if (parsed && parsed.kind === "custom" && typeof parsed.bg === "string") return parsed;
  } catch {/* fall through */}
  return DEFAULT;
}

// Cached snapshot — `useSyncExternalStore` compares snapshots with
// Object.is, so `getSnapshot` MUST return a stable reference between
// actual changes. Without this cache, parseStored() would return a
// fresh object on every render and we'd infinite-loop.
let cachedSnapshot: ThemeChoice | null = null;
function readStored(): ThemeChoice {
  if (cachedSnapshot !== null) return cachedSnapshot;
  cachedSnapshot = parseStored();
  return cachedSnapshot;
}
function invalidateSnapshot() {
  cachedSnapshot = null;
}

function writeStored(c: ThemeChoice) {
  if (typeof window === "undefined") return;
  if (c.kind === "preset") {
    window.localStorage.setItem(STORAGE_KEY, c.name);
  } else {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(c));
  }
  invalidateSnapshot();
}

// ── Colour maths for custom themes ───────────────────────────────────

function hexToRgb(hex: string): [number, number, number] {
  let h = hex.replace("#", "").trim();
  if (h.length === 3) h = h.split("").map((c) => c + c).join("");
  const n = parseInt(h, 16);
  if (Number.isNaN(n) || h.length !== 6) return [0, 0, 0];
  return [(n >> 16) & 0xff, (n >> 8) & 0xff, n & 0xff];
}

function rgbToHex(r: number, g: number, b: number): string {
  const clamp = (n: number) => Math.max(0, Math.min(255, Math.round(n)));
  return "#" + [r, g, b].map((x) => clamp(x).toString(16).padStart(2, "0")).join("");
}

/** Standard relative luminance (0 = black, 1 = white). */
function luminance([r, g, b]: [number, number, number]): number {
  const ch = (v: number) => {
    const s = v / 255;
    return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
  };
  return 0.2126 * ch(r) + 0.7152 * ch(g) + 0.0722 * ch(b);
}

function mix(a: [number, number, number], b: [number, number, number], t: number): [number, number, number] {
  return [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t];
}

/**
 * Derive a full palette from a base background hex.
 * Light bg → dark text / slightly darker card / faint dark borders.
 * Dark  bg → light text / slightly lighter card / faint white borders.
 */
function derivePalette(bgHex: string, textOverride?: string, accentOverride?: string) {
  const bg = hexToRgb(bgHex);
  const isDark = luminance(bg) < 0.5;

  const textRgb = textOverride
    ? hexToRgb(textOverride)
    : (isDark ? [255, 255, 255] as [number, number, number] : [24, 24, 24] as [number, number, number]);
  const accent = accentOverride ?? (isDark ? "#c4b5fd" : "#4c5f7f");

  // Push card slightly towards white (on dark) or towards black (on light)
  // so surfaces lift off the background without clashing.
  const card   = mix(bg, isDark ? [255, 255, 255] : [0, 0, 0], isDark ? 0.05 : 0.04);
  const card2  = mix(bg, isDark ? [255, 255, 255] : [0, 0, 0], isDark ? 0.09 : 0.08);
  const nav    = mix(bg, isDark ? [255, 255, 255] : [0, 0, 0], isDark ? 0.03 : 0.03);
  const elev   = mix(bg, isDark ? [255, 255, 255] : [0, 0, 0], isDark ? 0.02 : 0.03);

  const textRgbStr = (a: number) => `rgba(${textRgb[0]},${textRgb[1]},${textRgb[2]},${a})`;

  return {
    "--site-bg":             bgHex,
    "--site-bg-elevated":    rgbToHex(...elev),
    "--site-card":           rgbToHex(...card),
    "--site-card-2":         rgbToHex(...card2),
    "--site-text":           textRgbStr(1),
    "--site-text-muted":     textRgbStr(0.65),
    "--site-text-sub":       textRgbStr(0.42),
    "--site-border":         textRgbStr(0.1),
    "--site-border-strong":  textRgbStr(0.2),
    "--site-accent":         accent,
    "--site-accent-dim":     textRgbStr(0.08), // neutral dim accent overlay
    "--site-accent-border":  textRgbStr(0.18),
    "--site-nav":            rgbToHex(...nav),
    "--site-glow-1":         textRgbStr(0.04),
    "--site-glow-2":         textRgbStr(0.02),
  } as const;
}

// ── Applying to the DOM ──────────────────────────────────────────────

function applyToDom(c: ThemeChoice) {
  if (typeof document === "undefined") return;
  const html = document.documentElement;
  if (c.kind === "preset") {
    html.dataset.siteTheme = c.name;
    // Clear any leftover inline vars from a previous custom theme.
    const style = html.style;
    for (let i = style.length - 1; i >= 0; i--) {
      const prop = style[i];
      if (prop.startsWith("--site-")) style.removeProperty(prop);
    }
  } else {
    // data-site-theme still set so nav/card selectors keep firing,
    // but inline styles override the preset vars.
    html.dataset.siteTheme = "custom";
    const palette = derivePalette(c.bg, c.text, c.accent);
    for (const [k, v] of Object.entries(palette)) {
      html.style.setProperty(k, v);
    }
  }
}

// ── External store so every consumer re-renders on theme change. ─────
const listeners = new Set<() => void>();
function notify() {
  invalidateSnapshot();
  listeners.forEach((cb) => cb());
}
function subscribe(cb: () => void): () => void {
  listeners.add(cb);
  const onStorage = (e: StorageEvent) => { if (e.key === STORAGE_KEY) notify(); };
  const onCustom = () => notify();
  window.addEventListener("storage", onStorage);
  window.addEventListener("london-lc:theme", onCustom);
  return () => {
    listeners.delete(cb);
    window.removeEventListener("storage", onStorage);
    window.removeEventListener("london-lc:theme", onCustom);
  };
}

// ── Public hook ──────────────────────────────────────────────────────

export function useSiteTheme(): {
  theme: ThemeChoice;
  setTheme: (next: ThemeChoice) => void;
  cyclePreset: () => void;
} {
  const theme = useSyncExternalStore(subscribe, readStored, () => DEFAULT);

  // Re-apply on change (covers tabs that didn't write the change themselves).
  useEffect(() => { applyToDom(theme); }, [theme]);

  const setTheme = (next: ThemeChoice) => {
    if (typeof window === "undefined") return;
    writeStored(next);
    applyToDom(next);
    window.dispatchEvent(new Event("london-lc:theme"));
  };

  const cyclePreset = () => {
    const current = theme.kind === "preset" ? theme.name : "terminal";
    const i = ORDER.indexOf(current);
    setTheme({ kind: "preset", name: ORDER[(i + 1) % ORDER.length] });
  };

  return { theme, setTheme, cyclePreset };
}
