/**
 * PROMPT 38 §6 — personalisation engine for the AI tutor.
 *
 * Deterministic, explained recommendations built from the learner's own
 * verified record. Every item carries a `why` that quotes the actual
 * numbers ("83% accuracy over 6 recent attempts…") — no black box, no
 * invented counts. Same history → same recommendations.
 *
 * Sources: programme chapter position, exercise-performance trend,
 * due spaced-repetition vocabulary, weak areas (practice engine), and
 * productive-skill balance. Consumed by /api/tutor/recommendations and the
 * "For you" panel in the tutor view.
 */

import { db } from "@/lib/db";
import { chapterByNumber, lessonsOfChapter } from "@/data/programme";
import { programmePosition, type ProgrammeRowInput } from "./context";
import { assessDifficultyTrend, DIFFICULTY_LABELS } from "@/lib/practice/trend";
import { computeWeakAreas } from "@/lib/practice/mastery";
import { speakingActivities } from "@/data/speaking";
import { writingAssignments } from "@/data/writing";

export type TutorRecommendationKind =
  | "next-chapter"
  | "additional-practice"
  | "weak-area-revision"
  | "vocabulary-exercise"
  | "speaking-activity"
  | "writing-task";

export interface TutorRecommendationItem {
  id: string;
  kind: TutorRecommendationKind;
  title: string;
  action: string;
  /** WHY this was generated — quotes the learner's own numbers. */
  why: string;
  href: string;
  weight: number;
}

export interface TutorRecommendations {
  items: TutorRecommendationItem[];
  note: string;
}

export async function buildTutorRecommendations(
  userId: string,
): Promise<TutorRecommendations> {
  const items: TutorRecommendationItem[] = [];

  // ---- 1. Next chapter (programme position) --------------------------------
  const programmeRows = await db.cmsLessonProgress.findMany({
    where: { userId },
    include: { lesson: { select: { slug: true, title: true } } },
    take: 120,
  });
  const programme = programmePosition(programmeRows);
  if (programme.nextStep && programme.chapterNumber !== null) {
    const chapter = chapterByNumber(programme.chapterNumber);
    const firstLesson =
      programme.nextLessonSlug ?? lessonsOfChapter(chapter?.id ?? "")?.[0]?.slug ?? null;
    items.push({
      id: "next-chapter",
      kind: "next-chapter",
      title: `Next: CH-${String(programme.chapterNumber).padStart(2, "0")} · ${chapter?.title ?? "the next chapter"}`,
      action: firstLesson
        ? "Open the lesson and continue your path."
        : "Open the course hub and continue your path.",
      why: programme.line ?? programme.nextStep,
      href: firstLesson ? `#/course-lesson/${firstLesson}` : "#/courses",
      weight: 100,
    });
  }

  // ---- 2. Additional practice at the adaptive level ------------------------
  const attemptRows = await db.exerciseAttempt.findMany({
    where: { userId },
    orderBy: { createdAt: "desc" },
    take: 20,
    select: { isCorrect: true, difficulty: true },
  });
  const trend = assessDifficultyTrend(
    attemptRows.slice().reverse().map((row) => ({ isCorrect: row.isCorrect, difficulty: row.difficulty })),
  );
  if (trend.suggestion) {
    items.push({
      id: "practice-level",
      kind: "additional-practice",
      title: `Practise at ${DIFFICULTY_LABELS[trend.suggestion]} level`,
      action: "Start a Mixed session at the suggested level in the Practice Zone.",
      why: trend.reason,
      href: "#/practice",
      weight: 85,
    });
  }

  // ---- 3. Weak-area revision (practice engine's own weak-area profile) ------
  const weak = await computeWeakAreas(userId);
  if (weak.hasData) {
    const weakestSkill = weak.weakSkills[0];
    const weakestChapter = weak.weakChapters[0];
    if (weakestChapter) {
      items.push({
        id: `weak-chapter-${weakestChapter.chapterSlug}`,
        kind: "weak-area-revision",
        title: `Revise ${weakestChapter.chapterSlug}`,
        action: "Run a Weak-area session focused on your least accurate chapters.",
        why: `${weakestChapter.wrongs} wrong answers in ${weakestChapter.chapterSlug} — your practice history flags it as the weakest area${weakestSkill ? ` (${weakestSkill.skill}: ${weakestSkill.accuracy}% accuracy)` : ""}.`,
        href: "#/practice",
        weight: 80,
      });
    } else if (weakestSkill) {
      items.push({
        id: `weak-skill-${weakestSkill.skill}`,
        kind: "weak-area-revision",
        title: `Revise ${weakestSkill.skill}`,
        action: "Run a Weak-area session in the Practice Zone.",
        why: `${weakestSkill.accuracy}% accuracy over ${weakestSkill.attempts} attempts — the lowest of your measured skills.`,
        href: "#/practice",
        weight: 75,
      });
    }
  }

  // ---- 4. Vocabulary exercises (spaced repetition due) ----------------------
  const dueCount = await db.vocabProgress.count({
    where: { userId, dueAt: { lte: new Date() } },
  });
  if (dueCount > 0) {
    items.push({
      id: "vocab-due",
      kind: "vocabulary-exercise",
      title: `Review ${dueCount} due word${dueCount === 1 ? "" : "s"}`,
      action: "Run today's spaced-repetition reviews in Word World.",
      why: `${dueCount} word${dueCount === 1 ? " is" : "s are"} due for review right now — spaced repetition only moves words into long-term memory if you review near the due date.`,
      href: "#/vocabulary/today",
      weight: 82,
    });
  }

  // ---- 5. Speaking activity --------------------------------------------------
  const speakingDone = await db.speakingProgress.count({
    where: { userId, status: "completed" },
  });
  const speakingAttempts = await db.speakingAttempt.count({ where: { userId } });
  if (speakingAttempts === 0) {
    const first = speakingActivities.find((a) => a.tier === "beginner");
    items.push({
      id: "speaking-first",
      kind: "speaking-activity",
      title: "Try your first speaking activity",
      action: first ? `Start with “${first.title}” — short, guided tasks with instant feedback.` : "Open the Speaking Lab.",
      why: "You have not recorded any speaking practice yet — saying new words out loud is what makes them stick, and the first attempt only takes a few minutes.",
      href: first ? `#/speaking/activity/${first.slug}` : "#/speaking",
      weight: 70,
    });
  } else if (speakingDone < speakingActivities.length) {
    items.push({
      id: "speaking-next",
      kind: "speaking-activity",
      title: "Keep your speaking practice going",
      action: "Pick the next activity in the Speaking Lab.",
      why: `You have completed ${speakingDone} of ${speakingActivities.length} speaking activities — regular short sessions beat rare long ones.`,
      href: "#/speaking",
      weight: 55,
    });
  }

  // ---- 6. Writing task --------------------------------------------------------
  const writingDone = await db.writingProgress.count({
    where: { userId, status: "completed" },
  });
  const writingSubs = await db.writingSubmission.count({ where: { userId } });
  const belowThreshold = await db.writingProgress.findFirst({
    where: { userId, status: { not: "completed" }, submissionsCount: { gt: 0 } },
  });
  if (belowThreshold) {
    const assignment = writingAssignments.find((a) => a.id === belowThreshold.assignmentId);
    items.push({
      id: `writing-revise-${belowThreshold.assignmentId}`,
      kind: "writing-task",
      title: `Revise: ${assignment?.title ?? "your latest writing"}`,
      action: "Read the feedback on your last version and submit an improved one.",
      why: `Your latest version scored ${Math.round(belowThreshold.bestScore * 100)}% — revising your own writing is the single fastest way to improve it.`,
      href: assignment ? `#/writing/a/${assignment.slug}` : "#/writing",
      weight: 72,
    });
  } else if (writingSubs === 0) {
    const first = writingAssignments.find((a) => a.tier === "beginner");
    items.push({
      id: "writing-first",
      kind: "writing-task",
      title: "Try your first writing assignment",
      action: first ? `Start with “${first.title}” — structured feedback on every dimension.` : "Open the Writing Studio.",
      why: "You have not submitted any writing yet — writing consolidates the vocabulary and grammar you already know.",
      href: first ? `#/writing/a/${first.slug}` : "#/writing",
      weight: 60,
    });
  }

  const sorted = items.sort((a, b) => b.weight - a.weight).slice(0, 5);
  return {
    items: sorted,
    note:
      sorted.length === 0
        ? "No recommendations yet — they appear as soon as you start learning."
        : "Built from your own learning record — every card explains why it was generated.",
  };
}
