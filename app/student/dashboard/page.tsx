"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { getSession } from "@/lib/store";

export default function StudentDashboard() {
  const router = useRouter();
  useEffect(() => {
    const s = getSession();
    if (!s || s.isAdmin) { router.replace("/auth/login"); return; }
    router.replace("/student/home");
  }, [router]);
  return null;
}
