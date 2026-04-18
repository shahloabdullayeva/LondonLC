"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ChevronLeft, ChevronRight, Clock, BarChart3 } from "lucide-react";
import StudentShell from "@/components/StudentShell";
import { getSession, getAttempts, type AttemptData } from "@/lib/store";
import { allTests } from "@/data/ielts-tests";

const AVAILABLE_BOOKS = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const TEST_TYPE = "listening" as const;

export default function ListeningPage() {
  const router = useRouter();
  const [session, setSession] = useState<{ id: string } | null>(null);
  const [selectedBook, setSelectedBook] = useState<number | null>(null);
  const [attempts, setAttempts] = useState<AttemptData[]>([]);

  useEffect(() => {
    const s = getSession();
    if (!s || s.isAdmin) { router.push("/auth/login"); return; }
    setSession(s);
    getAttempts().then(all => setAttempts(all.filter(a => a.studentId === s.id)));
  }, [router]);

  if (!session) return null;

  const completed = attempts.filter(a => a.testType === TEST_TYPE && a.status === "completed");
  const avgBand = completed.length ? (completed.reduce((s, a) => s + a.bandScore, 0) / completed.length).toFixed(1) : "—";
  const bestBand = completed.length ? Math.max(...completed.map(a => a.bandScore)).toFixed(1) : "—";

  return (
    <StudentShell>
      <p className="eyebrow">Practice · Listening</p>
      <h1 className="h1"><em>Listening</em> tests</h1>
      <p className="lede" style={{ marginTop: 16, marginBottom: 32 }}>
        Pick a Cambridge IELTS book and start a timed listening practice. Your scores are tracked automatically.
      </p>

      <div className="grid cols-4" style={{ marginBottom: 32 }}>
        <div className="stat">
          <div className="label">Tests taken</div>
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
        <div className="stat">
          <div className="label">Books available</div>
          <div className="value">{AVAILABLE_BOOKS.length}</div>
        </div>
      </div>

      {selectedBook === null ? (
        <>
          <div style={{ marginBottom: 20 }}>
            <h2 className="h2" style={{ marginBottom: 4 }}>Cambridge IELTS Books</h2>
            <p style={{ fontSize: 13, color: "var(--text-2)" }}>Cambridge 10–20 · Click an available book to practice</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 8 }}>
            {AVAILABLE_BOOKS.map(n => {
              const bookTests = allTests.filter(t => t.bookNumber === n && t.type === TEST_TYPE);
              return (
                <button key={n} onClick={() => setSelectedBook(n)}
                  className="list-row"
                  style={{ display: "flex", alignItems: "center", gap: 14, padding: "14px 16px", background: "var(--surface)", border: "1px solid var(--line)", borderRadius: 12, cursor: "pointer", textAlign: "left", fontFamily: "inherit", color: "inherit", width: "100%" }}>
                  <div style={{ width: 38, height: 38, borderRadius: 10, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: 15, fontFamily: "var(--ff-mono)", background: "var(--surface-2)", color: "var(--text)" }}>
                    {n}
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: 14, fontWeight: 600, fontFamily: "var(--ff-serif)", color: "var(--text)", marginBottom: 2 }}>
                      Cambridge IELTS {n}
                    </div>
                    <div style={{ fontSize: 11, fontFamily: "var(--ff-mono)", color: "var(--text-3)", letterSpacing: "0.04em" }}>
                      {bookTests.length} listening test{bookTests.length !== 1 ? "s" : ""}
                    </div>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 12, fontWeight: 600, color: "var(--accent)", flexShrink: 0 }}>
                    Open <ChevronRight size={14} />
                  </div>
                </button>
              );
            })}
          </div>
        </>
      ) : (
        <>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
            <button onClick={() => setSelectedBook(null)} className="btn ghost sm" style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <ChevronLeft size={14} /> All Books
            </button>
            <span style={{ fontFamily: "var(--ff-serif)", fontSize: 16, fontWeight: 500, color: "var(--text)" }}>
              Cambridge IELTS {selectedBook}
            </span>
          </div>

          {(() => {
            const bookTests = allTests.filter(t => t.bookNumber === selectedBook && t.type === TEST_TYPE)
              .sort((a, b) => a.testNumber - b.testNumber);
            if (bookTests.length === 0) return (
              <p style={{ color: "var(--text-3)", fontSize: 14 }}>No listening tests available for this book yet.</p>
            );
            return (
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 14 }}>
                {bookTests.map(test => {
                  const myBest = attempts.filter(a => a.testId === test.id && a.status === "completed");
                  const best = myBest.length ? Math.max(...myBest.map(a => a.bandScore)) : null;
                  const totalQ = test.sections.reduce((s, sec) => s + sec.questions.length, 0);
                  return (
                    <div key={test.id} className="card" style={{ padding: 20, cursor: "pointer", transition: "border-color 0.15s, transform 0.15s" }}
                      onClick={() => router.push(`/student/test/${test.id}`)}
                      onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                      onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--line)"; e.currentTarget.style.transform = "none"; }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
                        <div>
                          <div style={{ fontFamily: "var(--ff-mono)", fontSize: 10, fontWeight: 600, color: "var(--text-3)", marginBottom: 4, textTransform: "uppercase", letterSpacing: "0.1em" }}>
                            Test {test.testNumber}
                          </div>
                          <h3 style={{ fontFamily: "var(--ff-serif)", fontSize: 16, fontWeight: 500, color: "var(--text)", marginBottom: 3 }}>{test.title}</h3>
                          <p style={{ fontSize: 12, color: "var(--text-2)" }}>Listening Test</p>
                        </div>
                        {best !== null && (
                          <span className="chip" style={{ color: "#34d399", borderColor: "rgba(16,185,129,0.3)", fontSize: 11 }}>
                            Best: {best}
                          </span>
                        )}
                      </div>
                      <div style={{ display: "flex", gap: 14, marginBottom: 16, fontSize: 12, color: "var(--text-2)" }}>
                        <span style={{ display: "flex", alignItems: "center", gap: 5 }}><Clock size={12} /> {test.durationMinutes} min</span>
                        <span style={{ display: "flex", alignItems: "center", gap: 5 }}><BarChart3 size={12} /> {totalQ} questions</span>
                      </div>
                      <button className="btn primary sm" style={{ width: "100%" }}>
                        Start practice <ChevronRight size={14} />
                      </button>
                    </div>
                  );
                })}
              </div>
            );
          })()}
        </>
      )}
    </StudentShell>
  );
}
