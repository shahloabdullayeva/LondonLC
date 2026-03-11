"use client";
// Simple in-memory + localStorage store for student session
// Replaced by Supabase in production

// ── Student accounts ──────────────────────────────────────────
export type StudentAccount = {
  id: string;
  username: string;
  password: string;
  name: string;
  surname: string;
  group_name: string;
  createdAt: string;
};

const STUDENTS_KEY = "llc_students";

function generateUsername(name: string, surname: string): string {
  const clean = (s: string) => s.trim().replace(/\s+/g, "").replace(/[^a-zA-Z]/g, "");
  const num = Math.floor(1000 + Math.random() * 9000);
  return clean(name) + clean(surname).charAt(0).toUpperCase() + num;
}

function generatePassword(): string {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789";
  return Array.from({ length: 8 }, () => chars[Math.floor(Math.random() * chars.length)]).join("");
}

export function getStudentAccounts(): StudentAccount[] {
  if (typeof window === "undefined") return [];
  const raw = localStorage.getItem(STUDENTS_KEY);
  return raw ? JSON.parse(raw) : [];
}

export function registerStudent(
  name: string, surname: string, group: string
): { username: string; password: string; id: string } {
  const accounts = getStudentAccounts();
  const username = generateUsername(name, surname);
  const password = generatePassword();
  const id = `student-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
  accounts.push({ id, username, password, name: name.trim(), surname: surname.trim(), group_name: group.trim(), createdAt: new Date().toISOString() });
  localStorage.setItem(STUDENTS_KEY, JSON.stringify(accounts));
  return { username, password, id };
}

export function loginStudent(username: string, password: string): StudentAccount | null {
  return getStudentAccounts().find(
    (s) => s.username === username && s.password === password
  ) ?? null;
}

export function deleteStudent(id: string): void {
  const accounts = getStudentAccounts().filter((s) => s.id !== id);
  localStorage.setItem(STUDENTS_KEY, JSON.stringify(accounts));
}

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

const SESSION_KEY = "llc_session";
const STUDENT_CACHE_KEY = "llc_student_cache";

export function saveSession(session: StudentSession) {
  if (typeof window !== "undefined") {
    localStorage.setItem(SESSION_KEY, JSON.stringify(session));
    // Cache student info for pre-filling the login form next time
    if (!session.isAdmin) {
      localStorage.setItem(STUDENT_CACHE_KEY, JSON.stringify({
        name: session.name,
        surname: session.surname,
        group: session.group_name,
      }));
    }
  }
}

export function getSession(): StudentSession | null {
  if (typeof window !== "undefined") {
    const raw = localStorage.getItem(SESSION_KEY);
    if (raw) return JSON.parse(raw);
  }
  return null;
}

export function clearSession() {
  if (typeof window !== "undefined") {
    localStorage.removeItem(SESSION_KEY);
    // Keep student cache so the form stays pre-filled next visit
  }
}

/** Returns last-used student details for pre-filling the login form. */
export function getStudentCache(): { name: string; surname: string; group: string } | null {
  if (typeof window !== "undefined") {
    const raw = localStorage.getItem(STUDENT_CACHE_KEY);
    if (raw) return JSON.parse(raw);
  }
  return null;
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
  cancelReason?: string;
  startedAt: string;
  submittedAt: string;
  timeSpentSeconds: number;
};
