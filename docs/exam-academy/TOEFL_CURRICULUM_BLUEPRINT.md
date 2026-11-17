# TOEFL iBT Academy — Curriculum Blueprint v2.3.0

**Date:** 2026-11-15 · PART B (2026-format academy) + PART C (module specifications) · Master document: `CURRICULUM_BLUEPRINT.md`
> Generated from the versioned blueprint data in `src/data/exam-academy/` by `scripts/generate-blueprint-docs.ts` — edit the data, then regenerate. Structural guarantees (topic coverage, migration mapping, pathway integrity) are enforced by `scripts/validate-exam-blueprint.ts` and `tests/exam-blueprint.test.ts`.

## 1. Foundation: the format in force since 21 January 2026

Verified against ets.org (test content page, retrieved 2026-11-12 and 2026-11-14; see the active `TOEFL_IBT/STANDARD` specification and its source refs). The 2026 task types below are the official names; the platform's internal task-type keys map onto them (`COMPLETE_WORDS` → Complete the Words, `SENTENCE_RECONSTRUCTION` → Build a Sentence, and so on).

| Section | Items | Timing | Task types (official names) | Delivery |
| --- | --- | --- | --- | --- |
| Reading | 50 | ~30 min | Complete the Words · Read in Daily Life · Read an Academic Passage | Two-stage adaptive |
| Listening | 47 | ~29 min | Listen and Choose a Response · Listen to a Conversation · Listen to an Announcement · Listen to an Academic Talk | Two-stage adaptive, forward-only |
| Speaking | 11 | ~8 min | Listen and Repeat (7 sentences, 8/10/12 s windows) · Take an Interview (4 items) | Linear |
| Writing | 12 | ~23 min | Build a Sentence (10) · Write an Email · Write for an Academic Discussion | Linear |

~90 minutes of timed sections; allow ~2 hours overall; item counts and time vary as the test adapts. Scoring: section bands 1.0–6.0 in half steps; overall = mean rounded to the nearest half band; CEFR printed on the report; comparable 0–120 score dual-reported during the 2026–2028 transition; MyBest superscoring across valid tests; scores within ~72 hours; two-year validity; no pass mark.

## 2. Pathway configuration

### TOEFL iBT Preparation Pathway (2026 format)

Seven modules in the PROMPT 42 structure: Fundamentals, Reading, Listening, Writing, Speaking, Grammar and Vocabulary, and Full TOEFL Practice — all built around the format effective 21 January 2026, with bridging steps into the common English curriculum and a mock cycle on the TOEFL bank.

**Module order:** T-M1 → T-M2 → T-M3 → T-M4 → T-M5 → T-M6 → T-M7

- Course: toefl-ibt-academy (all seven modules) under the new toefl-preparation CMS level
- Specification: TOEFL_IBT/STANDARD active version (currently v1, effective 2026-01-21, format-verified against ets.org)
- Question and mock banks: TOEFL only — never mixed with IELTS pools (integrity rule)
- Rubrics: toefl.writing (Development / Organization / Language use) and toefl.speaking (Delivery / Language use / Topic development), 6→1 ladders
- Practice conversions for indicative 1–6 bands are labelled as EnglishPath practice estimates (ETS publishes no raw-to-band table)
- Score targets: TOEFL_SCORE_TARGETS in score-pathways.ts (Bands 3.0 → 6.0 with the ETS 0–120 concordance)

**Course plan:** `toefl-ibt-academy` — "TOEFL iBT Academy — 2026 Format Programme" under the new `toefl-preparation` CMS level ("TOEFL iBT Preparation").

The complete TOEFL iBT preparation programme for the format in force since 21 January 2026: fundamentals, Reading, Listening, Writing, Speaking, grammar and vocabulary, and full examination practice. Aimed at B1+ learners; A2/B1 learners bridge through the core English programme first.

## 3. Modules (all new authoring — the v1 academy had zero TOEFL lessons)

### T-M1 — Module 1 — TOEFL Fundamentals

> Course: toefl-ibt-academy · Slug: `toefl-module-1-fundamentals` · Pathways: TOEFL iBT

Orientation for the 2026 TOEFL iBT: what the test is and who accepts it, the current four-section format with its new task types, how the 1–6 band scale and adaptive delivery actually work, what a score report contains, and how to manage preparation time, section clocks and test day (test centre or Home Edition).

**Learning objectives**

- Describe the 2026 TOEFL iBT section by section: item counts, timings, task types and the ~2-hour total
- Explain two-stage adaptive Reading and Listening and what adaptivity means for strategy
- Read a TOEFL score report: 1–6 section bands, overall = mean rounded to the nearest half band, CEFR level and the transition-period 0–120 comparison
- Plan preparation with the diagnose → language → technique → mock-cycle method and a dated study plan
- Budget section clocks (~30/~29/~8/~23 minutes) and prepare test-day logistics for both delivery options

**Prerequisites:** none — open entry · **Entry level:** B1 recommended (A2/B1 learners bridge through the core English programme first) · **Estimated study time:** ~3.5 h

#### Chapter 1 — The test and the 2026 format (`toefl-orientation`)

| Lesson | Min | Status | Focus |
| --- | --- | --- | --- |
| `toefl-what-and-why` — What is TOEFL iBT and who needs it? | 12 | existing v1 | Purpose, who accepts it, how it differs from IELTS at a glance |
| `toefl-format-2026` — The 2026 format, section by section | 15 | existing v1 | Reading 50 items, Listening 47, Speaking 11, Writing 12; the new task types; ~2 hours end to end; test centre or Home Edition |
| `toefl-adaptive-testing` — Adaptive testing: how the test adjusts to you | 12 | existing v1 | Two-stage adaptive Reading and Listening; routing module then lower- or upper-difficulty module; why question counts and time can vary |

#### Chapter 2 — The 1–6 band scale and your score report (`toefl-scores`)

| Lesson | Min | Status | Focus |
| --- | --- | --- | --- |
| `toefl-band-scale` — The 1–6 band scale | 14 | existing v1 | Half-point steps; overall = average of four section bands rounded to the nearest half band (5.125 → 5.0); CEFR printed on the report; no pass mark |
| `toefl-score-reports` — Score reports, MyBest and the 0–120 transition | 12 | existing v1 | Section bands + overall + CEFR; MyBest superscoring across valid tests; dual reporting of a comparable 0–120 score during 2026–2028; scores within ~72 hours; two-year validity |

#### Chapter 3 — Strategy, time and test day (`toefl-strategy`)

| Lesson | Min | Status | Focus |
| --- | --- | --- | --- |
| `toefl-preparation-strategy` — Preparation strategy: how this Academy works | 14 | existing v1 | The diagnose → language → technique → mock-cycle method applied to the 2026 format |
| `toefl-time-management` — Time management across the sections | 12 | existing v1 | Section budgets (~30/~29/~8/~23 minutes), per-item pacing, and the sweep habit for adaptive sections |
| `toefl-test-day` — Test-day preparation | 12 | existing v1 | Test centre vs Home Edition; check-in and ID; rules; what to do when the clock is running |

**Practice activities**

- Baseline diagnostic: one untimed TOEFL sample mock (2026 format) to anchor the study plan
- Band-scale worksheet: computing overall bands with the rounding rule on sample section scores
- Bank questions on format, scoring and delivery (auto-graded)

**Assessments**

- Bank questions per lesson with full feedback payloads
- Baseline mock attempt recorded and reviewed

**Completion criteria**

- All 8 lessons completed with bank questions attempted
- Baseline diagnostic attempt recorded
- Target band, test date and daily minutes set in the study planner

### T-M2 — Module 2 — Reading

> Course: toefl-ibt-academy · Slug: `toefl-module-2-reading` · Pathways: TOEFL iBT

The 2026 Reading section: up to 50 adaptive items in ~30 minutes across the three official task types. Learners master Complete-the-Words technique (context plus morphology to restore masked letters), everyday-text reading (Read in Daily Life), academic-passage comprehension (Read an Academic Passage), and the vocabulary, main-idea, detail and inference skills underneath all three.

**Learning objectives**

- Describe the Reading section's structure, item mix (30 Complete-the-Words + 20 comprehension) and two-stage adaptive flow
- Restore masked words using context, collocation and morphology at section pace
- Extract information fast from everyday texts (schedules, notices, messages) and academic passages alike
- Determine vocabulary meaning in context, including word forms and academic word families
- Identify main ideas and supporting details and make defensible inferences in academic prose

**Prerequisites:** T-M1 · **Entry level:** B1 · **Estimated study time:** ~3.5 h

#### Chapter 1 — The section (`toefl-reading-overview`)

| Lesson | Min | Status | Focus |
| --- | --- | --- | --- |
| `toefl-reading-overview` — Understanding the Reading section | 12 | existing v1 | 50 items, ~30 minutes, two-stage adaptive; 30 Complete-the-Words + 20 comprehension; pacing both modules |

#### Chapter 2 — The three task types (`toefl-reading-tasks`)

| Lesson | Min | Status | Focus |
| --- | --- | --- | --- |
| `toefl-reading-complete-words` — Complete the Words | 15 | existing v1 | Restoring c___ / hipp___ style masks with context, collocation and morphology; when to guess and move on |
| `toefl-reading-daily-life` — Read in Daily Life | 14 | existing v1 | Everyday and campus texts: schedules, notices, messages; quick comprehension with selective attention |
| `toefl-reading-academic-passage` — Read an Academic Passage | 15 | existing v1 | Academic text structure; single-answer and select-two comprehension items; eliminating near-miss options |

#### Chapter 3 — Reading skills (`toefl-reading-skills`)

| Lesson | Min | Status | Focus |
| --- | --- | --- | --- |
| `toefl-reading-vocabulary` — Vocabulary in context and word forms | 14 | existing v1 | Meaning from context; word families and affixation; the forms an academic word takes across a text |
| `toefl-reading-ideas-details` — Main ideas and supporting details | 14 | existing v1 | Thesis and topic sentences in academic prose; how details serve claims; text comprehension at pace |
| `toefl-reading-inference` — Inference | 14 | existing v1 | What the author implies but does not state; testing an inference against the passage; resisting outside knowledge |
| `toefl-reading-academic-vocabulary` — Academic vocabulary | 12 | existing v1 | The academic word stock that recurs across TOEFL passages; building it from the common curriculum's Word World sets |

**Practice activities**

- Complete-the-Words drills from the drill pool at increasing speed
- Everyday-text and academic-passage question sets (TOEFL bank)
- Word World academic word-set bridging per pathway steps
- Reading section mock at official timing and item counts

**Assessments**

- Bank questions per lesson with why-wrong feedback
- Timed Reading section mock: raw score converted to an indicative 1–6 band (practice conversion, honestly labelled)

**Completion criteria**

- All 8 lessons completed with bank questions attempted
- One timed Reading section mock attempted and reviewed

### T-M3 — Module 3 — Listening

> Course: toefl-ibt-academy · Slug: `toefl-module-3-listening` · Pathways: TOEFL iBT

The 2026 Listening section: up to 47 forward-only adaptive items in ~29 minutes across four task types. Learners practise predicting responses before hearing options, following conversations and announcements, and taking usable notes on academic talks — while tuning into the natural spoken English (reductions, discourse markers) the recordings actually use.

**Learning objectives**

- Describe the Listening section's structure, forward-only rule and adaptive flow
- Choose the pragmatic response to everyday exchanges (Listen and Choose a Response)
- Follow two-party conversations and public announcements for purpose, detail and change
- Listen to academic talks for main ideas, supporting details and speaker intent, with a working note system
- Cope with natural speech: reductions, hesitations and discourse markers under exam timing

**Prerequisites:** T-M1 · **Entry level:** B1 · **Estimated study time:** ~4 h

#### Chapter 1 — The section (`toefl-listening-overview`)

| Lesson | Min | Status | Focus |
| --- | --- | --- | --- |
| `toefl-listening-overview` — Understanding the Listening section | 12 | existing v1 | 47 items, ~29 minutes, forward-only, two-stage adaptive; why prediction replaces replay |

#### Chapter 2 — The four task types (`toefl-listening-tasks`)

| Lesson | Min | Status | Focus |
| --- | --- | --- | --- |
| `toefl-listening-choose-response` — Listen and Choose a Response | 14 | existing v1 | Predicting the pragmatic reply; register and appropriateness over literal matching |
| `toefl-listening-conversation` — Listen to a Conversation | 14 | existing v1 | Two-party campus and service conversations: purpose, negotiation, corrections and outcomes |
| `toefl-listening-announcement` — Listen to an Announcement | 12 | existing v1 | Public announcements and instructions: key facts, changes and who-should-do-what |
| `toefl-listening-academic-talk` — Listen to an Academic Talk | 15 | existing v1 | Lecture-style talks: structure signposts, examples, attitude and concluding claims |

#### Chapter 3 — Listening skills (`toefl-listening-skills`)

| Lesson | Min | Status | Focus |
| --- | --- | --- | --- |
| `toefl-listening-intent` — Speaker intent and stance | 14 | existing v1 | Why something is said: suggesting, conceding, objecting, hedging; tone cues |
| `toefl-listening-ideas-details` — Main ideas and supporting details | 14 | existing v1 | Tracking the spine of a talk while catching the numbers, names and examples that questions target |
| `toefl-listening-inference` — Inference | 14 | existing v1 | What follows from what was said; the boundary between implication and assumption |
| `toefl-listening-note-taking` — Note-taking | 14 | existing v1 | A two-column note system that survives forward-only delivery; abbreviations; notes that answer questions |
| `toefl-listening-natural-speech` — Natural spoken English | 12 | existing v1 | Reductions, contractions, hesitations and discourse markers in fast connected speech |

**Practice activities**

- Response-prediction drills from the drill pool
- Conversation and announcement question sets (TOEFL bank)
- Listening Lab bridging activities per pathway steps
- Listening section mock at official timing

**Assessments**

- Bank questions per lesson with why-wrong feedback
- Timed Listening section mock: raw score converted to an indicative 1–6 band (practice conversion, honestly labelled)

**Completion criteria**

- All 10 lessons completed with bank questions attempted
- One timed Listening section mock attempted and reviewed

### T-M4 — Module 4 — Writing

> Course: toefl-ibt-academy · Slug: `toefl-module-4-writing` · Pathways: TOEFL iBT

The 2026 Writing section: 12 items in ~23 minutes. Learners rebuild scrambled sentences correctly and fast (Build a Sentence), write a fit-for-purpose email in the right tone (Write an Email), and add a substantive post to an academic discussion (Write for an Academic Discussion) — with the grammar, syntax and academic vocabulary the scoring guides reward.

**Learning objectives**

- Describe the Writing section's structure: 10 Build-a-Sentence items plus one email and one discussion task in ~23 minutes
- Rebuild sentences from scrambled parts at speed with correct order, agreement and cohesion
- Write structured emails with appropriate tone for everyday and campus situations
- Contribute to an academic discussion: state a position, react to classmates, support with reasons
- Control grammar, syntax and academic vocabulary under the section clock

**Prerequisites:** T-M1 · **Entry level:** B1 · **Estimated study time:** ~3 h

#### Chapter 1 — The section (`toefl-writing-overview`)

| Lesson | Min | Status | Focus |
| --- | --- | --- | --- |
| `toefl-writing-overview` — Understanding the Writing section | 12 | existing v1 | 12 items, ~23 minutes; 10 reconstruction items plus an email and an academic discussion; rated against scoring guides |

#### Chapter 2 — Build a Sentence (`toefl-build-sentence`)

| Lesson | Min | Status | Focus |
| --- | --- | --- | --- |
| `toefl-writing-build-sentence` — Build a Sentence: order and speed | 15 | existing v1 | Sentence order from scrambled parts; 10 items in roughly 10 minutes; checking without re-reading everything |
| `toefl-writing-syntax` — Grammar and syntax for reconstruction | 14 | existing v1 | Agreement, tense consistency, modifiers and connectors as ordering clues; the error types that break rebuilt sentences |

#### Chapter 3 — Write an Email (`toefl-email`)

| Lesson | Min | Status | Focus |
| --- | --- | --- | --- |
| `toefl-writing-email` — Write an Email: structure and tone | 14 | existing v1 | Greeting, purpose, request, close; matching tone to recipient and situation; everyday and campus scenarios |

#### Chapter 4 — Write for an Academic Discussion (`toefl-discussion`)

| Lesson | Min | Status | Focus |
| --- | --- | --- | --- |
| `toefl-writing-discussion` — Write for an Academic Discussion | 15 | existing v1 | State a position, react to classmates' posts, support with reasons; the discussion-post register |
| `toefl-writing-language` — Academic vocabulary for the written tasks | 12 | existing v1 | Precise verbs, stance language and connectors for email and discussion writing |

**Practice activities**

- Sentence-reconstruction drills at increasing speed (10-item sets)
- Timed email assignments from the TOEFL bank
- AI Tutor academic-discussion exchanges with evaluation against the writing rubric

**Assessments**

- Bank questions per lesson with why-wrong feedback
- One timed Writing section mock: reconstruction accuracy plus rubric-evaluated email and discussion

**Completion criteria**

- All 6 lessons completed with bank questions attempted
- One timed Writing section mock attempted and reviewed

### T-M5 — Module 5 — Speaking

> Course: toefl-ibt-academy · Slug: `toefl-module-5-speaking` · Pathways: TOEFL iBT

The 2026 Speaking section: 11 items in ~8 minutes — seven Listen-and-Repeat sentences inside 8/10/12-second windows, then a four-question interview. Learners train listening accuracy and speech reproduction, pronunciation and intelligibility (accent-safe), and the short-complete-fluent interview answer with relevant vocabulary.

**Learning objectives**

- Describe the Speaking section's structure: 7 Listen-and-Repeat items with their recording windows plus 4 interview items
- Repeat heard sentences accurately — full meaning, key words in place — inside the window
- Produce intelligible speech: stress, rhythm and clarity without abandoning your accent
- Answer interview questions with short, complete, fluent responses that stay on topic
- Deploy relevant vocabulary and stable grammar in spontaneous spoken answers

**Prerequisites:** T-M1 · **Entry level:** B1 · **Estimated study time:** ~2.5 h

#### Chapter 1 — The section (`toefl-speaking-overview`)

| Lesson | Min | Status | Focus |
| --- | --- | --- | --- |
| `toefl-speaking-overview` — Understanding the Speaking section | 12 | existing v1 | 11 items, ~8 minutes; 7 Listen-and-Repeat (8/10/12-second windows) + 4 interview items; rated against scoring guides |

#### Chapter 2 — Listen and Repeat (`toefl-listen-repeat`)

| Lesson | Min | Status | Focus |
| --- | --- | --- | --- |
| `toefl-speaking-listen-repeat` — Listen and Repeat: accuracy in the window | 15 | existing v1 | Listening accuracy; chunking sentences; reproducing them fully inside 8/10/12 seconds |
| `toefl-speaking-pronunciation` — Pronunciation and intelligibility | 14 | existing v1 | Stress, rhythm and word-level clarity that stay intelligible without forcing a native accent |

#### Chapter 3 — Take an Interview (`toefl-interview`)

| Lesson | Min | Status | Focus |
| --- | --- | --- | --- |
| `toefl-speaking-interview` — Take an Interview: short, complete, fluent | 15 | existing v1 | Answer development under the clock; one idea per answer; bridging instead of silence |
| `toefl-speaking-interview-language` — Grammar and vocabulary in interview answers | 12 | existing v1 | Stable tense control and topic-relevant vocabulary in spontaneous speech |

**Practice activities**

- Listen-and-Repeat drills with the official 8/10/12-second windows
- AI Tutor interview simulations with rotating question families
- Recording and self-review against the speaking rubric (Delivery / Language use / Topic development)

**Assessments**

- Bank questions per lesson with why-wrong feedback
- One timed Speaking section mock evaluated with the speaking rubric

**Completion criteria**

- All 5 lessons completed with bank questions attempted
- One timed Speaking section mock attempted and reviewed

### T-M6 — Module 6 — TOEFL Grammar and Vocabulary

> Course: toefl-ibt-academy · Slug: `toefl-module-6-language` · Pathways: TOEFL iBT

The language engine behind every TOEFL section. Learners build academic word families, the sentence structure that Build a Sentence tests directly, grammar accuracy with a falling error rate, the collocations and paraphrasing that reading and listening items assume, and the natural academic register the scoring guides describe.

**Learning objectives**

- Grow academic word families and recognise their forms across sections
- Build and repair English sentence structure (the exact skill Build a Sentence grades)
- Cut recurring grammar errors with an error-budget habit
- Use high-frequency academic collocations and paraphrase faithfully
- Communicate in natural academic English rather than translated or memorised phrasing

**Prerequisites:** T-M1 · **Entry level:** B1 (concurrent with the section modules) · **Estimated study time:** ~2.5 h

#### Chapter 1 — Academic words (`toefl-language-words`)

| Lesson | Min | Status | Focus |
| --- | --- | --- | --- |
| `toefl-language-word-families` — Academic word families | 14 | existing v1 | The stock that recurs in TOEFL passages and prompts; one family, many forms |
| `toefl-language-collocations` — Collocations | 12 | existing v1 | Verb+noun and adjective+noun partnerships that reading items test and writing tasks reward |

#### Chapter 2 — Sentence craft (`toefl-language-sentences`)

| Lesson | Min | Status | Focus |
| --- | --- | --- | --- |
| `toefl-language-sentence-structure` — Sentence structure | 14 | existing v1 | Clause combination, modification and parallelism — building and rebuilding sentences deliberately |
| `toefl-language-grammar-accuracy` — Grammar accuracy | 14 | existing v1 | The error budget: counting and cutting errors per task; the self-correction habit |

#### Chapter 3 — Expression (`toefl-language-expression`)

| Lesson | Min | Status | Focus |
| --- | --- | --- | --- |
| `toefl-language-paraphrasing` — Paraphrasing | 12 | existing v1 | Restating academic sentences without distortion — the skill behind reading, listening and writing items alike |
| `toefl-language-academic-communication` — Natural academic communication | 12 | existing v1 | Register, stance and conversational academic English for the discussion and interview tasks |

**Practice activities**

- Word World academic word sets bridged per pathway steps
- Grammar Clinic error-correction sessions on the learner's own recorded mistakes
- Sentence building and rebuilding in the Sentence Lab bridging activity

**Assessments**

- Bank questions across all language lessons
- Error-budget review across the learner's recent mock and assignment errors

**Completion criteria**

- All 6 lessons completed with bank questions attempted
- Personal error log reviewed at least once with the AI Tutor

### T-M7 — Module 7 — Full TOEFL Practice

> Course: toefl-ibt-academy · Slug: `toefl-module-7-practice` · Pathways: TOEFL iBT

The practice system that turns study into a score: task-based exercises per item type, section tests at official timing, adaptive practice simulations that mirror the two-stage design, full mock tests end to end, and the performance reports that convert every attempt into next week's plan.

**Learning objectives**

- Operate the mock library: task drills, section tests, adaptive simulations and full mocks
- Sit a full four-section mock (~2 hours) under exam conditions and hold section budgets
- Read a performance report: section bands, overall with the rounding rule, error patterns by item type
- Convert any report into a dated revision plan targeting the weakest item types

**Prerequisites:** the four section modules of your pathway · **Entry level:** B1 (after the four section modules) · **Estimated study time:** ~2 h

#### Chapter 1 — The practice system (`toefl-practice-system`)

| Lesson | Min | Status | Focus |
| --- | --- | --- | --- |
| `toefl-practice-mocks-guide` — The mock system: modes, kinds and cadence | 12 | existing v1 | Timed vs untimed; task drills → section tests → adaptive simulations → full mocks; the accelerating cadence to test day |

#### Chapter 2 — Adaptive practice (`toefl-adaptive-practice`)

| Lesson | Min | Status | Focus |
| --- | --- | --- | --- |
| `toefl-practice-adaptive` — Practising with adaptive simulations | 12 | existing v1 | How two-stage adaptive practice mirrors the real test; treating the routing module seriously; pacing when items get harder |

#### Chapter 3 — Performance reports (`toefl-performance`)

| Lesson | Min | Status | Focus |
| --- | --- | --- | --- |
| `toefl-practice-analysis` — Reading your performance report | 14 | existing v1 | Section bands and the rounding rule on your own numbers; error taxonomy by item type; building the next-week plan; when a mock indicates readiness |

**Practice activities**

- Task-based exercise sets per item type from the TOEFL bank
- Section tests for every section at official timing and item counts
- Adaptive practice simulations (routing → difficulty module)
- Full mock cycle: untimed baseline → timed sittings under exam conditions
- AI Tutor review sessions turning reports into next-week plans

**Assessments**

- At least two timed full mocks (four sections, ~2 hours each) with per-item explanations
- Post-mock review completed for every sitting

**Completion criteria**

- All 3 lessons completed with bank questions attempted
- At least two timed full-mock attempts with reviews recorded
- A final revision plan dated to the test date


## 4. Topic coverage matrix (machine-checked)

Every topic mandated by PROMPT 42 PART B, mapped to the lessons that cover it. `scripts/validate-exam-blueprint.ts` fails the build if any row reads NOT COVERED.

**T-M1 — TOEFL Fundamentals** (PROMPT 42 — TOEFL Fundamentals)

| Required topic | Covered by |
| --- | --- |
| test overview | `toefl-what-and-why`, `toefl-preparation-strategy` |
| current examination format | `toefl-format-2026` |
| score reporting | `toefl-band-scale`, `toefl-score-reports` |
| adaptive testing introduction | `toefl-adaptive-testing` |
| test-day preparation | `toefl-test-day` |
| time management | `toefl-time-management` |

**T-M2 — Reading** (PROMPT 42 — Reading)

| Required topic | Covered by |
| --- | --- |
| Complete the Words | `toefl-reading-complete-words` |
| Read in Daily Life | `toefl-reading-daily-life` |
| Read an Academic Passage | `toefl-reading-academic-passage` |
| vocabulary in context | `toefl-reading-vocabulary` |
| word forms | `toefl-reading-vocabulary` |
| text comprehension | `toefl-reading-ideas-details` |
| main ideas | `toefl-reading-ideas-details` |
| supporting details | `toefl-reading-ideas-details` |
| inference | `toefl-reading-inference` |
| academic vocabulary | `toefl-reading-academic-vocabulary` |

**T-M3 — Listening** (PROMPT 42 — Listening)

| Required topic | Covered by |
| --- | --- |
| Listen and Choose a Response | `toefl-listening-choose-response` |
| Listen to a Conversation | `toefl-listening-conversation` |
| Listen to an Announcement | `toefl-listening-announcement` |
| Listen to an Academic Talk | `toefl-listening-academic-talk` |
| speaker intent | `toefl-listening-intent` |
| main ideas | `toefl-listening-ideas-details` |
| supporting details | `toefl-listening-ideas-details` |
| inference | `toefl-listening-inference` |
| note-taking | `toefl-listening-note-taking` |
| natural spoken English | `toefl-listening-natural-speech` |

**T-M4 — Writing** (PROMPT 42 — Writing)

| Required topic | Covered by |
| --- | --- |
| Build a Sentence | `toefl-writing-build-sentence` |
| sentence order | `toefl-writing-build-sentence` |
| grammar and syntax | `toefl-writing-syntax` |
| Write an Email | `toefl-writing-email` |
| email structure | `toefl-writing-email` |
| appropriate tone | `toefl-writing-email` |
| Write for an Academic Discussion | `toefl-writing-discussion` |
| expressing opinions | `toefl-writing-discussion` |
| supporting arguments | `toefl-writing-discussion` |
| academic vocabulary | `toefl-writing-language` |

**T-M5 — Speaking** (PROMPT 42 — Speaking)

| Required topic | Covered by |
| --- | --- |
| Listen and Repeat | `toefl-speaking-listen-repeat` |
| listening accuracy | `toefl-speaking-listen-repeat` |
| speech reproduction | `toefl-speaking-listen-repeat` |
| pronunciation | `toefl-speaking-pronunciation` |
| intelligibility | `toefl-speaking-pronunciation` |
| Take an Interview | `toefl-speaking-interview` |
| answer development | `toefl-speaking-interview` |
| fluency | `toefl-speaking-interview` |
| grammar | `toefl-speaking-interview-language` |
| relevant vocabulary | `toefl-speaking-interview-language` |

**T-M6 — TOEFL Grammar and Vocabulary** (PROMPT 42 — TOEFL Grammar and Vocabulary)

| Required topic | Covered by |
| --- | --- |
| academic word families | `toefl-language-word-families` |
| sentence structure | `toefl-language-sentence-structure` |
| grammar accuracy | `toefl-language-grammar-accuracy` |
| collocations | `toefl-language-collocations` |
| paraphrasing | `toefl-language-paraphrasing` |
| natural academic communication | `toefl-language-academic-communication` |

**T-M7 — Full TOEFL Practice** (PROMPT 42 — Full TOEFL Practice)

| Required topic | Covered by |
| --- | --- |
| task-based exercises | `toefl-practice-mocks-guide` |
| section tests | `toefl-practice-mocks-guide` |
| adaptive practice simulations | `toefl-practice-adaptive` |
| full mock tests | `toefl-practice-mocks-guide` |
| performance reports | `toefl-practice-analysis` |

