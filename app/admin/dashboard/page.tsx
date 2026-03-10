"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  BookOpen, LogOut, Users, Award, BarChart3, Search,
  Download, CheckCircle, X, Shield, Plus, Trash2, Eye, EyeOff
} from "lucide-react";
import { getSession, clearSession, getAttempts, getTeachers, addTeacher, deleteTeacher, type AttemptData, type TeacherAccount } from "@/lib/store";

// ── Hardcoded dark theme colours ─────────────────────────────
const C = {
  bg: "#02040f",
  card: "#0b1530",
  card2: "#060c1f",
  border: "rgba(255,255,255,0.08)",
  text: "#e8eeff",
  muted: "#4d6bb5",
  sub: "#8ba4e8",
  accent: "#3d62e0",
  accentLight: "rgba(61,98,224,0.15)",
  success: "#10b981",
  danger: "#ef4444",
};

const sel: React.CSSProperties = {
  padding: "9px 12px",
  background: C.card2,
  border: `1.5px solid ${C.border}`,
  borderRadius: 10,
  color: C.text,
  fontSize: 13,
  fontWeight: 500,
  outline: "none",
  cursor: "pointer",
  fontFamily: "Inter, system-ui, sans-serif",
  width: "100%",
};

export default function AdminDashboard() {
  const router = useRouter();
  const [attempts, setAttempts] = useState<AttemptData[]>([]);
  const [activeTab, setActiveTab] = useState<"results" | "teachers">("results");
  const [expandedGroup, setExpandedGroup] = useState<string | null>(null);
  const [expandedStudent, setExpandedStudent] = useState<string | null>(null);
  const [isRootAdmin, setIsRootAdmin] = useState(false);
  const [search, setSearch] = useState("");
  const [filterGroup, setFilterGroup] = useState("all");
  const [filterType, setFilterType] = useState<"all" | "reading" | "listening">("all");
  const [filterStatus, setFilterStatus] = useState<"all" | "completed" | "cancelled">("all");
  const [sortBy, setSortBy] = useState<"date" | "band" | "name">("date");
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
    if (!newUsername.trim() || !newPassword.trim()) { setTeacherError("Both fields required."); return; }
    const result = addTeacher(newUsername.trim(), newPassword.trim());
    if (result.ok) { setTeachers(getTeachers()); setNewUsername(""); setNewPassword(""); setTeacherSuccess("Teacher account created."); }
    else setTeacherError(result.error ?? "Error");
  };

  const handleDeleteTeacher = (id: string) => {
    if (!confirm("Delete this teacher account?")) return;
    deleteTeacher(id); setTeachers(getTeachers());
  };

  const handleLogout = () => { clearSession(); router.push("/"); };

  const groups = ["all", ...Array.from(new Set(attempts.map((a) => a.groupName)))];

  const filtered = attempts.filter((a) => {
    if (filterGroup !== "all" && a.groupName !== filterGroup) return false;
    if (filterType !== "all" && a.testType !== filterType) return false;
    if (filterStatus !== "all" && a.status !== filterStatus) return false;
    if (search) {
      const q = search.toLowerCase();
      return a.studentName.toLowerCase().includes(q) || a.studentSurname.toLowerCase().includes(q) ||
        a.groupName.toLowerCase().includes(q) || a.testTitle.toLowerCase().includes(q);
    }
    return true;
  }).sort((a, b) => {
    if (sortBy === "date") return new Date(b.submittedAt).getTime() - new Date(a.submittedAt).getTime();
    if (sortBy === "band") return b.bandScore - a.bandScore;
    return a.studentSurname.localeCompare(b.studentSurname);
  });

  const completed = filtered.filter((a) => a.status === "completed");
  const avgBand = completed.length ? (completed.reduce((s, a) => s + a.bandScore, 0) / completed.length).toFixed(1) : "–";
  const uniqueStudents = new Set(attempts.map((a) => a.studentId)).size;

  const exportExcel = async () => {
    const XLSX = await import("xlsx");
    const rows = filtered.map((a) => ({
      "First Name": a.studentName, "Surname": a.studentSurname, "Group": a.groupName,
      "Test": a.testTitle, "Type": a.testType.charAt(0).toUpperCase() + a.testType.slice(1),
      "Score": `${a.score}/${a.maxScore}`, "Band Score": a.bandScore > 0 ? a.bandScore : "–",
      "Status": a.status.charAt(0).toUpperCase() + a.status.slice(1),
      "Duration": a.timeSpentSeconds ? `${Math.floor(a.timeSpentSeconds / 60)}m ${a.timeSpentSeconds % 60}s` : "–",
      "Date": new Date(a.submittedAt).toLocaleString(),
    }));
    const ws = XLSX.utils.json_to_sheet(rows);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Results");
    XLSX.writeFile(wb, `london-lc-results-${new Date().toISOString().slice(0, 10)}.xlsx`);
  };

  const tabs = [
    { id: "results" as const, Icon: BarChart3, label: "Results" },
    ...(isRootAdmin ? [{ id: "teachers" as const, Icon: Shield, label: "Manage Teachers" }] : []),
  ];

  return (
    <div style={{ minHeight: "100vh", background: C.bg, fontFamily: "Inter, system-ui, sans-serif", color: C.text }}>

      {/* ── Header ────────────────────────────────── */}
      <header style={{ position: "sticky", top: 0, zIndex: 30, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 24px", height: 56, background: C.card2, borderBottom: `1px solid ${C.border}` }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 30, height: 30, borderRadius: 8, background: "linear-gradient(135deg,#1e3bbf,#4a6de8)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <BookOpen size={14} color="white" />
          </div>
          <span style={{ fontWeight: 800, fontSize: 16, color: C.text }}>London LC</span>
          <span style={{ padding: "2px 10px", borderRadius: 20, fontSize: 11, fontWeight: 700, background: C.accentLight, color: C.accent }}>Admin</span>
        </div>
        <button onClick={handleLogout}
          style={{ display: "flex", alignItems: "center", gap: 6, padding: "7px 14px", background: "transparent", border: `1px solid ${C.border}`, borderRadius: 9, color: C.muted, fontSize: 13, cursor: "pointer" }}>
          <LogOut size={13} /> Sign Out
        </button>
      </header>

      {/* ── Tab bar ───────────────────────────────── */}
      <div style={{ background: C.card2, borderBottom: `1px solid ${C.border}`, overflowX: "auto" }}>
        <div style={{ display: "flex", gap: 4, padding: "8px 24px 0", maxWidth: 1280, margin: "0 auto", whiteSpace: "nowrap" }}>
          {tabs.map(({ id, Icon, label }) => (
            <button key={id} onClick={() => setActiveTab(id)}
              style={{ display: "inline-flex", alignItems: "center", gap: 7, padding: "10px 16px", borderRadius: "10px 10px 0 0", border: "none", cursor: "pointer", fontWeight: 600, fontSize: 13, transition: "all 0.15s",
                background: activeTab === id ? C.card : "transparent",
                color: activeTab === id ? C.accent : C.muted,
                borderBottom: activeTab === id ? `2px solid ${C.accent}` : "2px solid transparent" }}>
              <Icon size={14} /> {label}
            </button>
          ))}
        </div>
      </div>

      <main style={{ maxWidth: 1280, margin: "0 auto", padding: "28px 24px" }}>

        {/* ══════════════════ RESULTS TAB ══════════════════ */}
        {activeTab === "results" && <>

          {/* Title row */}
          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 16, marginBottom: 24, flexWrap: "wrap" }}>
            <div>
              <h1 style={{ fontSize: 22, fontWeight: 800, color: C.text, marginBottom: 2 }}>Teacher Dashboard</h1>
              <p style={{ fontSize: 13, color: C.muted }}>View and analyse all student results</p>
            </div>
            <button onClick={exportExcel}
              style={{ display: "flex", alignItems: "center", gap: 7, padding: "9px 18px", background: C.accentLight, border: `1px solid ${C.accent}`, borderRadius: 10, color: C.accent, fontSize: 13, fontWeight: 600, cursor: "pointer" }}>
              <Download size={14} /> Export Excel
            </button>
          </div>

          {/* Stats */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 14, marginBottom: 24 }}>
            {[
              { label: "Total Attempts", value: attempts.length, Icon: BarChart3, color: C.accent },
              { label: "Unique Students", value: uniqueStudents, Icon: Users, color: "#10b981" },
              { label: "Avg Band Score", value: avgBand, Icon: Award, color: "#f59e0b" },
              { label: "Completed", value: attempts.filter(a => a.status === "completed").length, Icon: CheckCircle, color: "#8b5cf6" },
            ].map(s => (
              <div key={s.label} style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 14, padding: "18px 20px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
                  <s.Icon size={15} color={s.color} />
                  <span style={{ fontSize: 12, color: C.muted, fontWeight: 600 }}>{s.label}</span>
                </div>
                <div style={{ fontSize: 30, fontWeight: 900, color: C.text, lineHeight: 1 }}>{s.value}</div>
              </div>
            ))}
          </div>

          {/* Filters */}
          <div style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 14, padding: "16px", marginBottom: 20 }}>
            {/* Search */}
            <div style={{ position: "relative", marginBottom: 12 }}>
              <Search size={14} color={C.muted} style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)" }} />
              <input type="text" placeholder="Search by name, group, or test..."
                value={search} onChange={e => setSearch(e.target.value)}
                style={{ width: "100%", padding: "10px 14px 10px 36px", background: C.card2, border: `1.5px solid ${C.border}`, borderRadius: 10, color: C.text, fontSize: 13, outline: "none", boxSizing: "border-box", fontFamily: "inherit" }}
              />
            </div>
            {/* Dropdowns — CSS grid, always 4 on desktop, 2 on tablet, 1 on phone */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 8 }}>
              <select value={filterGroup} onChange={e => setFilterGroup(e.target.value)} style={sel}>
                {groups.map(g => <option key={g} value={g}>{g === "all" ? "All Groups" : g}</option>)}
              </select>
              <select value={filterType} onChange={e => setFilterType(e.target.value as typeof filterType)} style={sel}>
                <option value="all">All Types</option>
                <option value="reading">Reading</option>
                <option value="listening">Listening</option>
              </select>
              <select value={filterStatus} onChange={e => setFilterStatus(e.target.value as typeof filterStatus)} style={sel}>
                <option value="all">All Statuses</option>
                <option value="completed">Completed</option>
                <option value="cancelled">Cancelled</option>
              </select>
              <select value={sortBy} onChange={e => setSortBy(e.target.value as typeof sortBy)} style={sel}>
                <option value="date">Sort: Date</option>
                <option value="band">Sort: Band Score</option>
                <option value="name">Sort: Name</option>
              </select>
            </div>
          </div>

          {/* Table */}
          {filtered.length > 0 ? (
            <div style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 14, overflow: "hidden", marginBottom: 28 }}>
              <div style={{ overflowX: "auto" }}>
                <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13, minWidth: 700 }}>
                  <thead>
                    <tr style={{ background: C.card2 }}>
                      {["Student", "Group", "Test", "Type", "Score", "Band", "Status", "Duration", "Date"].map(h => (
                        <th key={h} style={{ padding: "11px 14px", textAlign: "left", fontSize: 11, fontWeight: 700, color: C.muted, textTransform: "uppercase", letterSpacing: "0.06em", borderBottom: `1px solid ${C.border}`, whiteSpace: "nowrap" }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {filtered.map((a, i) => (
                      <tr key={a.id} style={{ borderBottom: `1px solid ${C.border}`, background: i % 2 === 0 ? C.card : "rgba(6,12,31,0.6)" }}>
                        <td style={{ padding: "12px 14px", fontWeight: 600, color: C.text, whiteSpace: "nowrap" }}>{a.studentName} {a.studentSurname}</td>
                        <td style={{ padding: "12px 14px" }}>
                          <span style={{ padding: "3px 9px", borderRadius: 20, fontSize: 11, fontWeight: 600, background: C.accentLight, color: C.accent }}>{a.groupName}</span>
                        </td>
                        <td style={{ padding: "12px 14px", color: C.sub, maxWidth: 160, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{a.testTitle}</td>
                        <td style={{ padding: "12px 14px" }}>
                          <span style={{ padding: "3px 9px", borderRadius: 20, fontSize: 11, fontWeight: 600,
                            background: a.testType === "listening" ? "rgba(139,92,246,0.2)" : "rgba(245,158,11,0.15)",
                            color: a.testType === "listening" ? "#c4b5fd" : "#fcd34d" }}>
                            {a.testType}
                          </span>
                        </td>
                        <td style={{ padding: "12px 14px", color: C.sub }}>{a.score}/{a.maxScore}</td>
                        <td style={{ padding: "12px 14px", fontWeight: 700, fontSize: 15, color: C.accent }}>{a.bandScore > 0 ? a.bandScore : "–"}</td>
                        <td style={{ padding: "12px 14px" }}>
                          <span style={{ display: "inline-flex", alignItems: "center", gap: 4, fontSize: 12, fontWeight: 600,
                            color: a.status === "completed" ? C.success : C.danger }}>
                            {a.status === "completed" ? <CheckCircle size={12} /> : <X size={12} />}
                            {a.status}
                          </span>
                        </td>
                        <td style={{ padding: "12px 14px", color: C.muted, whiteSpace: "nowrap" }}>
                          {a.timeSpentSeconds ? `${Math.floor(a.timeSpentSeconds / 60)}m ${a.timeSpentSeconds % 60}s` : "–"}
                        </td>
                        <td style={{ padding: "12px 14px", color: C.muted, whiteSpace: "nowrap", fontSize: 12 }}>
                          {new Date(a.submittedAt).toLocaleString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div style={{ padding: "10px 14px", background: C.card2, borderTop: `1px solid ${C.border}`, fontSize: 12, color: C.muted }}>
                Showing {filtered.length} of {attempts.length} attempts
              </div>
            </div>
          ) : (
            <div style={{ textAlign: "center", padding: "60px 0", color: C.muted }}>
              <BarChart3 size={36} style={{ margin: "0 auto 12px", opacity: 0.3 }} />
              <p style={{ fontWeight: 600 }}>No results yet.</p>
              <p style={{ fontSize: 13, marginTop: 4 }}>Results will appear here once students complete tests.</p>
            </div>
          )}

          {/* Group summary */}
          {groups.length > 1 && (
            <div>
              <h2 style={{ fontSize: 16, fontWeight: 700, color: C.text, marginBottom: 14 }}>Group Summary</h2>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 14, marginBottom: 16 }}>
                {groups.filter(g => g !== "all").map(group => {
                  const ga = attempts.filter(a => a.groupName === group && a.status === "completed");
                  const avg = ga.length ? (ga.reduce((s, a) => s + a.bandScore, 0) / ga.length).toFixed(1) : "–";
                  const students = new Set(attempts.filter(a => a.groupName === group).map(a => a.studentId)).size;
                  const isOpen = expandedGroup === group;
                  return (
                    <div key={group}
                      onClick={() => setExpandedGroup(isOpen ? null : group)}
                      style={{ background: C.card, border: `1.5px solid ${isOpen ? C.accent : C.border}`, borderRadius: 14, padding: "18px 20px", cursor: "pointer", transition: "border-color 0.15s" }}>
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
                        <span style={{ fontWeight: 700, fontSize: 15, color: C.text }}>{group}</span>
                        <span style={{ padding: "2px 8px", borderRadius: 20, fontSize: 11, background: C.accentLight, color: C.accent }}>{students} students</span>
                      </div>
                      <div style={{ fontSize: 28, fontWeight: 900, color: C.accent, marginBottom: 2 }}>{avg}</div>
                      <div style={{ fontSize: 12, color: C.muted }}>Avg band · {ga.length} completed · {isOpen ? "▲ hide" : "▼ show students"}</div>
                    </div>
                  );
                })}
              </div>

              {/* Expanded student breakdown */}
              {expandedGroup && (() => {
                const groupStudentIds = Array.from(new Set(attempts.filter(a => a.groupName === expandedGroup).map(a => a.studentId)));
                return (
                  <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 28 }}>
                    {groupStudentIds.map(sid => {
                      const studentAttempts = attempts.filter(a => a.studentId === sid);
                      const first = studentAttempts[0];
                      const completed = studentAttempts.filter(a => a.status === "completed");
                      const reading = completed.filter(a => a.testType === "reading");
                      const listening = completed.filter(a => a.testType === "listening");
                      const avgR = reading.length ? (reading.reduce((s, a) => s + a.bandScore, 0) / reading.length).toFixed(1) : "–";
                      const avgL = listening.length ? (listening.reduce((s, a) => s + a.bandScore, 0) / listening.length).toFixed(1) : "–";
                      const isOpen = expandedStudent === sid;
                      return (
                        <div key={sid} style={{ background: C.card, border: `1.5px solid ${isOpen ? C.accent : C.border}`, borderRadius: 14, overflow: "hidden" }}>
                          {/* Student header row */}
                          <div onClick={() => setExpandedStudent(isOpen ? null : sid)}
                            style={{ display: "flex", alignItems: "center", gap: 14, padding: "14px 18px", cursor: "pointer", flexWrap: "wrap" }}>
                            <div style={{ width: 36, height: 36, borderRadius: "50%", background: C.accentLight, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                              <Users size={15} color={C.accent} />
                            </div>
                            <div style={{ flex: 1, minWidth: 120 }}>
                              <div style={{ fontWeight: 700, fontSize: 14, color: C.text }}>{first.studentName} {first.studentSurname}</div>
                              <div style={{ fontSize: 12, color: C.muted }}>{completed.length} test{completed.length !== 1 ? "s" : ""} completed</div>
                            </div>
                            <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
                              <div style={{ textAlign: "center" }}>
                                <div style={{ fontSize: 18, fontWeight: 800, color: reading.length ? "#fbbf24" : C.muted }}>{avgR}</div>
                                <div style={{ fontSize: 11, color: C.muted }}>Reading avg</div>
                              </div>
                              <div style={{ textAlign: "center" }}>
                                <div style={{ fontSize: 18, fontWeight: 800, color: listening.length ? "#a78bfa" : C.muted }}>{avgL}</div>
                                <div style={{ fontSize: 11, color: C.muted }}>Listening avg</div>
                              </div>
                            </div>
                            <span style={{ fontSize: 12, color: C.muted, flexShrink: 0 }}>{isOpen ? "▲" : "▼"} details</span>
                          </div>

                          {/* Per-test detail table */}
                          {isOpen && (
                            <div style={{ borderTop: `1px solid ${C.border}`, overflowX: "auto" }}>
                              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13, minWidth: 680 }}>
                                <thead>
                                  <tr style={{ background: C.card2 }}>
                                    {["Test", "Type", "Score", "Correct", "Wrong", "Band", "Duration", "Date"].map(h => (
                                      <th key={h} style={{ padding: "9px 14px", textAlign: "left", fontSize: 11, fontWeight: 700, color: C.muted, textTransform: "uppercase", letterSpacing: "0.06em", borderBottom: `1px solid ${C.border}`, whiteSpace: "nowrap" }}>{h}</th>
                                    ))}
                                  </tr>
                                </thead>
                                <tbody>
                                  {[...studentAttempts].reverse().map((a, i) => {
                                    const correct = a.status === "completed" ? a.score : 0;
                                    const wrong = a.status === "completed" ? (a.maxScore - a.score) : 0;
                                    const pct = a.maxScore > 0 ? Math.round((correct / a.maxScore) * 100) : 0;
                                    return (
                                      <tr key={a.id} style={{ borderBottom: `1px solid ${C.border}`, background: i % 2 === 0 ? C.card : "rgba(6,12,31,0.5)" }}>
                                        <td style={{ padding: "11px 14px", fontWeight: 600, color: C.text, maxWidth: 180, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{a.testTitle}</td>
                                        <td style={{ padding: "11px 14px" }}>
                                          <span style={{ padding: "2px 8px", borderRadius: 20, fontSize: 11, fontWeight: 600,
                                            background: a.testType === "listening" ? "rgba(139,92,246,0.2)" : "rgba(245,158,11,0.15)",
                                            color: a.testType === "listening" ? "#c4b5fd" : "#fcd34d" }}>
                                            {a.testType}
                                          </span>
                                        </td>
                                        <td style={{ padding: "11px 14px", color: C.sub }}>{a.status === "completed" ? `${correct}/${a.maxScore} (${pct}%)` : "–"}</td>
                                        <td style={{ padding: "11px 14px", fontWeight: 700, color: "#10b981" }}>{a.status === "completed" ? correct : "–"}</td>
                                        <td style={{ padding: "11px 14px", fontWeight: 700, color: wrong > 0 ? "#ef4444" : C.muted }}>{a.status === "completed" ? wrong : "–"}</td>
                                        <td style={{ padding: "11px 14px", fontWeight: 800, fontSize: 15, color: C.accent }}>{a.status === "completed" && a.bandScore > 0 ? a.bandScore : "–"}</td>
                                        <td style={{ padding: "11px 14px", color: C.muted, whiteSpace: "nowrap" }}>{a.timeSpentSeconds ? `${Math.floor(a.timeSpentSeconds / 60)}m ${a.timeSpentSeconds % 60}s` : "–"}</td>
                                        <td style={{ padding: "11px 14px", fontSize: 12, color: C.muted, whiteSpace: "nowrap" }}>{new Date(a.submittedAt).toLocaleDateString()}</td>
                                      </tr>
                                    );
                                  })}
                                </tbody>
                              </table>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                );
              })()}
            </div>
          )}
        </>}

        {/* ══════════════════ TEACHERS TAB ══════════════════ */}
        {activeTab === "teachers" && isRootAdmin && (
          <div style={{ maxWidth: 560 }}>
            <h1 style={{ fontSize: 22, fontWeight: 800, color: C.text, marginBottom: 4 }}>Manage Teachers</h1>
            <p style={{ fontSize: 13, color: C.muted, marginBottom: 24 }}>Add or remove teacher login accounts.</p>

            {/* Add form */}
            <div style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 14, padding: "22px", marginBottom: 24 }}>
              <p style={{ fontSize: 11, fontWeight: 700, color: C.muted, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 14 }}>Add New Teacher</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                <input type="text" placeholder="Username" value={newUsername} onChange={e => setNewUsername(e.target.value)}
                  style={{ ...sel, padding: "11px 14px" }} />
                <div style={{ position: "relative" }}>
                  <input type={showNewPw ? "text" : "password"} placeholder="Password" value={newPassword} onChange={e => setNewPassword(e.target.value)}
                    style={{ ...sel, padding: "11px 40px 11px 14px" }} />
                  <button type="button" onClick={() => setShowNewPw(!showNewPw)}
                    style={{ position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)", background: "none", border: "none", cursor: "pointer", color: C.muted, padding: 0 }}>
                    {showNewPw ? <EyeOff size={14} /> : <Eye size={14} />}
                  </button>
                </div>
                {teacherError && <p style={{ fontSize: 13, color: C.danger }}>{teacherError}</p>}
                {teacherSuccess && <p style={{ fontSize: 13, color: C.success }}>{teacherSuccess}</p>}
                <button onClick={handleAddTeacher}
                  style={{ alignSelf: "flex-start", display: "flex", alignItems: "center", gap: 6, padding: "10px 18px", background: "linear-gradient(135deg,#1e3bbf,#3d62e0)", border: "none", borderRadius: 10, color: "#fff", fontSize: 13, fontWeight: 600, cursor: "pointer" }}>
                  <Plus size={14} /> Add Teacher
                </button>
              </div>
            </div>

            {/* List */}
            <div style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 14, overflow: "hidden" }}>
              <div style={{ padding: "10px 16px", background: C.card2, borderBottom: `1px solid ${C.border}`, fontSize: 11, fontWeight: 700, color: C.muted, textTransform: "uppercase", letterSpacing: "0.08em" }}>
                Accounts ({teachers.length})
              </div>
              {teachers.map(t => (
                <div key={t.id} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 16px", borderBottom: `1px solid ${C.border}` }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <div style={{ width: 34, height: 34, borderRadius: "50%", background: C.accentLight, display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <Shield size={14} color={C.accent} />
                    </div>
                    <div>
                      <div style={{ fontWeight: 600, fontSize: 14, color: C.text }}>{t.username}</div>
                      {t.id === "admin-root" && <div style={{ fontSize: 11, color: C.accent }}>Super Admin</div>}
                    </div>
                  </div>
                  <button onClick={() => handleDeleteTeacher(t.id)} disabled={t.id === "admin-root"}
                    style={{ display: "flex", alignItems: "center", gap: 5, padding: "6px 12px", background: "transparent", border: `1px solid ${C.border}`, borderRadius: 8, color: t.id === "admin-root" ? C.muted : C.danger, fontSize: 12, fontWeight: 600, cursor: t.id === "admin-root" ? "not-allowed" : "pointer", opacity: t.id === "admin-root" ? 0.35 : 1 }}>
                    <Trash2 size={12} /> Delete
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* Mobile responsive filter grid */}
      <style>{`
        @media (max-width: 640px) {
          .admin-filter-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 400px) {
          .admin-filter-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
