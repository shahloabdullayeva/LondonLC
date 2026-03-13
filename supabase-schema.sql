-- London LC IELTS Platform – Supabase Schema v2
-- Run this entire file in your Supabase SQL editor (Database → SQL Editor → New query)

-- ── Teachers table ────────────────────────────────────────────────────
create table if not exists teachers (
  id text primary key,
  username text unique not null,
  password text not null,
  created_at timestamptz default now()
);

-- Seed default superadmin teacher
insert into teachers (id, username, password)
values ('admin-root', 'ShahloA13', 'as_6914T')
on conflict (id) do nothing;

-- ── Students table ────────────────────────────────────────────────────
create table if not exists students (
  id text primary key,
  username text unique not null,
  password text not null,
  name text not null,
  surname text not null,
  group_name text not null,
  created_at timestamptz default now()
);

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

-- ── Disable RLS (we use our own auth system) ──────────────────────────
alter table teachers disable row level security;
alter table students disable row level security;
alter table attempts disable row level security;
alter table blocked_ips disable row level security;

-- ── Indexes ───────────────────────────────────────────────────────────
create index if not exists attempts_student_id_idx on attempts(student_id);
create index if not exists attempts_group_name_idx on attempts(group_name);
create index if not exists attempts_test_id_idx on attempts(test_id);
create index if not exists attempts_submitted_at_idx on attempts(submitted_at);
