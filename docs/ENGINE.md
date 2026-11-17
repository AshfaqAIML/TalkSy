# TalkSy Lesson & Exercise Engine

A reusable, data-driven engine for rendering lessons and grading exercises.
**Content is code**: lesson pages are never hardcoded — every lesson is typed
data consumed by one renderer, and every exercise is graded by one
server-side validator.

```
src/data/curriculum/          ← content as code (lessons, blocks, exercises)
  types.ts                    ← the content model (20 block types, 16 exercise types)
  pre-a1.ts / a1.ts           ← beginner lesson library (6 lessons)
  pre-a1-exercises.ts / a1-exercises.ts
  index.ts                    ← registry + integrity validation + coverage helpers

src/lib/engine/               ← isomorphic engine core
  normalize.ts                ← text normalization, typo tolerance, seeded PRNG
  validators.ts               ← authoritative grading for all 16 exercise types
  sanitize.ts                 ← strips grading data before anything reaches the client
  assessment.ts               ← question selection, grading, performance summaries
  progress.ts                 ← completion rules (no auto-mastery)

src/components/app/lesson/    ← the renderer
  blocks/BlockRenderer.tsx    ← one dispatcher for all 20 block types
  exercises/ExerciseRunner.tsx ← one runner for all 16 exercise types
```

## Lesson content renderer

A lesson is `sections[]`, each section is `blocks[]`. The `BlockRenderer`
dispatches each block to a view component with a consistent interface:

| Block | Purpose |
| --- | --- |
| `text` / `heading` | prose and structure (with optional translations) |
| `definition` | term + part of speech + definition + example |
| `example` | numbered EN/ES parallel examples |
| `table` | tabular data (conjugations, number words…) |
| `grammar-rule` | rule card with explanation, examples, exceptions |
| `vocabulary-list` | word cards with POS, translation, TTS |
| `image` | local SVG illustrations |
| `diagram` | `steps` / `pyramid` / `compare` variants, data-driven |
| `audio` | TTS player with slow / normal speeds |
| `video` | scene player (auto-advancing scenes + narration) |
| `dialogue` | chat-style dialogue with per-line audio |
| `note` / `warning` | callouts |
| `practice` | renders N exercises through the ExerciseRunner |
| `homework` | offline tasks |

Adding a lesson = adding data. Adding a block *type* = one interface entry +
one view component.

## Lesson navigation

The `LessonPlayer` provides: previous/next section, a lesson outline with
per-section completion state, explicit "Mark section complete & continue",
auto-saved position (debounced `position` action), bookmark toggle, per-section
notes (dialog, persisted), a global translation toggle, a global speech-rate
setting, and a lesson summary (key points + speakable vocabulary chips) that
links into the assessment.

## Exercise engine

16 reusable types, each a typed variant of `Exercise`:

`mcq` · `multi-select` · `fill-blank` · `match` · `drag-drop` · `rearrange` ·
`complete-sentence` · `correct-mistake` · `translate` · `short-answer` ·
`listen-answer` · `dictation` · `read-answer` · `write-response` ·
`speak-response`

- **Difficulty**: `easy | medium | hard | challenge`, mirrored in point values
  (10/20/30/40).
- **Hints**: progressive reveal; every revealed hint is recorded on the attempt.
- **Feedback**: after submission the learner gets correct/incorrect status, the
  correct answer, an explanation, why the typical wrong answer is wrong, the
  relevant grammar rule, and a similar example — then may retry (each retry is
  a new persisted attempt).
- **Security**: the client only ever receives `SafeExercise` payloads
  (sanitized — no `correctOptionId`, `acceptedAnswers`, `pairs`, keywords…).
  Grading happens exclusively in `POST /api/exercises/attempt`, which also
  persists the attempt and updates aggregate stats.
- **Grading semantics**: normalization (case/punctuation/whitespace), accepted
  answer variants, keyword containment for open answers, word-level typo
  tolerance (1 edit ≥ 5 letters, 2 edits ≥ 8), partial credit for
  multi-select/match/drag-drop, word-count + required-content rules for
  writing, transcript keyword rules for speaking.

## Persistence model

| Table | Stores |
| --- | --- |
| `LessonProgress` | per-lesson status, completed section ids, position, bookmark |
| `ExerciseAttempt` | every submission: answer, correctness, score, hints used, duration, context (practice/assessment) |
| `LessonNote` | one note per user/lesson/section |
| `AssessmentResult` | assessment runs: selected questions, score, pass, per-question detail |
| `UserStats` | aggregate counters + per-type/difficulty/skill accuracy + daily streak |

**No auto-mastery**: opening a lesson only ever creates an `in-progress` row.
A lesson is `completed` only when every section has been explicitly marked
complete AND (when the lesson has an assessment) at least one assessment run
passed. Enforced server-side in `progress.ts` and covered by tests.

## Assessment engine

Lessons declare an `assessment` spec: `{ questionCount, passScore, bank }`.
The bank is an approved list of exercise ids. `selectAssessmentQuestions`
draws deterministically (seed = user + lesson + attempt index → stable across
refreshes, varied across retries) with difficulty stratification. Submission
grades every answer server-side, records attempts in the `assessment` context,
and returns a performance summary: overall %, pass/fail vs. the pass mark,
per-difficulty and per-skill breakdown, wrong-question review with full
feedback, and a recommendation.

## Testing & verification

- `bun run test` — 50 tests: normalization, all 15 validators (using real
  library exercises), assessment selection/grading/summaries, progress
  no-auto-mastery rules, curriculum integrity (all 20 block types and all 16
  exercise types present, all references valid), auth hashing, and a full API
  golden path (register → open lesson → attempts → sections → assessment →
  completion → stats) against an isolated test database.
- `scripts/e2e.sh` — agent-browser end-to-end suite (102 checks) covering the
  golden path, block rendering, feedback/retry, drag-drop interaction, the
  assessment flow, the dashboard, responsiveness and console cleanliness.
