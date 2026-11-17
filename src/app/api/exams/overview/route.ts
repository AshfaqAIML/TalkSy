import { getSessionUser } from "@/lib/auth";
import { json, jsonError } from "@/lib/api-helpers";
import { listSelectableExams, listSpecs, UKVI_DELIVERY } from "@/lib/exams/specs";
import { EXAM_LABELS, VARIANT_LABELS, type ExamKey } from "@/lib/exams/types";

/**
 * GET /api/exams/overview — the academy landing data: available
 * examinations (one card per exam variant, from active test
 * specifications) plus the currently active spec for each exam family,
 * plus the IELTS for UKVI delivery context (same test, SELT delivery).
 */
export async function GET(req: Request) {
  const user = await getSessionUser(req);
  if (!user) return jsonError("Please log in.", 401);

  const url = new URL(req.url);
  const examKey = url.searchParams.get("examKey") as ExamKey | null;
  const specs = await listSpecs(examKey ?? undefined);

  const selectable = await listSelectableExams();
  return json({
    exams: selectable.map((entry) => ({
      examKey: entry.spec.examKey,
      examLabel: EXAM_LABELS[entry.spec.examKey],
      variant: entry.spec.variant,
      variantLabel: VARIANT_LABELS[entry.spec.variant] ?? entry.spec.variant,
      name: entry.spec.name,
      specVersion: entry.spec.version,
      effectiveDate: entry.spec.effectiveDate.slice(0, 10),
      lastReviewedAt: entry.spec.lastReviewedAt.slice(0, 10),
      totalSections: entry.spec.sections.length,
      sections: entry.spec.sections.map((section) => ({
        key: section.key,
        label: section.label,
        timingSec: section.timingSec,
        questionCount: section.questionCount,
        taskTypes: section.taskTypes,
        adaptive: section.adaptive ?? null,
        delivery: section.delivery ?? null,
        navigation: section.navigation ?? null,
      })),
      scoringKind: entry.spec.scoringModel.kind,
      maxSectionScore: entry.spec.scoringModel.maxSectionScore,
      validityMonths: entry.spec.scoringModel.validityMonths,
      transitionNote: entry.spec.scoringModel.transitionNote ?? null,
      mockCount: entry.mockCount,
      hasPathway: entry.pathwayCount > 0,
      sourceRefs: entry.spec.sourceRefs,
    })),
    ukvi: UKVI_DELIVERY,
    specs,
  });
}
