"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { getSession } from "@/lib/store";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { motion } from "framer-motion";
import { BookOpen, Headphones, Shield, Clock, Award, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    const session = getSession();
    if (session) {
      if (session.isAdmin) router.push("/admin/dashboard");
      else router.push("/student/dashboard");
    }
  }, [router]);

  return (
    <div style={{ background: "var(--bg-primary)", minHeight: "100vh", overflowX: "hidden" }}>

      {/* Navbar */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 40,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "0 24px", height: "64px",
        background: "var(--bg-primary)",
        borderBottom: "1px solid var(--border)",
        backdropFilter: "blur(12px)",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div style={{
            width: 36, height: 36, borderRadius: 10,
            background: "linear-gradient(135deg, #1a35b8, #3d62e0)",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <BookOpen size={18} color="white" />
          </div>
          <span style={{ fontSize: 20, fontWeight: 800, letterSpacing: "-0.5px" }} className="logo-gradient">
            London LC
          </span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <ThemeToggle />
          <Link href="/auth/login" className="btn-primary" style={{ fontSize: 14, padding: "8px 20px" }}>
            Sign In
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ paddingTop: 120, paddingBottom: 80, textAlign: "center", position: "relative" }}>
        {/* Background glow */}
        <div style={{
          position: "absolute", top: 60, left: "50%", transform: "translateX(-50%)",
          width: 600, height: 400, borderRadius: "50%",
          background: "radial-gradient(ellipse, rgba(61,98,224,0.12), transparent 70%)",
          pointerEvents: "none",
        }} />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ maxWidth: 780, margin: "0 auto", padding: "0 24px", position: "relative" }}
        >
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            padding: "6px 16px", borderRadius: 999,
            background: "var(--accent-light)", color: "var(--accent)",
            border: "1px solid var(--border)", fontSize: 13, fontWeight: 600,
            marginBottom: 28,
          }}>
            <Award size={13} />
            Cambridge IELTS Practice Platform
          </div>

          <h1 style={{
            fontSize: "clamp(2.4rem, 5vw, 3.6rem)", fontWeight: 900,
            lineHeight: 1.1, marginBottom: 20, letterSpacing: "-1px",
            color: "var(--text-primary)",
          }}>
            Master IELTS with{" "}
            <span className="logo-gradient">authentic practice</span>
          </h1>

          <p style={{
            fontSize: 18, lineHeight: 1.7, color: "var(--text-secondary)",
            maxWidth: 560, margin: "0 auto 36px",
          }}>
            Exam-condition Reading and Listening tests from Cambridge IELTS Books 1–19.
            Academic and General Training. Timed, monitored, and scored instantly.
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center" }}>
            <Link href="/auth/login" className="btn-primary" style={{ fontSize: 15, padding: "13px 32px" }}>
              Start Practising <ChevronRight size={17} />
            </Link>
            <Link href="/auth/login?admin=true" className="btn-secondary" style={{ fontSize: 15, padding: "13px 32px" }}>
              <Shield size={17} />
              Teacher Login
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Features */}
      <section style={{ padding: "72px 24px", background: "var(--bg-secondary)" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <h2 style={{ fontSize: 28, fontWeight: 800, textAlign: "center", marginBottom: 8, color: "var(--text-primary)" }}>
            Everything you need to score higher
          </h2>
          <p style={{ textAlign: "center", marginBottom: 48, color: "var(--text-secondary)" }}>
            Built for serious IELTS preparation
          </p>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 20,
          }}>
            {features.map((f, i) => (
              <motion.div key={f.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.45 }}
                style={{
                  padding: 24, borderRadius: 18,
                  background: "var(--bg-card)",
                  border: "1px solid var(--border)",
                  boxShadow: "var(--shadow)",
                }}
              >
                <div style={{
                  width: 46, height: 46, borderRadius: 12, marginBottom: 16,
                  background: "var(--accent-light)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <f.icon size={21} color="var(--accent)" />
                </div>
                <h3 style={{ fontWeight: 700, fontSize: 16, marginBottom: 8, color: "var(--text-primary)" }}>
                  {f.title}
                </h3>
                <p style={{ fontSize: 14, lineHeight: 1.65, color: "var(--text-secondary)" }}>
                  {f.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ padding: "72px 24px" }}>
        <div style={{
          maxWidth: 800, margin: "0 auto",
          display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
          gap: 32, textAlign: "center",
        }}>
          {stats.map((s) => (
            <div key={s.label}>
              <div className="logo-gradient" style={{ fontSize: 40, fontWeight: 900, lineHeight: 1, marginBottom: 6 }}>
                {s.value}
              </div>
              <div style={{ fontSize: 13, color: "var(--text-muted)", fontWeight: 500 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "72px 24px", background: "var(--bg-secondary)", textAlign: "center" }}>
        <div style={{ maxWidth: 520, margin: "0 auto" }}>
          <h2 style={{ fontSize: 28, fontWeight: 800, marginBottom: 12, color: "var(--text-primary)" }}>
            Ready to start?
          </h2>
          <p style={{ marginBottom: 32, color: "var(--text-secondary)" }}>
            Sign in with your name and group code provided by your teacher.
          </p>
          <Link href="/auth/login" className="btn-primary" style={{ fontSize: 15, padding: "13px 40px" }}>
            Get Started <ChevronRight size={17} />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        padding: "28px 24px", textAlign: "center", fontSize: 13,
        borderTop: "1px solid var(--border)", color: "var(--text-muted)",
      }}>
        © 2025 London Language Centre · IELTS Practice Platform
      </footer>
    </div>
  );
}

const features = [
  { icon: BookOpen, title: "Reading Tests", desc: "Academic and General Training passages with multiple question types: True/False/NG, multiple choice, fill in the blank, and matching." },
  { icon: Headphones, title: "Listening Tests", desc: "Four sections with authentic audio. No pause, no rewind — exactly like the real IELTS exam. 10-minute transfer time included." },
  { icon: Clock, title: "Timed Conditions", desc: "Automatic timers, tab-switch detection, and anti-copy measures ensure you practise under real exam pressure." },
  { icon: Award, title: "Instant Band Scores", desc: "Get your IELTS band score immediately after submission using the official Cambridge conversion table." },
  { icon: Shield, title: "Teacher Dashboard", desc: "Administrators can view all student results, filter by group, and track progress over time." },
  { icon: BookOpen, title: "Books 1–19", desc: "Tests from Cambridge IELTS books 1 through 19 — both Academic and General Training versions." },
];

const stats = [
  { value: "19", label: "Cambridge Books" },
  { value: "76+", label: "Full Tests" },
  { value: "3,000+", label: "Questions" },
  { value: "9.0", label: "Max Band Score" },
];
