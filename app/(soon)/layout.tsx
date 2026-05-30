"use client";
import Link from "next/link";
import Brand from "@/components/Brand";

// Shared layout for placeholder ("coming soon") sections: writing,
// articles, podcasts, music. Minimalist dark, matches the landing page.
export default function SoonLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      minHeight: "100vh", background: "#0a0a0a", color: "#e5e5e5",
      fontFamily: "-apple-system, BlinkMacSystemFont, system-ui, Roboto, Helvetica, Arial, sans-serif",
      display: "flex", flexDirection: "column",
    }}>
      <nav style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "22px 40px",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}>
        <Brand href="/" size={20} />
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
