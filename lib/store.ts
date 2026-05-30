"use client";

// Data layer. Every database operation goes through the `login` and `data`
// Edge Functions, which hold the service-role key and authorize each call. The
// browser never touches the tables directly — see docs/security-hardening-plan.md.

const FUNCTIONS_URL = process.env.NEXT_PUBLIC_SUPABASE_URL
  ? `${process.env.NEXT_PUBLIC_SUPABASE_URL}/functions/v1`
  : "";
const ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "";
const TOKEN_KEY = "llc_token";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Row = Record<string, any>;

// ── Session token (issued by the login function) ───────────────────────
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
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${ANON_KEY}` },
      body: JSON.stringify({ username, password, role }),
    });
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  }
}

// Call an authorized operation on the `data` gateway with the session token.
async function callData<T = unknown>(op: string, args: Record<string, unknown> = {}): Promise<T | null> {
  if (!FUNCTIONS_URL) return null;
  try {
    const res = await fetch(`${FUNCTIONS_URL}/data`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${ANON_KEY}` },
      body: JSON.stringify({ token: getToken(), op, args }),
    });
    if (!res.ok) return null;
    const j = await res.json();
    return (j.data ?? null) as T;
  } catch {
    return null;
  }
}

export type AuthedStudent = {
  id: string;
  username: string;
  name: string;
  surname: string;
  group_name: string;
  anticheatBypass: boolean;
  isPremium: boolean;
  gradingCredits: number;
};

export type AuthedTeacher = { id: string; username: string };

// ── Types ──────────────────────────────────────────────────────────────
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

// ── Student accounts ───────────────────────────────────────────────────
export async function getStudentAccounts(): Promise<StudentAccount[]> {
  const data = await callData<Row[]>("getStudentAccounts");
  return (data ?? []).map(r => ({
    id: r.id, username: r.username, password: r.password ?? "",
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
  const res = await callData<{ username: string; password: string; id: string }>("registerStudent", { name, surname, group });
  return res ?? { username: "", password: "", id: "" };
}

export async function loginStudent(username: string, password: string): Promise<AuthedStudent | null> {
  const result = await postLogin("student", username, password);
  if (!result) return null;
  setToken(result.token);
  return result.user as unknown as AuthedStudent;
}

export async function deleteStudent(id: string): Promise<void> {
  await callData("deleteStudent", { id });
}

export async function updateStudent(
  id: string,
  fields: { name?: string; surname?: string; group_name?: string; username?: string; password?: string; anticheatBypass?: boolean; isPremium?: boolean }
): Promise<{ ok: boolean; error?: string }> {
  return (await callData<{ ok: boolean; error?: string }>("updateStudent", { id, fields })) ?? { ok: false, error: "Network error" };
}

// ── Teacher accounts ───────────────────────────────────────────────────
export async function getTeachers(): Promise<TeacherAccount[]> {
  const data = await callData<Row[]>("getTeachers");
  return (data ?? []).map(r => ({
    id: r.id, username: r.username, password: r.password ?? "",
    createdAt: r.created_at,
    lastAccessedAt: r.last_accessed_at ?? undefined,
    lastIp: r.last_ip ?? undefined,
    lastDeviceInfo: r.last_device_info ?? undefined,
    isRoot: !!r.is_root,
  }));
}

export async function findTeacher(username: string, password: string): Promise<AuthedTeacher | null> {
  const result = await postLogin("teacher", username, password);
  if (!result) return null;
  setToken(result.token);
  return result.user as unknown as AuthedTeacher;
}

export async function addTeacher(username: string, password: string): Promise<{ ok: boolean; error?: string }> {
  return (await callData<{ ok: boolean; error?: string }>("addTeacher", { username, password })) ?? { ok: false, error: "Network error" };
}

export async function deleteTeacher(id: string): Promise<void> {
  await callData("deleteTeacher", { id });
}

export async function updateTeacherPassword(id: string, newPassword: string): Promise<void> {
  await callData("updateTeacherPassword", { id, newPassword });
}

// Reset a password to a fresh random value. Only the bcrypt hash is stored; the
// new plaintext is returned so the admin can hand it over once, then it's gone.
export async function resetStudentPassword(id: string): Promise<string> {
  return (await callData<string>("resetStudentPassword", { id })) ?? "";
}

export async function resetTeacherPassword(id: string): Promise<string> {
  return (await callData<string>("resetTeacherPassword", { id })) ?? "";
}

// Student-initiated password change. Requires the current password to match.
export async function changeStudentOwnPassword(
  id: string, currentPassword: string, newPassword: string,
): Promise<{ ok: boolean; error?: string }> {
  return (await callData<{ ok: boolean; error?: string }>("changeStudentOwnPassword", { id, currentPassword, newPassword })) ?? { ok: false, error: "Network error" };
}

// Teacher-initiated password change (same rules as student).
export async function changeTeacherOwnPassword(
  id: string, currentPassword: string, newPassword: string,
): Promise<{ ok: boolean; error?: string }> {
  return (await callData<{ ok: boolean; error?: string }>("changeTeacherOwnPassword", { id, currentPassword, newPassword })) ?? { ok: false, error: "Network error" };
}

// ── Session (localStorage — intentionally per-device) ──────────────────
const SESSION_KEY = "llc_session";

export function saveSession(session: StudentSession) {
  if (typeof window !== "undefined") {
    localStorage.setItem(SESSION_KEY, JSON.stringify(session));
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
    localStorage.removeItem(TOKEN_KEY);
  }
}

// ── Attempts ───────────────────────────────────────────────────────────
export async function saveAttempt(attempt: AttemptData): Promise<void> {
  await callData("saveAttempt", { attempt });
}

export async function getAttempts(): Promise<AttemptData[]> {
  const data = await callData<Row[]>("getAttempts");
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
  await callData("recordStudentAccess", { id, ip, deviceInfo });
}

export async function recordTeacherAccess(
  id: string, ip: string, deviceInfo: { userAgent: string; platform: string; language: string }
): Promise<void> {
  await callData("recordTeacherAccess", { id, ip, deviceInfo });
}

// ── Blocked IPs ────────────────────────────────────────────────────────
export async function getBlockedIPs(): Promise<string[]> {
  return (await callData<string[]>("getBlockedIPs")) ?? [];
}

export async function blockIP(ip: string): Promise<void> {
  await callData("blockIP", { ip });
}

export async function unblockIP(ip: string): Promise<void> {
  await callData("unblockIP", { ip });
}

export async function isIPBlocked(ip: string): Promise<boolean> {
  return (await callData<boolean>("isIPBlocked", { ip })) ?? false;
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

export async function getSubmissions(studentId: string): Promise<WritingSubmission[]> {
  const data = await callData<Row[]>("getSubmissions", { studentId });
  return (data ?? []).map(mapSubmission);
}

export async function getAllSubmissions(): Promise<(WritingSubmission & { studentName: string })[]> {
  const data = await callData<Row[]>("getAllSubmissions");
  return (data ?? []).map(r => ({
    ...mapSubmission(r),
    studentName: (r.student_name as string) ?? "Unknown",
  }));
}

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

export async function submitEssay(
  studentId: string,
  studentName: string,
  prompt: string,
  essay: string,
): Promise<WritingSubmission | null> {
  const res = await callData<{ id: string; wordCount: number; createdAt: string }>("submitEssay", { studentId, studentName, prompt, essay });
  if (!res) return null;
  return {
    id: res.id, studentId, prompt, essay, wordCount: res.wordCount,
    taskResponse: null, coherenceCohesion: null,
    lexicalResource: null, grammarAccuracy: null,
    overallBand: null, feedback: null,
    corrections: null, strengths: null, nextSteps: null,
    gradedAt: null,
    createdAt: res.createdAt,
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
  if (!FUNCTIONS_URL) return null;

  const res = await fetch(`${FUNCTIONS_URL}/hyper-task`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${ANON_KEY}`,
    },
    body: JSON.stringify({ prompt, essay }),
  });

  if (!res.ok) return null;

  const grading = await res.json();
  if (!grading.task_response) return null;

  const corrections: Correction[] = Array.isArray(grading.corrections) ? grading.corrections : [];
  const strengths: string[] = Array.isArray(grading.strengths) ? grading.strengths : [];
  const nextSteps: string[] = Array.isArray(grading.next_steps) ? grading.next_steps : [];

  await callData("saveGrade", {
    submissionId,
    grading: {
      task_response: grading.task_response,
      coherence_cohesion: grading.coherence_cohesion,
      lexical_resource: grading.lexical_resource,
      grammar_accuracy: grading.grammar_accuracy,
      overall_band: grading.overall_band,
      feedback: grading.feedback,
      corrections,
      strengths,
      next_steps: nextSteps,
    },
  });

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
  if (!FUNCTIONS_URL) return null;

  const res = await fetch(`${FUNCTIONS_URL}/grade-task1`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${ANON_KEY}`,
    },
    body: JSON.stringify({
      image_base64: imageBase64,
      media_type: mediaType,
      prompt_description: promptDescription,
      essay,
    }),
  });

  if (!res.ok) return null;

  const grading = await res.json();
  const ta = grading.task_achievement ?? grading.task_response;
  if (ta == null) return null;

  const corrections: Correction[] = Array.isArray(grading.corrections) ? grading.corrections : [];
  const strengths: string[] = Array.isArray(grading.strengths) ? grading.strengths : [];
  const nextSteps: string[] = Array.isArray(grading.next_steps) ? grading.next_steps : [];

  await callData("saveGrade", {
    submissionId,
    grading: {
      task_response: ta,
      coherence_cohesion: grading.coherence_cohesion,
      lexical_resource: grading.lexical_resource,
      grammar_accuracy: grading.grammar_accuracy,
      overall_band: grading.overall_band,
      feedback: grading.feedback,
      corrections,
      strengths,
      next_steps: nextSteps,
    },
  });

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
  return (await callData<number>("getStudentCredits", { studentId })) ?? 0;
}

export async function addGradingCredits(studentId: string, count: number): Promise<boolean> {
  return (await callData<boolean>("addGradingCredits", { studentId, count })) ?? false;
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
  return (await callData<boolean>("createPremiumRequest", { studentId, studentName, credits })) ?? false;
}

export async function getPremiumRequests(): Promise<PremiumRequest[]> {
  const data = await callData<Row[]>("getPremiumRequests");
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
  const data = await callData<Row>("getStudentPremiumRequest", { studentId });
  if (!data) return null;
  return {
    id: data.id, studentId: data.student_id, studentName: data.student_name,
    requestedCredits: data.requested_credits ?? 10,
    status: data.status, createdAt: data.created_at, reviewedAt: data.reviewed_at ?? null,
  };
}

export async function reviewPremiumRequest(requestId: string, studentId: string, credits: number, approve: boolean): Promise<boolean> {
  return (await callData<boolean>("reviewPremiumRequest", { requestId, studentId, credits, approve })) ?? false;
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

export async function ensureConversations(
  userId: string,
  userName: string,
  groupName: string
): Promise<Conversation[]> {
  const data = await callData<Row[]>("ensureConversations", { userId, userName, groupName });
  return (data ?? []).map(r => ({
    id: r.id as string,
    type: r.type as "dm" | "group",
    name: r.name as string | null,
    participantIds: r.participant_ids as string[],
    lastMessageAt: r.last_message_at as string | null,
    lastMessagePreview: r.last_message_preview as string | null,
  }));
}

export async function getMessages(conversationId: string): Promise<Message[]> {
  const data = await callData<Row[]>("getMessages", { conversationId });
  return (data ?? []).map(r => ({
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
  return await callData<Message>("sendMessage", { conversationId, senderId, senderName, content });
}
