# TalkSy — Curriculum Blueprint

> **Scope note (Stage 3).** The complete ten-level program structure — all
> learning levels, modules, units and lessons from absolute zero to C1, with
> prerequisites, assessments and the dependency graph — now lives in
> [CURRICULUM_CATALOGUE.md](CURRICULUM_CATALOGUE.md) (generated from
> `src/data/catalogue/`, the database-import source of truth). This blueprint
> remains the standard for **lesson anatomy and content integrity gates**
> applied when lesson content is authored against the catalogue.

The content plan: what is taught, in what order, and to what standard.
How content teaches is governed by [LEARNING_METHODOLOGY.md](LEARNING_METHODOLOGY.md).

## Structure

```
Level (CEFR)  →  Unit (6 per level)  →  Lesson (3 per unit = 18 per level)
P1 Foundations →  6 units × 5 lessons = 30 lessons (17-section template)
```

- **Id rules (stable — persisted in the database, never rename):**
  - lessonSlug: `{level}-{unit}-{lesson}` e.g. `p1-1-1` or `a1-1-1`
  - exerciseId: `{lessonSlug}-ex{n}` e.g. `p1-1-1-ex3`
  - wordId: `{lessonSlug}-w{n}` e.g. `p1-1-1-w2`
- Content lives in versioned TypeScript (`src/data/curriculum/`), one file per
  unit (P1: one file per lesson under `p1/`), assembled in `index.ts`. User
  progress (slugs, ids) lives in the DB.
- All material is **original work authored for TalkSy**. No third-party course
  content.
- Catalogue alignment: the ten-level program structure lives in
  `src/data/catalogue/` (see CURRICULUM_CATALOGUE.md). P1 lessons declare the
  catalogue lessons they implement via `content.catalogueTargets`.

## The structured lesson template (P1 and future courses)

P1 lessons are authored against a 17-section template — real teaching
material, not content stubs. Sections in teaching order:

| # | Section | Field | Test-enforced minimum |
| --- | --- | --- | --- |
| 1 | Lesson introduction | `introduction` | ≥ 40 chars |
| 2 | Learning objectives | `objectives` | ≥ 3 can-do statements |
| 3 | Prerequisite knowledge | `prerequisites` | ≥ 1 (after lesson 1) |
| 4 | Concept explanation | `concept` | 1-sentence definition + ≥ 2 paragraphs |
| 5 | Step-by-step teaching | `teachingSteps` | ≥ 3 steps |
| 6 | Examples (typed bank) | `exampleBank` | ≥ 3 basic, ≥ 3 everyday, ≥ 2 questions, ≥ 2 corrections |
| 7 | Real-life application | `realLife` | text + ≥ 2 examples |
| 8 | Guided practice | exercises, phase `guided` | ≥ 3 |
| 9 | Independent practice | exercises, phase `independent` | ≥ 3 |
| 10 | Speaking exercise | exercises, phase `speaking` | ≥ 1 speak |
| 11 | Listening exercise | exercises, phase `listening` | ≥ 2 listen |
| 12 | Reading exercise | `passage` + phase `reading` | passage ≥ 20 words + ≥ 2 questions |
| 13 | Writing exercise | exercises, phase `writing` | ≥ 1 write (self-assessed vs model) |
| 14 | Common mistakes | `commonMistakes` | ≥ 2 wrong→right→why |
| 15 | Revision | `revision` | ≥ 3 key points, ≥ 3 key words, ≥ 2 self-checks |
| 16 | Short assessment | exercises, phase `assessment` | ≥ 4, each with answer rationale |
| 17 | Homework | `homework` | ≥ 3 tasks |

The lesson engine sequences these through `buildLessonFlow()`
(`src/data/curriculum/lesson-flow.ts`): legacy A1/A2 lessons keep their exact
original flow; structured lessons render every section in order with phase
labels on exercises (Guided practice → … → Lesson check). Authoring helpers
with automatic id assignment and answer-slot rotation live in
`src/data/curriculum/p1/helpers.ts`.

## Content governance (never mark AI content expert-approved)

Every structured lesson carries `content` metadata: `status`
(draft → in-editorial-review → expert-reviewed → published), `contentVersion`
(semver), `authoredBy`, optional `reviewedBy`/`reviewedAt`, and
`catalogueTargets`. The validator (`src/data/curriculum/validate.ts`) enforces:

1. AI-assisted content **never** leaves `draft` status — a human reviewer is
   required before `expert-reviewed` or `published`.
2. `contentVersion` is semver; `catalogueTargets` reference real catalogue ids.
3. All 17 sections present and substantial (per the table above).
4. Answer keys: every gradable exercise has a valid answer; assessment items
   carry explanations; mcq answers never all sit in the first slot.
5. No duplicated exercises; prerequisites point only at earlier lessons.
6. Language quality: no placeholder tokens, no linguistic jargon (no
   "determiner", "gerund", "clause"…), grammar terminology only from its
   introduction lesson onward, sentence mechanics (capitals + end punctuation),
   and a curated long-word limit for beginner teaching text.

## Content quality gates (test-enforced today)

`tests/curriculum.test.ts` enforces, across all 66 lessons:

**Structure**

1. P1, A1 and A2 fully populated (30 + 18 + 18 lessons); B1–C1
   honestly marked "in-development" with zero fake units.
2. Lesson slugs unique and matching `p1-[1-6]-[1-5]` / `a{1|2}-{1-6}-{1-3}`;
   exercise and word ids globally unique and prefixed by their lesson slug.

**Lesson anatomy**

3. ≥ 6 vocab items per lesson, each with real definition and example (length > 5).
4. ≥ 7 exercises per lesson; **listen and speak present in every lesson**.
5. Every unit has at least one lesson with a dialogue or reading passage.
6. ≥ 28 of the legacy lessons link a listening exercise to a vocabulary word (wordId).

**Exercise well-formedness**

7. mcq: ≥ 3 options, valid `answerIndex`, no duplicate options.
8. listen (choice mode): ≥ 3 options + valid answer index; (type mode): ≥ 1 accepted answer.
9. fill: ≥ 1 accepted answer. order: answer ≥ 3 words. match: ≥ 3 pairs, unique lefts and rights.
10. Any exercise referencing a `passageId` belongs to a lesson that has a passage.
11. Every listen `wordId` resolves to a vocab item in the same lesson.

`tests/beginner-content.test.ts` enforces the full 17-section template, the
content governance rules and the lesson flow for all 30 P1 lessons.

New content must keep all gates green; failing tests block a stage checkpoint.

## Inventory — built ✅

### P1 · Foundations — "Your first 30 lessons: from letters to sentences"

Six units × five lessons, authored against the 17-section template, all
shipping as **AI-assisted drafts awaiting expert ESL review**.

| Unit | Theme | Lessons |
| --- | --- | --- |
| 1 | First Steps with English | Understanding English · Letter Recognition · Uppercase and Lowercase · Vowels and Consonants · Basic Letter Sounds |
| 2 | First Words | Simple Phonics: Blending · Reading Your First Words · Common Everyday Words · Vocabulary Categories · Word Meaning |
| 3 | Words at Work | Word Usage · Syllables · Nouns · Verbs · Basic Pronouns |
| 4 | First Sentences | Understanding Simple Sentences · Subject and Predicate · Subject + Verb · Subject + Verb + Object · Basic Articles |
| 5 | Building Bigger Sentences | Be Verbs · Basic Adjectives · Basic Prepositions · Sentence Arrangement · Affirmative Sentences |
| 6 | Everyday Talking | Negative Sentences · Basic Questions · Simple WH-Questions · Daily-Use Sentence Practice · Basic Self-Introduction |

**P1 exit can-do:** say and use the alphabet and letter sounds; read CVC words;
use the core word families (nouns, verbs, pronouns, adjectives, prepositions,
articles); build affirmative and negative sentences and yes/no + WH-questions;
introduce yourself in a six-line English speech.

**Sequence note:** the brief's order "pronouns → nouns → verbs" was
prerequisite-adjusted to **nouns → verbs → pronouns** (pronouns take the place
of nouns and need verbs for natural examples). Lesson 3 introduces the word
"sentence" lightly so the capital-letter rules can be taught; lesson 11 makes
it core vocabulary; lesson 16 deepens it.

**Progressive instruction arc** (word → conversation, the brief's 8-step
sequence — every lesson sits on this ladder, and each step assumes the ones
before it):

| Step | Skill | Lessons |
| --- | --- | --- |
| 1 | Word recognition — letters, sounds, phonics, first decoded words | 1–7 |
| 2 | Word meaning — everyday words, categories, what words mean | 8–10 |
| 3 | Word usage — words in sentences, syllables, word classes (nouns, verbs, pronouns) | 11–15 |
| 4 | Simple sentence — what a sentence is, subject + verb (+ object), articles | 16–20 |
| 5 | Expanded sentence — be verbs, adjectives, prepositions, word order | 21–25 |
| 6 | Connected sentences — negatives, questions, dialogue turns | 26–28 |
| 7 | Paragraph — the six-line self-introduction speech | 29–30 |
| 8 | Independent conversation — daily-use practice, capstone speech → A1 | 29–30 → A1 |

### A1 · Beginner — "Your first conversations"

| Unit | Theme | Lessons |
| --- | --- | --- |
| 1 | First Words | Hello and Goodbye · The Alphabet and Numbers 1–10 · How Are You? |
| 2 | You and Me | What's Your Name? · Where Are You From? · My Family |
| 3 | Everyday Life | My Day · At Home · Food and Drink |
| 4 | Out and About | Numbers, Time and Prices · Shopping · Finding Your Way |
| 5 | Work and Study | Jobs · In the Classroom · I Can Do It |
| 6 | Free Time | Hobbies · What's the Weather Like? · Making Plans |

**A1 exit can-do:** introduce yourself and others; spell and count; talk about
family, daily routine, food, prices, directions, jobs, hobbies and simple plans.

### A2 · Elementary — "Everyday English, real situations"

| Unit | Theme | Lessons |
| --- | --- | --- |
| 1 | People and Places | What Do They Look Like? · What Are They Like? · My Town |
| 2 | Past and Present | Last Weekend · An Amazing Day · Then and Now |
| 3 | Daily Life in Depth | How Often? · At the Market · At the Restaurant |
| 4 | Travel and Transport | Getting Around · At the Airport · At the Hotel |
| 5 | Health and Body | What's the Matter? · Healthy Habits · Advice for a Friend |
| 6 | Communication Skills | On the Phone · Writing Messages · Life Experiences |

**A2 exit can-do:** describe appearance and character; narrate past events;
handle markets, restaurants, travel and hotels; talk to a doctor; use the phone
and write messages; discuss experiences (present perfect).

## Plan — B1 (next) 🚧

**B1 · Intermediate — "Opinions, stories, connections."** 6 units × 3 lessons.

| Unit | Working theme | Focus |
| --- | --- | --- |
| 1 | Telling Stories | Past continuous vs past simple; sequencing; anecdotes |
| 2 | Opinions and Media | Agreeing/disagreeing; comparatives & superlatives; reviews |
| 3 | Work and Money | Job applications; will/going to/present continuous futures; conditionals type 1 |
| 4 | Education and Learning | First & second conditionals; modal verbs of possibility; formal vs informal register |
| 5 | Health and Lifestyle | Should/must/have to; giving advice; present perfect continuous |
| 6 | Society and Environment | Passive voice; reported speech; presentational writing |

B1 content rules beyond A2: passages grow to 2–3 paragraphs; dialogue speech
rates and vocab move up a register; new exercise emphasis on extended writing
(short guided paragraphs) — pending SKIL-4 (writing exercise type).

## Plan — B2 / C1 📋

- **B2 Upper-Intermediate:** work, technology, culture; fast natural speech in
  dialogues; argumentative writing; phrasal verbs and collocation; conditionals
  (mixed), inversion basics.
- **C1 Advanced:** nuance, style and register; academic and professional
  writing; idiomatic language; listening with noise/overlapping speech;
  near-native dialogue pacing.

Detailed unit tables for B2/C1 are authored when each level enters development
(one stage per level), following this blueprint's anatomy and id rules.

## Placement test (planned)

- Adaptive 20–30 item quiz sampling grammar, vocab and listening across A1→B1
  bands; places learner at the first unit where accuracy drops below 70%.
- Placement unlocks the level's *first lesson sequence* but does not mark
  lessons complete; vocabulary strength starts at 0 for skipped lessons.
- Skipped lessons remain accessible for review (completed = false, unlocked = true).
