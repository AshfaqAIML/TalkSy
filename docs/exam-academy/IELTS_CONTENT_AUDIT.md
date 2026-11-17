# IELTS Content Audit — PROMPT 41

**Scope:** every IELTS course, chapter, lesson, topic, reading/listening/writing/speaking exercise, mock test, question bank item and scoring rubric in the TalkSy Exam Preparation Academy.
**Date:** 2026-11-14. **Method:** `scripts/exam-content-audit.ts` (database ground truth), `scripts/meta-coverage.ts` (explanation coverage), live API smoke (`scripts/live-academy-smoke.sh`), direct reading of the authored sources in `src/data/exams/ielts/` and `scripts/seed-exams.ts`.

---

## 0. Critical finding first: the content existed but the live site served none of it

Before this audit, the examination tables in the dev database (`db/custom.db`, `DATABASE_URL` in `.env`) were **empty**: `TestSpecification 0, MockTest 0, MockTestQuestion 0, ExamRubric 0, ExamPathway 0`. The running site therefore served an empty academy — `GET /api/exams/overview` returned `"exams": []`, the mock library was empty, both pathways 404'd ("Unknown exam"), and `ielts-academy-core` course pages 404'd. The UI sections existed; the educational substance behind them did not. This is exactly the "placeholder" condition the audit was asked to investigate — in the strongest form: not thin content, but *absent* content at runtime.

Root cause: the IELTS Academy is authored as typed data (`src/data/exams/ielts/`, seeded by `scripts/seed-exams.ts`), but that seeder was never run against the live dev database. The test chain (`bun run test`) seeds only `seed-programme.ts` into `db/test.db`; exam tests create their own fixtures. Nothing in the workflow ever put the authored exam content into `custom.db`.

**Fix applied during this audit (Stage 0 of the replacement plan):** `bun scripts/seed-exams.ts` run against the live DB (idempotent, additive; no existing content was deleted). Verified end-to-end: 3 active specs, 29 published mocks, 220 questions, 4 rubrics, 3 pathways (150 steps), 55 IELTS lessons live; answer keys stripped in safe player projections; search index now carries 71 IELTS entries. Every number below is the post-seed database ground truth.

## 1. How the content is stored (PROMPT 41 §5)

| Layer | Storage | Loaded by |
| --- | --- | --- |
| IELTS courses/modules/units/lessons | Authored TypeScript (`src/data/exams/ielts/m1…m7`) → seeded into CMS tables (`CmsCourse/Module/Unit/Lesson/LessonBlock`) as real database records, editable in the admin UI like any course | `/api/cms/courses/*`, `/api/cms/lessons/*` |
| Lesson practice questions | Authored `ExerciseSpec` → `CmsQuestion` rows (stable slugs `<lesson>-qN`, version snapshots, status published) | Lesson player via block `exerciseIds`; practice engine |
| Mock library | Authored `MockSeed` → `MockTest/MockTestSection/MockTestQuestion` rows (answer keys server-only) | `/api/exams/mocks/*`, six-mode practice assembly |
| Difficulty + post-submission explanations for the legacy mocks | Authored enrichment maps (`scripts/exam-meta-*.ts`), applied idempotently by the seeder | Grading + result views |
| Rubrics, specs, pathways | Authored seed data → `ExamRubric`, `TestSpecification`, `ExamPathway*` rows | Evaluation service, spec engine, pathway views |

No hardcoded lesson delivery, no JSON blobs read at runtime without validation: every structured column is parsed by the Zod schemas in `src/lib/exams/types.ts`; the ielts-academy test contract asserts every mock question validates and every answer key is solvable. **No duplicate content found**: the Academic and General Training banks are structurally separate (test-enforced), and the common-curriculum references (Grammar School, Reading Room, …) are re-used by slug, never duplicated.

## 2. Inventory and A–E classification

Classification scale (PROMPT 41 §3): **A** Placeholder · **B** Incomplete · **C** Substantive · **D** Examination-ready practice · **E** Reviewed (passed educational + technical quality checks).

### 2.1 Test specification — **D**, honestly sourced

| Item | Value |
| --- | --- |
| IELTS Academic v1 | active, effective 2026-07-01, reviewed 2026-11-12, 4 sections (L 1800s/40q · R 3600s/40q · W 3600s · S 780s), 7 task types, 9 official source refs |
| IELTS General Training v1 | active, same review date, 8 task types (adds GT reading families) |
| Scoring model | IELTS band 0–9; overall = mean rounded to nearest half (.25/.75 up) — matches the official rule |
| Format currency | Verified against the official provider pages on 2026-11-12 (computer-delivered only since mid-2026; no transfer time; Task 2 weighted double; Speaking 11–14 min). **No outdated task types or scoring rules found** |

### 2.2 Courses, chapters, lessons — 55 lessons, all **C** (substantive), none A/B

Post-seed database facts (audited lesson-by-lesson):

| Course | Modules | Lessons | Minutes | Teaching words | Bank questions |
| --- | --- | --- | --- | --- | --- |
| `ielts-academy-core` (M1, 2, 5, 6, 7, 8) | 6 | 34 | 447 | 172–498 per lesson | 63 |
| `ielts-academy-academic` (M3A, M4A) | 2 | 13 | 196 | 118–314 per lesson | 16 |
| `ielts-academy-general-training` (M3G, M4G) | 2 | 8 | 118 | 116–246 per lesson | 15 |
| **Total** | **10** | **55** | **761 (12.7 h)** | **13,271** (avg 241/lesson) | **94** |

Every lesson carries: 3–10 teaching blocks (headings, text, tables, grammar rules, worked examples, dialogues, warnings), 1–3 practice questions with full feedback payloads (correct answer + explanation + why-wrong), homework; the writing lessons additionally carry timed assignments with word limits. Verified samples (not claims — read in full during this audit): `ielts-speaking-part2` (cue-card anatomy, four-corner note method, six description families with the exact high-value move per family, two failure modes with cures — 429 teaching words, 8 blocks), `ielts-gwriting-t2` (Academic-vs-GT register table, semi-formal discipline rule with examples, a genuinely discriminating MCQ with full register feedback).

**Thin-lesson watchlist** (substantive but lightest — first targets of the depth pass, Stage 4): `ielts-greading-overview` (116 w), `ielts-gwriting-t2` (130 w), `ielts-awriting-t2-cohesion` (118 w), `ielts-areading-overview` (143 w). None of these is placeholder — each has real teaching content — but each would benefit from worked examples.

### 2.3 Mock library — 26 IELTS mocks, all **D** (examination-ready practice)

| Bank | Mocks | Questions | Answer keys | Explanations | Difficulty |
| --- | --- | --- | --- | --- | --- |
| IELTS Academic | 14 (3 full + 4 section + 7 drills) | 97 | 63/63 objective items keyed | 97/97 | 97/97 |
| IELTS General Training | 12 (2 full + 4 section + 6 drills) | 88 | 63/63 objective items keyed | 88/88 | 88/88 |

Verified content properties (per-mock audit): original material only (every mock labelled "not an official IELTS paper"); real listening scripts (per full mock 421–448 words; Listening section mock 629 words) with distractors built in ("0776 6…" phone-number traps, "the first → the fourth of March" date correction); real reading passages (870–2,080 words per mock; 1,428-word TFNG drill passage); official-style stems ("Write ONE WORD AND/OR A NUMBER"); answer keys with alternatives and number tolerance; official section timings (L 1800s · R 3600s · W 3600s · S 780s); constructed tasks all carry `rubricKey` (56/56 resolve — 0 unresolved); every item carries a post-submission explanation (source-level 0/N for legacy mocks is resolved by the seeder's enrichment maps — verified 169/169 at source, 220/220 in the database).

**Honesty gap (recorded, not hidden):** every full mock is *sample length* (15–20 questions across 4 sections) and says so in its directions ("Official section: 30 minutes for 40 questions; this sample has 4 items"). This is correctly labelled but is not full-length examination practice — see the replacement plan, Stage 2.

### 2.4 Scoring rubrics — **D**

`ielts.writing` and `ielts.speaking`: full band ladders 9→3, official four criteria at every level, fully worded descriptors (verified level-by-level). Both are practice summaries of the public band descriptors, with source refs.

### 2.5 Pathways — **B+** (functional, imprecise)

Academic pathway: 4 phases, 68 steps (46 curriculum + 14 drill + 8 division-bridge refs). GT pathway: 60 steps. All 54 IELTS-lesson references verified to resolve to live lessons (seeder assertion, re-run during this audit). Weakness: **28 of 128 IELTS pathway steps are free-text drills with no `refId`** — they all resolve to the generic mock-library page instead of the specific mock/drill the label names ("Drill: TFNG vs YNNG" → should open that exact drill). Stage 3 of the replacement plan.

### 2.6 Review state — **E: not yet earned, and now honestly labelled**

The content is verified by the machine contract (`tests/ielts-academy.test.ts`: payload schemas, solvable keys, bank separation, reference resolution) but has not passed a human review chain. Before this audit the seeder left `reviewStatus` at its default "draft" while lessons were live — an honesty defect. **Fixed in this audit:** the seeder now applies the programme convention (seeded content = `ai-reviewed`; a human-reviewed badge survives only while content is unchanged). All 55 lessons now read `ai-reviewed/approved/live`, matching the 266 programme lessons. Human review remains open work (Stage 5) — no lesson is claimed "E" today.

## 3. Gap analysis (PROMPT 41 §4, IELTS Academic + General Training)

| Dimension | Present | Missing / action |
| --- | --- | --- |
| Chapters & lessons | 8 modules → 3 courses, 55 lessons, 12.7 h | Depth pass on 4 lightest lessons; no structural gaps |
| Topics covered | Orientation (incl. UKVI/Life Skills/One Skill Retake), all four Listening skill families, Speaking Parts 1–3, Academic + GT Reading section craft, Academic Task 1 chart/process/map families, five essay families, GT letter tones, full band ladder 4.0→9.0, exam strategies, mock system | None missing at syllabus level |
| Placeholder content | **None found** after seeding (pre-audit, the *site* was the placeholder) | — |
| Outdated material | None — spec v2 verified against official pages 2026-11-12 | — |
| Practice questions | 220 mock questions + 94 lesson bank questions | Volume: mocks are sample-length; full-length sections needed (Stage 2) |
| Answer explanations | 220/220 mock + 94/94 lesson (feedback payloads verified) | — |
| Assessment rubrics | 2 complete ladders | None missing for IELTS |
| Mock examinations | 5 full simulations (3 Academic + 2 GT), all sections as mocks, 13 drills | Full-length versions (Stage 2); more per section for the assembly pool (Stage 6) |

## 4. Defects found and fixed during this audit

| # | Defect | Fix |
| --- | --- | --- |
| 1 | Live DB had zero exam content; academy served empty states | Seeder run against `db/custom.db`; end-to-end verified (this document §0) |
| 2 | `toefl.speaking` rubric skipped band 5 (6→4) — see the TOEFL audit | Band-5 level authored and seeded (affects this audit only via the shared seeder) |
| 3 | IELTS lessons live with `reviewStatus: "draft"` (default) — dishonest labelling | Seeder now seeds `ai-reviewed` and preserves human-reviewed only while content is unchanged (programme convention) |

## 5. Verification performed in this audit

- `bun scripts/seed-exams.ts` (twice — idempotency confirmed: second run applied 0 enrichment changes, 0 duplicate mocks; pathways rebuilt by design)
- `bun scripts/exam-content-audit.ts` — full DB inventory (output preserved in the audit trail)
- `bun scripts/meta-coverage.ts` — 169/169 library questions have explanations at source
- Live smoke: login → overview (3 exams) → pathway (Academic 68 steps, GT 60, TOEFL 22) → mocks list → TOEFL mock player data (answer keys stripped: verified) → lesson player `ielts-speaking-part2` (10 blocks, `ai-reviewed`) → search index (71 IELTS entries)
- No existing content was deleted at any point; the seeder is additive and idempotent (PROMPT 41 §7 respected)

## 6. Verdict

The IELTS Academy's *authored* content is genuine examination preparation material — not placeholder: 55 substantive lessons, 26 examination-ready mocks with solvable keys and per-item explanations, complete rubrics, a format-current specification, and an honest labelling regime. What made the site look like a placeholder was a delivery failure: none of it was in the live database. That failure is now fixed and verified, and the remaining work (full-length mocks, pathway precision, human review, thin-lesson depth) is scheduled in `CONTENT_REPLACEMENT_PLAN.md` without any of it being claimed as done.
