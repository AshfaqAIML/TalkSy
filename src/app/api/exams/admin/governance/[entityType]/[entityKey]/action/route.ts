import { json, jsonError, readJson } from "@/lib/api-helpers";
import { requireStaff } from "@/lib/cms/rbac";
import { governanceAction, GovernanceServiceError } from "@/lib/exams/governance/workflow";
import {
  GOVERNANCE_ACTIONS,
  GOVERNANCE_NOTE_MIN_LENGTH,
  TRANSITIONABLE_ENTITY_TYPES,
  type GovernanceAction,
  type GovernanceEntityType,
} from "@/lib/exams/governance/types";

type Ctx = { params: Promise<{ entityType: string; entityKey: string }> };

/**
 * POST /api/exams/admin/governance/[entityType]/[entityKey]/action — move a
 * content entity through the six-stage approval pipeline:
 *
 *   draft → educational-review → examination-review → answer-validation
 *         → approved → published
 *
 * Role gates (service-enforced): editors submit; teachers sign off each
 * review stage and validate answers; admins publish/unpublish. Advancing
 * actions require an accountable note (≥ 10 characters). Answer validation
 * re-runs the validation engine and refuses on blocking issues. AI-generated
 * content can only reach human-approved status through these explicit
 * actions — never automatically.
 */
export async function POST(req: Request, ctx: Ctx) {
  const { user, error } = await requireStaff(req, "editor");
  if (error) return error;
  const { entityType, entityKey } = await ctx.params;

  if (!TRANSITIONABLE_ENTITY_TYPES.includes(entityType as GovernanceEntityType)) {
    return jsonError(
      `"${entityType}" entities follow their own lifecycle (use their dedicated admin surface).`,
      400,
    );
  }

  const body = await readJson<{ action?: string; note?: string }>(req);
  if (!body || typeof body.action !== "string") {
    return jsonError("An action is required.", 400);
  }
  if (!GOVERNANCE_ACTIONS.includes(body.action as GovernanceAction)) {
    return jsonError("Unknown governance action.", 400);
  }
  const note = typeof body.note === "string" ? body.note : "";
  if (note.length > 500) {
    return jsonError("Notes are limited to 500 characters.", 400);
  }

  try {
    const result = await governanceAction({
      entityType: entityType as GovernanceEntityType,
      entityKey,
      action: body.action as GovernanceAction,
      note,
      actor: { id: user.id, role: user.role },
    });
    return json({ result });
  } catch (err) {
    if (err instanceof GovernanceServiceError) {
      return json(
        { error: err.message, ...(err.detail ? { issues: err.detail } : {}) },
        err.status as 400 | 403 | 404 | 409 | 422,
      );
    }
    return jsonError("The governance action failed.", 500);
  }
}
