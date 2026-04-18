// /articles — library reading. Phase 3 redesign: sits inside the new
// StudentShell with an editor's-pick hero, filter chips and a 3-column
// media-card grid. Reader view keeps the [CHART:…] inline marker
// rendering from the previous version.
"use client";
import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Clock, Minus, Plus } from "lucide-react";
import StudentShell from "@/components/StudentShell";
import { starterArticles } from "@/data/articles";
import { getSession } from "@/lib/store";

const DISPLAY_FONT = `"Fraunces", "Iowan Old Style", Georgia, serif`;

export default function ArticlesPage() {
  const router = useRouter();
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [fontSize, setFontSize] = useState(17);
  const [category, setCategory] = useState<string>("All");

  useEffect(() => {
    const s = getSession();
    if (!s) router.push("/auth/login");
  }, [router]);

  const categories = useMemo(() => {
    const set = new Set(starterArticles.map(a => a.category));
    return ["All", ...Array.from(set)];
  }, []);

  const list = useMemo(
    () => category === "All" ? starterArticles : starterArticles.filter(a => a.category === category),
    [category]
  );

  const featured = starterArticles[0];
  const selected = selectedId ? starterArticles.find(a => a.id === selectedId) : null;

  if (selected) {
    return (
      <StudentShell>
        <button
          onClick={() => setSelectedId(null)}
          className="btn ghost sm"
          style={{ marginBottom: 24 }}
        >
          <ArrowLeft size={14} /> All articles
        </button>

        {selected.image && (
          <div style={{ marginBottom: 24, borderRadius: 10, overflow: "hidden", border: "1px solid var(--line)" }}>
            <img src={selected.image} alt="" style={{ width: "100%", height: "auto", maxHeight: 520, objectFit: "cover", display: "block" }} />
          </div>
        )}

        <p className="eyebrow" style={{ marginBottom: 12 }}>
          <span>{selected.category}</span>
          <span className="rule" />
          <span>{selected.readingTime} min read</span>
        </p>
        <h1 className="h1" style={{ marginBottom: 16 }}>{selected.title}</h1>
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontFamily: "var(--ff-mono)", fontSize: 11, color: "var(--text-3)", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 28, paddingBottom: 20, borderBottom: "1px solid var(--line)" }}>
          <span>{selected.author}</span>
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
          fontFamily: DISPLAY_FONT, maxWidth: 720,
        }}>
          {selected.content.split(/(\[CHART:[^\]]+\])/).map((part, i) => {
            const m = part.match(/^\[CHART:([^\]]+)\]$/);
            if (m) {
              const src = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/images/${m[1]}`;
              return (
                <img key={i} src={src} alt="Chart"
                  style={{ float: "left", width: "min(340px, 50%)", margin: "8px 20px 12px 0", borderRadius: 6, border: "1px solid var(--line)" }} />
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
      </StudentShell>
    );
  }

  return (
    <StudentShell>
      <p className="eyebrow">Library · Long reads</p>
      <h1 className="h1">
        Articles <em>& guides</em>
      </h1>
      <p className="lede" style={{ marginTop: 16, marginBottom: 28 }}>
        Selected reading for band 6.5 and above. Every article is tagged by topic and comes
        with an estimated reading time.
      </p>

      {/* Filter chips */}
      <div className="flex g8" style={{ flexWrap: "wrap", marginBottom: 28 }}>
        {categories.map(c => (
          <button
            key={c}
            className={`chip${category === c ? " on" : ""}`}
            style={{ cursor: "pointer", background: "transparent", fontFamily: "inherit" }}
            onClick={() => setCategory(c)}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Editor's pick — only shown on "All" */}
      {category === "All" && featured && (
        <div
          className="card flush"
          onClick={() => setSelectedId(featured.id)}
          role="button"
          tabIndex={0}
          style={{ marginBottom: 28, cursor: "pointer" }}
        >
          <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 0 }}>
            <div style={{
              minHeight: 320,
              background: featured.image
                ? `url(${featured.image}) center / cover`
                : "repeating-linear-gradient(135deg, var(--line-2) 0 1px, transparent 1px 11px), var(--surface-2)",
              display: "grid", placeItems: "center",
            }} />
            <div style={{ padding: 40, display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <div style={{ fontFamily: "var(--ff-mono)", fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--accent)", marginBottom: 16 }}>
                Editor&apos;s pick · {featured.category}
              </div>
              <h2 style={{ fontFamily: DISPLAY_FONT, fontSize: 32, fontWeight: 500, letterSpacing: "-0.015em", lineHeight: 1.15, margin: "0 0 16px", color: "var(--text)" }}>
                {featured.title}
              </h2>
              <div style={{ fontFamily: "var(--ff-mono)", fontSize: 10.5, color: "var(--text-3)", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 20, display: "flex", gap: 12, flexWrap: "wrap" }}>
                <span>{featured.author}</span>
                <span>·</span>
                <span>{featured.readingTime} min read</span>
              </div>
              <button className="btn primary" style={{ alignSelf: "flex-start" }} onClick={e => { e.stopPropagation(); setSelectedId(featured.id); }}>
                Read article →
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Grid */}
      <div className="grid cols-3">
        {list.filter(a => category !== "All" || a.id !== featured?.id).map(a => (
          <div key={a.id} className="media-card" onClick={() => setSelectedId(a.id)} role="button" tabIndex={0}>
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
