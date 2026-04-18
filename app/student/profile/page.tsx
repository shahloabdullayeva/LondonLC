"use client";
// /student/profile — identity + statistics + skill bars + badge grid.
// All numbers derive from real attempts; badges unlock via thresholds
// (streak, reading passages, first week, band milestones).
import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { Check, X } from "lucide-react";
import StudentShell from "@/components/StudentShell";
import {
  getSession, clearSession, getAttempts, changeStudentOwnPassword,
  type StudentSession, type AttemptData,
} from "@/lib/store";

function computeStreak(attempts: AttemptData[]) {
  const completed = attempts.filter(a => a.status === "completed");
  if (completed.length === 0) return { streak: 0, best: 0 };
  const key = (d: Date) => `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;
  const days = new Set(completed.map(a => key(new Date(a.submittedAt))));
  const today = new Date();
  const yesterday = new Date(today); yesterday.setDate(today.getDate() - 1);
  const hasToday = days.has(key(today));

  let current = 0;
  if (hasToday || days.has(key(yesterday))) {
    const cursor = new Date(hasToday ? today : yesterday);
    while (days.has(key(cursor))) { current++; cursor.setDate(cursor.getDate() - 1); }
  }

  // Best-ever streak — walk sorted days and track the longest run.
  const sorted = [...days].map(k => new Date(k)).sort((a, b) => a.getTime() - b.getTime());
  let best = 0, run = 0;
  let prev: Date | null = null;
  for (const d of sorted) {
    if (prev) {
      const diff = Math.round((d.getTime() - prev.getTime()) / 86400000);
      run = diff === 1 ? run + 1 : 1;
    } else {
      run = 1;
    }
    if (run > best) best = run;
    prev = d;
  }
  return { streak: current, best };
}

export default function ProfilePage() {
  const router = useRouter();
  const [session, setSession] = useState<StudentSession | null>(null);
  const [attempts, setAttempts] = useState<AttemptData[]>([]);
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
  }, [router]);

  const completed = useMemo(() => attempts.filter(a => a.status === "completed"), [attempts]);
  const { streak, best } = useMemo(() => computeStreak(attempts), [attempts]);

  const currentBand = useMemo(() => {
    if (completed.length === 0) return null;
    const last5 = completed.slice(-5);
    return last5.reduce((s, a) => s + a.bandScore, 0) / last5.length;
  }, [completed]);

  const skillBands = useMemo(() => {
    const avg = (type: AttemptData["testType"]) => {
      const list = completed.filter(a => a.testType === type);
      if (list.length === 0) return null;
      return list.reduce((s, a) => s + a.bandScore, 0) / list.length;
    };
    return [
      { k: "Reading", v: avg("reading") },
      { k: "Listening", v: avg("listening") },
      { k: "Writing", v: null },   // no writing backend yet
      { k: "Speaking", v: null },  // same
    ];
  }, [completed]);

  const hoursThisMonth = useMemo(() => {
    const monthStart = new Date();
    monthStart.setDate(1); monthStart.setHours(0, 0, 0, 0);
    const secs = completed
      .filter(a => new Date(a.submittedAt) >= monthStart)
      .reduce((s, a) => s + (a.timeSpentSeconds || 0), 0);
    return Math.round(secs / 3600);
  }, [completed]);

  // Badge ledger — unlock rules pinned to real metrics so students see
  // them light up as they work. Keep this list small and readable.
  const badges = useMemo(() => {
    const readingCount = completed.filter(a => a.testType === "reading").length;
    const bestBand = completed.length ? Math.max(...completed.map(a => a.bandScore)) : 0;
    const weekStart = new Date();
    weekStart.setDate(weekStart.getDate() - 7);
    const thisWeek = completed.filter(a => new Date(a.submittedAt) >= weekStart).length;
    return [
      { n: "First Week", on: completed.length >= 1 },
      { n: "10-day Streak", on: best >= 10 },
      { n: "Band 6", on: bestBand >= 6.0 },
      { n: "Reader (10 passages)", on: readingCount >= 10 },
      { n: "5 this week", on: thisWeek >= 5 },
      { n: "Band 7", on: bestBand >= 7.0 },
      { n: "30-day Streak", on: best >= 30 },
      { n: "Perfect Week", on: thisWeek >= 7 },
    ];
  }, [completed, best]);

  const submitPw = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!session) return;
    setPwMsg(null); setSaving(true);
    const res = await changeStudentOwnPassword(session.id, curr, next);
    setSaving(false);
    if (res.ok) {
      setPwMsg({ kind: "ok", text: "Password updated." });
      setCurr(""); setNext("");
    } else {
      setPwMsg({ kind: "err", text: res.error ?? "Couldn't update password." });
    }
  };

  if (!session) return null;

  const initials = `${(session.name[0] ?? "").toUpperCase()}${(session.surname?.[0] ?? "").toUpperCase()}`;
  const fullName = `${session.name} ${session.surname}`.trim();

  return (
    <StudentShell>
      <p className="eyebrow">Account</p>
      <h1 className="h1">My <em>Profile</em></h1>

      <div className="grid cols-12" style={{ marginTop: 32 }}>
        <div className="card span-4">
          <div className="flex g16" style={{ marginBottom: 20, alignItems: "center" }}>
            <div style={{
              width: 64, height: 64, borderRadius: "50%",
              background: "var(--accent)", color: "var(--accent-ink)",
              display: "grid", placeItems: "center",
              fontFamily: "var(--ff-serif)", fontSize: 26, fontWeight: 500,
            }}>
              {initials || "LC"}
            </div>
            <div style={{ minWidth: 0 }}>
              <div style={{ fontFamily: "var(--ff-serif)", fontSize: 22, fontWeight: 500, color: "var(--text)" }}>
                {fullName || "Student"}
              </div>
              <div style={{ fontFamily: "var(--ff-mono)", fontSize: 11, color: "var(--text-3)", letterSpacing: "0.08em", textTransform: "uppercase", marginTop: 2 }}>
                {session.username ? `${session.username} · ` : ""}{session.group_name}
              </div>
            </div>
          </div>

          {[
            ["Full name", fullName || "—"],
            ["Username", session.username ?? "—"],
            ["Group", session.group_name],
            ["Current band", currentBand != null ? currentBand.toFixed(1) : "—"],
            ["Total tests", String(completed.length)],
            ["Best streak", `${best} day${best === 1 ? "" : "s"}`],
          ].map(([k, v]) => (
            <div key={k} style={{ display: "flex", justifyContent: "space-between", padding: "10px 0", borderBottom: "1px solid var(--line)", fontSize: 13, gap: 12 }}>
              <span style={{ color: "var(--text-3)", fontFamily: "var(--ff-mono)", fontSize: 10.5, letterSpacing: "0.1em", textTransform: "uppercase", alignSelf: "center" }}>
                {k}
              </span>
              <span style={{ fontWeight: 500, color: "var(--text)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                {v}
              </span>
            </div>
          ))}

          <button
            className="btn ghost"
            style={{ width: "100%", marginTop: 20, justifyContent: "center" }}
            onClick={() => setPwOpen(v => !v)}
          >
            {pwOpen ? "Close" : "Change password"}
          </button>

          {pwOpen && (
            <form onSubmit={submitPw} style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: 14 }}>
              <input
                type="password" autoComplete="current-password"
                placeholder="Current password"
                value={curr} onChange={e => setCurr(e.target.value)}
                style={{
                  padding: "9px 12px", borderRadius: 8, fontSize: 13,
                  background: "var(--bg)", color: "var(--text)",
                  border: "1px solid var(--line-2)", outline: "none", fontFamily: "inherit",
                }}
              />
              <input
                type="password" autoComplete="new-password"
                placeholder="New password (min 4)"
                value={next} onChange={e => setNext(e.target.value)}
                style={{
                  padding: "9px 12px", borderRadius: 8, fontSize: 13,
                  background: "var(--bg)", color: "var(--text)",
                  border: "1px solid var(--line-2)", outline: "none", fontFamily: "inherit",
                }}
              />
              {pwMsg && (
                <div style={{
                  fontSize: 12, padding: "8px 10px", borderRadius: 8,
                  color: pwMsg.kind === "ok" ? "var(--accent)" : "var(--danger)",
                  border: `1px solid ${pwMsg.kind === "ok" ? "var(--accent)" : "var(--danger)"}`,
                }}>
                  {pwMsg.text}
                </div>
              )}
              <button type="submit" className="btn primary sm" disabled={saving || !curr || !next}>
                {saving ? "Updating…" : "Update password"}
              </button>
            </form>
          )}

          <button
            className="btn ghost"
            style={{ width: "100%", marginTop: 12, justifyContent: "center", color: "var(--danger)", borderColor: "var(--danger)" }}
            onClick={() => { clearSession(); router.push("/"); }}
          >
            Sign out
          </button>
        </div>

        <div className="span-8">
          <div className="grid cols-4" style={{ marginBottom: 20 }}>
            <div className="stat">
              <span className="lab">Current</span>
              <span className="val">{currentBand != null ? currentBand.toFixed(1) : "—"}</span>
              <span className="trend">last-5 avg</span>
            </div>
            <div className="stat">
              <span className="lab">Streak</span>
              <span className="val">{streak}<span style={{ fontSize: 18, color: "var(--text-3)", marginLeft: 4 }}>d</span></span>
              <span className="trend">PB {best}</span>
            </div>
            <div className="stat">
              <span className="lab">Tests</span>
              <span className="val">{completed.length}</span>
              <span className="trend">completed</span>
            </div>
            <div className="stat">
              <span className="lab">Hours</span>
              <span className="val">{hoursThisMonth}</span>
              <span className="trend">this month</span>
            </div>
          </div>

          <div className="card" style={{ marginBottom: 20 }}>
            <p className="eyebrow" style={{ margin: 0 }}>Skill breakdown</p>
            <h3 className="h2" style={{ marginTop: 6, marginBottom: 20 }}>Where you are</h3>
            {skillBands.map(c => (
              <div key={c.k} style={{ marginBottom: 18 }}>
                <div className="flex jcb" style={{ marginBottom: 6 }}>
                  <span style={{ fontFamily: "var(--ff-serif)", fontSize: 16, fontWeight: 500, color: "var(--text)" }}>
                    {c.k}
                  </span>
                  <span style={{ fontFamily: "var(--ff-mono)", color: c.v != null ? "var(--text)" : "var(--text-3)" }}>
                    {c.v != null ? `${c.v.toFixed(1)} / 9.0` : "no data yet"}
                  </span>
                </div>
                <div className="bar" style={{ height: 6 }}>
                  <span style={{ width: `${((c.v ?? 0) / 9) * 100}%` }} />
                </div>
              </div>
            ))}
          </div>

          <div className="card">
            <p className="eyebrow" style={{ margin: 0 }}>Achievements</p>
            <h3 className="h2" style={{ marginTop: 6, marginBottom: 18 }}>
              Badges · {badges.filter(b => b.on).length} of {badges.length}
            </h3>
            <div className="grid" style={{ gridTemplateColumns: "repeat(4, 1fr)", gap: 12 }}>
              {badges.map(b => (
                <div key={b.n} style={{
                  border: "1px solid var(--line)", borderRadius: 8,
                  padding: "16px 14px", textAlign: "center",
                  background: b.on ? "var(--surface-2)" : "transparent",
                  opacity: b.on ? 1 : 0.5,
                }}>
                  <div style={{
                    width: 36, height: 36, margin: "0 auto 10px",
                    borderRadius: "50%",
                    border: `1px solid ${b.on ? "var(--accent)" : "var(--line-2)"}`,
                    display: "grid", placeItems: "center",
                    background: b.on ? "color-mix(in oklab, var(--accent) 12%, transparent)" : "transparent",
                    color: b.on ? "var(--accent)" : "var(--text-3)",
                  }}>
                    {b.on ? <Check size={14} /> : <X size={14} />}
                  </div>
                  <div style={{ fontFamily: "var(--ff-serif)", fontSize: 13, fontWeight: 500, letterSpacing: "-0.005em", color: "var(--text)" }}>
                    {b.n}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .student-shell .grid.cols-4 { grid-template-columns: repeat(2, 1fr); }
        }
      `}</style>
    </StudentShell>
  );
}
