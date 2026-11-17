/**
 * PROMPT 36 — practice session service.
 *
 * Start / list / fetch / submit / finish sessions. All grading goes through
 * the shared engine (validateAnswer); reports come from report.ts; nothing
 * trusts client-side correctness.
 */

import { db } from "@/lib/db";
import { validateAnswer } from "@/lib/engine/validators";
import { sanitizeExercises } from "@/lib/engine/sanitize";
import { PROGRAMME_LEVELS } from "@/data/programme";
import type { Difficulty, Exercise } from "@/data/curriculum/types";
import {
  MODE_SPECS,
  configScopeKey,
  parseSessionConfig,
  type PracticeMode,
  type SessionConfig,
  type SessionQuestionDto,
} from "./types";
import { queryBank, type BankQuestion } from "./bank";
import {
  drawChapterTest,
  drawCourseAssessment,
  drawSpread,
  prioritiseWrong,
} from "./assemble";
import { buildReport, type GradedInput, type PracticeReport, type PreviousAttemptRow } from "./report";
import { computeWeakAreas, programmeLessonTitles } from "./mastery";
import { applyDifficultyPreference, isDifficulty } from "./trend";

export class PracticeError extends Error {
  status: number;
  constructor(message: string, status = 422) {
    super(message);
    this.status = status;
  }
}

/** Pass marks for the graded modes. */
const PASS_SCORES: Partial<Record<PracticeMode, number>> = {
  "chapter-test": 0.75,
  "course-assessment": 0.7,
};

/** Chapters of one programme course. */
function chaptersOfCourse(courseSlug: string): string[] {
  const level = PROGRAMME_LEVELS.find((l) => l.courseSlug === courseSlug);
  if (!level) return [];
  const [from, to] = level.chapterRange;
  const chapters: string[] = [];
  for (let n = from; n <= to; n += 1) {
    chapters.push(`ch-${String(n).padStart(2, "0")}`);
  }
  return chapters;
}

/** Chapters the learner has engaged with (any lesson row). */
async function engagedChapters(userId: string): Promise<Map<string, { viewed: number; completed: number }>> {
  const rows = await db.cmsLessonProgress.findMany({
    where: { userId },
    select: { status: true, lesson: { select: { slug: true } } },
  });
  const map = new Map<string, { viewed: number; completed: number }>();
  for (const row of rows) {
    const match = /^ch-\d{2}-l-\d{2}$/.exec(row.lesson.slug);
    if (!match) continue;
    const chapterSlug = row.lesson.slug.slice(0, 5);
    const entry = map.get(chapterSlug) ?? { viewed: 0, completed: 0 };
    entry.viewed += 1;
    if (row.status === "completed") entry.completed += 1;
    map.set(chapterSlug, entry);
  }
  return map;
}

// ---------------------------------------------------------------------------
// Start
// ---------------------------------------------------------------------------

export interface StartSessionInput {
  mode: PracticeMode;
  config: SessionConfig;
}

export interface StartedSession {
  id: string;
  mode: PracticeMode;
  config: SessionConfig;
  hintsAllowed: boolean;
  timeLimitSec: number | null;
  passScore: number | null;
  expiresAt: string | null;
  questions: SessionQuestionDto[];
}

export async function startSession(
  userId: string,
  input: StartSessionInput,
): Promise<StartedSession> {
  const spec = MODE_SPECS[input.mode];
  const config = normaliseConfig(input.mode, input.config, spec);

  // Assemble the pool for this mode.
  const { pool, wrongIds } = await assemblePool(userId, input.mode, config);
  if (pool.length === 0) {
    throw new PracticeError(emptyPoolMessage(input.mode, config));
  }

  // PROMPT 38 §7 — apply the learner's (possibly adaptive) difficulty
  // preference to the pool before drawing. A preference, never a constraint.
  const effectivePool =
    config.difficulty && config.difficulty.length > 0
      ? applyDifficultyPreference(pool, config.difficulty as Difficulty[])
      : pool;

  // Retry-varying deterministic seed: same scope + retry count → same draw.
  const scopeKey = configScopeKey(input.mode, config);
  const completedScope = await db.practiceSession.findMany({
    where: { userId, mode: input.mode, status: "completed" },
    select: { config: true },
  });
  const retries = completedScope.filter(
    (row) => configScopeKey(input.mode, parseSessionConfig(row.config)) === scopeKey,
  ).length;
  const seed = `${userId}:${scopeKey}:${retries}`;

  // Draw.
  const count = config.count ?? spec.defaultCount;
  let draw: BankQuestion[];
  if (input.mode === "chapter-test") {
    draw = drawChapterTest(effectivePool, count, seed);
  } else if (input.mode === "course-assessment") {
    draw = drawCourseAssessment(effectivePool, count, seed);
  } else if (input.mode === "weak-area" && wrongIds) {
    draw = prioritiseWrong(effectivePool, wrongIds, count, seed);
  } else {
    draw = drawSpread(effectivePool, count, seed);
  }
  if (draw.length === 0) {
    throw new PracticeError("The question pool could not produce a draw — please report this.");
  }

  const passScore = spec.passMark ? (PASS_SCORES[input.mode] ?? 0.75) : null;
  const timeLimitSec =
    input.mode === "timed" ? (config.timeLimitSec ?? 360) : null;
  const expiresAt =
    timeLimitSec !== null ? new Date(Date.now() + timeLimitSec * 1000) : null;

  const session = await db.practiceSession.create({
    data: {
      userId,
      mode: input.mode,
      status: "active",
      config: JSON.stringify(config),
      seed,
      questionIds: JSON.stringify(draw.map((q) => q.id)),
      hintsAllowed: spec.hints,
      ...(expiresAt ? { expiresAt } : {}),
    },
  });

  return {
    id: session.id,
    mode: input.mode,
    config,
    hintsAllowed: spec.hints,
    timeLimitSec,
    passScore,
    expiresAt: expiresAt ? expiresAt.toISOString() : null,
    questions: draw.map(toSessionQuestion),
  };
}

function normaliseConfig(
  mode: PracticeMode,
  config: SessionConfig,
  spec: (typeof MODE_SPECS)[PracticeMode],
): SessionConfig {
  const [min, max] = spec.countRange;
  const next: SessionConfig = {};
  if (config.chapterSlug) next.chapterSlug = config.chapterSlug;
  if (config.courseSlug) next.courseSlug = config.courseSlug;
  const count = Math.max(min, Math.min(max, config.count ?? spec.defaultCount));
  next.count = Math.min(count, max);

  // Mode requirements.
  if ((mode === "guided" || mode === "independent" || mode === "chapter-test") && !next.chapterSlug) {
    throw new PracticeError(`${spec.label} needs a chapter — pick one first.`);
  }
  if (mode === "course-assessment" && !next.courseSlug) {
    throw new PracticeError("Course assessments need a course — pick one first.");
  }
  if (mode === "timed" && config.timeLimitSec) {
    next.timeLimitSec = Math.max(60, Math.min(1800, config.timeLimitSec));
  }
  // PROMPT 38 §7 — difficulty preference: spread modes only, validated to a
  // subset of the ladder; silently dropped for the fixed-coverage modes.
  if (config.difficulty && mode !== "chapter-test" && mode !== "course-assessment") {
    const bands = [...new Set(config.difficulty.filter(isDifficulty))];
    if (bands.length > 0) next.difficulty = bands;
  }
  return next;
}

/** Pool assembly result: the questions plus optional weak-area priorities. */
interface PoolResult {
  pool: BankQuestion[];
  wrongIds?: ReadonlySet<string>;
}

async function assemblePool(
  userId: string,
  mode: PracticeMode,
  config: SessionConfig,
): Promise<PoolResult> {
  switch (mode) {
    case "guided":
    case "independent":
    case "chapter-test": {
      const pool = await queryBank({ chapterSlugs: [config.chapterSlug!] });
      if (mode === "chapter-test" && pool.length < 5) {
        throw new PracticeError(
          "This chapter does not have enough published questions for a fair test yet — try guided practice while the team expands the bank.",
        );
      }
      return { pool };
    }
    case "revision": {
      const engaged = await engagedChapters(userId);
      const completed = [...engaged.entries()]
        .filter(([, v]) => v.completed > 0)
        .map(([slug]) => slug);
      if (completed.length === 0) {
        throw new PracticeError(
          "Revision practice uses chapters you have completed — complete a lesson first, then come back.",
        );
      }
      return { pool: await queryBank({ chapterSlugs: completed }) };
    }
    case "mixed":
    case "timed": {
      const engaged = await engagedChapters(userId);
      const chapters = config.chapterSlug ? [config.chapterSlug] : [...engaged.keys()];
      if (chapters.length === 0) {
        throw new PracticeError(
          "Mixed practice draws from chapters you have started — open a lesson first, then come back.",
        );
      }
      return { pool: await queryBank({ chapterSlugs: chapters }) };
    }
    case "weak-area": {
      const profile = await computeWeakAreas(userId);
      if (!profile.hasData) {
        throw new PracticeError(
          "Weak-area practice needs some answer history first — do a guided or mixed session, then come back.",
        );
      }
      const weakChapters = profile.weakChapters.map((c) => c.chapterSlug);
      const chapters =
        weakChapters.length > 0 ? weakChapters : await engagedChapterList(userId);
      const pool = await queryBank({ chapterSlugs: chapters });
      return { pool, wrongIds: new Set(profile.wrongQuestionIds) };
    }
    case "course-assessment": {
      const chapters = chaptersOfCourse(config.courseSlug!);
      if (chapters.length === 0) {
        throw new PracticeError("Unknown course.", 404);
      }
      const pool = await queryBank({ chapterSlugs: chapters });
      if (pool.length < 10) {
        throw new PracticeError(
          "This course does not have enough published questions for a milestone assessment yet.",
        );
      }
      return { pool };
    }
    default:
      return { pool: [] };
  }
}

async function engagedChapterList(userId: string): Promise<string[]> {
  const engaged = await engagedChapters(userId);
  return [...engaged.keys()];
}

function emptyPoolMessage(mode: PracticeMode, config: SessionConfig): string {
  switch (mode) {
    case "chapter-test":
      return `Chapter ${config.chapterSlug ?? ""} has no questions yet.`;
    case "course-assessment":
      return `Course ${config.courseSlug ?? ""} has no questions yet.`;
    default:
      return "No questions matched this practice scope — try another chapter or mixed practice.";
  }
}

function toSessionQuestion(q: BankQuestion): SessionQuestionDto {
  return {
    question: sanitizeExercises([q.exercise])[0],
    chapterSlug: q.chapterSlug,
    lessonSlug: q.lessonSlug,
    topic: q.topic,
  };
}

// ---------------------------------------------------------------------------
// Fetch / list
// ---------------------------------------------------------------------------

export interface SessionListItem {
  id: string;
  mode: PracticeMode;
  status: "active" | "completed";
  config: SessionConfig;
  scorePercent: number | null;
  passed: boolean | null;
  total: number;
  correct: number;
  completedAt: string | null;
}

export async function listSessions(userId: string, limit = 40): Promise<SessionListItem[]> {
  const sessions = await db.practiceSession.findMany({
    where: { userId },
    orderBy: { startedAt: "desc" },
    take: limit,
  });
  return sessions.map((s) => ({
    id: s.id,
    mode: s.mode as PracticeMode,
    status: s.status === "completed" ? "completed" : "active",
    config: parseSessionConfig(s.config),
    scorePercent: s.status === "completed" ? Math.round(s.score * 100) : null,
    passed: s.status === "completed" ? s.passed : null,
    total: s.total,
    correct: s.correct,
    completedAt: s.completedAt ? s.completedAt.toISOString() : null,
  }));
}

export interface FetchedSession {
  id: string;
  mode: PracticeMode;
  status: "active" | "completed";
  config: SessionConfig;
  hintsAllowed: boolean;
  timeLimitSec: number | null;
  passScore: number | null;
  startedAt: string;
  completedAt: string | null;
  questions: SessionQuestionDto[] | null;
  report: PracticeReport | null;
}

async function loadSessionPool(questionIds: string[]): Promise<BankQuestion[]> {
  if (questionIds.length === 0) return [];
  const rows = await db.cmsQuestion.findMany({
    where: { id: { in: questionIds } },
    select: {
      id: true,
      slug: true,
      type: true,
      skill: true,
      difficulty: true,
      tags: true,
      data: true,
      chapterSlug: true,
      lessonSlug: true,
    },
  });
  const parsed: BankQuestion[] = [];
  for (const row of rows) {
    try {
      const exercise = JSON.parse(row.data) as Exercise;
      if (!row.chapterSlug || !row.lessonSlug || exercise.id !== row.id) continue;
      let tags: string[] = [];
      try {
        const t = JSON.parse(row.tags) as unknown;
        if (Array.isArray(t)) tags = t.filter((x): x is string => typeof x === "string");
      } catch {
        tags = [];
      }
      parsed.push({
        id: row.id,
        slug: row.slug,
        chapterSlug: row.chapterSlug,
        lessonSlug: row.lessonSlug,
        topic: tags[0] ?? row.chapterSlug,
        tags,
        exercise,
      });
    } catch {
      continue;
    }
  }
  // Preserve the session's play order.
  const byId = new Map(parsed.map((q) => [q.id, q]));
  return questionIds.map((id) => byId.get(id)).filter((q): q is BankQuestion => q !== undefined);
}

export async function getSession(userId: string, id: string): Promise<FetchedSession> {
  const session = await db.practiceSession.findUnique({ where: { id } });
  if (!session || session.userId !== userId) {
    throw new PracticeError("Session not found.", 404);
  }
  const config = parseSessionConfig(session.config);
  const mode = session.mode as PracticeMode;
  const timeLimitSec = mode === "timed" ? (config.timeLimitSec ?? 360) : null;
  const passScore = MODE_SPECS[mode]?.passMark ? (PASS_SCORES[mode] ?? 0.75) : null;

  let questions: SessionQuestionDto[] | null = null;
  let report: PracticeReport | null = null;
  if (session.status === "active") {
    const ids = parseIds(session.questionIds);
    const pool = await loadSessionPool(ids);
    questions = pool.map(toSessionQuestion);
  } else if (session.report) {
    try {
      report = JSON.parse(session.report) as PracticeReport;
    } catch {
      report = null;
    }
  }

  return {
    id: session.id,
    mode,
    status: session.status === "completed" ? "completed" : "active",
    config,
    hintsAllowed: session.hintsAllowed && (MODE_SPECS[mode]?.hints ?? false),
    timeLimitSec,
    passScore,
    startedAt: session.startedAt.toISOString(),
    completedAt: session.completedAt ? session.completedAt.toISOString() : null,
    questions,
    report,
  };
}

function parseIds(raw: string): string[] {
  try {
    const parsed = JSON.parse(raw) as unknown;
    if (!Array.isArray(parsed)) return [];
    return parsed.filter((x): x is string => typeof x === "string");
  } catch {
    return [];
  }
}

// ---------------------------------------------------------------------------
// Submit (assessment-style batch grading)
// ---------------------------------------------------------------------------

export interface SubmitAnswer {
  exerciseId: string;
  answer: unknown;
}

export async function submitSession(
  userId: string,
  id: string,
  answers: SubmitAnswer[],
): Promise<PracticeReport> {
  const session = await db.practiceSession.findUnique({ where: { id } });
  if (!session || session.userId !== userId) throw new PracticeError("Session not found.", 404);
  if (session.status === "completed") {
    throw new PracticeError("This session was already submitted.", 409);
  }
  const mode = session.mode as PracticeMode;
  if (MODE_SPECS[mode]?.gradedStyle !== "assessment") {
    throw new PracticeError(
      "This session is practice-style: answer each question, then press Finish.",
      400,
    );
  }

  const questionIds = parseIds(session.questionIds);
  const pool = await loadSessionPool(questionIds);
  const answerMap = new Map(answers.map((a) => [a.exerciseId, a.answer]));

  const graded: GradedInput[] = [];
  for (const q of pool) {
    const has = answerMap.has(q.id);
    if (!has) {
      graded.push({
        exerciseId: q.id,
        submitted: null,
        correct: false,
        invalid: false,
        score: 0,
      });
      continue;
    }
    const submitted = answerMap.get(q.id);
    const result = validateAnswer(q.exercise, submitted);
    graded.push({
      exerciseId: q.id,
      submitted,
      correct: result.correct,
      invalid: result.invalid,
      score: result.score,
    });
  }

  const passScore = MODE_SPECS[mode]?.passMark ? (PASS_SCORES[mode] ?? 0.75) : null;
  const total = graded.length;
  const correct = graded.filter((g) => g.correct).length;
  const score = total === 0 ? 0 : correct / total;
  const passed = passScore !== null ? score >= passScore : null;

  // Persist one attempt per question with the session linkage.
  for (const item of graded) {
    const q = pool.find((p) => p.id === item.exerciseId)!;
    await db.exerciseAttempt.create({
      data: {
        userId,
        exerciseId: q.id,
        lessonSlug: q.lessonSlug,
        type: q.exercise.type,
        difficulty: q.exercise.difficulty,
        skill: q.exercise.skill,
        context: mode,
        source: "cms",
        sessionId: session.id,
        isCorrect: item.correct,
        score: item.score,
        hintsUsed: 0,
        durationMs: 0,
        answer: JSON.stringify(item.submitted ?? null).slice(0, 2000),
      },
    });
  }

  const previousAttempts = await previousAttemptsOf(userId, mode, parseSessionConfig(session.config), session.id);
  const lessonTitles = programmeLessonTitles();
  const report = buildReport({
    mode,
    config: parseSessionConfig(session.config),
    pool,
    graded,
    passed,
    passScore,
    hintsUsed: 0,
    previousAttempts,
    lessonTitles,
  });

  await db.practiceSession.update({
    where: { id: session.id },
    data: {
      status: "completed",
      score,
      total,
      correct,
      passed: passed ?? false,
      report: JSON.stringify(report),
      completedAt: new Date(),
    },
  });

  return report;
}

// ---------------------------------------------------------------------------
// Finish (practice-style: build the report from recorded attempts)
// ---------------------------------------------------------------------------

export async function finishSession(userId: string, id: string): Promise<PracticeReport> {
  const session = await db.practiceSession.findUnique({ where: { id } });
  if (!session || session.userId !== userId) throw new PracticeError("Session not found.", 404);
  if (session.status === "completed") {
    throw new PracticeError("This session was already finished.", 409);
  }
  const mode = session.mode as PracticeMode;
  if (MODE_SPECS[mode]?.gradedStyle !== "practice") {
    throw new PracticeError(
      "This session is assessment-style: answer everything, then press Submit.",
      400,
    );
  }

  const questionIds = parseIds(session.questionIds);
  const pool = await loadSessionPool(questionIds);

  const attempts = await db.exerciseAttempt.findMany({
    where: { userId, sessionId: session.id },
    orderBy: { createdAt: "asc" },
  });
  if (attempts.length === 0) {
    throw new PracticeError("Answer at least one question before finishing.", 400);
  }

  // Latest attempt per question wins.
  const latest = new Map<string, (typeof attempts)[number]>();
  for (const attempt of attempts) {
    latest.set(attempt.exerciseId, attempt);
  }
  const graded: GradedInput[] = pool.map((q) => {
    const attempt = latest.get(q.id);
    if (!attempt) {
      return { exerciseId: q.id, submitted: null, correct: false, invalid: false, score: 0, unanswered: true };
    }
    let submitted: unknown = null;
    try {
      submitted = JSON.parse(attempt.answer);
    } catch {
      submitted = attempt.answer;
    }
    return {
      exerciseId: q.id,
      submitted,
      correct: attempt.isCorrect,
      invalid: false,
      score: attempt.score,
    };
  });

  const total = graded.length;
  const correct = graded.filter((g) => g.correct).length;
  const score = total === 0 ? 0 : correct / total;
  const hintsUsed = attempts.reduce((sum, a) => sum + a.hintsUsed, 0);

  const previousAttempts = await previousAttemptsOf(userId, mode, parseSessionConfig(session.config), session.id);
  const lessonTitles = programmeLessonTitles();
  const report = buildReport({
    mode,
    config: parseSessionConfig(session.config),
    pool,
    graded,
    passed: null,
    passScore: null,
    hintsUsed,
    previousAttempts,
    lessonTitles,
  });

  await db.practiceSession.update({
    where: { id: session.id },
    data: {
      status: "completed",
      score,
      total,
      correct,
      passed: false,
      report: JSON.stringify(report),
      completedAt: new Date(),
    },
  });

  return report;
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

async function previousAttemptsOf(
  userId: string,
  mode: PracticeMode,
  config: SessionConfig,
  excludeId: string,
): Promise<PreviousAttemptRow[]> {
  const scopeKey = configScopeKey(mode, config);
  const sessions = await db.practiceSession.findMany({
    where: { userId, mode, status: "completed" },
    orderBy: { completedAt: "desc" },
    take: 30,
  });
  return sessions
    .filter((s) => s.id !== excludeId)
    .filter((s) => configScopeKey(mode, parseSessionConfig(s.config)) === scopeKey)
    .slice(0, 5)
    .map((s) => ({
      id: s.id,
      scorePercent: Math.round(s.score * 100),
      passed: MODE_SPECS[mode]?.passMark ? s.passed : null,
      completedAt: s.completedAt ? s.completedAt.toISOString() : "",
    }));
}

/** Abort an active session without grading (learner changed their mind). */
export async function abandonSession(userId: string, id: string): Promise<void> {
  const session = await db.practiceSession.findUnique({ where: { id } });
  if (!session || session.userId !== userId) throw new PracticeError("Session not found.", 404);
  if (session.status === "completed") {
    throw new PracticeError("This session is already finished.", 409);
  }
  await db.practiceSession.delete({ where: { id } });
}
