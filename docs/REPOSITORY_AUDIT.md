# TalkSy — Repository Audit (Stage 2, post-rebrand)

Audit performed before any foundation work, on the tree as committed in
`a9a556b` ("Stage 1: EnglishPath platform foundation"). This document is the
formal record of the seven audit deliverables.

## 1. Repository audit — what exists

**Frameworks & libraries** (`package.json`): Next.js 16.1 (App Router) · React
19 · TypeScript 5 · Tailwind CSS 4 (+ `tw-animate-css`) · shadcn/ui New York
with the full Radix primitive set · Prisma 6 + `@prisma/client` · TanStack
Query 5 · Zustand 5 · Zod 4 · Framer Motion 12 · next-themes · react-hook-form
· recharts · sonner/toast · Lucide icons · Web Speech via DOM APIs (no
package). Dev: ESLint 9 (next/core-web-vitals + next/typescript), bun-types,
sharp. Also present but unused by the app: `next-auth`, `next-intl`,
`@mdxeditor/editor`, `@dnd-kit/*`, `@tanstack/react-table`, `react-markdown`,
`uuid`, `z-ai-web-dev-sdk` (template inventory — candidates for pruning at a
later dependency-hygiene stage, not blocking).

**Application structure:** `src/app` (single route + 10 API route handlers) ·
`src/components/{ui,talksy}` · `src/data/curriculum` (12 unit files + types +
index) · `src/lib` (7 modules) · `src/store` · `src/hooks` · `tests/` (3 files,
35 tests) · `prisma/schema.prisma` · `public/` (icon.svg, logo.svg, robots.txt)
· sandbox infra (`.zscripts/`, `Caddyfile`, `examples/`, `mini-services/`).

**Routing:** hash router on the single visible route `/` (environment
constraint); API handlers are real route handlers. Guard logic in AppShell.

**Database:** SQLite at `db/custom.db`; schema models user state only (6
models, all relations cascade from `User`); content ids are stable strings.

**Authentication:** custom — scrypt hashing, opaque 32-byte token sessions in
DB, httpOnly cookie, 30-day expiry, expired-session pruning. No NextAuth in
use despite the dependency being present.

**API architecture:** uniform `{ok, data|error, details}` envelopes; zod body
parsing; `requireUser` guard; server-authoritative XP/accuracy.

**Design system:** complete token set (oklch, light+dark) in `globals.css`,
emerald/amber theme, Geist fonts, shadcn primitives, custom `.talksy-scroll`
scrollbars; logo wordmark + trail glyph icon.

**Assets:** `icon.svg` (trail glyph, brand-correct), `logo.svg` (sandbox
default), `robots.txt`.

**Environment:** `.env` with `DATABASE_URL` only; no validation layer at audit
time (now `src/lib/env.ts`); no `.env.example` at audit time (now added).

**Deployment:** standalone output; port 3000 behind Caddy gateway; mini-service
conventions documented in the skill; no CI pipeline (sandbox).

**Tests:** 35 passing — curriculum integrity (structure + answer validity +
skill coverage), progress (streaks, XP-once), speech (answer matching,
similarity grading). Plus `scripts/e2e-lesson-walkthrough.sh` (agent-browser).

**Documentation:** README (accurate stage table, architecture notes, testing
matrix) — no planning docs at audit time (now the `docs/` suite).

## 2. Architecture assessment

**Verdict: sound and unusually disciplined for its size.** Strengths:

- Clean layering: content (data) → domain (lib) → transport (api routes) →
  presentation (views). No business logic in page files; views are dumb-ish
  and API-driven.
- The "content in code, user state in DB" split is the single best decision in
  the repo — it keeps the DB tiny, content reviewable, and ids type-checked.
- Honest-progress engine is genuinely server-authoritative; attempts are
  append-only and recomputation is possible at any time.
- Uniform API envelopes and shared zod schemas remove a whole class of bugs.

**Weaknesses found (and their disposition this stage):**

| Finding | Disposition |
| --- | --- |
| `noImplicitAny: false` + `ignoreBuildErrors: true` weakened the type gate | Fixed: strict + build enforcement |
| ESLint relaxed to the point of silence | Fixed: staged rules; 23 unused symbols triaged to zero |
| No error boundaries — render error = blank page | Fixed: `error.tsx` + `global-error.tsx` |
| No environment validation | Fixed: `src/lib/env.ts` wired into the Prisma client |
| No logging strategy (raw Prisma query logs, console scattered later) | Fixed: `logger.ts` + ESLint `no-console` policy |
| No security headers | Fixed: baseline headers incl. mic-scoped Permissions-Policy |
| No planning documentation | Fixed: the `docs/` suite |
| ~13 unused template dependencies | **Kept** (working tree depends on some transitively; pruning is its own risk-assessed stage, see risks) |

## 3. Existing functionality inventory (verified end-to-end in Stage 1)

| Area | Detail | State |
| --- | --- | --- |
| Auth | register / login / logout / me; scrypt; DB sessions; duplicate email 409 | ✅ |
| Curriculum | A1 + A2, 12 units, 36 lessons, all original; sequential locking; in-development levels shown honestly | ✅ |
| Lesson player | 7-step arc; vocab cards, dialogue player (2 voices, slow), grammar, passage; 6 exercise types; completion screen | ✅ |
| Listening | TTS two-voice, slow replay | ✅ |
| Speaking | SpeechRecognition similarity grading + self-assessment fallback | ✅ |
| Progress | XP (once per exercise/lesson), accuracy (gradable only), vocab strength 0–5, streaks (≥1 lesson or ≥3 exercises), daily activity | ✅ |
| Practice hub | personalised quizzes, weakest words first | ✅ |
| Dashboard | real stats, daily goal ring, weekly XP chart, level progress | ✅ |
| Profile | name, daily goal, password change, account deletion | ✅ |
| Shell | light/dark, responsive 375px+, hash deep links, 404 view | ✅ |

**Not implemented:** B1–C1 content, placement test, extended writing
exercises, leaderboards, email flows, rate limiting, analytics.

## 4. Implementation roadmap

→ [IMPLEMENTATION_ROADMAP.md](IMPLEMENTATION_ROADMAP.md) (Stages 3–8; next is
B1 curriculum).

## 5. Technical risks

| Risk | Severity | Mitigation |
| --- | --- | --- |
| SQLite → PostgreSQL migration drift (brief mandates Postgres; environment is SQLite-only) | Medium | Schema written portable (no SQLite-isms); Stage 8 includes a migration rehearsal; any raw SQL must stay ANSI |
| Web Speech API quality varies by browser/OS (voices, recognition accuracy) | Medium | Fallback self-assessment exists; voice count checked at runtime; never gates XP |
| Single-route + hash-router constraint leaks into product thinking (deep features wanting real routes) | Medium | Documented as ADR-3; revisit only if environment changes |
| Content authoring throughput is the critical path (18 lessons/level × 3 remaining levels) | Medium | Blueprint fixes anatomy + test gates; authoring is mechanical once themes are approved |
| Auth endpoints unthrottled (brute-force login attempts) | Low-Med (no production traffic yet) | Roadmapped AUTH-7; acceptable while sandbox-only |
| `ExerciseAttempt` growth (append-only, one row per attempt) | Low | Indexed by user+lesson; pruning/archival policy at Postgres migration |
| Unused template dependencies inflate install surface / audit noise | Low | Tracked for a dedicated prune stage; removal requires checking transitive use |
| No CI pipeline — gates depend on discipline | Low | Stage checklist in roadmap; sandbox has no CI runner |

## 6. Missing dependencies

**None blocking.** The app intentionally has zero external service
dependencies (no API keys). Candidates *if* their stages arrive:

- Mail transport (resend / nodemailer) — for AUTH-6 email verification
- `@upstash/ratelimit` or in-memory limiter — for AUTH-7 (may be zero-dep)
- Playwright — if E2E should graduate from agent-browser scripting to CI
- Prettier — formatting is currently `.editorconfig` + existing style only
  (install deliberately, with a full-tree format commit, when chosen)

## 7. Recommended project structure

Current structure is retained (no reorganisation without technical cause).
Canonical map with naming conventions:

```
docs/                      planning & process documents (this suite)
prisma/schema.prisma       user-state models only
public/                    brand assets
scripts/                   verification scripts (e2e walkthrough, tooling)
src/
  app/
    api/<area>/route.ts    one folder per resource, route.ts handlers
    layout.tsx page.tsx    root layout, single-route entry
    error.tsx global-error.tsx  render-error boundaries
    globals.css            design tokens (single source of colour truth)
  components/
    ui/                    shadcn primitives (vendored, unmodified)
    talksy/                app components: shared/ views/ lesson/
  data/curriculum/         {level}-unit{n}.ts + types.ts + index.ts
  lib/                     domain + infrastructure modules (no React)
  store/                   zustand stores
  hooks/                   shared react hooks
tests/                     *.test.ts, mirroring lib/data structure
```

Rules: business logic never in `views/`; new API areas get a folder under
`api/`; new content files follow the slug/id conventions in the curriculum
blueprint; anything server-only imports from `lib/` without "use client".
