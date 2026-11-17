import { getSessionUser } from "@/lib/auth";
import { jsonError } from "@/lib/api-helpers";
import { getSafeMockTest } from "@/lib/exams/mock-engine";

type Ctx = { params: Promise<{ id: string }> };

/**
 * GET /api/exams/mocks/[id] — the full player configuration for a mock
 * test: sections, official timings, questions and payloads. The answer
 * key is stripped server-side.
 */
export async function GET(req: Request, ctx: Ctx) {
  const user = await getSessionUser(req);
  if (!user) return jsonError("Please log in.", 401);
  const { id } = await ctx.params;
  const mock = await getSafeMockTest(id);
  if (!mock) return jsonError("Mock test not found.", 404);
  return Response.json({ mock });
}
