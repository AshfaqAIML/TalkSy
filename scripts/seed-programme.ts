/**
 * Seeds the Core English Programme (PROMPT 34) into the CMS:
 * 6 levels · 6 courses · 17 modules · 56 chapters (units) · ~300 lessons
 * (blocks + assignment + practice questions) with the full prerequisite
 * chain, demo enrolment and honest demo progress.
 *
 * Run: bun scripts/seed-programme.ts   (DATABASE_URL selects the database)
 *
 * Idempotency: a CmsAuditLog marker records PROGRAMME_SEED_VERSION. When
 * the marker matches, the seed exits immediately; otherwise it upserts
 * everything in place (progress and learner data are never destroyed).
 *
 * CEFR levels are used as a curriculum reference only — never as a claim
 * of official certification.
 */

import { PrismaClient } from "@prisma/client";
import {
  PROGRAMME_CHAPTERS,
  PROGRAMME_LESSONS,
  PROGRAMME_LEVELS,
  chapterById,
  chapterByNumber,
} from "../src/data/programme";
import type { ChapterSpec, LessonSpec } from "../src/data/programme";
import { practiceBankForSeed } from "../src/data/practice-bank";
import { validateQuestion } from "../src/lib/practice/qc";
import { buildReport, type GradedInput } from "../src/lib/practice/report";
import { programmeLessonTitles } from "../src/lib/practice/mastery";

const db = new PrismaClient();

/** Bump when authored content changes so the next run reseeds. */
const PROGRAMME_SEED_VERSION = 6; // v6 = PROMPT 57 depth mandate: CH-06–12 at the v2 teaching standard

const NOW = new Date();
const DAY = 24 * 60 * 60 * 1000;
/** Demo learner completed Pre-A1 + the first lessons of A1, ~2 weeks of activity. */
const DEMO_COMPLETED_CHAPTERS = 8;
const DEMO_COMPLETED_EXTRA_LESSONS = 3;

async function seedMarkerCurrent(): Promise<boolean> {
  const markers = await db.cmsAuditLog.findMany({
    where: { action: "programme.seed" },
    orderBy: { createdAt: "desc" },
    take: 1,
  });
  const marker = markers[0];
  if (!marker) return false;
  try {
    const detail = JSON.parse(marker.detail) as { version?: number };
    return detail.version === PROGRAMME_SEED_VERSION;
  } catch {
    return false;
  }
}

async function writeSeedMarker(chapters: number, lessons: number, questions: number) {
  await db.cmsAuditLog.create({
    data: {
      action: "programme.seed",
      entityType: "import",
      entityId: "core-english-programme",
      detail: JSON.stringify({
        version: PROGRAMME_SEED_VERSION,
        chapters,
        lessons,
        questions,
        seededAt: new Date().toISOString(),
      }),
    },
  });
}

async function upsertQuestion(
  lesson: LessonSpec,
  question: (typeof lesson.questions)[number],
  index: number,
  adminId: string | null,
): Promise<string> {
  const slug = `${lesson.slug}-q${index + 1}`;
  const payload = JSON.stringify({ ...question, id: "pending" });
  const existing = await db.cmsQuestion.findUnique({ where: { slug } });
  if (existing) {
    const nextData = JSON.stringify({ ...question, id: existing.id });
    if (existing.data === nextData && existing.status === "published") return existing.id;
    const version = existing.version + 1;
    await db.cmsQuestion.update({
      where: { id: existing.id },
      data: {
        type: question.type,
        skill: question.skill,
        difficulty: question.difficulty,
        prompt: question.prompt,
        tags: JSON.stringify((question as { tags?: string[] }).tags ?? []),
        data: nextData,
        status: "published",
        version,
      },
    });
    await db.cmsQuestionVersion.create({
      data: {
        questionId: existing.id,
        version,
        snapshot: JSON.stringify({
          type: question.type,
          skill: question.skill,
          difficulty: question.difficulty,
          prompt: question.prompt,
          tags: (question as { tags?: string[] }).tags ?? [],
          data: { ...question, id: existing.id },
        }),
        changedById: adminId,
        changeNote: "Core English Programme seed update",
      },
    });
    return existing.id;
  }
  const created = await db.cmsQuestion.create({
    data: {
      slug,
      type: question.type,
      skill: question.skill,
      difficulty: question.difficulty,
      prompt: question.prompt,
      tags: JSON.stringify((question as { tags?: string[] }).tags ?? []),
      data: payload,
      status: "published",
      version: 1,
      createdById: adminId,
    },
  });
  const exercise = { ...question, id: created.id };
  await db.cmsQuestion.update({
    where: { id: created.id },
    data: { data: JSON.stringify(exercise) },
  });
  await db.cmsQuestionVersion.create({
    data: {
      questionId: created.id,
      version: 1,
      snapshot: JSON.stringify({
        type: question.type,
        skill: question.skill,
        difficulty: question.difficulty,
        prompt: question.prompt,
        tags: (question as { tags?: string[] }).tags ?? [],
        data: exercise,
      }),
      changedById: adminId,
      changeNote: "Core English Programme seed",
    },
  });
  return created.id;
}

async function upsertLesson(
  unitId: string,
  lesson: LessonSpec,
  order: number,
  adminId: string | null,
): Promise<void> {
  // 1. Question bank rows (stable slugs <lesson>-q<n>) — one series across
  //    all practice sets so slug numbering stays stable when sets change.
  const sets = lesson.practiceSets.length > 0 ? lesson.practiceSets : lesson.questions.length > 0 ? [{ title: "Check your understanding", questions: lesson.questions }] : [];
  const questionIds: string[] = [];
  for (const set of sets) {
    for (const question of set.questions) {
      questionIds.push(await upsertQuestion(lesson, question, questionIds.length, adminId));
    }
  }

  // 2. Compose the block list: teaching blocks + practice sets + assignment + homework.
  const blocks: Array<Record<string, unknown>> = [...(lesson.blocks as unknown as Array<Record<string, unknown>>)];
  let cursor = 0;
  for (const set of sets) {
    const ids = questionIds.slice(cursor, cursor + set.questions.length);
    cursor += set.questions.length;
    blocks.push({
      type: "practice",
      ...(set.title ? { title: set.title } : {}),
      ...(set.variant ? { variant: set.variant } : {}),
      ...(set.note ? { note: set.note } : {}),
      exerciseIds: ids,
    });
  }
  blocks.push({
    type: "assignment",
    title: lesson.assignment.title,
    instructions: lesson.assignment.instructions,
    minWords: lesson.assignment.minWords,
    maxWords: lesson.assignment.maxWords,
  });
  if (lesson.homework.length > 0) {
    blocks.push({ type: "homework", title: "Before your next session", tasks: lesson.homework });
  }

  // 3. Upsert the lesson row + blocks + immutable version snapshot.
  //    Review status: authored content is AI-written and machine-checked —
  //    it is stored as "ai-reviewed" and NEVER higher. If a human already
  //    promoted this exact content (identical blocks), that promotion is
  //    preserved; any content change resets to "ai-reviewed".
  const existing = await db.cmsLesson.findUnique({
    where: { slug: lesson.slug },
    include: { blocks: true },
  });
  const nextBlocksJson = JSON.stringify(
    blocks.map((b, i) => ({ order: i, type: b.type, data: b })),
  );
  const existingBlocksJson = existing
    ? JSON.stringify(
        [...existing.blocks]
          .sort((a, b) => a.order - b.order)
          .map((b) => ({ order: b.order, type: b.type, data: JSON.parse(b.data) })),
      )
    : "";
  const contentUnchanged = existing !== null && existingBlocksJson === nextBlocksJson;
  const reviewStatus =
    contentUnchanged && (existing!.reviewStatus === "human-reviewed" || existing!.reviewStatus === "approved")
      ? existing!.reviewStatus
      : "ai-reviewed";
  const common = {
    unitId,
    title: lesson.title,
    description: lesson.description,
    objectives: JSON.stringify(lesson.outcomes),
    estimatedMinutes: lesson.minutes,
    order,
    status: "approved",
    reviewStatus,
    live: true,
  };
  let lessonId: string;
  let version: number;
  if (!existing) {
    const created = await db.cmsLesson.create({
      data: {
        slug: lesson.slug,
        ...common,
        version: 1,
        publishedVersion: 1,
        publishedAt: NOW,
        createdById: adminId,
      },
    });
    lessonId = created.id;
    version = 1;
  } else {
    lessonId = existing.id;
    version = existing.version + 1;
    await db.cmsLesson.update({
      where: { id: existing.id },
      data: { ...common, version, publishedVersion: version, publishedAt: NOW },
    });
    await db.cmsLessonBlock.deleteMany({ where: { lessonId } });
  }
  await db.cmsLessonBlock.createMany({
    data: blocks.map((b, i) => ({
      lessonId,
      order: i,
      type: b.type as string,
      data: JSON.stringify(b),
    })),
  });
  await db.cmsLessonVersion.create({
    data: {
      lessonId,
      version,
      snapshot: JSON.stringify({
        title: lesson.title,
        description: lesson.description,
        objectives: lesson.outcomes,
        estimatedMinutes: lesson.minutes,
        blocks: blocks.map((b, i) => ({ id: `${lesson.slug}-b${i + 1}`, type: b.type, data: b })),
      }),
      changedById: adminId,
      changeNote: existing ? "Core English Programme seed update" : "Core English Programme seed",
    },
  });
}

/** The prerequisite chain: previous lesson in the chapter + chapter gates. */
async function wirePrerequisites(chapter: ChapterSpec, chapterById: (id: string) => ChapterSpec | undefined): Promise<number> {
  const lessonIdsBySlug = new Map(chapter.lessons.map((l) => [l.slug, l]));
  let wired = 0;
  for (const lesson of chapter.lessons) {
    const row = await db.cmsLesson.findUnique({ where: { slug: lesson.slug } });
    if (!row) continue;
    // Prerequisite lesson ids: derived chain + chapter gates for the entry lesson.
    const requiredSlugs: string[] = [];
    for (const prereqId of lesson.prerequisites) {
      // Within-chapter chain: same chapter.
      const target = lessonIdsBySlug.get(prereqIdToSlug(prereqId));
      if (target) requiredSlugs.push(target.slug);
    }
    if (lesson.order === 1) {
      // Chapter gate: the final lesson of each prerequisite chapter.
      for (const chapterId of chapter.prerequisites) {
        const prereqChapter = chapterById(chapterId);
        const last = prereqChapter?.lessons[prereqChapter.lessons.length - 1];
        if (last) requiredSlugs.push(last.slug);
      }
    }
    await db.cmsPrerequisite.deleteMany({ where: { lessonId: row.id } });
    for (const requiresSlug of requiredSlugs) {
      const target = await db.cmsLesson.findUnique({ where: { slug: requiresSlug } });
      if (!target || target.id === row.id) continue;
      await db.cmsPrerequisite.create({
        data: { lessonId: row.id, requiresLessonId: target.id },
      });
      wired += 1;
    }
  }
  return wired;
}

function prereqIdToSlug(id: string): string {
  // "CH-13-L02" → "ch-13-l-02"
  const match = /^CH-(\d+)-L(\d+)$/.exec(id);
  if (!match) return id.toLowerCase();
  return `ch-${match[1]}-l-${match[2]}`;
}

async function seedProgramme(): Promise<void> {
  // PROMPT 36: metadata backfill runs first on every seed (marker or not) so
  // existing databases gain the chapter/lesson/topic columns without a
  // content reseed.
  await backfillQuestionMeta();

  if (await seedMarkerCurrent()) {
    // Content is current, but the demo learner may not have existed when the
    // marker was written (fresh databases create the demo user later) — sync
    // enrolment + progress idempotently before exiting.
    await ensureDemoProgress();
    await ensureDemoPractice();
    const [courses, lessons, chapterQuestions] = await Promise.all([
      db.cmsCourse.count({ where: { slug: { in: PROGRAMME_LEVELS.map((l) => l.courseSlug) } } }),
      db.cmsLesson.count({ where: { slug: { startsWith: "ch-" } } }),
      db.cmsQuestion.count({ where: { status: "published", chapterSlug: { not: null } } }),
    ]);
    console.log(`[programme] already seeded (v${PROGRAMME_SEED_VERSION}) · ${courses} courses · ${lessons} lessons · ${chapterQuestions} chapter questions — demo progress + practice synced.`);
    return;
  }

  const admin = (await db.user.findFirst({ where: { role: "admin" } })) ?? null;

  // 1. Levels + courses + modules + units (chapters) + lessons.
  for (const level of PROGRAMME_LEVELS) {
    let levelRow = await db.cmsLevel.findUnique({ where: { slug: level.slug } });
    const levelData = { name: level.name, description: level.description, order: level.order };
    if (!levelRow) {
      levelRow = await db.cmsLevel.create({ data: { slug: level.slug, ...levelData } });
    } else if (
      levelRow.name !== levelData.name ||
      levelRow.description !== levelData.description ||
      levelRow.order !== levelData.order
    ) {
      levelRow = await db.cmsLevel.update({ where: { id: levelRow.id }, data: levelData });
    }

    let course = await db.cmsCourse.findUnique({ where: { slug: level.courseSlug } });
    const courseData = {
      title: level.courseTitle,
      description: level.description,
      levelId: levelRow.id,
      status: "approved",
      live: true,
      order: level.order,
    };
    if (!course) {
      course = await db.cmsCourse.create({
        data: { slug: level.courseSlug, ...courseData, createdById: admin?.id ?? null },
      });
    } else {
      course = await db.cmsCourse.update({ where: { id: course.id }, data: courseData });
    }

    for (const [moduleIndex, module] of level.modules.entries()) {
      let moduleRow = await db.cmsModule.findUnique({ where: { slug: module.slug } });
      const moduleData = {
        courseId: course.id,
        title: module.title,
        description: module.description,
        order: moduleIndex + 1,
      };
      if (!moduleRow) {
        moduleRow = await db.cmsModule.create({ data: { slug: module.slug, ...moduleData } });
      } else {
        moduleRow = await db.cmsModule.update({ where: { id: moduleRow.id }, data: moduleData });
      }

      const chapters = PROGRAMME_CHAPTERS.filter(
        (c) => c.levelId === level.id && c.moduleSlug === module.slug,
      );
      for (const [unitIndex, chapter] of chapters.entries()) {
        let unitRow = await db.cmsUnit.findUnique({ where: { slug: chapter.slug } });
        const unitData = {
          moduleId: moduleRow.id,
          title: `Chapter ${String(chapter.number).padStart(2, "0")} · ${chapter.title}`,
          description: chapter.description,
          order: unitIndex + 1,
        };
        if (!unitRow) {
          unitRow = await db.cmsUnit.create({ data: { slug: chapter.slug, ...unitData } });
        } else {
          unitRow = await db.cmsUnit.update({ where: { id: unitRow.id }, data: unitData });
        }
        for (const [lessonIndex, lesson] of chapter.lessons.entries()) {
          await upsertLesson(unitRow.id, lesson, lessonIndex + 1, admin?.id ?? null);
        }
      }
    }
  }

  // 2. Prerequisite chain: within chapters + chapter gates.
  let wired = 0;
  for (const chapter of PROGRAMME_CHAPTERS) {
    wired += await wirePrerequisites(chapter, chapterById);
  }

  // 2b. PROMPT 36: chapter practice bank (QC-gated upserts).
  const bankSeeded = await seedPracticeBank(admin?.id ?? null);

  // 3. Demo learner: enrol + honest progress (completed Pre-A1, started A1),
  //    plus demo practice history (PROMPT 36).
  await ensureDemoProgress();
  await ensureDemoPractice();

  const [courses, modules, units, lessons, blocks, questions, prereqs, aiReviewed, bankQuestions] = await Promise.all([
    db.cmsCourse.count({ where: { slug: { in: PROGRAMME_LEVELS.map((l) => l.courseSlug) } } }),
    db.cmsModule.count({ where: { slug: { in: PROGRAMME_LEVELS.flatMap((l) => l.modules.map((m) => m.slug)) } } }),
    db.cmsUnit.count({ where: { slug: { startsWith: "ch-" } } }),
    db.cmsLesson.count({ where: { slug: { startsWith: "ch-" } } }),
    db.cmsLessonBlock.count({ where: { lesson: { slug: { startsWith: "ch-" } } } }),
    db.cmsQuestion.count({ where: { slug: { startsWith: "ch-" } } }),
    db.cmsPrerequisite.count({ where: { lesson: { slug: { startsWith: "ch-" } } } }),
    db.cmsLesson.count({ where: { slug: { startsWith: "ch-" }, reviewStatus: "ai-reviewed" } }),
    db.cmsQuestion.count({ where: { status: "published", chapterSlug: { not: null } } }),
  ]);
  await writeSeedMarker(units, lessons, questions);
  console.log(
    `[programme] ${courses} courses · ${modules} modules · ${units} chapters · ${lessons} lessons · ${blocks} blocks · ${questions} questions (${bankQuestions} in the chapter practice bank) · ${prereqs} prerequisite links · ${aiReviewed} lessons labelled AI-reviewed (human review pending for all programme content)`,
  );
  void bankSeeded;
}

/** The demo learner's honest state: enrolled in the six courses, completed
 * Pre-A1 + the first A1 lessons, one lesson in progress. Idempotent. */
async function ensureDemoProgress(): Promise<void> {
  const demo = await db.user.findUnique({ where: { email: "demo@talksy.app" } });
  if (!demo) return;
  for (const level of PROGRAMME_LEVELS) {
    const course = await db.cmsCourse.findUnique({ where: { slug: level.courseSlug } });
    if (!course) continue;
    const existing = await db.cmsEnrolment.findFirst({ where: { userId: demo.id, courseId: course.id } });
    if (!existing) {
      await db.cmsEnrolment.create({ data: { userId: demo.id, courseId: course.id } });
    }
  }
  const completedSlugs: string[] = [];
  for (const chapter of PROGRAMME_CHAPTERS.slice(0, DEMO_COMPLETED_CHAPTERS)) {
    completedSlugs.push(...chapter.lessons.map((l) => l.slug));
  }
  const a1Chapter = PROGRAMME_CHAPTERS[DEMO_COMPLETED_CHAPTERS]; // CH-09
  completedSlugs.push(...a1Chapter.lessons.slice(0, DEMO_COMPLETED_EXTRA_LESSONS).map((l) => l.slug));
  const totalDays = Math.max(completedSlugs.length, 1) + 3;
  let created = 0;
  for (const [index, slug] of completedSlugs.entries()) {
    const existing = await db.cmsLessonProgress.findFirst({ where: { userId: demo.id, lesson: { slug } } });
    if (existing) continue;
    const lesson = await db.cmsLesson.findUnique({ where: { slug } });
    if (!lesson) continue;
    const completedAt = new Date(NOW.getTime() - (totalDays - index) * DAY + 4 * 60 * 60 * 1000);
    await db.cmsLessonProgress.create({
      data: {
        userId: demo.id,
        lessonId: lesson.id,
        status: "completed",
        completedVersion: lesson.publishedVersion ?? lesson.version,
        completedAt,
      },
    });
    created += 1;
  }
  const resumeSlug = a1Chapter.lessons[DEMO_COMPLETED_EXTRA_LESSONS]?.slug;
  if (resumeSlug) {
    const lesson = await db.cmsLesson.findUnique({ where: { slug: resumeSlug } });
    const existing = lesson
      ? await db.cmsLessonProgress.findFirst({ where: { userId: demo.id, lessonId: lesson.id } })
      : null;
    if (lesson && !existing) {
      await db.cmsLessonProgress.create({
        data: {
          userId: demo.id,
          lessonId: lesson.id,
          status: "in-progress",
          completedVersion: lesson.publishedVersion ?? lesson.version,
        },
      });
      created += 1;
    }
  }
  if (created > 0) {
    console.log(`[programme] demo learner: ${created} new progress rows (enrolled in the six courses, Pre-A1 complete, CH-09 in progress)`);
  }
}

// ---------------------------------------------------------------------------
// PROMPT 36 — practice-bank seeding, metadata backfill, demo practice history
// ---------------------------------------------------------------------------

/** Known lesson slugs for revisionLesson QC (programme + any core lesson). */
function knownLessonSlugs(): Set<string> {
  return new Set(PROGRAMME_LESSONS.map((lesson) => lesson.slug));
}

/**
 * Idempotent metadata backfill for every published question:
 *   - ch-XX-l-YY-qN  (lesson practice sets)  → chapterSlug ch-XX, lessonSlug ch-XX-l-YY
 *   - ch-XX-pq-NN     (practice bank)        → chapterSlug ch-XX (lessonSlug set at insert)
 *   - empty tags      → [chapter title]
 * Runs on every seed so pre-PROMPT-36 databases upgrade in place.
 */
async function backfillQuestionMeta(): Promise<void> {
  const chapterTitleBySlug = new Map(
    PROGRAMME_CHAPTERS.map((c) => [c.slug, c.title] as const),
  );
  const rows = await db.cmsQuestion.findMany({
    select: { id: true, slug: true, tags: true, chapterSlug: true, lessonSlug: true },
  });
  let updated = 0;
  for (const row of rows) {
    const lessonMatch = /^ch-\d{2}-l-\d{2}$/.exec(row.slug.split("-q")[0] ?? "");
    let chapterSlug: string | null = row.chapterSlug;
    let lessonSlug: string | null = row.lessonSlug;
    const stem = row.slug.split("-q")[0];
    if (row.chapterSlug === null && /^ch-\d{2}-l-\d{2}$/.test(stem)) {
      chapterSlug = stem.slice(0, 5);
      lessonSlug = stem;
    } else if (row.chapterSlug === null && /^ch-\d{2}-pq-\d{2}$/.test(row.slug)) {
      chapterSlug = row.slug.slice(0, 5);
    }
    void lessonMatch;
    let tags: string[] = [];
    try {
      const parsed = JSON.parse(row.tags) as unknown;
      if (Array.isArray(parsed)) tags = parsed.filter((t): t is string => typeof t === "string" && t.length > 0);
    } catch {
      tags = [];
    }
    const needsTags = tags.length === 0 && chapterSlug !== null;
    if (needsTags && chapterSlug) {
      tags = [chapterTitleBySlug.get(chapterSlug) ?? chapterSlug];
    }
    if (
      chapterSlug !== row.chapterSlug ||
      lessonSlug !== row.lessonSlug ||
      needsTags
    ) {
      await db.cmsQuestion.update({
        where: { id: row.id },
        data: {
          ...(chapterSlug !== row.chapterSlug ? { chapterSlug } : {}),
          ...(lessonSlug !== row.lessonSlug ? { lessonSlug } : {}),
          ...(needsTags ? { tags: JSON.stringify(tags) } : {}),
        },
      });
      updated += 1;
    }
  }
  if (updated > 0) {
    console.log(`[programme] backfilled chapter/lesson/topic metadata on ${updated} questions`);
  }
}

/**
 * Upsert the PROMPT 36 chapter practice bank (ch-06..ch-56, 8 questions per
 * chapter). Every question passes the QC validator before it is published;
 * a QC error aborts the seed (fail loudly, never publish a broken question).
 */
async function seedPracticeBank(adminId: string | null): Promise<number> {
  const bank = practiceBankForSeed();
  const lessonSlugs = knownLessonSlugs();
  let seeded = 0;
  let updated = 0;
  const errors: string[] = [];
  for (const item of bank) {
    const exercise = { ...item.exercise, id: "pending" } as import("../src/data/curriculum/types").Exercise;
    const qc = validateQuestion(
      exercise,
      { knownLessonSlugs: lessonSlugs },
      { slug: item.slug, chapterSlug: item.chapterSlug, lessonSlug: item.lessonSlug, topic: item.topic },
    );
    if (qc.errors.length > 0) {
      errors.push(...qc.errors);
      continue;
    }
    const tagsJson = JSON.stringify(item.tags);
    const existing = await db.cmsQuestion.findUnique({ where: { slug: item.slug } });
    const payload = JSON.stringify(exercise);
    if (existing) {
      if (existing.data === payload.replace('"pending"', `"${existing.id}"`) || existing.data === JSON.stringify({ ...item.exercise, id: existing.id })) {
        // content unchanged — refresh metadata only
        if (existing.chapterSlug !== item.chapterSlug || existing.lessonSlug !== item.lessonSlug) {
          await db.cmsQuestion.update({
            where: { id: existing.id },
            data: { chapterSlug: item.chapterSlug, lessonSlug: item.lessonSlug, tags: tagsJson },
          });
        }
        seeded += 1;
        continue;
      }
      const version = existing.version + 1;
      await db.cmsQuestion.update({
        where: { id: existing.id },
        data: {
          type: item.exercise.type,
          skill: item.exercise.skill,
          difficulty: item.exercise.difficulty,
          prompt: item.exercise.prompt,
          tags: tagsJson,
          chapterSlug: item.chapterSlug,
          lessonSlug: item.lessonSlug,
          data: JSON.stringify({ ...item.exercise, id: existing.id }),
          status: "published",
          version,
        },
      });
      await db.cmsQuestionVersion.create({
        data: {
          questionId: existing.id,
          version,
          snapshot: JSON.stringify({
            type: item.exercise.type,
            skill: item.exercise.skill,
            difficulty: item.exercise.difficulty,
            prompt: item.exercise.prompt,
            tags: item.tags,
            data: { ...item.exercise, id: existing.id },
          }),
          changedById: adminId,
          changeNote: "PROMPT 36 practice bank update",
        },
      });
      updated += 1;
      seeded += 1;
      continue;
    }
    const created = await db.cmsQuestion.create({
      data: {
        slug: item.slug,
        type: item.exercise.type,
        skill: item.exercise.skill,
        difficulty: item.exercise.difficulty,
        prompt: item.exercise.prompt,
        tags: tagsJson,
        chapterSlug: item.chapterSlug,
        lessonSlug: item.lessonSlug,
        data: payload,
        status: "published",
        version: 1,
        createdById: adminId,
      },
    });
    await db.cmsQuestion.update({
      where: { id: created.id },
      data: { data: JSON.stringify({ ...item.exercise, id: created.id }) },
    });
    await db.cmsQuestionVersion.create({
      data: {
        questionId: created.id,
        version: 1,
        snapshot: JSON.stringify({
          type: item.exercise.type,
          skill: item.exercise.skill,
          difficulty: item.exercise.difficulty,
          prompt: item.exercise.prompt,
          tags: item.tags,
          data: { ...item.exercise, id: created.id },
        }),
        changedById: adminId,
        changeNote: "PROMPT 36 practice bank seed",
      },
    });
    seeded += 1;
  }
  if (errors.length > 0) {
    console.error(`[programme] practice bank QC FAILED — ${errors.length} error(s); refusing to publish:`);
    for (const line of errors.slice(0, 20)) console.error(`  ${line}`);
    process.exitCode = 1;
    return seeded;
  }
  console.log(`[programme] practice bank: ${seeded} questions ready (${updated} updated) — QC clean`);
  // Fresh databases create the curriculum lesson questions (ch-XX-l-YY-qN)
  // AFTER the early backfill pass at the top of seedProgramme — run the
  // idempotent backfill once more so chapter/lesson metadata lands on first
  // seed, not only on the second. (Fresh-DB guarantee for the practice
  // engine's per-chapter pools.)
  await backfillQuestionMeta();
  return seeded;
}

/**
 * Demo learner practice history (PROMPT 36): attempts across the chapters the
 * demo has completed, one wrong-heavy pocket for weak-area practice, and one
 * PASSED chapter test on CH-06 so "knowledge demonstrated" has a real example.
 * Idempotent: skipped entirely if the demo already has attempts.
 */
async function ensureDemoPractice(): Promise<void> {
  const demo = await db.user.findUnique({ where: { email: "demo@talksy.app" } });
  if (!demo) return;
  // Guard on practice sessions, not raw attempts: the legacy dev seed
  // (scripts/seed.ts) already writes a few attempts for the demo learner, and
  // those must not block the practice-zone history.
  const existingSessions = await db.practiceSession.count({ where: { userId: demo.id } });
  if (existingSessions > 0) return;

  const pool = await db.cmsQuestion.findMany({
    where: { status: "published", chapterSlug: { in: ["ch-06", "ch-07", "ch-08"] } },
    select: { id: true, slug: true, type: true, difficulty: true, skill: true, lessonSlug: true, chapterSlug: true, data: true },
  });
  if (pool.length === 0) return;

  // Answer history: strong on grammar/reading, wrong-heavy on listening and
  // vocabulary — the profile weak-area practice is designed to detect.
  const weakSkills = new Set(["listening", "vocabulary"]);
  let created = 0;
  let day = 13;
  for (const q of pool.slice(0, 34)) {
    const exercise = JSON.parse(q.data) as { acceptedAnswers?: string[]; acceptedSentences?: string[]; options?: { id: string }[]; correctOptionId?: string; pairs?: unknown[]; words?: unknown[]; misspelled?: string; accepted?: string[] };
    const isWrong = weakSkills.has(q.skill) && created % 2 === 1;
    // Build a plausible submitted answer for the row.
    let submitted: unknown = null;
    if (exercise.correctOptionId && exercise.options) {
      const wrong = exercise.options.find((o) => o.id !== exercise.correctOptionId);
      submitted = { optionId: isWrong ? wrong?.id ?? exercise.correctOptionId : exercise.correctOptionId };
    } else if (exercise.acceptedAnswers && exercise.acceptedAnswers.length > 0) {
      submitted = { text: isWrong ? "the wrong answer" : exercise.acceptedAnswers[0] };
    } else if (exercise.acceptedSentences && exercise.acceptedSentences.length > 0) {
      submitted = { tokens: (isWrong ? "not the right sentence words" : exercise.acceptedSentences[0]).split(" ") };
    } else if (exercise.pairs) {
      submitted = { pairs: exercise.pairs };
    } else {
      submitted = { text: isWrong ? "no idea" : "a good answer" };
    }
    void exercise.misspelled;
    await db.exerciseAttempt.create({
      data: {
        userId: demo.id,
        exerciseId: q.id,
        lessonSlug: q.lessonSlug ?? "ch-06-l-01",
        type: q.type,
        difficulty: q.difficulty,
        skill: q.skill,
        context: "practice",
        source: "cms",
        isCorrect: !isWrong,
        score: isWrong ? 0 : 1,
        hintsUsed: created % 4 === 0 ? 2 : 0,
        durationMs: 8000 + (created % 7) * 3000,
        answer: JSON.stringify(submitted).slice(0, 2000),
        createdAt: new Date(NOW.getTime() - day * 24 * 60 * 60 * 1000),
      },
    });
    created += 1;
    if (created % 3 === 0) day -= 1;
  }

  // One passed chapter test on CH-06 (knowledge demonstrated) built through
  // the real report pipeline so the session and its report are consistent.
  const testPool = pool.filter((q) => q.chapterSlug === "ch-06");
  if (testPool.length >= 5) {
    const picked = testPool.slice(0, 8);
    const graded: GradedInput[] = picked.map((q, i) => ({
      exerciseId: q.id,
      submitted: null,
      correct: i !== 2, // one honest mistake
      invalid: false,
      score: i !== 2 ? 1 : 0,
    }));
    const lessonTitles = programmeLessonTitles();
    const bankRows = picked.map((q) => {
      const exercise = JSON.parse(q.data) as unknown as import("../src/data/curriculum/types").Exercise;
      return {
        id: q.id,
        slug: q.slug,
        chapterSlug: q.chapterSlug ?? "ch-06",
        lessonSlug: q.lessonSlug ?? "ch-06-l-01",
        topic: "demo",
        tags: ["demo"],
        exercise,
      };
    });
    const report = buildReport({
      mode: "chapter-test",
      config: { chapterSlug: "ch-06", count: picked.length, passScore: 0.75 },
      pool: bankRows,
      graded,
      passed: true,
      passScore: 0.75,
      hintsUsed: 0,
      previousAttempts: [],
      lessonTitles,
    });
    await db.practiceSession.create({
      data: {
        userId: demo.id,
        mode: "chapter-test",
        status: "completed",
        config: JSON.stringify({ chapterSlug: "ch-06", count: picked.length, passScore: 0.75 }),
        seed: "demo-history",
        questionIds: JSON.stringify(picked.map((q) => q.id)),
        score: (picked.length - 1) / picked.length,
        total: picked.length,
        correct: picked.length - 1,
        passed: true,
        report: JSON.stringify(report),
        hintsAllowed: false,
        startedAt: new Date(NOW.getTime() - 6 * 24 * 60 * 60 * 1000),
        completedAt: new Date(NOW.getTime() - 6 * 24 * 60 * 60 * 1000 + 9 * 60 * 1000),
      },
    });
    for (const g of graded) {
      const q = picked.find((row) => row.id === g.exerciseId)!;
      await db.exerciseAttempt.create({
        data: {
          userId: demo.id,
          exerciseId: q.id,
          lessonSlug: q.lessonSlug ?? "ch-06-l-01",
          type: q.type,
          difficulty: q.difficulty,
          skill: q.skill,
          context: "chapter-test",
          source: "cms",
          sessionId: null,
          isCorrect: g.correct,
          score: g.score,
          hintsUsed: 0,
          durationMs: 0,
          answer: JSON.stringify(g.submitted ?? null),
          createdAt: new Date(NOW.getTime() - 6 * 24 * 60 * 60 * 1000),
        },
      });
    }
  }
  if (created > 0) {
    console.log(`[programme] demo learner: ${created} practice attempts + 1 passed chapter test (CH-06)`);
  }
}

seedProgramme()
  .catch((e) => {
    console.error("[programme] seed failed:", e);
    process.exitCode = 1;
  })
  .finally(() => db.$disconnect());
