"use client";
import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { Send, Loader2, Download } from "lucide-react";
import StudentShell from "@/components/StudentShell";
import {
  getSession,
  getLastSubmission,
  submitEssay,
  gradeEssayWithAI,
  type StudentSession,
  type WritingSubmission,
  type Correction,
} from "@/lib/store";

const CORRECTION_COLORS: Record<Correction["type"], { bg: string; fg: string; label: string }> = {
  grammar:     { bg: "rgba(239,68,68,0.14)",  fg: "#fca5a5", label: "Grammar" },
  vocabulary:  { bg: "rgba(59,130,246,0.14)", fg: "#93c5fd", label: "Vocabulary" },
  cohesion:    { bg: "rgba(168,85,247,0.14)", fg: "#d8b4fe", label: "Cohesion" },
  style:       { bg: "rgba(16,185,129,0.14)", fg: "#6ee7b7", label: "Style" },
  spelling:    { bg: "rgba(234,179,8,0.14)",  fg: "#fde047", label: "Spelling" },
  punctuation: { bg: "rgba(236,72,153,0.14)", fg: "#f9a8d4", label: "Punctuation" },
};

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
  const [filter, setFilter] = useState<"all" | Correction["type"]>("all");

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
      corrections: grading.corrections,
      strengths: grading.strengths,
      nextSteps: grading.nextSteps,
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
  const allCorrections: Correction[] = lastSub?.corrections ?? [];
  const visibleCorrections = filter === "all"
    ? allCorrections
    : allCorrections.filter(c => c.type === filter);
  const typeCounts = allCorrections.reduce<Record<string, number>>((acc, c) => {
    acc[c.type] = (acc[c.type] ?? 0) + 1;
    return acc;
  }, {});

  const handleDownload = () => {
    if (typeof window !== "undefined") window.print();
  };

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

                <button
                  className="btn primary sm"
                  onClick={handleDownload}
                  style={{ marginTop: 16, width: "100%", justifyContent: "center" }}
                >
                  <Download size={12} /> Download PDF report
                </button>
              </div>

              {lastSub!.feedback && lastSub!.feedback.length > 0 && (
                <div className="card" style={{ marginBottom: 20 }}>
                  <p className="eyebrow" style={{ margin: 0, marginBottom: 14 }}>Examiner feedback · Claude Opus 4.7</p>
                  {lastSub!.feedback.map((f, i) => (
                    <div key={i} className="comment">
                      <div className="hd"><b>{f.criterion}</b></div>
                      <div className="txt">{f.comment}</div>
                    </div>
                  ))}
                </div>
              )}

              {allCorrections.length > 0 && (
                <div className="card" style={{ marginBottom: 20 }}>
                  <div className="flex jcb aic" style={{ marginBottom: 14 }}>
                    <p className="eyebrow" style={{ margin: 0 }}>Line-by-line corrections · {allCorrections.length}</p>
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 14 }}>
                    <button
                      onClick={() => setFilter("all")}
                      className="chip"
                      data-active={filter === "all"}
                    >
                      All · {allCorrections.length}
                    </button>
                    {(Object.keys(CORRECTION_COLORS) as Correction["type"][]).map(t => {
                      const n = typeCounts[t] ?? 0;
                      if (n === 0) return null;
                      return (
                        <button
                          key={t}
                          onClick={() => setFilter(t)}
                          className="chip"
                          data-active={filter === t}
                          style={{ color: CORRECTION_COLORS[t].fg, background: filter === t ? CORRECTION_COLORS[t].bg : undefined }}
                        >
                          {CORRECTION_COLORS[t].label} · {n}
                        </button>
                      );
                    })}
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                    {visibleCorrections.map((c, i) => {
                      const col = CORRECTION_COLORS[c.type] ?? CORRECTION_COLORS.style;
                      return (
                        <div key={i} style={{
                          border: "1px solid var(--line)", borderRadius: 10,
                          padding: "12px 14px", background: "var(--surface-2)",
                        }}>
                          <div style={{
                            display: "inline-block",
                            fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase",
                            padding: "3px 8px", borderRadius: 999,
                            background: col.bg, color: col.fg, marginBottom: 8,
                            fontFamily: "var(--ff-mono)",
                          }}>
                            {col.label}
                          </div>
                          <div style={{ fontSize: 13, color: "var(--text-2)", lineHeight: 1.55, marginBottom: 6 }}>
                            <span style={{ textDecoration: "line-through", opacity: 0.7 }}>{c.original}</span>
                          </div>
                          <div style={{ fontSize: 13, color: "var(--text)", lineHeight: 1.55, marginBottom: 8, fontWeight: 500 }}>
                            → {c.suggestion}
                          </div>
                          <div style={{ fontSize: 12, color: "var(--text-3)", lineHeight: 1.55 }}>
                            {c.explanation}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {(lastSub!.strengths?.length || lastSub!.nextSteps?.length) ? (
                <div className="card">
                  {lastSub!.strengths && lastSub!.strengths.length > 0 && (
                    <div style={{ marginBottom: 18 }}>
                      <p className="eyebrow" style={{ margin: 0, marginBottom: 10 }}>What's working</p>
                      <ul style={{ margin: 0, paddingLeft: 18, fontSize: 13, color: "var(--text-2)", lineHeight: 1.7 }}>
                        {lastSub!.strengths.map((s, i) => <li key={i}>{s}</li>)}
                      </ul>
                    </div>
                  )}
                  {lastSub!.nextSteps && lastSub!.nextSteps.length > 0 && (
                    <div>
                      <p className="eyebrow" style={{ margin: 0, marginBottom: 10 }}>Next steps</p>
                      <ul style={{ margin: 0, paddingLeft: 18, fontSize: 13, color: "var(--text-2)", lineHeight: 1.7 }}>
                        {lastSub!.nextSteps.map((s, i) => <li key={i}>{s}</li>)}
                      </ul>
                    </div>
                  )}
                </div>
              ) : null}
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

      {hasScore && (
        <div className="print-report" aria-hidden>
          <header>
            <div className="brand">London · LC</div>
            <div className="meta">
              <div><b>{session.name} {session.surname}</b></div>
              <div>{new Date(lastSub!.gradedAt ?? lastSub!.createdAt).toLocaleString()}</div>
              <div>{lastSub!.wordCount} words</div>
            </div>
          </header>
          <h1>IELTS Writing Task 2 — Band {lastSub!.overallBand!.toFixed(1)}</h1>
          <section>
            <h2>Prompt</h2>
            <p>{lastSub!.prompt}</p>
          </section>
          <section>
            <h2>Essay</h2>
            <p style={{ whiteSpace: "pre-wrap" }}>{lastSub!.essay}</p>
          </section>
          <section>
            <h2>Scores</h2>
            <table>
              <tbody>
                {criteria.map(c => (
                  <tr key={c.k}><td>{c.k}</td><td>{c.v.toFixed(1)}</td></tr>
                ))}
                <tr><td><b>Overall</b></td><td><b>{lastSub!.overallBand!.toFixed(1)}</b></td></tr>
              </tbody>
            </table>
          </section>
          {lastSub!.feedback && lastSub!.feedback.length > 0 && (
            <section>
              <h2>Examiner feedback</h2>
              {lastSub!.feedback.map((f, i) => (
                <div key={i} className="fb">
                  <h3>{f.criterion}</h3>
                  <p>{f.comment}</p>
                </div>
              ))}
            </section>
          )}
          {allCorrections.length > 0 && (
            <section>
              <h2>Corrections ({allCorrections.length})</h2>
              {allCorrections.map((c, i) => (
                <div key={i} className="corr">
                  <div className="tag">{(CORRECTION_COLORS[c.type] ?? CORRECTION_COLORS.style).label}</div>
                  <div className="orig">Original: “{c.original}”</div>
                  <div className="sugg">Suggested: “{c.suggestion}”</div>
                  <div className="expl">{c.explanation}</div>
                </div>
              ))}
            </section>
          )}
          {lastSub!.strengths && lastSub!.strengths.length > 0 && (
            <section>
              <h2>What's working</h2>
              <ul>{lastSub!.strengths.map((s, i) => <li key={i}>{s}</li>)}</ul>
            </section>
          )}
          {lastSub!.nextSteps && lastSub!.nextSteps.length > 0 && (
            <section>
              <h2>Next steps</h2>
              <ul>{lastSub!.nextSteps.map((s, i) => <li key={i}>{s}</li>)}</ul>
            </section>
          )}
          <footer>Generated by London LC · Graded by Claude Opus 4.7</footer>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .writing-grid { grid-template-columns: 1fr !important; }
        }
        @keyframes spin { to { transform: rotate(360deg); } }
        .spin { animation: spin 1s linear infinite; }

        .chip {
          font-family: var(--ff-mono);
          font-size: 10px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 5px 10px;
          border-radius: 999px;
          border: 1px solid var(--line);
          background: transparent;
          color: var(--text-2);
          cursor: pointer;
          transition: background 0.15s, color 0.15s, border-color 0.15s;
        }
        .chip:hover { border-color: var(--line-2); color: var(--text); }
        .chip[data-active="true"] { background: var(--accent); color: var(--bg); border-color: var(--accent); }

        .print-report { display: none; }

        @media print {
          @page { margin: 14mm 14mm 16mm; }
          body { background: #fff !important; }
          .student-shell .sh-app .sb,
          .student-shell .sh-app .topbar,
          .writing-grid,
          .eyebrow,
          .btn { display: none !important; }
          .student-shell .sh-main { margin: 0 !important; padding: 0 !important; }
          .student-shell .page { padding: 0 !important; max-width: none !important; }

          .print-report {
            display: block !important;
            color: #111;
            font-family: "Iowan Old Style", "Fraunces", Georgia, serif;
            font-size: 11.5pt;
            line-height: 1.55;
          }
          .print-report header {
            display: flex; justify-content: space-between; align-items: flex-start;
            border-bottom: 1px solid #333; padding-bottom: 10pt; margin-bottom: 14pt;
          }
          .print-report .brand {
            font-family: "JetBrains Mono", ui-monospace, monospace;
            font-size: 10pt; letter-spacing: 0.14em; text-transform: uppercase;
          }
          .print-report .meta { font-size: 9.5pt; text-align: right; color: #333; }
          .print-report h1 {
            font-size: 22pt; font-weight: 600; margin: 0 0 18pt;
            letter-spacing: -0.01em;
          }
          .print-report h2 {
            font-size: 12pt; font-weight: 700;
            text-transform: uppercase; letter-spacing: 0.12em;
            margin: 16pt 0 6pt; color: #222;
            border-bottom: 1px solid #ccc; padding-bottom: 3pt;
          }
          .print-report h3 { font-size: 11pt; margin: 8pt 0 3pt; }
          .print-report p { margin: 0 0 6pt; }
          .print-report section { margin-bottom: 10pt; page-break-inside: avoid; }
          .print-report table { width: 100%; border-collapse: collapse; font-size: 11pt; }
          .print-report table td { padding: 4pt 0; border-bottom: 1px solid #eee; }
          .print-report table td:last-child { text-align: right; font-family: "JetBrains Mono", ui-monospace, monospace; }
          .print-report .fb { margin-bottom: 8pt; page-break-inside: avoid; }
          .print-report .corr {
            margin: 6pt 0; padding: 6pt 0; border-bottom: 1px dashed #ccc;
            page-break-inside: avoid;
          }
          .print-report .corr .tag {
            display: inline-block; font-size: 8.5pt; font-family: "JetBrains Mono", ui-monospace, monospace;
            letter-spacing: 0.1em; text-transform: uppercase; color: #555;
            border: 1px solid #999; padding: 1pt 6pt; border-radius: 999px; margin-bottom: 4pt;
          }
          .print-report .corr .orig { color: #a00; font-size: 10.5pt; }
          .print-report .corr .sugg { color: #070; font-size: 10.5pt; font-weight: 600; margin: 2pt 0; }
          .print-report .corr .expl { color: #444; font-size: 10pt; font-style: italic; }
          .print-report ul { padding-left: 16pt; }
          .print-report footer {
            margin-top: 16pt; padding-top: 8pt; border-top: 1px solid #ccc;
            font-family: "JetBrains Mono", ui-monospace, monospace;
            font-size: 8.5pt; letter-spacing: 0.1em; text-transform: uppercase;
            color: #666; text-align: center;
          }
        }
      `}</style>
    </StudentShell>
  );
}
