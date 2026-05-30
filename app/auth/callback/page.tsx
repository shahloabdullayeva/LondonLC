"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { saveSession } from "@/lib/store";

export default function AuthCallbackPage() {
  const router = useRouter();

  useEffect(() => {
    const handle = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session?.user) {
        router.push("/auth/login");
        return;
      }

      const user = session.user;
      const meta = user.user_metadata || {};
      const name = meta.name || meta.full_name?.split(" ")[0] || "User";
      const surname = meta.surname || meta.full_name?.split(" ").slice(1).join(" ") || "";
      const studentId = `student-${user.id.slice(0, 12)}`;

      await supabase.from("students").upsert({
        id: studentId,
        username: user.email || studentId,
        password: "supabase-auth",
        name,
        surname,
        group_name: "Public",
      }, { onConflict: "username", ignoreDuplicates: true });

      saveSession({
        id: studentId,
        name,
        surname,
        group_name: "Public",
        isAdmin: false,
      });

      router.push("/student/home");
    };

    handle();
  }, [router]);

  return (
    <div style={{ minHeight: "100vh", display: "grid", placeItems: "center", background: "var(--site-bg)", color: "var(--site-text)", fontFamily: "-apple-system, BlinkMacSystemFont, system-ui, Roboto, Helvetica, Arial, sans-serif" }}>
      <p style={{ fontSize: 14, color: "var(--site-text-muted)" }}>Signing you in…</p>
    </div>
  );
}
