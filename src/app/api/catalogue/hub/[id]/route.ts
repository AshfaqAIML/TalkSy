import { getSessionUser } from "@/lib/auth";
import { buildHubContent } from "@/lib/catalogue/service";

/**
 * GET /api/catalogue/hub/<id> — one category hub (PROMPT 32 §2): featured
 * items, chapters and lessons from the hub's real content source,
 * recommended resources and practice activities.
 */
export const dynamic = "force-dynamic";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const user = await getSessionUser(req);
  const content = await buildHubContent(id, user?.id);
  if (!content) {
    return Response.json({ error: "Unknown category hub." }, { status: 404 });
  }
  return Response.json(content, { headers: { "cache-control": "no-store" } });
}
