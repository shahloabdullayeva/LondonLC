"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { getSession } from "@/lib/store";
import Link from "next/link";

// Minimalist dark landing page. Just the brand, a short tagline, and a
// sign-in call to action. Every other surface (dashboard, quote, section
// picker) lives behind authentication.
export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    const s = getSession();
    if (s) router.push(s.isAdmin ? "/admin/dashboard" : "/student/dashboard");
  }, [router]);

  return (
    <div style={{
      minHeight: "100vh",
      background: "#0a0a0a",
      color: "#e5e5e5",
      fontFamily: "Inter, system-ui, sans-serif",
      display: "flex", flexDirection: "column",
    }}>
      {/* Subtle glow */}
      <div style={{
        position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0,
        background: "radial-gradient(ellipse at 50% -10%, rgba(120,100,180,0.08) 0%, transparent 60%), radial-gradient(ellipse at 80% 110%, rgba(100,140,200,0.05) 0%, transparent 55%)",
      }} />

      <nav style={{
        position: "relative", zIndex: 10,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "22px 40px",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}>
        <Link href="/" style={{ textDecoration: "none", color: "#fff", fontWeight: 700, fontSize: 18, letterSpacing: "0.02em" }}>
          London<span style={{ opacity: 0.5, margin: "0 4px" }}>·</span>LC
        </Link>
        <Link href="/auth/login" style={{
          padding: "8px 18px",
          border: "1px solid rgba(255,255,255,0.25)",
          borderRadius: 999, color: "#fff", fontSize: 13, fontWeight: 600,
          textDecoration: "none", transition: "all 0.2s",
        }}
          onMouseEnter={(e) => { e.currentTarget.style.background = "#fff"; e.currentTarget.style.color = "#0a0a0a"; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#fff"; }}
        >
          Sign in
        </Link>
      </nav>

      <main style={{
        position: "relative", zIndex: 5,
        flex: 1, display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        padding: "80px 32px", textAlign: "center",
      }}>
        <div style={{
          fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase",
          color: "rgba(255,255,255,0.3)", marginBottom: 40, fontWeight: 600,
        }}>
          London Language Centre
        </div>

        <h1 style={{
          fontSize: "clamp(2.6rem, 6.5vw, 5rem)",
          fontWeight: 200, letterSpacing: "-0.02em",
          color: "#fff", lineHeight: 1.05, marginBottom: 28, maxWidth: 900,
        }}>
          You deserve <em style={{ fontStyle: "italic", fontWeight: 300, color: "rgba(255,255,255,0.75)" }}>more.</em>
        </h1>

        <p style={{
          fontSize: 15, color: "rgba(255,255,255,0.45)",
          maxWidth: 520, lineHeight: 1.7, marginBottom: 40,
        }}>
          Authentic Cambridge IELTS practice. Exam-grade timing, real audio, instant band scoring.
        </p>

        <Link href="/auth/login" style={{
          display: "inline-flex", alignItems: "center", gap: 10,
          padding: "13px 32px",
          background: "#fff", color: "#0a0a0a",
          borderRadius: 999, fontSize: 13, fontWeight: 600,
          letterSpacing: "0.08em", textTransform: "uppercase",
          textDecoration: "none", transition: "transform 0.15s",
        }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-1px)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
        >
          Sign in →
        </Link>
      </main>

      <footer style={{
        position: "relative", zIndex: 5,
        padding: "24px 40px", textAlign: "center",
        fontSize: 12, letterSpacing: "0.1em", color: "rgba(255,255,255,0.3)",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}>
        © {new Date().getFullYear()} London Language Centre
      </footer>
    </div>
  );
}
