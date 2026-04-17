// /articles — curated reading content for English learners.
// Flashcard grid: each article is a card with an image + title.
// Click a card → full reader view opens with comfortable
// typography and font-size controls.
"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FileText, Clock, ArrowLeft, Minus, Plus } from "lucide-react";
import Brand from "@/components/Brand";
import { starterArticles, type Article } from "@/data/articles";
import { getSession } from "@/lib/store";

const DISPLAY_FONT = `"Fraunces", "Iowan Old Style", Georgia, serif`;

export default function ArticlesPage() {
  const router = useRouter();
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [fontSize, setFontSize] = useState(17);

  useEffect(() => {
    const s = getSession();
    if (!s) router.push("/auth/login");
  }, [router]);

  const selected = selectedId ? starterArticles.find(a => a.id === selectedId) : null;

  return (
    <div style={{ minHeight: "100vh", background: "var(--site-bg)", color: "var(--site-text)", fontFamily: "Inter, system-ui, sans-serif", display: "flex", flexDirection: "column" }}>
      {/* Nav */}
      <nav style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "18px 32px", borderBottom: "1px solid var(--site-border)", flexShrink: 0 }}>
        <Brand href="/" size={20} />
        <Link href="/student/dashboard" style={{ marginRight: 52, fontSize: 13, color: "var(--site-text-muted)", textDecoration: "none", fontWeight: 500 }}>← Back to dashboard</Link>
      </nav>

      {!selected ? (
        // ═══════════════════════════════════════════════════════
        // GRID VIEW — flashcard tiles
        // ═══════════════════════════════════════════════════════
        <>
          <header style={{ padding: "36px 36px 24px", width: "100%", maxWidth: 1100, margin: "0 auto" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 6 }}>
              <div style={{ width: 36, height: 36, borderRadius: 10, background: "var(--site-accent-dim)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--site-accent)" }}>
                <FileText size={18} />
              </div>
              <h1 style={{ fontFamily: DISPLAY_FONT, fontSize: 34, fontWeight: 500, letterSpacing: "-0.02em", color: "var(--site-text)", margin: 0 }}>
                Articles <em style={{ fontStyle: "italic", fontWeight: 300, color: "var(--site-text-muted)" }}>& guides</em>
              </h1>
            </div>
            <p style={{ color: "var(--site-text-muted)", fontSize: 14, margin: "0 0 0 48px" }}>
              Tap a card to read.
            </p>
          </header>

          <main style={{ padding: "0 36px 60px", maxWidth: 1100, margin: "0 auto", width: "100%" }}>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: 18,
            }}>
              {starterArticles.map(a => (
                <button
                  key={a.id}
                  onClick={() => setSelectedId(a.id)}
                  style={{
                    textAlign: "left", padding: 0, border: "1px solid var(--site-border)",
                    borderRadius: 14, overflow: "hidden", cursor: "pointer",
                    background: "var(--site-card)", transition: "transform 0.15s, box-shadow 0.15s",
                    fontFamily: "inherit", display: "flex", flexDirection: "column",
                  }}
                  onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.15)"; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
                >
                  {/* Image */}
                  <div style={{ width: "100%", aspectRatio: "16 / 10", background: "var(--site-card-2)", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    {a.image ? (
                      <img src={a.image} alt="" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
                    ) : (
                      <div style={{ color: "var(--site-text-sub)" }}>
                        <FileText size={40} />
                      </div>
                    )}
                  </div>
                  {/* Info */}
                  <div style={{ padding: "14px 16px 18px" }}>
                    <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--site-accent)", marginBottom: 6, display: "block" }}>
                      {a.category}
                    </span>
                    <div style={{ fontSize: 15, fontWeight: 700, color: "var(--site-text)", lineHeight: 1.3, marginBottom: 8 }}>
                      {a.title}
                    </div>
                    <div style={{ display: "flex", gap: 10, fontSize: 11, color: "var(--site-text-sub)" }}>
                      <span>{a.author}</span>
                      <span>·</span>
                      <span style={{ display: "flex", alignItems: "center", gap: 3 }}>
                        <Clock size={10} /> {a.readingTime} min
                      </span>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </main>
        </>
      ) : (
        // ═══════════════════════════════════════════════════════
        // READER VIEW — full article
        // ═══════════════════════════════════════════════════════
        <main style={{ flex: 1, overflowY: "auto", padding: "0 0 80px" }}>
          {/* Hero image */}
          {selected.image && (
            <div style={{ width: "100%", maxWidth: 900, margin: "0 auto", padding: "20px 20px 0" }}>
              <img src={selected.image} alt="" style={{ width: "100%", height: "auto", maxHeight: 520, objectFit: "contain", display: "block", margin: "0 auto", borderRadius: 10 }} />
            </div>
          )}

          <div style={{ maxWidth: 720, margin: "0 auto", padding: "32px 28px 0" }}>
            {/* Back button */}
            <button
              onClick={() => setSelectedId(null)}
              style={{ display: "flex", alignItems: "center", gap: 6, padding: "8px 14px", borderRadius: 8, background: "var(--site-border)", border: "none", cursor: "pointer", color: "var(--site-text-muted)", fontSize: 13, fontWeight: 600, marginBottom: 28, fontFamily: "inherit" }}
            >
              <ArrowLeft size={14} /> All Articles
            </button>

            {/* Article header */}
            <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--site-accent)", marginBottom: 10, display: "block" }}>
              {selected.category}
            </span>
            <h1 style={{ fontFamily: DISPLAY_FONT, fontSize: "clamp(1.8rem, 4vw, 2.4rem)", fontWeight: 500, color: "var(--site-text)", lineHeight: 1.2, marginBottom: 14, letterSpacing: "-0.01em" }}>
              {selected.title}
            </h1>
            <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 12, color: "var(--site-text-sub)", marginBottom: 28, paddingBottom: 20, borderBottom: "1px solid var(--site-border)" }}>
              <span>{selected.author}</span>
              <span style={{ display: "flex", alignItems: "center", gap: 4 }}>
                <Clock size={12} /> {selected.readingTime} min read
              </span>
              {/* Font controls */}
              <div style={{ display: "flex", alignItems: "center", gap: 4, marginLeft: "auto" }}>
                <button onClick={() => setFontSize(s => Math.max(13, s - 1))} style={{ width: 28, height: 28, borderRadius: 6, background: "var(--site-border)", border: "none", cursor: "pointer", color: "var(--site-text-muted)", display: "flex", alignItems: "center", justifyContent: "center" }}><Minus size={12} /></button>
                <span style={{ fontSize: 11, fontWeight: 700, color: "var(--site-text-muted)", minWidth: 22, textAlign: "center" }}>{fontSize}</span>
                <button onClick={() => setFontSize(s => Math.min(24, s + 1))} style={{ width: 28, height: 28, borderRadius: 6, background: "var(--site-border)", border: "none", cursor: "pointer", color: "var(--site-text-muted)", display: "flex", alignItems: "center", justifyContent: "center" }}><Plus size={12} /></button>
              </div>
            </div>

            {/* Body */}
            <div style={{
              fontSize, lineHeight: 1.9, color: "var(--site-text)",
              whiteSpace: "pre-line",
              fontFamily: `"Lora", "Iowan Old Style", Georgia, serif`,
            }}>
              {selected.content}
            </div>

            {/* Back to articles */}
            <div style={{ marginTop: 48, paddingTop: 24, borderTop: "1px solid var(--site-border)", textAlign: "center" }}>
              <button
                onClick={() => setSelectedId(null)}
                style={{ padding: "10px 24px", borderRadius: 10, background: "var(--site-accent-dim)", border: "1px solid var(--site-accent-border)", color: "var(--site-accent)", cursor: "pointer", fontSize: 13, fontWeight: 600, fontFamily: "inherit" }}
              >
                ← Back to all articles
              </button>
            </div>
          </div>
        </main>
      )}
    </div>
  );
}
