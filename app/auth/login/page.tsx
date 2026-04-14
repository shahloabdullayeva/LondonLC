"use client";
import { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Eye, EyeOff, ChevronRight } from "lucide-react";
import { saveSession, getSession, findTeacher, loginStudent, recordStudentAccess, recordTeacherAccess } from "@/lib/store";
import Link from "next/link";

// Minimalist dark sign-in. Matches the landing page aesthetic — no purple
// gradients, no glass cards. Just typography, a clean form, and one
// monochrome submit button.
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

  const captureAndRecordAccess = (id: string, isAdminLogin: boolean) => {
    const deviceInfo = { userAgent: navigator.userAgent, platform: navigator.platform, language: navigator.language };
    fetch("https://api.ipify.org?format=json")
      .then(r => r.json()).then((d: { ip: string }) => d.ip).catch(() => "")
      .then(ip => {
        if (isAdminLogin) recordTeacherAccess(id, ip, deviceInfo);
        else recordStudentAccess(id, ip, deviceInfo);
      });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    await new Promise(r => setTimeout(r, 400));

    if (isAdmin) {
      const teacher = await findTeacher(form.username.trim(), form.password);
      if (teacher) {
        saveSession({ id: teacher.id, name: teacher.username, surname: "", group_name: "admin", isAdmin: true, username: teacher.username });
        captureAndRecordAccess(teacher.id, true);
        router.push("/admin/dashboard");
      } else { setError("Incorrect username or password."); setLoading(false); }
    } else {
      const student = await loginStudent(form.username.trim(), form.password);
      if (student) {
        saveSession({ id: student.id, name: student.name, surname: student.surname, group_name: student.group_name, isAdmin: false });
        captureAndRecordAccess(student.id, false);
        router.push("/student/dashboard");
      } else { setError("Incorrect username or password."); setLoading(false); }
    }
    setLoading(false);
  };

  const inputBase: React.CSSProperties = {
    width: "100%",
    padding: "13px 14px",
    background: "transparent",
    border: "none",
    borderBottom: "1px solid rgba(255,255,255,0.15)",
    borderRadius: 0,
    color: "#fff", fontSize: 15, outline: "none",
    fontFamily: "inherit", transition: "border-color 0.2s",
  };

  return (
    <div style={{
      minHeight: "100vh", background: "#0a0a0a", color: "#e5e5e5",
      fontFamily: "Inter, system-ui, sans-serif",
      display: "flex", flexDirection: "column",
    }}>
      {/* Subtle glow */}
      <div style={{
        position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0,
        background: "radial-gradient(ellipse at 50% -10%, rgba(120,100,180,0.06) 0%, transparent 60%)",
      }} />

      <nav style={{
        position: "relative", zIndex: 10,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "22px 40px",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}>
        <Link href="/" style={{
          textDecoration: "none", display: "inline-flex", alignItems: "baseline", gap: 4,
          fontFamily: `"Fraunces", "Iowan Old Style", Georgia, serif`, fontWeight: 500,
          fontSize: 20, letterSpacing: "-0.01em", lineHeight: 1,
        }}>
          <span style={{ color: "#fff" }}>London</span>
          <span style={{ color: "rgba(255,255,255,0.4)", fontSize: 17 }}>·</span>
          <span style={{ color: "#c4b5fd" }}>LC</span>
        </Link>
        <Link href="/" style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", textDecoration: "none", fontWeight: 500 }}>
          ← Back home
        </Link>
      </nav>

      <main style={{
        position: "relative", zIndex: 5, flex: 1,
        display: "flex", alignItems: "center", justifyContent: "center", padding: "40px 32px",
      }}>
        <div style={{ width: "100%", maxWidth: 420 }}>
          <div style={{
            fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase",
            color: "rgba(255,255,255,0.3)", marginBottom: 18, fontWeight: 600,
          }}>
            {isAdmin ? "Teacher Access" : "Welcome back"}
          </div>
          <h1 style={{
            fontSize: "clamp(2rem, 5vw, 2.6rem)",
            fontWeight: 200, letterSpacing: "-0.015em",
            color: "#fff", lineHeight: 1.1, marginBottom: 40,
          }}>
            Sign <em style={{ fontStyle: "italic", fontWeight: 300, color: "rgba(255,255,255,0.75)" }}>in.</em>
          </h1>

          {/* Role toggle */}
          <div style={{
            display: "flex", gap: 22, marginBottom: 36,
            fontSize: 12, letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 600,
          }}>
            {[{ label: "Student", admin: false }, { label: "Teacher", admin: true }].map(t => (
              <button key={t.label} type="button"
                onClick={() => { setIsAdmin(t.admin); setError(""); setForm({ username: "", password: "" }); }}
                style={{
                  background: "none", border: "none", padding: 0, cursor: "pointer",
                  color: isAdmin === t.admin ? "#fff" : "rgba(255,255,255,0.35)",
                  borderBottom: `1px solid ${isAdmin === t.admin ? "#fff" : "transparent"}`,
                  paddingBottom: 6, letterSpacing: "inherit", fontFamily: "inherit",
                  transition: "color 0.2s, border-color 0.2s",
                }}>
                {t.label}
              </button>
            ))}
          </div>

          <form onSubmit={handleSubmit} autoComplete="on" style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <div>
              <label style={{ display: "block", fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", marginBottom: 6, fontWeight: 600 }}>
                Username
              </label>
              <input
                type="text" name="username" autoComplete="username"
                placeholder={isAdmin ? "Teacher username" : "Your username"}
                value={form.username}
                onChange={e => setForm({ ...form, username: e.target.value })}
                style={inputBase}
                onFocus={e => (e.currentTarget.style.borderBottomColor = "#fff")}
                onBlur={e => (e.currentTarget.style.borderBottomColor = "rgba(255,255,255,0.15)")}
              />
            </div>

            <div>
              <label style={{ display: "block", fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", marginBottom: 6, fontWeight: 600 }}>
                Password
              </label>
              <div style={{ position: "relative" }}>
                <input
                  type={showPw ? "text" : "password"} name="password" autoComplete="current-password"
                  placeholder="Password"
                  value={form.password}
                  onChange={e => setForm({ ...form, password: e.target.value })}
                  style={{ ...inputBase, paddingRight: 40 }}
                  onFocus={e => (e.currentTarget.style.borderBottomColor = "#fff")}
                  onBlur={e => (e.currentTarget.style.borderBottomColor = "rgba(255,255,255,0.15)")}
                />
                <button type="button" onClick={() => setShowPw(!showPw)}
                  style={{ position: "absolute", right: 4, top: "50%", transform: "translateY(-50%)", background: "none", border: "none", cursor: "pointer", color: "rgba(255,255,255,0.4)", padding: 6 }}>
                  {showPw ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            {error && (
              <div style={{ fontSize: 13, color: "#fca5a5", borderLeft: "2px solid #fca5a5", paddingLeft: 12 }}>
                {error}
              </div>
            )}

            <button type="submit" disabled={loading}
              style={{
                marginTop: 10,
                display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 10,
                padding: "14px",
                background: loading ? "rgba(255,255,255,0.3)" : "#fff",
                color: "#0a0a0a", fontWeight: 600, fontSize: 13,
                letterSpacing: "0.15em", textTransform: "uppercase",
                border: "none", borderRadius: 999,
                cursor: loading ? "not-allowed" : "pointer",
                transition: "transform 0.15s",
              }}
              onMouseEnter={(e) => !loading && (e.currentTarget.style.transform = "translateY(-1px)")}
              onMouseLeave={(e) => !loading && (e.currentTarget.style.transform = "translateY(0)")}
            >
              {loading
                ? <><span style={{ width: 14, height: 14, border: "2px solid rgba(10,10,10,0.25)", borderTopColor: "#0a0a0a", borderRadius: "50%", display: "inline-block", animation: "spin 0.7s linear infinite" }} /> Signing in…</>
                : <>Sign in <ChevronRight size={14} /></>
              }
            </button>
          </form>

          {!isAdmin && (
            <p style={{ marginTop: 28, textAlign: "center", fontSize: 12, color: "rgba(255,255,255,0.3)" }}>
              Your teacher will provide your username and password.
            </p>
          )}
        </div>
      </main>

      <footer style={{
        position: "relative", zIndex: 5,
        padding: "24px 40px", textAlign: "center",
        fontSize: 12, letterSpacing: "0.1em", color: "rgba(255,255,255,0.3)",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}>
        © {new Date().getFullYear()} London Language Centre
      </footer>

      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}

export default function LoginPage() {
  return <Suspense><LoginContent /></Suspense>;
}
