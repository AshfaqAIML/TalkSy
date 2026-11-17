import { db } from "@/lib/db";
import { getSessionUser } from "@/lib/auth";
import { json, jsonError, readJson } from "@/lib/api-helpers";
import { getVocabWord, getVocabWordsByIds } from "@/data/vocabulary";
import { annotateWords } from "@/lib/vocab/annotate";

type RouteContext = { params: Promise<{ id: string }> };

async function findOwnedList(userId: string, id: string) {
  return db.wordList.findFirst({ where: { id, userId } });
}

/** GET /api/vocabulary/lists/[id] — list detail with annotated words. */
export async function GET(req: Request, ctx: RouteContext) {
  const user = await getSessionUser(req);
  if (!user) return jsonError("Please log in.", 401);
  const { id } = await ctx.params;
  const list = await findOwnedList(user.id, id);
  if (!list) return jsonError("Word list not found.", 404);

  const items = await db.wordListItem.findMany({
    where: { listId: list.id },
    orderBy: { createdAt: "asc" },
  });
  const words = await annotateWords(user.id, getVocabWordsByIds(items.map((i) => i.wordId)));
  return json({
    list: {
      id: list.id,
      name: list.name,
      description: list.description,
      itemCount: items.length,
      createdAt: list.createdAt.toISOString(),
      updatedAt: list.updatedAt.toISOString(),
    },
    words,
  });
}

interface PatchBody {
  name?: unknown;
  description?: unknown;
}

/** PATCH /api/vocabulary/lists/[id] — rename / redescription a list. */
export async function PATCH(req: Request, ctx: RouteContext) {
  const user = await getSessionUser(req);
  if (!user) return jsonError("Please log in.", 401);
  const { id } = await ctx.params;
  const list = await findOwnedList(user.id, id);
  if (!list) return jsonError("Word list not found.", 404);

  const body = await readJson<PatchBody>(req);
  const data: { name?: string; description?: string } = {};
  if (typeof body?.name === "string") {
    const name = body.name.trim();
    if (name.length < 1 || name.length > 60) {
      return jsonError("List name must be between 1 and 60 characters.", 400);
    }
    data.name = name;
  }
  if (typeof body?.description === "string") {
    data.description = body.description.trim().slice(0, 200);
  }
  const updated = await db.wordList.update({ where: { id: list.id }, data });
  return json({ list: { id: updated.id, name: updated.name, description: updated.description } });
}

interface AddItemBody {
  wordId?: unknown;
}

/** POST /api/vocabulary/lists/[id] — add a word to the list. */
export async function POST(req: Request, ctx: RouteContext) {
  const user = await getSessionUser(req);
  if (!user) return jsonError("Please log in.", 401);
  const { id } = await ctx.params;
  const list = await findOwnedList(user.id, id);
  if (!list) return jsonError("Word list not found.", 404);

  const body = await readJson<AddItemBody>(req);
  const wordId = typeof body?.wordId === "string" ? body.wordId : "";
  if (!wordId || !getVocabWord(wordId)) return jsonError("Unknown word.", 404);

  const itemCount = await db.wordListItem.count({ where: { listId: list.id } });
  if (itemCount >= 200) return jsonError("This list is full (200 words).", 400);

  await db.wordListItem.upsert({
    where: { listId_wordId: { listId: list.id, wordId } },
    create: { listId: list.id, wordId },
    update: {},
  });
  await db.wordList.update({ where: { id: list.id }, data: { updatedAt: new Date() } });
  return json({ wordId, added: true });
}

/**
 * DELETE /api/vocabulary/lists/[id]?wordId=… — remove one word from the list;
 * without wordId the whole list (and its items) is deleted.
 */
export async function DELETE(req: Request, ctx: RouteContext) {
  const user = await getSessionUser(req);
  if (!user) return jsonError("Please log in.", 401);
  const { id } = await ctx.params;
  const list = await findOwnedList(user.id, id);
  if (!list) return jsonError("Word list not found.", 404);

  const wordId = new URL(req.url).searchParams.get("wordId");
  if (wordId) {
    await db.wordListItem.deleteMany({ where: { listId: list.id, wordId } });
    await db.wordList.update({ where: { id: list.id }, data: { updatedAt: new Date() } });
    return json({ wordId, removed: true });
  }
  await db.wordList.delete({ where: { id: list.id } });
  return json({ deleted: true });
}
