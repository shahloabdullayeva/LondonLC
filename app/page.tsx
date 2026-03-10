"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { getSession } from "@/lib/store";
import { motion } from "framer-motion";
import { ChevronRight, BookOpen, Headphones, Clock, Award, CheckCircle, Shield } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  const router = useRouter();
  useEffect(() => {
    const s = getSession();
    if (s) router.push(s.isAdmin ? "/admin/dashboard" : "/student/dashboard");
  }, [router]);

  return (
    <div style={{ minHeight: "100vh", background: "#020817", color: "#e8eeff", overflowX: "hidden", fontFamily: "Inter, system-ui, sans-serif" }}>

      {/* Nav */}
      <nav style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 32px", height: 64, borderBottom: "1px solid rgba(255,255,255,0.07)", position: "sticky", top: 0, zIndex: 40, background: "rgba(2,8,23,0.92)", backdropFilter: "blur(12px)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          {/* Shield logo */}
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
            <path d="M18 3L4 9v10c0 8.3 5.9 16 14 18 8.1-2 14-9.7 14-18V9L18 3z" fill="url(#shieldGrad)" />
            <defs>
              <linearGradient id="shieldGrad" x1="4" y1="3" x2="32" y2="33">
                <stop stopColor="#2563eb" />
                <stop offset="1" stopColor="#1e40af" />
              </linearGradient>
            </defs>
            <BookOpen size={14} color="white" style={{ position: "absolute" }} />
            <text x="18" y="22" textAnchor="middle" fontSize="11" fontWeight="bold" fill="white">LC</text>
          </svg>
          <span style={{ fontWeight: 800, fontSize: 18, color: "#fff" }}>London LC</span>
        </div>
        <div className="home-nav-right" style={{ display: "flex", alignItems: "center", gap: 32 }}>
          <nav className="home-nav-links" style={{ display: "flex", gap: 28 }}>
            {["Features", "Tests", "FAQ", "Contact"].map(n => (
              <span key={n} style={{ fontSize: 14, color: "rgba(255,255,255,0.6)", cursor: "pointer", transition: "color 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.6)")}
              >{n}</span>
            ))}
          </nav>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <Link href="/auth/login" className="home-nav-signin" style={{ fontSize: 14, color: "rgba(255,255,255,0.7)", textDecoration: "none", padding: "8px 16px", border: "1px solid rgba(255,255,255,0.2)", borderRadius: 8 }}>
              Sign In
            </Link>
            <Link href="/auth/signup" style={{ fontSize: 14, fontWeight: 600, color: "#fff", background: "linear-gradient(135deg, #2563eb, #1d4ed8)", padding: "9px 20px", borderRadius: 10, textDecoration: "none", boxShadow: "0 4px 15px rgba(37,99,235,0.4)" }}>
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ textAlign: "center", padding: "96px 24px 80px", position: "relative" }}>
        {/* Background glow */}
        <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: 800, height: 500, background: "radial-gradient(ellipse at center, rgba(37,99,235,0.15) 0%, transparent 65%)", pointerEvents: "none" }} />

        <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }} style={{ position: "relative", maxWidth: 720, margin: "0 auto" }}>
          {/* Shield icon */}
          <div style={{ marginBottom: 32 }}>
            <div style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 90, height: 90, background: "linear-gradient(135deg, #1e3a8a, #2563eb)", borderRadius: "50%", boxShadow: "0 8px 32px rgba(37,99,235,0.4)", border: "2px solid rgba(255,255,255,0.15)" }}>
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <path d="M24 4L6 12v13c0 11 7.8 21.3 18 24 10.2-2.7 18-13 18-24V12L24 4z" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" />
                <BookOpen size={22} color="white" style={{ position: "absolute" }} />
              </svg>
            </div>
          </div>

          <h1 style={{ fontSize: "clamp(2.4rem, 5.5vw, 3.8rem)", fontWeight: 900, lineHeight: 1.08, letterSpacing: "-1.5px", color: "#fff", marginBottom: 20 }}>
            Master IELTS with{" "}
            <span style={{ background: "linear-gradient(90deg, #60a5fa, #93c5fd)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Cambridge Practice
            </span>
          </h1>

          <p style={{ fontSize: 18, color: "rgba(255,255,255,0.6)", lineHeight: 1.7, maxWidth: 540, margin: "0 auto 40px" }}>
            Authentic IELTS Reading and Listening tests from Cambridge Books 1–19.
            Timed, monitored, and scored instantly. Academic & General Training.
          </p>

          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap", marginBottom: 16 }}>
            <Link href="/auth/signup" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "14px 36px", background: "linear-gradient(135deg, #2563eb, #1d4ed8)", color: "#fff", fontWeight: 700, fontSize: 16, borderRadius: 50, textDecoration: "none", boxShadow: "0 6px 20px rgba(37,99,235,0.45)" }}>
              Get Started <ChevronRight size={18} />
            </Link>
            <Link href="/auth/login" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "14px 36px", background: "rgba(255,255,255,0.08)", color: "#fff", fontWeight: 600, fontSize: 16, borderRadius: 50, textDecoration: "none", border: "1px solid rgba(255,255,255,0.15)" }}>
              Sign In
            </Link>
          </div>
          <p style={{ fontSize: 13, color: "rgba(255,255,255,0.3)", marginBottom: 36 }}>
            Already have an account?{" "}
            <Link href="/auth/login" style={{ color: "#60a5fa", textDecoration: "none" }}>Sign in here</Link>
          </p>

          {/* Trust badges */}
          <div style={{ display: "flex", gap: 28, justifyContent: "center", flexWrap: "wrap" }}>
            {["Cambridge IELTS Books 1–19", "Official Band Scoring", "Track Your Progress"].map(t => (
              <div key={t} style={{ display: "flex", alignItems: "center", gap: 7, fontSize: 13, color: "rgba(255,255,255,0.55)" }}>
                <CheckCircle size={14} color="#34d399" />
                {t}
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Features */}
      <section id="features" style={{ padding: "80px 24px", background: "rgba(255,255,255,0.02)", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ maxWidth: 1040, margin: "0 auto" }}>
          <h2 style={{ textAlign: "center", fontSize: 30, fontWeight: 800, color: "#fff", marginBottom: 10 }}>Everything you need to score higher</h2>
          <p style={{ textAlign: "center", color: "rgba(255,255,255,0.5)", marginBottom: 52, fontSize: 15 }}>Built for serious IELTS preparation</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))", gap: 18 }}>
            {features.map((f, i) => (
              <motion.div key={f.title} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}
                style={{ padding: "24px 22px", borderRadius: 16, background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: "rgba(37,99,235,0.2)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 14 }}>
                  <f.icon size={20} color="#60a5fa" />
                </div>
                <h3 style={{ fontWeight: 700, fontSize: 15, color: "#fff", marginBottom: 7 }}>{f.title}</h3>
                <p style={{ fontSize: 13.5, lineHeight: 1.65, color: "rgba(255,255,255,0.5)" }}>{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ padding: "72px 24px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 32, textAlign: "center" }}>
          {stats.map(s => (
            <div key={s.label}>
              <div style={{ fontSize: 42, fontWeight: 900, background: "linear-gradient(90deg, #60a5fa, #93c5fd)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", lineHeight: 1, marginBottom: 6 }}>{s.value}</div>
              <div style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", fontWeight: 500 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "72px 24px", textAlign: "center", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <h2 style={{ fontSize: 30, fontWeight: 800, color: "#fff", marginBottom: 12 }}>Ready to start?</h2>
        <p style={{ color: "rgba(255,255,255,0.5)", marginBottom: 32, fontSize: 15 }}>Sign in with your name and group code provided by your teacher.</p>
        <Link href="/auth/login" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "14px 44px", background: "linear-gradient(135deg, #2563eb, #1d4ed8)", color: "#fff", fontWeight: 700, fontSize: 16, borderRadius: 50, textDecoration: "none", boxShadow: "0 6px 20px rgba(37,99,235,0.45)" }}>
          Get Started <ChevronRight size={18} />
        </Link>
      </section>

      <footer style={{ padding: "24px", textAlign: "center", fontSize: 13, color: "rgba(255,255,255,0.25)", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        © 2025 London Language Centre · IELTS Practice Platform
      </footer>
    </div>
  );
}

const features = [
  { icon: BookOpen, title: "Reading Tests", desc: "Academic and General Training passages with True/False/NG, multiple choice, fill in the blank, and matching questions." },
  { icon: Headphones, title: "Listening Tests", desc: "Four sections with audio simulation. No pause, no rewind. 10-minute answer transfer time just like the real exam." },
  { icon: Clock, title: "Timed & Monitored", desc: "Auto timer, tab-switch detection (test cancels after 2 violations), and copy-paste blocking for real exam conditions." },
  { icon: Award, title: "Instant Band Score", desc: "Your IELTS band score calculated immediately using the official Cambridge conversion table." },
  { icon: Shield, title: "Teacher Dashboard", desc: "Admins can see all results, filter by group, view individual student performance, and export to CSV." },
  { icon: BookOpen, title: "Books 1–19", desc: "Tests from all Cambridge IELTS books — both Academic and General Training versions." },
];

const stats = [
  { value: "19", label: "Cambridge Books" },
  { value: "76+", label: "Full Tests" },
  { value: "3,000+", label: "Questions" },
  { value: "9.0", label: "Max Band Score" },
];
