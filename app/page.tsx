"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getSession } from "@/lib/store";
import { quotes, type Quote } from "@/lib/quotes";
import Link from "next/link";

// A minimalist dark landing page. Typographic, no noisy gradients, one
// featured quote per visit, clean navigation into each section.
export default function HomePage() {
  const router = useRouter();
  const [quote, setQuote] = useState<Quote | null>(null);

  // If already signed in, skip the landing page.
  useEffect(() => {
    const s = getSession();
    if (s) router.push(s.isAdmin ? "/admin/dashboard" : "/student/dashboard");
  }, [router]);

  // Pick a quote on the client so each visit shows a different one. Doing
  // it in useEffect avoids a server/client mismatch warning.
  useEffect(() => {
    if (quotes.length > 0) setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
  }, []);

  return (
    <div style={{
      minHeight: "100vh",
      background: "#0a0a0a",
      color: "#e5e5e5",
      fontFamily: "Inter, system-ui, sans-serif",
      display: "flex",
      flexDirection: "column",
    }}>
      {/* Subtle starfield glow — not flashy, just adds depth */}
      <div style={{
        position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0,
        background: "radial-gradient(ellipse at 50% -10%, rgba(120,100,180,0.08) 0%, transparent 60%), radial-gradient(ellipse at 80% 110%, rgba(100,140,200,0.05) 0%, transparent 55%)",
      }} />

      {/* ── Nav ────────────────────────────────────────────── */}
      <nav style={{
        position: "relative", zIndex: 10,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "22px 40px",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}>
        <Link href="/" style={{ textDecoration: "none", color: "#fff", fontWeight: 700, fontSize: 18, letterSpacing: "0.02em" }}>
          London<span style={{ opacity: 0.5, margin: "0 4px" }}>·</span>LC
        </Link>
        <div className="home-top-nav" style={{ display: "flex", gap: 28, alignItems: "center" }}>
          <NavLink href="/auth/login">Listening</NavLink>
          <NavLink href="/auth/login">Reading</NavLink>
          <NavLink href="/writing" soon>Writing</NavLink>
          <NavLink href="/articles">Articles</NavLink>
          <NavLink href="/podcasts">Podcasts</NavLink>
          <NavLink href="/music">Music</NavLink>
          <Link href="/auth/login" style={{
            marginLeft: 12, padding: "8px 18px",
            border: "1px solid rgba(255,255,255,0.25)",
            borderRadius: 999, color: "#fff", fontSize: 13, fontWeight: 600,
            textDecoration: "none", transition: "all 0.2s",
          }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#fff";
              e.currentTarget.style.color = "#0a0a0a";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = "#fff";
            }}
          >
            Sign in
          </Link>
        </div>
      </nav>

      {/* ── Hero / Quote ───────────────────────────────────── */}
      <main style={{
        position: "relative", zIndex: 5,
        flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
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
          color: "#fff", lineHeight: 1.05, marginBottom: 28,
          maxWidth: 900,
        }}>
          Elevate your English, <br />
          <em style={{ fontStyle: "italic", fontWeight: 300, color: "rgba(255,255,255,0.75)" }}>one test at a time.</em>
        </h1>

        <p style={{
          fontSize: 15, color: "rgba(255,255,255,0.45)",
          maxWidth: 520, lineHeight: 1.7, marginBottom: 72,
        }}>
          Authentic Cambridge IELTS practice — Listening, Reading, and more.
          Exam-grade timing, real audio, instant band scoring.
        </p>

        {/* Rotating quote */}
        {quote && (
          <figure style={{
            margin: 0, maxWidth: 620, padding: "32px 40px",
            borderTop: "1px solid rgba(255,255,255,0.08)",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
          }}>
            <blockquote style={{
              margin: 0, fontSize: "clamp(1rem, 1.5vw, 1.15rem)",
              color: "rgba(255,255,255,0.78)", lineHeight: 1.7,
              fontStyle: "italic", fontWeight: 300, letterSpacing: "0.005em",
            }}>
              &ldquo;{quote.text}&rdquo;
            </blockquote>
            {quote.author && (
              <figcaption style={{
                marginTop: 14, fontSize: 12, letterSpacing: "0.2em",
                textTransform: "uppercase", color: "rgba(255,255,255,0.35)", fontWeight: 600,
              }}>
                — {quote.author}
              </figcaption>
            )}
          </figure>
        )}
      </main>

      {/* ── Section cards ──────────────────────────────────── */}
      <section style={{
        position: "relative", zIndex: 5, padding: "60px 40px 40px",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}>
        <div style={{
          maxWidth: 1160, margin: "0 auto",
          display: "grid", gap: 1,
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,255,255,0.06)",
        }}>
          <SectionCard label="IELTS" title="Listening" href="/auth/login" available />
          <SectionCard label="IELTS" title="Reading" href="/auth/login" available />
          <SectionCard label="IELTS" title="Writing" href="/writing" />
          <SectionCard label="Read" title="Articles" href="/articles" available />
          <SectionCard label="Listen" title="Podcasts" href="/podcasts" available />
          <SectionCard label="Listen" title="Music" href="/music" available />
        </div>
      </section>

      <footer style={{
        position: "relative", zIndex: 5,
        padding: "32px 40px", textAlign: "center",
        fontSize: 12, letterSpacing: "0.1em", color: "rgba(255,255,255,0.3)",
        borderTop: "1px solid rgba(255,255,255,0.06)", marginTop: 40,
      }}>
        © {new Date().getFullYear()} London Language Centre
      </footer>

      <style>{`
        @media (max-width: 860px) {
          .home-top-nav { display: none !important; }
        }
      `}</style>
    </div>
  );
}

function NavLink({ href, children, soon = false }: { href: string; children: React.ReactNode; soon?: boolean }) {
  return (
    <Link href={href} style={{
      fontSize: 13, color: "rgba(255,255,255,0.6)", textDecoration: "none",
      fontWeight: 500, transition: "color 0.2s",
      display: "inline-flex", alignItems: "center", gap: 6,
    }}
      onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
      onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.6)")}
    >
      {children}
      {soon && (
        <span style={{
          fontSize: 9, padding: "2px 6px", borderRadius: 999,
          border: "1px solid rgba(255,255,255,0.15)",
          color: "rgba(255,255,255,0.4)", letterSpacing: "0.08em",
        }}>SOON</span>
      )}
    </Link>
  );
}

function SectionCard({
  label, title, href, available = false,
}: {
  label: string; title: string; href: string; available?: boolean;
}) {
  return (
    <Link href={href} style={{
      display: "block", padding: "40px 28px",
      background: "#0a0a0a",
      textDecoration: "none", color: "inherit",
      transition: "background 0.2s",
      position: "relative",
    }}
      onMouseEnter={(e) => (e.currentTarget.style.background = "#151515")}
      onMouseLeave={(e) => (e.currentTarget.style.background = "#0a0a0a")}
    >
      <div style={{
        fontSize: 10, letterSpacing: "0.25em", textTransform: "uppercase",
        color: "rgba(255,255,255,0.3)", fontWeight: 600, marginBottom: 10,
      }}>
        {label}
      </div>
      <div style={{
        fontSize: 24, fontWeight: 300, letterSpacing: "-0.01em",
        color: "#fff", marginBottom: 4,
      }}>
        {title}
      </div>
      <div style={{ fontSize: 12, color: "rgba(255,255,255,0.4)" }}>
        {available ? "Enter →" : "Coming soon"}
      </div>
    </Link>
  );
}
