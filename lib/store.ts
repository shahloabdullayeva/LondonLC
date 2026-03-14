"use client";
import { supabase } from "@/lib/supabase";

// ── Types ──────────────────────────────────────────────────────────────
export type StudentAccount = {
  id: string;
  username: string;
  password: string;
  name: string;
  surname: string;
  group_name: string;
  createdAt: string;
};

export type TeacherAccount = {
  id: string;
  username: string;
  password: string;
  createdAt: string;
};

export type StudentSession = {
  id: string;
  name: string;
  surname: string;
  group_name: string;
  isAdmin: boolean;
  username?: string;
};

export type DeviceInfo = {
  userAgent: string;
  platform: string;
  language: string;
  screenWidth: number;
  screenHeight: number;
  ip: string;
  timestamp: string;
};

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
  deviceInfo?: DeviceInfo;
  isTeacherAttempt?: boolean;
  teacherId?: string;
};

// ── Helpers ────────────────────────────────────────────────────────────
function generateUsername(name: string, surname: string): string {
  const clean = (s: string) => s.trim().replace(/\s+/g, "").replace(/[^a-zA-Z]/g, "");
  const num = Math.floor(1000 + Math.random() * 9000);
  return clean(name) + clean(surname).charAt(0).toUpperCase() + num;
}

function generatePassword(): string {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789";
  return Array.from({ length: 8 }, () => chars[Math.floor(Math.random() * chars.length)]).join("");
}

// ── Student accounts ───────────────────────────────────────────────────
export async function getStudentAccounts(): Promise<StudentAccount[]> {
  const { data } = await supabase.from("students").select("*").order("created_at", { ascending: false });
  return (data ?? []).map(r => ({
    id: r.id, username: r.username, password: r.password,
    name: r.name, surname: r.surname, group_name: r.group_name, createdAt: r.created_at,
  }));
}

export async function registerStudent(
  name: string, surname: string, group: string
): Promise<{ username: string; password: string; id: string }> {
  const username = generateUsername(name, surname);
  const password = generatePassword();
  const id = `student-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
  await supabase.from("students").insert({
    id, username, password,
    name: name.trim(), surname: surname.trim(), group_name: group.trim(),
  });
  return { username, password, id };
}

export async function loginStudent(username: string, password: string): Promise<StudentAccount | null> {
  const { data } = await supabase.from("students")
    .select("*").eq("username", username).eq("password", password).maybeSingle();
  if (!data) return null;
  return { id: data.id, username: data.username, password: data.password, name: data.name, surname: data.surname, group_name: data.group_name, createdAt: data.created_at };
}

export async function deleteStudent(id: string): Promise<void> {
  await supabase.from("students").delete().eq("id", id);
}

// ── Teacher accounts ───────────────────────────────────────────────────
const ROOT_ID = "admin-root";

export async function getTeachers(): Promise<TeacherAccount[]> {
  const { data } = await supabase.from("teachers").select("*").order("created_at", { ascending: true });
  if (!data || data.length === 0) {
    await supabase.from("teachers").upsert({ id: ROOT_ID, username: "ShahloA13", password: "as_6914T" });
    return [{ id: ROOT_ID, username: "ShahloA13", password: "as_6914T", createdAt: new Date().toISOString() }];
  }
  return data.map(r => ({ id: r.id, username: r.username, password: r.password, createdAt: r.created_at }));
}

export async function findTeacher(username: string, password: string): Promise<TeacherAccount | null> {
  const { data } = await supabase.from("teachers")
    .select("*").eq("username", username).eq("password", password).maybeSingle();
  if (!data) return null;
  return { id: data.id, username: data.username, password: data.password, createdAt: data.created_at };
}

export async function addTeacher(username: string, password: string): Promise<{ ok: boolean; error?: string }> {
  const { error } = await supabase.from("teachers").insert({ id: `teacher-${Date.now()}`, username, password });
  if (error) {
    if (error.code === "23505") return { ok: false, error: "Username already exists" };
    return { ok: false, error: error.message };
  }
  return { ok: true };
}

export async function deleteTeacher(id: string): Promise<void> {
  if (id === ROOT_ID) return;
  await supabase.from("teachers").delete().eq("id", id);
}

export async function updateTeacherPassword(id: string, newPassword: string): Promise<void> {
  await supabase.from("teachers").update({ password: newPassword }).eq("id", id);
}

// ── Session (localStorage — intentionally per-device) ──────────────────
const SESSION_KEY = "llc_session";
const STUDENT_CACHE_KEY = "llc_student_cache";

export function saveSession(session: StudentSession) {
  if (typeof window !== "undefined") {
    localStorage.setItem(SESSION_KEY, JSON.stringify(session));
    if (!session.isAdmin) {
      localStorage.setItem(STUDENT_CACHE_KEY, JSON.stringify({ name: session.name, surname: session.surname, group: session.group_name }));
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
  if (typeof window !== "undefined") localStorage.removeItem(SESSION_KEY);
}

export function getStudentCache(): { name: string; surname: string; group: string } | null {
  if (typeof window !== "undefined") {
    const raw = localStorage.getItem(STUDENT_CACHE_KEY);
    if (raw) return JSON.parse(raw);
  }
  return null;
}

// ── Attempts ───────────────────────────────────────────────────────────
export async function saveAttempt(attempt: AttemptData): Promise<void> {
  await supabase.from("attempts").upsert({
    id: attempt.id,
    student_id: attempt.studentId,
    student_name: attempt.studentName,
    student_surname: attempt.studentSurname,
    group_name: attempt.groupName,
    test_id: attempt.testId,
    test_title: attempt.testTitle,
    test_type: attempt.testType,
    test_level: attempt.testLevel,
    answers: attempt.answers,
    score: attempt.score,
    max_score: attempt.maxScore,
    band_score: attempt.bandScore,
    status: attempt.status,
    cancel_reason: attempt.cancelReason ?? null,
    started_at: attempt.startedAt,
    submitted_at: attempt.submittedAt,
    time_spent_seconds: attempt.timeSpentSeconds,
    device_info: attempt.deviceInfo ?? null,
    is_teacher_attempt: attempt.isTeacherAttempt ?? false,
    teacher_id: attempt.teacherId ?? null,
  });
}

export async function getAttempts(): Promise<AttemptData[]> {
  const { data } = await supabase.from("attempts").select("*").order("submitted_at", { ascending: false });
  return (data ?? []).map(r => ({
    id: r.id,
    studentId: r.student_id,
    studentName: r.student_name,
    studentSurname: r.student_surname,
    groupName: r.group_name,
    testId: r.test_id,
    testTitle: r.test_title,
    testType: r.test_type as "reading" | "listening",
    testLevel: r.test_level as "academic" | "general",
    answers: (r.answers as Record<string, string>) ?? {},
    score: r.score ?? 0,
    maxScore: r.max_score,
    bandScore: parseFloat(r.band_score) ?? 0,
    status: r.status as "completed" | "cancelled",
    cancelReason: r.cancel_reason ?? undefined,
    startedAt: r.started_at ?? "",
    submittedAt: r.submitted_at ?? r.started_at ?? "",
    timeSpentSeconds: r.time_spent_seconds ?? 0,
    deviceInfo: r.device_info as DeviceInfo | undefined,
    isTeacherAttempt: r.is_teacher_attempt ?? false,
    teacherId: r.teacher_id ?? undefined,
  }));
}

// ── Blocked IPs ────────────────────────────────────────────────────────
export async function getBlockedIPs(): Promise<string[]> {
  const { data } = await supabase.from("blocked_ips").select("ip");
  return (data ?? []).map(r => r.ip);
}

export async function blockIP(ip: string): Promise<void> {
  await supabase.from("blocked_ips").upsert({ ip });
}

export async function unblockIP(ip: string): Promise<void> {
  await supabase.from("blocked_ips").delete().eq("ip", ip);
}

export async function isIPBlocked(ip: string): Promise<boolean> {
  const { data } = await supabase.from("blocked_ips").select("ip").eq("ip", ip).maybeSingle();
  return !!data;
}
