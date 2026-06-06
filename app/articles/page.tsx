"use client";
import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Clock, Minus, Plus } from "lucide-react";
import StudentShell from "@/components/StudentShell";
import { starterArticles } from "@/data/articles";
import { getSession } from "@/lib/store";

const DISPLAY_FONT = `-apple-system, BlinkMacSystemFont, system-ui, Roboto, Helvetica, Arial, sans-serif`;

export default function ArticlesPage() {
  const router = useRouter();
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [fontSize, setFontSize] = useState(17);
  const [category, setCategory] = useState<string>("All");
  const [source, setSource] = useState<string>("All");

  useEffect(() => {
    const s = getSession();
    if (!s) router.push("/auth/login");
  }, [router]);

  const categories = useMemo(() => {
    const set = new Set(starterArticles.map(a => a.category));
    return ["All", ...Array.from(set)];
  }, []);

  const sources = useMemo(() => {
    const set = new Set(starterArticles.map(a => a.source));
    return ["All", ...Array.from(set)];
  }, []);

  const list = useMemo(
    () => starterArticles.filter(a =>
      (category === "All" || a.category === category) &&
      (source === "All" || a.source === source)
    ),
    [category, source]
  );

  const featuredPick = useMemo(() => {
    const pool = list.filter(a => a.image);
    return pool.length > 0 ? pool[Math.floor(Math.random() * pool.length)] : list[0];
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [source, category]);
  const selected = selectedId ? starterArticles.find(a => a.id === selectedId) : null;

  if (selected) {
    const heroImg = selected.image?.replace(/width=\d+/, "width=1200");
    return (
      <StudentShell>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <button
            onClick={() => setSelectedId(null)}
            className="btn ghost sm"
            style={{ marginBottom: 24 }}
          >
            <ArrowLeft size={14} /> All articles
          </button>

          {heroImg && (
            <div style={{ marginBottom: 28, borderRadius: 10, overflow: "hidden", border: "1px solid var(--line)" }}>
              <img src={heroImg} alt="" style={{ width: "100%", height: "auto", maxHeight: 440, objectFit: "cover", objectPosition: "center 20%", display: "block" }} />
            </div>
          )}

          <p className="eyebrow" style={{ marginBottom: 12 }}>
            <span>{selected.category}</span>
            <span className="rule" />
            <span>{selected.readingTime} min read</span>
          </p>
          <h1 className="h1" style={{ marginBottom: 16, fontSize: "clamp(28px, 4vw, 44px)" }}>{selected.title}</h1>
          {selected.curated && (
            <div
              title="This article was summarised by AI from publicly available reporting. Links to the original sources are at the bottom."
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                padding: "4px 10px",
                borderRadius: 999,
                fontFamily: "var(--ff-mono)",
                fontSize: 10.5,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                background: "rgba(120, 160, 255, 0.12)",
                color: "#9bb5ff",
                border: "1px solid rgba(120, 160, 255, 0.35)",
                marginBottom: 14,
              }}
            >
              ✦ AI-summarised
            </div>
          )}
          <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap", fontFamily: "var(--ff-mono)", fontSize: 11, color: "var(--text-3)", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 28, paddingBottom: 20, borderBottom: "1px solid var(--line)" }}>
            <span>{selected.author}</span>
            <span>·</span>
            <span>{selected.source}</span>
            <span style={{ display: "flex", alignItems: "center", gap: 4 }}>
              <Clock size={12} /> {selected.readingTime} min
            </span>
            <div style={{ display: "flex", alignItems: "center", gap: 4, marginLeft: "auto" }}>
              <button onClick={() => setFontSize(s => Math.max(13, s - 1))}
                className="btn ghost sm"
                style={{ padding: "4px 8px" }}
                aria-label="Smaller text">
                <Minus size={12} />
              </button>
              <span style={{ minWidth: 22, textAlign: "center" }}>{fontSize}</span>
              <button onClick={() => setFontSize(s => Math.min(24, s + 1))}
                className="btn ghost sm"
                style={{ padding: "4px 8px" }}
                aria-label="Bigger text">
                <Plus size={12} />
              </button>
            </div>
          </div>

          <div style={{
            fontSize, lineHeight: 1.85, color: "var(--text)",
            fontFamily: DISPLAY_FONT,
        }}>
          {selected.content.split(/(\[CHART:[^\]]+\]|\[IMG:[^\]]+\]|\[CAP:[^\]]+\])/).map((part, i) => {
            const chartMatch = part.match(/^\[CHART:([^\]]+)\]$/);
            if (chartMatch) {
              const src = `${process.env.NEXT_PUBLIC_MISSION_CONTROL}/storage/v1/object/public/images/${chartMatch[1]}`;
              return (
                <img key={i} src={src} alt="Chart"
                  style={{ float: "left", width: "min(340px, 50%)", margin: "8px 20px 12px 0", borderRadius: 6, border: "1px solid var(--line)" }} />
              );
            }
            const imgMatch = part.match(/^\[IMG:([^\]]+)\]$/);
            if (imgMatch) {
              return (
                <img key={i} src={imgMatch[1]} alt=""
                  style={{ width: "100%", maxWidth: 620, margin: "20px 0 6px", borderRadius: 8, border: "1px solid var(--line)", display: "block" }} />
              );
            }
            const capMatch = part.match(/^\[CAP:([^\]]+)\]$/);
            if (capMatch) {
              return (
                <div key={i}
                  style={{ maxWidth: 620, fontSize: "0.78em", lineHeight: 1.5, opacity: 0.72, fontStyle: "italic", margin: "0 0 20px" }}>
                  {capMatch[1]}
                </div>
              );
            }
            return <span key={i} style={{ whiteSpace: "pre-line" }}>{part}</span>;
          })}
          <div style={{ clear: "both" }} />
        </div>

          <div style={{ marginTop: 48, paddingTop: 24, borderTop: "1px solid var(--line)" }}>
            <button onClick={() => setSelectedId(null)} className="btn ghost">
              ← Back to all articles
            </button>
          </div>
        </div>
      </StudentShell>
    );
  }

  return (
    <StudentShell>
      <h1 className="h1"><em>Articles</em></h1>

      <div className="flex g8" style={{ flexWrap: "wrap", marginBottom: 12 }}>
        {sources.map(s => (
          <button
            key={s}
            className={`chip${source === s ? " on" : ""}`}
            onClick={() => setSource(s)}
          >
            {s}
          </button>
        ))}
      </div>

      <div className="flex g8" style={{ flexWrap: "wrap", marginBottom: 28 }}>
        {categories.map(c => (
          <button
            key={c}
            className={`chip${category === c ? " on" : ""}`}
            onClick={() => setCategory(c)}
          >
            {c}
          </button>
        ))}
      </div>

      {featuredPick && (
        <div
          className="card flush"
          onClick={() => setSelectedId(featuredPick.id)}
          onKeyDown={e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setSelectedId(featuredPick.id); } }}
          role="button"
          tabIndex={0}
          style={{ marginBottom: 28, cursor: "pointer" }}
        >
          <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 0 }}>
            <div style={{
              minHeight: 320,
              backgroundColor: "var(--surface-2)",
              backgroundImage: featuredPick.image
                ? `url(${featuredPick.image})`
                : "repeating-linear-gradient(135deg, var(--line-2) 0 1px, transparent 1px 11px)",
              backgroundSize: featuredPick.image ? "contain" : "auto",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              display: "grid", placeItems: "center",
            }} />
            <div style={{ padding: 40, display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <div style={{ fontFamily: "var(--ff-mono)", fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--accent)", marginBottom: 16 }}>
                Editor&apos;s pick · {featuredPick.category}
              </div>
              <h2 style={{ fontFamily: DISPLAY_FONT, fontSize: 32, fontWeight: 500, letterSpacing: "-0.015em", lineHeight: 1.15, margin: "0 0 16px", color: "var(--text)" }}>
                {featuredPick.title}
              </h2>
              <div style={{ fontFamily: "var(--ff-mono)", fontSize: 10.5, color: "var(--text-3)", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 20, display: "flex", gap: 12, flexWrap: "wrap" }}>
                <span>{featuredPick.author}</span>
                <span>·</span>
                <span>{featuredPick.readingTime} min read</span>
              </div>
              <button className="btn primary" style={{ alignSelf: "flex-start" }} onClick={e => { e.stopPropagation(); setSelectedId(featuredPick.id); }}>
                Read article →
              </button>
            </div>
          </div>
        </div>
      )}

      {list.filter(a => a.id !== featuredPick?.id).length === 0 && !featuredPick && (
        <p style={{ textAlign: "center", color: "var(--text-3)", padding: "40px 0" }}>
          No articles match your filters. Try adjusting the source or category above.
        </p>
      )}
      <div className="grid cols-3">
        {list.filter(a => a.id !== featuredPick?.id).map(a => (
          <div key={a.id} className="media-card" onClick={() => setSelectedId(a.id)} onKeyDown={e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setSelectedId(a.id); } }} role="button" tabIndex={0}>
            <div
              className="thumb"
              style={a.image ? { background: `url(${a.image}) center / cover` } : undefined}
            >
              <span className="badge">{a.category}</span>
              <span className="time">{a.readingTime} min</span>
            </div>
            <div className="body">
              <div className="cat">{a.category}</div>
              <div className="t">{a.title}</div>
              <div className="f">
                <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", maxWidth: "70%" }}>{a.author}</span>
                <span>read →</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </StudentShell>
  );
}
