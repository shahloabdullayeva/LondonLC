"use client";
import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { Search, Volume2, X, Loader2 } from "lucide-react";
import StudentShell from "@/components/StudentShell";
import { VOCAB, type VocabEntry, type VocabLevel, type VocabSource } from "@/data/vocab";
import { getSession } from "@/lib/store";

type DictResult = {
  word: string;
  phonetic?: string;
  audioUrl?: string;
  meanings: { partOfSpeech: string; definitions: { definition: string; example?: string }[] }[];
};

const CACHE_KEY = "llc.vocab.cache.v1";
const VIEWED_KEY = "llc.vocab.viewed.v1";

function loadCache(): Record<string, DictResult> {
  try { return JSON.parse(localStorage.getItem(CACHE_KEY) || "{}"); } catch { return {}; }
}
function saveCache(cache: Record<string, DictResult>) {
  try { localStorage.setItem(CACHE_KEY, JSON.stringify(cache)); } catch {}
}
function loadViewed(): string[] {
  try { return JSON.parse(localStorage.getItem(VIEWED_KEY) || "[]"); } catch { return []; }
}
function saveViewed(viewed: string[]) {
  try { localStorage.setItem(VIEWED_KEY, JSON.stringify(viewed)); } catch {}
}

const LEVELS: (VocabLevel | "All")[] = ["All", "B1", "B2", "C1", "C2"];
const SOURCES: (VocabSource | "All")[] = ["All", "AWL", "Oxford 3000", "Oxford 5000", "IELTS Common"];

export default function VocabPage() {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [levelFilter, setLevelFilter] = useState<VocabLevel | "All">("All");
  const [sourceFilter, setSourceFilter] = useState<VocabSource | "All">("All");
  const [selected, setSelected] = useState<VocabEntry | null>(null);
  const [dictResult, setDictResult] = useState<DictResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [viewed, setViewed] = useState<string[]>([]);

  useEffect(() => {
    const s = getSession();
    if (!s) router.push("/auth/login");
    setViewed(loadViewed());
  }, [router]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "/" && !(e.target instanceof HTMLInputElement)) {
        e.preventDefault();
        document.getElementById("vocab-search")?.focus();
      }
      if (e.key === "Escape" && selected) {
        setSelected(null);
        setDictResult(null);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [selected]);

  const filtered = useMemo(() => {
    let list = VOCAB;
    if (levelFilter !== "All") list = list.filter(w => w.level === levelFilter);
    if (sourceFilter !== "All") list = list.filter(w => w.source === sourceFilter);
    if (search.trim()) {
      const q = search.toLowerCase().trim();
      list = list.filter(w => w.word.toLowerCase().includes(q));
    }
    return list;
  }, [search, levelFilter, sourceFilter]);

  const grouped = useMemo(() => {
    const byLevel: Record<VocabLevel, VocabEntry[]> = { B1: [], B2: [], C1: [], C2: [] };
    for (const w of filtered) byLevel[w.level].push(w);
    return byLevel;
  }, [filtered]);

  const fetchDefinition = async (entry: VocabEntry) => {
    setSelected(entry);
    setDictResult(null);
    setError("");

    if (!viewed.includes(entry.word)) {
      const next = [...viewed, entry.word];
      setViewed(next);
      saveViewed(next);
    }

    const cache = loadCache();
    if (cache[entry.word]) {
      setDictResult(cache[entry.word]);
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(entry.word)}`);
      if (!res.ok) {
        setError("Definition not found.");
        setLoading(false);
        return;
      }
      const data = await res.json();
      const entry0 = data[0];
      const phonetic = entry0.phonetic || entry0.phonetics?.find((p: { text?: string }) => p.text)?.text || "";
      const audioUrl = entry0.phonetics?.find((p: { audio?: string }) => p.audio)?.audio || "";
      const meanings = (entry0.meanings || []).map((m: { partOfSpeech: string; definitions: { definition: string; example?: string }[] }) => ({
        partOfSpeech: m.partOfSpeech,
        definitions: m.definitions.slice(0, 3).map((d: { definition: string; example?: string }) => ({
          definition: d.definition,
          example: d.example,
        })),
      }));
      const result: DictResult = { word: entry0.word, phonetic, audioUrl, meanings };
      setDictResult(result);
      cache[entry.word] = result;
      saveCache(cache);
    } catch {
      setError("Could not fetch definition.");
    }
    setLoading(false);
  };

  const playAudio = (url: string) => {
    const a = new Audio(url);
    a.play().catch(() => {});
  };

  const closeDetail = () => {
    setSelected(null);
    setDictResult(null);
    setError("");
  };

  return (
    <StudentShell>
      <p className="eyebrow">
        <span>Practice · Vocabulary</span>
        <span className="rule" />
        <span>{VOCAB.length} words</span>
      </p>
      <h1 className="h1">Vocabulary <em>bank</em></h1>

      {/* Search */}
      <div style={{ position: "relative", marginBottom: 16 }}>
        <Search size={16} style={{ position: "absolute", left: 16, top: "50%", transform: "translateY(-50%)", color: "var(--text-3)", pointerEvents: "none" }} />
        <input
          id="vocab-search"
          type="text"
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Search words…"
          style={{
            width: "100%", padding: "14px 16px 14px 44px", borderRadius: "var(--radius)",
            border: "1px solid var(--line-2)", background: "var(--surface)",
            color: "var(--text)", fontSize: 15, outline: "none",
            fontFamily: "var(--ff-sans)",
          }}
        />
        {search ? (
          <button onClick={() => setSearch("")} style={{ position: "absolute", right: 14, top: "50%", transform: "translateY(-50%)", color: "var(--text-3)" }}>
            <X size={16} />
          </button>
        ) : (
          <span className="kbd" style={{ position: "absolute", right: 14, top: "50%", transform: "translateY(-50%)" }}>/</span>
        )}
      </div>

      {/* Filters */}
      <div className="flex g8 aic" style={{ flexWrap: "wrap", marginBottom: 10 }}>
        <span style={{ fontFamily: "var(--ff-mono)", fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-3)", marginRight: 4 }}>Level</span>
        {LEVELS.map(l => (
          <button key={l} onClick={() => setLevelFilter(l)} className={`chip${levelFilter === l ? " on" : ""}`}>
            {l}
          </button>
        ))}
      </div>
      <div className="flex g8 aic" style={{ flexWrap: "wrap", marginBottom: 24 }}>
        <span style={{ fontFamily: "var(--ff-mono)", fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-3)", marginRight: 4 }}>Source</span>
        {SOURCES.map(s => (
          <button key={s} onClick={() => setSourceFilter(s)} className={`chip${sourceFilter === s ? " on" : ""}`}>
            {s === "All" ? "All sources" : s}
          </button>
        ))}
      </div>

      <p style={{ fontFamily: "var(--ff-mono)", fontSize: 11, color: "var(--text-3)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 20 }}>
        {filtered.length} of {VOCAB.length} words · {viewed.length} viewed
      </p>

      {/* Word detail card */}
      {selected && (
        <div className="card" style={{ marginBottom: 32, padding: 0 }}>
          <div style={{ padding: "32px 36px", borderBottom: "1px solid var(--line)", display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 24 }}>
            <div>
              <div style={{ fontFamily: "var(--ff-mono)", fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--text-3)", marginBottom: 12 }}>
                {selected.level} · {selected.source}
              </div>
              <div style={{ display: "flex", alignItems: "baseline", gap: 16, flexWrap: "wrap" }}>
                <h2 style={{ fontFamily: "var(--ff-serif)", fontSize: 56, fontWeight: 500, letterSpacing: "-0.02em", lineHeight: 1, margin: 0 }}>
                  {selected.word}
                </h2>
                {dictResult?.phonetic && (
                  <span style={{ fontFamily: "var(--ff-serif)", fontSize: 22, fontStyle: "italic", color: "var(--text-2)" }}>
                    {dictResult.phonetic}
                  </span>
                )}
                {dictResult?.audioUrl && (
                  <button onClick={() => playAudio(dictResult.audioUrl!)} className="btn sm" title="Play pronunciation">
                    <Volume2 size={14} />
                  </button>
                )}
              </div>
            </div>
            <button onClick={closeDetail} className="btn icon ghost" title="Close (Esc)">
              <X size={16} />
            </button>
          </div>

          <div style={{ padding: "28px 36px 32px" }}>
            {loading && (
              <div style={{ display: "flex", alignItems: "center", gap: 10, color: "var(--text-3)", fontSize: 14 }}>
                <Loader2 size={14} className="spin" /> Fetching definition…
              </div>
            )}
            {error && (
              <p style={{ color: "var(--text-3)", fontSize: 14, margin: 0 }}>{error}</p>
            )}
            {dictResult && dictResult.meanings.map((m, i) => (
              <div key={i} style={{ marginBottom: i === dictResult.meanings.length - 1 ? 0 : 24 }}>
                <div className="eyebrow" style={{ marginBottom: 12, color: "var(--accent)" }}>
                  <span>{m.partOfSpeech}</span>
                  <span className="rule" style={{ opacity: 0.25 }} />
                </div>
                {m.definitions.map((d, j) => (
                  <div key={j} style={{ marginBottom: 14 }}>
                    <p style={{ fontFamily: "var(--ff-serif)", fontSize: 17, lineHeight: 1.55, color: "var(--text)", margin: 0 }}>
                      <span style={{ fontFamily: "var(--ff-mono)", fontSize: 11, color: "var(--text-3)", marginRight: 10 }}>
                        {String(j + 1).padStart(2, "0")}
                      </span>
                      {d.definition}
                    </p>
                    {d.example && (
                      <p style={{ fontFamily: "var(--ff-serif)", fontSize: 15, color: "var(--text-2)", fontStyle: "italic", margin: "6px 0 0 32px", lineHeight: 1.5 }}>
                        &ldquo;{d.example}&rdquo;
                      </p>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Word list — grouped by level */}
      {filtered.length === 0 ? (
        <p style={{ textAlign: "center", color: "var(--text-3)", padding: "60px 0", fontSize: 15 }}>
          No words match your filters. Try a different term or clear the filters.
        </p>
      ) : (
        (["B1", "B2", "C1", "C2"] as VocabLevel[]).map(level => {
          const list = grouped[level];
          if (list.length === 0) return null;
          return (
            <div key={level} style={{ marginBottom: 36 }}>
              <div className="divider">
                <span>{level} · {list.length} words</span>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {list.map(entry => {
                  const isSeen = viewed.includes(entry.word);
                  const isActive = selected?.word === entry.word;
                  return (
                    <button
                      key={`${entry.word}-${entry.source}`}
                      onClick={() => fetchDefinition(entry)}
                      style={{
                        padding: "10px 16px",
                        borderRadius: "var(--radius)",
                        border: isActive
                          ? "1px solid var(--accent)"
                          : "1px solid var(--line-2)",
                        background: isActive
                          ? "color-mix(in oklab, var(--accent) 12%, transparent)"
                          : "var(--surface)",
                        color: "var(--text)",
                        fontFamily: "var(--ff-serif)",
                        fontSize: 16,
                        fontWeight: 500,
                        letterSpacing: "-0.005em",
                        cursor: "pointer",
                        transition: "all 140ms",
                        position: "relative",
                      }}
                      onMouseEnter={e => {
                        if (!isActive) e.currentTarget.style.borderColor = "var(--text-3)";
                      }}
                      onMouseLeave={e => {
                        if (!isActive) e.currentTarget.style.borderColor = "var(--line-2)";
                      }}
                    >
                      {entry.word}
                      {isSeen && !isActive && (
                        <span
                          title="You've seen this word"
                          style={{
                            position: "absolute",
                            top: -3,
                            right: -3,
                            width: 7,
                            height: 7,
                            borderRadius: "50%",
                            background: "var(--accent)",
                            border: "2px solid var(--bg)",
                          }}
                        />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })
      )}

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        .spin { animation: spin 1s linear infinite; }
      `}</style>
    </StudentShell>
  );
}
