"use client";
import { useState } from "react";
import Link from "next/link";
import Brand from "@/components/Brand";
import { supabase } from "@/lib/supabase";

const DISPLAY = `"Fraunces", "Iowan Old Style", Georgia, serif`;

export default function ResetPasswordPage() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email.trim() || !email.includes("@")) {
      setError("Please enter a valid email.");
      return;
    }

    setLoading(true);
    const { error: resetErr } = await supabase.auth.resetPasswordForEmail(email.trim(), {
      redirectTo: `${window.location.origin}/auth/login`,
    });

    if (resetErr) {
      setError(resetErr.message);
      setLoading(false);
      return;
    }

    setSent(true);
    setLoading(false);
  };

  return (
    <div style={{ minHeight: "100vh", background: "var(--site-bg)", display: "flex", flexDirection: "column", fontFamily: "Inter, system-ui, sans-serif" }}>
      <div style={{ display: "flex", alignItems: "center", padding: "0 24px", height: 56, borderBottom: "1px solid var(--site-border)" }}>
        <Brand href="/" size={20} />
      </div>

      <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: 24 }}>
        <div style={{ maxWidth: 420, width: "100%", background: "var(--site-card)", border: "1px solid var(--site-border)", borderRadius: 20, padding: "40px 32px", textAlign: "center", boxShadow: "0 24px 64px rgba(0,0,0,0.6)" }}>
          {sent ? (
            <>
              <div style={{ fontSize: 40, marginBottom: 16 }}>&#9993;</div>
              <h1 style={{ fontFamily: DISPLAY, fontSize: 24, fontWeight: 500, marginBottom: 12 }}>Check your email</h1>
              <p style={{ color: "var(--site-text-muted)", fontSize: 14, lineHeight: 1.7 }}>
                If an account exists for <strong>{email}</strong>, we sent a password reset link. Check your inbox and spam folder.
              </p>
              <Link href="/auth/login" style={{ display: "inline-block", marginTop: 24, fontSize: 13, color: "var(--site-accent)", textDecoration: "none" }}>
                ← Back to sign in
              </Link>
            </>
          ) : (
            <>
              <h1 style={{ fontFamily: DISPLAY, fontSize: 28, fontWeight: 500, marginBottom: 8 }}>Reset password</h1>
              <p style={{ color: "var(--site-text-muted)", fontSize: 14, marginBottom: 28 }}>
                Enter your email and we&apos;ll send you a reset link
              </p>

              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 12, textAlign: "left" }}>
                <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}
                  style={{ padding: "12px 14px", borderRadius: 10, border: "1px solid var(--site-border-strong)", background: "var(--site-bg)", color: "var(--site-text)", fontSize: 14, outline: "none" }} />

                {error && (
                  <p style={{ color: "#e87a6d", fontSize: 13, margin: 0, padding: "8px 12px", background: "rgba(232,122,109,0.08)", borderRadius: 8, border: "1px solid rgba(232,122,109,0.2)" }}>{error}</p>
                )}

                <button type="submit" disabled={loading} style={{
                  padding: "13px 20px", borderRadius: 10, border: "none",
                  background: "var(--site-text)", color: "var(--site-bg)",
                  fontSize: 14, fontWeight: 600, cursor: loading ? "wait" : "pointer",
                  opacity: loading ? 0.7 : 1,
                }}>
                  {loading ? "Sending…" : "Send reset link"}
                </button>
              </form>

              <p style={{ textAlign: "center", fontSize: 13, color: "var(--site-text-sub)", marginTop: 20 }}>
                <Link href="/auth/login" style={{ color: "var(--site-accent)", textDecoration: "none" }}>← Back to sign in</Link>
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
