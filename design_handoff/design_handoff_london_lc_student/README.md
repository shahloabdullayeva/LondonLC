# Handoff: London · LC — Student Platform

## Overview

London · LC is an internal educational platform for an English-learning centre that prepares students (primarily) for IELTS. This handoff covers the **student-facing web app** — the interface students log in to in order to practise, track progress, message their teacher, and consume learning media.

The design is a single-page React prototype covering the following areas:
- Dashboard (progress, streaks, assigned tasks, leaderboard, recent results, daily quote)
- My Results (full attempt history)
- Practice hubs (Reading, Listening, Writing)
- Practice Test runner (live timer, MCQ flow)
- Articles library
- Podcasts library
- Music library (YouTube-embed based — no audio hosting)
- Writing feedback (essay editor + teacher comments + band scoring)
- Messages (student ↔ teacher threads)
- Profile (stats, skill breakdown, badges)

## About the Design Files

The files in `design_reference/` are **design references created in HTML/React** — prototypes demonstrating the intended look, layout, and behaviour. They are NOT production code to copy verbatim.

The task is to **recreate these designs in London · LC's existing web codebase** (Next.js/React based on the current live site at londonielts.uz) using its established patterns, component library, data layer, and auth. If the existing codebase lacks a framework convention, Next.js + Tailwind CSS + shadcn/ui is a reasonable target — but match what the team already uses.

Crucially: **most of the look is driven by CSS custom properties defined in `styles.css`**. Port those tokens first; the rest will follow.

## Fidelity

**High-fidelity.** Colours, typography, spacing, component structure, hover states, and micro-interactions are final. Reproduce pixel-for-pixel; deviate only where the target design system forces a change.

## The 3 Visual Themes

The design ships with 3 switchable themes via CSS data-attributes on `<html>`. Pick **one** as the default for launch — recommendation: **`terminal`** (closest to the existing live site).

| Theme    | Mood             | Background  | Accent      |
|----------|------------------|-------------|-------------|
| `terminal` | Dark, editorial, terminal-inspired | `#0a0c0a` | `#6fe4a5` (emerald) |
| `academy`  | Warm cream, classical print | `#f5f1e8` | `#8b4513` (sepia)   |
| `dusk`     | Deep plum, soft modern | `#151124` | `#c9a0ff` (violet)  |

Keep theming tokenised — if the client wants a different brand accent later, only the tokens change.

## Design Tokens

All tokens are declared in `design_reference/styles.css` under `:root` and `[data-theme="..."]`. Summary:

### Colors (terminal theme — default)
```
--bg: #0a0c0a
--bg-2: #0f1210
--surface: #12171380  (with alpha for blur)
--surface-2: #151b16
--line: #ffffff10
--line-2: #ffffff1e
--text: #e4e9e2
--text-2: #8a938a
--text-3: #5c635c
--accent: #6fe4a5
--accent-ink: #0a0c0a   (text on accent bg)
--warn: #e8b86d
--danger: #e87a6d
```

### Typography
Font pair is tweakable (Editorial / Serif / Modern / Grotesk). Default = **Editorial**:
- Sans: `Inter` (400, 500, 600, 700) — body and UI
- Serif: `Fraunces` (400, 500, 600, 700 + italic) — headings, pull-quotes, numeric display
- Mono: `JetBrains Mono` (400, 500, 600) — eyebrows, labels, timestamps, meta

All loaded via Google Fonts. Feature settings: `'ss01', 'cv11'` on body for Inter's alternate characters.

Key type roles:
| Role        | Family  | Size          | Weight | Letter-spacing | Transform |
|-------------|---------|---------------|--------|----------------|-----------|
| H1 (hero)   | Fraunces | clamp(40,5vw,64) | 400 | -0.02em | — |
| H2 (card title) | Fraunces | 28px | 500 | -0.01em | — |
| Body        | Inter   | 15px          | 400    | 0 | — |
| Lede        | Inter   | 17px          | 400    | 0 | — |
| Eyebrow     | JetBrains Mono | 10.5px | 400 | 0.16em | uppercase |
| Table header | JetBrains Mono | 10.5px | 500 | 0.12em | uppercase |

### Spacing
Driven by density preference. Default (`spacious`):
- `--pad: 32px` (card interior padding)
- `--pad-lg: 56px` (page gutter)
- `--gap: 24px` (grid gap)

### Radii
- `--radius: 6px` (chips, buttons, small controls)
- `--radius-lg: 10px` (cards, surfaces)

### Misc
- `--sidebar-w: 232px` (expanded), `64px` (icon-only mode)
- Max content width: `1360px`
- Shadows are minimal; rely on `border: 1px solid var(--line)` + `backdrop-filter: blur(6px)` on cards

## Screens / Views

### 1. Sidebar (global)
Fixed left column, 232px wide (collapsible to 64px icon-only).
- Brand: "London · LC" (Fraunces 22px + JetBrains Mono "LC" 13px uppercase)
- Profile card: circular avatar with user initials on accent bg, name, group code
- Nav sections: **Overview** (Dashboard, My Results, My Profile), **Practice** (Reading, Listening, Writing), **Library** (Articles, Podcasts, Music), **Connect** (Messages)
- Active state: accent-coloured 2px bar on the left, surface-2 background on the row
- Section labels in JetBrains Mono 10px uppercase, letter-spacing 0.12em
- Foot: Sign Out row

### 2. Dashboard
Full-width hero grid (8 cols for text / 4 cols for quote with vertical divider):
- Eyebrow line with current date + "Week 6 of 12"
- H1 greeting with italic name and italic-accent "12-day" streak phrase
- Lede describing today's goal
- Primary CTA (accent button) + ghost secondary CTA

Stats row: 4 cards, each with mono label, 40px Fraunces number, coloured trend line.

Band progression chart: SVG line + area chart, 3-month default window, dashed horizontal rules at bands 5/6/7.
Consistency bars: 30 tiny vertical rectangles, active days filled with accent, "today" has outlined ring.

Tasks (7-col card): numbered list rows, hover pushes 6px right.
Leaderboard (5-col card): rank / name / score / streak — "YOU" row highlighted in accent.

Recent activity table + Library peek (3 podcast cards).

### 3. Practice Test Runner
Top exam bar (surface-2 card): passage info left, giant mono timer centre (colour shifts warn<10min, danger<5min w/ pulse), action buttons right.

Two-column body:
- **Reading passage** (left, scroll): Fraunces 32px title, mono author line, paragraphs in Fraunces 17px / 1.65 line-height. Para letter labels (A, B, C…) in mono 10.5px.
- **Question panel** (right, sticky): question card + progress card. Each option row has a circular letter marker that fills with accent when selected.

Submit screen: giant Fraunces number (score), lede, two CTAs.

### 4. Podcasts
3-column grid: episode list (320px) / player card (flex) / about panel (300px).
Player has a faux waveform SVG, play/prev/next controls, speed chips.
*Integration note:* wire play button to actual audio source (likely stored externally — S3, or pulled from BBC/TED RSS feeds).

### 5. Articles
Editor's-pick hero card (1.2fr / 1fr split), then a 3-col grid of article cards with diagonal-stripe placeholder thumbnails and category chip overlays.
Replace placeholder thumbnails with CMS-supplied images at integration.

### 6. Music — YouTube-embed based ⚠️
**Intentionally storage-free.** The page is a YouTube player + queue:
- Left: `<iframe>` pointing at `https://www.youtube-nocookie.com/embed/{videoId}?rel=0&modestbranding=1`
- Right: queue of tracks showing `https://i.ytimg.com/vi/{videoId}/mqdefault.jpg` as thumbnail
- Data shape: `{ t, channel, mood, min, yt }` where `yt` is the YouTube video ID
- Footer note: "Streamed from YouTube · no audio stored on London · LC servers"

Keep this architecture at integration — no media uploads, no audio hosting. Curation = adding a row to the tracks table with a YouTube ID.

### 7. Writing
Two-column: essay editor (left, 1.2fr) / feedback panel (right, 1fr).
Editor uses `contentEditable` — swap for a proper rich-text editor at integration (TipTap / Lexical). Word counter turns accent-green at ≥250 words.
Feedback panel: Fraunces score ring (SVG circle with dash-offset), 4 IELTS criteria bars, colour-coded teacher comments (accent-tinted background, left border).

### 8. Messages
2-column shell (320px list / flex thread). Standard chat UX: unread dot, bubble alignment, relative timestamps, compose textarea.
Bubbles: `them` on surface-2 with top-left radius 4px; `me` on accent with top-right radius 4px.

### 9. Profile
4-col account card (avatar + fields table) / 8-col right column (4 stat cards + skill breakdown bars + badge grid).
Badges: 4-column grid of circles, unlocked badges get accent border and filled background at 12% opacity, locked ones at 0.4 opacity with mono "x" icon.

## Interactions & Behavior

- **Routing**: Currently React state-based. Replace with Next.js App Router routes — each section is its own route.
- **Persistence**: Current route persists via `localStorage['llc-route']`. Move to URL state.
- **Animations**: 
  - Page transitions: `animation: fadeIn 320ms ease-out` on route mount
  - Card hovers: `transform: translateY(-2px)` + border color shift (200ms)
  - List rows: `padding-left: 6px` on hover (160ms)
  - Timer pulse: `@keyframes pulse { 50% { opacity: 0.55 } }`, 1.2s infinite, only when <5min
- **Keyboard**: `?` toggles the Tweaks panel (demo only — don't port)
- **Tweaks panel**: prototype-only; don't ship to production

## State Management

Minimal. At integration:
- **Auth session** — student identity, group, teacher assignment
- **Attempts** — test attempts list (already live in the current app; data shape exists)
- **Tasks** — assigned by teacher
- **Leaderboard** — group rankings, cached
- **Messages** — conversation threads, real-time updates (consider Pusher / Supabase Realtime)
- **Writing submissions** — drafts (autosave to backend every 30s) + graded essays with comments

Data for the prototype lives in `design_reference/src/data.jsx` — use it as a schema reference.

## Responsive Behavior

Breakpoint at 980px:
- All grid cols collapse to single column
- Sidebar remains (consider drawer pattern on mobile)
- Test runner stacks passage over question panel

Fully mobile-optimised layouts are out of scope for this handoff — add them at integration.

## Assets

- **Fonts**: All loaded from Google Fonts (no local files). Imports live in `design_reference/index.html`.
- **Icons**: Inline SVG, hand-drawn in `design_reference/src/shell.jsx` (see `Icon` component, 1.5 stroke lucide-style). Swap for `lucide-react` at integration.
- **Images**: None in prototype — all image slots are striped SVG placeholders labeled `[ featured image ]`. Wire to CMS at integration.
- **YouTube thumbnails**: Pulled live from `i.ytimg.com/vi/{id}/mqdefault.jpg` — no action needed.

## Files in `design_reference/`

```
index.html                 — entry, font imports, script tags
styles.css                 — ALL design tokens and styles (~28KB, single file)
src/
  data.jsx                 — placeholder data (quotes, attempts, tracks, etc.) — use as schema reference
  shell.jsx                — Sidebar, Topbar, Icon component
  dashboard.jsx            — Dashboard page + BandChart + StreakBars
  practice.jsx             — PracticeTest runner + Results page + PracticeHub
  media.jsx                — Podcasts + Articles + Music (YouTube embed)
  writing.jsx              — Writing feedback page + Messages page
  profile.jsx              — Profile page
  tweaks.jsx               — Theme/font/density/sidebar tweak panel (prototype only — remove at integration)
  app.jsx                  — Root component with state-based routing
```

## Implementation Recommendations

1. **Start with tokens.** Port `styles.css` to your CSS / Tailwind config first. Map every `--*` custom property. The rest cascades from this.
2. **Pick one theme** (`terminal` recommended). Ship the theme-switching infra later if wanted.
3. **Use `lucide-react` for icons.** The custom SVG Icon component is fine as a fallback but lucide will be more maintainable.
4. **Replace `contentEditable` in the Writing editor with TipTap or Lexical.** Comments should anchor to paragraph ranges for real line-by-line feedback.
5. **YouTube Music: do not touch.** The "stream, don't host" model is a deliberate architectural constraint driven by storage costs.
6. **Messages: plan for realtime.** Teachers will want instant delivery of feedback; poll-based will feel slow.
7. **Drop the Tweaks panel** — it's a design-review tool.

## Questions to Resolve Before Building

- What framework does the existing codebase use? (Next.js / Remix / other?)
- Is there a component library already in place, or start fresh with shadcn/ui?
- What auth system handles student vs teacher roles?
- Where do test attempts data live currently? (Re-use existing table.)
- For Writing feedback: does the teacher-side review UI exist? (Not in this handoff — design on request.)
