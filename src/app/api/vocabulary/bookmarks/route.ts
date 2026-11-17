import { db } from "@/lib/db";
import { getSessionUser } from "@/lib/auth";
import { json, jsonError, readJson } from "@/lib/api-helpers";
import { getVocabWord, getVocabWordsByIds } from "@/data/vocabulary";
import { annotateWords } from "@/lib/vocab/annotate";

/** GET /api/vocabulary/bookmarks — the learner's bookmarked words. */
export async function GET(req: Request) {
  const user = await getSessionUser(req);
  if (!user) return jsonError("Please log in.", 401);
  const bookmarks = await db.vocabBookmark.findMany({
    where: { userId: user.id },
    orderBy: { createdAt: "desc" },
  });
  const words = await annotateWords(user.id, getVocabWordsByIds(bookmarks.map((b) => b.wordId)));
  return json({ words });
}

interface BookmarkBody {
  wordId?: unknown;
}

/** POST /api/vocabulary/bookmarks — toggle a bookmark. */
export async function POST(req: Request) {
  const user = await getSessionUser(req);
  if (!user) return jsonError("Please log in.", 401);
  const body = await readJson<BookmarkBody>(req);
  const wordId = typeof body?.wordId === "string" ? body.wordId : "";
  if (!wordId || !getVocabWord(wordId)) return jsonError("Unknown word.", 404);

  const existing = await db.vocabBookmark.findUnique({
    where: { userId_wordId: { userId: user.id, wordId } },
  });
  if (existing) {
    await db.vocabBookmark.delete({ where: { id: existing.id } });
    return json({ wordId, bookmarked: false });
  }
  await db.vocabBookmark.create({ data: { userId: user.id, wordId } });
  return json({ wordId, bookmarked: true });
}

/** DELETE /api/vocabulary/bookmarks?wordId=… — remove a bookmark. */
export async function DELETE(req: Request) {
  const user = await getSessionUser(req);
  if (!user) return jsonError("Please log in.", 401);
  const wordId = new URL(req.url).searchParams.get("wordId") ?? "";
  if (!wordId) return jsonError("Missing wordId.", 400);
  await db.vocabBookmark.deleteMany({ where: { userId: user.id, wordId } });
  return json({ wordId, bookmarked: false });
}
