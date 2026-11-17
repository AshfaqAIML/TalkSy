import { getSessionUser } from "@/lib/auth";
import { buildCatalogue } from "@/lib/catalogue/service";

/**
 * GET /api/catalogue — the unified discovery catalogue (PROMPT 32):
 * learning paths, complete courses, short lessons, grammar guides,
 * practice labs, conversation simulators and (signed in) completed
 * learning — every figure computed from the real content sources.
 */
export const dynamic = "force-dynamic";

export async function GET(req: Request) {
  const user = await getSessionUser(req);
  const payload = await buildCatalogue(user?.id);
  return Response.json(payload, { headers: { "cache-control": "no-store" } });
}
