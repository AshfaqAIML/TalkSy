/**
 * Safe content portability: export a course (with its questions) to a JSON
 * bundle and import bundles with full validation + preview before anything
 * is written. Imports never overwrite existing content — slug conflicts are
 * resolved with a suffix and reported in the preview.
 */

import { db } from "@/lib/db";
import type {
  CmsExportBundle,
  CmsImportIssue,
  CmsImportPreview,
} from "@/data/cms/types";
import type { Exercise } from "@/data/curriculum/types";
import { buildExercise, validateCmsBlock } from "./validate";
import { ServiceError, audit, slugify, uniqueSlug } from "./service";

// ---------------------------------------------------------------------------
// Export
// ---------------------------------------------------------------------------

export async function exportCourse(actorId: string, courseId: string): Promise<CmsExportBundle> {
  const course = await db.cmsCourse.findUnique({
    where: { id: courseId },
    include: {
      level: true,
      modules: {
        orderBy: { order: "asc" },
        include: {
          units: {
            orderBy: { order: "asc" },
            include: {
              lessons: {
                orderBy: [{ order: "asc" }, { createdAt: "asc" }],
                include: {
                  blocks: { orderBy: { order: "asc" } },
                  prerequisites: {
                    include: {
                      requiresLesson: {
                        include: { unit: { include: { module: { select: { courseId: true } } } } },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  });
  if (!course) throw new ServiceError("Course not found.", 404);

  // Collect every question referenced by any lesson's practice blocks so the
  // bundle is self-contained.
  const questionIds = new Set<string>();
  for (const mod of course.modules) {
    for (const unit of mod.units) {
      for (const lesson of unit.lessons) {
        for (const block of lesson.blocks) {
          try {
            const data = JSON.parse(block.data) as { exerciseIds?: string[] };
            for (const id of data.exerciseIds ?? []) questionIds.add(id);
          } catch {
            // ignore malformed block — validated on import
          }
        }
      }
    }
  }
  const questions = questionIds.size
    ? await db.cmsQuestion.findMany({ where: { id: { in: [...questionIds] } } })
    : [];

  const bundle: CmsExportBundle = {
    format: "talksy-cms-export",
    version: 1,
    exportedAt: new Date().toISOString(),
    course: {
      slug: course.slug,
      title: course.title,
      description: course.description,
      levelSlug: course.level?.slug ?? null,
      levelName: course.level?.name ?? null,
      status: course.status as CmsExportBundle["course"]["status"],
      live: course.live,
      modules: course.modules.map((m) => ({
        slug: m.slug,
        title: m.title,
        description: m.description,
        units: m.units.map((u) => ({
          slug: u.slug,
          title: u.title,
          description: u.description,
          lessons: u.lessons.map((l) => ({
            slug: l.slug,
            title: l.title,
            description: l.description,
            objectives: safeJson<string[]>(l.objectives, []),
            estimatedMinutes: l.estimatedMinutes,
            blocks: l.blocks.map((b) => ({
              id: b.id,
              type: b.type,
              data: safeJson<Record<string, unknown>>(b.data, {}),
            })),
            prerequisites: l.prerequisites
              .filter((p) => p.requiresLesson.unit.module.courseId === course.id)
              .map((p) => p.requiresLesson.slug),
          })),
        })),
      })),
    },
    questions: questions.map((q) => ({
      slug: q.slug,
      type: q.type,
      skill: q.skill,
      difficulty: q.difficulty,
      prompt: q.prompt,
      tags: safeJson<string[]>(q.tags, []),
      status: q.status as CmsExportBundle["questions"][number]["status"],
      exercise: { ...safeJson<Exercise>(q.data, {} as Exercise), id: q.id },
    })),
  };
  await audit(actorId, "course.export", "course", course.id, {
    questions: questions.length,
  });
  return bundle;
}

function safeJson<T>(raw: string, fallback: T): T {
  try {
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

// ---------------------------------------------------------------------------
// Validation (preview)
// ---------------------------------------------------------------------------

export function validateImportBundle(bundle: unknown): CmsImportPreview {
  const errors: CmsImportIssue[] = [];
  const warnings: CmsImportIssue[] = [];
  const summary: CmsImportPreview["summary"] = {
    courseTitle: "",
    modules: 0,
    units: 0,
    lessons: 0,
    blocks: 0,
    questions: 0,
    newQuestionSlugs: [],
    renamedSlugs: [],
  };

  const b = bundle as Record<string, unknown> | null;
  if (!b || typeof b !== "object") {
    return { ok: false, errors: [{ path: "$", message: "The file is not a valid JSON object." }], warnings, summary };
  }
  if (b.format !== "talksy-cms-export") {
    errors.push({ path: "format", message: 'Expected format "talksy-cms-export".' });
  }
  const course = b.course as CmsExportBundle["course"] | undefined;
  if (!course || typeof course !== "object" || !course.title) {
    errors.push({ path: "course", message: "The bundle has no course." });
    return { ok: false, errors, warnings, summary };
  }
  summary.courseTitle = course.title;
  if (!Array.isArray(course.modules)) {
    errors.push({ path: "course.modules", message: "Course modules must be a list." });
    course.modules = [];
  }

  const questionList = Array.isArray(b.questions) ? (b.questions as CmsExportBundle["questions"]) : [];
  if (!Array.isArray(b.questions)) {
    errors.push({ path: "questions", message: "Questions must be a list." });
  }
  const validQuestionIds = new Set<string>();
  summary.questions = questionList.length;
  for (let i = 0; i < questionList.length; i++) {
    const q = questionList[i];
    const path = `questions[${i}]`;
    if (!q || typeof q !== "object") {
      errors.push({ path, message: "Question is not an object." });
      continue;
    }
    const built = buildExercise(
      { ...q, ...q.exercise, type: q.exercise?.type ?? q.type, hints: q.exercise?.hints, tags: q.tags },
      q.exercise?.id ?? `import-q-${i}`,
    );
    if (!built.ok) {
      errors.push({ path: `${path} (${q.slug ?? "?"})`, message: built.error });
      continue;
    }
    validQuestionIds.add(q.exercise.id);
    if (q.status === "published") {
      warnings.push({
        path: `${path} (${q.slug})`,
        message: "Imported questions always start as drafts — they must be reviewed again before publishing.",
      });
    }
  }

  const lessonSlugs = new Set<string>();
  for (let mi = 0; mi < (course.modules?.length ?? 0); mi++) {
    const mod = course.modules[mi];
    const mpath = `course.modules[${mi}]`;
    if (!mod?.title) errors.push({ path: mpath, message: "Module needs a title." });
    if (!Array.isArray(mod?.units)) {
      errors.push({ path: `${mpath}.units`, message: "Module units must be a list." });
      continue;
    }
    summary.modules += 1;
    for (let ui = 0; ui < mod.units.length; ui++) {
      const unit = mod.units[ui];
      const upath = `${mpath}.units[${ui}]`;
      if (!unit?.title) errors.push({ path: upath, message: "Unit needs a title." });
      if (!Array.isArray(unit?.lessons)) {
        errors.push({ path: `${upath}.lessons`, message: "Unit lessons must be a list." });
        continue;
      }
      summary.units += 1;
      for (let li = 0; li < unit.lessons.length; li++) {
        const lesson = unit.lessons[li];
        const lpath = `${upath}.lessons[${li}]`;
        if (!lesson?.title) {
          errors.push({ path: lpath, message: "Lesson needs a title." });
          continue;
        }
        if (lessonSlugs.has(lesson.slug)) {
          errors.push({ path: lpath, message: `Duplicate lesson slug "${lesson.slug}" in the bundle.` });
        }
        lessonSlugs.add(lesson.slug);
        summary.lessons += 1;
        const blocks = Array.isArray(lesson.blocks) ? lesson.blocks : [];
        for (let bi = 0; bi < blocks.length; bi++) {
          const block = blocks[bi];
          summary.blocks += 1;
          const check = validateCmsBlock(block?.data);
          if (!check.ok) {
            errors.push({ path: `${lpath}.blocks[${bi}]`, message: check.error });
          }
          if (block?.type === "practice") {
            const ids = (block.data as { exerciseIds?: string[] })?.exerciseIds ?? [];
            for (const id of ids) {
              if (!validQuestionIds.has(id)) {
                errors.push({
                  path: `${lpath}.blocks[${bi}]`,
                  message: `References question id "${id}" which is not in the bundle.`,
                });
              }
            }
          }
        }
        for (const prereq of lesson.prerequisites ?? []) {
          if (!lessonSlugs.has(prereq) && prereq !== lesson.slug) {
            // Prerequisites may point at lessons later in the bundle.
            const foundLater = course.modules.some((m) =>
              m.units.some((u) => u.lessons.some((l) => l.slug === prereq)),
            );
            if (!foundLater) {
              errors.push({
                path: lpath,
                message: `Prerequisite "${prereq}" is not a lesson in this bundle.`,
              });
            }
          }
        }
      }
    }
  }

  if (summary.lessons === 0) {
    warnings.push({ path: "course", message: "The bundle contains no lessons." });
  }

  return { ok: errors.length === 0, errors, warnings, summary };
}

// ---------------------------------------------------------------------------
// Import (commit)
// ---------------------------------------------------------------------------

export async function importCourseBundle(
  actorId: string,
  bundle: unknown,
): Promise<{ preview: CmsImportPreview; courseSlug: string }> {
  const preview = validateImportBundle(bundle);
  if (!preview.ok) {
    throw new ServiceError(
      `The bundle has ${preview.errors.length} problem(s): ${preview.errors[0]?.path} — ${preview.errors[0]?.message}`,
      422,
    );
  }
  const b = bundle as CmsExportBundle;
  const slugMaps = new Map<string, string>(); // old slug → new slug
  const renamed: { original: string; imported: string }[] = [];
  const pickSlug = async (
    table: "cmsCourse" | "cmsModule" | "cmsUnit" | "cmsLesson" | "cmsQuestion",
    original: string,
  ): Promise<string> => {
    const fresh = await uniqueSlug(table, original);
    if (fresh !== original) renamed.push({ original, imported: fresh });
    slugMaps.set(original, fresh);
    return fresh;
  };

  // Level: reuse by slug/name if it exists, otherwise create.
  let levelId: string | null = null;
  if (b.course.levelSlug || b.course.levelName) {
    const existing = b.course.levelSlug
      ? await db.cmsLevel.findUnique({ where: { slug: b.course.levelSlug } })
      : null;
    if (existing) {
      levelId = existing.id;
    } else {
      const level = await db.cmsLevel.create({
        data: {
          name: b.course.levelName ?? b.course.levelSlug ?? "Level",
          slug: await uniqueSlug("cmsLevel", b.course.levelName ?? b.course.levelSlug ?? "level"),
          description: "",
        },
      });
      levelId = level.id;
    }
  }

  const course = await db.cmsCourse.create({
    data: {
      title: b.course.title,
      slug: await pickSlug("cmsCourse", b.course.slug || b.course.title),
      description: b.course.description ?? "",
      levelId,
      status: "draft",
      live: false, // imports always land as drafts
      createdById: actorId,
    },
  });

  // Questions first (lessons reference their new ids).
  const questionIdMap = new Map<string, string>(); // old exercise id → new question id
  const newQuestionSlugs: string[] = [];
  for (const q of b.questions ?? []) {
    const built = buildExercise(
      { ...q, ...q.exercise, type: q.exercise.type, hints: q.exercise.hints, tags: q.tags },
      "pending",
    );
    if (!built.ok) continue; // validated above; skip defensively
    const slug = await pickSlug("cmsQuestion", q.slug || q.prompt);
    const created = await db.cmsQuestion.create({
      data: {
        slug,
        type: built.value.type,
        skill: built.value.skill,
        difficulty: built.value.difficulty,
        prompt: built.value.prompt,
        tags: JSON.stringify(built.value.tags ?? []),
        data: JSON.stringify(built.value),
        status: "draft",
        version: 1,
        createdById: actorId,
      },
    });
    const finalExercise = { ...built.value, id: created.id };
    await db.cmsQuestion.update({ where: { id: created.id }, data: { data: JSON.stringify(finalExercise) } });
    await db.cmsQuestionVersion.create({
      data: {
        questionId: created.id,
        version: 1,
        snapshot: JSON.stringify({
          type: finalExercise.type,
          skill: finalExercise.skill,
          difficulty: finalExercise.difficulty,
          prompt: finalExercise.prompt,
          tags: built.value.tags ?? [],
          data: finalExercise,
        }),
        changedById: actorId,
        changeNote: `Imported from bundle (${b.exportedAt})`,
      },
    });
    questionIdMap.set(q.exercise.id, created.id);
    newQuestionSlugs.push(slug);
  }

  // Lessons need two passes: create rows first (prerequisites reference ids),
  // then save blocks + prerequisites + version snapshot.
  const lessonIdBySlug = new Map<string, string>();
  for (const mod of b.course.modules ?? []) {
    const createdMod = await db.cmsModule.create({
      data: {
        courseId: course.id,
        title: mod.title,
        slug: await pickSlug("cmsModule", mod.slug || mod.title),
        description: mod.description ?? "",
        order: 0,
      },
    });
    for (const unit of mod.units ?? []) {
      const createdUnit = await db.cmsUnit.create({
        data: {
          moduleId: createdMod.id,
          title: unit.title,
          slug: await pickSlug("cmsUnit", unit.slug || unit.title),
          description: unit.description ?? "",
          order: 0,
        },
      });
      for (const lesson of unit.lessons ?? []) {
        const createdLesson = await db.cmsLesson.create({
          data: {
            unitId: createdUnit.id,
            title: lesson.title,
            slug: await pickSlug("cmsLesson", lesson.slug || lesson.title),
            description: lesson.description ?? "",
            objectives: JSON.stringify(lesson.objectives ?? []),
            estimatedMinutes: lesson.estimatedMinutes || 10,
            createdById: actorId,
            version: 1,
          },
        });
        lessonIdBySlug.set(lesson.slug, createdLesson.id);
      }
    }
  }

  // Second pass: blocks (with remapped question ids) + prerequisites + snapshots.
  for (const mod of b.course.modules ?? []) {
    for (const unit of mod.units ?? []) {
      for (const lesson of unit.lessons ?? []) {
        const lessonId = lessonIdBySlug.get(lesson.slug);
        if (!lessonId) continue;
        const blocks = (lesson.blocks ?? []).map((block, i) => {
          const data = { ...block.data };
          if (block.type === "practice" && Array.isArray(data.exerciseIds)) {
            data.exerciseIds = (data.exerciseIds as string[]).map(
              (id) => questionIdMap.get(id) ?? id,
            );
          }
          // Imported blocks always get fresh ids: block ids are globally
          // unique, and an import creates new instances (never overwrites).
          return { id: crypto.randomUUID(), order: i, type: block.type, data };
        });
        if (blocks.length > 0) {
          await db.cmsLessonBlock.createMany({
            data: blocks.map((bl) => ({ ...bl, lessonId, data: JSON.stringify(bl.data) })),
          });
        }
        for (const prereqSlug of lesson.prerequisites ?? []) {
          const prereqId = lessonIdBySlug.get(prereqSlug);
          if (prereqId && prereqId !== lessonId) {
            await db.cmsPrerequisite.create({
              data: { lessonId, requiresLessonId: prereqId },
            }).catch(() => undefined);
          }
        }
        await db.cmsLessonVersion.create({
          data: {
            lessonId,
            version: 1,
            snapshot: JSON.stringify({
              title: lesson.title,
              description: lesson.description ?? "",
              objectives: lesson.objectives ?? [],
              estimatedMinutes: lesson.estimatedMinutes || 10,
              blocks: blocks.map((bl) => ({ id: bl.id, type: bl.type, data: bl.data })),
            }),
            changedById: actorId,
            changeNote: `Imported from bundle (${b.exportedAt})`,
          },
        });
      }
    }
  }

  preview.summary.newQuestionSlugs = newQuestionSlugs;
  preview.summary.renamedSlugs = renamed;
  await audit(actorId, "import.commit", "import", course.id, {
    courseSlug: course.slug,
    lessons: lessonIdBySlug.size,
    questions: newQuestionSlugs.length,
  });
  return { preview, courseSlug: course.slug };
}

/** Build a demo bundle for the import UI (helps authors learn the format). */
export function bundleTemplateHint(): string {
  return "Export any course to see the full JSON format, or import a bundle that a colleague exported from another TalkSy instance.";
}

export { slugify };
