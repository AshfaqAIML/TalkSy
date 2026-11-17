/**
 * Specification version workflow.
 *
 * The seven-step format-change workflow (admin console "Exam blueprints"):
 *   1. Create a new examination version — createSpecDraft (specs.ts),
 *      version auto-increments, starts as draft.
 *   2. Update section configurations — updateSpecDraft (sections, timing,
 *      question counts, instructions/directions).
 *   3. Update scoring rules — the same draft edit (scoring model).
 *   4. Review existing questions — specImpactReport() lists every question
 *      whose type disappeared from the new catalog and every mock still
 *      pinned to an older version.
 *   5. Update mock examinations — relinkMocksToSpec() repoints the exam's
 *      mocks to the new version (a future attempt then runs the new
 *      format).
 *   6. Publish the new specification — activateSpec() (admin); the
 *      previous active version retires automatically.
 *   7. Retain historical versions — retired rows are immutable and every
 *      historical attempt keeps its pinned specId, so old results stay
 *      interpretable. Active/retired specs refuse edits (specs.ts) — a
 *      spec associated with attempts is never silently changed.
 */

import { db } from "@/lib/db";
import { getActiveSpec, getSpecById, logSpecAction } from "../specs";
import { ASSEMBLED_SET_KINDS } from "../types";
import { AdminServiceError } from "./questions";
import type { SpecImpactDto } from "./types";

const ASSEMBLED_KINDS = ASSEMBLED_SET_KINDS;

/**
 * Impact of publishing a draft spec, compared with the current active
 * version: task types that disappear (and the questions using them),
 * published mocks still pinned to older versions, and how many historical
 * attempts live on the previous spec (informational — never blocked).
 */
export async function specImpactReport(specId: string): Promise<SpecImpactDto> {
  const spec = await getSpecById(specId);
  if (!spec) throw new AdminServiceError("Specification not found.", 404);

  const active = await getActiveSpec(spec.examKey as "IELTS" | "TOEFL_IBT", spec.variant);
  const catalogTypes = new Set(spec.taskTypes.map((task) => task.type));
  // Only types the PREVIOUS ACTIVE version offered that this draft drops
  // count as removed: a faithful copy of the active catalog removes
  // nothing, so practice drills using engine-only formats (e.g. DICTATION)
  // that were never part of the official catalog are not reported as
  // impacted by this change. With no previous version nothing can have
  // been removed either.
  const removedTypeSet = new Set(
    (active?.taskTypes ?? [])
      .map((task) => task.type)
      .filter((type) => !catalogTypes.has(type)),
  );

  // Questions of this exam+variant using a type the draft removes.
  const questions = removedTypeSet.size
    ? await db.mockTestQuestion.findMany({
        where: {
          type: { in: [...removedTypeSet] },
          section: {
            mockTest: {
              examKey: spec.examKey,
              variant: spec.variant,
              kind: { notIn: ASSEMBLED_KINDS as unknown as string[] },
            },
          },
        },
        include: {
          section: { select: { mockTest: { select: { title: true } } } },
        },
        take: 200,
      })
    : [];

  const removedTypeCounts = new Map<string, number>();
  for (const question of questions) {
    removedTypeCounts.set(question.type, (removedTypeCounts.get(question.type) ?? 0) + 1);
  }

  // Published curated mocks for this exam+variant and their spec versions.
  const mocks = await db.mockTest.findMany({
    where: {
      examKey: spec.examKey,
      variant: spec.variant,
      kind: { notIn: ASSEMBLED_KINDS as unknown as string[] },
      status: "published",
    },
    include: { spec: { select: { version: true } } },
  });
  const staleMocks = mocks
    .filter((mock) => mock.specId !== spec.id)
    .map((mock) => ({ id: mock.id, title: mock.title, specVersion: mock.spec.version }));

  // Historical attempts pinned to the previous active spec — kept as-is.
  const attemptsOnPreviousSpec = active
    ? await db.mockTestAttempt.count({
        where: { specId: active.id, status: { in: ["submitted", "scored"] } },
      })
    : 0;

  return {
    spec: {
      id: spec.id,
      name: spec.name,
      examKey: spec.examKey,
      variant: spec.variant,
      version: spec.version,
      status: spec.status,
    },
    previousActive: active ? { id: active.id, version: active.version } : null,
    removedTaskTypes: [...removedTypeCounts.entries()]
      .map(([type, questionCount]) => ({ type, questionCount }))
      .sort((a, b) => b.questionCount - a.questionCount),
    affectedQuestions: questions.slice(0, 50).map((question) => ({
      id: question.id,
      mockTitle: question.section.mockTest.title,
      type: question.type,
      contentStatus: question.contentStatus,
    })),
    affectedQuestionCount: questions.length,
    staleMocks,
    staleMockCount: staleMocks.length,
    attemptsOnPreviousSpec,
  };
}

/**
 * Step 5 — repoint this exam+variant's curated mocks to the target spec
 * (draft or active). Future attempts run the new format; historical
 * attempts keep their own pinned specId, and assembled practice sets are
 * left alone (they already pin the active spec at assembly time).
 */
export async function relinkMocksToSpec(
  actorId: string,
  toSpecId: string,
): Promise<{ relinked: number; skipped: number; specVersion: number }> {
  const spec = await getSpecById(toSpecId);
  if (!spec) throw new AdminServiceError("Specification not found.", 404);
  if (spec.status === "retired") {
    throw new AdminServiceError("Cannot relink mocks to a retired specification.", 409);
  }

  const mocks = await db.mockTest.findMany({
    where: {
      examKey: spec.examKey,
      variant: spec.variant,
      kind: { notIn: ASSEMBLED_KINDS as unknown as string[] },
      specId: { not: spec.id },
    },
    select: { id: true, title: true, specId: true },
  });
  if (mocks.length === 0) {
    return { relinked: 0, skipped: 0, specVersion: spec.version };
  }

  const result = await db.mockTest.updateMany({
    where: { id: { in: mocks.map((mock) => mock.id) } },
    data: { specId: spec.id },
  });

  await logSpecAction(actorId, "exam_spec.relink_mocks", spec.id, {
    toVersion: spec.version,
    relinked: result.count,
    mocks: mocks.map((mock) => mock.title).slice(0, 25),
  });

  return { relinked: result.count, skipped: mocks.length - result.count, specVersion: spec.version };
}

/**
 * Publication gate for mock tests: a mock can only be published when every
 * one of its questions is published (the human-approval chain completed).
 * Returns the violation counts when blocked.
 */
export async function assertMockPublishable(
  mockId: string,
): Promise<{ ok: true } | { ok: false; blocking: Record<string, number> }> {
  const questions = await db.mockTestQuestion.findMany({
    where: { section: { mockTestId: mockId } },
    select: { contentStatus: true },
  });
  const blocking: Record<string, number> = {};
  for (const question of questions) {
    if (question.contentStatus !== "published") {
      blocking[question.contentStatus] = (blocking[question.contentStatus] ?? 0) + 1;
    }
  }
  if (Object.keys(blocking).length === 0) return { ok: true };
  return { ok: false, blocking };
}
