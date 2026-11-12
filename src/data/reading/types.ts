/**
 * TalkSy Reading Room — graded reading library content model.
 *
 * Content is code: every reading text is typed data consumed by one reader
 * interface, and every comprehension question is graded by one server-side
 * validator (src/lib/reading/grade.ts). Four levels — Beginner, Elementary,
 * Intermediate, Advanced — each with its own text categories.
 */

import type { Difficulty } from "@/data/curriculum/types";

// ---------------------------------------------------------------------------
// Levels & categories
// ---------------------------------------------------------------------------

export type ReadingLevelId = "beginner" | "elementary" | "intermediate" | "advanced";

export type ReadingCategoryId =
  // Beginner
  | "words"
  | "phrases"
  | "sentences"
  | "mini-passages"
  | "illustrated"
  // Elementary
  | "short-stories"
  | "everyday-dialogues"
  | "descriptive"
  | "informational"
  // Intermediate
  | "articles"
  | "longer-stories"
  | "explanatory"
  | "opinion"
  // Advanced
  | "editorial"
  | "detailed-articles"
  | "professional-documents"
  | "complex-narratives"
  | "analytical";

export interface ReadingLevelMeta {
  id: ReadingLevelId;
  name: string;
  tagline: string;
  /** Rough CEFR alignment, display only. */
  cefr: string;
}

export interface ReadingCategoryMeta {
  id: ReadingCategoryId;
  name: string;
  /** Levels this category belongs to. */
  levels: ReadingLevelId[];
}

// ---------------------------------------------------------------------------
// Comprehension skills (assessed by questions)
// ---------------------------------------------------------------------------

export type ComprehensionSkill =
  | "main-idea"
  | "detail"
  | "vocabulary-context"
  | "inference"
  | "sequencing"
  | "authors-purpose"
  | "summarisation";

export const COMPREHENSION_SKILLS: ComprehensionSkill[] = [
  "main-idea",
  "detail",
  "vocabulary-context",
  "inference",
  "sequencing",
  "authors-purpose",
  "summarisation",
];

export const SKILL_LABELS: Record<ComprehensionSkill, string> = {
  "main-idea": "Main idea",
  detail: "Specific details",
  "vocabulary-context": "Vocabulary in context",
  inference: "Inference",
  sequencing: "Sequencing",
  "authors-purpose": "Author's purpose",
  summarisation: "Summarisation",
};

// ---------------------------------------------------------------------------
// Text body
// ---------------------------------------------------------------------------

export interface ReadingParagraph {
  id: string;
  text: string;
  /** Learner-support translation (Spanish, like the starter lesson library). */
  translation: string;
}

export interface GlossaryEntry {
  term: string;
  partOfSpeech?: string;
  definition: string;
  translation: string;
  example?: string;
}

// ---------------------------------------------------------------------------
// Questions (3 reusable formats × 7 comprehension skills)
// ---------------------------------------------------------------------------

export interface ReadingFeedback {
  /** Human-readable correct answer. */
  correctAnswer: string;
  explanation: string;
  /** Why a typical wrong answer is wrong. */
  whyWrong?: string;
}

interface QuestionCommon {
  id: string;
  skill: ComprehensionSkill;
  difficulty: Difficulty;
  /** Instruction / question shown to the learner. */
  prompt: string;
  /** Progressive hints. */
  hints: string[];
  feedback: ReadingFeedback;
}

/** Single-answer multiple choice (main idea, details, vocab, inference…). */
export interface ChoiceQuestion extends QuestionCommon {
  format: "choice";
  options: { id: string; text: string }[];
  correctOptionId: string;
}

/** Order the events (sequencing). */
export interface SequenceQuestion extends QuestionCommon {
  format: "sequence";
  skill: "sequencing";
  /** Event summaries; `correctOrder` lists event ids in story order. */
  events: { id: string; text: string }[];
  correctOrder: string[];
}

/** Type a short answer (details / summarisation at higher levels). */
export interface ShortTextQuestion extends QuestionCommon {
  format: "short-text";
  acceptedAnswers: string[];
  /** Alternative grading: every keyword must appear. */
  keywords?: string[];
}

export type ReadingQuestion = ChoiceQuestion | SequenceQuestion | ShortTextQuestion;

// ---------------------------------------------------------------------------
// The reading text
// ---------------------------------------------------------------------------

export interface ReadingText {
  id: string;
  slug: string;
  level: ReadingLevelId;
  category: ReadingCategoryId;
  title: string;
  description: string;
  estimatedMinutes: number;
  tags?: string[];
  /** Illustrated reading: path under /public (SVG). */
  illustration?: string;
  paragraphs: ReadingParagraph[];
  glossary: GlossaryEntry[];
  questions: ReadingQuestion[];
  /** Pass mark for the comprehension check, 0–1. */
  passScore: number;
}

// ---------------------------------------------------------------------------
// Client-safe variants (grading data + feedback stripped server-side)
// ---------------------------------------------------------------------------

export type SafeChoiceQuestion = Omit<ChoiceQuestion, "correctOptionId" | "feedback">;
export type SafeSequenceQuestion = Omit<SequenceQuestion, "correctOrder" | "feedback">;
export type SafeShortTextQuestion = Omit<
  ShortTextQuestion,
  "acceptedAnswers" | "keywords" | "feedback"
>;
export type SafeReadingQuestion = SafeChoiceQuestion | SafeSequenceQuestion | SafeShortTextQuestion;

// ---------------------------------------------------------------------------
// Answer payloads (validated server-side)
// ---------------------------------------------------------------------------

export type ReadingAnswer =
  | { format: "choice"; optionId: string }
  | { format: "sequence"; order: string[] }
  | { format: "short-text"; text: string };
