"use client";
import { supabase } from "@/lib/supabase";
import bcrypt from "bcryptjs";

const BCRYPT_ROUNDS = 10;

// Hash a password. If already hashed (bcrypt hash starts with $2), return as-is.
async function hashPassword(plain: string): Promise<string> {
  if (plain.startsWith("$2")) return plain;
  return bcrypt.hash(plain, BCRYPT_ROUNDS);
}

// Compare a plain password against a stored value (supports legacy plaintext + bcrypt).
async function verifyPassword(plain: string, stored: string): Promise<boolean> {
  if (stored.startsWith("$2")) return bcrypt.compare(plain, stored);
  // Legacy plaintext — accept if match, then caller should upgrade the hash
  return plain === stored;
}

// ── Types ──────────────────────────────────────────────────────────────
export type StudentAccount = {
  id: string;
  username: string;
  password: string;
  // Plaintext password for admin recovery. Null for legacy rows created
  // before plain-text storage was enabled.
  plainPassword?: string | null;
  name: string;
  surname: string;
  group_name: string;
  createdAt: string;
  lastAccessedAt?: string;
  lastIp?: string;
  lastDeviceInfo?: { userAgent: string; platform: string; language: string };
  // If true, the anti-cheat listeners (tab-hidden, blur, fullscreen-exit,
  // screenshot) don't cancel this student's tests. Admin-managed exception
  // for students who can't avoid focus loss during work hours.
  anticheatBypass?: boolean;
  isPremium?: boolean;
  gradingCredits?: number;
};

export type TeacherAccount = {
  id: string;
  username: string;
  password: string;
  plainPassword?: string | null;
  createdAt: string;
  lastAccessedAt?: string;
  lastIp?: string;
  lastDeviceInfo?: { userAgent: string; platform: string; language: string };
  isRoot?: boolean;
};

export type StudentSession = {
  id: string;
  name: string;
  surname: string;
  group_name: string;
  isAdmin: boolean;
  username?: string;
  anticheatBypass?: boolean;
  isPremium?: boolean;
  gradingCredits?: number;
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
    plainPassword: r.plain_password ?? null,
    name: r.name, surname: r.surname, group_name: r.group_name, createdAt: r.created_at,
    lastAccessedAt: r.last_accessed_at ?? undefined,
    lastIp: r.last_ip ?? undefined,
    lastDeviceInfo: r.last_device_info ?? undefined,
    anticheatBypass: !!r.anticheat_bypass,
    isPremium: !!r.is_premium,
    gradingCredits: r.grading_credits ?? 0,
  }));
}

export async function registerStudent(
  name: string, surname: string, group: string
): Promise<{ username: string; password: string; id: string }> {
  const username = generateUsername(name, surname);
  const password = generatePassword();
  const id = `student-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
  const hashed = await hashPassword(password);
  await supabase.from("students").insert({
    id, username, password: hashed, plain_password: password,
    name: name.trim(), surname: surname.trim(), group_name: group.trim(),
  });
  // Return the plain password so the admin can share it with the student.
  // It is never stored in plain text — only the hash is saved.
  return { username, password, id };
}

export async function loginStudent(username: string, password: string): Promise<StudentAccount | null> {
  const { data } = await supabase.from("students")
    .select("*").eq("username", username).maybeSingle();
  if (!data) return null;
  const valid = await verifyPassword(password, data.password);
  if (!valid) return null;
  // Auto-upgrade legacy plaintext passwords to bcrypt on first login.
  if (!data.password.startsWith("$2")) {
    const hashed = await hashPassword(password);
    await supabase.from("students").update({ password: hashed }).eq("id", data.id);
  }
  return { id: data.id, username: data.username, password: data.password, name: data.name, surname: data.surname, group_name: data.group_name, createdAt: data.created_at, anticheatBypass: !!data.anticheat_bypass, isPremium: !!data.is_premium, gradingCredits: data.grading_credits ?? 0 };
}

export async function deleteStudent(id: string): Promise<void> {
  await supabase.from("students").delete().eq("id", id);
}

export async function updateStudent(
  id: string,
  fields: { name?: string; surname?: string; group_name?: string; username?: string; password?: string; anticheatBypass?: boolean; isPremium?: boolean }
): Promise<{ ok: boolean; error?: string }> {
  const update: Record<string, string | boolean> = {};
  if (fields.name !== undefined) update.name = fields.name.trim();
  if (fields.surname !== undefined) update.surname = fields.surname.trim();
  if (fields.group_name !== undefined) update.group_name = fields.group_name.trim();
  if (fields.username !== undefined) update.username = fields.username.trim();
  if (fields.password !== undefined) {
    const trimmed = fields.password.trim();
    update.password = await hashPassword(trimmed);
    update.plain_password = trimmed;
  }
  if (fields.anticheatBypass !== undefined) update.anticheat_bypass = fields.anticheatBypass;
  if (fields.isPremium !== undefined) update.is_premium = fields.isPremium;
  const { error } = await supabase.from("students").update(update).eq("id", id);
  if (error) {
    if (error.code === "23505") return { ok: false, error: "Username already exists" };
    return { ok: false, error: error.message };
  }
  return { ok: true };
}

// ── Teacher accounts ───────────────────────────────────────────────────

export async function getTeachers(): Promise<TeacherAccount[]> {
  const { data } = await supabase.from("teachers").select("*").order("created_at", { ascending: true });
  return (data ?? []).map(r => ({
    id: r.id, username: r.username, password: r.password,
    plainPassword: r.plain_password ?? null,
    createdAt: r.created_at,
    lastAccessedAt: r.last_accessed_at ?? undefined,
    lastIp: r.last_ip ?? undefined,
    lastDeviceInfo: r.last_device_info ?? undefined,
    isRoot: !!r.is_root,
  }));
}

export async function findTeacher(username: string, password: string): Promise<TeacherAccount | null> {
  const { data } = await supabase.from("teachers")
    .select("*").eq("username", username).maybeSingle();
  if (!data) return null;
  const valid = await verifyPassword(password, data.password);
  if (!valid) return null;
  // Auto-upgrade legacy plaintext passwords to bcrypt on first login.
  if (!data.password.startsWith("$2")) {
    const hashed = await hashPassword(password);
    await supabase.from("teachers").update({ password: hashed }).eq("id", data.id);
  }
  return { id: data.id, username: data.username, password: data.password, createdAt: data.created_at,
    lastAccessedAt: data.last_accessed_at ?? undefined, lastIp: data.last_ip ?? undefined, lastDeviceInfo: data.last_device_info ?? undefined };
}

export async function addTeacher(username: string, password: string): Promise<{ ok: boolean; error?: string }> {
  const hashed = await hashPassword(password);
  const { error } = await supabase.from("teachers").insert({ id: `teacher-${Date.now()}`, username, password: hashed, plain_password: password });
  if (error) {
    if (error.code === "23505") return { ok: false, error: "Username already exists" };
    return { ok: false, error: error.message };
  }
  return { ok: true };
}

export async function deleteTeacher(id: string): Promise<void> {
  const { data } = await supabase.from("teachers").select("is_root").eq("id", id).maybeSingle();
  if (data?.is_root) return;
  await supabase.from("teachers").delete().eq("id", id);
}

export async function updateTeacherPassword(id: string, newPassword: string): Promise<void> {
  const hashed = await hashPassword(newPassword);
  await supabase.from("teachers").update({ password: hashed, plain_password: newPassword }).eq("id", id);
}

// Save ONLY the plaintext (for admin Show). Does NOT touch the bcrypt hash, so
// the user's login is unaffected — useful when the admin already knows the
// existing password and just wants to make it visible via Show going forward.
export async function setTeacherPlainPassword(id: string, plain: string): Promise<void> {
  await supabase.from("teachers").update({ plain_password: plain }).eq("id", id);
}

export async function setStudentPlainPassword(id: string, plain: string): Promise<void> {
  await supabase.from("students").update({ plain_password: plain }).eq("id", id);
}

// Student-initiated password change. Requires the current password to match
// before updating. Returns an error tag the UI can show directly.
export async function changeStudentOwnPassword(
  id: string, currentPassword: string, newPassword: string,
): Promise<{ ok: boolean; error?: string }> {
  const { data } = await supabase.from("students").select("password").eq("id", id).maybeSingle();
  if (!data) return { ok: false, error: "Account not found." };
  const ok = await verifyPassword(currentPassword, data.password);
  if (!ok) return { ok: false, error: "Current password is incorrect." };
  if (newPassword.trim().length < 4) return { ok: false, error: "New password must be at least 4 characters." };
  const hashed = await hashPassword(newPassword.trim());
  await supabase.from("students").update({ password: hashed, plain_password: newPassword.trim() }).eq("id", id);
  return { ok: true };
}

// Teacher-initiated password change (same rules as student).
export async function changeTeacherOwnPassword(
  id: string, currentPassword: string, newPassword: string,
): Promise<{ ok: boolean; error?: string }> {
  const { data } = await supabase.from("teachers").select("password").eq("id", id).maybeSingle();
  if (!data) return { ok: false, error: "Account not found." };
  const ok = await verifyPassword(currentPassword, data.password);
  if (!ok) return { ok: false, error: "Current password is incorrect." };
  if (newPassword.trim().length < 4) return { ok: false, error: "New password must be at least 4 characters." };
  const hashed = await hashPassword(newPassword.trim());
  await supabase.from("teachers").update({ password: hashed, plain_password: newPassword.trim() }).eq("id", id);
  return { ok: true };
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

// ── Access tracking ────────────────────────────────────────────────────
export async function recordStudentAccess(
  id: string, ip: string, deviceInfo: { userAgent: string; platform: string; language: string }
): Promise<void> {
  await supabase.from("students").update({
    last_accessed_at: new Date().toISOString(),
    last_ip: ip,
    last_device_info: deviceInfo,
  }).eq("id", id);
}

export async function recordTeacherAccess(
  id: string, ip: string, deviceInfo: { userAgent: string; platform: string; language: string }
): Promise<void> {
  await supabase.from("teachers").update({
    last_accessed_at: new Date().toISOString(),
    last_ip: ip,
    last_device_info: deviceInfo,
  }).eq("id", id);
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

// ── Writing submissions ───────────────────────────────────────────────

export type Correction = {
  type: "grammar" | "vocabulary" | "cohesion" | "style" | "spelling" | "punctuation";
  original: string;
  suggestion: string;
  explanation: string;
};

export type WritingSubmission = {
  id: string;
  studentId: string;
  prompt: string;
  essay: string;
  wordCount: number;
  taskResponse: number | null;
  coherenceCohesion: number | null;
  lexicalResource: number | null;
  grammarAccuracy: number | null;
  overallBand: number | null;
  feedback: { criterion: string; comment: string }[] | null;
  corrections: Correction[] | null;
  strengths: string[] | null;
  nextSteps: string[] | null;
  gradedAt: string | null;
  createdAt: string;
};

export async function getLastSubmission(studentId: string): Promise<WritingSubmission | null> {
  const { data } = await supabase
    .from("writing_submissions")
    .select("*")
    .eq("student_id", studentId)
    .order("created_at", { ascending: false })
    .limit(1)
    .maybeSingle();

  if (!data) return null;
  return mapSubmission(data);
}

export async function getSubmissions(studentId: string): Promise<WritingSubmission[]> {
  const { data } = await supabase
    .from("writing_submissions")
    .select("*")
    .eq("student_id", studentId)
    .order("created_at", { ascending: false });

  return (data ?? []).map(mapSubmission);
}

export async function getAllSubmissions(): Promise<(WritingSubmission & { studentName: string })[]> {
  const { data } = await supabase
    .from("writing_submissions")
    .select("*")
    .order("created_at", { ascending: false });

  return (data ?? []).map(r => ({
    ...mapSubmission(r as Record<string, unknown>),
    studentName: (r as Record<string, unknown>).student_name as string ?? "Unknown",
  }));
}

function mapSubmission(r: Record<string, unknown>): WritingSubmission {
  return {
    id: r.id as string,
    studentId: r.student_id as string,
    prompt: r.prompt as string,
    essay: r.essay as string,
    wordCount: r.word_count as number,
    taskResponse: r.task_response as number | null,
    coherenceCohesion: r.coherence_cohesion as number | null,
    lexicalResource: r.lexical_resource as number | null,
    grammarAccuracy: r.grammar_accuracy as number | null,
    overallBand: r.overall_band as number | null,
    feedback: r.feedback as { criterion: string; comment: string }[] | null,
    corrections: r.corrections as Correction[] | null,
    strengths: r.strengths as string[] | null,
    nextSteps: r.next_steps as string[] | null,
    gradedAt: r.graded_at as string | null,
    createdAt: r.created_at as string,
  };
}

export async function submitEssay(
  studentId: string,
  studentName: string,
  prompt: string,
  essay: string,
): Promise<WritingSubmission | null> {
  const id = `ws-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
  const wordCount = essay.trim().split(/\s+/).filter(Boolean).length;

  const { error } = await supabase.from("writing_submissions").insert({
    id,
    student_id: studentId,
    student_name: studentName,
    prompt,
    essay,
    word_count: wordCount,
  });

  if (error) return null;
  return {
    id, studentId, prompt, essay, wordCount,
    taskResponse: null, coherenceCohesion: null,
    lexicalResource: null, grammarAccuracy: null,
    overallBand: null, feedback: null,
    corrections: null, strengths: null, nextSteps: null,
    gradedAt: null,
    createdAt: new Date().toISOString(),
  };
}

export async function gradeEssayWithAI(
  submissionId: string,
  prompt: string,
  essay: string,
): Promise<{
  taskResponse: number;
  coherenceCohesion: number;
  lexicalResource: number;
  grammarAccuracy: number;
  overallBand: number;
  feedback: { criterion: string; comment: string }[];
  corrections: Correction[];
  strengths: string[];
  nextSteps: string[];
} | null> {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!supabaseUrl || !anonKey) return null;

  const res = await fetch(`${supabaseUrl}/functions/v1/hyper-task`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${anonKey}`,
    },
    body: JSON.stringify({ prompt, essay }),
  });

  if (!res.ok) return null;

  const grading = await res.json();
  if (!grading.task_response) return null;

  const corrections: Correction[] = Array.isArray(grading.corrections) ? grading.corrections : [];
  const strengths: string[] = Array.isArray(grading.strengths) ? grading.strengths : [];
  const nextSteps: string[] = Array.isArray(grading.next_steps) ? grading.next_steps : [];

  const now = new Date().toISOString();
  await supabase
    .from("writing_submissions")
    .update({
      task_response: grading.task_response,
      coherence_cohesion: grading.coherence_cohesion,
      lexical_resource: grading.lexical_resource,
      grammar_accuracy: grading.grammar_accuracy,
      overall_band: grading.overall_band,
      feedback: grading.feedback,
      corrections,
      strengths,
      next_steps: nextSteps,
      graded_at: now,
    })
    .eq("id", submissionId);

  return {
    taskResponse: grading.task_response,
    coherenceCohesion: grading.coherence_cohesion,
    lexicalResource: grading.lexical_resource,
    grammarAccuracy: grading.grammar_accuracy,
    overallBand: grading.overall_band,
    feedback: grading.feedback,
    corrections,
    strengths,
    nextSteps,
  };
}

// ── Writing Task 1 grading ────────────────────────────────────────────

export async function gradeTask1WithAI(
  submissionId: string,
  imageBase64: string,
  mediaType: string,
  promptDescription: string,
  essay: string,
): Promise<{
  taskAchievement: number;
  coherenceCohesion: number;
  lexicalResource: number;
  grammarAccuracy: number;
  overallBand: number;
  visualType: string;
  feedback: { criterion: string; comment: string }[];
  corrections: Correction[];
  strengths: string[];
  nextSteps: string[];
} | null> {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!supabaseUrl || !anonKey) return null;

  const res = await fetch(`${supabaseUrl}/functions/v1/grade-task1`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${anonKey}`,
    },
    body: JSON.stringify({
      image_base64: imageBase64,
      media_type: mediaType,
      prompt_description: promptDescription,
      essay,
    }),
  });

  if (!res.ok) {
    console.error("[grade-task1] HTTP error", res.status, await res.text().catch(() => ""));
    return null;
  }

  const grading = await res.json();
  const ta = grading.task_achievement ?? grading.task_response;
  if (ta == null) {
    console.error("[grade-task1] Missing task_achievement in response", grading);
    return null;
  }

  const corrections: Correction[] = Array.isArray(grading.corrections) ? grading.corrections : [];
  const strengths: string[] = Array.isArray(grading.strengths) ? grading.strengths : [];
  const nextSteps: string[] = Array.isArray(grading.next_steps) ? grading.next_steps : [];

  const now = new Date().toISOString();
  await supabase
    .from("writing_submissions")
    .update({
      task_response: ta,
      coherence_cohesion: grading.coherence_cohesion,
      lexical_resource: grading.lexical_resource,
      grammar_accuracy: grading.grammar_accuracy,
      overall_band: grading.overall_band,
      feedback: grading.feedback,
      corrections,
      strengths,
      next_steps: nextSteps,
      graded_at: now,
    })
    .eq("id", submissionId);

  return {
    taskAchievement: ta,
    coherenceCohesion: grading.coherence_cohesion,
    lexicalResource: grading.lexical_resource,
    grammarAccuracy: grading.grammar_accuracy,
    overallBand: grading.overall_band,
    visualType: grading.visual_type ?? "unknown",
    feedback: grading.feedback,
    corrections,
    strengths,
    nextSteps,
  };
}

export async function getStudentCredits(studentId: string): Promise<number> {
  const { data } = await supabase.from("students").select("grading_credits").eq("id", studentId).maybeSingle();
  return data?.grading_credits ?? 0;
}

export async function addGradingCredits(studentId: string, count: number): Promise<boolean> {
  const { data } = await supabase.from("students").select("grading_credits").eq("id", studentId).maybeSingle();
  const current = data?.grading_credits ?? 0;
  const { error } = await supabase.from("students").update({ grading_credits: current + count }).eq("id", studentId);
  return !error;
}

// ── Premium requests ──────────────────────────────────────────────────

export type PremiumRequest = {
  id: string;
  studentId: string;
  studentName: string;
  requestedCredits: number;
  status: "pending" | "approved" | "rejected";
  createdAt: string;
  reviewedAt: string | null;
};

export async function createPremiumRequest(studentId: string, studentName: string, credits: number = 10): Promise<boolean> {
  const existing = await supabase
    .from("premium_requests")
    .select("id")
    .eq("student_id", studentId)
    .eq("status", "pending")
    .maybeSingle();
  if (existing.data) return true;

  const id = `pr-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`;
  const { error } = await supabase.from("premium_requests").insert({
    id, student_id: studentId, student_name: studentName, status: "pending", requested_credits: credits,
  });
  return !error;
}

export async function getPremiumRequests(): Promise<PremiumRequest[]> {
  const { data } = await supabase
    .from("premium_requests")
    .select("*")
    .order("created_at", { ascending: false });
  return (data ?? []).map(r => ({
    id: r.id,
    studentId: r.student_id,
    studentName: r.student_name,
    requestedCredits: r.requested_credits ?? 10,
    status: r.status,
    createdAt: r.created_at,
    reviewedAt: r.reviewed_at ?? null,
  }));
}

export async function getStudentPremiumRequest(studentId: string): Promise<PremiumRequest | null> {
  const { data } = await supabase
    .from("premium_requests")
    .select("*")
    .eq("student_id", studentId)
    .eq("status", "pending")
    .maybeSingle();
  if (!data) return null;
  return {
    id: data.id, studentId: data.student_id, studentName: data.student_name,
    requestedCredits: data.requested_credits ?? 10,
    status: data.status, createdAt: data.created_at, reviewedAt: data.reviewed_at ?? null,
  };
}

export async function reviewPremiumRequest(requestId: string, studentId: string, credits: number, approve: boolean): Promise<boolean> {
  const { error } = await supabase.from("premium_requests").update({
    status: approve ? "approved" : "rejected",
    reviewed_at: new Date().toISOString(),
  }).eq("id", requestId);
  if (error) return false;
  if (approve) {
    const { data: student } = await supabase.from("students").select("grading_credits").eq("id", studentId).maybeSingle();
    const current = student?.grading_credits ?? 0;
    await supabase.from("students").update({ grading_credits: current + credits }).eq("id", studentId);
  }
  return true;
}

// ── Messaging ─────────────────────────────────────────────────────────

export type Conversation = {
  id: string;
  type: "dm" | "group";
  name: string | null;
  participantIds: string[];
  lastMessageAt: string | null;
  lastMessagePreview: string | null;
};

export type Message = {
  id: string;
  conversationId: string;
  senderId: string;
  senderName: string;
  content: string;
  createdAt: string;
};

function dmConversationId(a: string, b: string): string {
  return a < b ? `dm-${a}-${b}` : `dm-${b}-${a}`;
}

function groupConversationId(groupName: string): string {
  return `group-${groupName.replace(/\s+/g, "-").toLowerCase()}`;
}

export async function ensureConversations(
  userId: string,
  userName: string,
  groupName: string
): Promise<Conversation[]> {
  const { data: teachers } = await supabase
    .from("teachers")
    .select("id, username");

  const convos: { id: string; type: "dm" | "group"; name: string; participantIds: string[] }[] = [];

  for (const t of teachers ?? []) {
    convos.push({
      id: dmConversationId(userId, t.id),
      type: "dm",
      name: t.username,
      participantIds: [userId, t.id],
    });
  }

  convos.push({
    id: groupConversationId(groupName),
    type: "group",
    name: `Study group · ${groupName}`,
    participantIds: [userId],
  });

  for (const c of convos) {
    await supabase.from("conversations").upsert(
      {
        id: c.id,
        type: c.type,
        name: c.name,
        participant_ids: c.participantIds,
      },
      { onConflict: "id", ignoreDuplicates: true }
    );
  }

  const { data: rows } = await supabase
    .from("conversations")
    .select("*")
    .contains("participant_ids", [userId])
    .order("last_message_at", { ascending: false, nullsFirst: false });

  return (rows ?? []).map((r: Record<string, unknown>) => ({
    id: r.id as string,
    type: r.type as "dm" | "group",
    name: r.name as string | null,
    participantIds: r.participant_ids as string[],
    lastMessageAt: r.last_message_at as string | null,
    lastMessagePreview: r.last_message_preview as string | null,
  }));
}

export async function getMessages(conversationId: string): Promise<Message[]> {
  const { data } = await supabase
    .from("messages")
    .select("*")
    .eq("conversation_id", conversationId)
    .order("created_at", { ascending: true });

  return (data ?? []).map((r: Record<string, unknown>) => ({
    id: r.id as string,
    conversationId: r.conversation_id as string,
    senderId: r.sender_id as string,
    senderName: r.sender_name as string,
    content: r.content as string,
    createdAt: r.created_at as string,
  }));
}

export async function sendMessage(
  conversationId: string,
  senderId: string,
  senderName: string,
  content: string
): Promise<Message | null> {
  const id = `msg-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
  const now = new Date().toISOString();

  const { error } = await supabase.from("messages").insert({
    id,
    conversation_id: conversationId,
    sender_id: senderId,
    sender_name: senderName,
    content,
    created_at: now,
  });

  if (error) return null;

  await supabase
    .from("conversations")
    .update({
      last_message_at: now,
      last_message_preview: content.slice(0, 100),
    })
    .eq("id", conversationId);

  return {
    id,
    conversationId,
    senderId,
    senderName,
    content,
    createdAt: now,
  };
}
