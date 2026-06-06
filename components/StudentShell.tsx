"use client";
import { ReactNode, useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  User2,
  BookOpen, Headphones, PenLine,
  FileText, Mic, Music,
  LogOut, Menu, X,
  UserCircle2,
} from "lucide-react";
import { getSession, clearSession, recordStudentAccess, type StudentSession } from "@/lib/store";
import { useSiteTheme } from "@/lib/site-theme";
import Brand from "@/components/Brand";

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
      { label: "My Profile", href: "/student/profile", icon: User2 },
    ],
  },
  {
    title: "Practice",
    items: [
      { label: "Reading", href: "/student/reading", icon: BookOpen, chev: true },
      { label: "Listening", href: "/student/listening", icon: Headphones, chev: true },
      { label: "Writing", href: "/student/writing", icon: PenLine, chev: true },
      { label: "Speaking", href: "/student/speaking", icon: Mic },
    ],
  },
  {
    title: "Library",
    items: [
      { label: "Articles", href: "/articles", icon: FileText },
      { label: "Music", href: "/music", icon: Music },
    ],
  },
];

const ADMIN_SECTIONS: { title: string; items: NavItem[] }[] = [
  {
    title: "Overview",
    items: [
      { label: "My Profile", href: "/admin/dashboard", icon: UserCircle2 },
    ],
  },
  {
    title: "Sections",
    items: [
      { label: "Reading", href: "/admin/dashboard?tab=tests&type=reading", icon: BookOpen, chev: true },
      { label: "Listening", href: "/admin/dashboard?tab=tests&type=listening", icon: Headphones, chev: true },
      { label: "Writing", href: "/student/writing?practice=1", icon: PenLine, chev: true },
      { label: "Speaking", href: "/student/speaking?practice=1", icon: Mic },
      { label: "Articles", href: "/articles", icon: FileText },
      { label: "Music", href: "/music", icon: Music },
    ],
  },
];

function isActive(path: string, href: string) {
  const base = href.split("?")[0];
  if (base === "/student/profile") return path.startsWith("/student/profile") || path === "/student/home" || path === "/student/results";
  if (base === "/admin/dashboard") return path === "/admin/dashboard";
  return path === base || path.startsWith(base + "/");
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
    if (s) {
      setSession(s);
      if (!s.isAdmin) {
        const di = { userAgent: navigator.userAgent, platform: navigator.platform, language: navigator.language };
        fetch("https://api.ipify.org?format=text")
          .then(r => r.text())
          .then(ip => recordStudentAccess(s.id, ip, di))
          .catch(() => recordStudentAccess(s.id, "unknown", di));
      }
    }
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
        {mobileOpen && (
          <div className="sb-overlay" onClick={() => setMobileOpen(false)} />
        )}

        <aside className={`sb${mobileOpen ? " open" : ""}`}>
          <div className="sb-brand">
            <Brand size={20} />
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
            <div className="crumbs" />
            <div className="tools" />
          </div>
          <div className={`page${wide ? " wide" : ""}`}>{children}</div>
        </main>
      </div>
    </div>
  );
}
