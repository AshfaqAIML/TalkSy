/**
 * Test specification service — the ONLY way the rest of the app reads or
 * writes exam format rules (ADR: no component may hardcode exam rules).
 *
 * Versioning workflow (admin):
 *   draft → active (exactly one per exam+variant; the previous active row
 *   is retired automatically) → retired (history kept; attempts pin the
 *   spec they were built with, so old results stay interpretable).
 */

import { db } from "@/lib/db";
import {
  specPayloadSchema,
  type ExamKey,
  type SpecDto,
  type SpecPayload,
} from "./types";

type SpecRow = {
  id: string;
  examKey: string;
  variant: string;
  name: string;
  version: number;
  status: string;
  effectiveDate: Date;
  lastReviewedAt: Date;
  sections: string;
  scoringModel: string;
  taskTypes: string;
  sourceRefs: string;
  notes: string | null;
};

export function toDto(row: SpecRow): SpecDto {
  const payload: SpecPayload = specPayloadSchema.parse({
    sections: JSON.parse(row.sections),
    scoringModel: JSON.parse(row.scoringModel),
    taskTypes: JSON.parse(row.taskTypes),
    sourceRefs: JSON.parse(row.sourceRefs),
  });
  return {
    id: row.id,
    examKey: row.examKey as ExamKey,
    variant: row.variant,
    name: row.name,
    version: row.version,
    status: (row.status as SpecDto["status"]) ?? "draft",
    effectiveDate: row.effectiveDate.toISOString(),
    lastReviewedAt: row.lastReviewedAt.toISOString(),
    sections: payload.sections,
    scoringModel: payload.scoringModel,
    taskTypes: payload.taskTypes,
    sourceRefs: payload.sourceRefs,
    notes: row.notes,
  };
}

export async function listSpecs(examKey?: ExamKey): Promise<SpecDto[]> {
  const rows = await db.testSpecification.findMany({
    where: examKey ? { examKey } : undefined,
    orderBy: [{ examKey: "asc" }, { variant: "asc" }, { version: "desc" }],
  });
  return rows.map(toDto);
}

export async function getActiveSpec(
  examKey: ExamKey,
  variant = "STANDARD",
): Promise<SpecDto | null> {
  const row = await db.testSpecification.findFirst({
    where: { examKey, variant, status: "active" },
    orderBy: { version: "desc" },
  });
  return row ? toDto(row) : null;
}

export async function getSpecById(id: string): Promise<SpecDto | null> {
  const row = await db.testSpecification.findUnique({ where: { id } });
  return row ? toDto(row) : null;
}

/** All exams a learner can start preparing for (one card per variant). */
export async function listSelectableExams(): Promise<
  Array<{ spec: SpecDto; mockCount: number; pathwayCount: number }>
> {
  const combos: Array<{ examKey: ExamKey; variant: string }> = [
    { examKey: "IELTS", variant: "ACADEMIC" },
    { examKey: "IELTS", variant: "GENERAL_TRAINING" },
    { examKey: "TOEFL_IBT", variant: "STANDARD" },
  ];
  const out: Array<{ spec: SpecDto; mockCount: number; pathwayCount: number }> = [];
  for (const combo of combos) {
    const spec = await getActiveSpec(combo.examKey, combo.variant);
    if (!spec) continue;
    const [mockCount, pathwayCount] = await Promise.all([
      db.mockTest.count({
        where: { examKey: combo.examKey, variant: combo.variant, status: "published" },
      }),
      db.examPathway.count({
        where: { examKey: combo.examKey, variant: combo.variant, status: "published" },
      }),
    ]);
    out.push({ spec, mockCount, pathwayCount });
  }
  return out;
}

// ---------------------------------------------------------------------------
// Admin writes
// ---------------------------------------------------------------------------

export type SpecWriteInput = {
  examKey: ExamKey;
  variant: string;
  name: string;
  effectiveDate: Date;
  lastReviewedAt?: Date;
  notes?: string | null;
  payload: SpecPayload; // already validated upstream
};

async function nextVersion(examKey: string, variant: string): Promise<number> {
  const top = await db.testSpecification.findFirst({
    where: { examKey, variant },
    orderBy: { version: "desc" },
    select: { version: true },
  });
  return (top?.version ?? 0) + 1;
}

/** Create a new draft spec (version auto-increments per exam+variant). */
export async function createSpecDraft(input: SpecWriteInput): Promise<SpecDto> {
  const version = await nextVersion(input.examKey, input.variant);
  const row = await db.testSpecification.create({
    data: {
      examKey: input.examKey,
      variant: input.variant,
      name: input.name,
      version,
      status: "draft",
      effectiveDate: input.effectiveDate,
      lastReviewedAt: input.lastReviewedAt ?? new Date(),
      sections: JSON.stringify(input.payload.sections),
      scoringModel: JSON.stringify(input.payload.scoringModel),
      taskTypes: JSON.stringify(input.payload.taskTypes),
      sourceRefs: JSON.stringify(input.payload.sourceRefs),
      notes: input.notes ?? null,
    },
  });
  return toDto(row);
}

/** Edit a DRAFT spec (published history is immutable). */
export async function updateSpecDraft(
  id: string,
  patch: Partial<SpecWriteInput>,
): Promise<SpecDto | null> {
  const current = await db.testSpecification.findUnique({ where: { id } });
  if (!current) return null;
  if (current.status !== "draft") {
    throw new Error("Only draft specifications can be edited. Create a new version instead.");
  }
  const merged = specPayloadSchema.parse({
    sections: patch.payload
      ? patch.payload.sections
      : JSON.parse(current.sections),
    scoringModel: patch.payload
      ? patch.payload.scoringModel
      : JSON.parse(current.scoringModel),
    taskTypes: patch.payload
      ? patch.payload.taskTypes
      : JSON.parse(current.taskTypes),
    sourceRefs: patch.payload ? patch.payload.sourceRefs : JSON.parse(current.sourceRefs),
  });
  const row = await db.testSpecification.update({
    where: { id },
    data: {
      name: patch.name ?? current.name,
      effectiveDate: patch.effectiveDate ?? current.effectiveDate,
      lastReviewedAt: patch.lastReviewedAt ?? current.lastReviewedAt,
      notes: patch.notes !== undefined ? patch.notes : current.notes,
      sections: JSON.stringify(merged.sections),
      scoringModel: JSON.stringify(merged.scoringModel),
      taskTypes: JSON.stringify(merged.taskTypes),
      sourceRefs: JSON.stringify(merged.sourceRefs),
    },
  });
  return toDto(row);
}

/** Activate a draft: the previously active spec (if any) is retired. */
export async function activateSpec(id: string): Promise<SpecDto | null> {
  const draft = await db.testSpecification.findUnique({ where: { id } });
  if (!draft) return null;
  if (draft.status !== "draft") {
    throw new Error("Only draft specifications can be activated.");
  }
  await db.testSpecification.updateMany({
    where: { examKey: draft.examKey, variant: draft.variant, status: "active" },
    data: { status: "retired" },
  });
  const row = await db.testSpecification.update({
    where: { id },
    data: { status: "active", lastReviewedAt: new Date() },
  });
  return toDto(row);
}

/** Retire an active spec (emergency rollback to the previous version). */
export async function retireSpec(id: string): Promise<SpecDto | null> {
  const current = await db.testSpecification.findUnique({ where: { id } });
  if (!current) return null;
  if (current.status !== "active") {
    throw new Error("Only active specifications can be retired.");
  }
  // Restore the newest retired version, if one exists.
  const previous = await db.testSpecification.findFirst({
    where: {
      examKey: current.examKey,
      variant: current.variant,
      status: "retired",
      version: { lt: current.version },
    },
    orderBy: { version: "desc" },
  });
  if (previous) {
    await db.testSpecification.update({
      where: { id: previous.id },
      data: { status: "active" },
    });
  }
  const row = await db.testSpecification.update({
    where: { id },
    data: { status: "retired" },
  });
  return toDto(row);
}

export async function logSpecAction(
  actorId: string | null,
  action: string,
  specId: string,
  detail: Record<string, unknown>,
): Promise<void> {
  await db.cmsAuditLog.create({
    data: {
      actorId,
      action,
      entityType: "exam_spec",
      entityId: specId,
      detail: JSON.stringify(detail),
    },
  });
}

// ---------------------------------------------------------------------------
// IELTS for UKVI delivery context (official guidance)
// ---------------------------------------------------------------------------

/**
 * IELTS for UKVI is the SAME test as standard IELTS — identical design,
 * format and difficulty — taken in person at an official UKVI centre as a
 * Secure English Language Test. It changes registration and delivery
 * expectations, never the test rules, so the academy runs the same
 * specifications, mocks and pathways for both deliveries.
 */
export const UKVI_DELIVERY = {
  key: "UKVI",
  label: "IELTS for UKVI (Academic or General Training)",
  appliesTo: ["IELTS"] as const,
  variants: ["ACADEMIC", "GENERAL_TRAINING"] as const,
  sameFormatAsStandard: true,
  summary:
    "A Secure English Language Test (SELT): the same IELTS test — format, timing and difficulty — taken in person at an official IELTS for UKVI test centre, with the Test Report Form marked for UKVI purposes.",
  guidance: [
    "Choose UKVI only when your visa route requires a SELT; many sponsors and universities accept standard IELTS instead — check with them before booking.",
    "The test itself is identical to standard IELTS, so preparation here is the same: same specifications, same mock library, same pathways.",
    "It must be taken in person at an official IELTS for UKVI test centre — there is no home edition.",
    "Component minimums are set by the visa route (for example 4.0 in every component at B1, 5.5 at B2, 7.0 at C1), so set a target score per component, not just overall.",
    "IELTS Life Skills (A1/A2/B1) is a different two-skill test (speaking and listening, Pass result) and is not covered by these four-skill mocks.",
    "Confirm retake options with your test centre before booking — visa routes treat retakes differently.",
  ],
  sourceLabel: "IELTS official — Tests for UK Visas and Immigration",
  sourceUrl: "https://ielts.org/take-a-test/test-types/ielts-tests-for-uk-visas-and-immigration",
} as const;
