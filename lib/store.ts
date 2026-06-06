"use client";

const FUNCTIONS_URL = process.env.NEXT_PUBLIC_MISSION_CONTROL
  ? `${process.env.NEXT_PUBLIC_MISSION_CONTROL}/functions/v1`
  : "";
const TOKEN_KEY = "llc_token";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Row = Record<string, any>;

export function getToken(): string | null {
  if (typeof window === "undefined") return null;
  return localStorage.getItem(TOKEN_KEY);
}
function setToken(token: string) {
  if (typeof window !== "undefined") localStorage.setItem(TOKEN_KEY, token);
}

async function postLogin(
  role: "student" | "teacher", username: string, password: string,
): Promise<{ token: string; user: Record<string, unknown> } | null> {
  if (!FUNCTIONS_URL) return null;
  try {
    const res = await fetch(`${FUNCTIONS_URL}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password, role }),
    });
    if (!res.ok) return null;
    const j = await res.json();
    return j && j.token ? j : null;
  } catch {
    return null;
  }
}

async function callData(op: string, args: Record<string, unknown> = {}): Promise<{ ok: true; data: Row | Row[] | null | number | boolean | string } | { ok: false }> {
  if (!FUNCTIONS_URL) return { ok: false };
  try {
    const res = await fetch(`${FUNCTIONS_URL}/data`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token: getToken(), op, args }),
    });
    if (!res.ok) return { ok: false };
    const j = await res.json();
    return { ok: true, data: j.data };
  } catch {
    return { ok: false };
  }
}

export type StudentAccount = {
  id: string;
  username: string;
  password: string;
  name: string;
  surname: string;
  group_name: string;
  createdAt: string;
  lastAccessedAt?: string;
  lastIp?: string;
  lastDeviceInfo?: { userAgent: string; platform: string; language: string };
  anticheatBypass?: boolean;
  isPremium?: boolean;
  gradingCredits?: number;
};

export type TeacherAccount = {
  id: string;
  username: string;
  password: string;
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
  testType: "reading" | "listening" | "speaking" | "writing";
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

function mapStudent(r: Row): StudentAccount {
  return {
    id: r.id, username: r.username, password: r.password ?? "",
    name: r.name, surname: r.surname, group_name: r.group_name, createdAt: r.created_at,
    lastAccessedAt: r.last_accessed_at ?? undefined,
    lastIp: r.last_ip ?? undefined,
    lastDeviceInfo: r.last_device_info ?? undefined,
    anticheatBypass: !!r.anticheat_bypass,
    isPremium: !!r.is_premium,
    gradingCredits: r.grading_credits ?? 0,
  };
}

export async function getStudentAccounts(): Promise<StudentAccount[]> {
  const g = await callData("getStudentAccounts");
  const data = g.ok ? (g.data as Row[]) : null;
  return (data ?? []).map(mapStudent);
}

export async function registerStudent(
  name: string, surname: string, group: string
): Promise<{ username: string; password: string; id: string }> {
  const g = await callData("registerStudent", { name, surname, group });
  if (g.ok && g.data) return g.data as { username: string; password: string; id: string };
  return { username: "", password: "", id: "" };
}

export async function loginStudent(username: string, password: string): Promise<StudentAccount | null> {
  const viaFn = await postLogin("student", username, password);
  if (!viaFn) return null;
  setToken(viaFn.token);
  const u = viaFn.user as Record<string, unknown>;
  return {
    id: String(u.id), username: String(u.username ?? username), password: "",
    name: String(u.name ?? ""), surname: String(u.surname ?? ""),
    group_name: String(u.group_name ?? ""), createdAt: "",
    anticheatBypass: !!u.anticheatBypass, isPremium: !!u.isPremium,
    gradingCredits: Number(u.gradingCredits ?? 0),
  };
}

export async function deleteStudent(id: string): Promise<void> {
  await callData("deleteStudent", { id });
}

export async function updateStudent(
  id: string,
  fields: { name?: string; surname?: string; group_name?: string; username?: string; password?: string; anticheatBypass?: boolean; isPremium?: boolean }
): Promise<{ ok: boolean; error?: string }> {
  const g = await callData("updateStudent", { id, fields });
  if (g.ok && g.data) return g.data as { ok: boolean; error?: string };
  return { ok: false };
}

export async function getTeachers(): Promise<TeacherAccount[]> {
  const g = await callData("getTeachers");
  const data = g.ok ? (g.data as Row[]) : null;
  return (data ?? []).map(r => ({
    id: r.id, username: r.username, password: r.password ?? "",
    createdAt: r.created_at,
    lastAccessedAt: r.last_accessed_at ?? undefined,
    lastIp: r.last_ip ?? undefined,
    lastDeviceInfo: r.last_device_info ?? undefined,
    isRoot: !!r.is_root,
  }));
}

export async function findTeacher(username: string, password: string): Promise<TeacherAccount | null> {
  const viaFn = await postLogin("teacher", username, password);
  if (!viaFn) return null;
  setToken(viaFn.token);
  const u = viaFn.user as Record<string, unknown>;
  return { id: String(u.id), username: String(u.username ?? username), password: "", createdAt: "" };
}

export async function addTeacher(username: string, password: string): Promise<{ ok: boolean; error?: string }> {
  const g = await callData("addTeacher", { username, password });
  if (g.ok && g.data) return g.data as { ok: boolean; error?: string };
  return { ok: false };
}

export async function deleteTeacher(id: string): Promise<void> {
  await callData("deleteTeacher", { id });
}

export async function updateTeacherPassword(id: string, newPassword: string): Promise<void> {
  await callData("updateTeacherPassword", { id, newPassword });
}

export async function resetStudentPassword(id: string): Promise<string> {
  const g = await callData("resetStudentPassword", { id });
  if (g.ok && typeof g.data === "string") return g.data;
  return "";
}

export async function resetTeacherPassword(id: string): Promise<string> {
  const g = await callData("resetTeacherPassword", { id });
  if (g.ok && typeof g.data === "string") return g.data;
  return "";
}

export async function changeStudentOwnPassword(
  id: string, currentPassword: string, newPassword: string,
): Promise<{ ok: boolean; error?: string }> {
  const g = await callData("changeStudentOwnPassword", { id, currentPassword, newPassword });
  if (g.ok && g.data) return g.data as { ok: boolean; error?: string };
  return { ok: false };
}

export async function changeTeacherOwnPassword(
  id: string, currentPassword: string, newPassword: string,
): Promise<{ ok: boolean; error?: string }> {
  const g = await callData("changeTeacherOwnPassword", { id, currentPassword, newPassword });
  if (g.ok && g.data) return g.data as { ok: boolean; error?: string };
  return { ok: false };
}

const SESSION_KEY = "llc_session";

export function saveSession(session: StudentSession) {
  if (typeof window !== "undefined") localStorage.setItem(SESSION_KEY, JSON.stringify(session));
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
    localStorage.removeItem(TOKEN_KEY);
  }
}

export type SpeakingResult = { id: string; title: string; overall: number; createdAt: string };

export function getSpeakingResults(studentId: string): SpeakingResult[] {
  if (typeof window === "undefined") return [];
  try { return JSON.parse(localStorage.getItem(`llc_speaking_${studentId}`) || "[]"); } catch { return []; }
}

export function saveSpeakingResult(studentId: string, r: SpeakingResult) {
  if (typeof window === "undefined") return;
  const list = getSpeakingResults(studentId);
  localStorage.setItem(`llc_speaking_${studentId}`, JSON.stringify([r, ...list].slice(0, 50)));
}

export async function saveAttempt(attempt: AttemptData): Promise<void> {
  await callData("saveAttempt", { attempt });
}

function mapAttempt(r: Row): AttemptData {
  return {
    id: r.id, studentId: r.student_id, studentName: r.student_name, studentSurname: r.student_surname,
    groupName: r.group_name, testId: r.test_id, testTitle: r.test_title,
    testType: r.test_type as "reading" | "listening" | "speaking" | "writing", testLevel: r.test_level as "academic" | "general",
    answers: (r.answers as Record<string, string>) ?? {}, score: r.score ?? 0, maxScore: r.max_score,
    bandScore: parseFloat(r.band_score) ?? 0, status: r.status as "completed" | "cancelled",
    cancelReason: r.cancel_reason ?? undefined, startedAt: r.started_at ?? "",
    submittedAt: r.submitted_at ?? r.started_at ?? "", timeSpentSeconds: r.time_spent_seconds ?? 0,
    deviceInfo: r.device_info as DeviceInfo | undefined, isTeacherAttempt: r.is_teacher_attempt ?? false,
    teacherId: r.teacher_id ?? undefined,
  };
}

export async function getAttempts(): Promise<AttemptData[]> {
  const g = await callData("getAttempts");
  const data = g.ok ? (g.data as Row[]) : null;
  return (data ?? []).map(mapAttempt);
}

export async function recordStudentAccess(
  id: string, ip: string, deviceInfo: { userAgent: string; platform: string; language: string }
): Promise<void> {
  await callData("recordStudentAccess", { id, ip, deviceInfo });
}

export async function recordTeacherAccess(
  id: string, ip: string, deviceInfo: { userAgent: string; platform: string; language: string }
): Promise<void> {
  await callData("recordTeacherAccess", { id, ip, deviceInfo });
}

export async function getBlockedIPs(): Promise<string[]> {
  const g = await callData("getBlockedIPs");
  if (g.ok) return (g.data as string[]) ?? [];
  return [];
}

export async function blockIP(ip: string): Promise<void> {
  await callData("blockIP", { ip });
}

export async function unblockIP(ip: string): Promise<void> {
  await callData("unblockIP", { ip });
}

export async function isIPBlocked(ip: string): Promise<boolean> {
  const g = await callData("isIPBlocked", { ip });
  if (g.ok) return !!g.data;
  return false;
}

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

function mapSubmission(r: Row): WritingSubmission {
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

export async function getSubmissions(studentId: string): Promise<WritingSubmission[]> {
  const g = await callData("getSubmissions", { studentId });
  const data = g.ok ? (g.data as Row[]) : null;
  return (data ?? []).map(mapSubmission);
}

export async function getAllSubmissions(): Promise<(WritingSubmission & { studentName: string })[]> {
  const g = await callData("getAllSubmissions");
  const data = g.ok ? (g.data as Row[]) : null;
  return (data ?? []).map(r => ({ ...mapSubmission(r), studentName: (r.student_name as string) ?? "Unknown" }));
}

export async function submitEssay(
  studentId: string, studentName: string, prompt: string, essay: string,
): Promise<WritingSubmission | null> {
  const wordCount = essay.trim().split(/\s+/).filter(Boolean).length;
  const g = await callData("submitEssay", { studentId, studentName, prompt, essay });
  if (!(g.ok && g.data)) return null;
  const d = g.data as { id: string; wordCount: number; createdAt: string };
  return {
    id: d.id, studentId, prompt, essay, wordCount,
    taskResponse: null, coherenceCohesion: null, lexicalResource: null, grammarAccuracy: null,
    overallBand: null, feedback: null, corrections: null, strengths: null, nextSteps: null,
    gradedAt: null, createdAt: d.createdAt,
  };
}

async function saveGrade(submissionId: string, grading: Record<string, unknown>) {
  await callData("saveGrade", { submissionId, grading });
}

export async function gradeEssayWithAI(
  submissionId: string, prompt: string, essay: string,
): Promise<{
  taskResponse: number; coherenceCohesion: number; lexicalResource: number; grammarAccuracy: number;
  overallBand: number; feedback: { criterion: string; comment: string }[]; corrections: Correction[];
  strengths: string[]; nextSteps: string[];
} | null> {
  if (!FUNCTIONS_URL) return null;
  const res = await fetch(`${FUNCTIONS_URL}/hyper-task`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ prompt, essay }),
  });
  if (!res.ok) return null;
  const grading = await res.json();
  if (!grading.task_response) return null;
  const corrections: Correction[] = Array.isArray(grading.corrections) ? grading.corrections : [];
  const strengths: string[] = Array.isArray(grading.strengths) ? grading.strengths : [];
  const nextSteps: string[] = Array.isArray(grading.next_steps) ? grading.next_steps : [];
  await saveGrade(submissionId, {
    task_response: grading.task_response, coherence_cohesion: grading.coherence_cohesion,
    lexical_resource: grading.lexical_resource, grammar_accuracy: grading.grammar_accuracy,
    overall_band: grading.overall_band, feedback: grading.feedback, corrections, strengths, next_steps: nextSteps,
  });
  return {
    taskResponse: grading.task_response, coherenceCohesion: grading.coherence_cohesion,
    lexicalResource: grading.lexical_resource, grammarAccuracy: grading.grammar_accuracy,
    overallBand: grading.overall_band, feedback: grading.feedback, corrections, strengths, nextSteps,
  };
}

export async function gradeTask1WithAI(
  submissionId: string, imageBase64: string, mediaType: string, promptDescription: string, essay: string,
): Promise<{
  taskAchievement: number; coherenceCohesion: number; lexicalResource: number; grammarAccuracy: number;
  overallBand: number; visualType: string; feedback: { criterion: string; comment: string }[];
  corrections: Correction[]; strengths: string[]; nextSteps: string[];
} | null> {
  if (!FUNCTIONS_URL) return null;
  const res = await fetch(`${FUNCTIONS_URL}/grade-task1`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ image_base64: imageBase64, media_type: mediaType, prompt_description: promptDescription, essay }),
  });
  if (!res.ok) return null;
  const grading = await res.json();
  const ta = grading.task_achievement ?? grading.task_response;
  if (ta == null) return null;
  const corrections: Correction[] = Array.isArray(grading.corrections) ? grading.corrections : [];
  const strengths: string[] = Array.isArray(grading.strengths) ? grading.strengths : [];
  const nextSteps: string[] = Array.isArray(grading.next_steps) ? grading.next_steps : [];
  await saveGrade(submissionId, {
    task_response: ta, coherence_cohesion: grading.coherence_cohesion,
    lexical_resource: grading.lexical_resource, grammar_accuracy: grading.grammar_accuracy,
    overall_band: grading.overall_band, feedback: grading.feedback, corrections, strengths, next_steps: nextSteps,
  });
  return {
    taskAchievement: ta, coherenceCohesion: grading.coherence_cohesion,
    lexicalResource: grading.lexical_resource, grammarAccuracy: grading.grammar_accuracy,
    overallBand: grading.overall_band, visualType: grading.visual_type ?? "unknown",
    feedback: grading.feedback, corrections, strengths, nextSteps,
  };
}

export async function getStudentCredits(studentId: string): Promise<number> {
  const g = await callData("getStudentCredits", { studentId });
  if (g.ok) return Number(g.data ?? 0);
  return 0;
}

export async function addGradingCredits(studentId: string, count: number): Promise<boolean> {
  const g = await callData("addGradingCredits", { studentId, count });
  if (g.ok) return !!g.data;
  return false;
}

export type PremiumRequest = {
  id: string;
  studentId: string;
  studentName: string;
  requestedCredits: number;
  status: "pending" | "approved" | "rejected";
  createdAt: string;
  reviewedAt: string | null;
};

function mapPremium(r: Row): PremiumRequest {
  return {
    id: r.id, studentId: r.student_id, studentName: r.student_name,
    requestedCredits: r.requested_credits ?? 10, status: r.status,
    createdAt: r.created_at, reviewedAt: r.reviewed_at ?? null,
  };
}

export async function createPremiumRequest(studentId: string, studentName: string, credits: number = 10): Promise<boolean> {
  const g = await callData("createPremiumRequest", { studentId, studentName, credits });
  if (g.ok) return !!g.data;
  return false;
}

export async function getPremiumRequests(): Promise<PremiumRequest[]> {
  const g = await callData("getPremiumRequests");
  const data = g.ok ? (g.data as Row[]) : null;
  return (data ?? []).map(mapPremium);
}

export async function getStudentPremiumRequest(studentId: string): Promise<PremiumRequest | null> {
  const g = await callData("getStudentPremiumRequest", { studentId });
  const data = g.ok ? (g.data as Row | null) : null;
  return data ? mapPremium(data) : null;
}

export async function reviewPremiumRequest(requestId: string, studentId: string, credits: number, approve: boolean): Promise<boolean> {
  const g = await callData("reviewPremiumRequest", { requestId, studentId, credits, approve });
  if (g.ok) return !!g.data;
  return false;
}
