/**
 * Review orchestration: applies SRS grades/snoozes/flags to the database.
 * Shared by the flashcard review endpoint, challenge submission and sentence
 * practice — one code path, one log format.
 */

import { db } from "@/lib/db";
import {
  DEFAULT_SRS_CONFIG,
  gradeCard,
  newCardState,
  resolveSrsConfig,
  type SrsCardState,
  type SrsConfig,
  type SrsConfigOverrides,
  type SrsRating,
  type SrsStatus,
} from "./srs";

export type ReviewSource = "flashcard" | "challenge" | "sentence" | "daily" | "explore";

export const SRS_RATINGS: SrsRating[] = ["again", "hard", "good", "easy"];

export function isSrsRating(rating: string): rating is SrsRating {
  return (SRS_RATINGS as string[]).includes(rating);
}

export function isReviewSource(source: string): source is ReviewSource {
  return (["flashcard", "challenge", "sentence", "daily", "explore"] as string[]).includes(source);
}

// ---------------------------------------------------------------------------
// Learner SRS configuration
// ---------------------------------------------------------------------------

export async function getLearnerConfig(userId: string): Promise<SrsConfig> {
  const row = await db.vocabSettings.findUnique({ where: { userId } });
  if (!row) return DEFAULT_SRS_CONFIG;
  try {
    const overrides = JSON.parse(row.config) as SrsConfigOverrides;
    return resolveSrsConfig(overrides);
  } catch {
    return DEFAULT_SRS_CONFIG;
  }
}

// ---------------------------------------------------------------------------
// State mapping (Prisma row ↔ engine card state)
// ---------------------------------------------------------------------------

type VocabProgressRow = NonNullable<Awaited<ReturnType<typeof db.vocabProgress.findUnique>>>;

export function rowToCardState(row: VocabProgressRow | null | undefined): SrsCardState {
  if (!row) {
    return newCardState(new Date());
  }
  return {
    status: (row.status as SrsStatus) ?? "learning",
    repetitions: row.repetitions,
    streak: row.streak,
    lapses: row.lapses,
    ease: row.ease,
    intervalMinutes: row.intervalMinutes,
    dueAt: row.dueAt,
    isDifficult: row.isDifficult,
  };
}

export interface RecentAccuracy {
  /** Correct ratio over the learner's recent graded reviews of this word. */
  accuracy: number | null;
  totalReviews: number;
}

export async function getRecentAccuracy(userId: string, wordId: string): Promise<RecentAccuracy> {
  const logs = await db.vocabReviewLog.findMany({
    where: { userId, wordId, action: "grade", rating: { not: null } },
    orderBy: { createdAt: "desc" },
    take: 5,
  });
  if (logs.length === 0) return { accuracy: null, totalReviews: 0 };
  const graded = logs.filter((l) => l.correct !== null);
  if (graded.length === 0) return { accuracy: null, totalReviews: logs.length };
  const correct = graded.filter((l) => l.correct === true).length;
  return { accuracy: correct / graded.length, totalReviews: logs.length };
}

/** How many NEW words the learner already graded today (budget consumption). */
export async function getNewSeenToday(userId: string): Promise<number> {
  const startOfDay = new Date();
  startOfDay.setHours(0, 0, 0, 0);
  const logs = await db.vocabReviewLog.findMany({
    where: { userId, action: "grade", wasNew: true, createdAt: { gte: startOfDay } },
    select: { wordId: true },
  });
  return new Set(logs.map((l) => l.wordId)).size;
}

// ---------------------------------------------------------------------------
// Actions
// ---------------------------------------------------------------------------

export interface GradeOutcome {
  status: SrsStatus;
  intervalMinutes: number;
  dueAt: Date | null;
  isDifficult: boolean;
  repetitions: number;
  lapses: number;
  ease: number;
  totalReviews: number;
  correctReviews: number;
}

async function persistGradedCard(
  userId: string,
  wordId: string,
  state: SrsCardState,
  source: ReviewSource,
  rating: SrsRating,
  correct: boolean,
  wasNew: boolean,
  intervalBefore: number,
  totalReviews: number,
  correctReviews: number,
  now: Date,
): Promise<void> {
  await db.$transaction(async (tx) => {
    const data = {
      status: state.status,
      repetitions: state.repetitions,
      streak: state.streak,
      lapses: state.lapses,
      ease: state.ease,
      intervalMinutes: state.intervalMinutes,
      dueAt: state.dueAt,
      lastReviewedAt: now,
      isDifficult: state.isDifficult,
      totalReviews,
      correctReviews,
    };
    await tx.vocabProgress.upsert({
      where: { userId_wordId: { userId, wordId } },
      create: { userId, wordId, firstSeenAt: now, ...data },
      update: data,
    });
    await tx.vocabReviewLog.create({
      data: {
        userId,
        wordId,
        source,
        action: "grade",
        rating,
        correct,
        wasNew,
        intervalBeforeMin: intervalBefore,
        intervalAfterMin: state.intervalMinutes,
      },
    });
  });
}

/**
 * Apply one SRS grade to a word (from flashcards, a challenge or sentence
 * practice). Creates the progress row on the first real review — never before.
 */
export async function applyGrade(
  userId: string,
  wordId: string,
  rating: SrsRating,
  source: ReviewSource,
  now: Date = new Date(),
): Promise<GradeOutcome> {
  const config = await getLearnerConfig(userId);
  const row = await db.vocabProgress.findUnique({
    where: { userId_wordId: { userId, wordId } },
  });
  const before = rowToCardState(row);
  const wasNew = row === null;
  const { accuracy } = await getRecentAccuracy(userId, wordId);

  const after = gradeCard(before, { rating, recentAccuracy: accuracy, now }, config);
  const totalReviews = (row?.totalReviews ?? 0) + 1;
  const correctReviews = (row?.correctReviews ?? 0) + (rating !== "again" ? 1 : 0);

  await persistGradedCard(
    userId,
    wordId,
    after,
    source,
    rating,
    rating !== "again",
    wasNew,
    before.intervalMinutes,
    totalReviews,
    correctReviews,
    now,
  );

  return {
    status: after.status,
    intervalMinutes: after.intervalMinutes,
    dueAt: after.dueAt,
    isDifficult: after.isDifficult,
    repetitions: after.repetitions,
    lapses: after.lapses,
    ease: after.ease,
    totalReviews,
    correctReviews,
  };
}

/** "Review later": push the word back without grading it. */
export async function applySnooze(
  userId: string,
  wordId: string,
  hours: number,
  source: ReviewSource,
  now: Date = new Date(),
): Promise<void> {
  const clamped = Math.min(Math.max(hours, 0.25), 48);
  const dueAt = new Date(now.getTime() + clamped * 60 * 60_000);
  const existing = await db.vocabProgress.findUnique({
    where: { userId_wordId: { userId, wordId } },
  });
  if (existing) {
    await db.vocabProgress.update({
      where: { userId_wordId: { userId, wordId } },
      data: { dueAt },
    });
  } else {
    await db.vocabProgress.create({
      data: { userId, wordId, status: "learning", dueAt, lastReviewedAt: now },
    });
  }
  await db.vocabReviewLog.create({
    data: { userId, wordId, source, action: "snooze", intervalAfterMin: Math.round(clamped * 60) },
  });
}

/** Toggle the learner's own difficulty flag (affects future interval growth). */
export async function setDifficultFlag(
  userId: string,
  wordId: string,
  difficult: boolean,
  source: ReviewSource,
): Promise<void> {
  const existing = await db.vocabProgress.findUnique({
    where: { userId_wordId: { userId, wordId } },
  });
  if (existing) {
    await db.vocabProgress.update({
      where: { userId_wordId: { userId, wordId } },
      data: { isDifficult: difficult },
    });
  } else {
    await db.vocabProgress.create({
      data: { userId, wordId, status: "learning", isDifficult: difficult },
    });
  }
  await db.vocabReviewLog.create({
    data: { userId, wordId, source, action: difficult ? "flag" : "unflag" },
  });
}
