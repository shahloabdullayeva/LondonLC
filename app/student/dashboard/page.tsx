"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { BookOpen, Headphones, LogOut, User, Clock, Award, ChevronRight, BarChart3, Star, ChevronLeft, Lock, History, ChevronDown, ChevronUp, PenLine, FileText, Mic, Music } from "lucide-react";
import { getSession, clearSession, getAttempts, type AttemptData } from "@/lib/store";
import { allTests, getTestById } from "@/data/ielts-tests";
import { quotes, type Quote } from "@/lib/quotes";
import type { StudentSession } from "@/lib/store";

type TestType = "reading" | "listening";
type SidebarView = "reading" | "listening" | "history";

// Books that have real test content available
const AVAILABLE_BOOKS = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

const S = {
  page: { minHeight: "100vh", background: "#0a051f", fontFamily: "Inter, system-ui, sans-serif", display: "flex", flexDirection: "column" as const },
  nav: { display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 28px", height: 60, background: "#110730", borderBottom: "1px solid rgba(255,255,255,0.08)", flexShrink: 0 as const },
};

export default function StudentDashboard() {
  const router = useRouter();
  const [session, setSession] = useState<StudentSession | null>(null);
  const [sidebarView, setSidebarView] = useState<SidebarView>("reading");
  const [typeFilter, setTypeFilter] = useState<TestType>("reading");
  const [selectedBook, setSelectedBook] = useState<number | null>(null);
  const [expandedAttempt, setExpandedAttempt] = useState<string | null>(null);
  const [attempts, setAttempts] = useState<AttemptData[]>([]);
  const [quote, setQuote] = useState<Quote | null>(null);

  useEffect(() => {
    const s = getSession();
    if (!s || s.isAdmin) { router.push("/auth/login"); return; }
    setSession(s);
    getAttempts().then(all => setAttempts(all.filter(a => a.studentId === s.id)));
  }, [router]);

  // Pick a random quote each visit. Client-side to avoid hydration mismatch.
  useEffect(() => {
    if (quotes.length > 0) setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
  }, []);
  const typeAttempts = attempts.filter(a => a.testType === typeFilter && a.status === "completed");
  const completed = attempts.filter(a => a.status === "completed");
  const avgBand = typeAttempts.length ? (typeAttempts.reduce((s, a) => s + a.bandScore, 0) / typeAttempts.length).toFixed(1) : "—";
  const bestBand = typeAttempts.length ? Math.max(...typeAttempts.map(a => a.bandScore)).toFixed(1) : "—";


  if (!session) return null;

  return (
    <div style={S.page}>
      {/* Navbar */}
      <nav style={S.nav}>
        <span style={{ fontWeight: 900, fontSize: 19, color: "#fff", letterSpacing: "-0.3px", fontFamily: "Inter, system-ui, sans-serif" }}>London <span style={{ color: "#a78bfa" }}>LC</span></span>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "6px 14px", background: "rgba(255,255,255,0.06)", borderRadius: 20, border: "1px solid rgba(255,255,255,0.1)" }}>
            <div style={{ width: 26, height: 26, borderRadius: "50%", background: "linear-gradient(135deg,#7c3aed,#a78bfa)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <User size={12} color="white" />
            </div>
            <span style={{ fontSize: 13, fontWeight: 600, color: "#e8eeff" }}>{session.name} {session.surname}</span>
            <span style={{ fontSize: 11, padding: "2px 8px", background: "rgba(124,58,237,0.3)", borderRadius: 10, color: "#c4b5fd", fontWeight: 600 }}>{session.group_name}</span>
          </div>
          <button onClick={() => { clearSession(); router.push("/"); }}
            style={{ display: "flex", alignItems: "center", gap: 6, padding: "7px 14px", background: "transparent", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 9, color: "rgba(255,255,255,0.5)", fontSize: 13, cursor: "pointer" }}>
            <LogOut size={13} /> Sign Out
          </button>
        </div>
      </nav>

      <div className="student-layout" style={{ flex: 1, display: "flex", overflow: "hidden" }}>
        {/* Sidebar — flat list of sections, each with an arrow. */}
        <aside className="student-sidebar" style={{ width: 240, background: "#0e0828", borderRight: "1px solid rgba(255,255,255,0.07)", padding: "24px 14px", display: "flex", flexDirection: "column", gap: 2, flexShrink: 0, overflowY: "auto" }}>
          <p style={{ fontSize: 10, fontWeight: 700, color: "rgba(255,255,255,0.3)", letterSpacing: "0.2em", textTransform: "uppercase", margin: "0 0 10px", paddingLeft: 10 }}>
            Sections
          </p>

          <SidebarLink icon={Headphones} label="Listening"
            active={sidebarView === "listening"}
            onClick={() => { setSidebarView("listening"); setTypeFilter("listening"); setSelectedBook(null); }} />
          <SidebarLink icon={BookOpen} label="Reading"
            active={sidebarView === "reading"}
            onClick={() => { setSidebarView("reading"); setTypeFilter("reading"); setSelectedBook(null); }} />
          <SidebarLink icon={PenLine} label="Writing" soon
            onClick={() => router.push("/writing")} />
          <SidebarLink icon={FileText} label="Articles"
            onClick={() => router.push("/articles")} />
          <SidebarLink icon={Mic} label="Podcasts"
            onClick={() => router.push("/podcasts")} />
          <SidebarLink icon={Music} label="Music"
            onClick={() => router.push("/music")} />

          <div style={{ height: 1, background: "rgba(255,255,255,0.07)", margin: "14px 0" }} />

          <SidebarLink icon={History} label="My History"
            active={sidebarView === "history"}
            onClick={() => { setSidebarView("history"); setSelectedBook(null); }} />

        </aside>

        {/* Main content */}
        <main className="student-main" style={{ flex: 1, overflowY: "auto", padding: "32px 36px" }}>
          {/* Welcome */}
          <div style={{ marginBottom: 20 }}>
            <h1 style={{ fontSize: 26, fontWeight: 800, color: "#fff", marginBottom: 4 }}>
              Welcome Back, {session.name}!
            </h1>
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 14 }}>Ready to boost your IELTS score? Let&apos;s practice!</p>
          </div>

          {/* Rotating quote — a new one every visit */}
          {quote && (
            <figure style={{
              margin: "0 0 28px", padding: "18px 22px",
              background: "rgba(255,255,255,0.025)",
              border: "1px solid rgba(255,255,255,0.06)",
              borderLeft: "2px solid rgba(167,139,250,0.6)",
              borderRadius: 10,
            }}>
              <blockquote style={{
                margin: 0, fontSize: 14, color: "rgba(255,255,255,0.78)",
                lineHeight: 1.65, fontStyle: "italic", fontWeight: 300,
              }}>
                &ldquo;{quote.text}&rdquo;
              </blockquote>
              {quote.author && (
                <figcaption style={{
                  marginTop: 8, fontSize: 11, letterSpacing: "0.18em",
                  textTransform: "uppercase", color: "rgba(255,255,255,0.35)", fontWeight: 600,
                }}>
                  — {quote.author}
                </figcaption>
              )}
            </figure>
          )}

          {/* Stats */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 14, marginBottom: 36 }}>
            {[
              { label: "Total Tests", value: typeAttempts.length, icon: BarChart3, sub: typeFilter === "reading" ? "Reading tests" : "Listening tests", color: "#8b5cf6" },
              { label: "Average Score", value: avgBand, icon: Award, sub: typeFilter === "reading" ? "Reading average" : "Listening average", color: "#10b981" },
              { label: "Best Score", value: bestBand, icon: Star, sub: typeFilter === "reading" ? "Reading best" : "Listening best", color: "#f59e0b" },
              { label: "All Completed", value: completed.length, icon: Clock, sub: "All test types", color: "#8b5cf6" },
            ].map(s => (
              <div key={s.label} style={{ background: "#140b35", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 16, padding: "20px 20px 16px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
                  <s.icon size={15} color={s.color} />
                  <span style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", fontWeight: 600 }}>{s.label}</span>
                </div>
                <div style={{ fontSize: 28, fontWeight: 900, color: "#fff", lineHeight: 1, marginBottom: 4 }}>{s.value}</div>
                <div style={{ fontSize: 11, color: "rgba(255,255,255,0.3)" }}>{s.sub}</div>
              </div>
            ))}
          </div>

          {/* History view */}
          {sidebarView === "history" ? (
            <div>
              <h2 style={{ fontSize: 18, fontWeight: 800, color: "#fff", marginBottom: 4 }}>My Test History</h2>
              <p style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", marginBottom: 24 }}>All your completed and cancelled tests with full answer details.</p>
              {attempts.length === 0 ? (
                <div style={{ textAlign: "center", padding: "60px 0", color: "rgba(255,255,255,0.3)" }}>
                  <History size={36} style={{ margin: "0 auto 12px", opacity: 0.3 }} />
                  <p style={{ fontWeight: 600 }}>No test history yet.</p>
                </div>
              ) : (
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {[...attempts].reverse().map(a => {
                    const isExpanded = expandedAttempt === a.id;
                    const testData = a.status === "completed" ? getTestById(a.testId) : null;
                    return (
                      <div key={a.id} style={{ background: "#140b35", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 14, overflow: "hidden" }}>
                        <div onClick={() => setExpandedAttempt(isExpanded ? null : a.id)}
                          style={{ display: "flex", alignItems: "center", gap: 14, padding: "14px 18px", cursor: "pointer", flexWrap: "wrap" }}>
                          <div style={{ flex: 1, minWidth: 0 }}>
                            <div style={{ fontWeight: 700, fontSize: 14, color: "#e8eeff", marginBottom: 2 }}>{a.testTitle}</div>
                            <div style={{ display: "flex", gap: 10, flexWrap: "wrap", fontSize: 12, color: "rgba(255,255,255,0.4)" }}>
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
                                <span style={{ fontSize: 12, color: "rgba(255,255,255,0.5)" }}>{a.score}/{a.maxScore}</span>
                                <span style={{ fontSize: 18, fontWeight: 900, color: "#a78bfa" }}>{a.bandScore}</span>
                              </>
                            ) : (
                              <span style={{ fontSize: 12, padding: "3px 9px", borderRadius: 10, background: "rgba(239,68,68,0.15)", color: "#f87171", fontWeight: 600 }}>Cancelled</span>
                            )}
                            {isExpanded ? <ChevronUp size={14} color="rgba(255,255,255,0.35)" /> : <ChevronDown size={14} color="rgba(255,255,255,0.35)" />}
                          </div>
                        </div>
                        {isExpanded && testData && a.status === "completed" && (
                          <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "16px 18px" }}>
                            {testData.sections.map(sec => (
                              <div key={sec.id} style={{ marginBottom: 20 }}>
                                <div style={{ fontSize: 12, fontWeight: 700, color: "rgba(255,255,255,0.4)", marginBottom: 10, textTransform: "uppercase", letterSpacing: "0.06em" }}>{sec.title}</div>
                                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                                  {sec.questions.map(q => {
                                    const userAns = (a.answers[q.id] || "").trim();
                                    const correctOpts = q.correctAnswer.toLowerCase().split("/").map(s => s.trim());
                                    const isCorrect = correctOpts.some(c => userAns.toLowerCase() === c || userAns.toLowerCase().includes(c));
                                    return (
                                      <div key={q.id} style={{ display: "flex", alignItems: "flex-start", gap: 10, padding: "8px 12px", borderRadius: 9, background: !userAns ? "rgba(255,255,255,0.03)" : isCorrect ? "rgba(16,185,129,0.07)" : "rgba(239,68,68,0.07)", border: `1px solid ${!userAns ? "rgba(255,255,255,0.06)" : isCorrect ? "rgba(16,185,129,0.2)" : "rgba(239,68,68,0.2)"}` }}>
                                        <span style={{ width: 22, height: 22, borderRadius: "50%", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 10, background: !userAns ? "rgba(255,255,255,0.07)" : isCorrect ? "rgba(16,185,129,0.25)" : "rgba(239,68,68,0.25)", color: !userAns ? "rgba(255,255,255,0.3)" : isCorrect ? "#34d399" : "#f87171" }}>
                                          {q.number}
                                        </span>
                                        <div style={{ flex: 1, minWidth: 0 }}>
                                          <div style={{ fontSize: 12, color: "rgba(255,255,255,0.65)", marginBottom: 6, lineHeight: 1.4 }}>{q.question.split("\n")[0].slice(0, 140)}</div>
                                          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                                            <span style={{ fontSize: 11, padding: "2px 8px", borderRadius: 5, fontWeight: 600, background: !userAns ? "rgba(255,255,255,0.05)" : isCorrect ? "rgba(16,185,129,0.15)" : "rgba(239,68,68,0.15)", color: !userAns ? "rgba(255,255,255,0.3)" : isCorrect ? "#34d399" : "#f87171" }}>
                                              Your answer: {userAns || "(no answer)"}
                                            </span>
                                            {!isCorrect && userAns && (
                                              <span style={{ fontSize: 11, padding: "2px 8px", borderRadius: 5, background: "rgba(124,58,237,0.15)", color: "#c4b5fd", fontWeight: 600 }}>
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
                        {isExpanded && a.status === "cancelled" && (
                          <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "12px 18px" }}>
                            <p style={{ fontSize: 13, color: "#fca5a5" }}>{a.cancelReason || "Test was cancelled."}</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          ) : selectedBook === null ? (
            <>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
                <div>
                  <h2 style={{ fontSize: 16, fontWeight: 700, color: "#fff", marginBottom: 3 }}>Cambridge IELTS Books</h2>
                  <p style={{ fontSize: 13, color: "rgba(255,255,255,0.35)" }}>Cambridge 1 – 20 · Click an available book to practice</p>
                </div>
                <span style={{ fontSize: 12, padding: "4px 12px", background: "rgba(124,58,237,0.15)", border: "1px solid rgba(124,58,237,0.25)", borderRadius: 20, color: "#a78bfa", fontWeight: 600 }}>
                  {AVAILABLE_BOOKS.length} books available
                </span>
              </div>

              {/* Books as a 2-column list */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 8 }}>
                {AVAILABLE_BOOKS.map(n => {
                  const available = true;
                  const bookTests = allTests.filter(t => t.bookNumber === n && t.type === typeFilter);
                  return (
                    <div key={n}
                      onClick={() => available && setSelectedBook(n)}
                      style={{ display: "flex", alignItems: "center", gap: 14, padding: "14px 16px", background: available ? "rgba(124,58,237,0.08)" : "rgba(255,255,255,0.02)", border: `1px solid ${available ? "rgba(124,58,237,0.25)" : "rgba(255,255,255,0.05)"}`, borderRadius: 12, cursor: available ? "pointer" : "default", transition: "all 0.15s" }}
                      onMouseEnter={e => available && ((e.currentTarget as HTMLElement).style.background = "rgba(124,58,237,0.14)", (e.currentTarget as HTMLElement).style.borderColor = "rgba(124,58,237,0.45)")}
                      onMouseLeave={e => available && ((e.currentTarget as HTMLElement).style.background = "rgba(124,58,237,0.08)", (e.currentTarget as HTMLElement).style.borderColor = "rgba(124,58,237,0.25)")}>
                      {/* Number badge */}
                      <div style={{ width: 38, height: 38, borderRadius: 10, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: 15, background: available ? "linear-gradient(135deg,#7c3aed,#6d28d9)" : "rgba(255,255,255,0.05)", color: available ? "#fff" : "rgba(255,255,255,0.2)" }}>
                        {n}
                      </div>
                      {/* Title */}
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ fontSize: 13, fontWeight: 700, color: available ? "#e8eeff" : "rgba(255,255,255,0.25)", marginBottom: 2 }}>
                          Cambridge IELTS {n}
                        </div>
                        <div style={{ fontSize: 11, color: available ? "rgba(255,255,255,0.4)" : "rgba(255,255,255,0.15)" }}>
                          {available ? `${bookTests.length} ${typeFilter} test${bookTests.length !== 1 ? "s" : ""}` : "Coming soon"}
                        </div>
                      </div>
                      {/* Status / action */}
                      {available ? (
                        <div style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 12, fontWeight: 700, color: "#a78bfa", flexShrink: 0 }}>
                          Open <ChevronRight size={14} />
                        </div>
                      ) : (
                        <Lock size={13} color="rgba(255,255,255,0.15)" style={{ flexShrink: 0 }} />
                      )}
                    </div>
                  );
                })}
              </div>
            </>
          ) : (
            <>
              {/* Back + header */}
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
                <button onClick={() => setSelectedBook(null)}
                  style={{ display: "flex", alignItems: "center", gap: 6, padding: "7px 14px", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 9, color: "rgba(255,255,255,0.6)", fontSize: 13, cursor: "pointer", fontWeight: 600 }}>
                  <ChevronLeft size={14} /> All Books
                </button>
                <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "7px 16px", background: "rgba(124,58,237,0.15)", border: "1px solid rgba(124,58,237,0.3)", borderRadius: 10 }}>
                  <BookOpen size={14} color="#a78bfa" />
                  <span style={{ fontSize: 14, fontWeight: 700, color: "#c4b5fd" }}>Cambridge IELTS {selectedBook}</span>
                </div>
              </div>

              {/* Test cards */}
              {(() => {
                const bookTests = allTests.filter(t => t.bookNumber === selectedBook && t.type === typeFilter)
                  .sort((a, b) => a.testNumber - b.testNumber);
                if (bookTests.length === 0) return (
                  <p style={{ color: "rgba(255,255,255,0.3)", fontSize: 14 }}>No {typeFilter} tests available for this book yet.</p>
                );
                return (
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 14 }}>
                    {bookTests.map(test => {
                      const myBest = attempts.filter(a => a.testId === test.id && a.status === "completed");
                      const best = myBest.length ? Math.max(...myBest.map(a => a.bandScore)) : null;
                      const totalQ = test.sections.reduce((s, sec) => s + sec.questions.length, 0);
                      return (
                        <div key={test.id}
                          style={{ background: "#140b35", border: "1px solid rgba(255,255,255,0.09)", borderRadius: 16, padding: 20, cursor: "pointer", transition: "all 0.2s" }}
                          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(124,58,237,0.5)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }}
                          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.09)"; (e.currentTarget as HTMLElement).style.transform = "none"; }}
                          onClick={() => router.push(`/student/test/${test.id}`)}>
                          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
                            <div>
                              <div style={{ fontSize: 11, fontWeight: 600, color: "#7c3aed", marginBottom: 4, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                                Test {test.testNumber}
                              </div>
                              <h3 style={{ fontSize: 14, fontWeight: 800, color: "#fff", marginBottom: 3 }}>{test.title}</h3>
                              <p style={{ fontSize: 12, color: "rgba(255,255,255,0.4)" }}>
                                {test.type === "listening" ? "Listening Test" : "Academic Reading"}
                              </p>
                            </div>
                            {best !== null && (
                              <span style={{ fontSize: 12, fontWeight: 700, padding: "4px 10px", background: "rgba(16,185,129,0.15)", color: "#34d399", borderRadius: 20, border: "1px solid rgba(16,185,129,0.2)", flexShrink: 0 }}>
                                Score {best}
                              </span>
                            )}
                          </div>
                          <div style={{ display: "flex", gap: 14, marginBottom: 16, fontSize: 12, color: "rgba(255,255,255,0.4)" }}>
                            <span style={{ display: "flex", alignItems: "center", gap: 5 }}><Clock size={12} /> {test.durationMinutes} min{test.transferMinutes > 0 ? ` + ${test.transferMinutes} transfer` : ""}</span>
                            <span style={{ display: "flex", alignItems: "center", gap: 5 }}><BarChart3 size={12} /> {totalQ} questions</span>
                          </div>
                          <button style={{ width: "100%", padding: "10px", background: "linear-gradient(135deg,#7c3aed,#6d28d9)", color: "#fff", fontWeight: 700, fontSize: 13, border: "none", borderRadius: 10, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }}>
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

          {/* Recent attempts (hidden in history view) */}
          {attempts.length > 0 && sidebarView !== "history" && (
            <div style={{ marginTop: 40 }}>
              <h2 style={{ fontSize: 16, fontWeight: 700, color: "#fff", marginBottom: 16 }}>Recent Attempts</h2>
              <div className="attempts-table-wrapper" style={{ background: "#140b35", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 16, overflow: "hidden" }}>
                <table style={{ width: "100%", borderCollapse: "collapse" }}>
                  <thead>
                    <tr style={{ background: "rgba(255,255,255,0.04)" }}>
                      {["Test", "Type", "Score", "IELTS Score", "Status", "Date"].map(h => (
                        <th key={h} style={{ padding: "12px 16px", textAlign: "left", fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.35)", textTransform: "uppercase", letterSpacing: "0.07em", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[...attempts].reverse().slice(0, 8).map((a, i) => (
                      <tr key={a.id} style={{ borderBottom: i < attempts.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none" }}>
                        <td style={{ padding: "13px 16px", fontSize: 13, fontWeight: 600, color: "#e8eeff" }}>{a.testTitle}</td>
                        <td style={{ padding: "13px 16px" }}>
                          <span style={{ fontSize: 11, padding: "3px 9px", borderRadius: 10, fontWeight: 600, background: a.testType === "listening" ? "rgba(139,92,246,0.2)" : "rgba(124,58,237,0.2)", color: a.testType === "listening" ? "#c4b5fd" : "#c4b5fd" }}>{a.testType}</span>
                        </td>
                        <td style={{ padding: "13px 16px", fontSize: 13, color: "rgba(255,255,255,0.55)" }}>{a.score}/{a.maxScore}</td>
                        <td style={{ padding: "13px 16px", fontSize: 13, fontWeight: 700, color: "#a78bfa" }}>{a.bandScore}</td>
                        <td style={{ padding: "13px 16px" }}>
                          <span style={{ fontSize: 11, padding: "3px 9px", borderRadius: 10, fontWeight: 600, background: a.status === "completed" ? "rgba(16,185,129,0.15)" : "rgba(239,68,68,0.15)", color: a.status === "completed" ? "#34d399" : "#f87171" }}>{a.status}</span>
                        </td>
                        <td style={{ padding: "13px 16px", fontSize: 12, color: "rgba(255,255,255,0.35)" }}>{new Date(a.submittedAt).toLocaleDateString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

// Sidebar link with a right-arrow that nudges on hover. Active items get
// a left accent bar and a muted violet background.
function SidebarLink({
  icon: Icon, label, active = false, soon = false, onClick,
}: {
  icon: React.ComponentType<{ size?: number; color?: string }>;
  label: string;
  active?: boolean;
  soon?: boolean;
  onClick: () => void;
}) {
  return (
    <button onClick={onClick}
      className="sidebar-link"
      style={{
        display: "flex", alignItems: "center", gap: 10,
        padding: "11px 14px", borderRadius: 11, border: "none", cursor: "pointer",
        fontWeight: 600, fontSize: 14, textAlign: "left",
        background: active ? "rgba(124,58,237,0.18)" : "transparent",
        color: active ? "#c4b5fd" : "rgba(255,255,255,0.5)",
        borderLeft: active ? "2px solid #7c3aed" : "2px solid transparent",
        transition: "background 0.18s, color 0.18s",
      }}
      onMouseEnter={(e) => { if (!active) e.currentTarget.style.background = "rgba(255,255,255,0.04)"; }}
      onMouseLeave={(e) => { if (!active) e.currentTarget.style.background = "transparent"; }}
    >
      <Icon size={16} />
      <span style={{ flex: 1 }}>{label}</span>
      {soon && (
        <span style={{
          fontSize: 9, padding: "2px 6px", borderRadius: 999,
          border: "1px solid rgba(255,255,255,0.15)",
          color: "rgba(255,255,255,0.4)", letterSpacing: "0.08em",
        }}>SOON</span>
      )}
      <ChevronRight size={14} color="rgba(255,255,255,0.35)" className="sidebar-link-arrow" />
      <style>{`
        .sidebar-link:hover .sidebar-link-arrow { transform: translateX(2px); transition: transform 0.18s; }
        .sidebar-link .sidebar-link-arrow { transition: transform 0.18s; }
      `}</style>
    </button>
  );
}
