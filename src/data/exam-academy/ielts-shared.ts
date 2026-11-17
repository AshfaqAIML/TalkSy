/**
 * IELTS Academy blueprint — shared modules (carried by `ielts-academy-core`,
 * used by BOTH the Academic and General Training pathways).
 *
 * The Listening and Speaking tests are identical across IELTS variants, so
 * their craft modules — plus Fundamentals, the language/band module and the
 * full-practice module — are shared. Variant-specific Reading and Writing
 * live in ielts-tracks.ts and are never shared (audited bank separation).
 */

import { C, L, type ModulePlan } from "./types";

// ---------------------------------------------------------------------------
// I-M1 — IELTS Fundamentals
// ---------------------------------------------------------------------------

const I_M1: ModulePlan = {
  code: "I-M1",
  slug: "module-1-introduction",
  title: "Module 1 — IELTS Fundamentals",
  academy: "ielts",
  courses: ["ielts-academy-core"],
  pathways: ["ielts-academic", "ielts-general-training"],
  replaces: ["module-1-introduction", "module-7-exam-strategies (time + exam-day lessons)"],
  description:
    "Everything a candidate must understand before technique can help: what IELTS is and which variant they need, the section-by-section format, how band scores are produced and assessed, how to plan preparation time and test-clock time, and how registration, computer delivery, UKVI routes and test day actually work. This module converts anxiety into a documented, dated plan.",
  learningObjectives: [
    "Explain the purpose, variants and four-section structure of IELTS and choose Academic or General Training from the receiving organisation's rule",
    "Read a Test Report Form: raw-to-band conversion, the .25/.75 rounding rule, and the four Writing and four Speaking assessment criteria",
    "Set a requirement-driven target score with a safety margin and a weakest-skill-first study plan",
    "Budget preparation weeks and test-clock minutes (18/18/20 reading, 20/40 writing) before entering technique work",
    "Navigate registration, computer delivery, UKVI/SELT routes and test-day logistics without last-minute surprises",
  ],
  prerequisites: ["none"],
  entryLevel: "B1+ recommended (A2/B1 learners bridge through the core English programme first)",
  estimatedHours: 5,
  chapters: [
    C("orientation", "Orientation", [
      L("ielts-what-and-why", "What is IELTS and who needs it?", 12, "Purpose, variants at a glance, the four skills", ["examination introduction"], "existing"),
      L("ielts-academic-vs-gt", "IELTS Academic or General Training?", 12, "Choosing your variant from the receiving organisation's rule", ["examination introduction"], "existing"),
      L("ielts-four-skills-format", "The examination format, section by section", 15, "Current computer-delivered format, Writing on Paper, timings", ["test structure"], "existing"),
    ]),
    C("scores-and-assessment", "Band scores and assessment", [
      L("ielts-band-scoring", "The band scoring system", 14, "Raw→band, the .25/.75 rounding rule, reading a TRF", ["band scores"], "existing"),
      L("ielts-assessment-criteria", "How Writing and Speaking are assessed", 15, "The four criteria for each productive skill, equal weighting, Task 2's double weight, and what examiners actually reward", ["assessment criteria"], "existing"),
      L("ielts-target-scores", "Understanding target scores", 12, "Requirement → safety-margin target → weakest skill first", ["band scores"], "existing"),
    ]),
    C("strategy-and-time", "Preparation strategy and time", [
      L("ielts-preparation-strategy", "Preparation strategy: how this Academy works", 14, "The diagnose → language → technique → mock-cycle method", ["academic preparation strategy"], "existing"),
      L("ielts-study-planning", "Planning your preparation time", 14, "Weeks-to-target mapping, the weekly cycle (technique + language + practice), and honest pacing by entry level", ["time management"], "existing"),
      L("ielts-strategy-time", "Time management", 12, "Test-clock budgets: 18/18/20 reading, the 20/40 writing split, the final sweep", ["time management"], "existing"),
    ]),
    C("delivery-and-test-day", "Delivery, registration and test day", [
      L("ielts-computer-based", "Computer-based preparation", 12, "Practising in the delivery medium you will be examined in", ["test-day guidance"], "existing"),
      L("ielts-registration-awareness", "Examination registration awareness", 12, "Booking, ID, results timeline, One Skill Retake", ["test-day guidance"], "existing"),
      L("ielts-ukvi-explained", "IELTS for UKVI and Life Skills", 14, "SELT rules, Life Skills A1/A2/B1, per-component minimums", ["UKVI guidance"], "existing"),
      L("ielts-strategy-exam-day", "Exam-day preparation", 10, "Logistics protect the band you already have", ["test-day guidance"], "existing"),
    ]),
  ],
  practiceActivities: [
    "Variant-choice and target-setting worksheet built into lesson banks (3 questions per lesson)",
    "Baseline diagnostic: one untimed full mock from the variant's bank to anchor the study plan",
    "TRF reading exercise: interpret a model Test Report Form and compute overall bands with the rounding rule",
  ],
  assessments: [
    "Bank questions on format, scoring rules and criteria (auto-graded, full feedback payloads)",
    "Onboarding checkpoint: target band, test date and daily minutes recorded in the planner",
  ],
  completionCriteria: [
    "All 13 lessons completed with bank questions attempted",
    "Baseline diagnostic attempt recorded and reviewed",
    "Target, date and daily-minutes set in the study planner",
  ],
};

// ---------------------------------------------------------------------------
// I-M2 — Listening Mastery
// ---------------------------------------------------------------------------

const I_M2: ModulePlan = {
  code: "I-M2",
  slug: "module-2-listening",
  title: "Module 2 — Listening Mastery",
  academy: "ielts",
  courses: ["ielts-academy-core"],
  pathways: ["ielts-academic", "ielts-general-training"],
  replaces: ["module-2-listening"],
  description:
    "The complete Listening academy for the test that is identical in both variants (PROMPT 44 masterclass): the examination fundamentals (structure, four parts, instructions and answer limits, spelling, numbers and dates, accents, time management), twelve core listening skills, every official question type taught on the seven-component masterclass structure, a preparation chapter for each recording part with increasing complexity, plus the original audio question bank, progressive practice tests, full-length simulations and per-question performance analytics in the Listening Masterclass hub.",
  learningObjectives: [
    "Recite the four-part structure, the one-hearing rule, the instruction and answer-limit families and the computer-delivered clock",
    "Deploy the twelve core skills on demand: prediction, keyword anchoring, synonyms, paraphrase, distractor immunity, speaker tracking, corrections, number perception, opinions, intention, specific information and overall meaning",
    "Solve every official task family — multiple choice, matching, plan and map labelling, form, note, table, flowchart, summary and sentence completion — with a repeatable step-by-step method",
    "Prepare part by part with increasing complexity, from the everyday conversation of Part 1 to the academic monologue of Part 4",
    "Convert practice results into study actions through per-question error analysis: spelling, missed keywords, distractor lures, word limits and pacing",
  ],
  prerequisites: ["I-M1"],
  entryLevel: "B1+",
  estimatedHours: 7,
  chapters: [
    C("exam-fundamentals", "Examination fundamentals", [
      L("ielts-listening-overview", "Understanding the Listening test", 12, "Four parts, heard once, two-pass habit", ["listening test structure", "all four listening parts"], "existing"),
      L("ielts-listening-instructions", "Question instructions and answer limits", 12, "Word-limit families as scoring rules", ["listening test structure"], "existing"),
      L("ielts-listening-spelling", "Spelling requirements", 12, "Exact-match answers, dictated spellings, proofreading routine", ["spelling and numbers"], "existing"),
      L("ielts-listening-numbers-dates", "Numbers and dates", 12, "Formats for dates, times, prices, phone and reference numbers", ["spelling and numbers"], "existing"),
      L("ielts-listening-accents", "Recognising different accents", 10, "Exposure strategy; what not to do", ["different English accents"], "existing"),
      L("ielts-listening-time", "Time management", 12, "Per-part pacing, the check window, recovery protocols", ["time management"], "existing"),
    ]),
    C("core-skills", "The twelve core listening skills", [
      L("ielts-listening-predicting", "Predicting answers", 12, "Predict part of speech and content before the audio", ["distractors"], "existing"),
      L("ielts-listening-keywords", "Listening for keywords", 12, "Stressed content words as anchors", ["all four listening parts"], "existing"),
      L("ielts-listening-synonyms", "Recognising synonyms", 12, "Question-word vs recording-word substitution", ["synonyms and paraphrasing"], "existing"),
      L("ielts-listening-paraphrase", "Understanding paraphrases", 12, "Structural rewording and the verbatim trap", ["synonyms and paraphrasing"], "existing"),
      L("ielts-listening-distractors", "Identifying distractors", 12, "The distractor families and the whole-claim discipline", ["distractors"], "existing"),
      L("ielts-listening-speakers", "Following speaker changes", 12, "Turn-taking, attribution, the two-column ledger", ["all four listening parts"], "existing"),
      L("ielts-listening-corrections", "Recognising corrections", 11, "Self-repair markers and the second-value rule", ["distractors"], "existing"),
      L("ielts-listening-numbers-skill", "Understanding numbers", 12, "Perception at speed: teen vs ty, prices, phone numbers", ["spelling and numbers"], "existing"),
      L("ielts-listening-opinions", "Identifying opinions", 12, "Stance markers, hedging, agreement language", ["distractors"], "existing"),
      L("ielts-listening-intention", "Understanding speaker intention", 11, "Why it is said: suggesting, warning, refusing", ["distractors"], "existing"),
      L("ielts-listening-specific-info", "Listening for specific information", 11, "Targeted listening and answer-cue tracking", ["all four listening parts"], "existing"),
      L("ielts-listening-overall-meaning", "Following the overall meaning", 12, "Signposts, gist, discourse-structure recovery", ["all four listening parts"], "existing"),
    ]),
    C("question-types", "Every question type in depth", [
      L("ielts-listening-multiple-choice", "Multiple choice in depth", 14, "Single and choose-two variants; verdict logic", ["multiple choice"], "existing"),
      L("ielts-listening-matching", "Matching in depth", 14, "Elimination across speakers; option recycling", ["matching"], "existing"),
      L("ielts-listening-maps-diagrams", "Map and diagram labelling in depth", 14, "Direction language and starting-point discipline", ["map and diagram labelling"], "existing"),
      L("ielts-listening-form-completion", "Form completion in depth", 14, "The form layout as a prediction machine", ["form completion"], "existing"),
      L("ielts-listening-note-completion", "Note completion in depth", 14, "Headings as topic locators in talks and lectures", ["note completion"], "existing"),
      L("ielts-listening-table-completion", "Table completion in depth", 13, "Column headers define the answer type", ["table completion"], "existing"),
      L("ielts-listening-flowchart-completion", "Flowchart completion in depth", 13, "Process stages and sequence signals", ["table completion"], "existing"),
      L("ielts-listening-summary-completion", "Summary completion in depth", 14, "The heaviest paraphrase task", ["summary completion"], "existing"),
      L("ielts-listening-sentence-completion", "Sentence completion in depth", 13, "The sentence as a pre-listening contract", ["sentence completion"], "existing"),
    ]),
    C("parts-in-depth", "The four parts in depth", [
      L("ielts-listening-part1", "Part 1 — Everyday conversations and practical information", 14, "Transactional dialogues at dictation speed", ["all four listening parts", "form completion"], "existing"),
      L("ielts-listening-part2", "Part 2 — The individual speaker", 14, "Social monologues with signpost tracking", ["all four listening parts", "map and diagram labelling"], "existing"),
      L("ielts-listening-part3", "Part 3 — Educational and training conversations", 14, "Multi-speaker study talk, opinions and attribution", ["all four listening parts", "matching"], "existing"),
      L("ielts-listening-part4", "Part 4 — Academic monologues", 14, "One lecture, ten gaps, ONE WORD ONLY", ["all four listening parts", "note completion"], "existing"),
    ]),
  ],
  practiceActivities: [
    "Listening Masterclass audio bank: original multi-speaker recordings with accent metadata, per-question error taxonomy (spelling, missed keywords, distractor lures) and revealed transcripts",
    "Progressive listening tests (beginner, intermediate, advanced) and timed per-part section tests from the mock library",
    "Numbers, dates and dictated-spelling drills from the drill pool",
    "Completion and objective question-set drills assembled per question family (six-mode practice engine)",
  ],
  assessments: [
    "Bank questions per lesson (auto-graded with why-wrong feedback)",
    "Two full-length Listening simulations (four parts, 40 questions, official timing) with raw score converted to an indicative band",
    "Masterclass performance analytics: question-type and part accuracy, spelling-mistake log, distractor-family counts and recommended lessons",
  ],
  completionCriteria: [
    "All 31 lessons completed with bank questions attempted",
    "At least six audio-bank exercises completed and reviewed against their explanations",
    "One full-length Listening simulation attempted and reviewed in the performance dashboard",
  ],
};

// ---------------------------------------------------------------------------
// I-M6 — Speaking Foundations and Part 1 (the PROMPT 47 masterclass)
// ---------------------------------------------------------------------------

const I_M6: ModulePlan = {
  code: "I-M6",
  slug: "module-6-speaking-part-1",
  title: "Module 6 — Speaking Foundations and Part 1",
  academy: "ielts",
  courses: ["ielts-academy-core"],
  pathways: ["ielts-academic", "ielts-general-training"],
  replaces: ["module-5-speaking (v1, absorbed by the PROMPT 47 Speaking Masterclass)"],
  description:
    "The Speaking Masterclass (PROMPT 47) foundations and interview: the ten foundation crafts — test format, what the examiner assesses, answer development, natural fluency, avoiding memorised responses, pronunciation as a criterion, vocabulary, grammar accuracy in speech, extending answers naturally and handling unfamiliar questions — then one masterclass lesson per Part 1 familiar-topic set, each teaching the common question patterns, answer development, useful vocabulary, natural expressions, example responses, weak-versus-improved pairs and practice questions. Taught as ideas and language, never scripts to memorise.",
  learningObjectives: [
    "Describe the Speaking test's three parts, timings, recording and delivery formats",
    "Explain what each of the four criteria rewards and what examiners do not penalise",
    "Answer Part 1 questions in developed two-to-four-sentence answers (direct answer, reason, detail) across all nineteen familiar-topic sets",
    "Sound natural rather than rehearsed, and handle questions you never prepared",
  ],
  prerequisites: ["I-M1"],
  entryLevel: "B1+",
  estimatedHours: 8,
  chapters: [
    C("speaking-foundations", "Speaking foundations", [
      L("ielts-speaking-format", "The Speaking examination format", 13, "Three parts, 11–14 recorded minutes, examiner in person or by video call", ["speaking test structure"], "existing"),
      L("ielts-speaking-assessed", "What the examiner assesses", 14, "The four criteria decoded honestly — behaviours rewarded, non-penalised moments", ["assessment criteria"], "existing"),
      L("ielts-speaking-answer-development", "Answer development", 15, "The layer method: direct answer, reason, detail — building to a natural 2–4 sentences", ["answer development"], "existing"),
      L("ielts-speaking-fluency", "Natural fluency", 14, "Natural pace, meaning pauses vs language pauses, fillers, restarts and self-correction", ["natural fluency"], "existing"),
      L("ielts-speaking-memorised", "Avoiding memorised responses", 13, "Why examiners detect scripts; preparing ideas and vocabulary, not sentences", ["avoiding memorised responses"], "existing"),
      L("ielts-speaking-pronunciation-criterion", "Pronunciation: what the criterion really rewards", 14, "Intelligibility through stress, intonation and connected speech — accent-neutral", ["pronunciation criterion"], "existing"),
      L("ielts-speaking-vocabulary", "Vocabulary for speaking", 14, "Precision, collocation, paraphrase under pressure, spoken register", ["vocabulary"], "existing"),
      L("ielts-speaking-grammar-speech", "Grammar accuracy in speech", 14, "The simple-plus-complex mix, tenses for stories, monitoring without freezing", ["grammar accuracy"], "existing"),
      L("ielts-speaking-extending", "Extending answers naturally", 13, "The extension moves — contrast, example, feeling, consequence, time — and knowing when to stop", ["answer development"], "existing"),
      L("ielts-speaking-unfamiliar", "Handling unfamiliar questions", 13, "Buying time honestly, thinking aloud, the honest 'I haven't thought about it' frame", ["unfamiliar questions"], "existing"),
    ]),
    C("speaking-part1-topics", "Part 1 — the nineteen topic sets", [
      L("ielts-speaking-t-introduction", "Part 1 topics: Introduction", 12, "Identity, origins, home and work — the opening moves", ["personal questions", "familiar topics"], "existing"),
      L("ielts-speaking-t-work", "Part 1 topics: Work", 12, "Job, responsibilities, workplace, why chosen, first-day memories", ["personal questions", "familiar topics"], "existing"),
      L("ielts-speaking-t-study", "Part 1 topics: Study", 12, "Subjects, choices, favourite classes, study habits, future plans", ["personal questions", "familiar topics"], "existing"),
      L("ielts-speaking-t-hometown", "Part 1 topics: Hometown", 12, "Where, known for, how changed, what visitors should see", ["familiar topics"], "existing"),
      L("ielts-speaking-t-accommodation", "Part 1 topics: Accommodation", 12, "House or apartment, rooms, neighbourhood, dream home", ["familiar topics"], "existing"),
      L("ielts-speaking-t-family", "Part 1 topics: Family", 12, "Who you live with, family time, traditions, closest to", ["familiar topics"], "existing"),
      L("ielts-speaking-t-friends", "Part 1 topics: Friends", 12, "How met, what you do together, online vs in-person, staying in touch", ["familiar topics"], "existing"),
      L("ielts-speaking-t-hobbies", "Part 1 topics: Hobbies", 12, "What, when started, alone or together, why it holds you", ["familiar topics"], "existing"),
      L("ielts-speaking-t-food", "Part 1 topics: Food", 12, "Favourites, cooking vs eating out, local food, trying new things", ["familiar topics"], "existing"),
      L("ielts-speaking-t-travel", "Part 1 topics: Travel", 12, "Nearby places, long journeys, dream trips, travel companions", ["familiar topics"], "existing"),
      L("ielts-speaking-t-technology", "Part 1 topics: Technology", 12, "Devices, first phone, apps, screen time", ["familiar topics"], "existing"),
      L("ielts-speaking-t-education", "Part 1 topics: Education", 12, "Schools attended, teachers, subjects, what education gave you", ["familiar topics"], "existing"),
      L("ielts-speaking-t-routines", "Part 1 topics: Daily routines", 12, "Typical morning, best time of day, weekday vs weekend, rituals", ["familiar topics"], "existing"),
      L("ielts-speaking-t-shopping", "Part 1 topics: Shopping", 12, "Where, online vs in-store, last purchase, bargains", ["familiar topics"], "existing"),
      L("ielts-speaking-t-weather", "Part 1 topics: Weather", 12, "Climate, favourite season, weather and mood, small talk", ["familiar topics"], "existing"),
      L("ielts-speaking-t-books", "Part 1 topics: Books", 12, "Habits, genres, paper vs digital, recommendations", ["familiar topics"], "existing"),
      L("ielts-speaking-t-music", "Part 1 topics: Music", 12, "What and when, live music, instruments, music and memory", ["familiar topics"], "existing"),
      L("ielts-speaking-t-sports", "Part 1 topics: Sports", 12, "Playing vs watching, school sports, staying active", ["familiar topics"], "existing"),
      L("ielts-speaking-t-social", "Part 1 topics: Social activities", 12, "Weekends, celebrations, meeting people, hosting", ["familiar topics"], "existing"),
    ]),
  ],
  practiceActivities: [
    "Speaking Masterclass practice library: 19 original Part 1 interview rounds (five questions each with guidance, model answers and weak-versus-improved pairs), filterable by part, topic, difficulty, proficiency and skill",
    "Three-part Speaking Simulator: examiner-style question presentation with spoken playback, recording, replay, transcription and criterion-based feedback",
    "AI Tutor interview rehearsal on rotating familiar-topic sets",
  ],
  assessments: [
    "Bank questions on Part 1 strategy, criteria and every topic set",
    "Simulator Part 1 submissions evaluated on all four criteria with per-criterion feedback, sentence corrections, vocabulary suggestions, fluency feedback and pronunciation observations",
  ],
  completionCriteria: [
    "All 29 lessons completed with bank questions attempted",
    "At least three Part 1 simulator or practice-library submissions evaluated and reviewed",
  ],
};

// ---------------------------------------------------------------------------
// I-M7 — Speaking Part 2 (the PROMPT 47 masterclass)
// ---------------------------------------------------------------------------

const I_M7: ModulePlan = {
  code: "I-M7",
  slug: "module-7-speaking-part-2",
  title: "Module 7 — Speaking Part 2: The Long Turn",
  academy: "ielts",
  courses: ["ielts-academy-core"],
  pathways: ["ielts-academic", "ielts-general-training"],
  replaces: ["module-5-speaking (v1, absorbed by the PROMPT 47 Speaking Masterclass)"],
  description:
    "The Speaking Masterclass (PROMPT 47) for the cue-card long turn: the complete cue-card craft — understanding cue cards, identifying key requirements, the one-minute preparation, effective note-taking, organising ideas, maintaining continuity, speaking at length and handling unfamiliar topics — then one lesson per description family (people, places, events, experiences, objects, activities, achievements, books, films, travel, learning experiences), each carrying a complete original cue card with the prompt, planning notes, vocabulary suggestions, a natural sample response, response analysis, alternative approaches and follow-up practice.",
  learningObjectives: [
    "Decode any cue card into its deliverables: the task line, the three prompts and the extension question",
    "Spend the one-minute preparation well and take fragment notes that survive nerves",
    "Organise, sustain and land a two-minute talk, recovering from blank moments without panic",
    "Answer any of the eleven description families with the family's signature moves",
  ],
  prerequisites: ["I-M6"],
  entryLevel: "B1+",
  estimatedHours: 6,
  chapters: [
    C("speaking-part2-craft", "Part 2 — the cue-card craft", [
      L("ielts-speaking-cue-cards", "Understanding cue cards", 13, "Card anatomy: task line, prompts, extension — which line carries the marks", ["cue cards"], "existing"),
      L("ielts-speaking-cue-requirements", "Identifying the key requirements", 13, "Each bullet is a job; the extension demands evaluation, not narration", ["cue cards", "topic development"], "existing"),
      L("ielts-speaking-prep-minute", "The one-minute preparation", 13, "A second-by-second budget for the sixty silent seconds", ["preparation notes"], "existing"),
      L("ielts-speaking-notes", "Effective note-taking", 14, "The four-corner note: fragments, arrows, abbreviations — never sentences", ["preparation notes"], "existing"),
      L("ielts-speaking-organising", "Organising your ideas", 13, "Opening, body, turning point, reflection — the shape of two minutes", ["topic development"], "existing"),
      L("ielts-speaking-continuity", "Maintaining continuity", 13, "Bridging phrases, the recovery sentence, repairing without panic", ["speaking at length", "topic development"], "existing"),
      L("ielts-speaking-at-length", "Speaking at length", 14, "Reaching the full two minutes and using them; why 40 seconds costs more than any error", ["speaking at length"], "existing"),
      L("ielts-speaking-unfamiliar-topics", "Handling unfamiliar topics", 13, "Honest angles, borrowed experiences, inventing freely — the test is language", ["unfamiliar questions"], "existing"),
    ]),
    C("speaking-part2-cards", "Part 2 — the eleven cue-card families", [
      L("ielts-speaking-card-people", "Cue card family: People", 14, "Who they are, how you met, the defining habit, what you take from them", ["describing people", "cue cards"], "existing"),
      L("ielts-speaking-card-places", "Cue card family: Places", 14, "Where and when, sensory snapshot, what you did, why it stays", ["describing places", "cue cards"], "existing"),
      L("ielts-speaking-card-events", "Cue card family: Events", 14, "Scene-setting, sequenced story, turning point, after-effect", ["describing events", "cue cards"], "existing"),
      L("ielts-speaking-card-experiences", "Cue card family: Experiences", 14, "Background, what happened, how it changed you", ["describing experiences", "cue cards"], "existing"),
      L("ielts-speaking-card-objects", "Cue card family: Objects", 14, "What and where it lives, how it came to you, why it matters", ["describing objects", "cue cards"], "existing"),
      L("ielts-speaking-card-activities", "Cue card family: Activities", 14, "What it involves, how you started, difficulty overcome, current level", ["describing activities", "cue cards"], "existing"),
      L("ielts-speaking-card-achievements", "Cue card family: Achievements", 14, "The goal, the difficulty, the effort, the pride — reflection-led", ["describing experiences", "cue cards"], "existing"),
      L("ielts-speaking-card-books", "Cue card family: Books", 14, "What and about, when read, what stayed, how it affected you", ["describing books", "cue cards"], "existing"),
      L("ielts-speaking-card-films", "Cue card family: Films", 14, "What it is, the striking scene, how it changed your view", ["describing films", "cue cards"], "existing"),
      L("ielts-speaking-card-travel", "Cue card family: Travel", 14, "The journey, what happened, how you coped, arrival feelings", ["describing experiences", "cue cards"], "existing"),
      L("ielts-speaking-card-learning", "Cue card family: Learning experiences", 14, "The skill, how learned, the difficulty, how you feel now", ["describing experiences", "cue cards"], "existing"),
    ]),
  ],
  practiceActivities: [
    "Speaking Masterclass practice library: 11 flagship cue cards (one per family, full seven-element teaching payload) plus 11 unseen practice cue cards for independent work",
    "Simulator Part 2 phase: card presentation, the timed one-minute preparation, up to two minutes of recorded speech, replay, transcription and evaluation",
    "AI Tutor long-turn rehearsal with evaluation against the speaking rubric",
  ],
  assessments: [
    "Bank questions on the cue-card craft and every family",
    "Simulator Part 2 submissions evaluated on all four criteria with requirement coverage, sample-response comparison and follow-up practice",
  ],
  completionCriteria: [
    "All 19 lessons completed with bank questions attempted",
    "At least three recorded long turns submitted across different families and reviewed",
  ],
};

// ---------------------------------------------------------------------------
// I-M8 — Speaking Part 3 and Pronunciation (the PROMPT 47 masterclass)
// ---------------------------------------------------------------------------

const I_M8: ModulePlan = {
  code: "I-M8",
  slug: "module-8-speaking-part-3",
  title: "Module 8 — Speaking Part 3 and Pronunciation",
  academy: "ielts",
  courses: ["ielts-academy-core"],
  pathways: ["ielts-academic", "ielts-general-training"],
  replaces: ["module-5-speaking (v1, absorbed by the PROMPT 47 Speaking Masterclass)"],
  description:
    "The Speaking Masterclass (PROMPT 47) for the abstract discussion and the voice: eleven discussion skills — abstract discussion, giving opinions, explaining reasons, comparing, evaluating, speculating, discussing social changes, discussing future possibilities, supporting arguments, developing nuanced answers, closed by progressively difficult discussion practice — plus the accent-neutral pronunciation programme: individual sounds, word stress, sentence stress, intonation, connected speech, linking, rhythm, pausing, clear articulation and natural speech. No national accent is treated as worth more than another; the criterion rewards being easy to understand.",
  learningObjectives: [
    "Climb the abstraction ladder from personal to societal and match the question's level",
    "Give, support and nuance opinions with the VIEW–REASON–EXAMPLE–CONTRAST spine, comparing, evaluating and speculating honestly",
    "Discuss social changes and future possibilities with cause, change and prediction language",
    "Make yourself easier to understand through stress, intonation, connected speech, rhythm and pausing — in any accent",
  ],
  prerequisites: ["I-M7"],
  entryLevel: "B1+",
  estimatedHours: 6,
  chapters: [
    C("speaking-part3-discussion", "Part 3 — discussion", [
      L("ielts-speaking-abstract", "Abstract discussion", 13, "The move from personal to societal; matching the question's level", ["abstract discussion"], "existing"),
      L("ielts-speaking-opinions", "Giving opinions", 13, "Positions stated, softened and held under challenge", ["supporting opinions"], "existing"),
      L("ielts-speaking-reasons", "Explaining reasons", 13, "The because-chain: reason, mechanism, example", ["explaining"], "existing"),
      L("ielts-speaking-comparing", "Comparing", 13, "Contrast frames across eras, groups and options", ["comparing"], "existing"),
      L("ielts-speaking-evaluating", "Evaluating", 13, "Judging significance with criteria, not gut statements", ["evaluating"], "existing"),
      L("ielts-speaking-speculating", "Speculating", 13, "Prediction and hypothesis with calibrated uncertainty", ["speculating"], "existing"),
      L("ielts-speaking-social-changes", "Discussing social changes", 13, "How work, family, cities and habits have shifted", ["discussing social issues"], "existing"),
      L("ielts-speaking-future", "Discussing future possibilities", 13, "Predictions grounded in present evidence, both sides weighed", ["speculating", "discussing future possibilities"], "existing"),
      L("ielts-speaking-supporting", "Supporting arguments", 13, "VIEW–REASON–EXAMPLE–CONTRAST; conceding then answering", ["supporting opinions"], "existing"),
      L("ielts-speaking-nuanced", "Developing nuanced answers", 14, "Partly-agree positions, honest 'it depends', hedged generalisations", ["abstract discussion"], "existing"),
      L("ielts-speaking-progressive", "Progressive discussion practice", 15, "Three worked discussions escalating from accessible to speculative", ["abstract discussion", "comparing", "speculating"], "existing"),
    ]),
    C("speaking-pronunciation", "Pronunciation", [
      L("ielts-speaking-pron-sounds", "Individual sounds", 13, "The meaning-changing distinctions — accent-neutral, minimal pairs", ["individual sounds"], "existing"),
      L("ielts-speaking-pron-word-stress", "Word stress", 12, "Stress shifts inside word families; the schwa", ["word stress"], "existing"),
      L("ielts-speaking-pron-sentence-stress", "Sentence stress", 13, "Stress the meaning words; contrastive stress", ["sentence stress"], "existing"),
      L("ielts-speaking-pron-intonation", "Intonation", 13, "Falling, rising, fall-rise; the monotone risk", ["intonation"], "existing"),
      L("ielts-speaking-pron-connected", "Connected speech", 13, "How words join; hearing it, using it lightly", ["connected speech"], "existing"),
      L("ielts-speaking-pron-linking", "Linking", 12, "Practical joins across word boundaries", ["linking", "connected speech"], "existing"),
      L("ielts-speaking-pron-rhythm", "Rhythm", 12, "The stress-timed beat; rhythm as the carrier of fluency", ["rhythm"], "existing"),
      L("ielts-speaking-pron-pausing", "Pausing", 12, "Pausing at meaning boundaries, not mid-thought", ["pausing"], "existing"),
      L("ielts-speaking-pron-articulation", "Clear articulation", 12, "Mouth positions, word endings, slowing down ten per cent", ["clear articulation"], "existing"),
      L("ielts-speaking-pron-natural", "Natural speech", 13, "Putting it together: the four-question replay check and a self-training routine", ["natural speech"], "existing"),
    ]),
  ],
  practiceActivities: [
    "Speaking Masterclass practice library: 10 progressively difficult Part 3 discussion sets (four questions each, escalating accessible → abstract → speculative) across ten themes",
    "Simulator Part 3 phase with recorded answers, replay, transcription and criterion-based feedback",
    "Self-recording pronunciation drills from the pronunciation lessons with the replay checklist",
  ],
  assessments: [
    "Bank questions on every discussion skill and pronunciation feature",
    "Simulator Part 3 submissions evaluated on all four criteria with per-question analysis",
    "Full three-part Speaking simulation attempted and reviewed in the performance dashboard",
  ],
  completionCriteria: [
    "All 21 lessons completed with bank questions attempted",
    "One full three-part simulator session submitted and reviewed",
    "At least three pronunciation self-recordings reviewed against the replay checklist",
  ],
};

// ---------------------------------------------------------------------------
// I-M9 — Vocabulary, Grammar and the Band Ladder
// ---------------------------------------------------------------------------

const I_M9: ModulePlan = {
  code: "I-M9",
  slug: "module-9-language-and-bands",
  title: "Module 9 — Vocabulary, Grammar and the Band Ladder",
  academy: "ielts",
  courses: ["ielts-academy-core"],
  pathways: ["ielts-academic", "ielts-general-training"],
  replaces: ["module-6-band-development"],
  description:
    "The language-development engine of the academy, in two halves. The ladder half teaches exactly what changes between bands 4 and 9 so effort lands on the right rung. The language half builds the resources every section draws on: topic vocabulary, collocations, paraphrasing, academic word choice, complex sentences, error-budget discipline and natural expression.",
  learningObjectives: [
    "Read the band ladder 4.0→9.0 and name the concrete language behaviours that separate adjacent bands",
    "Assemble topic-based vocabulary and collocations for the recurring IELTS topic families",
    "Paraphrase examiner language faithfully (the skill every section reuses) and choose academic over conversational wording",
    "Build three owned complex-sentence patterns and deploy them with a falling error rate",
    "Track and shrink a personal error budget across writing and speaking",
  ],
  prerequisites: ["I-M1"],
  entryLevel: "B1+ (concurrent with the skills modules)",
  estimatedHours: 5.5,
  chapters: [
    C("band-ladder", "The band ladder", [
      L("ielts-band-ladder-overview", "The full ladder: targets from Band 4 to Band 9", 15, "All ten targets, how half bands arise, reading your own report", ["band ladder"], "existing"),
      L("ielts-band-4-to-5", "Band 4 → 5: from limited to modest", 14, "Simple accuracy before complexity", ["band ladder"], "existing"),
      L("ielts-band-5-to-6", "Band 5 → 6: from modest to competent", 14, "Coverage, connection, three owned complex patterns", ["band ladder"], "existing"),
      L("ielts-band-6-to-7", "Band 6 → 7: from competent to good — the classic jump", 16, "Flexible cohesion, less-common vocabulary, error-free rate", ["band ladder"], "existing"),
      L("ielts-band-7-to-8", "Band 7 → 8: from good to very good", 14, "Consistency becomes style", ["band ladder"], "existing"),
      L("ielts-band-8-to-9", "Band 8 → 9: expert command", 12, "The descriptor ceiling — train the rung you need", ["band ladder"], "existing"),
    ]),
    C("topic-vocabulary", "Topic-based vocabulary", [
      L("ielts-vocabulary-topics", "Topic vocabulary for the recurring IELTS families", 15, "Education, environment, technology, health, work, cities: the words that recur across all four sections", ["topic-based vocabulary"]),
      L("ielts-vocabulary-collocations", "Collocations and word partnerships", 14, "Verb+noun and adjective+noun pairs that sound native; spotting and unlearning learned errors", ["collocations"]),
    ]),
    C("precision-and-paraphrase", "Precision and paraphrase", [
      L("ielts-vocabulary-paraphrasing", "Paraphrasing: the most reused skill in IELTS", 14, "Synonym substitution with grammar shifts; paraphrasing stems, questions and reading claims without distorting them", ["paraphrasing"]),
      L("ielts-vocabulary-word-choice", "Academic word choice", 14, "Register-appropriate precision: replacing vague words, choosing the exact academic twin, avoiding over-formal stiffness", ["academic word choice"]),
    ]),
    C("grammar-for-the-bands", "Grammar for the bands", [
      L("ielts-grammar-complex-sentences", "Complex sentence formation", 15, "Relative clauses, conditionals, concession and nominalisation — owned patterns deployed deliberately", ["complex sentence formation"]),
      L("ielts-grammar-accuracy", "Grammar accuracy: the error budget", 14, "Counting and cutting errors per 100 words; the self-correction habit that lifts Grammatical Range and Accuracy", ["grammar accuracy"]),
      L("ielts-expressions-natural", "Natural expressions and spoken register", 12, "Idiomatic but safe chunks, spoken discourse markers, warmth without slang", ["natural expressions"]),
    ]),
  ],
  practiceActivities: [
    "Word World topic sets bridged per pathway steps (vocabulary retention system)",
    "Grammar Clinic error-correction sessions on the learner's own recorded mistakes",
    "Paraphrase drills from the drill pool (reading stems and listening stems)",
    "Collocation and word-choice bank questions with why-wrong feedback",
  ],
  assessments: [
    "Bank questions across all language lessons",
    "Error-budget review: learner tracks errors per task across the module",
  ],
  completionCriteria: [
    "All 13 lessons completed with bank questions attempted",
    "Personal error log started and reviewed at least once with the AI Tutor",
  ],
};

// ---------------------------------------------------------------------------
// I-M10 — Full Examination Practice
// ---------------------------------------------------------------------------

const I_M10: ModulePlan = {
  code: "I-M10",
  slug: "module-10-full-practice",
  title: "Module 10 — Full Examination Practice",
  academy: "ielts",
  courses: ["ielts-academy-core"],
  pathways: ["ielts-academic", "ielts-general-training"],
  replaces: ["module-7-exam-strategies", "module-8-mocks"],
  description:
    "The examination itself as a skill. Learners run the mock system with intent (modes, kinds, cadence), drill the strategies that protect marks under pressure, then learn to read a mock report the way an examiner would: section bands, the rounding rule in action, error patterns and the next-week plan they imply.",
  learningObjectives: [
    "Operate the mock library: timed vs untimed modes, section vs full vs drill kinds, and the accelerating cadence to test day",
    "Apply instruction discipline (word limits, 'choose TWO letters', True vs Yes) and answer-selection strategy under the clock",
    "Score and avoid the ten commonest mark-losing mistakes, and use the mark → move → return protocol on hard items",
    "Convert any mock report into a diagnosis: section bands, overall with rounding, error taxonomy and a dated revision plan",
  ],
  prerequisites: ["section-modules"],
  entryLevel: "B1+ (after the four section modules of your pathway)",
  estimatedHours: 4,
  chapters: [
    C("mock-system", "The mock system", [
      L("ielts-mocks-guide", "The mock system: modes, kinds and cadence", 12, "Timed vs untimed; the accelerating cadence", ["section tests", "full mock examinations"], "existing"),
    ]),
    C("strategies-under-the-clock", "Strategies under the clock", [
      L("ielts-strategy-instructions", "Understanding instructions", 12, "Word limits, 'choose TWO letters', True vs Yes", ["revision"], "existing"),
      L("ielts-strategy-answering", "Answer selection strategies", 10, "Elimination, distractors, never leave a blank", ["revision"], "existing"),
      L("ielts-strategy-mistakes", "Avoiding common mistakes", 12, "The ten-row table — score your next mock against it", ["revision"], "existing"),
      L("ielts-strategy-difficult", "Handling difficult questions", 10, "Mark → move → return; the panic protocol", ["revision"], "existing"),
      L("ielts-strategy-review", "Review strategies", 12, "The five-step post-mock review and the error log", ["revision"], "existing"),
    ]),
    C("score-analysis", "Score analysis and revision", [
      L("ielts-mocks-score-analysis", "Reading your mock report like an examiner", 14, "Section bands and the rounding rule on your own numbers; converting an error taxonomy into next week's drills; when a mock indicates readiness and when it does not", ["score analysis"]),
    ]),
  ],
  practiceActivities: [
    "Section mocks for every section at official timing (variant bank)",
    "Full mock cycle: untimed baseline → timed sittings under exam conditions, accelerating to test day",
    "Drill-pool sessions targeted at the previous mock's error taxonomy",
    "AI Tutor review sessions turning mock reports into next-week plans",
  ],
  assessments: [
    "At least two timed full mocks from the learner's variant bank (band-estimated with per-item explanations)",
    "Post-mock five-step review completed for every sitting",
  ],
  completionCriteria: [
    "All 7 lessons completed with bank questions attempted",
    "At least two timed full-mock attempts with five-step reviews recorded",
    "A final revision plan dated to the test date",
  ],
};

export const IELTS_SHARED_MODULES: ModulePlan[] = [I_M1, I_M2, I_M6, I_M7, I_M8, I_M9, I_M10];
