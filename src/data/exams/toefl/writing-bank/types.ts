/**
 * TOEFL Writing Practice Library — content model (PROMPT 50).
 *
 * One hundred original exercises across the three current-format TOEFL iBT
 * Writing task types (in force since 21 January 2026):
 *
 *   build-sentence       — Build a Sentence: 100 exercises, 20 for each of
 *                          the five tested dimensions — word order, grammar,
 *                          clause structure, sentence completeness and
 *                          punctuation. Item kinds: reorder (scrambled
 *                          segments), correct (repair an error), combine
 *                          (join two clauses), complete (repair a fragment
 *                          or run-on into a full sentence) and punctuate
 *                          (restore capitals and punctuation).
 *   write-email          — Write an Email: original campus scenarios across
 *                          six purposes (academic enquiry, request,
 *                          explanation, scheduling, problem, suggestion)
 *                          addressed to university staff and fellow students.
 *   academic-discussion  — Write for an Academic Discussion: original
 *                          university-style discussion boards — a professor's
 *                          prompt plus two classmates' posts the learner
 *                          joins with a position of their own.
 *
 * EVERY writing exercise carries the nine mandated teaching fields:
 * instructions, task requirements, time guidance, model response, response
 * analysis, useful expressions, grammar observations, common mistakes and an
 * independent assignment.
 *
 * GATING: item answer keys, model responses and the rest of the teaching kit
 * never leave the server before submission — they are revealed by the
 * grading endpoint, exactly like the listening transcripts of PROMPT 49.
 *
 * Nothing here is official ETS examination content; all scenarios, prompts
 * and models are original TalkSy practice material written in the style of
 * the test.
 */

import { type ToeflGlossaryEntry } from "../reading-bank/types";

// ---------------------------------------------------------------------------
// Task types, difficulty
// ---------------------------------------------------------------------------

export type ToeflWritingTaskType = "build-sentence" | "write-email" | "academic-discussion";

export const TOEFL_WRITING_TASK_LABELS: Record<ToeflWritingTaskType, string> = {
  "build-sentence": "Build a Sentence",
  "write-email": "Write an Email",
  "academic-discussion": "Write for an Academic Discussion",
};

export const TOEFL_WRITING_TASK_DESCRIPTIONS: Record<ToeflWritingTaskType, string> = {
  "build-sentence":
    "Reconstruct sentences at speed: ordering segments, repairing errors, joining clauses, completing fragments and restoring punctuation.",
  "write-email":
    "Fit-for-purpose campus emails — enquiries, requests, explanations, scheduling, problems and suggestions — matched to their recipient.",
  "academic-discussion":
    "Join a university discussion board: take a clear position, engage your classmates' arguments and support your view.",
};

export type ToeflBankDifficulty = 1 | 2 | 3 | 4 | 5;

export const TOEFL_DIFFICULTY_LABELS: Record<ToeflBankDifficulty, "foundation" | "standard" | "advanced"> = {
  1: "foundation",
  2: "foundation",
  3: "standard",
  4: "advanced",
  5: "advanced",
};

// ---------------------------------------------------------------------------
// Build a Sentence — the five tested dimensions
// ---------------------------------------------------------------------------

export type ToeflSentenceFocus =
  | "word-order" // where segments go: S-V-O order, adverb placement, inversion
  | "grammar" // agreement, tense, articles, prepositions, verb forms
  | "clause-structure" // joining ideas: subordination, relatives, parallelism
  | "completeness" // fragments and run-ons repaired into full sentences
  | "punctuation"; // capitals, commas, apostrophes, end punctuation

export const TOEFL_SENTENCE_FOCUS_LABELS: Record<ToeflSentenceFocus, string> = {
  "word-order": "Word order",
  grammar: "Grammar",
  "clause-structure": "Clause structure",
  completeness: "Sentence completeness",
  punctuation: "Punctuation",
};

export const TOEFL_SENTENCE_FOCUS_DESCRIPTIONS: Record<ToeflSentenceFocus, string> = {
  "word-order":
    "English fixes the positions of subject, verb and object; adverbials and complements slot around them. Reorder segments into a grammatical sequence.",
  grammar:
    "Agreement, tense, articles, prepositions and verb forms — the errors that break sentences even when every word is familiar. Find and repair them.",
  "clause-structure":
    "Combine short clauses into one well-built sentence using subordinators, relative pronouns and connectors — without run-ons or comma splices.",
  completeness:
    "A sentence needs a subject and a finite verb working together. Repair fragments and run-ons into complete, correctly bounded sentences.",
  punctuation:
    "Capitals, commas, apostrophes and end punctuation carry grammar of their own. Restore the marks that make the meaning hold.",
};

export type ToeflSentenceItemKind = "reorder" | "correct" | "combine" | "complete" | "punctuate";

export const TOEFL_SENTENCE_ITEM_KIND_LABELS: Record<ToeflSentenceItemKind, string> = {
  reorder: "Put in order",
  correct: "Correct the error",
  combine: "Combine the clauses",
  complete: "Complete the sentence",
  punctuate: "Add punctuation",
};

export interface ToeflSentenceItem {
  /** Continuous numbering across the exercise (1..N). */
  no: number;
  kind: ToeflSentenceItemKind;
  /** The instruction line shown for this item. */
  prompt: string;
  /** reorder: the scrambled segments (the learner sequences them). */
  segments?: string[];
  /** correct / combine / complete / punctuate: the raw material sentence(s). */
  source?: string;
  /** The keyed model sentence (or, for reorder, the segments in order). */
  answer: string;
  /** Accepted variants (compared case- and punctuation-insensitively, except "punctuate" where the marks ARE the task). */
  alternatives?: string[];
  meta: {
    /** Teaching explanation shown after submit (≥ 20 words). */
    explanation: string;
    /** The grammar observation behind the item (≥ 8 words). */
    grammarNote: string;
  };
}

export interface ToeflSentenceExercise {
  taskType: "build-sentence";
  slug: string; // toefl-wb-sent-01 … toefl-wb-sent-100
  title: string;
  focus: ToeflSentenceFocus;
  difficulty: ToeflBankDifficulty;
  estimatedMinutes: number;
  /** 4–6 items, every item testing the exercise focus. */
  items: ToeflSentenceItem[];
  // — the nine mandated teaching fields —
  instructions: string;
  taskRequirements: string[];
  timeGuidance: string;
  /** Revealed after submission, never before. */
  modelResponse: string;
  responseAnalysis: string;
  usefulExpressions: string[];
  grammarObservations: string[];
  commonMistakes: string[];
  independentAssignment: string;
  source: string;
}

// ---------------------------------------------------------------------------
// Write an Email
// ---------------------------------------------------------------------------

export type ToeflEmailPurpose = "enquiry" | "request" | "explanation" | "scheduling" | "problem" | "suggestion";

export const TOEFL_EMAIL_PURPOSE_LABELS: Record<ToeflEmailPurpose, string> = {
  enquiry: "Academic enquiry",
  request: "Request",
  explanation: "Explanation",
  scheduling: "Scheduling",
  problem: "Problem",
  suggestion: "Suggestion",
};

export interface ToeflEmailTask {
  taskType: "write-email";
  slug: string; // toefl-wb-email-01 … toefl-wb-email-60
  title: string;
  purpose: ToeflEmailPurpose;
  /** Who receives it, e.g. "course professor", "registrar's office". */
  recipient: string;
  /** The situation, 60–120 words. */
  scenario: string;
  /** 3–5 content points a complete email must cover. */
  keyPoints: string[];
  wordBand: { min: number; max: number };
  difficulty: ToeflBankDifficulty;
  estimatedMinutes: number;
  // — the nine mandated teaching fields —
  instructions: string;
  taskRequirements: string[];
  timeGuidance: string;
  modelResponse: string;
  responseAnalysis: string;
  usefulExpressions: string[];
  grammarObservations: string[];
  commonMistakes: string[];
  independentAssignment: string;
  vocabulary: ToeflGlossaryEntry[];
  source: string;
}

// ---------------------------------------------------------------------------
// Write for an Academic Discussion
// ---------------------------------------------------------------------------

export interface ToeflDiscussionTask {
  taskType: "academic-discussion";
  slug: string; // toefl-wb-disc-01 … toefl-wb-disc-40
  title: string;
  /** Discipline label for library filtering, e.g. "Environmental science". */
  discipline: string;
  /** The professor's board prompt (a genuine academic question). */
  professorPrompt: string;
  /** Two classmates the learner joins. */
  studentPosts: { name: string; post: string }[];
  /** 3–5 content points a strong post must cover. */
  keyPoints: string[];
  wordBand: { min: number; max: number };
  difficulty: ToeflBankDifficulty;
  estimatedMinutes: number;
  // — the nine mandated teaching fields —
  instructions: string;
  taskRequirements: string[];
  timeGuidance: string;
  modelResponse: string;
  responseAnalysis: string;
  usefulExpressions: string[];
  grammarObservations: string[];
  commonMistakes: string[];
  independentAssignment: string;
  vocabulary: ToeflGlossaryEntry[];
  source: string;
}

export type ToeflWritingExercise = ToeflSentenceExercise | ToeflEmailTask | ToeflDiscussionTask;

export const TOEFL_WRITING_BANK_SOURCE_NOTE =
  "Original TalkSy practice material written for the current TOEFL iBT Writing task types — not official ETS examination content.";

// ---------------------------------------------------------------------------
// The AI-evaluation honesty contract (PROMPT 50)
// ---------------------------------------------------------------------------

export const TOEFL_WRITING_DISCLAIMERS = [
  "All automated scores on this page are educational estimates produced by TalkSy's practice engine — they are not official ETS scores and do not replicate ETS scoring.",
  "No score is promised or guaranteed; official TOEFL iBT scores are set only by ETS.",
];
