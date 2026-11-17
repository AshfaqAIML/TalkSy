import { db } from "@/lib/db";
import { getSessionUser } from "@/lib/auth";
import { json, jsonError } from "@/lib/api-helpers";
import { getVocabWordsByIds, vocabWords } from "@/data/vocabulary";
import { annotateWords } from "@/lib/vocab/annotate";
import { getLearnerConfig, getNewSeenToday, rowToCardState } from "@/lib/vocab/review-service";
import { planDailySession, type ProgressSnapshot } from "@/lib/vocab/srs";

/**
 * GET /api/vocabulary/flashcards — build a study session.
 *
 * study modes:
 *   queue                 → daily revision queue (due reviews + new words within budget)
 *   category:<id>         → every word of a category (due first, then the rest)
 *   list:<listId>         → the words of a personal list
 *   bookmarks             → bookmarked words
 *   difficult             → words the learner flagged as difficult
 *   all                   → the whole library (due first)
 *
 * Requires login (sessions are learner-specific).
 */
export async function GET(req: Request) {
  const user = await getSessionUser(req);
  if (!user) return jsonError("Please log in to study flashcards.", 401);

  const url = new URL(req.url);
  const study = url.searchParams.get("study") ?? "queue";
  const limit = Math.min(Math.max(Number(url.searchParams.get("limit") ?? 30) || 30, 1), 100);

  const config = await getLearnerConfig(user.id);
  const now = new Date();

  const progressRows = await db.vocabProgress.findMany({ where: { userId: user.id } });
  const progressByWord = new Map<string, ProgressSnapshot>(
    progressRows.map((row) => [
      row.wordId,
      {
        wordId: row.wordId,
        status: rowToCardState(row).status,
        intervalMinutes: row.intervalMinutes,
        dueAt: row.dueAt,
      },
    ]),
  );

  const annotateAndSlice = async (wordIds: string[], metaExtra: {
    dueLearning: number;
    dueReviews: number;
    newToday: number;
    newRemaining: number;
  }) => {
    const words = getVocabWordsByIds(wordIds).slice(0, limit);
    const annotated = await annotateWords(user!.id, words);
    return json({
      study,
      cards: annotated.map((a) => ({
        word: a.word,
        isNew: !progressByWord.has(a.word.id),
        bookmarked: a.bookmarked,
        progress: a.progress,
      })),
      meta: { ...metaExtra, total: annotated.length },
    });
  };

  if (study === "queue") {
    const newSeenToday = await getNewSeenToday(user.id);
    const plan = planDailySession(
      vocabWords.map((w) => w.id),
      progressByWord,
      { now, config, newSeenToday },
    );
    return annotateAndSlice([...plan.reviewWordIds, ...plan.newWordIds], {
      dueLearning: plan.counts.dueLearning,
      dueReviews: plan.counts.dueReviews,
      newToday: plan.counts.newToday,
      newRemaining: plan.counts.newRemaining,
    });
  }

  if (study.startsWith("category:")) {
    const categoryId = study.slice("category:".length);
    const inCategory = vocabWords.filter((w) => w.categoryId === categoryId);
    if (inCategory.length === 0) return jsonError("Unknown category.", 404);
    const due = inCategory.filter((w) => {
      const p = progressByWord.get(w.id);
      return p?.dueAt && p.dueAt.getTime() <= now.getTime();
    });
    const rest = inCategory.filter((w) => !due.includes(w));
    const ordered = [...due, ...rest];
    return annotateAndSlice(
      ordered.map((w) => w.id),
      { dueLearning: 0, dueReviews: due.length, newToday: 0, newRemaining: 0 },
    );
  }

  if (study.startsWith("list:")) {
    const listId = study.slice("list:".length);
    const list = await db.wordList.findFirst({
      where: { id: listId, userId: user.id },
      include: { items: { orderBy: { createdAt: "asc" } } },
    });
    if (!list) return jsonError("Word list not found.", 404);
    return annotateAndSlice(
      list.items.map((item) => item.wordId),
      { dueLearning: 0, dueReviews: 0, newToday: 0, newRemaining: 0 },
    );
  }

  if (study === "bookmarks") {
    const bookmarks = await db.vocabBookmark.findMany({
      where: { userId: user.id },
      orderBy: { createdAt: "desc" },
    });
    return annotateAndSlice(
      bookmarks.map((b) => b.wordId),
      { dueLearning: 0, dueReviews: 0, newToday: 0, newRemaining: 0 },
    );
  }

  if (study === "difficult") {
    const difficult = progressRows.filter((row) => row.isDifficult).map((row) => row.wordId);
    return annotateAndSlice(difficult, { dueLearning: 0, dueReviews: 0, newToday: 0, newRemaining: 0 });
  }

  if (study === "all") {
    const due = vocabWords.filter((w) => {
      const p = progressByWord.get(w.id);
      return p?.dueAt && p.dueAt.getTime() <= now.getTime();
    });
    const rest = vocabWords.filter((w) => !due.includes(w));
    return annotateAndSlice(
      [...due, ...rest].map((w) => w.id),
      { dueLearning: 0, dueReviews: due.length, newToday: 0, newRemaining: 0 },
    );
  }

  return jsonError(
    "Unknown study mode. Use queue, category:<id>, list:<id>, bookmarks, difficult or all.",
    400,
  );
}
