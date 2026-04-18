"use client";
import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { Send, Loader2 } from "lucide-react";
import StudentShell from "@/components/StudentShell";
import {
  getSession,
  getLastSubmission,
  submitEssay,
  gradeEssayWithAI,
  type StudentSession,
  type WritingSubmission,
} from "@/lib/store";

const DRAFT_KEY = "llc.writing.draft.v1";
const PROMPT = `"Many companies now allow their employees to work remotely. Do you think the advantages of remote work outweigh the disadvantages? Discuss both views and give your own opinion."`;

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

type GradingStatus = "idle" | "submitting" | "grading" | "done" | "error";

export default function WritingPage() {
  const router = useRouter();
  const [session, setSession] = useState<StudentSession | null>(null);
  const [text, setText] = useState("");
  const [savedAt, setSavedAt] = useState<string | null>(null);
  const [status, setStatus] = useState<GradingStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [lastSub, setLastSub] = useState<WritingSubmission | null>(null);

  useEffect(() => {
    const s = getSession();
    if (!s || s.isAdmin) { router.push("/auth/login"); return; }
    setSession(s);
    try { setText(localStorage.getItem(DRAFT_KEY) || ""); } catch {}
    getLastSubmission(s.id).then(setLastSub);
  }, [router]);

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

  const handleSubmit = async () => {
    if (!session || !targetHit || status === "submitting" || status === "grading") return;

    setStatus("submitting");
    setErrorMsg("");

    const sub = await submitEssay(session.id, `${session.name} ${session.surname}`, PROMPT, text);
    if (!sub) {
      setStatus("error");
      setErrorMsg("Failed to save essay. Check your connection.");
      return;
    }

    setStatus("grading");
    setLastSub(sub);

    const grading = await gradeEssayWithAI(sub.id, PROMPT, text);
    if (!grading) {
      setStatus("error");
      setErrorMsg("Essay saved but AI grading failed. Your teacher can still review it manually.");
      return;
    }

    setLastSub(prev => prev ? {
      ...prev,
      taskResponse: grading.taskResponse,
      coherenceCohesion: grading.coherenceCohesion,
      lexicalResource: grading.lexicalResource,
      grammarAccuracy: grading.grammarAccuracy,
      overallBand: grading.overallBand,
      feedback: grading.feedback,
      gradedAt: new Date().toISOString(),
    } : null);

    setStatus("done");
    try { localStorage.removeItem(DRAFT_KEY); } catch {}
    setText("");
  };

  if (!session) return null;

  const hasScore = lastSub?.overallBand != null;
  const criteria = hasScore ? [
    { k: "Task response", v: lastSub!.taskResponse! },
    { k: "Coherence & cohesion", v: lastSub!.coherenceCohesion! },
    { k: "Lexical resource", v: lastSub!.lexicalResource! },
    { k: "Grammar range & accuracy", v: lastSub!.grammarAccuracy! },
  ] : [];

  return (
    <StudentShell>
      <p className="eyebrow">Writing · Task 2</p>
      <h1 className="h1"><em>Writing</em> feedback</h1>
      <p className="lede" style={{ marginTop: 16, marginBottom: 32 }}>
        Write your essay, submit for AI review, then get scored on the four
        official IELTS criteria with specific feedback. Draft auto-saves locally.
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
              disabled={status === "submitting" || status === "grading"}
              style={{
                width: "100%", display: "block", resize: "vertical",
                background: "transparent", border: "none",
                color: "var(--text)", fontFamily: "var(--ff-serif)",
                fontSize: 17, lineHeight: 1.7,
                padding: "32px 36px", minHeight: 340, outline: "none",
              }}
            />
            <div className="hd" style={{ borderTop: "1px solid var(--line)", borderBottom: 0 }}>
              <span style={{ fontSize: 11, color: "var(--text-3)" }}>
                {status === "grading" ? "Claude is reading your essay…" : "Graded by Claude Opus 4.6"}
              </span>
              <button
                className="btn primary sm"
                disabled={!targetHit || status === "submitting" || status === "grading"}
                onClick={handleSubmit}
              >
                {status === "submitting" ? (
                  <><Loader2 size={12} className="spin" /> Saving…</>
                ) : status === "grading" ? (
                  <><Loader2 size={12} className="spin" /> Grading…</>
                ) : status === "done" ? (
                  <>Submit another <Send size={12} /></>
                ) : (
                  <>Submit for AI review <Send size={12} /></>
                )}
              </button>
            </div>
          </div>

          {errorMsg && (
            <div style={{ marginTop: 12, padding: "10px 14px", borderRadius: 8, background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.3)", color: "#fca5a5", fontSize: 13 }}>
              {errorMsg}
            </div>
          )}
        </div>

        <div>
          {hasScore ? (
            <>
              <div className="card" style={{ marginBottom: 20 }}>
                <div className="flex jcb aic" style={{ marginBottom: 20 }}>
                  <div>
                    <p className="eyebrow" style={{ margin: 0 }}>Your last score</p>
                    <h3 className="h2" style={{ margin: "6px 0 0" }}>Band {lastSub!.overallBand!.toFixed(1)}</h3>
                  </div>
                  <ScoreRing value={lastSub!.overallBand!} />
                </div>

                {criteria.map(c => (
                  <div key={c.k} style={{ marginBottom: 12 }}>
                    <div className="flex jcb" style={{ fontSize: 13, marginBottom: 4, color: "var(--text-2)" }}>
                      <span>{c.k}</span>
                      <span style={{ fontFamily: "var(--ff-mono)", color: "var(--text)" }}>{c.v.toFixed(1)}</span>
                    </div>
                    <div className="bar"><span style={{ width: `${(c.v / 9) * 100}%` }} /></div>
                  </div>
                ))}
              </div>

              {lastSub!.feedback && lastSub!.feedback.length > 0 && (
                <div className="card">
                  <p className="eyebrow" style={{ margin: 0, marginBottom: 14 }}>AI feedback · Claude Opus 4.6</p>
                  {lastSub!.feedback.map((f, i) => (
                    <div key={i} className="comment">
                      <div className="hd"><b>{f.criterion}</b></div>
                      <div className="txt">{f.comment}</div>
                    </div>
                  ))}
                </div>
              )}
            </>
          ) : (
            <div className="card" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "60px 32px", textAlign: "center" }}>
              <div style={{ width: 64, height: 64, borderRadius: "50%", background: "var(--surface-2)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
                <Send size={24} style={{ color: "var(--text-3)" }} />
              </div>
              <h3 style={{ fontFamily: "var(--ff-serif)", fontSize: 18, fontWeight: 500, color: "var(--text)", marginBottom: 8 }}>
                No scores yet
              </h3>
              <p style={{ fontSize: 13, color: "var(--text-2)", lineHeight: 1.6, maxWidth: 280 }}>
                Write at least 250 words and submit your essay. Claude will score it on the four IELTS criteria and give you specific feedback.
              </p>
            </div>
          )}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .writing-grid { grid-template-columns: 1fr !important; }
        }
        @keyframes spin { to { transform: rotate(360deg); } }
        .spin { animation: spin 1s linear infinite; }
      `}</style>
    </StudentShell>
  );
}
