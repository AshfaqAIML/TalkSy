import { db } from "@/lib/db";
import { getSessionUser } from "@/lib/auth";
import { json, jsonError } from "@/lib/api-helpers";
import { getCategoryCounts, getDailyWord, getVocabWordsByIds, todayKey, vocabCategories, vocabWords } from "@/data/vocabulary";
import { annotateWords } from "@/lib/vocab/annotate";
import { getLearnerConfig, getNewSeenToday } from "@/lib/vocab/review-service";

/**
 * GET /api/vocabulary/overview — the learner's vocabulary dashboard numbers:
 * status totals, due counts, today's new-word budget, accuracy, recently
 * learned words and per-category coverage. Requires login.
 */
export async function GET(req: Request) {
  const user = await getSessionUser(req);
  if (!user) return jsonError("Please log in.", 401);

  const now = new Date();
  const config = await getLearnerConfig(user.id);

  const [progressRows, bookmarkCount, sentenceCount, challengeCount, reviewLogs, newSeenToday] =
    await Promise.all([
      db.vocabProgress.findMany({ where: { userId: user.id } }),
      db.vocabBookmark.count({ where: { userId: user.id } }),
      db.vocabSentence.count({ where: { userId: user.id } }),
      db.vocabChallengeRun.count({ where: { userId: user.id, status: "completed" } }),
      db.vocabReviewLog.findMany({
        where: { userId: user.id, action: "grade", rating: { not: null } },
        orderBy: { createdAt: "desc" },
        take: 50,
      }),
      getNewSeenToday(user.id),
    ]);

  const learning = progressRows.filter((r) => r.status === "learning").length;
  const reviewing = progressRows.filter((r) => r.status === "reviewing").length;
  const mastered = progressRows.filter((r) => r.status === "mastered").length;
  const difficult = progressRows.filter((r) => r.isDifficult).length;

  const dueLearning = progressRows.filter(
    (r) => r.status === "learning" && r.dueAt && r.dueAt.getTime() <= now.getTime(),
  ).length;
  const dueReviewing = progressRows.filter(
    (r) => r.status !== "learning" && r.dueAt && r.dueAt.getTime() <= now.getTime(),
  ).length;

  const graded = reviewLogs.filter((l) => l.correct !== null);
  const correct = graded.filter((l) => l.correct === true).length;

  // Recently learned: the 8 words with the latest review activity.
  const recentIds = [...progressRows]
    .filter((r) => r.lastReviewedAt)
    .sort((a, b) => (b.lastReviewedAt?.getTime() ?? 0) - (a.lastReviewedAt?.getTime() ?? 0))
    .slice(0, 8)
    .map((r) => r.wordId);
  const recentWords = await annotateWords(user.id, getVocabWordsByIds(recentIds));
  const recentById = new Map(recentWords.map((a) => [a.word.id, a]));
  const recentOrdered = recentIds
    .map((id) => recentById.get(id))
    .filter((a): a is NonNullable<typeof a> => a !== undefined);

  // Per-category coverage.
  const counts = getCategoryCounts();
  const seenByCategory = new Map<string, { seen: number; mastered: number }>();
  for (const row of progressRows) {
    const entry = vocabWords.find((w) => w.id === row.wordId);
    if (!entry) continue;
    const bucket = seenByCategory.get(entry.categoryId) ?? { seen: 0, mastered: 0 };
    bucket.seen += 1;
    if (row.status === "mastered") bucket.mastered += 1;
    seenByCategory.set(entry.categoryId, bucket);
  }

  return json({
    dailyWordId: getDailyWord(todayKey()).id,
    totals: {
      library: vocabWords.length,
      learning,
      reviewing,
      mastered,
      difficult,
      bookmarked: bookmarkCount,
      sentences: sentenceCount,
      challengesCompleted: challengeCount,
    },
    due: { learning: dueLearning, reviews: dueReviewing, total: dueLearning + dueReviewing },
    newToday: newSeenToday,
    newRemaining: Math.max(0, config.newPerDay - newSeenToday),
    accuracy: {
      reviews: graded.length,
      correct,
      ratio: graded.length === 0 ? 0 : correct / graded.length,
    },
    recentWords: recentOrdered,
    categories: vocabCategories.map((category) => ({
      categoryId: category.id,
      name: category.name,
      icon: category.icon,
      total: counts[category.id]?.total ?? 0,
      seen: seenByCategory.get(category.id)?.seen ?? 0,
      mastered: seenByCategory.get(category.id)?.mastered ?? 0,
    })),
  });
}
