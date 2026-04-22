"use client";
import { ReactNode, useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  LayoutDashboard, BarChart3, User2,
  BookOpen, Headphones, PenLine,
  FileText, Mic, Music,
  MessageCircle, LogOut, Menu, X,
  Users, Shield, UserCircle2, Sparkles,
} from "lucide-react";
import { getSession, clearSession, type StudentSession } from "@/lib/store";
import { useSiteTheme } from "@/lib/site-theme";

type NavItem = {
  label: string;
  href: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  pill?: string;
  chev?: boolean;
};

const STUDENT_SECTIONS: { title: string; items: NavItem[] }[] = [
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
      { label: "Vocabulary", href: "/student/vocab", icon: Sparkles },
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

const ADMIN_SECTIONS: { title: string; items: NavItem[] }[] = [
  {
    title: "Admin",
    items: [
      { label: "Results", href: "/admin/dashboard", icon: BarChart3 },
      { label: "Students", href: "/admin/dashboard?tab=students", icon: Users },
      { label: "Manage Teachers", href: "/admin/dashboard?tab=teachers", icon: Shield },
    ],
  },
  {
    title: "Sections",
    items: [
      { label: "Reading", href: "/admin/dashboard?tab=tests&type=reading", icon: BookOpen, chev: true },
      { label: "Listening", href: "/admin/dashboard?tab=tests&type=listening", icon: Headphones, chev: true },
      { label: "Writing", href: "/admin/dashboard?tab=writing", icon: PenLine, chev: true },
      { label: "Articles", href: "/articles", icon: FileText },
      { label: "Podcasts", href: "/podcasts", icon: Mic },
      { label: "Music", href: "/music", icon: Music },
    ],
  },
  {
    title: "Account",
    items: [
      { label: "My Profile", href: "/admin/dashboard?tab=profile", icon: UserCircle2 },
    ],
  },
];

function isActive(path: string, href: string) {
  if (href === "/student/home") return path === "/student/home" || path === "/student/dashboard";
  return path === href || path.startsWith(href + "/");
}

function crumbLabel(path: string, sections: typeof STUDENT_SECTIONS): string {
  const hit = sections.flatMap(s => s.items).find(i => isActive(path, i.href));
  return hit?.label ?? "Dashboard";
}

export default function StudentShell({ children, wide }: { children: ReactNode; wide?: boolean }) {
  const path = usePathname();
  const router = useRouter();
  const [session, setSession] = useState<StudentSession | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme } = useSiteTheme();
  const studentTheme = theme.kind === "preset" ? theme.name : "terminal";

  useEffect(() => {
    const s = getSession();
    if (s) setSession(s);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [path]);

  const isAdmin = session?.isAdmin === true;
  const SECTIONS = isAdmin ? ADMIN_SECTIONS : STUDENT_SECTIONS;
  const initials = session
    ? isAdmin
      ? (session.username?.[0] ?? "A").toUpperCase()
      : `${(session.name?.[0] ?? "").toUpperCase()}${(session.surname?.[0] ?? "").toUpperCase()}`
    : "LC";
  const displayName = session
    ? isAdmin
      ? (session.username ?? "Admin")
      : `${session.name} ${session.surname}`
    : "Student";
  const group = isAdmin ? "Administrator" : (session?.group_name ?? "London · LC");

  return (
    <div className="student-shell" data-student-theme={studentTheme}>
      <div className="sh-app">
        {/* Mobile overlay */}
        {mobileOpen && (
          <div className="sb-overlay" onClick={() => setMobileOpen(false)} />
        )}

        <aside className={`sb${mobileOpen ? " open" : ""}`}>
          <div className="sb-brand">
            <span className="name">London</span>
            <span className="dot" />
            <span className="lc">LC</span>
            <button
              className="sb-close"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              <X size={18} />
            </button>
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
            <button
              className="sb-hamburger"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={20} />
            </button>
            <div className="crumbs">
              London · LC <span style={{ opacity: 0.4 }}>/</span> {isAdmin ? "Admin" : "Student"} <span style={{ opacity: 0.4 }}>/</span> <b>{crumbLabel(path, SECTIONS)}</b>
            </div>
            <div className="tools" />
          </div>
          <div className={`page${wide ? " wide" : ""}`}>{children}</div>
        </main>
      </div>
    </div>
  );
}
