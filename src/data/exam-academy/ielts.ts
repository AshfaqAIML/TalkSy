/**
 * IELTS Academy blueprint — pathway configurations, prompt-mandated topic
 * requirements and the IELTS for UKVI guidance annex.
 *
 * Three preparation pathways (PROMPT 42 PART A):
 *   1. IELTS Academic        (courses: core + academic)
 *   2. IELTS General Training (courses: core + general-training)
 *   3. IELTS for UKVI — a delivery guidance annex that overlays whichever of
 *      the two substantive pathways matches the learner's UKVI test
 *      (Academic or General Training). UKVI is the SAME test under Secure
 *      English Language Test conditions, so it adds guidance, never a
 *      parallel curriculum (see UKVI_GUIDANCE and src/lib/exams/specs.ts
 *      UKVI_DELIVERY).
 *
 * Listening and Speaking are shared across both variants (identical tests);
 * Reading and Writing are strictly distinct per track.
 */

import type { PathwayPlan, TopicRequirement } from "./types";
import { IELTS_SHARED_MODULES } from "./ielts-shared";
import { IELTS_TRACK_MODULES } from "./ielts-tracks";

export const IELTS_MODULES = [...IELTS_SHARED_MODULES, ...IELTS_TRACK_MODULES];

// ---------------------------------------------------------------------------
// Prompt-mandated topic coverage (PROMPT 42 PART A).
// Every topic below must be covered by ≥1 lesson of the named module —
// enforced by scripts/validate-exam-blueprint.ts.
// ---------------------------------------------------------------------------

export const IELTS_TOPIC_REQUIREMENTS: TopicRequirement[] = [
  {
    moduleCode: "I-M1",
    source: "PROMPT 42 — IELTS Fundamentals",
    topics: [
      "examination introduction",
      "test structure",
      "band scores",
      "assessment criteria",
      "academic preparation strategy",
      "time management",
      "test-day guidance",
    ],
  },
  {
    moduleCode: "I-M2",
    source: "PROMPT 42 — Listening Mastery",
    topics: [
      "listening test structure",
      "all four listening parts",
      "form completion",
      "note completion",
      "table completion",
      "sentence completion",
      "summary completion",
      "matching",
      "multiple choice",
      "map and diagram labelling",
      "distractors",
      "synonyms and paraphrasing",
      "different English accents",
    ],
  },
  {
    moduleCode: "IA-M3",
    source: "PROMPT 42 — Academic Reading Mastery",
    topics: [
      "reading strategies",
      "skimming",
      "scanning",
      "main ideas",
      "supporting details",
      "inference",
      "True/False/Not Given",
      "Yes/No/Not Given",
      "matching headings",
      "matching information",
      "matching features",
      "matching sentence endings",
      "multiple choice",
      "summary completion",
      "sentence completion",
      "diagram labelling",
      "time management",
    ],
  },
  {
    moduleCode: "IA-M4",
    source: "PROMPT 42 — Academic Writing Task 1",
    topics: [
      "graph interpretation",
      "bar charts",
      "line graphs",
      "pie charts",
      "tables",
      "mixed charts",
      "process diagrams",
      "maps",
      "comparison",
      "trends",
      "introductions",
      "overviews",
      "data selection",
      "paragraph organisation",
    ],
  },
  {
    moduleCode: "IA-M5",
    source: "PROMPT 42 — Academic Writing Task 2",
    topics: [
      "opinion essays",
      "discussion essays",
      "advantages and disadvantages",
      "problem and solution",
      "two-part questions",
      "essay planning",
      "thesis statements",
      "topic sentences",
      "supporting arguments",
      "examples",
      "coherence",
      "conclusions",
    ],
  },
  {
    moduleCode: "I-M6",
    source: "PROMPT 42 — Speaking Part 1",
    topics: ["personal questions", "familiar topics", "answer development", "natural fluency", "avoiding memorised responses"],
  },
  {
    moduleCode: "I-M7",
    source: "PROMPT 42 — Speaking Part 2",
    topics: [
      "cue cards",
      "preparation notes",
      "topic development",
      "describing experiences",
      "describing people",
      "describing places",
      "describing objects",
      "speaking at length",
    ],
  },
  {
    moduleCode: "I-M8",
    source: "PROMPT 42 — Speaking Part 3",
    topics: ["abstract discussion", "comparing", "explaining", "speculating", "supporting opinions", "discussing social issues"],
  },
  {
    moduleCode: "I-M9",
    source: "PROMPT 42 — Vocabulary and Grammar for IELTS",
    topics: [
      "topic-based vocabulary",
      "collocations",
      "paraphrasing",
      "academic word choice",
      "grammar accuracy",
      "complex sentence formation",
      "natural expressions",
    ],
  },
  {
    moduleCode: "I-M10",
    source: "PROMPT 42 — Full Examination Practice",
    topics: ["section tests", "full mock examinations", "score analysis", "revision"],
  },
  {
    moduleCode: "IG-M3",
    source: "PROMPT 42 — General Training Reading",
    topics: ["everyday texts", "notices", "advertisements", "workplace documents", "general-interest passages", "reading strategies"],
  },
  {
    moduleCode: "IG-M4",
    source: "PROMPT 42 — General Training Writing Task 1",
    topics: [
      "formal letters",
      "semi-formal letters",
      "informal letters",
      "requests",
      "complaints",
      "invitations",
      "explanations",
      "suggestions",
    ],
  },
  {
    moduleCode: "IG-M5",
    source: "PROMPT 42 — General Training Writing Task 2",
    topics: ["GT essay craft"],
  },
];

// ---------------------------------------------------------------------------
// Pathway configurations
// ---------------------------------------------------------------------------

export const IELTS_ACADEMIC_PATHWAY: PathwayPlan = {
  key: "ielts-academic",
  title: "IELTS Academic Preparation Pathway",
  summary:
    "Ten modules in the PROMPT 42 structure: Fundamentals, Listening Mastery, then the Academic track's own Reading and Writing Task 1/Task 2 modules, Speaking Parts 1–3, Vocabulary/Grammar/Band Ladder, and Full Examination Practice. Listening and Speaking are shared with General Training (identical tests); Reading and Writing are Academic-only. Mocks, banks and drills come exclusively from the IELTS Academic bank.",
  modules: ["I-M1", "I-M2", "IA-M3", "IA-M4", "IA-M5", "I-M6", "I-M7", "I-M8", "I-M9", "I-M10"],
  configuration: [
    "Courses: ielts-academy-core (I-M1, I-M2, I-M6–I-M10) + ielts-academy-academic (IA-M3, IA-M4, IA-M5)",
    "Specification: IELTS/ACADEMIC active version (currently v1, effective 2026-07-01, format-verified against ielts.org)",
    "Question and mock banks: IELTS Academic only — bank separation from General Training is test-enforced",
    "Rubrics: ielts.writing and ielts.speaking (official four criteria each)",
    "UKVI guidance annex applies when the visa route requires a SELT (see UKVI_GUIDANCE)",
    "Score targets: IELTS_SCORE_TARGETS in score-pathways.ts (Band 5 → 8.5+)",
  ],
};

export const IELTS_GENERAL_TRAINING_PATHWAY: PathwayPlan = {
  key: "ielts-general-training",
  title: "IELTS General Training Preparation Pathway",
  summary:
    "The General Training twin under the same module architecture: shared Fundamentals, Listening and Speaking modules, then GT-specific Reading (notices, workplace documents, general interest) and Writing (the letter; the everyday essay) modules — distinct lessons, distinct bank, distinct mocks, never reused from Academic — finishing with the shared language/band module and Full Examination Practice on the GT bank.",
  modules: ["I-M1", "I-M2", "IG-M3", "IG-M4", "IG-M5", "I-M6", "I-M7", "I-M8", "I-M9", "I-M10"],
  configuration: [
    "Courses: ielts-academy-core (I-M1, I-M2, I-M6–I-M10) + ielts-academy-general-training (IG-M3, IG-M4, IG-M5)",
    "Specification: IELTS/GENERAL_TRAINING active version (currently v1; adds the GT reading families and the letter task)",
    "Question and mock banks: IELTS General Training only — bank separation from Academic is test-enforced",
    "Rubrics: ielts.writing and ielts.speaking (identical criteria for both variants)",
    "GT raw-to-band anchors differ from Academic (e.g. GT Reading Band 6 ≈ 30/40 vs Academic ≈ 23/40) — mocks convert with GT tables",
    "UKVI guidance annex applies when the visa route requires a SELT (see UKVI_GUIDANCE)",
    "Score targets: IELTS_SCORE_TARGETS in score-pathways.ts (Band 5 → 8.5+)",
  ],
};

// ---------------------------------------------------------------------------
// IELTS for UKVI — delivery guidance annex (third pathway, PROMPT 42 PART A.3)
// ---------------------------------------------------------------------------

/**
 * IELTS for UKVI is the same test as standard IELTS taken under Secure
 * English Language Test conditions: identical format, timing, difficulty and
 * scoring. It therefore has no separate curriculum — a UKVI candidate
 * follows the Academic or General Training pathway of their test, plus the
 * guidance below (mirrors UKVI_DELIVERY in src/lib/exams/specs.ts).
 */
export const UKVI_GUIDANCE = {
  title: "IELTS for UKVI — Preparation Guidance",
  appliesTo: ["IELTS for UKVI (Academic)", "IELTS for UKVI (General Training)"] as const,
  sameTestAsStandard: true,
  summary:
    "A Secure English Language Test (SELT): the same IELTS test — format, timing and difficulty — taken in person at an official IELTS for UKVI test centre, with the Test Report Form marked for UKVI purposes. Preparation is the pathway of the underlying variant; only booking, delivery and component-minimum rules differ.",
  guidance: [
    "Choose UKVI only when your visa route requires a SELT; many sponsors and universities accept standard IELTS — check before booking",
    "Follow the Academic pathway for UKVI Academic or the General Training pathway for UKVI General Training — the tests are identical to standard IELTS, so the same lessons, mocks and rubrics apply",
    "It must be taken in person at an official IELTS for UKVI test centre — there is no home edition",
    "Component minimums are set by the visa route (for example 4.0 in every component at B1, 5.5 at B2, 7.0 at C1), so set a target per component, not just overall",
    "IELTS Life Skills (A1/A2/B1) is a different two-skill test (speaking and listening, Pass result) and is outside these four-skill pathways — see the ielts-ukvi-explained lesson for orientation",
    "Confirm retake options with your test centre before booking — visa routes treat retakes differently",
  ],
  sourceLabel: "IELTS official — Tests for UK Visas and Immigration",
  sourceUrl: "https://ielts.org/take-a-test/test-types/ielts-tests-for-uk-visas-and-immigration",
} as const;

export const IELTS_PATHWAYS: PathwayPlan[] = [IELTS_ACADEMIC_PATHWAY, IELTS_GENERAL_TRAINING_PATHWAY];
