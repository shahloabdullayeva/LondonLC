"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getSession } from "@/lib/store";
import Brand from "@/components/Brand";
import Link from "next/link";
import { quotes, type Quote } from "@/lib/quotes";

const DISPLAY = `-apple-system, BlinkMacSystemFont, system-ui, Roboto, Helvetica, Arial, sans-serif`;
const BODY = `-apple-system, BlinkMacSystemFont, system-ui, Roboto, Helvetica, Arial, sans-serif`;

export default function LandingPage() {
  const router = useRouter();
  const [quote, setQuote] = useState<Quote | null>(null);

  useEffect(() => {
    const s = getSession();
    if (s) router.push(s.isAdmin ? "/admin/dashboard" : "/student/profile");
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

        <Link href="/auth/login" style={{
          display: "inline-flex", alignItems: "center", gap: 10,
          padding: "14px 36px",
          background: "#e4e9e2", color: "#0a0c0a",
          borderRadius: 999, fontSize: 13, fontWeight: 600,
          letterSpacing: "0.12em", textTransform: "uppercase",
          textDecoration: "none",
        }}>
          Sign in →
        </Link>
      </main>

      <footer style={{ position: "relative", zIndex: 5, padding: "24px 40px", textAlign: "center", fontSize: 12, letterSpacing: "0.1em", color: "var(--site-text-sub)", borderTop: "1px solid #ffffff10" }}>
        © {new Date().getFullYear()} London Language Centre
      </footer>
    </div>
  );
}
