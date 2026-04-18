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
      background: "var(--site-bg)",
      color: "var(--site-text)",
      fontFamily: BODY_FONT,
      display: "flex", flexDirection: "column",
    }}>
      {/* Subtle glow */}
      <div style={{
        position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0,
        background: "radial-gradient(ellipse at 50% -10%, var(--site-glow-1) 0%, transparent 60%), radial-gradient(ellipse at 80% 110%, var(--site-glow-2) 0%, transparent 55%)",
      }} />

      <nav style={{
        position: "relative", zIndex: 10,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "22px 40px",
        borderBottom: "1px solid var(--site-border)",
      }}>
        <Brand href="/" size={20} />
        <Link href="/auth/login" style={{
          padding: "8px 18px",
          marginRight: 52, /* leave room for the floating theme toggle */
          border: "1px solid var(--site-border-strong)",
          borderRadius: 999, color: "var(--site-text)", fontSize: 13, fontWeight: 600,
          textDecoration: "none", transition: "all 0.2s",
          background: "transparent",
        }}
          onMouseEnter={(e) => { e.currentTarget.style.background = "var(--site-text)"; e.currentTarget.style.color = "var(--site-bg)"; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "var(--site-text)"; }}
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
          color: "var(--site-text)", lineHeight: 1.05, marginBottom: 48, maxWidth: 900,
        }}>
          You deserve{" "}
          <em style={{ fontStyle: "italic", fontWeight: 300, color: "var(--site-text-muted)" }}>more.</em>
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
                color: "var(--site-text-muted)",
              }}>
                &ldquo;{quote.text}&rdquo;
              </blockquote>
              {quote.author && (
                <figcaption style={{
                  fontSize: 10.5,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "var(--site-text-sub)",
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
          background: "var(--site-text)", color: "var(--site-bg)",
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
        fontSize: 12, letterSpacing: "0.1em", color: "var(--site-text-sub)",
        borderTop: "1px solid var(--site-border)",
      }}>
        © {new Date().getFullYear()} London Language Centre
      </footer>
    </div>
  );
}
