import { db } from "@/lib/db";
import { getSessionUser } from "@/lib/auth";
import { json, jsonError, readJson } from "@/lib/api-helpers";
import { getVocabCategory, vocabWords } from "@/data/vocabulary";
import { generateChallenge, isChallengeKind } from "@/lib/vocab/challenges";

/**
 * GET /api/vocabulary/challenges — completed challenge runs (history).
 */
export async function GET(req: Request) {
  const user = await getSessionUser(req);
  if (!user) return jsonError("Please log in.", 401);
  const runs = await db.vocabChallengeRun.findMany({
    where: { userId: user.id, status: "completed" },
    orderBy: { completedAt: "desc" },
    take: 20,
  });
  return json({
    runs: runs.map((run) => ({
      id: run.id,
      kind: run.kind,
      category: run.category,
      total: run.total,
      correct: run.correct,
      score: run.score,
      completedAt: run.completedAt ? run.completedAt.toISOString() : null,
      createdAt: run.createdAt.toISOString(),
    })),
  });
}

interface StartBody {
  kind?: unknown;
  categoryId?: unknown;
  size?: unknown;
}

/**
 * POST /api/vocabulary/challenges — start a run.
 * Generates items deterministically from a fresh random seed; the seed is
 * stored on the run so submission can regenerate the answer key server-side.
 * The client never receives grading data.
 */
export async function POST(req: Request) {
  const user = await getSessionUser(req);
  if (!user) return jsonError("Please log in.", 401);

  const body = await readJson<StartBody>(req);
  const kind = typeof body?.kind === "string" ? body.kind : "";
  if (!isChallengeKind(kind)) return jsonError("Unknown challenge kind.", 400);

  const categoryId =
    typeof body?.categoryId === "string" && body.categoryId ? body.categoryId : undefined;
  if (categoryId && !getVocabCategory(categoryId)) {
    return jsonError("Unknown category.", 404);
  }

  const size = Math.min(Math.max(Number(body?.size) || 10, 4), 15);
  const seed = Math.floor(Math.random() * 2 ** 31);

  const challenge = generateChallenge(vocabWords, { kind, seed, categoryId, size });
  if (challenge.items.length === 0) {
    return jsonError("Not enough words to build this challenge.", 400);
  }

  const run = await db.vocabChallengeRun.create({
    data: {
      userId: user.id,
      kind,
      seed,
      category: categoryId ?? null,
      total: challenge.items.length,
      status: "pending",
    },
  });

  return json(
    {
      runId: run.id,
      kind,
      categoryId: categoryId ?? null,
      items: challenge.items,
    },
    201,
  );
}