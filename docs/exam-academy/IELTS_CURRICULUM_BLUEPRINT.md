# IELTS Academy — Curriculum Blueprint v2.3.0

**Date:** 2026-11-15 · PART A (pathways) + PART C (module specifications) · Master document: `CURRICULUM_BLUEPRINT.md`
> Generated from the versioned blueprint data in `src/data/exam-academy/` by `scripts/generate-blueprint-docs.ts` — edit the data, then regenerate. Structural guarantees (topic coverage, migration mapping, pathway integrity) are enforced by `scripts/validate-exam-blueprint.ts` and `tests/exam-blueprint.test.ts`.

## 1. Pathway configurations

### IELTS Academic Preparation Pathway

Ten modules in the PROMPT 42 structure: Fundamentals, Listening Mastery, then the Academic track's own Reading and Writing Task 1/Task 2 modules, Speaking Parts 1–3, Vocabulary/Grammar/Band Ladder, and Full Examination Practice. Listening and Speaking are shared with General Training (identical tests); Reading and Writing are Academic-only. Mocks, banks and drills come exclusively from the IELTS Academic bank.

**Module order:** I-M1 → I-M2 → IA-M3 → IA-M4 → IA-M5 → I-M6 → I-M7 → I-M8 → I-M9 → I-M10

- Courses: ielts-academy-core (I-M1, I-M2, I-M6–I-M10) + ielts-academy-academic (IA-M3, IA-M4, IA-M5)
- Specification: IELTS/ACADEMIC active version (currently v1, effective 2026-07-01, format-verified against ielts.org)
- Question and mock banks: IELTS Academic only — bank separation from General Training is test-enforced
- Rubrics: ielts.writing and ielts.speaking (official four criteria each)
- UKVI guidance annex applies when the visa route requires a SELT (see UKVI_GUIDANCE)
- Score targets: IELTS_SCORE_TARGETS in score-pathways.ts (Band 5 → 8.5+)

### IELTS General Training Preparation Pathway

The General Training twin under the same module architecture: shared Fundamentals, Listening and Speaking modules, then GT-specific Reading (notices, workplace documents, general interest) and Writing (the letter; the everyday essay) modules — distinct lessons, distinct bank, distinct mocks, never reused from Academic — finishing with the shared language/band module and Full Examination Practice on the GT bank.

**Module order:** I-M1 → I-M2 → IG-M3 → IG-M4 → IG-M5 → I-M6 → I-M7 → I-M8 → I-M9 → I-M10

- Courses: ielts-academy-core (I-M1, I-M2, I-M6–I-M10) + ielts-academy-general-training (IG-M3, IG-M4, IG-M5)
- Specification: IELTS/GENERAL_TRAINING active version (currently v1; adds the GT reading families and the letter task)
- Question and mock banks: IELTS General Training only — bank separation from Academic is test-enforced
- Rubrics: ielts.writing and ielts.speaking (identical criteria for both variants)
- GT raw-to-band anchors differ from Academic (e.g. GT Reading Band 6 ≈ 30/40 vs Academic ≈ 23/40) — mocks convert with GT tables
- UKVI guidance annex applies when the visa route requires a SELT (see UKVI_GUIDANCE)
- Score targets: IELTS_SCORE_TARGETS in score-pathways.ts (Band 5 → 8.5+)

### IELTS for UKVI — preparation guidance (where applicable)

A Secure English Language Test (SELT): the same IELTS test — format, timing and difficulty — taken in person at an official IELTS for UKVI test centre, with the Test Report Form marked for UKVI purposes. Preparation is the pathway of the underlying variant; only booking, delivery and component-minimum rules differ.

- Choose UKVI only when your visa route requires a SELT; many sponsors and universities accept standard IELTS — check before booking
- Follow the Academic pathway for UKVI Academic or the General Training pathway for UKVI General Training — the tests are identical to standard IELTS, so the same lessons, mocks and rubrics apply
- It must be taken in person at an official IELTS for UKVI test centre — there is no home edition
- Component minimums are set by the visa route (for example 4.0 in every component at B1, 5.5 at B2, 7.0 at C1), so set a target per component, not just overall
- IELTS Life Skills (A1/A2/B1) is a different two-skill test (speaking and listening, Pass result) and is outside these four-skill pathways — see the ielts-ukvi-explained lesson for orientation
- Confirm retake options with your test centre before booking — visa routes treat retakes differently

Source: IELTS official — Tests for UK Visas and Immigration (https://ielts.org/take-a-test/test-types/ielts-tests-for-uk-visas-and-immigration).

## 2. Shared modules (both pathways — the Listening and Speaking tests are identical across variants)

### I-M1 — Module 1 — IELTS Fundamentals

> Course: ielts-academy-core · Slug: `module-1-introduction` · Pathways: IELTS Academic, IELTS General Training · Absorbs v1: `module-1-introduction`, `module-7-exam-strategies (time + exam-day lessons)`

Everything a candidate must understand before technique can help: what IELTS is and which variant they need, the section-by-section format, how band scores are produced and assessed, how to plan preparation time and test-clock time, and how registration, computer delivery, UKVI routes and test day actually work. This module converts anxiety into a documented, dated plan.

**Learning objectives**

- Explain the purpose, variants and four-section structure of IELTS and choose Academic or General Training from the receiving organisation's rule
- Read a Test Report Form: raw-to-band conversion, the .25/.75 rounding rule, and the four Writing and four Speaking assessment criteria
- Set a requirement-driven target score with a safety margin and a weakest-skill-first study plan
- Budget preparation weeks and test-clock minutes (18/18/20 reading, 20/40 writing) before entering technique work
- Navigate registration, computer delivery, UKVI/SELT routes and test-day logistics without last-minute surprises

**Prerequisites:** none — open entry · **Entry level:** B1+ recommended (A2/B1 learners bridge through the core English programme first) · **Estimated study time:** ~5 h

#### Chapter 1 — Orientation (`orientation`)

| Lesson | Min | Status | Focus |
| --- | --- | --- | --- |
| `ielts-what-and-why` — What is IELTS and who needs it? | 12 | existing v1 | Purpose, variants at a glance, the four skills |
| `ielts-academic-vs-gt` — IELTS Academic or General Training? | 12 | existing v1 | Choosing your variant from the receiving organisation's rule |
| `ielts-four-skills-format` — The examination format, section by section | 15 | existing v1 | Current computer-delivered format, Writing on Paper, timings |

#### Chapter 2 — Band scores and assessment (`scores-and-assessment`)

| Lesson | Min | Status | Focus |
| --- | --- | --- | --- |
| `ielts-band-scoring` — The band scoring system | 14 | existing v1 | Raw→band, the .25/.75 rounding rule, reading a TRF |
| `ielts-assessment-criteria` — How Writing and Speaking are assessed | 15 | existing v1 | The four criteria for each productive skill, equal weighting, Task 2's double weight, and what examiners actually reward |
| `ielts-target-scores` — Understanding target scores | 12 | existing v1 | Requirement → safety-margin target → weakest skill first |

#### Chapter 3 — Preparation strategy and time (`strategy-and-time`)

| Lesson | Min | Status | Focus |
| --- | --- | --- | --- |
| `ielts-preparation-strategy` — Preparation strategy: how this Academy works | 14 | existing v1 | The diagnose → language → technique → mock-cycle method |
| `ielts-study-planning` — Planning your preparation time | 14 | existing v1 | Weeks-to-target mapping, the weekly cycle (technique + language + practice), and honest pacing by entry level |
| `ielts-strategy-time` — Time management | 12 | existing v1 | Test-clock budgets: 18/18/20 reading, the 20/40 writing split, the final sweep |

#### Chapter 4 — Delivery, registration and test day (`delivery-and-test-day`)

| Lesson | Min | Status | Focus |
| --- | --- | --- | --- |
| `ielts-computer-based` — Computer-based preparation | 12 | existing v1 | Practising in the delivery medium you will be examined in |
| `ielts-registration-awareness` — Examination registration awareness | 12 | existing v1 | Booking, ID, results timeline, One Skill Retake |
| `ielts-ukvi-explained` — IELTS for UKVI and Life Skills | 14 | existing v1 | SELT rules, Life Skills A1/A2/B1, per-component minimums |
| `ielts-strategy-exam-day` — Exam-day preparation | 10 | existing v1 | Logistics protect the band you already have |

**Practice activities**

- Variant-choice and target-setting worksheet built into lesson banks (3 questions per lesson)
- Baseline diagnostic: one untimed full mock from the variant's bank to anchor the study plan
- TRF reading exercise: interpret a model Test Report Form and compute overall bands with the rounding rule

**Assessments**

- Bank questions on format, scoring rules and criteria (auto-graded, full feedback payloads)
- Onboarding checkpoint: target band, test date and daily minutes recorded in the planner

**Completion criteria**

- All 13 lessons completed with bank questions attempted
- Baseline diagnostic attempt recorded and reviewed
- Target, date and daily-minutes set in the study planner

### I-M2 — Module 2 — Listening Mastery

> Course: ielts-academy-core · Slug: `module-2-listening` · Pathways: IELTS Academic, IELTS General Training · Absorbs v1: `module-2-listening`

The complete Listening academy for the test that is identical in both variants (PROMPT 44 masterclass): the examination fundamentals (structure, four parts, instructions and answer limits, spelling, numbers and dates, accents, time management), twelve core listening skills, every official question type taught on the seven-component masterclass structure, a preparation chapter for each recording part with increasing complexity, plus the original audio question bank, progressive practice tests, full-length simulations and per-question performance analytics in the Listening Masterclass hub.

**Learning objectives**

- Recite the four-part structure, the one-hearing rule, the instruction and answer-limit families and the computer-delivered clock
- Deploy the twelve core skills on demand: prediction, keyword anchoring, synonyms, paraphrase, distractor immunity, speaker tracking, corrections, number perception, opinions, intention, specific information and overall meaning
- Solve every official task family — multiple choice, matching, plan and map labelling, form, note, table, flowchart, summary and sentence completion — with a repeatable step-by-step method
- Prepare part by part with increasing complexity, from the everyday conversation of Part 1 to the academic monologue of Part 4
- Convert practice results into study actions through per-question error analysis: spelling, missed keywords, distractor lures, word limits and pacing

**Prerequisites:** I-M1 · **Entry level:** B1+ · **Estimated study time:** ~7 h

#### Chapter 1 — Examination fundamentals (`exam-fundamentals`)

| Lesson | Min | Status | Focus |
| --- | --- | --- | --- |
| `ielts-listening-overview` — Understanding the Listening test | 12 | existing v1 | Four parts, heard once, two-pass habit |
| `ielts-listening-instructions` — Question instructions and answer limits | 12 | existing v1 | Word-limit families as scoring rules |
| `ielts-listening-spelling` — Spelling requirements | 12 | existing v1 | Exact-match answers, dictated spellings, proofreading routine |
| `ielts-listening-numbers-dates` — Numbers and dates | 12 | existing v1 | Formats for dates, times, prices, phone and reference numbers |
| `ielts-listening-accents` — Recognising different accents | 10 | existing v1 | Exposure strategy; what not to do |
| `ielts-listening-time` — Time management | 12 | existing v1 | Per-part pacing, the check window, recovery protocols |

#### Chapter 2 — The twelve core listening skills (`core-skills`)

| Lesson | Min | Status | Focus |
| --- | --- | --- | --- |
| `ielts-listening-predicting` — Predicting answers | 12 | existing v1 | Predict part of speech and content before the audio |
| `ielts-listening-keywords` — Listening for keywords | 12 | existing v1 | Stressed content words as anchors |
| `ielts-listening-synonyms` — Recognising synonyms | 12 | existing v1 | Question-word vs recording-word substitution |
| `ielts-listening-paraphrase` — Understanding paraphrases | 12 | existing v1 | Structural rewording and the verbatim trap |
| `ielts-listening-distractors` — Identifying distractors | 12 | existing v1 | The distractor families and the whole-claim discipline |
| `ielts-listening-speakers` — Following speaker changes | 12 | existing v1 | Turn-taking, attribution, the two-column ledger |
| `ielts-listening-corrections` — Recognising corrections | 11 | existing v1 | Self-repair markers and the second-value rule |
| `ielts-listening-numbers-skill` — Understanding numbers | 12 | existing v1 | Perception at speed: teen vs ty, prices, phone numbers |
| `ielts-listening-opinions` — Identifying opinions | 12 | existing v1 | Stance markers, hedging, agreement language |
| `ielts-listening-intention` — Understanding speaker intention | 11 | existing v1 | Why it is said: suggesting, warning, refusing |
| `ielts-listening-specific-info` — Listening for specific information | 11 | existing v1 | Targeted listening and answer-cue tracking |
| `ielts-listening-overall-meaning` — Following the overall meaning | 12 | existing v1 | Signposts, gist, discourse-structure recovery |

#### Chapter 3 — Every question type in depth (`question-types`)

| Lesson | Min | Status | Focus |
| --- | --- | --- | --- |
| `ielts-listening-multiple-choice` — Multiple choice in depth | 14 | existing v1 | Single and choose-two variants; verdict logic |
| `ielts-listening-matching` — Matching in depth | 14 | existing v1 | Elimination across speakers; option recycling |
| `ielts-listening-maps-diagrams` — Map and diagram labelling in depth | 14 | existing v1 | Direction language and starting-point discipline |
| `ielts-listening-form-completion` — Form completion in depth | 14 | existing v1 | The form layout as a prediction machine |
| `ielts-listening-note-completion` — Note completion in depth | 14 | existing v1 | Headings as topic locators in talks and lectures |
| `ielts-listening-table-completion` — Table completion in depth | 13 | existing v1 | Column headers define the answer type |
| `ielts-listening-flowchart-completion` — Flowchart completion in depth | 13 | existing v1 | Process stages and sequence signals |
| `ielts-listening-summary-completion` — Summary completion in depth | 14 | existing v1 | The heaviest paraphrase task |
| `ielts-listening-sentence-completion` — Sentence completion in depth | 13 | existing v1 | The sentence as a pre-listening contract |

#### Chapter 4 — The four parts in depth (`parts-in-depth`)

| Lesson | Min | Status | Focus |
| --- | --- | --- | --- |
| `ielts-listening-part1` — Part 1 — Everyday conversations and practical information | 14 | existing v1 | Transactional dialogues at dictation speed |
| `ielts-listening-part2` — Part 2 — The individual speaker | 14 | existing v1 | Social monologues with signpost tracking |
| `ielts-listening-part3` — Part 3 — Educational and training conversations | 14 | existing v1 | Multi-speaker study talk, opinions and attribution |
| `ielts-listening-part4` — Part 4 — Academic monologues | 14 | existing v1 | One lecture, ten gaps, ONE WORD ONLY |

**Practice activities**

- Listening Masterclass audio bank: original multi-speaker recordings with accent metadata, per-question error taxonomy (spelling, missed keywords, distractor lures) and revealed transcripts
- Progressive listening tests (beginner, intermediate, advanced) and timed per-part section tests from the mock library
- Numbers, dates and dictated-spelling drills from the drill pool
- Completion and objective question-set drills assembled per question family (six-mode practice engine)

**Assessments**

- Bank questions per lesson (auto-graded with why-wrong feedback)
- Two full-length Listening simulations (four parts, 40 questions, official timing) with raw score converted to an indicative band
- Masterclass performance analytics: question-type and part accuracy, spelling-mistake log, distractor-family counts and recommended lessons

**Completion criteria**

- All 31 lessons completed with bank questions attempted
- At least six audio-bank exercises completed and reviewed against their explanations
- One full-length Listening simulation attempted and reviewed in the performance dashboard

### I-M6 — Module 6 — Speaking Foundations and Part 1

> Course: ielts-academy-core · Slug: `module-6-speaking-part-1` · Pathways: IELTS Academic, IELTS General Training · Absorbs v1: `module-5-speaking (v1, absorbed by the PROMPT 47 Speaking Masterclass)`

The Speaking Masterclass (PROMPT 47) foundations and interview: the ten foundation crafts — test format, what the examiner assesses, answer development, natural fluency, avoiding memorised responses, pronunciation as a criterion, vocabulary, grammar accuracy in speech, extending answers naturally and handling unfamiliar questions — then one masterclass lesson per Part 1 familiar-topic set, each teaching the common question patterns, answer development, useful vocabulary, natural expressions, example responses, weak-versus-improved pairs and practice questions. Taught as ideas and language, never scripts to memorise.

**Learning objectives**

- Describe the Speaking test's three parts, timings, recording and delivery formats
- Explain what each of the four criteria rewards and what examiners do not penalise
- Answer Part 1 questions in developed two-to-four-sentence answers (direct answer, reason, detail) across all nineteen familiar-topic sets
- Sound natural rather than rehearsed, and handle questions you never prepared

**Prerequisites:** I-M1 · **Entry level:** B1+ · **Estimated study time:** ~8 h

#### Chapter 1 — Speaking foundations (`speaking-foundations`)

| Lesson | Min | Status | Focus |
| --- | --- | --- | --- |
| `ielts-speaking-format` — The Speaking examination format | 13 | existing v1 | Three parts, 11–14 recorded minutes, examiner in person or by video call |
| `ielts-speaking-assessed` — What the examiner assesses | 14 | existing v1 | The four criteria decoded honestly — behaviours rewarded, non-penalised moments |
| `ielts-speaking-answer-development` — Answer development | 15 | existing v1 | The layer method: direct answer, reason, detail — building to a natural 2–4 sentences |
| `ielts-speaking-fluency` — Natural fluency | 14 | existing v1 | Natural pace, meaning pauses vs language pauses, fillers, restarts and self-correction |
| `ielts-speaking-memorised` — Avoiding memorised responses | 13 | existing v1 | Why examiners detect scripts; preparing ideas and vocabulary, not sentences |
| `ielts-speaking-pronunciation-criterion` — Pronunciation: what the criterion really rewards | 14 | existing v1 | Intelligibility through stress, intonation and connected speech — accent-neutral |
| `ielts-speaking-vocabulary` — Vocabulary for speaking | 14 | existing v1 | Precision, collocation, paraphrase under pressure, spoken register |
| `ielts-speaking-grammar-speech` — Grammar accuracy in speech | 14 | existing v1 | The simple-plus-complex mix, tenses for stories, monitoring without freezing |
| `ielts-speaking-extending` — Extending answers naturally | 13 | existing v1 | The extension moves — contrast, example, feeling, consequence, time — and knowing when to stop |
| `ielts-speaking-unfamiliar` — Handling unfamiliar questions | 13 | existing v1 | Buying time honestly, thinking aloud, the honest 'I haven't thought about it' frame |

#### Chapter 2 — Part 1 — the nineteen topic sets (`speaking-part1-topics`)

| Lesson | Min | Status | Focus |
| --- | --- | --- | --- |
| `ielts-speaking-t-introduction` — Part 1 topics: Introduction | 12 | existing v1 | Identity, origins, home and work — the opening moves |
| `ielts-speaking-t-work` — Part 1 topics: Work | 12 | existing v1 | Job, responsibilities, workplace, why chosen, first-day memories |
| `ielts-speaking-t-study` — Part 1 topics: Study | 12 | existing v1 | Subjects, choices, favourite classes, study habits, future plans |
| `ielts-speaking-t-hometown` — Part 1 topics: Hometown | 12 | existing v1 | Where, known for, how changed, what visitors should see |
| `ielts-speaking-t-accommodation` — Part 1 topics: Accommodation | 12 | existing v1 | House or apartment, rooms, neighbourhood, dream home |
| `ielts-speaking-t-family` — Part 1 topics: Family | 12 | existing v1 | Who you live with, family time, traditions, closest to |
| `ielts-speaking-t-friends` — Part 1 topics: Friends | 12 | existing v1 | How met, what you do together, online vs in-person, staying in touch |
| `ielts-speaking-t-hobbies` — Part 1 topics: Hobbies | 12 | existing v1 | What, when started, alone or together, why it holds you |
| `ielts-speaking-t-food` — Part 1 topics: Food | 12 | existing v1 | Favourites, cooking vs eating out, local food, trying new things |
| `ielts-speaking-t-travel` — Part 1 topics: Travel | 12 | existing v1 | Nearby places, long journeys, dream trips, travel companions |
| `ielts-speaking-t-technology` — Part 1 topics: Technology | 12 | existing v1 | Devices, first phone, apps, screen time |
| `ielts-speaking-t-education` — Part 1 topics: Education | 12 | existing v1 | Schools attended, teachers, subjects, what education gave you |
| `ielts-speaking-t-routines` — Part 1 topics: Daily routines | 12 | existing v1 | Typical morning, best time of day, weekday vs weekend, rituals |
| `ielts-speaking-t-shopping` — Part 1 topics: Shopping | 12 | existing v1 | Where, online vs in-store, last purchase, bargains |
| `ielts-speaking-t-weather` — Part 1 topics: Weather | 12 | existing v1 | Climate, favourite season, weather and mood, small talk |
| `ielts-speaking-t-books` — Part 1 topics: Books | 12 | existing v1 | Habits, genres, paper vs digital, recommendations |
| `ielts-speaking-t-music` — Part 1 topics: Music | 12 | existing v1 | What and when, live music, instruments, music and memory |
| `ielts-speaking-t-sports` — Part 1 topics: Sports | 12 | existing v1 | Playing vs watching, school sports, staying active |
| `ielts-speaking-t-social` — Part 1 topics: Social activities | 12 | existing v1 | Weekends, celebrations, meeting people, hosting |

**Practice activities**

- Speaking Masterclass practice library: 19 original Part 1 interview rounds (five questions each with guidance, model answers and weak-versus-improved pairs), filterable by part, topic, difficulty, proficiency and skill
- Three-part Speaking Simulator: examiner-style question presentation with spoken playback, recording, replay, transcription and criterion-based feedback
- AI Tutor interview rehearsal on rotating familiar-topic sets

**Assessments**

- Bank questions on Part 1 strategy, criteria and every topic set
- Simulator Part 1 submissions evaluated on all four criteria with per-criterion feedback, sentence corrections, vocabulary suggestions, fluency feedback and pronunciation observations

**Completion criteria**

- All 29 lessons completed with bank questions attempted
- At least three Part 1 simulator or practice-library submissions evaluated and reviewed

### I-M7 — Module 7 — Speaking Part 2: The Long Turn

> Course: ielts-academy-core · Slug: `module-7-speaking-part-2` · Pathways: IELTS Academic, IELTS General Training · Absorbs v1: `module-5-speaking (v1, absorbed by the PROMPT 47 Speaking Masterclass)`

The Speaking Masterclass (PROMPT 47) for the cue-card long turn: the complete cue-card craft — understanding cue cards, identifying key requirements, the one-minute preparation, effective note-taking, organising ideas, maintaining continuity, speaking at length and handling unfamiliar topics — then one lesson per description family (people, places, events, experiences, objects, activities, achievements, books, films, travel, learning experiences), each carrying a complete original cue card with the prompt, planning notes, vocabulary suggestions, a natural sample response, response analysis, alternative approaches and follow-up practice.

**Learning objectives**

- Decode any cue card into its deliverables: the task line, the three prompts and the extension question
- Spend the one-minute preparation well and take fragment notes that survive nerves
- Organise, sustain and land a two-minute talk, recovering from blank moments without panic
- Answer any of the eleven description families with the family's signature moves

**Prerequisites:** I-M6 · **Entry level:** B1+ · **Estimated study time:** ~6 h

#### Chapter 1 — Part 2 — the cue-card craft (`speaking-part2-craft`)

| Lesson | Min | Status | Focus |
| --- | --- | --- | --- |
| `ielts-speaking-cue-cards` — Understanding cue cards | 13 | existing v1 | Card anatomy: task line, prompts, extension — which line carries the marks |
| `ielts-speaking-cue-requirements` — Identifying the key requirements | 13 | existing v1 | Each bullet is a job; the extension demands evaluation, not narration |
| `ielts-speaking-prep-minute` — The one-minute preparation | 13 | existing v1 | A second-by-second budget for the sixty silent seconds |
| `ielts-speaking-notes` — Effective note-taking | 14 | existing v1 | The four-corner note: fragments, arrows, abbreviations — never sentences |
| `ielts-speaking-organising` — Organising your ideas | 13 | existing v1 | Opening, body, turning point, reflection — the shape of two minutes |
| `ielts-speaking-continuity` — Maintaining continuity | 13 | existing v1 | Bridging phrases, the recovery sentence, repairing without panic |
| `ielts-speaking-at-length` — Speaking at length | 14 | existing v1 | Reaching the full two minutes and using them; why 40 seconds costs more than any error |
| `ielts-speaking-unfamiliar-topics` — Handling unfamiliar topics | 13 | existing v1 | Honest angles, borrowed experiences, inventing freely — the test is language |

#### Chapter 2 — Part 2 — the eleven cue-card families (`speaking-part2-cards`)

| Lesson | Min | Status | Focus |
| --- | --- | --- | --- |
| `ielts-speaking-card-people` — Cue card family: People | 14 | existing v1 | Who they are, how you met, the defining habit, what you take from them |
| `ielts-speaking-card-places` — Cue card family: Places | 14 | existing v1 | Where and when, sensory snapshot, what you did, why it stays |
| `ielts-speaking-card-events` — Cue card family: Events | 14 | existing v1 | Scene-setting, sequenced story, turning point, after-effect |
| `ielts-speaking-card-experiences` — Cue card family: Experiences | 14 | existing v1 | Background, what happened, how it changed you |
| `ielts-speaking-card-objects` — Cue card family: Objects | 14 | existing v1 | What and where it lives, how it came to you, why it matters |
| `ielts-speaking-card-activities` — Cue card family: Activities | 14 | existing v1 | What it involves, how you started, difficulty overcome, current level |
| `ielts-speaking-card-achievements` — Cue card family: Achievements | 14 | existing v1 | The goal, the difficulty, the effort, the pride — reflection-led |
| `ielts-speaking-card-books` — Cue card family: Books | 14 | existing v1 | What and about, when read, what stayed, how it affected you |
| `ielts-speaking-card-films` — Cue card family: Films | 14 | existing v1 | What it is, the striking scene, how it changed your view |
| `ielts-speaking-card-travel` — Cue card family: Travel | 14 | existing v1 | The journey, what happened, how you coped, arrival feelings |
| `ielts-speaking-card-learning` — Cue card family: Learning experiences | 14 | existing v1 | The skill, how learned, the difficulty, how you feel now |

**Practice activities**

- Speaking Masterclass practice library: 11 flagship cue cards (one per family, full seven-element teaching payload) plus 11 unseen practice cue cards for independent work
- Simulator Part 2 phase: card presentation, the timed one-minute preparation, up to two minutes of recorded speech, replay, transcription and evaluation
- AI Tutor long-turn rehearsal with evaluation against the speaking rubric

**Assessments**

- Bank questions on the cue-card craft and every family
- Simulator Part 2 submissions evaluated on all four criteria with requirement coverage, sample-response comparison and follow-up practice

**Completion criteria**

- All 19 lessons completed with bank questions attempted
- At least three recorded long turns submitted across different families and reviewed

### I-M8 — Module 8 — Speaking Part 3 and Pronunciation

> Course: ielts-academy-core · Slug: `module-8-speaking-part-3` · Pathways: IELTS Academic, IELTS General Training · Absorbs v1: `module-5-speaking (v1, absorbed by the PROMPT 47 Speaking Masterclass)`

The Speaking Masterclass (PROMPT 47) for the abstract discussion and the voice: eleven discussion skills — abstract discussion, giving opinions, explaining reasons, comparing, evaluating, speculating, discussing social changes, discussing future possibilities, supporting arguments, developing nuanced answers, closed by progressively difficult discussion practice — plus the accent-neutral pronunciation programme: individual sounds, word stress, sentence stress, intonation, connected speech, linking, rhythm, pausing, clear articulation and natural speech. No national accent is treated as worth more than another; the criterion rewards being easy to understand.

**Learning objectives**

- Climb the abstraction ladder from personal to societal and match the question's level
- Give, support and nuance opinions with the VIEW–REASON–EXAMPLE–CONTRAST spine, comparing, evaluating and speculating honestly
- Discuss social changes and future possibilities with cause, change and prediction language
- Make yourself easier to understand through stress, intonation, connected speech, rhythm and pausing — in any accent

**Prerequisites:** I-M7 · **Entry level:** B1+ · **Estimated study time:** ~6 h

#### Chapter 1 — Part 3 — discussion (`speaking-part3-discussion`)

| Lesson | Min | Status | Focus |
| --- | --- | --- | --- |
| `ielts-speaking-abstract` — Abstract discussion | 13 | existing v1 | The move from personal to societal; matching the question's level |
| `ielts-speaking-opinions` — Giving opinions | 13 | existing v1 | Positions stated, softened and held under challenge |
| `ielts-speaking-reasons` — Explaining reasons | 13 | existing v1 | The because-chain: reason, mechanism, example |
| `ielts-speaking-comparing` — Comparing | 13 | existing v1 | Contrast frames across eras, groups and options |
| `ielts-speaking-evaluating` — Evaluating | 13 | existing v1 | Judging significance with criteria, not gut statements |
| `ielts-speaking-speculating` — Speculating | 13 | existing v1 | Prediction and hypothesis with calibrated uncertainty |
| `ielts-speaking-social-changes` — Discussing social changes | 13 | existing v1 | How work, family, cities and habits have shifted |
| `ielts-speaking-future` — Discussing future possibilities | 13 | existing v1 | Predictions grounded in present evidence, both sides weighed |
| `ielts-speaking-supporting` — Supporting arguments | 13 | existing v1 | VIEW–REASON–EXAMPLE–CONTRAST; conceding then answering |
| `ielts-speaking-nuanced` — Developing nuanced answers | 14 | existing v1 | Partly-agree positions, honest 'it depends', hedged generalisations |
| `ielts-speaking-progressive` — Progressive discussion practice | 15 | existing v1 | Three worked discussions escalating from accessible to speculative |

#### Chapter 2 — Pronunciation (`speaking-pronunciation`)

| Lesson | Min | Status | Focus |
| --- | --- | --- | --- |
| `ielts-speaking-pron-sounds` — Individual sounds | 13 | existing v1 | The meaning-changing distinctions — accent-neutral, minimal pairs |
| `ielts-speaking-pron-word-stress` — Word stress | 12 | existing v1 | Stress shifts inside word families; the schwa |
| `ielts-speaking-pron-sentence-stress` — Sentence stress | 13 | existing v1 | Stress the meaning words; contrastive stress |
| `ielts-speaking-pron-intonation` — Intonation | 13 | existing v1 | Falling, rising, fall-rise; the monotone risk |
| `ielts-speaking-pron-connected` — Connected speech | 13 | existing v1 | How words join; hearing it, using it lightly |
| `ielts-speaking-pron-linking` — Linking | 12 | existing v1 | Practical joins across word boundaries |
| `ielts-speaking-pron-rhythm` — Rhythm | 12 | existing v1 | The stress-timed beat; rhythm as the carrier of fluency |
| `ielts-speaking-pron-pausing` — Pausing | 12 | existing v1 | Pausing at meaning boundaries, not mid-thought |
| `ielts-speaking-pron-articulation` — Clear articulation | 12 | existing v1 | Mouth positions, word endings, slowing down ten per cent |
| `ielts-speaking-pron-natural` — Natural speech | 13 | existing v1 | Putting it together: the four-question replay check and a self-training routine |

**Practice activities**

- Speaking Masterclass practice library: 10 progressively difficult Part 3 discussion sets (four questions each, escalating accessible → abstract → speculative) across ten themes
- Simulator Part 3 phase with recorded answers, replay, transcription and criterion-based feedback
- Self-recording pronunciation drills from the pronunciation lessons with the replay checklist

**Assessments**

- Bank questions on every discussion skill and pronunciation feature
- Simulator Part 3 submissions evaluated on all four criteria with per-question analysis
- Full three-part Speaking simulation attempted and reviewed in the performance dashboard

**Completion criteria**

- All 21 lessons completed with bank questions attempted
- One full three-part simulator session submitted and reviewed
- At least three pronunciation self-recordings reviewed against the replay checklist

### I-M9 — Module 9 — Vocabulary, Grammar and the Band Ladder

> Course: ielts-academy-core · Slug: `module-9-language-and-bands` · Pathways: IELTS Academic, IELTS General Training · Absorbs v1: `module-6-band-development`

The language-development engine of the academy, in two halves. The ladder half teaches exactly what changes between bands 4 and 9 so effort lands on the right rung. The language half builds the resources every section draws on: topic vocabulary, collocations, paraphrasing, academic word choice, complex sentences, error-budget discipline and natural expression.

**Learning objectives**

- Read the band ladder 4.0→9.0 and name the concrete language behaviours that separate adjacent bands
- Assemble topic-based vocabulary and collocations for the recurring IELTS topic families
- Paraphrase examiner language faithfully (the skill every section reuses) and choose academic over conversational wording
- Build three owned complex-sentence patterns and deploy them with a falling error rate
- Track and shrink a personal error budget across writing and speaking

**Prerequisites:** I-M1 · **Entry level:** B1+ (concurrent with the skills modules) · **Estimated study time:** ~5.5 h

#### Chapter 1 — The band ladder (`band-ladder`)

| Lesson | Min | Status | Focus |
| --- | --- | --- | --- |
| `ielts-band-ladder-overview` — The full ladder: targets from Band 4 to Band 9 | 15 | existing v1 | All ten targets, how half bands arise, reading your own report |
| `ielts-band-4-to-5` — Band 4 → 5: from limited to modest | 14 | existing v1 | Simple accuracy before complexity |
| `ielts-band-5-to-6` — Band 5 → 6: from modest to competent | 14 | existing v1 | Coverage, connection, three owned complex patterns |
| `ielts-band-6-to-7` — Band 6 → 7: from competent to good — the classic jump | 16 | existing v1 | Flexible cohesion, less-common vocabulary, error-free rate |
| `ielts-band-7-to-8` — Band 7 → 8: from good to very good | 14 | existing v1 | Consistency becomes style |
| `ielts-band-8-to-9` — Band 8 → 9: expert command | 12 | existing v1 | The descriptor ceiling — train the rung you need |

#### Chapter 2 — Topic-based vocabulary (`topic-vocabulary`)

| Lesson | Min | Status | Focus |
| --- | --- | --- | --- |
| `ielts-vocabulary-topics` — Topic vocabulary for the recurring IELTS families | 15 | **new** | Education, environment, technology, health, work, cities: the words that recur across all four sections |
| `ielts-vocabulary-collocations` — Collocations and word partnerships | 14 | **new** | Verb+noun and adjective+noun pairs that sound native; spotting and unlearning learned errors |

#### Chapter 3 — Precision and paraphrase (`precision-and-paraphrase`)

| Lesson | Min | Status | Focus |
| --- | --- | --- | --- |
| `ielts-vocabulary-paraphrasing` — Paraphrasing: the most reused skill in IELTS | 14 | **new** | Synonym substitution with grammar shifts; paraphrasing stems, questions and reading claims without distorting them |
| `ielts-vocabulary-word-choice` — Academic word choice | 14 | **new** | Register-appropriate precision: replacing vague words, choosing the exact academic twin, avoiding over-formal stiffness |

#### Chapter 4 — Grammar for the bands (`grammar-for-the-bands`)

| Lesson | Min | Status | Focus |
| --- | --- | --- | --- |
| `ielts-grammar-complex-sentences` — Complex sentence formation | 15 | **new** | Relative clauses, conditionals, concession and nominalisation — owned patterns deployed deliberately |
| `ielts-grammar-accuracy` — Grammar accuracy: the error budget | 14 | **new** | Counting and cutting errors per 100 words; the self-correction habit that lifts Grammatical Range and Accuracy |
| `ielts-expressions-natural` — Natural expressions and spoken register | 12 | **new** | Idiomatic but safe chunks, spoken discourse markers, warmth without slang |

**Practice activities**

- Word World topic sets bridged per pathway steps (vocabulary retention system)
- Grammar Clinic error-correction sessions on the learner's own recorded mistakes
- Paraphrase drills from the drill pool (reading stems and listening stems)
- Collocation and word-choice bank questions with why-wrong feedback

**Assessments**

- Bank questions across all language lessons
- Error-budget review: learner tracks errors per task across the module

**Completion criteria**

- All 13 lessons completed with bank questions attempted
- Personal error log started and reviewed at least once with the AI Tutor

### I-M10 — Module 10 — Full Examination Practice

> Course: ielts-academy-core · Slug: `module-10-full-practice` · Pathways: IELTS Academic, IELTS General Training · Absorbs v1: `module-7-exam-strategies`, `module-8-mocks`

The examination itself as a skill. Learners run the mock system with intent (modes, kinds, cadence), drill the strategies that protect marks under pressure, then learn to read a mock report the way an examiner would: section bands, the rounding rule in action, error patterns and the next-week plan they imply.

**Learning objectives**

- Operate the mock library: timed vs untimed modes, section vs full vs drill kinds, and the accelerating cadence to test day
- Apply instruction discipline (word limits, 'choose TWO letters', True vs Yes) and answer-selection strategy under the clock
- Score and avoid the ten commonest mark-losing mistakes, and use the mark → move → return protocol on hard items
- Convert any mock report into a diagnosis: section bands, overall with rounding, error taxonomy and a dated revision plan

**Prerequisites:** the four section modules of your pathway · **Entry level:** B1+ (after the four section modules of your pathway) · **Estimated study time:** ~4 h

#### Chapter 1 — The mock system (`mock-system`)

| Lesson | Min | Status | Focus |
| --- | --- | --- | --- |
| `ielts-mocks-guide` — The mock system: modes, kinds and cadence | 12 | existing v1 | Timed vs untimed; the accelerating cadence |

#### Chapter 2 — Strategies under the clock (`strategies-under-the-clock`)

| Lesson | Min | Status | Focus |
| --- | --- | --- | --- |
| `ielts-strategy-instructions` — Understanding instructions | 12 | existing v1 | Word limits, 'choose TWO letters', True vs Yes |
| `ielts-strategy-answering` — Answer selection strategies | 10 | existing v1 | Elimination, distractors, never leave a blank |
| `ielts-strategy-mistakes` — Avoiding common mistakes | 12 | existing v1 | The ten-row table — score your next mock against it |
| `ielts-strategy-difficult` — Handling difficult questions | 10 | existing v1 | Mark → move → return; the panic protocol |
| `ielts-strategy-review` — Review strategies | 12 | existing v1 | The five-step post-mock review and the error log |

#### Chapter 3 — Score analysis and revision (`score-analysis`)

| Lesson | Min | Status | Focus |
| --- | --- | --- | --- |
| `ielts-mocks-score-analysis` — Reading your mock report like an examiner | 14 | **new** | Section bands and the rounding rule on your own numbers; converting an error taxonomy into next week's drills; when a mock indicates readiness and when it does not |

**Practice activities**

- Section mocks for every section at official timing (variant bank)
- Full mock cycle: untimed baseline → timed sittings under exam conditions, accelerating to test day
- Drill-pool sessions targeted at the previous mock's error taxonomy
- AI Tutor review sessions turning mock reports into next-week plans

**Assessments**

- At least two timed full mocks from the learner's variant bank (band-estimated with per-item explanations)
- Post-mock five-step review completed for every sitting

**Completion criteria**

- All 7 lessons completed with bank questions attempted
- At least two timed full-mock attempts with five-step reviews recorded
- A final revision plan dated to the test date


## 3. Academic track modules (IELTS Academic only — distinct content, bank and mocks)

### IA-M3 — Module 3 — Academic Reading Mastery

> Course: ielts-academy-academic · Slug: `module-3a-academic-reading` · Pathways: IELTS Academic · Absorbs v1: `module-3a-academic-reading`

The Reading Masterclass (PROMPT 45): the fifteen foundation skills — the paper and its arithmetic, the three reading speeds, claim-and-support, paraphrase, context vocabulary, inference, the writer's opinion, purpose and tone, reference chains and paragraph architecture — then all thirteen official question types, each on a seven-component structure (definition, instructions, solving strategy, worked example, trap catalogue, guided and independent practice, per-item explanations), with original passages across the ten taught subjects and no specialist knowledge assumed.

**Learning objectives**

- Deploy the skim-scan-close-read sequence and the question-order rule on academic prose
- Separate claims from support, read implied meaning in one licensed step, and track the writer's voice against reported voices
- Apply every verdict, matching and completion type with its dedicated method, from True/False/Not Given boundaries to diagram anchoring
- Copy answers from the passage inside printed word limits, letter-exact, and repair them in the sweep
- Hold the 18/18/20 budget with the never-leave-a-blank protocol under real passages

**Prerequisites:** I-M1 · **Entry level:** B1+ · **Estimated study time:** ~6.5 h

#### Chapter 1 — Reading foundations: the fifteen skills (`reading-foundations`)

| Lesson | Min | Status | Focus |
| --- | --- | --- | --- |
| `ielts-areading-test` — Understanding the reading test | 12 | existing v1 | The paper's shape, the order rule and its exceptions |
| `ielts-areading-time` — Reading time management | 14 | existing v1 | 18/18/20 + sweep; two-minute ceiling; no blanks |
| `ielts-areading-skimming` — Skimming | 12 | existing v1 | The sixty-second paragraph map |
| `ielts-areading-scanning` — Scanning | 12 | existing v1 | Shapes, synonym conversion, order-bounded hunts |
| `ielts-areading-intensive` — Intensive reading | 12 | existing v1 | Claims, grammar fit, qualifiers on two or three lines |
| `ielts-areading-main-ideas` — Identifying main ideas | 12 | existing v1 | Five claim positions and the deletion test |
| `ielts-areading-supporting-details` — Locating supporting details | 12 | existing v1 | Figures, examples, mechanisms, concessions |
| `ielts-areading-paraphrase` — Understanding paraphrasing | 13 | existing v1 | Synonym chains, grammar flips, reorders; echoes deceive |
| `ielts-areading-vocabulary` — Vocabulary in context | 12 | existing v1 | The unknown-word protocol and exact copying |
| `ielts-areading-inference` — Inference | 13 | existing v1 | The one-step rule, triggers, the reverse test |
| `ielts-areading-opinion` — The writer's opinion | 12 | existing v1 | Four voices, attribution frames, endorsements |
| `ielts-areading-purpose` — The writer's purpose | 12 | existing v1 | Function verbs, audience from address and assumption |
| `ielts-areading-tone` — Tone | 11 | existing v1 | The tone thermometer and the quotable-line test |
| `ielts-areading-reference` — Reference words | 11 | existing v1 | Backwards resolution, kind-matching, qualifier inheritance |
| `ielts-areading-paragraphs` — Paragraph organisation | 12 | existing v1 | Four patterns, linker families, deviations |

#### Chapter 2 — Every question type in depth (`question-types`)

| Lesson | Min | Status | Focus |
| --- | --- | --- | --- |
| `ielts-areading-multiple-choice` — Multiple choice | 14 | existing v1 | Locate-predict-match-verify; edited echoes |
| `ielts-areading-true-false-not-given` — True / False / Not Given | 14 | existing v1 | The boundary rule: located contradiction vs silence |
| `ielts-areading-yes-no-not-given` — Yes / No / Not Given | 13 | existing v1 | Views verdicts, endorsement, label discipline |
| `ielts-areading-matching-headings` — Matching headings | 14 | existing v1 | Claim paraphrase, support test, spare audit |
| `ielts-areading-matching-information` — Matching information | 13 | existing v1 | Rarest elements, support content, reuse licence |
| `ielts-areading-matching-features` — Matching features | 13 | existing v1 | Feature inventories, both-handles attribution |
| `ielts-areading-matching-endings` — Matching sentence endings | 12 | existing v1 | Grammar screening, logic fit, verification |
| `ielts-areading-sentence-completion` — Sentence completion | 12 | existing v1 | Grammar prediction, order ratchet, copy exact |
| `ielts-areading-summary-completion` — Summary completion | 13 | existing v1 | The synopsis map, paraphrase chains, strict limits |
| `ielts-areading-note-completion` — Note completion | 12 | existing v1 | Label anchoring, telegraphic grammar |
| `ielts-areading-table-completion` — Table completion | 12 | existing v1 | Header predictions, printed-cell anchors, formats |
| `ielts-areading-flowchart-completion` — Flowchart completion | 12 | existing v1 | Stage markers, arrow discipline, slot classes |
| `ielts-areading-diagram-labelling` — Diagram labelling | 12 | existing v1 | Caption anchors, the description's tour |

**Practice activities**

- Passage library runs: any of the ten academic passages in practice or 20-minute timed mode
- Two full Academic simulations (official 60-minute clock, three passages each)
- Type-specific blocks inside every passage set, matching the lesson being studied
- Reading Room argumentative-prose bridging per pathway steps

**Assessments**

- Per-lesson bank questions with why-wrong feedback
- Full simulations scored item-by-item with the reading error taxonomy
- Performance dashboard: accuracy by type and section, vocabulary and inference logs, mistake-driven lesson recommendations

**Completion criteria**

- All 28 lessons completed with bank questions attempted
- One full Academic simulation attempted and reviewed with evidence highlighted

### IA-M4 — Module 4 — Academic Writing Task 1

> Course: ielts-academy-academic · Slug: `module-4a-writing-task-1` · Pathways: IELTS Academic · Absorbs v1: `module-4a-academic-writing (v1, absorbed by the PROMPT 46 masterclass)`

The Writing Masterclass (PROMPT 46) for the report and its foundations: the eleven writing crafts — instructions, requirements, planning, paragraphs, grammar, vocabulary, cohesion, coherence, punctuation, sentence variety, time — then one masterclass lesson per visual family (bar, line, pie, table, mixed, process, map) on the ten-component structure from analysing the visual to avoiding irrelevant data, each with an original worked mini-model.

**Learning objectives**

- Decode any Writing rubric and analyse its requirements before writing a word
- Plan, paragraph and punctuate with the accuracy and range the criteria reward
- Write the ten-component Task 1 method for every visual family: analyse, select, compare, organise, overview, detail
- Produce introductions that paraphrase and overviews that stand alone
- Hold the 20-minute budget and the 150-word floor under exam conditions

**Prerequisites:** I-M1 · **Entry level:** B1+ (concurrent with I-M9 language chapters recommended) · **Estimated study time:** ~6 h

#### Chapter 1 — Writing foundations (`awriting-foundations`)

| Lesson | Min | Status | Focus |
| --- | --- | --- | --- |
| `ielts-awriting-instructions` — Understanding task instructions | 14 | existing v1 | The rubric decoded verb by verb; word limits as scoring rules |
| `ielts-awriting-requirements` — Analysing question requirements | 14 | existing v1 | Topic, instruction and scope; counting the deliverables |
| `ielts-awriting-planning` — Planning | 16 | existing v1 | The two-minute Task 1 plan; overview before detail |
| `ielts-awriting-paragraphs` — Paragraph organisation | 15 | existing v1 | One controlling idea; POINT–EXPLAIN–EXAMPLE; architecture per task |
| `ielts-awriting-grammar` — Grammar accuracy | 16 | existing v1 | The highest-value accuracy rules; the error-log method |
| `ielts-awriting-vocabulary` — Vocabulary | 15 | existing v1 | Precision over decoration; trend verbs, stance and collocation |
| `ielts-awriting-cohesion` — Cohesion | 15 | existing v1 | Cohesive devices by function; reference chains; linker discipline |
| `ielts-awriting-coherence` — Coherence | 14 | existing v1 | The one-thread response; ordering principles; the so-what test |
| `ielts-awriting-punctuation` — Punctuation | 13 | existing v1 | Sentence boundaries; the comma splice and its fixes; apostrophes |
| `ielts-awriting-sentence-variety` — Sentence variety | 14 | existing v1 | The simple/compound/complex mix the examiner can see |
| `ielts-awriting-time` — Time management | 13 | existing v1 | 20 + 40 arithmetic; budgets, checking protocols, emergencies |

#### Chapter 2 — Every visual family (`awriting-task1`)

| Lesson | Min | Status | Focus |
| --- | --- | --- | --- |
| `ielts-awriting-t1-bar` — Task 1 — Bar charts | 16 | existing v1 | Ranking language; grouped series; the ten-component method |
| `ielts-awriting-t1-line` — Task 1 — Line graphs | 16 | existing v1 | Direction and degree vocabulary; anchors, crossings, turning points |
| `ielts-awriting-t1-pie` — Task 1 — Pie charts | 15 | existing v1 | Proportion language; comparing two pies category by category |
| `ielts-awriting-t1-table` — Task 1 — Tables | 15 | existing v1 | Mixed units discipline; clusters and outliers; state verbs |
| `ielts-awriting-t1-mixed` — Task 1 — Mixed charts | 16 | existing v1 | Two visuals, one story; linking data across panels without double-reporting |
| `ielts-awriting-t1-process` — Task 1 — Process diagrams | 16 | existing v1 | The passive report; sequencing devices; linear and cyclical processes |
| `ielts-awriting-t1-map` — Task 1 — Maps | 16 | existing v1 | The language of change; positions and directions; comparing eras |

**Practice activities**

- Writing studio task library: 8 Academic Task 1 assignments (one per visual family plus a second bar chart) in timed or untimed mode
- Overview-sentence drills: select the valid overview, reject the decoys
- Level-sample study: compare the band-estimate samples against your own attempt after submission

**Assessments**

- Bank questions on chart language and overview validity
- Timed Task 1 studio submissions evaluated on all four criteria with per-criterion feedback

**Completion criteria**

- All 18 lessons completed with bank questions attempted
- Three timed Task 1 studio submissions evaluated and reviewed

### IA-M5 — Module 5 — Academic Writing Task 2

> Course: ielts-academy-academic · Slug: `module-5a-writing-task-2` · Pathways: IELTS Academic · Absorbs v1: `module-4a-academic-writing (Task 2 unit, absorbed by the PROMPT 46 masterclass)`

The Writing Masterclass (PROMPT 46) for the band-deciding essay: one masterclass lesson per essay family — opinion, discussion, advantages and disadvantages, problem and solution, cause and effect, two-part and direct questions — each teaching the ten craft points from understanding the question to avoiding repetition, with fully planned prompts and worked mini-models. Closes with the assessment lessons: the four criteria decoded honestly, and model answers studied at different levels.

**Learning objectives**

- Identify the essay family and its deliverables in ninety seconds
- Choose and hold a position, then build body paragraphs that prove it
- Write every family's skeleton: opinion, discussion, weighing, matched problem-solution, both parts, direct answers
- Read the four criteria and self-assess against them with band estimates honestly framed
- Study model answers at different levels without memorising them

**Prerequisites:** I-M1 · **Entry level:** B1+ (Task 2 carries double weight — prioritise it if time is short) · **Estimated study time:** ~6 h

#### Chapter 1 — Every essay family (`awriting-task2`)

| Lesson | Min | Status | Focus |
| --- | --- | --- | --- |
| `ielts-awriting-t2-opinion` — Task 2 — Opinion essays | 17 | existing v1 | The thesis that survives four paragraphs; strong vs partly-agreeing |
| `ielts-awriting-t2-discussion` — Task 2 — Discussion essays | 17 | existing v1 | Both views fairly, your verdict up front |
| `ielts-awriting-t2-advantages` — Task 2 — Advantages and disadvantages | 16 | existing v1 | Weighing language and the verdict requirement |
| `ielts-awriting-t2-problem-solution` — Task 2 — Problem and solution | 16 | existing v1 | Both parts delivered; solutions matched to problems |
| `ielts-awriting-t2-cause-effect` — Task 2 — Cause and effect | 16 | existing v1 | Root causes vs triggers; effect chains; both halves budgeted |
| `ielts-awriting-t2-two-part` — Task 2 — Two-part questions | 16 | existing v1 | Part one in body one, part two in body two; the turn sentence |
| `ielts-awriting-t2-direct` — Task 2 — Direct questions | 15 | existing v1 | Answer-as-thesis; depth over lists |

#### Chapter 2 — Assessment and model answers (`awriting-assessment`)

| Lesson | Min | Status | Focus |
| --- | --- | --- | --- |
| `ielts-awriting-criteria` — How examiners score your writing | 15 | existing v1 | The four criteria and how they combine — estimates honestly framed |
| `ielts-awriting-models` — Studying model answers at different levels | 14 | existing v1 | Reverse-engineer, borrow scaffolding, never memorise |

**Practice activities**

- Writing studio: 7 Academic Task 2 assignments, one per essay family, timed on the 40-minute clock
- Thesis and paragraph-plan drills before full essays
- Level-sample comparison after each submission (band-estimate samples with per-criterion justifications)

**Assessments**

- Bank questions on essay families and structure
- Timed Task 2 studio submissions evaluated on all four criteria with per-criterion feedback

**Completion criteria**

- All 9 lessons completed with bank questions attempted
- Three timed Task 2 studio submissions evaluated and reviewed


## 4. General Training track modules (IELTS General Training only — never reused from Academic)

### IG-M3 — Module 3 — General Training Reading Mastery

> Course: ielts-academy-general-training · Slug: `module-3g-gt-reading` · Pathways: IELTS General Training · Absorbs v1: `module-3g-gt-reading`

The GT Reading academy (PROMPT 45, Part C): the three sections and their 15/20/25 budget, the practical-reading craft of notices, advertisements, instructions, workplace documents and informational texts — headline bait versus small-print answers, the modal-verb method for policies, format-aware reading for leaflets and multi-text sets — and the full Academic protocol applied to Section 3's longer general-interest passages. Distinct content and bank from Academic Reading — never reused.

**Learning objectives**

- Navigate the three GT sections and budget 15/20/25 minutes across them
- Read notices and advertisements for their exception clauses, conditions and contact rules
- Follow instructions by steps, gates and bans, and extract obligations from workplace documents through the modal-verb method
- Read informational texts by their format — headings, boxes, bullets — and harvest half-permissions whole
- Apply the full reading protocol to Section 3's feature passages, with attribution frames on quotes and tone read from the asides

**Prerequisites:** I-M1 · **Entry level:** B1+ · **Estimated study time:** ~2.5 h

#### Chapter 1 — Practical reading, section by section (`gt-reading-practical`)

| Lesson | Min | Status | Focus |
| --- | --- | --- | --- |
| `ielts-greading-test` — Understanding the GT Reading paper | 12 | existing v1 | Three sections; the 15/20/25 budget; what transfers from Academic |
| `ielts-greading-notices` — Section 1: reading notices | 11 | existing v1 | Headline bait, small-print answers, conditional numbers |
| `ielts-greading-advertisements` — Section 1: reading advertisements | 11 | existing v1 | Offers, conditions, triggers and contact rules |
| `ielts-greading-instructions` — Section 2: following instructions | 11 | existing v1 | Steps, gates, bans — sequence discipline |
| `ielts-greading-workplace` — Section 2: workplace documents | 12 | existing v1 | The modal-verb method: must, may, only, within |
| `ielts-greading-informational` — Everyday informational texts | 11 | existing v1 | Format maps, half-permissions, multi-text spans |
| `ielts-greading-longer` — Section 3: longer general-interest passages | 13 | existing v1 | The full protocol on feature prose; quotes and asides |

**Practice activities**

- GT passage library runs: notices, advertisements, guides, instructions and policies in practice or timed mode
- One full GT simulation on the official 60-minute clock (Sections 1–3)
- Reading Room general-interest bridging activity per pathway steps

**Assessments**

- Per-lesson bank questions with why-wrong feedback
- GT simulation scored item-by-item with the reading error taxonomy

**Completion criteria**

- All 7 lessons completed with bank questions attempted
- One timed GT simulation attempted and reviewed

### IG-M4 — Module 4 — General Training Writing Task 1: The Letter

> Course: ielts-academy-general-training · Slug: `module-4g-writing-task-1` · Pathways: IELTS General Training · Absorbs v1: `module-4g-gt-writing (v1, absorbed by the PROMPT 46 masterclass)`

The Writing Masterclass (PROMPT 46) for the letter and its foundations: the eleven writing crafts taught through GT eyes — letters and everyday essays, register and bullets — then the complete letter course: the three registers (formal, semi-formal, informal), the six purposes (complaints, requests, invitations, apologies, explanations, suggestions) and the cross-cutting crafts of tone and organisation, every lesson built around an original model letter.

**Learning objectives**

- Analyse the situation, recipient and bullets to select the correct register before writing
- Write formal, semi-formal and informal openings and closings without register clashes
- Handle all six letter purposes with the set phrases and softening each deserves
- Control the tone dial and keep one register from greeting to sign-off
- Organise the universal skeleton: purpose line, one paragraph per bullet, forward-looking close

**Prerequisites:** I-M1 · **Entry level:** B1+ · **Estimated study time:** ~6.5 h

#### Chapter 1 — Writing foundations (`gwriting-foundations`)

| Lesson | Min | Status | Focus |
| --- | --- | --- | --- |
| `ielts-gwriting-instructions` — Understanding task instructions | 14 | existing v1 | Letter rubrics and essay questions decoded; bullets as the spine |
| `ielts-gwriting-requirements` — Analysing question requirements | 14 | existing v1 | Situation, audience, purpose, bullets — before a word is written |
| `ielts-gwriting-planning` — Planning | 16 | existing v1 | The two-minute letter plan; the four-minute essay plan |
| `ielts-gwriting-paragraphs` — Paragraph organisation | 15 | existing v1 | Letter anatomy beside essay architecture |
| `ielts-gwriting-grammar` — Grammar accuracy | 16 | existing v1 | Contractions by register; tense for past situations; the error log |
| `ielts-gwriting-vocabulary` — Vocabulary | 15 | existing v1 | Register-matched vocabulary: the formal shelf and the warm-friend shelf |
| `ielts-gwriting-cohesion` — Cohesion | 15 | existing v1 | Moving between bullets gracefully; linkers by register |
| `ielts-gwriting-coherence` — Coherence | 14 | existing v1 | The one-thread letter; the reader's-questions test |
| `ielts-gwriting-punctuation` — Punctuation | 13 | existing v1 | Frame commas; the splice and its fixes; apostrophes by register |
| `ielts-gwriting-sentence-variety` — Sentence variety | 14 | existing v1 | Range in a register-appropriate key; questions to a friend |
| `ielts-gwriting-time` — Time management | 13 | existing v1 | The GT 60 minutes; bullet sweeps; under-length mathematics |

#### Chapter 2 — The letter course (`gwriting-letters`)

| Lesson | Min | Status | Focus |
| --- | --- | --- | --- |
| `ielts-gwriting-formal` — Formal letters | 16 | existing v1 | Dear Sir or Madam; no contractions; set formal phrases |
| `ielts-gwriting-semi-formal` — Semi-formal letters | 15 | existing v1 | Known reader, polite but personal; selective contractions |
| `ielts-gwriting-informal` — Informal letters | 15 | existing v1 | Dear + first name; contractions expected; warm but organised |
| `ielts-gwriting-complaint` — Writing complaints | 15 | existing v1 | Facts, impact, remedy — firm without aggression |
| `ielts-gwriting-request` — Making requests | 15 | existing v1 | Context before the ask; the would/could politeness ladder |
| `ielts-gwriting-invitation` — Invitations | 14 | existing v1 | What-when-where early; enthusiasm by register |
| `ielts-gwriting-apology` — Apologies | 14 | existing v1 | Acknowledge, explain without excusing, offer repair |
| `ielts-gwriting-explanation` — Explanations | 14 | existing v1 | The reader's three questions as paragraph logic |
| `ielts-gwriting-suggestion` — Suggestions | 14 | existing v1 | Acknowledge, propose specifically, anticipate objections |
| `ielts-gwriting-tone` — Tone | 15 | existing v1 | The tone dial; consistency; spotting and fixing register breaks |
| `ielts-gwriting-letter-organisation` — Letter organisation | 15 | existing v1 | The universal skeleton; paragraph-per-bullet; length control |

**Practice activities**

- Writing studio: 6 GT letter assignments covering all six purposes and all three registers, timed or untimed
- Tone-choice drills and register diagnostics from the lessons
- Level-sample study after submission (band-estimate samples with per-criterion justifications)

**Assessments**

- Bank questions on register decisions and purpose language
- Timed letters evaluated on all four criteria — task achievement in the GT letter sense (purpose, tone, bullets)

**Completion criteria**

- All 22 lessons completed with bank questions attempted
- Three timed letters submitted, evaluated and reviewed

### IG-M5 — Module 5 — General Training Writing Task 2: The Everyday Essay

> Course: ielts-academy-general-training · Slug: `module-5g-writing-task-2` · Pathways: IELTS General Training · Absorbs v1: `module-4g-gt-writing (Task 2 lesson, absorbed by the PROMPT 46 masterclass)`

The Writing Masterclass (PROMPT 46) for the GT essay: the seven essay families — opinion, discussion, advantages and disadvantages, problem and solution, cause and effect, two-part and direct questions — on everyday topics in a semi-formal register, each teaching the ten craft points with worked mini-models, closing with the assessment lesson that decodes the criteria including the GT letter's task-achievement criterion. Authored fresh for this track, never reused Academic lessons.

**Learning objectives**

- Plan a GT essay in four minutes around a clear position on an everyday topic
- Write all seven essay families with GT topics and semi-formal register
- Support arguments with everyday, concrete examples rather than academic citations
- Read the four criteria — task achievement for the letter, task response for the essay — as honest estimates
- Hold the 40-minute budget and 250-word floor with GT-specific timed practice

**Prerequisites:** I-M1 · **Entry level:** B1+ · **Estimated study time:** ~4.5 h

#### Chapter 1 — The everyday essay (`gwriting-task2`)

| Lesson | Min | Status | Focus |
| --- | --- | --- | --- |
| `ielts-gwriting-t2-opinion` — GT Task 2 — Opinion essays | 16 | existing v1 | Stated position; reasons from daily life |
| `ielts-gwriting-t2-discussion` — GT Task 2 — Discussion essays | 16 | existing v1 | Two-view fairness; the verdict up front |
| `ielts-gwriting-t2-advantages` — GT Task 2 — Advantages and disadvantages | 15 | existing v1 | Weighing everyday arrangements; the verdict requirement |
| `ielts-gwriting-t2-problem-solution` — GT Task 2 — Problem and solution | 15 | existing v1 | Everyday problems; matched fixes with feasibility notes |
| `ielts-gwriting-t2-cause-effect` — GT Task 2 — Cause and effect | 15 | existing v1 | Everyday causes; effect chains; both halves |
| `ielts-gwriting-t2-two-part` — GT Task 2 — Two-part questions | 15 | existing v1 | Part one in body one; the turn sentence; word-budget symmetry |
| `ielts-gwriting-t2-direct` — GT Task 2 — Direct questions | 14 | existing v1 | Answer-as-thesis; depth over lists |

#### Chapter 2 — Assessment (`gwriting-assessment`)

| Lesson | Min | Status | Focus |
| --- | --- | --- | --- |
| `ielts-gwriting-criteria` — How examiners score your letter and essay | 15 | existing v1 | The four criteria with the GT task-achievement specifics — honestly framed |

**Practice activities**

- Writing studio: 4 GT everyday-essay assignments timed on the 40-minute clock
- Register diagnostics: keeping contractions out of the essay but alive in the right letters
- Level-sample comparison after each submission

**Assessments**

- Bank questions on GT essay structure and register (GT bank)
- Timed GT essays evaluated on all four criteria with per-criterion feedback

**Completion criteria**

- All 8 lessons completed with bank questions attempted
- Two timed GT essays submitted, evaluated and reviewed


## 5. Topic coverage matrix (machine-checked)

Every topic mandated by PROMPT 42 PART A, mapped to the lessons that cover it. `scripts/validate-exam-blueprint.ts` fails the build if any row reads NOT COVERED.

**I-M1 — IELTS Fundamentals** (PROMPT 42 — IELTS Fundamentals)

| Required topic | Covered by |
| --- | --- |
| examination introduction | `ielts-what-and-why`, `ielts-academic-vs-gt` |
| test structure | `ielts-four-skills-format` |
| band scores | `ielts-band-scoring`, `ielts-target-scores` |
| assessment criteria | `ielts-assessment-criteria` |
| academic preparation strategy | `ielts-preparation-strategy` |
| time management | `ielts-study-planning`, `ielts-strategy-time` |
| test-day guidance | `ielts-computer-based`, `ielts-registration-awareness`, `ielts-strategy-exam-day` |

**I-M2 — Listening Mastery** (PROMPT 42 — Listening Mastery)

| Required topic | Covered by |
| --- | --- |
| listening test structure | `ielts-listening-overview`, `ielts-listening-instructions` |
| all four listening parts | `ielts-listening-overview`, `ielts-listening-keywords`, `ielts-listening-speakers`, `ielts-listening-specific-info`, `ielts-listening-overall-meaning`, `ielts-listening-part1`, `ielts-listening-part2`, `ielts-listening-part3`, `ielts-listening-part4` |
| form completion | `ielts-listening-form-completion`, `ielts-listening-part1` |
| note completion | `ielts-listening-note-completion`, `ielts-listening-part4` |
| table completion | `ielts-listening-table-completion`, `ielts-listening-flowchart-completion` |
| sentence completion | `ielts-listening-sentence-completion` |
| summary completion | `ielts-listening-summary-completion` |
| matching | `ielts-listening-matching`, `ielts-listening-part3` |
| multiple choice | `ielts-listening-multiple-choice` |
| map and diagram labelling | `ielts-listening-maps-diagrams`, `ielts-listening-part2` |
| distractors | `ielts-listening-predicting`, `ielts-listening-distractors`, `ielts-listening-corrections`, `ielts-listening-opinions`, `ielts-listening-intention` |
| synonyms and paraphrasing | `ielts-listening-synonyms`, `ielts-listening-paraphrase` |
| different English accents | `ielts-listening-accents` |

**IA-M3 — Academic Reading Mastery** (PROMPT 42 — Academic Reading Mastery)

| Required topic | Covered by |
| --- | --- |
| reading strategies | `ielts-areading-test` |
| skimming | `ielts-areading-skimming` |
| scanning | `ielts-areading-scanning` |
| main ideas | `ielts-areading-main-ideas` |
| supporting details | `ielts-areading-supporting-details` |
| inference | `ielts-areading-inference` |
| True/False/Not Given | `ielts-areading-true-false-not-given` |
| Yes/No/Not Given | `ielts-areading-yes-no-not-given` |
| matching headings | `ielts-areading-matching-headings` |
| matching information | `ielts-areading-matching-information` |
| matching features | `ielts-areading-matching-features` |
| matching sentence endings | `ielts-areading-matching-endings` |
| multiple choice | `ielts-areading-multiple-choice` |
| summary completion | `ielts-areading-summary-completion` |
| sentence completion | `ielts-areading-sentence-completion` |
| diagram labelling | `ielts-areading-diagram-labelling` |
| time management | `ielts-areading-time` |

**IA-M4 — Academic Writing Task 1** (PROMPT 42 — Academic Writing Task 1)

| Required topic | Covered by |
| --- | --- |
| graph interpretation | `ielts-awriting-t1-bar` |
| bar charts | `ielts-awriting-t1-bar` |
| line graphs | `ielts-awriting-t1-line` |
| pie charts | `ielts-awriting-t1-pie` |
| tables | `ielts-awriting-t1-table` |
| mixed charts | `ielts-awriting-t1-mixed` |
| process diagrams | `ielts-awriting-t1-process` |
| maps | `ielts-awriting-t1-map` |
| comparison | `ielts-awriting-t1-pie` |
| trends | `ielts-awriting-t1-line` |
| introductions | `ielts-awriting-t1-mixed` |
| overviews | `ielts-awriting-t1-bar` |
| data selection | `ielts-awriting-t1-table` |
| paragraph organisation | `ielts-awriting-paragraphs` |

**IA-M5 — Academic Writing Task 2** (PROMPT 42 — Academic Writing Task 2)

| Required topic | Covered by |
| --- | --- |
| opinion essays | `ielts-awriting-t2-opinion` |
| discussion essays | `ielts-awriting-t2-discussion` |
| advantages and disadvantages | `ielts-awriting-t2-advantages` |
| problem and solution | `ielts-awriting-t2-problem-solution` |
| two-part questions | `ielts-awriting-t2-two-part` |
| essay planning | `ielts-awriting-t2-opinion` |
| thesis statements | `ielts-awriting-t2-opinion` |
| topic sentences | `ielts-awriting-t2-advantages` |
| supporting arguments | `ielts-awriting-t2-problem-solution` |
| examples | `ielts-awriting-t2-problem-solution` |
| coherence | `ielts-awriting-t2-discussion` |
| conclusions | `ielts-awriting-t2-two-part` |

**I-M6 — Speaking Foundations and Part 1** (PROMPT 42 — Speaking Part 1)

| Required topic | Covered by |
| --- | --- |
| personal questions | `ielts-speaking-t-introduction`, `ielts-speaking-t-work`, `ielts-speaking-t-study` |
| familiar topics | `ielts-speaking-t-introduction`, `ielts-speaking-t-work`, `ielts-speaking-t-study`, `ielts-speaking-t-hometown`, `ielts-speaking-t-accommodation`, `ielts-speaking-t-family`, `ielts-speaking-t-friends`, `ielts-speaking-t-hobbies`, `ielts-speaking-t-food`, `ielts-speaking-t-travel`, `ielts-speaking-t-technology`, `ielts-speaking-t-education`, `ielts-speaking-t-routines`, `ielts-speaking-t-shopping`, `ielts-speaking-t-weather`, `ielts-speaking-t-books`, `ielts-speaking-t-music`, `ielts-speaking-t-sports`, `ielts-speaking-t-social` |
| answer development | `ielts-speaking-answer-development`, `ielts-speaking-extending` |
| natural fluency | `ielts-speaking-fluency` |
| avoiding memorised responses | `ielts-speaking-memorised` |

**I-M7 — Speaking Part 2: The Long Turn** (PROMPT 42 — Speaking Part 2)

| Required topic | Covered by |
| --- | --- |
| cue cards | `ielts-speaking-cue-cards`, `ielts-speaking-cue-requirements`, `ielts-speaking-card-people`, `ielts-speaking-card-places`, `ielts-speaking-card-events`, `ielts-speaking-card-experiences`, `ielts-speaking-card-objects`, `ielts-speaking-card-activities`, `ielts-speaking-card-achievements`, `ielts-speaking-card-books`, `ielts-speaking-card-films`, `ielts-speaking-card-travel`, `ielts-speaking-card-learning` |
| preparation notes | `ielts-speaking-prep-minute`, `ielts-speaking-notes` |
| topic development | `ielts-speaking-cue-requirements`, `ielts-speaking-organising`, `ielts-speaking-continuity` |
| describing experiences | `ielts-speaking-card-experiences`, `ielts-speaking-card-achievements`, `ielts-speaking-card-travel`, `ielts-speaking-card-learning` |
| describing people | `ielts-speaking-card-people` |
| describing places | `ielts-speaking-card-places` |
| describing objects | `ielts-speaking-card-objects` |
| speaking at length | `ielts-speaking-continuity`, `ielts-speaking-at-length` |

**I-M8 — Speaking Part 3 and Pronunciation** (PROMPT 42 — Speaking Part 3)

| Required topic | Covered by |
| --- | --- |
| abstract discussion | `ielts-speaking-abstract`, `ielts-speaking-nuanced`, `ielts-speaking-progressive` |
| comparing | `ielts-speaking-comparing`, `ielts-speaking-progressive` |
| explaining | `ielts-speaking-reasons` |
| speculating | `ielts-speaking-speculating`, `ielts-speaking-future`, `ielts-speaking-progressive` |
| supporting opinions | `ielts-speaking-opinions`, `ielts-speaking-supporting` |
| discussing social issues | `ielts-speaking-social-changes` |

**I-M9 — Vocabulary, Grammar and the Band Ladder** (PROMPT 42 — Vocabulary and Grammar for IELTS)

| Required topic | Covered by |
| --- | --- |
| topic-based vocabulary | `ielts-vocabulary-topics` |
| collocations | `ielts-vocabulary-collocations` |
| paraphrasing | `ielts-vocabulary-paraphrasing` |
| academic word choice | `ielts-vocabulary-word-choice` |
| grammar accuracy | `ielts-grammar-accuracy` |
| complex sentence formation | `ielts-grammar-complex-sentences` |
| natural expressions | `ielts-expressions-natural` |

**I-M10 — Full Examination Practice** (PROMPT 42 — Full Examination Practice)

| Required topic | Covered by |
| --- | --- |
| section tests | `ielts-mocks-guide` |
| full mock examinations | `ielts-mocks-guide` |
| score analysis | `ielts-mocks-score-analysis` |
| revision | `ielts-strategy-instructions`, `ielts-strategy-answering`, `ielts-strategy-mistakes`, `ielts-strategy-difficult`, `ielts-strategy-review` |

**IG-M3 — General Training Reading Mastery** (PROMPT 42 — General Training Reading)

| Required topic | Covered by |
| --- | --- |
| everyday texts | `ielts-greading-informational` |
| notices | `ielts-greading-notices` |
| advertisements | `ielts-greading-advertisements` |
| workplace documents | `ielts-greading-workplace` |
| general-interest passages | `ielts-greading-longer` |
| reading strategies | `ielts-greading-test` |

**IG-M4 — General Training Writing Task 1: The Letter** (PROMPT 42 — General Training Writing Task 1)

| Required topic | Covered by |
| --- | --- |
| formal letters | `ielts-gwriting-formal` |
| semi-formal letters | `ielts-gwriting-semi-formal` |
| informal letters | `ielts-gwriting-informal` |
| requests | `ielts-gwriting-request` |
| complaints | `ielts-gwriting-complaint` |
| invitations | `ielts-gwriting-invitation` |
| explanations | `ielts-gwriting-explanation` |
| suggestions | `ielts-gwriting-suggestion` |

**IG-M5 — General Training Writing Task 2: The Everyday Essay** (PROMPT 42 — General Training Writing Task 2)

| Required topic | Covered by |
| --- | --- |
| GT essay craft | `ielts-gwriting-t2-opinion` |

