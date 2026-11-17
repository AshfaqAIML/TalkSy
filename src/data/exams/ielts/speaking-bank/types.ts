/**
 * IELTS Speaking Masterclass — practice bank content model (PROMPT 47,
 * Parts 2–3, 6 and 8).
 *
 * Every item is an ORIGINAL Speaking practice material authored for this
 * platform, written in the style of the test — never reproduced exam
 * content. Three kinds of item, one per speaking part, plus a lighter
 * practice cue-card layer for simulation rounds:
 *
 *   part1 (19)          — one interview round per taught Part 1 topic:
 *                         five examiner questions, each with development
 *                         guidance, a model answer and a weak-versus-
 *                         improved pair
 *   cue-card (11)       — one flagship cue card per taught description
 *                         family, each carrying the full seven-element
 *                         teaching payload: the prompt, planning notes,
 *                         vocabulary suggestions, a natural sample
 *                         response, response analysis, alternative
 *                         approaches and follow-up practice
 *   practice-cue-card (11) — one further unseen cue card per family for
 *                         simulation and independent practice (prompt,
 *                         vocabulary hints and rounding-off questions;
 *                         no model — the learner works independently)
 *   part3 (10)          — progressively difficult discussion sets: four
 *                         questions each, escalating from accessible to
 *                         abstract to speculative
 *
 * PART 8 organisation: every item carries its speaking part, topic or
 * family, difficulty (1–5), proficiency band (foundation / intermediate /
 * advanced) and the primary skill it trains — the practice library exposes
 * all five dimensions as filters.
 *
 * Honest framing throughout: sample responses carry band-style labels
 * only as educational estimates, never official scores; the bank teaches
 * speaking from ideas, never memorised scripts; and no item ties any
 * national accent to a higher score — the criterion rewards being easy to
 * understand, whatever accent the speaker has.
 */

// ---------------------------------------------------------------------------
// Parts, topics, families, dimensions
// ---------------------------------------------------------------------------

export type SpeakingPart = 1 | 2 | 3;

/** The nineteen taught Part 1 topics (PROMPT 47, Part 2). */
export type SpeakingPart1Topic =
  | "introduction"
  | "work"
  | "study"
  | "hometown"
  | "accommodation"
  | "family"
  | "friends"
  | "hobbies"
  | "food"
  | "travel"
  | "technology"
  | "education"
  | "daily-routines"
  | "shopping"
  | "weather"
  | "books"
  | "music"
  | "sports"
  | "social-activities";

export const SPEAKING_PART1_TOPICS: SpeakingPart1Topic[] = [
  "introduction", "work", "study", "hometown", "accommodation", "family", "friends", "hobbies",
  "food", "travel", "technology", "education", "daily-routines", "shopping", "weather", "books",
  "music", "sports", "social-activities",
];

export const SPEAKING_PART1_TOPIC_LABELS: Record<SpeakingPart1Topic, string> = {
  introduction: "Introduction",
  work: "Work",
  study: "Study",
  hometown: "Hometown",
  accommodation: "Accommodation",
  family: "Family",
  friends: "Friends",
  hobbies: "Hobbies",
  food: "Food",
  travel: "Travel",
  technology: "Technology",
  education: "Education",
  "daily-routines": "Daily routines",
  shopping: "Shopping",
  weather: "Weather",
  books: "Books",
  music: "Music",
  sports: "Sports",
  "social-activities": "Social activities",
};

/** The eleven taught Part 2 description families (PROMPT 47, Part 3). */
export type SpeakingCueFamily =
  | "people"
  | "places"
  | "events"
  | "experiences"
  | "objects"
  | "activities"
  | "achievements"
  | "books"
  | "films"
  | "travel"
  | "learning";

export const SPEAKING_CUE_FAMILIES: SpeakingCueFamily[] = [
  "people", "places", "events", "experiences", "objects", "activities",
  "achievements", "books", "films", "travel", "learning",
];

export const SPEAKING_CUE_FAMILY_LABELS: Record<SpeakingCueFamily, string> = {
  people: "People",
  places: "Places",
  events: "Events",
  experiences: "Experiences",
  objects: "Objects",
  activities: "Activities",
  achievements: "Achievements",
  books: "Books",
  films: "Films",
  travel: "Travel",
  learning: "Learning experiences",
};

export type SpeakingDifficulty = 1 | 2 | 3 | 4 | 5;

export const SPEAKING_DIFFICULTY_LABELS: Record<
  SpeakingDifficulty,
  "foundation" | "standard" | "advanced"
> = { 1: "foundation", 2: "foundation", 3: "standard", 4: "advanced", 5: "advanced" };

/** Proficiency band the item is calibrated for (PART 8 dimension). */
export type SpeakingProficiency = "foundation" | "intermediate" | "advanced";

/** Primary skill the item trains (PART 8 dimension). */
export type SpeakingSkill =
  | "fluency"
  | "development"
  | "lexical"
  | "grammar"
  | "pronunciation"
  | "interaction";

export const SPEAKING_SKILL_LABELS: Record<SpeakingSkill, string> = {
  fluency: "Fluency and coherence",
  development: "Answer development",
  lexical: "Lexical resource",
  grammar: "Grammatical range and accuracy",
  pronunciation: "Pronunciation",
  interaction: "Interaction and discussion",
};

// ---------------------------------------------------------------------------
// Shared vocabulary entry + requirement hints
// ---------------------------------------------------------------------------

export interface SpeakingVocabEntry {
  word: string;
  partOfSpeech: string;
  meaning: string;
  example: string;
}

/**
 * Task-coverage hints for the deterministic evaluator — keyword stems a
 * satisfying response tends to contain (matched case-insensitively and
 * suffix-insensitively, server-side only, never revealed before
 * submission).
 */
export interface SpeakingRequirement {
  key: string;
  /** Plain-language statement of what a complete answer covers. */
  description: string;
  keywords: string[];
}

// ---------------------------------------------------------------------------
// Part 1 — one interview round on one topic (five questions)
// ---------------------------------------------------------------------------

export interface SpeakingPart1Question {
  /** The examiner's exact wording. */
  question: string;
  /** How to understand and develop this answer (revealed after submission). */
  guidance: string;
  /** A natural model answer — conversational, never a script to memorise. */
  modelAnswer: string;
  /** The weak version: a typical thin answer. */
  weak: string;
  /** The improved version: the same content, developed naturally. */
  improved: string;
  /** Keyword stems a good answer tends to contain (server-side). */
  expected: string[];
}

export interface SpeakingPart1Set {
  kind: "part1";
  slug: string;
  title: string;
  topic: SpeakingPart1Topic;
  /** PROMPT 54 unified question-bank domain (optional on legacy items). */
  domain?: import("../../question-bank/topics").BankTopicDomain;
  difficulty: SpeakingDifficulty;
  proficiency: SpeakingProficiency;
  skill: SpeakingSkill;
  /** The examiner's framing line before the round. */
  framing: string;
  questions: SpeakingPart1Question[];
  vocabulary: SpeakingVocabEntry[];
  source: string;
}

// ---------------------------------------------------------------------------
// Part 2 — the flagship cue cards (full seven-element teaching payload)
// ---------------------------------------------------------------------------

export interface SpeakingCueCard {
  kind: "cue-card";
  slug: string;
  title: string;
  family: SpeakingCueFamily;
  /** PROMPT 54 unified question-bank domain (optional on legacy items). */
  domain?: import("../../question-bank/topics").BankTopicDomain;
  difficulty: SpeakingDifficulty;
  proficiency: SpeakingProficiency;
  skill: SpeakingSkill;
  /** The card's task line, e.g. "Describe a person who has influenced you." */
  task: string;
  /** The situation line printed above the card. */
  situation: string;
  /** The three "You should say" prompts. */
  bullets: string[];
  /** The closing "…and explain …" line — the highest-value prompt. */
  extension: string;
  /** Official Part 2 timing: one minute to prepare, one to two to speak. */
  prepSec: 60;
  speakMinSec: 60;
  speakMaxSec: 120;
  /** The author's demonstration of the one-minute note (planning notes). */
  planningNotes: { heading: string; notes: string[] }[];
  /** Vocabulary suggestions for this card. */
  vocabularySuggestions: SpeakingVocabEntry[];
  /** A natural two-minute sample response (element 4). */
  sampleResponse: {
    transcript: string;
    wordCount: number;
    /** Plausible spoken duration of the transcript at a natural pace. */
    durationEstimateSec: number;
    /** Honest label, e.g. "Band 8.0 estimate — an educational estimate, not an official score." */
    bandEstimate: string;
  };
  /** Response analysis (element 5): what the sample does and why it works. */
  responseAnalysis: { aspect: string; note: string }[];
  /** Alternative approaches (element 6): other ways to answer the same card. */
  alternativeApproaches: { approach: string; note: string }[];
  /** Follow-up practice (element 7): rounding-off questions + independent practice. */
  followUp: {
    roundingQuestions: string[];
    practice: string[];
  };
  /** Task-coverage hints for the evaluator (server-side). */
  requirements: SpeakingRequirement[];
  source: string;
}

// ---------------------------------------------------------------------------
// Part 2 — the practice cue cards (unseen prompts for simulation rounds)
// ---------------------------------------------------------------------------

export interface SpeakingPracticeCueCard {
  kind: "practice-cue-card";
  slug: string;
  title: string;
  family: SpeakingCueFamily;
  /** PROMPT 54 unified question-bank domain (optional on legacy items). */
  domain?: import("../../question-bank/topics").BankTopicDomain;
  difficulty: SpeakingDifficulty;
  proficiency: SpeakingProficiency;
  skill: SpeakingSkill;
  task: string;
  situation: string;
  bullets: string[];
  extension: string;
  prepSec: 60;
  speakMinSec: 60;
  speakMaxSec: 120;
  /** Vocabulary hints the learner may glance at AFTER the minute, not before. */
  vocabularyHints: string[];
  roundingQuestions: string[];
  source: string;
}

// ---------------------------------------------------------------------------
// Part 3 — progressively difficult discussion sets
// ---------------------------------------------------------------------------

export type SpeakingPart3Level = "accessible" | "abstract" | "speculative";

export const SPEAKING_PART3_LEVEL_LABELS: Record<SpeakingPart3Level, string> = {
  accessible: "Accessible — opinions on the familiar",
  abstract: "Abstract — ideas about society",
  speculative: "Speculative — prediction and evaluation",
};

export interface SpeakingPart3Question {
  question: string;
  /** The escalation level of this question within the set. */
  level: SpeakingPart3Level;
  modelAnswer: string;
  /** Why this answer works at this level (revealed after submission). */
  analysis: string;
  /** Keyword stems a good answer tends to contain (server-side). */
  expected: string[];
}

export interface SpeakingPart3Set {
  kind: "part3";
  slug: string;
  title: string;
  /** The discussion theme (PART 8 topic dimension for Part 3). */
  theme: string;
  /** PROMPT 54 unified question-bank domain (optional on legacy items). */
  domain?: import("../../question-bank/topics").BankTopicDomain;
  difficulty: SpeakingDifficulty;
  proficiency: SpeakingProficiency;
  skill: SpeakingSkill;
  /** One line on how this set escalates. */
  progression: string;
  questions: SpeakingPart3Question[];
  vocabulary: SpeakingVocabEntry[];
  source: string;
}

// ---------------------------------------------------------------------------
// The union + helpers
// ---------------------------------------------------------------------------

export type SpeakingBankItem =
  | SpeakingPart1Set
  | SpeakingCueCard
  | SpeakingPracticeCueCard
  | SpeakingPart3Set;

export function speakingItemPart(item: SpeakingBankItem): SpeakingPart {
  if (item.kind === "part1") return 1;
  return item.kind === "part3" ? 3 : 2;
}

// ---------------------------------------------------------------------------
// The four assessment criteria (PROMPT 47, Part 7)
// ---------------------------------------------------------------------------

export type SpeakingCriterionKey = "fc" | "lr" | "gra" | "pron";

export type SpeakingCriterionDefinition = {
  key: SpeakingCriterionKey;
  name: string;
  /** One-line public-descriptor summary the feedback quotes back to. */
  descriptor: string;
};

export const SPEAKING_CRITERIA: SpeakingCriterionDefinition[] = [
  {
    key: "fc",
    name: "Fluency and Coherence",
    descriptor:
      "Fluency and Coherence: speaking at length with effort hidden, pausing for meaning rather than for language, connecting ideas logically and progressing through the topic.",
  },
  {
    key: "lr",
    name: "Lexical Resource",
    descriptor:
      "Lexical Resource: a wide vocabulary used flexibly and precisely, with paraphrase available when a word is missing and idiomatic natural expression.",
  },
  {
    key: "gra",
    name: "Grammatical Range and Accuracy",
    descriptor:
      "Grammatical Range and Accuracy: a mix of simple and complex forms used flexibly, with errors that rarely block meaning.",
  },
  {
    key: "pron",
    name: "Pronunciation",
    descriptor:
      "Pronunciation: being easy to understand through stress, intonation and connected speech — whatever accent the speaker has.",
  },
];

/** The accent-neutral stance taught throughout (PROMPT 47, Part 5). */
export const SPEAKING_ACCENT_NOTE =
  "No accent is worth more than another: the criterion rewards being easy to understand. A clear Indian, Nigerian, Brazilian or Chinese accent can score exactly as high as any British or American one.";

export const SPEAKING_BANK_SOURCE_NOTE =
  "Original TalkSy practice material written in the style of the IELTS Speaking test — not an official IELTS examination task.";
