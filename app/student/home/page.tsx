"use client";
// Phase 2 dashboard — hero, stats, band chart, streak bars, tasks,
// leaderboard, recent activity, library peek. Real attempts drive the
// numbers; TASKS are a placeholder until a real assignments feature ships.
import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import StudentShell from "@/components/StudentShell";
import { getSession, getAttempts, type StudentSession, type AttemptData } from "@/lib/store";
import { quotes, type Quote } from "@/lib/quotes";
import { starterEpisodes } from "@/data/podcasts";

type TaskKind = "writing" | "reading" | "listening" | "practice";
const TASKS: { d: string; t: string; kind: TaskKind; min: number }[] = [
  { d: "Due today",   t: "Writing Task 1 — describe chart",   kind: "writing",   min: 20 },
  { d: "Tomorrow",    t: "Reading practice · Academic set 4", kind: "reading",   min: 60 },
  { d: "Thu",         t: "Listening mock · Cambridge 19",     kind: "listening", min: 30 },
  { d: "Fri",         t: "Vocabulary quiz · Unit 13",         kind: "practice",  min: 15 },
];

// Greeting by hour — matches the design spec ("Good evening, Aziza.").
function greeting() {
  const h = new Date().getHours();
  if (h < 5) return "Still up";
  if (h < 12) return "Good morning";
  if (h < 18) return "Good afternoon";
  return "Good evening";
}

// Consecutive-day streak ending today (or yesterday if no attempt yet today).
function computeStreak(attempts: AttemptData[]) {
  const completed = attempts.filter(a => a.status === "completed");
  if (completed.length === 0) return { streak: 0, active: false };
  const key = (d: Date) => `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;
  const days = new Set(completed.map(a => key(new Date(a.submittedAt))));
  const today = new Date();
  const yesterday = new Date(today); yesterday.setDate(today.getDate() - 1);
  const hasToday = days.has(key(today));
  if (!hasToday && !days.has(key(yesterday))) return { streak: 0, active: false };
  let n = 0;
  const cursor = new Date(hasToday ? today : yesterday);
  while (days.has(key(cursor))) { n++; cursor.setDate(cursor.getDate() - 1); }
  return { streak: n, active: hasToday };
}

// Band curve: bucket the student's last ~12 completed attempts by time and
// plot each band score. If there are fewer than 2 points we hide the chart.
function BandChart({ attempts }: { attempts: AttemptData[] }) {
  const pts = attempts
    .filter(a => a.status === "completed")
    .sort((a, b) => new Date(a.submittedAt).getTime() - new Date(b.submittedAt).getTime())
    .slice(-12)
    .map(a => a.bandScore);
  if (pts.length < 2) {
    return (
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: 140, color: "var(--text-3)", fontSize: 12, fontFamily: "var(--ff-mono)", letterSpacing: "0.08em", textTransform: "uppercase" }}>
        Take two tests to see your curve
      </div>
    );
  }
  const max = 9, min = 4;
  const w = 520, h = 140, pad = 16;
  const x = (i: number) => pad + (i / (pts.length - 1)) * (w - pad * 2);
  const y = (v: number) => h - pad - ((v - min) / (max - min)) * (h - pad * 2);
  const d = pts.map((v, i) => `${i === 0 ? "M" : "L"}${x(i)},${y(v)}`).join(" ");
  const area = d + ` L${x(pts.length - 1)},${h - pad} L${x(0)},${h - pad} Z`;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} style={{ width: "100%", height: "auto", display: "block" }}>
      <defs>
        <linearGradient id="bandBg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.25" />
          <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
        </linearGradient>
      </defs>
      {[5, 6, 7].map(b => (
        <g key={b}>
          <line x1={pad} x2={w - pad} y1={y(b)} y2={y(b)} stroke="var(--line)" strokeDasharray="2 3" />
          <text x={pad - 4} y={y(b) + 3} fontFamily="var(--ff-mono)" fontSize="9" fill="var(--text-3)" textAnchor="end">{b.toFixed(1)}</text>
        </g>
      ))}
      <path d={area} fill="url(#bandBg)" />
      <path d={d} fill="none" stroke="var(--accent)" strokeWidth="1.5" />
      {pts.map((v, i) => (
        <circle key={i} cx={x(i)} cy={y(v)} r={i === pts.length - 1 ? 3.5 : 2.2} fill="var(--accent)" />
      ))}
      <text x={x(pts.length - 1) + 6} y={y(pts[pts.length - 1]) + 3} fontFamily="var(--ff-serif)" fontSize="12" fill="var(--text)">
        {pts[pts.length - 1].toFixed(1)}
      </text>
    </svg>
  );
}

// 30 vertical bars — tallest-to-leftmost is today, leftmost is 30 days ago.
function StreakBars({ attempts }: { attempts: AttemptData[] }) {
  const completed = attempts.filter(a => a.status === "completed");
  const key = (d: Date) => `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;
  const days = new Set(completed.map(a => key(new Date(a.submittedAt))));
  const today = new Date();
  const bars = [];
  for (let i = 29; i >= 0; i--) {
    const d = new Date(today); d.setDate(today.getDate() - i);
    const on = days.has(key(d));
    const isToday = i === 0;
    bars.push(<i key={i} className={`${on ? "on" : ""} ${isToday ? "today" : ""}`.trim()} />);
  }
  return <div className="streak">{bars}</div>;
}

export default function StudentHomePage() {
  const router = useRouter();
  const [session, setSession] = useState<StudentSession | null>(null);
  const [attempts, setAttempts] = useState<AttemptData[]>([]);
  const [allAttempts, setAllAttempts] = useState<AttemptData[]>([]);
  const [quote, setQuote] = useState<Quote | null>(null);

  useEffect(() => {
    const s = getSession();
    if (!s || s.isAdmin) { router.push("/auth/login"); return; }
    setSession(s);
    getAttempts().then(all => {
      setAllAttempts(all);
      setAttempts(all.filter(a => a.studentId === s.id));
    });
  }, [router]);

  useEffect(() => {
    if (quotes.length > 0) setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
  }, []);

  const completed = useMemo(() => attempts.filter(a => a.status === "completed"), [attempts]);
  const cancelled = useMemo(() => attempts.filter(a => a.status === "cancelled"), [attempts]);

  const currentBand = useMemo(() => {
    if (completed.length === 0) return null;
    const last5 = completed.slice(-5);
    return last5.reduce((s, a) => s + a.bandScore, 0) / last5.length;
  }, [completed]);

  const bandDelta = useMemo(() => {
    if (completed.length < 4) return null;
    const half = Math.floor(completed.length / 2);
    const older = completed.slice(0, half);
    const newer = completed.slice(half);
    const avg = (arr: AttemptData[]) => arr.reduce((s, a) => s + a.bandScore, 0) / arr.length;
    return avg(newer) - avg(older);
  }, [completed]);

  const thisWeek = useMemo(() => {
    const start = new Date();
    start.setDate(start.getDate() - start.getDay());
    start.setHours(0, 0, 0, 0);
    return completed.filter(a => new Date(a.submittedAt) >= start).length;
  }, [completed]);

  const { streak, active: streakActive } = useMemo(() => computeStreak(attempts), [attempts]);

  // Peer leaderboard: everyone in the same group, ranked by avg band (best 5).
  const leaderboard = useMemo(() => {
    if (!session) return [];
    const peers = allAttempts.filter(a => a.groupName === session.group_name && a.status === "completed");
    const byStudent = new Map<string, { id: string; name: string; attempts: AttemptData[] }>();
    for (const a of peers) {
      const existing = byStudent.get(a.studentId);
      if (existing) existing.attempts.push(a);
      else byStudent.set(a.studentId, { id: a.studentId, name: `${a.studentName} ${a.studentSurname}`.trim(), attempts: [a] });
    }
    // If the signed-in student has no attempts yet, still include them so they appear on the board.
    if (!byStudent.has(session.id)) {
      byStudent.set(session.id, { id: session.id, name: `${session.name} ${session.surname}`.trim(), attempts: [] });
    }
    return [...byStudent.values()]
      .map(s => {
        const last5 = s.attempts.slice(-5);
        const avg = last5.length ? last5.reduce((sum, a) => sum + a.bandScore, 0) / last5.length : 0;
        const { streak } = computeStreak(s.attempts);
        return { id: s.id, name: s.name, avg, streak, me: s.id === session.id };
      })
      .sort((a, b) => b.avg - a.avg)
      .slice(0, 7);
  }, [allAttempts, session]);

  const recent = useMemo(() => [...attempts].reverse().slice(0, 6), [attempts]);
  const libraryPeek = starterEpisodes.slice(0, 3);

  if (!session) return null;

  return (
    <StudentShell>
      {/* HERO */}
      <div className="grid cols-12" style={{ marginBottom: 40 }}>
        <div className="span-8" style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <p className="eyebrow">
            <span>Today · {new Date().toLocaleDateString("en-GB", { weekday: "long", day: "numeric", month: "long" })}</span>
            <span className="rule" />
            <span>{completed.length} test{completed.length === 1 ? "" : "s"} completed</span>
          </p>
          <h1 className="h1">
            {greeting()}, <em>{session.name}.</em>
            {streak > 0 ? (
              <> <br />You&apos;re on a <span className="amp">{streak}-day</span> streak.</>
            ) : (
              <> <br />Ready for <span className="amp">today&apos;s</span> session?</>
            )}
          </h1>
          <p className="lede" style={{ marginTop: 24 }}>
            {thisWeek > 0
              ? `${thisWeek} practice session${thisWeek === 1 ? "" : "s"} this week — ${thisWeek >= 5 ? "goal hit, keep it rolling." : `${5 - thisWeek} away from your weekly goal.`}`
              : "No practice yet this week. A single reading passage kicks the engine back on."}
          </p>
          <div className="flex g12" style={{ marginTop: 28 }}>
            <button className="btn primary" onClick={() => router.push("/student/reading")}>
              Continue practice →
            </button>
            <button className="btn ghost" onClick={() => router.push("/articles")}>
              Browse library
            </button>
          </div>
        </div>

        <div className="span-4" style={{ display: "flex", flexDirection: "column", justifyContent: "center", borderLeft: "1px solid var(--line)", paddingLeft: 32 }}>
          <p className="eyebrow">Quote of the day</p>
          {quote && (
            <blockquote className="pullquote">
              &ldquo;{quote.text}&rdquo;
              {quote.author && <cite>— {quote.author}</cite>}
            </blockquote>
          )}
        </div>
      </div>

      {/* STATS */}
      <div className="grid cols-4" style={{ marginBottom: 32 }}>
        <div className="stat">
          <span className="lab">Current Band</span>
          <span className="val">{currentBand != null ? currentBand.toFixed(1) : "—"}</span>
          <span className={`trend${bandDelta != null ? (bandDelta > 0 ? " up" : bandDelta < 0 ? " down" : "") : ""}`}>
            {bandDelta == null ? "last 5 tests avg" : bandDelta > 0 ? `↑ ${bandDelta.toFixed(1)} vs earlier` : bandDelta < 0 ? `↓ ${Math.abs(bandDelta).toFixed(1)} vs earlier` : "steady"}
          </span>
        </div>
        <div className="stat">
          <span className="lab">This Week</span>
          <span className="val">
            {thisWeek}<span style={{ fontSize: 20, color: "var(--text-3)", marginLeft: 4 }}>/ 5</span>
          </span>
          <span className="trend">sessions completed</span>
        </div>
        <div className="stat">
          <span className="lab">Study Streak</span>
          <span className="val">
            {streak}<span style={{ fontSize: 20, color: "var(--text-3)", marginLeft: 4 }}>{streak === 1 ? "day" : "days"}</span>
          </span>
          <span className={`trend${streakActive ? " up" : ""}`}>
            {streakActive ? "active today" : streak > 0 ? "train today to keep it" : "start one today"}
          </span>
        </div>
        <div className="stat">
          <span className="lab">Total Attempts</span>
          <span className="val">{attempts.length}</span>
          <span className="trend">{completed.length} completed · {cancelled.length} cancelled</span>
        </div>
      </div>

      {/* BAND CURVE + STREAK */}
      <div className="grid cols-12" style={{ marginBottom: 32 }}>
        <div className="card span-8">
          <div className="flex jcb aic" style={{ marginBottom: 16 }}>
            <div>
              <p className="eyebrow" style={{ margin: 0 }}>Band progression</p>
              <h3 className="h2" style={{ marginTop: 6, marginBottom: 0 }}>Your curve</h3>
            </div>
            <div className="flex g8">
              <span className="chip on">All time</span>
            </div>
          </div>
          <BandChart attempts={attempts} />
        </div>

        <div className="card span-4">
          <p className="eyebrow" style={{ margin: 0 }}>Last 30 days</p>
          <h3 className="h2" style={{ marginTop: 6, marginBottom: 18 }}>Consistency</h3>
          <StreakBars attempts={attempts} />
          <div style={{ marginTop: 18, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
            <div>
              <div style={{ fontFamily: "var(--ff-serif)", fontSize: 28, fontWeight: 500 }}>
                {Math.round((new Set(completed.filter(a => {
                  const d = new Date(a.submittedAt);
                  const now = new Date();
                  const diff = (now.getTime() - d.getTime()) / (1000 * 60 * 60 * 24);
                  return diff <= 30;
                }).map(a => new Date(a.submittedAt).toDateString())).size / 30) * 100)}%
              </div>
              <div style={{ fontFamily: "var(--ff-mono)", fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-3)" }}>
                Days active
              </div>
            </div>
            <div>
              <div style={{ fontFamily: "var(--ff-serif)", fontSize: 28, fontWeight: 500 }}>
                {completed.length
                  ? Math.round(completed.reduce((s, a) => s + (a.timeSpentSeconds || 0), 0) / completed.length / 60)
                  : 0}
                <span style={{ fontSize: 14, color: "var(--text-3)" }}>m</span>
              </div>
              <div style={{ fontFamily: "var(--ff-mono)", fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-3)" }}>
                Avg / test
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* TASKS + LEADERBOARD */}
      <div className="grid cols-12" style={{ marginBottom: 32 }}>
        <div className="card span-7 flush">
          <div className="card-hd">
            <span className="ttl">Up next</span>
            <span className="sub">{TASKS.length} tasks · suggested by your teacher</span>
          </div>
          <div style={{ padding: "0 var(--pad) var(--pad)" }}>
            {TASKS.map((t, i) => (
              <div
                key={i}
                className="list-row"
                onClick={() => router.push("/student/reading")}
                role="button"
                tabIndex={0}
              >
                <span className="num">0{i + 1}</span>
                <div className="body">
                  <div className="ttl">{t.t}</div>
                  <div className="meta"><b>{t.d}</b> &nbsp;·&nbsp; {t.kind} &nbsp;·&nbsp; {t.min} min</div>
                </div>
                <span className="chip">{t.kind}</span>
                <span style={{ fontFamily: "var(--ff-mono)", color: "var(--text-3)" }}>→</span>
              </div>
            ))}
          </div>
        </div>

        <div className="card span-5">
          <div className="flex jcb aic" style={{ marginBottom: 10 }}>
            <div>
              <p className="eyebrow" style={{ margin: 0 }}>Group · {session.group_name}</p>
              <h3 className="h2" style={{ marginTop: 6, marginBottom: 0 }}>Leaderboard</h3>
            </div>
            <span className="chip">avg of last 5</span>
          </div>
          {leaderboard.length === 0 ? (
            <div style={{ padding: "20px 0", color: "var(--text-3)", fontSize: 13 }}>
              No group activity yet.
            </div>
          ) : (
            leaderboard.map((r, i) => (
              <div key={r.id} className="leader-row">
                <span className={`rk ${r.me ? "me" : ""}`}>{String(i + 1).padStart(2, "0")}</span>
                <span className={`nm ${r.me ? "me" : ""}`}>
                  {r.name}
                  {r.me && (
                    <span style={{ fontFamily: "var(--ff-mono)", fontSize: 10, color: "var(--accent)", marginLeft: 8, letterSpacing: "0.1em" }}>
                      YOU
                    </span>
                  )}
                </span>
                <span className="sc">{r.avg > 0 ? r.avg.toFixed(1) : "—"}</span>
                <span className="stk">🔥 {r.streak}d</span>
              </div>
            ))
          )}
        </div>
      </div>

      {/* RECENT */}
      {recent.length > 0 && (
        <>
          <div className="divider"><span>Recent activity</span></div>
          <div className="card flush">
            <table className="tbl">
              <thead>
                <tr>
                  <th>Test</th>
                  <th>Type</th>
                  <th style={{ textAlign: "right" }}>Score</th>
                  <th style={{ textAlign: "right" }}>Band</th>
                  <th>When</th>
                  <th>Duration</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {recent.map(r => (
                  <tr key={r.id}>
                    <td style={{ fontWeight: 500 }}>{r.testTitle}</td>
                    <td><span className="chip" style={{ fontSize: 9.5 }}>{r.testType}</span></td>
                    <td style={{ textAlign: "right", fontFamily: "var(--ff-mono)" }}>
                      {r.status === "completed" ? `${r.score}/${r.maxScore}` : "—"}
                    </td>
                    <td style={{ textAlign: "right", fontFamily: "var(--ff-serif)", fontSize: 17, fontWeight: 500 }}>
                      {r.status === "completed" ? r.bandScore.toFixed(1) : "—"}
                    </td>
                    <td style={{ color: "var(--text-2)" }}>
                      {new Date(r.submittedAt).toLocaleDateString("en-GB", { day: "numeric", month: "short" })}
                    </td>
                    <td style={{ fontFamily: "var(--ff-mono)", fontSize: 12, color: "var(--text-2)" }}>
                      {r.timeSpentSeconds ? `${Math.round(r.timeSpentSeconds / 60)}m` : "—"}
                    </td>
                    <td>
                      {r.status === "cancelled"
                        ? <span className="chip danger">cancelled</span>
                        : <span className="chip on">completed</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}

      {/* LIBRARY PEEK */}
      <div className="divider"><span>From the library</span></div>
      <div className="grid cols-3">
        {libraryPeek.map(ep => (
          <div key={ep.id} className="media-card" onClick={() => router.push("/podcasts")} role="button" tabIndex={0}>
            <div className="thumb">
              <span className="badge">{ep.channel}</span>
              {ep.duration && <span className="time">{Math.round(ep.duration / 60)} min</span>}
              <div className="play">▶</div>
            </div>
            <div className="body">
              <div className="cat">Podcast</div>
              <div className="t">{ep.title}</div>
              <div className="f">
                <span>{ep.channel}</span>
                <span>listen →</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </StudentShell>
  );
}
