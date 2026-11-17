import { json, jsonError, readJson } from "@/lib/api-helpers";
import { requireStaff } from "@/lib/cms/rbac";
import { db } from "@/lib/db";
import { createSpecDraft, listSpecs, logSpecAction } from "@/lib/exams/specs";
import {
  EXAM_VARIANTS,
  EXAM_KEYS,
  specPayloadSchema,
  type ExamKey,
} from "@/lib/exams/types";

/**
 * GET /api/exams/admin/specs — every test specification (all versions
 * and statuses) for the admin console. Staff only.
 * POST /api/exams/admin/specs — create a new draft spec (version
 * auto-increments). Admin only. Body:
 *   { examKey, variant, name, effectiveDate, notes?, payload: {sections,
 *    scoringModel, taskTypes, sourceRefs} }
 */
export async function GET(req: Request) {
  const { user, error } = await requireStaff(req, "editor");
  if (error) return error;
  const specs = await listSpecs();
  return json({ specs });
}

export async function POST(req: Request) {
  const { user, error } = await requireStaff(req, "admin");
  if (error) return error;
  const body = await readJson<Record<string, unknown>>(req);
  if (!body) return jsonError("Invalid request body.");

  const examKey = body.examKey as ExamKey;
  if (!EXAM_KEYS.includes(examKey)) return jsonError("Unknown examKey.", 422);
  const variant = typeof body.variant === "string" ? body.variant : "STANDARD";
  if (!EXAM_VARIANTS[examKey].includes(variant)) {
    return jsonError(`Variant must be one of: ${EXAM_VARIANTS[examKey].join(", ")}.`, 422);
  }
  const name = typeof body.name === "string" && body.name.trim().length >= 3 ? body.name.trim() : null;
  if (!name) return jsonError("Name must be at least 3 characters.", 422);
  const effectiveDate =
    typeof body.effectiveDate === "string" && /^\d{4}-\d{2}-\d{2}$/.test(body.effectiveDate)
      ? new Date(body.effectiveDate)
      : null;
  if (!effectiveDate || Number.isNaN(effectiveDate.getTime())) {
    return jsonError("effectiveDate must be an ISO date (YYYY-MM-DD).", 422);
  }

  const payloadParsed = specPayloadSchema.safeParse(body.payload);
  if (!payloadParsed.success) {
    return jsonError(
      `Invalid specification payload: ${payloadParsed.error.issues
        .slice(0, 3)
        .map((issue) => `${issue.path.join(".") || "root"}: ${issue.message}`)
        .join("; ")}`,
      422,
    );
  }

  const spec = await createSpecDraft({
    examKey,
    variant,
    name,
    effectiveDate,
    notes: typeof body.notes === "string" ? body.notes : null,
    payload: payloadParsed.data,
  });
  await logSpecAction(user.id, "exam_spec.create", spec.id, {
    examKey,
    variant,
    version: spec.version,
  });
  return json({ spec }, 201);
}
