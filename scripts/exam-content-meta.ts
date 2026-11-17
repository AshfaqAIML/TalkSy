/**
 * Enrichment metadata applied by scripts/seed-exams.ts to existing
 * MockTestQuestion rows (difficulty + post-submission explanations).
 * Aggregates the authored maps for the inline seed mocks and the IELTS
 * mock library. Original EnglishPath content.
 */

import { INLINE_SEED_META } from "./exam-meta-inline";
import { LIBRARY_SEED_META } from "./exam-meta-library";

export type SeedQuestionMeta = {
  /** 1-5, 1 = foundation (A2-B1) … 5 = advanced (C1-C2). */
  difficulty: number;
  /** 15-45 words; references the actual answer key. */
  explanation: string;
};
export type SeedMockMeta = Record<string, SeedQuestionMeta>;

/** All enrichment data, keyed by exact mock title. */
export const EXAM_META: Record<string, SeedMockMeta> = {
  ...INLINE_SEED_META,
  ...LIBRARY_SEED_META,
};
