import { getSessionUser } from "@/lib/auth";
import { json, jsonError, readJson } from "@/lib/api-helpers";
import { reviseEvaluation } from "@/lib/exams/evaluation/service";
import { reviseRequestSchema } from "@/lib/exams/evaluation/types";

/**
 * POST /api/exams/evaluations/[id]/revise — the learning loop's revision
 * step. The learner submits a revised response for an existing evaluation;
 * it is re-evaluated against the SAME rubric, stored as a linked revision,
 * and returned together with a criterion-by-criterion comparison so the
 * improvement is tracked, not just re-scored.
 */
export async function POST(
  req: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const user = await getSessionUser(req);
  if (!user) return jsonError("Please log in.", 401);

  const body = await readJson(req);
  const parsed = reviseRequestSchema.safeParse(body);
  if (!parsed.success) {
    return jsonError(parsed.error.issues[0]?.message ?? "Invalid request.", 422);
  }

  const { id } = await params;
  const outcome = await reviseEvaluation(user.id, id, {
    text: parsed.data.text,
    transcriptSource: parsed.data.transcriptSource,
    audioSec: parsed.data.audioSec ?? null,
  });
  if (!outcome.ok) return jsonError(outcome.reason, 422);
  return json({ evaluation: outcome.evaluation, comparison: outcome.comparison });
}
