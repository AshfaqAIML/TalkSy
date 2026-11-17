# TalkSy — Guided Onboarding & Placement

The system that understands the learner before assigning courses:
welcome → questionnaire → adaptive placement → personalised plan.

Routes (in-app, hash-based): `#/welcome` → `#/onboarding` → `#/placement`
→ `#/result`. New registrations land on `#/welcome`; existing learners can
start anytime from the dashboard banner or their profile.

## The flow

| Stage | What happens | Rules |
| --- | --- | --- |
| **Welcome** | Introduces TalkSy in simple language: what it is, how lessons work, how the path works, what happens next. | Skippable ("Skip for now" → dashboard); never forced. |
| **Questionnaire** (2 light steps) | Step 1: purpose (multi-select), current ability, daily study time, explanation language. Step 2: confidence for speaking / reading / writing / listening. | The initial form holds only four questions; per-skill confidence is a separate 15-second step ("do not overload"). Daily time becomes the learner's daily goal. |
| **Zero-beginner shortcut** | Learners who self-report "starting from zero" may skip the English check entirely and start at P1. | Honest direct plan, recorded as `withoutAssessment: true`; they can retake the check anytime. |
| **Adaptive placement** | One item at a time across six skills: vocabulary, grammar, reading, listening, writing, speaking. | See the engine rules below. |
| **Result** | Learner profile (per-skill levels), supportive narrative, recommendation. | Accept / adjust (P1, A1, A2) / restart. |

## The adaptive engine (`src/server/modules/placement/engine.ts`)

Pure functions, no I/O, fully unit-tested.

**Ladders.** The four objective skills (vocabulary, grammar, reading,
listening) each climb a three-tier ladder: tier 1 = Pre-A1/A1, tier 2 =
A1/A2, tier 3 = A2/B1. Everyone starts at tier 1 (simple questions). A tier
presents up to 3 items; **≥2 correct passes the tier**, and **2 wrong ends
the skill immediately** — a beginner is never dragged through an advanced
test. A 1–1 split asks a third tiebreaker item.

**Outcomes** (the four states, per skill):

| Result | Meaning |
| --- | --- |
| `not_assessed` | Skipped: no audio (listening), microphone declined (speaking), or the whole check skipped. |
| `beginner` | No tier passed → P1 territory. |
| `developing` | Tier 1 passed → A1 territory. |
| `competent` | Tier 2+ passed → A2 territory. |

**Item selection** is a seeded shuffle (FNV-1a → mulberry32, seed =
attempt id) — deterministic per attempt (resume-safe), varied across
attempts (no answer-sharing).

**Writing** is a single prompt whose tier follows the learner's apparent
ability (weakest of vocabulary/grammar results): write freely → the model
answer is revealed → honest three-step self-assessment. Writing is never
auto-graded (platform principle: production is practice, never a fake quiz
score).

**Speaking** is optional by design. The learner chooses whether to enable
the microphone; declining records `not_assessed` and changes nothing else.
If speech recognition is available it gives informative feedback
(Levenshtein similarity); the final level is the learner's own honest
choice in every case. No audio is recorded or stored.

## Question bank (`src/data/placement/`)

Content-as-code, like the curriculum. 47 original items:

- **Vocabulary** (13): word recognition, word meaning, contextual usage.
- **Grammar** (16): sentence structure, parts of speech, tenses, question
  formation, grammar accuracy.
- **Reading** (9): graded passages (personal intro → message → article)
  with detail, purpose, main-idea and inference questions.
- **Listening** (9): short spoken clips (browser TTS) — recognition,
  detail, gist, inference.
- **Writing** (3 prompts, one per tier, with model answers + rubrics).
- **Speaking** (3 sentences, one per tier).

Answer positions are varied (no learnable first-option pattern); listening
items carry `audioText` (the stimulus the client plays); answer keys,
model answers and explanations are graded/revealed server-side only.

Bank integrity is enforced by `tests/placement-bank.test.ts` — including
the ≥3-items-per-tier rule the early-stop logic depends on.

## Placement rules (the recommendation)

The starting level is the **weakest of the assessed objective skills**
(vocabulary, grammar, reading, listening): a skill can lower the start,
never raise it. Self-assessed writing and speaking never gate the path —
they feed the narrative.

| Weakest assessed skill | Start |
| --- | --- |
| beginner / none assessed | **P1** — Foundations (`p1-1-1`) |
| developing | **A1** — Beginner (`a1-1-1`) |
| competent | **A2** — Elementary (`a2-1-1`) |

The narrative is assembled from per-skill templates in simple, supportive
language — e.g. *"Your sentence construction needs improvement, so we
recommend beginning with sentence patterns and basic grammar."* Skipped
skills get an explicit, friendly mention.

## Persistence (Prisma)

| Model | Holds |
| --- | --- |
| `LearnerProfile` | Questionnaire answers (purposes, self-ratings, daily minutes, explanation language). |
| `PlacementAttempt` | One adaptive run: `stateJson` engine cursor (resumable), `resultsJson` outcome, recommendation. Status IN_PROGRESS / COMPLETED / ABANDONED. |
| `PlacementAnswer` | One row per answered item (skill, tier, correctness, response text, self-rating, skipped). |
| `LearningPlan` | The active path: start level + anchor lesson. Status PROPOSED (assessment done, awaiting choice) / ACCEPTED / ADJUSTED / ARCHIVED. |

## Plan-aware unlocking

A plan anchor **virtually satisfies every lesson ordered strictly before
it** (`globalLessonIndex` in `src/data/curriculum`):

- SPA curriculum view + lesson player (`src/lib/curriculum-server.ts`):
  lessons before the anchor stay open for review; the path continues
  sequentially from the anchor.
- Dashboard "Continue your path" starts at the anchor (never before).
- v1 API `getUnlockState` applies the same virtual satisfaction to
  cross-level prerequisites (e.g. `a1-1-1` requires `p1-6-5` — satisfied
  when the plan anchors at A1).

## API (v1 conventions)

| Route | Purpose |
| --- | --- |
| `GET /api/v1/onboarding/state` | Where the learner is (questionnaire / attempt / results / plan). |
| `GET·POST /api/v1/onboarding/questionnaire` | Read / save the questionnaire (upsert; also sets the daily goal). |
| `POST /api/v1/placement/attempts` | Start or resume an attempt (`{ audioAvailable }`). |
| `GET /api/v1/placement/attempts/current` | The current step (item / writing prompt / speaking choice) — keys stripped. |
| `POST /api/v1/placement/attempts/[id]/submit` | Discriminated union: `mcq`, `writing-text`, `self-rating`, `speaking-opt-in`, `speaking`, `skip-speaking`, `skip-skill`. |
| `GET·POST·DELETE /api/v1/placement/plan` | Latest results / accept or adjust / restart. |

Ownership is re-verified on every write (IDOR prevention); one answer per
item per attempt (unique constraint); duplicates are rejected.

## Verification

- `tests/placement-bank.test.ts` — bank integrity (12 tests).
- `tests/placement-engine.test.ts` — ladders, early stops, tier
  tiebreakers, audio-less listening, production tiers, placement rules,
  narrative, serialization round-trip (19 tests).
- `scripts/e2e-onboarding.sh` — full-browser journey: register → welcome →
  questionnaire → all-wrong assessment (verifies early stopping: 8 MCQs
  for 4 skills) → writing 2-phase → speaking skipped → result → accept →
  dashboard continues at the recommended lesson; plus the zero-beginner
  shortcut, database persistence checks and mobile captures.
