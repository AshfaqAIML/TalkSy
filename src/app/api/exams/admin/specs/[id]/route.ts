import { json, jsonError, readJson } from "@/lib/api-helpers";
import { requireStaff } from "@/lib/cms/rbac";
import {
  activateSpec,
  getSpecById,
  logSpecAction,
  retireSpec,
  updateSpecDraft,
} from "@/lib/exams/specs";
import { specPayloadSchema } from "@/lib/exams/types";

type Ctx = { params: Promise<{ id: string }> };

/**
 * PATCH /api/exams/admin/specs/[id] — update a DRAFT spec, or change its
 * lifecycle: { action: "activate" | "retire" }. Admin only. Every change
 * is audit-logged with actor and before/after status.
 */
export async function PATCH(req: Request, ctx: Ctx) {
  const { user, error } = await requireStaff(req, "admin");
  if (error) return error;
  const { id } = await ctx.params;
  const body = await readJson<Record<string, unknown>>(req);
  if (!body) return jsonError("Invalid request body.");

  const current = await getSpecById(id);
  if (!current) return jsonError("Specification not found.", 404);

  const action = typeof body.action === "string" ? body.action : null;
  if (action === "activate" || action === "retire") {
    try {
      const spec = action === "activate" ? await activateSpec(id) : await retireSpec(id);
      if (!spec) return jsonError("Specification not found.", 404);
      await logSpecAction(user.id, `exam_spec.${action}`, id, {
        from: current.status,
        to: spec.status,
        name: spec.name,
        version: spec.version,
      });
      return json({ spec });
    } catch (err) {
      return jsonError(err instanceof Error ? err.message : "Operation failed.", 409);
    }
  }

  // Plain draft edit.
  if (current.status !== "draft") {
    return jsonError("Only draft specifications can be edited. Create a new version instead.", 409);
  }
  const patch: Parameters<typeof updateSpecDraft>[1] = {};
  if (typeof body.name === "string" && body.name.trim().length >= 3) patch.name = body.name.trim();
  if (typeof body.effectiveDate === "string" && /^\d{4}-\d{2}-\d{2}$/.test(body.effectiveDate)) {
    patch.effectiveDate = new Date(body.effectiveDate);
  }
  if (typeof body.notes === "string") patch.notes = body.notes;
  if (typeof body.lastReviewedAt === "string" && /^\d{4}-\d{2}-\d{2}$/.test(body.lastReviewedAt)) {
    patch.lastReviewedAt = new Date(body.lastReviewedAt);
  }
  if (body.payload && typeof body.payload === "object") {
    const parsed = specPayloadSchema.safeParse(body.payload);
    if (!parsed.success) {
      return jsonError(
        `Invalid specification payload: ${parsed.error.issues
          .slice(0, 3)
          .map((issue) => `${issue.path.join(".") || "root"}: ${issue.message}`)
          .join("; ")}`,
        422,
      );
    }
    patch.payload = parsed.data;
  }
  try {
    const spec = await updateSpecDraft(id, patch);
    await logSpecAction(user.id, "exam_spec.update", id, { fields: Object.keys(patch) });
    return json({ spec });
  } catch (err) {
    return jsonError(err instanceof Error ? err.message : "Update failed.", 409);
  }
}
