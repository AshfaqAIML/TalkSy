import { buildSearchIndex } from "@/lib/search/build-index";

/**
 * GET /api/search/index — the public search index for the command palette:
 * every course, lesson, exercise, grammar topic, word, practice activity,
 * tutor mode and page, with hash-route destinations. Read-only and
 * anonymous; grading data is never included.
 */
export const dynamic = "force-dynamic";

export async function GET() {
  const entries = await buildSearchIndex();
  return Response.json(
    { entries },
    { headers: { "cache-control": "no-store" } },
  );
}
