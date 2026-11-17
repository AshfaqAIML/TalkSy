# TalkSy — Technical Architecture

## System overview

```
┌────────────────────────────────────────────────────────────┐
│ Browser                                                     │
│  Next.js App Router                                          │
│  ├─ Public site (real routes: / · /courses · /about …)      │
│  ├─ App at /app (AppShell hash router → views)              │
│  ├─ TanStack Query (server state)                            │
│  ├─ Zustand (session user + progress version)               │
│  └─ Web Speech API (TTS + SpeechRecognition, browser-built) │
└──────────────┬─────────────────────────────────────────────┘
               │ fetch /api/* (JSON envelopes, httpOnly cookie)
┌──────────────▼─────────────────────────────────────────────┐
│ Next.js server (port 3000, standalone)                      │
│  ├─ route handlers: auth · curriculum · lessons · attempts  │
│  │   dashboard · practice · profile · contact               │
│  ├─ lib/api.ts envelopes + zod guards + requireUser         │
│  └─ lib/{auth,progress,curriculum-server,speech,env,logger} │
└──────────────┬─────────────────────────────────────────────┘
               │ Prisma ORM
┌──────────────▼─────────────────────────────────────────────┐
│ SQLite (db/custom.db) — user state + content mirror         │
│  User · Session · LessonCompletion · ExerciseAttempt        │
│  VocabularyProgress · DailyActivity · … (v1 backend)        │
│  ContactMessage (public site)                               │
└────────────────────────────────────────────────────────────┘
```

**Curriculum content is code, not rows**: all levels/units/lessons live in
versioned TypeScript (`src/data/curriculum/`) and are reviewed like source.
The database stores only user state, keyed by stable content ids
(`lessonSlug`, `exerciseId`, `wordId`).

## Stack (and why)

| Layer | Choice | Rationale |
| --- | --- | --- |
| Framework | Next.js 16 App Router + React 19 | Required by environment; RSC-capable, mature API routes |
| Language | TypeScript 5, `strict`, `noImplicitAny` | Errors at compile time; content ids are typed unions where practical |
| Styling | Tailwind CSS 4 + shadcn/ui (New York) | Token-driven theming, light/dark for free, accessible primitives |
| Design system | TalkSy DS (`src/components/ds`) + token layer in `globals.css` | Bespoke educational identity on top of shadcn; WCAG gates in CI (see docs/DESIGN_SYSTEM.md) |
| Fonts | Fraunces (400–700) + Plus Jakarta Sans (variable), self-hosted + Noto Sans Devanagari/Bengali/Tamil | Zero CDN dependency; per-script loading via unicode-range |
| Server state | TanStack Query 5 | Caching, retries, loading/error states per query |
| Client state | Zustand | Session user + invalidation versioning only — nothing more |
| Validation | Zod | Same schema object validates on client and server |
| DB | Prisma 6 + SQLite | Environment constraint; schema is PostgreSQL-portable by design |
| Auth | Custom scrypt + opaque session tokens | No external dependency; full control; easy Postgres migration |
| Speech | Web Speech API | Zero API keys, zero cost, privacy (audio stays in browser) |

## Routing strategy

Routing is split by surface (ADR-3 amended by ADR-8 — see
[PUBLIC_SITE.md](PUBLIC_SITE.md)):

- **Public website — real, server-rendered routes** for SEO: `/` (landing),
  `/about`, `/courses`, `/methodology`, `/features`, `/pricing`, `/faq`,
  `/contact`, plus real `/login` and `/register` pages. Metadata, canonical
  URLs, Open Graph, structured data, `sitemap.xml` and `robots.txt` are all
  first-class here (hash routes are invisible to crawlers, which is why the
  marketing site needed real paths).
- **Learning app — `/app`, hash-based** (`src/lib/router.ts`):
  `#/dashboard` · `#/curriculum` · `#/lesson/{slug}` · `#/practice` ·
  `#/profile` · `#/design` (living style guide) · `#/login` `#/register`
  (in-app fallbacks). One document, no reloads between lessons, back button
  and deep links work. `useRoute()` listens to `hashchange`; `navigate(path)`
  updates location state.

Old deep links written for the original single-route app (e.g.
`/#/lesson/a1-1-1`) are forwarded to `/app#/lesson/a1-1-1` by a one-shot
redirect shim on the landing page, so bookmarks keep working.

Auth guards live in `AppShell`: protected views redirect to `#/login` once
the session is known; the `#/` route sends signed-in users to the dashboard
and everyone else to the public site. Two chromes share the app router:
app chrome (collapsible sidebar + topbar + ⌘K command palette + mobile
bottom nav) for signed-in learning surfaces; a light Header/Footer chrome
for auth and the signed-out curriculum preview.

**API routes** are real Next.js route handlers under `src/app/api/**`.

## Authentication & authorization

- Passwords: scrypt (16-byte hex salt, 64-byte derived key), `timingSafeEqual`
  verification (`src/lib/auth.ts`).
- Sessions: 32-byte random hex token, stored in `Session` table, sent as
  `talksy_session` httpOnly cookie (SameSite=Lax, Secure in production,
  30 days). Expired sessions are pruned on access.
- Every protected handler starts with `requireUser()` from `src/lib/api.ts`,
  returning a typed 401 envelope.

## API architecture

### Legacy API (stage 1, `/api/*`) — used by the current UI

Responses use the stage-1 envelope (`src/lib/api.ts`):

```jsonc
{ "ok": true,  "data": { ... } }
{ "ok": false, "error": "Human-readable message.", "details": null }
```

| Route | Method | Purpose |
| --- | --- | --- |
| `/api/auth/register` `/api/auth/login` | POST | Create session (zod-validated bodies) |
| `/api/auth/logout` | POST | Destroy server session |
| `/api/auth/me` | GET | Session user or `null` |
| `/api/curriculum` | GET | Level/unit/lesson tree + per-user lock state |
| `/api/lessons/[slug]` | GET | Full lesson (404 unknown, lock context included) |
| `/api/lessons/[slug]/complete` | POST | Server computes XP/accuracy from attempts |
| `/api/attempts` | POST | Record one graded exercise attempt + vocab update |
| `/api/dashboard` | GET | Aggregated stats: streak, weekly XP, level progress |
| `/api/practice/quiz` | GET | Personalised quiz (weakest words first) |
| `/api/profile` | PATCH / POST / DELETE | Name+goal · password change · account deletion |

Rules: zod-parse every body (`parseBody`), never trust client-computed scores,
write progress only through the progress engine (`src/lib/progress.ts`).

### v1 API (backend foundation, `/api/v1/*`)

Full reference: **docs/BACKEND_API.md**. Envelope with machine-readable
error codes and pagination meta (`src/server/core/api.ts`):

```jsonc
{ "ok": true,  "data": { ... }, "meta": { "page": 1, "pageSize": 20, "total": 66, "totalPages": 4 } }
{ "ok": false, "error": { "code": "LESSON_LOCKED", "message": "…", "details": null } }
```

13 modular domains under `src/server/modules/` (auth, users, curriculum, placement,
content, exercises, assessments, progress, vocabulary, revision, audio, ai,
analytics, admin), each with a service layer consumed by thin route
handlers. Security invariants: every route validates input with Zod,
learner data is always scoped to the session user (IDOR prevention),
answer keys never leave the server, and admin/content endpoints are
gated by hierarchical roles (student 10 < teacher 20 < content_reviewer
30 < admin 100).

## Progress engine (server-authoritative)

- XP: +10 per exercise (first correct attempt only), +20 lesson bonus (once).
- Accuracy = correct exercises ÷ gradable exercises (speaking excluded).
- Vocabulary strength 0–5, Leitner-style, updated by real answers.
- Streak day = ≥1 lesson or ≥3 exercises (per `DailyActivity` row).
- All computed in `computeLessonCompletion` from recorded `ExerciseAttempt`
  rows — the client only reports raw answers, never scores.

## Database schema (dual mandate)

Two layers, one database (`prisma/schema.prisma`, ~55 models):

1. **User state** (stage 1, unchanged): `User` → `Session`,
   `LessonCompletion` (unique per user+lesson), `ExerciseAttempt`
   (append-only), `VocabularyProgress` (unique per user+word),
   `DailyActivity` (unique per user+date). All relations cascade on user
   delete (account deletion is complete).
2. **Content mirror** (backend foundation): a relational mirror of the
   TypeScript curriculum — `Course → LearningLevel → CurriculumModule →
   Unit → Lesson → LessonSection / Vocabulary / Dialogue / ReadingPassage /
   Exercise → ExerciseQuestion → AnswerOption + AnswerKey (server-only)`
   — plus governance (`ContentVersion`, `ContentReview`,
   `PublicationStatus`, `AuditLog`), progress extensions
   (`Enrollment`, `SkillProgress`, `RevisionItem`, `LearningActivity`,
   `LearningStreak`, `Achievement`), AI persistence (tutor conversations,
   writing/speaking submissions + feedback) and identity extensions
   (`UserRole`, `UserProfile`, `UserPreference`, `LearningLanguage`).

The authoring source of truth stays the TypeScript files under
`src/data/curriculum` and `src/data/catalogue` (content-as-code, versioned
in git). The sync pipeline (`src/server/modules/admin/content-sync.ts`)
materialises them into the mirror — idempotent upserts keyed by stable
business ids, no deletes (absent content is RETIRED), hash-based drift
detection that bumps semver `ContentVersion` rows. Learner progress
references content by business keys (lessonSlug / exerciseId / wordId),
which keeps practice attempts without content rows valid.

Setup instructions: **docs/DATABASE_SETUP.md**. Migrations live in
`prisma/migrations/` (`bun run db:migrate` dev, `bun run db:deploy`
prod, `bun run db:setup` = deploy + seed + sync).

Portability: no SQLite-specific features in the schema; a PostgreSQL
switch is a datasource change plus a migration run.

## Error handling strategy

| Layer | Mechanism |
| --- | --- |
| API | Single envelope; zod issues → 422 with first human message; unknown slugs → 404; unauth → 401; locked → 403 |
| Client fetch | Views map `ok:false` messages into inline UI + toasts; TanStack Query `error` states render retry UI |
| Render | `src/app/error.tsx` boundary (reset + go home); `src/app/global-error.tsx` self-contained fallback |
| Logging | `src/lib/logger.ts` structured JSON lines; boundaries log `digest` + message |

## Logging strategy

Structured JSON (`ts`, `level`, `msg`, `meta`) via `src/lib/logger.ts` — the
only sanctioned console touchpoint (ESLint-enforced). Levels: debug (dev or
`TALKSY_DEBUG=1`) < info < warn < error. No PII in `meta`: user ids, lesson
slugs, counts — never emails, passwords or free text.

## Testing strategy

| Layer | Tool | What it proves |
| --- | --- | --- |
| Unit/integrity | `bun test` (35 tests) | Curriculum invariants, streak math, answer matching, speech grading |
| Type system | `bunx tsc --noEmit` | Strict mode across app + tests |
| Lint | `bun run lint` | Zero-warning gate at checkpoints |
| API smoke | curl golden path | Auth, locking (403), guards (401), XP-once rule |
| E2E | `scripts/e2e-lesson-walkthrough.sh` (agent-browser) | Full lesson: all exercise types, completion, unlock |

## Environment & configuration

- Validated at runtime through `src/lib/env.ts` (zod; fail-fast with the
  variable named). `.env.example` is the template; `.env` is git-ignored.
- Server-only secrets stay in server modules; nothing sensitive ships to the
  client bundle. Web Speech needs no keys.
- Security headers set in `next.config.ts` (frame-deny, nosniff, referrer
  policy, mic-only Permissions-Policy).

## Deployment

- `output: "standalone"` build; the sandbox gateway exposes port 3000 only.
- Mini-services (if introduced: websocket, workers) run on separate internal
  ports and must be addressed through the gateway with `?XTransformPort=`.
- Production targets: Node standalone server + PostgreSQL (config change),
  static assets on CDN, same-origin API.

## Architectural decision records (summary)

| # | Decision | Reason |
| --- | --- | --- |
| ADR-1 | Content in code, not DB | Reviewable, diffable, type-checked content; DB stays small and fast |
| ADR-2 | Custom auth over NextAuth | No adapter lock-in for SQLite→Postgres path; scrypt is sufficient; ~100 auditable lines |
| ADR-3 | Hash router on single route | Environment constraint; keeps deep links and back button working |
| ADR-4 | XP computed server-side | Honest-progress principle; client cannot inflate |
| ADR-5 | Web Speech API, no cloud TTS/ASR | Zero keys, zero cost, privacy; self-assessment fallback covers gaps |
| ADR-6 | SQLite with Postgres-portable schema | Environment constraint; migration is config, not code |
| ADR-7 | Self-hosted variable fonts + unicode-range @font-face | No CDN/runtime network dependency; South-Asian scripts load only when used |
| ADR-8 | Design tokens in CSS, mirrored in TS, gated by tests | One source of truth for designers and JS (charts/motion); drift and WCAG regressions fail CI |
