# TalkSy Grammar School & Sentence Construction Laboratory

Two connected systems built on the reusable lesson & exercise engine: the
**Grammar School** (understand and compare) and the **Sentence Construction
Laboratory** (build and transform). Both are integrated with the curriculum
(Grammar Core level), the exercise engine, assessments and learner progress.

```
src/data/grammar/               ← content as code
  types.ts                      ← POS modules, tenses, clinic types
  parts-of-speech.ts            ← 8 complete modules
  tenses.ts                     ← 12 tenses × 9 comparison aspects
  lessons-pos.ts                ← 4 parts-of-speech lessons
  lessons-tenses.ts             ← 3 tense-comparison lessons
  lessons-lab.ts                ← 7 lab-stage lessons
  exercises-*.ts                ← ~80 new exercises

src/lib/grammar/
  checker.ts                    ← rule-based error clinic engine
  roles.ts                      ← colour-coded grammatical roles

src/components/app/grammar/     ← hub, tense explorer, error clinic, anatomy
src/components/app/lab/         ← sentence lab hub
src/components/app/lesson/      ← grammar blocks + sentence-build + challenge
```

## Grammar School

### Parts of speech (`#/grammar`)
Eight modules — nouns, pronouns, verbs, adjectives, adverbs, prepositions,
conjunctions, interjections — each with the full treatment: simple
definition, purpose, categories, highlighted examples, use in sentence
patterns, common mistakes (tap to reveal the fix) and skill-based activities
that deep-link to the Lab, the Clinic or the Tense Explorer. Four lessons
(`grammar-pos-1…4`) render the modules through a new `pos-module` block.

### Tense learning (`#/grammar/tenses`)
An interactive explorer over all 12 tenses. Pick any two to compare
**meaning, structure, verb forms, helping verbs, affirmative, negative,
yes/no questions, WH-questions and time expressions** side by side —
meaning-first, not formula memorisation. Three lessons
(`grammar-tenses-present/past/future`) embed `tense-comparison` blocks
preset to the classic contrasts (simple↔continuous, simple↔perfect…).

### Grammar visualisation
- `sentence-anatomy` block: colour-coded word tiles by grammatical role
  (subject/verb/object/complement/modifier/auxiliary/…), a pattern chip
  (`S + V + O`), click-to-inspect per-token explanations, TTS, and a role
  legend.
- Highlighted examples in POS modules, comparison tables, and interactive
  tense switching.

### Grammar Error Clinic (`#/grammar/clinic`)
Learners submit sentences; a **rule-based checker** (~25 rules across 12
error categories: agreement, third-person -s, articles, capitalization,
negatives, comparatives, countability, word choice, prepositions, spelling,
word order, punctuation) returns a corrected sentence plus per-issue
explanations and lesson recommendations. Every submission is stored
(`GrammarClinicSubmission`); the clinic aggregates **recurring error
categories** and recommends the lessons that target them.

## Sentence Construction Laboratory (`#/lab`)

Seven progressive stages, each a lesson with Learn → Practice → Challenge →
Homework, plus an assessment:

| Stage | Lesson | Focus |
| --- | --- | --- |
| 1 | `lab-1-word-recognition` | identify subjects, verbs, objects, modifiers |
| 2 | `lab-2-basic-structure` | S+V · S+V+O · S+V+C |
| 3 | `lab-3-sentence-types` | declarative, interrogative, imperative, exclamatory |
| 4 | `lab-4-polarity` | affirmative↔negative, statement↔question |
| 5 | `lab-5-expansion` | "I read." → "I read an interesting book every evening." |
| 6 | `lab-6-combination` | conjunctions and clauses |
| 7 | `lab-7-transformation` | simple/compound/complex, active/passive, direct/indirect, tense shifts |

### The sentence-build exercise type (16th)
Word tiles (correct tokens + distractors, deterministically scrambled),
multiple **alternative valid answers** ("She is not a doctor." / "She isn't
a doctor."), a **Hear my sentence** TTS button, server-side grading, and a
post-grading **structure inspection** — the colour-coded anatomy of the
canonical answer is returned only after submission, so the answer key never
reaches the client before checking.

### Challenge mode
The `challenge` block runs timed (visible countdown, motivation not
punishment) or untimed rounds. Scoring is **accuracy-first**: every answer
is persisted through the same attempt API (context `challenge`) and the
summary reports accuracy, per-question results and retry.

## Integration

- New `grammar-core` level in the learning path (3 units, 14 lessons) —
  library cards, progress, assessments, dashboard stats and streaks all
  work out of the box.
- The curriculum validator checks POS module ids, tense ids, challenge
  seconds and all exercise references.
- Tests: `tests/grammar.test.ts` (checker rules + data integrity +
  sentence-build validator), `tests/api-grammar.test.ts` (clinic API,
  sentence-build attempts with structure, challenge context) — 95 tests
  total.
- E2E: `scripts/e2e-grammar.sh` (95 checks) + `scripts/e2e.sh` regression
  (102 checks).
