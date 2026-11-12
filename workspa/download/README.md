# TalkSy — ESL Learning Platform

TalkSy takes a learner **from their first English word to confident
communication**: structured lessons, six skill-specific training environments,
a nine-mode AI English tutor, and a complete administrative content
management system — all backed by a server-graded exercise engine that never
leaks answer keys to the client.

> The name is always **TalkSy** (never "EnglishPath" or any other spelling).

---

## Features

### For learners

- **Learning path** — 20 code-based lessons (Pre-A1, A1, Grammar Core) built
  from 20 structured block types, each ending in a server-graded assessment;
  progress is only ever marked complete by the server.
- **Courses (CMS-managed)** — staff-authored courses with levels, modules,
  units, lessons, prerequisites, enrolments and revision history; learners
  always see the *published snapshot*, never the working copy.
- **Word World** — 135-word vocabulary library with spaced-repetition
  flashcards (SM-2 style), word explorer with pronunciation, example
  sentences and translations, custom word lists, and daily challenges.
- **Grammar School** — parts-of-speech modules, a 12-tense explorer, and an
  **Error Clinic** that diagnoses submitted sentences and recommends lessons.
- **Sentence Lab** — timed accuracy challenges building sentences from word
  tiles with structure annotation.
- **Reading Room** — 21 levelled texts with glossary, comprehension questions
  and reading-progress tracking.
- **Listening Lab** — 18 activities from word recognition to dialogue
  comprehension.
- **Speaking Lab** — 22 activities, 11 conversation scenarios with an AI
  partner (scripted fallback included) and 27 pronunciation items.
  Recordings are **never stored**; transcripts respect a retention setting
  (0–365 days) and can be deleted at any time.
- **Writing Studio** — 31 progressive writing assignments with autosave,
  drafts, structured 10-dimension feedback, revision submission and
  side-by-side version comparison. Writing scores stay **separate** from the
  general language level.
- **AI English Tutor** — nine teaching modes (grammar, vocabulary, sentence,
  conversation partner, writing, listening, reading, interview coach, doubt
  solver), level-aware responses, Socratic questioning, session history with
  delete, per-user daily limits and streaming replies.
- **My Progress** — analytics dashboard, skill profiles, revision scheduler,
  achievements, milestones, certificates and streaks (streaks never punish:
  missing a day never resets real progress).
- **Placement-style onboarding**: new learners start at Pre-A1 with guided
  lesson ordering; a formal placement test is **not** included (see
  FINAL_REPORT.md).

### For educators & administrators (CMS)

- **Dashboard** — registered/active learners, enrolments, lesson completions,
  assessment pass rate, engagement and content review status. Every number is
  a live database aggregate; unknowable values show "—".
- **Curriculum manager** — create levels, courses, modules, units and
  lessons; set prerequisites; publish/unpublish.
- **Lesson editor** — 15 structured block kinds (headings, paragraphs,
  definitions, examples, tables, vocabulary, grammar explanations, dialogues,
  images, audio, exercises, assignments, homework, notes, warnings) with
  reorder, live preview and objectives.
- **Question bank** — all 16 exercise types with options, correct answers,
  explanations, difficulty, topics, review workflow and version history.
- **Audio manager** — uploads (25 MB, audio/image) with duration, transcript,
  language, pronunciation (IPA), licence, source and related lesson.
- **Content workflow** — draft → review → approved → published, with an
  append-only audit trail; editors author, teachers approve, admins publish.
- **Versioning** — every lesson/question save creates an immutable snapshot;
  historical assessment data pins the version it was graded against and is
  **never rewritten** when content changes; restore creates a new version.
- **User management** — roles (student/editor/teacher/admin), account
  suspension, aggregate-only progress monitoring (no password hashes, no
  per-learner content exposure).
- **Import / export** — course JSON bundles with full validation and preview
  before commit; imports never overwrite existing content.

### Engineering guarantees

- Answers are graded **server-side only**; sanitised exercises never contain
  answer keys, feedback or grading keywords.
- Measured results (deterministic scoring) are strictly separated from
  AI-generated suggestions, which always carry a disclaimer.
- Uncertain AI grammar explanations are never presented as verified facts.
- SQLite via Prisma ORM everywhere (no string SQL in app code).
- 343 unit tests + 700+ end-to-end browser checks, all green.

---

## Technology stack

| Layer | Choice |
| --- | --- |
| Framework | Next.js 16 (App Router, Turbopack), React 19 |
| Language | TypeScript 5 (strict) |
| Styling | Tailwind CSS 4, shadcn/ui (New York), Lucide icons |
| Database | SQLite via Prisma ORM |
| State | Zustand (client), route handlers (server) |
| Validation | Manual payload validators with actionable messages (Zod available) |
| Speech | Web Speech API (TTS + browser STT) client-side; server STT via the z-ai SDK for the speaking lab |
| AI | Provider-agnostic LLM layer (`src/lib/llm`) + server-side z-ai SDK; JSON-defensive parsing, streaming SSE |
| Tests | `bun test` (unit/route), `agent-browser` E2E scripts |

---

## Folder structure

```
prisma/schema.prisma        # 40+ models: users, sessions, progress, CMS content
docs/                       # DEPLOYMENT.md (ops), this repo also ships FINAL_REPORT.md
scripts/                    # seed + 9 E2E suites + audit scripts
src/
  app/
    page.tsx                # the single public route (hash-based SPA)
    api/                    # 70+ route handlers (auth, skills, cms admin+learner)
  components/
    ui/                     # shadcn/ui primitives
    app/                    # feature UIs (lesson, vocabulary, reading, listening,
                            #   speaking, writing, tutor, progress, admin, courses)
  data/                     # content-as-code: curriculum, grammar, vocabulary,
                            #   reading, listening, speaking, writing, tutor, cms types
  lib/
    auth.ts                 # scrypt passwords + DB session cookies
    engine/                 # shared exercise engine: grading, sanitising, progress
    cms/                    # CMS domain: rbac, service, analytics, portability, seed
    tutor/ llm/ vocab/ srs  # domain services per feature
    client/                 # typed API client + zustand store
  hooks/                    # hash router, speech, recorder
db/                         # SQLite file + media uploads (gitignored)
```

---

## Requirements

- Bun 1.1+ (recommended) or Node.js 20+
- A modern browser (Web Speech API features need Chrome/Edge/Safari)

## Installation

```bash
git clone <repository-url> talksy && cd talksy
bun install
cp .env.example .env        # adjust DATABASE_URL if needed
bun run db:push             # create the SQLite schema
bun run dev                 # http://localhost:3000
```

The first login creates the self-healing seed (staff accounts + starter
course) automatically.

## Configuration

See `.env.example`. Only `DATABASE_URL` is required. AI provider credentials
live in the server-side SDK configuration and are never exposed to the
client. Production hardening (TLS, `Secure` cookie, migrations) is described
in `docs/DEPLOYMENT.md`.

## Database setup

```bash
bun run db:push        # dev: sync schema (fast, no migration history)
bunx prisma migrate dev --name init   # production: start a migration history
bunx prisma migrate deploy            # production: apply migrations on release
```

Backups, restore tests and the nightly cron recipe: `docs/DEPLOYMENT.md` §4.

## Development commands

```bash
bun run dev       # dev server on :3000 (logs to dev.log)
bun run lint      # ESLint — must stay at 0 errors
bunx tsc --noEmit # TypeScript strict check
bun run test      # pushes test.db, then runs 343 unit/route tests
bun run db:push   # apply prisma/schema.prisma to the dev database
```

### Testing

```bash
bun run test                      # unit + route-handler tests (db/test.db)
./scripts/e2e.sh                  # main flows: register/login/logout/lesson/assessment
./scripts/e2e-cms.sh              # admin CMS + learner course flows
./scripts/e2e-vocabulary.sh       # Word World
./scripts/e2e-grammar.sh          # Grammar School + Sentence Lab
./scripts/e2e-reading-listening.sh
./scripts/e2e-speaking.sh
./scripts/e2e-writing.sh
./scripts/e2e-tutor.sh            # AI tutor modes, privacy, limits
./scripts/e2e-progress.sh         # analytics, scheduler, achievements
./scripts/ai-reliability.ts       # live LLM behaviour checks (needs dev server)
```

E2E scripts start the dev server if it is down and require the
`agent-browser` CLI. Quality gates for every change: `tsc` clean, lint clean,
`bun run test` green, affected E2E suites green.

## Deployment

Full guide: **`docs/DEPLOYMENT.md`** — environment, migrations, seeding,
nightly SQLite backups, health checks (`GET /api`), logging, monitoring,
build & start commands, and the rollback procedure (app / database / content
levels).

## Troubleshooting

| Symptom | Fix |
| --- | --- |
| `500` on login after a schema change | The dev server holds a stale Prisma client. Restart `bun run dev`. |
| Admin login says "incorrect" on a fresh DB | Log in **twice**: the first call provisions the staff seed. |
| Tests fail with table-not-found | `bun run test` pushes the schema to `db/test.db` first; ensure no stray `DATABASE_URL` overrides it. |
| Microphone/Speech recognition missing | Browsers require user consent and a secure context (localhost counts). |
| E2E "page errors" flake once | Re-run; transient dev-server recompiles can emit console noise. |
| Audio upload rejected | Max 25 MB, MIME must be `audio/*` or `image/*`. |
| Tutor says "needs a moment" | Per-user throttle: 1 message / 1.5 s, 60 / day. |

---

See **FINAL_REPORT.md** for the honest production-readiness audit:
completed vs. untested functionality, security and performance findings, and
known limitations.
