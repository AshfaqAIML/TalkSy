import { db } from "@/lib/db";
import { getSessionUser } from "@/lib/auth";
import { json, jsonError, readJson } from "@/lib/api-helpers";
import { getReadingText } from "@/data/reading";
import { toSafeReadingQuestion } from "@/lib/reading/grade";
import { ensureReadingProgress } from "@/lib/reading/service";

/**
 * POST /api/reading/runs — start a formal comprehension-check run for a text.
 * Creates a pending ReadingRun covering every question, and returns the
 * sanitised question set (options/events shuffled with the run id as seed,
 * stable for the whole run). Answers are graded only at submit time.
 */
export async function POST(req: Request) {
  const user = await getSessionUser(req);
  if (!user) return jsonError("Please log in.", 401);

  const body = await readJson<{ slug?: string }>(req);
  if (!body || typeof body.slug !== "string") return jsonError("Invalid request body.", 400);

  const text = getReadingText(body.slug);
  if (!text) return jsonError("Reading text not found.", 404);
  if (text.questions.length === 0) return jsonError("This text has no questions.", 400);

  await ensureReadingProgress(user.id, text.id);

  const run = await db.readingRun.create({
    data: {
      userId: user.id,
      textId: text.id,
      questionIds: JSON.stringify(text.questions.map((q) => q.id)),
      total: text.questions.length,
    },
  });

  return json({
    runId: run.id,
    textId: text.id,
    passScore: text.passScore,
    total: text.questions.length,
    questions: text.questions.map((question) => toSafeReadingQuestion(question, run.id)),
  });
}
