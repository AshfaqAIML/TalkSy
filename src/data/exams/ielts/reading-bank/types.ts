/**
 * IELTS Reading Masterclass — passage bank content model (PROMPT 45, Part D).
 *
 * Every exercise is an ORIGINAL passage (or General Training text set)
 * authored for this platform. The thirteen official Academic question types
 * are carried by `type` for honest reporting ("question-type weaknesses")
 * while rendering and grading reduce to six formats:
 *
 *   completion — sentence / summary / note / table / flowchart completion
 *                (printed layout + numbered blanks + word limit)
 *   diagram    — diagram labelling (boxed grid + numbered blanks)
 *   mcq        — multiple choice, single answer per item
 *   mcq-multi  — multiple choice, choose TWO (or more) letters, one item
 *   verdict    — True/False/Not Given and Yes/No/Not Given statements
 *   matching   — headings / information / features / sentence endings
 *
 * Every item carries ReadingQuestionMeta: the tested skills, the passage
 * EVIDENCE that settles the answer (block + paragraph + verbatim quote —
 * the review system highlights it), a teaching explanation, an optional
 * designed trap (with family, for error classification), and — where
 * appropriate — why plausible alternatives fail.
 *
 * Nothing here is official IELTS examination content; all passages are
 * TalkSy original practice material written in the style of the test.
 */

// ---------------------------------------------------------------------------
// Variants, sections, difficulty
// ---------------------------------------------------------------------------

export type ReadingVariant = "academic" | "gt";

export type ReadingDifficulty = 1 | 2 | 3 | 4 | 5;

export const READING_DIFFICULTY_LABELS: Record<ReadingDifficulty, "foundation" | "standard" | "advanced"> = {
  1: "foundation",
  2: "foundation",
  3: "standard",
  4: "advanced",
  5: "advanced",
};

// ---------------------------------------------------------------------------
// Official question types (thirteen taught families)
// ---------------------------------------------------------------------------

export type ReadingQuestionType =
  | "multiple-choice"
  | "multiple-choice-multi"
  | "true-false-not-given"
  | "yes-no-not-given"
  | "matching-headings"
  | "matching-information"
  | "matching-features"
  | "matching-sentence-endings"
  | "sentence-completion"
  | "summary-completion"
  | "note-completion"
  | "table-completion"
  | "flowchart-completion"
  | "diagram-labelling";

export const READING_QUESTION_TYPE_LABELS: Record<ReadingQuestionType, string> = {
  "multiple-choice": "Multiple choice",
  "multiple-choice-multi": "Multiple choice (choose TWO)",
  "true-false-not-given": "True / False / Not Given",
  "yes-no-not-given": "Yes / No / Not Given",
  "matching-headings": "Matching headings",
  "matching-information": "Matching information",
  "matching-features": "Matching features",
  "matching-sentence-endings": "Matching sentence endings",
  "sentence-completion": "Sentence completion",
  "summary-completion": "Summary completion",
  "note-completion": "Note completion",
  "table-completion": "Table completion",
  "flowchart-completion": "Flowchart completion",
  "diagram-labelling": "Diagram labelling",
};

// ---------------------------------------------------------------------------
// Trap taxonomy — powers the reading error classification
// ---------------------------------------------------------------------------

export type ReadingTrapFamily =
  | "extreme-language" // always/only/never — the passage is more careful than the statement
  | "mention-lure" // the lure's words appear in the passage, but the claim differs
  | "boundary" // FALSE vs NOT GIVEN (or YES vs NO) confusion at the edge of the text
  | "attribution" // right claim, wrong owner (a reported view, not the writer's)
  | "paraphrase-gap" // the option copies words but misses the reworded relation
  | "order"; // right facts, wrong sequence (procedural and process texts)

export interface ReadingTrap {
  family: ReadingTrapFamily;
  /** One-line teaching note shown in the explanation panel. */
  note: string;
}

// ---------------------------------------------------------------------------
// Evidence — exactly which part of the passage settles the answer (Part F)
// ---------------------------------------------------------------------------

export interface ReadingEvidence {
  /** 0-based index into exercise.blocks. */
  block: number;
  /** 0-based index into blocks[block].paragraphs. */
  paragraph: number;
  /** Verbatim substring of that paragraph — quoted in the review panel. */
  quote: string;
}

export interface ReadingQuestionMeta {
  /** Tested abilities: skimming | scanning | paraphrase | inference | vocabulary | opinion | detail | structure. */
  skills: string[];
  /** The passage lines that settle the answer. */
  evidence: ReadingEvidence[];
  /** Teaching explanation shown after submit (≥ 20 words). */
  explanation: string;
  /** Present whenever the item is designed around a trap. */
  trap?: ReadingTrap;
  /** Where appropriate: why the plausible alternative(s) fail (Part F). */
  whyWrong?: string[];
}

interface QuestionBase {
  id: string;
  /** Printed label, e.g. "Questions 1–5". */
  label: string;
  /** Official-style rubric wording. */
  instruction: string;
}

/** Group-level meta for single-item groups (multi-choice choose-TWO). */
interface SoloQuestionBase extends QuestionBase {
  meta: ReadingQuestionMeta;
}

// ---------------------------------------------------------------------------
// Completion family (sentence / summary / note / table / flowchart)
// ---------------------------------------------------------------------------

export type ReadingLayoutCell = { kind: "text"; text: string } | { kind: "blank"; no: number };
export type ReadingLayoutRow = ReadingLayoutCell[];

export interface ReadingBlank {
  no: number;
  /** The keyed answer — MUST appear verbatim in the passage (validator). */
  answer: string;
  /** Case-insensitive grammatical variants of the same passage words. */
  alternatives?: string[];
  meta: ReadingQuestionMeta;
}

export type ReadingCompletionQuestion = QuestionBase & {
  type: "sentence-completion" | "summary-completion" | "note-completion" | "table-completion" | "flowchart-completion";
  layout: ReadingLayoutRow[];
  blanks: ReadingBlank[];
  wordLimit: 1 | 2 | 3;
};

// ---------------------------------------------------------------------------
// Diagram labelling
// ---------------------------------------------------------------------------

export interface ReadingDiagramCell {
  /** Part name or description shown inside the box. */
  label: string;
  /** Pre-printed caption, e.g. "Evaporation". */
  caption?: string;
  /** Question number of the blank on this cell. */
  blank?: number;
}

export type ReadingDiagramQuestion = QuestionBase & {
  type: "diagram-labelling";
  plan: { title: string; caption: string; grid: (ReadingDiagramCell | null)[][] };
  /** Answers in blank-number order. */
  blanks: ReadingBlank[];
};

// ---------------------------------------------------------------------------
// Multiple choice
// ---------------------------------------------------------------------------

export interface ReadingMcqItem {
  /** The question stem. */
  stem: string;
  /** Options in A, B, C… order. */
  options: string[];
  /** Correct option index. */
  correct: number;
  /** The designed distractor index, if any (powers trap classification). */
  lure?: number;
  meta: ReadingQuestionMeta;
}

export type ReadingMcqQuestion = QuestionBase & {
  type: "multiple-choice";
  items: ReadingMcqItem[];
};

export type ReadingMcqMultiQuestion = SoloQuestionBase & {
  type: "multiple-choice-multi";
  stem: string;
  options: string[];
  /** Correct option indices (usually two — "Choose TWO letters"). */
  correct: number[];
  /** Designed distractor indices. */
  lures?: number[];
  meta: ReadingQuestionMeta;
};

// ---------------------------------------------------------------------------
// Verdict family (True/False/Not Given and Yes/No/Not Given)
// ---------------------------------------------------------------------------

export type Verdict = "TRUE" | "FALSE" | "NOT GIVEN" | "YES" | "NO";

export interface ReadingVerdictStatement {
  text: string;
  answer: Verdict;
  /** The designed confusion (e.g. a FALSE/NOT GIVEN boundary trap). */
  lure?: Verdict;
  meta: ReadingQuestionMeta;
}

export type ReadingVerdictQuestion = QuestionBase & {
  type: "true-false-not-given" | "yes-no-not-given";
  statements: ReadingVerdictStatement[];
};

// ---------------------------------------------------------------------------
// Matching family (headings / information / features / sentence endings)
// ---------------------------------------------------------------------------

export interface ReadingMatchItem {
  /** Left side: a paragraph descriptor, a statement, an item or a sentence beginning. */
  text: string;
  /** Correct option index. */
  correct: number;
  /** Designed distractor option index, if any. */
  lure?: number;
  meta: ReadingQuestionMeta;
}

export type ReadingMatchingQuestion = QuestionBase & {
  type: "matching-headings" | "matching-information" | "matching-features" | "matching-sentence-endings";
  items: ReadingMatchItem[];
  /** Lettered list on the right (headings / paragraph letters / features / endings). */
  options: string[];
  /** Official reuse note, e.g. "You may use any letter more than once." */
  reuseNote?: string;
  /** True when one option is designed to remain unused (headings / endings). */
  extraOption?: boolean;
};

export type ReadingQuestion =
  | ReadingCompletionQuestion
  | ReadingDiagramQuestion
  | ReadingMcqQuestion
  | ReadingMcqMultiQuestion
  | ReadingVerdictQuestion
  | ReadingMatchingQuestion;

// ---------------------------------------------------------------------------
// The passage
// ---------------------------------------------------------------------------

/** One titled text: an Academic passage is a single block; a GT Section 1 or
 *  2 exercise carries several blocks (the notice, the advert, the policy…). */
export interface ReadingTextBlock {
  heading: string;
  paragraphs: string[];
}

export interface ReadingGlossaryEntry {
  word: string;
  partOfSpeech: string;
  definition: string;
}

export interface ReadingExercise {
  slug: string;
  title: string;
  variant: ReadingVariant;
  /** Reading section 1–3 (difficulty band inside a full test). */
  section: 1 | 2 | 3;
  /** Subject label (Academic: the ten taught subjects; GT: the text kind). */
  subject: string;
  /**
   * PROMPT 54 question-bank domain: one of the twelve unified topic
   * domains. Optional for the original eighteen flagship exercises (the
   * unified adapter resolves those through a curated map); every exercise
   * added by the PROMPT 54 expansion sets it explicitly.
   */
  topic?: import("../../question-bank/topics").BankTopicDomain;
  difficulty: ReadingDifficulty;
  estimatedMinutes: number;
  /** The reading objective printed on the library card (Part D). */
  objective: string;
  /** "Read the passage… and answer Questions 1–13." */
  intro: string;
  blocks: ReadingTextBlock[];
  questions: ReadingQuestion[];
  /** Vocabulary glossary — revealed after submission, never before. */
  glossary: ReadingGlossaryEntry[];
  /** Shown beside the passage in the review phase. */
  passageNote: string;
  source: string;
}

export const READING_BANK_SOURCE_NOTE =
  "Original TalkSy practice material written in the style of the IELTS Reading test — not an official IELTS examination passage.";

// ---------------------------------------------------------------------------
// Timed simulations (Part E) — composed from library passages
// ---------------------------------------------------------------------------

export interface ReadingSimulation {
  slug: string;
  title: string;
  variant: ReadingVariant;
  /** Passage slugs in test order (Academic: three passages; GT: the section sets). */
  passageSlugs: string[];
  /** Official-length clock: 60 minutes. */
  timeLimitSec: number;
  description: string;
}
