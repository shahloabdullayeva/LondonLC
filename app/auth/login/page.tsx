"use client";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { BookOpen, Eye, EyeOff, Shield, User, Users, Lock, ChevronRight } from "lucide-react";
import { saveSession, getSession } from "@/lib/store";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import Link from "next/link";
import { Suspense } from "react";

function LoginContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const isAdminDefault = searchParams.get("admin") === "true";

  const [isAdmin, setIsAdmin] = useState(isAdminDefault);
  const [form, setForm] = useState({ name: "", surname: "", group: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const session = getSession();
    if (session) {
      router.push(session.isAdmin ? "/admin/dashboard" : "/student/dashboard");
    }
  }, [router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    await new Promise((r) => setTimeout(r, 600));

    if (isAdmin) {
      if (form.password === "LondonLC2024Admin") {
        saveSession({
          id: "admin-1",
          name: "Teacher",
          surname: "",
          group_name: "admin",
          isAdmin: true,
        });
        router.push("/admin/dashboard");
      } else {
        setError("Incorrect admin password. Please try again.");
      }
    } else {
      if (!form.name.trim() || !form.surname.trim() || !form.group.trim()) {
        setError("Please fill in all fields.");
        setLoading(false);
        return;
      }
      const id = `${form.name.toLowerCase()}-${form.surname.toLowerCase()}-${Date.now()}`;
      saveSession({
        id,
        name: form.name.trim(),
        surname: form.surname.trim(),
        group_name: form.group.trim(),
        isAdmin: false,
      });
      router.push("/student/dashboard");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex flex-col" style={{ background: "var(--bg-primary)" }}>
      {/* Top bar */}
      <div className="flex items-center justify-between px-6 py-4"
        style={{ borderBottom: "1px solid var(--border)" }}>
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center"
            style={{ background: "linear-gradient(135deg, #1e3bbf, #4a6de8)" }}>
            <BookOpen size={16} className="text-white" />
          </div>
          <span className="font-bold logo-gradient">London LC</span>
        </Link>
        <ThemeToggle />
      </div>

      {/* Main */}
      <div className="flex-1 flex items-center justify-center p-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md"
        >
          {/* Card */}
          <div className="rounded-3xl p-8"
            style={{
              background: "var(--bg-card)",
              border: "1px solid var(--border)",
              boxShadow: "var(--shadow-lg)",
            }}
          >
            {/* Toggle student/admin */}
            <div className="flex rounded-xl p-1 mb-8 gap-1"
              style={{ background: "var(--bg-secondary)" }}>
              <button
                onClick={() => { setIsAdmin(false); setError(""); }}
                className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${!isAdmin ? "text-white shadow-sm" : ""}`}
                style={!isAdmin ? { background: "linear-gradient(135deg, #1e3bbf, #2d4fd4)" } : { color: "var(--text-muted)" }}
              >
                <User size={15} /> Student
              </button>
              <button
                onClick={() => { setIsAdmin(true); setError(""); }}
                className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${isAdmin ? "text-white shadow-sm" : ""}`}
                style={isAdmin ? { background: "linear-gradient(135deg, #1e3bbf, #2d4fd4)" } : { color: "var(--text-muted)" }}
              >
                <Shield size={15} /> Teacher
              </button>
            </div>

            <h1 className="text-2xl font-bold mb-1" style={{ color: "var(--text-primary)" }}>
              {isAdmin ? "Teacher Access" : "Welcome back"}
            </h1>
            <p className="text-sm mb-8" style={{ color: "var(--text-muted)" }}>
              {isAdmin
                ? "Enter your admin password to access the dashboard"
                : "Enter your details to start practising"}
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              {!isAdmin ? (
                <>
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-semibold mb-1.5 uppercase tracking-wide"
                      style={{ color: "var(--text-muted)" }}>
                      First Name
                    </label>
                    <div className="relative">
                      <User size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2"
                        style={{ color: "var(--text-muted)" }} />
                      <input
                        type="text"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="e.g. Sarah"
                        className="input-field pl-10"
                        required
                        autoComplete="given-name"
                      />
                    </div>
                  </div>

                  {/* Surname */}
                  <div>
                    <label className="block text-xs font-semibold mb-1.5 uppercase tracking-wide"
                      style={{ color: "var(--text-muted)" }}>
                      Surname
                    </label>
                    <div className="relative">
                      <User size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2"
                        style={{ color: "var(--text-muted)" }} />
                      <input
                        type="text"
                        value={form.surname}
                        onChange={(e) => setForm({ ...form, surname: e.target.value })}
                        placeholder="e.g. Johnson"
                        className="input-field pl-10"
                        required
                        autoComplete="family-name"
                      />
                    </div>
                  </div>

                  {/* Group */}
                  <div>
                    <label className="block text-xs font-semibold mb-1.5 uppercase tracking-wide"
                      style={{ color: "var(--text-muted)" }}>
                      Group Name / Code
                    </label>
                    <div className="relative">
                      <Users size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2"
                        style={{ color: "var(--text-muted)" }} />
                      <input
                        type="text"
                        value={form.group}
                        onChange={(e) => setForm({ ...form, group: e.target.value })}
                        placeholder="e.g. IELTS-A2 or Group 3"
                        className="input-field pl-10"
                        required
                      />
                    </div>
                  </div>
                </>
              ) : (
                <div>
                  <label className="block text-xs font-semibold mb-1.5 uppercase tracking-wide"
                    style={{ color: "var(--text-muted)" }}>
                    Admin Password
                  </label>
                  <div className="relative">
                    <Lock size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2"
                      style={{ color: "var(--text-muted)" }} />
                    <input
                      type={showPassword ? "text" : "password"}
                      value={form.password}
                      onChange={(e) => setForm({ ...form, password: e.target.value })}
                      placeholder="Enter admin password"
                      className="input-field pl-10 pr-10"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3.5 top-1/2 -translate-y-1/2"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                  </div>
                </div>
              )}

              {error && (
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex items-center gap-2 p-3 rounded-xl text-sm"
                  style={{ background: "#fef2f2", color: "#dc2626", border: "1px solid #fecaca" }}
                >
                  <span className="w-4 h-4 rounded-full bg-red-500 text-white flex items-center justify-center text-xs font-bold">!</span>
                  {error}
                </motion.div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="btn-primary w-full mt-2"
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Signing in...
                  </span>
                ) : (
                  <>
                    {isAdmin ? "Access Dashboard" : "Start Practising"}
                    <ChevronRight size={16} />
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Info */}
          <p className="text-center text-xs mt-6" style={{ color: "var(--text-muted)" }}>
            Your name and results are saved for your teacher to review
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense>
      <LoginContent />
    </Suspense>
  );
}
