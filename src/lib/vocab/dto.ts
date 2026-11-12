/**
 * Shared DTOs for the vocabulary API — used by the route handlers and the
 * typed client. Static content (VocabEntry) is already client-safe; the DTOs
 * add the per-learner annotations (progress, bookmarks).
 */

import type { VocabContextItem, VocabEntry } from "@/data/vocabulary/types";
import type { ChallengeItem, ItemResult } from "./challenges";
import type { SrsConfig, SrsConfigOverrides, SrsStatus } from "./srs";
import type { SentenceIssue } from "./sentences";

export interface WordProgressDto {
  wordId: string;
  status: SrsStatus;
  dueAt: string | null;
  isDifficult: boolean;
  repetitions: number;
  lapses: number;
  totalReviews: number;
  correctReviews: number;
}

export interface AnnotatedWord {
  word: VocabEntry;
  bookmarked: boolean;
  progress: WordProgressDto | null;
}

export interface WordDetailDto extends AnnotatedWord {
  relatedWords: AnnotatedWord[];
  contextItems: VocabContextItem[];
}

export interface WordListDto {
  id: string;
  name: string;
  description: string;
  itemCount: number;
  createdAt: string;
  updatedAt: string;
}

export interface FlashcardDto {
  word: VocabEntry;
  isNew: boolean;
  bookmarked: boolean;
  progress: WordProgressDto | null;
}

export interface FlashcardSessionDto {
  study: string;
  cards: FlashcardDto[];
  meta: {
    dueLearning: number;
    dueReviews: number;
    newToday: number;
    newRemaining: number;
    total: number;
  };
}

export interface ReviewOutcomeDto {
  progress: WordProgressDto;
  intervalLabel: string;
  dueLabel: string;
}

export interface VocabOverviewDto {
  dailyWordId: string;
  totals: {
    library: number;
    learning: number;
    reviewing: number;
    mastered: number;
    difficult: number;
    bookmarked: number;
    sentences: number;
    challengesCompleted: number;
  };
  due: { learning: number; reviews: number; total: number };
  newToday: number;
  newRemaining: number;
  accuracy: { reviews: number; correct: number; ratio: number };
  recentWords: AnnotatedWord[];
  categories: {
    categoryId: string;
    name: string;
    icon: string;
    total: number;
    seen: number;
    mastered: number;
  }[];
}

export interface SentenceDto {
  id: string;
  wordId: string;
  word: string;
  sentence: string;
  valid: boolean;
  feedback: SentenceIssue[];
  createdAt: string;
}

export interface SentenceSubmitDto {
  valid: boolean;
  issues: SentenceIssue[];
  sentence: SentenceDto;
  word: VocabEntry;
  progress: WordProgressDto | null;
}

export interface ChallengeStartDto {
  runId: string;
  kind: string;
  categoryId: string | null;
  items: ChallengeItem[];
}

export interface ChallengeSubmitDto {
  runId: string;
  kind: string;
  total: number;
  correct: number;
  score: number;
  results: ItemResult[];
  /** Words that were graded into the SRS by this run (correct + wrong). */
  graded: { wordId: string; correct: boolean }[];
}

export interface ChallengeRunDto {
  id: string;
  kind: string;
  category: string | null;
  total: number;
  correct: number;
  score: number;
  completedAt: string | null;
  createdAt: string;
}

export interface VocabSettingsDto {
  config: SrsConfig;
  overrides: SrsConfigOverrides;
}

export type { SentenceIssue, ChallengeItem, ItemResult, SrsConfig, SrsConfigOverrides };
