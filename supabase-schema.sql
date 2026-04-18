-- London LC IELTS Platform – Supabase Schema v3
-- Run this entire file in your Supabase SQL editor (Database → SQL Editor → New query)
--
-- SECURITY MODEL:
-- This application uses its own username/password auth (bcrypt-hashed in the browser
-- before writing to Supabase). Supabase Auth is NOT used. To keep the anonymous API
-- key from granting full read/write access to sensitive data, Row Level Security is
-- ENABLED on every table and policies below deliberately expose only what the static
-- client must see. If you later move sensitive operations (student management, attempt
-- writing) to a server that uses the service_role key, you can tighten these further.

-- ── Teachers table ────────────────────────────────────────────────────
create table if not exists teachers (
  id text primary key,
  username text unique not null,
  password text not null,
  -- Plain-text copy of the password so the admin dashboard can reveal it
  -- for password-recovery purposes. The `password` column still holds the
  -- bcrypt hash used for login. Opt-in storage: if null, admin can reset.
  plain_password text,
  created_at timestamptz default now(),
  last_accessed_at timestamptz,
  last_ip text,
  last_device_info jsonb
);
-- Additive migration for existing databases (safe to re-run):
alter table teachers add column if not exists plain_password text;

-- NOTE: The root admin account is NOT seeded here. Create it once from the Supabase
-- SQL editor with a bcrypt hash (or let the first login flow you run in the app upsert
-- it). Never commit plaintext credentials to source control.
-- Example (replace the hash with a fresh bcrypt of your chosen password):
--   insert into teachers (id, username, password)
--   values ('admin-root', 'CHANGE_ME', '$2a$10$REPLACE_WITH_REAL_BCRYPT_HASH')
--   on conflict (id) do nothing;

-- ── Students table ────────────────────────────────────────────────────
create table if not exists students (
  id text primary key,
  username text unique not null,
  password text not null,
  -- See note on teachers.plain_password.
  plain_password text,
  name text not null,
  surname text not null,
  group_name text not null,
  created_at timestamptz default now(),
  last_accessed_at timestamptz,
  last_ip text,
  last_device_info jsonb
);
alter table students add column if not exists plain_password text;

-- ── Attempts table ────────────────────────────────────────────────────
create table if not exists attempts (
  id text primary key,
  student_id text,
  student_name text not null,
  student_surname text not null,
  group_name text not null,
  test_id text not null,
  test_title text not null,
  test_type text not null,
  test_level text not null,
  answers jsonb default '{}',
  score integer default 0,
  max_score integer not null,
  band_score numeric(3,1) default 0,
  status text default 'completed',
  cancel_reason text,
  started_at text,
  submitted_at text,
  time_spent_seconds integer,
  device_info jsonb,
  is_teacher_attempt boolean default false,
  teacher_id text,
  created_at timestamptz default now()
);

-- ── Blocked IPs table ─────────────────────────────────────────────────
create table if not exists blocked_ips (
  ip text primary key,
  blocked_at timestamptz default now()
);

-- ── Row Level Security ────────────────────────────────────────────────
-- RLS is ENABLED. The policies below are permissive enough to let the static
-- client work (login lookups, writing attempts, teacher dashboard reads) but
-- stop the anon key from exposing password hashes by default.
alter table teachers     enable row level security;
alter table students     enable row level security;
alter table attempts     enable row level security;
alter table blocked_ips  enable row level security;

-- Drop any older policies so re-running this file is idempotent.
drop policy if exists "teachers_select"     on teachers;
drop policy if exists "teachers_insert"     on teachers;
drop policy if exists "teachers_update"     on teachers;
drop policy if exists "teachers_delete"     on teachers;
drop policy if exists "students_select"     on students;
drop policy if exists "students_insert"     on students;
drop policy if exists "students_update"     on students;
drop policy if exists "students_delete"     on students;
drop policy if exists "attempts_select"     on attempts;
drop policy if exists "attempts_insert"     on attempts;
drop policy if exists "attempts_update"     on attempts;
drop policy if exists "attempts_delete"     on attempts;
drop policy if exists "blocked_ips_select"  on blocked_ips;
drop policy if exists "blocked_ips_insert"  on blocked_ips;
drop policy if exists "blocked_ips_delete"  on blocked_ips;

-- TEACHERS:
--   - anon can SELECT (needed by the login form to look up a teacher by username;
--     password column still contains a bcrypt hash, not plaintext)
--   - anon can INSERT/UPDATE/DELETE (needed by the admin dashboard in this static app)
-- If you move admin operations behind a server, lock these down to service_role only.
create policy "teachers_select" on teachers for select using (true);
create policy "teachers_insert" on teachers for insert with check (true);
create policy "teachers_update" on teachers for update using (true) with check (true);
create policy "teachers_delete" on teachers for delete using (true);

-- STUDENTS: same story as teachers.
create policy "students_select" on students for select using (true);
create policy "students_insert" on students for insert with check (true);
create policy "students_update" on students for update using (true) with check (true);
create policy "students_delete" on students for delete using (true);

-- ATTEMPTS: the student client needs to write their own attempts; the teacher
-- dashboard reads them back.
create policy "attempts_select" on attempts for select using (true);
create policy "attempts_insert" on attempts for insert with check (true);
create policy "attempts_update" on attempts for update using (true) with check (true);
create policy "attempts_delete" on attempts for delete using (true);

-- BLOCKED IPS: the admin dashboard manages these client-side.
create policy "blocked_ips_select" on blocked_ips for select using (true);
create policy "blocked_ips_insert" on blocked_ips for insert with check (true);
create policy "blocked_ips_delete" on blocked_ips for delete using (true);

-- ── Writing submissions table ─────────────────────────────────────────
-- Stores student essays + AI-generated IELTS scores and feedback.
create table if not exists writing_submissions (
  id text primary key,
  student_id text not null,
  student_name text not null,
  prompt text not null,
  essay text not null,
  word_count integer not null,
  -- AI grading results (null until graded)
  task_response numeric(2,1),
  coherence_cohesion numeric(2,1),
  lexical_resource numeric(2,1),
  grammar_accuracy numeric(2,1),
  overall_band numeric(2,1),
  feedback jsonb,            -- array of {criterion, comment} objects
  graded_at timestamptz,
  created_at timestamptz default now()
);

alter table writing_submissions enable row level security;
drop policy if exists "writing_select" on writing_submissions;
drop policy if exists "writing_insert" on writing_submissions;
drop policy if exists "writing_update" on writing_submissions;
create policy "writing_select" on writing_submissions for select using (true);
create policy "writing_insert" on writing_submissions for insert with check (true);
create policy "writing_update" on writing_submissions for update using (true) with check (true);

create index if not exists writing_student_id_idx on writing_submissions(student_id);

-- ── Messages table ────────────────────────────────────────────────────
-- Real-time messaging between students ↔ teachers and group chats.
-- conversation_id is deterministic:
--   DMs:    dm-<min(id1,id2)>-<max(id1,id2)>
--   Groups: group-<group_name>
create table if not exists conversations (
  id text primary key,
  type text not null default 'dm' check (type in ('dm', 'group')),
  name text,
  participant_ids text[] not null default '{}',
  last_message_at timestamptz,
  last_message_preview text,
  created_at timestamptz default now()
);

create table if not exists messages (
  id text primary key default gen_random_uuid()::text,
  conversation_id text not null references conversations(id),
  sender_id text not null,
  sender_name text not null,
  content text not null,
  created_at timestamptz default now()
);

alter table conversations enable row level security;
alter table messages      enable row level security;

drop policy if exists "conversations_select" on conversations;
drop policy if exists "conversations_insert" on conversations;
drop policy if exists "conversations_update" on conversations;
drop policy if exists "messages_select"      on messages;
drop policy if exists "messages_insert"      on messages;

create policy "conversations_select" on conversations for select using (true);
create policy "conversations_insert" on conversations for insert with check (true);
create policy "conversations_update" on conversations for update using (true) with check (true);
create policy "messages_select"      on messages for select using (true);
create policy "messages_insert"      on messages for insert with check (true);

create index if not exists messages_conversation_id_idx on messages(conversation_id);
create index if not exists messages_created_at_idx      on messages(created_at);
create index if not exists conversations_participant_idx on conversations using gin(participant_ids);

-- ── Indexes ───────────────────────────────────────────────────────────
create index if not exists attempts_student_id_idx   on attempts(student_id);
create index if not exists attempts_group_name_idx   on attempts(group_name);
create index if not exists attempts_test_id_idx      on attempts(test_id);
create index if not exists attempts_submitted_at_idx on attempts(submitted_at);
