import { json, jsonError, readJson } from "@/lib/api-helpers";
import { requireStaff } from "@/lib/cms/rbac";
import { reviewEvaluation } from "@/lib/exams/evaluation/service";

/**
 * POST /api/exams/evaluations/[id]/review — human-reviewed assessment
 * (PROMPT 52).
 *
 * A teacher (or editor/admin) reads the learner's evaluation and adds their
 * own note. The AI report itself is never altered: the review is stored as
 * a separate, separately-labelled layer (reviewStatus / reviewerNote /
 * reviewedAt) and shown to the learner with a HUMAN_REVIEWED badge. Where
 * the teacher and the AI disagree, the teacher's judgement comes first.
 */
export async function POST(
  req: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { user, error } = await requireStaff(req, "teacher");
  if (error) return error;

  const body = await readJson(req).catch(() => null);
  const note = typeof body === "object" && body !== null && typeof (body as { note?: unknown }).note === "string"
    ? (body as { note: string }).note
    : "";
  if (note.trim().length < 10) {
    return jsonError("A review note of at least 10 characters is required.", 422);
  }

  const { id } = await params;
  const outcome = await reviewEvaluation(id, { role: user.role }, note);
  if (!outcome.ok) return jsonError(outcome.reason, 422);
  return json({ evaluation: outcome.evaluation });
}
