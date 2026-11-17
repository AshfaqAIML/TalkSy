# Exam Academy — Textbook Production (PROMPT 43)

**Standard:** v3.0.1 (`src/data/exam-academy/textbook-standard.ts`) — every published exam lesson is a self-contained teaching resource: lesson overview, outcomes, examination relevance, concept teaching, ≥6 worked examples with notes, common mistakes, guided practice (progressive hints) + independent practice (no hints) with full answer explanations, examination strategy, revision sourced from earlier lessons, and homework. Depth floors: ≥350 teaching words (I-M1, T-M1) / ≥500 elsewhere; ≥5 questions (≥2 guided, ≥2 independent); ≥10 blocks.

**Workflow per batch (3–5 chapters):** author lessons → original exercises → validate answers (`scripts/validate-exam-textbook.ts`) → progression review (revision `from` labels) → save → seed (`scripts/seed-exams.ts`) → verify persistence (`scripts/exam-inventory.ts`) → update content status (manifest) → update this table. Review status follows the honesty convention: `ai-reviewed`, never silently higher.

**Production manifest:** `TEXTBOOK_MANIFEST` in `src/data/exam-academy/textbook-standard.ts`, resolved against the PROMPT 42 blueprint (v2.3.0). A chapter is listed only after its batch passes validation and DB verification.

| Batch | Chapters | Lessons | Status |
| --- | --- | --- | --- |
| 1 | I-M1 orientation / scores-and-assessment / strategy-and-time / delivery-and-test-day | 13 (12 deepened + 1 new) | **Delivered & verified** — 2026-11-14 |
| 2 | I-M2 listening-craft / completion-tasks / objective-tasks / listening-skills / parts-in-depth | 12 (7 deepened + 5 new) | **Delivered & verified** — 2026-11-14 — *superseded by batch 4* |
| 3 | T-M1 toefl-orientation / toefl-scores / toefl-strategy | 8 (all new; first TOEFL lessons anywhere) | **Delivered & verified** — 2026-11-14 |
| 4 | I-M2 exam-fundamentals / core-skills / question-types / parts-in-depth (PROMPT 44 Listening Masterclass restructure) | 31 (5 kept, 26 new; the 12 batch-2 lessons absorbed, 7 retired archived) | **Delivered & verified** — 2026-11-14 |
| 5 | IA-M3 reading-foundations / question-types · IG-M3 gt-reading-practical (PROMPT 45 Reading Masterclass) | 35 | **Delivered & verified** — 2026-11-14 |
| 6 | IA-M4/IA-M5 + IG-M4/IG-M5 writing chapters (PROMPT 46 Writing Masterclass) | 57 | **Delivered & verified** — 2026-11-14 |
| 7 | I-M6/I-M7/I-M8 speaking chapters (PROMPT 47 Speaking Masterclass) | 69 | **Delivered & verified** — 2026-11-15 |
| 8 | T-M2–T-M7: all 18 remaining TOEFL chapters (PROMPT 48 — the complete TOEFL iBT 2026 Masterclass) | 38 (all new) | **Delivered & verified** — 2026-11-15 |
| 9+ | remaining 8 blueprint lessons (I-M9/I-M10 provisional depth lessons) | 8 | Planned |

**Verified state (2026-11-15, post PROMPT 48):** full chain `bun run test` 842/842 green; `tsc --noEmit` clean; `bun run lint` clean. Dev DB seeded — 294 exam lessons live, of which the TOEFL iBT Academy carries all seven blueprint modules (46 lessons: 8/8/10/6/5/6/3). The TOEFL mock library holds ten originals: the sample mock, four section mocks at official scale (Reading 35 raw points / ~30 min, Listening 35 / ~29 min, Writing 12 items / ~23 min, Speaking 11 items / ~8 min), the four-section Full Mock 1 at official item counts (79 questions), and the three-part Adaptive Simulation family (Stage 1 routing → Upper/Lower at a fixed, honestly-labelled 60% threshold) with a result-view routing card. The TOEFL pathway runs eight phases / 65 steps — every step carries a `refId` (curriculum lessons verified live, mock steps titled). Blueprint v2.3.0 with all 46 TOEFL lessons flipped `new → existing`; docs regenerated (`scripts/generate-blueprint-docs.ts`). A data repair (`scripts/fix-toefl-mock-answers.ts`) backfilled the engine's dual-key answer shape on the nine sentence-reconstruction items of the two early TOEFL mocks. Contract test: `tests/toefl-academy.test.ts` (21 checks).
