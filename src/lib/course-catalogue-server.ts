import { availableLevels, curriculum } from "@/data/curriculum";
import type { CourseLesson, CourseUnit } from "@/data/curriculum/types";
import { isStructuredLesson } from "@/data/curriculum/types";
import { journeyStageOf, subjectsOf } from "@/data/curriculum/journey";
import { buildCurriculumSummaries, type LevelSummary } from "@/lib/curriculum-server";
import { courseStateOf, type CourseState } from "@/lib/learning-stats";

/**
 * Server-side assembly of the course catalogue and course-overview pages.
 *
 * A "course" in the learner app is one curriculum unit: 3–5 lessons with a
 * shared theme, its own prerequisite (the previous unit) and its own
 * progress. Everything shown derives from the unit's real lesson content
 * and the learner's real completion/attempt rows.
 */

export interface CourseLessonView {
  slug: string;
  title: string;
  subtitle: string;
  minutes: number;
  skills: string[];
  vocabCount: number;
  exerciseCount: number;
  assessmentCount: number;
  completed: boolean;
  unlocked: boolean;
  bestScore: number | null;
  attemptedCount: number;
  objectives: string[];
}

export interface CourseSummary {
  slug: string;
  title: string;
  description: string;
  level: { code: string; name: string; cefrLabel: string };
  stage: string;
  subjects: string[];
  position: number;
  minutes: number;
  lessonCount: number;
  exerciseCount: number;
  vocabCount: number;
  skills: { skill: string; lessonCount: number }[];
  assessmentCount: number;
  state: CourseState;
  completedLessons: number;
  progressPercent: number;
  /** average best score across completed lessons, null when none completed */
  bestAvg: number | null;
  /** total exercises answered in this unit (in-progress signal) */
  attemptedCount: number;
  /** first incomplete unlocked lesson — the course page's CTA target */
  nextLessonSlug: string | null;
}

/** Attempts grouped by lesson slug → count (excludes practice rows). */
export type AttemptCounts = Map<string, number>;

export function attemptCountsOf(rows: { lessonSlug: string }[]): AttemptCounts {
  const out = new Map<string, number>();
  for (const row of rows) {
    if (row.lessonSlug === "practice") continue;
    out.set(row.lessonSlug, (out.get(row.lessonSlug) ?? 0) + 1);
  }
  return out;
}

interface UnitContext {
  levelCode: string;
  levelName: string;
  cefrLabel: string;
  levelStatus: string;
  unit: CourseUnit;
  position: number;
}

/** The 18 live units in journey order with their level context. */
function orderedUnits(): UnitContext[] {
  const out: UnitContext[] = [];
  let position = 0;
  for (const level of availableLevels) {
    for (const unit of level.units) {
      position += 1;
      out.push({
        levelCode: level.code,
        levelName: level.name,
        cefrLabel: level.cefrLabel,
        levelStatus: level.status,
        unit,
        position,
      });
    }
  }
  return out;
}

function findUnitContext(slug: string): UnitContext | null {
  return orderedUnits().find((ctx) => ctx.unit.slug === slug) ?? null;
}

/** CourseLesson-view assembly shared by the list and the detail builders. */
function lessonViews(ctx: UnitContext, summaries: LevelSummary[], attempts: AttemptCounts): CourseLessonView[] {
  const levelSummary = summaries.find((l) => l.code === ctx.levelCode);
  const unitSummary = levelSummary?.units.find((u) => u.slug === ctx.unit.slug);
  if (!unitSummary) return [];
  return ctx.unit.lessons.map((lesson, i) => {
    const state = unitSummary.lessons[i];
    return {
      slug: lesson.slug,
      title: lesson.title,
      subtitle: lesson.subtitle ?? "",
      minutes: lesson.minutes,
      skills: lesson.skills,
      vocabCount: lesson.vocab.length,
      exerciseCount: lesson.exercises.length,
      assessmentCount: lesson.exercises.filter((e) => e.phase === "assessment").length,
      completed: state.completed,
      unlocked: state.unlocked,
      bestScore: state.bestScore,
      attemptedCount: attempts.get(lesson.slug) ?? 0,
      objectives: isStructuredLesson(lesson) ? lesson.objectives ?? [] : [],
    };
  });
}

function skillsOfUnit(unit: CourseUnit): { skill: string; lessonCount: number }[] {
  const counts = new Map<string, number>();
  for (const lesson of unit.lessons) {
    for (const skill of lesson.skills) {
      counts.set(skill, (counts.get(skill) ?? 0) + 1);
    }
  }
  return [...counts.entries()].map(([skill, lessonCount]) => ({ skill, lessonCount }));
}

/**
 * All 18 unit-courses with per-learner state. `summaries` comes from
 * buildCurriculumSummaries so unlocking honours the learning-plan anchor.
 */
export function buildCourseSummaries(
  completedSlugs: Set<string>,
  bestScores: Map<string, number>,
  attempts: AttemptCounts,
  planAnchor: string | null
): CourseSummary[] {
  const summaries = buildCurriculumSummaries(completedSlugs, bestScores, planAnchor);
  return orderedUnits().map((ctx) => {
    const lessons = lessonViews(ctx, summaries, attempts);
    const completedLessons = lessons.filter((l) => l.completed).length;
    const bestScoresDone = lessons
      .filter((l) => l.completed && l.bestScore !== null)
      .map((l) => l.bestScore as number);
    const nextLesson = lessons.find((l) => !l.completed && l.unlocked);
    return {
      slug: ctx.unit.slug,
      title: ctx.unit.title,
      description: ctx.unit.description,
      level: { code: ctx.levelCode, name: ctx.levelName, cefrLabel: ctx.cefrLabel },
      stage: journeyStageOf(ctx.unit.slug) ?? ctx.unit.title,
      subjects: subjectsOf(ctx.unit.slug),
      position: ctx.position,
      minutes: lessons.reduce((sum, l) => sum + l.minutes, 0),
      lessonCount: lessons.length,
      exerciseCount: lessons.reduce((sum, l) => sum + l.exerciseCount, 0),
      vocabCount: lessons.reduce((sum, l) => sum + l.vocabCount, 0),
      skills: skillsOfUnit(ctx.unit),
      assessmentCount: lessons.reduce((sum, l) => sum + l.assessmentCount, 0),
      state: courseStateOf(
        lessons.map((l) => ({
          completed: l.completed,
          unlocked: l.unlocked,
          attemptedCount: l.attemptedCount,
        }))
      ),
      completedLessons,
      progressPercent: lessons.length ? Math.round((completedLessons / lessons.length) * 100) : 0,
      bestAvg:
        bestScoresDone.length > 0
          ? Math.round(bestScoresDone.reduce((s, n) => s + n, 0) / bestScoresDone.length)
          : null,
      attemptedCount: lessons.reduce((sum, l) => sum + l.attemptedCount, 0),
      nextLessonSlug: nextLesson?.slug ?? lessons[0]?.slug ?? null,
    };
  });
}

/* ------------------------------------------------------------------ */
/* Course detail (course overview page)                                */
/* ------------------------------------------------------------------ */

export interface CoursePrerequisite {
  /** the previous unit in journey order (null only for p1-1) */
  unitSlug: string | null;
  unitTitle: string | null;
  levelCode: string;
  state: "completed" | "in-progress" | "locked";
  /** incomplete lessons before this course unlocks (0 when satisfied) */
  lessonsToGo: number;
  /** human sentence for the UI */
  label: string;
}

export interface CourseDetail {
  slug: string;
  title: string;
  description: string;
  level: { code: string; name: string; cefrLabel: string };
  stage: string;
  subjects: string[];
  position: number;
  minutes: number;
  lessonCount: number;
  exerciseCount: number;
  vocabCount: number;
  skills: { skill: string; lessonCount: number }[];
  assessmentCount: number;
  state: CourseState;
  completedLessons: number;
  progressPercent: number;
  bestAvg: number | null;
  attemptedCount: number;
  /** authored lesson objectives (P1 units); empty for legacy units */
  objectives: string[];
  /** lesson title/subtitle pairs — always available */
  topics: { title: string; subtitle: string }[];
  prerequisite: CoursePrerequisite;
  lessons: CourseLessonView[];
  assessment: {
    totalExercises: number;
    assessmentExercises: number;
    hasAssessmentPhase: boolean;
  };
  nextAction: { slug: string; label: "Start" | "Resume" | "Review" } | null;
}

export function buildCourseDetail(
  slug: string,
  completedSlugs: Set<string>,
  bestScores: Map<string, number>,
  attempts: AttemptCounts,
  planAnchor: string | null
): CourseDetail | null {
  const ctx = findUnitContext(slug);
  if (!ctx) return null;

  const summaries = buildCurriculumSummaries(completedSlugs, bestScores, planAnchor);
  const lessons = lessonViews(ctx, summaries, attempts);
  const completedLessons = lessons.filter((l) => l.completed).length;
  const bestScoresDone = lessons
    .filter((l) => l.completed && l.bestScore !== null)
    .map((l) => l.bestScore as number);
  const state = courseStateOf(
    lessons.map((l) => ({ completed: l.completed, unlocked: l.unlocked, attemptedCount: l.attemptedCount }))
  );

  /* Prerequisite: the previous unit in journey order. */
  const ordered = orderedUnits();
  const prev = ordered[ctx.position - 2] ?? null; // position is 1-based
  let prerequisite: CoursePrerequisite;
  if (!prev) {
    prerequisite = {
      unitSlug: null,
      unitTitle: null,
      levelCode: ctx.levelCode,
      state: "completed",
      lessonsToGo: 0,
      label: "No prerequisites — this is the very first course. Start here.",
    };
  } else {
    const prevLessons = lessonViews(prev, summaries, attempts);
    const prevIncomplete = prevLessons.filter((l) => !l.completed).length;
    const prevState = courseStateOf(
      prevLessons.map((l) => ({ completed: l.completed, unlocked: l.unlocked, attemptedCount: l.attemptedCount }))
    );
    const prereqState: CoursePrerequisite["state"] =
      prevState === "completed" ? "completed" : prevState === "locked" ? "locked" : "in-progress";
    prerequisite = {
      unitSlug: prev.unit.slug,
      unitTitle: prev.unit.title,
      levelCode: prev.levelCode,
      state: prereqState,
      lessonsToGo: prevIncomplete,
      label:
        prereqState === "completed"
          ? `${prev.unit.title} (${prev.levelCode}) — completed ✓. This course is unlocked.`
          : prevState === "locked"
            ? `Unlocks after ${prev.unit.title} (${prev.levelCode}) — ${prevIncomplete} more lesson${prevIncomplete === 1 ? "" : "s"} to go.`
            : `Unlocks after ${prev.unit.title} (${prev.levelCode}) — ${prevIncomplete} more lesson${prevIncomplete === 1 ? "" : "s"} to go.`,
    };
  }

  /* Objectives: authored lesson objectives when present (P1), else topics. */
  const objectives = [...new Set(lessons.flatMap((l) => l.objectives))].slice(0, 8);
  const topics = lessons.map((l) => ({ title: l.title, subtitle: l.subtitle }));

  const assessmentExercises = lessons.reduce((sum, l) => sum + l.assessmentCount, 0);
  const totalExercises = lessons.reduce((sum, l) => sum + l.exerciseCount, 0);

  const nextIncomplete = lessons.find((l) => !l.completed && l.unlocked);
  const anyTouched = lessons.some((l) => l.attemptedCount > 0 && !l.completed);
  const nextAction: CourseDetail["nextAction"] =
    state === "locked"
      ? null
      : nextIncomplete
        ? { slug: nextIncomplete.slug, label: anyTouched ? "Resume" : "Start" }
        : { slug: lessons[0]?.slug ?? slug, label: "Review" };

  return {
    slug: ctx.unit.slug,
    title: ctx.unit.title,
    description: ctx.unit.description,
    level: { code: ctx.levelCode, name: ctx.levelName, cefrLabel: ctx.cefrLabel },
    stage: journeyStageOf(ctx.unit.slug) ?? ctx.unit.title,
    subjects: subjectsOf(ctx.unit.slug),
    position: ctx.position,
    minutes: lessons.reduce((sum, l) => sum + l.minutes, 0),
    lessonCount: lessons.length,
    exerciseCount: totalExercises,
    vocabCount: lessons.reduce((sum, l) => sum + l.vocabCount, 0),
    skills: skillsOfUnit(ctx.unit),
    assessmentCount: assessmentExercises,
    state,
    completedLessons,
    progressPercent: lessons.length ? Math.round((completedLessons / lessons.length) * 100) : 0,
    bestAvg:
      bestScoresDone.length > 0
        ? Math.round(bestScoresDone.reduce((s, n) => s + n, 0) / bestScoresDone.length)
        : null,
    attemptedCount: lessons.reduce((sum, l) => sum + l.attemptedCount, 0),
    objectives,
    topics,
    prerequisite,
    lessons,
    assessment: {
      totalExercises,
      assessmentExercises,
      hasAssessmentPhase: assessmentExercises > 0,
    },
    nextAction,
  };
}

/** CourseLesson locator used by the course-detail route's 404 path. */
export function courseExists(slug: string): boolean {
  return curriculum.some((l) => l.units.some((u) => u.slug === slug));
}

/** Helper for views: lesson content by slug (for the player's resume hints). */
export function findLessonContent(slug: string): CourseLesson | null {
  for (const level of curriculum) {
    for (const unit of level.units) {
      const lesson = unit.lessons.find((l) => l.slug === slug);
      if (lesson) return lesson;
    }
  }
  return null;
}
