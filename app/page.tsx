"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getSession } from "@/lib/store";
import Brand from "@/components/Brand";
import Link from "next/link";
import { quotes, type Quote } from "@/lib/quotes";

const DISPLAY = `"Fraunces", "Iowan Old Style", Georgia, serif`;
const BODY = `"Inter", system-ui, sans-serif`;

export default function LandingPage() {
  const router = useRouter();
  const [quote, setQuote] = useState<Quote | null>(null);

  useEffect(() => {
    const s = getSession();
    if (s) router.push(s.isAdmin ? "/admin/dashboard" : "/student/home");
  }, [router]);

  useEffect(() => {
    if (quotes.length > 0) {
      setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
    }
  }, []);

  return (
    <div style={{ minHeight: "100vh", background: "#0a0c0a", color: "#e4e9e2", fontFamily: BODY, display: "flex", flexDirection: "column" }}>
      <div style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0,
        background: "radial-gradient(1400px 600px at 100% 0%, #0f1e14 0%, transparent 60%), radial-gradient(1000px 500px at 0% 80%, #0f1812 0%, transparent 50%)",
      }} />

      <nav style={{ position: "relative", zIndex: 10, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "22px 40px", borderBottom: "1px solid #ffffff10" }}>
        <Brand href="/" size={20} />
        <Link href="/auth/login" style={{ padding: "8px 18px", border: "1px solid #ffffff1e", borderRadius: 999, color: "#e4e9e2", fontSize: 13, fontWeight: 500, textDecoration: "none" }}>
          Sign in
        </Link>
      </nav>

      <main style={{ position: "relative", zIndex: 5, flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "60px 32px 80px", textAlign: "center" }}>
        <div style={{ marginBottom: 56 }}>
          <Brand size={72} />
        </div>

        <figure style={{ margin: "0 0 48px", maxWidth: 620, minHeight: 72, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 10 }}>
          {quote && (
            <>
              <blockquote style={{ margin: 0, fontFamily: DISPLAY, fontStyle: "italic", fontWeight: 300, fontSize: "clamp(0.95rem, 1.6vw, 1.1rem)", lineHeight: 1.55, color: "var(--site-text-muted)" }}>
                &ldquo;{quote.text}&rdquo;
              </blockquote>
              {quote.author && (
                <figcaption style={{ fontSize: 10.5, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--site-text-sub)" }}>
                  — {quote.author}
                </figcaption>
              )}
            </>
          )}
        </figure>

        <div style={{ display: "flex", flexDirection: "column", gap: 16, alignItems: "center", width: "100%", maxWidth: 360 }}>
          <Link href="/auth/login" style={{
            display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
            width: "100%", padding: "13px 24px",
            background: "#e4e9e2", color: "#0a0c0a",
            borderRadius: 10, fontSize: 14, fontWeight: 600,
            textDecoration: "none",
          }}>
            Sign in
          </Link>
          <Link href="/auth/signup" style={{
            display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
            width: "100%", padding: "13px 24px",
            background: "#6fe4a5", color: "#0a0c0a",
            borderRadius: 10, fontSize: 14, fontWeight: 600,
            textDecoration: "none",
          }}>
            Create an account
          </Link>
        </div>

        <div style={{ marginTop: 32, padding: "16px 24px", border: "1px solid #ffffff12", borderRadius: 10, background: "#12171380", display: "inline-flex", alignItems: "center", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
          <span style={{ fontSize: 13, color: "#5c635c" }}>London LC student?</span>
          <Link href="/auth/login" style={{ fontSize: 13, fontWeight: 600, color: "#6fe4a5", textDecoration: "none" }}>
            Sign in with your student account →
          </Link>
        </div>
      </main>

      <footer style={{ position: "relative", zIndex: 5, padding: "24px 40px", textAlign: "center", fontSize: 12, letterSpacing: "0.1em", color: "var(--site-text-sub)", borderTop: "1px solid #ffffff10" }}>
        © {new Date().getFullYear()} London Language Centre
      </footer>
    </div>
  );
}
