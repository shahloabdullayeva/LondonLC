"use client";
// Simple in-memory + localStorage store for student session
// Replaced by Supabase in production

export type StudentSession = {
  id: string;
  name: string;
  surname: string;
  group_name: string;
  isAdmin: boolean;
  username?: string;
};

// ── Teacher accounts ─────────────────────────────────────────
export type TeacherAccount = {
  id: string;
  username: string;
  password: string;
  createdAt: string;
};

const TEACHERS_KEY = "llc_teachers";
const ROOT_ID = "admin-root";

const DEFAULT_TEACHERS: TeacherAccount[] = [
  { id: ROOT_ID, username: "ShahloA13", password: "as_6914T", createdAt: new Date().toISOString() },
];

export function getTeachers(): TeacherAccount[] {
  if (typeof window === "undefined") return DEFAULT_TEACHERS;
  const raw = localStorage.getItem(TEACHERS_KEY);
  if (raw) return JSON.parse(raw);
  // First run — seed defaults
  localStorage.setItem(TEACHERS_KEY, JSON.stringify(DEFAULT_TEACHERS));
  return DEFAULT_TEACHERS;
}

export function findTeacher(username: string, password: string): TeacherAccount | null {
  return getTeachers().find(
    (t) => t.username === username && t.password === password
  ) ?? null;
}

export function addTeacher(username: string, password: string): { ok: boolean; error?: string } {
  const teachers = getTeachers();
  if (teachers.some((t) => t.username.toLowerCase() === username.toLowerCase())) {
    return { ok: false, error: "Username already exists" };
  }
  teachers.push({ id: `teacher-${Date.now()}`, username, password, createdAt: new Date().toISOString() });
  localStorage.setItem(TEACHERS_KEY, JSON.stringify(teachers));
  return { ok: true };
}

export function deleteTeacher(id: string): void {
  if (id === ROOT_ID) return; // cannot delete the root admin
  const teachers = getTeachers().filter((t) => t.id !== id);
  localStorage.setItem(TEACHERS_KEY, JSON.stringify(teachers));
}

export function saveSession(session: StudentSession) {
  if (typeof window !== "undefined") {
    sessionStorage.setItem("llc_session", JSON.stringify(session));
  }
}

export function getSession(): StudentSession | null {
  if (typeof window !== "undefined") {
    const raw = sessionStorage.getItem("llc_session");
    if (raw) return JSON.parse(raw);
  }
  return null;
}

export function clearSession() {
  if (typeof window !== "undefined") {
    sessionStorage.removeItem("llc_session");
  }
}

export function saveAttempt(attempt: AttemptData) {
  if (typeof window !== "undefined") {
    const key = "llc_attempts";
    const existing = getAttempts();
    existing.push(attempt);
    localStorage.setItem(key, JSON.stringify(existing));
  }
}

export function getAttempts(): AttemptData[] {
  if (typeof window !== "undefined") {
    const raw = localStorage.getItem("llc_attempts");
    if (raw) return JSON.parse(raw);
  }
  return [];
}

export type AttemptData = {
  id: string;
  studentId: string;
  studentName: string;
  studentSurname: string;
  groupName: string;
  testId: string;
  testTitle: string;
  testType: "reading" | "listening";
  testLevel: "academic" | "general";
  answers: Record<string, string>;
  score: number;
  maxScore: number;
  bandScore: number;
  status: "completed" | "cancelled";
  startedAt: string;
  submittedAt: string;
  timeSpentSeconds: number;
};
