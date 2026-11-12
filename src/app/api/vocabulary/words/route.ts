import { db } from "@/lib/db";
import { getSessionUser } from "@/lib/auth";
import { json } from "@/lib/api-helpers";
import { searchVocabulary, vocabWords } from "@/data/vocabulary";
import { annotateWords } from "@/lib/vocab/annotate";
import type { Difficulty } from "@/data/curriculum/types";
import type { VocabSort } from "@/data/vocabulary";

/**
 * GET /api/vocabulary/words — search + filter + sort the Word Explorer.
 * Public (guests get unannotated words); logged-in learners get progress +
 * bookmark annotations and user-specific filters (status, difficult, bookmarked).
 *
 * Query: q, category, sub, difficulty, status, flag=difficult, bookmarked=true,
 *        ids (comma list), sort, limit, offset
 */
export async function GET(req: Request) {
  const url = new URL(req.url);
  const user = await getSessionUser(req);

  const q = url.searchParams.get("q")?.trim() || undefined;
  const categoryId = url.searchParams.get("category") || undefined;
  const subcategoryId = url.searchParams.get("sub") || undefined;
  const difficultyParam = url.searchParams.get("difficulty");
  const sortParam = url.searchParams.get("sort") ?? "relevance";
  const idsParam = url.searchParams.get("ids");
  const limit = Math.min(Math.max(Number(url.searchParams.get("limit") ?? 60) || 60, 1), 200);
  const offset = Math.max(Number(url.searchParams.get("offset") ?? 0) || 0, 0);

  const difficulties: Difficulty[] = ["easy", "medium", "hard", "challenge"];
  const difficulty =
    difficultyParam && difficulties.includes(difficultyParam as Difficulty)
      ? (difficultyParam as Difficulty)
      : undefined;
  const sorts: VocabSort[] = ["relevance", "alphabetical", "difficulty", "recent", "due"];
  const sort = (sorts as string[]).includes(sortParam) ? (sortParam as VocabSort) : "relevance";
  const ids = idsParam
    ? idsParam
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean)
    : undefined;

  let matches = searchVocabulary({
    q,
    categoryId,
    subcategoryId,
    difficulty,
    ids,
    sort: sort === "recent" || sort === "due" ? "relevance" : sort,
  });

  // User-specific filters & sorts need progress data.
  if (user) {
    const wordIds = matches.map((w) => w.id);
    const [progressRows, bookmarkRows] = await Promise.all([
      db.vocabProgress.findMany({
        where: { userId: user.id, wordId: { in: wordIds } },
        select: { wordId: true, status: true, dueAt: true, isDifficult: true, lastReviewedAt: true },
      }),
      db.vocabBookmark.findMany({
        where: { userId: user.id, wordId: { in: wordIds } },
        select: { wordId: true },
      }),
    ]);
    const progressByWord = new Map(progressRows.map((r) => [r.wordId, r]));
    const bookmarkedSet = new Set(bookmarkRows.map((r) => r.wordId));

    const statusParam = url.searchParams.get("status");
    if (statusParam === "learning" || statusParam === "reviewing" || statusParam === "mastered") {
      matches = matches.filter((w) => progressByWord.get(w.id)?.status === statusParam);
    }
    if (url.searchParams.get("flag") === "difficult") {
      matches = matches.filter((w) => progressByWord.get(w.id)?.isDifficult === true);
    }
    if (url.searchParams.get("bookmarked") === "true") {
      matches = matches.filter((w) => bookmarkedSet.has(w.id));
    }
    if (sort === "recent") {
      matches = [...matches].sort(
        (a, b) =>
          (progressByWord.get(b.id)?.lastReviewedAt?.getTime() ?? 0) -
          (progressByWord.get(a.id)?.lastReviewedAt?.getTime() ?? 0),
      );
    } else if (sort === "due") {
      matches = [...matches].sort(
        (a, b) =>
          (progressByWord.get(a.id)?.dueAt?.getTime() ?? Number.MAX_SAFE_INTEGER) -
          (progressByWord.get(b.id)?.dueAt?.getTime() ?? Number.MAX_SAFE_INTEGER),
      );
    }
  }

  const total = matches.length;
  const page = matches.slice(offset, offset + limit);
  const annotated = await annotateWords(user?.id ?? null, page);

  return json({
    words: annotated,
    total,
    libraryTotal: vocabWords.length,
    limit,
    offset,
  });
}
