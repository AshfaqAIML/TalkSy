# Exam Academy — Curriculum Blueprint v2.3.0

**Status:** design baseline, approved for staged implementation · **Date:** 2026-11-15 · **Supersedes:** the v1 module architecture shipped in the current academy (see §3)
> Generated from the versioned blueprint data in `src/data/exam-academy/` by `scripts/generate-blueprint-docs.ts` — edit the data, then regenerate. Structural guarantees (topic coverage, migration mapping, pathway integrity) are enforced by `scripts/validate-exam-blueprint.ts` and `tests/exam-blueprint.test.ts`.

This is the complete educational blueprint for TalkSy's IELTS and TOEFL academies, built on the current official examination specifications. It defines three IELTS preparation pathways (Academic, General Training, and the UKVI delivery-guidance annex), the seven-module TOEFL iBT academy for the format in force since 21 January 2026, per-module specifications (description, objectives, chapters, lessons, prerequisites, study time, practice, assessments, completion criteria), and the score-target pathways from IELTS Band 5.0 to 8.5+ and TOEFL Bands 3.0–6.0.

- **PART A (IELTS) and PART C detail:** `IELTS_CURRICULUM_BLUEPRINT.md`
- **PART B (TOEFL) and PART C detail:** `TOEFL_CURRICULUM_BLUEPRINT.md`
- **PART D (score targets):** §7 below
- **Companion audits:** `IELTS_CONTENT_AUDIT.md`, `TOEFL_CONTENT_AUDIT.md`, `CONTENT_REPLACEMENT_PLAN.md` (PROMPT 41)

## 1. Official reference basis

The blueprint rests on the providers' own pages (retrieval dates recorded); preparation blogs were used only to cross-check reproductions of ETS-published tables, never as authority. In the application itself, the three active `TestSpecification` rows remain the only source of exam rules (the existing ADR).

| Examination | Official source | Retrieved | What it anchors |
| --- | --- | --- | --- |
| IELTS — test format | https://ielts.org/take-a-test/test-types/ielts-academic-test | 2026-11-14 | Section timings (L ~30 min · R 60 · W 60 · S 11–14), 2 h 45 total, Speaking/Listening identical across variants |
| IELTS — scoring in detail | https://ielts.org/take-a-test/your-results/ielts-scoring-in-detail | 2026-11-14 | Overall = mean rounded to nearest half (.25/.75 up); official raw anchors; Writing and Speaking criteria |
| IELTS — General Training Reading format | https://ielts.org/take-a-test/test-types/ielts-general-training-test/ielts-general-training-format-reading | 2026-11-14 | Section 1 (2–3 short texts), Section 2 (two workplace texts), Section 3 (one long text) |
| IELTS — UKVI / Life Skills | https://ielts.org/take-a-test/test-types/ielts-tests-for-uk-visas-and-immigration | 2026-11-12 | SELT delivery, Life Skills A1/A2/B1, in-person at approved centres |
| TOEFL — test content | https://www.ets.org/toefl/test-takers/ibt/about/content.html | 2026-11-12 / 2026-11-14 | Section item counts (50/47/11/12), timings (~30/~29/~8/~23 min), official task names, ~2 h total, adaptive delivery |
| TOEFL — understanding scores | https://www.ets.org/toefl/test-takers/ibt/scores/understand-scores.html | 2026-11-12 | 1–6 scale in half steps; overall = mean of four sections rounded to nearest half band (5.125 → 5.0); 0–120 dual reporting 2026–2028 |
| TOEFL — score scale update | https://www.ets.org/toefl/institutions/ibt/score-scale-update.html | 2026-11-12 | Band ↔ retired 0–120/0–30 concordance and CEFR alignment (reproduced in PART D) |

## 2. Design principles

1. **Official specifications are the foundation.** Task types, item counts, timings and scoring rules come from ielts.org and ets.org with recorded retrieval dates. Where a provider publishes no table (TOEFL raw-to-band), the platform's practice conversions are labelled as estimates — never presented as official.
2. **Educational substance before surface.** Every module below is defined with objectives, lessons, practice, assessments and completion criteria before any UI work. PROMPT 41's red line carries forward: no UI cards for content that does not exist.
3. **Honest labelling everywhere.** `reviewStatus` never claims human review that did not happen; `lengthLabel: "full"` only at official item counts; no guaranteed scores anywhere (see §7 disclaimer).
4. **Shared where the test is shared; distinct where it differs.** IELTS Listening and Speaking are shared across variants (identical tests); Reading and Writing are strictly per track with separate banks (test-enforced). IELTS and TOEFL pools never mix.
5. **Migration without deletion.** All 55 live IELTS lessons are re-parented and kept — the validator asserts every live lesson is placed exactly once, and no TOEFL lesson is marked "existing" (the v1 academy had none).
6. **Machine-checked completeness.** The mandated topic lists are encoded as requirements; `scripts/validate-exam-blueprint.ts` fails if any topic lacks a covering lesson. At v2.3.0: 165 topics checked, 0 uncovered.
7. **Original material, trademark discipline.** All mock and practice material is original and labelled "not an official IELTS paper / ETS test"; IELTS and TOEFL are trademarks of their respective owners and are referenced only descriptively.

## 3. Current state → target state

The PROMPT 41 audits established the baseline; nothing there is claimed fixed by this document — the blueprint defines the target the implementation stages build toward.

| Pathway | v1 (audited) | v2 (this blueprint) | New lessons to author |
| --- | --- | --- | --- |
| IELTS Academic | 10 modules · 55 lessons · 761 min · 26 mocks (sample-length) | 10 modules · 188 lessons · 2478 min teaching · ~60 h study | 8 (31 unique Academic+shared) |
| IELTS General Training | shares 47 of the v1 lessons · 8 GT lessons · 12 GT mocks | 10 modules · 170 lessons · 2242 min teaching · ~55 h study | 8 (24 incl. shared; 4 GT-unique) |
| TOEFL iBT | 0 lessons · 3 mocks · zero dedicated lessons; pathway 22 steps, 11 free-text (TOEFL_CONTENT_AUDIT.md) | 7 modules · 46 lessons · 614 min teaching · ~21 h study | 0 (all new) |

Totals: 20 module definitions · 271 lesson definitions (263 existing + 8 new) · 112 new teaching minutes (~1.9 h) to author, plus bank questions (1–3 per lesson), timed assignments, and the S2 mock programme.

## 4. Architecture — connection to the existing TalkSy curriculum system

The blueprint plugs into the existing authored-data → seeder → CMS pipeline unchanged; it adds no new runtime concepts.

**Content pipeline.** Courses are authored as typed data (`CourseSpec` → `ModuleSpec` → `UnitSpec` → `LessonSpec` in `src/data/exams/`), seeded into the CMS chain (`CmsCourse` → `CmsModule` → `CmsUnit` → `CmsLesson` → blocks) by `scripts/seed-exams.ts` (idempotent, additive, `ai-reviewed` convention), and become editable admin content. Every lesson carries teaching blocks, 1–3 bank questions with full feedback payloads, and where relevant a timed assignment and homework. New lessons follow the S1 authoring conventions (≥180 teaching words, ≥5 blocks, 1–3 questions).

**Course plan (target state).**

| CMS course | Level | Modules |
| --- | --- | --- |
| `ielts-academy-core` | ielts-preparation | I-M1, I-M2, I-M6, I-M7, I-M8, I-M9, I-M10 (shared across variants) |
| `ielts-academy-academic` | ielts-preparation | IA-M3, IA-M4, IA-M5 |
| `ielts-academy-general-training` | ielts-preparation | IG-M3, IG-M4, IG-M5 |
| `toefl-ibt-academy` (new) | toefl-preparation (new) | T-M1 … T-M7 |

**Migration map (re-parenting, never deletion).** Six v1 module shells dissolve as their units/lessons move; four module slugs are retained with retitled numbers. Lesson slugs, blocks, bank questions, assignments and homework are untouched by the restructure.

| Target module | Target slug | Absorbs v1 |
| --- | --- | --- |
| I-M1 | `module-1-introduction` | `module-1-introduction`, `module-7-exam-strategies (time + exam-day lessons)` |
| I-M2 | `module-2-listening` | `module-2-listening` |
| I-M6 | `module-6-speaking-part-1` | `module-5-speaking (v1, absorbed by the PROMPT 47 Speaking Masterclass)` |
| I-M7 | `module-7-speaking-part-2` | `module-5-speaking (v1, absorbed by the PROMPT 47 Speaking Masterclass)` |
| I-M8 | `module-8-speaking-part-3` | `module-5-speaking (v1, absorbed by the PROMPT 47 Speaking Masterclass)` |
| I-M9 | `module-9-language-and-bands` | `module-6-band-development` |
| I-M10 | `module-10-full-practice` | `module-7-exam-strategies`, `module-8-mocks` |
| IA-M3 | `module-3a-academic-reading` | `module-3a-academic-reading` |
| IA-M4 | `module-4a-writing-task-1` | `module-4a-academic-writing (v1, absorbed by the PROMPT 46 masterclass)` |
| IA-M5 | `module-5a-writing-task-2` | `module-4a-academic-writing (Task 2 unit, absorbed by the PROMPT 46 masterclass)` |
| IG-M3 | `module-3g-gt-reading` | `module-3g-gt-reading` |
| IG-M4 | `module-4g-writing-task-1` | `module-4g-gt-writing (v1, absorbed by the PROMPT 46 masterclass)` |
| IG-M5 | `module-5g-writing-task-2` | `module-4g-gt-writing (Task 2 lesson, absorbed by the PROMPT 46 masterclass)` |

**Practice, mocks and scoring (already built, reused as-is).** The six-mode practice engine assembles section mocks from the published pools; `MockSeed` mocks carry difficulty, post-submission explanations, `source: original-practice`, `rubricKey` on constructed tasks, and server-only answer keys; the evaluation service grades writing/speaking against the `ielts.writing`/`ielts.speaking` (9→3) and `toefl.writing`/`toefl.speaking` (6→1) rubrics; band conversions follow the active specifications (IELTS official rounding; TOEFL practice conversions, honestly labelled). `ExamPathway` steps reference lessons, labs and mocks by `refType`/`refId` — S3 makes every step resolve to its exact target.

## 5. IELTS Academy structure (PART A overview)

Three preparation pathways. Academic and General Training each run ten modules in the PROMPT 42 structure; Listening and Speaking (identical tests) plus Fundamentals, the language/band module and Full Examination Practice are shared; Reading and Writing are strictly distinct per track. **IELTS for UKVI** is a delivery-guidance annex, not a parallel curriculum (same test under SELT conditions).

**IELTS Academic pathway** — modules: I-M1 → I-M2 → IA-M3 → IA-M4 → IA-M5 → I-M6 → I-M7 → I-M8 → I-M9 → I-M10.

| Code | Module | Chapters | Lessons | Existing + new | Lesson min | Study h |
| --- | --- | --- | --- | --- | --- | --- |
| I-M1 | Module 1 — IELTS Fundamentals | 4 | 13 | 13E + 0N | 168 | 5 |
| I-M2 | Module 2 — Listening Mastery | 4 | 31 | 31E + 0N | 390 | 7 |
| IA-M3 | Module 3 — Academic Reading Mastery | 2 | 28 | 28E + 0N | 348 | 6.5 |
| IA-M4 | Module 4 — Academic Writing Task 1 | 2 | 18 | 18E + 0N | 269 | 6 |
| IA-M5 | Module 5 — Academic Writing Task 2 | 2 | 9 | 9E + 0N | 142 | 6 |
| I-M6 | Module 6 — Speaking Foundations and Part 1 | 2 | 29 | 29E + 0N | 365 | 8 |
| I-M7 | Module 7 — Speaking Part 2: The Long Turn | 2 | 19 | 19E + 0N | 260 | 6 |
| I-M8 | Module 8 — Speaking Part 3 and Pronunciation | 2 | 21 | 21E + 0N | 271 | 6 |
| I-M9 | Module 9 — Vocabulary, Grammar and the Band Ladder | 4 | 13 | 6E + 7N | 183 | 5.5 |
| I-M10 | Module 10 — Full Examination Practice | 3 | 7 | 6E + 1N | 82 | 4 |

**IELTS General Training pathway** — modules: I-M1 → I-M2 → IG-M3 → IG-M4 → IG-M5 → I-M6 → I-M7 → I-M8 → I-M9 → I-M10.

| Code | Module | Chapters | Lessons | Existing + new | Lesson min | Study h |
| --- | --- | --- | --- | --- | --- | --- |
| I-M1 | Module 1 — IELTS Fundamentals | 4 | 13 | 13E + 0N | 168 | 5 |
| I-M2 | Module 2 — Listening Mastery | 4 | 31 | 31E + 0N | 390 | 7 |
| IG-M3 | Module 3 — General Training Reading Mastery | 1 | 7 | 7E + 0N | 81 | 2.5 |
| IG-M4 | Module 4 — General Training Writing Task 1: The Letter | 2 | 22 | 22E + 0N | 321 | 6.5 |
| IG-M5 | Module 5 — General Training Writing Task 2: The Everyday Essay | 2 | 8 | 8E + 0N | 121 | 4.5 |
| I-M6 | Module 6 — Speaking Foundations and Part 1 | 2 | 29 | 29E + 0N | 365 | 8 |
| I-M7 | Module 7 — Speaking Part 2: The Long Turn | 2 | 19 | 19E + 0N | 260 | 6 |
| I-M8 | Module 8 — Speaking Part 3 and Pronunciation | 2 | 21 | 21E + 0N | 271 | 6 |
| I-M9 | Module 9 — Vocabulary, Grammar and the Band Ladder | 4 | 13 | 6E + 7N | 183 | 5.5 |
| I-M10 | Module 10 — Full Examination Practice | 3 | 7 | 6E + 1N | 82 | 4 |

**IELTS for UKVI — preparation guidance (where applicable).** A Secure English Language Test (SELT): the same IELTS test — format, timing and difficulty — taken in person at an official IELTS for UKVI test centre, with the Test Report Form marked for UKVI purposes. Preparation is the pathway of the underlying variant; only booking, delivery and component-minimum rules differ.

- Choose UKVI only when your visa route requires a SELT; many sponsors and universities accept standard IELTS — check before booking
- Follow the Academic pathway for UKVI Academic or the General Training pathway for UKVI General Training — the tests are identical to standard IELTS, so the same lessons, mocks and rubrics apply
- It must be taken in person at an official IELTS for UKVI test centre — there is no home edition
- Component minimums are set by the visa route (for example 4.0 in every component at B1, 5.5 at B2, 7.0 at C1), so set a target per component, not just overall
- IELTS Life Skills (A1/A2/B1) is a different two-skill test (speaking and listening, Pass result) and is outside these four-skill pathways — see the ielts-ukvi-explained lesson for orientation
- Confirm retake options with your test centre before booking — visa routes treat retakes differently

Source: IELTS official — Tests for UK Visas and Immigration (https://ielts.org/take-a-test/test-types/ielts-tests-for-uk-visas-and-immigration).

## 6. TOEFL iBT Academy structure (PART B overview)

Built around the format effective **21 January 2026** (verified against ets.org — §1):

| Section | Items | Timing | Task types (official names) | Delivery |
| --- | --- | --- | --- | --- |
| Reading | 50 | ~30 min | Complete the Words · Read in Daily Life · Read an Academic Passage | Two-stage adaptive |
| Listening | 47 | ~29 min | Listen and Choose a Response · Listen to a Conversation · Listen to an Announcement · Listen to an Academic Talk | Two-stage adaptive, forward-only |
| Speaking | 11 | ~8 min | Listen and Repeat (7 sentences, 8/10/12 s windows) · Take an Interview (4 items) | Linear |
| Writing | 12 | ~23 min | Build a Sentence (10) · Write an Email · Write for an Academic Discussion | Linear |

~90 minutes of timed sections; allow ~2 hours overall (times and item counts vary as the test adapts). Scoring: section bands 1.0–6.0 in half steps; overall = mean of the four sections rounded to the nearest half band; CEFR printed on the report; a comparable 0–120 score dual-reported during the 2026–2028 transition. No pass mark — institutions set minimums.

**TOEFL iBT pathway** — modules: T-M1 → T-M2 → T-M3 → T-M4 → T-M5 → T-M6 → T-M7 · course `toefl-ibt-academy` ("TOEFL iBT Academy — 2026 Format Programme") under the new `toefl-preparation` level.

| Code | Module | Chapters | Lessons | Existing + new | Lesson min | Study h |
| --- | --- | --- | --- | --- | --- | --- |
| T-M1 | Module 1 — TOEFL Fundamentals | 3 | 8 | 8E + 0N | 103 | 3.5 |
| T-M2 | Module 2 — Reading | 3 | 8 | 8E + 0N | 110 | 3.5 |
| T-M3 | Module 3 — Listening | 3 | 10 | 10E + 0N | 135 | 4 |
| T-M4 | Module 4 — Writing | 4 | 6 | 6E + 0N | 82 | 3 |
| T-M5 | Module 5 — Speaking | 3 | 5 | 5E + 0N | 68 | 2.5 |
| T-M6 | Module 6 — TOEFL Grammar and Vocabulary | 3 | 6 | 6E + 0N | 78 | 2.5 |
| T-M7 | Module 7 — Full TOEFL Practice | 3 | 3 | 3E + 0N | 38 | 2 |

## 7. Score target pathways (PART D)

Score targets describe what to aim at and how to sequence preparation — they are not predictions and never guarantees. Estimated study hours are TalkSy planning heuristics based on guided-study experience (most learners need 60–150 focused hours per half band once within one band of target, and rates vary widely with intensity, input and starting level). Official anchors and concordances are cited per row; everything else is planning guidance.

### IELTS — Band 5.0 → 8.5+

Official raw-score anchors (out of 40, ielts.org): Listening Band 5/6/7/8 = 16/23/30/35 · Academic Reading = 15/23/30/35 · **GT Reading = 15 (Band 4) / 23 (Band 5) / 30 (Band 6) / 35 (Band 7)** — GT needs more raw marks than Academic for the same band. Overall = mean of the four section bands; .25 rounds up to .5, .75 up to the next whole band.

**Band 5.0 — Modest user (B1)** — Foundation and pre-sessional programmes; some work and training routes. Entry profile: A2+/B1−. Anchors: Listening 16/40 · Academic Reading 15/40 · GT Reading 23/40 (official anchors for Band 5; GT needs more raw marks than Academic). Strategy: Four 5.0 sections → mean 5.0 exactly, or carry with a stronger skill: L6.0 R5.0 W4.5 S5.0 → mean 5.0. Writing is usually the drag at this level — protect it with the letter/report minimums, not perfection. Emphasis: I-M1, I-M2, IA-M3, IG-M3, I-M9 (ladder lesson: `ielts-band-4-to-5`). Practice: One untimed baseline full mock; a section mock every 2–3 weeks; one timed full mock before test day. Estimated effort: **80–150 guided-study hours from A2+/B1−**.

**Band 5.5 — Modest-plus user (B1+)** — Foundation years; some conditional offers with English support. Entry profile: B1. Anchors: Between the Band 5 and Band 6 anchors (Listening 16–22/40 · Academic Reading 15–22/40 · GT Reading 23–29/40). Strategy: L6.0 R5.5 W5.0 S5.5 → mean 5.5 exactly. A 0.5 carry from Listening or Reading offsets the writing drag most candidates have here. Emphasis: I-M2, IA-M3, IG-M3, IA-M5, IG-M5, I-M9 (ladder lesson: `ielts-band-5-to-6`). Practice: Section mocks fortnightly; two timed full mocks before test day. Estimated effort: **100–180 guided-study hours from B1**.

**Band 6.0 — Competent user (B2−)** — Common undergraduate minimum; many nursing and training programmes. Entry profile: B1+. Anchors: Listening 23/40 · Academic Reading 23/40 · GT Reading 30/40 (official anchors for Band 6). Strategy: Four 6.0 sections → mean 6.0 exactly, or L6.5 R6.0 W5.5 S6.0 → mean 6.0. The GT raw anchor is the big honest note: GT Reading needs 30/40 where Academic needs 23/40. Emphasis: I-M2, IA-M3, IG-M3, IA-M5, IG-M5, I-M9 (ladder lesson: `ielts-band-5-to-6`). Practice: Section mocks fortnightly; two or three timed full mocks with five-step reviews. Estimated effort: **120–220 guided-study hours from B1+**.

**Band 6.5 — Competent-plus user (B2)** — The most common postgraduate minimum across universities. Entry profile: B1+/B2. Anchors: Listening ≈ 26–29/40 · Academic Reading ≈ 26–29/40 · GT Reading ≈ 31–34/40 (between the official Band 6 and Band 7 anchors). Strategy: L6.5 R6.5 W6.0 S6.0 → mean 6.25 → rounds UP to 6.5 (the .25 rule working for you). Writing at 6.0 is the realistic centre of this target; carry it with Listening/Reading at 6.5+. Emphasis: IA-M4, IA-M5, IG-M4, IG-M5, I-M8, I-M9 (ladder lessons: `ielts-band-5-to-6`, `ielts-band-6-to-7`). Practice: Monthly timed full mocks plus targeted section mocks; error-log discipline between sittings. Estimated effort: **150–260 guided-study hours from B1+/B2**.

**Band 7.0 — Good user (B2+/C1−)** — Competitive programmes; healthcare regulators in the UK commonly require 7.0 overall with component floors. Entry profile: B2. Anchors: Listening 30/40 · Academic Reading 30/40 · GT Reading 35/40 (official anchors for Band 7). Strategy: Four 7.0 sections → mean 7.0 exactly, or L7.5 R7.0 W6.5 S7.0 → mean 7.0. Component floors matter as much as the overall here — check the regulator's per-section minimum before planning. Emphasis: I-M9, IA-M5, I-M8, IA-M3, I-M2 (ladder lessons: `ielts-band-6-to-7`, `ielts-band-7-to-8`). Practice: Three or more timed full mocks; five-step review after every sitting; drill sessions on the previous mock's error taxonomy. Estimated effort: **200–320 guided-study hours from B2**.

**Band 7.5 — Good-plus user (C1)** — Elite programmes; some medical and legal licensing routes (7.5 overall with 7.0 components is a common pattern). Entry profile: B2+/C1. Anchors: Listening ≈ 31–34/40 · Academic Reading ≈ 31–34/40 · GT Reading ≈ 36–38/40 (between the official Band 7 and Band 8 anchors). Strategy: L8.0 R7.5 W7.0 S7.5 → mean 7.5 exactly. At this level the plan inverts: near-zero objective error (Listening/Reading) funds the writing and speaking depth. Emphasis: I-M9, IA-M4, IA-M5, I-M2, IA-M3 (ladder lesson: `ielts-band-7-to-8`). Practice: Monthly full mocks; section mocks on demand; precision drills on the two carrying sections. Estimated effort: **220–360 guided-study hours from B2+/C1**.

**Band 8.0 — Very good user (C1+)** — Selective scholarships, some linguistic and professional registrations. Entry profile: C1. Anchors: Listening 35/40 · Academic Reading 35/40 · GT Reading: Band 8 anchor not published (expect ≈38–39/40 in practice). Strategy: L8.5 R8.0 W7.5 S8.0 → mean 8.0 exactly. Consistency is the skill: no section below 7.5, error-free stretches in writing and speaking. Emphasis: I-M9, I-M10, IA-M5, I-M8 (ladder lessons: `ielts-band-7-to-8`, `ielts-band-8-to-9`). Practice: Regular full mocks with examiner-style reviews; style-level revision rather than technique acquisition. Estimated effort: **250–400 guided-study hours from C1**.

**Band 8.5+ — Expert-track user (C1+/C2)** — Near-expert requirements: interpreting, lecturing, a few fellowship and specialist routes. Entry profile: C1+/C2. Anchors: Listening ≈ 36–38/40 · Academic Reading ≈ 36–38/40 (38+/40 in practice for the top bands); GT Reading unpublished at this level. Strategy: L9.0 R8.5 W8.0 S8.5 → mean 8.5 exactly. Preparation is temperament and error-hunting, not new language: the 8→9 lesson and mock-cycle analysis carry it. Emphasis: I-M9, I-M10 (ladder lesson: `ielts-band-8-to-9`). Practice: Full mocks at exam cadence with forensic post-mock reviews; error budget near zero on objective sections. Estimated effort: **300–450 guided-study hours from C1+/C2**.

### TOEFL iBT — Bands 3.0 → 6.0 on the 1–6 scale

Bands 1.0–2.5 (A1–A2) are below the level TOEFL-specific preparation rewards: these learners follow the core English programme (Pre-A1→B1) first and enter this academy at B1. The ETS concordance for the full scale is reproduced in CURRICULUM_BLUEPRINT.md for reference. Overall = mean of the four section bands rounded to the nearest half band (ETS examples: 5.125 → 5.0; 5.25 → 5.5). Reading and Listening are adaptive and machine-scored; Speaking and Writing are rated against the scoring guides.

**Band 3.0 (B1; comparable 44–57 (ETS concordance))** — Pathway and foundation programmes; some community colleges. Entry profile: A2+/B1−. Strategy: R3.5 L3.0 S3.0 W3.0 → mean 3.125 → 3.0. Reading carries slightly at this level because Complete-the-Words rewards vocabulary built in the core programme. Emphasis: T-M1, T-M2, T-M3, T-M6. Practice: Baseline sample mock; task drills per item type; one section mock per section. Estimated effort: **80–150 guided-study hours from A2+/B1−**.

**Band 3.5 (B1+; comparable 58–71 (ETS concordance))** — Conditional admissions with English support; community colleges. Entry profile: B1. Strategy: R4.0 L3.5 S3.5 W3.0 → mean 3.5 exactly. Interview fluency (short, complete answers) is the cheapest gain here. Emphasis: T-M2, T-M3, T-M5, T-M6. Practice: Section mocks for Reading and Listening; Listen-and-Repeat window drills; fortnightly task sets. Estimated effort: **100–180 guided-study hours from B1**.

**Band 4.0 (B2; comparable 72–85 (ETS concordance))** — Most undergraduate programmes. Entry profile: B1+. Strategy: R4.5 L4.0 S4.0 W3.5 → mean 4.0 exactly. Build a working note system before speed: Listening answers live in notes at this band. Emphasis: T-M2, T-M3, T-M4, T-M5. Practice: Section tests at official timing; one full timed mock mid-preparation and one before test day. Estimated effort: **120–220 guided-study hours from B1+**.

**Band 4.5 (B2+; comparable 86–94 (ETS concordance))** — Most graduate programmes. Entry profile: B2. Strategy: R4.5 L4.5 S4.5 W4.5 → mean 4.5 exactly, or R5.0 L4.5 S4.5 W4.0 → mean 4.5. Email tone and discussion-post support are the usual separators at this band. Emphasis: T-M4, T-M5, T-M6, T-M7. Practice: Monthly full mocks; adaptive practice simulations; rubric-evaluated email and discussion tasks. Estimated effort: **150–260 guided-study hours from B2**.

**Band 5.0 (C1−; comparable 95–106 (ETS concordance))** — Competitive graduate programmes. Entry profile: B2+. Strategy: R5.0 L5.0 S5.0 W4.5 → mean 4.875 → 5.0 (the same rounding family as ETS's own 5.125 → 5.0 example, one step up). Writing is the typical drag; discussion-task depth funds it. Emphasis: T-M4, T-M5, T-M6, T-M7. Practice: Monthly full mocks with performance reports; adaptive simulations at exam cadence. Estimated effort: **180–300 guided-study hours from B2+**.

**Band 5.5 (C1; comparable 107–113 (ETS concordance))** — Top-20 universities and selective programmes. Entry profile: B2+/C1. Strategy: R5.5 L5.5 S5.0 W5.5 → mean 5.375 → 5.5. Precision everywhere: reconstruction accuracy near-perfect, interview answers complete, zero careless losses in the adaptive sections. Emphasis: T-M4, T-M5, T-M6, T-M7. Practice: Regular full-length mocks; per-item-type error budgets; rubric reviews with the evaluation service. Estimated effort: **220–360 guided-study hours from B2+/C1**.

**Band 6.0 (C2; comparable 114–120 (ETS concordance))** — Elite and near-native requirements. Entry profile: C1+. Strategy: R6.0 L6.0 S6.0 W6.0 → mean 6.0 exactly, or with one 5.5: 6.0/6.0/5.5/6.0 → mean 5.875 → 6.0. At the ceiling the error budget is the whole plan. Emphasis: T-M6, T-M7, T-M4, T-M5. Practice: Full mocks at exam cadence with forensic report reviews; error budget near zero on objective items. Estimated effort: **260–420 guided-study hours from C1+**.

**ETS concordance — 1–6 bands against the retired 0–120 scale** (dual-reported 2026–2028; reproduced from ETS's published table):

| Band | CEFR | Total (0–120) | Reading | Listening | Speaking | Writing |
| --- | --- | --- | --- | --- | --- | --- |
| 6.0 | C2 | 114–120 | 29–30 | 28–30 | 28–30 | 29–30 |
| 5.5 | C1 | 107–113 | 27–28 | 26–27 | 27 | 27–28 |
| 5.0 | C1 | 95–106 | 24–26 | 22–25 | 25–26 | 24–26 |
| 4.5 | B2 | 86–94 | 22–23 | 20–21 | 23–24 | 21–23 |
| 4.0 | B2 | 72–85 | 18–21 | 17–19 | 20–22 | 17–20 |
| 3.5 | B1 | 58–71 | 12–17 | 13–16 | 18–19 | 15–16 |
| 3.0 | B1 | 44–57 | 6–11 | 9–12 | 16–17 | 13–14 |
| 2.5 | A2 | 34–43 | 4–5 | 6–8 | 13–15 | 11–12 |
| 2.0 | A2 | 24–33 | 3 | 4–5 | 10–12 | 7–10 |
| 1.5 | A1 | 12–23 | 2 | 2–3 | 5–9 | 3–6 |
| 1.0 | A1 | 0–11 | 0–1 | 0–1 | 0–4 | 0–2 |

## 8. Workload and implementation sequencing

**New lessons by module.**

| Module | New lessons | New minutes |
| --- | --- | --- |
| I-M9 — Module 9 — Vocabulary, Grammar and the Band Ladder | 7 | 98 |
| I-M10 — Module 10 — Full Examination Practice | 1 | 14 |

**Sequencing** (extends `CONTENT_REPLACEMENT_PLAN.md`; priorities preserved, S1's six-module sketch superseded by the PROMPT 42 seven-module structure):

| Stage | Scope | Size | Acceptance |
| --- | --- | --- | --- |
| S1a (P0) | TOEFL teaching programme — author T-M1…T-M7 | 0 new lessons (614 min) + Reading/Listening section mocks + TOEFL pathway rewritten with real refIds | CONTENT_REPLACEMENT_PLAN.md S1 acceptance criteria apply unchanged |
| S1b (P1) | IELTS v2 restructure — re-parent the 55 lessons into the ten-module structure, retitle modules, dissolve the six absorbed module shells (upserts, no deletions) | 0 new lessons; seeder migration + `ielts-academy` test updates | Validator: all 55 placed exactly once (already green at blueprint level) |
| S1c (P1) | IELTS depth lessons — author the new lessons across I-M1…IG-M5 | 8 unique new lessons (8 on the Academic pathway + 8 on GT; 8 shared lessons author once) | each ≥180 teaching words, ≥5 blocks, 1–3 bank questions with full feedback; includes the S4 thin-lesson depth pass targets |
| S2 (P1) | Full-length mocks at official counts, both exams | IELTS: 1 full-length full mock per variant + per-section; TOEFL: full-length (50/47/11/12) + per-section | `lengthLabel: "full"` only at official counts (validator rule) |
| S3 (P1) | Pathway precision — every step a real reference | rewrite both IELTS pathways to the v2 module map; 0 steps without refId | pathway walker test |
| S5 (P2) | Human review pass | promote a representative sample from ai-reviewed to human-reviewed with change notes | review chain in admin; no bulk status writes |
| S6 (P3) | Pool expansion for six-mode assembly | grow per-section pools until section-wise practice assembles at official length without repetition | pool-depth metric in scripts/exam-content-audit.ts |

**Mock and practice requirements (S2).** Current: 26 IELTS mocks (sample-length) + 3 TOEFL mocks, all honestly labelled. Target: IELTS — one full-length mock per variant (Listening 40 items/4 parts; Reading 40 items over 3 passages totalling 2,150–2,750 words Academic / the three official GT sections; Writing 20/40 split; Speaking Parts 1–3) plus full-length section mocks for every section; TOEFL — one full-length mock at official counts (50/47/11/12) plus per-section full-length mocks; both exams keep per-item difficulty, explanations and rubric references on every new item.

## 9. Versioning policy

- This blueprint: semver (`BLUEPRINT_VERSION`). MAJOR = module-set/structure changes; MINOR = lessons added or re-parented within the structure; PATCH = wording/minutes corrections. Every change regenerates these documents.
- Examination specifications follow the existing admin versioning workflow (draft → active → retired; attempts pin their spec). If a provider changes format again, the change flows through spec versions and then a blueprint MINOR/MAJOR — never by editing mocks in place.
- The classification scale from PROMPT 41 (A placeholder → E reviewed) still applies to every content item this blueprint produces; nothing is "E" until the S5 human review chain actually runs.
