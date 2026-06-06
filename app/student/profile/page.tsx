"use client";
import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { ChevronDown, ChevronUp } from "lucide-react";
import StudentShell from "@/components/StudentShell";
import {
  getSession, clearSession, getAttempts, changeStudentOwnPassword, getSubmissions, getSpeakingResults,
  type StudentSession, type AttemptData, type WritingSubmission, type SpeakingResult,
} from "@/lib/store";
import { getTestById } from "@/data/ielts-tests";

function greeting() {
  const h = new Date().getHours();
  if (h < 5) return "Still up";
  if (h < 12) return "Good morning";
  if (h < 18) return "Good afternoon";
  return "Good evening";
}

function bestStreak(attempts: AttemptData[]) {
  const completed = attempts.filter(a => a.status === "completed");
  if (completed.length === 0) return 0;
  const key = (d: Date) => `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;
  const days = [...new Set(completed.map(a => key(new Date(a.submittedAt))))]
    .map(k => new Date(k)).sort((a, b) => a.getTime() - b.getTime());
  let best = 0, run = 0;
  let prev: Date | null = null;
  for (const d of days) {
    run = prev && Math.round((d.getTime() - prev.getTime()) / 86400000) === 1 ? run + 1 : 1;
    if (run > best) best = run;
    prev = d;
  }
  return best;
}

export default function ProfilePage() {
  const router = useRouter();
  const [session, setSession] = useState<StudentSession | null>(null);
  const [attempts, setAttempts] = useState<AttemptData[]>([]);
  const [writingSubs, setWritingSubs] = useState<WritingSubmission[]>([]);
  const [speakingResults, setSpeakingResults] = useState<SpeakingResult[]>([]);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [tab, setTab] = useState<"reading" | "listening" | "writing" | "speaking">("reading");
  const [curr, setCurr] = useState("");
  const [next, setNext] = useState("");
  const [pwMsg, setPwMsg] = useState<{ kind: "ok" | "err"; text: string } | null>(null);
  const [saving, setSaving] = useState(false);
  const [pwOpen, setPwOpen] = useState(false);

  useEffect(() => {
    const s = getSession();
    if (!s || s.isAdmin) { router.push("/auth/login"); return; }
    setSession(s);
    getAttempts().then(all => setAttempts(all.filter(a => a.studentId === s.id)));
    getSubmissions(s.id).then(setWritingSubs);
    setSpeakingResults(getSpeakingResults(s.id));
  }, [router]);

  const completed = useMemo(() => attempts.filter(a => a.status === "completed"), [attempts]);
  const best = useMemo(() => bestStreak(attempts), [attempts]);

  const currentBand = completed.length ? (completed.slice(-5).reduce((s, a) => s + a.bandScore, 0) / Math.min(5, completed.length)) : null;
  const avgBand = completed.length ? (completed.reduce((s, a) => s + a.bandScore, 0) / completed.length) : null;
  const bestBand = completed.length ? Math.max(...completed.map(a => a.bandScore)) : null;

  const skillBands = useMemo(() => {
    const avg = (type: AttemptData["testType"]) => {
      const list = completed.filter(a => a.testType === type);
      return list.length ? list.reduce((s, a) => s + a.bandScore, 0) / list.length : null;
    };
    const graded = writingSubs.filter(w => w.overallBand != null);
    const writingAvg = graded.length ? graded.reduce((s, w) => s + (w.overallBand ?? 0), 0) / graded.length : null;
    return [
      { k: "Reading", v: avg("reading") },
      { k: "Listening", v: avg("listening") },
      { k: "Writing", v: writingAvg },
    ];
  }, [completed, writingSubs]);

  const submitPw = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!session) return;
    setPwMsg(null); setSaving(true);
    const res = await changeStudentOwnPassword(session.id, curr, next);
    setSaving(false);
    if (res.ok) { setPwMsg({ kind: "ok", text: "Password updated." }); setCurr(""); setNext(""); }
    else setPwMsg({ kind: "err", text: res.error ?? "Couldn't update password." });
  };

  if (!session) return null;

  const initials = `${(session.name[0] ?? "").toUpperCase()}${(session.surname?.[0] ?? "").toUpperCase()}`;
  const fullName = `${session.name} ${session.surname}`.trim();
  const inputStyle = { padding: "9px 12px", borderRadius: 8, fontSize: 13, background: "var(--bg)", color: "var(--text)", border: "1px solid var(--line-2)", outline: "none", fontFamily: "inherit" } as const;

  const readingAttempts = [...attempts].reverse().filter(a => a.testType === "reading");
  const listeningAttempts = [...attempts].reverse().filter(a => a.testType === "listening");

  const renderAttempt = (a: AttemptData) => {
    const isExpanded = expandedId === a.id;
    const testData = getTestById(a.testId);
    return (
      <div key={a.id} className="card" style={{ padding: 0, overflow: "hidden" }}>
        <button onClick={() => setExpandedId(isExpanded ? null : a.id)}
          style={{ display: "flex", alignItems: "center", gap: 14, padding: "14px 18px", cursor: "pointer", width: "100%", background: "transparent", border: "none", fontFamily: "inherit", color: "inherit", textAlign: "left" }}>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontFamily: "var(--ff-serif)", fontWeight: 500, fontSize: 15, color: "var(--text)", marginBottom: 2 }}>{a.testTitle}</div>
            <div style={{ fontSize: 11, fontFamily: "var(--ff-mono)", color: "var(--text-3)", letterSpacing: "0.04em" }}>{new Date(a.submittedAt).toLocaleDateString()}</div>
          </div>
          <div style={{ display: "flex", gap: 10, alignItems: "center", flexShrink: 0 }}>
            {a.status === "completed"
              ? <><span style={{ fontSize: 12, color: "var(--text-2)" }}>{a.score}/{a.maxScore}</span><span style={{ fontFamily: "var(--ff-serif)", fontSize: 20, fontWeight: 500, color: "var(--accent)" }}>{a.bandScore}</span></>
              : <span className="chip danger" style={{ fontSize: 11 }}>Cancelled</span>}
            {isExpanded ? <ChevronUp size={14} color="var(--text-3)" /> : <ChevronDown size={14} color="var(--text-3)" />}
          </div>
        </button>
        {isExpanded && testData && (
          <div style={{ borderTop: "1px solid var(--line)", padding: "16px 18px" }}>
            {a.status === "cancelled" && <div style={{ marginBottom: 14, fontSize: 12, color: "var(--danger)" }}>{a.cancelReason || "Test was cancelled before submission."}</div>}
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
                        <span style={{ width: 22, height: 22, borderRadius: "50%", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 10, fontFamily: "var(--ff-mono)", background: !userAns ? "var(--surface-2)" : isCorrect ? "rgba(16,185,129,0.25)" : "rgba(239,68,68,0.25)", color: !userAns ? "var(--text-3)" : isCorrect ? "#34d399" : "#f87171" }}>{q.number}</span>
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <div style={{ fontSize: 12, color: "var(--text-2)", marginBottom: 6, lineHeight: 1.4 }}>{q.question.split("\n")[0].slice(0, 140)}</div>
                          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                            <span style={{ fontSize: 11, padding: "2px 8px", borderRadius: 5, fontWeight: 600, background: !userAns ? "var(--surface-2)" : isCorrect ? "rgba(16,185,129,0.15)" : "rgba(239,68,68,0.15)", color: !userAns ? "var(--text-3)" : isCorrect ? "#34d399" : "#f87171" }}>Your answer: {userAns || "(no answer)"}</span>
                            {!isCorrect && <span style={{ fontSize: 11, padding: "2px 8px", borderRadius: 5, background: "var(--surface-2)", color: "var(--text)", fontWeight: 600 }}>Correct: {q.correctAnswer}</span>}
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
  };

  const scorePill = (band: number | null) => (
    <span style={{ fontFamily: "var(--ff-serif)", fontSize: 20, fontWeight: 500, color: band != null ? "var(--accent)" : "var(--text-3)", flexShrink: 0 }}>{band != null ? band.toFixed(1) : "—"}</span>
  );

  return (
    <StudentShell>
      <h1 className="h1" style={{ marginBottom: 24 }}>{greeting()}, <em>{session.name}.</em></h1>

      <div className="grid cols-12">
        <div className="card span-4">
          <div className="flex g16" style={{ marginBottom: 20, alignItems: "center" }}>
            <div style={{ width: 64, height: 64, borderRadius: "50%", background: "var(--accent)", color: "var(--accent-ink)", display: "grid", placeItems: "center", fontFamily: "var(--ff-serif)", fontSize: 26, fontWeight: 500 }}>
              {initials || "LC"}
            </div>
            <div style={{ minWidth: 0 }}>
              <div style={{ fontFamily: "var(--ff-serif)", fontSize: 22, fontWeight: 500, color: "var(--text)" }}>{fullName || "Student"}</div>
              <div style={{ fontFamily: "var(--ff-mono)", fontSize: 11, color: "var(--text-3)", letterSpacing: "0.08em", textTransform: "uppercase", marginTop: 2 }}>{session.group_name}</div>
            </div>
          </div>
          {[
            ["Username", session.username ?? "—"],
            ["Group", session.group_name],
            ["Streak", `${best} day${best === 1 ? "" : "s"}`],
          ].map(([k, v]) => (
            <div key={k} style={{ display: "flex", justifyContent: "space-between", padding: "10px 0", borderBottom: "1px solid var(--line)", fontSize: 13, gap: 12 }}>
              <span style={{ color: "var(--text-3)", fontFamily: "var(--ff-mono)", fontSize: 10.5, letterSpacing: "0.1em", textTransform: "uppercase", alignSelf: "center" }}>{k}</span>
              <span style={{ fontWeight: 500, color: "var(--text)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{v}</span>
            </div>
          ))}
          <button className="btn ghost" style={{ width: "100%", marginTop: 20, justifyContent: "center" }} onClick={() => setPwOpen(v => !v)}>
            {pwOpen ? "Close" : "Change password"}
          </button>
          {pwOpen && (
            <form onSubmit={submitPw} style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: 14 }}>
              <input type="password" autoComplete="current-password" placeholder="Current password" value={curr} onChange={e => setCurr(e.target.value)} style={inputStyle} />
              <input type="password" autoComplete="new-password" placeholder="New password (min 4)" value={next} onChange={e => setNext(e.target.value)} style={inputStyle} />
              {pwMsg && (
                <div style={{ fontSize: 12, padding: "8px 10px", borderRadius: 8, color: pwMsg.kind === "ok" ? "var(--accent)" : "var(--danger)", border: `1px solid ${pwMsg.kind === "ok" ? "var(--accent)" : "var(--danger)"}` }}>{pwMsg.text}</div>
              )}
              <button type="submit" className="btn primary sm" disabled={saving || !curr || !next}>{saving ? "Updating…" : "Update password"}</button>
            </form>
          )}
          <button className="btn ghost" style={{ width: "100%", marginTop: 12, justifyContent: "center", color: "var(--danger)", borderColor: "var(--danger)" }} onClick={() => { clearSession(); router.push("/"); }}>
            Sign out
          </button>
        </div>

        <div className="span-8">
          <div className="grid cols-4" style={{ marginBottom: 20 }}>
            <div className="stat"><span className="lab">Current</span><span className="val">{currentBand != null ? currentBand.toFixed(1) : "—"}</span></div>
            <div className="stat"><span className="lab">Tests</span><span className="val">{completed.length}</span></div>
            <div className="stat"><span className="lab">Average</span><span className="val">{avgBand != null ? avgBand.toFixed(1) : "—"}</span></div>
            <div className="stat"><span className="lab">Best</span><span className="val">{bestBand != null ? bestBand.toFixed(1) : "—"}</span></div>
          </div>
          <div className="card">
            <h3 className="h2" style={{ marginTop: 0, marginBottom: 20 }}>Skill breakdown</h3>
            {skillBands.map(c => (
              <div key={c.k} style={{ marginBottom: 18 }}>
                <div className="flex jcb" style={{ marginBottom: 6 }}>
                  <span style={{ fontFamily: "var(--ff-serif)", fontSize: 16, fontWeight: 500, color: "var(--text)" }}>{c.k}</span>
                  <span style={{ fontFamily: "var(--ff-mono)", color: c.v != null ? "var(--text)" : "var(--text-3)" }}>{c.v != null ? `${c.v.toFixed(1)} / 9.0` : "—"}</span>
                </div>
                <div className="bar" style={{ height: 6 }}><span style={{ width: `${((c.v ?? 0) / 9) * 100}%` }} /></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="divider"><span>Results</span></div>
      <div className="flex g8" style={{ flexWrap: "wrap", marginBottom: 16 }}>
        {([
          ["reading", "Reading", readingAttempts.length],
          ["listening", "Listening", listeningAttempts.length],
          ["writing", "Writing", writingSubs.length],
          ["speaking", "Speaking", speakingResults.length],
        ] as const).map(([key, label, count]) => (
          <button key={key} className={`chip${tab === key ? " on" : ""}`} onClick={() => setTab(key)}>
            {label}{count > 0 ? ` · ${count}` : ""}
          </button>
        ))}
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {tab === "reading" && (readingAttempts.length ? readingAttempts.map(renderAttempt) : <p style={{ color: "var(--text-3)", fontSize: 13 }}>No results yet.</p>)}
        {tab === "listening" && (listeningAttempts.length ? listeningAttempts.map(renderAttempt) : <p style={{ color: "var(--text-3)", fontSize: 13 }}>No results yet.</p>)}
        {tab === "writing" && (writingSubs.length ? writingSubs.map(w => (
          <div key={w.id} className="card" style={{ display: "flex", alignItems: "center", gap: 14, padding: "14px 18px" }}>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 14, color: "var(--text)", marginBottom: 2, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{w.prompt}</div>
              <div style={{ fontSize: 11, fontFamily: "var(--ff-mono)", color: "var(--text-3)", letterSpacing: "0.04em" }}>{w.wordCount} words · {new Date(w.gradedAt ?? w.createdAt).toLocaleDateString()}</div>
            </div>
            {scorePill(w.overallBand)}
          </div>
        )) : <p style={{ color: "var(--text-3)", fontSize: 13 }}>No results yet.</p>)}
        {tab === "speaking" && (speakingResults.length ? speakingResults.map(s => (
          <div key={s.id} className="card" style={{ display: "flex", alignItems: "center", gap: 14, padding: "14px 18px" }}>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 14, color: "var(--text)", marginBottom: 2, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{s.title}</div>
              <div style={{ fontSize: 11, fontFamily: "var(--ff-mono)", color: "var(--text-3)", letterSpacing: "0.04em" }}>{new Date(s.createdAt).toLocaleDateString()}</div>
            </div>
            {scorePill(s.overall)}
          </div>
        )) : <p style={{ color: "var(--text-3)", fontSize: 13 }}>No results yet.</p>)}
      </div>

      <style>{`@media (max-width: 900px) { .student-shell .grid.cols-4 { grid-template-columns: repeat(2, 1fr); } }`}</style>
    </StudentShell>
  );
}
