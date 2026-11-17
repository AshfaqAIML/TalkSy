# International Exam Preparation Academy — Architecture

**Division C of the three-division EnglishPath platform.** Updated: 2026-11-12.

## 1. Product architecture

```
EnglishPath
├── Division A — Learn English          (common curriculum)
│   ├── Learning path / Courses (CMS)
│   ├── Grammar School (+ Clinic)  ├── Word World
│   ├── Sentence Lab               ├── Reading Room
│   └── Writing Studio
├── Division B — Spoken English & Communication
│   ├── Listening Lab              ├── Speaking Lab
│   └── AI English Tutor (10 modes — cross-division service)
└── Division C — International Exam Preparation Academy   [NEW]
    ├── Academy landing (#/exams)         — premium identity
    ├── Onboarding wizard (goals)
    ├── Exam dashboard (#/exams/dashboard) — 12 required widgets
    ├── IELTS course (#/exams/course/IELTS/…) — pathway + blueprint
    ├── TOEFL course  (#/exams/course/TOEFL_IBT) — pathway + blueprint
    ├── Mock library + timed player + results
    └── Admin: test-specification management + mock lifecycle
```

The academy **reuses** Divisions A and B: pathway steps and recommendations
deep-link into their routes (`#/grammar`, `#/vocabulary`, `#/reading/<slug>`,
…). Nothing is duplicated.

## 2. Shared examination services (`src/lib/exams/`)

| Module | Responsibility |
| --- | --- |
| `types.ts` | Zod schemas = source of truth for every structured JSON column; exam/variant/section identities; DTOs. No other module parses those columns. |
| `specs.ts` | Versioned spec store: list/get active, draft creation, activation (previous auto-retires), rollback, audit logging. |
| `scoring.ts` | IELTS 0–9 band math (overall = mean rounded to nearest half, quarters up), TOEFL 1–6 band math + legacy-120 dual reporting, raw→band tables from the spec, CEFR bridges. |
| `diagnostics.ts` | Per-section performance estimates from CEFR self-rating + curriculum attempt analytics + latest mock (highest weight), with confidence and strength/weakness notes. |
| `recommend.ts` | The common-foundation bridge: rule table (section + weakness tags → curriculum refs) + exam drills; ranking by weakest sections. |
| `study-plan.ts` | Day-by-day plan generator: daily minutes, exam countdown, pathway steps, recommendations, mock cadence accelerating in the final third. |
| `pathways.ts` | Course structures (phases → steps → curriculum references) with completion tracking. |
| `mock-engine.ts` | Attempt lifecycle, safe client projections (answer keys stripped), objective grading with tolerance rules, section/overall scoring. |
| `ai-grade.ts` | Rubric-based AI grading for writing/speaking via the provider-independent LLM seam; graceful "pending review" degradation. |

## 3. Examination database design

```
TestSpecification  (examKey+variant+version unique; status draft|active|retired)
   sections JSON · scoringModel JSON · taskTypes JSON · sourceRefs JSON
   effectiveDate · lastReviewedAt · notes
        │ 1..n
      MockTest (specId pinned; status draft|published|archived)
        │ 1..n
      MockTestSection (key, timingSec, directions, order)
        │ 1..n
      MockTestQuestion (type, payload JSON, answer JSON [server-only], skills JSON)
        │              ↑ answer stripped in SafeMock* projections
      MockTestAttempt (userId, specId pinned, status, sectionScores, totalScore,
        │               scoreDisplay, feedback)
      MockTestResponse (attemptId+questionId unique; answer, autoScore,
                        rubricScore, feedback, status incl. pending_review)

ExamProfile        (userId unique: examKey, variant, CEFR, targetScore,
                    examDate, dailyMinutes, difficultSections)
ExamSectionEstimate(userId+examKey+section unique: estimated, confidence, evidence)
ExamStudyPlan      (userId+examKey unique: plan JSON, generatedAt)
ExamPathway → ExamPathwayModule → ExamPathwayStep (refType+refId → curriculum)
                                   ↑ ExamPathwayStepProgress (userId+stepId)
ExamRubric         (examKey+taskKey unique: band descriptor scale JSON)
```

Design rules: SQLite has no enums — every enum-like column is a string
validated by `types.ts`; constructed-response answer keys live only in
server-side tables; attempts pin their spec version.

## 4. IELTS course architecture (Academic + General Training)

The IELTS programme is the complete **IELTS Academy**: an eight-module
course structure delivered as three CMS courses, with fully separate
Academic and General Training tracks and separate question banks.

- **Current specification, v2** (effective 1 July 2026, verified against the
  official pages on 2026-11-12): since mid-2026 IELTS is computer-delivered
  only (paper withdrawn; a Writing on Paper option exists in selected
  markets). Listening ≈30 min / 40 questions / 4 parts heard once (answers
  typed as you go, ≈2 minutes to check — no transfer time); Reading 60 min /
  40 questions (Academic: three passages totalling 2,150–2,750 words; GT:
  the three official everyday/work sections); Writing 60 min (Task 1 150+
  words ≈20 min, Task 2 250+ words ≈40 min, Task 2 weighted double);
  Speaking 11–14 min (Parts 1–3, recorded, with a certified examiner in
  person or by live video call). Band 0–9 per section; overall = mean
  rounded to the nearest half band (.25 and .75 round up).
- **The three courses** (seeded from `src/data/exams/ielts`, editable in
  the CMS like any course):
  - `ielts-academy-core` — the shared modules: 1 Introduction (incl. UKVI/
    Life Skills, One Skill Retake, registration awareness), 2 Listening
    (the 31-lesson PROMPT 44 Masterclass), 5 Speaking, 6 Band Score
    Development, 7 Exam Strategies, 8 Mock system guide. 53 lessons.
  - `ielts-academy-academic` — Module 3A (Academic Reading) + 4A (Academic
    Writing). 13 lessons.
  - `ielts-academy-general-training` — Module 3G (GT Reading) + 4G (GT
    Writing). 8 lessons.
  Listening and Speaking are identical tests across variants, so those
  modules live in the Core course; Reading and Writing never cross tracks.
- **Band Score Development** covers every target from 4.0 to 9.0 (including
  the half bands 5.5/6.5/7.5/8.5, which arise from criterion averaging —
  examiners award whole-band criterion scores and the task band is their
  mean). The rubric store carries full band ladders 9→3 with the official
  four criteria for Writing (Task Achievement/Response, Coherence & Cohesion,
  Lexical Resource, Grammatical Range & Accuracy) and Speaking (Fluency &
  Coherence, Lexical Resource, Grammatical Range & Accuracy, Pronunciation).
- **Pathways** (four phases each, never sharing variant-specific steps):
  Phase 1 orientation + diagnosis → Phase 2 Listening & Speaking craft →
  Phase 3 the variant's own Reading & Writing craft → Phase 4 band ladder,
  exam strategies and the mock cycle. Steps deep-link into the Academy
  lessons (`#/course-lesson/<slug>`), the common curriculum and the mock
  library; nothing is duplicated.
- **IELTS Listening Masterclass (PROMPT 44, `#/exams/ielts/listening`)**:
  Module 2 rebuilt as a complete Listening academy — 31 lessons across four
  chapters (examination fundamentals; the twelve core listening skills;
  every official question type on the seven-component structure of
  explanation → solving method → worked example → trap catalogue → guided
  practice → independent practice → per-item answer explanations; and one
  preparation chapter per recording part with increasing complexity). The
  hub adds four surfaces beyond the course:
  - **Audio question bank** (`src/data/exams/ielts/listening-bank/`): 16
    original multi-speaker recordings (4 per test part, difficulty 1–5,
    British/Australian/NZ/North-American speakers, 87 answerable items
    across all official task families). Recordings play through on-device
    speech synthesis with per-speaker, accent-matched voices; the
    transcript stays locked until submission. Integrity is machine-checked
    (`scripts/validate-listening-bank.ts`): every keyed answer and designed
    lure must literally be spoken, answers must fit their own word limit,
    no 8-word sentence repeats across exercises.
  - **Practice tests**: three progressive preparation tests (beginner
    Parts 1–2, intermediate Parts 1–3, advanced Parts 1–4), four timed
    per-part tests (10 questions, 8 minutes each) and two full-length
    40-question simulations at the official 30-minute clock. Simulations
    use part-level audio: each part's questions share ONE recording played
    once (`MockTestSection.payload.audioParts` + `MockTestQuestion.groupTag`),
    and scripts are multi-voice "SPEAKER: text" lines read by distinct
    browser voices (names never spoken aloud).
  - **MAP_LABEL question type**: plan/map labelling joins the mock engine —
    a rendered plan grid with numbered blanks and lettered place options,
    graded per blank with partial credit.
  - **Performance dashboard** (`src/lib/exams/listening-bank/`): every
    wrong item is classified — correct / **spelling** (right word,
    misspelled: zero marks, but tracked separately) / **word-limit** /
    **distractor** (a designed lure was taken, by trap family) / missed /
    wrong — and aggregated into question-type and per-part accuracy, a
    spelling-mistake log, missed keywords, time-on-task and mock Listening
    section history. Recommendations map the learner's actual mistakes to
    specific masterclass lessons (spelling errors → *Spelling
    requirements*, correction traps → *Recognising corrections*, and so
    on).
- **Mock library (33 IELTS mocks, 100% original material)**: two full
  simulations per variant, the nine Listening Masterclass tests (3
  progressive + 4 timed part tests + 2 full-length 40-question Listening
  simulations), section mocks for every section (Listening and Speaking
  exist as distinct Academic/GT twins with different material), and ten
  question-type drills (TFNG vs YNNG, matching headings, Task 1 overviews,
  paraphrase recognition, GT notices/conditions, GT letter tone,
  numbers-and-spelling listening ×2, cue-card long turn ×2). Every mock is
  labelled "not an official IELTS paper".
- **Two attempt modes**: *exam* (timed — section clocks enforce official
  timings and lock sections like the real test) and *practice* (untimed —
  nothing locks, the timer counts up). The mode is recorded on every
  attempt and displayed on the library, the result report and the
  dashboard; untimed scores are flagged "not exam conditions" and the
  dashboard's estimates prefer timed evidence.
- **Short-section scoring**: practice conversion tables are built for
  full-length sections, so drills and sample mocks scale their raw score
  proportionally first — a perfect 6/6 drill converts like a perfect paper
  (band 9), not like 6/40 (band 3.5).

## 5. TOEFL iBT course architecture (2026 format)

- **Blueprint** (from active spec, effective 2026-01-21): Reading ≤50 items
  (~30 min, two-stage adaptive: 30 Complete-the-Words + 20 comprehension),
  Listening ≤47 items (~29 min, two-stage adaptive), Speaking 11 interview
  items (~8 min), Writing 12 items (~23 min: 10 sentence reconstruction + 2
  academic responses). Section bands 1.0–6.0 half steps; overall = mean of
  four sections rounded to nearest half; dual-reported ≈0–120 during the
  2026–2028 transition.
- **Pathway** (4 phases): Diagnose & Bridge → Core Academic English → TOEFL
  2026 Test Craft (Complete-the-Words technique, adaptive pacing,
  listen-and-choose prediction, reconstruction speed, interview simulation)
  → Mock Cycle & Exam Readiness.
- **Rubrics**: writing (Development / Organization / Language Use) and
  interview speaking (Delivery / Language Use / Topic Development) on the
  1–6 scale.

## 6. API surface (`/api/exams/…`)

| Route | Method | Purpose | Guard |
| --- | --- | --- | --- |
| `/overview` | GET | Available exams + active specs + section blueprints | login |
| `/profile` | GET/PUT | Onboarding goals; partial updates merge | login |
| `/dashboard` | GET | Full 12-widget aggregate | login |
| `/pathway` | GET | Course architecture with completion state | login |
| `/pathway/step` | POST/DELETE | Mark/unmark step completion | login |
| `/mocks` | GET | Published mocks + my attempts | login |
| `/mocks/[id]` | GET | Safe player data (keys stripped) | login |
| `/mocks/[id]/attempts` | POST | Start/resume attempt (one in-progress per mock). Optional body `{ mode }`: `"exam"` (timed, default) or `"practice"` (untimed) | login |
| `/attempts/[id]` | GET/PATCH | Resume state / save one answer | login + owner |
| `/attempts/[id]/submit` | POST | Grade + score + refresh estimates | login + owner |
| `/attempts/[id]/result` | GET | Scored result with feedback | login + owner |
| `/admin/specs` | GET/POST | List all versions / create draft | staff / **admin** |
| `/admin/specs/[id]` | PATCH | Edit draft · `action: activate\|retire` | **admin** |
| `/admin/mocks` | GET/PATCH | Lifecycle (publish=admin, archive=editor+) | staff |

All admin actions audit-log to `CmsAuditLog` (`exam_spec.*`, `exam_mock.*`).

## 7. Administration architecture

```
AdminView (CMS)
├── existing tabs (Dashboard · Curriculum · Questions · Media · Users · Import/Export)
└── examination tabs [see §10 for the full system]
    ├── Exam blueprints — spec versions table + structured editor +
    │   seven-step version workflow (impact → relink → publish)
    ├── Exam content — four collections, inventories, question review
    └── Exam analytics — live database aggregates
```

Workflow when a provider changes a format: admin opens Exam blueprints →
New draft version (auto-incremented, pre-filled from the active spec) →
edits what changed (sections/timing/task types/scoring/sources) →
Workflow dialog (impact report → repoint mocks → publish). Learner-facing
components follow the active spec; historical attempts keep their pinned
version. RBAC: viewing specs/mocks is editor+, lifecycle changes are
admin-only; the first-login password gate applies before any of it.

## 8. Verification

- `tests/exams.test.ts` — IELTS/TOEFL band arithmetic (including the .25/.75
  rounding rules), objective grading tolerance and partial credit, the
  recommendation bridge, weakness-tag extraction.
- `tests/ielts-academy.test.ts` — the IELTS Academy content contract: every
  mock question validates against the shared zod payload schemas, every
  answer key is solvable and matches its payload, the Academic and General
  Training banks stay fully separate (no shared recordings or prompts
  between the twins), every pathway reference resolves, every bank exercise
  is answerable via the shared grading shapes, the short-section scaling
  rule and the attempt-mode normalisation.
- `tests/exam-admin.test.ts` — the examination administration contract:
  per-type question payload and answer-key validation (the same schemas the
  learner engine uses), the role-gated review chain with audit logging, the
  mock publication gate, collection inventories, the spec version workflow
  (impact reports — including that a faithful catalog copy impacts nothing —
  mock relinking, activation, history retention, immutability) and the
  live-aggregate analytics.
- `scripts/staging-smoke-exams.sh` — 64 checks under exact Vercel
  simulation: overview, onboarding, all dashboard widgets, both pathways,
  answer-key stripping, the full timed attempt lifecycle with raw-score
  assertions, the untimed practice lifecycle (mode recorded on start,
  result and dashboard), IELTS Academy CMS lesson delivery with sanitized
  exercises, spec v1-retired/v2-active for both IELTS variants, the admin
  spec versioning workflow (draft → activate → rollback), RBAC gates and
  the audit trail.
- `scripts/staging-smoke-vercel.sh` — 14 deployment/security checks
  (register/login, S1 lockout, S2 reset, first-login gate, read-only FS).

## 9. Trademarks & content

IELTS is jointly owned by the British Council, IDP: IELTS Australia and
Cambridge University Press & Assessment. TOEFL and TOEFL iBT are registered
trademarks of ETS. EnglishPath is not affiliated with, endorsed by or
associated with any of them. All practice questions and mock materials are
original content authored for this platform; format data references official
provider pages (see each specification's `sourceRefs`).

## 7. Shared examination engine (upgrade, 2026-11)

The academy's mock machinery was rebuilt into a **configurable, reusable
examination simulation engine shared by IELTS and TOEFL without mixing their
rules**. Everything remains spec-driven (`TestSpecification`); no component
hardcodes exam behaviour.

**Selection.** IELTS Academic, IELTS General Training, TOEFL iBT (2026
format), and IELTS for UKVI as a delivery context (same test, SELT guidance
from the official page; selectable during onboarding, shown on the academy
landing page and the dashboard).

**Six practice modes** (`ATTEMPT_MODES` in `src/lib/exams/types.ts`; legacy
`exam`/`practice` values migrate on read and via the seed script):

| Mode | Clocks | Notes |
| --- | --- | --- |
| Full mock examination | official section clocks | library mocks |
| Section-wise practice | official section clock | assembled from the published pool |
| Timed practice | own minute budget, split by question count | assembled |
| Untimed learning practice | none | per-item answer checking + explanations (only mode with reveal) |
| Previous mistakes practice | none by default | re-assembles wrong/unanswered/low-rubric items |
| Custom practice | optional | filters: sections, task types, difficulty 1–5 |

Assembled sets are ordinary `MockTest` rows (`kind` = section/timed/untimed/
custom/mistakes) so attempts, results and history treat them like any other
test; the pool never re-samples assembled sets.

**Question types (13, Zod-validated).** MCQ single, MCQ multi, TFNG,
matching, fill-blank, Complete-the-Words, sentence reconstruction,
**dictation**, **listen-and-repeat**, writing task, **email/letter writing**,
**academic discussion**, speaking task. Every item carries difficulty (1–5),
a post-submission explanation, source (`original-practice`) and content
status — enriched on all 186 pre-existing questions by
`scripts/exam-content-meta.ts` (applied idempotently by the seed script).

**Navigation policy per section** (`navigation` on spec sections): IELTS
sections are free-movement with mark-for-review; TOEFL Listening is
forward-only with no flags; audio never replays under exam timing. Under
exam timing the player enforces the policy exactly (sections lock when
finished or expired); untimed runs relax it and are labelled
non-exam-condition. Mocks pinned to older spec versions (no `navigation`
field) resolve forward to the active spec's policy — `resolveSectionNavigation`
in `src/lib/exams/navigation.ts` — while grading stays pinned forever.

**Answer persistence contract.** `PATCH /api/exams/attempts/[id]` accepts
`{ questionId, answer?, flagged?, timeDeltaSec? }`. An **absent** `answer`
field means "no answer change": time/flag-only saves never overwrite stored
answers (regression-tested in `tests/exam-engine.test.ts`). Per-question
seconds accrue server-side; flags, answers and time survive refreshes.

**Results** (`AttemptResultDto`): estimated overall + section scores, question
accuracy, time spent, unanswered count, mistake analysis, improvement
recommendations bridged into the common curriculum, and per-answer inspection
(your answer vs the key, plus the item's explanation and rubric feedback for
constructed responses).

**History** (`src/lib/exams/history.ts`): every submitted attempt is stored;
trends count exam-condition runs only; comparisons are refused unless both
attempts share the exam type AND the specification version
(`/api/exams/history/compare?ids=a,b`).

**Integrity** (`src/lib/exams/integrity.ts`): single source of truth for the
honesty statements — original practice material (never official questions),
estimates (never official IELTS or ETS scores), the simulation note, and the
trademark acknowledgement. Every player, result and history view carries it;
tests assert its presence.

**New API surface:** `POST /api/exams/practice/{section,custom,mistakes}`,
`POST /api/exams/attempts/[id]/reveal` (untimed only), `GET /api/exams/history`,
`GET /api/exams/history/compare`. Client wrappers in
`src/lib/client/exam-api.ts`; routes follow the existing auth + Zod
conventions.

**Content added:** TOEFL Speaking Section Mock (2026 format) 1 — seven
Listen-and-Repeat items with the official 8/10/12-second windows plus a
four-question interview; TOEFL Writing Section Mock (2026 format) 1 — six
reconstruction items, one Write-an-Email task and one Academic Discussion
response; a GT letter drill at all three official tones; IELTS dictation
training drills (Academic + General Training, distinct scripts — labelled as
training, not an official task type).

**Verification:** `tests/exam-engine.test.ts` (engine contract),
`tests/exams.test.ts`, `tests/ielts-academy.test.ts`, staging smokes
(65 exam checks + 14 Vercel checks) and `scripts/e2e-exam-engine.sh`
(54 browser checks: UKVI landing + onboarding step, six-mode launcher,
untimed reveal flow, submit confirmation, result inspection, history,
TOEFL forward-only realism).

## 8. AI-assisted writing & speaking evaluation (2026-11)

A reusable feedback layer **on top of the examination engine**: given one
learner response to one exam task, it produces an examiner-style report that
always separates measurement from opinion. Lives in
`src/lib/exams/evaluation/`; surfaced under every evaluation-eligible answer
in the mock result view (`EvaluationPanel`).

**Ten evaluator profiles** (`tasks.ts`) — the system resolves exam type →
section → task → rubric BEFORE anything is judged, via
`resolveEvaluator()`:

| Evaluator | Task | Criteria | Scale |
| --- | --- | --- | --- |
| `IELTS_WRITING_ACADEMIC_T1` | Academic Task 1 report | Task achievement, Coherence & cohesion, Lexical resource, Grammatical range & accuracy | band 0–9 (½ steps) |
| `IELTS_WRITING_ACADEMIC_T2` / `IELTS_WRITING_GT_T2` | Task 2 essays | Task response, CC, LR, GRA | band 0–9 |
| `IELTS_WRITING_GT_T1` | GT Task 1 letters (EMAIL_WRITING or letter-form WRITING_TASK) | Task achievement, CC, LR, GRA | band 0–9 |
| `IELTS_SPEAKING` | Parts 1–3 interview | Fluency & coherence, LR, GRA, Pronunciation | band 0–9 |
| `TOEFL_WRITING_SENTENCE` | Build a Sentence | Sentence accuracy (machine-measured), Language use | 0–100% verified |
| `TOEFL_WRITING_EMAIL` | Write an Email | Task completion, Organisation, Language use, Vocabulary & tone | task level 1–5 |
| `TOEFL_WRITING_DISCUSSION` | Academic Discussion | Task completion, Organisation, Language use, Vocabulary & tone | task level 1–5 |
| `TOEFL_SPEAKING_LISTEN_REPEAT` | Listen and Repeat | Completeness, Sentence accuracy | 0–100% verified |
| `TOEFL_SPEAKING_INTERVIEW` | Take an Interview | Completeness, Organisation & development, Language use, Vocabulary & tone | task level 1–5 |

The 1–6 TOEFL section band is deliberately **not** promised — per-task
levels only (no ETS score predictions).

**Four provenance labels, shown on every number** (`types.ts`):
`VERIFIED` (machine-measured facts: word count, greeting present,
transcript-match accuracy), `RULE_BASED` (deterministic heuristics:
bullet-coverage keywords, overview/opinion detection, the Grammar Clinic
rule engine, filler/repetition detection), `AI_GENERATED` (model feedback
quoting the learner's own words), `ESTIMATED` (projected exam performance
— derived, never official). A collapsible legend in the panel documents
all four.

**Engine contracts, enforced structurally and asserted by tests**
(`tests/exam-evaluation.test.ts`, 34 cases):
- *No score without an explanation* — AI criteria lacking explanations are
  discarded; the overall is the mean of the surviving criteria (the real
  tests' derivation) or absent.
- *Evidence must exist* — quotes are kept only when found verbatim in the
  response; grammar corrections and sentence feedback too.
- *Scores clamp to the task scale* (12 → band 9; half-band rounding).
- *Honest degradation* — provider failure → checks-only "partial" report
  with a stated limitation (never a crash, never invented feedback);
  responses too short to judge → "insufficient" with the reason.
- *Accent safeguard* — the speaking prompt forbids treating accents or
  World English varieties as errors; pronunciation guidance targets
  intelligibility only, and the report says when only the transcript (not
  audio) was analysed.
- *Safeguard copy on every report* — "not an official IELTS band or ETS
  score", no exact-result promises, and the human-teacher recommendation
  for high-stakes preparation.

**Learning loop** (`learning-loop.ts`): weaknesses are identified from
criterion levels (band-aware thresholds), failed task-requirement checks,
error density and AI-flagged gaps; each maps onto existing EnglishPath
lessons via the shared bridge rules (`recommend.ts`) plus practice
suggestions; the learner is asked to revise; revisions are re-evaluated
against the same rubric and stored as a linked chain
(`MockEvaluation.revisionOfId`), with criterion-level deltas, resolved and
remaining weaknesses shown ("Improvement tracked").

**API:** `POST /api/exams/evaluate` (mock question or free task),
`GET /api/exams/evaluations?questionId=…`, `GET /api/exams/evaluations/[id]`
(chain + comparison), `POST /api/exams/evaluations/[id]/revise`. All
Zod-validated, session-scoped, ownership-checked.

**Verification:** `tests/exam-evaluation.test.ts` (resolution matrix,
checks, engine contracts, degradation, learning loop, persistence),
`scripts/e2e-exam-evaluation.sh` (34 browser checks: register → GT writing
mock → letter + essay answered → both panels resolve their OWN rubrics →
evaluation report with provenance legend and disclaimers → revision loop
with tracked improvement → no console errors).

## 9. Personalized examination study planner (2026-11)

The planner turns the initial assessment into a living, day-by-day
preparation schedule. It is a layer over the existing academy — never a
parallel curriculum: tasks deep-link curriculum content, pathway steps and
mock tests that already exist, the baseline reuses the section-estimate
engine, adaptation reuses the learning-loop bridge rules, and readiness is
computed from real attempts only.

**Pipeline** (one page, `#/exams/planner`):

1. **Initial assessment** — the exam profile (exam, variant, proficiency,
   target score, exam date, daily minutes, weakest sections) plus the
   planner extras: strongest section and previous real sittings
   (`ExamProfile.strongestSection`, `previousAttempts`), collected in the
   planner setup card and persisted with the profile.
2. **Baseline diagnostic** (`planner/diagnostic.ts`) — per-section
   estimates with their evidence basis (self-rating → curriculum practice
   → mock examination), confidence, ranked weaknesses by target gap, the
   single most-important weakness, and a ~15-minute exam-format diagnostic
   action for every section that still rests on self-ratings only.
3. **Plan generation** (`planner/generator.ts`) — durations 7 / 14 / 30 /
   60 / 90 / custom (3–120 days). Deterministic (no randomness — same
   inputs, same plan). Phases scale with duration (foundation → skill
   building → mock cycle → final review); a weighted deficit round-robin
   gives the weakest section ~2.4× the slots of a mid section and the
   strongest ~0.6×; every week touches all activity types (vocabulary,
   grammar, reading, listening, writing, speaking, mock exams, mistake
   revision); difficulty ramps easier → medium → harder by phase; rest
   days every 7th day; mocks are scheduled in the mock cycle with a
   longer-session honesty note when they exceed the daily budget; day 1
   schedules baseline diagnostics for unmeasured sections. When the exam
   date arrives first the plan clamps to it and says so.
4. **Daily tasks** (`ExamPlannerPlan/Day/Task` rows) — every task carries
   an estimated time, a deep link into existing content, a "why" reason,
   difficulty, and a status (todo/done/skipped). Completing a
   pathway-linked task auto-completes the pathway step so the two views
   never disagree.
5. **Adaptive planning** (`planner/adaptive.ts` + `adaptPlannerPlan`) —
   after new mock evidence: a section below target in 2+ recent attempts
   is a repeated weakness → focus weight ×1.8 on future days, difficulty
   eases if it is also declining, and the shared bridge rules recommend
   the existing lessons that target its gaps; an improved section steps
   UP in difficulty; with no meaningful signal the planner says so and
   changes nothing (churn is not adaptation). Only future days are
   regenerated — completed days are never rewritten. The UI flags when
   new evidence suggests adapting.
6. **Target-score monitoring & readiness** (`planner/readiness.ts`) —
   current estimate vs target with gap analysis, section-wise readiness
   (derived from the overall target as an even split, stated openly),
   completion percentage, recent mock results and concrete next steps.
   Exactly four honest labels: *Needs foundational preparation*,
   *Developing*, *Approaching target*, *Consistently performing near
   target* — computed from timed exam-mode attempts when they exist, with
   thin evidence explicitly flagged. Every report carries the mandated
   safeguards: mock-exam estimates are practice estimates, not official
   results, and no target score is ever guaranteed.
7. **Reminders** — reminder time + weekdays on the plan; in-app toast and
   optional desktop notification at the chosen time. Honest scope:
   reminders work while EnglishPath is open in a tab — they are not push
   notifications, and the UI says so.

**Honesty rules, test-enforced:** no guaranteed outcomes anywhere; big-gap
short-duration plans get an explicit "unrealistic for most learners" note;
prior results are context, never promises; low daily time is flagged;
mock-length tasks are flagged when they exceed the daily budget.

**API:** `GET /api/exams/planner` (full state),
`POST /api/exams/planner/plan` (generate) + `DELETE` (archive),
`POST /api/exams/planner/task` (status), `POST /api/exams/planner/adapt`
(regenerate future days), `POST /api/exams/planner/reminder`. All
Zod-validated, session-scoped, ownership-checked.

**Verification:** `tests/exam-planner.test.ts` (47 cases: scales and the
four readiness labels, baseline ranking, generator contract for every
duration, weighting, coverage, difficulty ramp, rest days, mock cadence,
honesty notes, exam-date clamping, determinism, adaptive overrides,
service persistence incl. day preservation and pathway auto-completion),
`scripts/e2e-exam-planner.sh` (74 browser checks: register → onboarding →
initial assessment with previous sittings → 7-day plan → phases, day-1
diagnostics, mock-day honesty → task completion persisted → baseline →
readiness with disclaimers → honest no-change adaptation → reminders →
entry points → no console errors).

## 10. Examination administration system (2026-11)

The admin console gained a full content-operations layer for the academy —
`src/lib/exams/admin/` (five modules) behind five new API route groups and
three new admin tabs.

**Question review workflow** (`questions.ts`) — every question moves
through a human-approval chain:
`draft → (editor submits) → in-review → (teacher approves) → approved →
(admin publishes) → published`, with `reject → draft`, `unpublish`,
`retire` side-paths. Editing a **published** question returns it to
in-review — content changes are re-approved, never silently live. Payloads
validate against the same per-type zod schemas the learner engine uses and
answer keys against the shared grading shapes, so nothing ungradeable can
enter the bank. Every transition is role-gated and audit-logged
(`CmsAuditLog`, actor + before/after).

**Mock publication gate** (`workflow.ts`) — a mock can only be published
when every one of its questions is published (409 with the blocking state
named otherwise). Archiving stays available to editors for drafts.

**Spec version workflow** (`workflow.ts`) — the seven-step format-change
checklist behind the blueprints tab's Workflow dialog:
1–3 create/edit a draft (versioned, structured editor);
4 **impact report** — task types the draft *removes relative to the active
version* with the questions using them, published mocks still on older
versions, and attempts living on the previous spec (informational, never
blocking). A faithful copy of the active catalog impacts nothing —
practice-only engine formats (e.g. dictation drills) that were never in
the official catalog are not reported as impacted;
5 **repoint mocks** to the draft (historical attempts keep their pinned
version — never silently moved);
6 **publish/activate** (previous version auto-retires);
7 history retained — retired specs are immutable and every historical
attempt keeps its pinned `specId`, so old results stay interpretable.

**Content collections** (`collections.ts`) — four collections organise all
examination content: IELTS Academic, IELTS General Training, IELTS UKVI
preparation (the same test — shares both IELTS libraries plus SELT
delivery guidance, stated openly) and TOEFL iBT. Membership is structural
(examKey+variant for mocks/questions/rubrics/pathways, stable course
slugs for lessons) — no join table that could drift. Inventories are live
counts (published mocks/questions, in-review questions, lessons, rubrics,
active spec version).

**Analytics** (`analytics.ts`) — every number is a real database
aggregate; metrics that cannot be computed are null and render as "—":
totals by review state, the awaiting-review queue, outdated content
(mocks on retired specs, questions whose type left the active catalog,
specs unreviewed for 12 months), most-attempted sections with distinct
learners, average performance (overall / by section / by exam) and common
weaknesses (skill tags on wrong answers).

**API** (all Zod-validated, role-gated, audit-logged):
`GET/POST /api/exams/admin/questions`, `PATCH
/api/exams/admin/questions/[id]` (edit + transitions),
`GET /api/exams/admin/collections`,
`GET /api/exams/admin/specs/[id]/impact`, `POST …/relink-mocks`,
`GET /api/exams/admin/stats`. Students get 403 on all of them; staff on
the public default password are blocked by the first-login gate first.

**UI** — `ExamBlueprintsTab.tsx` (specs table + structured editor +
workflow dialog), `ExamContentTab.tsx` (collections + question review
queue with filters and inline editor), `ExamAnalyticsTab.tsx` (dashboard),
replacing the old single Exam specs tab.

**Verification:** `tests/exam-admin.test.ts` (18 cases — validation, the
role-gated chain, the gate, collections, the version workflow incl. the
faithful-copy zero-impact regression and full per-run namespace cleanup,
analytics) and `scripts/e2e-exam-admin.sh` (91 browser checks: blueprints
table + editor, version workflow end-to-end, collections, the question
review chain in the UI, the mock publication gate over the API, analytics,
RBAC, no console errors; leaves the dev database as it found it).

## Examination content governance & QA (PROMPT 55)

Professional content management, educational review, quality validation,
version management and content completeness tracking across both academies —
see **[docs/exam-academy/CONTENT_GOVERNANCE.md](exam-academy/CONTENT_GOVERNANCE.md)**.

- **Content registry** — all fourteen managed entity types (examinations,
  versions, pathways, courses, modules, chapters, lessons, exercises,
  questions, audio, passages, model answers, rubrics, mocks) with delivery
  truth, pipeline status, provenance and deep links, searchable and paged.
- **Six-stage approval pipeline** — draft → educational review → examination
  review → answer validation → approved → published, with role gates
  (editors submit, teachers sign off each stage, admins publish), mandatory
  accountable reviewer notes, rejection paths, audit logging, and the AI
  rule: AI-generated content never automatically receives human-approved
  status — overrides are written only by explicit staff actions and any
  post-approval edit demotes them.
- **Question validation engine** — the eight mandated categories (missing
  keys, multiple-correct, incorrect answers, broken audio, invalid passage
  references, incorrect types, duplicates, outdated formats); blocking
  issues refuse the answer-validation sign-off, scoped to the exact entity
  being approved.
- **Specification versioning** — `reviewDueAt` re-verification dates on top
  of the existing version/effective-date/source/structure/scoring records;
  historical attempts keep their pinned spec forever.
- **Content analytics** — the ten mandated metrics incl. learner error
  patterns aggregated from mock skill gaps, bank error taxonomies and
  evaluator weakness areas.
- **Completeness dashboard** — course readiness over six dimensions
  (complete lessons, practice, verified answer keys, assessments, learning
  outcomes, review status); a course is never labelled complete merely
  because its chapter records exist.
- **Lesson authoring** — four new educational block kinds (grammar tables,
  reading passages, model answers, transcripts) in the CMS lesson editor.

**UI** — `GovernanceTab.tsx` (Overview / Completeness / Validation /
Content registry) in the admin hub. **Verification:**
`tests/exam-governance.test.ts` (32 cases) and
`bun run validate:examgov` (0 blocking issues on the dev database).
