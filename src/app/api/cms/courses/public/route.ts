import { getPublicCatalogue } from "@/lib/cms/service";

/**
 * GET /api/cms/courses/public — the anonymous projection of the published
 * catalogue, used by the public homepage. Read-only: slug, title,
 * description, level, live lesson count and enrolment count, all straight
 * from the database. The authenticated catalogue (with per-user enrolment
 * state) stays behind /api/cms/courses.
 */
export async function GET() {
  return Response.json({ courses: await getPublicCatalogue() });
}
