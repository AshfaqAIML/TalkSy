import type { TranslationPair } from "@/data/curriculum/types";

/**
 * Grammar School content model — content as code, same as the curriculum.
 * Parts of speech and tenses live here; lessons reference them by id.
 */

// ---------------------------------------------------------------------------
// Parts of speech
// ---------------------------------------------------------------------------

/** A category inside a part of speech (e.g. "countable nouns"). */
export interface PosCategory {
  name: string;
  description: string;
  examples: string[];
}

/** An example sentence with the target words highlighted. */
export interface PosExample {
  sentence: string;
  /** Substrings to highlight (the part of speech in action). */
  highlight: string[];
  note?: string;
}

/** How the part of speech is used in sentence patterns. */
export interface PosUsage {
  pattern: string;
  examples: TranslationPair[];
}

/** A common learner mistake with its fix. */
export interface PosMistake {
  wrong: string;
  right: string;
  explanation: string;
  /** Error-clinic category (see src/lib/grammar/checker.ts). */
  category: string;
}

/** A skill-based activity linked to another TalkSy system. */
export interface PosActivity {
  title: string;
  description: string;
  /** Where the activity lives. */
  target:
    | { kind: "lesson"; slug: string }
    | { kind: "lab"; stage: number }
    | { kind: "clinic" }
    | { kind: "tenses" };
}

export interface PartOfSpeechModule {
  id: string;
  name: string;
  /** Role colour key used across the Grammar School. */
  roleKey:
    | "subject"
    | "verb"
    | "object"
    | "complement"
    | "modifier"
    | "determiner"
    | "preposition"
    | "conjunction";
  /** Simple definition. */
  definition: string;
  /** Why we need it. */
  purpose: string;
  categories: PosCategory[];
  examples: PosExample[];
  useInSentences: PosUsage[];
  commonMistakes: PosMistake[];
  skillActivities: PosActivity[];
}

// ---------------------------------------------------------------------------
// Tenses
// ---------------------------------------------------------------------------

export type TenseGroup = "present" | "past" | "future";

/** A tense with all nine comparison aspects. */
export interface TenseData {
  id: string;
  name: string;
  group: TenseGroup;
  /** When / why we use it (meaning). */
  meaning: string;
  /** Structure formulas. */
  structure: { affirmative: string; negative: string; question: string };
  /** The form the main verb takes. */
  verbForm: string;
  /** Helping verbs used. */
  helpingVerbs: string[];
  /** Example sentences. */
  affirmative: string[];
  negative: string[];
  questions: { yesNo: string; wh: { question: string; whWord: string }[] };
  /** Typical time expressions. */
  timeExpressions: string[];
  /** Common learner note. */
  tip?: string;
}

// ---------------------------------------------------------------------------
// Error clinic
// ---------------------------------------------------------------------------

export type GrammarErrorCategory =
  | "subject-verb-agreement"
  | "third-person"
  | "articles"
  | "capitalization"
  | "negatives"
  | "comparatives"
  | "countability"
  | "word-choice"
  | "prepositions"
  | "spelling"
  | "word-order"
  | "punctuation";

export const GRAMMAR_CATEGORY_LABELS: Record<GrammarErrorCategory, string> = {
  "subject-verb-agreement": "Subject–verb agreement",
  "third-person": "Third person -s",
  articles: "Articles (a / an / the)",
  capitalization: "Capitalization",
  negatives: "Negatives",
  comparatives: "Comparatives",
  countability: "Countable / uncountable",
  "word-choice": "Word choice",
  prepositions: "Prepositions",
  spelling: "Spelling",
  "word-order": "Word order",
  punctuation: "Punctuation",
};

/** One detected issue in a submitted sentence. */
export interface GrammarIssue {
  ruleId: string;
  category: GrammarErrorCategory;
  original: string;
  suggestion: string;
  explanation: string;
  /** Recommended lesson for this category (if any). */
  lessonSlug?: string;
}

export interface CheckResult {
  /** The sentence with all automatic fixes applied. */
  corrected: string;
  issues: GrammarIssue[];
  clean: boolean;
}
