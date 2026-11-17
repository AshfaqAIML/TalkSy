# Exam Academy — Content Replacement Plan & Prioritised Backlog

**Companion to:** `IELTS_CONTENT_AUDIT.md`, `TOEFL_CONTENT_AUDIT.md` (PROMPT 41). **Date:** 2026-11-14.
**Objective:** turn the Exam Preparation Academy into a serious examination preparation academy — measured, prioritised, and honest about what is done versus planned. Nothing in this plan is claimed complete until its acceptance criteria have been verified.

---

## 0. Stage 0 — RESTORE LIVE DELIVERY (completed in this audit)

Before this audit the entire examination content layer was absent from the live database (both audits §0). Stage 0 closed that gap and was verified end-to-end:

| Action | Result (verified) |
| --- | --- |
| Run `scripts/seed-exams.ts` against the live dev DB | 3 specs active · 4 rubrics · 29 published mocks (26 IELTS + 3 TOEFL) · 220 questions (explanations 220/220, difficulty 220/220, objective keys 100%, rubric refs 56/56 resolved) · 3 pathways (150 steps) · 55 IELTS lessons approved+live · 94 lesson bank questions |
| Fix `toefl.speaking` rubric (band 5 was missing) | Ladder now complete 6→1, seeded and verified |
| Fix IELTS lesson review-status honesty (was `draft` while live) | All 55 lessons now `ai-reviewed/approved/live` — the programme convention; human-reviewed badges survive only while content is unchanged |
| Live verification | overview (3 exams) · pathways (Academic 68 steps, GT 60, TOEFL 22) · mock player data with answer keys stripped · lesson player serving blocks/exercises · search index carrying 71 IELTS entries · second seeder run idempotent (0 changes) |

**Standing rule adopted:** the seeder (not the test chain) is the delivery path for exam content into any environment; deployment checklists must include it. The `bun run test` chain continues to seed only the programme + test fixtures into `db/test.db` — exam tests remain self-sufficient.

## 1. Backlog overview

Priority = educational substance first (PROMPT 41's directive), then practice volume, then precision/UX of references, then review depth, then pool expansion. Effort is authoring-heavy; every stage ends with machine verification (existing contracts + new ones listed per stage).

| # | Stage | Priority | Effort | Depends on |
| --- | --- | --- | --- | --- |
| S1 | TOEFL teaching programme (dedicated lessons) | **P0 — the decisive gap** | Large (authoring ~40 lessons + seeder + tests) | Stage 0 ✔ |
| S2 | Full-length mocks, both exams | P1 | Large (authoring; item counts to official length) | S1 for TOEFL pacing lessons (recommended, not blocking) |
| S3 | Pathway precision (refId for every drill step) | P1 | Small–medium | S1/S2 (so targets exist to point at) |
| S4 | Thin-lesson depth pass (IELTS) | P2 | Medium | — |
| S5 | Human review pass (E classification) | P2 | Process (staff) | content stabilised after S1–S4 |
| S6 | Pool expansion for six-mode assembly | P3 | Rolling, follows S2 | S2 |

## 2. Stage detail, acceptance criteria and authoring conventions

### S1 — TOEFL teaching programme (P0)

**Why first:** TOEFL has 0 dedicated lessons (TOEFL audit §3.4) and a Phase-3 pathway of free-text labels (§3.5). This is the only remaining "placeholder" condition in the academy and the PROMPT's core concern.

**Scope — a dedicated TOEFL Academy course (`toefl-ibt-academy`), mirroring the IELTS module architecture, in a new authored source `src/data/exams/toefl/`:**

1. **Module 1 — Orientation** (5 lessons): what TOEFL iBT is and who needs it; the 2026 format section by section (reading two-stage adaptive, listening forward-only, speaking interview, writing reconstruction); the 1–6 band scale and dual reporting; computer-delivered test-day awareness; how this academy works.
2. **Module 2 — Reading craft** (6 lessons): Complete-the-Words technique (context + morphology, the `c___` masking discipline); two-stage adaptive strategy and pacing both modules; skim/scan under time pressure; paraphrase recognition; vocabulary-in-context; question-type strategy (MCQ single / select-2).
3. **Module 3 — Listening craft** (5 lessons): listen-and-choose response prediction; forward-only discipline (no replay under exam timing — why prediction matters); lecture note-taking; conversation inference; adaptive pacing.
4. **Module 4 — Speaking craft** (5 lessons): Listen-and-Repeat discipline (accuracy within 8/10/12-second windows); interview method (short, complete, fluent); the four interview families; pronunciation intelligibility (accent-safe, per the evaluation engine's safeguards); practice under the clock.
5. **Module 5 — Writing craft** (6 lessons): sentence reconstruction at speed (10 items ≈10 minutes); email register (everyday/campus situations); academic discussion response (state a position, react to classmates); language precision; time split across the 23 minutes; self-check protocol.
6. **Module 6 — Band ladder 1→6 + strategies + mock guide** (7 lessons): what each band means on each rubric; moving 3→4, 4→5, 5→6; time management across sections; handling difficult items; exam-day preparation; review strategies; the mock system (modes, kinds, cadence).
7. Section mocks for **Reading** and **Listening** (the two missing kinds — TOEFL audit §4) + one more Speaking and one more Writing section mock.

**Authoring conventions (all inherited from the IELTS sources, enforced the same way):** every lesson ≥180 teaching words with ≥5 teaching blocks; 1–3 bank questions per lesson with full feedback payloads; timed assignments on writing/speaking lessons; every mock question carries difficulty (1–5), a post-submission explanation, `source: "original-practice"` and `contentStatus: "published"`; every constructed task references its `rubricKey`; Academic/GT-style bank separation does not apply (single TOEFL variant) but IELTS/TOEFL pools never mix.

**Seeder:** extend `scripts/seed-exams.ts` (or a `seed-toefl.ts` sibling invoked from it) with the same idempotent upserts, the same `ai-reviewed` honesty convention, and TOEFL pathway Phase-3 steps rewritten to reference the new lessons and the new section mocks by `refId`.

**Acceptance criteria (must all pass before S1 is called done):**
- [ ] ≥35 TOEFL lessons live in the CMS (`approved` + `ai-reviewed` + blocks + questions)
- [ ] Reading and Listening section mocks published; TOEFL mock count ≥7
- [ ] TOEFL pathway: 0 steps without `refId`; every `href` opens the exact named target
- [ ] New test contract (`tests/toefl-academy.test.ts` or extension of the ielts one): payload validation, solvable keys, lesson-substance floor (words/blocks/questions), reference resolution — all green
- [ ] `tsc --noEmit`, `eslint`, full `bun run test` green; live smoke re-run
- [ ] Admin content collection for TOEFL reports the real lesson count (no longer 0)

### S2 — Full-length mocks (P1)

**Why:** every current mock is sample-length and labelled as such (IELTS audit §2.3) — honest, but not examination practice at official volume. A serious academy needs at least: IELTS — one full-length mock per variant (Listening 40 questions/4 parts heard once; Reading 40 questions over three passages totalling 2,150–2,750 words for Academic, the three official GT sections for GT; Writing Task 1 + 2 with the 20/40 split; Speaking Parts 1–3) and full-length section mocks for every section; TOEFL — one full-length mock at official counts (50 reading items incl. 30 Complete-the-Words; 47 listening; 11 speaking; 12 writing) plus per-section full-length mocks.

**Acceptance criteria:** mock `lengthLabel: "full"` only when item counts meet official numbers (a new validator assertion — the existing test contract gains a length-label truth check); timing = official section clocks; every item keeps the existing explanation/difficulty/rubric invariants; band conversion unchanged (raw-to-band tables already model full-length sections — the short-section scaling rule then becomes unnecessary for these mocks, which the scoring tests must cover).

### S3 — Pathway precision (P1)

**Why:** 28 IELTS + 11 TOEFL steps are free text that lands on the generic mock-library page (both audits §2.5/§3.5). Every drill step should deep-link to the exact mock (by a stable mock target id), every "review with the AI Tutor" step to the tutor route, and every onboarding step to the profile wizard.

**Scope:** add `refType: "mock"` with `refId` = stable mock identifier (title-keyed or a new stable slug column — decide against the existing `hrefForStep` switch so URLs survive retitling); update `hrefForStep` to resolve `#/exams/mocks/<id>`; seeder rewrites the affected steps; pathway progress is reset for re-seeded pathways only (documented seeder behaviour, unchanged).

**Acceptance:** a pathway walker test asserts every step's `href` returns 200 data and that the number of no-`refId` steps is 0 across all three pathways.

### S4 — Thin-lesson depth pass (P2, IELTS)

The four lightest lessons (IELTS audit §2.2 watchlist) get worked examples and model answers lifted to ≥200 teaching words, plus one additional bank question each. Acceptance: audit script re-run shows no IELTS lesson below 180 teaching words; question-bank QC clean.

### S5 — Human review pass (P2, process)

Run the existing admin review chain over all academy content: editor promotes a representative sample of lessons/questions from `ai-reviewed` to `human-reviewed` with change notes. Acceptance: review states visible in the admin UI; the audit docs' classification tables updated; **no bulk status writes** — the point is real review, not a status stamp.

### S6 — Pool expansion for six-mode assembly (P3, rolling)

After S2, grow the published pool per section until section-wise practice can assemble at official length without repetition within a learner's recent history. Acceptance measured by the assembly QC (no re-sampling of assembled sets — already enforced; add a pool-depth metric to `scripts/exam-content-audit.ts`).

## 3. Risks and standing constraints

- **No deleting existing content** (PROMPT 41 §7) — every stage is additive; the seeder's only destructive path is the documented pathway rebuild.
- **Trademark discipline** — all new material original; every mock keeps the "not an official IELTS paper / ETS test" integrity note; source refs must cite official provider pages with retrieval dates.
- **Honesty labels** — `lengthLabel` must reflect reality (new validator in S2); `reviewStatus` never claims human review that did not happen (Stage 0 fix sets the convention).
- **Spec discipline** — if a provider changes format again, the change flows through the admin spec-version workflow (impact → relink → activate), never by editing mocks in place; historical attempts stay pinned.
- **Bundle impact** — the IELTS banks already ship client-side; the TOEFL course adds authored data of comparable size to one IELTS module set. Monitor the known single-chunk limitation (FINAL_REDESIGN_AUDIT.md §9); route-level splitting stays a separate, non-blocking workstream.

## 4. What is done versus what is planned (summary)

**Done and verified (this audit):** live delivery restored; TOEFL band-5 rubric defect fixed; review-status honesty fixed; complete audit of both academies with per-item classification; this plan.

**Planned, not started, not claimed:** S2 full-length mocks · S3 pathway precision (TOEFL Phase 1 now resolved — batch 3) · S5 human review · S6 pool expansion. The next implementation stage is **S1**, specified above ready for authoring.

## 5. PROMPT 43 progress (2026-11-14) — supersedes parts of the stage table above

PROMPT 43 replaced the exam lessons' content model with a professional textbook standard (v3.0.1 — `docs/exam-academy/TEXTBOOK_PRODUCTION.md`). Delivered and verified so far, in three batches:

- **S4 (thin-lesson depth) — done for I-M1 and I-M2:** all 19 existing lessons in those modules rewritten at textbook depth (avg ~1,000 teaching words/lesson, worked examples, mistakes, guided + independent practice, full answer explanations); the four audit watchlist lessons are far above the old 180-word floor.
- **S1 (TOEFL teaching programme) — started, T-M1 delivered:** the first TOEFL lessons anywhere in the academy (8 lessons, `toefl-ibt-academy` course, new level, pathway Phase 1 rewired with curriculum `refId`s). T-M2–T-M7 remain to author (38 lessons).
- **S3 — partially:** the 11 free-text TOEFL Phase-1 steps are now deep-linked lessons; IELTS drill steps and remaining TOEFL phases still need `refId`s.
- Blueprint bumped to **2.1.0** (15 lessons flipped `new → existing` with migration honesty intact); `bun run test` 729/729; dev DB reseeded and verified (70 exam lessons live, 0 empty units).

S2, S5, S6 are unchanged and still planned, not claimed.

## 6. PROMPT 48 progress (2026-11-15) — S1, S2 and S3 complete for TOEFL

PROMPT 48 delivered the complete TOEFL iBT 2026 Masterclass (batch 8 in `docs/exam-academy/TEXTBOOK_PRODUCTION.md`):

- **S1 (TOEFL teaching programme) — complete:** all 46 blueprint lessons now authored at the v3 textbook standard (T-M1 batch 3 + T-M2–T-M7 batch 8: 38 new lessons, ~81,000 teaching words, 226 lesson questions). The `toefl-ibt-academy` course carries all seven modules (8/8/10/6/5/6/3 lessons); `ExamCourseView` now surfaces the course card for TOEFL (was IELTS-only).
- **S2 (full-length mocks at official counts) — complete for TOEFL:** seven new original mocks — Reading Section Mock 1 (3 Complete-the-Words texts + 18 comprehension, 35 raw points, ~30 min), Listening Section Mock 1 (35 questions across the four task families, ~29 min, part-level TTS recordings), Writing Section Mock 2 (official 12 items), the four-section Full Mock 1 (79 questions at official counts and timings), and the Adaptive Simulation family (Stage 1 routing → Stage 2 Upper/Lower), which mirrors the two-stage STRUCTURE with a fixed 60% threshold explicitly labelled a practice adaptation — ETS publishes no routing algorithm. A result-view routing card computes the learner's route.
- **S3 (pathway precision) — complete for TOEFL:** the pathway (now a typed data module, `src/data/exams/toefl/pathway.ts`) runs eight phases / 65 steps and **every step carries a `refId`** — curriculum steps verified live against the CMS, mock steps titled to library entries, bridging steps to the common curriculum.
- Repairs shipped with the batch: the engine's dual-key `SENTENCE_RECONSTRUCTION` answer shape backfilled on the nine affected items of the two early TOEFL mocks (`scripts/fix-toefl-mock-answers.ts`); T-M1 completion criteria corrected to eight lessons; blueprint bumped to 2.3.0 with all 46 TOEFL lessons `existing`; docs regenerated. Contract tests: `tests/toefl-academy.test.ts` (21 checks); full chain 842/842 green.

Remaining for the wider plan: S2 at official counts for IELTS mocks, S5 human review, S6 pool expansion — unchanged, planned, not claimed.
