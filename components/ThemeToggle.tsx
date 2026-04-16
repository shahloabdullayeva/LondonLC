// Small button that cycles the site theme dark → sepia → slate → dark.
// Drop into any nav / sidebar. Relies on the CSS variables defined in
// globals.css (the `html[data-site-theme="…"]` blocks).
"use client";
import { Moon, Sun, Cloud } from "lucide-react";
import { useSiteTheme } from "@/lib/site-theme";

type Props = {
  /** Icon size in px. Default 16. */
  size?: number;
  /** Accessible label override. */
  title?: string;
};

const ICONS = {
  dark: Moon,
  sepia: Sun,
  slate: Cloud,
};

const NEXT_LABEL = {
  dark: "Switch to sepia",
  sepia: "Switch to slate",
  slate: "Switch to dark",
};

export default function ThemeToggle({ size = 16, title }: Props) {
  const [theme, , cycle] = useSiteTheme();
  const Icon = ICONS[theme];
  const label = title ?? NEXT_LABEL[theme];

  return (
    <button
      onClick={cycle}
      title={label}
      aria-label={label}
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
      <Icon size={size} />
    </button>
  );
}
