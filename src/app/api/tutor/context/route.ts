import { getSessionUser } from "@/lib/auth";
import { json, jsonError } from "@/lib/api-helpers";
import { getTutorMode } from "@/data/tutor";
import { buildContextPreview } from "@/lib/tutor/service";

/**
 * GET /api/tutor/context?mode=<id>&lesson=<ref> — privacy preview: the exact
 * learner-context text the model would receive for this mode. The learner
 * can inspect it before (or while) chatting — no secrets, no surprises.
 */
export async function GET(req: Request) {
  const user = await getSessionUser(req);
  if (!user) return jsonError("Please log in.", 401);

  const url = new URL(req.url);
  const modeParam = url.searchParams.get("mode") ?? "grammar";
  const mode = getTutorMode(modeParam);
  if (!mode) return jsonError("Unknown tutor mode.", 400);

  const lessonRef = url.searchParams.get("lesson");
  const preview = await buildContextPreview(user.id, mode.id, lessonRef);
  return json(preview);
}
