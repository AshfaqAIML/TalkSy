# EnglishPath / TalkSy — Product Requirements Document (PRD)

**Status:** Living document · **Updated:** 2026-11-12 · **Owner:** Product
**Platform:** TalkSy application shell, branded EnglishPath in product documentation

---

## 1. Product overview

EnglishPath is an English learning platform that takes a learner from their
first English word to confident communication — and now, through a dedicated
third division, to an internationally recognised English examination score.

The platform is organised into **three learning divisions**:

| Division | Name | Scope |
| --- | --- | --- |
| **A** | Learn English | Complete English learning from absolute beginner (Pre-A1) to advanced: foundations, grammar, vocabulary, sentence construction, reading, writing. |
| **B** | Spoken English & Communication | Practical listening, speaking, pronunciation and conversation development, with the AI English Tutor as the always-available practice partner. |
| **C** | International Exam Preparation Academy | Dedicated examination preparation pathways for **IELTS** and **TOEFL iBT**, with verified test formats, exam-specific courses, timed mock tests, band scoring and a personal exam dashboard. |

Division C is a **premium, deliberately distinct experience** — learners must
understand they have entered a dedicated exam-preparation academy, not another
collection of ordinary English lessons.

### Non-goals

- We do not sell, book or proxy examination registrations.
- We do not claim endorsement by IELTS (British Council / IDP / Cambridge) or
  ETS (TOEFL). All practice materials are original.
- We do not duplicate the common English curriculum inside Division C; exam
  pathways reference and reuse it.

---

## 2. Personas

- **Absolute beginner ("Sofia")** — starts in Division A with Pre-A1 lessons.
- **Communicator ("Diego")** — has grammar but freezes when speaking; lives in
  Division B (Listening Lab, Speaking Lab, AI Tutor conversations).
- **Exam candidate ("Amara")** — needs IELTS Academic 7.0 by March for a
  university application. She knows her weaknesses, has a fixed exam date and
  limited daily time. Division C is built for her.
- **Content staff** — editors author, teachers review, admins publish and
  manage users; since the exam academy, admins also maintain test
  specifications when providers change formats.

---

## 3. Division A — Learn English (existing core)

Structured lessons (20 block types, 16 exercise types) from Pre-A1 upwards,
Grammar School with a tense explorer and an error clinic, Word World (vocabulary
with SRS review, context sentences, challenges, lists), the Sentence Lab, the
Reading Room (levelled texts with glossaries) and the Writing Studio (guided
assignments with deterministic + AI feedback). Progress is earned by completing
sections and passing assessments — never by opening pages.

## 4. Division B — Spoken English & Communication (existing core)

The Listening Lab (everyday → professional audio with dictation and
comprehension checks), the Speaking Lab (guided activities, pronunciation
training, conversation scenarios with measurement), and the AI Tutor
(9 teaching modes, lesson-aware). All skills feed the shared progress
dashboard.

---

## 5. Division C — International Exam Preparation Academy

### 5.1 Supported examinations

| Exam | Variants | Scale (current) | Format basis |
| --- | --- | --- | --- |
| **IELTS** | Academic · General Training | 0–9 bands (half steps); overall = mean of four sections rounded to the nearest half | 2h45m: Listening 30 min / 40 q, Reading 60 min / 40 q, Writing 60 min / 2 tasks, Speaking 11–14 min |
| **TOEFL iBT** | Standard | **1–6 bands** (half steps) since 21 Jan 2026; overall = mean of four sections rounded to the nearest half; dual-reported with legacy 0–120 during the 2026–2028 transition | ~90 min: Reading (~30 min, ≤50 items, two-stage adaptive), Listening (~29 min, ≤47 items, adaptive), Speaking (~8 min, 11 interview items), Writing (~23 min, 10 sentence-reconstruction + 2 academic responses) |

IELTS and TOEFL are **never treated as interchangeable**: separate course
structures, blueprints, question types, timing rules, scoring systems,
practice exercises, mock configurations and feedback rubrics.

### 5.2 Format versioning (test specification management)

Every examination format is **data, not code**. A `TestSpecification` record
carries: examination name, exam key + variant, version, status
(draft/active/retired), effective date, section configuration, task types,
timing, scoring model, source references (official provider URLs with
retrieval dates), and last-reviewed date.

- Exactly one **active** specification per exam+variant; prior versions
  retire automatically and remain as history.
- Mock attempts pin the specification they were built with, so old results
  stay interpretable after format changes.
- Administrators create draft versions (pre-filled from the current spec),
  edit, then activate. Every change is audit-logged.
- **No examination rule is hardcoded in frontend components** — components
  read specifications through `src/lib/exams/*` services only.
- Official provider pages (ielts.org, ets.org) are the authoritative
  reference; the TOEFL 2026 overhaul (new item types, 1–6 scale) is the
  worked example of why this system exists.

### 5.3 Onboarding (goal capture)

The wizard asks, in order: which examination (IELTS / TOEFL iBT) → which
variant (IELTS only) → current proficiency (CEFR self-rating) → target score
(exam-specific scale) → planned examination date → daily study time →
most difficult sections. Goals can be **changed at any time** from the
dashboard ("Change my goals"); switching exam resets estimates and pathway
progress for honesty.

### 5.4 Exam dashboard (single source of preparation truth)

Displays all of: available examinations · selected examination + spec
version · target score · current estimated performance (overall + per
section, with confidence) · examination date + countdown · preparation
completion (pathway progress) · section-wise strengths · section-wise
weaknesses · recommended lessons (bridged to the common curriculum) · daily
study plan · upcoming mock tests · recent mock-test results.

### 5.5 Common English foundation (the bridge)

The academy never duplicates Division A/B content. Two mechanisms:

1. **Pathways** — each exam's course is phases of steps; every step
   references existing curriculum content (grammar topics, vocabulary
   categories, reading texts, listening activities, writing assignments,
   speaking activities, AI tutor sessions) plus academy-owned drills and
   mocks.
2. **Recommendations** — the bridge engine maps exam weaknesses to common
   lessons: a learner struggling with sentence construction in IELTS
   Writing is directed to Grammar School / Sentence Lab; academic-vocabulary
   weakness in TOEFL Reading is directed to the relevant Word World sets.
   Weakness tags come from onboarding flags, curriculum attempt analytics
   and mock question outcomes.

### 5.6 Mock tests and scoring

- Mocks are configured per exam from the active specification: official
  section timings, exam question types, section order.
- Objective items (MCQ single/multi, True/False/Not Given, matching,
  completion, Complete-the-Words, sentence reconstruction) are machine-marked
  with tolerance rules (case, punctuation, number words) and partial credit
  where appropriate.
- Writing and speaking responses are graded against public band descriptors
  (IELTS criteria; TOEFL 1–6 rubrics) by the AI provider with teacher review
  as the fallback; ungradable responses stay "awaiting review" and the
  result is labelled provisional.
- Answer keys never reach the client before submission (server-side
  sanitisation, verified by smoke test).
- Section bands use published practice conversion tables (documented as
  approximate; official forms vary).

### 5.7 Administration (updated architecture)

- **Admin**: manages test specifications (create draft → edit → activate →
  rollback via retire), publishes/archives mock tests, everything from the
  existing CMS role set (users, content, import/export).
- **Editor/Teacher**: view specs and mocks, archive mocks; content
  authoring per existing CMS workflow.
- All spec and mock lifecycle actions write to the shared CMS audit log.
- The staff first-login gate (choose your own password before any CMS
  action) covers the exam admin surfaces automatically.

---

## 6. Security requirements (S1/S2 — implemented)

- **S1 throttling**: per-account (5 failures / 15 min) and per-IP (30 / 15
  min) login locks with escalating repeat-offence durations; per-IP caps on
  registration (120/15 min) and both password-reset endpoints (10/15 min).
- **S2 password reset**: 48-hex single-use tokens, only sha256 hashes at
  rest, 30-minute TTL, whole-account session revocation on success;
  delivery via server log (operator hand-off) until email infrastructure
  exists.
- **First-login gate**: seeded staff accounts (public default passwords)
  must choose their own password; every CMS API route (including exam
  administration) rejects them until they do.

## 7. Success metrics (product-level)

- % of exam-academy onboarded learners with a completed diagnostic mock in
  the first 7 days.
- Median section-band improvement between first and most recent mock.
- Pathway completion rate and daily-plan adherence streaks.
- Recommendation click-through from the exam dashboard into Division A/B
  content (the bridge working).

## 8. Release status

Implemented and verified (staging smoke, 40/40 exam-academy checks and
14/14 deployment/security checks): three-division architecture, academy
landing + onboarding, exam dashboard, IELTS + TOEFL pathways, spec
versioning admin, mock engine with IELTS + TOEFL sample mocks, bridging
recommendations, study-plan generation, S1/S2 and the first-login gate.

Planned next (not implemented): full-length question banks, email delivery
for reset links, teacher-side review UI for pending constructed responses,
listening audio recordings (browser speech synthesis is used today), and a
hosted-database deployment option for durable exam data.
