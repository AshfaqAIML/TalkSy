# TalkSy — Learning Methodology

The pedagogy behind the product. This document governs **how content teaches**;
what specifically is taught is in [CURRICULUM_BLUEPRINT.md](CURRICULUM_BLUEPRINT.md).

## Foundations

TalkSy's method is a pragmatic synthesis of four well-established approaches,
chosen for what demonstrably moves beginners toward communication:

| Approach | What we take from it | Where it shows up |
| --- | --- | --- |
| **Communicative Language Teaching (CLT)** | Language is learned by using it for meaning, not by studying rules in isolation | Every lesson centres on a real-life situation; dialogues and speaking come before grammar abstraction |
| **Spaced repetition (Leitner box)** | Memories strengthen when retrieved at increasing intervals; forgetting is expected and planned for | Vocabulary strength 0–5; practice quizzes resurface weak words first |
| **Skill acquisition theory (DeKeyser: skill → automatization)** | Fluency = declarative knowledge made automatic through varied practice | Exercise ladders move recognition → production; retries allowed, XP not farmed |
| **CEFR action-oriented descriptors** | Progress is what you *can do* in the world, not what you know about the language | Level/unit goals phrased as can-do statements |

## The lesson arc

Every lesson follows the same seven-beat arc. Predictability lowers cognitive
load; the content varies, the shape never does.

1. **Meet the words** (vocab cards) — term, part of speech, simple-English
   definition, example. Definitions stay within the learner's level vocabulary.
2. **Hear it in use** (dialogue) — natural conversation using the target words,
   playable line-by-line with two voice choices and a slow replay.
3. **See the pattern** (grammar) — 1–3 short points, each with examples.
   Explanations never exceed a few beginner-friendly sentences.
4. **Read for meaning** (passage, where the lesson calls for it) — short text
   in the target language.
5. **Prove it** (exercises) — mixed types: mcq, fill, word-order, matching,
   listening, speaking. Recognition first, production second.
6. **Speak it** — every lesson ends with speaking practice, graded by speech
   recognition when available, honest self-assessment when not.
7. **See the truth** (completion) — XP earned, accuracy, words learned. Numbers
   come from the server's record of what actually happened.

## Exercise design rules

1. **Recognition before production.** Within a lesson, mcq/match (choose the
   answer) precede fill/order (construct the answer) and speaking (generate
   under time pressure).
2. **Answers are forgiving, never arbitrary.** Typing exercises accept
   case-insensitive, punctuation-tolerant input and tolerate missing articles
   (a/an/the); typographic apostrophes match ASCII ones (see `textMatches` in
   `src/lib/speech.ts`).
3. **Speaking is practice, not a quiz.** It is excluded from accuracy so
   microphone quality never lies about a learner's grammar.
4. **Retries are free; XP is not.** A learner may repeat until correct
   (learning!), but XP credits the first correct attempt only (honesty).
5. **Every exercise trains a word or a pattern.** Listening exercises link to a
   `wordId` so the answer updates that word's strength.
6. **Explanations follow the answer**, never precede it — feedback is most
   effective at the moment of evaluation.

## Vocabulary system

- Words enter the system at strength 1 when their lesson is completed
  ("encountered").
- Correct answers in lessons and practice raise strength by 1; wrong answers
  lower it by 1; range 0–5.
- **Learned** = strength ≥ 2 (answered correctly at least once outside the
  lesson cards).
- Practice quizzes sort by ascending strength, then by least-recently-reviewed.

## Streaks & goals (motivation without manipulation)

- A day counts only when the learner does real work: ≥1 lesson or ≥3 exercises.
  Opening the app is not practice.
- The daily goal is minutes-based and learner-set (default 10). The dashboard
  ring fills against `minutesPractised` recorded server-side.
- No loss-aversion mechanics (no "your streak will die!" nagging), no
  variable-reward loot mechanics. The reward loop is competence, visibly earned.

## Methodology → feature gates

Any proposed feature must state which principle it serves. Examples:

- *Placement test* → serves "one clear next step" (start at the right height).
- *Leaderboards* → allowed only if opt-in and never gate content (subordinate
  to learning).
- *AI-generated conversation partner* → serves CLT production practice; must
  keep the honest-progress rule (AI scores may inform, never award, XP).

## Evidence & iteration

- Curriculum integrity is enforced by tests (`tests/curriculum.test.ts`):
  unique ids, valid answer indices, listen + speak present in every lesson,
  wordId links resolve to real vocab.
- Per-exercise-type accuracy is derivable from `ExerciseAttempt` rows; when
  a type underperforms across learners, the exercise — not the learner — is
  the first suspect. (Analytics surface: planned.)
