# TOEFL iBT Content Audit — PROMPT 41

**Scope:** the entire TOEFL iBT implementation — specification, rubrics, mock library, question pool, pathway, lessons — with particular attention to whether it follows the examination format applicable from **21 January 2026**, and to outdated task types and scoring rules.
**Date:** 2026-11-14. **Method:** `scripts/exam-content-audit.ts` (database ground truth, post-seed), direct reading of the authored TOEFL sources in `scripts/seed-exams.ts`, live API smoke.

---

## 0. Critical finding first

As with IELTS (see `IELTS_CONTENT_AUDIT.md` §0), the TOEFL content existed as authored code but the live database had zero TOEFL rows — no spec, no mocks, no rubrics, no pathway. The running site could not offer TOEFL at all (`"exams": []`, pathway 404). The seeder has now been run against the live DB and every number below is post-seed ground truth. The deeper finding specific to TOEFL: **the TOEFL Academy is one-fifth of the IELTS Academy.** It has a current, well-sourced specification and three real mocks — but **zero dedicated lessons**, **no reading or listening section mocks**, **one-quarter of the pathway steps are free text**, and its question pool (35 items) cannot sustain section-wise practice at official length. TOEFL preparation currently means "do the common English curriculum, then take three sample mocks".

## 1. Format compliance audit (2026 format, in force 21 Jan 2026)

The active specification (`TOEFL_IBT/STANDARD v1`, effective 2026-01-21, reviewed 2026-11-12) was checked item-by-item against the ETS pages it cites:

| Section | Spec (database) | 2026-format requirement | Verdict |
| --- | --- | --- | --- |
| Reading | ≤50 items, ~30 min, two-stage adaptive; 30 Complete-the-Words + 20 comprehension; 35 raw points | ✔ matches | **Current** |
| Listening | ≤47 items, ~29 min, two-stage adaptive; listen-and-choose + MCQ; forward-only, no replay under exam timing | ✔ matches | **Current** |
| Speaking | 11 items, ~8 min: 7 Listen-and-Repeat (8/10/12-second windows) + 4 interview items; 55 raw points | ✔ matches | **Current** |
| Writing | 12 items, ~23 min: 10 sentence reconstruction + 1 Write-an-Email + 1 Academic Discussion; 20 raw points | ✔ matches | **Current** |
| Scoring | Section bands 1.0–6.0 half steps; overall = mean of four sections rounded to nearest half; dual-reported legacy 0–120 during the 2026–2028 transition | ✔ matches | **Current** |

**Outdated task types / scoring rules: none found.** The pre-2026 formats (Independent/Integrated essay tasks, 4-question speaking with 45-second responses, the 0–120-only scale, paper-Simulated conversation tasks) do not appear anywhere in the spec, the task-type catalogue, the rubrics or the mock content. The raw-to-band tables are explicitly labelled as EnglishPath practice conversions (ETS publishes no conversion table) with an honesty note in the spec itself — the correct posture. The mock content exercises the *new* item types only: `COMPLETE_WORDS`, `LISTEN_REPEAT`, `SENTENCE_RECONSTRUCTION`, `EMAIL_WRITING`, `DISCUSSION_TASK`, interview `SPEAKING_TASK` — verified in the DB type histogram.

## 2. How TOEFL content is stored

Same architecture as IELTS (single source of truth in `scripts/seed-exams.ts` → database records; Zod-validated structured columns; server-only answer keys). No duplication with IELTS: membership is structural (`examKey = "TOEFL_IBT"`), the pathway bridges into the common curriculum by slug. No hardcoded delivery paths found.

## 3. Inventory and A–E classification

### 3.1 Specification — **D** (examination-ready definition; sourced, current, versioned)

Covered in §1 above. Three official ETS source refs, `lastReviewedAt 2026-11-12`, honest transition-dual-reporting note, honest practice-conversion note.

### 3.2 Rubrics — **D after fix** (defect found and fixed in this audit)

| Rubric | Ladder | Criteria | State |
| --- | --- | --- | --- |
| `toefl.writing` | 6→1, 6 levels, 3 criteria (Development / Organization / Language use) | fully worded at every level | Complete |
| `toefl.speaking` | 6→1, 3 criteria (Delivery / Language use / Topic development) | fully worded | **Was incomplete: the band-5 level was missing entirely (ladder jumped 6→4). Fixed in this audit — band 5 authored and seeded; verified post-seed.** |

### 3.3 Mock library — 3 mocks, 35 questions, all **D** (sample length)

| Mock | Kind | Items | Types present | Keys | Explanations | Difficulty |
| --- | --- | --- | --- | --- | --- | --- |
| TOEFL iBT Sample Mock 1 (2026 format) | full, 4 sections | 19 | COMPLETE_WORDS, MCQ, SENTENCE_RECONSTRUCTION, LISTEN_REPEAT, SPEAKING_TASK, WRITING_TASK | all objective items keyed | 19/19 | 19/19 |
| TOEFL Speaking Section Mock (2026 format) 1 | section | 11 (7 Listen-and-Repeat with the official 8/10/12s windows + 4 interview) | LISTEN_REPEAT, SPEAKING_TASK | constructed (rubric-resolved) | 11/11 | 11/11 |
| TOEFL Writing Section Mock (2026 format) 1 | section | 8 (6 reconstruction + 1 email + 1 academic discussion) | SENTENCE_RECONSTRUCTION, EMAIL_WRITING, DISCUSSION_TASK | mixed objective + rubric | 8/8 | 8/8 |

Content quality verified by direct reading (e.g. the "Sleep and the Sorting Brain" reading passage with genuine Complete-the-Words masking `c___ / hipp___ / st___`, comprehension items that require real paraphrase, and distractor MCQs). All mock material is original and labelled "not an official ETS test".

### 3.4 Lessons — **A (absent)**: the headline gap

The TOEFL Academy has **no dedicated teaching content**: no course, no module, no lesson exists with TOEFL-specific instruction (no Complete-the-Words technique lesson, no reconstruction-speed training, no interview method lesson, no 1–6 band ladder lesson, no TOEFL strategies module). The admin content collection for TOEFL therefore reports 0 lessons — honestly, because structurally there are none. Compare IELTS: 55 lessons. This is the single largest content gap in the entire academy and the top priority of the replacement plan.

### 3.5 Pathway — **B** (functional but shallow)

4 phases, 22 steps, published. Phase composition:

| Phase | Steps | Nature |
| --- | --- | --- |
| 1 Diagnose & Bridge | 4 | 1 free-text diagnostic drill + 3 real common-curriculum refs (Grammar School tense system, Sentence Lab, Word World) |
| 2 Core Academic English | 7 | all real refs (Reading Room ×2, Listening Lab ×2, Writing Studio, Speaking Lab, Word World) |
| 3 TOEFL 2026 Test Craft | 6 | **all free text** ("Drill: Complete the Words technique", adaptive pacing, listen-and-choose prediction, reconstruction at speed, interview simulation, AI Tutor discussion practice) |
| 4 Mock Cycle & Readiness | 5 | 2 free-text drills + 1 free-text tutor step + 2 real refs |

**11 of 22 steps carry no `refId`** and resolve to the generic mock-library page. Phase 3 — the phase that is supposed to teach the 2026-specific item types — is the weakest: it names six drills that, for five of the six, do not exist as targeted content anywhere in the platform (the three seeded mocks are the only TOEFL-specific practice). This is the closest thing to "placeholder" that survives this audit: **real labels pointing at content that does not exist**.

### 3.6 Review state — **E: not earned**

Same situation as IELTS: machine contract passes (`tests/exam-admin.test.ts` per-type payload validation; staging smoke 64 checks), no human review chain has been run. Nothing is claimed reviewed.

## 4. Gap analysis (PROMPT 41 §4, TOEFL iBT)

| Dimension | Present | Missing |
| --- | --- | --- |
| Chapters & lessons | — (0 dedicated) | **Everything**: an orientation module, reading craft (Complete-the-Words technique, two-stage adaptive strategy), listening craft (listen-and-choose prediction), speaking craft (Listen-and-Repeat discipline + interview method), writing craft (reconstruction speed, email register, academic discussion), band ladder 1→6, exam strategies, mock-system guide — an IELTS-parity programme of ~35–45 lessons |
| Topics covered | Format facts only (inside spec + mock directions) | All teaching substance |
| Placeholder content | Pathway Phase 3 free-text steps (§3.5) | Replace with targeted, referenced content |
| Outdated material | None (§1) | — |
| Practice questions | 35 (3 mocks) | Reading and Listening **section mocks missing entirely**; full-length mock (50/47/11/12 items) missing; pool too thin for section-wise assembly at official length |
| Answer explanations | 35/35 | — |
| Assessment rubrics | 2 (complete after band-5 fix) | Per-task split mirrors ETS practice summaries; adequate |
| Mock examinations | 3 (all sample length, honestly labelled) | Full-length simulation; ≥2 per section for the assembly pool |

## 5. Defects found and fixed during this audit

| # | Defect | Fix |
| --- | --- | --- |
| 1 | Live DB had zero TOEFL rows (empty academy) | Seeder run; end-to-end verified |
| 2 | `toefl.speaking` rubric missing the band-5 level (6→4 jump) | Band 5 authored (Delivery / Language use / Topic development, consistent with the 2026 interview format) and seeded; verified complete 6→1 post-seed |

## 6. Verification performed in this audit

- Database inventory post-seed (`scripts/exam-content-audit.ts`): 3 mocks / 35 questions / keys / explanations / difficulty all 100%; 0 unresolved rubric references
- Live smoke: TOEFL pathway returns 4 phases / 22 steps; TOEFL mock player data returns sections with answer keys stripped (verified: no `answer` key in any client-facing question object)
- Direct source reading of the TOEFL spec, both rubrics and all three mocks in `scripts/seed-exams.ts`
- No existing content deleted; seeder additive and idempotent (second run: 0 changes)

## 7. Verdict

The TOEFL Academy is *format-current and honest* — the 2026 specification, scoring rules, rubrics and the three mocks all follow the format in force since 21 January 2026, with no outdated task types anywhere — but it is *educationally thin*: no dedicated lessons, no reading/listening section mocks, a pathway whose test-craft phase is free text, and a 35-item pool. As a curriculum director's assessment: a learner could sample the format here, but could not *prepare* for TOEFL here the way they can for IELTS today. The exact work to close that gap — an authored TOEFL teaching programme at IELTS parity, full-length mocks, section mocks for Reading and Listening, and precise pathway references — is scheduled with priorities and acceptance criteria in `CONTENT_REPLACEMENT_PLAN.md`. None of it is claimed as done.
