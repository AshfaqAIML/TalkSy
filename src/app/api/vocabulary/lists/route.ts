import { db } from "@/lib/db";
import { getSessionUser } from "@/lib/auth";
import { json, jsonError, readJson } from "@/lib/api-helpers";

/** GET /api/vocabulary/lists — the learner's personal word lists. */
export async function GET(req: Request) {
  const user = await getSessionUser(req);
  if (!user) return jsonError("Please log in.", 401);
  const lists = await db.wordList.findMany({
    where: { userId: user.id },
    orderBy: { updatedAt: "desc" },
    include: { _count: { select: { items: true } } },
  });
  return json({
    lists: lists.map((list) => ({
      id: list.id,
      name: list.name,
      description: list.description,
      itemCount: list._count.items,
      createdAt: list.createdAt.toISOString(),
      updatedAt: list.updatedAt.toISOString(),
    })),
  });
}

interface CreateListBody {
  name?: unknown;
  description?: unknown;
}

/** POST /api/vocabulary/lists — create a personal word list. */
export async function POST(req: Request) {
  const user = await getSessionUser(req);
  if (!user) return jsonError("Please log in.", 401);
  const body = await readJson<CreateListBody>(req);
  const name = typeof body?.name === "string" ? body.name.trim() : "";
  const description = typeof body?.description === "string" ? body.description.trim() : "";
  if (name.length < 1 || name.length > 60) {
    return jsonError("List name must be between 1 and 60 characters.", 400);
  }
  const existing = await db.wordList.count({ where: { userId: user.id } });
  if (existing >= 30) {
    return jsonError("You already have 30 lists — that's the maximum.", 400);
  }
  const list = await db.wordList.create({ data: { userId: user.id, name, description } });
  return json({
    list: {
      id: list.id,
      name: list.name,
      description: list.description,
      itemCount: 0,
      createdAt: list.createdAt.toISOString(),
      updatedAt: list.updatedAt.toISOString(),
    },
  }, 201);
}
