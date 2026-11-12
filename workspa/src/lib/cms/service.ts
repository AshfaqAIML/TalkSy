/**
 * CMS domain service: curriculum CRUD, content-quality workflow, revision
 * versioning, and learner delivery of published content.
 *
 * Invariants enforced here (defence in depth — routes also check roles):
 *  - Workflow: draft → review → approved; only admins toggle `live`.
 *  - Versioning: every lesson/question edit appends an immutable snapshot;
 *    restoring never overwrites history (it creates a new version).
 *  - Learner visibility: courses must be live; lessons serve the published
 *    version SNAPSHOT, never the working copy.
 *  - Historical assessment data: attempts pin the question version they were
 *    graded against; nothing is ever recomputed.
 */

import { db } from "@/lib/db";
import type { Prisma } from "@prisma/client";
import { sanitizeExercise } from "@/lib/engine/sanitize";
import type {
  CmsAction,
  CmsAdminUserDto,
  CmsAssetDto,
  CmsCatalogueCourseDto,
  CmsCourseTreeDto,
  CmsLearnerCourseDto,
  CmsLearnerLessonDto,
  CmsLessonDetailDto,
  CmsQuestionDto,
  CmsQuestionStatus,
} from "@/data/cms/types";
import type { Exercise, SafeExercise } from "@/data/curriculum/types";
import { buildExercise, countWords, validateCmsBlock } from "./validate";
import { roleAtLeast } from "./rbac";

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 60);
}

async function uniqueSlug(
  table: "cmsCourse" | "cmsModule" | "cmsUnit" | "cmsLesson" | "cmsQuestion" | "cmsLevel",
  base: string,
): Promise<string> {
  const root = slugify(base) || "item";
  const exists = async (slug: string) => {
    switch (table) {
      case "cmsCourse":
        return !!(await db.cmsCourse.findUnique({ where: { slug } }));
      case "cmsModule":
        return !!(await db.cmsModule.findUnique({ where: { slug } }));
      case "cmsUnit":
        return !!(await db.cmsUnit.findUnique({ where: { slug } }));
      case "cmsLesson":
        return !!(await db.cmsLesson.findUnique({ where: { slug } }));
      case "cmsQuestion":
        return !!(await db.cmsQuestion.findUnique({ where: { slug } }));
      case "cmsLevel":
        return !!(await db.cmsLevel.findUnique({ where: { slug } }));
    }
  };
  let slug = root;
  let n = 2;
  while (await exists(slug)) {
    slug = `${root}-${n}`;
    n += 1;
  }
  return slug;
}

export { uniqueSlug };

export async function audit(
  actorId: string | null,
  action: string,
  entityType: string,
  entityId: string,
  detail: Record<string, unknown> = {},
): Promise<void> {
  await db.cmsAuditLog.create({
    data: { actorId, action, entityType, entityId, detail: JSON.stringify(detail) },
  });
}

function parseJson<T>(raw: string, fallback: T): T {
  try {
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

/** Public file URL for a stored asset (served by the authenticated route). */
export function assetFileUrl(id: string): string {
  return `/api/cms/assets/${id}/file`;
}

// ---------------------------------------------------------------------------
// Levels
// ---------------------------------------------------------------------------

export async function listLevels() {
  const levels = await db.cmsLevel.findMany({ orderBy: [{ order: "asc" }, { name: "asc" }] });
  return levels.map((l) => ({
    id: l.id,
    slug: l.slug,
    name: l.name,
    description: l.description,
    order: l.order,
  }));
}

export async function createLevel(
  actorId: string,
  input: { name?: unknown; description?: unknown; order?: unknown },
) {
  const name = typeof input.name === "string" ? input.name.trim() : "";
  if (name.length < 2) throw new ServiceError("Level name is required.", 422);
  const slug = await uniqueSlug("cmsLevel", name);
  const level = await db.cmsLevel.create({
    data: {
      name,
      slug,
      description: typeof input.description === "string" ? input.description.trim() : "",
      order: Number(input.order) || 0,
    },
  });
  await audit(actorId, "level.create", "level", level.id, { name });
  return level;
}

export async function updateLevel(
  actorId: string,
  id: string,
  input: { name?: unknown; description?: unknown; order?: unknown },
) {
  const data: Record<string, unknown> = {};
  if (typeof input.name === "string" && input.name.trim().length >= 2) data.name = input.name.trim();
  if (typeof input.description === "string") data.description = input.description.trim();
  if (input.order !== undefined) data.order = Number(input.order) || 0;
  const level = await db.cmsLevel.update({ where: { id }, data });
  await audit(actorId, "level.update", "level", id, data);
  return level;
}

export async function deleteLevel(actorId: string, id: string) {
  await db.cmsLevel.delete({ where: { id } });
  await audit(actorId, "level.delete", "level", id, {});
}

// ---------------------------------------------------------------------------
// Course tree (admin curriculum manager)
// ---------------------------------------------------------------------------

export async function getCourseTree(): Promise<CmsCourseTreeDto> {
  const [levels, courses] = await Promise.all([
    db.cmsLevel.findMany({ orderBy: [{ order: "asc" }, { name: "asc" }] }),
    db.cmsCourse.findMany({
      orderBy: [{ order: "asc" }, { createdAt: "asc" }],
      include: {
        level: true,
        enrolments: { select: { userId: true } },
        modules: {
          orderBy: { order: "asc" },
          include: {
            units: {
              orderBy: { order: "asc" },
              include: {
                lessons: {
                  orderBy: [{ order: "asc" }, { createdAt: "asc" }],
                  include: {
                    blocks: { select: { id: true } },
                    prerequisites: { include: { requiresLesson: true } },
                  },
                },
              },
            },
          },
        },
      },
    }),
  ]);

  return {
    levels: levels.map((l) => ({
      id: l.id,
      slug: l.slug,
      name: l.name,
      description: l.description,
      order: l.order,
    })),
    courses: courses.map((c) => ({
      id: c.id,
      slug: c.slug,
      title: c.title,
      description: c.description,
      levelId: c.levelId,
      levelName: c.level?.name ?? null,
      status: c.status as CmsCourseTreeDto["courses"][number]["status"],
      live: c.live,
      order: c.order,
      enrolmentCount: c.enrolments.length,
      modules: c.modules.map((m) => ({
        id: m.id,
        slug: m.slug,
        title: m.title,
        description: m.description,
        order: m.order,
        units: m.units.map((u) => ({
          id: u.id,
          slug: u.slug,
          title: u.title,
          description: u.description,
          order: u.order,
          lessons: u.lessons.map((l) => ({
            id: l.id,
            slug: l.slug,
            title: l.title,
            description: l.description,
            estimatedMinutes: l.estimatedMinutes,
            order: l.order,
            status: l.status as CmsCourseTreeDto["courses"][number]["modules"][number]["units"][number]["lessons"][number]["status"],
            live: l.live,
            version: l.version,
            publishedVersion: l.publishedVersion,
            blockCount: l.blocks.length,
            prerequisiteSlugs: l.prerequisites.map((p) => p.requiresLesson.slug),
          })),
        })),
      })),
    })),
  };
}

export class ServiceError extends Error {
  status: number;
  constructor(message: string, status = 400) {
    super(message);
    this.status = status;
  }
}

/** Full exercises referenced by a lesson's practice blocks (admin payload). */
async function collectAdminExercises(
  blocks: { type: string; data: string }[],
): Promise<Exercise[]> {
  const ids = blocks
    .filter((b) => b.type === "practice")
    .flatMap((b) => {
      const data = parseJson<{ exerciseIds?: unknown }>(b.data, {});
      return Array.isArray(data.exerciseIds)
        ? data.exerciseIds.filter((x): x is string => typeof x === "string")
        : [];
    });
  if (ids.length === 0) return [];
  const questions = await db.cmsQuestion.findMany({ where: { id: { in: ids } } });
  const byId = new Map(questions.map((q) => [q.id, q]));
  const out: Exercise[] = [];
  for (const id of ids) {
    const q = byId.get(id);
    if (!q) continue;
    const exercise = { ...parseJson<Exercise>(q.data, {} as unknown as Exercise), id: q.id };
    if (exercise.type) out.push(exercise);
  }
  return out;
}

// ---------------------------------------------------------------------------
// Courses / modules / units
// ---------------------------------------------------------------------------

export async function createCourse(
  actorId: string,
  input: { title?: unknown; description?: unknown; levelId?: unknown; slug?: unknown },
) {
  const title = typeof input.title === "string" ? input.title.trim() : "";
  if (title.length < 3) throw new ServiceError("Course title is required (3+ characters).", 422);
  const levelId = typeof input.levelId === "string" && input.levelId ? input.levelId : null;
  if (levelId && !(await db.cmsLevel.findUnique({ where: { id: levelId } }))) {
    throw new ServiceError("Unknown level.", 422);
  }
  const slug =
    typeof input.slug === "string" && input.slug.trim()
      ? await uniqueSlug("cmsCourse", input.slug)
      : await uniqueSlug("cmsCourse", title);
  const count = await db.cmsCourse.count();
  const course = await db.cmsCourse.create({
    data: {
      title,
      slug,
      description: typeof input.description === "string" ? input.description.trim() : "",
      levelId,
      createdById: actorId,
      order: count,
    },
  });
  await audit(actorId, "course.create", "course", course.id, { title, slug });
  return course;
}

export async function updateCourse(
  actorId: string,
  id: string,
  input: { title?: unknown; description?: unknown; levelId?: unknown; order?: unknown },
) {
  const data: Record<string, unknown> = {};
  if (typeof input.title === "string" && input.title.trim().length >= 3) data.title = input.title.trim();
  if (typeof input.description === "string") data.description = input.description.trim();
  if (input.levelId !== undefined) {
    const levelId = typeof input.levelId === "string" && input.levelId ? input.levelId : null;
    if (levelId && !(await db.cmsLevel.findUnique({ where: { id: levelId } }))) {
      throw new ServiceError("Unknown level.", 422);
    }
    data.levelId = levelId;
  }
  if (input.order !== undefined) data.order = Number(input.order) || 0;
  const course = await db.cmsCourse.update({ where: { id }, data });
  await audit(actorId, "course.update", "course", id, data);
  return course;
}

export async function deleteCourse(actorId: string, id: string) {
  await db.cmsCourse.delete({ where: { id } });
  await audit(actorId, "course.delete", "course", id, {});
}

/** Workflow transitions for courses. `live` = published / visible to learners. */
export async function courseAction(actorId: string, actorRole: string, id: string, action: CmsAction, note = "") {
  const course = await db.cmsCourse.findUnique({ where: { id } });
  if (!course) throw new ServiceError("Course not found.", 404);
  switch (action) {
    case "submit":
      if (course.status !== "draft") throw new ServiceError("Only draft courses can be submitted for review.", 409);
      return transitionCourse(actorId, course.id, "review", course.live, note);
    case "approve":
      if (!roleAtLeast(actorRole, "teacher")) throw new ServiceError("Only teachers and admins can approve.", 403);
      if (course.status !== "review") throw new ServiceError("Only courses in review can be approved.", 409);
      return transitionCourse(actorId, course.id, "approved", course.live, note);
    case "reject":
      if (!roleAtLeast(actorRole, "teacher")) throw new ServiceError("Only teachers and admins can reject.", 403);
      if (course.status !== "review") throw new ServiceError("Only courses in review can be rejected.", 409);
      return transitionCourse(actorId, course.id, "draft", course.live, note || "Changes requested");
    case "publish":
      if (!roleAtLeast(actorRole, "admin")) throw new ServiceError("Only administrators can publish.", 403);
      if (course.status !== "approved") throw new ServiceError("The course must be approved before publishing.", 409);
      return transitionCourse(actorId, course.id, "approved", true, note);
    case "unpublish":
      if (!roleAtLeast(actorRole, "admin")) throw new ServiceError("Only administrators can unpublish.", 403);
      if (!course.live) throw new ServiceError("The course is not published.", 409);
      return transitionCourse(actorId, course.id, course.status, false, note);
  }
}

async function transitionCourse(
  actorId: string,
  id: string,
  status: string,
  live: boolean,
  note: string,
) {
  const course = await db.cmsCourse.update({ where: { id }, data: { status, live } });
  await audit(actorId, `course.${live ? "publish" : status}`, "course", id, { status, live, note });
  return course;
}

export async function createModule(
  actorId: string,
  input: { courseId?: unknown; title?: unknown; description?: unknown },
) {
  const courseId = typeof input.courseId === "string" ? input.courseId : "";
  const title = typeof input.title === "string" ? input.title.trim() : "";
  if (!courseId || !(await db.cmsCourse.findUnique({ where: { id: courseId } }))) {
    throw new ServiceError("Unknown course.", 422);
  }
  if (title.length < 3) throw new ServiceError("Module title is required.", 422);
  const count = await db.cmsModule.count({ where: { courseId } });
  const mod = await db.cmsModule.create({
    data: {
      courseId,
      title,
      slug: await uniqueSlug("cmsModule", title),
      description: typeof input.description === "string" ? input.description.trim() : "",
      order: count,
    },
  });
  await audit(actorId, "module.create", "module", mod.id, { title });
  return mod;
}

export async function updateModule(
  actorId: string,
  id: string,
  input: { title?: unknown; description?: unknown; order?: unknown },
) {
  const data: Record<string, unknown> = {};
  if (typeof input.title === "string" && input.title.trim().length >= 3) data.title = input.title.trim();
  if (typeof input.description === "string") data.description = input.description.trim();
  if (input.order !== undefined) data.order = Number(input.order) || 0;
  const mod = await db.cmsModule.update({ where: { id }, data });
  await audit(actorId, "module.update", "module", id, data);
  return mod;
}

export async function deleteModule(actorId: string, id: string) {
  await db.cmsModule.delete({ where: { id } });
  await audit(actorId, "module.delete", "module", id, {});
}

export async function createUnit(
  actorId: string,
  input: { moduleId?: unknown; title?: unknown; description?: unknown },
) {
  const moduleId = typeof input.moduleId === "string" ? input.moduleId : "";
  const title = typeof input.title === "string" ? input.title.trim() : "";
  if (!moduleId || !(await db.cmsModule.findUnique({ where: { id: moduleId } }))) {
    throw new ServiceError("Unknown module.", 422);
  }
  if (title.length < 3) throw new ServiceError("Unit title is required.", 422);
  const count = await db.cmsUnit.count({ where: { moduleId } });
  const unit = await db.cmsUnit.create({
    data: {
      moduleId,
      title,
      slug: await uniqueSlug("cmsUnit", title),
      description: typeof input.description === "string" ? input.description.trim() : "",
      order: count,
    },
  });
  await audit(actorId, "unit.create", "unit", unit.id, { title });
  return unit;
}

export async function updateUnit(
  actorId: string,
  id: string,
  input: { title?: unknown; description?: unknown; order?: unknown },
) {
  const data: Record<string, unknown> = {};
  if (typeof input.title === "string" && input.title.trim().length >= 3) data.title = input.title.trim();
  if (typeof input.description === "string") data.description = input.description.trim();
  if (input.order !== undefined) data.order = Number(input.order) || 0;
  const unit = await db.cmsUnit.update({ where: { id }, data });
  await audit(actorId, "unit.update", "unit", id, data);
  return unit;
}

export async function deleteUnit(actorId: string, id: string) {
  await db.cmsUnit.delete({ where: { id } });
  await audit(actorId, "unit.delete", "unit", id, {});
}

// ---------------------------------------------------------------------------
// Lessons
// ---------------------------------------------------------------------------

export async function createLesson(
  actorId: string,
  input: { unitId?: unknown; title?: unknown; description?: unknown },
) {
  const unitId = typeof input.unitId === "string" ? input.unitId : "";
  const title = typeof input.title === "string" ? input.title.trim() : "";
  if (!unitId || !(await db.cmsUnit.findUnique({ where: { id: unitId } }))) {
    throw new ServiceError("Unknown unit.", 422);
  }
  if (title.length < 3) throw new ServiceError("Lesson title is required.", 422);
  const count = await db.cmsLesson.count({ where: { unitId } });
  const lesson = await db.cmsLesson.create({
    data: {
      unitId,
      title,
      slug: await uniqueSlug("cmsLesson", title),
      description: typeof input.description === "string" ? input.description.trim() : "",
      order: count,
      createdById: actorId,
      version: 1,
    },
  });
  // Version 1 snapshot: the empty starting point.
  await db.cmsLessonVersion.create({
    data: {
      lessonId: lesson.id,
      version: 1,
      snapshot: JSON.stringify(snapshotOf(lesson, [])),
      changedById: actorId,
      changeNote: "Created",
    },
  });
  await audit(actorId, "lesson.create", "lesson", lesson.id, { title, slug: lesson.slug });
  return lesson;
}

function snapshotOf(
  lesson: { title: string; description: string; objectives: string; estimatedMinutes: number },
  blocks: { id: string; order: number; type: string; data: string }[],
) {
  return {
    title: lesson.title,
    description: lesson.description,
    objectives: parseJson<string[]>(lesson.objectives, []),
    estimatedMinutes: lesson.estimatedMinutes,
    blocks: [...blocks]
      .sort((a, b) => a.order - b.order)
      .map((b) => ({ id: b.id, type: b.type, data: parseJson<unknown>(b.data, {}) })),
  };
}

export async function getLessonDetail(id: string): Promise<CmsLessonDetailDto> {
  const lesson = await db.cmsLesson.findUnique({
    where: { id },
    include: {
      unit: { include: { module: { include: { course: true } } } },
      blocks: true,
      versions: { orderBy: { version: "desc" }, include: { changedBy: true } },
      prerequisites: { include: { requiresLesson: true } },
    },
  });
  if (!lesson) throw new ServiceError("Lesson not found.", 404);
  return {
    id: lesson.id,
    slug: lesson.slug,
    title: lesson.title,
    description: lesson.description,
    objectives: parseJson<string[]>(lesson.objectives, []),
    estimatedMinutes: lesson.estimatedMinutes,
    order: lesson.order,
    status: lesson.status as CmsLessonDetailDto["status"],
    live: lesson.live,
    version: lesson.version,
    publishedVersion: lesson.publishedVersion,
    unitId: lesson.unitId,
    courseSlug: lesson.unit.module.course.slug,
    courseTitle: lesson.unit.module.course.title,
    blocks: [...lesson.blocks]
      .sort((a, b) => a.order - b.order)
      .map((b) => ({
        id: b.id,
        ...(parseJson<Record<string, unknown>>(b.data, {}) as object),
      })) as CmsLessonDetailDto["blocks"],
    prerequisites: lesson.prerequisites.map((p) => ({
      id: p.requiresLessonId,
      slug: p.requiresLesson.slug,
      title: p.requiresLesson.title,
    })),
    // Full exercises for the editor preview (staff-only payload with answers).
    exercises: await collectAdminExercises(lesson.blocks),
    versions: lesson.versions.map((v) => ({
      id: v.id,
      version: v.version,
      changeNote: v.changeNote,
      changedByEmail: v.changedBy?.email ?? null,
      createdAt: v.createdAt.toISOString(),
    })),
  };
}

export interface LessonUpdateInput {
  title?: unknown;
  description?: unknown;
  objectives?: unknown;
  estimatedMinutes?: unknown;
  blocks?: unknown;
  prerequisiteIds?: unknown;
  changeNote?: unknown;
}

/**
 * Save the lesson working copy. Every save appends an immutable version
 * snapshot — revision history is append-only.
 */
export async function updateLesson(actorId: string, id: string, input: LessonUpdateInput) {
  const lesson = await db.cmsLesson.findUnique({ where: { id }, include: { blocks: true } });
  if (!lesson) throw new ServiceError("Lesson not found.", 404);

  const data: Record<string, unknown> = {};
  if (typeof input.title === "string" && input.title.trim().length >= 3) data.title = input.title.trim();
  if (typeof input.description === "string") data.description = input.description.trim();
  if (input.objectives !== undefined) {
    const objectives = Array.isArray(input.objectives)
      ? input.objectives.filter((o): o is string => typeof o === "string" && o.trim().length > 0).map((o) => o.trim())
      : [];
    data.objectives = JSON.stringify(objectives.slice(0, 12));
  }
  if (input.estimatedMinutes !== undefined) {
    const mins = Number(input.estimatedMinutes);
    if (Number.isFinite(mins)) data.estimatedMinutes = Math.min(180, Math.max(1, Math.round(mins)));
  }

  // Blocks: full replacement with stable ids where provided.
  let blocksForSnapshot: { id: string; order: number; type: string; data: string }[] =
    lesson.blocks.map((b) => ({ id: b.id, order: b.order, type: b.type, data: b.data }));
  if (Array.isArray(input.blocks)) {
    blocksForSnapshot = await saveBlocks(lesson.id, input.blocks, lesson.blocks);
  }

  // Prerequisites: replace set. Cycles and self-references are rejected.
  if (input.prerequisiteIds !== undefined) {
    await savePrerequisites(lesson, input.prerequisiteIds);
  }

  const version = lesson.version + 1;
  const merged = {
    ...lesson,
    ...(data.title !== undefined ? { title: data.title as string } : {}),
    ...(data.description !== undefined ? { description: data.description as string } : {}),
    ...(data.objectives !== undefined
      ? { objectives: data.objectives as string }
      : { objectives: lesson.objectives }),
    ...(data.estimatedMinutes !== undefined
      ? { estimatedMinutes: data.estimatedMinutes as number }
      : { estimatedMinutes: lesson.estimatedMinutes }),
  };
  const changeNote =
    typeof input.changeNote === "string" && input.changeNote.trim() ? input.changeNote.trim().slice(0, 200) : "Edited";

  const updated = await db.cmsLesson.update({
    where: { id },
    // Any content edit resets the working copy to draft (live content is
    // unaffected: learners keep seeing publishedVersion).
    data: { ...data, version, status: "draft" },
  });

  await db.cmsLessonVersion.create({
    data: {
      lessonId: id,
      version,
      snapshot: JSON.stringify(snapshotOf(merged, blocksForSnapshot)),
      changedById: actorId,
      changeNote,
    },
  });
  await audit(actorId, "lesson.update", "lesson", id, { version, changeNote });
  return updated;
}

/** Validate + persist the block list, preserving block ids for stability. */
async function saveBlocks(
  lessonId: string,
  input: unknown[],
  _existing: { id: string }[],
): Promise<{ id: string; order: number; type: string; data: string }[]> {
  const rows: { id: string; order: number; type: string; data: string }[] = [];
  const seen = new Set<string>();
  for (let i = 0; i < input.length; i++) {
    const raw = input[i];
    if (!raw || typeof raw !== "object") throw new ServiceError(`Block ${i + 1} is invalid.`, 422);
    const rec = raw as Record<string, unknown>;
    const check = validateCmsBlock(rec);
    if (!check.ok) throw new ServiceError(`Block ${i + 1}: ${check.error}`, 422);
    const type = typeof rec.type === "string" ? rec.type : "";
    let id = typeof rec.id === "string" && rec.id ? rec.id : "";
    if (id) {
      if (seen.has(id)) throw new ServiceError(`Block ${i + 1}: duplicate block id.`, 422);
      seen.add(id);
    } else {
      id = crypto.randomUUID();
    }
    rows.push({
      id,
      order: i,
      type,
      data: JSON.stringify(rec),
    });
  }
  // Practice blocks must reference published/approved questions.
  for (const row of rows) {
    if (row.type !== "practice") continue;
    const data = parseJson<{ exerciseIds?: unknown }>(row.data, {});
    const ids = Array.isArray(data.exerciseIds) ? data.exerciseIds.filter((x): x is string => typeof x === "string") : [];
    for (const qid of ids) {
      const q = await db.cmsQuestion.findUnique({ where: { id: qid } });
      if (!q) throw new ServiceError(`Exercise block references an unknown question (${qid}).`, 422);
      if (q.status !== "published" && q.status !== "approved") {
        throw new ServiceError(
          `Question "${q.prompt.slice(0, 40)}…" must be approved or published before it can be added to a lesson.`,
          422,
        );
      }
    }
  }
  // Audio asset blocks must reference an existing audio asset.
  for (const row of rows) {
    if (row.type !== "audio") continue;
    const data = parseJson<{ mode?: string; audioAssetId?: string }>(row.data, {});
    if (data.mode === "asset" && data.audioAssetId) {
      const asset = await db.cmsAsset.findUnique({ where: { id: data.audioAssetId } });
      if (!asset || asset.kind !== "audio") throw new ServiceError("Audio block references a missing audio file.", 422);
    }
  }

  await db.cmsLessonBlock.deleteMany({ where: { lessonId } });
  if (rows.length > 0) {
    await db.cmsLessonBlock.createMany({ data: rows.map((r) => ({ ...r, lessonId })) });
  }
  return rows;
}

async function savePrerequisites(
  lesson: { id: string },
  input: unknown,
) {
  const ids = Array.isArray(input)
    ? input.filter((x): x is string => typeof x === "string")
    : [];
  if (ids.includes(lesson.id)) {
    throw new ServiceError("A lesson cannot be its own prerequisite.", 422);
  }
  for (const pid of ids) {
    if (!(await db.cmsLesson.findUnique({ where: { id: pid } }))) {
      throw new ServiceError("Unknown prerequisite lesson.", 422);
    }
  }
  // Reject direct cycles (A→B→A) by walking one level.
  for (const pid of ids) {
    const back = await db.cmsPrerequisite.findUnique({
      where: { lessonId_requiresLessonId: { lessonId: pid, requiresLessonId: lesson.id } },
    });
    if (back) throw new ServiceError("Prerequisite cycle detected.", 422);
  }
  await db.cmsPrerequisite.deleteMany({ where: { lessonId: lesson.id } });
  for (const pid of new Set(ids)) {
    await db.cmsPrerequisite.create({ data: { lessonId: lesson.id, requiresLessonId: pid } });
  }
}

export async function deleteLesson(actorId: string, id: string) {
  const attempts = await db.exerciseAttempt.count({
    where: { lessonSlug: (await db.cmsLesson.findUnique({ where: { id } }))?.slug ?? "", source: "cms" },
  });
  if (attempts > 0) {
    throw new ServiceError(
      "Learners have already answered exercises in this lesson, so it cannot be deleted (historical data). Unpublish it instead.",
      409,
    );
  }
  await db.cmsLesson.delete({ where: { id } });
  await audit(actorId, "lesson.delete", "lesson", id, {});
}

export async function lessonAction(actorId: string, actorRole: string, id: string, action: CmsAction, note = "") {
  const lesson = await db.cmsLesson.findUnique({ where: { id }, include: { blocks: true } });
  if (!lesson) throw new ServiceError("Lesson not found.", 404);
  switch (action) {
    case "submit": {
      if (lesson.status !== "draft") throw new ServiceError("Only draft lessons can be submitted for review.", 409);
      if (lesson.blocks.length === 0) throw new ServiceError("Add content blocks before submitting for review.", 422);
      return transitionLesson(actorId, lesson.id, "review", lesson.live, lesson.publishedVersion, note);
    }
    case "approve": {
      if (!roleAtLeast(actorRole, "teacher")) throw new ServiceError("Only teachers and admins can approve.", 403);
      if (lesson.status !== "review") throw new ServiceError("Only lessons in review can be approved.", 409);
      return transitionLesson(actorId, lesson.id, "approved", lesson.live, lesson.publishedVersion, note);
    }
    case "reject": {
      if (!roleAtLeast(actorRole, "teacher")) throw new ServiceError("Only teachers and admins can reject.", 403);
      if (lesson.status !== "review") throw new ServiceError("Only lessons in review can be rejected.", 409);
      return transitionLesson(actorId, lesson.id, "draft", lesson.live, lesson.publishedVersion, note || "Changes requested");
    }
    case "publish": {
      if (!roleAtLeast(actorRole, "admin")) throw new ServiceError("Only administrators can publish.", 403);
      if (lesson.status !== "approved") throw new ServiceError("The lesson must be approved before publishing.", 409);
      if (lesson.blocks.length === 0) throw new ServiceError("Cannot publish an empty lesson.", 422);
      return transitionLesson(actorId, lesson.id, "approved", true, lesson.version, note);
    }
    case "unpublish": {
      if (!roleAtLeast(actorRole, "admin")) throw new ServiceError("Only administrators can unpublish.", 403);
      if (!lesson.live) throw new ServiceError("The lesson is not published.", 409);
      return transitionLesson(actorId, lesson.id, lesson.status, false, lesson.publishedVersion, note);
    }
  }
}

async function transitionLesson(
  actorId: string,
  id: string,
  status: string,
  live: boolean,
  publishedVersion: number | null,
  note: string,
) {
  const lesson = await db.cmsLesson.update({
    where: { id },
    data: {
      status,
      live,
      ...(live && status === "approved" ? { publishedAt: new Date() } : {}),
      publishedVersion,
    },
  });
  await audit(actorId, `lesson.${live ? "publish" : status}`, "lesson", id, {
    status,
    live,
    version: lesson.version,
    note,
  });
  return lesson;
}

/** Restore a historical version as a NEW version (history is append-only). */
export async function restoreLessonVersion(actorId: string, id: string, version: number) {
  const lesson = await db.cmsLesson.findUnique({ where: { id }, include: { blocks: true } });
  if (!lesson) throw new ServiceError("Lesson not found.", 404);
  const snap = await db.cmsLessonVersion.findUnique({
    where: { lessonId_version: { lessonId: id, version } },
  });
  if (!snap) throw new ServiceError("Version not found.", 404);
  const parsed = parseJson<{
    title: string;
    description: string;
    objectives: string[];
    estimatedMinutes: number;
    blocks: { id: string; type: string; data: Record<string, unknown> }[];
  } | null>(snap.snapshot, null);
  if (!parsed) throw new ServiceError("The stored snapshot is corrupted.", 500);

  // Replace blocks with the snapshot's blocks (keeping snapshot block ids).
  await db.cmsLessonBlock.deleteMany({ where: { lessonId: id } });
  if (parsed.blocks.length > 0) {
    await db.cmsLessonBlock.createMany({
      data: parsed.blocks.map((b, i) => ({
        lessonId: id,
        id: b.id,
        order: i,
        type: b.type,
        data: JSON.stringify(b.data),
      })),
    });
  }
  const newVersion = lesson.version + 1;
  const restored = await db.cmsLesson.update({
    where: { id },
    data: {
      title: parsed.title,
      description: parsed.description,
      objectives: JSON.stringify(parsed.objectives ?? []),
      estimatedMinutes: parsed.estimatedMinutes,
      version: newVersion,
      status: "draft", // restored content must go through review again
    },
  });
  await db.cmsLessonVersion.create({
    data: {
      lessonId: id,
      version: newVersion,
      snapshot: snap.snapshot,
      changedById: actorId,
      changeNote: `Restored from version ${version}`,
    },
  });
  await audit(actorId, "lesson.restore", "lesson", id, { fromVersion: version, toVersion: newVersion });
  return restored;
}

// ---------------------------------------------------------------------------
// Questions
// ---------------------------------------------------------------------------

export async function listQuestions(filter: {
  status?: string;
  type?: string;
  skill?: string;
  search?: string;
}): Promise<CmsQuestionDto[]> {
  const where: Record<string, unknown> = {};
  if (filter.status && filter.status !== "all") where.status = filter.status;
  if (filter.type && filter.type !== "all") where.type = filter.type;
  if (filter.skill && filter.skill !== "all") where.skill = filter.skill;
  if (filter.search) {
    const q = filter.search.toLowerCase();
    // SQLite contains() is case-sensitive for non-ASCII, so filter in memory
    // on a shortlist matched by the search term.
    where.OR = [
      { prompt: { contains: filter.search } },
      { slug: { contains: filter.search } },
      { prompt: { contains: q } },
      { slug: { contains: q } },
    ];
  }
  const questions = await db.cmsQuestion.findMany({
    where,
    orderBy: { updatedAt: "desc" },
    include: { versions: { orderBy: { version: "desc" }, include: { changedBy: true } } },
    take: 300,
  });
  const ids = questions.map((q) => q.id);
  const attempts = ids.length
    ? await db.exerciseAttempt.groupBy({
        by: ["exerciseId", "isCorrect"],
        where: { exerciseId: { in: ids }, source: "cms" },
        _count: { _all: true },
      })
    : [];
  const counts = new Map<string, { attempts: number; correct: number }>();
  for (const a of attempts) {
    const entry = counts.get(a.exerciseId) ?? { attempts: 0, correct: 0 };
    entry.attempts += a._count._all;
    if (a.isCorrect) entry.correct += a._count._all;
    counts.set(a.exerciseId, entry);
  }
  return questions.map((q) => toQuestionDto(q, counts.get(q.id)));
}

function toQuestionDto(
  q: {
    id: string;
    slug: string;
    type: string;
    skill: string;
    difficulty: string;
    prompt: string;
    tags: string;
    data: string;
    status: string;
    version: number;
    updatedAt: Date;
    versions: { id: string; version: number; changeNote: string; changedBy: { email: string } | null; createdAt: Date }[];
  },
  stats?: { attempts: number; correct: number },
) {
  const exercise = { ...parseJson<Exercise>(q.data, {} as unknown as Exercise), id: q.id };
  return {
    id: q.id,
    slug: q.slug,
    type: q.type,
    skill: q.skill,
    difficulty: q.difficulty,
    prompt: q.prompt,
    tags: parseJson<string[]>(q.tags, []),
    status: q.status as CmsQuestionStatus,
    version: q.version,
    updatedAt: q.updatedAt.toISOString(),
    exercise,
    versions: q.versions.map((v) => ({
      id: v.id,
      version: v.version,
      changeNote: v.changeNote,
      changedByEmail: v.changedBy?.email ?? null,
      createdAt: v.createdAt.toISOString(),
    })),
    attemptCount: stats?.attempts ?? 0,
    correctCount: stats?.correct ?? 0,
  } satisfies CmsQuestionDto;
}

export async function createQuestion(
  actorId: string,
  payload: Record<string, unknown>,
) {
  const tempId = crypto.randomUUID();
  const built = buildExercise(payload, tempId);
  if (!built.ok) throw new ServiceError(built.error, 422);
  const slugInput = typeof payload.slug === "string" && payload.slug.trim() ? payload.slug : built.value.prompt;
  const slug = await uniqueSlug("cmsQuestion", slugInput);
  const question = await db.cmsQuestion.create({
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
  // Re-store the exercise with the real id as the question id.
  const finalExercise = { ...built.value, id: question.id };
  await db.cmsQuestion.update({
    where: { id: question.id },
    data: { data: JSON.stringify(finalExercise) },
  });
  await db.cmsQuestionVersion.create({
    data: {
      questionId: question.id,
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
      changeNote: "Created",
    },
  });
  await audit(actorId, "question.create", "question", question.id, { slug, type: finalExercise.type });
  return question;
}

export async function updateQuestion(
  actorId: string,
  id: string,
  payload: Record<string, unknown>,
) {
  const existing = await db.cmsQuestion.findUnique({ where: { id } });
  if (!existing) throw new ServiceError("Question not found.", 404);
  const built = buildExercise(payload, id);
  if (!built.ok) throw new ServiceError(built.error, 422);

  const version = existing.version + 1;
  const changeNote =
    typeof payload.changeNote === "string" && payload.changeNote.trim()
      ? payload.changeNote.trim().slice(0, 200)
      : "Edited";
  const updated = await db.cmsQuestion.update({
    where: { id },
    data: {
      type: built.value.type,
      skill: built.value.skill,
      difficulty: built.value.difficulty,
      prompt: built.value.prompt,
      tags: JSON.stringify(built.value.tags ?? []),
      data: JSON.stringify(built.value),
      version,
      status: existing.status === "published" ? "approved" : "draft", // edits need re-review
    },
  });
  await db.cmsQuestionVersion.create({
    data: {
      questionId: id,
      version,
      snapshot: JSON.stringify({
        type: built.value.type,
        skill: built.value.skill,
        difficulty: built.value.difficulty,
        prompt: built.value.prompt,
        tags: built.value.tags ?? [],
        data: built.value,
      }),
      changedById: actorId,
      changeNote,
    },
  });
  await audit(actorId, "question.update", "question", id, { version, changeNote });
  return updated;
}

export async function deleteQuestion(actorId: string, id: string) {
  const attempts = await db.exerciseAttempt.count({ where: { exerciseId: id, source: "cms" } });
  if (attempts > 0) {
    throw new ServiceError(
      `Learners have answered this question ${attempts} time(s); deleting would orphan historical results. Retire it instead.`,
      409,
    );
  }
  await db.cmsQuestion.delete({ where: { id } });
  await audit(actorId, "question.delete", "question", id, {});
}

export async function questionAction(actorId: string, actorRole: string, id: string, action: CmsAction | "retire", note = "") {
  const q = await db.cmsQuestion.findUnique({ where: { id } });
  if (!q) throw new ServiceError("Question not found.", 404);
  switch (action) {
    case "submit":
      if (q.status !== "draft") throw new ServiceError("Only draft questions can be submitted for review.", 409);
      return setQuestionStatus(actorId, id, "review", note);
    case "approve":
      if (!roleAtLeast(actorRole, "teacher")) throw new ServiceError("Only teachers and admins can approve.", 403);
      if (q.status !== "review") throw new ServiceError("Only questions in review can be approved.", 409);
      return setQuestionStatus(actorId, id, "approved", note);
    case "reject":
      if (!roleAtLeast(actorRole, "teacher")) throw new ServiceError("Only teachers and admins can reject.", 403);
      if (q.status !== "review") throw new ServiceError("Only questions in review can be rejected.", 409);
      return setQuestionStatus(actorId, id, "draft", note || "Changes requested");
    case "publish":
      if (!roleAtLeast(actorRole, "admin")) throw new ServiceError("Only administrators can publish questions.", 403);
      if (q.status !== "approved") throw new ServiceError("The question must be approved before publishing.", 409);
      return setQuestionStatus(actorId, id, "published", note);
    case "unpublish":
      if (!roleAtLeast(actorRole, "admin")) throw new ServiceError("Only administrators can unpublish questions.", 403);
      if (q.status !== "published") throw new ServiceError("The question is not published.", 409);
      return setQuestionStatus(actorId, id, "approved", note);
    case "retire":
      if (!roleAtLeast(actorRole, "admin")) throw new ServiceError("Only administrators can retire questions.", 403);
      return setQuestionStatus(actorId, id, "retired", note || "Retired");
  }
}

async function setQuestionStatus(actorId: string, id: string, status: string, note: string) {
  const q = await db.cmsQuestion.update({ where: { id }, data: { status } });
  await audit(actorId, `question.${status}`, "question", id, { status, note });
  return q;
}

/** Rehydrate the full Exercise for a question id (grading + serving). */
export async function getExerciseForQuestion(id: string): Promise<{ exercise: Exercise; version: number } | null> {
  const q = await db.cmsQuestion.findUnique({ where: { id } });
  if (!q) return null;
  const exercise = { ...parseJson<Exercise>(q.data, {} as unknown as Exercise), id: q.id };
  if (!exercise.type) return null;
  return { exercise, version: q.version };
}

// ---------------------------------------------------------------------------
// Assets
// ---------------------------------------------------------------------------

export async function listAssets(kind?: string): Promise<CmsAssetDto[]> {
  const assets = await db.cmsAsset.findMany({
    where: kind === "audio" || kind === "image" ? { kind } : undefined,
    orderBy: { createdAt: "desc" },
    include: { relatedLesson: true },
    take: 300,
  });
  return assets.map(toAssetDto);
}

function toAssetDto(a: {
  id: string;
  kind: string;
  title: string;
  fileName: string;
  mimeType: string;
  sizeBytes: number;
  durationSeconds: number | null;
  transcript: string;
  language: string;
  pronunciation: string;
  licence: string;
  source: string;
  relatedLessonId: string | null;
  relatedLesson: { title: string } | null;
  createdAt: Date;
}): CmsAssetDto {
  return {
    id: a.id,
    kind: a.kind as "audio" | "image",
    title: a.title,
    fileName: a.fileName,
    mimeType: a.mimeType,
    sizeBytes: a.sizeBytes,
    durationSeconds: a.durationSeconds,
    transcript: a.transcript,
    language: a.language,
    pronunciation: a.pronunciation,
    licence: a.licence,
    source: a.source,
    relatedLessonId: a.relatedLessonId,
    relatedLessonTitle: a.relatedLesson?.title ?? null,
    createdAt: a.createdAt.toISOString(),
    fileUrl: assetFileUrl(a.id),
  };
}

export async function createAsset(
  actorId: string,
  input: {
    kind: "audio" | "image";
    title: string;
    fileName: string;
    mimeType: string;
    sizeBytes: number;
    durationSeconds?: number | null;
    transcript?: string;
    language?: string;
    pronunciation?: string;
    licence?: string;
    source?: string;
    relatedLessonId?: string | null;
  },
) {
  const asset = await db.cmsAsset.create({
    data: {
      kind: input.kind,
      title: input.title,
      fileName: input.fileName,
      mimeType: input.mimeType,
      sizeBytes: input.sizeBytes,
      durationSeconds: input.durationSeconds ?? null,
      transcript: input.transcript ?? "",
      language: input.language || "en",
      pronunciation: input.pronunciation ?? "",
      licence: input.licence ?? "",
      source: input.source ?? "",
      relatedLessonId: input.relatedLessonId ?? null,
      uploadedById: actorId,
    },
  });
  await audit(actorId, "asset.create", "asset", asset.id, { kind: input.kind, title: input.title });
  return asset;
}

export async function updateAsset(
  actorId: string,
  id: string,
  input: Record<string, unknown>,
) {
  const data: Record<string, unknown> = {};
  if (typeof input.title === "string" && input.title.trim()) data.title = input.title.trim();
  for (const field of ["transcript", "pronunciation", "licence", "source"] as const) {
    if (typeof input[field] === "string") data[field] = (input[field] as string).trim();
  }
  if (typeof input.language === "string" && input.language.trim()) data.language = input.language.trim();
  if (input.relatedLessonId !== undefined) {
    const lessonId = typeof input.relatedLessonId === "string" && input.relatedLessonId ? input.relatedLessonId : null;
    if (lessonId && !(await db.cmsLesson.findUnique({ where: { id: lessonId } }))) {
      throw new ServiceError("Unknown lesson.", 422);
    }
    data.relatedLessonId = lessonId;
  }
  if (input.durationSeconds !== undefined) {
    const d = Number(input.durationSeconds);
    data.durationSeconds = Number.isFinite(d) && d > 0 ? d : null;
  }
  const asset = await db.cmsAsset.update({ where: { id }, data });
  await audit(actorId, "asset.update", "asset", id, data);
  return toAssetDto({ ...asset, relatedLesson: null });
}

export async function deleteAsset(actorId: string, id: string) {
  await db.cmsAsset.delete({ where: { id } });
  await audit(actorId, "asset.delete", "asset", id, {});
}

// ---------------------------------------------------------------------------
// Learner delivery
// ---------------------------------------------------------------------------

export async function getCatalogue(userId: string): Promise<CmsCatalogueCourseDto[]> {
  const courses = await db.cmsCourse.findMany({
    where: { live: true },
    orderBy: [{ order: "asc" }, { createdAt: "asc" }],
    include: {
      level: true,
      enrolments: { select: { userId: true } },
      modules: { include: { units: { include: { lessons: { where: { live: true }, select: { id: true } } } } } },
    },
  });
  return courses.map((c) => ({
    slug: c.slug,
    title: c.title,
    description: c.description,
    levelName: c.level?.name ?? null,
    enrolled: c.enrolments.some((e) => e.userId === userId),
    lessonCount: c.modules.reduce(
      (sum, m) => sum + m.units.reduce((s, u) => s + u.lessons.length, 0),
      0,
    ),
    learnerCount: c.enrolments.length,
  }));
}

export async function enrol(userId: string, courseSlug: string) {
  const course = await db.cmsCourse.findUnique({ where: { slug: courseSlug } });
  if (!course || !course.live) throw new ServiceError("This course is not available.", 404);
  const existing = await db.cmsEnrolment.findUnique({
    where: { userId_courseId: { userId, courseId: course.id } },
  });
  if (existing) return existing;
  const enrolment = await db.cmsEnrolment.create({ data: { userId, courseId: course.id } });
  await audit(userId, "course.enrol", "course", course.id, {});
  return enrolment;
}

export async function getLearnerCourse(userId: string, courseSlug: string): Promise<CmsLearnerCourseDto> {
  const course = await db.cmsCourse.findUnique({
    where: { slug: courseSlug },
    include: {
      level: true,
      enrolments: { where: { userId } },
      modules: {
        orderBy: { order: "asc" },
        include: {
          units: {
            orderBy: { order: "asc" },
            include: {
              lessons: {
                orderBy: [{ order: "asc" }, { createdAt: "asc" }],
                include: { prerequisites: { include: { requiresLesson: true } } },
              },
            },
          },
        },
      },
    },
  });
  if (!course || !course.live) throw new ServiceError("This course is not available.", 404);

  const progressRows = await db.cmsLessonProgress.findMany({
    where: { userId, lesson: { unit: { module: { courseId: course.id } } } },
    include: { lesson: true },
  });
  const completedSlugs = new Set(progressRows.filter((p) => p.status === "completed").map((p) => p.lesson.slug));
  const inProgressSlugs = new Set(progressRows.filter((p) => p.status === "in-progress").map((p) => p.lesson.slug));

  const lessons = course.modules.flatMap((m) =>
    m.units.flatMap((u) =>
      u.lessons
        .filter((l) => l.live)
        .map((l) => {
          const lockedBy = l.prerequisites
            .filter((p) => p.requiresLesson.live && !completedSlugs.has(p.requiresLesson.slug))
            .map((p) => ({ slug: p.requiresLesson.slug, title: p.requiresLesson.title }));
          return {
            slug: l.slug,
            title: l.title,
            description: l.description,
            estimatedMinutes: l.estimatedMinutes,
            live: true as const,
            completed: completedSlugs.has(l.slug),
            inProgress: inProgressSlugs.has(l.slug),
            locked: lockedBy.length > 0,
            lockedBy,
            prerequisiteSlugs: l.prerequisites.map((p) => p.requiresLesson.slug),
          };
        }),
    ),
  );

  return {
    slug: course.slug,
    title: course.title,
    description: course.description,
    levelName: course.level?.name ?? null,
    enrolled: course.enrolments.length > 0,
    lessons,
    completedCount: lessons.filter((l) => l.completed).length,
    totalLessons: lessons.length,
  };
}

type LessonWithCourse = Prisma.CmsLessonGetPayload<{
  include: { unit: { include: { module: { include: { course: true } } } } };
}>;

interface LiveSnapshot {
  lesson: LessonWithCourse;
  snapshot: {
    title: string;
    description: string;
    objectives: string[];
    estimatedMinutes: number;
    blocks: { id: string; type: string; data: Record<string, unknown> }[];
  };
}

/** Resolve the published snapshot of a live lesson (never the working copy). */
async function resolveLiveLesson(slug: string): Promise<LiveSnapshot | null> {
  const lesson = await db.cmsLesson.findUnique({
    where: { slug },
    include: { unit: { include: { module: { include: { course: true } } } } },
  });
  if (!lesson || !lesson.live || !lesson.live || lesson.publishedVersion == null) return null;
  const version = await db.cmsLessonVersion.findUnique({
    where: { lessonId_version: { lessonId: lesson.id, version: lesson.publishedVersion } },
  });
  if (!version) return null;
  const snapshot = parseJson<LiveSnapshot["snapshot"] | null>(version.snapshot, null);
  if (!snapshot) return null;
  return { lesson, snapshot };
}

/** Collect the published questions referenced by practice blocks. */
async function collectExercises(snapshot: LiveSnapshot["snapshot"]): Promise<SafeExercise[]> {
  const ids = snapshot.blocks
    .filter((b) => b.type === "practice")
    .flatMap((b) => (Array.isArray(b.data.exerciseIds) ? (b.data.exerciseIds as string[]) : []));
  if (ids.length === 0) return [];
  const questions = await db.cmsQuestion.findMany({ where: { id: { in: ids }, status: "published" } });
  const byId = new Map(questions.map((q) => [q.id, q]));
  const out: SafeExercise[] = [];
  for (const id of ids) {
    const q = byId.get(id);
    if (!q) continue; // retired/unpublished questions are skipped, not failed
    const exercise = { ...parseJson<Exercise>(q.data, {} as unknown as Exercise), id: q.id };
    if (exercise.type) out.push(sanitizeExercise(exercise));
  }
  return out;
}

export async function getLearnerLesson(userId: string, slug: string): Promise<CmsLearnerLessonDto> {
  const live = await resolveLiveLesson(slug);
  if (!live) throw new ServiceError("This lesson is not available.", 404);
  const lesson = live.lesson;
  const course = lesson.unit.module.course;

  // Enrolment gate: lessons are for enrolled learners.
  const enrolment = await db.cmsEnrolment.findUnique({
    where: { userId_courseId: { userId, courseId: course.id } },
  });
  if (!enrolment) {
    throw new ServiceError("Enrol in this course to open its lessons.", 403);
  }

  // Prerequisite check.
  const prerequisites = await db.cmsPrerequisite.findMany({
    where: { lessonId: lesson.id },
    include: { requiresLesson: true },
  });
  const completedPrereqs = await db.cmsLessonProgress.findMany({
    where: {
      userId,
      lessonId: { in: prerequisites.map((p) => p.requiresLessonId) },
      status: "completed",
    },
  });
  const completedIds = new Set(completedPrereqs.map((p) => p.lessonId));
  const missing = prerequisites
    .filter((p) => !completedIds.has(p.requiresLessonId))
    .map((p) => ({ slug: p.requiresLesson.slug, title: p.requiresLesson.title }));

  // Progress row (created on first open, never auto-completed).
  let progress = await db.cmsLessonProgress.findUnique({
    where: { userId_lessonId: { userId, lessonId: lesson.id } },
  });
  if (!progress) {
    progress = await db.cmsLessonProgress.create({
      data: { userId, lessonId: lesson.id, status: "in-progress" },
    });
  }

  const submissions = await db.cmsAssignmentSubmission.findMany({
    where: { userId, lessonId: lesson.id },
    select: { blockId: true },
  });

  const exercises = await collectExercises(live.snapshot);

  // Prev/next live lesson within the same course (for navigation).
  const siblings = await db.cmsLesson.findMany({
    where: { unit: { module: { course: { slug: course.slug } } }, live: true },
    orderBy: [{ order: "asc" }, { createdAt: "asc" }],
    select: { slug: true },
  });
  const idx = siblings.findIndex((s) => s.slug === slug);

  return {
    slug: lesson.slug,
    title: live.snapshot.title,
    description: live.snapshot.description,
    objectives: live.snapshot.objectives ?? [],
    estimatedMinutes: live.snapshot.estimatedMinutes,
    courseSlug: course.slug,
    courseTitle: course.title,
    unitTitle: lesson.unit.title,
    version: lesson.publishedVersion ?? 1,
    blocks: live.snapshot.blocks.map((b) => ({
      id: b.id,
      block: b.data as unknown as CmsLearnerLessonDto["blocks"][number]["block"],
    })),
    exercises,
    submittedBlockIds: submissions.map((s) => s.blockId),
    progress: {
      status: progress.status as "in-progress" | "completed",
      completedAt: progress.completedAt?.toISOString() ?? null,
    },
    prerequisitesMet: missing.length === 0,
    missingPrerequisites: missing,
    nextLessonSlug: idx >= 0 && idx < siblings.length - 1 ? siblings[idx + 1].slug : null,
    prevLessonSlug: idx > 0 ? siblings[idx - 1].slug : null,
  };
}

export async function submitAssignment(
  userId: string,
  lessonSlug: string,
  blockId: string,
  text: string,
) {
  const live = await resolveLiveLesson(lessonSlug);
  if (!live) throw new ServiceError("This lesson is not available.", 404);
  const block = live.snapshot.blocks.find((b) => b.id === blockId && b.type === "assignment");
  if (!block) throw new ServiceError("This assignment is not part of the published lesson.", 404);
  const data = block.data as { title: string; minWords: number; maxWords: number };
  const words = countWords(text);
  if (words < data.minWords) {
    throw new ServiceError(`Please write at least ${data.minWords} words (you have ${words}).`, 422);
  }
  const existing = await db.cmsAssignmentSubmission.findUnique({
    where: { userId_blockId: { userId, blockId } },
  });
  const payload = {
    userId,
    lessonId: live.lesson.id,
    blockId,
    text: text.slice(0, 10_000),
    wordCount: words,
  };
  const submission = existing
    ? await db.cmsAssignmentSubmission.update({ where: { id: existing.id }, data: payload })
    : await db.cmsAssignmentSubmission.create({ data: payload });
  return submission;
}

/** Server-verified completion: every exercise attempted, every assignment submitted. */
export async function completeLesson(userId: string, lessonSlug: string) {
  const live = await resolveLiveLesson(lessonSlug);
  if (!live) throw new ServiceError("This lesson is not available.", 404);
  const lesson = live.lesson;

  const missing: string[] = [];
  for (const block of live.snapshot.blocks) {
    if (block.type === "practice") {
      const ids = Array.isArray(block.data.exerciseIds) ? (block.data.exerciseIds as string[]) : [];
      for (const id of ids) {
        const attempted = await db.exerciseAttempt.findFirst({
          where: { userId, exerciseId: id, lessonSlug: lesson.slug, source: "cms" },
          select: { id: true },
        });
        if (!attempted) missing.push("exercises");
      }
    } else if (block.type === "assignment") {
      const submitted = await db.cmsAssignmentSubmission.findUnique({
        where: { userId_blockId: { userId, blockId: block.id } },
        select: { id: true },
      });
      if (!submitted) missing.push(block.data.title as string);
    }
  }
  if (missing.length > 0) {
    const unique = [...new Set(missing)];
    throw new ServiceError(
      `Complete these first: ${unique.slice(0, 3).join(", ")}${unique.length > 3 ? "…" : ""}.`,
      422,
    );
  }

  const existing = await db.cmsLessonProgress.findUnique({
    where: { userId_lessonId: { userId, lessonId: lesson.id } },
  });
  const completed = existing
    ? await db.cmsLessonProgress.update({
        where: { id: existing.id },
        data: {
          status: "completed",
          completedAt: existing.completedAt ?? new Date(),
          completedVersion: lesson.publishedVersion,
        },
      })
    : await db.cmsLessonProgress.create({
        data: {
          userId,
          lessonId: lesson.id,
          status: "completed",
          completedAt: new Date(),
          completedVersion: lesson.publishedVersion,
        },
      });
  return completed;
}

// ---------------------------------------------------------------------------
// Admin user management (privacy: aggregates only, never password hashes)
// ---------------------------------------------------------------------------

export async function listAdminUsers(search?: string): Promise<CmsAdminUserDto[]> {
  const where = search
    ? {
        OR: [
          { email: { contains: search } },
          { name: { contains: search } },
          { email: { contains: search.toLowerCase() } },
          { name: { contains: search.toLowerCase() } },
        ],
      }
    : undefined;
  const users = await db.user.findMany({ where, orderBy: { createdAt: "desc" }, take: 200 });
  const ids = users.map((u) => u.id);

  const [coreProgress, stats, enrolments, cmsProgress] = ids.length
    ? await Promise.all([
        db.lessonProgress.groupBy({ by: ["userId"], where: { userId: { in: ids }, status: "completed" }, _count: { _all: true } }),
        db.userStats.findMany({ where: { userId: { in: ids } }, select: { userId: true, totalAttempts: true, correctAttempts: true, lastActiveDay: true } }),
        db.cmsEnrolment.groupBy({ by: ["userId"], where: { userId: { in: ids } }, _count: { _all: true } }),
        db.cmsLessonProgress.groupBy({ by: ["userId"], where: { userId: { in: ids }, status: "completed" }, _count: { _all: true } }),
      ])
    : [[], [], [], []];

  const coreMap = new Map(coreProgress.map((r) => [r.userId, r._count._all]));
  const statsMap = new Map(stats.map((s) => [s.userId, s]));
  const enrolMap = new Map(enrolments.map((r) => [r.userId, r._count._all]));
  const cmsMap = new Map(cmsProgress.map((r) => [r.userId, r._count._all]));

  return users.map((u) => {
    const s = statsMap.get(u.id);
    return {
      id: u.id,
      email: u.email,
      name: u.name,
      role: u.role as CmsAdminUserDto["role"],
      status: u.status as CmsAdminUserDto["status"],
      createdAt: u.createdAt.toISOString(),
      lastActiveDay: s?.lastActiveDay ?? null,
      lessonsCompleted: coreMap.get(u.id) ?? 0,
      totalAttempts: s?.totalAttempts ?? 0,
      accuracy: s && s.totalAttempts > 0 ? s.correctAttempts / s.totalAttempts : null,
      cmsEnrolments: enrolMap.get(u.id) ?? 0,
      cmsLessonsCompleted: cmsMap.get(u.id) ?? 0,
    };
  });
}

export async function getAdminUserDetail(userId: string) {
  const user = await db.user.findUnique({ where: { id: userId } });
  if (!user) throw new ServiceError("User not found.", 404);
  const [core, stats, enrolments, cmsCompleted, recentActivity] = await Promise.all([
    db.lessonProgress.count({ where: { userId, status: "completed" } }),
    db.userStats.findUnique({ where: { userId } }),
    db.cmsEnrolment.count({ where: { userId } }),
    db.cmsLessonProgress.count({ where: { userId, status: "completed" } }),
    db.exerciseAttempt.findMany({
      where: { userId },
      orderBy: { createdAt: "desc" },
      take: 10,
      select: { type: true, skill: true, isCorrect: true, createdAt: true },
    }),
  ]);
  return {
    id: user.id,
    email: user.email,
    name: user.name,
    role: user.role,
    status: user.status,
    createdAt: user.createdAt.toISOString(),
    lessonsCompleted: core,
    totalAttempts: stats?.totalAttempts ?? 0,
    accuracy: stats && stats.totalAttempts > 0 ? stats.correctAttempts / stats.totalAttempts : null,
    streakDays: stats?.streakDays ?? 0,
    lastActiveDay: stats?.lastActiveDay ?? null,
    cmsEnrolments: enrolments,
    cmsLessonsCompleted: cmsCompleted,
    recentActivity: recentActivity.map((a) => ({
      type: a.type,
      skill: a.skill,
      isCorrect: a.isCorrect,
      createdAt: a.createdAt.toISOString(),
    })),
  };
}

export async function setUserRole(actorId: string, targetId: string, role: string) {
  if (!["student", "editor", "teacher", "admin"].includes(role)) {
    throw new ServiceError("Unknown role.", 422);
  }
  if (targetId === actorId) throw new ServiceError("You cannot change your own role.", 422);
  const target = await db.user.update({ where: { id: targetId }, data: { role } });
  await audit(actorId, "user.role", "user", targetId, { role });
  return { id: target.id, role: target.role };
}

export async function setUserStatus(actorId: string, targetId: string, status: string) {
  if (status !== "active" && status !== "suspended") throw new ServiceError("Unknown status.", 422);
  if (targetId === actorId) throw new ServiceError("You cannot suspend your own account.", 422);
  const target = await db.user.update({ where: { id: targetId }, data: { status } });
  if (status === "suspended") {
    await db.session.deleteMany({ where: { userId: targetId } });
  }
  await audit(actorId, "user.status", "user", targetId, { status });
  return { id: target.id, status: target.status };
}
