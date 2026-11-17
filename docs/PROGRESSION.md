# Learning Progression System

An intelligent learning progression layer across every TalkSy module: real
progress engine, revision scheduler, recommendation engine, achievements,
milestones, gamification and an honest analytics dashboard.

Entry point: **My Progress** (`#/progress`, the legacy `#/dashboard` link still
works). Requires login.

## Product laws

1. **Verified activity only.** Every point, badge, streak day and chart line
   comes from a graded answer, a passed run, a submission or a completion.
   Opening a lesson, a text or an activity writes nothing and derives nothing.
   ("Award no achievements for opening content" is enforced by construction:
   the facts engine only reads attempt/submission/completion tables.)
2. **No misleading scores.** Skills are never collapsed into one "English
   score". Each skill profile carries its own labelled metrics:
   - Exercise accuracy — objectively graded right/wrong answers only.
   - Writing — rubric scores, explicitly *never* averaged into accuracy.
   - Speaking — transcript-match scores with the standing caveat that they
     are "not pronunciation grades"; accents are not penalised.
   - No data → "Not started", never 0%.
3. **Non-punitive gamification.** Streaks and goals describe activity; missing
   a day never removes points, badges or progress. Copy on the dashboard says
   so explicitly.
4. **Explainability.** Every recommendation and every revision item quotes the
   learner's own numbers ("your Error Clinic history shows articles in 3
   sentences…"). Same history → same output; no black box.

## Architecture

```
src/data/progress/           content-as-code
  types.ts                     shared types + POINT_RULES (values are product decisions)
  courses.ts                   certificate courses derived from the curriculum
  achievements.ts              46 achievements & milestones, pure verify(facts) predicates
  index.ts                     registry + integrity validation (tested)

src/lib/progress/            engines (all deterministic, all unit-tested)
  facts.ts                     collectFacts: reads every verified-activity table,
                               derives points (daily caps + once-per-subject),
                               activity days, streaks, weekly series
  skills.ts                    per-skill profiles (status/trend/accuracy/focus/notes)
  revision.ts                  scheduler: performance · attempts · recency ·
                               difficulty · self-reported confidence → urgency
  recommendations.ts           ranked, purpose-explained next actions
  service.ts                   overview orchestration, achievement unlock
                               persistence, certificate issuance, goals, confidence

src/app/api/progression/     overview (GET) · goals (POST) · confidence (POST)
                             achievements/seen (POST)

src/components/app/progress/ dashboard (5 tabs: Overview · Skills · Charts ·
                             Revision · Awards) + shared bits
```

### Points (gamification)

Points are **derived, never incremented**: the engine replays `POINT_RULES`
over the learner's history on every load. This makes them idempotent (same
history → same points), un-farmable (per-day caps on grindable sources,
once-per-subject awards) and retroactively correct (new rules or restored
databases converge automatically).

| Source | Points | Cap |
| --- | --- | --- |
| Correct exercise answer | 2 | 20/day |
| Lesson completed / assessment passed | 20 / 15 | once per lesson |
| Correct word review | 1 | 30/day |
| Word challenge completed | 10 | 2/day |
| Valid practice sentence | 2 | 5/day |
| Error Clinic sentence | 1 | 10/day |
| Comprehension run passed / text completed | 5 / 15 | 3/day · once per text |
| Correct listening answer / activity completed | 2 / 15 | 20/day · once per activity |
| Speaking task passed / activity completed | 5 / 20 | once per task/activity |
| Conversation finished | 10 | 2/day |
| Pronunciation practice | 1 | 10/day |
| Writing submitted / assignment completed | 5 / 25 | 2/day · once per assignment |

### Revision scheduler

Five factors per item — previous performance, number of attempts, time since
last revision, difficulty, self-reported confidence (learner-set, 1-5, never
shown as a score). Urgency = performance gap (45%) + recency (30%) +
confidence gap (25%) + bonuses for repeated non-passing attempts and harder
difficulty. Vocabulary follows the existing spaced-repetition engine;
everything else re-enters the queue when scores dip, confidence drops or too
much time passes. Items are split into **Due now** and **Coming up**, each
with the factors that produced it.

### Certificates

Courses are curriculum units and levels (derived, never hand-maintained). A
certificate with a verification code (`TSY-XXXXXXXX`) is issued automatically
when every lesson in the course has a verified completion — idempotently,
keeping its original issue date. Level certificates require every unit.

## Testing

- `tests/progress-data.test.ts` — catalog integrity, required milestones,
  verify predicates (incl. "nothing for free" on empty facts)
- `tests/progress-engine.test.ts` — point caps/once-rules/idempotency,
  streak semantics (gap keeps longest/active days), skill honesty, DB
  integration
- `tests/progress-scheduling.test.ts` — scheduler factors + ordering,
  recommendation purposes, determinism
- `tests/progress-api.test.ts` — 401s, honest empty overview, goals
  clamping, confidence validation, unlock + seen lifecycle, certificate
  issuance idempotency
- `scripts/e2e-progress.sh` — 62 browser checks: empty states → goals
  editing → real activity via product APIs → populated dashboard → demo
  account → mobile → console cleanliness
