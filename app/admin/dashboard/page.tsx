"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  BookOpen, LogOut, Users, Award, BarChart3, Search,
  Download, CheckCircle, X, Shield, Plus, Trash2, Eye, EyeOff
} from "lucide-react";
import { getSession, clearSession, getAttempts, getTeachers, addTeacher, deleteTeacher, type AttemptData, type TeacherAccount } from "@/lib/store";

export default function AdminDashboard() {
  const router = useRouter();
  const [attempts, setAttempts] = useState<AttemptData[]>([]);
  const [activeTab, setActiveTab] = useState<"results" | "teachers">("results");
  const [isRootAdmin, setIsRootAdmin] = useState(false);
  const [search, setSearch] = useState("");
  const [filterGroup, setFilterGroup] = useState("all");
  const [filterType, setFilterType] = useState<"all" | "reading" | "listening">("all");
  const [filterStatus, setFilterStatus] = useState<"all" | "completed" | "cancelled">("all");
  const [sortBy, setSortBy] = useState<"date" | "band" | "name">("date");

  // Teachers state
  const [teachers, setTeachers] = useState<TeacherAccount[]>([]);
  const [newUsername, setNewUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [showNewPw, setShowNewPw] = useState(false);
  const [teacherError, setTeacherError] = useState("");
  const [teacherSuccess, setTeacherSuccess] = useState("");

  useEffect(() => {
    const s = getSession();
    if (!s || !s.isAdmin) { router.push("/auth/login?admin=true"); return; }
    setIsRootAdmin(s.id === "admin-root");
    setAttempts(getAttempts());
    setTeachers(getTeachers());
  }, [router]);

  const handleAddTeacher = () => {
    setTeacherError(""); setTeacherSuccess("");
    if (!newUsername.trim() || !newPassword.trim()) {
      setTeacherError("Both username and password are required."); return;
    }
    const result = addTeacher(newUsername.trim(), newPassword.trim());
    if (result.ok) {
      setTeachers(getTeachers());
      setNewUsername(""); setNewPassword("");
      setTeacherSuccess("Teacher account created.");
    } else {
      setTeacherError(result.error ?? "Error");
    }
  };

  const handleDeleteTeacher = (id: string) => {
    if (!confirm("Delete this teacher account?")) return;
    deleteTeacher(id);
    setTeachers(getTeachers());
  };

  const handleLogout = () => { clearSession(); router.push("/"); };

  // Derived data
  const groups = ["all", ...Array.from(new Set(attempts.map((a) => a.groupName)))];

  const filtered = attempts
    .filter((a) => {
      if (filterGroup !== "all" && a.groupName !== filterGroup) return false;
      if (filterType !== "all" && a.testType !== filterType) return false;
      if (filterStatus !== "all" && a.status !== filterStatus) return false;
      if (search) {
        const q = search.toLowerCase();
        return (
          a.studentName.toLowerCase().includes(q) ||
          a.studentSurname.toLowerCase().includes(q) ||
          a.groupName.toLowerCase().includes(q) ||
          a.testTitle.toLowerCase().includes(q)
        );
      }
      return true;
    })
    .sort((a, b) => {
      if (sortBy === "date") return new Date(b.submittedAt).getTime() - new Date(a.submittedAt).getTime();
      if (sortBy === "band") return b.bandScore - a.bandScore;
      if (sortBy === "name") return a.studentSurname.localeCompare(b.studentSurname);
      return 0;
    });

  const completed = filtered.filter((a) => a.status === "completed");
  const avgBand = completed.length
    ? (completed.reduce((s, a) => s + a.bandScore, 0) / completed.length).toFixed(1)
    : "–";
  const uniqueStudents = new Set(attempts.map((a) => a.studentId)).size;

  // CSV export
  const exportCSV = () => {
    const headers = ["Name", "Surname", "Group", "Test", "Type", "Score", "Max", "Band", "Status", "Date"];
    const rows = filtered.map((a) => [
      a.studentName, a.studentSurname, a.groupName, a.testTitle,
      a.testType, a.score, a.maxScore, a.bandScore, a.status,
      new Date(a.submittedAt).toLocaleString(),
    ]);
    const csv = [headers, ...rows].map((r) => r.join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `london-lc-results-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen" style={{ background: "var(--bg-primary)" }}>
      {/* Header */}
      <header className="sticky top-0 z-30 flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4"
        style={{ background: "var(--bg-primary)", borderBottom: "1px solid var(--border)" }}>
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center"
            style={{ background: "linear-gradient(135deg, #1e3bbf, #4a6de8)" }}>
            <BookOpen size={16} className="text-white" />
          </div>
          <span className="font-bold logo-gradient">London LC</span>
          <span className="px-2 py-0.5 rounded-full text-xs font-semibold"
            style={{ background: "var(--accent-light)", color: "var(--accent)" }}>
            Admin
          </span>
        </div>
        <button onClick={handleLogout}
          className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm font-medium transition-colors"
          style={{ color: "var(--text-muted)", border: "1px solid var(--border)" }}>
          <LogOut size={14} /> <span className="hidden sm:inline">Sign Out</span>
        </button>
      </header>

      {/* Tab bar */}
      <div style={{ borderBottom: "1px solid var(--border)", background: "var(--bg-primary)", overflowX: "auto" }}>
        <div className="max-w-7xl mx-auto px-4 flex gap-1 pt-3" style={{ whiteSpace: "nowrap" }}>
          {([ { id: "results" as const, Icon: BarChart3, label: "Results" },
              ...(isRootAdmin ? [{ id: "teachers" as const, Icon: Shield, label: "Manage Teachers" }] : [])
            ]).map(({ id, Icon, label }) => (
            <button key={id} onClick={() => setActiveTab(id)}
              className="flex items-center gap-2 px-4 py-2.5 text-sm font-semibold rounded-t-xl transition-all"
              style={{
                color: activeTab === id ? "var(--accent)" : "var(--text-muted)",
                background: activeTab === id ? "var(--bg-card)" : "transparent",
                borderBottom: activeTab === id ? "2px solid var(--accent)" : "2px solid transparent",
              }}>
              <Icon size={14} /> {label}
            </button>
          ))}
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-3 sm:px-6 py-6 sm:py-8">
        {activeTab === "results" && <>
        {/* Welcome */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold" style={{ color: "var(--text-primary)" }}>
              Teacher Dashboard
            </h1>
            <p style={{ color: "var(--text-muted)" }}>
              View and analyse all student results
            </p>
          </div>
          <button onClick={exportCSV}
            className="btn-secondary text-sm py-2 px-4">
            <Download size={14} /> Export CSV
          </button>
        </div>

        {/* Stats cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: "Total Attempts", value: attempts.length, icon: BarChart3 },
            { label: "Unique Students", value: uniqueStudents, icon: Users },
            { label: "Avg Band Score", value: avgBand, icon: Award },
            { label: "Completed Tests", value: attempts.filter((a) => a.status === "completed").length, icon: CheckCircle },
          ].map((s) => (
            <motion.div key={s.label}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-5 rounded-2xl"
              style={{ background: "var(--bg-card)", border: "1px solid var(--border)", boxShadow: "var(--shadow)" }}>
              <div className="flex items-center gap-2 mb-3">
                <s.icon size={16} style={{ color: "var(--accent)" }} />
                <span className="text-xs" style={{ color: "var(--text-muted)" }}>{s.label}</span>
              </div>
              <div className="text-3xl font-black" style={{ color: "var(--text-primary)" }}>{s.value}</div>
            </motion.div>
          ))}
        </div>

        {/* Filters */}
        <div className="p-4 rounded-2xl mb-6"
          style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}>
          {/* Search — full width */}
          <div className="relative mb-3">
            <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2"
              style={{ color: "var(--text-muted)" }} />
            <input
              type="text"
              placeholder="Search by name, group, or test..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="input-field pl-9 py-2 text-sm"
            />
          </div>
          {/* Dropdowns row — wrap on small screens */}
          <div className="flex flex-wrap gap-2">
            {[
              { value: filterGroup, onChange: (v: string) => setFilterGroup(v),
                options: groups.map(g => ({ v: g, l: g === "all" ? "All Groups" : g })) },
              { value: filterType, onChange: (v: string) => setFilterType(v as typeof filterType),
                options: [{ v: "all", l: "All Types" }, { v: "reading", l: "Reading" }, { v: "listening", l: "Listening" }] },
              { value: filterStatus, onChange: (v: string) => setFilterStatus(v as typeof filterStatus),
                options: [{ v: "all", l: "All Statuses" }, { v: "completed", l: "Completed" }, { v: "cancelled", l: "Cancelled" }] },
              { value: sortBy, onChange: (v: string) => setSortBy(v as typeof sortBy),
                options: [{ v: "date", l: "Sort: Date" }, { v: "band", l: "Sort: Band" }, { v: "name", l: "Sort: Name" }] },
            ].map((sel, i) => (
              <select key={i} value={sel.value} onChange={e => sel.onChange(e.target.value)}
                className="py-2 px-3 rounded-xl text-sm font-medium outline-none transition-all"
                style={{ background: "var(--bg-secondary)", border: "1.5px solid var(--border)", color: "var(--text-primary)", flex: "1 1 130px", minWidth: 0 }}>
                {sel.options.map(o => <option key={o.v} value={o.v}>{o.l}</option>)}
              </select>
            ))}
          </div>
        </div>

        {/* Results table */}
        {filtered.length > 0 ? (
          <div className="rounded-2xl overflow-hidden"
            style={{ border: "1px solid var(--border)", boxShadow: "var(--shadow)" }}>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ background: "var(--bg-secondary)", borderBottom: "1px solid var(--border)" }}>
                    {["Student", "Group", "Test", "Type", "Score", "Band", "Status", "Duration", "Date"].map((h) => (
                      <th key={h} className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide whitespace-nowrap"
                        style={{ color: "var(--text-muted)" }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((a, i) => (
                    <tr key={a.id}
                      style={{
                        background: i % 2 === 0 ? "var(--bg-card)" : "var(--bg-secondary)",
                        borderBottom: "1px solid var(--border)",
                      }}>
                      <td className="px-4 py-3">
                        <div className="font-semibold" style={{ color: "var(--text-primary)" }}>
                          {a.studentName} {a.studentSurname}
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <span className="px-2 py-0.5 rounded-full text-xs font-medium"
                          style={{ background: "var(--accent-light)", color: "var(--accent)" }}>
                          {a.groupName}
                        </span>
                      </td>
                      <td className="px-4 py-3 max-w-32">
                        <span style={{ color: "var(--text-secondary)" }} className="truncate block">
                          {a.testTitle}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <span className={`badge badge-${a.testType}`}>{a.testType}</span>
                      </td>
                      <td className="px-4 py-3" style={{ color: "var(--text-secondary)" }}>
                        {a.score}/{a.maxScore}
                      </td>
                      <td className="px-4 py-3">
                        <span className="font-bold text-base" style={{ color: "var(--accent)" }}>
                          {a.bandScore > 0 ? a.bandScore : "–"}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <span className="flex items-center gap-1 text-xs font-medium"
                          style={a.status === "completed"
                            ? { color: "#10b981" }
                            : { color: "#ef4444" }}>
                          {a.status === "completed" ? <CheckCircle size={12} /> : <X size={12} />}
                          {a.status}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-xs whitespace-nowrap" style={{ color: "var(--text-muted)" }}>
                        {a.timeSpentSeconds
                          ? `${Math.floor(a.timeSpentSeconds / 60)}m ${a.timeSpentSeconds % 60}s`
                          : "–"}
                      </td>
                      <td className="px-4 py-3 text-xs whitespace-nowrap" style={{ color: "var(--text-muted)" }}>
                        {new Date(a.submittedAt).toLocaleString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="px-4 py-3 text-xs"
              style={{ background: "var(--bg-secondary)", borderTop: "1px solid var(--border)", color: "var(--text-muted)" }}>
              Showing {filtered.length} of {attempts.length} attempts
            </div>
          </div>
        ) : (
          <div className="text-center py-20" style={{ color: "var(--text-muted)" }}>
            <BarChart3 size={40} className="mx-auto mb-4 opacity-30" />
            <p className="font-medium">No results yet.</p>
            <p className="text-sm mt-1">Students&apos; results will appear here once they complete tests.</p>
          </div>
        )}

        {/* Group breakdown */}
        {groups.length > 1 && (
          <div className="mt-8">
            <h2 className="text-lg font-bold mb-4" style={{ color: "var(--text-primary)" }}>
              Group Summary
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {groups.filter((g) => g !== "all").map((group) => {
                const groupAttempts = attempts.filter((a) => a.groupName === group && a.status === "completed");
                const avg = groupAttempts.length
                  ? (groupAttempts.reduce((s, a) => s + a.bandScore, 0) / groupAttempts.length).toFixed(1)
                  : "–";
                const students = new Set(attempts.filter((a) => a.groupName === group).map((a) => a.studentId)).size;
                return (
                  <div key={group} className="p-5 rounded-2xl"
                    style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}>
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-bold" style={{ color: "var(--text-primary)" }}>{group}</span>
                      <span className="px-2 py-0.5 rounded-full text-xs"
                        style={{ background: "var(--accent-light)", color: "var(--accent)" }}>
                        {students} students
                      </span>
                    </div>
                    <div className="text-2xl font-black mb-1" style={{ color: "var(--accent)" }}>{avg}</div>
                    <div className="text-xs" style={{ color: "var(--text-muted)" }}>Average band score</div>
                    <div className="text-xs mt-1" style={{ color: "var(--text-muted)" }}>
                      {groupAttempts.length} completed tests
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
        </>}

        {/* ── Teachers tab ──────────────────────────────────── */}
        {activeTab === "teachers" && isRootAdmin && (
          <div className="max-w-2xl">
            <h1 className="text-2xl font-bold mb-2" style={{ color: "var(--text-primary)" }}>Manage Teachers</h1>
            <p className="text-sm mb-8" style={{ color: "var(--text-muted)" }}>Add or remove teacher login accounts.</p>

            {/* Add new teacher */}
            <div className="p-6 rounded-2xl mb-8" style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}>
              <h2 className="text-sm font-bold mb-4 uppercase tracking-wide" style={{ color: "var(--text-muted)" }}>Add New Teacher</h2>
              <div className="flex flex-col gap-3">
                <input
                  type="text"
                  placeholder="Username (e.g. ShahloA13)"
                  value={newUsername}
                  onChange={e => setNewUsername(e.target.value)}
                  className="input-field py-2.5 text-sm"
                />
                <div className="relative">
                  <input
                    type={showNewPw ? "text" : "password"}
                    placeholder="Password"
                    value={newPassword}
                    onChange={e => setNewPassword(e.target.value)}
                    className="input-field py-2.5 text-sm pr-10"
                  />
                  <button type="button" onClick={() => setShowNewPw(!showNewPw)}
                    className="absolute right-3 top-1/2 -translate-y-1/2"
                    style={{ background: "none", border: "none", cursor: "pointer", color: "var(--text-muted)", padding: 0 }}>
                    {showNewPw ? <EyeOff size={15} /> : <Eye size={15} />}
                  </button>
                </div>
                {teacherError && <p className="text-sm" style={{ color: "var(--danger)" }}>{teacherError}</p>}
                {teacherSuccess && <p className="text-sm" style={{ color: "var(--success)" }}>{teacherSuccess}</p>}
                <button onClick={handleAddTeacher} className="btn-primary self-start text-sm py-2.5 px-5">
                  <Plus size={14} /> Add Teacher
                </button>
              </div>
            </div>

            {/* Existing teachers list */}
            <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid var(--border)" }}>
              <div className="px-4 py-3 text-xs font-bold uppercase tracking-wide" style={{ background: "var(--bg-secondary)", color: "var(--text-muted)", borderBottom: "1px solid var(--border)" }}>
                Existing Accounts ({teachers.length})
              </div>
              {teachers.map((t) => (
                <div key={t.id} className="flex items-center justify-between px-4 py-3"
                  style={{ borderBottom: "1px solid var(--border)", background: "var(--bg-card)" }}>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center"
                      style={{ background: "var(--accent-light)" }}>
                      <Shield size={14} style={{ color: "var(--accent)" }} />
                    </div>
                    <div>
                      <div className="font-semibold text-sm" style={{ color: "var(--text-primary)" }}>{t.username}</div>
                      {t.id === "admin-root" && (
                        <div className="text-xs" style={{ color: "var(--accent)" }}>Super Admin</div>
                      )}
                    </div>
                  </div>
                  <button
                    onClick={() => handleDeleteTeacher(t.id)}
                    disabled={t.id === "admin-root"}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                    style={{ color: "var(--danger)", border: "1px solid var(--border)" }}>
                    <Trash2 size={12} /> Delete
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
