"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { getSession } from "@/lib/store";
import Brand from "@/components/Brand";
import Link from "next/link";
import { BookOpen, Headphones, PenLine, Sparkles, CheckCircle, BarChart3 } from "lucide-react";

const DISPLAY = `"Fraunces", "Iowan Old Style", Georgia, serif`;
const BODY = `"Inter", system-ui, sans-serif`;
const MONO = `"JetBrains Mono", ui-monospace, monospace`;

const FEATURES = [
  { icon: BookOpen, title: "Reading", desc: "44+ full IELTS Academic reading tests from Cambridge and Barron's with instant scoring and detailed answer review.", color: "#22c55e" },
  { icon: Headphones, title: "Listening", desc: "Real IELTS listening tests with synced audio, all question types, and automatic band calculation.", color: "#3b82f6" },
  { icon: PenLine, title: "Writing", desc: "AI-powered examiner grades your Task 1 and Task 2 essays on all four IELTS criteria with line-by-line corrections.", color: "#a855f7" },
  { icon: Sparkles, title: "Vocabulary", desc: "1,000+ curated IELTS words with live dictionary, pronunciation audio, and band-level filtering.", color: "#f59e0b" },
];

const STEPS = [
  { num: "01", title: "Sign up", desc: "Create your account in seconds. No credit card required — start with 2 free AI essay gradings." },
  { num: "02", title: "Practice", desc: "Take timed reading and listening tests, write essays, and build vocabulary at your own pace." },
  { num: "03", title: "Get feedback", desc: "Receive detailed AI feedback on your writing with scores, corrections, strengths, and next steps." },
];

const PRICING = [
  { name: "Free", price: "0", period: "", features: ["Unlimited reading tests", "Unlimited listening tests", "Full vocabulary bank", "Articles & podcasts library", "2 AI writing gradings"], cta: "Get started", highlight: false },
  { name: "10 Essays", price: "20,000", period: "UZS", features: ["Everything in Free", "10 AI writing gradings", "Task 1 & Task 2 feedback", "Line-by-line corrections", "PDF download"], cta: "Get started", highlight: false },
  { name: "30 Essays", price: "40,000", period: "UZS", features: ["Everything in Free", "30 AI writing gradings", "Task 1 & Task 2 feedback", "Line-by-line corrections", "PDF download"], cta: "Best value", highlight: true },
  { name: "50 Essays", price: "65,000", period: "UZS", features: ["Everything in Free", "50 AI writing gradings", "Task 1 & Task 2 feedback", "Line-by-line corrections", "PDF download"], cta: "Get started", highlight: false },
];

export default function LandingPage() {
  const router = useRouter();

  useEffect(() => {
    const s = getSession();
    if (s) router.push(s.isAdmin ? "/admin/dashboard" : "/student/home");
  }, [router]);

  return (
    <div style={{ minHeight: "100vh", background: "#0a0c0a", color: "#e4e9e2", fontFamily: BODY }}>
      {/* Glow */}
      <div style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0,
        background: "radial-gradient(1400px 600px at 100% 0%, #0f1e14 0%, transparent 60%), radial-gradient(1000px 500px at 0% 80%, #0f1812 0%, transparent 50%)",
      }} />

      {/* Nav */}
      <nav style={{ position: "relative", zIndex: 10, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "22px 40px", borderBottom: "1px solid #ffffff10" }}>
        <Brand href="/" size={20} />
        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <Link href="/auth/login" style={{ padding: "8px 18px", border: "1px solid #ffffff1e", borderRadius: 999, color: "#e4e9e2", fontSize: 13, fontWeight: 500, textDecoration: "none" }}>
            Sign in
          </Link>
          <Link href="/auth/login" style={{ padding: "8px 18px", background: "#6fe4a5", color: "#0a0c0a", borderRadius: 999, fontSize: 13, fontWeight: 600, textDecoration: "none", border: "none" }}>
            Get started
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ position: "relative", zIndex: 5, padding: "120px 32px 80px", textAlign: "center", maxWidth: 900, margin: "0 auto" }}>
        <div style={{ fontFamily: MONO, fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", color: "#6fe4a5", marginBottom: 24 }}>
          IELTS Preparation Platform
        </div>
        <h1 style={{ fontFamily: DISPLAY, fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 400, letterSpacing: "-0.02em", lineHeight: 1.1, marginBottom: 24 }}>
          Practice smarter,{" "}
          <em style={{ fontStyle: "italic", color: "#8a938a" }}>score higher</em>
        </h1>
        <p style={{ fontSize: 18, color: "#8a938a", maxWidth: 560, margin: "0 auto 40px", lineHeight: 1.6 }}>
          Full IELTS mock tests for Reading, Listening, and Writing — with AI-powered feedback
          that tells you exactly how to improve your band score.
        </p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/auth/login" style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "14px 32px", background: "#6fe4a5", color: "#0a0c0a", borderRadius: 999, fontSize: 14, fontWeight: 600, textDecoration: "none" }}>
            Start practising free →
          </Link>
        </div>
        <p style={{ fontFamily: MONO, fontSize: 11, color: "#5c635c", marginTop: 16, letterSpacing: "0.06em" }}>
          No credit card required · 2 free AI writing reviews included
        </p>
      </section>

      {/* Features */}
      <section style={{ position: "relative", zIndex: 5, padding: "80px 40px", maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <div style={{ fontFamily: MONO, fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", color: "#5c635c", marginBottom: 12 }}>
            What you get
          </div>
          <h2 style={{ fontFamily: DISPLAY, fontSize: 36, fontWeight: 400, letterSpacing: "-0.01em" }}>
            Everything you need for <em style={{ fontStyle: "italic", color: "#8a938a" }}>band 7+</em>
          </h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16 }}>
          {FEATURES.map(f => (
            <div key={f.title} style={{ padding: 28, border: "1px solid #ffffff10", borderRadius: 10, background: "#12171380", backdropFilter: "blur(6px)" }}>
              <div style={{ width: 40, height: 40, borderRadius: 10, display: "grid", placeItems: "center", background: `${f.color}18`, color: f.color, marginBottom: 16 }}>
                <f.icon size={20} />
              </div>
              <h3 style={{ fontFamily: DISPLAY, fontSize: 20, fontWeight: 500, marginBottom: 8 }}>{f.title}</h3>
              <p style={{ fontSize: 14, color: "#8a938a", lineHeight: 1.6 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section style={{ position: "relative", zIndex: 5, padding: "80px 40px", maxWidth: 900, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <div style={{ fontFamily: MONO, fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", color: "#5c635c", marginBottom: 12 }}>
            How it works
          </div>
          <h2 style={{ fontFamily: DISPLAY, fontSize: 36, fontWeight: 400, letterSpacing: "-0.01em" }}>
            Three steps to a <em style={{ fontStyle: "italic", color: "#8a938a" }}>better score</em>
          </h2>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          {STEPS.map(s => (
            <div key={s.num} style={{ display: "flex", gap: 20, alignItems: "flex-start", padding: "24px 28px", border: "1px solid #ffffff10", borderRadius: 10, background: "#12171380" }}>
              <div style={{ fontFamily: MONO, fontSize: 32, fontWeight: 700, color: "#6fe4a5", lineHeight: 1, flexShrink: 0, width: 48 }}>{s.num}</div>
              <div>
                <h3 style={{ fontFamily: DISPLAY, fontSize: 20, fontWeight: 500, marginBottom: 6 }}>{s.title}</h3>
                <p style={{ fontSize: 14, color: "#8a938a", lineHeight: 1.6 }}>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" style={{ position: "relative", zIndex: 5, padding: "80px 40px", maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <div style={{ fontFamily: MONO, fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", color: "#5c635c", marginBottom: 12 }}>
            Pricing
          </div>
          <h2 style={{ fontFamily: DISPLAY, fontSize: 36, fontWeight: 400, letterSpacing: "-0.01em" }}>
            Start free, <em style={{ fontStyle: "italic", color: "#8a938a" }}>upgrade anytime</em>
          </h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16 }}>
          {PRICING.map(p => (
            <div key={p.name} style={{
              padding: 28, borderRadius: 10,
              border: p.highlight ? "1px solid #6fe4a5" : "1px solid #ffffff10",
              background: p.highlight ? "#6fe4a508" : "#12171380",
              display: "flex", flexDirection: "column",
            }}>
              {p.highlight && (
                <div style={{ fontFamily: MONO, fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: "#6fe4a5", marginBottom: 12, fontWeight: 600 }}>
                  Most popular
                </div>
              )}
              <div style={{ fontFamily: DISPLAY, fontSize: 18, fontWeight: 500, marginBottom: 4 }}>{p.name}</div>
              <div style={{ display: "flex", alignItems: "baseline", gap: 4, marginBottom: 20 }}>
                <span style={{ fontFamily: DISPLAY, fontSize: 40, fontWeight: 500, letterSpacing: "-0.02em" }}>{p.price}</span>
                {p.period && <span style={{ fontSize: 14, color: "#5c635c" }}>{p.period}</span>}
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px", display: "flex", flexDirection: "column", gap: 8, flex: 1 }}>
                {p.features.map(f => (
                  <li key={f} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "#8a938a" }}>
                    <CheckCircle size={14} color="#6fe4a5" style={{ flexShrink: 0 }} />
                    {f}
                  </li>
                ))}
              </ul>
              <Link href="/auth/login" style={{
                display: "block", textAlign: "center", padding: "10px 20px", borderRadius: 8,
                background: p.highlight ? "#6fe4a5" : "transparent",
                color: p.highlight ? "#0a0c0a" : "#e4e9e2",
                border: p.highlight ? "none" : "1px solid #ffffff1e",
                fontSize: 13, fontWeight: 600, textDecoration: "none",
              }}>
                {p.cta}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Stats bar */}
      <section style={{ position: "relative", zIndex: 5, padding: "60px 40px", maxWidth: 900, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, textAlign: "center" }}>
          {[
            { val: "44+", label: "Practice tests" },
            { val: "1,000+", label: "Vocabulary words" },
            { val: "4", label: "IELTS skills" },
            { val: "Free", label: "To start" },
          ].map(s => (
            <div key={s.label}>
              <div style={{ fontFamily: DISPLAY, fontSize: 36, fontWeight: 500, color: "#6fe4a5", marginBottom: 4 }}>{s.val}</div>
              <div style={{ fontFamily: MONO, fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: "#5c635c" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ position: "relative", zIndex: 5, padding: "80px 40px 120px", textAlign: "center" }}>
        <h2 style={{ fontFamily: DISPLAY, fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 400, letterSpacing: "-0.01em", marginBottom: 16 }}>
          Ready to improve your IELTS score?
        </h2>
        <p style={{ fontSize: 16, color: "#8a938a", marginBottom: 32 }}>
          Join London LC today. Start practising for free.
        </p>
        <Link href="/auth/login" style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "14px 36px", background: "#6fe4a5", color: "#0a0c0a", borderRadius: 999, fontSize: 14, fontWeight: 600, textDecoration: "none" }}>
          Get started →
        </Link>
      </section>

      {/* Footer */}
      <footer style={{ position: "relative", zIndex: 5, padding: "24px 40px", textAlign: "center", fontSize: 12, letterSpacing: "0.1em", color: "#5c635c", borderTop: "1px solid #ffffff10" }}>
        © {new Date().getFullYear()} London Language Centre · Tashkent, Uzbekistan
      </footer>
    </div>
  );
}
