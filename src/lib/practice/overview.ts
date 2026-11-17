/**
 * PROMPT 36 — practice-zone overview (hub data).
 *
 * Everything the hub needs in one payload: the seven practice modes, the 56
 * chapter test launchers (with honest unlock/demonstrated state), the six
 * course milestone assessments (unlocked at ≥50% of the course's chapters
 * completed), the six skill mastery estimates and the weak-area summary.
 */

import { db } from "@/lib/db";
import { PROGRAMME_LEVELS } from "@/data/programme";
import { MODE_SPECS, PRACTICE_MODES, type PracticeMode } from "./types";
import {
  computeMastery,
  computeWeakAreas,
  type MasteryOverview,
  type WeakAreaProfile,
} from "./mastery";
import { chaptersWithQuestions } from "./bank";
import { AREA_LABELS, ASSESSMENT_AREAS, type AssessmentArea } from "./areas";
import { assessDifficultyTrend, type DifficultyTrend } from "./trend";

export interface OverviewChapter {
  slug: string;
  number: number;
  title: string;
  levelId: string;
  levelName: string;
  courseSlug: string;
  courseTitle: string;
  questionCount: number;
  lessonsViewed: number;
  lessonsCompleted: number;
  lessonsTotal: number;
  chapterCompleted: boolean;
  unlocked: boolean;
  demonstrated: boolean;
  bestTestPercent: number | null;
  testsTaken: number;
}

export interface OverviewCourse {
  slug: string;
  title: string;
  levelName: string;
  levelId: string;
  chaptersTotal: number;
  chaptersCompleted: number;
  chaptersDemonstrated: number;
  questionCount: number;
  /** Unlocked at the major milestone: ≥50% of the course's chapters completed. */
  unlocked: boolean;
  unlockProgress: number;
  unlockReason: string;
}

export interface PracticeOverview {
  modes: { id: PracticeMode; label: string; description: string; hints: boolean; passMark: boolean; gradedStyle: string }[];
  chapters: OverviewChapter[];
  courses: OverviewCourse[];
  areas: { id: AssessmentArea; label: string }[];
  /** PROMPT 38 §7 — adaptive difficulty suggestion from recent graded attempts. */
  adaptive: DifficultyTrend;
  mastery: Pick<MasteryOverview, "skills" | "chaptersCompleted" | "chaptersDemonstrated" | "note">;
  weakAreas: Pick<WeakAreaProfile, "weakSkills" | "weakChapters" | "hasData">;
  sessionTotals: { completed: number; testsPassed: number };
}

export async function buildOverview(userId: string): Promise<PracticeOverview> {
  const [mastery, weakAreas, questionCounts, sessionAgg] = await Promise.all([
    computeMastery(userId),
    computeWeakAreas(userId),
    chaptersWithQuestions(),
    db.practiceSession.aggregate({
      where: { userId, status: "completed" },
      _count: true,
    }),
  ]);
  const testsPassed = await db.practiceSession.count({
    where: { userId, status: "completed", passed: true },
  });

  const levelNameOf = new Map<string, string>(
    PROGRAMME_LEVELS.map((l) => [l.id as string, l.name]),
  );
  const courseTitleOf = new Map<string, string>(
    PROGRAMME_LEVELS.map((l) => [l.courseSlug, l.courseTitle]),
  );

  const chapters: OverviewChapter[] = mastery.chapters.map((chapter) => ({
    slug: chapter.chapterSlug,
    number: Number(chapter.chapterSlug.slice(3)),
    title: chapter.chapterTitle,
    levelId: chapter.levelId,
    levelName: levelNameOf.get(chapter.levelId) ?? chapter.levelId,
    courseSlug: chapter.courseSlug,
    courseTitle: courseTitleOf.get(chapter.courseSlug) ?? chapter.courseSlug,
    questionCount: questionCounts.get(chapter.chapterSlug) ?? 0,
    lessonsViewed: chapter.lessonsViewed,
    lessonsCompleted: chapter.lessonsCompleted,
    lessonsTotal: chapter.lessonsTotal,
    chapterCompleted: chapter.chapterCompleted,
    unlocked: chapter.unlocked && (questionCounts.get(chapter.chapterSlug) ?? 0) >= 5,
    demonstrated: chapter.knowledgeDemonstrated,
    bestTestPercent: chapter.bestChapterTestPercent,
    testsTaken: chapter.testsTaken,
  }));

  const courses: OverviewCourse[] = PROGRAMME_LEVELS.map((level) => {
    const [from, to] = level.chapterRange;
    const chapterRows = mastery.chapters.filter((c) => {
      const n = Number(c.chapterSlug.slice(3));
      return n >= from && n <= to;
    });
    const chaptersCompleted = chapterRows.filter((c) => c.chapterCompleted).length;
    const chaptersTotal = chapterRows.length;
    const questionCount = chapterRows.reduce(
      (sum, c) => sum + (questionCounts.get(c.chapterSlug) ?? 0),
      0,
    );
    const needed = Math.ceil(chaptersTotal / 2);
    const unlocked = chaptersCompleted >= needed && chaptersTotal > 0;
    return {
      slug: level.courseSlug,
      title: level.courseTitle,
      levelName: level.name,
      levelId: level.id,
      chaptersTotal,
      chaptersCompleted,
      chaptersDemonstrated: chapterRows.filter((c) => c.knowledgeDemonstrated).length,
      questionCount,
      unlocked,
      unlockProgress: chaptersTotal === 0 ? 0 : Math.round((chaptersCompleted / chaptersTotal) * 100),
      unlockReason: unlocked
        ? "Milestone reached — the assessment measures all seven areas across the course."
        : `Unlocks at the course milestone: ${needed} of ${chaptersTotal} chapters completed (currently ${chaptersCompleted}).`,
    };
  });

  // PROMPT 38 §7 — adaptive difficulty from the learner's recent graded
  // attempts (oldest first). All graded contexts count: demonstrated
  // performance is demonstrated performance.
  const recentAttemptRows = await db.exerciseAttempt.findMany({
    where: { userId },
    orderBy: { createdAt: "desc" },
    take: 20,
    select: { isCorrect: true, difficulty: true, createdAt: true },
  });
  const adaptive = assessDifficultyTrend(
    recentAttemptRows
      .slice()
      .reverse()
      .map((row) => ({ isCorrect: row.isCorrect, difficulty: row.difficulty })),
  );

  return {
    modes: PRACTICE_MODES.map((id) => ({
      id,
      label: MODE_SPECS[id].label,
      description: MODE_SPECS[id].description,
      hints: MODE_SPECS[id].hints,
      passMark: MODE_SPECS[id].passMark,
      gradedStyle: MODE_SPECS[id].gradedStyle,
    })),
    chapters,
    courses,
    areas: ASSESSMENT_AREAS.map((id) => ({ id, label: AREA_LABELS[id] })),
    adaptive,
    mastery: {
      skills: mastery.skills,
      chaptersCompleted: mastery.chaptersCompleted,
      chaptersDemonstrated: mastery.chaptersDemonstrated,
      note: mastery.note,
    },
    weakAreas: {
      weakSkills: weakAreas.weakSkills,
      weakChapters: weakAreas.weakChapters,
      hasData: weakAreas.hasData,
    },
    sessionTotals: {
      completed: sessionAgg._count,
      testsPassed,
    },
  };
}
