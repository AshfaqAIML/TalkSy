/**
 * Examination content governance — the content registry (PROMPT 55 §1).
 *
 * One projection lists every entity administrators must manage across the
 * IELTS and TOEFL academies: examinations, examination versions
 * (specifications), preparation pathways, courses, modules, chapters,
 * lessons, exercises, questions, audio, passages, model answers, rubrics
 * and mock examinations.
 *
 * Two sources feed the registry:
 *   - database systems (CMS courses/lessons/questions, mock library,
 *     rubrics, assets, specs, pathways) — the delivery truth;
 *   - the practice libraries (PROMPT 54's 950-item unified bank: exercises,
 *     reading passages, reference model answers) — machine-validated code
 *     content served through the established safe projections.
 *
 * Every entity carries BOTH truths next to each other:
 *   - delivery (live / sourceStatus): can learners see it right now?
 *   - governance (status / provenance / humanApproved): how far through the
 *     six-stage human pipeline has it travelled?
 *
 * Derived defaults are honest by construction: TalkSy original content is
 * ai-generated and starts at "draft" in the pipeline no matter how live it
 * is — the only exceptions are lessons whose PROMPT 35 reviewStatus survived
 * the seeder's byte-identical rule (human-reviewed / approved). Staff
 * overrides (ExamContentReview rows, created only through workflow.ts)
 * then take precedence, with stale-override detection: if the source was
 * edited after the last governance decision, the override is demoted and
 * flagged instead of silently claiming approval.
 */

import { db } from "@/lib/db";
import { ASSEMBLED_SET_KINDS } from "../types";
import { COLLECTIONS } from "../admin/collections";
import { QUESTION_BANK } from "@/data/exams/question-bank";
import type { UnifiedBankItem } from "@/data/exams/question-bank";
import {
  GOVERNANCE_ENTITY_TYPES,
  GOVERNANCE_STATUSES,
  type GovernanceEntityDto,
  type GovernanceEntityType,
  type GovernanceProvenance,
  type GovernanceRegistryFilters,
  type GovernanceRegistryResult,
  type GovernanceStatus,
} from "./types";

// ---------------------------------------------------------------------------
// Static roots
// ---------------------------------------------------------------------------

const EXAMINATIONS: { key: "IELTS" | "TOEFL_IBT"; title: string; note: string }[] = [
  { key: "IELTS", title: "IELTS — International English Language Testing System", note: "Academic and General Training variants; band scale 0–9." },
  { key: "TOEFL_IBT", title: "TOEFL iBT (2026 format)", note: "Band scale 1–6; partly-adaptive reading and listening." },
];

/** CMS course slugs belonging to the examination academies: the four
 * content collections' courses plus the TOEFL masterclass course (which the
 * collection model intentionally leaves out — TOEFL pathways/mocks are its
 * inventory — but governance must still cover its lessons, chapters and
 * modules). */
export const TOEFL_COURSE_SLUG = "toefl-ibt-academy";
export const EXAM_COURSE_SLUGS: string[] = [
  ...new Set([...COLLECTIONS.flatMap((c) => c.courseSlugs), TOEFL_COURSE_SLUG]),
];

/** Resolve the examination a course belongs to (governance scope). */
export function examKeyForCourseSlug(slug: string): "IELTS" | "TOEFL_IBT" | null {
  const collection = COLLECTIONS.find((c) => c.courseSlugs.includes(slug));
  if (collection) return collection.examKey;
  return slug === TOEFL_COURSE_SLUG ? "TOEFL_IBT" : null;
}

/** Collection label for display (governance scope). */
export function collectionLabelForCourse(slug: string): string {
  const collection = COLLECTIONS.find((c) => c.courseSlugs.includes(slug));
  if (collection) return collection.name;
  return slug === TOEFL_COURSE_SLUG ? "TOEFL iBT" : "Exam academy";
}

// ---------------------------------------------------------------------------
// Derived pipeline defaults (before overrides)
// ---------------------------------------------------------------------------

/**
 * PROMPT 35 lesson review status → pipeline position. "ai-reviewed" maps to
 * draft: an AI pass is not a human stage. human-reviewed (a teacher signed
 * the content off educationally, and the seeder's byte-identical rule kept
 * it) maps to examination-review — the next stage it is waiting on.
 */
export function derivedLessonStatus(
  reviewStatus: string,
  status: string,
  live: boolean,
): GovernanceStatus {
  if (reviewStatus === "approved") return live ? "published" : "approved";
  if (reviewStatus === "human-reviewed") return live ? "approved" : "examination-review";
  if (status === "review") return "educational-review";
  return "draft";
}

/** Mock-question review state → pipeline position (PROMPT 51 workflow). */
export function derivedMockQuestionStatus(contentStatus: string): GovernanceStatus {
  switch (contentStatus) {
    case "in-review":
      return "educational-review";
    case "approved":
      return "approved";
    case "published":
      return "published";
    default:
      return "draft";
  }
}

/** CMS question-bank status → pipeline position. */
export function derivedCmsQuestionStatus(status: string): GovernanceStatus {
  switch (status) {
    case "review":
      return "educational-review";
    case "approved":
      return "approved";
    case "published":
      return "published";
    default:
      return "draft";
  }
}

/** Mock / course / pathway working statuses → pipeline position. */
export function derivedLifecycleStatus(
  status: string,
  live: boolean,
): GovernanceStatus {
  if (live || status === "published") return "published";
  if (status === "review") return "educational-review";
  if (status === "approved") return "approved";
  return "draft";
}

// ---------------------------------------------------------------------------
// Override application
// ---------------------------------------------------------------------------

type OverrideRow = {
  entityType: string;
  entityKey: string;
  status: string;
  provenance: string;
  humanApproved: boolean;
  note: string;
  updatedAt: Date;
};

function isGovernanceStatus(value: string): value is GovernanceStatus {
  return (GOVERNANCE_STATUSES as readonly string[]).includes(value);
}

function isProvenance(value: string): value is GovernanceProvenance {
  return ["ai-generated", "ai-assisted", "human-authored"].includes(value);
}

export interface EffectiveGovernance {
  status: GovernanceStatus;
  provenance: GovernanceProvenance;
  humanApproved: boolean;
  note?: string;
  staleOverride: boolean;
}

/**
 * Apply the staff override on top of the derived default. If the source
 * content was edited AFTER the last governance decision, a claiming
 * override (approved/published) is demoted to draft and flagged — approval
 * never silently survives a content change.
 */
export function effectiveGovernance(input: {
  entityType: GovernanceEntityType;
  entityKey: string;
  overrides: Map<string, OverrideRow>;
  derivedStatus: GovernanceStatus;
  derivedHumanApproved: boolean;
  sourceUpdatedAt?: Date | null;
}): EffectiveGovernance {
  const key = `${input.entityType}:${input.entityKey}`;
  const override = input.overrides.get(key);
  const derived: EffectiveGovernance = {
    status: input.derivedStatus,
    provenance: "ai-generated",
    humanApproved: input.derivedHumanApproved,
    staleOverride: false,
  };
  if (!override) return derived;

  const status = isGovernanceStatus(override.status) ? override.status : derived.status;
  const editedAfterDecision =
    input.sourceUpdatedAt != null && input.sourceUpdatedAt > override.updatedAt;
  const claimStale =
    editedAfterDecision && (status === "approved" || status === "published");

  return {
    status: claimStale ? "draft" : status,
    provenance: isProvenance(override.provenance) ? override.provenance : "ai-generated",
    humanApproved: claimStale ? false : override.humanApproved || input.derivedHumanApproved,
    note: override.note || undefined,
    staleOverride: claimStale,
  };
}

// ---------------------------------------------------------------------------
// Registry construction
// ---------------------------------------------------------------------------

async function loadOverrideRows(): Promise<Map<string, OverrideRow>> {
  const rows = await db.examContentReview.findMany();
  const map = new Map<string, OverrideRow>();
  for (const row of rows) {
    map.set(`${row.entityType}:${row.entityKey}`, {
      entityType: row.entityType,
      entityKey: row.entityKey,
      status: row.status,
      provenance: row.provenance,
      humanApproved: row.humanApproved,
      note: row.note,
      updatedAt: row.updatedAt,
    });
  }
  return map;
}

function parseJsonArray(raw: string | null | undefined): string[] {
  if (!raw) return [];
  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed.filter((x): x is string => typeof x === "string") : [];
  } catch {
    return [];
  }
}

/** Build every registry entity (grouped by type, in display order). */
export async function buildGovernanceEntities(): Promise<{
  byType: Record<GovernanceEntityType, GovernanceEntityDto[]>;
  overrides: Map<string, OverrideRow>;
}> {
  const overrides = await loadOverrideRows();
  const byType = Object.fromEntries(
    GOVERNANCE_ENTITY_TYPES.map((t) => [t, [] as GovernanceEntityDto[]]),
  ) as Record<GovernanceEntityType, GovernanceEntityDto[]>;

  const apply = (
    entityType: GovernanceEntityType,
    entityKey: string,
    derivedStatus: GovernanceStatus,
    derivedHumanApproved: boolean,
    sourceUpdatedAt: Date | null | undefined,
  ) => effectiveGovernance({ entityType, entityKey, overrides, derivedStatus, derivedHumanApproved, sourceUpdatedAt });

  // --- Examinations (informational roots) -------------------------------
  for (const exam of EXAMINATIONS) {
    byType.examination.push({
      entityType: "examination",
      entityKey: exam.key,
      title: exam.title,
      subtitle: exam.note,
      examKey: exam.key,
      status: "published",
      provenance: "human-authored",
      humanApproved: true,
      live: true,
      sourceStatus: "active",
      source: "spec",
      meta: { note: "Managed through the specification versions below." },
    });
  }

  // --- Examination versions (specifications) ----------------------------
  const specs = await db.testSpecification.findMany({
    orderBy: [{ examKey: "asc" }, { variant: "asc" }, { version: "desc" }],
  });
  for (const spec of specs) {
    const governance = apply(
      "spec",
      spec.id,
      derivedLifecycleStatus(spec.status, false),
      false,
      spec.updatedAt,
    );
    byType.spec.push({
      entityType: "spec",
      entityKey: spec.id,
      title: `${spec.name} — version ${spec.version}`,
      subtitle: `${spec.examKey === "IELTS" ? "IELTS" : "TOEFL iBT"} · ${spec.variant} · effective ${spec.effectiveDate.toISOString().slice(0, 10)}`,
      examKey: spec.examKey === "TOEFL_IBT" ? "TOEFL_IBT" : "IELTS",
      status: governance.status,
      provenance: governance.provenance,
      humanApproved: governance.humanApproved,
      live: spec.status === "active",
      sourceStatus: spec.status,
      source: "spec",
      note: governance.note,
      updatedAt: governance.staleOverride ? undefined : spec.updatedAt.toISOString(),
      meta: {
        version: spec.version,
        effectiveDate: spec.effectiveDate.toISOString().slice(0, 10),
        lastReviewedAt: spec.lastReviewedAt.toISOString().slice(0, 10),
        ...(spec.reviewDueAt
          ? { reviewDueAt: spec.reviewDueAt.toISOString().slice(0, 10), reviewOverdue: spec.reviewDueAt < new Date() }
          : {}),
        ...(governance.staleOverride ? { staleOverride: true } : {}),
      },
    });
  }

  // --- Preparation pathways ----------------------------------------------
  const pathways = await db.examPathway.findMany({
    orderBy: [{ examKey: "asc" }, { variant: "asc" }],
    include: { _count: { select: { modules: true } } },
  });
  for (const pathway of pathways) {
    const governance = apply("pathway", pathway.id, derivedLifecycleStatus(pathway.status, pathway.status === "published"), false, null);
    byType.pathway.push({
      entityType: "pathway",
      entityKey: pathway.id,
      title: pathway.title,
      subtitle: `${pathway.examKey === "IELTS" ? "IELTS" : "TOEFL iBT"} · ${pathway.variant} · ${pathway._count.modules} modules`,
      examKey: pathway.examKey === "TOEFL_IBT" ? "TOEFL_IBT" : "IELTS",
      status: governance.status,
      provenance: governance.provenance,
      humanApproved: governance.humanApproved,
      live: pathway.status === "published",
      sourceStatus: pathway.status,
      source: "pathway",
      note: governance.note,
      meta: { modules: pathway._count.modules, ...(governance.staleOverride ? { staleOverride: true } : {}) },
    });
  }

  // --- Academy courses / modules / chapters ------------------------------
  const courses = EXAM_COURSE_SLUGS.length
    ? await db.cmsCourse.findMany({
        where: { slug: { in: EXAM_COURSE_SLUGS } },
        orderBy: { order: "asc" },
        include: {
          modules: { orderBy: { order: "asc" }, select: { slug: true, title: true, order: true, units: { select: { slug: true, title: true } } } },
        },
      })
    : [];

  for (const course of courses) {
    const governance = apply("course", course.slug, derivedLifecycleStatus(course.status, course.live), false, null);
    byType.course.push({
      entityType: "course",
      entityKey: course.slug,
      title: course.title,
      subtitle: `${collectionLabelForCourse(course.slug)} · ${course.modules.length} modules`,
      examKey: examKeyForCourseSlug(course.slug),
      status: governance.status,
      provenance: governance.provenance,
      humanApproved: governance.humanApproved,
      live: course.live,
      sourceStatus: course.status,
      source: "cms",
      note: governance.note,
      meta: { modules: course.modules.length, ...(governance.staleOverride ? { staleOverride: true } : {}) },
    });

    for (const courseModule of course.modules) {
      const moduleGovernance = apply("module", courseModule.slug, derivedLifecycleStatus(course.status, course.live), false, null);
      byType.module.push({
        entityType: "module",
        entityKey: courseModule.slug,
        title: courseModule.title,
        subtitle: `${course.title} · ${courseModule.units.length} chapters`,
        examKey: examKeyForCourseSlug(course.slug),
        status: moduleGovernance.status,
        provenance: moduleGovernance.provenance,
        humanApproved: moduleGovernance.humanApproved,
        live: course.live,
        sourceStatus: course.status,
        source: "cms",
        note: moduleGovernance.note,
        meta: { chapters: courseModule.units.length },
      });
      for (const unit of courseModule.units) {
        const unitGovernance = apply("chapter", unit.slug, derivedLifecycleStatus(course.status, course.live), false, null);
        byType.chapter.push({
          entityType: "chapter",
          entityKey: unit.slug,
          title: unit.title,
          subtitle: `${course.title} · ${courseModule.title}`,
          examKey: examKeyForCourseSlug(course.slug),
          status: unitGovernance.status,
          provenance: unitGovernance.provenance,
          humanApproved: unitGovernance.humanApproved,
          live: course.live,
          sourceStatus: course.status,
          source: "cms",
          note: unitGovernance.note,
          meta: {},
        });
      }
    }
  }

  // --- Lessons ------------------------------------------------------------
  const lessons = EXAM_COURSE_SLUGS.length
    ? await db.cmsLesson.findMany({
        where: { unit: { module: { course: { slug: { in: EXAM_COURSE_SLUGS } } } } },
        orderBy: { slug: "asc" },
        include: {
          _count: { select: { blocks: true } },
          unit: { select: { title: true, module: { select: { title: true, course: { select: { slug: true, title: true } } } } } },
        },
      })
    : [];
  for (const lesson of lessons) {
    const objectives = parseJsonArray(lesson.objectives);
    const governance = apply(
      "lesson",
      lesson.slug,
      derivedLessonStatus(lesson.reviewStatus, lesson.status, lesson.live),
      lesson.reviewStatus === "human-reviewed" || lesson.reviewStatus === "approved",
      lesson.updatedAt,
    );
    byType.lesson.push({
      entityType: "lesson",
      entityKey: lesson.slug,
      title: lesson.title,
      subtitle: `${lesson.unit.module.course.title} · ${lesson.unit.title}`,
      examKey: examKeyForCourseSlug(lesson.unit.module.course.slug) ?? "IELTS",
      status: governance.status,
      provenance: governance.provenance,
      humanApproved: governance.humanApproved,
      live: lesson.live,
      sourceStatus: lesson.reviewStatus,
      source: "cms",
      href: `#/course-lesson/${lesson.slug}`,
      note: governance.note,
      updatedAt: lesson.updatedAt.toISOString(),
      meta: {
        blocks: lesson._count.blocks,
        objectives: objectives.length,
        minutes: lesson.estimatedMinutes,
        version: lesson.version,
        ...(governance.staleOverride ? { staleOverride: true } : {}),
      },
    });
  }

  // --- Mock examinations + their questions --------------------------------
  const curatedMocks = await db.mockTest.findMany({
    where: { kind: { notIn: [...ASSEMBLED_SET_KINDS] } },
    orderBy: { title: "asc" },
    include: {
      spec: { select: { version: true, status: true } },
      _count: { select: { sections: true } },
    },
  });
  for (const mock of curatedMocks) {
    const governance = apply("mock", mock.id, derivedLifecycleStatus(mock.status, mock.status === "published"), false, mock.updatedAt);
    byType.mock.push({
      entityType: "mock",
      entityKey: mock.id,
      title: mock.title,
      subtitle: `${mock.examKey === "IELTS" ? "IELTS" : "TOEFL iBT"} · ${mock.variant} · spec v${mock.spec.version} (${mock.spec.status}) · ${mock._count.sections} sections`,
      examKey: mock.examKey === "TOEFL_IBT" ? "TOEFL_IBT" : "IELTS",
      status: governance.status,
      provenance: governance.provenance,
      humanApproved: governance.humanApproved,
      live: mock.status === "published",
      sourceStatus: mock.status,
      source: "mock-library",
      href: "#/exams/mocks",
      note: governance.note,
      meta: {
        kind: mock.kind,
        specVersion: mock.spec.version,
        specStatus: mock.spec.status,
        ...(governance.staleOverride ? { staleOverride: true } : {}),
      },
    });
  }

  const mockQuestions = await db.mockTestQuestion.findMany({
    where: { section: { mockTest: { kind: { notIn: [...ASSEMBLED_SET_KINDS] } } } },
    orderBy: { id: "asc" },
    select: {
      id: true,
      type: true,
      stem: true,
      order: true,
      contentStatus: true,
      section: {
        select: {
          key: true,
          mockTest: { select: { id: true, title: true, examKey: true, variant: true } },
        },
      },
    },
  });
  for (const question of mockQuestions) {
    const governance = apply("question", question.id, derivedMockQuestionStatus(question.contentStatus), false, null);
    byType.question.push({
      entityType: "question",
      entityKey: question.id,
      title: question.stem?.slice(0, 90) || `${question.type} · item ${question.order}`,
      subtitle: `${question.section.mockTest.title} · ${question.section.key} · ${question.type}`,
      examKey: question.section.mockTest.examKey === "TOEFL_IBT" ? "TOEFL_IBT" : "IELTS",
      status: governance.status,
      provenance: governance.provenance,
      humanApproved: governance.humanApproved,
      live: question.contentStatus === "published",
      sourceStatus: question.contentStatus,
      source: "mock-library",
      note: governance.note,
      meta: {
        type: question.type,
        mockId: question.section.mockTest.id,
        order: question.order,
        ...(governance.staleOverride ? { staleOverride: true } : {}),
      },
    });
  }

  // --- CMS exercises attached to exam lessons ------------------------------
  const examLessonSlugs = lessons.map((l) => l.slug);
  const cmsQuestions = examLessonSlugs.length
    ? await db.cmsQuestion.findMany({
        where: { lessonSlug: { in: examLessonSlugs } },
        orderBy: { slug: "asc" },
        select: { slug: true, type: true, prompt: true, status: true, lessonSlug: true, updatedAt: true },
      })
    : [];
  for (const question of cmsQuestions) {
    const governance = apply("exercise", `cmsq:${question.slug}`, derivedCmsQuestionStatus(question.status), false, question.updatedAt);
    byType.exercise.push({
      entityType: "exercise",
      entityKey: `cmsq:${question.slug}`,
      title: question.prompt.slice(0, 90) || question.slug,
      subtitle: `Lesson ${question.lessonSlug ?? "—"} · ${question.type}`,
      examKey: null,
      status: governance.status,
      provenance: governance.provenance,
      humanApproved: governance.humanApproved,
      live: question.status === "published",
      sourceStatus: question.status,
      source: "cms",
      note: governance.note,
      updatedAt: question.updatedAt.toISOString(),
      meta: { type: question.type, lesson: question.lessonSlug ?? "", ...(governance.staleOverride ? { staleOverride: true } : {}) },
    });
  }

  // --- Practice-library exercises / passages / model answers (code) --------
  // Bank items are live machine-validated content — honestly never
  // human-approved until a staff override says so (and the override is
  // applied so the workflow's transitions are reflected here too).
  const bankEntityFor = (item: UnifiedBankItem): GovernanceEntityDto => {
    const governance = apply("exercise", `bank:${item.id}`, "draft", false, null);
    return {
      entityType: "exercise",
      entityKey: `bank:${item.id}`,
      title: item.summary.slice(0, 110) || item.id,
      subtitle: `${item.exam === "ielts" ? "IELTS" : "TOEFL iBT"} · ${item.questionType} · ${item.itemCount} items · ${item.estimatedMinutes} min`,
      examKey: item.exam === "toefl" ? "TOEFL_IBT" : "IELTS",
      status: governance.status,
      provenance: governance.provenance,
      humanApproved: governance.humanApproved,
      live: true,
      sourceStatus: "machine-validated (bank QC gate)",
      source: "practice-library",
      href: item.href,
      note: governance.note,
      meta: {
        section: item.section,
        questionType: item.questionType,
        difficulty: item.difficulty,
        topic: item.topic,
        items: item.itemCount,
        answerModel: item.answerModel,
      },
    };
  };

  const bankDerived = (entityType: "passage" | "model-answer", item: UnifiedBankItem, base: GovernanceEntityDto): GovernanceEntityDto => {
    const governance = apply(entityType, `bank:${item.id}`, "draft", false, null);
    return {
      ...base,
      status: governance.status,
      provenance: governance.provenance,
      humanApproved: governance.humanApproved,
      note: governance.note,
      meta: { ...base.meta, ...(governance.staleOverride ? { staleOverride: true } : {}) },
    };
  };

  for (const item of QUESTION_BANK) {
    const exercise = bankEntityFor(item);
    byType.exercise.push(exercise);
    if (item.section === "reading") {
      byType.passage.push(
        bankDerived(
          "passage",
          item,
          {
            ...exercise,
            entityType: "passage",
            entityKey: `bank:${item.id}`,
            title: item.topicDetail ? `${item.topicDetail} — ${item.questionType}` : item.summary.slice(0, 90),
            subtitle: `${item.exam === "ielts" ? "IELTS" : "TOEFL iBT"} ${item.version} reading · ${item.itemCount} questions on this text`,
            meta: { questions: item.itemCount, topic: item.topic, minutes: item.estimatedMinutes },
          },
        ),
      );
    }
    if (item.answerModel === "rubric" && item.hasReferenceExample) {
      byType["model-answer"].push(
        bankDerived(
          "model-answer",
          item,
          {
            ...exercise,
            entityType: "model-answer",
            entityKey: `bank:${item.id}`,
            title: `Model answer — ${item.summary.slice(0, 80)}`,
            subtitle: `${item.exam === "ielts" ? "IELTS" : "TOEFL iBT"} ${item.section} · criteria: ${(item.rubricCriteria ?? []).join(", ") || "rubric"}`,
            meta: { section: item.section, criteria: (item.rubricCriteria ?? []).join(", ") },
          },
        ),
      );
    }
  }

  // --- Rubrics --------------------------------------------------------------
  const rubrics = await db.examRubric.findMany({ orderBy: { taskKey: "asc" } });
  for (const rubric of rubrics) {
    const governance = apply("rubric", rubric.id, "draft", false, null);
    byType.rubric.push({
      entityType: "rubric",
      entityKey: rubric.id,
      title: rubric.title,
      subtitle: `${rubric.examKey === "IELTS" ? "IELTS" : "TOEFL iBT"} · ${rubric.taskKey}`,
      examKey: rubric.examKey === "TOEFL_IBT" ? "TOEFL_IBT" : "IELTS",
      status: governance.status,
      provenance: governance.provenance,
      humanApproved: governance.humanApproved,
      live: true,
      sourceStatus: "in use",
      source: "rubric",
      note: governance.note,
      meta: { taskKey: rubric.taskKey },
    });
  }

  // --- Audio assets ----------------------------------------------------------
  const audioAssets = await db.cmsAsset.findMany({
    where: { kind: "audio" },
    orderBy: { title: "asc" },
    include: { relatedLesson: { select: { slug: true, title: true } } },
  });
  for (const asset of audioAssets) {
    const governance = apply("audio", asset.id, "draft", false, null);
    byType.audio.push({
      entityType: "audio",
      entityKey: asset.id,
      title: asset.title,
      subtitle: `${asset.relatedLesson ? `Lesson: ${asset.relatedLesson.title}` : "Unlinked"} · ${Math.round(asset.sizeBytes / 1024)} KB${asset.transcript ? " · transcript ✓" : " · no transcript"}`,
      examKey: null,
      status: governance.status,
      provenance: governance.provenance,
      humanApproved: governance.humanApproved,
      live: true,
      sourceStatus: "stored",
      source: "asset",
      note: governance.note,
      meta: {
        hasTranscript: asset.transcript.trim().length > 0,
        seconds: asset.durationSeconds ?? 0,
        lesson: asset.relatedLesson?.slug ?? "",
      },
    });
  }

  return { byType, overrides };
}

// ---------------------------------------------------------------------------
// Filtering / pagination
// ---------------------------------------------------------------------------

function matchesQuery(entity: GovernanceEntityDto, q: string): boolean {
  const needle = q.toLowerCase();
  return (
    entity.title.toLowerCase().includes(needle) ||
    entity.subtitle.toLowerCase().includes(needle) ||
    entity.entityKey.toLowerCase().includes(needle)
  );
}

export async function queryGovernanceRegistry(
  filters: GovernanceRegistryFilters = {},
): Promise<GovernanceRegistryResult> {
  const { byType } = await buildGovernanceEntities();

  const countsByType = Object.fromEntries(
    GOVERNANCE_ENTITY_TYPES.map((t) => [t, byType[t].length]),
  ) as Record<GovernanceEntityType, number>;

  const all = GOVERNANCE_ENTITY_TYPES.flatMap((t) => byType[t]);
  const countsByStatus = Object.fromEntries(
    GOVERNANCE_STATUSES.map((s) => [s, 0]),
  ) as Record<GovernanceStatus, number>;
  for (const entity of all) countsByStatus[entity.status] += 1;

  let pool = all;
  if (filters.entityType) pool = pool.filter((e) => e.entityType === filters.entityType);
  if (filters.status) pool = pool.filter((e) => e.status === filters.status);
  if (filters.unapprovedOnly) pool = pool.filter((e) => !e.humanApproved);
  if (filters.liveUnapprovedOnly) {
    pool = pool.filter((e) => e.live && !e.humanApproved);
  }
  const query = filters.q?.trim();
  if (query) pool = pool.filter((e) => matchesQuery(e, query));

  const pageSize = Math.min(Math.max(filters.pageSize ?? 50, 10), 100);
  const pageCount = Math.max(1, Math.ceil(pool.length / pageSize));
  const page = Math.min(Math.max(filters.page ?? 1, 1), pageCount);
  const entities = pool.slice((page - 1) * pageSize, page * pageSize);

  return {
    entities,
    total: pool.length,
    page,
    pageCount,
    pageSize,
    countsByType,
    countsByStatus,
  };
}

/** Look up one registry entity (workflow.ts verifies existence with this). */
export async function findGovernanceEntity(
  entityType: GovernanceEntityType,
  entityKey: string,
): Promise<GovernanceEntityDto | null> {
  const { byType } = await buildGovernanceEntities();
  return byType[entityType]?.find((e) => e.entityKey === entityKey) ?? null;
}
