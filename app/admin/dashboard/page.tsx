"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  BookOpen, LogOut, Users, Award, BarChart3, Search,
  Download, CheckCircle, X, Shield, Plus, Trash2, Eye, EyeOff,
  Monitor, Ban, Headphones, ChevronRight, ChevronDown, ChevronUp, Pencil, Save,
  PenLine, FileText, Mic, Music, UserCircle2, Lock,
} from "lucide-react";

const ROOT_ADMIN_ID = "admin-root";
const ADMIN_USERNAME = "SarvarxonP";
import { getSession, clearSession, getAttempts, getTeachers, addTeacher, deleteTeacher, updateTeacherPassword, setTeacherPlainPassword, setStudentPlainPassword, changeTeacherOwnPassword, registerStudent, getStudentAccounts, deleteStudent, updateStudent, getBlockedIPs, blockIP, unblockIP, type AttemptData, type TeacherAccount, type StudentAccount } from "@/lib/store";
import { getTestById } from "@/data/ielts-tests";
import { allTests } from "@/data/ielts-tests";
import { quotes, type Quote } from "@/lib/quotes";
import Brand from "@/components/Brand";

// ── Hardcoded dark theme colours ─────────────────────────────
const C = {
  bg: "#0a0a0a",
  card: "#151515",
  card2: "#0d0d0d",
  border: "rgba(255,255,255,0.08)",
  text: "#f0f0f0",
  muted: "#8a8a8a",
  sub: "#c0c0c0",
  accent: "#ffffff",
  accentLight: "rgba(255,255,255,0.08)",
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
  const [activeTab, setActiveTab] = useState<"results" | "students" | "teachers" | "practice" | "tests" | "writing" | "articles" | "podcasts" | "music" | "profile">("results");
  // Rotating quote shown on every admin tab except Results (where space is
  // already dense with stats + tables). Picked once on mount.
  const [quote, setQuote] = useState<Quote | null>(null);
  useEffect(() => {
    if (quotes.length > 0) setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
  }, []);
  // Teacher self-service password change state (rendered in the Profile tab).
  const [ownCurrPw, setOwnCurrPw] = useState("");
  const [ownNewPw, setOwnNewPw] = useState("");
  const [ownPwMsg, setOwnPwMsg] = useState<{ kind: "ok" | "err"; text: string } | null>(null);
  const [ownPwSaving, setOwnPwSaving] = useState(false);
  const [ownShowCurr, setOwnShowCurr] = useState(false);
  const [ownShowNew, setOwnShowNew] = useState(false);
  const [expandedGroup, setExpandedGroup] = useState<string | null>(null);
  const [expandedStudent, setExpandedStudent] = useState<string | null>(null);
  const [expandedAttempt, setExpandedAttempt] = useState<string | null>(null);
  const [expandedDeviceRow, setExpandedDeviceRow] = useState<string | null>(null);
  const [isRootAdmin, setIsRootAdmin] = useState(false);
  const [isAdminUser, setIsAdminUser] = useState(false);
  const [currentTeacherId, setCurrentTeacherId] = useState<string>("");
  const [currentUsername, setCurrentUsername] = useState<string>("");
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
  const [editingStudentId, setEditingStudentId] = useState<string | null>(null);
  const [editStudentForm, setEditStudentForm] = useState({ name: "", surname: "", group_name: "", username: "", password: "", passwordIsExisting: false });
  const [showStudentPasswordFor, setShowStudentPasswordFor] = useState<string | null>(null);
  const [studentEditError, setStudentEditError] = useState("");
  const [expandedAccessInfoFor, setExpandedAccessInfoFor] = useState<string | null>(null);

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
    setIsRootAdmin(s.id === ROOT_ADMIN_ID);
    setIsAdminUser(s.username === ADMIN_USERNAME || s.name === ADMIN_USERNAME);
    setCurrentTeacherId(s.id);
    setCurrentUsername(s.username || s.name || "");
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

  const startEditStudent = (s: StudentAccount) => {
    setEditingStudentId(s.id);
    setEditStudentForm({ name: s.name, surname: s.surname, group_name: s.group_name, username: s.username, password: "", passwordIsExisting: false });
    setStudentEditError("");
  };

  const handleSaveStudent = async () => {
    if (!editingStudentId) return;
    if (!editStudentForm.name.trim() || !editStudentForm.surname.trim() || !editStudentForm.group_name.trim() || !editStudentForm.username.trim()) {
      setStudentEditError("Name, surname, group and username are required."); return;
    }
    const fields: Parameters<typeof updateStudent>[1] = {
      name: editStudentForm.name,
      surname: editStudentForm.surname,
      group_name: editStudentForm.group_name,
      username: editStudentForm.username,
    };
    // If "existing password" toggle is on, only update the plaintext column
    // (for Show) — leave the bcrypt hash alone so login is unchanged.
    if (editStudentForm.password.trim() && editStudentForm.passwordIsExisting) {
      await setStudentPlainPassword(editingStudentId, editStudentForm.password.trim());
    } else if (editStudentForm.password.trim()) {
      fields.password = editStudentForm.password;
    }
    const result = await updateStudent(editingStudentId, fields);
    if (result.ok) {
      setStudents(await getStudentAccounts());
      setEditingStudentId(null);
      setStudentEditError("");
    } else {
      setStudentEditError(result.error ?? "Error saving.");
    }
  };

  const handleLogout = () => { clearSession(); router.push("/"); };

  const fmtLastSeen = (iso?: string) => {
    if (!iso) return "Never";
    const d = new Date(iso);
    const now = new Date();
    const diff = Math.floor((now.getTime() - d.getTime()) / 1000);
    if (diff < 60) return "Just now";
    if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
    if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
    if (diff < 604800) return `${Math.floor(diff / 86400)}d ago`;
    return d.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
  };

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

  // Save only the plaintext for Show/recovery — leaves the login hash alone.
  // Used when the admin already knows the user's existing password and just
  // wants it to become visible via the Show button going forward.
  const handleSaveExistingPassword = async (id: string) => {
    if (!editPasswordValue.trim()) return;
    await setTeacherPlainPassword(id, editPasswordValue.trim());
    setTeachers(await getTeachers());
    setEditingPasswordFor(null);
    setEditPasswordValue("");
    setTeacherSuccess("Existing password saved (login unchanged).");
  };

  const handleBlockIP = async (ip: string) => {
    await blockIP(ip); setBlockedIPs(await getBlockedIPs());
  };
  const handleUnblockIP = async (ip: string) => {
    await unblockIP(ip); setBlockedIPs(await getBlockedIPs());
  };

  const canManageTeachers = isRootAdmin || isAdminUser;

  const tabs = [
    { id: "results" as const, Icon: BarChart3, label: "Results" },
    { id: "students" as const, Icon: Users, label: "Students" },
    { id: "tests" as const, Icon: BookOpen, label: "Tests" },
    ...(canManageTeachers ? [{ id: "teachers" as const, Icon: Shield, label: "Manage Teachers" }] : []),
  ];

  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "row", overflow: "hidden", background: C.bg, fontFamily: "Inter, system-ui, sans-serif", color: C.text }}>

      {/* ── Sidebar ──────────────────────────────── */}
      <aside style={{ width: 220, flexShrink: 0, background: C.card2, borderRight: `1px solid ${C.border}`, display: "flex", flexDirection: "column", overflow: "hidden" }}>
        {/* Role colour strip at top of sidebar */}
        <div style={{ height: 4, background: isRootAdmin ? "linear-gradient(90deg,#d97706,#fbbf24)" : isAdminUser ? "linear-gradient(90deg,#2563eb,#60a5fa)" : "#ffffff" }} />
        {/* Logo */}
        <div style={{ padding: "22px 20px 18px" }}>
          <Brand size={20} />
          {/* Role badge — colour-coded by role */}
          {/* Role badge — shown for Admin/Teacher only. Super admins
              asked not to display a label. */}
          {!isRootAdmin && (
            <span style={{
              display: "inline-flex", alignItems: "center", gap: 5, marginTop: 8,
              padding: "4px 12px", borderRadius: 20, fontSize: 11, fontWeight: 800,
              background: isAdminUser
                ? "linear-gradient(135deg,#2563eb,#1d4ed8)"
                : "#2a2a2a",
              color: "#fff",
              boxShadow: isAdminUser ? "0 2px 8px rgba(37,99,235,0.4)" : "0 2px 8px rgba(255,255,255,0.2)",
            }}>
              {isAdminUser ? "Admin" : "Teacher"}
            </span>
          )}
          {/* Logged-in username */}
          <div style={{ marginTop: 8, display: "flex", alignItems: "center", gap: 6 }}>
            <div style={{ width: 28, height: 28, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: 12, color: "#fff",
              background: isRootAdmin ? "rgba(217,119,6,0.3)" : isAdminUser ? "rgba(37,99,235,0.3)" : C.accentLight,
              border: `1.5px solid ${isRootAdmin ? "rgba(217,119,6,0.5)" : isAdminUser ? "rgba(37,99,235,0.5)" : C.accent}` }}>
              {currentUsername.charAt(0).toUpperCase()}
            </div>
            <span style={{ fontSize: 13, fontWeight: 700, color: C.text, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", maxWidth: 140 }}>
              {currentUsername}
            </span>
          </div>
        </div>

        <div style={{ width: "calc(100% - 32px)", height: 1, background: C.border, margin: "0 16px 12px" }} />

        {/* Nav items */}
        <nav style={{ flex: 1, overflowY: "auto", padding: "4px 10px" }}>
          <p style={{ fontSize: 10, fontWeight: 700, color: C.muted, letterSpacing: "0.2em", textTransform: "uppercase", margin: "6px 10px 8px", opacity: 0.6 }}>Admin</p>
          {tabs.map(({ id, Icon, label }) => (
            <button key={id} onClick={() => setActiveTab(id)}
              style={{ display: "flex", alignItems: "center", gap: 10, width: "100%", padding: "10px 12px", borderRadius: 10, border: "none", cursor: "pointer", fontWeight: 600, fontSize: 13, textAlign: "left", marginBottom: 2, transition: "all 0.15s",
                background: activeTab === id ? C.accentLight : "transparent",
                color: activeTab === id ? C.accent : C.muted }}>
              <Icon size={15} />
              {label}
            </button>
          ))}

          {/* Same sections as the student dashboard. Rendered as in-page
              tabs (not external routes) so the sidebar stays visible. */}
          <p style={{ fontSize: 10, fontWeight: 700, color: C.muted, letterSpacing: "0.2em", textTransform: "uppercase", margin: "18px 10px 8px", opacity: 0.6 }}>Sections</p>
          {([
            { id: "writing"  as const, Icon: PenLine,  label: "Writing",  soon: true },
            { id: "articles" as const, Icon: FileText, label: "Articles", soon: true },
            { id: "podcasts" as const, Icon: Mic,      label: "Podcasts", soon: true },
            { id: "music"    as const, Icon: Music,    label: "Music",    soon: true },
          ]).map(({ id, Icon, label, soon }) => (
            <button key={id} onClick={() => setActiveTab(id)}
              style={{ display: "flex", alignItems: "center", gap: 10, width: "100%", padding: "10px 12px", borderRadius: 10, background: activeTab === id ? C.accentLight : "transparent", border: "none", cursor: "pointer", fontWeight: 600, fontSize: 13, textAlign: "left", marginBottom: 2, color: activeTab === id ? C.accent : C.muted }}>
              <Icon size={15} />
              <span style={{ flex: 1 }}>{label}</span>
              {soon && (
                <span style={{ fontSize: 9, padding: "2px 6px", borderRadius: 999, border: `1px solid ${C.border}`, color: C.muted, letterSpacing: "0.08em" }}>SOON</span>
              )}
              <ChevronRight size={13} />
            </button>
          ))}

          {/* My Profile — self-service account management for teachers */}
          <div style={{ height: 1, background: C.border, margin: "14px 0" }} />
          <button onClick={() => setActiveTab("profile")}
            style={{ display: "flex", alignItems: "center", gap: 10, width: "100%", padding: "10px 12px", borderRadius: 10, border: "none", cursor: "pointer", fontWeight: 600, fontSize: 13, textAlign: "left", marginBottom: 2, transition: "all 0.15s",
              background: activeTab === "profile" ? C.accentLight : "transparent",
              color: activeTab === "profile" ? C.accent : C.muted }}>
            <UserCircle2 size={15} />
            My Profile
          </button>
        </nav>

        {/* Sign out */}
        <div style={{ padding: "12px 10px 20px" }}>
          <button onClick={handleLogout}
            style={{ display: "flex", alignItems: "center", gap: 8, width: "100%", padding: "10px 12px", borderRadius: 10, background: "transparent", border: `1px solid ${C.border}`, color: C.muted, fontSize: 13, fontWeight: 600, cursor: "pointer" }}>
            <LogOut size={14} /> Sign Out
          </button>
        </div>
      </aside>

      {/* ── Main content ─────────────────────────── */}
      <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column", overflow: "hidden" }}>

        {/* Mobile header (hidden on desktop by CSS) */}
        <div className="admin-mobile-header" style={{ display: "none", alignItems: "center", justifyContent: "space-between", padding: "0 16px", height: 52, background: C.card2, borderBottom: `1px solid ${C.border}`, flexShrink: 0 }}>
          <Brand size={19} suffix="Admin" />
          <button onClick={handleLogout} style={{ display: "flex", alignItems: "center", gap: 5, padding: "6px 12px", background: "transparent", border: `1px solid ${C.border}`, borderRadius: 8, color: C.muted, fontSize: 12, cursor: "pointer" }}>
            <LogOut size={12} /> Sign Out
          </button>
        </div>
        {/* Mobile tab bar */}
        <div className="admin-mobile-header" style={{ display: "none", overflowX: "auto", background: C.card2, borderBottom: `1px solid ${C.border}`, padding: "8px 12px", gap: 6, flexShrink: 0 }}>
          {tabs.map(({ id, Icon, label }) => (
            <button key={id} onClick={() => setActiveTab(id)}
              style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "7px 12px", borderRadius: 8, border: "none", cursor: "pointer", fontWeight: 600, fontSize: 12, whiteSpace: "nowrap",
                background: activeTab === id ? C.accentLight : "transparent",
                color: activeTab === id ? C.accent : C.muted }}>
              <Icon size={13} /> {label}
            </button>
          ))}
        </div>

      <main style={{ flex: 1, overflowY: activeTab === "students" ? "hidden" : "auto", padding: "32px 36px", display: "flex", flexDirection: "column" }}>

        {/* Rotating quote — visible on every tab EXCEPT Results
            (where the stats grid already dominates the top area). */}
        {quote && activeTab !== "results" && (
          <figure style={{
            margin: "0 0 24px", padding: "14px 20px",
            background: "rgba(255,255,255,0.025)",
            border: `1px solid ${C.border}`,
            borderLeft: "2px solid rgba(255,255,255,0.3)",
            borderRadius: 10,
          }}>
            <blockquote style={{
              margin: 0, fontSize: 14, color: C.sub,
              lineHeight: 1.65, fontStyle: "italic", fontWeight: 300,
            }}>
              &ldquo;{quote.text}&rdquo;
            </blockquote>
            {quote.author && (
              <figcaption style={{
                marginTop: 8, fontSize: 11, letterSpacing: "0.18em",
                textTransform: "uppercase", color: C.muted, fontWeight: 600,
              }}>
                — {quote.author}
              </figcaption>
            )}
          </figure>
        )}

        {/* ══════════════════ RESULTS TAB ══════════════════ */}
        {activeTab === "results" && <>

          {/* Title row */}
          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 16, marginBottom: 24, flexWrap: "wrap" }}>
            <div>
              <h1 style={{ fontSize: 22, fontWeight: 800, color: C.text, marginBottom: 2 }}>
              {isRootAdmin ? "Dashboard" : isAdminUser ? "Admin Dashboard" : "Teacher Dashboard"}
            </h1>
              <p style={{ fontSize: 13, color: C.muted }}>Signed in as <strong style={{ color: isRootAdmin ? "#fbbf24" : isAdminUser ? "#60a5fa" : C.accent }}>{currentUsername}</strong> · View and analyse all student results</p>
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
              { label: "Completed", value: attempts.filter(a => a.status === "completed").length, Icon: CheckCircle, color: "#ffffff" },
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
            <div style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 14, overflow: "hidden", marginBottom: 28, maxHeight: 520, display: "flex", flexDirection: "column" }}>
              <div style={{ overflow: "auto", flex: 1 }}>
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
                        <React.Fragment key={a.id}>
                        <tr style={{ borderBottom: `1px solid ${C.border}`, background: i % 2 === 0 ? C.card : "rgba(6,12,31,0.6)" }}>
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
                          <td style={{ padding: "12px 14px", color: C.sub, maxWidth: 160, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                            {a.testTitle}
                            {a.testType === "reading" && !/reading/i.test(a.testTitle) && " – Reading"}
                          </td>
                          <td style={{ padding: "12px 14px" }}>
                            <span style={{ padding: "3px 9px", borderRadius: 20, fontSize: 11, fontWeight: 600,
                              background: a.testType === "listening" ? "rgba(255,255,255,0.1)" : "rgba(245,158,11,0.15)",
                              color: a.testType === "listening" ? "#ffffff" : "#fcd34d" }}>
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
                          <tr key={`${a.id}-detail`} style={{ background: "rgba(255,255,255,0.03)" }}>
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
                        </React.Fragment>
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
                                <div style={{ fontSize: 18, fontWeight: 800, color: listening.length ? "#ffffff" : C.muted }}>{avgL}</div>
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
                                      <React.Fragment key={a.id}>
                                      <tr style={{ borderBottom: `1px solid ${C.border}`, background: i % 2 === 0 ? C.card : "rgba(6,12,31,0.5)" }}>
                                        <td style={{ padding: "11px 14px", fontWeight: 600, color: C.text, maxWidth: 180, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                                          <button onClick={() => setExpandedAttempt(isAExpanded ? null : a.id)}
                                            style={{ background: "transparent", border: "none", cursor: "pointer", color: C.muted, marginRight: 6, padding: 0, verticalAlign: "middle" }}>
                                            {isAExpanded ? <ChevronUp size={11} /> : <ChevronDown size={11} />}
                                          </button>
                                          {a.testTitle}
                                          {a.testType === "reading" && !/reading/i.test(a.testTitle) && " – Reading"}
                                        </td>
                                        <td style={{ padding: "11px 14px" }}>
                                          <span style={{ padding: "2px 8px", borderRadius: 20, fontSize: 11, fontWeight: 600,
                                            background: a.testType === "listening" ? "rgba(255,255,255,0.1)" : "rgba(245,158,11,0.15)",
                                            color: a.testType === "listening" ? "#ffffff" : "#fcd34d" }}>
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
                                        <tr key={`${a.id}-expand`} style={{ background: "rgba(255,255,255,0.03)" }}>
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
                                                              <span style={{ fontSize: 11, padding: "2px 8px", borderRadius: 5, background: "rgba(255,255,255,0.07)", color: "#ffffff" }}>
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
                                      </React.Fragment>
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
          <div style={{ display: "flex", flexDirection: "column", height: "100%", minHeight: 0 }}>
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
                style={{ display: "flex", alignItems: "center", gap: 6, padding: "10px 18px", background: "#2a2a2a", border: "none", borderRadius: 10, color: "#fff", fontSize: 13, fontWeight: 600, cursor: "pointer" }}>
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
            <div style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 14, overflow: "hidden", flex: 1, display: "flex", flexDirection: "column", minHeight: 0 }}>
              <div style={{ padding: "10px 16px", background: C.card2, borderBottom: `1px solid ${C.border}`, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: 11, fontWeight: 700, color: C.muted, textTransform: "uppercase", letterSpacing: "0.08em" }}>
                  Accounts ({students.filter(s => !studentSearch || `${s.name} ${s.surname} ${s.username} ${s.group_name}`.toLowerCase().includes(studentSearch.toLowerCase())).length})
                </span>
              </div>
              {students.filter(s => !studentSearch || `${s.name} ${s.surname} ${s.username} ${s.group_name}`.toLowerCase().includes(studentSearch.toLowerCase())).length === 0 ? (
                <div style={{ padding: "32px", textAlign: "center", color: C.muted, fontSize: 14 }}>No students yet. Use the form above to add students.</div>
              ) : (
                <div style={{ overflowX: "auto", overflowY: "auto", flex: 1 }}>
                  <table style={{ width: "100%", borderCollapse: "collapse" }}>
                    <thead>
                      <tr style={{ background: C.card2 }}>
                        {["Name", "Username", "Password", "Group", "Created", "Last Seen", ""].map(h => (
                          <th key={h} style={{ padding: "10px 14px", textAlign: "left", fontSize: 11, fontWeight: 700, color: C.muted, textTransform: "uppercase", letterSpacing: "0.05em", borderBottom: `1px solid ${C.border}` }}>{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {students.filter(s => !studentSearch || `${s.name} ${s.surname} ${s.username} ${s.group_name}`.toLowerCase().includes(studentSearch.toLowerCase())).map((s, i) => (
                        <React.Fragment key={s.id}>
                        <tr style={{ background: i % 2 === 0 ? "transparent" : "rgba(255,255,255,0.02)", borderBottom: editingStudentId === s.id ? "none" : `1px solid ${C.border}` }}>
                          <td style={{ padding: "12px 14px" }}>
                            <div style={{ fontWeight: 600, fontSize: 14, color: C.text }}>{s.name} {s.surname}</div>
                          </td>
                          <td style={{ padding: "12px 14px", fontFamily: "monospace", fontSize: 13, color: C.sub }}>{s.username}</td>
                          <td style={{ padding: "12px 14px" }}>
                            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                              <span style={{ fontFamily: "monospace", fontSize: 13, color: showPasswordFor === s.id ? C.text : C.muted }}>
                                {showPasswordFor === s.id
                                  ? (s.plainPassword || "— not stored")
                                  : "••••••••"}
                              </span>
                              <button onClick={() => setShowPasswordFor(showPasswordFor === s.id ? null : s.id)}
                                title={showPasswordFor === s.id ? "Hide password" : "Show password"}
                                style={{ display: "flex", alignItems: "center", padding: "4px 6px", background: "transparent", border: `1px solid ${C.border}`, borderRadius: 6, color: C.muted, cursor: "pointer" }}>
                                {showPasswordFor === s.id ? <EyeOff size={12} /> : <Eye size={12} />}
                              </button>
                            </div>
                          </td>
                          <td style={{ padding: "12px 14px", fontSize: 13, color: C.muted }}>{s.group_name}</td>
                          <td style={{ padding: "12px 14px", fontSize: 12, color: C.muted }}>{new Date(s.createdAt).toLocaleDateString()}</td>
                          <td style={{ padding: "12px 14px" }}>
                            <div style={{ fontSize: 12, color: s.lastAccessedAt ? C.sub : C.muted, fontWeight: s.lastAccessedAt ? 500 : 400 }}>
                              {fmtLastSeen(s.lastAccessedAt)}
                            </div>
                            {isRootAdmin && s.lastAccessedAt && (
                              <button onClick={() => setExpandedAccessInfoFor(expandedAccessInfoFor === s.id ? null : s.id)}
                                style={{ fontSize: 10, color: C.muted, background: "none", border: "none", cursor: "pointer", padding: 0, marginTop: 2, display: "flex", alignItems: "center", gap: 3 }}>
                                <Monitor size={10} /> {expandedAccessInfoFor === s.id ? "hide" : "details"}
                              </button>
                            )}
                          </td>
                          <td style={{ padding: "12px 14px" }}>
                            <div style={{ display: "flex", gap: 6 }}>
                              <button onClick={() => editingStudentId === s.id ? setEditingStudentId(null) : startEditStudent(s)}
                                style={{ display: "flex", alignItems: "center", gap: 5, padding: "7px 14px",
                                  background: editingStudentId === s.id ? C.accentLight : "linear-gradient(135deg,rgba(255,255,255,0.12),rgba(109,40,217,0.2))",
                                  border: `1.5px solid ${editingStudentId === s.id ? C.accent : "rgba(255,255,255,0.25)"}`,
                                  borderRadius: 8, color: C.accent, fontSize: 12, fontWeight: 700, cursor: "pointer" }}>
                                <Pencil size={12} /> {editingStudentId === s.id ? "Cancel" : "Edit"}
                              </button>
                              <button onClick={() => handleDeleteStudent(s.id)}
                                style={{ display: "flex", alignItems: "center", gap: 4, padding: "7px 12px", background: "rgba(239,68,68,0.08)", border: `1px solid rgba(239,68,68,0.3)`, borderRadius: 8, color: C.danger, fontSize: 12, fontWeight: 600, cursor: "pointer" }}>
                                <Trash2 size={12} /> Delete
                              </button>
                            </div>
                          </td>
                        </tr>
                        {isRootAdmin && expandedAccessInfoFor === s.id && (
                          <tr key={`${s.id}-access`} style={{ borderBottom: `1px solid ${C.border}`, background: "rgba(255,255,255,0.03)" }}>
                            <td colSpan={7} style={{ padding: "14px 18px" }}>
                              <div style={{ fontSize: 11, fontWeight: 700, color: C.muted, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 10 }}>Last Access Details</div>
                              <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                                {[
                                  { label: "IP Address", val: s.lastIp ?? "—" },
                                  { label: "Platform", val: s.lastDeviceInfo?.platform ?? "—" },
                                  { label: "Language", val: s.lastDeviceInfo?.language ?? "—" },
                                ].map(item => (
                                  <div key={item.label} style={{ padding: "8px 14px", background: C.card2, borderRadius: 8, border: `1px solid ${C.border}` }}>
                                    <div style={{ fontSize: 10, color: C.muted, marginBottom: 3, textTransform: "uppercase", fontWeight: 700 }}>{item.label}</div>
                                    <div style={{ fontSize: 13, color: C.sub, fontFamily: "monospace" }}>{item.val}</div>
                                  </div>
                                ))}
                                {s.lastDeviceInfo?.userAgent && (
                                  <div style={{ padding: "8px 14px", background: C.card2, borderRadius: 8, border: `1px solid ${C.border}`, flex: 1, minWidth: 200 }}>
                                    <div style={{ fontSize: 10, color: C.muted, marginBottom: 3, textTransform: "uppercase", fontWeight: 700 }}>User Agent</div>
                                    <div style={{ fontSize: 11, color: C.muted, wordBreak: "break-all", lineHeight: 1.5 }}>{s.lastDeviceInfo.userAgent}</div>
                                  </div>
                                )}
                              </div>
                            </td>
                          </tr>
                        )}
                        {editingStudentId === s.id && (
                          <tr key={`${s.id}-edit`} style={{ borderBottom: `2px solid ${C.accent}`, background: "rgba(255,255,255,0.05)" }}>
                            <td colSpan={7} style={{ padding: "20px 18px" }}>
                              <div style={{ fontSize: 13, fontWeight: 700, color: C.accent, marginBottom: 12 }}>Editing: {s.name} {s.surname}</div>
                              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10, marginBottom: 10 }}>
                                <div>
                                  <div style={{ fontSize: 10, color: C.muted, marginBottom: 4, textTransform: "uppercase", fontWeight: 700 }}>First Name</div>
                                  <input value={editStudentForm.name} onChange={e => setEditStudentForm(f => ({ ...f, name: e.target.value }))}
                                    style={{ ...sel, padding: "8px 12px" }} />
                                </div>
                                <div>
                                  <div style={{ fontSize: 10, color: C.muted, marginBottom: 4, textTransform: "uppercase", fontWeight: 700 }}>Surname</div>
                                  <input value={editStudentForm.surname} onChange={e => setEditStudentForm(f => ({ ...f, surname: e.target.value }))}
                                    style={{ ...sel, padding: "8px 12px" }} />
                                </div>
                                <div>
                                  <div style={{ fontSize: 10, color: C.muted, marginBottom: 4, textTransform: "uppercase", fontWeight: 700 }}>Group</div>
                                  <input value={editStudentForm.group_name} onChange={e => setEditStudentForm(f => ({ ...f, group_name: e.target.value }))}
                                    style={{ ...sel, padding: "8px 12px" }} />
                                </div>
                                <div>
                                  <div style={{ fontSize: 10, color: C.muted, marginBottom: 4, textTransform: "uppercase", fontWeight: 700 }}>Username</div>
                                  <input value={editStudentForm.username} onChange={e => setEditStudentForm(f => ({ ...f, username: e.target.value }))}
                                    style={{ ...sel, padding: "8px 12px" }} autoComplete="off" />
                                </div>
                                <div>
                                  <div style={{ fontSize: 10, color: C.muted, marginBottom: 4, textTransform: "uppercase", fontWeight: 700 }}>Password <span style={{ fontWeight: 400, textTransform: "none" }}>(leave blank to keep current)</span></div>
                                  <input value={editStudentForm.password} onChange={e => setEditStudentForm(f => ({ ...f, password: e.target.value }))}
                                    placeholder="Enter password..."
                                    style={{ ...sel, padding: "8px 12px" }} autoComplete="new-password" />
                                  <label style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 6, fontSize: 11, color: C.muted, cursor: "pointer" }}>
                                    <input type="checkbox" checked={editStudentForm.passwordIsExisting}
                                      onChange={e => setEditStudentForm(f => ({ ...f, passwordIsExisting: e.target.checked }))} />
                                    This is the <strong style={{ color: C.sub }}>existing</strong> password (don&apos;t reset login — just make it visible in Show)
                                  </label>
                                </div>
                              </div>
                              {studentEditError && <p style={{ fontSize: 13, color: C.danger, marginBottom: 8 }}>{studentEditError}</p>}
                              <div style={{ display: "flex", gap: 8 }}>
                                <button onClick={handleSaveStudent}
                                  style={{ display: "flex", alignItems: "center", gap: 5, padding: "8px 16px", background: "#2a2a2a", border: "none", borderRadius: 8, color: "#fff", fontSize: 13, fontWeight: 600, cursor: "pointer" }}>
                                  <Save size={13} /> Save Changes
                                </button>
                                <button onClick={() => { setEditingStudentId(null); setStudentEditError(""); }}
                                  style={{ padding: "8px 14px", background: "transparent", border: `1px solid ${C.border}`, borderRadius: 8, color: C.muted, fontSize: 13, cursor: "pointer" }}>
                                  Cancel
                                </button>
                              </div>
                            </td>
                          </tr>
                        )}
                        </React.Fragment>
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
          const AVAILABLE_BOOKS = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
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
                      style={{ padding: "8px 18px", background: "#2a2a2a", color: "#fff", fontWeight: 700, fontSize: 13, border: "none", borderRadius: 9, cursor: "pointer" }}>
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
                      background: testsTypeFilter === t ? C.accent : C.card, color: testsTypeFilter === t ? "#0a0a0a" : C.muted }}>
                    <Icon size={14} /> {label}
                  </button>
                ))}
              </div>
              {testsSelectedBook === null ? (
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 10, marginBottom: 32 }}>
                  {AVAILABLE_BOOKS.map(n => {
                    const available = true;
                    const bookTests = allTests.filter(t => t.bookNumber === n && t.type === testsTypeFilter);
                    return (
                      <div key={n} onClick={() => available && setTestsSelectedBook(n)}
                        style={{ display: "flex", alignItems: "center", gap: 14, padding: "14px 16px", background: available ? C.card : "rgba(255,255,255,0.02)", border: `1px solid ${available ? C.border : "rgba(255,255,255,0.05)"}`, borderRadius: 12, cursor: available ? "pointer" : "default" }}>
                        <div style={{ width: 38, height: 38, borderRadius: 10, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: 15, background: available ? "#2a2a2a" : "rgba(255,255,255,0.05)", color: available ? "#fff" : "rgba(255,255,255,0.2)" }}>{n}</div>
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
                    {allTests.filter(t => t.bookNumber === testsSelectedBook && t.type === testsTypeFilter).sort((a, b) => a.testNumber - b.testNumber).map(test => {
                      const myBest = myPracticeAttempts.filter(a => a.testId === test.id && a.status === "completed");
                      const best = myBest.length ? Math.max(...myBest.map(a => a.bandScore)) : null;
                      return (
                      <div key={test.id} style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 14, padding: 18 }}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
                          <div>
                            <div style={{ fontSize: 11, fontWeight: 600, color: C.accent, marginBottom: 3, textTransform: "uppercase" }}>Test {test.testNumber}</div>
                            <div style={{ fontSize: 14, fontWeight: 700, color: C.text }}>{test.title}</div>
                          </div>
                          {best !== null && <span style={{ fontSize: 12, fontWeight: 700, padding: "3px 9px", background: "rgba(16,185,129,0.15)", color: "#34d399", borderRadius: 20, flexShrink: 0 }}>Score {best}</span>}
                        </div>
                        <div style={{ display: "flex", gap: 8 }}>
                          <button onClick={() => setTestsAnswerKeyId(test.id)}
                            style={{ flex: 1, padding: "8px", background: C.accentLight, color: C.accent, fontWeight: 700, fontSize: 12, border: `1px solid rgba(255,255,255,0.2)`, borderRadius: 9, cursor: "pointer" }}>
                            Answer Key
                          </button>
                          <button onClick={() => router.push(`/student/test/${test.id}?practice=1`)}
                            style={{ flex: 1, padding: "8px", background: "#2a2a2a", color: "#fff", fontWeight: 700, fontSize: 12, border: "none", borderRadius: 9, cursor: "pointer" }}>
                            Practice
                          </button>
                        </div>
                      </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {myPracticeAttempts.length > 0 && (
              <div style={{ marginTop: 32 }}>
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
                          <td style={{ padding: "11px 14px", fontWeight: 600, color: C.text }}>
                            {a.testTitle}
                            {a.testType === "reading" && !/reading/i.test(a.testTitle) && " – Reading"}
                          </td>
                          <td style={{ padding: "11px 14px" }}><span style={{ fontSize: 11, padding: "2px 8px", borderRadius: 20, fontWeight: 600, background: a.testType === "listening" ? "rgba(255,255,255,0.1)" : "rgba(245,158,11,0.15)", color: a.testType === "listening" ? "#ffffff" : "#fcd34d" }}>{a.testType}</span></td>
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


        {/* ══════════════════ MY PROFILE (teachers) ══════════════════ */}
        {activeTab === "profile" && (() => {
          const submitOwnPw = async (e: React.FormEvent) => {
            e.preventDefault();
            setOwnPwMsg(null);
            setOwnPwSaving(true);
            const res = await changeTeacherOwnPassword(currentTeacherId, ownCurrPw, ownNewPw);
            setOwnPwSaving(false);
            if (res.ok) {
              setOwnPwMsg({ kind: "ok", text: "Password updated." });
              setOwnCurrPw(""); setOwnNewPw("");
            } else {
              setOwnPwMsg({ kind: "err", text: res.error ?? "Couldn't update password." });
            }
          };
          const fieldStyle: React.CSSProperties = {
            width: "100%", padding: "10px 40px 10px 14px",
            background: "rgba(255,255,255,0.04)",
            border: `1px solid ${C.border}`,
            borderRadius: 10, color: C.text, fontSize: 14, outline: "none",
            fontFamily: "inherit",
          };
          return (
            <div style={{ maxWidth: 640 }}>
              <h1 style={{ fontSize: 22, fontWeight: 800, color: C.text, marginBottom: 4 }}>My Profile</h1>
              <p style={{ color: C.muted, fontSize: 13, marginBottom: 20 }}>Your account and settings.</p>

              {/* Identity */}
              <div style={{ padding: "18px 20px", background: C.card, border: `1px solid ${C.border}`, borderRadius: 14, marginBottom: 16, display: "flex", alignItems: "center", gap: 16 }}>
                <div style={{ width: 52, height: 52, borderRadius: "50%", background: "#2a2a2a", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <UserCircle2 size={26} color="#fff" />
                </div>
                <div>
                  <div style={{ fontSize: 16, fontWeight: 700, color: C.text }}>{currentUsername}</div>
                  <div style={{ fontSize: 12, color: C.muted, marginTop: 2 }}>
                    {isRootAdmin ? "Root account" : isAdminUser ? "Admin" : "Teacher"}
                  </div>
                </div>
              </div>

              {/* Change password */}
              <div style={{ padding: "18px 20px", background: C.card, border: `1px solid ${C.border}`, borderRadius: 14 }}>
                <h3 style={{ fontSize: 14, fontWeight: 700, color: C.text, marginBottom: 14, display: "flex", alignItems: "center", gap: 8 }}>
                  <Lock size={14} /> Change password
                </h3>
                <form onSubmit={submitOwnPw} style={{ display: "grid", gap: 10 }}>
                  <div style={{ position: "relative" }}>
                    <input type={ownShowCurr ? "text" : "password"} autoComplete="current-password"
                      placeholder="Current password" value={ownCurrPw}
                      onChange={(e) => setOwnCurrPw(e.target.value)}
                      style={fieldStyle}
                      onFocus={(e) => (e.currentTarget.style.borderColor = C.accent)}
                      onBlur={(e) => (e.currentTarget.style.borderColor = C.border)} />
                    <button type="button" onClick={() => setOwnShowCurr(v => !v)}
                      style={{ position: "absolute", right: 8, top: "50%", transform: "translateY(-50%)", background: "none", border: "none", cursor: "pointer", color: C.muted, padding: 6 }}>
                      {ownShowCurr ? <EyeOff size={15} /> : <Eye size={15} />}
                    </button>
                  </div>
                  <div style={{ position: "relative" }}>
                    <input type={ownShowNew ? "text" : "password"} autoComplete="new-password"
                      placeholder="New password (min 4 characters)" value={ownNewPw}
                      onChange={(e) => setOwnNewPw(e.target.value)}
                      style={fieldStyle}
                      onFocus={(e) => (e.currentTarget.style.borderColor = C.accent)}
                      onBlur={(e) => (e.currentTarget.style.borderColor = C.border)} />
                    <button type="button" onClick={() => setOwnShowNew(v => !v)}
                      style={{ position: "absolute", right: 8, top: "50%", transform: "translateY(-50%)", background: "none", border: "none", cursor: "pointer", color: C.muted, padding: 6 }}>
                      {ownShowNew ? <EyeOff size={15} /> : <Eye size={15} />}
                    </button>
                  </div>
                  {ownPwMsg && (
                    <div style={{
                      fontSize: 13, padding: "9px 12px", borderRadius: 9,
                      background: ownPwMsg.kind === "ok" ? "rgba(16,185,129,0.1)" : "rgba(239,68,68,0.1)",
                      border: `1px solid ${ownPwMsg.kind === "ok" ? "rgba(16,185,129,0.3)" : "rgba(239,68,68,0.3)"}`,
                      color: ownPwMsg.kind === "ok" ? "#6ee7b7" : "#fca5a5",
                    }}>{ownPwMsg.text}</div>
                  )}
                  <button type="submit" disabled={ownPwSaving || !ownCurrPw || !ownNewPw}
                    style={{ justifySelf: "start", padding: "10px 22px", background: ownPwSaving || !ownCurrPw || !ownNewPw ? "rgba(255,255,255,0.1)" : "#2a2a2a", color: "#fff", fontWeight: 700, fontSize: 13, border: "none", borderRadius: 9, cursor: ownPwSaving || !ownCurrPw || !ownNewPw ? "not-allowed" : "pointer" }}>
                    {ownPwSaving ? "Updating…" : "Update password"}
                  </button>
                </form>
              </div>
            </div>
          );
        })()}

        {/* ══════════════════ COMING-SOON SECTIONS ══════════════════ */}
        {(activeTab === "writing" || activeTab === "articles" || activeTab === "podcasts" || activeTab === "music") && (
          <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "60px 32px", textAlign: "center", minHeight: 480 }}>
            <div style={{ fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", color: C.muted, marginBottom: 24, fontWeight: 600 }}>
              {activeTab === "writing" ? "IELTS" : activeTab === "articles" ? "Read" : "Listen"}
            </div>
            <h1 style={{ fontFamily: `"Fraunces", "Iowan Old Style", Georgia, serif`, fontSize: "clamp(3rem, 7vw, 5rem)", fontWeight: 300, letterSpacing: "-0.02em", color: "#fff", lineHeight: 1, marginBottom: 28, textTransform: "capitalize" }}>
              {activeTab}
            </h1>
            <p style={{ fontSize: 15, color: C.muted, maxWidth: 480, lineHeight: 1.7, marginBottom: 40 }}>
              {activeTab === "writing" && "Task 1 and Task 2 practice with model answers and feedback. Coming soon."}
              {activeTab === "articles" && "Hand-picked essays, exam tips and long reads to level up your English. Coming soon."}
              {activeTab === "podcasts" && "Curated podcast episodes and transcripts for every level. Coming soon."}
              {activeTab === "music" && "Songs with lyrics to help you train your ear. Coming soon."}
            </p>
            <div style={{ fontSize: 11, letterSpacing: "0.25em", textTransform: "uppercase", color: C.muted, fontWeight: 600, border: `1px solid ${C.border}`, borderRadius: 999, padding: "8px 20px" }}>
              In development
            </div>
          </div>
        )}

        {/* ══════════════════ TEACHERS TAB ══════════════════ */}
        {activeTab === "teachers" && canManageTeachers && (
          <div style={{ maxWidth: 900 }}>
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
                  style={{ alignSelf: "flex-start", display: "flex", alignItems: "center", gap: 6, padding: "10px 18px", background: "#2a2a2a", border: "none", borderRadius: 10, color: "#fff", fontSize: 13, fontWeight: 600, cursor: "pointer" }}>
                  <Plus size={14} /> Add Teacher
                </button>
              </div>
            </div>

            {/* List */}
            <div style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 14, overflow: "hidden" }}>
              <div style={{ padding: "10px 16px", background: C.card2, borderBottom: `1px solid ${C.border}`, fontSize: 11, fontWeight: 700, color: C.muted, textTransform: "uppercase", letterSpacing: "0.08em" }}>
                Accounts ({teachers.length})
              </div>
              {teachers.map(t => {
                // Admin user cannot edit/delete the root admin account
                const isProtected = t.id === ROOT_ADMIN_ID && !isRootAdmin;
                return (
                <div key={t.id} style={{ borderBottom: `1px solid ${C.border}` }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 16px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <div style={{ width: 34, height: 34, borderRadius: "50%", background: C.accentLight, display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <Shield size={14} color={C.accent} />
                      </div>
                      <div>
                        <div style={{ fontWeight: 600, fontSize: 14, color: C.text }}>{t.username}</div>
                        {t.username === ADMIN_USERNAME && t.id !== ROOT_ADMIN_ID && <div style={{ fontSize: 11, color: "#f59e0b" }}>Admin</div>}
                        <div style={{ fontSize: 11, color: C.muted, marginTop: 2 }}>Last seen: {fmtLastSeen(t.lastAccessedAt)}</div>
                        {isRootAdmin && t.lastIp && <div style={{ fontSize: 11, color: C.muted, fontFamily: "monospace" }}>IP: {t.lastIp}</div>}
                        {showPasswordFor === t.id && !isProtected && (
                          <div style={{ fontSize: 12, marginTop: 2, fontFamily: "monospace", color: t.plainPassword ? C.text : C.muted }}>
                            {t.plainPassword
                              ? `🔑 ${t.plainPassword}`
                              : "— not available (created before password recovery was enabled — click Change PW to set a new one)"}
                          </div>
                        )}
                      </div>
                    </div>
                    <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
                      {!isProtected && (
                        <button onClick={() => setShowPasswordFor(showPasswordFor === t.id ? null : t.id)}
                          style={{ display: "flex", alignItems: "center", gap: 5, padding: "6px 10px", background: "transparent", border: `1px solid ${C.border}`, borderRadius: 8, color: C.muted, fontSize: 12, fontWeight: 600, cursor: "pointer" }}>
                          {showPasswordFor === t.id ? <EyeOff size={12} /> : <Eye size={12} />}
                          {showPasswordFor === t.id ? "Hide" : "Show"}
                        </button>
                      )}
                      {!isProtected && (
                        <button onClick={() => { setEditingPasswordFor(editingPasswordFor === t.id ? null : t.id); setEditPasswordValue(""); }}
                          style={{ display: "flex", alignItems: "center", gap: 5, padding: "6px 10px", background: "transparent", border: `1px solid ${C.border}`, borderRadius: 8, color: C.sub, fontSize: 12, fontWeight: 600, cursor: "pointer" }}>
                          Change PW
                        </button>
                      )}
                      <button onClick={() => handleDeleteTeacher(t.id)} disabled={isProtected || t.id === ROOT_ADMIN_ID}
                        style={{ display: "flex", alignItems: "center", gap: 5, padding: "6px 12px", background: "transparent", border: `1px solid ${C.border}`, borderRadius: 8, color: (isProtected || t.id === ROOT_ADMIN_ID) ? C.muted : C.danger, fontSize: 12, fontWeight: 600, cursor: (isProtected || t.id === ROOT_ADMIN_ID) ? "not-allowed" : "pointer", opacity: (isProtected || t.id === ROOT_ADMIN_ID) ? 0.35 : 1 }}>
                        <Trash2 size={12} /> Delete
                      </button>
                    </div>
                  </div>
                  {editingPasswordFor === t.id && (
                    <div style={{ display: "flex", flexDirection: "column", gap: 8, padding: "0 16px 14px" }}>
                      <input type="text" placeholder="Password" value={editPasswordValue}
                        onChange={e => setEditPasswordValue(e.target.value)}
                        style={{ width: "100%", padding: "7px 12px", background: C.card2, border: `1px solid ${C.border}`, borderRadius: 8, color: C.text, fontSize: 13, outline: "none", fontFamily: "inherit" }} />
                      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                        <button onClick={() => handleChangePassword(t.id)}
                          title="Reset the login password to this value and store it for Show"
                          style={{ padding: "7px 14px", background: "#2a2a2a", border: "none", borderRadius: 8, color: "#fff", fontSize: 13, fontWeight: 600, cursor: "pointer" }}>
                          Set as new password
                        </button>
                        <button onClick={() => handleSaveExistingPassword(t.id)}
                          title="Save this as the existing password — login is unchanged, just made visible via Show"
                          style={{ padding: "7px 14px", background: "transparent", border: `1px solid ${C.accent}`, borderRadius: 8, color: C.accent, fontSize: 13, fontWeight: 600, cursor: "pointer" }}>
                          Save existing (login unchanged)
                        </button>
                        <button onClick={() => setEditingPasswordFor(null)}
                          style={{ padding: "7px 12px", background: "transparent", border: `1px solid ${C.border}`, borderRadius: 8, color: C.muted, fontSize: 13, cursor: "pointer" }}>
                          Cancel
                        </button>
                      </div>
                    </div>
                  )}
                </div>
                );
              })}
            </div>
          </div>
        )}

      {/* Mobile responsive */}
      <style>{`
        @media (max-width: 640px) {
          .admin-filter-grid { grid-template-columns: repeat(2, 1fr) !important; }
          aside { display: none !important; }
          .admin-mobile-header { display: flex !important; }
        }
        @media (max-width: 400px) {
          .admin-filter-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
      </main>
      </div>
    </div>
  );
}
