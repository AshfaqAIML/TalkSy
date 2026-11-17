import { getSessionUser } from "@/lib/auth";
import { json, jsonError } from "@/lib/api-helpers";
import { evaluationOverview, listEvaluations } from "@/lib/exams/evaluation/service";

/**
 * GET /api/exams/evaluations
 *
 * With ?questionId=… or ?attemptId=… — the learner's evaluations for that
 * question/attempt, newest first (used by the mock result view).
 *
 * With no filter — the full evaluation history overview used by the
 * Evaluation Studio: the latest evaluations across all evaluators plus a
 * per-evaluator improvement rollup (first vs latest estimated result,
 * attempt and chain counts). Every number is a practice estimate; the
 * response carries no answer keys or grading secrets.
 */
export async function GET(req: Request) {
  const user = await getSessionUser(req);
  if (!user) return jsonError("Please log in.", 401);

  const url = new URL(req.url);
  const questionId = url.searchParams.get("questionId") ?? undefined;
  const attemptId = url.searchParams.get("attemptId") ?? undefined;
  const evaluatorKey = url.searchParams.get("evaluatorKey") ?? undefined;

  if (questionId || attemptId || evaluatorKey) {
    const evaluations = await listEvaluations(user.id, { questionId, attemptId, evaluatorKey });
    return json({ evaluations });
  }
  const overview = await evaluationOverview(user.id);
  return json(overview);
}
