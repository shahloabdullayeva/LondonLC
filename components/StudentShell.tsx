"use client";
// Student-area shell: left sidebar + topbar + page container.
// Applies the "terminal" design tokens scoped under .student-shell
// so it does not leak into landing / admin / auth pages.
import { ReactNode, useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  LayoutDashboard, BarChart3, User2,
  BookOpen, Headphones, PenLine,
  FileText, Mic, Music,
  MessageCircle, LogOut,
} from "lucide-react";
import { getSession, clearSession, type StudentSession } from "@/lib/store";

type NavItem = {
  label: string;
  href: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  pill?: string;
  chev?: boolean;
};

const SECTIONS: { title: string; items: NavItem[] }[] = [
  {
    title: "Overview",
    items: [
      { label: "Dashboard", href: "/student/home", icon: LayoutDashboard },
      { label: "My Results", href: "/student/results", icon: BarChart3 },
      { label: "My Profile", href: "/student/profile", icon: User2 },
    ],
  },
  {
    title: "Practice",
    items: [
      { label: "Reading", href: "/student/reading", icon: BookOpen, chev: true },
      { label: "Listening", href: "/student/listening", icon: Headphones, chev: true },
      { label: "Writing", href: "/student/writing", icon: PenLine, chev: true },
    ],
  },
  {
    title: "Library",
    items: [
      { label: "Articles", href: "/articles", icon: FileText },
      { label: "Podcasts", href: "/podcasts", icon: Mic },
      { label: "Music", href: "/music", icon: Music },
    ],
  },
  {
    title: "Connect",
    items: [
      { label: "Messages", href: "/student/messages", icon: MessageCircle },
    ],
  },
];

function isActive(path: string, href: string) {
  if (href === "/student/home") return path === "/student/home" || path === "/student/dashboard";
  return path === href || path.startsWith(href + "/");
}

function crumbLabel(path: string): string {
  const hit = SECTIONS.flatMap(s => s.items).find(i => isActive(path, i.href));
  return hit?.label ?? "Dashboard";
}

export default function StudentShell({ children, wide }: { children: ReactNode; wide?: boolean }) {
  const path = usePathname();
  const router = useRouter();
  const [session, setSession] = useState<StudentSession | null>(null);

  useEffect(() => {
    const s = getSession();
    if (s && !s.isAdmin) setSession(s);
  }, []);

  const initials = session
    ? `${(session.name?.[0] ?? "").toUpperCase()}${(session.surname?.[0] ?? "").toUpperCase()}`
    : "LC";
  const displayName = session ? `${session.name} ${session.surname}` : "Student";
  const group = session?.group_name ?? "London · LC";

  return (
    <div className="student-shell" data-student-theme="terminal">
      <div className="sh-app">
        <aside className="sb">
          <div className="sb-brand">
            <span className="name">London</span>
            <span className="dot" />
            <span className="lc">LC</span>
          </div>

          <div className="sb-me">
            <div className="av">{initials}</div>
            <div className="info" style={{ minWidth: 0 }}>
              <div className="nm" style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{displayName}</div>
              <div className="gp">{group}</div>
            </div>
          </div>

          {SECTIONS.map(section => (
            <div key={section.title}>
              <div className="sb-section">{section.title}</div>
              {section.items.map(item => {
                const Icon = item.icon;
                const active = isActive(path, item.href);
                return (
                  <Link key={item.href} href={item.href} className={`sb-link${active ? " active" : ""}`}>
                    <Icon size={16} className="ico" />
                    <span className="lab">{item.label}</span>
                    {item.pill && <span className="pill">{item.pill}</span>}
                    {item.chev && <span className="chev">›</span>}
                  </Link>
                );
              })}
            </div>
          ))}

          <div className="sb-foot">
            <button
              className="sb-link"
              onClick={() => { clearSession(); router.push("/auth/login"); }}
            >
              <LogOut size={16} className="ico" />
              <span className="lab">Sign Out</span>
            </button>
          </div>
        </aside>

        <main className="sh-main">
          <div className="topbar">
            <div className="crumbs">
              London · LC <span style={{ opacity: 0.4 }}>/</span> Student <span style={{ opacity: 0.4 }}>/</span> <b>{crumbLabel(path)}</b>
            </div>
            <div className="tools" />
          </div>
          <div className={`page${wide ? " wide" : ""}`}>{children}</div>
        </main>
      </div>
    </div>
  );
}
