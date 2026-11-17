/**
 * Examination content governance — the approval workflow (PROMPT 55 §3).
 *
 * Draft → Educational review → Examination review → Answer validation
 *       → Approved → Published
 *
 * Rules enforced here:
 *   - Role gates: editors submit; teachers sign off each review stage and
 *     validate answers; admins publish/unpublish (rbac.ts hierarchy).
 *   - No skips: every action declares the states it may start from, so
 *     content walks the whole chain — there is no path from draft straight
 *     to approved or published.
 *   - Accountability: every advancing action requires a reviewer note of at
 *     least GOVERNANCE_NOTE_MIN_LENGTH characters.
 *   - The AI rule: AI-generated content never automatically receives
 *     human-approved status. Overrides (ExamContentReview rows) are written
 *     ONLY by this function — never by seeders, imports or AI pipelines —
 *     and `humanApproved` flips to true only through the teacher-or-above
 *     validate-answers / publish actions.
 *   - Answer validation is engine-gated: signing off question-bearing
 *     content (a question, exercise, lesson, mock, course or audio asset)
 *     re-runs the validation engine scoped to that entity and refuses while
 *     any blocking issue remains.
 *
 * Every transition is audit-logged into CmsAuditLog under entityType
 * "governance", entityId "<entityType>:<entityKey>".
 */

import { db } from "@/lib/db";
import { audit } from "@/lib/cms/service";
import {
  GOVERNANCE_ACTION_FROM,
  GOVERNANCE_ACTION_MIN_ROLE,
  GOVERNANCE_ACTION_TO,
  GOVERNANCE_NOTE_MIN_LENGTH,
  TRANSITIONABLE_ENTITY_TYPES,
  type GovernanceAction,
  type GovernanceEntityType,
  type GovernanceStatus,
} from "./types";
import { findGovernanceEntity } from "./registry";
import { runQuestionValidation, type ValidationScope } from "./validate";
import { roleAtLeast } from "@/lib/cms/rbac";

export class GovernanceServiceError extends Error {
  constructor(
    message: string,
    public status: number,
    public detail?: unknown,
  ) {
    super(message);
  }
}

/** Machine validation scope for entity types that own answerable content. */
function validationScopeFor(
  entityType: GovernanceEntityType,
  entityKey: string,
): ValidationScope | null {
  switch (entityType) {
    case "question":
    case "exercise":
    case "lesson":
    case "mock":
    case "course":
    case "audio":
      return { entityType, entityKey };
    default:
      // pathway / module / chapter / rubric / passage / model-answer are
      // containers or reference artefacts — the readiness dashboard and
      // their children's sign-offs cover them.
      return null;
  }
}

export interface GovernanceActionResult {
  entityType: GovernanceEntityType;
  entityKey: string;
  status: GovernanceStatus;
  humanApproved: boolean;
  note: string;
}

export async function governanceAction(input: {
  entityType: GovernanceEntityType;
  entityKey: string;
  action: GovernanceAction;
  note: string;
  actor: { id: string; role: string };
}): Promise<GovernanceActionResult> {
  const { entityType, entityKey, action, note } = input;

  // --- Shape checks -------------------------------------------------------
  if (!TRANSITIONABLE_ENTITY_TYPES.includes(entityType)) {
    throw new GovernanceServiceError(
      `"${entityType}" entities follow their own lifecycle and are not transitioned through the governance pipeline.`,
      400,
    );
  }
  const minRole = GOVERNANCE_ACTION_MIN_ROLE[action];
  if (!minRole) {
    throw new GovernanceServiceError("Unknown governance action.", 400);
  }
  if (!roleAtLeast(input.actor.role, minRole)) {
    throw new GovernanceServiceError(
      `This action requires the ${minRole} role or above.`,
      403,
    );
  }

  // --- Entity existence ---------------------------------------------------
  const entity = await findGovernanceEntity(entityType, entityKey);
  if (!entity) {
    throw new GovernanceServiceError("This content entity does not exist.", 404);
  }

  // --- Transition legality (no skips) --------------------------------------
  const fromStates = GOVERNANCE_ACTION_FROM[action];
  if (!fromStates.includes(entity.status)) {
    throw new GovernanceServiceError(
      `Illegal transition: "${action}" starts from ${fromStates.join(" / ")}, but this content is currently "${entity.status}".`,
      409,
    );
  }

  // --- Accountability note --------------------------------------------------
  const trimmedNote = (note ?? "").trim();
  const advancing: readonly GovernanceAction[] = [
    "educational-approve",
    "examination-approve",
    "validate-answers",
    "publish",
  ];
  if (advancing.includes(action) && trimmedNote.length < GOVERNANCE_NOTE_MIN_LENGTH) {
    throw new GovernanceServiceError(
      `Advancing actions need an accountable reviewer note of at least ${GOVERNANCE_NOTE_MIN_LENGTH} characters — this is what keeps human approval human.`,
      400,
    );
  }

  // --- Answer-validation engine gate ----------------------------------------
  let validationSummary: { blockingCount: number; issues: unknown[] } | null = null;
  if (action === "validate-answers") {
    const scope = validationScopeFor(entityType, entityKey);
    if (scope) {
      const report = await runQuestionValidation(scope);
      validationSummary = {
        blockingCount: report.blockingCount,
        issues: report.issues
          .filter((issue) => issue.severity === "blocking")
          .slice(0, 10),
      };
      if (report.blockingCount > 0) {
        throw new GovernanceServiceError(
          `Answer validation failed: ${report.blockingCount} blocking issue(s) must be fixed first.`,
          422,
          validationSummary,
        );
      }
    }
  }

  // --- Write the override ----------------------------------------------------
  const to = GOVERNANCE_ACTION_TO[action];
  // humanApproved flips true only on the teacher+ answer-validation sign-off
  // (and stays true through publish/unpublish); a rejection resets it.
  const humanApproved =
    action === "validate-answers" || action === "publish"
      ? true
      : action === "reject"
        ? false
        : action === "unpublish"
          ? entity.humanApproved || false
          : false;

  const row = await db.examContentReview.upsert({
    where: { entityType_entityKey: { entityType, entityKey } },
    create: {
      entityType,
      entityKey,
      status: to,
      provenance: entity.provenance,
      humanApproved,
      note: trimmedNote,
      updatedById: input.actor.id,
    },
    update: {
      status: to,
      humanApproved,
      note: trimmedNote,
      updatedById: input.actor.id,
    },
  });

  await audit(input.actor.id, `governance.${action}`, "governance", `${entityType}:${entityKey}`, {
    from: entity.status,
    to,
    title: entity.title,
    provenance: row.provenance,
    humanApproved,
    note: trimmedNote,
  });

  return {
    entityType,
    entityKey,
    status: to,
    humanApproved,
    note: trimmedNote,
  };
}

/**
 * The governance record for one entity (registry card detail). Returns the
 * override row when present, plus the derived defaults for comparison.
 */
export async function getGovernanceRecord(entityType: GovernanceEntityType, entityKey: string) {
  const entity = await findGovernanceEntity(entityType, entityKey);
  if (!entity) return null;
  const row = await db.examContentReview.findUnique({
    where: { entityType_entityKey: { entityType, entityKey } },
  });
  return {
    entity,
    override: row
      ? {
          status: row.status,
          provenance: row.provenance,
          humanApproved: row.humanApproved,
          note: row.note,
          updatedAt: row.updatedAt.toISOString(),
        }
      : null,
  };
}
