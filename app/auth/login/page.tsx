"use client";
import { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { Eye, EyeOff, BookOpen, ChevronRight, User, Lock, Shield } from "lucide-react";
import { saveSession, getSession, findTeacher, loginStudent } from "@/lib/store";
import Link from "next/link";

function LoginContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isAdmin, setIsAdmin] = useState(searchParams.get("admin") === "true");
  const [form, setForm] = useState({ username: "", password: "" });
  const [showPw, setShowPw] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const s = getSession();
    if (s) router.push(s.isAdmin ? "/admin/dashboard" : "/student/dashboard");
  }, [router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    await new Promise(r => setTimeout(r, 400));

    if (isAdmin) {
      const teacher = findTeacher(form.username.trim(), form.password);
      if (teacher) {
        saveSession({ id: teacher.id, name: teacher.username, surname: "", group_name: "admin", isAdmin: true, username: teacher.username });
        router.push("/admin/dashboard");
      } else { setError("Incorrect username or password."); setLoading(false); }
    } else {
      const student = loginStudent(form.username.trim(), form.password);
      if (student) {
        saveSession({ id: student.id, name: student.name, surname: student.surname, group_name: student.group_name, isAdmin: false });
        router.push("/student/dashboard");
      } else { setError("Incorrect username or password. No account? Sign up below."); setLoading(false); }
    }
    setLoading(false);
  };

  const inputStyle = {
    width: "100%", padding: "11px 14px 11px 36px",
    background: "rgba(255,255,255,0.07)", border: "1.5px solid rgba(255,255,255,0.1)",
    borderRadius: 10, color: "#fff", fontSize: 14, outline: "none", boxSizing: "border-box" as const,
  };

  return (
    <div style={{ minHeight: "100vh", background: "#0a051f", display: "flex", flexDirection: "column", fontFamily: "Inter, system-ui, sans-serif" }}>
      {/* Nav */}
      <div style={{ display: "flex", alignItems: "center", padding: "0 24px", height: 56, borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
        <Link href="/" style={{ textDecoration: "none" }}>
          <span style={{ fontWeight: 900, fontSize: 19, color: "#fff", letterSpacing: "-0.3px", fontFamily: "Inter, system-ui, sans-serif" }}>London <span style={{ color: "#a78bfa" }}>LC</span></span>
        </Link>
      </div>

      <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "24px" }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
          style={{ width: "100%", maxWidth: 420 }}>

          <div style={{ background: "#140b35", border: "1px solid rgba(124,58,237,0.2)", borderRadius: 20, padding: "36px 28px", boxShadow: "0 24px 64px rgba(0,0,0,0.6)" }}>
            {/* Brand */}
            <div style={{ textAlign: "center", marginBottom: 24 }}>
              <div style={{ marginBottom: 12, display: "flex", justifyContent: "center" }}>
                <span style={{ fontWeight: 900, fontSize: 26, color: "#fff", letterSpacing: "-0.5px", fontFamily: "Inter, system-ui, sans-serif" }}>London <span style={{ color: "#a78bfa" }}>LC</span></span>
              </div>
              <h1 style={{ color: "#fff", fontWeight: 800, fontSize: 21, marginBottom: 3 }}>
                {isAdmin ? "Teacher Access" : "Sign In"}
              </h1>
              <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 13 }}>
                {isAdmin ? "Enter your teacher credentials" : "Welcome back — enter your details"}
              </p>
            </div>

            {/* Tab toggle */}
            <div style={{ display: "flex", background: "rgba(255,255,255,0.06)", borderRadius: 10, padding: 4, marginBottom: 22, gap: 4 }}>
              {[{ label: "Student", icon: User, admin: false }, { label: "Teacher", icon: Shield, admin: true }].map(t => (
                <button key={t.label} onClick={() => { setIsAdmin(t.admin); setError(""); setForm({ username: "", password: "" }); }}
                  style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 6, padding: "9px", borderRadius: 8, border: "none", cursor: "pointer", fontWeight: 600, fontSize: 13, transition: "all 0.2s",
                    background: isAdmin === t.admin ? "linear-gradient(135deg,#7c3aed,#6d28d9)" : "transparent",
                    color: isAdmin === t.admin ? "#fff" : "rgba(255,255,255,0.4)" }}>
                  <t.icon size={13} /> {t.label}
                </button>
              ))}
            </div>

            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 14 }}
              autoComplete="on">
              {/* Username */}
              <div>
                <label style={{ display: "block", fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.4)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 6 }}>
                  Username
                </label>
                <div style={{ position: "relative" }}>
                  <User size={14} color="rgba(255,255,255,0.3)" style={{ position: "absolute", left: 13, top: "50%", transform: "translateY(-50%)" }} />
                  <input
                    type="text"
                    name="username"
                    autoComplete="username"
                    placeholder={isAdmin ? "Teacher username" : "Your username"}
                    value={form.username}
                    onChange={e => setForm({ ...form, username: e.target.value })}
                    style={inputStyle}
                    onFocus={e => e.currentTarget.style.borderColor = "#7c3aed"}
                    onBlur={e => e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"}
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label style={{ display: "block", fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.4)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 6 }}>
                  Password
                </label>
                <div style={{ position: "relative" }}>
                  <Lock size={14} color="rgba(255,255,255,0.3)" style={{ position: "absolute", left: 13, top: "50%", transform: "translateY(-50%)" }} />
                  <input
                    type={showPw ? "text" : "password"}
                    name="password"
                    autoComplete="current-password"
                    placeholder="Password"
                    value={form.password}
                    onChange={e => setForm({ ...form, password: e.target.value })}
                    style={{ ...inputStyle, padding: "11px 40px 11px 36px" }}
                    onFocus={e => e.currentTarget.style.borderColor = "#7c3aed"}
                    onBlur={e => e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"}
                  />
                  <button type="button" onClick={() => setShowPw(!showPw)}
                    style={{ position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)", background: "none", border: "none", cursor: "pointer", color: "rgba(255,255,255,0.3)", padding: 0 }}>
                    {showPw ? <EyeOff size={15} /> : <Eye size={15} />}
                  </button>
                </div>
              </div>

              {error && (
                <div style={{ padding: "10px 14px", background: "rgba(239,68,68,0.12)", border: "1px solid rgba(239,68,68,0.3)", borderRadius: 9, color: "#fca5a5", fontSize: 13 }}>
                  {error}
                </div>
              )}

              <button type="submit" disabled={loading}
                style={{ marginTop: 2, display: "flex", alignItems: "center", justifyContent: "center", gap: 8, padding: "13px", background: loading ? "rgba(124,58,237,0.5)" : "linear-gradient(135deg,#7c3aed,#6d28d9)", color: "#fff", fontWeight: 700, fontSize: 15, border: "none", borderRadius: 12, cursor: loading ? "not-allowed" : "pointer", boxShadow: "0 4px 15px rgba(124,58,237,0.4)", transition: "all 0.2s" }}>
                {loading
                  ? <><span style={{ width: 15, height: 15, border: "2px solid rgba(255,255,255,0.3)", borderTopColor: "#fff", borderRadius: "50%", display: "inline-block", animation: "spin 0.7s linear infinite" }} /> Signing in...</>
                  : <>Sign In <ChevronRight size={16} /></>
                }
              </button>
            </form>

            {/* Info for students */}
            {!isAdmin && (
              <div style={{ marginTop: 18, textAlign: "center", fontSize: 13, color: "rgba(255,255,255,0.35)" }}>
                Your teacher will provide your username and password.
              </div>
            )}
          </div>

          <p style={{ textAlign: "center", fontSize: 12, color: "rgba(255,255,255,0.2)", marginTop: 16 }}>
            Your results are saved for your teacher to review
          </p>
        </motion.div>
      </div>
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}

export default function LoginPage() {
  return <Suspense><LoginContent /></Suspense>;
}
