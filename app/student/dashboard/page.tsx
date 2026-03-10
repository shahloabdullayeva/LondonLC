"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { BookOpen, Headphones, LogOut, User, Clock, Award, ChevronRight, BarChart3, Star } from "lucide-react";
import { getSession, clearSession, getAttempts } from "@/lib/store";
import { allTests } from "@/data/ielts-tests";
import type { StudentSession } from "@/lib/store";

type TestType = "reading" | "listening";

const S = {
  page: { minHeight: "100vh", background: "#0a051f", fontFamily: "Inter, system-ui, sans-serif", display: "flex", flexDirection: "column" as const },
  nav: { display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 28px", height: 60, background: "#110730", borderBottom: "1px solid rgba(255,255,255,0.08)", flexShrink: 0 as const },
};

export default function StudentDashboard() {
  const router = useRouter();
  const [session, setSession] = useState<StudentSession | null>(null);
  const [typeFilter, setTypeFilter] = useState<TestType>("reading");

  useEffect(() => {
    const s = getSession();
    if (!s || s.isAdmin) { router.push("/auth/login"); return; }
    setSession(s);
  }, [router]);

  const attempts = getAttempts().filter(a => a.studentId === session?.id);
  const typeAttempts = attempts.filter(a => a.testType === typeFilter && a.status === "completed");
  const completed = attempts.filter(a => a.status === "completed");
  const avgBand = typeAttempts.length ? (typeAttempts.reduce((s, a) => s + a.bandScore, 0) / typeAttempts.length).toFixed(1) : "—";
  const bestBand = typeAttempts.length ? Math.max(...typeAttempts.map(a => a.bandScore)).toFixed(1) : "—";

  const filteredTests = allTests.filter(t => t.type === typeFilter);

  // Group tests by bookNumber
  const bookNumbers = [...new Set(filteredTests.map(t => t.bookNumber))].sort((a, b) => a - b);
  const testsByBook = bookNumbers.map(book => ({
    book,
    tests: filteredTests.filter(t => t.bookNumber === book).sort((a, b) => a.testNumber - b.testNumber),
  }));

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
        {/* Sidebar */}
        <aside className="student-sidebar" style={{ width: 220, background: "#0e0828", borderRight: "1px solid rgba(255,255,255,0.07)", padding: "28px 16px", display: "flex", flexDirection: "column", gap: 6, flexShrink: 0 }}>
          <p style={{ fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.3)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8, paddingLeft: 8 }}>Test Type</p>
          {[
            { type: "reading" as TestType, icon: BookOpen, label: "Reading" },
            { type: "listening" as TestType, icon: Headphones, label: "Listening" },
          ].map(item => (
            <button key={item.type} onClick={() => setTypeFilter(item.type)}
              style={{ display: "flex", alignItems: "center", gap: 10, padding: "11px 14px", borderRadius: 11, border: "none", cursor: "pointer", fontWeight: 600, fontSize: 14, transition: "all 0.18s", textAlign: "left",
                background: typeFilter === item.type ? "rgba(124,58,237,0.18)" : "transparent",
                color: typeFilter === item.type ? "#c4b5fd" : "rgba(255,255,255,0.45)",
                borderLeft: typeFilter === item.type ? "2px solid #7c3aed" : "2px solid transparent",
              }}>
              <item.icon size={16} /> {item.label}
            </button>
          ))}

        </aside>

        {/* Main content */}
        <main className="student-main" style={{ flex: 1, overflowY: "auto", padding: "32px 36px" }}>
          {/* Welcome */}
          <div style={{ marginBottom: 28 }}>
            <h1 style={{ fontSize: 26, fontWeight: 800, color: "#fff", marginBottom: 4 }}>
              Welcome Back, {session.name}! 👋
            </h1>
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 14 }}>Ready to boost your IELTS band score? Let&apos;s practice!</p>
          </div>

          {/* Stats */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 14, marginBottom: 36 }}>
            {[
              { label: "Total Tests", value: typeAttempts.length, icon: BarChart3, sub: typeFilter === "reading" ? "Reading tests" : "Listening tests", color: "#8b5cf6" },
              { label: "Average Band", value: avgBand, icon: Award, sub: typeFilter === "reading" ? "Reading average" : "Listening average", color: "#10b981" },
              { label: "Best Band", value: bestBand, icon: Star, sub: typeFilter === "reading" ? "Reading best" : "Listening best", color: "#f59e0b" },
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

          {/* Tests grouped by Cambridge book */}
          <h2 style={{ fontSize: 16, fontWeight: 700, color: "#fff", marginBottom: 20 }}>
            {typeFilter === "listening" ? "Listening Tests" : "Academic Reading Tests"}
          </h2>
          {testsByBook.map(({ book, tests }) => (
            <div key={book} style={{ marginBottom: 36 }}>
              {/* Book section header */}
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "8px 16px", background: "rgba(124,58,237,0.15)", border: "1px solid rgba(124,58,237,0.3)", borderRadius: 12 }}>
                  <BookOpen size={15} color="#a78bfa" />
                  <span style={{ fontSize: 14, fontWeight: 700, color: "#c4b5fd" }}>Cambridge IELTS {book}</span>
                </div>
                <div style={{ flex: 1, height: 1, background: "rgba(255,255,255,0.07)" }} />
                <span style={{ fontSize: 12, color: "rgba(255,255,255,0.3)" }}>{tests.length} test{tests.length !== 1 ? "s" : ""}</span>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 14 }}>
                {tests.map(test => {
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
                            Band {best}
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
            </div>
          ))}

          {/* Recent attempts */}
          {attempts.length > 0 && (
            <div style={{ marginTop: 40 }}>
              <h2 style={{ fontSize: 16, fontWeight: 700, color: "#fff", marginBottom: 16 }}>Recent Attempts</h2>
              <div className="attempts-table-wrapper" style={{ background: "#140b35", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 16, overflow: "hidden" }}>
                <table style={{ width: "100%", borderCollapse: "collapse" }}>
                  <thead>
                    <tr style={{ background: "rgba(255,255,255,0.04)" }}>
                      {["Test", "Type", "Score", "Band", "Status", "Date"].map(h => (
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
                        <td style={{ padding: "13px 16px", fontSize: 13, fontWeight: 700, color: "#a78bfa" }}>Band {a.bandScore}</td>
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
