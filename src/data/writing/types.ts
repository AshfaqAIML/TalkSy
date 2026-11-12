/**
 * TalkSy Writing Studio — content model.
 *
 * Content is code: 31 progressive writing activity kinds across four tiers
 * (beginner → advanced). Guided tasks (beginner micro-skills) are graded
 * deterministically against authored targets; free-writing tasks are
 * analysed by the writing feedback engine (deterministic rubric + clearly
 * labeled AI coaching) in src/lib/writing/.
 *
 * Writing scores live ONLY in the writing tables — they are never merged
 * into general language-proficiency counters.
 */

import type { Difficulty } from "@/data/curriculum/types";

// ---------------------------------------------------------------------------
// Tiers & kinds (the 31 required activity types)
// ---------------------------------------------------------------------------

export type WritingTier = "beginner" | "elementary" | "intermediate" | "advanced";

export type WritingTaskKind =
  // Beginner (9)
  | "alphabet-writing"
  | "spelling"
  | "copying-vocabulary"
  | "completing-words"
  | "constructing-sentences"
  | "rearranging-words"
  | "affirmative-sentences"
  | "negative-sentences"
  | "writing-questions"
  // Elementary (6)
  | "self-introduction"
  | "family-descriptions"
  | "daily-routine-writing"
  | "describing-place"
  | "describing-object"
  | "connected-sentences"
  // Intermediate (8)
  | "paragraph-construction"
  | "descriptive-writing"
  | "narrative-writing"
  | "personal-experiences"
  | "letters"
  | "emails"
  | "summaries"
  | "short-essays"
  // Advanced (8)
  | "formal-letters"
  | "professional-emails"
  | "reports"
  | "argumentative-essays"
  | "opinion-writing"
  | "analytical-writing"
  | "structured-reports"
  | "professional-communication-writing";

export const TIER_META: Record<
  WritingTier,
  { name: string; cefr: string; tagline: string }
> = {
  beginner: {
    name: "Beginner",
    cefr: "Pre-A1 – A1",
    tagline: "Letters, words and your first sentences — written one small step at a time.",
  },
  elementary: {
    name: "Elementary",
    cefr: "A1 – A2",
    tagline: "Write about yourself, your family and the world around you.",
  },
  intermediate: {
    name: "Intermediate",
    cefr: "A2 – B1",
    tagline: "Paragraphs, stories, letters, emails and your first essays.",
  },
  advanced: {
    name: "Advanced",
    cefr: "B2 – C1",
    tagline: "Reports, arguments and analysis — writing that works in the real world.",
  },
};

export const KIND_LABELS: Record<WritingTaskKind, string> = {
  "alphabet-writing": "Alphabet writing",
  spelling: "Spelling",
  "copying-vocabulary": "Copying vocabulary",
  "completing-words": "Completing words",
  "constructing-sentences": "Constructing simple sentences",
  "rearranging-words": "Rearranging words",
  "affirmative-sentences": "Writing affirmative sentences",
  "negative-sentences": "Writing negative sentences",
  "writing-questions": "Writing questions",
  "self-introduction": "Self-introduction",
  "family-descriptions": "Family descriptions",
  "daily-routine-writing": "Daily routine",
  "describing-place": "Describing a place",
  "describing-object": "Describing an object",
  "connected-sentences": "Writing short connected sentences",
  "paragraph-construction": "Paragraph construction",
  "descriptive-writing": "Descriptive writing",
  "narrative-writing": "Narrative writing",
  "personal-experiences": "Personal experiences",
  letters: "Letters",
  emails: "Emails",
  summaries: "Summaries",
  "short-essays": "Short essays",
  "formal-letters": "Formal letters",
  "professional-emails": "Professional emails",
  reports: "Reports",
  "argumentative-essays": "Argumentative essays",
  "opinion-writing": "Opinion writing",
  "analytical-writing": "Analytical writing",
  "structured-reports": "Structured reports",
  "professional-communication-writing": "Professional communication",
};

// ---------------------------------------------------------------------------
// Guided tasks (beginner micro-skills) — typed with exact/pattern grading
// ---------------------------------------------------------------------------

export type GuidedFormat =
  | "write-word" // type the word you see/hear
  | "complete-word" // fill the missing letters
  | "spell-from-clue" // spell from a definition/picture clue
  | "write-sentence" // type the full sentence
  | "rearrange-sentence" // type the sentence in the correct order
  | "transform-sentence"; // affirmative → negative / question etc.

export interface GuidedItem {
  id: string;
  /** The prompt shown (word to copy, definition, scrambled sentence…). */
  prompt: string;
  /** Optional audio text (TTS) for listen-and-write items. */
  audioText?: string;
  /** For complete-word: the word with blanks, e.g. "b_n_n_". */
  display?: string;
  format: GuidedFormat;
  acceptedAnswers: string[];
  /** Shown after grading: why this is written this way. */
  explanation: string;
}

export interface GuidedWritingTask {
  type: "guided";
  id: string;
  title: string;
  prompt: string;
  hints: string[];
  difficulty: Difficulty;
  items: GuidedItem[];
}

// ---------------------------------------------------------------------------
// Free-writing tasks — analysed by the feedback engine
// ---------------------------------------------------------------------------

export interface FreeWritingTask {
  type: "free";
  id: string;
  title: string;
  prompt: string;
  /** Step-by-step instructions shown beside the editor. */
  instructions: string[];
  hints: string[];
  difficulty: Difficulty;
  minWords: number;
  maxWords: number;
  targetMinutes: number;
  /** Required content points (checklist measured by keyword groups). */
  checklist: { id: string; label: string; anyOf: string[] }[];
  topicKeywords: string[];
  /** Target vocabulary the task rewards. */
  targetWords?: string[];
  /** Expected paragraph count (organisation scoring), min–max. */
  expectedParagraphs?: { min: number; max: number };
  /** Expected text-type conventions (greeting, closing…). */
  conventions?: { id: string; label: string; anyOf: string[] }[];
  modelText: string;
  modelTextNotes?: string;
}

export type WritingTask = GuidedWritingTask | FreeWritingTask;

export interface WritingAssignment {
  id: string;
  slug: string;
  tier: WritingTier;
  kind: WritingTaskKind;
  title: string;
  description: string;
  estimatedMinutes: number;
  tags?: string[];
  /** Overall rubric score needed to mark the assignment completed. */
  passThreshold: number;
  tasks: WritingTask[];
}

// ---------------------------------------------------------------------------
// Client-safe variants (model texts + grading keywords stripped)
// ---------------------------------------------------------------------------

export type SafeGuidedWritingTask = Omit<GuidedWritingTask, "items"> & {
  items: Omit<GuidedItem, "acceptedAnswers" | "explanation">[];
};
export type SafeFreeWritingTask = Omit<
  FreeWritingTask,
  "modelText" | "modelTextNotes" | "checklist" | "conventions"
> & {
  checklist: { id: string; label: string }[];
  conventions?: { id: string; label: string }[];
};
export type SafeWritingTask = SafeGuidedWritingTask | SafeFreeWritingTask;
export type SafeWritingAssignment = Omit<WritingAssignment, "tasks"> & {
  tasks: SafeWritingTask[];
};

// ---------------------------------------------------------------------------
// Feedback contract — 10 evaluation dimensions
// ---------------------------------------------------------------------------

export type WritingDimension =
  | "grammar"
  | "sentence-structure"
  | "spelling"
  | "punctuation"
  | "word-choice"
  | "vocabulary"
  | "clarity"
  | "coherence"
  | "organisation"
  | "relevance";

export const DIMENSION_LABELS: Record<WritingDimension, string> = {
  grammar: "Grammar",
  "sentence-structure": "Sentence structure",
  spelling: "Spelling",
  punctuation: "Punctuation",
  "word-choice": "Word choice",
  vocabulary: "Vocabulary",
  clarity: "Clarity",
  coherence: "Coherence",
  organisation: "Organisation",
  relevance: "Relevance",
};

/** Every issue teaches, never just rewrites: the six-field contract. */
export interface WritingIssue {
  id: string;
  dimension: WritingDimension;
  /** MEASURED (rule-based) or AI-coach — always labeled in the UI. */
  source: "measured" | "ai";
  original: string;
  correction: string;
  explanation: string;
  /** The grammar concept behind the issue. */
  concept: string;
  /** An additional example of the same rule done right. */
  example: string;
  /** A suggested exercise to practise the skill. */
  exercise: string;
  /** Recommended Grammar School lesson when one matches. */
  lessonSlug?: string;
}

export interface WritingMeasured {
  wordCount: number;
  charCount: number;
  sentenceCount: number;
  paragraphCount: number;
  avgSentenceWords: number;
  longestSentenceWords: number;
  sentenceLengthVariety: number; // 0–1 (stdev/mean ratio target band)
  uniqueWordRatio: number;
  connectorCount: number;
  connectorVariety: number;
  checklistCovered: { id: string; label: string; covered: boolean }[];
  checklistCoverage: number;
  conventionsCovered: { id: string; label: string; covered: boolean }[];
  conventionsCoverage: number;
  topicKeywordHits: string[];
  targetWordsUsed: string[];
  repeatedWords: string[];
  scores: Record<WritingDimension, number>;
  overall: number;
}

/** AI coach output — always labeled, never merged into measured scores. */
export interface WritingAiFeedback {
  source: "ai";
  disclaimer: string;
  strengths: string[];
  notes: string[];
  issues: WritingIssue[];
}

export const AI_WRITING_DISCLAIMER =
  "AI coach notes are generated by a language model from your text. They are teaching suggestions, not measured results — the rubric scores above are computed from your actual words by fixed rules.";

/** Version comparison payload (revision mode): version n vs. n-1. */
export interface WritingComparison {
  previousVersion: number;
  newVersion: number;
  wordCountDelta: number;
  overallDelta: number;
  scoreDeltas: {
    dimension: WritingDimension;
    from: number;
    to: number;
    delta: number;
  }[];
}
