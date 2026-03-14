"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  BookOpen, LogOut, Users, Award, BarChart3, Search,
  Download, CheckCircle, X, Shield, Plus, Trash2, Eye, EyeOff,
  Monitor, Ban, Headphones, ChevronRight, ChevronDown, ChevronUp
} from "lucide-react";
import { getSession, clearSession, getAttempts, getTeachers, addTeacher, deleteTeacher, updateTeacherPassword, registerStudent, getStudentAccounts, deleteStudent, getBlockedIPs, blockIP, unblockIP, type AttemptData, type TeacherAccount, type StudentAccount } from "@/lib/store";
import { getTestById } from "@/data/ielts-tests";
import { allTests } from "@/data/ielts-tests";

// ── Hardcoded dark theme colours ─────────────────────────────
const C = {
  bg: "#0a051f",
  card: "#140b35",
  card2: "#0e0828",
  border: "rgba(255,255,255,0.08)",
  text: "#f0eaff",
  muted: "#7c5fad",
  sub: "#c4aff5",
  accent: "#7c3aed",
  accentLight: "rgba(124,58,237,0.15)",
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
  const [activeTab, setActiveTab] = useState<"results" | "students" | "teachers" | "practice" | "tests">("results");
  const [expandedGroup, setExpandedGroup] = useState<string | null>(null);
  const [expandedStudent, setExpandedStudent] = useState<string | null>(null);
  const [expandedAttempt, setExpandedAttempt] = useState<string | null>(null);
  const [expandedDeviceRow, setExpandedDeviceRow] = useState<string | null>(null);
  const [isRootAdmin, setIsRootAdmin] = useState(false);
  const [currentTeacherId, setCurrentTeacherId] = useState<string>("");
  const [blockedIPs, setBlockedIPs] = useState<string[]>([]);
  const [practiceTypeFilter, setPracticeTypeFilter] = useState<"reading" | "listening">("reading");
  const [practiceSelectedBook, setPracticeSelectedBook] = useState<number | null>(null);
  const [myPracticeAttempts, setMyPracticeAttempts] = useState<AttemptData[]>([]);
  const [testsTypeFilter, setTestsTypeFilter] = useState<"reading" | "listening">("reading");
  const [testsSelectedBook, setTestsSelectedBook] = useState<number | null>(null);
  const [testsAnswerKeyId, setTestsAnswerKeyId] = useState<string | null>(null);
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
  const [students, setStudents] = useState<StudentAccount[]>([]);
  const [newStudentName, setNewStudentName] = useState("");
  const [newStudentSurname, setNewStudentSurname] = useState("");
  const [newStudentGroup, setNewStudentGroup] = useState("");
  const [studentError, setStudentError] = useState("");
  const [createdStudent, setCreatedStudent] = useState<{ username: string; password: string; name: string; surname: string } | null>(null);
  const [studentSearch, setStudentSearch] = useState("");
  const [showPasswordFor, setShowPasswordFor] = useState<string | null>(null);
  const [editingPasswordFor, setEditingPasswordFor] = useState<string | null>(null);
  const [editPasswordValue, setEditPasswordValue] = useState("");

  const refreshData = async (teacherId?: string) => {
    const [all, teacherList, studentList, ips] = await Promise.all([
      getAttempts(), getTeachers(), getStudentAccounts(), getBlockedIPs(),
    ]);
    setAttempts(all);
    setTeachers(teacherList);
    setStudents(studentList);
    setBlockedIPs(ips);
    if (teacherId) setMyPracticeAttempts(all.filter(a => a.isTeacherAttempt && a.teacherId === teacherId));
  };

  useEffect(() => {
    const s = getSession();
    if (!s || !s.isAdmin) { router.push("/auth/login?admin=true"); return; }
    setIsRootAdmin(s.id === "admin-root");
    setCurrentTeacherId(s.id);
    refreshData(s.id);

    // Refresh when teacher switches back to this tab
    const onVisible = () => { if (document.visibilityState === "visible") refreshData(); };
    document.addEventListener("visibilitychange", onVisible);
    return () => document.removeEventListener("visibilitychange", onVisible);
  }, [router]);

  const handleAddTeacher = async () => {
    setTeacherError(""); setTeacherSuccess("");
    if (!newUsername.trim() || !newPassword.trim()) { setTeacherError("Both fields required."); return; }
    const result = await addTeacher(newUsername.trim(), newPassword.trim());
    if (result.ok) { setTeachers(await getTeachers()); setNewUsername(""); setNewPassword(""); setTeacherSuccess("Teacher account created."); }
    else setTeacherError(result.error ?? "Error");
  };

  const handleDeleteTeacher = async (id: string) => {
    if (!confirm("Delete this teacher account?")) return;
    await deleteTeacher(id); setTeachers(await getTeachers());
  };

  const handleAddStudent = async () => {
    setStudentError(""); setCreatedStudent(null);
    if (!newStudentName.trim() || !newStudentSurname.trim() || !newStudentGroup.trim()) {
      setStudentError("All fields are required."); return;
    }
    const result = await registerStudent(newStudentName.trim(), newStudentSurname.trim(), newStudentGroup.trim());
    setCreatedStudent({ username: result.username, password: result.password, name: newStudentName.trim(), surname: newStudentSurname.trim() });
    setStudents(await getStudentAccounts());
    setNewStudentName(""); setNewStudentSurname(""); setNewStudentGroup("");
  };

  const handleDeleteStudent = async (id: string) => {
    if (!confirm("Delete this student account? Their test history will remain.")) return;
    await deleteStudent(id); setStudents(await getStudentAccounts());
  };

  const handleLogout = () => { clearSession(); router.push("/"); };

  const groups = ["all", ...Array.from(new Set(attempts.map((a) => a.groupName)))];

  const filtered = attempts.filter((a) => {
    if (a.isTeacherAttempt) return false; // hide teacher practice from main view
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
      "Score": `${a.score}/${a.maxScore}`, "IELTS Score": a.bandScore > 0 ? a.bandScore : "–",
      "Status": a.status.charAt(0).toUpperCase() + a.status.slice(1),
      "Duration": a.timeSpentSeconds ? `${Math.floor(a.timeSpentSeconds / 60)}m ${a.timeSpentSeconds % 60}s` : "–",
      "Date": new Date(a.submittedAt).toLocaleString(),
    }));
    const ws = XLSX.utils.json_to_sheet(rows);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Results");
    XLSX.writeFile(wb, `london-lc-results-${new Date().toISOString().slice(0, 10)}.xlsx`);
  };

  const handleChangePassword = async (id: string) => {
    if (!editPasswordValue.trim()) return;
    await updateTeacherPassword(id, editPasswordValue.trim());
    setTeachers(await getTeachers());
    setEditingPasswordFor(null);
    setEditPasswordValue("");
    setTeacherSuccess("Password updated.");
  };

  const handleBlockIP = async (ip: string) => {
    await blockIP(ip); setBlockedIPs(await getBlockedIPs());
  };
  const handleUnblockIP = async (ip: string) => {
    await unblockIP(ip); setBlockedIPs(await getBlockedIPs());
  };

  const tabs = [
    { id: "results" as const, Icon: BarChart3, label: "Results" },
    { id: "students" as const, Icon: Users, label: "Students" },
    { id: "tests" as const, Icon: BookOpen, label: "Tests" },
    { id: "practice" as const, Icon: Monitor, label: "Practice" },
    ...(isRootAdmin ? [{ id: "teachers" as const, Icon: Shield, label: "Manage Teachers" }] : []),
  ];

  return (
    <div style={{ minHeight: "100vh", background: C.bg, fontFamily: "Inter, system-ui, sans-serif", color: C.text }}>

      {/* ── Header ────────────────────────────────── */}
      <header style={{ position: "sticky", top: 0, zIndex: 30, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 24px", height: 56, background: C.card2, borderBottom: `1px solid ${C.border}` }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ fontWeight: 900, fontSize: 19, color: "#fff", letterSpacing: "-0.3px", fontFamily: "Inter, system-ui, sans-serif" }}>London <span style={{ color: "#a78bfa" }}>LC</span></span>
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
              { label: "Avg IELTS Score", value: avgBand, Icon: Award, color: "#f59e0b" },
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
                <option value="band">Sort: IELTS Score</option>
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
                      {["", "Student", "Group", "Test", "Type", "Score", "IELTS", "Status", "Duration", "Date"].map(h => (
                        <th key={h} style={{ padding: "11px 14px", textAlign: "left", fontSize: 11, fontWeight: 700, color: C.muted, textTransform: "uppercase", letterSpacing: "0.06em", borderBottom: `1px solid ${C.border}`, whiteSpace: "nowrap" }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {filtered.map((a, i) => {
                      const isExpanded = expandedDeviceRow === a.id;
                      const testData = a.status === "completed" ? getTestById(a.testId) : null;
                      return (
                        <>
                        <tr key={a.id} style={{ borderBottom: `1px solid ${C.border}`, background: i % 2 === 0 ? C.card : "rgba(6,12,31,0.6)" }}>
                          <td style={{ padding: "12px 10px", textAlign: "center" }}>
                            <button onClick={() => setExpandedDeviceRow(isExpanded ? null : a.id)}
                              style={{ background: "transparent", border: "none", cursor: "pointer", color: C.muted, padding: 2, display: "flex" }}>
                              {isExpanded ? <ChevronUp size={13} /> : <ChevronDown size={13} />}
                            </button>
                          </td>
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
                            {a.status === "cancelled" && a.cancelReason && (
                              <div style={{ fontSize: 11, color: "#fca5a5", marginTop: 3, maxWidth: 160, lineHeight: 1.3 }}>
                                {a.cancelReason}
                              </div>
                            )}
                          </td>
                          <td style={{ padding: "12px 14px", color: C.muted, whiteSpace: "nowrap" }}>
                            {a.timeSpentSeconds ? `${Math.floor(a.timeSpentSeconds / 60)}m ${a.timeSpentSeconds % 60}s` : "–"}
                          </td>
                          <td style={{ padding: "12px 14px", color: C.muted, whiteSpace: "nowrap", fontSize: 12 }}>
                            {new Date(a.submittedAt).toLocaleString()}
                          </td>
                        </tr>
                        {isExpanded && (
                          <tr key={`${a.id}-detail`} style={{ background: "rgba(124,58,237,0.05)" }}>
                            <td colSpan={10} style={{ padding: "16px 20px", borderBottom: `1px solid ${C.border}` }}>
                              {/* Device/IP info */}
                              {a.deviceInfo && (
                                <div style={{ marginBottom: 16, padding: "12px 16px", background: C.card2, borderRadius: 10, border: `1px solid ${C.border}` }}>
                                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 8 }}>
                                    <div style={{ display: "flex", flexWrap: "wrap", gap: 16, fontSize: 12, color: C.sub }}>
                                      <span><Monitor size={11} style={{ display: "inline", marginRight: 4 }} /><strong style={{ color: C.text }}>IP:</strong> {a.deviceInfo.ip}
                                        {isRootAdmin && (
                                          blockedIPs.includes(a.deviceInfo.ip) ? (
                                            <button onClick={() => handleUnblockIP(a.deviceInfo!.ip)}
                                              style={{ marginLeft: 8, fontSize: 10, padding: "1px 7px", background: "rgba(16,185,129,0.15)", border: "1px solid rgba(16,185,129,0.3)", borderRadius: 5, color: "#34d399", cursor: "pointer", fontWeight: 600 }}>
                                              Unblock
                                            </button>
                                          ) : (
                                            <button onClick={() => handleBlockIP(a.deviceInfo!.ip)}
                                              style={{ marginLeft: 8, fontSize: 10, padding: "1px 7px", background: "rgba(239,68,68,0.12)", border: "1px solid rgba(239,68,68,0.3)", borderRadius: 5, color: "#f87171", cursor: "pointer", fontWeight: 600 }}>
                                              <Ban size={9} style={{ display: "inline", marginRight: 2 }} />Block IP
                                            </button>
                                          )
                                        )}
                                      </span>
                                      <span><strong style={{ color: C.text }}>Platform:</strong> {a.deviceInfo.platform}</span>
                                      <span><strong style={{ color: C.text }}>Screen:</strong> {a.deviceInfo.screenWidth}×{a.deviceInfo.screenHeight}</span>
                                      <span><strong style={{ color: C.text }}>Language:</strong> {a.deviceInfo.language}</span>
                                    </div>
                                  </div>
                                  <div style={{ marginTop: 6, fontSize: 11, color: C.muted, wordBreak: "break-all" }}>{a.deviceInfo.userAgent}</div>
                                </div>
                              )}
                              {/* Per-question answer breakdown */}
                              {testData && a.status === "completed" && (
                                <div>
                                  <div style={{ fontSize: 12, fontWeight: 700, color: C.muted, marginBottom: 10, textTransform: "uppercase", letterSpacing: "0.07em" }}>Answer Breakdown</div>
                                  {testData.sections.map(sec => (
                                    <div key={sec.id} style={{ marginBottom: 14 }}>
                                      <div style={{ fontSize: 12, fontWeight: 700, color: C.sub, marginBottom: 6 }}>{sec.title}</div>
                                      <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                                        {sec.questions.map(q => {
                                          const userAns = (a.answers[q.id] || "").trim().toLowerCase();
                                          const correctOptions = q.correctAnswer.toLowerCase().split("/").map(s => s.trim());
                                          const isCorrect = correctOptions.some(c => userAns === c || userAns.includes(c));
                                          return (
                                            <div key={q.id} title={`Q${q.number}: Your: "${a.answers[q.id] || "(blank)"}" · Correct: "${q.correctAnswer}"`}
                                              style={{ padding: "4px 8px", borderRadius: 7, fontSize: 11, fontWeight: 700, cursor: "help",
                                                background: !a.answers[q.id] ? "rgba(255,255,255,0.06)" : isCorrect ? "rgba(16,185,129,0.15)" : "rgba(239,68,68,0.15)",
                                                color: !a.answers[q.id] ? C.muted : isCorrect ? "#34d399" : "#f87171",
                                                border: `1px solid ${!a.answers[q.id] ? C.border : isCorrect ? "rgba(16,185,129,0.3)" : "rgba(239,68,68,0.3)"}` }}>
                                              Q{q.number} {isCorrect ? "✓" : !a.answers[q.id] ? "—" : "✗"}
                                            </div>
                                          );
                                        })}
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              )}
                            </td>
                          </tr>
                        )}
                        </>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              <div style={{ padding: "10px 14px", background: C.card2, borderTop: `1px solid ${C.border}`, fontSize: 12, color: C.muted }}>
                Showing {filtered.length} of {attempts.filter(a => !a.isTeacherAttempt).length} attempts
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
          {/* Blocked IPs (superadmin only) */}
          {isRootAdmin && blockedIPs.length > 0 && (
            <div style={{ marginBottom: 28 }}>
              <h2 style={{ fontSize: 16, fontWeight: 700, color: C.text, marginBottom: 12 }}>
                <Ban size={14} style={{ display: "inline", marginRight: 6, color: C.danger }} />Blocked IPs ({blockedIPs.length})
              </h2>
              <div style={{ background: C.card, border: `1px solid rgba(239,68,68,0.2)`, borderRadius: 12, overflow: "hidden" }}>
                {blockedIPs.map(ip => (
                  <div key={ip} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 16px", borderBottom: `1px solid ${C.border}` }}>
                    <span style={{ fontFamily: "monospace", fontSize: 13, color: C.text }}>{ip}</span>
                    <button onClick={() => handleUnblockIP(ip)}
                      style={{ fontSize: 12, padding: "4px 10px", background: "rgba(16,185,129,0.1)", border: "1px solid rgba(16,185,129,0.3)", borderRadius: 7, color: "#34d399", cursor: "pointer", fontWeight: 600 }}>
                      Unblock
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

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
                      <div style={{ fontSize: 12, color: C.muted }}>Avg score · {ga.length} completed · {isOpen ? "▲ hide" : "▼ show students"}</div>
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
                                    {["Test", "Type", "Score", "Correct", "Wrong", "IELTS", "Duration", "Date"].map(h => (
                                      <th key={h} style={{ padding: "9px 14px", textAlign: "left", fontSize: 11, fontWeight: 700, color: C.muted, textTransform: "uppercase", letterSpacing: "0.06em", borderBottom: `1px solid ${C.border}`, whiteSpace: "nowrap" }}>{h}</th>
                                    ))}
                                  </tr>
                                </thead>
                                <tbody>
                                  {[...studentAttempts].reverse().map((a, i) => {
                                    const correct = a.status === "completed" ? a.score : 0;
                                    const wrong = a.status === "completed" ? (a.maxScore - a.score) : 0;
                                    const pct = a.maxScore > 0 ? Math.round((correct / a.maxScore) * 100) : 0;
                                    const isAExpanded = expandedAttempt === a.id;
                                    const testData = a.status === "completed" ? getTestById(a.testId) : null;
                                    return (
                                      <>
                                      <tr key={a.id} style={{ borderBottom: `1px solid ${C.border}`, background: i % 2 === 0 ? C.card : "rgba(6,12,31,0.5)" }}>
                                        <td style={{ padding: "11px 14px", fontWeight: 600, color: C.text, maxWidth: 180, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                                          <button onClick={() => setExpandedAttempt(isAExpanded ? null : a.id)}
                                            style={{ background: "transparent", border: "none", cursor: "pointer", color: C.muted, marginRight: 6, padding: 0, verticalAlign: "middle" }}>
                                            {isAExpanded ? <ChevronUp size={11} /> : <ChevronDown size={11} />}
                                          </button>
                                          {a.testTitle}
                                        </td>
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
                                        <td style={{ padding: "11px 14px", fontWeight: 800, fontSize: 15, color: C.accent }}>
                                          {a.status === "completed" && a.bandScore > 0 ? a.bandScore : (
                                            a.status === "cancelled" ? (
                                              <span style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                                                <span style={{ fontSize: 11, fontWeight: 600, color: "#ef4444" }}>Cancelled</span>
                                                {a.cancelReason && <span style={{ fontSize: 10, color: "#fca5a5", fontWeight: 400, lineHeight: 1.3, whiteSpace: "normal", maxWidth: 140 }}>{a.cancelReason}</span>}
                                              </span>
                                            ) : "–"
                                          )}
                                        </td>
                                        <td style={{ padding: "11px 14px", color: C.muted, whiteSpace: "nowrap" }}>{a.timeSpentSeconds ? `${Math.floor(a.timeSpentSeconds / 60)}m ${a.timeSpentSeconds % 60}s` : "–"}</td>
                                        <td style={{ padding: "11px 14px", fontSize: 12, color: C.muted, whiteSpace: "nowrap" }}>{new Date(a.submittedAt).toLocaleDateString()}</td>
                                      </tr>
                                      {isAExpanded && testData && a.status === "completed" && (
                                        <tr key={`${a.id}-expand`} style={{ background: "rgba(124,58,237,0.04)" }}>
                                          <td colSpan={8} style={{ padding: "14px 18px", borderBottom: `1px solid ${C.border}` }}>
                                            {testData.sections.map(sec => (
                                              <div key={sec.id} style={{ marginBottom: 12 }}>
                                                <div style={{ fontSize: 11, fontWeight: 700, color: C.muted, marginBottom: 8, textTransform: "uppercase" }}>{sec.title}</div>
                                                <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                                                  {sec.questions.map(q => {
                                                    const userAns = (a.answers[q.id] || "").trim();
                                                    const correctOpts = q.correctAnswer.toLowerCase().split("/").map(s => s.trim());
                                                    const isCorrect = correctOpts.some(c => userAns.toLowerCase() === c || userAns.toLowerCase().includes(c));
                                                    return (
                                                      <div key={q.id} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 12 }}>
                                                        <span style={{ width: 22, height: 22, borderRadius: "50%", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 10, background: !userAns ? "rgba(255,255,255,0.07)" : isCorrect ? "rgba(16,185,129,0.2)" : "rgba(239,68,68,0.2)", color: !userAns ? C.muted : isCorrect ? "#34d399" : "#f87171" }}>
                                                          {q.number}
                                                        </span>
                                                        <div style={{ flex: 1 }}>
                                                          <div style={{ color: C.sub, lineHeight: 1.4, marginBottom: 3 }}>{q.question.split("\n")[0].slice(0, 120)}</div>
                                                          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                                                            <span style={{ fontSize: 11, padding: "2px 8px", borderRadius: 5, background: !userAns ? "rgba(255,255,255,0.05)" : isCorrect ? "rgba(16,185,129,0.12)" : "rgba(239,68,68,0.12)", color: !userAns ? C.muted : isCorrect ? "#34d399" : "#f87171" }}>
                                                              Your: {userAns || "(blank)"}
                                                            </span>
                                                            {!isCorrect && (
                                                              <span style={{ fontSize: 11, padding: "2px 8px", borderRadius: 5, background: "rgba(124,58,237,0.12)", color: "#c4b5fd" }}>
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
                                          </td>
                                        </tr>
                                      )}
                                      </>
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

        {/* ══════════════════ STUDENTS TAB ══════════════════ */}
        {activeTab === "students" && (
          <div style={{ maxWidth: 760 }}>
            <h1 style={{ fontSize: 22, fontWeight: 800, color: C.text, marginBottom: 4 }}>Student Accounts</h1>
            <p style={{ fontSize: 13, color: C.muted, marginBottom: 24 }}>Create and manage student login credentials.</p>

            {/* Add student form */}
            <div style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 14, padding: "22px", marginBottom: 24 }}>
              <p style={{ fontSize: 11, fontWeight: 700, color: C.muted, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 14 }}>Add New Student</p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10, marginBottom: 10 }}>
                <input type="text" placeholder="First Name" value={newStudentName} onChange={e => setNewStudentName(e.target.value)}
                  style={{ ...sel, padding: "11px 14px" }} />
                <input type="text" placeholder="Surname" value={newStudentSurname} onChange={e => setNewStudentSurname(e.target.value)}
                  style={{ ...sel, padding: "11px 14px" }} />
                <input type="text" placeholder="Group (e.g. IELTS-A)" value={newStudentGroup} onChange={e => setNewStudentGroup(e.target.value)}
                  style={{ ...sel, padding: "11px 14px" }} />
              </div>
              {studentError && <p style={{ fontSize: 13, color: C.danger, marginBottom: 8 }}>{studentError}</p>}
              <button onClick={handleAddStudent}
                style={{ display: "flex", alignItems: "center", gap: 6, padding: "10px 18px", background: "linear-gradient(135deg,#6d28d9,#7c3aed)", border: "none", borderRadius: 10, color: "#fff", fontSize: 13, fontWeight: 600, cursor: "pointer" }}>
                <Plus size={14} /> Create Student Account
              </button>

              {/* Created credentials display */}
              {createdStudent && (
                <div style={{ marginTop: 16, padding: "16px", background: "rgba(16,185,129,0.08)", border: "1px solid rgba(16,185,129,0.25)", borderRadius: 12 }}>
                  <p style={{ fontSize: 12, fontWeight: 700, color: "#34d399", marginBottom: 10 }}>✓ Account created for {createdStudent.name} {createdStudent.surname}</p>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
                    {[{ label: "Username", val: createdStudent.username }, { label: "Password", val: createdStudent.password }].map(item => (
                      <div key={item.label} style={{ padding: "10px 14px", background: "rgba(255,255,255,0.04)", borderRadius: 9, border: `1px solid ${C.border}` }}>
                        <div style={{ fontSize: 10, color: C.muted, marginBottom: 4, textTransform: "uppercase", fontWeight: 700 }}>{item.label}</div>
                        <div style={{ fontFamily: "monospace", fontSize: 15, fontWeight: 700, color: C.text }}>{item.val}</div>
                      </div>
                    ))}
                  </div>
                  <p style={{ fontSize: 11, color: "#fcd34d", marginTop: 10 }}>⚠ Share these credentials with the student. They cannot be recovered later.</p>
                </div>
              )}
            </div>

            {/* Search */}
            <div style={{ position: "relative", marginBottom: 16 }}>
              <Search size={14} color={C.muted} style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)" }} />
              <input type="text" placeholder="Search students..." value={studentSearch} onChange={e => setStudentSearch(e.target.value)}
                style={{ ...sel, padding: "10px 14px 10px 34px", width: "100%", boxSizing: "border-box" as const }} />
            </div>

            {/* Students list */}
            <div style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 14, overflow: "hidden" }}>
              <div style={{ padding: "10px 16px", background: C.card2, borderBottom: `1px solid ${C.border}`, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: 11, fontWeight: 700, color: C.muted, textTransform: "uppercase", letterSpacing: "0.08em" }}>
                  Accounts ({students.filter(s => !studentSearch || `${s.name} ${s.surname} ${s.username} ${s.group_name}`.toLowerCase().includes(studentSearch.toLowerCase())).length})
                </span>
              </div>
              {students.filter(s => !studentSearch || `${s.name} ${s.surname} ${s.username} ${s.group_name}`.toLowerCase().includes(studentSearch.toLowerCase())).length === 0 ? (
                <div style={{ padding: "32px", textAlign: "center", color: C.muted, fontSize: 14 }}>No students yet. Use the form above to add students.</div>
              ) : (
                <div style={{ overflowX: "auto" }}>
                  <table style={{ width: "100%", borderCollapse: "collapse" }}>
                    <thead>
                      <tr style={{ background: C.card2 }}>
                        {["Name", "Username", "Group", "Created", ""].map(h => (
                          <th key={h} style={{ padding: "10px 14px", textAlign: "left", fontSize: 11, fontWeight: 700, color: C.muted, textTransform: "uppercase", letterSpacing: "0.05em", borderBottom: `1px solid ${C.border}` }}>{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {students.filter(s => !studentSearch || `${s.name} ${s.surname} ${s.username} ${s.group_name}`.toLowerCase().includes(studentSearch.toLowerCase())).map((s, i) => (
                        <tr key={s.id} style={{ background: i % 2 === 0 ? "transparent" : "rgba(255,255,255,0.02)", borderBottom: `1px solid ${C.border}` }}>
                          <td style={{ padding: "12px 14px" }}>
                            <div style={{ fontWeight: 600, fontSize: 14, color: C.text }}>{s.name} {s.surname}</div>
                          </td>
                          <td style={{ padding: "12px 14px", fontFamily: "monospace", fontSize: 13, color: C.sub }}>{s.username}</td>
                          <td style={{ padding: "12px 14px", fontSize: 13, color: C.muted }}>{s.group_name}</td>
                          <td style={{ padding: "12px 14px", fontSize: 12, color: C.muted }}>{new Date(s.createdAt).toLocaleDateString()}</td>
                          <td style={{ padding: "12px 14px" }}>
                            <button onClick={() => handleDeleteStudent(s.id)}
                              style={{ display: "flex", alignItems: "center", gap: 4, padding: "5px 10px", background: "transparent", border: `1px solid ${C.border}`, borderRadius: 7, color: C.danger, fontSize: 12, fontWeight: 600, cursor: "pointer" }}>
                              <Trash2 size={11} /> Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        )}

        {/* ══════════════════ TESTS TAB ══════════════════ */}
        {activeTab === "tests" && (() => {
          const AVAILABLE_BOOKS = [10, 11];
          const answerKeyTest = testsAnswerKeyId ? allTests.find(t => t.id === testsAnswerKeyId) : null;
          if (answerKeyTest) {
            return (
              <div>
                <button onClick={() => setTestsAnswerKeyId(null)}
                  style={{ display: "flex", alignItems: "center", gap: 6, padding: "7px 14px", background: "rgba(255,255,255,0.06)", border: `1px solid ${C.border}`, borderRadius: 9, color: C.muted, fontSize: 13, cursor: "pointer", fontWeight: 600, marginBottom: 22 }}>
                  ← Back to Tests
                </button>
                <div style={{ marginBottom: 20 }}>
                  <h1 style={{ fontSize: 20, fontWeight: 800, color: C.text, marginBottom: 4 }}>{answerKeyTest.title} — Answer Key</h1>
                  <div style={{ display: "flex", gap: 10 }}>
                    <button onClick={() => router.push(`/student/test/${answerKeyTest.id}?practice=1`)}
                      style={{ padding: "8px 18px", background: "linear-gradient(135deg,#7c3aed,#6d28d9)", color: "#fff", fontWeight: 700, fontSize: 13, border: "none", borderRadius: 9, cursor: "pointer" }}>
                      Take in Practice Mode
                    </button>
                  </div>
                </div>
                {answerKeyTest.sections.map((sec, si) => (
                  <div key={sec.id} style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 14, padding: "22px 24px", marginBottom: 20 }}>
                    <div style={{ fontSize: 11, fontWeight: 700, color: C.accent, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 4 }}>Section {si + 1}</div>
                    <div style={{ fontSize: 16, fontWeight: 800, color: C.text, marginBottom: 16 }}>{sec.passageTitle || sec.title}</div>
                    {sec.passageText && (
                      <details style={{ marginBottom: 16 }}>
                        <summary style={{ fontSize: 13, fontWeight: 600, color: C.muted, cursor: "pointer", marginBottom: 8 }}>View Passage Text</summary>
                        <div style={{ marginTop: 10, padding: "14px 16px", background: C.card2, borderRadius: 10, fontSize: 13, color: C.sub, lineHeight: 1.8, whiteSpace: "pre-wrap", maxHeight: 360, overflowY: "auto" }}>
                          {sec.passageText}
                        </div>
                      </details>
                    )}
                    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                      {sec.questions.map(q => (
                        <div key={q.id} style={{ display: "flex", alignItems: "flex-start", gap: 12, padding: "10px 14px", background: C.card2, borderRadius: 10, border: `1px solid ${C.border}` }}>
                          <span style={{ width: 26, height: 26, borderRadius: "50%", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: 11, background: C.accentLight, color: C.accent }}>{q.number}</span>
                          <div style={{ flex: 1, minWidth: 0 }}>
                            <div style={{ fontSize: 13, color: C.sub, marginBottom: 6, lineHeight: 1.5 }}>{q.question.split("\n")[0].slice(0, 200)}</div>
                            <span style={{ fontSize: 12, padding: "3px 10px", borderRadius: 6, background: "rgba(16,185,129,0.15)", color: "#34d399", fontWeight: 700 }}>
                              ✓ {q.correctAnswer}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            );
          }
          return (
            <div>
              <div style={{ marginBottom: 24 }}>
                <h1 style={{ fontSize: 22, fontWeight: 800, color: C.text, marginBottom: 2 }}>Tests</h1>
                <p style={{ fontSize: 13, color: C.muted }}>Browse available tests, view answer keys, or take them in practice mode.</p>
              </div>
              <div style={{ display: "flex", gap: 8, marginBottom: 24 }}>
                {[{ t: "reading" as const, Icon: BookOpen, label: "Reading" }, { t: "listening" as const, Icon: Headphones, label: "Listening" }].map(({ t, Icon, label }) => (
                  <button key={t} onClick={() => { setTestsTypeFilter(t); setTestsSelectedBook(null); }}
                    style={{ display: "flex", alignItems: "center", gap: 7, padding: "9px 18px", borderRadius: 10, border: "none", cursor: "pointer", fontWeight: 600, fontSize: 13,
                      background: testsTypeFilter === t ? C.accent : C.card, color: testsTypeFilter === t ? "#fff" : C.muted }}>
                    <Icon size={14} /> {label}
                  </button>
                ))}
              </div>
              {testsSelectedBook === null ? (
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 10, marginBottom: 32 }}>
                  {Array.from({ length: 19 }, (_, i) => i + 1).map(n => {
                    const available = AVAILABLE_BOOKS.includes(n);
                    const bookTests = allTests.filter(t => t.bookNumber === n && t.type === testsTypeFilter);
                    return (
                      <div key={n} onClick={() => available && setTestsSelectedBook(n)}
                        style={{ display: "flex", alignItems: "center", gap: 14, padding: "14px 16px", background: available ? C.accentLight : "rgba(255,255,255,0.02)", border: `1px solid ${available ? "rgba(124,58,237,0.25)" : C.border}`, borderRadius: 12, cursor: available ? "pointer" : "default" }}>
                        <div style={{ width: 38, height: 38, borderRadius: 10, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: 15, background: available ? "linear-gradient(135deg,#7c3aed,#6d28d9)" : "rgba(255,255,255,0.05)", color: available ? "#fff" : "rgba(255,255,255,0.2)" }}>{n}</div>
                        <div style={{ flex: 1 }}>
                          <div style={{ fontSize: 13, fontWeight: 700, color: available ? C.text : "rgba(255,255,255,0.25)", marginBottom: 2 }}>Cambridge IELTS {n}</div>
                          <div style={{ fontSize: 11, color: available ? C.muted : "rgba(255,255,255,0.15)" }}>{available ? `${bookTests.length} test${bookTests.length !== 1 ? "s" : ""}` : "Coming soon"}</div>
                        </div>
                        {available && <ChevronRight size={14} color={C.muted} />}
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div>
                  <button onClick={() => setTestsSelectedBook(null)}
                    style={{ display: "flex", alignItems: "center", gap: 6, padding: "7px 14px", background: "rgba(255,255,255,0.06)", border: `1px solid ${C.border}`, borderRadius: 9, color: C.muted, fontSize: 13, cursor: "pointer", fontWeight: 600, marginBottom: 20 }}>
                    ← All Books
                  </button>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 14 }}>
                    {allTests.filter(t => t.bookNumber === testsSelectedBook && t.type === testsTypeFilter).sort((a, b) => a.testNumber - b.testNumber).map(test => (
                      <div key={test.id} style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 14, padding: 18 }}>
                        <div style={{ fontSize: 11, fontWeight: 600, color: C.accent, marginBottom: 3, textTransform: "uppercase" }}>Test {test.testNumber}</div>
                        <div style={{ fontSize: 14, fontWeight: 700, color: C.text, marginBottom: 14 }}>{test.title}</div>
                        <div style={{ display: "flex", gap: 8 }}>
                          <button onClick={() => setTestsAnswerKeyId(test.id)}
                            style={{ flex: 1, padding: "8px", background: C.accentLight, color: C.accent, fontWeight: 700, fontSize: 12, border: `1px solid rgba(124,58,237,0.3)`, borderRadius: 9, cursor: "pointer" }}>
                            Answer Key
                          </button>
                          <button onClick={() => router.push(`/student/test/${test.id}?practice=1`)}
                            style={{ flex: 1, padding: "8px", background: "linear-gradient(135deg,#7c3aed,#6d28d9)", color: "#fff", fontWeight: 700, fontSize: 12, border: "none", borderRadius: 9, cursor: "pointer" }}>
                            Take Test
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })()}

        {/* ══════════════════ PRACTICE TESTS TAB ══════════════════ */}
        {activeTab === "practice" && (() => {
          const AVAILABLE_BOOKS = [10, 11];
          return (
            <div>
              <div style={{ marginBottom: 24 }}>
                <h1 style={{ fontSize: 22, fontWeight: 800, color: C.text, marginBottom: 2 }}>Practice Tests</h1>
                <p style={{ fontSize: 13, color: C.muted }}>Take IELTS tests yourself. Your results are private and only visible to you and the super admin.</p>
              </div>

              {/* Type tabs */}
              <div style={{ display: "flex", gap: 8, marginBottom: 24 }}>
                {[{ t: "reading" as const, Icon: BookOpen, label: "Reading" }, { t: "listening" as const, Icon: Headphones, label: "Listening" }].map(({ t, Icon, label }) => (
                  <button key={t} onClick={() => { setPracticeTypeFilter(t); setPracticeSelectedBook(null); }}
                    style={{ display: "flex", alignItems: "center", gap: 7, padding: "9px 18px", borderRadius: 10, border: "none", cursor: "pointer", fontWeight: 600, fontSize: 13, transition: "all 0.15s",
                      background: practiceTypeFilter === t ? C.accent : C.card, color: practiceTypeFilter === t ? "#fff" : C.muted }}>
                    <Icon size={14} /> {label}
                  </button>
                ))}
              </div>

              {practiceSelectedBook === null ? (
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 10, marginBottom: 32 }}>
                  {Array.from({ length: 19 }, (_, i) => i + 1).map(n => {
                    const available = AVAILABLE_BOOKS.includes(n);
                    const bookTests = allTests.filter(t => t.bookNumber === n && t.type === practiceTypeFilter);
                    return (
                      <div key={n} onClick={() => available && setPracticeSelectedBook(n)}
                        style={{ display: "flex", alignItems: "center", gap: 14, padding: "14px 16px", background: available ? C.accentLight : "rgba(255,255,255,0.02)", border: `1px solid ${available ? "rgba(124,58,237,0.25)" : C.border}`, borderRadius: 12, cursor: available ? "pointer" : "default", transition: "all 0.15s" }}>
                        <div style={{ width: 38, height: 38, borderRadius: 10, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: 15, background: available ? "linear-gradient(135deg,#7c3aed,#6d28d9)" : "rgba(255,255,255,0.05)", color: available ? "#fff" : "rgba(255,255,255,0.2)" }}>{n}</div>
                        <div style={{ flex: 1 }}>
                          <div style={{ fontSize: 13, fontWeight: 700, color: available ? C.text : "rgba(255,255,255,0.25)", marginBottom: 2 }}>Cambridge IELTS {n}</div>
                          <div style={{ fontSize: 11, color: available ? C.muted : "rgba(255,255,255,0.15)" }}>{available ? `${bookTests.length} test${bookTests.length !== 1 ? "s" : ""}` : "Coming soon"}</div>
                        </div>
                        {available && <ChevronRight size={14} color={C.muted} />}
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div>
                  <button onClick={() => setPracticeSelectedBook(null)} style={{ display: "flex", alignItems: "center", gap: 6, padding: "7px 14px", background: "rgba(255,255,255,0.06)", border: `1px solid ${C.border}`, borderRadius: 9, color: C.muted, fontSize: 13, cursor: "pointer", fontWeight: 600, marginBottom: 20 }}>
                    ← All Books
                  </button>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 14, marginBottom: 32 }}>
                    {allTests.filter(t => t.bookNumber === practiceSelectedBook && t.type === practiceTypeFilter).sort((a, b) => a.testNumber - b.testNumber).map(test => {
                      const myBest = myPracticeAttempts.filter(a => a.testId === test.id && a.status === "completed");
                      const best = myBest.length ? Math.max(...myBest.map(a => a.bandScore)) : null;
                      return (
                        <div key={test.id} onClick={() => router.push(`/student/test/${test.id}?practice=1`)}
                          style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 14, padding: 18, cursor: "pointer", transition: "all 0.2s" }}
                          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(124,58,237,0.5)"; }}
                          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = C.border; }}>
                          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
                            <div>
                              <div style={{ fontSize: 11, fontWeight: 600, color: C.accent, marginBottom: 3, textTransform: "uppercase" }}>Test {test.testNumber}</div>
                              <div style={{ fontSize: 14, fontWeight: 700, color: C.text }}>{test.title}</div>
                            </div>
                            {best !== null && <span style={{ fontSize: 12, fontWeight: 700, padding: "3px 9px", background: "rgba(16,185,129,0.15)", color: "#34d399", borderRadius: 20, flexShrink: 0 }}>Score {best}</span>}
                          </div>
                          <button style={{ width: "100%", padding: "9px", background: "linear-gradient(135deg,#7c3aed,#6d28d9)", color: "#fff", fontWeight: 700, fontSize: 13, border: "none", borderRadius: 9, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }}>
                            Start Practice <ChevronRight size={13} />
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* My practice attempts */}
              {myPracticeAttempts.length > 0 && (
                <div>
                  <h2 style={{ fontSize: 16, fontWeight: 700, color: C.text, marginBottom: 14 }}>My Practice History</h2>
                  <div style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 12, overflow: "hidden" }}>
                    <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
                      <thead>
                        <tr style={{ background: C.card2 }}>
                          {["Test", "Type", "Score", "IELTS", "Date"].map(h => (
                            <th key={h} style={{ padding: "10px 14px", textAlign: "left", fontSize: 11, fontWeight: 700, color: C.muted, textTransform: "uppercase", borderBottom: `1px solid ${C.border}` }}>{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {[...myPracticeAttempts].reverse().map((a, i) => (
                          <tr key={a.id} style={{ borderBottom: `1px solid ${C.border}`, background: i % 2 === 0 ? C.card : "rgba(6,12,31,0.5)" }}>
                            <td style={{ padding: "11px 14px", fontWeight: 600, color: C.text }}>{a.testTitle}</td>
                            <td style={{ padding: "11px 14px" }}><span style={{ fontSize: 11, padding: "2px 8px", borderRadius: 20, fontWeight: 600, background: a.testType === "listening" ? "rgba(139,92,246,0.2)" : "rgba(245,158,11,0.15)", color: a.testType === "listening" ? "#c4b5fd" : "#fcd34d" }}>{a.testType}</span></td>
                            <td style={{ padding: "11px 14px", color: C.sub }}>{a.score}/{a.maxScore}</td>
                            <td style={{ padding: "11px 14px", fontWeight: 700, color: C.accent }}>{a.bandScore}</td>
                            <td style={{ padding: "11px 14px", fontSize: 12, color: C.muted }}>{new Date(a.submittedAt).toLocaleDateString()}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          );
        })()}

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
                  autoComplete="off" style={{ ...sel, padding: "11px 14px" }} />
                <div style={{ position: "relative" }}>
                  <input type={showNewPw ? "text" : "password"} placeholder="Password" value={newPassword} onChange={e => setNewPassword(e.target.value)}
                    autoComplete="new-password" style={{ ...sel, padding: "11px 40px 11px 14px" }} />
                  <button type="button" onClick={() => setShowNewPw(!showNewPw)}
                    style={{ position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)", background: "none", border: "none", cursor: "pointer", color: C.muted, padding: 0 }}>
                    {showNewPw ? <EyeOff size={14} /> : <Eye size={14} />}
                  </button>
                </div>
                {teacherError && <p style={{ fontSize: 13, color: C.danger }}>{teacherError}</p>}
                {teacherSuccess && <p style={{ fontSize: 13, color: C.success }}>{teacherSuccess}</p>}
                <button onClick={handleAddTeacher}
                  style={{ alignSelf: "flex-start", display: "flex", alignItems: "center", gap: 6, padding: "10px 18px", background: "linear-gradient(135deg,#6d28d9,#7c3aed)", border: "none", borderRadius: 10, color: "#fff", fontSize: 13, fontWeight: 600, cursor: "pointer" }}>
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
                <div key={t.id} style={{ borderBottom: `1px solid ${C.border}` }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 16px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <div style={{ width: 34, height: 34, borderRadius: "50%", background: C.accentLight, display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <Shield size={14} color={C.accent} />
                      </div>
                      <div>
                        <div style={{ fontWeight: 600, fontSize: 14, color: C.text }}>{t.username}</div>
                        {t.id === "admin-root" && <div style={{ fontSize: 11, color: C.accent }}>Super Admin</div>}
                        {showPasswordFor === t.id && (
                          <div style={{ fontSize: 12, color: C.sub, marginTop: 2, fontFamily: "monospace" }}>{t.password}</div>
                        )}
                      </div>
                    </div>
                    <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
                      <button onClick={() => setShowPasswordFor(showPasswordFor === t.id ? null : t.id)}
                        style={{ display: "flex", alignItems: "center", gap: 5, padding: "6px 10px", background: "transparent", border: `1px solid ${C.border}`, borderRadius: 8, color: C.muted, fontSize: 12, fontWeight: 600, cursor: "pointer" }}>
                        {showPasswordFor === t.id ? <EyeOff size={12} /> : <Eye size={12} />}
                        {showPasswordFor === t.id ? "Hide" : "Show"}
                      </button>
                      <button onClick={() => { setEditingPasswordFor(editingPasswordFor === t.id ? null : t.id); setEditPasswordValue(""); }}
                        style={{ display: "flex", alignItems: "center", gap: 5, padding: "6px 10px", background: "transparent", border: `1px solid ${C.border}`, borderRadius: 8, color: C.sub, fontSize: 12, fontWeight: 600, cursor: "pointer" }}>
                        Change PW
                      </button>
                      <button onClick={() => handleDeleteTeacher(t.id)} disabled={t.id === "admin-root"}
                        style={{ display: "flex", alignItems: "center", gap: 5, padding: "6px 12px", background: "transparent", border: `1px solid ${C.border}`, borderRadius: 8, color: t.id === "admin-root" ? C.muted : C.danger, fontSize: 12, fontWeight: 600, cursor: t.id === "admin-root" ? "not-allowed" : "pointer", opacity: t.id === "admin-root" ? 0.35 : 1 }}>
                        <Trash2 size={12} /> Delete
                      </button>
                    </div>
                  </div>
                  {editingPasswordFor === t.id && (
                    <div style={{ display: "flex", gap: 8, padding: "0 16px 14px", alignItems: "center" }}>
                      <input type="text" placeholder="New password" value={editPasswordValue}
                        onChange={e => setEditPasswordValue(e.target.value)}
                        style={{ flex: 1, padding: "7px 12px", background: C.card2, border: `1px solid ${C.border}`, borderRadius: 8, color: C.text, fontSize: 13, outline: "none", fontFamily: "inherit" }} />
                      <button onClick={() => handleChangePassword(t.id)}
                        style={{ padding: "7px 14px", background: "linear-gradient(135deg,#6d28d9,#7c3aed)", border: "none", borderRadius: 8, color: "#fff", fontSize: 13, fontWeight: 600, cursor: "pointer" }}>
                        Save
                      </button>
                      <button onClick={() => setEditingPasswordFor(null)}
                        style={{ padding: "7px 12px", background: "transparent", border: `1px solid ${C.border}`, borderRadius: 8, color: C.muted, fontSize: 13, cursor: "pointer" }}>
                        Cancel
                      </button>
                    </div>
                  )}
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
