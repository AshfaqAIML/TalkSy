/**
 * TOEFL Reading Practice Library — content model (PROMPT 49).
 *
 * One hundred original exercises across the three current-format TOEFL iBT
 * Reading task types (in force since 21 January 2026):
 *
 *   complete-words   — Complete the Words: a passage with masked words the
 *                       learner restores from context, collocation, grammar
 *                       clues and word formation. Every masked word carries a
 *                       grammar observation, because morphology IS the task.
 *   daily-life        — Read in Daily Life: 1–3 short everyday/campus texts
 *                       (notices, emails, schedules, policies, reviews…)
 *                       with multiple-choice questions on gist, purpose,
 *                       detail, implication and closest meaning.
 *   academic-passage  — Read an Academic Passage: one original academic
 *                       passage (300–430 words) across varied disciplines
 *                       with multiple-choice questions on thesis, support,
 *                       vocabulary in context, inference, relationships of
 *                       ideas and text structure.
 *
 * Every question — masked word or multiple-choice item — carries:
 *   · the tested library skill(s) (1–2 of the seven tracked dimensions);
 *   · a correct answer and, for MCQ, exactly four options with one key;
 *   · a teaching explanation (validator-enforced depth floor);
 *   · passage EVIDENCE (block/paragraph/verbatim quote) for MCQ items;
 *   · an optional designed trap with its family (powers error taxonomy);
 *   · and, where relevant, grammar observations.
 *
 * Every exercise carries a vocabulary glossary revealed only after
 * submission — never before.
 *
 * Nothing here is official ETS examination content; all passages are
 * TalkSy original practice material written in the style of the test.
 */

import { LIBRARY_SKILLS, type LibrarySkill } from "../library-skills";

// ---------------------------------------------------------------------------
// Task types, difficulty
// ---------------------------------------------------------------------------

export type ToeflReadingTaskType = "complete-words" | "daily-life" | "academic-passage";

export const TOEFL_READING_TASK_LABELS: Record<ToeflReadingTaskType, string> = {
  "complete-words": "Complete the Words",
  "daily-life": "Read in Daily Life",
  "academic-passage": "Read an Academic Passage",
};

export const TOEFL_READING_TASK_DESCRIPTIONS: Record<ToeflReadingTaskType, string> = {
  "complete-words":
    "Restore masked words in a passage using context, collocation, grammar clues and word formation.",
  "daily-life":
    "Everyday and campus texts — messages, notices, schedules, policies, reviews — read for gist, purpose, detail and implication.",
  "academic-passage":
    "Original academic passages across the disciplines, read for thesis, supporting information, vocabulary, inference and structure.",
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
// Vocabulary glossary (revealed after submission only)
// ---------------------------------------------------------------------------

export interface ToeflGlossaryEntry {
  word: string;
  partOfSpeech: string;
  definition: string;
}

// ---------------------------------------------------------------------------
// Evidence — exactly which lines of text settle an MCQ answer
// ---------------------------------------------------------------------------

export interface ToeflReadingEvidence {
  /** 0-based index into the exercise's blocks. */
  block: number;
  /** 0-based index into blocks[block].paragraphs. */
  paragraph: number;
  /** Verbatim substring of that paragraph — quoted in the review panel. */
  quote: string;
}

// ---------------------------------------------------------------------------
// Trap taxonomy — powers the reading error classification
// ---------------------------------------------------------------------------

export type ToeflReadingTrapFamily =
  | "paraphrase-gap" // the option copies words but misses the reworded relation
  | "extreme-language" // always/only/never — the text is more careful than the option
  | "mention-lure" // the lure's words appear in the text, but the claim differs
  | "attribution" // right fact, wrong owner (a reported view, not the writer's)
  | "order" // right facts, wrong sequence (procedures, schedules, timelines)
  | "register-mismatch"; // tone/formality twisted — daily-life texts

// ---------------------------------------------------------------------------
// Question items
// ---------------------------------------------------------------------------

/** Complete-the-Words item: one masked word in the passage. */
export interface WordsQuestion {
  kind: "words";
  /** Continuous question numbering across the exercise (1..N). */
  no: number;
  /** The masked token exactly as it appears in the passage, e.g. "goat___". */
  masked: string;
  /** The full restored word, e.g. "goatherd". Must start with the visible stem. */
  answer: string;
  /** Case-insensitive accepted variants (plural/singular, -or/-er spellings). */
  alternatives?: string[];
  /** Plausible wrong completions designed to tempt (server-side only). */
  lure?: string[];
  meta: {
    /** 1–2 of the seven tracked library dimensions. */
    skills: LibrarySkill[];
    /** Teaching explanation shown after submit (≥ 20 words). */
    explanation: string;
    /** Grammar observation for this masked word — required, morphology IS the task. */
    grammarNote: string;
  };
}

/** Multiple-choice item (daily-life and academic-passage exercises). */
export interface McqQuestion {
  kind: "mcq";
  no: number;
  stem: string;
  /** Exactly four options; letters A–D assigned by position. */
  options: [string, string, string, string];
  /** Index of the keyed option (0–3). */
  correct: number;
  /** The designed distractor index, if any (powers trap classification). */
  lure?: number;
  meta: {
    skills: LibrarySkill[];
    /** The text lines that settle the answer. */
    evidence: ToeflReadingEvidence[];
    /** Teaching explanation shown after submit (≥ 25 words). */
    explanation: string;
    trap?: { family: ToeflReadingTrapFamily; note: string };
    /** Where appropriate: why the plausible alternatives fail. */
    whyWrong?: string[];
  };
}

export type ToeflReadingQuestion = WordsQuestion | McqQuestion;

// ---------------------------------------------------------------------------
// Exercise shapes
// ---------------------------------------------------------------------------

export interface CompleteWordsExercise {
  taskType: "complete-words";
  slug: string;
  title: string;
  /** Subject-area label for library filtering, e.g. "Campus life". */
  topic: string;
  difficulty: ToeflBankDifficulty;
  estimatedMinutes: number;
  /** The passage (85–130 words); every masked token appears exactly once. */
  passage: string;
  /** 8–10 masked-word items. */
  questions: WordsQuestion[];
  /** ≥ 5 entries; each word appears in the passage or is a masked answer. */
  vocabulary: ToeflGlossaryEntry[];
  source: string;
}

export interface DailyLifeExercise {
  taskType: "daily-life";
  slug: string;
  title: string;
  /** Text-kind label, e.g. "Campus notice", "Email", "Schedule". */
  textKind: string;
  /** Where the text is encountered, e.g. "student union noticeboard". */
  scene: string;
  difficulty: ToeflBankDifficulty;
  estimatedMinutes: number;
  /** 1–3 text blocks, 90–230 words in total. */
  blocks: { heading: string; paragraphs: string[] }[];
  /** 4–6 multiple-choice items. */
  questions: McqQuestion[];
  /** ≥ 4 entries, all appearing in the text. */
  vocabulary: ToeflGlossaryEntry[];
  /** Grammar observations on the text's language, where relevant. */
  grammar?: string[];
  source: string;
}

export interface AcademicPassageExercise {
  taskType: "academic-passage";
  slug: string;
  title: string;
  /** Discipline label for library filtering, e.g. "Geology". */
  subject: string;
  difficulty: ToeflBankDifficulty;
  estimatedMinutes: number;
  /** One passage block: 4–6 paragraphs, 300–430 words. */
  passage: { heading: string; paragraphs: string[] };
  /** 5–6 multiple-choice items. */
  questions: McqQuestion[];
  /** ≥ 6 entries, all appearing in the passage. */
  vocabulary: ToeflGlossaryEntry[];
  /** Grammar observations on academic phrasing, where relevant. */
  grammar?: string[];
  source: string;
}

export type ToeflReadingExercise = CompleteWordsExercise | DailyLifeExercise | AcademicPassageExercise;

export const TOEFL_READING_BANK_SOURCE_NOTE =
  "Original TalkSy practice material written for the current TOEFL iBT Reading task types — not official ETS examination content.";

// ---------------------------------------------------------------------------
// Authoring helper — validates skills at author time (typos fail fast)
// ---------------------------------------------------------------------------

export function skills(...list: string[]): LibrarySkill[] {
  const out: LibrarySkill[] = [];
  for (const item of list) {
    if (!(LIBRARY_SKILLS as readonly string[]).includes(item)) {
      throw new Error(`Unknown library skill "${item}" — must be one of the seven tracked dimensions.`);
    }
    if (!out.includes(item as LibrarySkill)) out.push(item as LibrarySkill);
  }
  if (out.length === 0) throw new Error("At least one library skill must be declared per question.");
  return out;
}
