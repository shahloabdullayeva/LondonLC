"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  BookOpen, LogOut, Users, Award, BarChart3, Search,
  Download, CheckCircle, X, Shield, Plus, Trash2, Eye, EyeOff,
  Monitor, Ban, Headphones, ChevronRight, ChevronDown, ChevronUp, Pencil, Save,
  PenLine, FileText, Mic, Music, UserCircle2, Lock,
} from "lucide-react";

import { getSession, clearSession, getAttempts, getTeachers, addTeacher, deleteTeacher, updateTeacherPassword, setTeacherPlainPassword, setStudentPlainPassword, changeTeacherOwnPassword, registerStudent, getStudentAccounts, deleteStudent, updateStudent, addGradingCredits, getBlockedIPs, blockIP, unblockIP, recordTeacherAccess, getAllSubmissions, getPremiumRequests, reviewPremiumRequest, type AttemptData, type TeacherAccount, type StudentAccount, type WritingSubmission, type Correction, type PremiumRequest } from "@/lib/store";
import { getTestById } from "@/data/ielts-tests";
import { allTests } from "@/data/ielts-tests";
import { quotes, type Quote } from "@/lib/quotes";
import Brand from "@/components/Brand";

// ── Theme tokens — backed by the site CSS variables so the admin
//    dashboard responds to the theme picker in the nav. Only the
//    semantic status colours (success / danger) stay hardcoded.
const C = {
  bg: "var(--site-bg)",
  card: "var(--site-card)",
  card2: "var(--site-nav)",
  border: "var(--site-border)",
  text: "var(--site-text)",
  muted: "var(--site-text-muted)",
  sub: "var(--site-text-sub)",
  accent: "var(--site-text)",
  accentLight: "var(--site-border)",
  success: "#10b981",
  danger: "#ef4444",
};

// Compute a student's current daily streak from the attempts store.
// A streak counts consecutive days ending today (or yesterday if nothing
// has finished yet today) on which the student submitted at least one
// completed attempt. Active = true when today is part of the streak.
function computeStreakForStudent(allAttempts: AttemptData[], studentId: string): { streak: number; active: boolean } {
  const completed = allAttempts.filter(a => a.studentId === studentId && a.status === "completed");
  if (completed.length === 0) return { streak: 0, active: false };
  const dayKey = (d: Date) => `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;
  const days = new Set<string>();
  for (const a of completed) {
    const d = new Date(a.submittedAt);
    days.add(dayKey(d));
  }
  const today = new Date();
  const yesterday = new Date(today); yesterday.setDate(today.getDate() - 1);
  const hasToday = days.has(dayKey(today));
  if (!hasToday && !days.has(dayKey(yesterday))) return { streak: 0, active: false };
  let n = 0;
  const cursor = new Date(hasToday ? today : yesterday);
  while (days.has(dayKey(cursor))) {
    n++;
    cursor.setDate(cursor.getDate() - 1);
  }
  return { streak: n, active: hasToday };
}

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
  fontFamily: "var(--ff-sans, Inter, system-ui, sans-serif)",
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
  const [premiumRequests, setPremiumRequests] = useState<PremiumRequest[]>([]);
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
    const [all, teacherList, studentList, ips, prReqs] = await Promise.all([
      getAttempts(), getTeachers(), getStudentAccounts(), getBlockedIPs(), getPremiumRequests(),
    ]);
    setAttempts(all);
    setTeachers(teacherList);
    setStudents(studentList);
    setBlockedIPs(ips);
    setPremiumRequests(prReqs);
    if (teacherId) setMyPracticeAttempts(all.filter(a => a.isTeacherAttempt && a.teacherId === teacherId));
  };

  useEffect(() => {
    const s = getSession();
    if (!s || !s.isAdmin) { router.push("/auth/login?admin=true"); return; }
    setCurrentTeacherId(s.id);
    setCurrentUsername(s.username || s.name || "");
    getTeachers().then(tList => {
      const me = tList.find(t => t.id === s.id);
      setIsRootAdmin(!!me?.isRoot);
      setIsAdminUser(true);
    });
    refreshData(s.id);

    // Update "last seen" on every dashboard visit, not just login
    const di = { userAgent: navigator.userAgent, platform: navigator.platform, language: navigator.language };
    fetch("https://api.ipify.org?format=text").then(r => r.text()).then(ip => {
      recordTeacherAccess(s.id, ip, di);
    }).catch(() => { recordTeacherAccess(s.id, "unknown", di); });

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

  // Flip the anti-cheat bypass for one student. Bypassed students won't have
  // their tests cancelled when they switch tabs, lose focus, or exit
  // fullscreen — used for people who can't stay focused due to work/personal
  // constraints. Regular scoring still applies.
  const handleToggleBypass = async (id: string, current: boolean) => {
    const next = !current;
    const label = current ? "Remove" : "Grant";
    if (!confirm(`${label} anti-cheat bypass for this student?\n\nWhen granted, their test will NOT be cancelled if they switch tabs, minimise the window, or lose focus. Scores still count.`)) return;
    await updateStudent(id, { anticheatBypass: next });
    setStudents(await getStudentAccounts());
  };

  const handleAddCredits = async (id: string, currentCredits: number) => {
    const input = prompt(`Add essay credits for this student.\nCurrent credits: ${currentCredits}\n\nEnter number to add (e.g. 10, 30, 50):`);
    if (!input) return;
    const num = parseInt(input, 10);
    if (isNaN(num) || num < 1) { alert("Please enter a valid number."); return; }
    await addGradingCredits(id, num);
    setStudents(await getStudentAccounts());
  };

  const handleReviewRequest = async (req: PremiumRequest, approve: boolean) => {
    const label = approve ? "Approve" : "Reject";
    if (!confirm(`${label} payment request from ${req.studentName} for ${req.requestedCredits} essays?`)) return;
    await reviewPremiumRequest(req.id, req.studentId, req.requestedCredits, approve);
    setPremiumRequests(await getPremiumRequests());
    if (approve) setStudents(await getStudentAccounts());
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

  // Admin tabs no longer include "Tests" as a standalone — Reading
  // and Listening live in the SECTIONS group below (both land on
  // the tests tab with the matching type filter preset).
  const tabs = [
    { id: "results" as const, Icon: BarChart3, label: "Results" },
    { id: "students" as const, Icon: Users, label: "Students", badge: premiumRequests.filter(r => r.status === "pending").length || undefined },
    ...(canManageTeachers ? [{ id: "teachers" as const, Icon: Shield, label: "Manage Teachers" }] : []),
  ];

  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "row", overflow: "hidden", background: C.bg, fontFamily: "var(--ff-sans, Inter, system-ui, sans-serif)", color: C.text }}>

      {/* ── Sidebar ──────────────────────────────── */}
      <aside style={{ width: 220, flexShrink: 0, background: C.card2, borderRight: `1px solid ${C.border}`, display: "flex", flexDirection: "column", overflow: "hidden" }}>
        {/* Role colour strip at top of sidebar */}
        <div style={{ height: 4, background: isRootAdmin ? "linear-gradient(90deg,#d97706,#fbbf24)" : isAdminUser ? "linear-gradient(90deg,#2563eb,#60a5fa)" : "var(--site-text)" }} />
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
                : "var(--site-card-2)",
              color: "var(--site-text)",
              boxShadow: isAdminUser ? "0 2px 8px rgba(37,99,235,0.4)" : "0 2px 8px var(--site-border-strong)",
            }}>
              {isAdminUser ? "Admin" : "Teacher"}
            </span>
          )}
          {/* Logged-in username */}
          <div style={{ marginTop: 8, display: "flex", alignItems: "center", gap: 6 }}>
            <div style={{ width: 28, height: 28, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: 12, color: "var(--site-text)",
              background: isRootAdmin ? "rgba(217,119,6,0.3)" : isAdminUser ? "rgba(37,99,235,0.3)" : C.accentLight,
              border: `1.5px solid ${isRootAdmin ? "rgba(217,119,6,0.5)" : isAdminUser ? "rgba(37,99,235,0.5)" : C.accent}` }}>
              {currentUsername.charAt(0).toUpperCase()}
            </div>
            <span style={{ fontSize: 13, fontWeight: 500, color: C.text, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", maxWidth: 140 }}>
              {currentUsername}
            </span>
          </div>
        </div>

        <div style={{ width: "calc(100% - 32px)", height: 1, background: C.border, margin: "0 16px 12px" }} />

        {/* Nav items */}
        <nav style={{ flex: 1, overflowY: "auto", padding: "4px 10px" }}>
          <p style={{ fontFamily: `'JetBrains Mono', ui-monospace, monospace`, fontSize: 10, fontWeight: 500, color: C.muted, letterSpacing: "0.12em", textTransform: "uppercase", margin: "6px 10px 8px" }}>Admin</p>
          {tabs.map(({ id, Icon, label, badge }) => (
            <button key={id} onClick={() => setActiveTab(id)}
              style={{ display: "flex", alignItems: "center", gap: 10, width: "100%", padding: "10px 12px", borderRadius: 10, border: "none", cursor: "pointer", fontWeight: 500, fontSize: 13.5, textAlign: "left", marginBottom: 2, transition: "all 0.15s",
                background: activeTab === id ? C.accentLight : "transparent",
                color: activeTab === id ? C.accent : C.muted }}>
              <Icon size={15} />
              {label}
              {badge ? (
                <span style={{ marginLeft: "auto", background: "#ef4444", color: "#fff", fontSize: 10, fontWeight: 800, padding: "2px 7px", borderRadius: 999, minWidth: 18, textAlign: "center" }}>{badge}</span>
              ) : null}
            </button>
          ))}

          {/* Same sections as the student dashboard. Rendered as in-page
              tabs (not external routes) so the sidebar stays visible.
              Reading + Listening come first (they actually exist as the
              teacher's test library); the others are placeholders. */}
          <p style={{ fontFamily: `'JetBrains Mono', ui-monospace, monospace`, fontSize: 10, fontWeight: 500, color: C.muted, letterSpacing: "0.12em", textTransform: "uppercase", margin: "18px 10px 8px" }}>Sections</p>
          {([
            { type: "reading"   as const, Icon: BookOpen,   label: "Reading" },
            { type: "listening" as const, Icon: Headphones, label: "Listening" },
          ]).map(({ type, Icon, label }) => {
            const active = activeTab === "tests" && testsTypeFilter === type;
            return (
              <button key={type} onClick={() => { setActiveTab("tests"); setTestsTypeFilter(type); setTestsSelectedBook(null); }}
                style={{ display: "flex", alignItems: "center", gap: 10, width: "100%", padding: "10px 12px", borderRadius: 10, background: active ? C.accentLight : "transparent", border: "none", cursor: "pointer", fontWeight: 500, fontSize: 13.5, textAlign: "left", marginBottom: 2, color: active ? C.accent : C.muted }}>
                <Icon size={15} />
                <span style={{ flex: 1 }}>{label}</span>
                <ChevronRight size={13} />
              </button>
            );
          })}
          <button onClick={() => setActiveTab("writing")}
            style={{ display: "flex", alignItems: "center", gap: 10, width: "100%", padding: "10px 12px", borderRadius: 10, background: activeTab === "writing" ? C.accentLight : "transparent", border: "none", cursor: "pointer", fontWeight: 500, fontSize: 13.5, textAlign: "left", marginBottom: 2, color: activeTab === "writing" ? C.accent : C.muted }}>
            <PenLine size={15} />
            <span style={{ flex: 1 }}>Writing</span>
            <ChevronRight size={13} />
          </button>
          {/* Articles, Podcasts + Music have their own pages. */}
          <button onClick={() => router.push("/articles")}
            style={{ display: "flex", alignItems: "center", gap: 10, width: "100%", padding: "10px 12px", borderRadius: 10, background: "transparent", border: "none", cursor: "pointer", fontWeight: 500, fontSize: 13.5, textAlign: "left", marginBottom: 2, color: C.muted }}>
            <FileText size={15} />
            <span style={{ flex: 1 }}>Articles</span>
            <ChevronRight size={13} />
          </button>
          <button onClick={() => router.push("/podcasts")}
            style={{ display: "flex", alignItems: "center", gap: 10, width: "100%", padding: "10px 12px", borderRadius: 10, background: "transparent", border: "none", cursor: "pointer", fontWeight: 500, fontSize: 13.5, textAlign: "left", marginBottom: 2, color: C.muted }}>
            <Mic size={15} />
            <span style={{ flex: 1 }}>Podcasts</span>
            <ChevronRight size={13} />
          </button>
          <button onClick={() => router.push("/music")}
            style={{ display: "flex", alignItems: "center", gap: 10, width: "100%", padding: "10px 12px", borderRadius: 10, background: "transparent", border: "none", cursor: "pointer", fontWeight: 500, fontSize: 13.5, textAlign: "left", marginBottom: 2, color: C.muted }}>
            <Music size={15} />
            <span style={{ flex: 1 }}>Music</span>
            <ChevronRight size={13} />
          </button>

          {/* My Profile — self-service account management for teachers */}
          <div style={{ height: 1, background: C.border, margin: "14px 0" }} />
          <button onClick={() => setActiveTab("profile")}
            style={{ display: "flex", alignItems: "center", gap: 10, width: "100%", padding: "10px 12px", borderRadius: 10, border: "none", cursor: "pointer", fontWeight: 500, fontSize: 13.5, textAlign: "left", marginBottom: 2, transition: "all 0.15s",
              background: activeTab === "profile" ? C.accentLight : "transparent",
              color: activeTab === "profile" ? C.accent : C.muted }}>
            <UserCircle2 size={15} />
            My Profile
          </button>
        </nav>

        {/* Sign out */}
        <div style={{ padding: "12px 10px 20px" }}>
          <button onClick={handleLogout}
            style={{ display: "flex", alignItems: "center", gap: 8, width: "100%", padding: "10px 12px", borderRadius: 10, background: "transparent", border: `1px solid ${C.border}`, color: C.muted, fontSize: 13.5, fontWeight: 500, cursor: "pointer" }}>
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
          {tabs.map(({ id, Icon, label, badge }) => (
            <button key={id} onClick={() => setActiveTab(id)}
              style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "7px 12px", borderRadius: 8, border: "none", cursor: "pointer", fontWeight: 600, fontSize: 12, whiteSpace: "nowrap", position: "relative",
                background: activeTab === id ? C.accentLight : "transparent",
                color: activeTab === id ? C.accent : C.muted }}>
              <Icon size={13} /> {label}
              {badge ? (
                <span style={{ background: "#ef4444", color: "#fff", fontSize: 9, fontWeight: 800, padding: "1px 5px", borderRadius: 999, marginLeft: 4 }}>{badge}</span>
              ) : null}
            </button>
          ))}
          {/* Reading / Listening both drop into the Tests tab with the
              type filter preset, matching the desktop sidebar. */}
          {([
            { type: "reading"   as const, Icon: BookOpen,   label: "Reading" },
            { type: "listening" as const, Icon: Headphones, label: "Listening" },
          ]).map(({ type, Icon, label }) => {
            const active = activeTab === "tests" && testsTypeFilter === type;
            return (
              <button key={type} onClick={() => { setActiveTab("tests"); setTestsTypeFilter(type); setTestsSelectedBook(null); }}
                style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "7px 12px", borderRadius: 8, border: "none", cursor: "pointer", fontWeight: 600, fontSize: 12, whiteSpace: "nowrap",
                  background: active ? C.accentLight : "transparent",
                  color: active ? C.accent : C.muted }}>
                <Icon size={13} /> {label}
              </button>
            );
          })}
        </div>

      <main style={{ flex: 1, overflowY: activeTab === "students" ? "hidden" : "auto", padding: "32px 36px", display: "flex", flexDirection: "column" }}>

        {/* ══════════════════ RESULTS TAB ══════════════════ */}
        {activeTab === "results" && <>

          {/* Pending payment requests — shown on results tab too */}
          {premiumRequests.filter(r => r.status === "pending").length > 0 && (
            <div style={{ background: "rgba(234,179,8,0.06)", border: "1px solid rgba(234,179,8,0.3)", borderRadius: 14, padding: "16px 22px", marginBottom: 20, cursor: "pointer" }}
              onClick={() => setActiveTab("students")}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ fontSize: 20 }}>&#128176;</span>
                <div>
                  <span style={{ fontWeight: 700, color: "#fde047", fontSize: 14 }}>
                    {premiumRequests.filter(r => r.status === "pending").length} payment request{premiumRequests.filter(r => r.status === "pending").length > 1 ? "s" : ""} pending
                  </span>
                  <span style={{ color: C.muted, fontSize: 13, marginLeft: 8 }}>
                    Click to review →
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Title row — dashboard title on the left, rotating quote in
              the middle (fills the empty space), Export on the right.
              A thin bottom border separates this row from the stats grid
              below so the header reads as its own band. */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 20, marginBottom: 24, paddingBottom: 20, borderBottom: `1px solid ${C.border}`, flexWrap: "wrap" }}>
            <div style={{ flexShrink: 0 }}>
              <h1 style={{ fontSize: 22, fontWeight: 800, color: C.text, marginBottom: 2 }}>
                {isRootAdmin ? "Dashboard" : isAdminUser ? "Admin Dashboard" : "Teacher Dashboard"}
              </h1>
              <p style={{ fontSize: 13, color: C.muted }}>Signed in as <strong style={{ color: isRootAdmin ? "#fbbf24" : isAdminUser ? "#60a5fa" : C.accent }}>{currentUsername}</strong> · View and analyse all student results</p>
            </div>
            {quote && (
              <figure style={{
                margin: 0, flex: 1, minWidth: 260, maxWidth: 620,
                padding: "10px 18px",
                borderLeft: "2px solid var(--site-border-strong)",
              }}>
                <blockquote style={{
                  margin: 0, fontSize: 13, color: C.sub,
                  lineHeight: 1.5, fontStyle: "italic", fontWeight: 300,
                }}>
                  &ldquo;{quote.text}&rdquo;
                </blockquote>
                {quote.author && (
                  <figcaption style={{
                    marginTop: 4, fontSize: 10, letterSpacing: "0.18em",
                    textTransform: "uppercase", color: C.muted, fontWeight: 600,
                  }}>
                    — {quote.author}
                  </figcaption>
                )}
              </figure>
            )}
            <button onClick={exportExcel}
              style={{ display: "flex", alignItems: "center", gap: 7, padding: "9px 18px", marginRight: 52, background: C.accentLight, border: `1px solid ${C.accent}`, borderRadius: 10, color: C.accent, fontSize: 13, fontWeight: 600, cursor: "pointer", flexShrink: 0 }}>
              <Download size={14} /> Export Excel
            </button>
          </div>

          {/* Stats */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 14, marginBottom: 24 }}>
            {[
              { label: "Total Attempts", value: attempts.length, Icon: BarChart3, color: C.accent },
              { label: "Unique Students", value: uniqueStudents, Icon: Users, color: "#10b981" },
              { label: "Avg IELTS Score", value: avgBand, Icon: Award, color: "#f59e0b" },
              { label: "Completed", value: attempts.filter(a => a.status === "completed").length, Icon: CheckCircle, color: "var(--site-text)" },
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
                              background: a.testType === "listening" ? "var(--site-border)" : "rgba(245,158,11,0.15)",
                              color: a.testType === "listening" ? "var(--site-text)" : "#fcd34d" }}>
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
                          <tr key={`${a.id}-detail`} style={{ background: "var(--site-border)" }}>
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
                                                background: !a.answers[q.id] ? "var(--site-border)" : isCorrect ? "rgba(16,185,129,0.15)" : "rgba(239,68,68,0.15)",
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
                                <div style={{ fontSize: 18, fontWeight: 800, color: listening.length ? "var(--site-text)" : C.muted }}>{avgL}</div>
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
                                            background: a.testType === "listening" ? "var(--site-border)" : "rgba(245,158,11,0.15)",
                                            color: a.testType === "listening" ? "var(--site-text)" : "#fcd34d" }}>
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
                                        <tr key={`${a.id}-expand`} style={{ background: "var(--site-border)" }}>
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
                                                        <span style={{ width: 22, height: 22, borderRadius: "50%", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 10, background: !userAns ? "var(--site-border)" : isCorrect ? "rgba(16,185,129,0.2)" : "rgba(239,68,68,0.2)", color: !userAns ? C.muted : isCorrect ? "#34d399" : "#f87171" }}>
                                                          {q.number}
                                                        </span>
                                                        <div style={{ flex: 1 }}>
                                                          <div style={{ color: C.sub, lineHeight: 1.4, marginBottom: 3 }}>{q.question.split("\n")[0].slice(0, 120)}</div>
                                                          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                                                            <span style={{ fontSize: 11, padding: "2px 8px", borderRadius: 5, background: !userAns ? "var(--site-border)" : isCorrect ? "rgba(16,185,129,0.12)" : "rgba(239,68,68,0.12)", color: !userAns ? C.muted : isCorrect ? "#34d399" : "#f87171" }}>
                                                              Your: {userAns || "(blank)"}
                                                            </span>
                                                            {!isCorrect && (
                                                              <span style={{ fontSize: 11, padding: "2px 8px", borderRadius: 5, background: "var(--site-border)", color: "var(--site-text)" }}>
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
            <TabHeader title="Student Accounts" subtitle="" C={C} quote={quote} />

            {/* Pending payment requests */}
            {premiumRequests.filter(r => r.status === "pending").length > 0 && (
              <div style={{ background: "rgba(234,179,8,0.06)", border: "1px solid rgba(234,179,8,0.3)", borderRadius: 14, padding: "18px 22px", marginBottom: 20 }}>
                <p style={{ fontSize: 11, fontWeight: 700, color: "#fde047", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 12 }}>
                  &#128176; Payment Requests ({premiumRequests.filter(r => r.status === "pending").length} pending)
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {premiumRequests.filter(r => r.status === "pending").map(req => (
                    <div key={req.id} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, padding: "10px 14px", background: C.card, border: `1px solid ${C.border}`, borderRadius: 10, flexWrap: "wrap" }}>
                      <div>
                        <span style={{ fontWeight: 700, color: C.text }}>{req.studentName}</span>
                        <span style={{ color: C.muted, fontSize: 13 }}> requested </span>
                        <span style={{ fontWeight: 700, color: "#22c55e" }}>{req.requestedCredits} essays</span>
                        <span style={{ color: C.muted, fontSize: 12, marginLeft: 8 }}>
                          {new Date(req.createdAt).toLocaleDateString("en-GB", { day: "numeric", month: "short", hour: "2-digit", minute: "2-digit" })}
                        </span>
                      </div>
                      <div style={{ display: "flex", gap: 6 }}>
                        <button onClick={() => handleReviewRequest(req, true)}
                          style={{ padding: "6px 14px", borderRadius: 8, border: "none", background: "#22c55e", color: "#fff", fontSize: 12, fontWeight: 700, cursor: "pointer" }}>
                          &#10003; Approve
                        </button>
                        <button onClick={() => handleReviewRequest(req, false)}
                          style={{ padding: "6px 14px", borderRadius: 8, border: `1px solid ${C.border}`, background: "transparent", color: C.muted, fontSize: 12, fontWeight: 600, cursor: "pointer" }}>
                          Reject
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

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
                style={{ display: "flex", alignItems: "center", gap: 6, padding: "10px 18px", background: "var(--site-card-2)", border: "none", borderRadius: 10, color: "var(--site-text)", fontSize: 13, fontWeight: 600, cursor: "pointer" }}>
                <Plus size={14} /> Create Student Account
              </button>

              {/* Created credentials display */}
              {createdStudent && (
                <div style={{ marginTop: 16, padding: "16px", background: "rgba(16,185,129,0.08)", border: "1px solid rgba(16,185,129,0.25)", borderRadius: 12 }}>
                  <p style={{ fontSize: 12, fontWeight: 700, color: "#34d399", marginBottom: 10 }}>✓ Account created for {createdStudent.name} {createdStudent.surname}</p>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
                    {[{ label: "Username", val: createdStudent.username }, { label: "Password", val: createdStudent.password }].map(item => (
                      <div key={item.label} style={{ padding: "10px 14px", background: "var(--site-border)", borderRadius: 9, border: `1px solid ${C.border}` }}>
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
                        {["Name", "Username", "Password", "Group", "Streak", "Created", "Last Seen", ""].map(h => (
                          <th key={h} style={{ padding: "10px 14px", textAlign: "left", fontSize: 11, fontWeight: 700, color: C.muted, textTransform: "uppercase", letterSpacing: "0.05em", borderBottom: `1px solid ${C.border}` }}>{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {students.filter(s => !studentSearch || `${s.name} ${s.surname} ${s.username} ${s.group_name}`.toLowerCase().includes(studentSearch.toLowerCase())).map((s, i) => (
                        <React.Fragment key={s.id}>
                        <tr style={{ background: i % 2 === 0 ? "transparent" : "var(--site-border)", borderBottom: editingStudentId === s.id ? "none" : `1px solid ${C.border}` }}>
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
                          <td style={{ padding: "12px 14px" }}>
                            {(() => {
                              const { streak, active } = computeStreakForStudent(attempts, s.id);
                              if (streak === 0) return <span style={{ fontSize: 12, color: C.muted }}>—</span>;
                              return (
                                <span style={{ display: "inline-flex", alignItems: "center", gap: 5, fontSize: 13, fontWeight: 700, color: active ? "#fb923c" : C.muted }}>
                                  {active ? "🔥" : "💤"} {streak}
                                </span>
                              );
                            })()}
                          </td>
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
                                  background: editingStudentId === s.id ? C.accentLight : "linear-gradient(135deg,var(--site-border),rgba(109,40,217,0.2))",
                                  border: `1.5px solid ${editingStudentId === s.id ? C.accent : "var(--site-border-strong)"}`,
                                  borderRadius: 8, color: C.accent, fontSize: 12, fontWeight: 700, cursor: "pointer" }}>
                                <Pencil size={12} /> {editingStudentId === s.id ? "Cancel" : "Edit"}
                              </button>
                              <button onClick={() => handleToggleBypass(s.id, !!s.anticheatBypass)}
                                title={s.anticheatBypass
                                  ? "Bypass ON — anti-cheat doesn't cancel their tests. Click to revoke."
                                  : "Grant anti-cheat bypass — their tests won't cancel on focus loss."}
                                style={{ display: "flex", alignItems: "center", gap: 4, padding: "7px 12px",
                                  background: s.anticheatBypass ? "rgba(251,146,60,0.12)" : "rgba(100,116,139,0.08)",
                                  border: `1px solid ${s.anticheatBypass ? "rgba(251,146,60,0.45)" : "var(--site-border-strong)"}`,
                                  borderRadius: 8,
                                  color: s.anticheatBypass ? "#fb923c" : C.muted,
                                  fontSize: 12, fontWeight: 600, cursor: "pointer" }}>
                                <Shield size={12} /> {s.anticheatBypass ? "Bypass ON" : "Bypass"}
                              </button>
                              <button onClick={() => handleAddCredits(s.id, s.gradingCredits ?? 0)}
                                title={`${(s.gradingCredits ?? 0) + 2} total essays (${s.gradingCredits ?? 0} purchased + 2 free). Click to add more.`}
                                style={{ display: "flex", alignItems: "center", gap: 4, padding: "7px 12px",
                                  background: (s.gradingCredits ?? 0) > 0 ? "rgba(34,197,94,0.12)" : "rgba(100,116,139,0.08)",
                                  border: `1px solid ${(s.gradingCredits ?? 0) > 0 ? "rgba(34,197,94,0.45)" : "var(--site-border-strong)"}`,
                                  borderRadius: 8,
                                  color: (s.gradingCredits ?? 0) > 0 ? "#22c55e" : C.muted,
                                  fontSize: 12, fontWeight: 600, cursor: "pointer" }}>
                                ✎ {(s.gradingCredits ?? 0) > 0 ? `${s.gradingCredits} credits` : "Add credits"}
                              </button>
                              <button onClick={() => handleDeleteStudent(s.id)}
                                style={{ display: "flex", alignItems: "center", gap: 4, padding: "7px 12px", background: "rgba(239,68,68,0.08)", border: `1px solid rgba(239,68,68,0.3)`, borderRadius: 8, color: C.danger, fontSize: 12, fontWeight: 600, cursor: "pointer" }}>
                                <Trash2 size={12} /> Delete
                              </button>
                            </div>
                          </td>
                        </tr>
                        {isRootAdmin && expandedAccessInfoFor === s.id && (
                          <tr key={`${s.id}-access`} style={{ borderBottom: `1px solid ${C.border}`, background: "var(--site-border)" }}>
                            <td colSpan={8} style={{ padding: "14px 18px" }}>
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
                          <tr key={`${s.id}-edit`} style={{ borderBottom: `2px solid ${C.accent}`, background: "var(--site-border)" }}>
                            <td colSpan={8} style={{ padding: "20px 18px" }}>
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
                                  style={{ display: "flex", alignItems: "center", gap: 5, padding: "8px 16px", background: "var(--site-card-2)", border: "none", borderRadius: 8, color: "var(--site-text)", fontSize: 13, fontWeight: 600, cursor: "pointer" }}>
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
                  style={{ display: "flex", alignItems: "center", gap: 6, padding: "7px 14px", background: "var(--site-border)", border: `1px solid ${C.border}`, borderRadius: 9, color: C.muted, fontSize: 13, cursor: "pointer", fontWeight: 600, marginBottom: 22 }}>
                  ← Back to Tests
                </button>
                <div style={{ marginBottom: 20 }}>
                  <h1 style={{ fontSize: 20, fontWeight: 800, color: C.text, marginBottom: 4 }}>{answerKeyTest.title} — Answer Key</h1>
                  <div style={{ display: "flex", gap: 10 }}>
                    <button onClick={() => router.push(`/student/test/${answerKeyTest.id}?practice=1`)}
                      style={{ padding: "8px 18px", background: "var(--site-card-2)", color: "var(--site-text)", fontWeight: 700, fontSize: 13, border: "none", borderRadius: 9, cursor: "pointer" }}>
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
              <TabHeader title="Tests" subtitle="" C={C} quote={quote} />
              <div style={{ display: "flex", gap: 8, marginBottom: 24 }}>
                {[{ t: "reading" as const, Icon: BookOpen, label: "Reading" }, { t: "listening" as const, Icon: Headphones, label: "Listening" }].map(({ t, Icon, label }) => (
                  <button key={t} onClick={() => { setTestsTypeFilter(t); setTestsSelectedBook(null); }}
                    style={{ display: "flex", alignItems: "center", gap: 7, padding: "9px 18px", borderRadius: 10, border: "none", cursor: "pointer", fontWeight: 600, fontSize: 13,
                      background: testsTypeFilter === t ? C.accent : C.card, color: testsTypeFilter === t ? "var(--site-bg)" : C.muted }}>
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
                        style={{ display: "flex", alignItems: "center", gap: 14, padding: "14px 16px", background: available ? C.card : "var(--site-border)", border: `1px solid ${available ? C.border : "var(--site-border)"}`, borderRadius: 12, cursor: available ? "pointer" : "default" }}>
                        <div style={{ width: 38, height: 38, borderRadius: 10, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: 15, background: available ? "var(--site-card-2)" : "var(--site-border)", color: available ? "var(--site-text)" : "var(--site-border-strong)" }}>{n}</div>
                        <div style={{ flex: 1 }}>
                          <div style={{ fontSize: 13, fontWeight: 700, color: available ? C.text : "var(--site-border-strong)", marginBottom: 2 }}>Cambridge IELTS {n}</div>
                          <div style={{ fontSize: 11, color: available ? C.muted : "var(--site-border-strong)" }}>{available ? `${bookTests.length} test${bookTests.length !== 1 ? "s" : ""}` : "Coming soon"}</div>
                        </div>
                        {available && <ChevronRight size={14} color={C.muted} />}
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div>
                  <button onClick={() => setTestsSelectedBook(null)}
                    style={{ display: "flex", alignItems: "center", gap: 6, padding: "7px 14px", background: "var(--site-border)", border: `1px solid ${C.border}`, borderRadius: 9, color: C.muted, fontSize: 13, cursor: "pointer", fontWeight: 600, marginBottom: 20 }}>
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
                            style={{ flex: 1, padding: "8px", background: C.accentLight, color: C.accent, fontWeight: 700, fontSize: 12, border: `1px solid var(--site-border-strong)`, borderRadius: 9, cursor: "pointer" }}>
                            Answer Key
                          </button>
                          <button onClick={() => router.push(`/student/test/${test.id}?practice=1`)}
                            style={{ flex: 1, padding: "8px", background: "var(--site-card-2)", color: "var(--site-text)", fontWeight: 700, fontSize: 12, border: "none", borderRadius: 9, cursor: "pointer" }}>
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
                          <td style={{ padding: "11px 14px" }}><span style={{ fontSize: 11, padding: "2px 8px", borderRadius: 20, fontWeight: 600, background: a.testType === "listening" ? "var(--site-border)" : "rgba(245,158,11,0.15)", color: a.testType === "listening" ? "var(--site-text)" : "#fcd34d" }}>{a.testType}</span></td>
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
            background: "var(--site-border)",
            border: `1px solid ${C.border}`,
            borderRadius: 10, color: C.text, fontSize: 14, outline: "none",
            fontFamily: "inherit",
          };
          return (
            <div style={{ maxWidth: 640 }}>
              <TabHeader title="My Profile" subtitle="" C={C} quote={quote} />

              {/* Identity */}
              <div style={{ padding: "18px 20px", background: C.card, border: `1px solid ${C.border}`, borderRadius: 14, marginBottom: 16, display: "flex", alignItems: "center", gap: 16 }}>
                <div style={{ width: 52, height: 52, borderRadius: "50%", background: "var(--site-card-2)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <UserCircle2 size={26} color="var(--site-text)" />
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
                    style={{ justifySelf: "start", padding: "10px 22px", background: ownPwSaving || !ownCurrPw || !ownNewPw ? "var(--site-border)" : "var(--site-card-2)", color: "var(--site-text)", fontWeight: 700, fontSize: 13, border: "none", borderRadius: 9, cursor: ownPwSaving || !ownCurrPw || !ownNewPw ? "not-allowed" : "pointer" }}>
                    {ownPwSaving ? "Updating…" : "Update password"}
                  </button>
                </form>
              </div>
            </div>
          );
        })()}

        {/* ══════════════════ WRITING SUBMISSIONS ══════════════════ */}
        {activeTab === "writing" && (
          <div>
            <TabHeader title="Writing Submissions" subtitle="" C={C} quote={quote} />
            <WritingSubmissionsView C={C} />
          </div>
        )}

        {/* ══════════════════ TEACHERS TAB ══════════════════ */}
        {activeTab === "teachers" && canManageTeachers && (
          <div style={{ maxWidth: 900 }}>
            <TabHeader title="Manage Teachers" subtitle="" C={C} quote={quote} />

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
                  style={{ alignSelf: "flex-start", display: "flex", alignItems: "center", gap: 6, padding: "10px 18px", background: "var(--site-card-2)", border: "none", borderRadius: 10, color: "var(--site-text)", fontSize: 13, fontWeight: 600, cursor: "pointer" }}>
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
                const isProtected = !!t.isRoot && !isRootAdmin;
                return (
                <div key={t.id} style={{ borderBottom: `1px solid ${C.border}` }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 16px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <div style={{ width: 34, height: 34, borderRadius: "50%", background: C.accentLight, display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <Shield size={14} color={C.accent} />
                      </div>
                      <div>
                        <div style={{ fontWeight: 600, fontSize: 14, color: C.text }}>{t.username}</div>
                        {t.isRoot && <div style={{ fontSize: 11, color: "#f59e0b" }}>Root</div>}
                        <div style={{ fontSize: 11, color: C.muted, marginTop: 2 }}>Last seen: {fmtLastSeen(t.lastAccessedAt)}</div>
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
                      <button onClick={() => handleDeleteTeacher(t.id)} disabled={isProtected || t.isRoot}
                        style={{ display: "flex", alignItems: "center", gap: 5, padding: "6px 12px", background: "transparent", border: `1px solid ${C.border}`, borderRadius: 8, color: (isProtected || t.isRoot) ? C.muted : C.danger, fontSize: 12, fontWeight: 600, cursor: (isProtected || t.isRoot) ? "not-allowed" : "pointer", opacity: (isProtected || t.isRoot) ? 0.35 : 1 }}>
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
                          style={{ padding: "7px 14px", background: "var(--site-card-2)", border: "none", borderRadius: 8, color: "var(--site-text)", fontSize: 13, fontWeight: 600, cursor: "pointer" }}>
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


// Reusable tab header: title + subtitle on the left, rotating quote in
// the middle, thin divider under the row. Matches the Results tab
// header so every admin page feels visually consistent.
function TabHeader({ title, subtitle, C, quote }: {
  title: string;
  subtitle: string;
  C: { text: string; muted: string; sub: string; border: string; [k: string]: string };
  quote: { text: string; author?: string } | null;
}) {
  return (
    <div style={{
      display: "flex", alignItems: "center", justifyContent: "space-between",
      gap: 20, marginBottom: 24, paddingBottom: 18,
      borderBottom: `1px solid ${C.border}`, flexWrap: "wrap",
    }}>
      <div style={{ flexShrink: 0 }}>
        <h1 style={{
          fontFamily: `"Fraunces", "Iowan Old Style", Georgia, serif`,
          fontSize: 30, fontWeight: 500, letterSpacing: "-0.015em",
          color: C.text, marginBottom: 4, lineHeight: 1.15,
        }}>{title}</h1>
        <p style={{ fontSize: 13, color: C.muted }}>{subtitle}</p>
      </div>
      {quote && (
        <figure style={{
          margin: 0, flex: 1, minWidth: 260, maxWidth: 620,
          padding: "8px 18px",
          borderLeft: "2px solid var(--site-border-strong)",
        }}>
          <blockquote style={{
            margin: 0, fontSize: 13, color: C.sub,
            lineHeight: 1.5, fontStyle: "italic", fontWeight: 300,
          }}>
            &ldquo;{quote.text}&rdquo;
          </blockquote>
          {quote.author && (
            <figcaption style={{
              marginTop: 4, fontSize: 10, letterSpacing: "0.18em",
              textTransform: "uppercase", color: C.muted, fontWeight: 600,
            }}>
              — {quote.author}
            </figcaption>
          )}
        </figure>
      )}
    </div>
  );
}


const CORRECTION_TAGS: Record<Correction["type"], { bg: string; fg: string; label: string }> = {
  grammar:     { bg: "rgba(239,68,68,0.15)",  fg: "#fca5a5", label: "Grammar" },
  vocabulary:  { bg: "rgba(59,130,246,0.15)", fg: "#93c5fd", label: "Vocabulary" },
  cohesion:    { bg: "rgba(168,85,247,0.15)", fg: "#d8b4fe", label: "Cohesion" },
  style:       { bg: "rgba(16,185,129,0.15)", fg: "#6ee7b7", label: "Style" },
  spelling:    { bg: "rgba(234,179,8,0.15)",  fg: "#fde047", label: "Spelling" },
  punctuation: { bg: "rgba(236,72,153,0.15)", fg: "#f9a8d4", label: "Punctuation" },
};

function openSubmissionPDF(s: WritingSubmission & { studentName: string }) {
  if (typeof window === "undefined") return;
  const w = window.open("", "_blank", "width=900,height=1100");
  if (!w) return;
  const esc = (x: string) =>
    x.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  const scores = [
    { k: "Task response", v: s.taskResponse },
    { k: "Coherence & cohesion", v: s.coherenceCohesion },
    { k: "Lexical resource", v: s.lexicalResource },
    { k: "Grammar range & accuracy", v: s.grammarAccuracy },
  ];
  const corrections = s.corrections ?? [];
  const feedback = s.feedback ?? [];
  const strengths = s.strengths ?? [];
  const nextSteps = s.nextSteps ?? [];
  const graded = s.gradedAt ? new Date(s.gradedAt) : new Date(s.createdAt);
  w.document.write(`<!doctype html>
<html><head><meta charset="utf-8"><title>${esc(s.studentName)} — Band ${s.overallBand?.toFixed(1) ?? "—"}</title>
<style>
  @page { margin: 14mm 14mm 16mm; }
  body { font-family: "Iowan Old Style", Georgia, serif; color: #111; font-size: 11.5pt; line-height: 1.55; padding: 20pt 24pt; }
  header { display: flex; justify-content: space-between; border-bottom: 1px solid #333; padding-bottom: 10pt; margin-bottom: 14pt; }
  .brand { font-family: ui-monospace, monospace; font-size: 10pt; letter-spacing: 0.14em; text-transform: uppercase; }
  .meta { font-size: 9.5pt; text-align: right; color: #333; }
  h1 { font-size: 22pt; font-weight: 600; margin: 0 0 18pt; letter-spacing: -0.01em; }
  h2 { font-size: 12pt; font-weight: 700; text-transform: uppercase; letter-spacing: 0.12em; margin: 16pt 0 6pt; color: #222; border-bottom: 1px solid #ccc; padding-bottom: 3pt; }
  h3 { font-size: 11pt; margin: 8pt 0 3pt; }
  section { margin-bottom: 10pt; page-break-inside: avoid; }
  table { width: 100%; border-collapse: collapse; font-size: 11pt; }
  td { padding: 4pt 0; border-bottom: 1px solid #eee; }
  td:last-child { text-align: right; font-family: ui-monospace, monospace; }
  .essay { white-space: pre-wrap; }
  .corr { margin: 6pt 0; padding: 6pt 0; border-bottom: 1px dashed #ccc; page-break-inside: avoid; }
  .tag { display: inline-block; font-size: 8.5pt; font-family: ui-monospace, monospace; letter-spacing: 0.1em; text-transform: uppercase; color: #555; border: 1px solid #999; padding: 1pt 6pt; border-radius: 999px; margin-bottom: 4pt; }
  .orig { color: #a00; font-size: 10.5pt; }
  .sugg { color: #070; font-size: 10.5pt; font-weight: 600; margin: 2pt 0; }
  .expl { color: #444; font-size: 10pt; font-style: italic; }
  ul { padding-left: 16pt; }
  footer { margin-top: 16pt; padding-top: 8pt; border-top: 1px solid #ccc; font-family: ui-monospace, monospace; font-size: 8.5pt; letter-spacing: 0.1em; text-transform: uppercase; color: #666; text-align: center; }
</style></head><body>
<header>
  <div class="brand">London · LC</div>
  <div class="meta">
    <div><b>${esc(s.studentName)}</b></div>
    <div>${graded.toLocaleString()}</div>
    <div>${s.wordCount} words</div>
  </div>
</header>
<h1>IELTS Writing Task 2 — Band ${s.overallBand?.toFixed(1) ?? "—"}</h1>
<section><h2>Prompt</h2><p>${esc(s.prompt)}</p></section>
<section><h2>Essay</h2><p class="essay">${esc(s.essay)}</p></section>
<section><h2>Scores</h2><table><tbody>
  ${scores.map(c => `<tr><td>${esc(c.k)}</td><td>${c.v?.toFixed(1) ?? "—"}</td></tr>`).join("")}
  <tr><td><b>Overall</b></td><td><b>${s.overallBand?.toFixed(1) ?? "—"}</b></td></tr>
</tbody></table></section>
${feedback.length ? `<section><h2>Examiner feedback</h2>${feedback.map(f => `<div><h3>${esc(f.criterion)}</h3><p>${esc(f.comment)}</p></div>`).join("")}</section>` : ""}
${corrections.length ? `<section><h2>Corrections (${corrections.length})</h2>${corrections.map(c => {
  const tag = (CORRECTION_TAGS[c.type] ?? CORRECTION_TAGS.style).label;
  return `<div class="corr"><div class="tag">${esc(tag)}</div><div class="orig">Original: &ldquo;${esc(c.original)}&rdquo;</div><div class="sugg">Suggested: &ldquo;${esc(c.suggestion)}&rdquo;</div><div class="expl">${esc(c.explanation)}</div></div>`;
}).join("")}</section>` : ""}
${strengths.length ? `<section><h2>What's working</h2><ul>${strengths.map(x => `<li>${esc(x)}</li>`).join("")}</ul></section>` : ""}
${nextSteps.length ? `<section><h2>Next steps</h2><ul>${nextSteps.map(x => `<li>${esc(x)}</li>`).join("")}</ul></section>` : ""}
<footer>Generated by London LC · Graded by Claude AI</footer>
<script>window.addEventListener('load', () => setTimeout(() => window.print(), 250));</script>
</body></html>`);
  w.document.close();
}

function WritingSubmissionsView({ C }: {
  C: { text: string; muted: string; sub: string; border: string; card: string; card2: string; [k: string]: string };
}) {
  const [subs, setSubs] = useState<(WritingSubmission & { studentName: string })[]>([]);
  const [loading, setLoading] = useState(true);
  const [expanded, setExpanded] = useState<string | null>(null);

  useEffect(() => {
    getAllSubmissions()
      .then(rows => setSubs(rows))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <div style={{ padding: 40, color: C.muted, fontSize: 13 }}>Loading submissions…</div>;
  }

  if (subs.length === 0) {
    return (
      <div style={{ padding: "60px 32px", textAlign: "center", color: C.muted, border: `1px dashed ${C.border}`, borderRadius: 14 }}>
        <p style={{ fontSize: 14 }}>No writing submissions yet.</p>
        <p style={{ fontSize: 12, marginTop: 6 }}>Submissions appear here once students finish an essay.</p>
      </div>
    );
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      {subs.map(s => {
        const isOpen = expanded === s.id;
        const date = new Date(s.createdAt).toLocaleString(undefined, {
          month: "short", day: "numeric", hour: "2-digit", minute: "2-digit",
        });
        const corrections = s.corrections ?? [];
        return (
          <div key={s.id} style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 12 }}>
            <button
              onClick={() => setExpanded(isOpen ? null : s.id)}
              style={{
                width: "100%", padding: "14px 18px", display: "flex", alignItems: "center", gap: 16,
                background: "transparent", border: "none", cursor: "pointer", textAlign: "left",
                color: C.text, fontFamily: "inherit",
              }}
            >
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 4 }}>{s.studentName}</div>
                <div style={{ fontSize: 12, color: C.muted, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                  {s.prompt}
                </div>
              </div>
              <div style={{ fontSize: 11, color: C.sub, fontFamily: "'JetBrains Mono', ui-monospace, monospace", letterSpacing: "0.04em" }}>
                {s.wordCount} words
              </div>
              <div style={{
                fontSize: 13, fontWeight: 700,
                padding: "4px 12px", borderRadius: 999,
                background: s.overallBand ? "rgba(16,185,129,0.15)" : "rgba(234,179,8,0.15)",
                color: s.overallBand ? "#10b981" : "#eab308",
                minWidth: 64, textAlign: "center",
              }}>
                {s.overallBand ? s.overallBand.toFixed(1) : "pending"}
              </div>
              <div style={{ fontSize: 11, color: C.muted, width: 110, textAlign: "right" }}>{date}</div>
              {isOpen ? <ChevronUp size={16} color={C.muted} /> : <ChevronDown size={16} color={C.muted} />}
            </button>

            {isOpen && (
              <div style={{ padding: "0 18px 18px", borderTop: `1px solid ${C.border}`, display: "flex", flexDirection: "column", gap: 18 }}>
                <div style={{ paddingTop: 14, display: "flex", justifyContent: "flex-end" }}>
                  {s.overallBand && (
                    <button
                      onClick={() => openSubmissionPDF(s)}
                      style={{
                        display: "inline-flex", alignItems: "center", gap: 6,
                        padding: "6px 12px", fontSize: 12, fontWeight: 500,
                        background: C.card2, border: `1px solid ${C.border}`, borderRadius: 8,
                        color: C.text, cursor: "pointer", fontFamily: "inherit",
                      }}
                    >
                      <Download size={12} /> Download PDF
                    </button>
                  )}
                </div>

                <div>
                  <div style={{ fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: C.muted, marginBottom: 8, fontFamily: "'JetBrains Mono', ui-monospace, monospace" }}>Prompt</div>
                  <div style={{ fontSize: 13, color: C.text, lineHeight: 1.6 }}>{s.prompt}</div>
                </div>

                <div>
                  <div style={{ fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: C.muted, marginBottom: 8, fontFamily: "'JetBrains Mono', ui-monospace, monospace" }}>Essay</div>
                  <div style={{ fontSize: 13, color: C.text, lineHeight: 1.7, whiteSpace: "pre-line", background: C.card2, border: `1px solid ${C.border}`, borderRadius: 10, padding: "14px 16px", maxHeight: 360, overflowY: "auto" }}>
                    {s.essay}
                  </div>
                </div>

                {s.overallBand && (
                  <div>
                    <div style={{ fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: C.muted, marginBottom: 8, fontFamily: "'JetBrains Mono', ui-monospace, monospace" }}>AI Grading</div>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 10, marginBottom: 14 }}>
                      {[
                        { label: "Task Response", val: s.taskResponse },
                        { label: "Coherence", val: s.coherenceCohesion },
                        { label: "Lexical", val: s.lexicalResource },
                        { label: "Grammar", val: s.grammarAccuracy },
                      ].map(k => (
                        <div key={k.label} style={{ padding: "10px 12px", background: C.card2, border: `1px solid ${C.border}`, borderRadius: 8 }}>
                          <div style={{ fontSize: 9, color: C.muted, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 4 }}>{k.label}</div>
                          <div style={{ fontSize: 18, fontWeight: 600, color: C.text }}>{k.val?.toFixed(1) ?? "—"}</div>
                        </div>
                      ))}
                    </div>
                    {s.feedback && s.feedback.length > 0 && (
                      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                        {s.feedback.map((f, i) => (
                          <div key={i} style={{ padding: "12px 14px", background: C.card2, border: `1px solid ${C.border}`, borderRadius: 8 }}>
                            <div style={{ fontSize: 10, color: C.muted, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 6, fontWeight: 600 }}>{f.criterion}</div>
                            <div style={{ fontSize: 13, color: C.text, lineHeight: 1.6 }}>{f.comment}</div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {corrections.length > 0 && (
                  <div>
                    <div style={{ fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: C.muted, marginBottom: 8, fontFamily: "'JetBrains Mono', ui-monospace, monospace" }}>
                      Line-by-line corrections · {corrections.length}
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                      {corrections.map((c, i) => {
                        const tag = CORRECTION_TAGS[c.type] ?? CORRECTION_TAGS.style;
                        return (
                          <div key={i} style={{ padding: "12px 14px", background: C.card2, border: `1px solid ${C.border}`, borderRadius: 8 }}>
                            <div style={{
                              display: "inline-block",
                              fontSize: 9, letterSpacing: "0.12em", textTransform: "uppercase",
                              padding: "2px 8px", borderRadius: 999,
                              background: tag.bg, color: tag.fg, marginBottom: 8,
                              fontFamily: "'JetBrains Mono', ui-monospace, monospace",
                            }}>{tag.label}</div>
                            <div style={{ fontSize: 13, color: C.muted, lineHeight: 1.55, marginBottom: 4, textDecoration: "line-through" }}>
                              {c.original}
                            </div>
                            <div style={{ fontSize: 13, color: C.text, lineHeight: 1.55, fontWeight: 500, marginBottom: 6 }}>
                              → {c.suggestion}
                            </div>
                            <div style={{ fontSize: 12, color: C.sub, lineHeight: 1.55, fontStyle: "italic" }}>
                              {c.explanation}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {(s.strengths?.length || s.nextSteps?.length) ? (
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                    {s.strengths && s.strengths.length > 0 && (
                      <div style={{ padding: "12px 14px", background: C.card2, border: `1px solid ${C.border}`, borderRadius: 8 }}>
                        <div style={{ fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: C.muted, marginBottom: 8, fontFamily: "'JetBrains Mono', ui-monospace, monospace" }}>What's working</div>
                        <ul style={{ margin: 0, paddingLeft: 16, fontSize: 13, color: C.text, lineHeight: 1.6 }}>
                          {s.strengths.map((x, i) => <li key={i}>{x}</li>)}
                        </ul>
                      </div>
                    )}
                    {s.nextSteps && s.nextSteps.length > 0 && (
                      <div style={{ padding: "12px 14px", background: C.card2, border: `1px solid ${C.border}`, borderRadius: 8 }}>
                        <div style={{ fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: C.muted, marginBottom: 8, fontFamily: "'JetBrains Mono', ui-monospace, monospace" }}>Next steps</div>
                        <ul style={{ margin: 0, paddingLeft: 16, fontSize: 13, color: C.text, lineHeight: 1.6 }}>
                          {s.nextSteps.map((x, i) => <li key={i}>{x}</li>)}
                        </ul>
                      </div>
                    )}
                  </div>
                ) : null}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
