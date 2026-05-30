// Supabase Edge Function: authenticate a student or teacher and issue a signed
// session token. Credentials are verified here (server-side) with the
// service-role key, so the browser never reads the accounts tables to log in.
//
// Deploy:  supabase functions deploy login
// Secret:  supabase secrets set AUTH_JWT_SECRET=<a long random string>
//          (SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY are injected automatically)
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.0";
import bcrypt from "npm:bcryptjs@2.4.3";
import { create, getNumericDate } from "https://deno.land/x/djwt@v3.0.2/mod.ts";

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

// 30-day sessions.
const TOKEN_TTL_SECONDS = 60 * 60 * 24 * 30;

async function signKey(): Promise<CryptoKey> {
  return crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(AUTH_JWT_SECRET),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign", "verify"],
  );
}

serve(async (req: Request) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  if (req.method !== "POST") return json({ error: "Method not allowed" }, 405);

  if (!SUPABASE_URL || !SERVICE_ROLE_KEY || !AUTH_JWT_SECRET) {
    return json({ error: "Auth not configured" }, 500);
  }

  let body: { username?: string; password?: string; role?: string };
  try {
    body = await req.json();
  } catch {
    return json({ error: "Invalid request" }, 400);
  }

  const username = (body.username ?? "").trim();
  const password = body.password ?? "";
  const role = body.role === "teacher" ? "teacher" : "student";
  if (!username || !password) return json({ error: "Incorrect username or password" }, 401);

  const supabase = createClient(SUPABASE_URL, SERVICE_ROLE_KEY);
  const table = role === "teacher" ? "teachers" : "students";
  const { data } = await supabase.from(table).select("*").eq("username", username).maybeSingle();

  // Generic message either way — don't reveal whether the username exists.
  if (!data) return json({ error: "Incorrect username or password" }, 401);

  const stored: string = data.password ?? "";
  let valid = false;
  if (stored.startsWith("$2")) {
    valid = bcrypt.compareSync(password, stored);
  } else {
    // Legacy plaintext row — accept once, then upgrade to a bcrypt hash.
    valid = password === stored;
    if (valid) {
      await supabase.from(table).update({ password: bcrypt.hashSync(password, 10) }).eq("id", data.id);
    }
  }
  if (!valid) return json({ error: "Incorrect username or password" }, 401);

  const user = role === "teacher"
    ? { id: data.id, username: data.username }
    : {
        id: data.id,
        username: data.username,
        name: data.name,
        surname: data.surname,
        group_name: data.group_name,
        anticheatBypass: !!data.anticheat_bypass,
        isPremium: !!data.is_premium,
        gradingCredits: data.grading_credits ?? 0,
      };

  const token = await create(
    { alg: "HS256", typ: "JWT" },
    { sub: data.id, role, username: data.username, exp: getNumericDate(TOKEN_TTL_SECONDS) },
    await signKey(),
  );

  return json({ token, user });
});
