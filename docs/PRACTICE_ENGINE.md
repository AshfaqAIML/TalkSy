# PROMPT 36 — Interactive Practice & Assessment Engine

The Practice Zone (`#/practice`) is the integrated exercise, assessment,
feedback and progress system built on the actual TalkSy curriculum. It adds
no second grading engine: it draws questions from the CMS question bank
(the same questions learners meet inside lessons), grades every answer with
the shared engine (`src/lib/engine`), and derives reports and mastery from
the recorded attempts.

## The exercise library (19 types)

| PROMPT 36 requirement | Engine type |
| --- | --- |
| Multiple-choice questions | `mcq` |
| Multiple-select questions | `multi-select` |
| Fill in the blanks | `fill-blank` |
| Match the following | `match` |
| Word arrangement | `rearrange` |
| Sentence construction | `sentence-build` (plus `complete-sentence`) |
| Sentence correction | `correct-mistake` |
| **Grammar identification** | `grammar-identify` (new in PROMPT 36) |
| Translation | `translate` |
| **Vocabulary matching** | `vocab-match` (new in PROMPT 36) |
| **Spelling** | `spelling` (new in PROMPT 36) |
| Reading comprehension | `read-answer` |
| Listening comprehension | `listen-answer` |
| Dictation | `dictation` |
| Short answers | `short-answer` |
| Paragraph writing | `write-response` |
| Speaking prompts | `speak-response` |

`drag-drop` additionally exists as a categorisation exercise. All 19 share
one runner (`ExerciseRunner`), one validator (`src/lib/engine/validators.ts`)
and one sanitiser — the client never sees an answer key.

### Multiple valid answers

Text types accept every listed alternative with word-level typo tolerance.
Free-text sentence types (`complete-sentence`, `correct-mistake`, `translate`,
`short-answer`, `listen-answer`) additionally apply **safe contraction
equivalence**: "she's a doctor" and "she is a doctor" grade identically.
Only unambiguous pairs are equated (`src/lib/engine/normalize.ts`); ambiguous
forms ("I'd" = I had / I would) are never auto-equated, and dictation stays
strict because it tests transcription.

## Difficulty — linguistic complexity, never length

`src/lib/practice/difficulty.ts` is the authoring rubric:

- **easy** — single-step recognition or recall; one simple pattern; the answer
  is produced by recognising or copying.
- **medium** — one applied step in a familiar pattern (apply the rule, one
  transformation at most).
- **hard** — two-step application or contrast: choose between similar
  structures, hold form AND meaning together.
- **challenge** — several rules interact, or production is fully open
  (paragraph writing, speaking at length, explain why).

Adding words never raises difficulty; adding structural demand does. The QC
validator emits difficulty-coherence warnings when a label fights its text
(e.g. an "easy" item carrying a subordinate clause). B2/C1 chapters
legitimately carry no easy recognition items.

## Smart feedback

Every submission returns: status, the correct answer, a clear explanation,
why the incorrect answer is wrong (`whyWrong`), the related grammar rule,
one additional example, and a suggested revision lesson linking to the real
lesson that teaches the concept (`feedback.revisionLesson`). The hint system
reveals hints progressively, one per request, and QC rejects any hint that
leaks the whole answer (word-boundary check; open-production types are
exempt because their requirement lists are part of the prompt).

## The eight practice modes

| Mode | Style | Hints | Scope |
| --- | --- | --- | --- |
| Guided practice | per-question feedback | offered | one chapter you have started |
| Independent practice | per-question feedback | none | one chapter you have started |
| Revision practice | per-question feedback | offered | only chapters you completed |
| Mixed-topic practice | per-question feedback | offered | every chapter you started |
| Timed challenge | batch submit | none | engaged chapters; countdown + auto-submit |
| Weak-area practice | per-question feedback | offered | your weakest skills/chapters, prioritising recently-wrong questions |
| Chapter test | batch submit, pass 75% | none | one chapter's own lessons only |
| Course assessment | batch submit, pass 70% | none | all seven areas across the course; unlocks at ≥50% chapters completed |

Assembly (`src/lib/practice/assemble.ts`) is deterministic per
(user, mode, scope, retry-count): a refresh mid-session returns the same
draw; the next retry differs. Chapter tests stratify across the chapter's
lessons (round-robin) so the quiz covers the actual learning objectives —
no questions from outside the chapter. Course assessments guarantee every
measured area appears.

## Progress and mastery (six distinct states)

`src/lib/practice/mastery.ts` keeps these strictly apart:

1. **Lesson viewed** — a progress row exists. Opening a lesson never marks
   completion, and never touches mastery.
2. **Exercise attempted** — an attempt row exists for the question.
3. **Exercise completed** — at least one correct attempt exists.
4. **Chapter completed** — every lesson of the chapter is completed.
5. **Knowledge demonstrated** — the learner PASSED a chapter test for that
   chapter. This is the only path to the demonstrated state; it is derived
   from completed sessions, never set by opening pages.
6. **Skill mastery estimated** — difficulty-weighted accuracy per skill
   (easy ×1 … challenge ×1.75), banded developing / secure / strong, clearly
   labelled an estimate with the honest note shown in the UI.

## Assessment reports

Every finished session stores a full report
(`src/lib/practice/report.ts`): correct answers, incorrect answers, accuracy,
topic-wise performance, by-area and by-difficulty breakdowns, mistake
categories (including "answer in the wrong format" and "not answered"),
recommended lessons (ranked by misses, each linking to the real lesson), and
previous attempts for the same scope.

## Question bank storage

Questions ARE `CmsQuestion` rows (one authoring pipeline, one review chain).
Each row carries: question id, type, skill, difficulty, prompt, answer key
(`data`), explanation (feedback), topic (`tags[0]`), chapter (`chapterSlug`),
lesson (`lessonSlug`), and content version (`version` + immutable
`CmsQuestionVersion` snapshots; attempts pin the version they were graded
against). The PROMPT 36 practice bank (`src/data/practice-bank`) authored
388 questions for chapters 6–56 (6–8 per chapter plus the 3-question
baseline); chapters 1–5 keep their full PROMPT 35 sets. The manifest
(`practiceBankRollup()`) prints the honest per-chapter state.

## Quality control

`src/lib/practice/qc.ts` + `scripts/validate-questionbank.ts` (also run
inside `bun test` via `tests/practice.test.ts`, and as a hard gate inside the
seeder — a QC error refuses to publish):

- missing answers → fatal
- feedback naming a distractor as the answer → fatal
- incorrect solutions (answer key vs feedback text) → fatal when the feedback
  contradicts the key; paraphrase is a review warning
- ambiguous wording: duplicate option texts (case-sensitive —
  capitalisation-teaching questions may differ only by case), banned
  "all/none of the above" options → fatal
- multiple correct options when only one is expected (`mcq` with ≠1 valid
  key, `multi-select` with <2) → fatal
- incorrect grammar explanations (half-written rules, empty fields) → fatal
- hint leaking the answer → fatal; hint count > 3 → warning
- revision lessons pointing at unknown lessons → fatal
- difficulty coherence, missing why-wrong/rule/example → warnings for human
  review

## API surface

- `POST /api/practice/sessions` — start (server assembles; questions are
  returned sanitised, without any grading data)
- `GET /api/practice/sessions` — history list
- `GET /api/practice/sessions/[id]` — active questions OR the stored report
- `POST /api/practice/sessions/[id]/submit` — batch grading
  (chapter tests, course assessments, timed)
- `POST /api/practice/sessions/[id]/finish` — finalise practice-style
  sessions from their recorded attempts
- `DELETE /api/practice/sessions/[id]` — abandon
- `GET /api/practice/overview` — modes, chapter launchers with
  unlock/demonstrated state, course milestones, skill estimates, weak areas
- `POST /api/exercises/attempt` — per-question grading, now carrying the
  practice-mode context and optional `sessionId`

## Adaptive difficulty (PROMPT 38 §7)

`src/lib/practice/trend.ts` — `assessDifficultyTrend` adjusts the working
level from DEMONSTRATED performance, never a single attempt:

- fewer than 5 graded attempts in the window → no suggestion at all, with
  the reason saying exactly that;
- step up requires ≥8 attempts at ≥80% accuracy AND a non-worsening recent
  trend (the second half of the window not below the first);
- below 50% accuracy steps down; otherwise the learner maintains the band
  they actually practised in (the dominant difficulty of the recent window).

Session configs accept an optional `difficulty` preference (a validated
subset of easy/medium/hard/challenge). It is a PREFERENCE, never a
constraint: if filtering would leave fewer than 4 questions the pool is kept
whole, and the fixed-coverage modes (chapter tests, course assessments)
ignore it entirely. The preference participates in the retry scope key, so
retries at a different level draw fresh questions.

Surfaces:

- `/api/practice/overview` → `adaptive` (suggestion, reason quoting the
  numbers, attempts considered, recent accuracy).
- The Practice Zone hub shows an "Adaptive difficulty" card whose button
  starts a Mixed session at the suggested level.
- The AI tutor's context carries the same trend (and its suggested level) so
  the tutor's own practice items adapt too.
