# FINAL TOEFL AUDIT — PROMPT 56

**Date:** 2026-11-16 · **Auditor:** final release audit (`scripts/final-content-audit.ts`, database ground truth) · **Scope:** every TOEFL iBT course, chapter, lesson, exercise, mock, rubric, specification and practice bank in the TalkSy TOEFL Academy, against the format in force since 21 January 2026.

Every number below is measured from the live dev database or the authored, machine-validated sources.

---

## 1. What the academy is

One CMS course (`toefl-ibt-academy`) carries the seven-module blueprint (T1 fundamentals, T2 Reading, T3 Listening, T4 Writing, T5 Speaking, T6 language craft, T7 practice system); one pathway sequences it; the spec-driven engine delivers adaptive practice, mocks and 1–6 band scoring.

| Course | Modules | Chapters (active) | Live lessons | Teaching minutes | Teaching words |
| --- | --- | --- | --- | --- | --- |
| `toefl-ibt-academy` | 7 | 22 | 46 | 614 | 81,414 |

No archived TOEFL lessons; no shells. Every chapter passes all nine §1 dimensions (see the IELTS audit for the method — identical machinery).

## 2. Chapter-by-chapter verification (PROMPT 56 §1)

All 22 active chapters pass every measured dimension:

- **Complete lessons** — all 46 live lessons pass the PROMPT 55 completeness classifier (post-audit classifier fix applied — see IELTS audit §2; `toefl-time-management` was one of the 11 lessons the old classifier under-counted despite 13 rich blocks).
- **Explanations** — 81,414 teaching words across 46 lessons (≈ 1,770 per lesson), every chapter ≥ 1,800 words.
- **Examples** — 80 worked-example/dialogue/comparison blocks across the course (every chapter carries at least one).
- **Strategies** — 132 strategy-bearing blocks (pacing cards, note-taking systems, adaptive-test tactics, emergency protocols).
- **Original practice** — 269 published CMS exercises; **answer keys verified on every one** (PROMPT 55 engine, full scope: 0 blocking issues, 0 warnings).
- **Answer explanations** — every exercise feedback payload carries correct answer + explanation + why-wrong.
- **Difficulty** — every chapter's exercises span labelled difficulty.
- **Assessments** — 336 assessment activities (exercises + assignments/revision) across the course; chapter tests and the mock library beyond.

The placeholder scan (stub-sensitive, 12 marker patterns) returns **zero hits** across all TOEFL lesson blocks, exercises and mock questions.

## 3. Examination accuracy (PROMPT 56 §2) — the January 2026 specification

Verified against the official ETS pages fetched directly during this audit on **2026-11-16** (`ets.org/toefl/test-takers/ibt/about/content.html` and `.../scores/understand-scores.html`).

| Section | Platform | Official (2026 format) | Match |
| --- | --- | --- | --- |
| Reading | 1,800 s · 50 items · Complete the Words / Read in Daily Life / Read an Academic Passage · two-stage adaptive | 30 min · 50 items · same families · adaptive | ✓ |
| Listening | 1,740 s · 47 items · Listen and Choose a Response / Conversation / Announcement / Academic Talk · two-stage adaptive | 29 min · 47 items · same families · adaptive | ✓ |
| Writing | 1,380 s · 12 items · Build a Sentence (10) / Write an Email / Write for an Academic Discussion | 23 min · 12 items · same families | ✓ |
| Speaking | 480 s · 11 items · Listen and Repeat (7) / Take an Interview (4) | 8 min · 11 items · same families | ✓ |
| Scoring | 1–6 bands, half steps; overall = mean of four sections rounded to nearest half; 0–120 comparable overall during the two-year transition | official scale rules | ✓ |

**Fix applied during this audit:** the spec's section task-type lists previously used internal descriptions ("Multiple choice — single answer", "Sentence reconstruction"). They now carry the official ETS family names verbatim (Complete the Words, Read in Daily Life, Read an Academic Passage; Listen and Choose a Response, Listen to a Conversation, Listen to an Announcement, Listen to an Academic Talk; Build a Sentence, Write an Email, Write for an Academic Discussion; Listen and Repeat, Take an Interview), with the interaction descriptions kept in parentheses. Source references updated with today's verification date and the specific facts each page verified.

**Version history (structure preserved, not rewritten):** the task-type alignment changed spec content, so the seeder followed the PROMPT 55 rule — the previous row retired, a **v2 created and activated** (v1 remains in the database, status `retired`), historical attempts keep their pinned v1 specId forever, and the five published TOEFL mocks were relinked to v2 only after a structural-compatibility check (same section keys and timing — identical structure in this case; a structural change would refuse the relink). The validation engine now reports the mock library fully current: **0 blocking, 0 warnings**.

**Band descriptors:** TOEFL writing and speaking rubrics complete at 6 steps × 3 criteria (Development/Organization/Language use; Delivery/Language use/Topic development), every step fully worded.

**Adaptive practice configuration:** the platform's adaptive mode is a two-stage routing/upper/lower assembly that mirrors the official structure, with the honesty note that it is **not ETS's proprietary adaptive algorithm** — stated in the player and tested (`INTEGRITY_ADAPTIVE_NOTE`).

**Raw→band honesty:** ETS does not publish raw-to-band tables (official scoring is item-response based); the platform's conversions are labelled as TalkSy practice conversions in the spec notes.

## 4. Practice and mock inventory (all original material)

| Bank | Size | Validation |
| --- | --- | --- |
| Reading bank | 100 sets across the three official families (words / daily / academic) | `validate-toefl-library.ts` green |
| Listening bank | 100 sets across the four official families (response / conversation / announcement / talk) | validator green |
| Writing bank | 200 exercises (Build a Sentence, Email, Academic Discussion) — **every one carries a model response + response analysis** | `validate-toefl-ws-library.ts` green |
| Speaking bank | 100 items (Listen and Repeat with accent/window metadata + interview) | validator green |
| Mock library | 11 mocks — 2 full + 8 section + 1 adaptive simulation (3 stages: routing, upper, lower); 242 questions | payload schemas + answer keys (223/223 objective) + explanations (242/242) + official timing on every timed section, verified |

All items are original TalkSy practice content; no ETS material is reproduced.

## 5. End-to-end learner verification (PROMPT 56 §3–§5)

- `tests/exam-learner-journey.test.ts` — the full journey (diagnostic → plan → lesson → guided/independent practice → mock → results → weaknesses → revision → new assessment → persistence across refresh and re-login) runs on real route handlers; TOEFL is exercised by the same machinery (and its speaking/writing paths specifically by the two suites below).
- `tests/exam-production-validation.test.ts` — TOEFL email writing at two proficiency levels through the real evaluation service (weak < strong on the 1–6 scale), and Listen-and-Repeat accuracy **machine-verified with VERIFIED provenance — no AI score for accuracy tasks** (exact repeat scores 100; a partial repeat scores lower with the missed words reported). **13/13 pass.**
- `tests/exam-mock-matrix.test.ts` — the TOEFL Reading, Listening, Writing and Speaking mocks each verified end to end: official timing (1800/1740/1380/480 s), directions text, spec navigation policy (Listening **forward-only, no flagging**; others free navigation without flagging), no answer keys in the player projection, mid-attempt answer persistence after a simulated refresh, and submission results on the 1–6 scale with the honesty note. **9/9 pass.**

## 6. Honest limitations

1. **Human review: 0 sign-offs** — same honest state as the IELTS side: machine-validated, `ai-reviewed`-labelled content; the governance pipeline exists and is tested, but no human examiner has signed off in this environment, and AI never self-approves.
2. **Adaptive fidelity** — the adaptive simulation mirrors the official two-stage structure but is not ETS's item-response algorithm; the note is shown to learners.
3. **Speaking/listening audio** — speech-synthesis delivery of authored scripts (with accent labels), not studio recordings.
4. **Constructed-response scores are AI-assisted estimates** against official-style rubrics, always disclaimed as practice indications; accuracy tasks (Listen and Repeat, Build a Sentence) are machine-measured instead.
5. **Raw→band conversions are TalkSy practice tables** — ETS publishes none.

## 7. Verdict

The TOEFL Academy is release-ready against the January 2026 specification: the complete seven-module curriculum, machine-validated original banks across all ten official task families, official-format mocks (including the three-stage adaptive simulation), preserved spec history with correct relinking, honest 1–6 band scoring with machine-verified accuracy tasks, and a verified end-to-end journey. It claims no score guarantee and none is offered anywhere in the product.
