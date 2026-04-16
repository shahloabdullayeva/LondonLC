// Theme picker — opens a small panel with the 3 preset swatches
// (dark / sepia / slate) plus a custom colour picker. The custom
// option derives readable text / card / border from the chosen
// background automatically, and optionally lets the user override
// the text and accent colours too.
"use client";
import { useEffect, useRef, useState } from "react";
import { Palette, X } from "lucide-react";
import { useSiteTheme, type PresetName, type ThemeChoice } from "@/lib/site-theme";

type Props = {
  size?: number;
  /** Anchor the popover to the right edge (default) or left. */
  align?: "right" | "left";
};

const PRESETS: { name: PresetName; label: string; swatch: string[] }[] = [
  { name: "dark",  label: "Dark",   swatch: ["#0a0a0a", "#151515", "#c4b5fd"] },
  { name: "sepia", label: "Sepia",  swatch: ["#f5ecdb", "#ede2cc", "#8b5a3c"] },
  { name: "slate", label: "Slate",  swatch: ["#e7edf3", "#dce5ef", "#4c5f7f"] },
];

export default function ThemeToggle({ size = 16, align = "right" }: Props) {
  const { theme, setTheme } = useSiteTheme();
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const anchorRef = useRef<HTMLButtonElement | null>(null);

  // Close on outside click / Escape.
  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      const t = e.target as Node;
      if (panelRef.current?.contains(t)) return;
      if (anchorRef.current?.contains(t)) return;
      setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const activePreset = theme.kind === "preset" ? theme.name : null;
  const customBg = theme.kind === "custom" ? theme.bg : "#2a1f38";
  const customText = theme.kind === "custom" ? theme.text ?? "" : "";
  const customAccent = theme.kind === "custom" ? theme.accent ?? "" : "";

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <button
        ref={anchorRef}
        onClick={() => setOpen(o => !o)}
        title="Theme"
        aria-label="Change theme"
        style={{
          display: "inline-flex", alignItems: "center", justifyContent: "center",
          width: size + 18, height: size + 18,
          background: "var(--site-accent-dim)",
          color: "var(--site-accent)",
          border: "1px solid var(--site-accent-border)",
          borderRadius: 10,
          cursor: "pointer",
          transition: "transform 0.15s, background 0.15s",
        }}
        onMouseDown={(e) => (e.currentTarget.style.transform = "scale(0.94)")}
        onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        <Palette size={size} />
      </button>

      {open && (
        <div
          ref={panelRef}
          style={{
            position: "absolute", zIndex: 1000, top: "calc(100% + 8px)",
            [align]: 0,
            width: 280,
            background: "var(--site-card)",
            border: "1px solid var(--site-border-strong)",
            borderRadius: 14,
            padding: 16,
            boxShadow: "0 12px 28px rgba(0,0,0,0.35)",
            color: "var(--site-text)",
            fontFamily: "Inter, system-ui, sans-serif",
          }}
        >
          {/* Header */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--site-text-sub)" }}>
              Theme
            </span>
            <button onClick={() => setOpen(false)} aria-label="Close"
              style={{ background: "transparent", border: "none", cursor: "pointer", color: "var(--site-text-muted)", display: "inline-flex", alignItems: "center", padding: 2 }}>
              <X size={14} />
            </button>
          </div>

          {/* Presets */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8, marginBottom: 14 }}>
            {PRESETS.map((p) => (
              <button
                key={p.name}
                onClick={() => setTheme({ kind: "preset", name: p.name })}
                style={{
                  textAlign: "left",
                  padding: 10,
                  borderRadius: 10,
                  background: p.swatch[1],
                  border: `2px solid ${activePreset === p.name ? "var(--site-accent)" : "transparent"}`,
                  cursor: "pointer",
                  color: p.swatch[0] === "#0a0a0a" ? "#fff" : "#111",
                  fontSize: 11,
                  fontWeight: 600,
                }}
              >
                <div style={{ display: "flex", gap: 3, marginBottom: 6 }}>
                  {p.swatch.map((c, i) => (
                    <span key={i} style={{ width: 12, height: 12, borderRadius: 3, background: c, border: "1px solid rgba(0,0,0,0.08)" }} />
                  ))}
                </div>
                {p.label}
              </button>
            ))}
          </div>

          {/* Divider */}
          <div style={{ height: 1, background: "var(--site-border)", margin: "4px 0 14px" }} />

          {/* Custom */}
          <div style={{ marginBottom: 8, fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--site-text-sub)" }}>
            Custom
          </div>

          <Row
            label="Background"
            value={customBg}
            onChange={(v) => setTheme({ kind: "custom", bg: v, text: customText || undefined, accent: customAccent || undefined })}
          />
          <Row
            label="Text (optional)"
            value={customText}
            placeholder="auto"
            onChange={(v) => setTheme({ kind: "custom", bg: customBg, text: v || undefined, accent: customAccent || undefined })}
          />
          <Row
            label="Accent (optional)"
            value={customAccent}
            placeholder="auto"
            onChange={(v) => setTheme({ kind: "custom", bg: customBg, text: customText || undefined, accent: v || undefined })}
          />

          <p style={{ margin: "10px 0 0", fontSize: 10.5, lineHeight: 1.55, color: "var(--site-text-sub)" }}>
            Pick any background. Text and borders adjust automatically for readability.
          </p>
        </div>
      )}
    </div>
  );
}

// Small colour-picker + hex-input row. Keeps the picker and the text
// field in sync — type a hex, see it update; click the swatch, see
// the hex update.
function Row({ label, value, placeholder, onChange }: {
  label: string;
  value: string;
  placeholder?: string;
  onChange: (v: string) => void;
}) {
  // The <input type="color"> expects a 7-char hex. If the user's value
  // is blank (auto) we default the picker to white so it looks neutral.
  const pickerValue = /^#[0-9a-fA-F]{6}$/.test(value) ? value : "#ffffff";

  return (
    <label style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
      <span style={{ flex: 1, fontSize: 12, color: "var(--site-text-muted)" }}>{label}</span>
      <input
        type="color"
        value={pickerValue}
        onChange={(e) => onChange(e.target.value)}
        style={{
          width: 28, height: 28, padding: 0, border: "1px solid var(--site-border-strong)",
          borderRadius: 6, cursor: "pointer", background: "transparent",
        }}
      />
      <input
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={(e) => {
          const v = e.target.value.trim();
          // Only push on a valid 3 or 6-char hex (or empty = auto).
          if (v === "" || /^#?[0-9a-fA-F]{3}$/.test(v) || /^#?[0-9a-fA-F]{6}$/.test(v)) {
            const normalised = v === "" ? "" : (v.startsWith("#") ? v : `#${v}`);
            onChange(normalised);
          }
        }}
        style={{
          width: 80, padding: "5px 8px", fontSize: 12,
          background: "var(--site-bg)",
          color: "var(--site-text)",
          border: "1px solid var(--site-border-strong)",
          borderRadius: 6, outline: "none",
          fontFamily: "'IBM Plex Mono', monospace",
        }}
      />
    </label>
  );
}
