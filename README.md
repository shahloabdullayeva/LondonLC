# London LC — IELTS Practice Platform

An IELTS practice platform for an English-learning centre, built with Next.js
and Supabase. Students practise Reading, Listening, Writing, and Speaking under
exam conditions and track their progress; teachers manage accounts and review
results from an admin dashboard.

## Features

- **Reading & Listening tests** — 93 full timed tests (48 Reading across
  Cambridge IELTS 10–20 Academic plus Barron's; 45 Listening across
  Cambridge IELTS 10–20). Exam-style runner with split-panel passage/questions
  layout, countdown timer, resizable divider, and a multi-colour highlighter.
- **Anti-cheat** — during a test, tab switches, window blur, and exiting
  fullscreen cancel the attempt; copy/paste, right-click, and common keyboard
  shortcuts are blocked. Teachers can grant a per-student bypass.
- **Automatic band scores** — raw answers are converted to an IELTS band using
  the standard Cambridge table.
- **Writing** — Task 1 and Task 2 editors with AI-assisted band scoring and
  per-criterion feedback (via Supabase Edge Functions).
- **Speaking** — practice interview with an AI examiner (text-to-speech
  questions and AI grading).
- **Library** — curated Articles, Podcasts, a YouTube-based Music player, and a
  Vocabulary builder.
- **Messages** — student ↔ teacher conversations.
- **Dashboards** — student home with test history and per-question breakdowns;
  teacher/admin dashboard for student and teacher accounts, results filtering,
  practice mode, and IP blocking.
- **Authentication** — passwords are bcrypt-hashed in the browser before being
  written to Supabase; legacy plaintext rows are upgraded on first login.

## Tech stack

- Next.js 16 (App Router, static export) + React 19 + TypeScript
- Tailwind CSS 4, Framer Motion, Lucide icons, system fonts (no web-font downloads)
- Supabase (Postgres + Edge Functions) for persistence and AI grading
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
   insert into teachers (id, username, password, is_root)
   values ('admin-root', 'your-admin-username', '<bcrypt hash of your password>', true);
   ```
   (Generate the hash with any bcrypt tool; rounds = 10.)
5. Start the dev server:
   ```
   npm run dev
   ```
6. Visit `http://localhost:3000`. Log in as a teacher (`/auth/login?admin=true`)
   to create student accounts.

Run `npm run typecheck` to type-check the project.

## Deployment

The app is deployed to GitHub Pages via `.github/workflows/deploy.yml` on every
push to `main` (or manually via *Run workflow*). Before the first deploy, add
these as **repository secrets** under
`Settings → Secrets and variables → Actions`:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

The build output goes to `./out` and is published to GitHub Pages.

### Edge Functions

The app uses Supabase Edge Functions in `supabase/functions/`. Deploy them with
the Supabase CLI and set their secrets with `supabase secrets set` (never stored
in the repo):

- `login` — verifies credentials server-side and issues a signed session token.
  **Required for sign-in.** Needs `AUTH_JWT_SECRET`:
  ```
  supabase functions deploy login
  supabase secrets set AUTH_JWT_SECRET="$(openssl rand -hex 32)"
  ```
- `grade-essay`, `grade-task1`, `grade-speaking` — AI Writing/Speaking grading
  (`ANTHROPIC_API_KEY`).
- `speak-question` — examiner text-to-speech (`ELEVENLABS_API_KEY`).

`SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` are injected into Edge Functions
automatically. For local development, run `supabase functions serve` (or deploy
the functions) so sign-in can reach the `login` function.

See `docs/security-hardening-plan.md` for the staged plan to lock the database
down behind these functions.

## Project layout

```
app/                          Next.js App Router pages
  page.tsx                    Landing page
  auth/                       Login + signup + reset
  student/                    Student dashboard, practice runner, library
  admin/dashboard/            Teacher dashboard
components/                   Shared UI components
data/
  ielts-tests.ts              Test registry (combines all books)
  cambridge10-reading.ts …    Cambridge 10–20 Reading + Listening
  barrons-reading.ts          Barron's Reading
  articles.ts, podcasts.ts,   Library content
  songs.ts, vocab.ts
lib/
  store.ts                    Supabase data access + bcrypt auth helpers
  supabase.ts                 Supabase client
  utils.ts                    bandScore(), formatTime()
  site-theme.ts               Theme tokens + switcher
supabase/functions/           Edge Functions (AI grading, text-to-speech)
supabase-schema.sql           Database schema + RLS policies
```

## Security notes

- No secrets live in the repo. The browser uses only the public Supabase anon
  key (supplied at build time via repository secrets); Edge Function keys are
  read from environment variables.
- Because the app is a static export, every Supabase call uses the anon key and
  is governed by the Row Level Security policies in `supabase-schema.sql`. The
  policies shipped here are permissive for ease of setup — **tighten them before
  going to production**, and consider moving admin-only operations behind a
  server that holds the service-role key.

## Known gaps

- General Training Reading is not implemented (Academic only).
- The "request premium grading" flow is wired on the admin side but not yet
  exposed in the student UI.
