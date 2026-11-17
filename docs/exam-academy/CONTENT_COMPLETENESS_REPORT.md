# CONTENT COMPLETENESS REPORT — PROMPT 56 §6

**Date:** 2026-11-16 · **Method:** `scripts/final-content-audit.ts` (measured against the live dev database; machine output in `data/final-audit.json`).

---

## 1. The six categories and what earns them

Each lesson is placed in exactly one category — the highest stage it genuinely reaches. Nothing is upgraded by assumption; an incomplete lesson is never labelled complete.

| Stage | Meaning (measured, not claimed) |
| --- | --- |
| **Placeholder** | A lesson record with no real content: zero blocks, or neither teaching nor practice. |
| **Incomplete** | Content exists but fails a completeness element: fewer than three substantive teaching blocks, no answerable practice, fewer than two objectives, no summary, no duration. |
| **Substantive** | All completeness elements pass — real teaching material, but practice is not fully verified. |
| **Practice-ready** | Substantive AND every attached exercise is published, carries a valid answer key, a detailed answer explanation and a labelled difficulty. |
| **Reviewed** | Practice-ready AND human sign-off exists (governance override with `humanApproved`, or a legacy human-review status). Bare `ai-reviewed` never qualifies. |
| **Published** | Reviewed AND delivered live with a published version snapshot. |

Delivery state is reported separately from quality stage: lessons can be (and are) live while honestly labelled below "Reviewed", because the platform's rule is that AI-authored content never silently earns human approval — it publishes with the `ai-reviewed` honesty label instead.

## 2. Headline result

**All 263 live lessons across both academies are practice-ready or better. Zero placeholders. Zero incomplete. Zero substantive-only.**

| Course | Live lessons | Placeholder | Incomplete | Substantive | Practice-ready | Reviewed | Published |
| --- | --- | --- | --- | --- | --- | --- | --- |
| ielts-academy-core | 125 | 0 | 0 | 0 | 125 | 0 | 0 |
| ielts-academy-academic | 55 | 0 | 0 | 0 | 55 | 0 | 0 |
| ielts-academy-general-training | 37 | 0 | 0 | 0 | 37 | 0 | 0 |
| toefl-ibt-academy | 46 | 0 | 0 | 0 | 46 | 0 | 0 |
| **Total** | **263** | **0** | **0** | **0** | **263** | **0** | **0** |

A further **31 authored lessons are archived** (superseded by the masterclass restructures; progress history preserved). They are excluded from the live counts above and from learner-facing views.

**Reviewed = 0 is the honest state, not an oversight:** every lesson in this environment is AI-authored platform material. The PROMPT 55 governance pipeline (Draft → Educational review → Examination review → Answer validation → Approved → Published, with role gates and accountable notes) is built and fully tested (`tests/exam-governance.test.ts`, 32 tests incl. the not-ready → ready journey), but no human staff member has recorded a sign-off here, and the system structurally refuses to let seeders, imports or AI grant one. Machine validation is what stands behind the live content today: the PROMPT 55 validation engine at full scope reports **0 blocking issues and 0 warnings** over 268 mock questions, 1,491 CMS exercises, 294 lessons, 4 specifications, the audio asset and the 950 machine-validated practice-library items.

## 3. What "practice-ready" meant in measurement

For every one of the 263 live lessons, the audit verified: ≥ 3 substantive teaching blocks (all block text counted — tables, steps, examples and dialogues included after the classifier fix this audit shipped), answerable practice attached, ≥ 2 learning objectives, a summary block, positive duration, and — per attached exercise — published status, a valid answer key, a detailed answer explanation and a labelled difficulty. Chapter roll-ups (all 50 active chapters, both academies) additionally verified examples, examination-strategy content, assessments and difficulty spread.

## 4. Content inventory behind the stages

| Layer | Volume | Verification |
| --- | --- | --- |
| Live lessons / chapters / courses | 263 / 50 active / 4 | classifier + §1 dimension checks (this audit) |
| Teaching material | ~485,000 words · 3,503 minutes (58.4 h) | measured per chapter |
| CMS exercises attached to lessons | 1,491 published | answer keys + explanations + difficulty verified |
| Unified question bank (PROMPT 54) | 950 items (IELTS 450 · TOEFL 500), 550 answer-keyed + 400 rubric-assessed, all `ai-reviewed` | `bun run validate:exambank` green |
| Practice libraries | IELTS L 100 · R 100 (50 A + 50 GT) · W 100 (25 flagship with 50 level samples) · S 150 (358 model answers); TOEFL R 100 · L 100 · W 200 (all with model responses) · S 100 | per-bank validators green |
| Mock library | 50 mocks (IELTS 39: 7 full, 15 section, 13 drills, 2 topic, 2 diagnostic · TOEFL 11: 2 full, 8 section, 1 adaptive 3-stage) · 578 questions, 100% explained, all timed sections at official timing | engine + this audit |
| Band-descriptor rubrics | IELTS writing + speaking: 9 bands × 4 criteria, fully worded · TOEFL writing + speaking: 6 bands × 3 criteria, fully worded | this audit (completed the IELTS 2/1 bands today) |
| Test specifications | 4 rows — IELTS A v1, IELTS GT v1, TOEFL v2 active + v1 retired (history preserved; published mocks relinked to v2 after a structural check) | verified against ielts.org / ets.org on 2026-11-16 |

## 5. Placeholders and stub markers

The audit scans every lesson block, exercise and mock question (prompts, payloads, explanations) for twelve marker patterns (TODO, FIXME, TBD, TBC, coming soon, placeholder, lorem ipsum, to-be-added, under construction, future release, not-yet-available, xxx), with short-field sensitivity so idiomatic prose ("a scene waiting to be written") is not a false positive.

**Result: 0 placeholder markers in the academies' entire content surface.**

Two scan-engineering notes for the record: Spanish "sobre todo" (legitimate translation content) must not match a case-insensitive TODO — the pattern is case-sensitive; and genuine idioms are excluded by the stub-only rule. Both behaviours are encoded in the script.

## 6. What this report does not claim

- It does not claim human editorial review — that stage is at zero and the governance tab tracks the backlog honestly (the "live but never human-approved" metric).
- It does not claim any guaranteed exam outcome; every score surface carries the practice-estimate disclaimer.
- It does not count the 31 archived lessons as content delivery; they are history.
- It reports the known pre-existing failures outside the academies (8 design-token sync test failures, documented since PROMPT 52) rather than hiding them.

---

## 7. PROMPT 57 addendum — the educational depth layer (2026-11-16)

The §1–§6 audit above verified structural completeness (sections exist, answer keys exist, explanations exist). PROMPT 57's mandate — no placeholder educational content — required a stronger test: whether a learner can actually study from each lesson. The method and full report: `EDUCATIONAL_DEPTH_AUDIT.md` (`scripts/audit-content-depth.ts`).

Result of that stronger test on the academies: the 12 shallow lessons flagged in §2 of this report (band ladder, strategies, mocks guide) were deepened in place with worked band-contrast examples and wrong→right→reason analyses — **all 263 live academy lessons now pass the depth gates as well as the structural ones** (avg 2,102–2,759 words per lesson, unchanged for the already-deep courses).

The same session rebuilt the platform's other teaching surface at the same standard: the core English programme's Pre-A1 + A1 run (CH-06–CH-18, 72 lessons) and the starter course (2 lessons) now carry the full v2 teaching standard — see `src/data/programme/v2/manifest.ts` (batches 3–6, machine-validated). **A2–C1 (CH-19–56, 168 lessons) remains at the v1 baseline** — the honest headline of the depth report, tracked per chapter in the manifest and reported by the governance completeness dashboard. Nothing in this document upgrades a lesson by assumption: "chapter records existing is never enough" remains the rule.
