# TalkSy — Development Guidelines

How we write and review code. These rules are enforced by tooling where
possible (TypeScript, ESLint) and by review otherwise.

## Commands

```bash
bun run dev          # dev server (auto-managed in this environment)
bun test             # unit + curriculum integrity tests
bun run lint         # ESLint — must exit 0 with zero warnings
bunx tsc --noEmit    # strict typecheck
bun run db:push      # sync schema to SQLite (db/custom.db)
```

## Code organisation

- **Layering:** `data` (content) → `lib` (domain + infra) → `app/api`
  (transport) → `components/talksy` (presentation). Never skip a layer:
  views don't touch Prisma; route handlers don't contain domain math.
- **`lib/` modules are framework-light:** no JSX, no React imports. Anything
  importing `react` belongs in `components/` or `hooks/`.
- **Server-only code** must never be imported by a client component. Shared
  zod schemas are the one sanctioned overlap between client and server.
- **One file = one responsibility**, named for it: `progress.ts` (progress
  math), `curriculum-server.ts` (content + DB merge), `speech.ts` (speech
  APIs). New domain concept → new lib module.

## Naming conventions

| Thing | Convention | Example |
| --- | --- | --- |
| Components | PascalCase, suffixed by role | `LessonPlayerView`, `FeedbackPill` |
| Views | `*View` | `DashboardView` |
| Hooks | `useThing` | `useRoute` |
| lib functions | camelCase verbs | `computeStreak`, `findLesson` |
| API routes | kebab-case folders, plural resources | `api/practice/quiz` |
| DB models | PascalCase singular | `LessonCompletion` |
| Content files | `{level}-unit{n}.ts` | `b1-unit3.ts` |
| Content ids | `{lessonSlug}-ex{n}` / `-w{n}` | `a1-2-3-ex4` (**stable — persisted**) |
| Env vars | `SCREAMING_SNAKE`, product prefix for optional | `TALKSY_DEBUG` |
| Branches/commits | `Stage N: summary` | `Stage 3: B1 curriculum` |

**Never rename** a lesson slug, exercise id or word id — they are foreign keys
in the database. New content means new ids.

## TypeScript rules

- `strict` + `noImplicitAny` — on (tsconfig).
- No `any` in new code; `unknown` + narrowing, or a precise type.
- Discriminated unions for variants (see `Exercise` in
  `src/data/curriculum/types.ts` — the pattern to copy).
- Types live next to their data (`types.ts` for curriculum; inline for
  single-use props).
- `bunx tsc --noEmit` must pass — build enforcement is on
  (`ignoreBuildErrors: false`).

## Error handling strategy

**Server (route handlers):**

1. Start with `requireUser()` when the resource is private → typed 401.
2. Parse bodies with `parseBody(req, schema)` → 400/422 with the first
   human-readable zod message.
3. Return `ok(data)` / `fail(message, status)` — never a bare `NextResponse`.
4. Status vocabulary: 400 malformed · 401 unauthenticated · 403 locked/forbidden ·
   404 unknown slug · 409 conflict (duplicate email) · 422 validation.
5. Log unexpected failures with `logger.error("context", err)` — never
   swallow, never expose stack traces to clients.

**Client (views):**

1. Every fetch surfaces three states: loading (Skeleton), error (inline retry
   UI + toast for actions), empty (explanatory empty state).
2. TanStack Query owns retries; views render `error` with a retry button.
3. User-visible error text is a full sentence the learner can act on; never
   the raw envelope JSON.
4. Render crashes are caught by `src/app/error.tsx` (reset) and
   `global-error.tsx` (self-contained) — extend, don't bypass.

## Logging strategy

- Use `src/lib/logger.ts` (`logger.debug/info/warn/error`) — the only
  sanctioned console touchpoint; ESLint warns on any other `console.*`.
- Structured JSON lines: `msg` is a stable lowercase phrase; `meta` carries
  ids and counts (userId, lessonSlug, count) — **never** emails, passwords,
  free-text answers or audio.
- debug = dev-only (or `TALKSY_DEBUG=1`); info = normal operations worth a
  trace; warn = degraded-but-handled; error = needs attention.

## Testing strategy

| Layer | Standard |
| --- | --- |
| Unit (`bun test`) | All domain math in `lib/` gets tests: streak edge cases (today/yesterday/gap days), XP-once, answer matching, similarity thresholds |
| Content integrity | Every curriculum change keeps `tests/curriculum.test.ts` green; new levels extend the totals and slug patterns |
| Types | `tsc --noEmit` zero errors — part of every stage checklist |
| Lint | Zero warnings at stage checkpoints (warnings are triaged immediately, as done in Stage 2) |
| API smoke | curl golden path for any new/changed route: success + each failure mode (401/403/404/409/422) |
| E2E | agent-browser walkthrough of the touched flows (`scripts/e2e-lesson-walkthrough.sh` is the model), both themes, 375px + desktop |

Test placement: `tests/*.test.ts` mirroring source names. New exercise types
must extend the integrity tests (well-formedness + gates) in the same change.

## React & component conventions

- Views are client components (`"use client"`), composed of shadcn primitives;
  never modify `components/ui/*` (vendored) — wrap them instead.
- Server state: TanStack Query only (no ad-hoc `useEffect` fetching); query
  keys are arrays from the route (`["lesson", slug]`).
- Client state: Zustand store(s) with actions colocated; no prop-drilling
  session state — `useAppStore`.
- Accessibility: semantic landmarks; icon-only buttons `aria-label`; async
  status regions `role="status" aria-live="polite"`; focus visible; ≥44px
  touch targets.
- Loading/error/empty for every async surface — a view is incomplete without
  all three.
- Motion: subtle enter/feedback animations only (Framer Motion), never
  blocking, respects reduced-motion.

## Data & schema conventions

- Prisma schema stores user state only — content additions go to
  `src/data/curriculum/`, never to new tables.
- Every model relation cascades from `User` (account deletion = full cleanup).
- Schema changes: edit `schema.prisma` → `bun run db:push` → update this
  doc's audit section if a model is added.
- Keep the schema PostgreSQL-portable: no SQLite-specific column types or
  pragmas; arrays become relation tables.

## Content authoring checklist (per lesson)

1. Follows the lesson anatomy and id rules (see curriculum blueprint).
2. Definitions in level-appropriate simple English; examples use the target
   word in context.
3. Includes listen + speak exercises; listen exercises link a `wordId` where
   natural.
4. `bun test` green (all integrity gates).
5. Browser walkthrough of the finished lesson before merge.

## Definition of done (any change)

- [ ] `tsc --noEmit` zero errors
- [ ] `bun run lint` zero warnings
- [ ] `bun test` green (tests added for new logic)
- [ ] Browser-verified: golden path + failure path, light + dark, mobile width
- [ ] `dev.log` clean of new runtime/hydration errors
- [ ] Docs updated if architecture, conventions or stage status changed
- [ ] Git checkpoint commit
