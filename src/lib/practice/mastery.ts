/**
 * PROMPT 36 — progress and mastery.
 *
 * Six learner states are kept strictly distinct (PROMPT 36 §7):
 *
 *   lesson viewed      — a CmsLessonProgress row exists (opening a lesson
 *                         creates in-progress, never "completed")
 *   exercise attempted — an ExerciseAttempt row exists for the question
 *   exercise completed — at least one CORRECT attempt exists for the question
 *   chapter completed   — every lesson of the chapter is completed
 *   knowledge demonstrated — the learner PASSED a chapter test for that
 *                         chapter (opening lessons never sets this)
 *   skill mastery estimated — a difficulty-weighted accuracy estimate per
 *                         skill, clearly labelled an estimate
 *
 * Nothing here is ever set by opening a page; every number derives from
 * recorded attempts and completed sessions.
 */

import { db } from "@/lib/db";
import {
  PROGRAMME_CHAPTERS,
  PROGRAMME_LESSONS,
  PROGRAMME_LEVELS,
  type ChapterSpec,
} from "@/data/programme";
import type { Skill } from "@/data/curriculum/types";
import { AREA_SHORT, type AssessmentArea } from "./areas";
import { PRACTICE_MODE_IDS, type PracticeMode } from "./types";
import type { PracticeReport } from "./report";

const SKILLS: Skill[] = ["grammar", "vocabulary", "reading", "writing", "listening", "speaking"];

/** Difficulty weight: harder questions count more towards the estimate. */
const DIFFICULTY_WEIGHT: Record<string, number> = {
  easy: 1,
  medium: 1.25,
  hard: 1.5,
  challenge: 1.75,
};

export interface SkillMastery {
  skill: Skill;
  attempts: number;
  correct: number;
  weightedAccuracy: number | null;
  band: "insufficient data" | "developing" | "secure" | "strong";
  bandLabel: string;
}

export interface ChapterMastery {
  chapterSlug: string;
  chapterId: string;
  chapterTitle: string;
  levelId: string;
  courseSlug: string;
  lessonsTotal: number;
  lessonsViewed: number;
  lessonsCompleted: number;
  attemptsCount: number;
  correctAttempts: number;
  chapterCompleted: boolean;
  knowledgeDemonstrated: boolean;
  bestChapterTestPercent: number | null;
  testsTaken: number;
  unlocked: boolean;
}

export interface MasteryOverview {
  skills: SkillMastery[];
  chapters: ChapterMastery[];
  areasBySkill: Record<AssessmentArea, SkillMastery | undefined>;
  chaptersCompleted: number;
  chaptersDemonstrated: number;
  note: string;
}

/** Derive the programme chapter slug from any programme lesson slug (ch-XX-l-YY). */
function chapterSlugOfLesson(lessonSlug: string): string | null {
  const match = /^ch-\d{2}-l-\d{2}$/.exec(lessonSlug);
  return match ? lessonSlug.slice(0, 5) : null;
}

/** Full mastery overview for one learner. */
export async function computeMastery(userId: string): Promise<MasteryOverview> {
  // --- Lesson progress (viewed vs completed) ------------------------------
  const progressRows = await db.cmsLessonProgress.findMany({
    where: { userId },
    select: { status: true, lesson: { select: { slug: true } } },
  });
  const viewedByChapter = new Map<string, Set<string>>();
  const completedByChapter = new Map<string, Set<string>>();
  for (const row of progressRows) {
    const chapterSlug = chapterSlugOfLesson(row.lesson.slug);
    if (!chapterSlug) continue;
    const viewed = viewedByChapter.get(chapterSlug) ?? new Set<string>();
    viewed.add(row.lesson.slug);
    viewedByChapter.set(chapterSlug, viewed);
    if (row.status === "completed") {
      const completed = completedByChapter.get(chapterSlug) ?? new Set<string>();
      completed.add(row.lesson.slug);
      completedByChapter.set(chapterSlug, completed);
    }
  }

  // --- Attempts (per question and per skill) -------------------------------
  const attempts = await db.exerciseAttempt.findMany({
    where: { userId },
    select: {
      exerciseId: true,
      lessonSlug: true,
      skill: true,
      difficulty: true,
      isCorrect: true,
      createdAt: true,
    },
    orderBy: { createdAt: "desc" },
    take: 2000,
  });
  const attemptsByChapter = new Map<string, { total: number; correct: number }>();
  const correctQuestionIds = new Set<string>();
  for (const attempt of attempts) {
    const chapterSlug = chapterSlugOfLesson(attempt.lessonSlug);
    if (chapterSlug) {
      const entry = attemptsByChapter.get(chapterSlug) ?? { total: 0, correct: 0 };
      entry.total += 1;
      if (attempt.isCorrect) entry.correct += 1;
      attemptsByChapter.set(chapterSlug, entry);
    }
    if (attempt.isCorrect) correctQuestionIds.add(attempt.exerciseId);
  }

  // Per-skill weighted accuracy.
  const skillRows = await db.exerciseAttempt.findMany({
    where: { userId },
    select: { skill: true, difficulty: true, isCorrect: true },
    take: 5000,
  });
  const skills: SkillMastery[] = SKILLS.map((skill) => {
    const rows = skillRows.filter((r) => r.skill === skill);
    const attemptsCount = rows.length;
    const correctCount = rows.filter((r) => r.isCorrect).length;
    let weighted: number | null = null;
    let band: SkillMastery["band"] = "insufficient data";
    let bandLabel = "Not enough attempts yet — do more exercises.";
    if (attemptsCount >= 3) {
      let weightTotal = 0;
      let weightCorrect = 0;
      for (const r of rows) {
        const w = DIFFICULTY_WEIGHT[r.difficulty] ?? 1;
        weightTotal += w;
        if (r.isCorrect) weightCorrect += w;
      }
      weighted = weightTotal === 0 ? 0 : Math.round((weightCorrect / weightTotal) * 100);
      band = weighted < 60 ? "developing" : weighted < 80 ? "secure" : "strong";
      bandLabel =
        band === "developing"
          ? "Developing — keep practising this skill."
          : band === "secure"
            ? "Secure — reliable on familiar material."
            : "Strong — consistent across difficulty levels.";
    }
    return {
      skill,
      attempts: attemptsCount,
      correct: correctCount,
      weightedAccuracy: weighted,
      band,
      bandLabel,
    };
  });

  // --- Chapter tests (knowledge demonstrated) ------------------------------
  const testSessions = await db.practiceSession.findMany({
    where: { userId, mode: "chapter-test", status: "completed" },
    select: {
      config: true,
      passed: true,
      score: true,
      completedAt: true,
      questionIds: true,
    },
    orderBy: { completedAt: "desc" },
  });
  const demonstrated = new Map<string, { best: number; tests: number }>();
  for (const session of testSessions) {
    try {
      const config = JSON.parse(session.config) as { chapterSlug?: string };
      if (!config.chapterSlug) continue;
      const percent = Math.round(session.score * 100);
      const entry = demonstrated.get(config.chapterSlug) ?? { best: 0, tests: 0 };
      entry.best = Math.max(entry.best, session.passed ? percent : entry.best);
      entry.tests += 1;
      if (session.passed) {
        // First passing attempt defines the demonstrated score.
        demonstrated.set(config.chapterSlug, {
          best: Math.max(entry.best, percent),
          tests: entry.tests,
        });
      } else {
        demonstrated.set(config.chapterSlug, entry);
      }
    } catch {
      // ignore malformed config
    }
  }

  // --- Chapter grid ---------------------------------------------------------
  const chapters: ChapterMastery[] = PROGRAMME_CHAPTERS.map((chapter: ChapterSpec) => {
    const level = chapter.levelId;
    const courseSlug = courseSlugOfChapter(chapter);
    const lessonsTotal = chapter.lessons.length;
    const viewed = viewedByChapter.get(chapter.slug)?.size ?? 0;
    const completed = completedByChapter.get(chapter.slug)?.size ?? 0;
    const attemptStats = attemptsByChapter.get(chapter.slug) ?? { total: 0, correct: 0 };
    const demo = demonstrated.get(chapter.slug);
    return {
      chapterSlug: chapter.slug,
      chapterId: chapter.id,
      chapterTitle: chapter.title,
      levelId: level,
      courseSlug,
      lessonsTotal,
      lessonsViewed: viewed,
      lessonsCompleted: completed,
      attemptsCount: attemptStats.total,
      correctAttempts: attemptStats.correct,
      chapterCompleted: completed === lessonsTotal && lessonsTotal > 0,
      knowledgeDemonstrated: (demo?.best ?? 0) > 0,
      bestChapterTestPercent: demo && demo.best > 0 ? demo.best : null,
      testsTaken: demo?.tests ?? 0,
      // Chapter test unlocks once the learner has touched the chapter.
      unlocked: viewed > 0,
    };
  });

  return {
    skills,
    chapters,
    areasBySkill: Object.fromEntries(
      SKILLS.map((s) => [s as AssessmentArea, skills.find((row) => row.skill === s)]),
    ) as Record<AssessmentArea, SkillMastery | undefined>,
    chaptersCompleted: chapters.filter((c) => c.chapterCompleted).length,
    chaptersDemonstrated: chapters.filter((c) => c.knowledgeDemonstrated).length,
    note:
      "Mastery is only ever demonstrated by passing chapter tests — opening lessons records viewing, never mastery.",
  };
}

/** Programme level → course slug (for course assessments and reports). */
const PROGRAMME_LEVEL_COURSES = new Map<string, string>(
  PROGRAMME_LEVELS.map((level) => [level.id, level.courseSlug]),
);

function courseSlugOfChapter(chapter: ChapterSpec): string {
  return PROGRAMME_LEVEL_COURSES.get(chapter.levelId) ?? "";
}

// ---------------------------------------------------------------------------
// Weak-area profile (drives weak-area practice + hub hints)
// ---------------------------------------------------------------------------

export interface WeakAreaProfile {
  /** Skills sorted worst-first (accuracy ascending), only those with data. */
  weakSkills: { skill: Skill; attempts: number; correct: number; accuracy: number }[];
  /** Chapters with the most wrong answers recently. */
  weakChapters: { chapterSlug: string; wrongs: number }[];
  /** Question ids answered wrongly (recent first) — priority for re-drawing. */
  wrongQuestionIds: string[];
  hasData: boolean;
}

export async function computeWeakAreas(userId: string): Promise<WeakAreaProfile> {
  const attempts = await db.exerciseAttempt.findMany({
    where: { userId },
    select: {
      exerciseId: true,
      lessonSlug: true,
      skill: true,
      isCorrect: true,
    },
    orderBy: { createdAt: "desc" },
    take: 400,
  });

  if (attempts.length === 0) {
    return { weakSkills: [], weakChapters: [], wrongQuestionIds: [], hasData: false };
  }

  const perSkill = new Map<string, { attempts: number; correct: number }>();
  const perChapter = new Map<string, number>();
  const wrongIds: string[] = [];
  const seen = new Set<string>();
  for (const attempt of attempts) {
    const skill = perSkill.get(attempt.skill) ?? { attempts: 0, correct: 0 };
    skill.attempts += 1;
    if (attempt.isCorrect) skill.correct += 1;
    perSkill.set(attempt.skill, skill);

    const chapterSlug = chapterSlugOfLesson(attempt.lessonSlug);
    if (chapterSlug && !attempt.isCorrect) {
      perChapter.set(chapterSlug, (perChapter.get(chapterSlug) ?? 0) + 1);
    }
    if (!attempt.isCorrect && !seen.has(attempt.exerciseId)) {
      seen.add(attempt.exerciseId);
      wrongIds.push(attempt.exerciseId);
    }
  }

  const weakSkills = SKILLS.map((skill) => {
    const row = perSkill.get(skill);
    if (!row || row.attempts < 2) return null;
    return {
      skill,
      attempts: row.attempts,
      correct: row.correct,
      accuracy: Math.round((row.correct / row.attempts) * 100),
    };
  })
    .filter((r): r is NonNullable<typeof r> => r !== null && r.accuracy < 75)
    .sort((a, b) => a.accuracy - b.accuracy);

  const weakChapters = [...perChapter.entries()]
    .map(([chapterSlug, wrongs]) => ({ chapterSlug, wrongs }))
    .sort((a, b) => b.wrongs - a.wrongs)
    .slice(0, 6);

  return {
    weakSkills,
    weakChapters,
    wrongQuestionIds: wrongIds.slice(0, 120),
    hasData: attempts.length > 0,
  };
}

/** Programme lesson titles (slug → title) for reports and recommendations. */
export function programmeLessonTitles(): Map<string, string> {
  return new Map(PROGRAMME_LESSONS.map((lesson) => [lesson.slug, lesson.title]));
}

/** Programme chapter titles (slug → title). */
export function programmeChapterTitles(): Map<string, string> {
  return new Map(PROGRAMME_CHAPTERS.map((chapter) => [chapter.slug, chapter.title]));
}

/** Programme chapter → course slug mapping (for course assessments). */
export function courseOfChapter(chapterSlug: string): string | null {
  const chapter = PROGRAMME_CHAPTERS.find((c) => c.slug === chapterSlug);
  return chapter ? courseSlugOfChapter(chapter) : null;
}

export function reportAreasOfSkill(report: PracticeReport): string[] {
  return report.byArea.map((row) => AREA_SHORT[row.key as AssessmentArea] ?? row.key);
}

export function isPracticeMode(value: string): value is PracticeMode {
  return (PRACTICE_MODE_IDS as string[]).includes(value);
}
