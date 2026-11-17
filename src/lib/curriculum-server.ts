import {
  curriculum,
  availableLevels,
  orderedLessonSlugs,
  globalLessonIndex,
} from "@/data/curriculum";
import type { CourseLevel, CourseLesson } from "@/data/curriculum/types";
import { db } from "@/lib/db";

/**
 * Server-side curriculum assembly: merges static content with each user's
 * progress to produce lock/completion state. Lessons unlock sequentially
 * within a level; completed lessons stay open for review forever.
 *
 * Learning plans: when the learner has an active plan (from placement),
 * every lesson ordered strictly BEFORE the plan's starting lesson counts
 * as virtually completed — the learner's path begins at their level, and
 * earlier lessons stay open for review.
 */

/**
 * Resolves the learner's active plan anchor slug, or null. Exported for
 * the API routes that pass it into the builders below.
 */
export async function getPlanAnchor(userId: string): Promise<string | null> {
  const plan = await db.learningPlan.findFirst({
    where: { userId, status: { in: ["ACCEPTED", "ADJUSTED", "PROPOSED"] } },
    orderBy: { createdAt: "desc" },
    select: { startLessonSlug: true },
  });
  if (!plan || !plan.startLessonSlug) return null;
  // An anchor that no longer exists in the curriculum unlocks nothing.
  return globalLessonIndex(plan.startLessonSlug) !== null ? plan.startLessonSlug : null;
}

/** True when the slug sits strictly before the plan anchor in course order. */
export function isBeforeAnchor(slug: string, anchor: string | null): boolean {
  if (!anchor) return false;
  const a = globalLessonIndex(slug);
  const b = globalLessonIndex(anchor);
  return a !== null && b !== null && a < b;
}

/* ------------------------------------------------------------------ */
/* Next-lesson computation (shared by /api/dashboard and /api/curriculum)*/
/* ------------------------------------------------------------------ */

export interface NextLessonInfo {
  slug: string;
  title: string;
  subtitle: string;
  minutes: number;
  levelCode: string;
  levelName: string;
  unitSlug: string;
  unitTitle: string;
  /** 1-based position within the level */
  indexInLevel: number;
  /** 0-based global position across all available levels */
  globalIndex: number;
}

/**
 * The learner's next lesson: the first not-completed lesson in strict
 * course order (P1 → A1 → A2 …), honouring the learning-plan anchor.
 * Lessons ordered before the anchor stay open for review but never become
 * "what's next". Null when every available lesson is complete.
 */
export function computeNextLesson(
  completedSlugs: Set<string>,
  planAnchor: string | null
): NextLessonInfo | null {
  const anchorIndex = planAnchor ? globalLessonIndex(planAnchor) : null;
  let globalIndex = 0;
  for (const level of availableLevels) {
    for (const unit of level.units) {
      for (const lesson of unit.lessons) {
        const thisGlobal = globalIndex;
        globalIndex += 1;
        if (anchorIndex !== null && thisGlobal < anchorIndex) {
          continue; // before the plan anchor — review only
        }
        if (!completedSlugs.has(lesson.slug)) {
          return {
            slug: lesson.slug,
            title: lesson.title,
            subtitle: lesson.subtitle ?? "",
            minutes: lesson.minutes,
            levelCode: level.code,
            levelName: level.name,
            unitSlug: unit.slug,
            unitTitle: unit.title,
            indexInLevel: countPositionInLevel(level, lesson.slug),
            globalIndex: thisGlobal,
          };
        }
      }
    }
  }
  return null;
}

/** 1-based position of a lesson within its level (curriculum order). */
function countPositionInLevel(level: CourseLevel, slug: string): number {
  const ordered = orderedLessonSlugs(level.code);
  return ordered.indexOf(slug) + 1;
}

/**
 * Lessons the learner has started (attempts recorded) but not completed.
 * Used for honest "in progress" badges on the curriculum, roadmap and
 * course pages, plus the dashboard's resume card.
 */
export interface InProgressLesson {
  slug: string;
  title: string;
  levelCode: string;
  unitSlug: string;
  unitTitle: string;
  attemptedCount: number;
  totalExercises: number;
  lastActiveAt: Date;
}

/**
 * Derives in-progress lessons from raw attempt rows. Rows with
 * lessonSlug "practice" (practice-centre reviews) are excluded — they
 * belong to no lesson.
 */
export function deriveInProgressLessons(
  attempts: { lessonSlug: string; exerciseId: string; correct: boolean; createdAt: Date }[],
  completedSlugs: Set<string>
): InProgressLesson[] {
  const bySlug = new Map<string, { count: number; lastAt: Date }>();
  for (const row of attempts) {
    if (row.lessonSlug === "practice") continue;
    if (completedSlugs.has(row.lessonSlug)) continue;
    const entry = bySlug.get(row.lessonSlug);
    if (entry) {
      entry.count += 1;
      if (row.createdAt > entry.lastAt) entry.lastAt = row.createdAt;
    } else {
      bySlug.set(row.lessonSlug, { count: 1, lastAt: row.createdAt });
    }
  }

  const out: InProgressLesson[] = [];
  for (const [slug, info] of bySlug) {
    const lesson = findLessonBySlug(slug);
    if (!lesson) continue;
    out.push({
      slug,
      title: lesson.title,
      levelCode: lesson.levelCode,
      unitSlug: lesson.unitSlug,
      unitTitle: lesson.unitTitle,
      attemptedCount: info.count,
      totalExercises: lesson.exerciseCount,
      lastActiveAt: info.lastAt,
    });
  }
  return out.sort((a, b) => b.lastActiveAt.getTime() - a.lastActiveAt.getTime());
}

/** Lightweight lesson locator: slug → level/unit/lesson context. */
function findLessonBySlug(slug: string): {
  title: string;
  levelCode: string;
  unitSlug: string;
  unitTitle: string;
  exerciseCount: number;
} | null {
  for (const level of availableLevels) {
    for (const unit of level.units) {
      const lesson = unit.lessons.find((l) => l.slug === slug);
      if (lesson) {
        return {
          title: lesson.title,
          levelCode: level.code,
          unitSlug: unit.slug,
          unitTitle: unit.title,
          exerciseCount: lesson.exercises.length,
        };
      }
    }
  }
  return null;
}

export interface LessonSummary {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  minutes: number;
  skills: string[];
  vocabCount: number;
  exerciseCount: number;
  index: number; // 1-based position within its level
  completed: boolean;
  unlocked: boolean;
  bestScore: number | null;
}

export interface UnitSummary {
  slug: string;
  code: string;
  title: string;
  description: string;
  lessons: LessonSummary[];
}

export interface LevelSummary {
  code: string;
  name: string;
  cefrLabel: string;
  tagline: string;
  description: string;
  status: "available" | "in-development";
  unitCount: number;
  lessonCount: number;
  completedCount: number;
  units: UnitSummary[];
}

export function buildCurriculumSummaries(
  completedSlugs: Set<string>,
  bestScores: Map<string, number>,
  planAnchorSlug: string | null = null
): LevelSummary[] {
  return curriculum.map((level) => summarizeLevel(level, completedSlugs, bestScores, planAnchorSlug));
}

function summarizeLevel(
  level: CourseLevel,
  completed: Set<string>,
  bestScores: Map<string, number>,
  planAnchorSlug: string | null
): LevelSummary {
  const ordered = orderedLessonSlugs(level.code);
  let previousDone = true; // first lesson of the level is always unlocked

  const units: UnitSummary[] = level.units.map((unit) => ({
    slug: unit.slug,
    code: unit.code,
    title: unit.title,
    description: unit.description,
    lessons: unit.lessons.map((lesson) => {
      const idx = ordered.indexOf(lesson.slug) + 1;
      const isDone = completed.has(lesson.slug);
      // The lesson before this one in the level (null for the first lesson).
      const position = ordered.indexOf(lesson.slug);
      const previousSlug = position > 0 ? ordered[position - 1] : null;
      // A plan anchor virtually completes everything ordered before it:
      // the learner may start (and review) at their placed level.
      const previousSatisfied =
        previousSlug === null
          ? true
          : previousDone || completed.has(previousSlug) || isBeforeAnchor(previousSlug, planAnchorSlug);
      previousDone = isDone || isBeforeAnchor(lesson.slug, planAnchorSlug);
      return {
        slug: lesson.slug,
        title: lesson.title,
        subtitle: lesson.subtitle ?? "",
        description: lesson.description,
        minutes: lesson.minutes,
        skills: lesson.skills,
        vocabCount: lesson.vocab.length,
        exerciseCount: lesson.exercises.length,
        index: idx,
        completed: isDone,
        unlocked: previousSatisfied,
        bestScore: bestScores.get(lesson.slug) ?? null,
      } satisfies LessonSummary;
    }),
  }));

  const allLessons = level.units.flatMap((u) => u.lessons);
  return {
    code: level.code,
    name: level.name,
    cefrLabel: level.cefrLabel,
    tagline: level.tagline,
    description: level.description,
    status: level.status,
    unitCount: units.length,
    lessonCount: allLessons.length,
    completedCount: allLessons.filter((l) => completed.has(l.slug)).length,
    units,
  };
}

/** Full lesson content + progress context for the lesson player. */
export async function getLessonWithProgress(
  slug: string,
  userId: string,
  planAnchorSlug: string | null = null
) {
  const level = curriculum.find((l) =>
    l.units.some((u) => u.lessons.some((les) => les.slug === slug))
  );
  if (!level) return null;
  const unit = level.units.find((u) => u.lessons.some((les) => les.slug === slug))!;
  const lesson = unit.lessons.find((l) => l.slug === slug)!;

  const ordered = orderedLessonSlugs(level.code);
  const position = ordered.indexOf(slug);
  const completion = await db.lessonCompletion.findUnique({
    where: { userId_lessonSlug: { userId, lessonSlug: slug } },
  });
  const previousSlug = position > 0 ? ordered[position - 1] : null;
  const previousDone = previousSlug
    ? Boolean(
        await db.lessonCompletion.findUnique({
          where: { userId_lessonSlug: { userId, lessonSlug: previousSlug } },
        })
      ) || isBeforeAnchor(previousSlug, planAnchorSlug)
    : true;

  const nextSlug = position < ordered.length - 1 ? ordered[position + 1] : null;

  return {
    level: { code: level.code, name: level.name, tagline: level.tagline },
    unit: { code: unit.code, title: unit.title },
    lesson: lesson as CourseLesson,
    lessonIndex: position + 1,
    lessonTotal: ordered.length,
    completed: Boolean(completion),
    bestScore: completion?.bestScore ?? null,
    unlocked: previousDone,
    nextSlug,
  };
}
