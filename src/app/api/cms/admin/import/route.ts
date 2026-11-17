import { importCourseBundle, validateImportBundle } from "@/lib/cms/portability";
import { requireStaff } from "@/lib/cms/rbac";
import { jsonError, readJson } from "@/lib/api-helpers";

/**
 * POST /api/cms/admin/import
 * Body: { bundle: unknown, mode: "validate" | "commit" }
 *
 * "validate" returns a full preview (counts, errors, warnings, slug mapping)
 * WITHOUT writing anything. "commit" re-validates and, only if clean, creates
 * the content as drafts with fresh slugs — existing content is never touched.
 */
export async function POST(req: Request) {
  const { user, error } = await requireStaff(req, "admin");
  if (error) return error;
  const body = await readJson<{ bundle?: unknown; mode?: unknown }>(req);
  if (!body || body.bundle === undefined) return jsonError("A bundle is required.", 422);
  const mode = body.mode === "commit" ? "commit" : "validate";
  try {
    if (mode === "validate") {
      return Response.json({ mode, preview: validateImportBundle(body.bundle) });
    }
    const result = await importCourseBundle(user.id, body.bundle);
    return Response.json({ mode, ...result });
  } catch (e) {
    const status = e instanceof Error && "status" in e ? (e as { status: number }).status : 422;
    return jsonError(e instanceof Error ? e.message : "Import failed.", status);
  }
}
