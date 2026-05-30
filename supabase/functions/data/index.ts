// Supabase Edge Function: authorized data gateway.
//
// Every database operation that used to run in the browser with the anon key
// now goes through here. The function verifies the caller's session token
// (issued by the `login` function), enforces teacher-vs-self authorization,
// and runs the query with the service-role key. This lets Row Level Security
// deny the anon key entirely (see Phase 3 of docs/security-hardening-plan.md).
//
// Deploy:  supabase functions deploy data
// Secret:  uses the same AUTH_JWT_SECRET as the `login` function.
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.0";
import bcrypt from "npm:bcryptjs@2.4.3";
import { verify } from "https://deno.land/x/djwt@v3.0.2/mod.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });

const SUPABASE_URL = Deno.env.get("SUPABASE_URL");
const SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
const AUTH_JWT_SECRET = Deno.env.get("AUTH_JWT_SECRET");

const sb = createClient(SUPABASE_URL ?? "", SERVICE_ROLE_KEY ?? "");

type Args = Record<string, unknown>;
type Session = { sub: string; role: "student" | "teacher" };

class HttpError extends Error {
  constructor(public status: number, msg: string) {
    super(msg);
  }
}

function generateUsername(name: string, surname: string): string {
  const clean = (s: string) => s.trim().replace(/\s+/g, "").replace(/[^a-zA-Z]/g, "");
  const num = Math.floor(1000 + Math.random() * 9000);
  return clean(name) + clean(surname).charAt(0).toUpperCase() + num;
}

function generatePassword(): string {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789";
  return Array.from({ length: 8 }, () => chars[Math.floor(Math.random() * chars.length)]).join("");
}

const s = (v: unknown) => String(v ?? "");
const sTrim = (v: unknown) => s(v).trim();

async function dispatch(op: string, a: Args, ses: Session): Promise<unknown> {
  const requireTeacher = () => {
    if (ses.role !== "teacher") throw new HttpError(403, "Forbidden");
  };
  const requireSelfOrTeacher = (id: unknown) => {
    if (ses.role !== "teacher" && ses.sub !== s(id)) throw new HttpError(403, "Forbidden");
  };

  switch (op) {
    // ── Students (admin) ───────────────────────────────────────────────
    case "getStudentAccounts": {
      requireTeacher();
      const { data } = await sb.from("students").select("*").order("created_at", { ascending: false });
      // Never ship password hashes to the browser.
      return (data ?? []).map((r) => ({ ...r, password: "" }));
    }
    case "registerStudent": {
      requireTeacher();
      const username = generateUsername(s(a.name), s(a.surname));
      const password = generatePassword();
      const id = `student-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
      await sb.from("students").insert({
        id, username, password: bcrypt.hashSync(password, 10),
        name: sTrim(a.name), surname: sTrim(a.surname), group_name: sTrim(a.group),
      });
      return { username, password, id };
    }
    case "deleteStudent": {
      requireTeacher();
      await sb.from("students").delete().eq("id", s(a.id));
      return { ok: true };
    }
    case "updateStudent": {
      requireTeacher();
      const f = (a.fields ?? {}) as Args;
      const update: Record<string, string | boolean> = {};
      if (f.name !== undefined) update.name = sTrim(f.name);
      if (f.surname !== undefined) update.surname = sTrim(f.surname);
      if (f.group_name !== undefined) update.group_name = sTrim(f.group_name);
      if (f.username !== undefined) update.username = sTrim(f.username);
      if (f.password !== undefined) update.password = bcrypt.hashSync(sTrim(f.password), 10);
      if (f.anticheatBypass !== undefined) update.anticheat_bypass = !!f.anticheatBypass;
      if (f.isPremium !== undefined) update.is_premium = !!f.isPremium;
      const { error } = await sb.from("students").update(update).eq("id", s(a.id));
      if (error) {
        if (error.code === "23505") return { ok: false, error: "Username already exists" };
        return { ok: false, error: error.message };
      }
      return { ok: true };
    }
    case "resetStudentPassword": {
      requireTeacher();
      const password = generatePassword();
      await sb.from("students").update({ password: bcrypt.hashSync(password, 10) }).eq("id", s(a.id));
      return password;
    }
    case "addGradingCredits": {
      requireTeacher();
      const { data } = await sb.from("students").select("grading_credits").eq("id", s(a.studentId)).maybeSingle();
      const current = data?.grading_credits ?? 0;
      const { error } = await sb.from("students").update({ grading_credits: current + Number(a.count) }).eq("id", s(a.studentId));
      return !error;
    }
    case "getStudentCredits": {
      requireSelfOrTeacher(a.studentId);
      const { data } = await sb.from("students").select("grading_credits").eq("id", s(a.studentId)).maybeSingle();
      return data?.grading_credits ?? 0;
    }
    case "changeStudentOwnPassword": {
      requireSelfOrTeacher(a.id);
      const { data } = await sb.from("students").select("password").eq("id", s(a.id)).maybeSingle();
      if (!data) return { ok: false, error: "Account not found." };
      const stored: string = data.password ?? "";
      const ok = stored.startsWith("$2") ? bcrypt.compareSync(s(a.currentPassword), stored) : s(a.currentPassword) === stored;
      if (!ok) return { ok: false, error: "Current password is incorrect." };
      if (sTrim(a.newPassword).length < 4) return { ok: false, error: "New password must be at least 4 characters." };
      await sb.from("students").update({ password: bcrypt.hashSync(sTrim(a.newPassword), 10) }).eq("id", s(a.id));
      return { ok: true };
    }
    case "recordStudentAccess": {
      requireSelfOrTeacher(a.id);
      await sb.from("students").update({
        last_accessed_at: new Date().toISOString(), last_ip: s(a.ip), last_device_info: a.deviceInfo,
      }).eq("id", s(a.id));
      return { ok: true };
    }

    // ── Teachers (admin) ───────────────────────────────────────────────
    case "getTeachers": {
      requireTeacher();
      const { data } = await sb.from("teachers").select("*").order("created_at", { ascending: true });
      return (data ?? []).map((r) => ({ ...r, password: "" }));
    }
    case "addTeacher": {
      requireTeacher();
      const { error } = await sb.from("teachers").insert({ id: `teacher-${Date.now()}`, username: s(a.username), password: bcrypt.hashSync(s(a.password), 10) });
      if (error) {
        if (error.code === "23505") return { ok: false, error: "Username already exists" };
        return { ok: false, error: error.message };
      }
      return { ok: true };
    }
    case "deleteTeacher": {
      requireTeacher();
      const { data } = await sb.from("teachers").select("is_root").eq("id", s(a.id)).maybeSingle();
      if (data?.is_root) return { ok: false };
      await sb.from("teachers").delete().eq("id", s(a.id));
      return { ok: true };
    }
    case "updateTeacherPassword": {
      requireTeacher();
      await sb.from("teachers").update({ password: bcrypt.hashSync(s(a.newPassword), 10) }).eq("id", s(a.id));
      return { ok: true };
    }
    case "resetTeacherPassword": {
      requireTeacher();
      const password = generatePassword();
      await sb.from("teachers").update({ password: bcrypt.hashSync(password, 10) }).eq("id", s(a.id));
      return password;
    }
    case "changeTeacherOwnPassword": {
      requireSelfOrTeacher(a.id);
      const { data } = await sb.from("teachers").select("password").eq("id", s(a.id)).maybeSingle();
      if (!data) return { ok: false, error: "Account not found." };
      const stored: string = data.password ?? "";
      const ok = stored.startsWith("$2") ? bcrypt.compareSync(s(a.currentPassword), stored) : s(a.currentPassword) === stored;
      if (!ok) return { ok: false, error: "Current password is incorrect." };
      if (sTrim(a.newPassword).length < 4) return { ok: false, error: "New password must be at least 4 characters." };
      await sb.from("teachers").update({ password: bcrypt.hashSync(sTrim(a.newPassword), 10) }).eq("id", s(a.id));
      return { ok: true };
    }
    case "recordTeacherAccess": {
      requireSelfOrTeacher(a.id);
      await sb.from("teachers").update({
        last_accessed_at: new Date().toISOString(), last_ip: s(a.ip), last_device_info: a.deviceInfo,
      }).eq("id", s(a.id));
      return { ok: true };
    }

    // ── Attempts ───────────────────────────────────────────────────────
    case "saveAttempt": {
      const at = (a.attempt ?? {}) as Args;
      // Students may only save their own attempts; teachers may save any
      // (used by practice mode).
      if (ses.role !== "teacher" && ses.sub !== s(at.studentId)) throw new HttpError(403, "Forbidden");
      await sb.from("attempts").upsert({
        id: at.id, student_id: at.studentId, student_name: at.studentName,
        student_surname: at.studentSurname, group_name: at.groupName,
        test_id: at.testId, test_title: at.testTitle, test_type: at.testType,
        test_level: at.testLevel, answers: at.answers, score: at.score,
        max_score: at.maxScore, band_score: at.bandScore, status: at.status,
        cancel_reason: at.cancelReason ?? null, started_at: at.startedAt,
        submitted_at: at.submittedAt, time_spent_seconds: at.timeSpentSeconds,
        device_info: at.deviceInfo ?? null, is_teacher_attempt: at.isTeacherAttempt ?? false,
        teacher_id: at.teacherId ?? null,
      });
      return { ok: true };
    }
    case "getAttempts": {
      requireTeacher();
      const { data } = await sb.from("attempts").select("*").order("submitted_at", { ascending: false });
      return data ?? [];
    }

    // ── Blocked IPs ──────────────────────────────────────────────────────
    case "getBlockedIPs": {
      requireTeacher();
      const { data } = await sb.from("blocked_ips").select("ip");
      return (data ?? []).map((r) => r.ip);
    }
    case "blockIP": {
      requireTeacher();
      await sb.from("blocked_ips").upsert({ ip: s(a.ip) });
      return { ok: true };
    }
    case "unblockIP": {
      requireTeacher();
      await sb.from("blocked_ips").delete().eq("ip", s(a.ip));
      return { ok: true };
    }
    case "isIPBlocked": {
      const { data } = await sb.from("blocked_ips").select("ip").eq("ip", s(a.ip)).maybeSingle();
      return !!data;
    }

    // ── Writing submissions ──────────────────────────────────────────────
    case "getSubmissions": {
      requireSelfOrTeacher(a.studentId);
      const { data } = await sb.from("writing_submissions").select("*").eq("student_id", s(a.studentId)).order("created_at", { ascending: false });
      return data ?? [];
    }
    case "getAllSubmissions": {
      requireTeacher();
      const { data } = await sb.from("writing_submissions").select("*").order("created_at", { ascending: false });
      return data ?? [];
    }
    case "submitEssay": {
      requireSelfOrTeacher(a.studentId);
      const id = `ws-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
      const wordCount = s(a.essay).trim().split(/\s+/).filter(Boolean).length;
      const { error } = await sb.from("writing_submissions").insert({
        id, student_id: s(a.studentId), student_name: s(a.studentName),
        prompt: s(a.prompt), essay: s(a.essay), word_count: wordCount,
      });
      if (error) return null;
      return { id, wordCount, createdAt: new Date().toISOString() };
    }
    case "saveGrade": {
      // Persist AI grading produced by the grading functions.
      const g = (a.grading ?? {}) as Args;
      await sb.from("writing_submissions").update({
        task_response: g.task_response, coherence_cohesion: g.coherence_cohesion,
        lexical_resource: g.lexical_resource, grammar_accuracy: g.grammar_accuracy,
        overall_band: g.overall_band, feedback: g.feedback, corrections: g.corrections,
        strengths: g.strengths, next_steps: g.next_steps, graded_at: new Date().toISOString(),
      }).eq("id", s(a.submissionId));
      return { ok: true };
    }

    // ── Premium requests ─────────────────────────────────────────────────
    case "getPremiumRequests": {
      requireTeacher();
      const { data } = await sb.from("premium_requests").select("*").order("created_at", { ascending: false });
      return data ?? [];
    }
    case "createPremiumRequest": {
      requireSelfOrTeacher(a.studentId);
      const existing = await sb.from("premium_requests").select("id").eq("student_id", s(a.studentId)).eq("status", "pending").maybeSingle();
      if (existing.data) return true;
      const id = `pr-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`;
      const { error } = await sb.from("premium_requests").insert({
        id, student_id: s(a.studentId), student_name: s(a.studentName), status: "pending", requested_credits: Number(a.credits ?? 10),
      });
      return !error;
    }
    case "getStudentPremiumRequest": {
      requireSelfOrTeacher(a.studentId);
      const { data } = await sb.from("premium_requests").select("*").eq("student_id", s(a.studentId)).eq("status", "pending").maybeSingle();
      return data ?? null;
    }
    case "reviewPremiumRequest": {
      requireTeacher();
      const { error } = await sb.from("premium_requests").update({
        status: a.approve ? "approved" : "rejected", reviewed_at: new Date().toISOString(),
      }).eq("id", s(a.requestId));
      if (error) return false;
      if (a.approve) {
        const { data: student } = await sb.from("students").select("grading_credits").eq("id", s(a.studentId)).maybeSingle();
        const current = student?.grading_credits ?? 0;
        await sb.from("students").update({ grading_credits: current + Number(a.credits) }).eq("id", s(a.studentId));
      }
      return true;
    }

    // ── Messaging ────────────────────────────────────────────────────────
    case "ensureConversations": {
      requireSelfOrTeacher(a.userId);
      const userId = s(a.userId);
      const { data: teachers } = await sb.from("teachers").select("id, username");
      const convos: { id: string; type: string; name: string; participant_ids: string[] }[] = [];
      for (const t of teachers ?? []) {
        const pair = userId < t.id ? `dm-${userId}-${t.id}` : `dm-${t.id}-${userId}`;
        convos.push({ id: pair, type: "dm", name: t.username, participant_ids: [userId, t.id] });
      }
      const groupId = `group-${s(a.groupName).replace(/\s+/g, "-").toLowerCase()}`;
      convos.push({ id: groupId, type: "group", name: `Study group · ${s(a.groupName)}`, participant_ids: [userId] });
      for (const c of convos) {
        await sb.from("conversations").upsert(c, { onConflict: "id", ignoreDuplicates: true });
      }
      const { data: rows } = await sb.from("conversations").select("*").contains("participant_ids", [userId]).order("last_message_at", { ascending: false, nullsFirst: false });
      return rows ?? [];
    }
    case "getMessages": {
      const { data: convo } = await sb.from("conversations").select("participant_ids").eq("id", s(a.conversationId)).maybeSingle();
      const participants = (convo?.participant_ids ?? []) as string[];
      if (ses.role !== "teacher" && !participants.includes(ses.sub)) throw new HttpError(403, "Forbidden");
      const { data } = await sb.from("messages").select("*").eq("conversation_id", s(a.conversationId)).order("created_at", { ascending: true });
      return data ?? [];
    }
    case "sendMessage": {
      if (ses.role !== "teacher" && ses.sub !== s(a.senderId)) throw new HttpError(403, "Forbidden");
      const id = `msg-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
      const now = new Date().toISOString();
      const { error } = await sb.from("messages").insert({
        id, conversation_id: s(a.conversationId), sender_id: s(a.senderId),
        sender_name: s(a.senderName), content: s(a.content), created_at: now,
      });
      if (error) return null;
      await sb.from("conversations").update({ last_message_at: now, last_message_preview: s(a.content).slice(0, 100) }).eq("id", s(a.conversationId));
      return { id, conversationId: s(a.conversationId), senderId: s(a.senderId), senderName: s(a.senderName), content: s(a.content), createdAt: now };
    }

    default:
      throw new HttpError(400, `Unknown op: ${op}`);
  }
}

serve(async (req: Request) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  if (req.method !== "POST") return json({ error: "Method not allowed" }, 405);
  if (!SUPABASE_URL || !SERVICE_ROLE_KEY || !AUTH_JWT_SECRET) return json({ error: "Not configured" }, 500);

  let payload: { token?: string; op?: string; args?: Args };
  try {
    payload = await req.json();
  } catch {
    return json({ error: "Invalid request" }, 400);
  }

  const { token, op, args } = payload;
  if (!token || !op) return json({ error: "Missing token or op" }, 400);

  let session: Session;
  try {
    const key = await crypto.subtle.importKey(
      "raw", new TextEncoder().encode(AUTH_JWT_SECRET),
      { name: "HMAC", hash: "SHA-256" }, false, ["verify"],
    );
    const claims = await verify(token, key) as { sub?: string; role?: string };
    if (!claims.sub || (claims.role !== "student" && claims.role !== "teacher")) {
      return json({ error: "Invalid token" }, 401);
    }
    session = { sub: claims.sub, role: claims.role };
  } catch {
    return json({ error: "Invalid token" }, 401);
  }

  try {
    const data = await dispatch(op, args ?? {}, session);
    return json({ data });
  } catch (err) {
    if (err instanceof HttpError) return json({ error: err.message }, err.status);
    return json({ error: "Server error" }, 500);
  }
});
