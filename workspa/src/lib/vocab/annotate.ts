/**
 * Annotation helper: attach each learner's progress + bookmark state to word
 * entries. Shared by every vocabulary route so responses have one shape.
 */

import { db } from "@/lib/db";
import type { VocabEntry } from "@/data/vocabulary/types";
import type { AnnotatedWord, WordProgressDto } from "./dto";
import type { SrsStatus } from "./srs";
import type { VocabProgress } from "@prisma/client";

type ProgressRow = Pick<
  VocabProgress,
  | "wordId"
  | "status"
  | "dueAt"
  | "isDifficult"
  | "repetitions"
  | "lapses"
  | "totalReviews"
  | "correctReviews"
>;

export function toProgressDto(row: ProgressRow): WordProgressDto {
  return {
    wordId: row.wordId,
    status: (row.status as SrsStatus) ?? "learning",
    dueAt: row.dueAt ? row.dueAt.toISOString() : null,
    isDifficult: row.isDifficult,
    repetitions: row.repetitions,
    lapses: row.lapses,
    totalReviews: row.totalReviews,
    correctReviews: row.correctReviews,
  };
}

/** Annotate words with the learner's progress + bookmark state (no-op for guests). */
export async function annotateWords(
  userId: string | null,
  words: VocabEntry[],
): Promise<AnnotatedWord[]> {
  if (words.length === 0) return [];
  if (!userId) {
    return words.map((word) => ({ word, bookmarked: false, progress: null }));
  }
  const ids = words.map((w) => w.id);
  const [progressRows, bookmarkRows] = await Promise.all([
    db.vocabProgress.findMany({ where: { userId, wordId: { in: ids } } }),
    db.vocabBookmark.findMany({ where: { userId, wordId: { in: ids } } }),
  ]);
  const progressByWord = new Map(progressRows.map((row) => [row.wordId, row]));
  const bookmarked = new Set(bookmarkRows.map((row) => row.wordId));
  return words.map((word) => ({
    word,
    bookmarked: bookmarked.has(word.id),
    progress: progressByWord.has(word.id)
      ? toProgressDto(progressByWord.get(word.id)!)
      : null,
  }));
}
