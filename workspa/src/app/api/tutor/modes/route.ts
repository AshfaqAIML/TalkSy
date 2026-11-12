import { getSessionUser } from "@/lib/auth";
import { json, jsonError } from "@/lib/api-helpers";
import { tutorModes, toSafeTutorMode } from "@/data/tutor";
import { getTutorUsage, TUTOR_LIMITS } from "@/lib/tutor/service";

/**
 * GET /api/tutor/modes — the nine teaching modes (client-safe), plus the
 * learner's daily usage and the request limits, so the UI can show both
 * upfront.
 */
export async function GET(req: Request) {
  const user = await getSessionUser(req);
  if (!user) return jsonError("Please log in.", 401);

  const usage = await getTutorUsage(user.id);
  return json({
    modes: tutorModes.map(toSafeTutorMode),
    usage,
    limits: {
      maxMessageChars: TUTOR_LIMITS.maxMessageChars,
      dailyRequests: TUTOR_LIMITS.dailyRequests,
    },
  });
}
