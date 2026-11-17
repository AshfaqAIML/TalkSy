/**
 * TOEFL iBT preparation pathway (2026 format) — the learner's route through
 * the seven-module academy, PROMPT 48 structure.
 *
 * Every step is a REFERENCE (nothing is duplicated): TOEFL Academy lessons
 * (refType "curriculum" -> #/course-lesson/<slug>), the mock library
 * (refType "mock" -> #/exams/mocks, refId carries the mock title), the
 * common curriculum (grammar / reading / listening / speaking / writing /
 * vocabulary / lab) and onboarding drills. Every step carries a refId.
 */

import type { PathwayModuleSeed } from "../ielts/pathways";

export const toeflPathway = {
  examKey: "TOEFL_IBT",
  variant: "STANDARD",
  title: "TOEFL iBT Preparation Pathway (2026 format)",
  summary:
    "Eight phases through the complete 2026-format academy: foundations, core academic English, then Reading, Listening, Writing and Speaking craft with a section mock each, the language engine, and the adaptive-simulation + full-mock cycle to test day. Built for the format in force since 21 January 2026.",
  modules: [
    {
      title: "Phase 1 — Diagnose & Bridge Foundations",
      goal: "Establish your baseline and repair the core language skills every TOEFL section depends on.",
      steps: [
        { label: "Take the TOEFL sample mock (2026 format) to set your baseline", refType: "drill", refId: "TOEFL iBT Sample Mock 1 (2026 format)", examSection: "reading", focus: "Baseline diagnostic on the new format", minutes: 60 },
        { label: "Grammar School: core tense system", refType: "grammar", refId: "present-simple", examSection: "writing", focus: "Accuracy for sentence reconstruction", minutes: 30 },
        { label: "Sentence Lab: sentence building and rebuilding", refType: "lab", refId: "sentence-lab", examSection: "writing", focus: "The exact skill the 2026 Writing section tests", minutes: 25 },
        { label: "Word World: Technology word sets", refType: "vocabulary", refId: "technology", examSection: "reading", focus: "Academic and technical vocabulary", minutes: 20 },
        { label: "TOEFL Academy: what TOEFL iBT is and who needs it", refType: "curriculum", refId: "toefl-what-and-why", examSection: "reading", focus: "Orientation: purpose, receivers, IELTS-at-a-glance", minutes: 12 },
        { label: "TOEFL Academy: the 2026 format, section by section", refType: "curriculum", refId: "toefl-format-2026", examSection: "reading", focus: "The format card behind every pacing budget", minutes: 15 },
        { label: "TOEFL Academy: adaptive testing explained", refType: "curriculum", refId: "toefl-adaptive-testing", examSection: "reading", focus: "Two-stage adaptive Reading and Listening", minutes: 12 },
        { label: "TOEFL Academy: the 1–6 band scale", refType: "curriculum", refId: "toefl-band-scale", examSection: "reading", focus: "Nearest-half rounding and per-section floors", minutes: 14 },
        { label: "TOEFL Academy: score reports and MyBest", refType: "curriculum", refId: "toefl-score-reports", examSection: "reading", focus: "Reporting, superscoring and the 0–120 transition", minutes: 12 },
        { label: "TOEFL Academy: the preparation method", refType: "curriculum", refId: "toefl-preparation-strategy", examSection: "reading", focus: "Diagnose → language → technique → mock cycle", minutes: 14 },
        { label: "TOEFL Academy: time management", refType: "curriculum", refId: "toefl-time-management", examSection: "reading", focus: "The pacing card for all four sections", minutes: 12 },
        { label: "TOEFL Academy: test-day preparation", refType: "curriculum", refId: "toefl-test-day", examSection: "reading", focus: "Test centre or Home Edition routine", minutes: 12 },
      ],
    },
    {
      title: "Phase 2 — Core Academic English",
      goal: "Build the academic vocabulary, lecture comprehension and discussion skills TOEFL draws on.",
      steps: [
        { label: "Reading Room: 'Hybrid work policy' (advanced)", refType: "reading", refId: "hybrid-work-policy", examSection: "reading", focus: "Opinion-driven academic prose", minutes: 30 },
        { label: "Reading Room: 'Why do we dream' (intermediate)", refType: "reading", refId: "why-do-we-dream", examSection: "reading", focus: "Science writing and research summaries", minutes: 30 },
        { label: "Listening Lab: 'Making plans on the phone' (professional)", refType: "listening", refId: "making-plans-on-the-phone", examSection: "listening", focus: "Everyday academic-adjacent listening", minutes: 25 },
        { label: "Listening Lab: 'Project update meeting' (professional)", refType: "listening", refId: "project-update-meeting", examSection: "listening", focus: "Lecture-style extended listening", minutes: 25 },
        { label: "Writing Studio: opinion writing", refType: "writing", refId: "opinion-writing", examSection: "writing", focus: "State and support a position — academic discussion task", minutes: 35 },
        { label: "Speaking Lab: advanced interview practice", refType: "speaking", refId: "spk-adv-interview", examSection: "speaking", focus: "The 2026 interview format", minutes: 25 },
        { label: "Word World: Workplace word sets", refType: "vocabulary", refId: "workplace", examSection: "listening", focus: "Campus and workplace vocabulary", minutes: 20 },
      ],
    },
    {
      title: "Phase 3 — Reading Craft",
      goal: "Master the 2026 Reading section: Complete the Words, everyday texts and academic passages, plus the skills underneath them.",
      steps: [
        { label: "TOEFL Academy: Understanding the Reading section", refType: "curriculum", refId: "toefl-reading-overview", examSection: "reading", focus: "50 items, ~30 minutes, two-stage adaptive", minutes: 12 },
        { label: "TOEFL Academy: Complete the Words", refType: "curriculum", refId: "toefl-reading-complete-words", examSection: "reading", focus: "Context, collocation and morphology to restore masked letters", minutes: 15 },
        { label: "TOEFL Academy: Read in Daily Life", refType: "curriculum", refId: "toefl-reading-daily-life", examSection: "reading", focus: "Everyday and campus texts at speed", minutes: 14 },
        { label: "TOEFL Academy: Read an Academic Passage", refType: "curriculum", refId: "toefl-reading-academic-passage", examSection: "reading", focus: "Academic structure and eliminating near-miss options", minutes: 15 },
        { label: "TOEFL Academy: Vocabulary in context and word forms", refType: "curriculum", refId: "toefl-reading-vocabulary", examSection: "reading", focus: "Meaning from context; word families and affixation", minutes: 14 },
        { label: "TOEFL Academy: Main ideas and supporting details", refType: "curriculum", refId: "toefl-reading-ideas-details", examSection: "reading", focus: "Thesis, topic sentences and the details that serve them", minutes: 14 },
        { label: "TOEFL Academy: Inference", refType: "curriculum", refId: "toefl-reading-inference", examSection: "reading", focus: "What the author implies but does not state", minutes: 14 },
        { label: "TOEFL Academy: Academic vocabulary", refType: "curriculum", refId: "toefl-reading-academic-vocabulary", examSection: "reading", focus: "The word stock that recurs across TOEFL passages", minutes: 12 },
        { label: "Practice library: Read in Daily Life set (d1–d3)", refType: "library", refId: "toefl-rb-daily-01", examSection: "reading", focus: "Everyday texts for gist, purpose, detail and implication", minutes: 30 },
        { label: "Practice library: Complete the Words set (d2–d4)", refType: "library", refId: "toefl-rb-words-08", examSection: "reading", focus: "Morphology in context — the skill behind every masked word", minutes: 30 },
        { label: "Reading section mock at official item count", refType: "mock", refId: "TOEFL Reading Section Mock (2026 format) 1", examSection: "reading", focus: "35 raw points across the three task types, ~30 minutes", minutes: 35 },
      ],
    },
    {
      title: "Phase 4 — Listening Craft",
      goal: "Master the 2026 Listening section: all four task types plus the intent, inference, note-taking and natural-speech skills they test.",
      steps: [
        { label: "TOEFL Academy: Understanding the Listening section", refType: "curriculum", refId: "toefl-listening-overview", examSection: "listening", focus: "47 items, forward-only — why prediction replaces replay", minutes: 12 },
        { label: "TOEFL Academy: Listen and Choose a Response", refType: "curriculum", refId: "toefl-listening-choose-response", examSection: "listening", focus: "Predicting the pragmatic reply", minutes: 14 },
        { label: "TOEFL Academy: Listen to a Conversation", refType: "curriculum", refId: "toefl-listening-conversation", examSection: "listening", focus: "Purpose, negotiation, corrections and outcomes", minutes: 14 },
        { label: "TOEFL Academy: Listen to an Announcement", refType: "curriculum", refId: "toefl-listening-announcement", examSection: "listening", focus: "Key facts, changes and who-should-do-what", minutes: 12 },
        { label: "TOEFL Academy: Listen to an Academic Talk", refType: "curriculum", refId: "toefl-listening-academic-talk", examSection: "listening", focus: "Structure signposts, examples, attitude and concluding claims", minutes: 15 },
        { label: "TOEFL Academy: Speaker intent and stance", refType: "curriculum", refId: "toefl-listening-intent", examSection: "listening", focus: "Suggesting, conceding, objecting, hedging", minutes: 14 },
        { label: "TOEFL Academy: Main ideas and supporting details", refType: "curriculum", refId: "toefl-listening-ideas-details", examSection: "listening", focus: "The spine of a talk plus the numbers, names and examples", minutes: 14 },
        { label: "TOEFL Academy: Inference", refType: "curriculum", refId: "toefl-listening-inference", examSection: "listening", focus: "Implication versus assumption", minutes: 14 },
        { label: "TOEFL Academy: Note-taking", refType: "curriculum", refId: "toefl-listening-note-taking", examSection: "listening", focus: "A two-column system that survives forward-only delivery", minutes: 14 },
        { label: "TOEFL Academy: Natural spoken English", refType: "curriculum", refId: "toefl-listening-natural-speech", examSection: "listening", focus: "Reductions, hesitations and discourse markers", minutes: 12 },
        { label: "Practice library: Conversations set (d2–d4)", refType: "library", refId: "toefl-lb-conv-06", examSection: "listening", focus: "Corrections, numbers and mid-flight changes of plan", minutes: 30 },
        { label: "Practice library: Academic Talks set (d3–d5)", refType: "library", refId: "toefl-lb-talk-11", examSection: "listening", focus: "Lecture structure, terminology, emphasis and the closing claim", minutes: 35 },
        { label: "Listening section mock at official scale", refType: "mock", refId: "TOEFL Listening Section Mock (2026 format) 1", examSection: "listening", focus: "All four task families, forward-only, ~29 minutes", minutes: 34 },
      ],
    },
    {
      title: "Phase 5 — Writing Craft",
      goal: "Master the 2026 Writing section: sentence reconstruction at speed, the fit-for-purpose email, and the academic discussion post.",
      steps: [
        { label: "TOEFL Academy: Understanding the Writing section", refType: "curriculum", refId: "toefl-writing-overview", examSection: "writing", focus: "12 items in ~23 minutes — reconstruction, email, discussion", minutes: 12 },
        { label: "TOEFL Academy: Build a Sentence — order and speed", refType: "curriculum", refId: "toefl-writing-build-sentence", examSection: "writing", focus: "10 items in roughly 10 minutes", minutes: 15 },
        { label: "TOEFL Academy: Grammar and syntax for reconstruction", refType: "curriculum", refId: "toefl-writing-syntax", examSection: "writing", focus: "Agreement, tense, modifiers and connectors as ordering clues", minutes: 14 },
        { label: "TOEFL Academy: Write an Email — structure and tone", refType: "curriculum", refId: "toefl-writing-email", examSection: "writing", focus: "Greeting, purpose, request, close — matched to the recipient", minutes: 14 },
        { label: "TOEFL Academy: Write for an Academic Discussion", refType: "curriculum", refId: "toefl-writing-discussion", examSection: "writing", focus: "Position, engagement with classmates, support", minutes: 15 },
        { label: "TOEFL Academy: Academic vocabulary for the written tasks", refType: "curriculum", refId: "toefl-writing-language", examSection: "writing", focus: "Precise verbs, stance language and connectors", minutes: 12 },
        { label: "Practice library: Build a Sentence set (d1–d2)", refType: "library", refId: "toefl-wb-sent-01", examSection: "writing", focus: "Word order and grammar reconstruction at foundation speed", minutes: 25 },
        { label: "Practice library: Build a Sentence set (d3–d5)", refType: "library", refId: "toefl-wb-sent-41", examSection: "writing", focus: "Clauses, completeness and punctuation at advanced speed", minutes: 30 },
        { label: "Practice library: Write an Email set (d1–d3)", refType: "library", refId: "toefl-wb-email-01", examSection: "writing", focus: "Fit-for-purpose campus emails across six purposes, evaluated with educational estimates", minutes: 30 },
        { label: "Practice library: Academic Discussion set (d2–d3)", refType: "library", refId: "toefl-wb-disc-01", examSection: "writing", focus: "Join a discussion board: position, engagement, support", minutes: 30 },
        { label: "Writing section mock (official 12 items)", refType: "mock", refId: "TOEFL Writing Section Mock (2026 format) 2", examSection: "writing", focus: "10 reconstructions + email + discussion, ~23 minutes", minutes: 27 },
      ],
    },
    {
      title: "Phase 6 — Speaking Craft",
      goal: "Master the 2026 Speaking section: accurate repetition inside the windows and short, complete, fluent interview answers.",
      steps: [
        { label: "TOEFL Academy: Understanding the Speaking section", refType: "curriculum", refId: "toefl-speaking-overview", examSection: "speaking", focus: "11 items — 7 Listen-and-Repeat + 4 interview", minutes: 12 },
        { label: "TOEFL Academy: Listen and Repeat — accuracy in the window", refType: "curriculum", refId: "toefl-speaking-listen-repeat", examSection: "speaking", focus: "Chunking sentences; reproducing them inside 8/10/12 seconds", minutes: 15 },
        { label: "TOEFL Academy: Pronunciation and intelligibility", refType: "curriculum", refId: "toefl-speaking-pronunciation", examSection: "speaking", focus: "Stress, rhythm and clarity — accent-neutral", minutes: 14 },
        { label: "TOEFL Academy: Take an Interview — short, complete, fluent", refType: "curriculum", refId: "toefl-speaking-interview", examSection: "speaking", focus: "Answer development under the clock", minutes: 15 },
        { label: "TOEFL Academy: Grammar and vocabulary in interview answers", refType: "curriculum", refId: "toefl-speaking-interview-language", examSection: "speaking", focus: "Stable tense control and topic-relevant vocabulary", minutes: 12 },
        { label: "Practice library: Listen and Repeat set (d1–d3)", refType: "library", refId: "toefl-sb-rep-01", examSection: "speaking", focus: "Repeat sentences inside 8/10/12-second windows with repetition analysis", minutes: 20 },
        { label: "Practice library: Take an Interview set (d2–d3)", refType: "library", refId: "toefl-sb-int-09", examSection: "speaking", focus: "Answer development under the clock, evaluated with educational estimates", minutes: 25 },
        { label: "Speaking section mock (official 11 items)", refType: "mock", refId: "TOEFL Speaking Section Mock (2026 format) 1", examSection: "speaking", focus: "7 Listen-and-Repeat with official windows + 4 interview items", minutes: 12 },
      ],
    },
    {
      title: "Phase 7 — The Language Engine",
      goal: "Build the word families, sentence craft, accuracy and register that every TOEFL section draws on.",
      steps: [
        { label: "TOEFL Academy: Academic word families", refType: "curriculum", refId: "toefl-language-word-families", examSection: "reading", focus: "One family, many forms — the stock TOEFL passages reuse", minutes: 14 },
        { label: "TOEFL Academy: Collocations", refType: "curriculum", refId: "toefl-language-collocations", examSection: "listening", focus: "Verb+noun and adjective+noun partnerships", minutes: 12 },
        { label: "TOEFL Academy: Sentence structure", refType: "curriculum", refId: "toefl-language-sentence-structure", examSection: "writing", focus: "Clause combination, modification and parallelism", minutes: 14 },
        { label: "TOEFL Academy: Grammar accuracy", refType: "curriculum", refId: "toefl-language-grammar-accuracy", examSection: "writing", focus: "The error budget: counting and cutting errors per task", minutes: 14 },
        { label: "TOEFL Academy: Paraphrasing", refType: "curriculum", refId: "toefl-language-paraphrasing", examSection: "reading", focus: "Restating academic sentences without distortion", minutes: 12 },
        { label: "TOEFL Academy: Natural academic communication", refType: "curriculum", refId: "toefl-language-academic-communication", examSection: "speaking", focus: "Register and stance for discussion and interview tasks", minutes: 12 },
      ],
    },
    {
      title: "Phase 8 — Mock Cycle & Exam Readiness",
      goal: "Full simulations on the clock, adaptive practice that mirrors the two-stage design, and performance reports that become next week's plan.",
      steps: [
        { label: "TOEFL Academy: The mock system — modes, kinds and cadence", refType: "curriculum", refId: "toefl-practice-mocks-guide", examSection: "reading", focus: "Task drills → section tests → adaptive simulations → full mocks", minutes: 12 },
        { label: "TOEFL Academy: Practising with adaptive simulations", refType: "curriculum", refId: "toefl-practice-adaptive", examSection: "reading", focus: "Two-stage structure; treating the routing module seriously", minutes: 12 },
        { label: "Adaptive simulation — Stage 1 routing module", refType: "mock", refId: "TOEFL Adaptive Simulation — Stage 1: Routing module", examSection: "reading", focus: "60%+ routes you to the upper module — a practice adaptation, not the ETS algorithm", minutes: 20 },
        { label: "Adaptive simulation — your Stage 2 module (upper or lower)", refType: "mock", refId: "TOEFL Adaptive Simulation — Stage 2: Upper module", examSection: "listening", focus: "Upper if you routed 60%+, lower otherwise", minutes: 25 },
        { label: "TOEFL Academy: Reading your performance report", refType: "curriculum", refId: "toefl-practice-analysis", examSection: "reading", focus: "Section bands, the rounding rule, error taxonomy, next-week plan", minutes: 14 },
        { label: "Sit the full TOEFL mock under exam conditions", refType: "mock", refId: "TOEFL iBT Full Mock (2026 format) 1", examSection: "reading", focus: "All four sections at official counts — ~90 minutes of timed sections", minutes: 100 },
        { label: "Final light review: word lists and error log", refType: "vocabulary", refId: "education", examSection: "reading", focus: "Low-energy consolidation before test day", minutes: 20 },
      ],
    },
  ] as PathwayModuleSeed[],
};
