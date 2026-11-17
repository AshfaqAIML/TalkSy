import { getSessionUser } from "@/lib/auth";
import { json, jsonError, readJson } from "@/lib/api-helpers";
import { buildMistakesPractice } from "@/lib/exams/practice-sets";
import { startAttempt } from "@/lib/exams/mock-engine";
import { EXAM_KEYS, type ExamKey } from "@/lib/exams/types";

/**
 * POST /api/exams/practice/mistakes — assemble a set from the questions this
 * learner previously got wrong or skipped (most recent attempts first) and
 * start an attempt. Body: { examKey?, variant?, limit?, timed? }
 */
export async function POST(req: Request) {
  const user = await getSessionUser(req);
  if (!user) return jsonError("Please log in.", 401);
  const body = await readJson<{
    examKey?: unknown;
    variant?: unknown;
    limit?: unknown;
    timed?: unknown;
  }>(req).catch(() => null);

  const examKey =
    typeof body?.examKey === "string" && (EXAM_KEYS as readonly string[]).includes(body.examKey)
      ? (body.examKey as ExamKey)
      : undefined;
  const variant = typeof body?.variant === "string" ? body.variant : undefined;
  const limit = typeof body?.limit === "number" ? Math.min(Math.max(Math.round(body.limit), 4), 30) : undefined;
  const timed = body?.timed === true; // default: untimed (learning focus)

  const set = await buildMistakesPractice({ userId: user.id, examKey, variant, limit, timed });
  if ("empty" in set) {
    return jsonError("No previous mistakes to practice yet — submit a mock or practice set first.", 404);
  }

  const attempt = await startAttempt(user.id, set.mockId, "mistakes", timed);
  if (!attempt) return jsonError("Could not start the practice set.", 500);
  return json({ mockId: set.mockId, itemCount: set.itemCount, attempt: { id: attempt.id, mode: attempt.mode, timed: attempt.timed } }, 201);
}
