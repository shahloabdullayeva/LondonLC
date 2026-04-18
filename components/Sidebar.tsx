"use client";
import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { BookOpen, Headphones, PenLine, FileText, Mic, Music, ChevronRight, PanelLeftOpen, PanelLeftClose } from "lucide-react";

const links = [
  { icon: Headphones, label: "Listening", href: "/student/dashboard", query: "listening" },
  { icon: BookOpen, label: "Reading", href: "/student/dashboard", query: "reading" },
  { icon: PenLine, label: "Writing", href: "#", soon: true },
  { icon: FileText, label: "Articles", href: "/articles" },
  { icon: Mic, label: "Podcasts", href: "/podcasts" },
  { icon: Music, label: "Music", href: "/music" },
];

function isActive(path: string, link: typeof links[0]) {
  if (link.query) return path.startsWith("/student/dashboard");
  return path === link.href || path.startsWith(link.href + "/");
}

const HIDE_ON = [/^\/$/, /^\/auth\//, /^\/student\/test\//, /^\/admin\/practice\//, /^\/admin\/dashboard/];

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const path = usePathname();

  if (HIDE_ON.some(re => re.test(path))) return null;

  return (
    <>
      {/* Nudge nav bars right so the toggle doesn't cover the logo */}
      <style>{`
        body nav { padding-left: 60px !important; }
      `}</style>

      {/* Toggle button — always visible */}
      <button
        onClick={() => setOpen(o => !o)}
        aria-label={open ? "Close menu" : "Open menu"}
        style={{
          position: "fixed", top: 14, left: 14, zIndex: 10001,
          width: 34, height: 34, borderRadius: 8,
          background: "var(--site-card)", border: "1px solid var(--site-border)",
          cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
          color: "var(--site-text-muted)", transition: "background 0.15s",
        }}
        onMouseEnter={e => { e.currentTarget.style.background = "var(--site-card-2)"; }}
        onMouseLeave={e => { e.currentTarget.style.background = "var(--site-card)"; }}
      >
        {open ? <PanelLeftClose size={16} /> : <PanelLeftOpen size={16} />}
      </button>

      {/* Overlay (mobile & desktop) */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          style={{
            position: "fixed", inset: 0, zIndex: 10000,
            background: "rgba(0,0,0,0.4)", transition: "opacity 0.2s",
          }}
        />
      )}

      {/* Sidebar panel */}
      <aside
        style={{
          position: "fixed", top: 0, left: 0, bottom: 0, zIndex: 10001,
          width: 220, background: "var(--site-nav)", borderRight: "1px solid var(--site-border)",
          padding: "64px 12px 24px", display: "flex", flexDirection: "column", gap: 2,
          transform: open ? "translateX(0)" : "translateX(-100%)",
          transition: "transform 0.25s ease",
          overflowY: "auto",
        }}
      >
        <p style={{
          fontSize: 10, fontWeight: 700, color: "var(--site-text-sub)",
          letterSpacing: "0.2em", textTransform: "uppercase",
          margin: "0 0 10px", paddingLeft: 10,
        }}>
          Sections
        </p>

        {links.map(link => {
          const active = isActive(path, link);
          const Icon = link.icon;
          return (
            <button
              key={link.label}
              onClick={() => {
                if (link.soon) return;
                if (link.query) {
                  router.push(`${link.href}?view=${link.query}`);
                } else {
                  router.push(link.href);
                }
                setOpen(false);
              }}
              style={{
                display: "flex", alignItems: "center", gap: 10,
                padding: "11px 14px", borderRadius: 11, border: "none", cursor: link.soon ? "default" : "pointer",
                fontWeight: 600, fontSize: 14, textAlign: "left",
                background: active ? "var(--site-border)" : "transparent",
                color: active ? "var(--site-text)" : "var(--site-text-muted)",
                borderLeft: active ? "2px solid #ffffff" : "2px solid transparent",
                transition: "background 0.18s, color 0.18s",
                fontFamily: "inherit",
                opacity: link.soon ? 0.5 : 1,
              }}
              onMouseEnter={e => { if (!active && !link.soon) e.currentTarget.style.background = "var(--site-border)"; }}
              onMouseLeave={e => { if (!active && !link.soon) e.currentTarget.style.background = "transparent"; }}
            >
              <Icon size={16} />
              <span style={{ flex: 1 }}>{link.label}</span>
              {link.soon && (
                <span style={{
                  fontSize: 9, padding: "2px 6px", borderRadius: 999,
                  border: "1px solid var(--site-border-strong)",
                  color: "var(--site-text-muted)", letterSpacing: "0.08em",
                }}>SOON</span>
              )}
              {!link.soon && <ChevronRight size={14} color="var(--site-text-sub)" />}
            </button>
          );
        })}
      </aside>
    </>
  );
}
