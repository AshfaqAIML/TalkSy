# TalkSy Core English Programme — Curriculum Blueprint & Content Production Plan

**PROMPT 34 deliverable.** The complete 56-chapter, six-level English curriculum that evolves TalkSy's educational content into a comprehensive, progressive, prerequisite-aware programme — authored as typed data (`src/data/programme/`), seeded into the CMS (`scripts/seed-programme.ts`), and connected to the live course catalogue.

> **CEFR disclaimer.** CEFR levels (Pre-A1 → C1) are used as a curriculum *reference* only. TalkSy does not issue CEFR certifications or official CEFR assessments.

## 1. Programme at a glance

| Level | Course (CMS slug) | Chapters | Lessons | Chapter range |
| --- | --- | --- | --- | --- |
| Pre-A1 | English from Zero (`english-from-zero`) | 8 | 43 | CH-01 – CH-08 |
| A1 | Beginner English (`beginner-english`) | 10 | 55 | CH-09 – CH-18 |
| A2 | Elementary English (`elementary-english`) | 10 | 49 | CH-19 – CH-28 |
| B1 | Intermediate English (`intermediate-english`) | 10 | 40 | CH-29 – CH-38 |
| B2 | Upper-Intermediate English (`upper-intermediate-english`) | 10 | 44 | CH-39 – CH-48 |
| C1 | Advanced Communication (`advanced-communication`) | 8 | 35 | CH-49 – CH-56 |
| **Total** | **6 courses · 20 modules** | **56** | **266** | **~105 hours** |

- **266 bank questions** (chapter review lessons), **266 assignments** (one per lesson), **2,117 content blocks**, all validated by `validateProgramme()` (zero issues) and enforced by `tests/programme.test.ts`.
- **Structure**: `Level → Module (20 thematic groups) → Chapter (56, CMS units) → Lesson (266, CMS lessons)`.
- **IDs**: chapters `CH-01…CH-56` (slugs `ch-01…ch-56`), lessons `CH-13-L03` (slugs `ch-13-l-03`), questions `<lesson>-q<n>`.
- **Prerequisites**: every lesson chains to the previous lesson of its chapter; each chapter's entry lesson is gated by the final lessons of its prerequisite chapters (e.g. CH-13 *Present Simple* requires CH-12 *Be, Have and Do*; CH-40 *Advanced Conditionals* requires CH-32 *Conditional Sentences*).
- **Discovery integration**: flagship learning path **"The Complete English Programme"** (`#/paths/complete-english-programme`), six programme courses ordered first in `#/courses`, level presets `#/courses/level/<pre-a1|a1|a2|b1|b2|c1>`, course outlines grouped by chapter, and demo learner progress (completed Pre-A1, started A1) for the dashboard.

## 2. Parallel learning strands

Seven continuous practice tracks run through every level; `strandCoverage()` proves ≥ 2 lessons per strand per level (validated by tests):

| Level | Reading | Writing | Listening | Speaking | Pronunciation | Vocabulary | Communication |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Pre-A1 | 34 | 14 | 16 | 3 | 15 | 24 | 13 |
| A1 | 23 | 29 | 12 | 29 | 8 | 17 | 43 |
| A2 | 28 | 33 | 14 | 22 | 2 | 16 | 35 |
| B1 | 33 | 35 | 6 | 11 | 2 | 5 | 36 |
| B2 | 32 | 39 | 8 | 16 | 3 | 14 | 41 |
| C1 | 23 | 28 | 11 | 22 | 8 | 15 | 32 |

(Lesson counts per strand. Practical-communication chapters — CH-18, CH-28, CH-38, CH-47, CH-55, CH-56 — are deliberately multi-strand.)

## 3. Chapter catalogue

Full data lives in `src/data/programme/levels/batch-01.ts … batch-14.ts` (one file per production batch, four chapters each). Summary:

| Batch | Chapters | Content |
| --- | --- | --- |
| 01 | CH-01–04 | Pre-A1: Introduction to English, Alphabet, Vowels & Consonants, Phonics |
| 02 | CH-05–08 | Pre-A1: Word Reading & Spelling, First Vocabulary, Word Categories, First Sentences |
| 03 | CH-09–12 | A1: Sentence Structure, Nouns & Articles, Pronouns & Possessives, Be/Have/Do |
| 04 | CH-13–16 | A1: Present Simple, Questions & Negatives, Adjectives & Adverbs, Prepositions & There is/are |
| 05 | CH-17–20 | A1 close (Present Continuous, Practical Everyday English) + A2 open (Past Simple, Past Continuous) |
| 06 | CH-21–24 | A2: Future, Present Perfect Foundations, Modals, Countable & Uncountable |
| 07 | CH-25–28 | A2: Comparisons, Prepositions & Phrasal Verbs, Joining Sentences, Practical Paragraphs |
| 08 | CH-29–32 | B1: Tense Comparison, Past Perfect & Narrative, Perfect Forms, Conditionals |
| 09 | CH-33–36 | B1: Passive Voice, Reported Speech, Relative Clauses, Gerunds & Infinitives |
| 10 | CH-37–40 | B1 close (Complex Sentences, Communication & Structured Writing) + B2 open (Advanced Tense & Aspect, Advanced Conditionals) |
| 11 | CH-41–44 | B2: Advanced Modals, Advanced Passive, Participles, Advanced Connectors |
| 12 | CH-45–48 | B2: Advanced Vocabulary, Academic & Professional Writing, Discussion & Presentation, Advanced Reading |
| 13 | CH-49–52 | C1: Advanced Structures, Nuance & Hedging, Rhetoric & Style, Sophisticated Vocabulary |
| 14 | CH-53–56 | C1: Critical Reading, Advanced Professional Writing, Advanced Speech, Pronunciation & Capstone |

Every chapter defines: unique ID, title, level, description, learning objectives, prerequisites, estimated duration, lesson count, skills developed, strands, assessment requirements and completion criteria. Every lesson defines: ID, chapter ID, title, level, difficulty (1–5, banded per level), prerequisites, learning outcomes, content structure (teaching blocks), practice activities and assessment.

## 4. Content production plan — authoring in manageable batches

The curriculum currently ships at **blueprint fidelity**: every lesson carries real teaching blocks, a practice set on each chapter-review lesson, an assignment and homework. Full production lessons (the interactive depth learners expect at scale) are authored and reviewed in **14 batches of four chapters**, using the batch file structure that already exists.

### 4.1 Batch workflow (per batch, ~2 weeks part-time)

1. **Author** — editors extend each chapter's lessons in the batch file (`levels/batch-NN.ts`) or directly in the admin CMS: deepen teaching blocks, expand each lesson to ≥ 5 bank questions (mix mcq / fill-blank / match / rearrange / read-answer / listen-answer / dictation), add TTS audio blocks where the strand is listening/pronunciation, and diversify assignments.
2. **Validate** — `bun scripts/validate-programme.ts` must return **0 issues** (uniqueness, prerequisites, strand coverage, difficulty bands, question integrity).
3. **Review** — a review teacher checks the batch against the review checklist below in the CMS review queue (draft → review → approved).
4. **Publish** — an admin publishes; `bun scripts/seed-programme.ts` (bump `PROGRAMME_SEED_VERSION`) re-seeds; `bun run test` must stay green (563+ tests).
5. **Sign off** — record the batch in `CmsAuditLog` (the seeder writes a `programme.seed` marker automatically).

### 4.2 Definition of done — a "full" lesson

- ≥ 6 teaching blocks with genuine content (no heading-only shells — enforced by tests).
- ≥ 5 interactive questions covering at least 3 exercise types, each with hints and full feedback (`correctAnswer`, `explanation`, `whyWrong`).
- One assignment with word range appropriate to level; homework tasks where relevant.
- Audio (TTS) block for every listening/pronunciation-strand lesson.
- Learning outcomes expressed as can-do statements; difficulty inside the level band.

### 4.3 Review checklist (per chapter)

- [ ] Linguistic accuracy of every example sentence and accepted answer.
- [ ] Level-appropriateness: no unexplained advanced concepts (prerequisite-awareness check against chapter prerequisites).
- [ ] Strand coverage maintained (≥ 2 lessons per strand per level after edits).
- [ ] Question integrity: `buildCorrectAnswer` solves every question (see `tests/helpers.ts`).
- [ ] Cultural sensitivity and age-appropriateness of names, contexts and topics.
- [ ] Register consistency (Spanish support translations at Pre-A1/A1; none expected at B2+).
- [ ] `validateProgramme()` → 0 issues; full test suite green.

### 4.4 Effort estimate

266 lessons × ~2 focused hours per full lesson (authoring + questions + review) ≈ 530 hours; 14 batches × ~38 hours ≈ one content team one quarter, or two batches/week for a team of two reviewers + three authors.

## 5. Planned future expansion (NOT in this phase)

- **IELTS & TOEFL** — deliberately **not** introduced as active courses of the core programme in this phase. They remain in their existing, separate **Exam Preparation Academy** division (IELTS Academy courses, mock engine, study planner); deeper curriculum integration (band-mapped module recommendations, exam-strand cross-links) is planned future work.
- Business English and English for Specific Purposes tracks (B1+ verticals).
- Speaking-assessment integration for C1 capstone presentations (rubric-scored via the exam engine's rubric system).
- Localisation of Pre-A1/A1 support translations beyond Spanish.
