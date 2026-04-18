"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ChevronDown, ChevronUp, History } from "lucide-react";
import StudentShell from "@/components/StudentShell";
import { getSession, getAttempts, type AttemptData } from "@/lib/store";
import { getTestById } from "@/data/ielts-tests";

export default function ResultsPage() {
  const router = useRouter();
  const [session, setSession] = useState<{ id: string } | null>(null);
  const [attempts, setAttempts] = useState<AttemptData[]>([]);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  useEffect(() => {
    const s = getSession();
    if (!s || s.isAdmin) { router.push("/auth/login"); return; }
    setSession(s);
    getAttempts().then(all => setAttempts(all.filter(a => a.studentId === s.id)));
  }, [router]);

  if (!session) return null;

  const completed = attempts.filter(a => a.status === "completed");
  const avgBand = completed.length ? (completed.reduce((s, a) => s + a.bandScore, 0) / completed.length).toFixed(1) : "—";
  const bestBand = completed.length ? Math.max(...completed.map(a => a.bandScore)).toFixed(1) : "—";

  return (
    <StudentShell>
      <p className="eyebrow">Overview · Performance</p>
      <h1 className="h1"><em>My</em> results</h1>
      <p className="lede" style={{ marginTop: 16, marginBottom: 32 }}>
        All your completed and cancelled tests with full answer details.
      </p>

      <div className="grid cols-3" style={{ marginBottom: 32 }}>
        <div className="stat">
          <div className="label">Tests completed</div>
          <div className="value">{completed.length}</div>
        </div>
        <div className="stat">
          <div className="label">Average band</div>
          <div className="value">{avgBand}</div>
        </div>
        <div className="stat">
          <div className="label">Best band</div>
          <div className="value">{bestBand}</div>
        </div>
      </div>

      {attempts.length === 0 ? (
        <div style={{ textAlign: "center", padding: "60px 0", color: "var(--text-3)" }}>
          <History size={36} style={{ margin: "0 auto 12px", opacity: 0.3 }} />
          <p style={{ fontWeight: 600 }}>No test history yet.</p>
        </div>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {[...attempts].reverse().map(a => {
            const isExpanded = expandedId === a.id;
            const testData = getTestById(a.testId);
            return (
              <div key={a.id} className="card" style={{ padding: 0, overflow: "hidden" }}>
                <button onClick={() => setExpandedId(isExpanded ? null : a.id)}
                  style={{ display: "flex", alignItems: "center", gap: 14, padding: "14px 18px", cursor: "pointer", width: "100%", background: "transparent", border: "none", fontFamily: "inherit", color: "inherit", textAlign: "left" }}>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontFamily: "var(--ff-serif)", fontWeight: 500, fontSize: 15, color: "var(--text)", marginBottom: 2 }}>
                      {a.testTitle}
                      {a.testType === "reading" && !/reading/i.test(a.testTitle) && " – Reading"}
                    </div>
                    <div style={{ display: "flex", gap: 10, flexWrap: "wrap", fontSize: 11, fontFamily: "var(--ff-mono)", color: "var(--text-3)", letterSpacing: "0.04em" }}>
                      <span>{a.testType}</span>
                      <span>·</span>
                      <span>{new Date(a.submittedAt).toLocaleDateString()}</span>
                      <span>·</span>
                      <span>{a.timeSpentSeconds ? `${Math.floor(a.timeSpentSeconds / 60)}m` : "–"}</span>
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: 10, alignItems: "center", flexShrink: 0 }}>
                    {a.status === "completed" ? (
                      <>
                        <span style={{ fontSize: 12, color: "var(--text-2)" }}>{a.score}/{a.maxScore}</span>
                        <span style={{ fontFamily: "var(--ff-serif)", fontSize: 20, fontWeight: 500, color: "var(--accent)" }}>{a.bandScore}</span>
                      </>
                    ) : (
                      <span className="chip danger" style={{ fontSize: 11 }}>Cancelled</span>
                    )}
                    {isExpanded ? <ChevronUp size={14} color="var(--text-3)" /> : <ChevronDown size={14} color="var(--text-3)" />}
                  </div>
                </button>

                {isExpanded && testData && (
                  <div style={{ borderTop: "1px solid var(--line)", padding: "16px 18px" }}>
                    {a.status === "cancelled" && (
                      <div style={{ marginBottom: 14, fontSize: 12, color: "var(--danger)" }}>
                        {a.cancelReason || "Test was cancelled before submission."}
                      </div>
                    )}
                    {testData.sections.map(sec => (
                      <div key={sec.id} style={{ marginBottom: 20 }}>
                        <div style={{ fontFamily: "var(--ff-mono)", fontSize: 10, fontWeight: 600, color: "var(--text-3)", marginBottom: 10, textTransform: "uppercase", letterSpacing: "0.1em" }}>{sec.title}</div>
                        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                          {sec.questions.map(q => {
                            const userAns = (a.answers[q.id] || "").trim();
                            const correctOpts = q.correctAnswer.toLowerCase().split("/").map(s => s.trim());
                            const isCorrect = !!userAns && correctOpts.some(c => userAns.toLowerCase() === c || userAns.toLowerCase().includes(c));
                            return (
                              <div key={q.id} style={{ display: "flex", alignItems: "flex-start", gap: 10, padding: "8px 12px", borderRadius: 9, background: !userAns ? "var(--surface)" : isCorrect ? "rgba(16,185,129,0.07)" : "rgba(239,68,68,0.07)", border: `1px solid ${!userAns ? "var(--line)" : isCorrect ? "rgba(16,185,129,0.2)" : "rgba(239,68,68,0.2)"}` }}>
                                <span style={{ width: 22, height: 22, borderRadius: "50%", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 10, fontFamily: "var(--ff-mono)", background: !userAns ? "var(--surface-2)" : isCorrect ? "rgba(16,185,129,0.25)" : "rgba(239,68,68,0.25)", color: !userAns ? "var(--text-3)" : isCorrect ? "#34d399" : "#f87171" }}>
                                  {q.number}
                                </span>
                                <div style={{ flex: 1, minWidth: 0 }}>
                                  <div style={{ fontSize: 12, color: "var(--text-2)", marginBottom: 6, lineHeight: 1.4 }}>{q.question.split("\n")[0].slice(0, 140)}</div>
                                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                                    <span style={{ fontSize: 11, padding: "2px 8px", borderRadius: 5, fontWeight: 600, background: !userAns ? "var(--surface-2)" : isCorrect ? "rgba(16,185,129,0.15)" : "rgba(239,68,68,0.15)", color: !userAns ? "var(--text-3)" : isCorrect ? "#34d399" : "#f87171" }}>
                                      Your answer: {userAns || "(no answer)"}
                                    </span>
                                    {!isCorrect && (
                                      <span style={{ fontSize: 11, padding: "2px 8px", borderRadius: 5, background: "var(--surface-2)", color: "var(--text)", fontWeight: 600 }}>
                                        Correct: {q.correctAnswer}
                                      </span>
                                    )}
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </StudentShell>
  );
}
