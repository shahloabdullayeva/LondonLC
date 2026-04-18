"use client";
// /student/writing — Task 2 essay editor with word count, last-score
// card, and teacher comments panel. No backend yet: drafts save to
// localStorage, "Submit for review" is a placeholder.
import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { Send } from "lucide-react";
import StudentShell from "@/components/StudentShell";
import { getSession, type StudentSession } from "@/lib/store";

const DRAFT_KEY = "llc.writing.draft.v1";
const PROMPT = `"Many companies now allow their employees to work remotely. Do you think the advantages of remote work outweigh the disadvantages? Discuss both views and give your own opinion."`;

type Criterion = { k: string; v: number };
const CRITERIA: Criterion[] = [
  { k: "Task response", v: 7.0 },
  { k: "Coherence & cohesion", v: 6.5 },
  { k: "Lexical resource", v: 6.0 },
  { k: "Grammar range & accuracy", v: 6.5 },
];

const COMMENTS = [
  { tag: "Lexical", loc: "Para 2", body: <>&ldquo;Flexibility&rdquo; appears three times in this paragraph. Try: <em>latitude, autonomy, discretion.</em></> },
  { tag: "Cohesion", loc: "Para 3", body: <>Strong contrast move here — try opening with a signposting phrase like <em>&ldquo;That said…&rdquo;</em> or <em>&ldquo;On the other hand,&rdquo;</em> to make the shift explicit.</> },
  { tag: "Task response", loc: "Overall", body: <>Your position is clear from paragraph 1, which is rare — well done. Missing: a concrete example in para 3 to back the &ldquo;loneliness&rdquo; claim.</> },
];

function ScoreRing({ value, max = 9 }: { value: number; max?: number }) {
  const r = 40;
  const c = 2 * Math.PI * r;
  const filled = (Math.min(value, max) / max) * c;
  return (
    <div className="score-ring">
      <svg width="90" height="90" viewBox="0 0 90 90">
        <circle cx="45" cy="45" r={r} fill="none" stroke="var(--line-2)" strokeWidth="3" />
        <circle cx="45" cy="45" r={r} fill="none" stroke="var(--accent)" strokeWidth="3"
          strokeDasharray={`${filled} ${c}`} strokeLinecap="round" />
      </svg>
      <div style={{ textAlign: "center" }}>
        <div className="val">{value.toFixed(1)}</div>
        <div className="lab">of {max.toFixed(1)}</div>
      </div>
    </div>
  );
}

export default function WritingPage() {
  const router = useRouter();
  const [session, setSession] = useState<StudentSession | null>(null);
  const [text, setText] = useState("");
  const [savedAt, setSavedAt] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const s = getSession();
    if (!s || s.isAdmin) { router.push("/auth/login"); return; }
    setSession(s);
    try { setText(localStorage.getItem(DRAFT_KEY) || ""); } catch {}
  }, [router]);

  // Auto-save to localStorage, debounced by a short timeout.
  useEffect(() => {
    if (!session) return;
    const id = window.setTimeout(() => {
      try { localStorage.setItem(DRAFT_KEY, text); } catch {}
      setSavedAt(new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }));
    }, 500);
    return () => window.clearTimeout(id);
  }, [text, session]);

  const words = useMemo(() => text.trim().split(/\s+/).filter(Boolean).length, [text]);
  const chars = text.length;
  const targetHit = words >= 250;

  if (!session) return null;

  const lastBand = CRITERIA.reduce((s, c) => s + c.v, 0) / CRITERIA.length;

  return (
    <StudentShell>
      <p className="eyebrow">Writing · Task 2</p>
      <h1 className="h1"><em>Writing</em> feedback</h1>
      <p className="lede" style={{ marginTop: 16, marginBottom: 32 }}>
        Write your essay, submit for review, then get line-by-line feedback scored on the four
        official IELTS criteria. Draft auto-saves locally.
      </p>

      <div className="writing-grid" style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 24 }}>
        <div>
          <div className="card" style={{ marginBottom: 20 }}>
            <p className="eyebrow" style={{ margin: 0 }}>Prompt · 40 minutes · minimum 250 words</p>
            <p style={{ fontFamily: "var(--ff-serif)", fontSize: 18, lineHeight: 1.5, margin: "12px 0 0", color: "var(--text)" }}>
              {PROMPT}
            </p>
          </div>

          <div className="editor">
            <div className="hd">
              <span>{savedAt ? `Draft · auto-saved ${savedAt}` : "Draft"}</span>
              <div style={{ display: "flex", gap: 12, textTransform: "none", letterSpacing: 0 }}>
                <span style={{ color: targetHit ? "var(--accent)" : "var(--warn)" }}>{words} words</span>
                <span style={{ color: "var(--text-3)" }}>{chars} chars</span>
              </div>
            </div>
            <textarea
              className="area"
              value={text}
              onChange={e => setText(e.target.value)}
              placeholder="Start writing…"
              style={{
                width: "100%", display: "block", resize: "vertical",
                background: "transparent", border: "none",
                color: "var(--text)", fontFamily: "var(--ff-serif)",
                fontSize: 17, lineHeight: 1.7,
                padding: "32px 36px", minHeight: 340, outline: "none",
              }}
            />
            <div className="hd" style={{ borderTop: "1px solid var(--line)", borderBottom: 0 }}>
              <span>Ms. Shahlo · typically replies within 24h</span>
              <button
                className="btn primary sm"
                disabled={!targetHit || submitted}
                onClick={() => { if (targetHit) setSubmitted(true); }}
              >
                {submitted ? "Submitted ✓" : <>Submit for review <Send size={12} /></>}
              </button>
            </div>
          </div>
        </div>

        <div>
          <div className="card" style={{ marginBottom: 20 }}>
            <div className="flex jcb aic" style={{ marginBottom: 20 }}>
              <div>
                <p className="eyebrow" style={{ margin: 0 }}>Your last score</p>
                <h3 className="h2" style={{ margin: "6px 0 0" }}>Band {lastBand.toFixed(1)}</h3>
              </div>
              <ScoreRing value={lastBand} />
            </div>

            {CRITERIA.map(c => (
              <div key={c.k} style={{ marginBottom: 12 }}>
                <div className="flex jcb" style={{ fontSize: 13, marginBottom: 4, color: "var(--text-2)" }}>
                  <span>{c.k}</span>
                  <span style={{ fontFamily: "var(--ff-mono)", color: "var(--text)" }}>{c.v.toFixed(1)}</span>
                </div>
                <div className="bar"><span style={{ width: `${(c.v / 9) * 100}%` }} /></div>
              </div>
            ))}
          </div>

          <div className="card">
            <p className="eyebrow" style={{ margin: 0, marginBottom: 14 }}>Teacher comments · in-line</p>
            {COMMENTS.map((c, i) => (
              <div key={i} className="comment">
                <div className="hd"><b>{c.tag}</b><span>{c.loc}</span></div>
                <div className="txt">{c.body}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .writing-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </StudentShell>
  );
}
