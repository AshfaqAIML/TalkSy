/**
 * Examination content governance — content completeness (PROMPT 55 §7).
 *
 * A course must not be labelled complete merely because its chapter records
 * exist. Readiness is measured against six dimensions, each computed from
 * the real content:
 *
 *   1. lessons-complete     — every lesson is genuinely complete (teaching
 *                             + practice + objectives + summary), none is a
 *                             placeholder shell.
 *   2. practice             — every lesson carries answerable practice.
 *   3. answer-keys          — every exercise in the course has a verified
 *                             (present + valid) answer key, re-checked by
 *                             the validation engine scoped to the course.
 *   4. assessments          — the course has assessment chapter(s) or a
 *                             published mock library for its exam.
 *   5. learning-outcomes    — every lesson declares learning objectives.
 *   6. review-status        — every lesson has been human-approved through
 *                             the governance pipeline (or the PROMPT 35
 *                             review that survived the seeder's honesty
 *                             rule).
 *
 * Readiness levels:
 *   ready           — all six dimensions pass.
 *   needs-attention — content is complete but assessment coverage or human
 *                     review is missing (the two dimensions that flag
 *                     process, not substance).
 *   not-ready       — any substance dimension fails.
 */

import { db } from "@/lib/db";
import { COLLECTIONS } from "../admin/collections";
import { examKeyForCourseSlug, collectionLabelForCourse } from "./registry";
import { runQuestionValidation } from "./validate";
import { buildGovernanceEntities } from "./registry";
import type { GovernanceEntityDto } from "./types";
import type {
  CourseReadinessDto,
  CourseReadinessDimensionDto,
  LessonCompletenessDto,
} from "./types";

// ---------------------------------------------------------------------------
// Lesson classification
// ---------------------------------------------------------------------------

const TEACHING_BLOCK_TYPES = new Set([
  "text", "heading", "definition", "example", "table", "grammar-table",
  "vocabulary-list", "grammar-rule", "dialogue", "sentence-diagram", "image",
  "audio", "video", "passage", "transcript", "model-answer", "lesson-intro",
  "steps", "usage", "comparison", "mistakes", "four-skills", "note", "warning",
]);

type BlockJson = Record<string, unknown>;

export interface LessonClassificationInput {
  slug: string;
  title: string;
  live: boolean;
  estimatedMinutes: number;
  objectives: string[];
  blocks: Array<{ type: string; data: BlockJson }>;
  /** Exercises referenced by practice blocks that exist and are published. */
  resolvableExerciseIds: string[];
  humanApproved: boolean;
}

/**
 * Measure the real textual substance of a block — every string field counts
 * (text, rule, definition, but also table headers/rows, step titles, example
 * items, dialogue lines, vocabulary entries…). The original PROMPT 55
 * version only looked at text/rule/definition, which under-counted lessons
 * whose teaching lives in tables, steps and worked examples; the PROMPT 56
 * final audit caught 11 rich lessons mis-flagged as thin that way.
 */
function blockTextLength(data: BlockJson): number {
  let length = 0;
  const add = (v: unknown): void => {
    if (typeof v === "string") length += v.trim().length;
    else if (Array.isArray(v)) v.forEach(add);
    else if (v && typeof v === "object") Object.values(v).forEach(add);
  };
  add(Object.values(data));
  return length;
}

/**
 * Classify one lesson: complete / partial / placeholder, with concrete
 * reasons. A placeholder is a lesson record with no real content — the
 * "chapter records exist" trap PROMPT 55 §7 calls out.
 */
export function classifyLesson(lesson: LessonClassificationInput): LessonCompletenessDto {
  const reasons: string[] = [];
  const hasObjectives = lesson.objectives.filter((o) => o.trim()).length >= 2;
  const hasSummary = lesson.blocks.some(
    (b) =>
      b.type === "summary" &&
      Array.isArray(b.data.points) &&
      b.data.points.some((p) => typeof p === "string" && p.trim()),
  );

  const teachingBlocks = lesson.blocks.filter(
    (b) => TEACHING_BLOCK_TYPES.has(b.type) && blockTextLength(b.data) > 0,
  );
  const hasTeaching = teachingBlocks.length >= 3;

  const practiceBlocks = lesson.blocks.filter((b) => b.type === "practice");
  const resolvable = new Set(lesson.resolvableExerciseIds);
  let exerciseCount = 0;
  const attachedPractice = practiceBlocks.filter((b) =>
    (Array.isArray(b.data.exerciseIds) ? b.data.exerciseIds : []).some(
      (id) => {
        if (typeof id === "string" && resolvable.has(id)) {
          exerciseCount += 1;
          return true;
        }
        return false;
      },
    ),
  );
  const hasAssignment = lesson.blocks.some(
    (b) => b.type === "assignment" && typeof b.data.instructions === "string" && b.data.instructions.trim(),
  );
  const hasRevision = lesson.blocks.some(
    (b) => b.type === "revision" && Array.isArray(b.data.items) && b.data.items.length > 0,
  );
  const hasHomework = lesson.blocks.some(
    (b) => b.type === "homework" && Array.isArray(b.data.tasks) && b.data.tasks.some((t) => typeof t === "string" && t.trim()),
  );
  const hasPractice = attachedPractice.length > 0 || hasAssignment || hasRevision || hasHomework;

  const blockCount = lesson.blocks.length;

  let completeness: LessonCompletenessDto["completeness"];
  if (blockCount === 0) {
    completeness = "placeholder";
    reasons.push("No content blocks — the lesson record exists but nothing was authored.");
  } else if (!hasTeaching && !hasPractice) {
    completeness = "placeholder";
    reasons.push("Neither teaching content nor practice — a shell record.");
  } else if (blockCount <= 2 && !hasPractice) {
    completeness = "placeholder";
    reasons.push(`Only ${blockCount} block(s) and no practice — too thin to teach.`);
  } else if (hasTeaching && hasPractice && hasObjectives && hasSummary && lesson.estimatedMinutes > 0) {
    completeness = "complete";
  } else {
    completeness = "partial";
    if (!hasTeaching) reasons.push("Fewer than three substantive teaching blocks.");
    if (!hasPractice) reasons.push("No answerable practice (exercises, assignment, revision or homework).");
    if (!hasObjectives) reasons.push("Fewer than two learning objectives.");
    if (!hasSummary) reasons.push("No summary block with key takeaways.");
    if (lesson.estimatedMinutes <= 0) reasons.push("No estimated duration.");
  }

  return {
    slug: lesson.slug,
    title: lesson.title,
    completeness,
    reasons,
    blockCount,
    exerciseCount,
    objectivesCount: lesson.objectives.filter((o) => o.trim()).length,
    hasPractice,
    hasSummary,
    humanApproved: lesson.humanApproved,
    live: lesson.live,
  };
}

// ---------------------------------------------------------------------------
// Course readiness
// ---------------------------------------------------------------------------

function readinessLevel(dimensions: CourseReadinessDimensionDto[]): CourseReadinessDto["readiness"] {
  const failed = new Set(dimensions.filter((d) => !d.pass).map((d) => d.key));
  if (failed.size === 0) return "ready";
  const substanceFailed =
    failed.has("lessons-complete") ||
    failed.has("practice") ||
    failed.has("answer-keys") ||
    failed.has("learning-outcomes");
  return substanceFailed ? "not-ready" : "needs-attention";
}

/**
 * Build the readiness report for every academy course. `lessonGovernance`
 * (effective governance per lesson slug from the registry) can be supplied
 * by callers that already built the registry; it is loaded on demand
 * otherwise.
 */
export async function buildCourseReadiness(
  lessonGovernance?: Map<string, GovernanceEntityDto>,
): Promise<CourseReadinessDto[]> {
  const governance =
    lessonGovernance ??
    new Map<string, GovernanceEntityDto>(
      (await buildGovernanceEntities()).byType.lesson.map((l) => [l.entityKey, l]),
    );

  const reports: CourseReadinessDto[] = [];
  const courseSlugs = [...new Set([...COLLECTIONS.flatMap((c) => c.courseSlugs), "toefl-ibt-academy"])];
  if (!courseSlugs.length) return reports;

  const courses = await db.cmsCourse.findMany({
    where: { slug: { in: courseSlugs } },
    orderBy: { order: "asc" },
    include: {
      modules: {
        orderBy: { order: "asc" },
        include: {
          units: {
            orderBy: { order: "asc" },
            include: {
              lessons: {
                orderBy: { order: "asc" },
                include: { blocks: { orderBy: { order: "asc" }, select: { type: true, data: true } } },
              },
            },
          },
        },
      },
    },
  });

  for (const course of courses) {
    const examKey = examKeyForCourseSlug(course.slug);

    const units = course.modules.flatMap((m) => m.units);
    const lessonRows = units.flatMap((u) => u.lessons);

    // All CMS questions reachable from this course's practice blocks.
    const practiceIds = lessonRows.flatMap((lesson) =>
      lesson.blocks
        .filter((b) => b.type === "practice")
        .flatMap((b) => {
          const data = safeJson(b.data);
          return Array.isArray(data.exerciseIds)
            ? data.exerciseIds.filter((x): x is string => typeof x === "string")
            : [];
        }),
    );
    const questions = practiceIds.length
      ? await db.cmsQuestion.findMany({
          where: { id: { in: practiceIds } },
          select: { id: true, status: true },
        })
      : [];
    const publishedQuestionIds = new Set(
      questions.filter((q) => q.status === "published").map((q) => q.id),
    );

    const lessons = lessonRows.map((lesson) =>
      classifyLesson({
        slug: lesson.slug,
        title: lesson.title,
        live: lesson.live,
        estimatedMinutes: lesson.estimatedMinutes,
        objectives: safeStringArray(lesson.objectives),
        blocks: lesson.blocks.map((b) => ({ type: b.type, data: safeJson(b.data) })),
        resolvableExerciseIds: [...publishedQuestionIds],
        humanApproved: governance.get(lesson.slug)?.humanApproved ?? false,
      }),
    );

    const total = lessons.length;
    const complete = lessons.filter((l) => l.completeness === "complete").length;
    const partial = lessons.filter((l) => l.completeness === "partial").length;
    const placeholder = lessons.filter((l) => l.completeness === "placeholder").length;

    // Dimension 1: complete lessons.
    const placeholderLessons = lessons.filter((l) => l.completeness === "placeholder");
    const partialLessons = lessons.filter((l) => l.completeness === "partial");
    const lessonsComplete = total > 0 && placeholder === 0 && partial === 0;

    // Dimension 2: practice in every lesson.
    const withoutPractice = lessons.filter((l) => !l.hasPractice);
    const practicePass = total > 0 && withoutPractice.length === 0;

    // Dimension 3: verified answer keys — engine re-check scoped to course.
    const courseReport = await runQuestionValidation({
      entityType: "course",
      entityKey: course.slug,
    });
    const keyIssues = courseReport.issues.filter(
      (issue) =>
        (issue.category === "missing-answer-key" || issue.category === "incorrect-answer") &&
        issue.entityType === "exercise",
    );
    const answerKeysPass = keyIssues.length === 0;

    // Dimension 4: relevant assessments — assessment chapters or published
    // mocks for the exam.
    const assessmentUnits = units.filter((u) => u.slug.includes("assessment"));
    const publishedMocks = examKey
      ? await db.mockTest.count({
          where: {
            examKey,
            status: "published",
            kind: { in: ["full", "section", "drill"] },
          },
        })
      : 0;
    const assessmentsPass = assessmentUnits.length > 0 || publishedMocks > 0;

    // Dimension 5: learning outcomes on every lesson.
    const withoutObjectives = lessons.filter((l) => l.objectivesCount < 2);
    const outcomesPass = total > 0 && withoutObjectives.length === 0;

    // Dimension 6: review status — human-approved lessons.
    const unapproved = lessons.filter((l) => !l.humanApproved);
    const reviewPass = total > 0 && unapproved.length === 0;

    const dimensions: CourseReadinessDimensionDto[] = [
      {
        key: "lessons-complete",
        label: "Complete lessons",
        pass: lessonsComplete,
        detail:
          total === 0
            ? "No lessons at all."
            : `${complete}/${total} lessons genuinely complete${placeholder ? `, ${placeholder} placeholder` : ""}${partial ? `, ${partial} partial` : ""}.`,
      },
      {
        key: "practice",
        label: "Appropriate practice",
        pass: practicePass,
        detail:
          total === 0
            ? "No lessons to practise."
            : withoutPractice.length === 0
              ? "Every lesson carries answerable practice."
              : `${withoutPractice.length} lesson(s) have no answerable practice.`,
      },
      {
        key: "answer-keys",
        label: "Verified answer keys",
        pass: answerKeysPass,
        detail: answerKeysPass
          ? `${courseReport.checked.cmsExercises} exercise(s) checked — every key present and valid.`
          : `${keyIssues.length} exercise(s) with missing or invalid answer keys.`,
      },
      {
        key: "assessments",
        label: "Relevant assessments",
        pass: assessmentsPass,
        detail:
          assessmentUnits.length > 0
            ? `${assessmentUnits.length} assessment chapter(s)${publishedMocks ? ` + ${publishedMocks} published mock(s)` : ""}.`
            : publishedMocks > 0
              ? `${publishedMocks} published mock examination(s) for ${examKey}.`
              : "No assessment chapters and no published mocks for this exam.",
      },
      {
        key: "learning-outcomes",
        label: "Learning outcomes",
        pass: outcomesPass,
        detail:
          total === 0
            ? "No lessons to declare outcomes for."
            : withoutObjectives.length === 0
              ? "Every lesson declares learning objectives."
              : `${withoutObjectives.length} lesson(s) declare fewer than two objectives.`,
      },
      {
        key: "review-status",
        label: "Review status",
        pass: reviewPass,
        detail:
          total === 0
            ? "No lessons to review."
            : unapproved.length === 0
              ? "Every lesson has been human-approved."
              : `${unapproved.length} of ${total} lesson(s) never human-approved (AI-generated content requires explicit staff sign-off).`,
      },
    ];

    const blockers: string[] = [];
    for (const lesson of placeholderLessons) {
      blockers.push(`Lesson "${lesson.title}" is a placeholder — ${lesson.reasons[0]?.toLowerCase() ?? "no real content"}`);
    }
    for (const lesson of partialLessons) {
      blockers.push(`Lesson "${lesson.title}" is incomplete — ${lesson.reasons.join(" ")}`);
    }
    for (const lesson of withoutPractice) {
      blockers.push(`Lesson "${lesson.title}" has no answerable practice.`);
    }
    if (!answerKeysPass) {
      blockers.push(`${keyIssues.length} exercise(s) missing valid answer keys.`);
    }
    if (!outcomesPass) {
      blockers.push(`${withoutObjectives.length} lesson(s) without learning outcomes.`);
    }
    if (!assessmentsPass) {
      blockers.push("No assessment chapters or published mock examinations for this exam.");
    }
    if (!reviewPass) {
      blockers.push(`${unapproved.length} lesson(s) never human-approved.`);
    }

    const readiness = readinessLevel(dimensions);

    reports.push({
      courseSlug: course.slug,
      courseTitle: course.title,
      examKey,
      collectionName: collectionLabelForCourse(course.slug),
      live: course.live,
      lessons: { total, complete, partial, placeholder },
      dimensions,
      blockers,
      readiness,
      summary:
        readiness === "ready"
          ? `All ${total} lessons complete, practised, keyed, assessed and human-reviewed — genuinely ready.`
          : readiness === "needs-attention"
            ? `Content is substantively complete, but: ${blockers.join(" ")}`
            : `Not genuinely ready — chapter records exist, but: ${blockers.slice(0, 3).join(" ")}${blockers.length > 3 ? ` (+${blockers.length - 3} more)` : ""}`,
    });
  }

  return reports;
}

// ---------------------------------------------------------------------------
// Small helpers
// ---------------------------------------------------------------------------

function safeJson(raw: string): BlockJson {
  try {
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === "object" && !Array.isArray(parsed)
      ? (parsed as BlockJson)
      : {};
  } catch {
    return {};
  }
}

function safeStringArray(raw: string | null | undefined): string[] {
  if (!raw) return [];
  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed.filter((x): x is string => typeof x === "string") : [];
  } catch {
    return [];
  }
}
