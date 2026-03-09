"use client";
// Simple in-memory + localStorage store for student session
// Replaced by Supabase in production

export type StudentSession = {
  id: string;
  name: string;
  surname: string;
  group_name: string;
  isAdmin: boolean;
};

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
