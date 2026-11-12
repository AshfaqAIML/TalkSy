/**
 * Tutor service — conversation storage, limits and the send pipeline.
 *
 * The send pipeline is split in three so the SSE route can stream:
 *   prepareTutorSend  — validate + rate-limit + persist the learner message
 *                       + build the system prompt and history window.
 *   (provider.stream) — run by the route, deltas forwarded to the client.
 *   finalizeTutorSend — persist the tutor reply + bump daily usage.
 *   abortTutorSend    — provider failed: remove the learner message again so
 *                       the learner can retry cleanly (their draft is
 *                       restored client-side).
 *
 * Limits (per learner): message length, a minimum interval between requests,
 * and a daily request cap — all enforced BEFORE any provider call.
 *
 * INTEGRITY: tutor chats never write UserStats, points or achievements.
 * Chatting is practice, not verified learning — the progression system only
 * counts graded activity.
 */

import { db } from "@/lib/db";
import { getLlmProvider } from "@/lib/llm";
import type { LlmChatMessage, LlmProvider } from "@/lib/llm";
import { getTutorMode, tutorModes } from "@/data/tutor";
import type {
  TutorConversationDto,
  TutorMessageDto,
  TutorModeId,
  TutorUsageDto,
} from "@/data/tutor/types";
import { buildTutorSystemPrompt } from "./prompts";
import { buildLearnerContext, isPlausibleLessonRef, resolveLessonRef } from "./context";

// ---------------------------------------------------------------------------
// Limits
// ---------------------------------------------------------------------------

export const TUTOR_LIMITS = {
  /** Hard cap on a single learner message. */
  maxMessageChars: 2000,
  /** Tutor requests per learner per day. */
  dailyRequests: 60,
  /** Minimum gap between two tutor requests. */
  minIntervalMs: 1500,
  /** History window: maximum messages sent to the model. */
  historyMessages: 30,
  /** History window: approximate character budget. */
  historyCharBudget: 14_000,
  /** Hard cap on a stored tutor reply. */
  maxReplyChars: 4000,
  /** Provider timeout for the tutor. */
  llmTimeoutMs: 60_000,
  /** Conversations shown in the history list. */
  conversationsListed: 100,
  /** Messages loaded when opening a conversation. */
  messagesLoaded: 200,
} as const;

// ---------------------------------------------------------------------------
// Errors
// ---------------------------------------------------------------------------

export type TutorErrorCode =
  | "bad-request"
  | "not-found"
  | "rate-limited"
  | "daily-limit";

export class TutorError extends Error {
  readonly code: TutorErrorCode;
  readonly status: number;

  constructor(code: TutorErrorCode, message: string) {
    super(message);
    this.name = "TutorError";
    this.code = code;
    this.status =
      code === "not-found" ? 404 : code === "bad-request" ? 400 : 429;
  }
}

// ---------------------------------------------------------------------------
// DTO mapping
// ---------------------------------------------------------------------------

type ConversationRow = {
  id: string;
  mode: string;
  lessonRef: string | null;
  includeContext: boolean;
  title: string;
  createdAt: Date;
  updatedAt: Date;
  messages?: unknown[];
  _count?: { messages: number };
};

function toConversationDto(row: ConversationRow): TutorConversationDto {
  const mode = getTutorMode(row.mode);
  const messageCount =
    row._count?.messages ?? (Array.isArray(row.messages) ? row.messages.length : 0);
  return {
    id: row.id,
    mode: (mode?.id ?? "grammar") as TutorModeId,
    modeLabel: mode?.label ?? "Tutor",
    lessonRef: row.lessonRef,
    lessonTitle: null, // filled by the caller when the full row is loaded
    includeContext: row.includeContext,
    title: row.title,
    createdAt: row.createdAt.toISOString(),
    updatedAt: row.updatedAt.toISOString(),
    messageCount,
  };
}

type MessageRow = {
  id: string;
  role: string;
  content: string;
  meta: string;
  createdAt: Date;
};

function toMessageDto(row: MessageRow): TutorMessageDto {
  let greeting = false;
  try {
    const meta = JSON.parse(row.meta) as { greeting?: unknown };
    greeting = meta.greeting === true;
  } catch {
    greeting = false;
  }
  return {
    id: row.id,
    role: row.role === "learner" ? "learner" : "tutor",
    content: row.content,
    greeting,
    createdAt: row.createdAt.toISOString(),
  };
}

// ---------------------------------------------------------------------------
// Usage
// ---------------------------------------------------------------------------

function todayKey(): string {
  return new Date().toISOString().slice(0, 10);
}

export async function getTutorUsage(userId: string): Promise<TutorUsageDto> {
  const row = await db.tutorUsage.findUnique({ where: { userId } });
  const requests = row && row.day === todayKey() ? row.requests : 0;
  return { day: todayKey(), requests, limit: TUTOR_LIMITS.dailyRequests };
}

async function bumpUsage(
  userId: string,
  inputChars: number,
  outputChars: number,
): Promise<TutorUsageDto> {
  const day = todayKey();
  const row = await db.tutorUsage.findUnique({ where: { userId } });
  if (!row || row.day !== day) {
    await db.tutorUsage.upsert({
      where: { userId },
      create: { userId, day, requests: 1, inputChars, outputChars },
      update: { day, requests: 1, inputChars, outputChars },
    });
  } else {
    await db.tutorUsage.update({
      where: { userId },
      data: {
        requests: row.requests + 1,
        inputChars: row.inputChars + inputChars,
        outputChars: row.outputChars + outputChars,
      },
    });
  }
  return getTutorUsage(userId);
}

// ---------------------------------------------------------------------------
// Conversations
// ---------------------------------------------------------------------------

function deriveTitle(content: string): string {
  const clean = content.replace(/\s+/g, " ").trim();
  return clean.length <= 48 ? clean : `${clean.slice(0, 47)}…`;
}

export async function createTutorConversation(
  userId: string,
  input: { mode: string; lessonRef?: string | null; includeContext?: boolean },
): Promise<{ conversation: TutorConversationDto; messages: TutorMessageDto[] }> {
  const mode = getTutorMode(input.mode);
  if (!mode) {
    throw new TutorError(
      "bad-request",
      `Unknown tutor mode. Choose one of: ${tutorModes.map((m) => m.id).join(", ")}.`,
    );
  }
  const lessonRef =
    typeof input.lessonRef === "string" && input.lessonRef.trim().length > 0
      ? input.lessonRef.trim()
      : null;
  if (lessonRef && !isPlausibleLessonRef(lessonRef)) {
    throw new TutorError("bad-request", "This lesson reference is not valid.");
  }

  const row = await db.tutorConversation.create({
    data: {
      userId,
      mode: mode.id,
      lessonRef,
      includeContext: input.includeContext ?? true,
      title: mode.label,
      messages: {
        create: {
          userId,
          role: "tutor",
          content: mode.greeting,
          meta: JSON.stringify({ greeting: true, mode: mode.id }),
        },
      },
    },
    include: { messages: { orderBy: { createdAt: "asc" }, take: TUTOR_LIMITS.messagesLoaded } },
  });

  return {
    conversation: { ...toConversationDto(row), lessonTitle: lessonTitleOf(row.lessonRef) },
    messages: row.messages.map(toMessageDto),
  };
}

function lessonTitleOf(lessonRef: string | null): string | null {
  if (!lessonRef) return null;
  return resolveLessonRef(lessonRef)?.title ?? null;
}

export async function listTutorConversations(
  userId: string,
): Promise<TutorConversationDto[]> {
  const rows = await db.tutorConversation.findMany({
    where: { userId },
    orderBy: { updatedAt: "desc" },
    take: TUTOR_LIMITS.conversationsListed,
    include: { _count: { select: { messages: true } } },
  });
  return rows.map(toConversationDto);
}

export async function getTutorConversation(
  userId: string,
  conversationId: string,
): Promise<{ conversation: TutorConversationDto; messages: TutorMessageDto[] }> {
  const row = await db.tutorConversation.findFirst({
    where: { id: conversationId, userId },
    include: {
      messages: {
        orderBy: { createdAt: "desc" },
        take: TUTOR_LIMITS.messagesLoaded,
      },
    },
  });
  if (!row) throw new TutorError("not-found", "Conversation not found.");

  const messages = [...row.messages].reverse().map(toMessageDto);
  return {
    conversation: {
      ...toConversationDto(row),
      lessonTitle: lessonTitleOf(row.lessonRef),
    },
    messages,
  };
}

export async function deleteTutorConversation(userId: string, conversationId: string): Promise<void> {
  const result = await db.tutorConversation.deleteMany({
    where: { id: conversationId, userId },
  });
  if (result.count === 0) throw new TutorError("not-found", "Conversation not found.");
}

export async function deleteAllTutorConversations(userId: string): Promise<number> {
  const result = await db.tutorConversation.deleteMany({ where: { userId } });
  return result.count;
}

export async function setConversationContextFlag(
  userId: string,
  conversationId: string,
  includeContext: boolean,
): Promise<TutorConversationDto> {
  const result = await db.tutorConversation.updateMany({
    where: { id: conversationId, userId },
    data: { includeContext },
  });
  if (result.count === 0) throw new TutorError("not-found", "Conversation not found.");
  const row = await db.tutorConversation.findFirst({
    where: { id: conversationId, userId },
    include: { _count: { select: { messages: true } } },
  });
  if (!row) throw new TutorError("not-found", "Conversation not found.");
  return { ...toConversationDto(row), lessonTitle: lessonTitleOf(row.lessonRef) };
}

// ---------------------------------------------------------------------------
// Send pipeline
// ---------------------------------------------------------------------------

export interface PreparedSend {
  conversationId: string;
  modeId: TutorModeId;
  system: string;
  messages: LlmChatMessage[];
  learnerMessageId: string;
}

async function loadConversation(userId: string, conversationId: string) {
  const row = await db.tutorConversation.findFirst({
    where: { id: conversationId, userId },
    include: { messages: { orderBy: { createdAt: "asc" } } },
  });
  if (!row) throw new TutorError("not-found", "Conversation not found.");
  return row;
}

export async function prepareTutorSend(
  userId: string,
  conversationId: string,
  content: string,
): Promise<PreparedSend> {
  const text = content.trim();
  if (text.length === 0) {
    throw new TutorError("bad-request", "Write a message for the tutor first.");
  }
  if (text.length > TUTOR_LIMITS.maxMessageChars) {
    throw new TutorError(
      "bad-request",
      `Messages are limited to ${TUTOR_LIMITS.maxMessageChars} characters.`,
    );
  }

  const conversation = await loadConversation(userId, conversationId);
  const mode = getTutorMode(conversation.mode);
  if (!mode) throw new TutorError("bad-request", "This conversation has an unknown mode.");

  // Rate limit: minimum interval since the learner's last real exchange.
  // The canned greeting is NOT an LLM request, so it never anchors the
  // limiter (findFirst where meta excludes {"greeting":true} rows).
  const lastMessage = await db.tutorMessage.findFirst({
    where: { userId, NOT: { meta: { contains: '"greeting":true' } } },
    orderBy: { createdAt: "desc" },
  });
  if (
    lastMessage &&
    Date.now() - lastMessage.createdAt.getTime() < TUTOR_LIMITS.minIntervalMs
  ) {
    throw new TutorError("rate-limited", "The tutor needs a moment — please wait a second.");
  }

  // Daily cap.
  const usage = await getTutorUsage(userId);
  if (usage.requests >= TUTOR_LIMITS.dailyRequests) {
    throw new TutorError(
      "daily-limit",
      `You have used all ${TUTOR_LIMITS.dailyRequests} tutor messages for today. They refresh tomorrow.`,
    );
  }

  const learnerMessage = await db.tutorMessage.create({
    data: { userId, conversationId, role: "learner", content: text },
  });

  // Context (only when the learner allowed it for this conversation).
  const context = conversation.includeContext
    ? await buildLearnerContext(userId, { lessonRef: conversation.lessonRef })
    : {
        level: "beginner" as const,
        levelReason: "level not shared (context sharing is off)",
        name: null,
        lines: null,
        lessonTitle: null,
        lessonLines: null,
      };

  const system = buildTutorSystemPrompt({
    mode,
    level: context.level,
    levelReason: context.levelReason,
    learnerName: context.name,
    contextLines: context.lines,
    lessonLines: context.lessonLines,
  });

  // History window: newest messages within both caps.
  const history: LlmChatMessage[] = conversation.messages
    .slice(-TUTOR_LIMITS.historyMessages)
    .map((row) => ({
      role: row.role === "learner" ? ("user" as const) : ("assistant" as const),
      content: row.content,
    }));
  history.push({ role: "user", content: text });

  let budget = TUTOR_LIMITS.historyCharBudget;
  const windowed: LlmChatMessage[] = [];
  for (let i = history.length - 1; i >= 0; i -= 1) {
    const message = history[i];
    if (message.content.length > budget && windowed.length > 0) break;
    budget -= message.content.length;
    windowed.unshift(message);
    if (budget <= 0) break;
  }

  return {
    conversationId: conversation.id,
    modeId: mode.id,
    system,
    messages: windowed,
    learnerMessageId: learnerMessage.id,
  };
}

export async function finalizeTutorSend(
  userId: string,
  conversationId: string,
  learnerMessageId: string,
  replyText: string,
): Promise<{ tutorMessageId: string; usage: TutorUsageDto }> {
  const reply = replyText.trim().slice(0, TUTOR_LIMITS.maxReplyChars);

  const learnerMessage = await db.tutorMessage.findFirst({
    where: { id: learnerMessageId, userId },
  });
  const conversation = await db.tutorConversation.findFirst({
    where: { id: conversationId, userId },
  });
  if (!conversation) throw new TutorError("not-found", "Conversation not found.");

  const tutorMessage = await db.tutorMessage.create({
    data: {
      userId,
      conversationId,
      role: "tutor",
      content: reply,
      meta: JSON.stringify({ mode: conversation.mode }),
    },
  });

  // Title the conversation from the first learner message (the initial title
  // is the mode label, so an untitled thread is recognisable).
  const modeDefaultTitle = getTutorMode(conversation.mode)?.label ?? "";
  const isUntitled = conversation.title === "" || conversation.title === modeDefaultTitle;
  const nextTitle =
    isUntitled && learnerMessage ? deriveTitle(learnerMessage.content) : undefined;

  await db.tutorConversation.update({
    where: { id: conversationId },
    data: {
      updatedAt: new Date(),
      ...(nextTitle ? { title: nextTitle } : {}),
    },
  });

  const usage = await bumpUsage(
    userId,
    learnerMessage?.content.length ?? 0,
    reply.length,
  );

  return { tutorMessageId: tutorMessage.id, usage };
}

export async function abortTutorSend(userId: string, learnerMessageId: string): Promise<void> {
  await db.tutorMessage.deleteMany({ where: { id: learnerMessageId, userId } });
}

/** Non-streaming send (service-level tests + any future batch use). */
export async function sendTutorMessage(
  userId: string,
  conversationId: string,
  content: string,
  provider: LlmProvider = getLlmProvider(),
): Promise<{ learnerMessage: TutorMessageDto; tutorMessage: TutorMessageDto; usage: TutorUsageDto }> {
  const prepared = await prepareTutorSend(userId, conversationId, content);
  try {
    const reply = await provider.complete({
      system: prepared.system,
      messages: prepared.messages,
      timeoutMs: TUTOR_LIMITS.llmTimeoutMs,
    });
    const finalized = await finalizeTutorSend(
      userId,
      conversationId,
      prepared.learnerMessageId,
      reply,
    );
    const conversation = await getTutorConversation(userId, conversationId);
    const learnerMessage = conversation.messages.find(
      (m) => m.id === prepared.learnerMessageId,
    );
    const tutorMessage = conversation.messages.find(
      (m) => m.id === finalized.tutorMessageId,
    );
    if (!learnerMessage || !tutorMessage) {
      throw new TutorError("not-found", "Conversation not found.");
    }
    return { learnerMessage, tutorMessage, usage: finalized.usage };
  } catch (error) {
    await abortTutorSend(userId, prepared.learnerMessageId).catch(() => undefined);
    throw error;
  }
}

/** Privacy preview: the exact context text the model would receive. */
export async function buildContextPreview(
  userId: string,
  mode: TutorModeId,
  lessonRef?: string | null,
): Promise<{ level: string; text: string }> {
  const context = await buildLearnerContext(userId, { lessonRef });
  const lines = [...context.lines, ...context.lessonLines];
  return {
    level: context.level,
    text: lines.map((line) => `- ${line}`).join("\n"),
  };
}
