import { getSessionUser } from "@/lib/auth";
import { json, jsonError } from "@/lib/api-helpers";
import { getEvaluationChain } from "@/lib/exams/evaluation/service";

/**
 * GET /api/exams/evaluations/[id] — one evaluation with its full revision
 * chain (root → latest) and the root-vs-latest improvement comparison.
 */
export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const user = await getSessionUser(req);
  if (!user) return jsonError("Please log in.", 401);

  const { id } = await params;
  const outcome = await getEvaluationChain(user.id, id);
  if (!outcome.ok) return jsonError(outcome.reason, 404);
  return json({ chain: outcome.chain, comparison: outcome.comparison });
}
