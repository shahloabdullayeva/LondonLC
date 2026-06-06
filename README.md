# London LC — IELTS Practice Platform

Live at [londonielts.uz](https://londonielts.uz)

An IELTS preparation platform with mock tests across all four skills, instant scoring, and progress tracking. Students sign in to take tests and review their results; admins manage students, tests, and content.

## Features

- **Reading** — full passages with all standard question types, auto-scored.
- **Listening** — timed sections with audio, transcripts, and band scores.
- **Writing** — Task 1 and Task 2 with AI-assisted feedback.
- **Speaking** — cue cards and prompts for all three parts.
- **Progress tracking** — saved attempts, band history, and a results dashboard.
- **Vocabulary and articles** — word lists and reading material.
- **Music player** — lyrics-based listening practice.
- **Themes** — dark, light, dusk, and custom color palettes.
- **Admin dashboard** — manage students, tests, and results.

## Tech stack

- Next.js 16 (App Router), React 19, TypeScript
- Tailwind CSS v4, Framer Motion
- Self-hosted API (auth and database)
- Deployed to GitHub Pages via GitHub Actions on a custom domain

## Running locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run typecheck
```

Requires the backend API URL in a `.env.local`:

```
NEXT_PUBLIC_MISSION_CONTROL=https://api.londonielts.uz
```

## Project structure

```
app/          pages — landing, auth, student portal, admin
components/   shared UI
data/         test content and question banks
lib/          session store, theming, helpers
public/       static assets
```

## Credits

Built with Claude (Anthropic's Claude Code).

© London Language Centre
