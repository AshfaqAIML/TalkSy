# TalkSy Content Production Engine (PROMPT 35)

This document defines how TalkSy educational content is produced, reviewed and
published — the standard every lesson is written to, the review pipeline it
must pass, and the honest state of production across all 56 chapters.

---

## 1. The lesson standard (v2)

A lesson is **v2-full** when it teaches rather than describes. Every v2 lesson
carries the complete structure below (validated mechanically — see §5):

| Section | Block type | Requirement |
| --- | --- | --- |
| Lesson introduction | `lesson-intro` | First block; what the learner will study + **before you start** (≥2 prerequisite abilities from earlier lessons) |
| Learning objectives | lesson `outcomes` | ≥3 can-do outcomes (shown in the lesson header) |
| Concept explanation | `definition` + `text` | Clear, detailed definition; no unexplained terminology |
| Step-by-step teaching | `steps` | ≥3 small steps, each with examples |
| Rules and patterns | `grammar-rule` / `table` | The rules that govern the concept |
| Detailed examples | `example` | **≥8 worked examples**, ≥6 with teaching notes, spanning **≥4 life domains** (everyday, education, family, home, travel, shopping, work, social, technology, food…) |
| Real-life usage | `usage` | Where the concept appears in natural communication |
| Comparison | `comparison` | Two similar concepts side by side to prevent confusion |
| Common mistakes | `mistakes` | ≥3 items in **incorrect → correct → reason** format |
| Guided practice | `practice` (guided) | ≥3 questions, **every one with a hint** |
| Independent practice | `practice` (independent) | ≥3 questions, **no hints revealed** |
| Four-skill integration | `four-skills` | Reading passage + writing task (with model answer) + listening script (spoken via TTS) + speaking task (sentence frames, self-check, optional in-browser recording) |
| Multilingual support | `language-support` | Hand-checked Urdu/Hindi glosses — every string must exist in the validated glossary (§3) |
| Lesson summary | `summary` | ≥4 takeaways |
| Revision | `revision` | ≥3 self-checked recall questions from earlier lessons (first lesson of the programme exempt) |
| Homework | `homework` | ≥2 practical tasks |
| Assignment | `assignment` | Free-production writing task with word-count gates |

Beginner style rules (Pre-A1/A1): simple English first — e.g. *"A noun is the
name of a person, place, animal or thing"* before any linguistic terminology;
average sentence length ≤ 20 words; no sentence over 34 words (enforced by the
validator on the lesson prose).

## 2. Structured content — never a giant component

Lessons are authored as **typed data** in `src/data/programme/` and seeded into
the CMS database (levels → courses → modules → chapters → lessons → blocks).
Rendering goes through one shared block renderer — 24 CMS block types
(`src/data/cms/types.ts`), each with a dedicated view component. Adding lessons
means adding data, never new pages.

## 3. Multilingual support (Urdu · Hindi)

- English remains the primary learning language. Translations are an optional
  bridge, shown in a dedicated card the learner can hide.
- All Urdu/Hindi strings live in **one validated glossary**:
  `src/data/programme/v2/glossary.ts`. The authoring helper `gls("English key")`
  performs the lookup and **throws** on any key that is not in the glossary —
  unvalidated translations cannot reach the database.
- The validator re-checks every rendered translation against the glossary set.
- Translations are hand-written in standard educational register (Urdu in
  Nastaliq script with `dir="rtl"`, Hindi in Devanagari). Machine translation
  is never used.
- Rendering relies on the learner's system fonts with correct `lang`/`dir`
  attributes (all mainstream OSes ship Urdu and Devanagari fonts).

## 4. Educational review pipeline

Review status is a separate dimension from publication, answering one
question: *who has checked the teaching quality of this content?*

```
draft ──ai-review──▶ ai-reviewed ──human-review──▶ human-reviewed ──approve──▶ approved
                        ▲                                                   │
                        └──────────────────── revoke ────────────────────────┘
```

- **ai-review** (editor+): machine validation passed — structure, examples,
  answer keys, glossary-bound translations, reading difficulty.
- **human-review** (teacher+): a human teacher confirms teaching quality.
- **approve** (admin): final sign-off. "Published" is the derived terminal
  state: approved review + live.
- **revoke** (admin): withdraw a human sign-off — status returns to
  ai-reviewed (the content's AI provenance is unchanged).

Invariants (tested in `tests/programme-v2.test.ts`):

1. **AI-authored content is never labelled above "ai-reviewed"** — the seed
   stores every programme lesson as `ai-reviewed`, never higher.
2. **Editing content resets review to `draft`** — a review attaches to the
   reviewed text, not to whatever replaces it.
3. **Role gates are enforced server-side** — editors cannot human-review;
   teachers cannot approve; only admins sign off or revoke.
4. **Every transition is audited** (`CmsAuditLog`, action `lesson.review.*`).
5. **Human promotions survive reseeds when content is unchanged**, and reset
   to `ai-reviewed` when content changes.
6. Learners see an honest provenance badge on every lesson
   ("AI-reviewed content" until a human promotes it).

Staff operate the pipeline in **Admin → Curriculum** (badges on every lesson
row) and the **Lesson Editor** header (role-gated action buttons), via
`POST /api/cms/admin/lessons/[id]/review`.

## 5. Validation — the definition of done for a batch

`bun scripts/validate-programme.ts` runs two validators:

1. **PROMPT 34 blueprint integrity** — 56 chapters, 266 lessons, strands,
   prerequisites, no cloned lessons (unchanged guarantees).
2. **v2 teaching standard** — for every `v2-full` chapter: the full section
   structure of §1, example counts and domain spread, mistake format,
   guided-with-hints / independent-without-hints, four-skills completeness,
   glossary-bound translations, beginner reading difficulty, no placeholders.

A production batch is done when both validators report **0 issues** and the
manifest (§6) is updated.

## 6. Production manifest — honest status

Source of truth: `src/data/programme/v2/manifest.ts` (resolved against the
blueprint — titles can never drift), exported as `V2_MANIFEST`.

**Current state (updated 2026-11-13):**

| Batch | Chapters | Standard | Status |
| --- | --- | --- | --- |
| 1 | CH-01 Introduction to English · CH-02 English Alphabet · CH-03 Vowels and Consonants | **v2-full** (15 lessons) | **Delivered** — validators at 0 issues, all lessons `ai-reviewed` |
| 2 | CH-04 Introduction to Phonics · CH-05 Word Reading and Spelling | v1-baseline | Planned next |
| 3 | CH-06 – CH-08 (completes Pre-A1) | v1-baseline | Planned |
| 4–6 | CH-09 – CH-18 (A1) | v1-baseline | Planned |
| 7–9 | CH-19 – CH-28 (A2) | v1-baseline | Planned |
| 10–12 | CH-29 – CH-38 (B1) | v1-baseline | Planned |
| 13–15 | CH-39 – CH-48 (B2) | v1-baseline | Planned |
| 16–17 | CH-49 – CH-56 (C1) | v1-baseline | Planned |

**v1-baseline** chapters keep their PROMPT 34 content: real teaching blocks,
exercises, assignments, homework and chapter-review questions — usable lessons,
but not yet at the §1 standard. The platform never shows empty shells; a
chapter switches from baseline to v2-full only when every lesson in it passes
both validators.

## 7. Production workflow per batch

1. Author the chapter's `LessonUpgrade` file in `src/data/programme/v2/`
   (blocks + practice sets + glossary entries for any new translations).
2. Register the chapter in `V2_UPGRADES` and flip its manifest entry to
   `v2-full` with the batch number and date.
3. `bun scripts/validate-programme.ts` → fix until 0 issues.
4. `bun run test` → 0 failures (the chain reseeds `db/test.db` first).
5. `bun scripts/seed-programme.ts` against the dev database (bump
   `PROGRAMME_SEED_VERSION` when base content changes).
6. Human review of the batch in the CMS (§4), then publication.
7. Update this document's table.

## 8. Where things live

| Artefact | Path |
| --- | --- |
| Teaching block types (24) | `src/data/cms/types.ts` |
| Block renderers (learner) | `src/components/app/lesson/blocks/section-blocks.tsx` (+ content/media/grammar blocks) |
| Block editors (staff) | `src/components/app/admin/BlockEditor.tsx` |
| Review pipeline (service) | `src/lib/cms/service.ts` → `lessonReviewAction` |
| Review API | `src/app/api/cms/admin/lessons/[id]/review/route.ts` |
| Glossary | `src/data/programme/v2/glossary.ts` |
| Delivered content | `src/data/programme/v2/ch-01.ts`, `ch-02.ts`, `ch-03.ts` |
| Manifest | `src/data/programme/v2/manifest.ts` |
| Validators | `validateProgramme` + `validateV2Standard` in `src/data/programme/index.ts` |
| Seed | `scripts/seed-programme.ts` (version 2) |
| Tests | `tests/programme-v2.test.ts`, `tests/programme.test.ts` |
