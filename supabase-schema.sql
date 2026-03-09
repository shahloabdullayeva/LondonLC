-- London LC IELTS Platform – Supabase Schema
-- Run this in your Supabase SQL editor to set up the database

-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- Students table
create table if not exists students (
  id uuid default uuid_generate_v4() primary key,
  name text not null,
  surname text not null,
  group_name text not null,
  created_at timestamptz default now()
);

-- Tests table
create table if not exists tests (
  id text primary key,
  title text not null,
  book_number integer not null,
  test_number integer not null,
  type text check (type in ('reading', 'listening')) not null,
  level text check (level in ('academic', 'general')) not null,
  duration_minutes integer not null default 60,
  transfer_minutes integer not null default 0,
  created_at timestamptz default now()
);

-- Attempts table
create table if not exists attempts (
  id uuid default uuid_generate_v4() primary key,
  student_id uuid references students(id) on delete cascade,
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
  status text check (status in ('in_progress', 'completed', 'cancelled')) default 'in_progress',
  started_at timestamptz default now(),
  submitted_at timestamptz,
  time_spent_seconds integer,
  violation_reason text,
  created_at timestamptz default now()
);

-- Indexes
create index if not exists attempts_student_id_idx on attempts(student_id);
create index if not exists attempts_group_name_idx on attempts(group_name);
create index if not exists attempts_test_id_idx on attempts(test_id);
create index if not exists attempts_status_idx on attempts(status);

-- Row Level Security (optional but recommended)
alter table students enable row level security;
alter table attempts enable row level security;

-- Allow public insert/select for students (they register themselves)
create policy "Students can insert themselves" on students
  for insert with check (true);

create policy "Students can view their own record" on students
  for select using (true);

-- Allow anyone to insert attempts
create policy "Anyone can insert attempts" on attempts
  for insert with check (true);

-- Allow anyone to view attempts (teachers filter by group)
create policy "Anyone can view attempts" on attempts
  for select using (true);
