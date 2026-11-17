# TalkSy — Implementation Roadmap

Stages are strictly sequential; a stage closes only when its exit criteria are
met (tests green, lint zero warnings, browser-verified, git checkpoint). The
meta-rule holds: **no new stage while unresolved critical errors exist**.

Requirement IDs refer to [PRODUCT_REQUIREMENTS.md](PRODUCT_REQUIREMENTS.md)
(v2 PRD — legacy v1 IDs are mapped in its Appendix A). The stages below are
re-baselined against the PRD's release trains R1–R6 at each stage kickoff;
Stage 3 (B1) begins R1.

> **Curriculum re-baseline (Stage 3).** The complete ten-level curriculum
> catalogue ([CURRICULUM_CATALOGUE.md](CURRICULUM_CATALOGUE.md)) is now the
> content scope: 10 levels · 42 modules · 112 units · 265 lessons ·
> 52 core hours, Pre-A1 → C1, with a strict spine (ST01–ST05), four
> parallel-eligible skills tracks (ST06–ST09) and advanced integration
> (ST10). Content authoring per release train targets catalogue units; the
> legacy A1/A2 content maps into it via `legacy-mapping.json`. B1 (FR-CURR-05)
> = ST01–ST05 + track mid-band modules; B2 (FR-CURR-06) = track upper bands +
> ST10-M01/M02; C1 (FR-CURR-07) = full program completion.

## Stage history

### Stage 1 — Platform foundation ✅ (commit `a9a556b`)

Auth (scrypt + DB sessions), A1 + A2 curricula (36 original lessons), lesson
player with 6 exercise types, listening (TTS) + speaking (recognition with
fallback), progress engine (XP/streaks/accuracy/vocab strength), practice hub,
dashboard, profile & settings. E2E-verified in browser; 35 tests.

### Student learning environment ✅ (this checkpoint)

The learner's central workspace, every number derived from real rows:

- **Dashboard** — current level, resume-aware continue card, recommended next
  lesson, today's learning plan, weekly target (own daily goal × 7), course
  progress, per-skill performance (grammar/listening/speaking/writing),
  vocabulary strength distribution, upcoming reviews (Leitner intervals).
- **Roadmap** (`#/roadmap`) — pathway strip + per-unit timeline: done/current/
  available/locked states, prerequisites ("Unlocks after … — k lessons to
  go"), mastery (average best score), planned levels honestly labelled.
- **Course catalogue** (`#/courses`) — 18 unit-courses, search + filters by
  level/skill/subject/duration; locked courses open read-only overviews.
- **Course overview** (`#/course/{slug}`) — description, objectives,
  prerequisites, modules, estimated time, skills, assessment info, progress.
- **Continuity** — per-lesson localStorage state (step index + every answer
  and the input behind it), server-side in-progress tracking from attempts,
  cross-device resume fallback via `attemptedExerciseIds`; answers never
  reset when navigating between sections; state cleared on completion.
- Shared derivations: `src/lib/learning-stats.ts` (client-safe),
  `course-catalogue-server.ts`, `curriculum-server.ts` (`computeNextLesson`).
- Quality: tsc 0 · eslint 0 · 221/221 tests (31 new) · E2E
  `scripts/e2e-learning-env.sh` 73/73 · docs/LEARNING_ENVIRONMENT.md.

### Stage 2 — Foundation hardening & rebrand ✅ (this checkpoint)

- Rename **EnglishPath → TalkSy** everywhere (components folder, imports,
  brand strings, metadata, session cookie `talksy_session`, CSS prefix
  `.talksy-*`, package name).
- Documentation suite (`docs/`): vision, requirements, methodology, curriculum
  blueprint, architecture, design system, roadmap, audit, guidelines.
- Technical quality: `noImplicitAny: true`; build-time type enforcement
  (`ignoreBuildErrors: false`); React StrictMode; staged ESLint (hygiene rules
  at warn → **triaged to zero**, 23 unused-symbol warnings fixed); security
  headers; `src/lib/env.ts` validated environment; `src/lib/logger.ts`
  structured logging; `error.tsx` + `global-error.tsx` boundaries;
  `.env.example`; `.editorconfig`.

## Stage 3 — B1 curriculum 🚧 (next)

**Scope:** CURR-5 — six B1 units (18 lessons) authored to blueprint spec;
speaking/listening difficulty raised a register; passages 2–3 paragraphs.

- Author `src/data/curriculum/b1-unit{1..6}.ts`, flip B1 → `available`.
- Extend curriculum tests: slug pattern includes `b1-[1-6]-[1-3]`; totals 54.
- Curriculum UI already renders any `available` level — verify + browser-test.
- Authoring note: content work is the bulk; no new infrastructure expected.

**Exit criteria:** all curriculum gates green over 54 lessons; full B1 lesson
walkthrough in browser (both themes, mobile width); XP/accuracy honest on B1
lessons; checkpoint commit.

## Stage 4 — Placement test

**Scope:** CURR-8 — adaptive ~24-item placement (grammar/vocab/listening
sampling A1→B1); places learner at first unit where accuracy < 70%.

- New `PlacementAttempt` model (server-scored), `#/placement` view, dashboard
  prompt for new users, unlocking rules per blueprint.
- Risks: item calibration is content work; keep items versioned like lessons.

**Exit criteria:** placement never marks lessons complete; unlocks correct
band (verified across synthetic ability profiles); tests for unlock logic.

## Stage 5 — Writing skill expansion

**Scope:** SKIL-4 — new exercise types: guided sentence writing (model
sentence + prompts) and short paragraph (B1+) with self/peer assessment rubric
(AI-assisted scoring only as an augmentation, never the sole XP source).

- Extend `Exercise` union + renderers + grading; speaking-style "practice not
  quiz" posture for ungradable writing until a trustworthy grader exists.

**Exit criteria:** writing exercises render, save, and feed vocab/attempt
models; fallback paths browser-verified.

## Stage 6 — B2 curriculum

CURR-6, same shape as Stage 3 (18 lessons at B2 register; fast-speech
listening; argumentative writing from Stage 5 types).

## Stage 7 — Engagement & social (subordinate to learning)

**Scope:** PROG-10 leaderboards (opt-in weekly XP leagues, anonymous handles);
streak freeze (1/week, earned not bought); achievement milestones derived from
real data only (e.g. "100 words at strength ≥ 3").

**Exit criteria:** no engagement feature gates content; all numbers
server-derived.

## Stage 8 — C1 curriculum + platform maturity

CURR-7; NFR-7 latency baselines; NFR-10 coverage ≥ 80% on `src/lib/*`;
AUTH-6/7 (email flows + rate limiting — needs mail transport decision);
PostgreSQL migration rehearsal (config-only switch proved on a staging copy).

## Standing stage checklist

1. `bunx tsc --noEmit` — zero errors
2. `bun run lint` — zero warnings
3. `bun test` — all green, new tests for new logic
4. Golden-path API smoke (curl) where routes changed
5. agent-browser E2E of the touched user flows (both themes, 375px + desktop)
6. `dev.log` reviewed for runtime errors/hydration warnings
7. README stage table + this roadmap updated
8. Git checkpoint commit with stage summary
