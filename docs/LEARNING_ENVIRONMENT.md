# The student learning environment

The learner's central workspace: the dashboard, the learning roadmap, the
course catalogue and the progress-connected course experience. Everything in
these surfaces derives from the signed-in learner's own rows — attempts,
completions and vocabulary progress. No number is simulated, averaged over
other users, or hand-typed.

**Entry points** (in-app, hash-routed under `/app`, all auth-gated):

| Surface | Route | Data source |
| --- | --- | --- |
| Dashboard | `#/dashboard` | `GET /api/dashboard` |
| Learning roadmap | `#/roadmap` | `GET /api/curriculum` (+ static journey metadata) |
| Course catalogue | `#/courses` | `GET /api/courses` |
| Course overview | `#/course/{unitSlug}` | `GET /api/courses/{unitSlug}` |
| Lesson player | `#/lesson/{lessonSlug}` | `GET /api/lessons/{slug}` |

Navigation: sidebar (desktop), bottom bar + drawer (mobile), ⌘K command
palette. The curriculum browser (`#/curriculum`) remains as the full
level → unit → lesson reference and signed-out preview surface.

---

## 1. Dashboard — every number and its source

`GET /api/dashboard` extends the stage-1 payload. The mapping below is the
honesty contract for the view: if a value cannot be derived, it is not shown.

| Displayed | Derived from |
| --- | --- |
| Personal welcome | session user's name |
| **Current level** (code, CEFR label, `Lesson n of m`, level %) | level of the computed next lesson; falls back to the last live level when everything is complete |
| **Continue learning** (resume-aware) | the most recent lesson with attempts but no completion (`inProgress`), else the next incomplete lesson in path order |
| **Recommended next lesson** (+ reason) | next incomplete lesson honouring the learning-plan anchor; hidden when it duplicates the resume card |
| **Today's learning plan** (2–3 items) | `buildTodayPlan`: resume/start the real next lesson, review words whose spaced-repetition estimate is due, and the learner's own daily goal — each item links to a real surface |
| **Weekly learning target** | the learner's `dailyGoalMinutes` × 7 (target XP = ×70) vs the XP actually recorded this week (`DailyActivity` rows) |
| Course progress (P1/A1/A2 cards) | `LessonCompletion` rows per level |
| Lessons completed | `LessonCompletion` count / total available lessons |
| **Vocabulary progress** (seen/learned + strength distribution 0–5) | `VocabularyProgress` rows; "learned" = strength ≥ 2 (the Leitner threshold used everywhere) |
| **Grammar & usage** (first-try accuracy) | `ExerciseAttempt` rows for mcq/fill/order/match exercises, bucketed by `exerciseSkillBucket` |
| **Listening performance** | attempts on `listen` exercises |
| **Speaking activity** | attempts on `speak` exercises — always labelled "self-assessed practice, recorded, never scored" |
| **Writing activity** | attempts on `write` exercises — same self-assessment note |
| **Upcoming revisions** | `computeRevisionSchedule`: per word, next review = `lastReviewedAt` + Leitner interval `[1,2,4,8,16,30]` days by strength (0–5); "due now" = past due; upcoming lists the next five with due dates |
| Streak / XP / words stat cards | unchanged stage-1 derivations |

The skill cards' accuracy is **exercise-based** (distinct exercises correct at
least once / distinct exercises attempted), matching the server's
lesson-completion accuracy rule — retries cannot inflate it.

## 2. Learning roadmap (`#/roadmap`)

A visual pathway over the real curriculum, honest about what exists:

- **Position summary** — journey completion %, "Lesson n of 66", current level
  and next lesson, with a continue/resume CTA.
- **Pathway strip** — one station per live unit (18), grouped by level,
  states: done (filled check) / current (pulsing, "You are here") / available
  (dashed) / locked (lock). Horizontally scrollable on mobile.
- **Level sections** — per-unit timeline cards with:
  - stage chip (Alphabet → Phonics → … → Communication; `src/data/curriculum/journey.ts`),
  - lessons done / total and average best score (**mastery**),
  - expandable lesson list with per-lesson best scores and resume badges,
  - prerequisites: "Unlocks after {previous unit} — k lessons to go" for
    locked units; "Start here — no prerequisites" for the very first.
- **Planned levels (B1–C1)** — dashed cards with their real descriptions and
  an "In development" badge. No lesson counts are implied for them.

## 3. Course catalogue (`#/courses`)

A **course** is one curriculum unit: 3–5 lessons sharing a theme, with the
previous unit as its prerequisite. 18 live courses today.

- **Search** across title, description, stage, subjects and level metadata.
- **Filters**: proficiency level (P1/A1/A2), skill (courses training it),
  subject (controlled vocabulary — `SUBJECT_FACETS`), estimated duration
  (≤30 / 30–45 / 45+ min from real lesson minutes).
- **Cards** show the unit's real facets (lessons, minutes, words, best
  average) and one of four honest states: `Locked` / `Ready to start` /
  `In progress` / `Completed` (`courseStateOf`).
- Locked cards open the course overview in read-only mode (see below) —
  learners can see what is coming without being able to start it.

## 4. Course overview (`#/course/{slug}`)

Every course page contains: description, learning objectives (authored lesson
objectives for P1 units; honest topic listing for legacy A1/A2 units),
**prerequisites** (previous unit + real state + lessons to go), **modules**
(every lesson with minutes, skills, exercise/vocab counts, best score and
resume state), **estimated completion time** (sum of real lesson minutes),
**skills developed** (per-skill lesson counts), **assessment information**
(counts of assessment-phase exercises vs total; the never-scored writing and
speaking posture is stated), and **progress** (ring + average best score).

Locked courses render the same outline with a lock banner and no CTA.

## 5. Continuity — resume exactly where you left off

Three layers, in `src/lib/lesson-state.ts` + the lesson player:

1. **Per-step persistence (localStorage)** — `talksy.lp.{userId}.{slug}` keeps
   the step index, every answered exercise (result **and the input that
   produced it**), saved on each navigation and (debounced) each keystroke.
   Leaving the lesson, switching lessons (the player remounts per slug via a
   `key`), or a full page reload restores the exact position — going *back*
   into an answered exercise shows the learner's own input and the recorded
   feedback; nothing is re-asked.
2. **Server-side in-progress tracking** — lessons with attempts but no
   completion are surfaced as "In progress · n answered" on the curriculum
   browser, roadmap and course pages, and drive the dashboard's resume card.
   Derived from `ExerciseAttempt` rows (`deriveInProgressLessons`).
3. **Cross-device fallback** — `GET /api/lessons/{slug}` returns
   `attemptedExerciseIds`; with no local state (new device), the player
   resumes just after the last attempted exercise, with the server's
   correct/incorrect outcomes restored.

Completing a lesson clears its saved state (nothing left to resume);
"Practise again" starts a clean review pass.

## 6. Responsive design

Mobile-first throughout: single-column grids at 375px (all grids use
`grid-cols-1`+ breakpoints — bare `grid` auto-tracks are avoided because they
size to max-content), horizontally scrollable roadmap strip, 44px+ touch
targets, bottom navigation with four destinations, and the lesson rail hidden
below `xl`. Verified in the E2E: no horizontal overflow on any core page at
375px.

## 7. API additions (legacy app family, `{ ok, data }` envelope)

| Route | Adds |
| --- | --- |
| `GET /api/curriculum` | `nextLesson` (path order, anchor-aware) + `inProgressLessons` |
| `GET /api/dashboard` | `currentLevel`, `inProgress`, `recommended`, `todayPlan`, `weeklyTarget`, `skills`, `vocabulary.byStrength`, `revisions` |
| `GET /api/courses` | 18 course summaries with facets + per-learner state |
| `GET /api/courses/[slug]` | full course-overview payload |
| `GET /api/lessons/[slug]` | `attemptedExerciseIds`, `correctExerciseIds` |

Shared derivations live in `src/lib/learning-stats.ts` (client-safe, pure,
unit-tested) and `src/lib/course-catalogue-server.ts`; `computeNextLesson`
and the in-progress derivation live in `src/lib/curriculum-server.ts`. The
word-strength constants moved to `learning-stats.ts` so views never import
server-only modules (`@/lib/progress` pulls the database).

## 8. Testing

- **Unit** — `tests/learning-environment.test.ts` (31 tests): journey metadata
  coverage, next-lesson computation (fresh/anchor/complete), in-progress
  derivation, skill bucketing, revision schedule, weekly target, today's plan,
  course states, catalogue + detail builders, formatting helpers.
- **E2E** — `scripts/e2e-learning-env.sh` (73 checks): fresh-learner honest
  zeros, full lesson completion through the real UI (all exercise types incl.
  the speaking self-assessment fallback), partial-lesson exit → in-progress
  badges → resume after reload (position + answers), back/forward answer
  preservation, dashboard real-data sections, roadmap states, catalogue
  filter/search, locked course pages, 375px overflow checks, dark mode.

Screenshots: `download/talksy-learning-env/screenshots/`.
