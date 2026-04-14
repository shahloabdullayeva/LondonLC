"use client";
import Link from "next/link";
import { BookOpen, Lock } from "lucide-react";
import Brand from "@/components/Brand";

export default function SignupPage() {
  return (
    <div style={{ minHeight: "100vh", background: "#0a0a0a", display: "flex", flexDirection: "column", fontFamily: "Inter, system-ui, sans-serif" }}>
      <div style={{ display: "flex", alignItems: "center", padding: "0 24px", height: 56, borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <Brand href="/" size={20} />
      </div>
      <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: 24 }}>
        <div style={{ maxWidth: 420, width: "100%", background: "#151515", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 20, padding: "40px 32px", textAlign: "center", boxShadow: "0 24px 64px rgba(0,0,0,0.6)" }}>
          <div style={{ width: 56, height: 56, borderRadius: "50%", background: "rgba(255,255,255,0.05)", border: "2px solid rgba(255,255,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
            <Lock size={24} color="#ffffff" />
          </div>
          <h1 style={{ color: "#fff", fontWeight: 800, fontSize: 22, marginBottom: 10 }}>Account Access Restricted</h1>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 14, lineHeight: 1.7, marginBottom: 28 }}>
            Student accounts are created by teachers and administrators only.<br />
            Please contact your teacher to receive your login credentials.
          </p>
          <Link href="/auth/login" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "12px 28px", background: "#ffffff", color: "#0a0a0a", fontWeight: 700, fontSize: 14, borderRadius: 12, textDecoration: "none" }}>
            <BookOpen size={15} /> Go to Login
          </Link>
        </div>
      </div>
    </div>
  );
}
