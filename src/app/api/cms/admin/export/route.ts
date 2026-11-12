import { exportCourse } from "@/lib/cms/portability";
import { requireStaff } from "@/lib/cms/rbac";
import { jsonError } from "@/lib/api-helpers";

/**
 * GET /api/cms/admin/export?courseId=… — download a course bundle as JSON.
 * Includes all referenced questions with their answers (staff-only artefact).
 */
export async function GET(req: Request) {
  const { user, error } = await requireStaff(req, "editor");
  if (error) return error;
  const url = new URL(req.url);
  const courseId = url.searchParams.get("courseId");
  if (!courseId) return jsonError("courseId is required.", 422);
  try {
    const bundle = await exportCourse(user.id, courseId);
    const slug = bundle.course.slug ?? "course";
    return new Response(JSON.stringify(bundle, null, 2), {
      status: 200,
      headers: {
        "content-type": "application/json",
        "content-disposition": `attachment; filename="talksy-${slug}.json"`,
      },
    });
  } catch (e) {
    const status = e instanceof Error && "status" in e ? (e as { status: number }).status : 422;
    return jsonError(e instanceof Error ? e.message : "Export failed.", status);
  }
}
