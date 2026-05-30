"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Brand from "@/components/Brand";
import { supabase } from "@/lib/supabase";
import { saveSession } from "@/lib/store";

const DISPLAY = `-apple-system, BlinkMacSystemFont, system-ui, Roboto, Helvetica, Arial, sans-serif`;

export default function SignupPage() {
  const router = useRouter();
  const [form, setForm] = useState({ name: "", surname: "", email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!form.name.trim() || !form.surname.trim()) {
      setError("Please enter your full name.");
      return;
    }
    if (!form.email.trim() || !form.email.includes("@")) {
      setError("Please enter a valid email.");
      return;
    }
    if (form.password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    setLoading(true);

    const { data, error: authErr } = await supabase.auth.signUp({
      email: form.email.trim(),
      password: form.password,
      options: {
        data: { name: form.name.trim(), surname: form.surname.trim() },
      },
    });

    if (authErr) {
      setError(authErr.message);
      setLoading(false);
      return;
    }

    if (data.user) {
      const studentId = `student-${data.user.id.slice(0, 12)}`;
      await supabase.from("students").upsert({
        id: studentId,
        username: form.email.trim(),
        password: "supabase-auth",
        name: form.name.trim(),
        surname: form.surname.trim(),
        group_name: "Public",
      }, { onConflict: "username", ignoreDuplicates: true });

      if (data.session) {
        saveSession({
          id: studentId,
          name: form.name.trim(),
          surname: form.surname.trim(),
          group_name: "Public",
          isAdmin: false,
        });
        router.push("/student/home");
        return;
      }
    }

    setSent(true);
    setLoading(false);
  };

  const handleGoogle = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo: `${window.location.origin}/auth/callback` },
    });
  };

  if (sent) {
    return (
      <div style={{ minHeight: "100vh", background: "var(--site-bg)", display: "flex", flexDirection: "column", fontFamily: "-apple-system, BlinkMacSystemFont, system-ui, Roboto, Helvetica, Arial, sans-serif" }}>
        <div style={{ display: "flex", alignItems: "center", padding: "0 24px", height: 56, borderBottom: "1px solid var(--site-border)" }}>
          <Brand href="/" size={20} />
        </div>
        <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: 24 }}>
          <div style={{ maxWidth: 420, width: "100%", background: "var(--site-card)", border: "1px solid var(--site-border)", borderRadius: 20, padding: "40px 32px", textAlign: "center", boxShadow: "0 24px 64px rgba(0,0,0,0.6)" }}>
            <div style={{ fontSize: 40, marginBottom: 16 }}>&#9993;</div>
            <h1 style={{ fontFamily: DISPLAY, fontSize: 24, fontWeight: 500, marginBottom: 12 }}>Check your email</h1>
            <p style={{ color: "var(--site-text-muted)", fontSize: 14, lineHeight: 1.7 }}>
              We sent a confirmation link to <strong>{form.email}</strong>. Click the link to activate your account.
            </p>
            <Link href="/auth/login" style={{ display: "inline-block", marginTop: 24, fontSize: 13, color: "var(--site-accent)", textDecoration: "none" }}>
              ← Back to sign in
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: "100vh", background: "var(--site-bg)", display: "flex", flexDirection: "column", fontFamily: "-apple-system, BlinkMacSystemFont, system-ui, Roboto, Helvetica, Arial, sans-serif" }}>
      <div style={{ display: "flex", alignItems: "center", padding: "0 24px", height: 56, borderBottom: "1px solid var(--site-border)" }}>
        <Brand href="/" size={20} />
      </div>

      <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: 24 }}>
        <div style={{ maxWidth: 420, width: "100%", background: "var(--site-card)", border: "1px solid var(--site-border)", borderRadius: 20, padding: "40px 32px", boxShadow: "0 24px 64px rgba(0,0,0,0.6)" }}>
          <h1 style={{ fontFamily: DISPLAY, fontSize: 28, fontWeight: 500, textAlign: "center", marginBottom: 8 }}>Create account</h1>
          <p style={{ textAlign: "center", color: "var(--site-text-muted)", fontSize: 14, marginBottom: 28 }}>
            Start practising IELTS for free
          </p>

          <button
            onClick={handleGoogle}
            style={{
              width: "100%", padding: "12px 16px", borderRadius: 10,
              border: "1px solid var(--site-border-strong)",
              background: "transparent", color: "var(--site-text)",
              fontSize: 14, fontWeight: 500, cursor: "pointer",
              display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
              marginBottom: 20,
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18A10.96 10.96 0 001 12c0 1.77.42 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
            Continue with Google
          </button>

          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
            <div style={{ flex: 1, height: 1, background: "var(--site-border)" }} />
            <span style={{ fontSize: 12, color: "var(--site-text-sub)", textTransform: "uppercase", letterSpacing: "0.1em" }}>or</span>
            <div style={{ flex: 1, height: 1, background: "var(--site-border)" }} />
          </div>

          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
              <input type="text" placeholder="First name" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                style={{ padding: "12px 14px", borderRadius: 10, border: "1px solid var(--site-border-strong)", background: "var(--site-bg)", color: "var(--site-text)", fontSize: 14, outline: "none" }} />
              <input type="text" placeholder="Surname" value={form.surname} onChange={e => setForm(f => ({ ...f, surname: e.target.value }))}
                style={{ padding: "12px 14px", borderRadius: 10, border: "1px solid var(--site-border-strong)", background: "var(--site-bg)", color: "var(--site-text)", fontSize: 14, outline: "none" }} />
            </div>
            <input type="email" placeholder="Email" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
              style={{ padding: "12px 14px", borderRadius: 10, border: "1px solid var(--site-border-strong)", background: "var(--site-bg)", color: "var(--site-text)", fontSize: 14, outline: "none" }} />
            <input type="password" placeholder="Password (min 6 characters)" value={form.password} onChange={e => setForm(f => ({ ...f, password: e.target.value }))}
              style={{ padding: "12px 14px", borderRadius: 10, border: "1px solid var(--site-border-strong)", background: "var(--site-bg)", color: "var(--site-text)", fontSize: 14, outline: "none" }} />

            {error && (
              <p style={{ color: "#e87a6d", fontSize: 13, margin: 0, padding: "8px 12px", background: "rgba(232,122,109,0.08)", borderRadius: 8, border: "1px solid rgba(232,122,109,0.2)" }}>{error}</p>
            )}

            <button type="submit" disabled={loading} style={{
              padding: "13px 20px", borderRadius: 10, border: "none",
              background: "#6fe4a5", color: "#0a0c0a",
              fontSize: 14, fontWeight: 600, cursor: loading ? "wait" : "pointer",
              opacity: loading ? 0.7 : 1,
            }}>
              {loading ? "Creating account…" : "Create account"}
            </button>
          </form>

          <p style={{ textAlign: "center", fontSize: 13, color: "var(--site-text-sub)", marginTop: 20 }}>
            Already have an account?{" "}
            <Link href="/auth/login" style={{ color: "var(--site-accent)", textDecoration: "none", fontWeight: 600 }}>Sign in</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
