"use client";
import { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Eye, EyeOff, ChevronRight } from "lucide-react";
import { saveSession, getSession, findTeacher, loginStudent, recordStudentAccess, recordTeacherAccess } from "@/lib/store";
import { supabase } from "@/lib/supabase";
import Brand from "@/components/Brand";
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
    if (s) router.push(s.isAdmin ? "/admin/dashboard" : "/student/home");
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
        saveSession({ id: student.id, name: student.name, surname: student.surname, group_name: student.group_name, isAdmin: false, anticheatBypass: !!student.anticheatBypass, isPremium: !!student.isPremium, gradingCredits: student.gradingCredits ?? 0 });
        captureAndRecordAccess(student.id, false);
        router.push("/student/home");
      } else { setError("Incorrect username or password."); setLoading(false); }
    }
    setLoading(false);
  };

  const inputBase: React.CSSProperties = {
    width: "100%",
    padding: "13px 14px",
    background: "transparent",
    border: "none",
    borderBottom: "1px solid var(--site-border-strong)",
    borderRadius: 0,
    color: "var(--site-text)", fontSize: 15, outline: "none",
    fontFamily: "inherit", transition: "border-color 0.2s",
  };

  return (
    <div style={{
      minHeight: "100vh", background: "var(--site-bg)", color: "#e5e5e5",
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
        borderBottom: "1px solid var(--site-border)",
      }}>
        <Brand href="/" size={20} />
        <Link href="/" style={{ fontSize: 13, marginRight: 52, color: "var(--site-text-muted)", textDecoration: "none", fontWeight: 500 }}>
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
            color: "var(--site-text-sub)", marginBottom: 18, fontWeight: 600,
          }}>
            {isAdmin ? "Teacher Access" : "Welcome back"}
          </div>
          <h1 style={{
            fontSize: "clamp(2rem, 5vw, 2.6rem)",
            fontWeight: 200, letterSpacing: "-0.015em",
            color: "var(--site-text)", lineHeight: 1.1, marginBottom: 40,
          }}>
            Sign <em style={{ fontStyle: "italic", fontWeight: 300, color: "var(--site-text-muted)" }}>in.</em>
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
                  color: isAdmin === t.admin ? "var(--site-text)" : "var(--site-text-sub)",
                  borderBottom: `1px solid ${isAdmin === t.admin ? "var(--site-text)" : "transparent"}`,
                  paddingBottom: 6, letterSpacing: "inherit", fontFamily: "inherit",
                  transition: "color 0.2s, border-color 0.2s",
                }}>
                {t.label}
              </button>
            ))}
          </div>

          <form onSubmit={handleSubmit} autoComplete="on" style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <div>
              <label style={{ display: "block", fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--site-text-sub)", marginBottom: 6, fontWeight: 600 }}>
                Username
              </label>
              <input
                type="text" name="username" autoComplete="username"
                placeholder={isAdmin ? "Teacher username" : "Your username"}
                value={form.username}
                onChange={e => setForm({ ...form, username: e.target.value })}
                style={inputBase}
                onFocus={e => (e.currentTarget.style.borderBottomColor = "var(--site-text)")}
                onBlur={e => (e.currentTarget.style.borderBottomColor = "var(--site-border-strong)")}
              />
            </div>

            <div>
              <label style={{ display: "block", fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--site-text-sub)", marginBottom: 6, fontWeight: 600 }}>
                Password
              </label>
              <div style={{ position: "relative" }}>
                <input
                  type={showPw ? "text" : "password"} name="password" autoComplete="current-password"
                  placeholder="Password"
                  value={form.password}
                  onChange={e => setForm({ ...form, password: e.target.value })}
                  style={{ ...inputBase, paddingRight: 40 }}
                  onFocus={e => (e.currentTarget.style.borderBottomColor = "var(--site-text)")}
                  onBlur={e => (e.currentTarget.style.borderBottomColor = "var(--site-border-strong)")}
                />
                <button type="button" onClick={() => setShowPw(!showPw)}
                  style={{ position: "absolute", right: 4, top: "50%", transform: "translateY(-50%)", background: "none", border: "none", cursor: "pointer", color: "var(--site-text-muted)", padding: 6 }}>
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
                background: loading ? "var(--site-text-sub)" : "var(--site-text)",
                color: "var(--site-bg)", fontWeight: 600, fontSize: 13,
                letterSpacing: "0.15em", textTransform: "uppercase",
                border: "none", borderRadius: 999,
                cursor: loading ? "not-allowed" : "pointer",
                transition: "transform 0.15s",
              }}
              onMouseEnter={(e) => !loading && (e.currentTarget.style.transform = "translateY(-1px)")}
              onMouseLeave={(e) => !loading && (e.currentTarget.style.transform = "translateY(0)")}
            >
              {loading
                ? <><span style={{ width: 14, height: 14, border: "2px solid rgba(10,10,10,0.25)", borderTopColor: "var(--site-bg)", borderRadius: "50%", display: "inline-block", animation: "spin 0.7s linear infinite" }} /> Signing in…</>
                : <>Sign in <ChevronRight size={14} /></>
              }
            </button>
          </form>

          {!isAdmin && (
            <div style={{ marginTop: 24, display: "flex", flexDirection: "column", gap: 16 }}>
              <Link href="/auth/reset" style={{ textAlign: "center", fontSize: 13, color: "var(--site-text-sub)", textDecoration: "none" }}>
                Forgot password?
              </Link>

              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ flex: 1, height: 1, background: "var(--site-border)" }} />
                <span style={{ fontSize: 11, color: "var(--site-text-sub)", textTransform: "uppercase", letterSpacing: "0.15em" }}>or</span>
                <div style={{ flex: 1, height: 1, background: "var(--site-border)" }} />
              </div>

              <button
                onClick={async () => {
                  await supabase.auth.signInWithOAuth({
                    provider: "google",
                    options: { redirectTo: `${window.location.origin}/auth/callback` },
                  });
                }}
                style={{
                  width: "100%", padding: "12px 16px", borderRadius: 999,
                  border: "1px solid var(--site-border-strong)",
                  background: "transparent", color: "var(--site-text)",
                  fontSize: 13, fontWeight: 500, cursor: "pointer",
                  display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18A10.96 10.96 0 001 12c0 1.77.42 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
                Sign in with Google
              </button>

              <p style={{ textAlign: "center", fontSize: 13, color: "var(--site-text-sub)" }}>
                Don&apos;t have an account?{" "}
                <Link href="/auth/signup" style={{ color: "var(--site-accent, #c4b5fd)", textDecoration: "none", fontWeight: 600 }}>Create one</Link>
              </p>
            </div>
          )}
        </div>
      </main>

      <footer style={{
        position: "relative", zIndex: 5,
        padding: "24px 40px", textAlign: "center",
        fontSize: 12, letterSpacing: "0.1em", color: "var(--site-text-sub)",
        borderTop: "1px solid var(--site-border)",
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
