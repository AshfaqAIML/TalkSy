/**
 * TalkSy vocabulary content model — "content as code".
 *
 * The Word Explorer database lives in typed TypeScript files under
 * src/data/vocabulary/words/. Every entry carries the full explorer record
 * (pronunciation, audio is TTS-generated, POS, meanings, example, synonyms,
 * antonyms, word family, collocations, difficulty, related words) so one
 * renderer can power every vocabulary mode.
 */

import type { Difficulty, TranslationPair } from "@/data/curriculum/types";

export type { Difficulty };

// ---------------------------------------------------------------------------
// Word Explorer records
// ---------------------------------------------------------------------------

/** A derived form of a word, e.g. "borrower (n.) — a person who borrows". */
export interface WordFamilyMember {
  term: string;
  partOfSpeech: string;
  meaning: string;
  translation: string;
}

/** A frequent word partnership, e.g. "borrow money — pedir dinero prestado". */
export interface Collocation {
  phrase: string;
  translation: string;
}

export interface VocabEntry {
  /** Stable slug, e.g. "thank-you". Never rename. */
  id: string;
  word: string;
  /** IPA transcription, always wrapped in slashes, e.g. "/həˈloʊ/". */
  pronunciation: string;
  /** "noun" | "verb" | "adjective" | "adverb" | "phrase" | … */
  partOfSpeech: string;
  /** Simple English meaning (A2-level wording). */
  meaning: string;
  /** Support-language meaning (Spanish in the starter library). */
  translation: string;
  example: TranslationPair;
  synonyms: string[];
  antonyms: string[];
  /** Required when a word has no natural opposite (most nouns). */
  antonymNote?: string;
  wordFamily: WordFamilyMember[];
  collocations: Collocation[];
  difficulty: Difficulty;
  categoryId: string;
  subcategoryId: string;
  /** Other entries in this database (referential integrity is validated). */
  relatedWordIds: string[];
}

// ---------------------------------------------------------------------------
// Categories
// ---------------------------------------------------------------------------

/** Lucide icon key — mapped to a real icon in the UI layer. */
export type VocabCategoryIcon =
  | "sun"
  | "home"
  | "graduation-cap"
  | "plane"
  | "utensils"
  | "users"
  | "heart"
  | "briefcase"
  | "monitor"
  | "shopping-cart"
  | "activity"
  | "message-circle";

export interface VocabSubcategory {
  id: string;
  name: string;
}

export interface VocabCategory {
  id: string;
  name: string;
  description: string;
  icon: VocabCategoryIcon;
  subcategories: VocabSubcategory[];
}

// ---------------------------------------------------------------------------
// Context learning — short dialogues and paragraphs that teach target words
// ---------------------------------------------------------------------------

export type ContextPassageKind = "dialogue" | "paragraph";

export interface ContextLine {
  speaker: string;
  text: string;
  translation: string;
}

export interface VocabContextItem {
  id: string;
  title: string;
  kind: ContextPassageKind;
  categoryId: string;
  /** Scene setting shown above a dialogue. */
  scene?: string;
  /** Dialogue lines (kind = "dialogue"). Target words are highlighted by the UI. */
  lines?: ContextLine[];
  /** Paragraph body (kind = "paragraph"). Target words are highlighted by the UI. */
  text?: string;
  translation?: string;
  /** Words this passage teaches — must exist in the word database. */
  targetWordIds: string[];
  /** Follow-up prompt that invites the learner to reuse the words. */
  followUp?: string;
}

// ---------------------------------------------------------------------------
// Vocabulary challenges
// ---------------------------------------------------------------------------

export type ChallengeKind =
  | "category-quiz" // mixed quiz inside one category
  | "meaning" // word → meaning (multiple choice)
  | "spelling" // listen and type the word
  | "arrangement" // put the example-sentence words in order
  | "contextual-usage" // choose the word that completes a sentence
  | "matching"; // match words with meanings

export const CHALLENGE_KINDS: ChallengeKind[] = [
  "category-quiz",
  "meaning",
  "spelling",
  "arrangement",
  "contextual-usage",
  "matching",
];

export interface ChallengeKindMeta {
  kind: ChallengeKind;
  name: string;
  description: string;
}

export const CHALLENGE_KIND_INFO: Record<ChallengeKind, ChallengeKindMeta> = {
  "category-quiz": {
    kind: "category-quiz",
    name: "Category quiz",
    description: "A mixed quiz — meanings, spelling, order and usage — inside one category.",
  },
  meaning: {
    kind: "meaning",
    name: "Word meanings",
    description: "Choose the correct meaning for each word.",
  },
  spelling: {
    kind: "spelling",
    name: "Spelling",
    description: "Listen to the word and type it correctly.",
  },
  arrangement: {
    kind: "arrangement",
    name: "Word arrangement",
    description: "Put the words of an example sentence in the right order.",
  },
  "contextual-usage": {
    kind: "contextual-usage",
    name: "Contextual usage",
    description: "Choose the word that fits the sentence.",
  },
  matching: {
    kind: "matching",
    name: "Matching",
    description: "Match each word with its meaning.",
  },
};
