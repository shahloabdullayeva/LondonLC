"use client";
import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { Search, Volume2, X, Loader2 } from "lucide-react";
import StudentShell from "@/components/StudentShell";
import { VOCAB, VOCAB_SOURCES, type VocabEntry, type VocabLevel, type VocabSource } from "@/data/vocab";
import { getSession } from "@/lib/store";

type DictResult = {
  word: string;
  phonetic?: string;
  audioUrl?: string;
  meanings: { partOfSpeech: string; definitions: { definition: string; example?: string }[] }[];
};

const CACHE_KEY = "llc.vocab.cache.v1";

function loadCache(): Record<string, DictResult> {
  try { return JSON.parse(localStorage.getItem(CACHE_KEY) || "{}"); } catch { return {}; }
}

function saveCache(cache: Record<string, DictResult>) {
  try { localStorage.setItem(CACHE_KEY, JSON.stringify(cache)); } catch {}
}

const LEVEL_COLORS: Record<VocabLevel, string> = {
  B1: "#22c55e", B2: "#3b82f6", C1: "#a855f7", C2: "#ef4444",
};

export default function VocabPage() {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [levelFilter, setLevelFilter] = useState<VocabLevel | "All">("All");
  const [sourceFilter, setSourceFilter] = useState<VocabSource | "All">("All");
  const [selected, setSelected] = useState<VocabEntry | null>(null);
  const [dictResult, setDictResult] = useState<DictResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const s = getSession();
    if (!s) router.push("/auth/login");
  }, [router]);

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

  const fetchDefinition = async (entry: VocabEntry) => {
    setSelected(entry);
    setDictResult(null);
    setError("");

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

  return (
    <StudentShell>
      <p className="eyebrow">Practice · Vocabulary</p>
      <h1 className="h1"><em>Vocabulary</em> bank</h1>
      <p className="lede" style={{ marginTop: 16, marginBottom: 24 }}>
        {VOCAB.length} IELTS words across all band levels. Tap any word for its definition, pronunciation, and examples.
      </p>

      {/* Search */}
      <div style={{ position: "relative", marginBottom: 16 }}>
        <Search size={16} style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", color: "var(--text-3)" }} />
        <input
          type="text"
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Search words..."
          style={{
            width: "100%", padding: "12px 14px 12px 40px", borderRadius: 10,
            border: "1px solid var(--line)", background: "var(--surface)",
            color: "var(--text)", fontSize: 15, outline: "none",
          }}
        />
        {search && (
          <button onClick={() => setSearch("")} style={{ position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)", background: "none", border: "none", color: "var(--text-3)", cursor: "pointer" }}>
            <X size={16} />
          </button>
        )}
      </div>

      {/* Filters */}
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 12 }}>
        {(["All", "B1", "B2", "C1", "C2"] as const).map(l => (
          <button key={l} onClick={() => setLevelFilter(l)}
            className={`chip${levelFilter === l ? " on" : ""}`}
            style={levelFilter === l && l !== "All" ? { background: LEVEL_COLORS[l as VocabLevel], color: "#fff", borderColor: LEVEL_COLORS[l as VocabLevel] } : undefined}>
            {l}
          </button>
        ))}
      </div>
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 24 }}>
        {(["All", ...Object.keys(VOCAB_SOURCES)] as const).map(s => (
          <button key={s} onClick={() => setSourceFilter(s as VocabSource | "All")}
            className={`chip${sourceFilter === s ? " on" : ""}`}>
            {s === "All" ? "All sources" : s}
          </button>
        ))}
      </div>

      <p style={{ fontSize: 12, color: "var(--text-3)", marginBottom: 16, fontFamily: "var(--ff-mono)" }}>
        Showing {filtered.length} of {VOCAB.length} words
      </p>

      {/* Word detail panel */}
      {selected && (
        <div className="card" style={{ marginBottom: 24, padding: 24 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
            <div>
              <h2 style={{ fontSize: 28, fontWeight: 700, fontFamily: "var(--ff-serif)", margin: 0 }}>{selected.word}</h2>
              <div style={{ display: "flex", gap: 8, alignItems: "center", marginTop: 6 }}>
                <span style={{ fontSize: 11, padding: "3px 8px", borderRadius: 999, background: LEVEL_COLORS[selected.level], color: "#fff", fontWeight: 700, fontFamily: "var(--ff-mono)" }}>
                  {selected.level}
                </span>
                <span style={{ fontSize: 12, color: "var(--text-3)" }}>{selected.source}</span>
                {dictResult?.phonetic && (
                  <span style={{ fontSize: 14, color: "var(--text-2)", fontStyle: "italic" }}>{dictResult.phonetic}</span>
                )}
                {dictResult?.audioUrl && (
                  <button onClick={() => playAudio(dictResult.audioUrl!)}
                    style={{ background: "none", border: "none", cursor: "pointer", color: "var(--accent)", display: "flex", alignItems: "center" }}>
                    <Volume2 size={16} />
                  </button>
                )}
              </div>
            </div>
            <button onClick={() => { setSelected(null); setDictResult(null); setError(""); }}
              style={{ background: "none", border: "none", cursor: "pointer", color: "var(--text-3)" }}>
              <X size={18} />
            </button>
          </div>

          {loading && (
            <div style={{ display: "flex", alignItems: "center", gap: 8, color: "var(--text-3)", fontSize: 14 }}>
              <Loader2 size={14} className="spin" /> Fetching definition...
            </div>
          )}

          {error && <p style={{ color: "var(--text-3)", fontSize: 14 }}>{error}</p>}

          {dictResult && dictResult.meanings.map((m, i) => (
            <div key={i} style={{ marginBottom: 16 }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: "var(--accent)", textTransform: "uppercase", letterSpacing: "0.08em", fontFamily: "var(--ff-mono)", marginBottom: 6 }}>
                {m.partOfSpeech}
              </div>
              {m.definitions.map((d, j) => (
                <div key={j} style={{ marginBottom: 10 }}>
                  <p style={{ fontSize: 15, color: "var(--text)", lineHeight: 1.6, margin: 0 }}>
                    {j + 1}. {d.definition}
                  </p>
                  {d.example && (
                    <p style={{ fontSize: 13, color: "var(--text-3)", fontStyle: "italic", margin: "4px 0 0", lineHeight: 1.5 }}>
                      &ldquo;{d.example}&rdquo;
                    </p>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      )}

      {/* Word grid */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
        {filtered.map(entry => (
          <button
            key={`${entry.word}-${entry.source}`}
            onClick={() => fetchDefinition(entry)}
            style={{
              padding: "8px 14px", borderRadius: 8, cursor: "pointer",
              border: selected?.word === entry.word ? "1.5px solid var(--accent)" : "1px solid var(--line)",
              background: selected?.word === entry.word ? "rgba(120,160,255,0.08)" : "var(--surface)",
              color: "var(--text)", fontSize: 14, fontWeight: 500,
              display: "flex", alignItems: "center", gap: 6,
              transition: "all 0.12s",
            }}
          >
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: LEVEL_COLORS[entry.level], flexShrink: 0 }} />
            {entry.word}
          </button>
        ))}
      </div>

      {filtered.length === 0 && (
        <p style={{ textAlign: "center", color: "var(--text-3)", padding: "40px 0" }}>
          No words match your search. Try a different term or clear the filters.
        </p>
      )}

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        .spin { animation: spin 1s linear infinite; }
      `}</style>
    </StudentShell>
  );
}
