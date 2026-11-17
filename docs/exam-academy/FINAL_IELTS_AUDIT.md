# FINAL IELTS AUDIT — PROMPT 56

**Date:** 2026-11-16 · **Auditor:** final release audit (`scripts/final-content-audit.ts`, database ground truth) · **Scope:** every IELTS course, chapter, lesson, exercise, mock, rubric, specification and practice bank in the TalkSy IELTS Academy.

This is the closing audit of the IELTS Academy. Every number below is measured from the live dev database (`db/custom.db`, the database the running site serves) or from the authored, machine-validated sources — not asserted from documentation.

---

## 1. What the academy is

Three CMS courses carry the eight teaching modules; two pathways (Academic, General Training) sequence them; a spec-driven engine delivers practice, mocks and scoring.

| Course | Modules | Chapters (active) | Live lessons | Teaching minutes | Teaching words |
| --- | --- | --- | --- | --- | --- |
| `ielts-academy-core` (M1, M2, M5, M6, M7, M8) | 6 | 17 | 125 | 1,607 | 224,360 |
| `ielts-academy-academic` (M3A, M4A) | 2 | 6 | 55 | 759 | 93,753 |
| `ielts-academy-general-training` (M3G, M4G) | 2 | 5 | 37 | 523 | 85,603 |
| **Total** | **10** | **28** | **217** | **2,889 min (48.2 h)** | **403,716** |

A further 31 authored lessons remain archived (`live: false`) — superseded by the Listening/Reading/Writing/Speaking Masterclass restructures. Archive, not deletion: historical learner progress on those lessons is preserved, and the course views list live lessons only, so no empty chapter is ever shown.

## 2. Chapter-by-chapter verification (PROMPT 56 §1)

The audit script measured all nine mandated dimensions for each of the 28 active IELTS chapters. **All 28 pass every dimension.** Full table in `data/final-audit.json`; the measured dimensions per chapter:

- **Complete lesson content** — every live lesson passes the PROMPT 55 completeness classifier (≥3 substantive teaching blocks with real text, answerable practice, ≥2 objectives, a summary block, positive duration).
- **Detailed explanations** — chapter teaching words range 464 (mock-system orientation, a single deliberately short guide lesson) to 44,441 (Part 1 topic sets); average ≈ 1,700 words per chapter.
- **Examples** — every chapter carries worked-example, model-answer or dialogue blocks (56 + 151 + 37 across the three courses).
- **Examination strategies** — every chapter carries strategy-bearing blocks (687 across the IELTS courses: timing budgets, elimination tests, panic protocols, review loops).
- **Original practice questions** — 1,151 published CMS exercises attached to IELTS lessons (287 + 663 + 201 by course).
- **Correct answer keys** — every attached exercise has a present, valid answer key (verified per exercise, plus the PROMPT 55 validation engine at full scope: **0 blocking issues**).
- **Detailed answer explanations** — every exercise's feedback payload carries a correct answer, an explanation and why-wrong notes.
- **Appropriate difficulty** — every chapter's exercise set spans labelled difficulty (easy/medium/hard mixes verified per chapter).
- **Relevant assessments** — every chapter carries assessment activities (exercises + revision/assignment blocks: 369 + 845 + 268 across courses).

### Fixes applied during this audit

1. **Classifier under-count (11 lessons).** The PROMPT 55 completeness classifier only counted `text`/`rule`/`definition` fields as "substantive teaching", mis-flagging 11 rich lessons (M3A reading-craft chapters, time-management, exam-day, TOEFL time-management) whose teaching lives in tables, steps and worked examples. Fixed in `src/lib/exams/governance/completeness.ts` — all string content of a block now counts. This also makes the governance dashboard's readiness reporting correct.
2. **Missing summary blocks (13 lessons).** The band-ladder lessons (overview, 4→5 … 8→9), five M7 strategy lessons and the mock-system guide taught real content but closed without key-takeaway summaries. Authored summaries (5–6 takeaways each) added in `m6-bands.ts` / `m7-strategies.ts`, each grounded in that lesson's actual teaching; the chapter re-seed applied them to the live database.
3. **Missing worked examples.** The band-ladder, strategy and mock-system chapters had no example blocks. Band-contrast samples (the same idea at Band 5/7/9), a worked elimination, a decoded unknown word, a five-step review walkthrough and a one-month cadence example were authored into the same lessons — genuinely new teaching material, not filler.
4. **Rubric gap.** The IELTS writing and speaking band-descriptor rubrics covered bands 9–3 only. Bands 2 and 1 are now authored (public-descriptor language), completing both ladders at **9 steps × 4 criteria, every descriptor worded** — low-proficiency responses are no longer clamped to band 3 without a descriptor.

After the fixes, the full re-audit classifies **every one of the 217 live IELTS lessons at "practice-ready" or better** (six-category scale, §6 of `CONTENT_COMPLETENESS_REPORT.md`), and the placeholder scan (TODO/FIXME/TBD/coming-soon/lorem/…, stub-sensitive) returns **zero hits** across all IELTS lesson blocks, exercises and mock questions.

## 3. Examination accuracy (PROMPT 56 §2)

Verified against the official provider pages on **2026-11-16** (ielts.org format page fetched directly during this audit; source refs stored on the spec rows).

| Element | Platform value | Official value | Match |
| --- | --- | --- | --- |
| Listening | 1,800 s, 40 items | ~30 min, 40 items | ✓ |
| Academic Reading | 3,600 s, 40 items | 60 min, 40 items | ✓ |
| GT Reading | 3,600 s, 40 items | 60 min, 40 items | ✓ |
| Academic Writing | 3,600 s, 2 tasks | 60 min, 2 tasks (20/40 split, Task 2 double-weighted) | ✓ |
| GT Writing | 3,600 s, 2 tasks | 60 min, letter + essay, Task 2 double-weighted | ✓ |
| Speaking | 780 s, 3 parts | 11–14 min, 3 parts | ✓ (13 min, mid-range) |
| Overall band rule | mean of four sections, rounded to nearest half, .25/.75 up | official rule | ✓ |
| Delivery | computer-delivered only since mid-2026 (noted in spec + lessons) | official update page | ✓ |
| Task types | 7 engine families (MCQ single/multi, TFNG, matching, completion, writing, speaking) + GT letter | official question-type lists | ✓ |

Raw→band conversion tables are the practice-material conversions (listening/reading), honestly labelled as such in the spec notes.

**Band descriptors:** writing and speaking rubrics complete at 9 bands × 4 criteria (fully worded) — see §2 fixes.

**Version history:** TestSpecification rows are append-only (`version`, `effectiveDate`, `status`). The IELTS specs remain v1 (format unchanged since the mid-2026 computer-delivery switch); historical attempts keep their pinned spec version forever, and the mock-relink rule only follows a new version when the section structure is identical.

## 4. Practice and mock inventory (all original material)

| Bank | Size | Validation |
| --- | --- | --- |
| Listening bank | 100 sets | `validate-listening-bank.ts` green |
| Reading bank | 100 sets (50 Academic + 50 GT, 988 items) | `validate-reading-bank.ts` green |
| Writing bank | 100 tasks (25 flagship with 50 level samples) | `check-writing-bank.ts` green |
| Speaking bank | 150 items (358 model answers) | `check-speaking-bank.ts` green |
| Mock library | 39 IELTS mocks — 7 full + 15 section + 13 drills + 2 topic + 2 diagnostic; 336 questions | payload schemas + answer keys + explanations verified (233+103 questions, 100% explained; every timed section carries official timing) |

All items are original TalkSy practice content (`source: original-practice`, honesty notes in every player); no official paper or copyrighted material is reproduced.

## 5. End-to-end learner verification (PROMPT 56 §3–§5)

- `tests/exam-learner-journey.test.ts` — the complete journey on IELTS fixtures through the real route handlers: registration → exam/variant/target selection → timed diagnostic → personalised 14-day plan → CMS lesson with server-verified completion → guided topic practice with answer reveal → independent timed section practice → full mock with mid-flight refresh persistence → scored results → weakness profile → mistake revision → new assessment; then the persistence proofs (fresh requests same session, and a full sign-out/sign-in). **14/14 pass.**
- `tests/exam-production-validation.test.ts` — IELTS writing at three proficiency levels through the real evaluation service: monotonic bands (weak < mid < strong), every criterion explained, corrections/suggestions/error-highlighting quoted verbatim from the response, VERIFIED word-count checks, and the "not an official score" disclaimers on every report. IELTS speaking: transcript + recording-length persistence, stronger answers score higher. **13/13 pass.**
- `tests/exam-mock-matrix.test.ts` — the IELTS Listening, Reading, Writing and Speaking mocks each driven through safe projection (official timing, directions, navigation policy, no answer-key leaks) → timed attempt → save → refresh-resume → submission → banded results. **Pass** (see the file for the eight-mock matrix including TOEFL).

## 6. Honest limitations

1. **Human review: 0 sign-offs.** Every IELTS lesson, exercise and bank item is authored, machine-validated and honestly labelled `ai-reviewed`. The governance pipeline (PROMPT 55) exists and is tested, but no human staff member has recorded an educational or examination review on this environment — by design, the AI never self-approves. Publishing therefore rests on machine validation + the honesty labels, not human sign-off.
2. **Listening audio is speech-synthesis based.** Listening material plays through authored audio scripts with browser speech synthesis (plus 1 uploaded audio asset), not studio recordings. This is stated in the player.
3. **Writing/speaking scores are AI-assisted estimates.** Rubric grading uses the public band descriptors with an AI provider; every report carries the "practice estimate, not an official IELTS band" disclaimer. Objective sections are machine-marked against keys.
4. **8 pre-existing design-token test failures** (tokens.ts ↔ globals.css sync, @font-face assets, type/motion tokens — documented since PROMPT 52) are unrelated to the exam academies and remain open.
5. **The 31 archived lessons** stay archived deliberately; their content was superseded by the masterclasses, not lost.

## 7. Verdict

The IELTS Academy is release-ready as a serious preparation programme: a complete, placeholder-free curriculum across both variants, machine-validated original banks at target depth, official-format mocks with preserved version history, honest scoring and feedback, and a verified end-to-end learner journey. It does not — and cannot — guarantee any examination score, and says so wherever an estimate is shown.
