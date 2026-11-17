import { getSessionUser } from "@/lib/auth";
import { json, jsonError } from "@/lib/api-helpers";
import { compareAttempts } from "@/lib/exams/history";

/**
 * GET /api/exams/history/compare?ids=<a>,<b> — compare two attempts of the
 * SAME examination type and specification version. Anything else is
 * refused with a reason (formats are not comparable across versions).
 */
export async function GET(req: Request) {
  const user = await getSessionUser(req);
  if (!user) return jsonError("Please log in.", 401);

  const url = new URL(req.url);
  const idsParam = url.searchParams.get("ids") ?? "";
  const ids = idsParam.split(",").map((id) => id.trim()).filter(Boolean);
  if (ids.length !== 2) return jsonError("Provide exactly two attempt ids: ?ids=<a>,<b>", 422);

  const comparison = await compareAttempts(user.id, ids[0], ids[1]);
  if (!comparison.ok) return jsonError(comparison.reason, 422);
  return json({ comparison });
}
