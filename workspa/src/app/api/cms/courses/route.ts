import { getCatalogue } from "@/lib/cms/service";
import { getSessionUser } from "@/lib/auth";
import { jsonError } from "@/lib/api-helpers";

/** GET /api/cms/courses — the learner catalogue of published courses. */
export async function GET(req: Request) {
  const user = await getSessionUser(req);
  if (!user) return jsonError("Please log in to browse courses.", 401);
  return Response.json({ courses: await getCatalogue(user.id) });
}
