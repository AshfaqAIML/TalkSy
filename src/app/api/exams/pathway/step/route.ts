import { getSessionUser } from "@/lib/auth";
import { json, jsonError, readJson } from "@/lib/api-helpers";
import { markStepComplete, unmarkStep } from "@/lib/exams/pathways";

/**
 * POST /api/exams/pathway/step — mark a pathway step complete.
 * DELETE /api/exams/pathway/step — unmark it.
 * Body: { stepId: string }
 */
export async function POST(req: Request) {
  const user = await getSessionUser(req);
  if (!user) return jsonError("Please log in.", 401);
  const body = await readJson<{ stepId?: unknown }>(req);
  const stepId = typeof body?.stepId === "string" ? body.stepId : "";
  if (!stepId) return jsonError("Missing stepId.", 422);
  const ok = await markStepComplete(user.id, stepId);
  if (!ok) return jsonError("Unknown step.", 404);
  return json({ ok: true });
}

export async function DELETE(req: Request) {
  const user = await getSessionUser(req);
  if (!user) return jsonError("Please log in.", 401);
  const body = await readJson<{ stepId?: unknown }>(req);
  const stepId = typeof body?.stepId === "string" ? body.stepId : "";
  if (!stepId) return jsonError("Missing stepId.", 422);
  await unmarkStep(user.id, stepId);
  return json({ ok: true });
}
