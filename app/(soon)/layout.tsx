"use client";
import Link from "next/link";

// Shared layout for placeholder ("coming soon") sections: writing,
// articles, podcasts, music. Minimalist dark, matches the landing page.
export default function SoonLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      minHeight: "100vh", background: "#0a0a0a", color: "#e5e5e5",
      fontFamily: "Inter, system-ui, sans-serif",
      display: "flex", flexDirection: "column",
    }}>
      <nav style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "22px 40px",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}>
        <Link href="/" style={{
          textDecoration: "none", display: "inline-flex", alignItems: "baseline", gap: 4,
          fontFamily: `"Fraunces", "Iowan Old Style", Georgia, serif`, fontWeight: 500,
          fontSize: 20, letterSpacing: "-0.01em", lineHeight: 1,
        }}>
          <span style={{ color: "#fff" }}>London</span>
          <span style={{ color: "rgba(255,255,255,0.4)", fontSize: 17 }}>·</span>
          <span style={{ color: "#c4b5fd" }}>LC</span>
        </Link>
        <Link href="/" style={{
          fontSize: 13, color: "rgba(255,255,255,0.5)", textDecoration: "none", fontWeight: 500,
        }}>← Back home</Link>
      </nav>
      <div style={{ flex: 1, display: "flex" }}>{children}</div>
      <footer style={{
        padding: "24px 40px", textAlign: "center",
        fontSize: 12, letterSpacing: "0.1em", color: "rgba(255,255,255,0.3)",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}>
        © {new Date().getFullYear()} London Language Centre
      </footer>
    </div>
  );
}
