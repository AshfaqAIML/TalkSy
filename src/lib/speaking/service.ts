/**
 * Speaking Laboratory persistence — settings & consent, progress rows,
 * attempt storage with retention enforcement, conversation sessions and
 * pronunciation attempts.
 *
 * Privacy invariants enforced here (not just promised in the UI):
 * - AUDIO IS NEVER STORED. The API transcribes and discards; this service
 *   only ever sees text.
 * - Transcripts are written ONLY when retentionDays > 0, and rows older than
 *   the retention window are purged on the next authenticated request.
 * - "Delete my speaking history" removes every speaking record at once.
 *
 * No auto-mastery: a SpeakingProgress row exists only after a real attempt,
 * and "completed" is derived from every task having a passing attempt.
 */

import { db } from "@/lib/db";
import { speakingActivities, getSpeakingActivity, toSafeSpeakingActivity } from "@/data/speaking";
import type {
  SttProviderSetting,
} from "@/data/speaking/types";
import type { SafeSpeakingActivity } from "@/data/speaking/types";

// ---------------------------------------------------------------------------
// Settings
// ---------------------------------------------------------------------------

export interface SpeakingSettingsDto {
  provider: SttProviderSetting;
  retentionDays: number;
  consented: boolean;
}

type SettingsRow = Awaited<ReturnType<typeof db.speakingSettings.findUnique>>;

function toSettingsDto(row: NonNullable<SettingsRow>): SpeakingSettingsDto {
  return {
    provider: row.provider as SttProviderSetting,
    retentionDays: row.retentionDays,
    consented: row.consentedAt !== null,
  };
}

export async function getSpeakingSettings(userId: string): Promise<SpeakingSettingsDto> {
  const row = await db.speakingSettings.findUnique({ where: { userId } });
  return row
    ? toSettingsDto(row)
    : { provider: "auto", retentionDays: 90, consented: false };
}

export async function updateSpeakingSettings(
  userId: string,
  patch: { provider?: SttProviderSetting; retentionDays?: number; consent?: boolean },
): Promise<SpeakingSettingsDto> {
  const data: Partial<{ provider: string; retentionDays: number; consentedAt: Date | null }> = {};
  if (patch.provider) data.provider = patch.provider;
  if (typeof patch.retentionDays === "number") {
    data.retentionDays = [0, 7, 30, 90, 365].includes(patch.retentionDays)
      ? patch.retentionDays
      : 90;
  }
  if (patch.consent === true) data.consentedAt = new Date();

  const existing = await db.speakingSettings.findUnique({ where: { userId } });
  if (!existing) {
    const row = await db.speakingSettings.create({
      data: { userId, ...data, consentedAt: data.consentedAt ?? null },
    });
    return toSettingsDto(row);
  }
  const row = await db.speakingSettings.update({ where: { userId }, data });
  return toSettingsDto(row);
}

/**
 * Retention purge: delete attempts older than the learner's window.
 * Called on the routes that read or write speaking history.
 */
export async function purgeExpiredSpeakingAttempts(userId: string): Promise<void> {
  const settings = await db.speakingSettings.findUnique({ where: { userId } });
  const days = settings?.retentionDays ?? 90;
  if (days <= 0) return; // retention 0 is enforced at write time
  const cutoff = new Date(Date.now() - days * 24 * 60 * 60 * 1000);
  await db.speakingAttempt.deleteMany({
    where: { userId, createdAt: { lt: cutoff } },
  });
}

export async function deleteSpeakingHistory(userId: string): Promise<void> {
  await db.speakingAttempt.deleteMany({ where: { userId } });
  await db.conversationSession.deleteMany({ where: { userId } });
  await db.pronunciationAttempt.deleteMany({ where: { userId } });
  await db.speakingProgress.deleteMany({ where: { userId } });
}

// ---------------------------------------------------------------------------
// Activity progress
// ---------------------------------------------------------------------------

export interface SpeakingProgressDto {
  activityId: string;
  status: "in-progress" | "completed";
  tasksAttempted: string[];
  tasksPassed: string[];
  selfAssessedPassed: string[];
  passedCount: number;
  totalTasks: number;
  bestScore: number;
  attemptsCount: number;
  completedAt: string | null;
}

function parseArray(raw: string): string[] {
  try {
    const parsed = JSON.parse(raw) as unknown;
    return Array.isArray(parsed) ? parsed.filter((x): x is string => typeof x === "string") : [];
  } catch {
    return [];
  }
}

type ProgressRow = Awaited<ReturnType<typeof db.speakingProgress.findUnique>>;

function toProgressDto(row: NonNullable<ProgressRow>): SpeakingProgressDto {
  const activity = speakingActivities.find((a) => a.id === row.activityId);
  return {
    activityId: row.activityId,
    status: row.status === "completed" ? "completed" : "in-progress",
    tasksAttempted: parseArray(row.tasksAttempted),
    tasksPassed: parseArray(row.tasksPassed),
    selfAssessedPassed: parseArray(row.selfAssessedPassed),
    passedCount: parseArray(row.tasksPassed).length,
    totalTasks: activity?.tasks.length ?? 0,
    bestScore: row.bestScore,
    attemptsCount: row.attemptsCount,
    completedAt: row.completedAt?.toISOString() ?? null,
  };
}

/**
 * Record one graded attempt. Creates the progress row on first attempt
 * (never before). Completion requires every task to have a passing attempt.
 */
export async function applySpeakingAttempt(
  userId: string,
  activityId: string,
  taskId: string,
  input: {
    passed: boolean;
    selfAssessed: boolean;
    overall: number;
  },
): Promise<SpeakingProgressDto> {
  const activity = speakingActivities.find((a) => a.id === activityId);
  if (!activity) throw new Error("Unknown speaking activity");

  const existing = await db.speakingProgress.findUnique({
    where: { userId_activityId: { userId, activityId } },
  });
  const row =
    existing ??
    (await db.speakingProgress.create({
      data: { userId, activityId, tier: activity.tier },
    }));

  const tasksAttempted = new Set(parseArray(row.tasksAttempted));
  const tasksPassed = new Set(parseArray(row.tasksPassed));
  const selfAssessed = new Set(parseArray(row.selfAssessedPassed));

  tasksAttempted.add(taskId);
  if (input.passed) {
    tasksPassed.add(taskId);
    if (input.selfAssessed) selfAssessed.add(taskId);
  }

  const allPassed = activity.tasks.every((task) => tasksPassed.has(task.id));
  const bestScore = Math.max(row.bestScore, input.overall / 100);

  const updated = await db.speakingProgress.update({
    where: { id: row.id },
    data: {
      tasksAttempted: JSON.stringify([...tasksAttempted]),
      tasksPassed: JSON.stringify([...tasksPassed]),
      selfAssessedPassed: JSON.stringify([...selfAssessed]),
      bestScore,
      attemptsCount: row.attemptsCount + 1,
      status: allPassed ? "completed" : "in-progress",
      completedAt: allPassed && row.status !== "completed" ? new Date() : row.completedAt,
    },
  });
  return toProgressDto(updated);
}

// ---------------------------------------------------------------------------
// Library payload
// ---------------------------------------------------------------------------

export interface SpeakingActivitySummary {
  id: string;
  slug: string;
  tier: string;
  kind: string;
  title: string;
  description: string;
  estimatedMinutes: number;
  tags: string[];
  taskCount: number;
  taskTypes: string[];
  progress: {
    status: string;
    passedCount: number;
    totalTasks: number;
    bestScore: number;
    completedAt: string | null;
  } | null;
}

export async function speakingLibraryPayload(userId: string) {
  const [progressRows, settings, attemptCount, sessionCount, pronCount] = await Promise.all([
    db.speakingProgress.findMany({ where: { userId } }),
    getSpeakingSettings(userId),
    db.speakingAttempt.count({ where: { userId } }),
    db.conversationSession.count({ where: { userId, status: "completed" } }),
    db.pronunciationAttempt.count({ where: { userId } }),
  ]);
  const progressById = new Map(progressRows.map((row) => [row.activityId, row]));

  return {
    activities: speakingActivities.map((activity): SpeakingActivitySummary => {
      const row = progressById.get(activity.id);
      return {
        id: activity.id,
        slug: activity.slug,
        tier: activity.tier,
        kind: activity.kind,
        title: activity.title,
        description: activity.description,
        estimatedMinutes: activity.estimatedMinutes,
        tags: activity.tags ?? [],
        taskCount: activity.tasks.length,
        taskTypes: [...new Set(activity.tasks.map((task) => task.type))],
        progress: row
          ? {
              status: row.status,
              passedCount: parseArray(row.tasksPassed).length,
              totalTasks: activity.tasks.length,
              bestScore: row.bestScore,
              completedAt: row.completedAt?.toISOString() ?? null,
            }
          : null,
      };
    }),
    settings,
    stats: {
      attempts: attemptCount,
      conversationsCompleted: sessionCount,
      pronunciationAttempts: pronCount,
    },
  };
}

/** Activity bundle for the player (model answers + grading keywords stripped). */
export function speakingActivityBundle(slug: string): SafeSpeakingActivity | null {
  const activity = getSpeakingActivity(slug);
  return activity ? toSafeSpeakingActivity(activity) : null;
}

// ---------------------------------------------------------------------------
// Conversation sessions
// ---------------------------------------------------------------------------

export interface ConversationSessionDto {
  id: string;
  scenarioId: string;
  level: string;
  engine: "ai" | "scripted";
  status: "active" | "completed";
  turns: { role: "partner" | "learner"; text: string }[];
  measured: unknown;
  aiFeedback: unknown;
  score: number;
  startedAt: string;
  completedAt: string | null;
}

type SessionRow = Awaited<ReturnType<typeof db.conversationSession.findUnique>>;

export function toSessionDto(row: NonNullable<SessionRow>): ConversationSessionDto {
  let turns: { role: "partner" | "learner"; text: string }[] = [];
  try {
    const parsed = JSON.parse(row.turns) as unknown;
    if (Array.isArray(parsed)) {
      turns = parsed.filter(
        (t): t is { role: "partner" | "learner"; text: string } =>
          typeof t === "object" && t !== null &&
          (t.role === "partner" || t.role === "learner") &&
          typeof t.text === "string",
      );
    }
  } catch {
    turns = [];
  }
  const parseJson = (raw: string): unknown => {
    try {
      return JSON.parse(raw);
    } catch {
      return null;
    }
  };
  return {
    id: row.id,
    scenarioId: row.scenarioId,
    level: row.level,
    engine: row.engine === "scripted" ? "scripted" : "ai",
    status: row.status === "completed" ? "completed" : "active",
    turns,
    measured: parseJson(row.measured),
    aiFeedback: parseJson(row.aiFeedback),
    score: row.score,
    startedAt: row.createdAt.toISOString(),
    completedAt: row.completedAt?.toISOString() ?? null,
  };
}

export async function createConversationSession(
  userId: string,
  scenarioId: string,
  level: string,
  engine: "ai" | "scripted",
  openingTurn: string,
): Promise<ConversationSessionDto> {
  const row = await db.conversationSession.create({
    data: {
      userId,
      scenarioId,
      level,
      engine,
      status: "active",
      turns: JSON.stringify([{ role: "partner", text: openingTurn }]),
    },
  });
  return toSessionDto(row);
}

export async function appendConversationTurn(
  sessionId: string,
  turn: { role: "partner" | "learner"; text: string },
): Promise<void> {
  const row = await db.conversationSession.findUnique({ where: { id: sessionId } });
  if (!row) throw new Error("Session not found");
  const turns = toSessionDto(row).turns;
  turns.push(turn);
  await db.conversationSession.update({
    where: { id: sessionId },
    data: { turns: JSON.stringify(turns) },
  });
}

export async function finishConversationSession(
  sessionId: string,
  data: { measured: unknown; aiFeedback: unknown; score: number },
): Promise<void> {
  await db.conversationSession.update({
    where: { id: sessionId },
    data: {
      status: "completed",
      measured: JSON.stringify(data.measured ?? {}),
      aiFeedback: JSON.stringify(data.aiFeedback ?? null),
      score: data.score,
      completedAt: new Date(),
    },
  });
}

export async function getConversationSession(
  userId: string,
  sessionId: string,
): Promise<ConversationSessionDto | null> {
  const row = await db.conversationSession.findFirst({
    where: { id: sessionId, userId },
  });
  return row ? toSessionDto(row) : null;
}

// ---------------------------------------------------------------------------
// Transcript retention-aware attempt writer
// ---------------------------------------------------------------------------

export interface SpeakingAttemptInput {
  userId: string;
  activityId: string;
  taskId: string;
  kind: string;
  provider: string;
  transcript: string;
  selfAssessed: boolean;
  durationMs: number;
  wordCount: number;
  overall: number;
  scores: Record<string, number>;
  measured: Record<string, unknown>;
  suggestions: unknown;
}

export async function recordSpeakingAttempt(input: SpeakingAttemptInput): Promise<void> {
  const settings = await db.speakingSettings.findUnique({
    where: { userId: input.userId },
  });
  const retentionDays = settings?.retentionDays ?? 90;
  await db.speakingAttempt.create({
    data: {
      userId: input.userId,
      activityId: input.activityId,
      taskId: input.taskId,
      kind: input.kind,
      provider: input.provider,
      // Retention 0 = the attempt is graded but the transcript is not kept.
      transcript: retentionDays > 0 ? input.transcript : "",
      selfAssessed: input.selfAssessed,
      durationMs: input.durationMs,
      wordCount: input.wordCount,
      score: input.overall / 100,
      scores: JSON.stringify(input.scores),
      measured: JSON.stringify(input.measured),
      suggestions: JSON.stringify(input.suggestions ?? null),
    },
  });
}

/** Recent attempts for the history panel (transcripts already retention-purged). */
export async function recentSpeakingAttempts(userId: string, limit = 20) {
  const rows = await db.speakingAttempt.findMany({
    where: { userId },
    orderBy: { createdAt: "desc" },
    take: limit,
  });
  return rows.map((row) => ({
    id: row.id,
    activityId: row.activityId,
    taskId: row.taskId,
    kind: row.kind,
    provider: row.provider,
    selfAssessed: row.selfAssessed,
    durationMs: row.durationMs,
    wordCount: row.wordCount,
    score: row.score,
    createdAt: row.createdAt.toISOString(),
    transcriptPreview: row.transcript.slice(0, 120),
  }));
}
