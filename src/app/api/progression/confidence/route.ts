import { getSessionUser } from "@/lib/auth";
import { json, jsonError, readJson } from "@/lib/api-helpers";
import { setConfidence } from "@/lib/progress/service";

/**
 * POST /api/progression/confidence
 * Self-reported confidence (1-5) for a completed lesson. Feeds the revision
 * scheduler; never displayed as a performance score.
 */
export async function POST(req: Request) {
  const user = await getSessionUser(req);
  if (!user) return jsonError("Please log in.", 401);

  const body = await readJson<{ lessonSlug?: unknown; confidence?: unknown }>(req);
  const lessonSlug = typeof body?.lessonSlug === "string" ? body.lessonSlug : "";
  const confidence = typeof body?.confidence === "number" ? body.confidence : NaN;
  if (!lessonSlug || !Number.isFinite(confidence)) {
    return jsonError("lessonSlug and confidence (1-5) are required.");
  }

  try {
    await setConfidence(user.id, lessonSlug, confidence);
    return json({ ok: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Could not save confidence.";
    return jsonError(message, 400);
  }
}
