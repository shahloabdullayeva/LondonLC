"use client";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, User, Users, ChevronRight, Copy, Check, KeyRound } from "lucide-react";
import Image from "next/image";
import { registerStudent, getSession, saveSession } from "@/lib/store";
import Link from "next/link";

export default function SignupPage() {
  const router = useRouter();
  const [form, setForm] = useState({ name: "", surname: "", group: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [created, setCreated] = useState<{ username: string; password: string; id: string } | null>(null);
  const [copied, setCopied] = useState<"user" | "pass" | null>(null);
  const hiddenUsernameRef = useRef<HTMLInputElement>(null);
  const hiddenPasswordRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const s = getSession();
    if (s) router.push(s.isAdmin ? "/admin/dashboard" : "/student/dashboard");
  }, [router]);

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!form.name.trim() || !form.surname.trim() || !form.group.trim()) {
      setError("Please fill in all fields."); return;
    }
    setLoading(true);
    await new Promise(r => setTimeout(r, 400));
    const result = registerStudent(form.name, form.surname, form.group);
    setCreated(result);
    setLoading(false);
  };

  const copy = (text: string, which: "user" | "pass") => {
    navigator.clipboard.writeText(text).catch(() => {});
    setCopied(which);
    setTimeout(() => setCopied(null), 2000);
  };

  const handleContinue = () => {
    if (!created) return;
    // Save the session so they land on dashboard
    const accounts = JSON.parse(localStorage.getItem("llc_students") || "[]");
    const acct = accounts.find((a: { id: string }) => a.id === created.id);
    if (acct) {
      saveSession({ id: acct.id, name: acct.name, surname: acct.surname, group_name: acct.group_name, isAdmin: false });
    }
    router.push("/student/dashboard");
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
          <Image src="/logo.svg" alt="London LC" width={120} height={44} style={{ filter: "brightness(0) invert(1)" }} />
        </Link>
      </div>

      <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "24px" }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
          style={{ width: "100%", maxWidth: 420 }}>

          <AnimatePresence mode="wait">
            {!created ? (
              <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <div style={{ background: "#140b35", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 20, padding: "36px 28px", boxShadow: "0 24px 64px rgba(0,0,0,0.6)" }}>
                  <div style={{ textAlign: "center", marginBottom: 24 }}>
                    <div style={{ marginBottom: 12, display: "flex", justifyContent: "center" }}>
                      <Image src="/logo.svg" alt="London LC" width={160} height={60} style={{ filter: "brightness(0) invert(1)" }} />
                    </div>
                    <h1 style={{ color: "#fff", fontWeight: 800, fontSize: 21, marginBottom: 3 }}>Create Account</h1>
                    <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 13 }}>Enter your details to get your login</p>
                  </div>

                  <form onSubmit={handleCreate} style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                    {[
                      { key: "name", label: "First Name", placeholder: "e.g. Sarah", icon: User },
                      { key: "surname", label: "Surname", placeholder: "e.g. Johnson", icon: User },
                      { key: "group", label: "Group Name / Code", placeholder: "e.g. IELTS-A", icon: Users },
                    ].map(f => (
                      <div key={f.key}>
                        <label style={{ display: "block", fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.4)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 6 }}>{f.label}</label>
                        <div style={{ position: "relative" }}>
                          <f.icon size={14} color="rgba(255,255,255,0.3)" style={{ position: "absolute", left: 13, top: "50%", transform: "translateY(-50%)" }} />
                          <input type="text" placeholder={f.placeholder}
                            value={form[f.key as keyof typeof form]}
                            onChange={e => setForm({ ...form, [f.key]: e.target.value })}
                            style={inputStyle}
                            onFocus={e => e.currentTarget.style.borderColor = "#7c3aed"}
                            onBlur={e => e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"}
                          />
                        </div>
                      </div>
                    ))}

                    {error && (
                      <div style={{ padding: "10px 14px", background: "rgba(239,68,68,0.12)", border: "1px solid rgba(239,68,68,0.3)", borderRadius: 9, color: "#fca5a5", fontSize: 13 }}>
                        {error}
                      </div>
                    )}

                    <button type="submit" disabled={loading}
                      style={{ marginTop: 2, display: "flex", alignItems: "center", justifyContent: "center", gap: 8, padding: "13px", background: loading ? "rgba(124,58,237,0.5)" : "linear-gradient(135deg,#7c3aed,#6d28d9)", color: "#fff", fontWeight: 700, fontSize: 15, border: "none", borderRadius: 12, cursor: loading ? "not-allowed" : "pointer", boxShadow: "0 4px 15px rgba(124,58,237,0.4)", transition: "all 0.2s" }}>
                      {loading
                        ? <><span style={{ width: 15, height: 15, border: "2px solid rgba(255,255,255,0.3)", borderTopColor: "#fff", borderRadius: "50%", display: "inline-block", animation: "spin 0.7s linear infinite" }} /> Creating...</>
                        : <>Create Account <ChevronRight size={16} /></>
                      }
                    </button>
                  </form>

                  <div style={{ marginTop: 18, textAlign: "center", fontSize: 13, color: "rgba(255,255,255,0.35)" }}>
                    Already have an account?{" "}
                    <Link href="/auth/login" style={{ color: "#a78bfa", fontWeight: 600, textDecoration: "none" }}>Sign in</Link>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div key="created" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
                <div style={{ background: "#140b35", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 20, padding: "36px 28px", boxShadow: "0 24px 64px rgba(0,0,0,0.6)" }}>
                  {/* Success header */}
                  <div style={{ textAlign: "center", marginBottom: 24 }}>
                    <div style={{ display: "inline-flex", width: 52, height: 52, background: "rgba(16,185,129,0.15)", border: "2px solid rgba(16,185,129,0.3)", borderRadius: "50%", alignItems: "center", justifyContent: "center", marginBottom: 12 }}>
                      <KeyRound size={22} color="#34d399" />
                    </div>
                    <h1 style={{ color: "#fff", fontWeight: 800, fontSize: 21, marginBottom: 3 }}>Account Created!</h1>
                    <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 13 }}>Save your login details below</p>
                  </div>

                  {/* Credentials box */}
                  <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 14, padding: "20px", marginBottom: 20 }}>
                    <p style={{ fontSize: 12, color: "rgba(255,255,255,0.3)", marginBottom: 14, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.07em" }}>Your login details</p>

                    {[
                      { label: "Username", value: created.username, which: "user" as const, autoComplete: "username" },
                      { label: "Password", value: created.password, which: "pass" as const, autoComplete: "new-password" },
                    ].map(item => (
                      <div key={item.label} style={{ marginBottom: 12 }}>
                        <p style={{ fontSize: 11, color: "rgba(255,255,255,0.35)", marginBottom: 4 }}>{item.label}</p>
                        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                          {/* Visible credentials display */}
                          <div style={{ flex: 1, padding: "10px 14px", background: "rgba(37,99,235,0.1)", border: "1px solid rgba(37,99,235,0.2)", borderRadius: 9, fontFamily: "monospace", fontSize: 15, fontWeight: 700, color: "#e8eeff", letterSpacing: "0.03em" }}>
                            {item.value}
                          </div>
                          <button onClick={() => copy(item.value, item.which)}
                            style={{ flexShrink: 0, padding: "9px", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 9, cursor: "pointer", color: copied === item.which ? "#34d399" : "rgba(255,255,255,0.5)", display: "flex", alignItems: "center" }}>
                            {copied === item.which ? <Check size={15} /> : <Copy size={15} />}
                          </button>
                        </div>
                      </div>
                    ))}

                    {/* Hidden form for browser password manager */}
                    <form style={{ position: "absolute", opacity: 0, pointerEvents: "none", width: 0, height: 0, overflow: "hidden" }}
                      autoComplete="on" aria-hidden="true">
                      <input ref={hiddenUsernameRef} type="text" name="username" autoComplete="username" defaultValue={created.username} readOnly />
                      <input ref={hiddenPasswordRef} type="password" name="password" autoComplete="new-password" defaultValue={created.password} readOnly />
                    </form>
                  </div>

                  <div style={{ padding: "12px 14px", background: "rgba(245,158,11,0.1)", border: "1px solid rgba(245,158,11,0.25)", borderRadius: 10, marginBottom: 20, fontSize: 13, color: "#fcd34d" }}>
                    ⚠️ <strong>Write these down or save them.</strong> You&apos;ll need your username and password every time you log in.
                  </div>

                  <button onClick={handleContinue}
                    style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: 8, padding: "13px", background: "linear-gradient(135deg,#7c3aed,#6d28d9)", color: "#fff", fontWeight: 700, fontSize: 15, border: "none", borderRadius: 12, cursor: "pointer", boxShadow: "0 4px 15px rgba(124,58,237,0.4)" }}>
                    Continue to Dashboard <ChevronRight size={16} />
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}
