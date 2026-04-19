"use client";
import StudentShell from "@/components/StudentShell";
import { Sparkles } from "lucide-react";

export default function VocabComingSoonPage() {
  return (
    <StudentShell>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "64px 20px",
          minHeight: "60vh",
          gap: 18,
        }}
      >
        <div
          style={{
            width: 72,
            height: 72,
            borderRadius: "50%",
            display: "grid",
            placeItems: "center",
            background: "var(--card, rgba(255,255,255,0.04))",
            border: "1px solid var(--border, rgba(255,255,255,0.08))",
          }}
        >
          <Sparkles size={32} />
        </div>

        <h1 style={{ margin: 0, fontSize: 28, fontWeight: 700 }}>Vocabulary</h1>

        <span
          style={{
            display: "inline-block",
            padding: "4px 12px",
            borderRadius: 999,
            fontSize: 12,
            fontWeight: 600,
            letterSpacing: 0.5,
            textTransform: "uppercase",
            background: "rgba(120, 160, 255, 0.15)",
            color: "#9bb5ff",
            border: "1px solid rgba(120, 160, 255, 0.35)",
          }}
        >
          Coming Soon
        </span>

        <p style={{ maxWidth: 520, opacity: 0.7, lineHeight: 1.6, margin: 0 }}>
          A daily IELTS vocabulary feed with search, personalised picks based on
          your reading band, and sourced entries from the Academic Word List,
          Oxford 3000/5000, and IELTS common topics. Launching soon.
        </p>
      </div>
    </StudentShell>
  );
}
