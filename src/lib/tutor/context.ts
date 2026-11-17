/**
 * Tutor context retrieval.
 *
 * Assembles the learner's OWN verified learning record into a compact,
 * size-capped prompt block: level (derived from real activity), current
 * lesson, recent mistakes, learned vocabulary, goals and recent assessment
 * results. Plus resolution of a lesson reference ("lesson:<slug>",
 * "reading:<id>", …) for lesson-linked conversations.
 *
 * Privacy rules baked in:
 *   - every query is scoped to the requesting userId — another learner's
 *     data is never even read, let alone sent to the model;
 *   - the block is only built at all when the learner's conversation has
 *     includeContext = true (checked by the caller);
 *   - grading secrets (model answers, correct options, keywords) are never
 *     included in lesson references.
 */

import { db } from "@/lib/db";
import { getLesson } from "@/data/curriculum";
import { getVocabWord } from "@/data/vocabulary";
import { getReadingTextById } from "@/data/reading";
import { getListeningActivityById } from "@/data/listening";
import { speakingActivities, getConversationScenario } from "@/data/speaking";
import { writingAssignments } from "@/data/writing";
import {
  PROGRAMME_LESSONS,
  chapterByNumber,
  chapterById,
  lessonsOfChapter,
} from "@/data/programme";
import { assessDifficultyTrend, DIFFICULTY_LABELS } from "@/lib/practice/trend";
import { parseSessionConfig } from "@/lib/practice/types";
import type { TutorLevel } from "@/data/tutor/types";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface LearnerContextData {
  level: TutorLevel;
  levelReason: string;
  name: string | null;
  /** Ready-to-render snapshot lines (empty when the learner has no history). */
  lines: string[];
  /** Title of the resolved lesson reference, when one is attached. */
  lessonTitle: string | null;
  /** Resolved lesson reference lines (empty when none). */
  lessonLines: string[];
  /** The learner's own teaching preferences (PROMPT 38 §5), null when unset. */
  preferences: TutorPreferencesSnapshot | null;
}

/** Learner-set teaching preferences (validated; null until the learner sets them). */
export interface TutorPreferencesSnapshot {
  replyLength: "brief" | "normal" | "thorough";
  practiceAppetite: "fewer" | "normal" | "more";
  correctionStyle: "immediate" | "note-first";
}

export const DEFAULT_TUTOR_PREFERENCES: TutorPreferencesSnapshot = {
  replyLength: "normal",
  practiceAppetite: "normal",
  correctionStyle: "immediate",
};

export interface LessonRefResolution {
  title: string;
  lines: string[];
}

// ---------------------------------------------------------------------------
// Small helpers
// ---------------------------------------------------------------------------

function parseJsonArray<T>(raw: string): T[] {
  try {
    const parsed = JSON.parse(raw) as unknown;
    return Array.isArray(parsed) ? (parsed as T[]) : [];
  } catch {
    return [];
  }
}

function truncate(text: string, max: number): string {
  return text.length <= max ? text : `${text.slice(0, max - 1)}…`;
}

function daysAgoLabel(date: Date): string {
  const days = Math.floor((Date.now() - date.getTime()) / 86_400_000);
  if (days <= 0) return "today";
  if (days === 1) return "yesterday";
  if (days < 7) return `${days} days ago`;
  return `${Math.floor(days / 7)} week${days < 14 ? "" : "s"} ago`;
}

// ---------------------------------------------------------------------------
// Lesson reference resolution
// ---------------------------------------------------------------------------

const LESSON_REF_PATTERN = /^(lesson|reading|listening|speaking|writing|programme|chapter):[a-z0-9-]+$/i;

export function isPlausibleLessonRef(ref: string): boolean {
  return ref.length <= 120 && LESSON_REF_PATTERN.test(ref);
}

/** Resolve a lesson reference into safe prompt lines. Null when unknown. */
export function resolveLessonRef(ref: string): LessonRefResolution | null {
  const separator = ref.indexOf(":");
  if (separator === -1) return null;
  const kind = ref.slice(0, separator);
  const key = ref.slice(separator + 1);

  switch (kind) {
    case "lesson": {
      const lesson = getLesson(key);
      if (!lesson) return null;
      const lines = [
        `Type: TalkSy curriculum lesson (level ${lesson.levelId})`,
        `Title: ${lesson.title}`,
        `Description: ${lesson.description}`,
        `Sections: ${lesson.sections.map((s) => s.title).join(", ")}`,
      ];
      if (lesson.summary.vocabulary.length > 0) {
        lines.push(`Lesson vocabulary: ${lesson.summary.vocabulary.slice(0, 12).join(", ")}`);
      }
      if (lesson.summary.keyPoints.length > 0) {
        lines.push(
          `Key points: ${lesson.summary.keyPoints.slice(0, 6).map((p) => truncate(p, 90)).join(" | ")}`,
        );
      }
      return { title: lesson.title, lines };
    }
    case "reading": {
      const text = getReadingTextById(key);
      if (!text) return null;
      const firstParagraph = text.paragraphs[0]?.text ?? "";
      const lines = [
        `Type: Reading Room text (level ${text.level})`,
        `Title: ${text.title}`,
        `Description: ${text.description}`,
        `Opening: ${truncate(firstParagraph, 320)}`,
      ];
      const glossary = text.glossary.slice(0, 6);
      if (glossary.length > 0) {
        lines.push(
          `Glossary: ${glossary.map((g) => `${g.term} — ${truncate(g.definition, 60)}`).join("; ")}`,
        );
      }
      return { title: text.title, lines };
    }
    case "listening": {
      const activity = getListeningActivityById(key);
      if (!activity) return null;
      // Prompts only — never transcripts (they stay locked until earned) and
      // never correct answers.
      const lines = [
        `Type: Listening Lab activity (stage ${activity.stage})`,
        `Title: ${activity.title}`,
        `Description: ${activity.description}`,
        `Exercise instructions: ${activity.exercises
          .slice(0, 5)
          .map((e) => truncate(e.prompt, 100))
          .join(" | ")}`,
      ];
      return { title: activity.title, lines };
    }
    case "speaking": {
      const activity = speakingActivities.find((a) => a.id === key || a.slug === key);
      if (!activity) return null;
      const lines = [
        `Type: Speaking Lab activity (tier ${activity.tier})`,
        `Title: ${activity.title}`,
        `Description: ${activity.description}`,
        `Tasks: ${activity.tasks
          .slice(0, 5)
          .map((t) => `${t.title} — ${truncate(t.prompt, 90)}`)
          .join(" | ")}`,
      ];
      return { title: activity.title, lines };
    }
    case "writing": {
      const assignment = writingAssignments.find((a) => a.id === key || a.slug === key);
      if (!assignment) return null;
      const lines = [
        `Type: Writing Studio assignment (tier ${assignment.tier})`,
        `Title: ${assignment.title}`,
        `Description: ${assignment.description}`,
        `Tasks: ${assignment.tasks
          .slice(0, 4)
          .map((t) => truncate(t.prompt, 120))
          .join(" | ")}`,
      ];
      return { title: assignment.title, lines };
    }
    case "programme": {
      // The 56-chapter programme lessons (slug ch-XX-l-YY). Safe fields only:
      // never questions, never answer keys, never assignment rubrics.
      const lesson = PROGRAMME_LESSONS.find(
        (l) => l.slug === key || l.id.toLowerCase() === key,
      );
      if (!lesson) return null;
      const chapter = chapterById(lesson.chapterId);
      const lines = [
        "Type: TalkSy Core English Programme lesson (the 56-chapter programme)",
        `Chapter: CH-${String(chapter?.number ?? 0).padStart(2, "0")} · ${chapter?.title ?? lesson.chapterId}`,
        `Title: ${lesson.title}`,
        `Description: ${truncate(lesson.description, 240)}`,
      ];
      if (lesson.outcomes.length > 0) {
        lines.push(`Outcomes: ${lesson.outcomes.slice(0, 4).map((o) => truncate(o, 90)).join(" | ")}`);
      }
      lines.push(
        `Skills: ${lesson.skills.join(", ")}`,
        `Length: about ${lesson.minutes} minutes (${lesson.difficulty})`,
      );
      lines.push(
        "The lesson ends with practice sets and a chapter test that covers the whole chapter — never reveal or invent their correct answers.",
      );
      return { title: lesson.title, lines };
    }
    case "chapter": {
      // A whole programme chapter (doubts about a chapter or its test).
      const match = key.match(/^(?:ch-)?(\d{1,2})$/);
      const chapter = match ? chapterByNumber(Number(match[1])) : undefined;
      if (!chapter) return null;
      const lessonTotal = lessonsOfChapter(chapter.id).length;
      const lines = [
        "Type: TalkSy Core English Programme chapter",
        `Chapter: CH-${String(chapter.number).padStart(2, "0")} · ${chapter.title}`,
        `Description: ${truncate(chapter.description, 240)}`,
        `Objectives: ${chapter.objectives.slice(0, 5).map((o) => truncate(o, 100)).join(" | ")}`,
        `Lessons: ${lessonTotal} in this chapter`,
        "It ends with a chapter test covering all the chapter's lessons — ground any test explanations in the chapter's objectives, never invent its correct answers.",
      ];
      return { title: `CH-${String(chapter.number).padStart(2, "0")} ${chapter.title}`, lines };
    }
    default:
      return null;
  }
}

// ---------------------------------------------------------------------------
// Level derivation
// ---------------------------------------------------------------------------

interface LevelSignals {
  lessonsCompleted: number;
  intermediateCompletions: number;
  advancedCompletions: number;
  vocabSeen: number;
  vocabMastered: number;
  recentAttempts: number;
  recentAccuracy: number;
}

/**
 * Deterministic, conservative level derivation from VERIFIED activity only.
 * A brand-new learner is a beginner — the tutor then calibrates from the
 * conversation itself.
 */
export function deriveTutorLevel(signals: LevelSignals): {
  level: TutorLevel;
  reason: string;
} {
  const {
    lessonsCompleted,
    intermediateCompletions,
    advancedCompletions,
    vocabSeen,
    vocabMastered,
    recentAttempts,
    recentAccuracy,
  } = signals;

  if (advancedCompletions > 0) {
    return {
      level: "advanced",
      reason: `advanced-tier work completed in ${advancedCompletions} skill area${advancedCompletions === 1 ? "" : "s"}`,
    };
  }
  if (intermediateCompletions >= 3 && recentAttempts >= 20 && recentAccuracy >= 0.8) {
    return {
      level: "advanced",
      reason: `consistent strong accuracy (${Math.round(recentAccuracy * 100)}% recent) with intermediate work completed`,
    };
  }
  if (
    intermediateCompletions > 0 ||
    lessonsCompleted >= 5 ||
    vocabSeen >= 25 ||
    (recentAttempts >= 40 && recentAccuracy >= 0.75)
  ) {
    const parts: string[] = [];
    if (lessonsCompleted > 0) parts.push(`${lessonsCompleted} lessons completed`);
    if (vocabSeen > 0) parts.push(`${vocabSeen} words met`);
    if (recentAttempts > 0) {
      parts.push(`${Math.round(recentAccuracy * 100)}% recent accuracy`);
    }
    return {
      level: "intermediate",
      reason: parts.length > 0 ? parts.join(", ") : "intermediate work in progress",
    };
  }

  const parts: string[] = [];
  if (lessonsCompleted > 0) parts.push(`${lessonsCompleted} lessons completed`);
  if (vocabSeen > 0) parts.push(`${vocabSeen} words met`);
  if (vocabMastered > 0) parts.push(`${vocabMastered} mastered`);
  return {
    level: "beginner",
    reason:
      parts.length > 0
        ? `early steps: ${parts.join(", ")}`
        : "no graded activity yet — start gentle and calibrate from the conversation",
  };
}

// ---------------------------------------------------------------------------
// Learner snapshot
// ---------------------------------------------------------------------------

const INTERMEDIATE_TIERS = new Set(["intermediate"]);
const ADVANCED_TIERS = new Set(["advanced"]);

/**
 * Build the learner's context snapshot. All queries are userId-scoped; the
 * result is compact (a handful of lines) and contains only verified record
 * data — never another learner's, never grading secrets.
 */
export async function buildLearnerContext(
  userId: string,
  opts?: { lessonRef?: string | null },
): Promise<LearnerContextData> {
  const user = await db.user.findUnique({ where: { id: userId } });

  const lessonRows = await db.lessonProgress.findMany({
    where: { userId },
    orderBy: { updatedAt: "desc" },
    take: 10,
  });
  const attempts = await db.exerciseAttempt.findMany({
    where: { userId },
    orderBy: { createdAt: "desc" },
    take: 40,
    select: { isCorrect: true, lessonSlug: true, answer: true, difficulty: true, createdAt: true },
  });
  const assessments = await db.assessmentResult.findMany({
    where: { userId, status: "completed" },
    orderBy: { completedAt: "desc" },
    take: 2,
  });
  const vocabRows = await db.vocabProgress.findMany({ where: { userId } });
  const recentVocab = await db.vocabProgress.findMany({
    where: { userId, lastReviewedAt: { not: null } },
    orderBy: { lastReviewedAt: "desc" },
    take: 6,
  });
  const goals = await db.learnerGoals.findUnique({ where: { userId } });
  const clinic = await db.grammarClinicSubmission.findMany({
    where: { userId },
    orderBy: { createdAt: "desc" },
    take: 3,
  });
  const readingRows = await db.readingProgress.findMany({ where: { userId } });
  const listeningRows = await db.listeningProgress.findMany({ where: { userId } });
  const speakingRows = await db.speakingProgress.findMany({ where: { userId } });
  const writingSubs = await db.writingSubmission.findMany({
    where: { userId },
    orderBy: { createdAt: "desc" },
    take: 3,
  });
  const writingRows = await db.writingProgress.findMany({ where: { userId } });
  const conversationSessions = await db.conversationSession.findMany({
    where: { userId },
    orderBy: { createdAt: "desc" },
    take: 2,
  });
  // PROMPT 38 — programme chapter position, chapter tests, practice
  // reports (mistake patterns) and the learner's tutor preferences.
  const programmeRows = await db.cmsLessonProgress.findMany({
    where: { userId },
    include: { lesson: { select: { slug: true, title: true } } },
    take: 120,
  });
  const chapterTests = await db.practiceSession.findMany({
    where: { userId, mode: "chapter-test", status: "completed" },
    orderBy: { completedAt: "desc" },
    take: 2,
  });
  const completedReports = await db.practiceSession.findMany({
    where: { userId, status: "completed", report: { not: null } },
    orderBy: { completedAt: "desc" },
    take: 6,
    select: { report: true },
  });
  const settingsRow = await db.tutorSettings.findUnique({ where: { userId } });

  // ---- level ----
  const lessonsCompleted = lessonRows.filter((row) => row.status === "completed").length;
  const intermediateCompletions =
    readingRows.filter((r) => r.status === "completed" && INTERMEDIATE_TIERS.has(levelOfReading(r.textId)))
      .length +
    listeningRows.filter((r) => r.status === "completed").length +
    speakingRows.filter((r) => r.status === "completed" && r.tier === "intermediate").length +
    writingRows.filter((r) => r.status === "completed" && r.tier === "intermediate").length;
  const advancedCompletions =
    speakingRows.filter((r) => r.status === "completed" && ADVANCED_TIERS.has(r.tier)).length +
    writingRows.filter((r) => r.status === "completed" && ADVANCED_TIERS.has(r.tier)).length +
    readingRows.filter((r) => r.status === "completed" && levelOfReading(r.textId) === "advanced").length;
  const vocabSeen = vocabRows.length;
  const vocabMastered = vocabRows.filter((row) => row.status === "mastered").length;
  const recentAttempts = attempts.length;
  const recentAccuracy =
    recentAttempts === 0
      ? 0
      : attempts.filter((a) => a.isCorrect).length / recentAttempts;

  const { level, reason } = deriveTutorLevel({
    lessonsCompleted,
    intermediateCompletions,
    advancedCompletions,
    vocabSeen,
    vocabMastered,
    recentAttempts,
    recentAccuracy,
  });

  // ---- snapshot lines ----
  const lines: string[] = [`Level: ${level} (derived from activity — ${reason})`];

  const currentLessonRow = lessonRows.find((row) => row.status === "in-progress") ?? lessonRows[0];
  if (currentLessonRow) {
    const lesson = getLesson(currentLessonRow.lessonSlug);
    lines.push(
      `Current lesson: ${lesson?.title ?? currentLessonRow.lessonSlug} (${currentLessonRow.status})`,
    );
  }

  // ---- programme chapter position (PROMPT 38 §2: current chapter) ----
  const programme = programmePosition(programmeRows);
  if (programme.line) lines.push(programme.line);

  // Most recent verified activity across skills.
  const latestEvents: { at: Date; label: string }[] = [];
  if (attempts[0]) latestEvents.push({ at: attempts[0].createdAt, label: "an exercise" });
  if (writingSubs[0]) {
    const title =
      writingAssignments.find((a) => a.id === writingSubs[0].assignmentId)?.title ??
      writingSubs[0].assignmentId;
    latestEvents.push({ at: writingSubs[0].createdAt, label: `a writing submission (${title})` });
  }
  if (conversationSessions[0]) {
    const scenario = getConversationScenario(conversationSessions[0].scenarioId);
    latestEvents.push({
      at: conversationSessions[0].createdAt,
      label: `a speaking conversation (${scenario?.title ?? "role-play"})`,
    });
  }
  latestEvents.sort((a, b) => b.at.getTime() - a.at.getTime());
  if (latestEvents[0]) {
    lines.push(`Last activity: ${latestEvents[0].label} ${daysAgoLabel(latestEvents[0].at)}`);
  }

  if (goals) {
    lines.push(`Learning goals: ${goals.dailyPoints} points a day, ${goals.weeklyPoints} a week`);
  }

  if (vocabSeen > 0) {
    const words = recentVocab
      .map((row) => getVocabWord(row.wordId)?.word)
      .filter((word): word is string => Boolean(word))
      .slice(0, 6);
    const wordList = words.length > 0 ? `; recent words: ${words.join(", ")}` : "";
    lines.push(
      `Learned vocabulary: ${vocabSeen} words met, ${vocabMastered} mastered${wordList}`,
    );
  }

  // Recent mistakes: Error Clinic sentences first (richest), then wrong answers.
  const mistakes: string[] = [];
  for (const submission of clinic) {
    const issues = parseJsonArray<{ original?: string; suggestion?: string; explanation?: string }>(
      submission.issues,
    );
    const issue = issues[0];
    const fix = issue?.suggestion ? ` → "${truncate(issue.suggestion, 60)}"` : "";
    mistakes.push(`"${truncate(submission.sentence, 70)}"${fix}`);
    if (mistakes.length >= 3) break;
  }
  for (const attempt of attempts) {
    if (attempt.isCorrect) continue;
    const answer = truncate(String(attempt.answer ?? "").slice(0, 40), 40) || "(no answer)";
    mistakes.push(`lesson ${attempt.lessonSlug}: answered ${answer} (incorrect)`);
    if (mistakes.length >= 5) break;
  }
  if (mistakes.length > 0) {
    lines.push(`Recent mistakes: ${mistakes.slice(0, 4).join("; ")}`);
  }

  // ---- common mistake patterns (PROMPT 38 §5: learning memory) ----
  // Error Clinic categories + practice-zone report mistake categories.
  const mistakeCounts = new Map<string, number>();
  for (const submission of clinic) {
    for (const category of parseJsonArray<string>(submission.categories)) {
      mistakeCounts.set(category, (mistakeCounts.get(category) ?? 0) + 1);
    }
  }
  for (const row of completedReports) {
    try {
      const report = JSON.parse(row.report ?? "{}") as {
        mistakeCategories?: { category?: unknown; count?: unknown }[];
      };
      for (const item of report.mistakeCategories ?? []) {
        if (typeof item?.category !== "string") continue;
        mistakeCounts.set(
          item.category,
          (mistakeCounts.get(item.category) ?? 0) + (Number(item.count) || 1),
        );
      }
    } catch {
      // malformed report JSON — never fail the snapshot for it
    }
  }
  const topPatterns = [...mistakeCounts.entries()]
    .filter(([, count]) => count >= 2)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3);
  if (topPatterns.length > 0) {
    lines.push(
      `Common mistake patterns: ${topPatterns.map(([category, count]) => `${category} (×${count})`).join("; ")}`,
    );
  }

  // ---- vocabulary difficulties (PROMPT 38 §5) ----
  const difficultWords = vocabRows
    .filter((row) => row.isDifficult || row.lapses >= 2)
    .sort((a, b) => b.lapses - a.lapses)
    .slice(0, 4)
    .map((row) => getVocabWord(row.wordId)?.word)
    .filter((word): word is string => Boolean(word));
  if (difficultWords.length > 0) {
    lines.push(
      `Vocabulary difficulties: ${difficultWords.join(", ")} — each forgotten 2+ times or flagged by the learner`,
    );
  }

  // ---- recent chapter test (PROMPT 38 §2: exercise performance) ----
  const lastTest = chapterTests[0];
  if (lastTest) {
    const chapterSlug = parseSessionConfig(lastTest.config).chapterSlug ?? "your chapter";
    const pct =
      lastTest.total > 0
        ? Math.round((lastTest.correct / lastTest.total) * 100)
        : Math.round(lastTest.score * 100);
    lines.push(
      `Recent chapter test: ${chapterSlug} — ${pct}% (${lastTest.passed ? "passed" : "not passed"})`,
    );
  }

  // ---- exercise performance trend (PROMPT 38 §7) ----
  const trend = assessDifficultyTrend(
    attempts
      .slice(0, 20)
      .slice()
      .reverse()
      .map((a) => ({ isCorrect: a.isCorrect, difficulty: a.difficulty })),
  );
  if (trend.recentAccuracy !== null) {
    const pct = `${Math.round(trend.recentAccuracy * 100)}%`;
    lines.push(
      trend.suggestion
        ? `Exercise performance: ${pct} over ${trend.attemptsConsidered} recent attempts — suggested working level: ${DIFFICULTY_LABELS[trend.suggestion]}`
        : `Exercise performance: ${pct} over ${trend.attemptsConsidered} recent attempts — too few yet to suggest a level fairly`,
    );
  }

  // ---- recommended next steps (PROMPT 38 §6, with reasons) ----
  const dueVocabCount = await db.vocabProgress.count({
    where: { userId, dueAt: { lte: new Date() } },
  });
  const nextSteps: string[] = [];
  if (programme.nextStep) nextSteps.push(programme.nextStep);
  if (dueVocabCount > 0) {
    nextSteps.push(
      `review ${dueVocabCount} due word${dueVocabCount === 1 ? "" : "s"} in Word World (spaced repetition is due now)`,
    );
  }
  if (trend.suggestion) {
    nextSteps.push(
      `practise at ${DIFFICULTY_LABELS[trend.suggestion]} level in the Practice Zone (based on recent attempts)`,
    );
  }
  if (nextSteps.length > 0) {
    lines.push(
      `Recommended next steps (when suggesting what to do next, mention these and the reason attached to each): ${nextSteps.join("; ")}`,
    );
  }

  for (const assessment of assessments) {
    const pct =
      assessment.total > 0
        ? Math.round((assessment.correct / assessment.total) * 100)
        : Math.round(assessment.score * 100);
    lines.push(
      `Recent assessment: lesson ${assessment.lessonSlug} — ${pct}% (${assessment.passed ? "passed" : "not passed"})`,
    );
  }

  if (writingSubs[0]) {
    const title =
      writingAssignments.find((a) => a.id === writingSubs[0].assignmentId)?.title ??
      writingSubs[0].assignmentId ??
      "free practice";
    lines.push(
      `Writing: latest submission "${truncate(title, 40)}" (version ${writingSubs[0].version}, score ${Math.round(writingSubs[0].overall)}/100)`,
    );
  }

  // ---- lesson reference ----
  let lessonTitle: string | null = null;
  let lessonLines: string[] = [];
  if (opts?.lessonRef) {
    const resolved = resolveLessonRef(opts.lessonRef);
    if (resolved) {
      lessonTitle = resolved.title;
      lessonLines = resolved.lines;
    } else {
      lessonTitle = null;
      lessonLines = [
        `The learner linked lesson reference "${opts.lessonRef}", but it could not be resolved. Ask them which lesson they mean.`,
      ];
    }
  }

  return {
    level,
    levelReason: reason,
    name: user?.name ?? null,
    lines,
    lessonTitle,
    lessonLines,
    preferences: settingsRow ? validatedPreferences(settingsRow) : null,
  };
}

// ---------------------------------------------------------------------------
// Programme chapter position (pure — unit-tested)
// ---------------------------------------------------------------------------

export interface ProgrammeRowInput {
  status: string;
  lesson: { slug: string; title: string };
}

export interface ProgrammePosition {
  line: string | null;
  chapterNumber: number | null;
  /** Compact next-step instruction for the recommendation engine (PROMPT 38 §6). */
  nextStep: string | null;
  /** The next chapter's first lesson slug, when the current chapter is done. */
  nextLessonSlug: string | null;
}

/**
 * Derive the learner's current chapter line from their programme lesson
 * progress. Rules: the highest engaged chapter wins; mid-chapter if it has
 * an in-progress lesson; “next chapter” when the highest one is fully done.
 */
export function programmePosition(rows: ProgrammeRowInput[]): ProgrammePosition {
  type Agg = { engaged: number; completed: number; total: number; inProgress: string | null };
  const byChapter = new Map<number, Agg>();
  for (const row of rows) {
    const match = row.lesson.slug.match(/^ch-(\d{1,2})-l-\d+$/);
    if (!match) continue;
    const n = Number(match[1]);
    const chapter = chapterByNumber(n);
    if (!chapter) continue;
    const agg =
      byChapter.get(n) ??
      { engaged: 0, completed: 0, total: lessonsOfChapter(chapter.id).length, inProgress: null };
    agg.engaged += 1;
    if (row.status === "completed") agg.completed += 1;
    else if (row.status === "in-progress" && !agg.inProgress) agg.inProgress = row.lesson.title;
    byChapter.set(n, agg);
  }
  if (byChapter.size === 0) return { line: null, chapterNumber: null, nextStep: null, nextLessonSlug: null };

  const highest = Math.max(...byChapter.keys());
  const agg = byChapter.get(highest)!;
  const chapter = chapterByNumber(highest);
  const label = (n: number) => `CH-${String(n).padStart(2, "0")}`;

  if (agg.inProgress) {
    return {
      line: `Current chapter: ${label(highest)} · ${chapter?.title ?? ""} — ${agg.completed}/${agg.total} lessons completed (currently: “${truncate(agg.inProgress, 48)}”)`,
      chapterNumber: highest,
      nextStep: `finish CH-${String(highest).padStart(2, "0")} (“${truncate(agg.inProgress, 48)}”) — it is already in progress`,
      nextLessonSlug: null,
    };
  }
  const done = agg.total > 0 && agg.completed >= agg.total;
  if (done) {
    const next = chapterByNumber(highest + 1);
    const nextFirstLesson = next ? next.lessons[0] : undefined;
    return next
      ? {
          line: `Programme position: ${label(highest)} (${chapter?.title ?? ""}) completed — the next chapter is ${label(highest + 1)} · ${next.title}`,
          chapterNumber: highest + 1,
          nextStep: `start CH-${String(highest + 1).padStart(2, "0")} · ${next.title} (the next chapter on the path)`,
          nextLessonSlug: nextFirstLesson?.slug ?? null,
        }
      : {
          line: `Programme position: ${label(highest)} (${chapter?.title ?? ""}) completed — that is the final chapter of the programme`,
          chapterNumber: highest,
          nextStep: null,
          nextLessonSlug: null,
        };
  }
  return {
    line: `Current chapter: ${label(highest)} · ${chapter?.title ?? ""} — ${agg.completed}/${agg.total} lessons completed`,
    chapterNumber: highest,
    nextStep: `continue CH-${String(highest).padStart(2, "0")} · ${chapter?.title ?? ""} (${agg.total - agg.completed} lesson${agg.total - agg.completed === 1 ? "" : "s"} left)`,
    nextLessonSlug: null,
  };
}

// ---------------------------------------------------------------------------
// Preference validation (pure)
// ---------------------------------------------------------------------------

function pick<T extends string>(value: string, allowed: readonly T[], fallback: T): T {
  return (allowed as readonly string[]).includes(value) ? (value as T) : fallback;
}

/** Defensive read of a TutorSettings row into the prompt-safe snapshot. */
export function validatedPreferences(row: {
  replyLength: string;
  practiceAppetite: string;
  correctionStyle: string;
}): TutorPreferencesSnapshot {
  return {
    replyLength: pick(row.replyLength, ["brief", "normal", "thorough"] as const, "normal"),
    practiceAppetite: pick(row.practiceAppetite, ["fewer", "normal", "more"] as const, "normal"),
    correctionStyle: pick(row.correctionStyle, ["immediate", "note-first"] as const, "immediate"),
  };
}

function levelOfReading(textId: string): string {
  return getReadingTextById(textId)?.level ?? "";
}
