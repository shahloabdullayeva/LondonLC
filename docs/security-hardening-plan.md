# Security Hardening Plan

A staged plan to close the main data-security gap before scaling up real users.
Each phase is independently shippable; do them in order.

## The problem

The app is a **static export** (GitHub Pages) and the browser talks to Supabase
directly with the **public anon key**. Every Row Level Security policy in
`supabase-schema.sql` is `using (true)` / `with check (true)` — fully open — so
anyone who opens the live site can read the anon key from the bundle and then,
via the Supabase REST API, **read or modify every row in every table**.

Everything in the database is sensitive (test content is static in `data/`, not
the DB). The 8 tables are: `students`, `teachers`, `attempts`,
`writing_submissions`, `premium_requests`, `blocked_ips`, `conversations`,
`messages`. The `students` and `teachers` tables also store a **`plain_password`**
column, so the current exposure includes plaintext passwords.

Authentication today is custom: `loginStudent` / `findTeacher` in `lib/store.ts`
fetch a row by username and bcrypt-compare in the browser. (A partial Supabase
Auth OAuth/email flow also exists in `app/auth/signup|callback|reset`.) There is
no server-verified session token — the session lives in `localStorage`, so the
backend cannot currently tell an admin caller from a student or an attacker.

## Target architecture

Keep the static frontend on GitHub Pages, but make **Supabase Edge Functions the
trusted server tier** (the project already uses Edge Functions for AI grading).
Edge Functions hold the `service_role` key and become the only path to sensitive
data. RLS is then locked to deny anon access, so the anon key alone is useless.

```
Browser (anon key, no direct table access)
   │  signed session token (JWT)
   ▼
Edge Functions (service_role)  ──► Postgres (RLS: anon denied)
   - verify token + role
   - enforce per-row authorization
```

## Phase 0 — Stop storing plaintext passwords (quick win, ~0.5 day)

Smallest change with the biggest payoff: even while RLS stays open, a breach then
leaks only bcrypt hashes, not usable passwords.

- Remove every write to `plain_password` in `lib/store.ts`
  (`registerStudent`, `updateStudent`, `addTeacher`, `updateTeacherPassword`,
  `setStudentPlainPassword`, `setTeacherPlainPassword`, the own-password changers).
- Replace the admin "Show password" UI with a **"Reset password"** action that
  generates a new random password, shows it once, and stores only its hash.
- Migration: `update students set plain_password = null; update teachers set plain_password = null;`
  then drop the column.

> Trade-off: admins can no longer view a student's existing password, only reset
> it. This is the standard, safe pattern.

## Phase 1 — Auth Edge Function + session tokens (~2–3 days)

- Add a `login` Edge Function: looks up the user with `service_role`, bcrypt-
  verifies, and returns a short-lived **signed JWT** carrying `{ sub: id, role:
  "student" | "teacher", group }`. Move `loginStudent` / `findTeacher` logic here
  (browser no longer reads the `teachers`/`students` table to log in).
- Frontend stores the JWT and sends it as `Authorization: Bearer …` to all data
  Edge Functions. Keep `lib/store.ts` as the single call site, swapping its
  bodies from `supabase.from(...)` to `fetch(<edge-fn>)`.
- Decide on one auth system: either this custom JWT, or finish the migration to
  Supabase Auth (usernames mapped to `username@londonlc.local`) so RLS can use
  `auth.uid()` directly. Custom JWT is less work given the current username model.

## Phase 2 — Route data access through Edge Functions (~3–5 days)

Replace direct table access with authorized Edge Functions, grouped by audience:

- **Student self-service** (`getSubmissions`, `submitEssay`, `changeStudentOwnPassword`,
  `getMessages`, `sendMessage`, attempt save/read): the function checks the JWT
  `sub` matches the row's owner.
- **Admin-only** (`getStudentAccounts`, `getTeachers`, `getAttempts`,
  `getAllSubmissions`, `getPremiumRequests`, `reviewPremiumRequest`, all
  create/update/delete account ops, `blockIP`/`unblockIP`): the function requires
  `role === "teacher"`.
- AI-grading functions (`grade-essay`, `grade-task1`, `grade-speaking`) should
  also verify the token and that the caller owns the submission.

## Phase 3 — Lock down RLS (~1 day)

Once nothing in the browser reads tables directly:

- `revoke all on <table> from anon;` for `students` and `teachers`.
- Replace the `using (true)` policies with `using (false)` for anon (service_role
  used by Edge Functions bypasses RLS).
- If any read is left client-side, scope it: e.g. a student may select only
  `where id = auth.uid()` and never the password columns.
- Re-run the schema and verify the app still works end-to-end.

## Notes

- No application secrets are in the repo today; this plan is about the **deployed
  database**, which is configured separately from the source.
- Rate-limit the `login` Edge Function (e.g. by IP) to slow credential stuffing.
- Add a `SECURITY.md` with a contact for vulnerability disclosure before the repo
  goes public.
