import { getSessionUser } from "@/lib/auth";
import { buildRecommendations } from "@/lib/catalogue/service";

/**
 * GET /api/catalogue/recommendations — recommendation cards with computed
 * reasons (continue learning, next in path, weakest measured skill, most
 * frequent Error Clinic mistake, course follow-ups). Anonymous visitors get
 * honest starting points. No popularity counters, no review scores.
 */
export const dynamic = "force-dynamic";

export async function GET(req: Request) {
  const user = await getSessionUser(req);
  const payload = await buildRecommendations(user?.id);
  return Response.json(payload, { headers: { "cache-control": "no-store" } });
}
