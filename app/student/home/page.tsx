"use client";
// Phase 1 landing page — proves the new StudentShell renders.
// Replaced with the full dashboard redesign in Phase 2.
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import StudentShell from "@/components/StudentShell";
import { getSession, type StudentSession } from "@/lib/store";

export default function StudentHomePage() {
  const router = useRouter();
  const [session, setSession] = useState<StudentSession | null>(null);

  useEffect(() => {
    const s = getSession();
    if (!s || s.isAdmin) { router.push("/auth/login"); return; }
    setSession(s);
  }, [router]);

  if (!session) return null;

  return (
    <StudentShell>
      <div className="eyebrow"><span className="rule" /><span>Monday · Week 6 of 12</span><span className="rule" /></div>

      <h1 className="h1">
        Welcome back, <em>{session.name}</em>. <span className="amp">&amp;</span> you&apos;re on a 12-day streak.
      </h1>
      <p className="lede" style={{ marginTop: 24 }}>
        Today&apos;s focus: reading speed drills and a short writing task. The shell you&apos;re looking at is Phase 1 — tokens and navigation. Dashboard content lands in Phase 2.
      </p>

      <div style={{ display: "flex", gap: 12, marginTop: 28 }}>
        <button className="btn primary">Continue today&apos;s task</button>
        <button className="btn ghost">Browse practice</button>
      </div>

      <div className="divider">Scaffold preview</div>

      <div className="grid cols-4">
        <div className="stat">
          <div className="lab">Current Band</div>
          <div className="val">6.5</div>
          <div className="trend up">↑ 0.5 this month</div>
        </div>
        <div className="stat">
          <div className="lab">This Week</div>
          <div className="val">4/5</div>
          <div className="trend">Sessions</div>
        </div>
        <div className="stat">
          <div className="lab">Streak</div>
          <div className="val">12d</div>
          <div className="trend">PB 14</div>
        </div>
        <div className="stat">
          <div className="lab">Total Attempts</div>
          <div className="val">38</div>
          <div className="trend">All time</div>
        </div>
      </div>
    </StudentShell>
  );
}
