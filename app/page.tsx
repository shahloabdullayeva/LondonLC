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
    <div className="min-h-screen" style={{ background: "var(--bg-primary)" }}>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 py-4"
        style={{
          background: "var(--bg-primary)",
          borderBottom: "1px solid var(--border)",
          backdropFilter: "blur(10px)",
        }}
      >
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl flex items-center justify-center"
            style={{ background: "linear-gradient(135deg, #1e3bbf, #4a6de8)" }}>
            <BookOpen size={18} className="text-white" />
          </div>
          <span className="text-xl font-bold logo-gradient">London LC</span>
        </div>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Link href="/auth/login" className="btn-primary text-sm py-2 px-5">
            Sign In
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-8"
            style={{ background: "var(--accent-light)", color: "var(--accent)", border: "1px solid var(--border)" }}>
            <Award size={14} />
            Cambridge IELTS Practice Platform
          </div>

          <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight"
            style={{ color: "var(--text-primary)" }}>
            Master IELTS with{" "}
            <span className="logo-gradient">authentic practice</span>
          </h1>

          <p className="text-xl mb-10 max-w-2xl mx-auto" style={{ color: "var(--text-secondary)" }}>
            Exam-condition Reading and Listening tests from Cambridge IELTS Books 1–19.
            Academic and General Training. Timed, monitored, and scored instantly.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/auth/login" className="btn-primary text-base px-8 py-4">
              Start Practising <ChevronRight size={18} />
            </Link>
            <Link href="/auth/login?admin=true"
              className="btn-secondary text-base px-8 py-4">
              <Shield size={18} />
              Teacher Login
            </Link>
          </div>
        </motion.div>

        {/* Floating decorative elements */}
        <div className="relative max-w-5xl mx-auto mt-20">
          <div className="absolute -top-10 -left-10 w-64 h-64 rounded-full opacity-10"
            style={{ background: "radial-gradient(circle, #4a6de8, transparent)" }} />
          <div className="absolute -bottom-10 -right-10 w-48 h-48 rounded-full opacity-10"
            style={{ background: "radial-gradient(circle, #7598ff, transparent)" }} />
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6" style={{ background: "var(--bg-secondary)" }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4" style={{ color: "var(--text-primary)" }}>
            Everything you need to score higher
          </h2>
          <p className="text-center mb-12" style={{ color: "var(--text-secondary)" }}>
            Built for serious IELTS preparation
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="p-6 rounded-2xl"
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--border)",
                  boxShadow: "var(--shadow)",
                }}
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: "var(--accent-light)" }}>
                  <f.icon size={22} style={{ color: "var(--accent)" }} />
                </div>
                <h3 className="font-bold text-lg mb-2" style={{ color: "var(--text-primary)" }}>
                  {f.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  {f.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="text-4xl font-black mb-1 logo-gradient">{s.value}</div>
              <div className="text-sm" style={{ color: "var(--text-muted)" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6" style={{ background: "var(--bg-secondary)" }}>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>
            Ready to start?
          </h2>
          <p className="mb-8" style={{ color: "var(--text-secondary)" }}>
            Sign in with your name and group code provided by your teacher.
          </p>
          <Link href="/auth/login" className="btn-primary text-base px-10 py-4">
            Get Started <ChevronRight size={18} />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 text-center text-sm" style={{ borderTop: "1px solid var(--border)", color: "var(--text-muted)" }}>
        © 2025 London Language Centre · IELTS Practice Platform
      </footer>
    </div>
  );
}

const features = [
  {
    icon: BookOpen,
    title: "Reading Tests",
    desc: "Academic and General Training passages with multiple question types: True/False/NG, multiple choice, fill in the blank, and matching.",
  },
  {
    icon: Headphones,
    title: "Listening Tests",
    desc: "Four sections with authentic audio. No pause, no rewind — exactly like the real IELTS exam. 10-minute transfer time included.",
  },
  {
    icon: Clock,
    title: "Timed Conditions",
    desc: "Automatic timers, tab-switch detection, and anti-copy measures ensure you practise under real exam pressure.",
  },
  {
    icon: Award,
    title: "Instant Band Scores",
    desc: "Get your IELTS band score immediately after submission using the official Cambridge conversion table.",
  },
  {
    icon: Shield,
    title: "Teacher Dashboard",
    desc: "Administrators can view all student results, filter by group, and track progress over time.",
  },
  {
    icon: BookOpen,
    title: "Books 1–19",
    desc: "Tests from Cambridge IELTS books 1 through 19 — both Academic and General Training versions.",
  },
];

const stats = [
  { value: "19", label: "Cambridge Books" },
  { value: "76+", label: "Full Tests" },
  { value: "3,000+", label: "Questions" },
  { value: "9.0", label: "Max Band Score" },
];
