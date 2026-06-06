"use client";
import { useEffect, useSyncExternalStore } from "react";

export type PresetName = "terminal" | "academy" | "dusk";
export type ThemeChoice =
  | { kind: "preset"; name: PresetName }
  | { kind: "custom"; bg: string; text?: string; accent?: string };

const STORAGE_KEY = "london-lc.site-theme";
const DEFAULT: ThemeChoice = { kind: "preset", name: "terminal" };
const ORDER: PresetName[] = ["terminal", "academy", "dusk"];

function parseStored(): ThemeChoice {
  if (typeof window === "undefined") return DEFAULT;
  const raw = window.localStorage.getItem(STORAGE_KEY);
  if (!raw) return DEFAULT;
  if (raw === "terminal" || raw === "academy" || raw === "dusk") {
    return { kind: "preset", name: raw };
  }
  if (raw === "dark") return { kind: "preset", name: "terminal" };
  if (raw === "sepia") return { kind: "preset", name: "academy" };
  if (raw === "slate") return { kind: "preset", name: "dusk" };
  try {
    const parsed = JSON.parse(raw) as ThemeChoice;
    if (parsed && parsed.kind === "preset" && ORDER.includes(parsed.name)) return parsed;
    if (parsed && parsed.kind === "custom" && typeof parsed.bg === "string") return parsed;
  } catch {/* fall through */}
  return DEFAULT;
}

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

function derivePalette(bgHex: string, textOverride?: string, accentOverride?: string) {
  const bg = hexToRgb(bgHex);
  const isDark = luminance(bg) < 0.5;

  const textRgb = textOverride
    ? hexToRgb(textOverride)
    : (isDark ? [255, 255, 255] as [number, number, number] : [24, 24, 24] as [number, number, number]);
  const accent = accentOverride ?? (isDark ? "#c4b5fd" : "#4c5f7f");

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


function applyToDom(c: ThemeChoice) {
  if (typeof document === "undefined") return;
  const html = document.documentElement;
  if (c.kind === "preset") {
    html.dataset.siteTheme = c.name;
    const style = html.style;
    for (let i = style.length - 1; i >= 0; i--) {
      const prop = style[i];
      if (prop.startsWith("--site-")) style.removeProperty(prop);
    }
  } else {
    html.dataset.siteTheme = "custom";
    const palette = derivePalette(c.bg, c.text, c.accent);
    for (const [k, v] of Object.entries(palette)) {
      html.style.setProperty(k, v);
    }
  }
}

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


export function useSiteTheme(): {
  theme: ThemeChoice;
  setTheme: (next: ThemeChoice) => void;
  cyclePreset: () => void;
} {
  const theme = useSyncExternalStore(subscribe, readStored, () => DEFAULT);

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
