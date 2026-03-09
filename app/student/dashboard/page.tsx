"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  BookOpen, Headphones, LogOut, User, ChevronRight,
  Clock, Award, Filter, BookMarked
} from "lucide-react";
import { getSession, clearSession, getAttempts } from "@/lib/store";
import { allTests } from "@/data/ielts-tests";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import type { StudentSession } from "@/lib/store";
import Link from "next/link";
import { bandScore } from "@/lib/utils";

export default function StudentDashboard() {
  const router = useRouter();
  const [session, setSession] = useState<StudentSession | null>(null);
  const [filter, setFilter] = useState<{ type: "all" | "reading" | "listening"; level: "all" | "academic" | "general" }>({
    type: "all",
    level: "all",
  });

  useEffect(() => {
    const s = getSession();
    if (!s || s.isAdmin) {
      router.push("/auth/login");
      return;
    }
    setSession(s);
  }, [router]);

  const attempts = getAttempts().filter((a) => a.studentId === session?.id);

  const filteredTests = allTests.filter((t) => {
    if (filter.type !== "all" && t.type !== filter.type) return false;
    if (filter.level !== "all" && t.level !== filter.level) return false;
    return true;
  });

  const handleLogout = () => {
    clearSession();
    router.push("/");
  };

  if (!session) return null;

  return (
    <div className="min-h-screen" style={{ background: "var(--bg-primary)" }}>
      {/* Header */}
      <header className="sticky top-0 z-30 flex items-center justify-between px-6 py-4"
        style={{ background: "var(--bg-primary)", borderBottom: "1px solid var(--border)", backdropFilter: "blur(10px)" }}>
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center"
            style={{ background: "linear-gradient(135deg, #1e3bbf, #4a6de8)" }}>
            <BookOpen size={16} className="text-white" />
          </div>
          <span className="font-bold logo-gradient">London LC</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl text-sm"
            style={{ background: "var(--bg-secondary)", border: "1px solid var(--border)" }}>
            <User size={14} style={{ color: "var(--accent)" }} />
            <span className="font-medium" style={{ color: "var(--text-primary)" }}>
              {session.name} {session.surname}
            </span>
            <span className="text-xs px-2 py-0.5 rounded-full"
              style={{ background: "var(--accent-light)", color: "var(--accent)" }}>
              {session.group_name}
            </span>
          </div>
          <ThemeToggle />
          <button onClick={handleLogout}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm font-medium transition-colors"
            style={{ color: "var(--text-muted)", border: "1px solid var(--border)" }}>
            <LogOut size={14} /> <span className="hidden sm:inline">Sign Out</span>
          </button>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-8">
        {/* Welcome */}
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
          className="mb-8">
          <h1 className="text-2xl font-bold mb-1" style={{ color: "var(--text-primary)" }}>
            Hello, {session.name}! 👋
          </h1>
          <p style={{ color: "var(--text-muted)" }}>Choose a test to begin practising. Good luck!</p>
        </motion.div>

        {/* Stats */}
        {attempts.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              { label: "Tests Taken", value: attempts.length, icon: BookMarked },
              {
                label: "Avg Band Score",
                value: attempts.length ? (attempts.reduce((a, c) => a + c.bandScore, 0) / attempts.length).toFixed(1) : "–",
                icon: Award,
              },
              {
                label: "Best Score",
                value: attempts.length ? Math.max(...attempts.map((a) => a.bandScore)).toFixed(1) : "–",
                icon: Award,
              },
              {
                label: "Completed",
                value: attempts.filter((a) => a.status === "completed").length,
                icon: Clock,
              },
            ].map((stat) => (
              <div key={stat.label} className="p-4 rounded-2xl"
                style={{ background: "var(--bg-card)", border: "1px solid var(--border)", boxShadow: "var(--shadow)" }}>
                <div className="flex items-center gap-2 mb-2">
                  <stat.icon size={16} style={{ color: "var(--accent)" }} />
                  <span className="text-xs" style={{ color: "var(--text-muted)" }}>{stat.label}</span>
                </div>
                <div className="text-2xl font-bold" style={{ color: "var(--text-primary)" }}>{stat.value}</div>
              </div>
            ))}
          </div>
        )}

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-6">
          <div className="flex items-center gap-1.5 text-sm font-medium" style={{ color: "var(--text-muted)" }}>
            <Filter size={14} /> Filter:
          </div>
          {/* Type */}
          {(["all", "reading", "listening"] as const).map((t) => (
            <button key={t}
              onClick={() => setFilter((f) => ({ ...f, type: t }))}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${filter.type === t ? "text-white" : ""}`}
              style={filter.type === t
                ? { background: "var(--accent)" }
                : { background: "var(--bg-secondary)", color: "var(--text-muted)", border: "1px solid var(--border)" }}
            >
              {t === "all" ? "All Types" : t.charAt(0).toUpperCase() + t.slice(1)}
            </button>
          ))}
          <div className="w-px self-stretch" style={{ background: "var(--border)" }} />
          {/* Level */}
          {(["all", "academic", "general"] as const).map((l) => (
            <button key={l}
              onClick={() => setFilter((f) => ({ ...f, level: l }))}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${filter.level === l ? "text-white" : ""}`}
              style={filter.level === l
                ? { background: "var(--accent)" }
                : { background: "var(--bg-secondary)", color: "var(--text-muted)", border: "1px solid var(--border)" }}
            >
              {l === "all" ? "All Levels" : l.charAt(0).toUpperCase() + l.slice(1)}
            </button>
          ))}
        </div>

        {/* Tests grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredTests.map((test, i) => {
            const myAttempts = attempts.filter((a) => a.testId === test.id && a.status === "completed");
            const best = myAttempts.length ? Math.max(...myAttempts.map((a) => a.bandScore)) : null;
            return (
              <motion.div
                key={test.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05, duration: 0.35 }}
                className="group rounded-2xl p-5 cursor-pointer transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--border)",
                  boxShadow: "var(--shadow)",
                }}
                onClick={() => router.push(`/student/test/${test.id}`)}
              >
                {/* Top row */}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: test.type === "listening" ? "#ede9fe" : "#fef3c7" }}>
                    {test.type === "listening"
                      ? <Headphones size={18} style={{ color: "#5b21b6" }} />
                      : <BookOpen size={18} style={{ color: "#92400e" }} />
                    }
                  </div>
                  {best !== null && (
                    <div className="flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-bold"
                      style={{ background: "var(--accent-light)", color: "var(--accent)" }}>
                      <Award size={11} /> {best}
                    </div>
                  )}
                </div>

                {/* Title */}
                <h3 className="font-bold text-sm mb-1" style={{ color: "var(--text-primary)" }}>
                  {test.title}
                </h3>

                {/* Badges */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  <span className={`badge badge-${test.type}`}>{test.type}</span>
                  {test.type === "reading" && (
                    <span className={`badge badge-${test.level}`}>{test.level}</span>
                  )}
                  <span className="badge" style={{ background: "var(--bg-secondary)", color: "var(--text-muted)" }}>
                    Book {test.bookNumber}
                  </span>
                </div>

                {/* Info row */}
                <div className="flex items-center justify-between text-xs"
                  style={{ color: "var(--text-muted)" }}>
                  <div className="flex items-center gap-1">
                    <Clock size={12} />
                    {test.durationMinutes} min
                    {test.transferMinutes > 0 && ` + ${test.transferMinutes} min transfer`}
                  </div>
                  <div className="flex items-center gap-0.5 font-medium group-hover:gap-1.5 transition-all"
                    style={{ color: "var(--accent)" }}>
                    Start <ChevronRight size={13} />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {filteredTests.length === 0 && (
          <div className="text-center py-20" style={{ color: "var(--text-muted)" }}>
            <BookOpen size={40} className="mx-auto mb-4 opacity-30" />
            <p>No tests match your filters.</p>
          </div>
        )}

        {/* Previous attempts */}
        {attempts.length > 0 && (
          <div className="mt-12">
            <h2 className="text-lg font-bold mb-4" style={{ color: "var(--text-primary)" }}>
              Your Recent Attempts
            </h2>
            <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid var(--border)" }}>
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ background: "var(--bg-secondary)", borderBottom: "1px solid var(--border)" }}>
                    {["Test", "Type", "Score", "Band", "Status", "Date"].map((h) => (
                      <th key={h} className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide"
                        style={{ color: "var(--text-muted)" }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[...attempts].reverse().slice(0, 10).map((a, i) => (
                    <tr key={a.id}
                      style={{
                        background: i % 2 === 0 ? "var(--bg-card)" : "var(--bg-secondary)",
                        borderBottom: "1px solid var(--border)",
                      }}>
                      <td className="px-4 py-3 font-medium" style={{ color: "var(--text-primary)" }}>{a.testTitle}</td>
                      <td className="px-4 py-3">
                        <span className={`badge badge-${a.testType}`}>{a.testType}</span>
                      </td>
                      <td className="px-4 py-3" style={{ color: "var(--text-secondary)" }}>{a.score}/{a.maxScore}</td>
                      <td className="px-4 py-3">
                        <span className="font-bold" style={{ color: "var(--accent)" }}>Band {a.bandScore}</span>
                      </td>
                      <td className="px-4 py-3">
                        <span className={`badge ${a.status === "completed" ? "badge-general" : ""}`}
                          style={a.status === "cancelled" ? { background: "#fef2f2", color: "#dc2626" } : {}}>
                          {a.status}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-xs" style={{ color: "var(--text-muted)" }}>
                        {new Date(a.submittedAt).toLocaleDateString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
