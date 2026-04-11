# London LC — IELTS Practice Platform

A timed, proctored IELTS Academic Reading practice app built with Next.js and
Supabase. Students sit full Cambridge IELTS reading tests under exam conditions
(60-minute timer, fullscreen enforced, tab-switch cancels the test); teachers
manage accounts and review results from an admin dashboard.

## Features

- Cambridge IELTS 10–18 Academic Reading tests (34 full tests, ~1,358 questions)
- Exam-style test runner with split-panel passage/questions layout, timer,
  resizable divider, and multi-colour text highlighter
- Anti-cheat: tab visibility, window blur, and fullscreen-exit all cancel the
  attempt; copy/paste, right-click, and common keyboard shortcuts are blocked
  during tests
- Automatic IELTS band score calculation using the standard Cambridge
  conversion table
- Student dashboard with book selection and test history (per-question
  breakdown of past attempts)
- Teacher/admin dashboard: student accounts, teacher accounts, attempt
  results filtered by group/type/status, practice mode, IP blocking
- bcrypt password hashing (hashed in the browser before writing to Supabase);
  legacy plaintext rows auto-upgrade on first login

## Tech stack

- Next.js 16 (App Router, static export) + React 19 + TypeScript
- Tailwind CSS 4, Framer Motion, Lucide icons
- Supabase (Postgres) for persistence
- Deployed to GitHub Pages via GitHub Actions

## Running locally

1. Install dependencies:
   ```
   npm install
   ```
2. Copy `.env.example` to `.env.local` and fill in your Supabase project URL
   and anon key.
3. Run the SQL in `supabase-schema.sql` against your Supabase project (SQL
   Editor → New query → paste → Run). This creates the tables and Row Level
   Security policies.
4. Create a root admin teacher account. From the Supabase SQL editor, insert a
   row into `teachers` with a bcrypt-hashed password:
   ```sql
   insert into teachers (id, username, password)
   values ('admin-root', 'your-admin-username', '<bcrypt hash of your password>');
   ```
   (You can generate a bcrypt hash with any bcrypt tool; rounds = 10.)
5. Start the dev server:
   ```
   npm run dev
   ```
6. Visit `http://localhost:3000`. Log in as a teacher (`/auth/login?admin=true`)
   to create student accounts.

## Deployment

The app is deployed to GitHub Pages via `.github/workflows/deploy.yml`. Before
the first deploy, add these as **repository secrets** under
`Settings → Secrets and variables → Actions`:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

Push to `main`, `claude/general-session-xgznl`, or
`claude/general-session-xgznl-5PF7d` to trigger a build. Output goes to
`./out` and is uploaded to GitHub Pages.

## Project layout

```
app/                       Next.js App Router pages
  page.tsx                 Landing page
  auth/                    Login + signup
  student/                 Student dashboard + test runner
  admin/                   Teacher dashboard
components/                Shared UI components
data/
  ielts-tests.ts           Test type definitions + Cambridge 1 demo
  cambridge10.ts … 18.ts   Cambridge IELTS Academic Reading tests
lib/
  store.ts                 Supabase data access + bcrypt auth helpers
  supabase.ts              Supabase client
  utils.ts                 bandScore(), formatTime()
public/                    Static assets (logos, diagrams)
supabase-schema.sql        Database schema + RLS policies
```

## Known gaps

- Cambridge 18 Tests 3 and 4 are not yet added (Tests 1 and 2 are complete)
- Listening tests are stubbed but not yet implemented
- General Training reading is not implemented
- Because the app is a static export, every Supabase call uses the anon key;
  defense-in-depth would require moving admin operations behind a server that
  holds the service role key
