"use client";
import { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { Eye, EyeOff, BookOpen, ChevronRight, User, Users, Lock, Shield } from "lucide-react";
import { saveSession, getSession, findTeacher } from "@/lib/store";

function LoginContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isAdmin, setIsAdmin] = useState(searchParams.get("admin") === "true");
  const [form, setForm] = useState({ name: "", surname: "", group: "", username: "", password: "" });
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
    await new Promise(r => setTimeout(r, 500));
    if (isAdmin) {
      const teacher = findTeacher(form.username.trim(), form.password);
      if (teacher) {
        saveSession({ id: teacher.id, name: teacher.username, surname: "", group_name: "admin", isAdmin: true, username: teacher.username });
        router.push("/admin/dashboard");
      } else { setError("Incorrect username or password."); setLoading(false); }
    } else {
      if (!form.name.trim() || !form.surname.trim() || !form.group.trim()) {
        setError("Please fill in all fields."); setLoading(false); return;
      }
      saveSession({ id: `${form.name}-${form.surname}-${Date.now()}`, name: form.name.trim(), surname: form.surname.trim(), group_name: form.group.trim(), isAdmin: false });
      router.push("/student/dashboard");
    }
    setLoading(false);
  };

  return (
    <div style={{ minHeight: "100vh", background: "#020817", display: "flex", flexDirection: "column", fontFamily: "Inter, system-ui, sans-serif" }}>
      {/* Nav */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 28px", height: 60, borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
        <a href="/" style={{ display: "flex", alignItems: "center", gap: 9, textDecoration: "none" }}>
          <div style={{ width: 32, height: 32, borderRadius: 9, background: "linear-gradient(135deg,#2563eb,#1d4ed8)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <BookOpen size={15} color="white" />
          </div>
          <span style={{ fontWeight: 800, fontSize: 17, color: "#fff" }}>London LC</span>
        </a>
      </div>

      {/* Centered content */}
      <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "24px" }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}
          style={{ width: "100%", maxWidth: 420 }}>

          {/* Card */}
          <div style={{ background: "#0b1530", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 20, padding: "36px 32px", boxShadow: "0 24px 64px rgba(0,0,0,0.6)" }}>

            {/* Logo top */}
            <div style={{ textAlign: "center", marginBottom: 28 }}>
              <div style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 56, height: 56, background: "linear-gradient(135deg,#2563eb,#1d4ed8)", borderRadius: "50%", marginBottom: 14, boxShadow: "0 6px 20px rgba(37,99,235,0.4)" }}>
                <BookOpen size={24} color="white" />
              </div>
              <h1 style={{ color: "#fff", fontWeight: 800, fontSize: 22, marginBottom: 4 }}>
                {isAdmin ? "Teacher Access" : "Welcome"}
              </h1>
              <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 13 }}>
                {isAdmin ? "Enter your admin password" : "Sign in to start practising"}
              </p>
            </div>

            {/* Tab toggle */}
            <div style={{ display: "flex", background: "rgba(255,255,255,0.06)", borderRadius: 10, padding: 4, marginBottom: 24, gap: 4 }}>
              {[{ label: "Student", icon: User, admin: false }, { label: "Teacher", icon: Shield, admin: true }].map(t => (
                <button key={t.label} onClick={() => { setIsAdmin(t.admin); setError(""); }}
                  style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 6, padding: "9px", borderRadius: 8, border: "none", cursor: "pointer", fontWeight: 600, fontSize: 13, transition: "all 0.2s",
                    background: isAdmin === t.admin ? "linear-gradient(135deg,#2563eb,#1d4ed8)" : "transparent",
                    color: isAdmin === t.admin ? "#fff" : "rgba(255,255,255,0.4)" }}>
                  <t.icon size={13} /> {t.label}
                </button>
              ))}
            </div>

            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {!isAdmin ? (
                <>
                  {[
                    { key: "name", label: "First Name", placeholder: "e.g. Sarah", icon: User },
                    { key: "surname", label: "Surname", placeholder: "e.g. Johnson", icon: User },
                    { key: "group", label: "Group Name / Code", placeholder: "e.g. IELTS-A or Group 3", icon: Users },
                  ].map(f => (
                    <div key={f.key}>
                      <label style={{ display: "block", fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.4)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 6 }}>{f.label}</label>
                      <div style={{ position: "relative" }}>
                        <f.icon size={14} color="rgba(255,255,255,0.3)" style={{ position: "absolute", left: 13, top: "50%", transform: "translateY(-50%)" }} />
                        <input type="text" placeholder={f.placeholder}
                          value={form[f.key as keyof typeof form]}
                          onChange={e => setForm({ ...form, [f.key]: e.target.value })}
                          style={{ width: "100%", padding: "11px 14px 11px 36px", background: "rgba(255,255,255,0.07)", border: "1.5px solid rgba(255,255,255,0.1)", borderRadius: 10, color: "#fff", fontSize: 14, outline: "none", boxSizing: "border-box" }}
                          onFocus={e => e.currentTarget.style.borderColor = "#2563eb"}
                          onBlur={e => e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"}
                        />
                      </div>
                    </div>
                  ))}
                </>
              ) : (
                <>
                  <div>
                    <label style={{ display: "block", fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.4)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 6 }}>Username</label>
                    <div style={{ position: "relative" }}>
                      <Shield size={14} color="rgba(255,255,255,0.3)" style={{ position: "absolute", left: 13, top: "50%", transform: "translateY(-50%)" }} />
                      <input type="text" placeholder="Teacher username"
                        value={form.username} onChange={e => setForm({ ...form, username: e.target.value })}
                        style={{ width: "100%", padding: "11px 14px 11px 36px", background: "rgba(255,255,255,0.07)", border: "1.5px solid rgba(255,255,255,0.1)", borderRadius: 10, color: "#fff", fontSize: 14, outline: "none", boxSizing: "border-box" }}
                        onFocus={e => e.currentTarget.style.borderColor = "#2563eb"}
                        onBlur={e => e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"}
                      />
                    </div>
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.4)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 6 }}>Password</label>
                    <div style={{ position: "relative" }}>
                      <Lock size={14} color="rgba(255,255,255,0.3)" style={{ position: "absolute", left: 13, top: "50%", transform: "translateY(-50%)" }} />
                      <input type={showPw ? "text" : "password"} placeholder="Teacher password"
                        value={form.password} onChange={e => setForm({ ...form, password: e.target.value })}
                        style={{ width: "100%", padding: "11px 40px 11px 36px", background: "rgba(255,255,255,0.07)", border: "1.5px solid rgba(255,255,255,0.1)", borderRadius: 10, color: "#fff", fontSize: 14, outline: "none", boxSizing: "border-box" }}
                        onFocus={e => e.currentTarget.style.borderColor = "#2563eb"}
                        onBlur={e => e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"}
                      />
                      <button type="button" onClick={() => setShowPw(!showPw)} style={{ position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)", background: "none", border: "none", cursor: "pointer", color: "rgba(255,255,255,0.3)", padding: 0 }}>
                        {showPw ? <EyeOff size={15} /> : <Eye size={15} />}
                      </button>
                    </div>
                  </div>
                </>
              )}

              {error && (
                <div style={{ padding: "10px 14px", background: "rgba(239,68,68,0.12)", border: "1px solid rgba(239,68,68,0.3)", borderRadius: 9, color: "#fca5a5", fontSize: 13 }}>
                  {error}
                </div>
              )}

              <button type="submit" disabled={loading}
                style={{ marginTop: 4, display: "flex", alignItems: "center", justifyContent: "center", gap: 8, padding: "13px", background: loading ? "rgba(37,99,235,0.5)" : "linear-gradient(135deg,#2563eb,#1d4ed8)", color: "#fff", fontWeight: 700, fontSize: 15, border: "none", borderRadius: 12, cursor: loading ? "not-allowed" : "pointer", boxShadow: "0 4px 15px rgba(37,99,235,0.4)", transition: "all 0.2s" }}>
                {loading
                  ? <><span style={{ width: 15, height: 15, border: "2px solid rgba(255,255,255,0.3)", borderTopColor: "#fff", borderRadius: "50%", display: "inline-block", animation: "spin 0.7s linear infinite" }} /> Signing in...</>
                  : <>{isAdmin ? "Access Dashboard" : "Start Practising"} <ChevronRight size={16} /></>
                }
              </button>
            </form>
          </div>

          <p style={{ textAlign: "center", fontSize: 12, color: "rgba(255,255,255,0.25)", marginTop: 16 }}>
            Your name and results are saved for your teacher to review
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
