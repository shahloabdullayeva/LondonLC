"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getSession } from "@/lib/store";
import Brand from "@/components/Brand";
import Link from "next/link";
import { quotes, type Quote } from "@/lib/quotes";

// Landing page: brand mark, tagline, sign in. Serif display type,
// "London" white and "LC" light purple. All the section navigation
// lives behind authentication.
const DISPLAY_FONT = `"Fraunces", "Iowan Old Style", Georgia, serif`;
const BODY_FONT = `"Inter", system-ui, sans-serif`;

export default function HomePage() {
  const router = useRouter();
  const [quote, setQuote] = useState<Quote | null>(null);

  useEffect(() => {
    const s = getSession();
    if (s) router.push(s.isAdmin ? "/admin/dashboard" : "/student/dashboard");
  }, [router]);

  useEffect(() => {
    if (quotes.length > 0) {
      setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
    }
  }, []);

  return (
    <div style={{
      minHeight: "100vh",
      background: "#0a0a0a",
      color: "#e5e5e5",
      fontFamily: BODY_FONT,
      display: "flex", flexDirection: "column",
    }}>
      {/* Subtle glow */}
      <div style={{
        position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0,
        background: "radial-gradient(ellipse at 50% -10%, rgba(255,255,255,0.05) 0%, transparent 60%), radial-gradient(ellipse at 80% 110%, rgba(255,255,255,0.03) 0%, transparent 55%)",
      }} />

      <nav style={{
        position: "relative", zIndex: 10,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "22px 40px",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}>
        <Brand href="/" size={20} />
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
        padding: "60px 32px 80px", textAlign: "center",
      }}>
        {/* Big centered brand mark */}
        <div style={{ marginBottom: 56 }}>
          <Brand size={72} />
        </div>

        <h1 style={{
          fontFamily: DISPLAY_FONT,
          fontSize: "clamp(3rem, 7.5vw, 5.5rem)",
          fontWeight: 300, letterSpacing: "-0.02em",
          color: "#fff", lineHeight: 1.05, marginBottom: 48, maxWidth: 900,
        }}>
          You deserve{" "}
          <em style={{ fontStyle: "italic", fontWeight: 300, color: "rgba(255,255,255,0.8)" }}>more.</em>
        </h1>

        {/* Rotating quote — picked client-side on mount */}
        <figure style={{
          margin: "0 0 48px",
          maxWidth: 620,
          minHeight: 72,
          display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "center",
          gap: 10,
        }}>
          {quote && (
            <>
              <blockquote style={{
                margin: 0,
                fontFamily: DISPLAY_FONT,
                fontStyle: "italic",
                fontWeight: 300,
                fontSize: "clamp(0.95rem, 1.6vw, 1.1rem)",
                lineHeight: 1.55,
                color: "rgba(255,255,255,0.65)",
              }}>
                &ldquo;{quote.text}&rdquo;
              </blockquote>
              {quote.author && (
                <figcaption style={{
                  fontSize: 10.5,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.35)",
                }}>
                  — {quote.author}
                </figcaption>
              )}
            </>
          )}
        </figure>

        <Link href="/auth/login" style={{
          display: "inline-flex", alignItems: "center", gap: 10,
          padding: "14px 36px",
          background: "#fff", color: "#0a0a0a",
          borderRadius: 999, fontSize: 13, fontWeight: 600,
          letterSpacing: "0.12em", textTransform: "uppercase",
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
