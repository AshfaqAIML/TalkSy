"use client";

import type {
  ExerciseFeedback,
  Lesson,
  SafeExercise,
  SentenceStructure,
} from "@/data/curriculum/types";
import type { ProgressOverviewDto } from "@/data/progress";
import type {
  AnnotatedWord,
  ChallengeRunDto,
  ChallengeStartDto,
  ChallengeSubmitDto,
  FlashcardSessionDto,
  ReviewOutcomeDto,
  SentenceDto,
  SentenceSubmitDto,
  VocabOverviewDto,
  VocabSettingsDto,
  WordDetailDto,
  WordListDto,
} from "@/lib/vocab/dto";
import type { SrsConfigOverrides } from "@/lib/vocab/srs";
import type { ChallengeKind } from "@/data/vocabulary/types";

import type {
  SafeReadingQuestion,
  ReadingFeedback,
  ReadingParagraph,
  GlossaryEntry,
  ComprehensionSkill,
} from "@/data/reading/types";
import type {
  SafeListeningExercise,
  ListeningFeedback,
} from "@/data/listening/types";
import type {
  SafeSpeakingActivity,
  MeasuredFeedback,
  AiCoachSuggestions,
  ConversationCoachFeedback,
  ConversationMeasured,
  PronunciationItem,
  SttProviderSetting,
} from "@/data/speaking/types";
import type {
  SafeWritingAssignment,
  WritingDimension,
  WritingIssue,
  WritingMeasured,
  WritingAiFeedback,
  WritingComparison,
} from "@/data/writing/types";
import type {
  SafeTutorMode,
  TutorConversationDto,
  TutorMessageDto,
  TutorModeId,
  TutorUsageDto,
} from "@/data/tutor/types";

/** Typed client for the TalkSy API. All calls are same-origin, relative. */

export interface SessionUser {
  id: string;
  email: string;
  name: string | null;
  /** RBAC role: student | editor | teacher | admin. */
  role: string;
}

export interface LessonProgressDto {
  lessonSlug: string;
  status: "in-progress" | "completed";
  sectionsCompleted: string[];
  lastSectionId: string | null;
  bookmarked: boolean;
  completedAt: string | null;
}

export interface CompletionDto {
  completed: boolean;
  sectionsDone: number;
  sectionsTotal: number;
}

export interface NoteDto {
  sectionId: string;
  content: string;
  updatedAt: string;
}

export interface BestAssessmentDto {
  id: string;
  score: number;
  passed: boolean;
  correct: number;
  total: number;
  completedAt: string | null;
}

export interface LessonBundle {
  lesson: Lesson;
  exercises: SafeExercise[];
  exercisePoints: number;
  progress: LessonProgressDto | null;
  notes: NoteDto[];
  bestAssessment: BestAssessmentDto | null;
  completion: CompletionDto;
}

export interface CurriculumLessonMeta {
  slug: string;
  title: string;
  description: string;
  estimatedMinutes: number;
  sectionCount: number;
  hasAssessment: boolean;
}

export interface CurriculumDto {
  levels: {
    id: string;
    name: string;
    tagline: string;
    units: {
      number: number;
      title: string;
      description: string;
      lessons: CurriculumLessonMeta[];
    }[];
  }[];
  totals: {
    lessons: number;
    blocks: number;
    blockTypes: number;
    exerciseTypes: number;
  };
}

export interface AttemptResult {
  exerciseId: string;
  correct: boolean;
  score: number;
  invalid: boolean;
  points: number;
  totalPoints: number;
  /** Sentence-build only: structure of the canonical answer, sent after grading. */
  structure?: SentenceStructure;
  feedback: ExerciseFeedback;
}

export interface AssessmentSummaryDto {
  scorePercent: number;
  passed: boolean;
  total: number;
  correct: number;
  passMarkPercent: number;
  byDifficulty: { difficulty: string; attempts: number; correct: number }[];
  bySkill: { skill: string; attempts: number; correct: number }[];
  wrongExerciseIds: string[];
  recommendation: string;
}

export interface AssessmentReviewItem {
  exerciseId: string;
  type: string;
  difficulty: string;
  skill: string;
  correct: boolean;
  invalid: boolean;
  prompt: string;
  submitted: unknown;
  feedback: ExerciseFeedback;
}

export interface AssessmentSubmitResult {
  assessmentId: string;
  lessonSlug: string;
  lessonTitle: string;
  summary: AssessmentSummaryDto;
  review: AssessmentReviewItem[];
  completion: CompletionDto;
}

export interface StartAssessmentResult {
  assessmentId: string;
  lessonSlug: string;
  passScore: number;
  total: number;
  questions: SafeExercise[];
}

export interface ProgressItem {
  lessonSlug: string;
  lessonTitle: string;
  levelId: string | null;
  status: "in-progress" | "completed";
  bookmarked: boolean;
  lastSectionId: string | null;
  updatedAt: string;
  completedAt: string | null;
  completion: CompletionDto;
  bestAssessment: { score: number; passed: boolean; correct: number; total: number } | null;
  nextLessonSlug: string | null;
}

export interface StatsDto {
  totals: {
    attempts: number;
    correct: number;
    accuracy: number;
    hintsUsed: number;
    timeSpentMinutes: number;
    streakDays: number;
  };
  byType: Record<string, { attempts: number; correct: number }>;
  byDifficulty: Record<string, { attempts: number; correct: number }>;
  bySkill: Record<string, { attempts: number; correct: number }>;
  recentAttempts: {
    exerciseId: string;
    lessonSlug: string;
    type: string;
    difficulty: string;
    skill: string;
    isCorrect: boolean;
    hintsUsed: number;
    context: string;
    createdAt: string;
  }[];
  assessments: {
    id: string;
    lessonSlug: string;
    score: number;
    passed: boolean;
    correct: number;
    total: number;
    completedAt: string | null;
  }[];
}

async function request<T>(
  path: string,
  init?: RequestInit,
): Promise<{ ok: true; data: T } | { ok: false; error: string; status: number }> {
  try {
    const res = await fetch(path, {
      ...init,
      headers: { "content-type": "application/json", ...(init?.headers ?? {}) },
    });
    const text = await res.text();
    const data = text ? JSON.parse(text) : {};
    if (!res.ok) {
      const message =
        typeof data?.error === "string" ? data.error : `Request failed (${res.status}).`;
      return { ok: false, error: message, status: res.status };
    }
    return { ok: true, data: data as T };
  } catch {
    return { ok: false, error: "Network error. Is the server running?", status: 0 };
  }
}

export interface ClinicIssue {
  ruleId: string;
  category: string;
  original: string;
  suggestion: string;
  explanation: string;
  lessonSlug?: string;
}

export interface ClinicCheckResult {
  original: string;
  corrected: string;
  clean: boolean;
  issues: ClinicIssue[];
  categories: string[];
}

export interface ClinicHistoryResult {
  submissions: {
    id: string;
    sentence: string;
    corrected: string;
    issues: ClinicIssue[];
    categories: string[];
    createdAt: string;
  }[];
  recurring: { category: string; count: number }[];
  recommendedLessons: {
    slug: string;
    title: string;
    description: string;
    estimatedMinutes: number;
  }[];
}

export interface VocabCategoriesDto {
  categories: {
    id: string;
    name: string;
    description: string;
    icon: string;
    total: number;
    contextCount: number;
    subcategories: { id: string; name: string; total: number }[];
  }[];
}

export interface DailyWordDto {
  dateKey: string;
  word: AnnotatedWord["word"];
  bookmarked: boolean;
  progress: AnnotatedWord["progress"];
}

export interface DailyWordsDto {
  today: DailyWordDto;
  archive: DailyWordDto[];
}

export interface WordSearchParams {
  q?: string;
  category?: string;
  sub?: string;
  difficulty?: string;
  status?: string;
  flag?: string;
  bookmarked?: string;
  ids?: string[];
  sort?: string;
  limit?: number;
  offset?: number;
}

export interface WordsResultDto {
  words: AnnotatedWord[];
  total: number;
  libraryTotal: number;
  limit: number;
  offset: number;
}

export const api = {
  me: () => request<{ user: SessionUser | null }>("/api/auth/me"),
  register: (body: { email: string; name: string; password: string }) =>
    request<{ user: SessionUser }>("/api/auth/register", {
      method: "POST",
      body: JSON.stringify(body),
    }),
  login: (body: { email: string; password: string }) =>
    request<{ user: SessionUser }>("/api/auth/login", {
      method: "POST",
      body: JSON.stringify(body),
    }),
  logout: () => request<{ ok: boolean }>("/api/auth/logout", { method: "POST" }),

  curriculum: () => request<CurriculumDto>("/api/curriculum"),
  lesson: (slug: string) => request<LessonBundle>(`/api/curriculum/${slug}`),

  attempt: (body: {
    exerciseId: string;
    lessonSlug: string;
    answer: unknown;
    hintsUsed: number;
    durationMs: number;
    context?: "practice" | "assessment" | "challenge";
  }) =>
    request<AttemptResult>("/api/exercises/attempt", {
      method: "POST",
      body: JSON.stringify(body),
    }),

  clinicCheck: (body: { sentence: string }) =>
    request<ClinicCheckResult>("/api/grammar/clinic", {
      method: "POST",
      body: JSON.stringify(body),
    }),
  clinicHistory: () => request<ClinicHistoryResult>("/api/grammar/clinic"),

  lessonState: (
    slug: string,
    body:
      | { action: "position"; sectionId: string }
      | { action: "complete-section"; sectionId: string }
      | { action: "bookmark"; bookmarked: boolean }
      | { action: "note"; sectionId: string; content: string },
  ) =>
    request<{ progress: LessonProgressDto; completion: CompletionDto }>(
      `/api/lessons/${slug}/state`,
      { method: "POST", body: JSON.stringify(body) },
    ),

  startAssessment: (lessonSlug: string) =>
    request<StartAssessmentResult>("/api/assessments", {
      method: "POST",
      body: JSON.stringify({ lessonSlug }),
    }),
  submitAssessment: (
    assessmentId: string,
    answers: { exerciseId: string; answer: unknown }[],
  ) =>
    request<AssessmentSubmitResult>(`/api/assessments/${assessmentId}/submit`, {
      method: "POST",
      body: JSON.stringify({ answers }),
    }),

  progress: () => request<{ items: ProgressItem[] }>("/api/progress"),
  stats: () => request<StatsDto>("/api/stats"),

  // -------------------------------------------------------------------------
  // Vocabulary system
  // -------------------------------------------------------------------------

  vocabCategories: () => request<VocabCategoriesDto>("/api/vocabulary/categories"),
  vocabDaily: () => request<DailyWordsDto>("/api/vocabulary/daily"),
  vocabWord: (id: string) => request<WordDetailDto>(`/api/vocabulary/words/${id}`),
  vocabWords: (params: WordSearchParams = {}) => {
    const search = new URLSearchParams();
    if (params.q) search.set("q", params.q);
    if (params.category) search.set("category", params.category);
    if (params.sub) search.set("sub", params.sub);
    if (params.difficulty) search.set("difficulty", params.difficulty);
    if (params.status) search.set("status", params.status);
    if (params.flag) search.set("flag", params.flag);
    if (params.bookmarked) search.set("bookmarked", params.bookmarked);
    if (params.ids && params.ids.length > 0) search.set("ids", params.ids.join(","));
    if (params.sort) search.set("sort", params.sort);
    if (params.limit) search.set("limit", String(params.limit));
    if (params.offset) search.set("offset", String(params.offset));
    const qs = search.toString();
    return request<WordsResultDto>(`/api/vocabulary/words${qs ? `?${qs}` : ""}`);
  },

  vocabOverview: () => request<VocabOverviewDto>("/api/vocabulary/overview"),
  vocabFlashcards: (study = "queue") =>
    request<FlashcardSessionDto>(`/api/vocabulary/flashcards?study=${encodeURIComponent(study)}`),
  vocabReview: (body: {
    action: "grade" | "known" | "snooze" | "flag";
    wordId: string;
    rating?: "again" | "hard" | "good" | "easy";
    source?: "flashcard" | "challenge" | "sentence" | "daily" | "explore";
    hours?: number;
    difficult?: boolean;
  }) =>
    request<ReviewOutcomeDto>("/api/vocabulary/review", {
      method: "POST",
      body: JSON.stringify(body),
    }),

  vocabBookmarks: () => request<{ words: AnnotatedWord[] }>("/api/vocabulary/bookmarks"),
  vocabToggleBookmark: (wordId: string) =>
    request<{ wordId: string; bookmarked: boolean }>("/api/vocabulary/bookmarks", {
      method: "POST",
      body: JSON.stringify({ wordId }),
    }),

  vocabLists: () => request<{ lists: WordListDto[] }>("/api/vocabulary/lists"),
  vocabCreateList: (body: { name: string; description?: string }) =>
    request<{ list: WordListDto }>("/api/vocabulary/lists", {
      method: "POST",
      body: JSON.stringify(body),
    }),
  vocabList: (id: string) =>
    request<{ list: WordListDto; words: AnnotatedWord[] }>(`/api/vocabulary/lists/${id}`),
  vocabUpdateList: (id: string, body: { name?: string; description?: string }) =>
    request<{ list: { id: string; name: string; description: string } }>(
      `/api/vocabulary/lists/${id}`,
      { method: "PATCH", body: JSON.stringify(body) },
    ),
  vocabAddToList: (id: string, wordId: string) =>
    request<{ wordId: string; added: boolean }>(`/api/vocabulary/lists/${id}`, {
      method: "POST",
      body: JSON.stringify({ wordId }),
    }),
  vocabRemoveFromList: (id: string, wordId: string) =>
    request<{ wordId: string; removed: boolean }>(
      `/api/vocabulary/lists/${id}?wordId=${encodeURIComponent(wordId)}`,
      { method: "DELETE" },
    ),
  vocabDeleteList: (id: string) =>
    request<{ deleted: boolean }>(`/api/vocabulary/lists/${id}`, { method: "DELETE" }),

  vocabSentences: (wordId?: string) =>
    request<{ sentences: SentenceDto[] }>(
      `/api/vocabulary/sentences${wordId ? `?wordId=${encodeURIComponent(wordId)}` : ""}`,
    ),
  vocabSubmitSentence: (wordId: string, sentence: string) =>
    request<SentenceSubmitDto>("/api/vocabulary/sentences", {
      method: "POST",
      body: JSON.stringify({ wordId, sentence }),
    }),

  vocabChallengeHistory: () => request<{ runs: ChallengeRunDto[] }>("/api/vocabulary/challenges"),
  vocabStartChallenge: (body: { kind: ChallengeKind; categoryId?: string; size?: number }) =>
    request<ChallengeStartDto>("/api/vocabulary/challenges", {
      method: "POST",
      body: JSON.stringify(body),
    }),
  vocabSubmitChallenge: (
    runId: string,
    answers: Record<string, unknown>,
    durationMs: number,
  ) =>
    request<ChallengeSubmitDto>(`/api/vocabulary/challenges/${runId}/submit`, {
      method: "POST",
      body: JSON.stringify({ answers, durationMs }),
    }),

  vocabSettings: () => request<VocabSettingsDto>("/api/vocabulary/settings"),
  vocabUpdateSettings: (overrides: SrsConfigOverrides) =>
    request<VocabSettingsDto>("/api/vocabulary/settings", {
      method: "PUT",
      body: JSON.stringify({ overrides }),
    }),
  vocabResetSettings: () =>
    request<VocabSettingsDto>("/api/vocabulary/settings", { method: "DELETE" }),

  // -------------------------------------------------------------------------
  // Reading Room
  // -------------------------------------------------------------------------

  readingLibrary: () => request<ReadingLibraryDto>("/api/reading/library"),
  readingText: (slug: string) =>
    request<ReadingTextBundle>(`/api/reading/texts/${encodeURIComponent(slug)}`),
  readingState: (
    slug: string,
    body:
      | { action: "paragraph-read"; paragraphId: string }
      | { action: "position"; paragraphId: string }
      | { action: "bookmark"; bookmarked: boolean }
      | { action: "paragraph-bookmark"; paragraphId: string },
  ) =>
    request<{ progress: ReadingProgressDto; paragraphBookmarks: string[] }>(
      "/api/reading/state",
      { method: "POST", body: JSON.stringify({ slug, ...body }) },
    ),
  readingCheck: (body: {
    slug: string;
    questionId: string;
    answer: unknown;
    durationMs?: number;
  }) =>
    request<ReadingCheckResult>("/api/reading/check", {
      method: "POST",
      body: JSON.stringify(body),
    }),
  readingStartRun: (slug: string) =>
    request<ReadingRunStartDto>("/api/reading/runs", {
      method: "POST",
      body: JSON.stringify({ slug }),
    }),
  readingSubmitRun: (
    runId: string,
    answers: Record<string, unknown>,
  ) =>
    request<ReadingRunResult>(`/api/reading/runs/${runId}/submit`, {
      method: "POST",
      body: JSON.stringify({ answers }),
    }),

  // -------------------------------------------------------------------------
  // Listening Lab
  // -------------------------------------------------------------------------

  listeningLibrary: () => request<ListeningLibraryDto>("/api/listening/library"),
  listeningActivity: (slug: string) =>
    request<ListeningActivityBundle>(
      `/api/listening/activities/${encodeURIComponent(slug)}`,
    ),
  listeningCheck: (body: {
    slug: string;
    exerciseId: string;
    answer: unknown;
    hintsUsed?: number;
    durationMs?: number;
  }) =>
    request<ListeningCheckResult>("/api/listening/check", {
      method: "POST",
      body: JSON.stringify(body),
    }),

  // -------------------------------------------------------------------------
  // Speaking Laboratory
  // -------------------------------------------------------------------------

  speakingLibrary: () => request<SpeakingLibraryDto>("/api/speaking/library"),
  speakingActivity: (slug: string) =>
    request<SpeakingActivityBundle>(
      `/api/speaking/activities/${encodeURIComponent(slug)}`,
    ),
  speakingTranscribe: (audioBase64: string) =>
    request<SpeakingTranscribeResult>("/api/speaking/transcribe", {
      method: "POST",
      body: JSON.stringify({ audioBase64 }),
    }),
  speakingAttempt: (body: SpeakingAttemptBody) =>
    request<SpeakingAttemptResult>("/api/speaking/attempt", {
      method: "POST",
      body: JSON.stringify(body),
    }),
  speakingSettings: () =>
    request<{ settings: SpeakingSettingsDto }>("/api/speaking/settings"),
  speakingUpdateSettings: (body: {
    provider?: SttProviderSetting;
    retentionDays?: number;
    consent?: boolean;
  }) =>
    request<{ settings: SpeakingSettingsDto }>("/api/speaking/settings", {
      method: "POST",
      body: JSON.stringify(body),
    }),
  speakingDeleteHistory: () =>
    request<{ deleted: boolean }>("/api/speaking/history/delete", {
      method: "POST",
    }),
  speakingScenario: (slug: string) =>
    request<SpeakingScenarioBundle>(
      `/api/speaking/scenarios/${encodeURIComponent(slug)}`,
    ),
  speakingStartConversation: (body: {
    slug: string;
    level: string;
    engine?: "ai" | "scripted";
  }) =>
    request<SpeakingConversationStart>("/api/speaking/conversations", {
      method: "POST",
      body: JSON.stringify(body),
    }),
  speakingConversationTurn: (id: string, text: string) =>
    request<SpeakingConversationTurn>(
      `/api/speaking/conversations/${encodeURIComponent(id)}/turn`,
      { method: "POST", body: JSON.stringify({ text }) },
    ),
  speakingConversationFinish: (id: string) =>
    request<SpeakingConversationFinish>(
      `/api/speaking/conversations/${encodeURIComponent(id)}/finish`,
      { method: "POST" },
    ),
  speakingPronunciation: (body: {
    itemId: string;
    transcript?: string;
    hadStt?: boolean;
    selfRating?: number;
  }) =>
    request<SpeakingPronunciationResult>("/api/speaking/pronunciation", {
      method: "POST",
      body: JSON.stringify(body),
    }),

  // -------------------------------------------------------------------------
  // Writing Studio
  // -------------------------------------------------------------------------

  writingLibrary: () => request<WritingLibraryDto>("/api/writing/library"),
  writingAssignment: (slug: string) =>
    request<WritingAssignmentBundle>(
      `/api/writing/assignments/${encodeURIComponent(slug)}`,
    ),
  writingSaveDraft: (slug: string, content: string) =>
    request<{ draft: WritingDraftDto; savedAt: string }>("/api/writing/drafts", {
      method: "POST",
      body: JSON.stringify({ slug, content }),
    }),
  writingSubmitGuided: (body: {
    slug: string;
    taskId: string;
    answers: Record<string, string>;
    durationMs?: number;
  }) =>
    request<GuidedSubmitResult>("/api/writing/submit", {
      method: "POST",
      body: JSON.stringify({ ...body, mode: "guided" }),
    }),
  writingSubmitFree: (body: {
    slug: string;
    taskId: string;
    content: string;
    durationMs?: number;
  }) =>
    request<FreeSubmitResult>("/api/writing/submit", {
      method: "POST",
      body: JSON.stringify({ ...body, mode: "free" }),
    }),

  // --- Learning Progression System ---
  progressionOverview: () =>
    request<ProgressOverviewDto>("/api/progression/overview"),
  setProgressionGoals: (body: { dailyPoints: number; weeklyPoints: number }) =>
    request<{ goals: { dailyPoints: number; weeklyPoints: number } }>(
      "/api/progression/goals",
      { method: "POST", body: JSON.stringify(body) },
    ),
  setLessonConfidence: (body: { lessonSlug: string; confidence: number }) =>
    request<{ ok: boolean }>("/api/progression/confidence", {
      method: "POST",
      body: JSON.stringify(body),
    }),
  markAchievementsSeen: (ids: string[]) =>
    request<{ ok: boolean }>("/api/progression/achievements/seen", {
      method: "POST",
      body: JSON.stringify({ ids }),
    }),

  // --- AI Tutor ---
  tutorModes: () =>
    request<{
      modes: SafeTutorMode[];
      usage: TutorUsageDto;
      limits: { maxMessageChars: number; dailyRequests: number };
    }>("/api/tutor/modes"),
  tutorConversations: () =>
    request<{ conversations: TutorConversationDto[] }>("/api/tutor/conversations"),
  tutorCreateConversation: (body: {
    mode: TutorModeId;
    lessonRef?: string;
    includeContext?: boolean;
  }) =>
    request<{ conversation: TutorConversationDto; messages: TutorMessageDto[] }>(
      "/api/tutor/conversations",
      { method: "POST", body: JSON.stringify(body) },
    ),
  tutorGetConversation: (id: string) =>
    request<{ conversation: TutorConversationDto; messages: TutorMessageDto[] }>(
      `/api/tutor/conversations/${encodeURIComponent(id)}`,
    ),
  tutorDeleteConversation: (id: string) =>
    request<{ deleted: boolean }>(
      `/api/tutor/conversations/${encodeURIComponent(id)}`,
      { method: "DELETE" },
    ),
  tutorDeleteAllConversations: () =>
    request<{ deleted: number }>("/api/tutor/conversations", { method: "DELETE" }),
  tutorSetContextFlag: (id: string, includeContext: boolean) =>
    request<{ conversation: TutorConversationDto }>(
      `/api/tutor/conversations/${encodeURIComponent(id)}`,
      { method: "PATCH", body: JSON.stringify({ includeContext }) },
    ),
  tutorContextPreview: (mode: TutorModeId, lessonRef?: string) => {
    const params = new URLSearchParams({ mode });
    if (lessonRef) params.set("lesson", lessonRef);
    return request<{ level: string; text: string }>(`/api/tutor/context?${params}`);
  },
};

// ---------------------------------------------------------------------------
// AI Tutor streaming (SSE)
// ---------------------------------------------------------------------------

export interface TutorStreamHandlers {
  onMeta?: (meta: { conversationId: string; learnerMessageId: string; mode: TutorModeId }) => void;
  onDelta?: (text: string) => void;
  onDone?: (done: { tutorMessageId: string; requestsUsedToday: number; dailyLimit: number }) => void;
}

export interface TutorStreamResult {
  ok: boolean;
  error?: string;
}

/**
 * Send a tutor message and consume the SSE reply stream. Returns when the
 * stream finishes; on `error` events the caller should restore the draft
 * (the server has already removed the failed learner message).
 */
export async function tutorSendMessage(
  conversationId: string,
  content: string,
  handlers: TutorStreamHandlers,
): Promise<TutorStreamResult> {
  let res: Response;
  try {
    res = await fetch(
      `/api/tutor/conversations/${encodeURIComponent(conversationId)}/messages`,
      {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ content }),
      },
    );
  } catch {
    return { ok: false, error: "Network error. Is the server running?" };
  }

  if (!res.ok) {
    let message = `Request failed (${res.status}).`;
    try {
      const data = (await res.json()) as { error?: string };
      if (typeof data.error === "string") message = data.error;
    } catch {
      // keep default
    }
    return { ok: false, error: message };
  }
  if (!res.body) return { ok: false, error: "The tutor stream is unavailable." };

  const reader = res.body.getReader();
  const decoder = new TextDecoder();
  let buffer = "";
  let sawDone = false;

  for (;;) {
    const { done, value } = await reader.read();
    if (done) break;
    buffer += decoder.decode(value, { stream: true });

    let boundary = buffer.indexOf("\n\n");
    while (boundary !== -1) {
      const raw = buffer.slice(0, boundary);
      buffer = buffer.slice(boundary + 2);
      boundary = buffer.indexOf("\n\n");

      let event = "message";
      const dataLines: string[] = [];
      for (const line of raw.split("\n")) {
        if (line.startsWith("event: ")) event = line.slice(7).trim();
        else if (line.startsWith("data: ")) dataLines.push(line.slice(6));
      }
      if (dataLines.length === 0) continue;

      let payload: unknown;
      try {
        payload = JSON.parse(dataLines.join("\n"));
      } catch {
        continue;
      }

      if (event === "meta" && payload && typeof payload === "object") {
        handlers.onMeta?.(payload as Parameters<NonNullable<TutorStreamHandlers["onMeta"]>>[0]);
      } else if (event === "delta" && payload && typeof payload === "object") {
        const text = (payload as { text?: unknown }).text;
        if (typeof text === "string") handlers.onDelta?.(text);
      } else if (event === "done" && payload && typeof payload === "object") {
        sawDone = true;
        handlers.onDone?.(payload as Parameters<NonNullable<TutorStreamHandlers["onDone"]>>[0]);
      } else if (event === "error" && payload && typeof payload === "object") {
        const message = (payload as { message?: unknown }).message;
        return { ok: false, error: typeof message === "string" ? message : "The tutor could not answer." };
      }
    }
  }

  return sawDone ? { ok: true } : { ok: false, error: "The tutor stream ended unexpectedly." };
}

// ---------------------------------------------------------------------------
// Reading Room & Listening Lab DTOs
// ---------------------------------------------------------------------------

export interface ReadingProgressDto {
  textId: string;
  status: "in-progress" | "completed";
  paragraphsRead: string[];
  readCount: number;
  totalParagraphs: number;
  lastParagraphId: string | null;
  bookmarked: boolean;
  bestRunScore: number;
  runsCompleted: number;
  completedAt: string | null;
}

export interface ReadingLibraryText {
  id: string;
  slug: string;
  level: string;
  category: string;
  title: string;
  description: string;
  estimatedMinutes: number;
  tags: string[];
  illustration: string | null;
  paragraphCount: number;
  questionCount: number;
  progress: {
    status: "in-progress" | "completed";
    readCount: number;
    totalParagraphs: number;
    bookmarked: boolean;
    bestRunScore: number;
    bestRunPassed: boolean;
    completedAt: string | null;
  } | null;
}

export interface ReadingLibraryDto {
  levels: { id: string; name: string; tagline: string; cefr: string; description: string }[];
  categories: { id: string; name: string; levels: string[] }[];
  texts: ReadingLibraryText[];
  skillStats: { skill: string; attempts: number; correct: number }[];
}

export interface ReadingTextBundle {
  text: {
    id: string;
    slug: string;
    level: string;
    category: string;
    title: string;
    description: string;
    estimatedMinutes: number;
    tags: string[];
    illustration: string | null;
    paragraphs: ReadingParagraph[];
    glossary: GlossaryEntry[];
    passScore: number;
    questions: SafeReadingQuestion[];
  };
  progress: ReadingProgressDto;
  paragraphBookmarks: string[];
  bestRun: { score: number; passed: boolean; correct: number; total: number; completedAt: string | null } | null;
}

export interface ReadingCheckResult {
  questionId: string;
  correct: boolean;
  score: number;
  invalid: boolean;
  feedback: ReadingFeedback;
}

export interface ReadingRunStartDto {
  runId: string;
  textId: string;
  passScore: number;
  total: number;
  questions: SafeReadingQuestion[];
}

export interface ReadingRunResult {
  runId: string;
  textId: string;
  summary: {
    scorePercent: number;
    passed: boolean;
    correct: number;
    total: number;
    passMarkPercent: number;
    pointsScored: number;
    pointsTotal: number;
    bySkill: { skill: string; attempts: number; correct: number }[];
    wrongSkills: string[];
    recommendation: string;
  };
  review: {
    questionId: string;
    skill: ComprehensionSkill;
    format: string;
    difficulty: string;
    correct: boolean;
    invalid: boolean;
    score: number;
    prompt: string;
    submitted: unknown;
    submittedDescription: string;
    feedback: ReadingFeedback;
  }[];
  progress: ReadingProgressDto;
}

export interface ListeningProgressDto {
  activityId: string;
  status: "in-progress" | "completed";
  exercisesCompleted: string[];
  completedCount: number;
  totalExercises: number;
  firstTryCorrect: string[];
  scorePercent: number;
  bestScore: number;
  runsCompleted: number;
  transcriptUnlocked: boolean;
  completedAt: string | null;
}

export interface ListeningLibraryActivity {
  id: string;
  slug: string;
  stage: string;
  title: string;
  description: string;
  estimatedMinutes: number;
  tags: string[];
  segmentCount: number;
  exerciseCount: number;
  formats: string[];
  transcriptPolicy: "open" | "locked";
  speakerCount: number;
  progress: {
    status: "in-progress" | "completed";
    completedCount: number;
    totalExercises: number;
    scorePercent: number;
    transcriptUnlocked: boolean;
    completedAt: string | null;
  } | null;
}

export interface ListeningLibraryDto {
  stages: { id: string; name: string; tagline: string; cefr: string }[];
  activities: ListeningLibraryActivity[];
}

export interface ListeningActivityBundle {
  activity: {
    id: string;
    slug: string;
    stage: string;
    title: string;
    description: string;
    estimatedMinutes: number;
    tags: string[];
    speakers: { id: string; name: string; role?: string }[] | null;
    segments: {
      id: string;
      speakerId: string | null;
      text: string;
      translation: string | null;
    }[];
    transcriptPolicy: "open" | "locked";
    audio: { rate?: number; gapMs?: number };
    exercises: SafeListeningExercise[];
  };
  progress: ListeningProgressDto;
}

export interface ListeningCheckResult {
  exerciseId: string;
  correct: boolean;
  score: number;
  invalid: boolean;
  feedback: ListeningFeedback;
  progress: ListeningProgressDto;
}

// ---------------------------------------------------------------------------
// Speaking Laboratory DTOs
// ---------------------------------------------------------------------------

export interface SpeakingSettingsDto {
  provider: SttProviderSetting;
  retentionDays: number;
  consented: boolean;
}

export interface SpeakingLibraryActivity {
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

export interface SpeakingLibraryScenario {
  id: string;
  slug: string;
  title: string;
  emoji: string;
  description: string;
  category: string;
  partner: { name: string; role: string };
  learnerGoal: string;
  levels: { level: string; turnsTarget: number }[];
}

export interface SpeakingLibraryDto {
  activities: SpeakingLibraryActivity[];
  scenarios: SpeakingLibraryScenario[];
  pronunciation: {
    categories: { id: string; name: string; tagline: string; itemCount: number }[];
    items: PronunciationItem[];
  };
  settings: SpeakingSettingsDto;
  stats: { attempts: number; conversationsCompleted: number; pronunciationAttempts: number };
  providerMeta: Record<string, { name: string; description: string }>;
  capabilities: { serverTranscription: boolean; maxRecordingSeconds: number };
}

export interface SpeakingActivityBundle {
  activity: SafeSpeakingActivity;
}

export interface SpeakingTranscribeResult {
  transcript?: string;
  provider?: string;
  error?: string;
  message?: string;
}

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

export interface SpeakingAttemptBody {
  slug: string;
  taskId: string;
  mode: "transcript" | "self-assessed";
  provider: "server" | "browser" | "manual" | "self";
  transcript?: string;
  durationMs?: number;
}

export interface SpeakingAttemptResult {
  taskId: string;
  passed: boolean;
  passThreshold: number;
  measured: MeasuredFeedback;
  overall: number;
  suggestions: AiCoachSuggestions | null;
  modelAnswer: { text: string; translation: string | null } | null;
  progress: SpeakingProgressDto;
}

export interface SpeakingScenarioBundle {
  scenario: {
    id: string;
    slug: string;
    title: string;
    emoji: string;
    description: string;
    category: string;
    partner: { name: string; role: string };
    setting: string;
    learnerGoal: string;
    levels: {
      level: string;
      suggestedPhrases: string[];
      opening: string;
      turnsTarget: number;
    }[];
  };
}

export interface SpeakingConversationSession {
  id: string;
  scenarioId: string;
  level: string;
  engine: "ai" | "scripted";
  status: "active" | "completed";
  turns: { role: "partner" | "learner"; text: string }[];
  score: number;
  startedAt: string;
  completedAt: string | null;
}

export interface SpeakingConversationStart {
  session: SpeakingConversationSession;
  scenario: {
    slug: string;
    title: string;
    partner: { name: string; role: string };
    learnerGoal: string;
    suggestedPhrases: string[];
    turnsTarget: number;
  };
}

export interface SpeakingConversationTurn {
  reply: string;
  engine: "ai" | "scripted";
  learnerTurnCount: number;
  turnsTarget: number;
  canFinish: boolean;
}

export interface SpeakingConversationFinish {
  measured: ConversationMeasured;
  feedback: ConversationCoachFeedback;
  feedbackSource: "ai" | "measured";
  engine: "ai" | "scripted";
  score: number;
}

export interface SpeakingPronunciationResult {
  itemId: string;
  matchScore: number;
  heard: string;
  note: string;
  selfRating: number;
}

// ---------------------------------------------------------------------------
// Writing Studio DTOs
// ---------------------------------------------------------------------------

export interface WritingLibraryAssignment {
  id: string;
  slug: string;
  tier: string;
  kind: string;
  title: string;
  description: string;
  estimatedMinutes: number;
  tags: string[];
  taskCount: number;
  passThreshold: number;
  progress: {
    status: string;
    submissionsCount: number;
    bestScore: number;
    completedAt: string | null;
  } | null;
}

export interface WritingLibraryDto {
  assignments: WritingLibraryAssignment[];
  stats: {
    draftsSaved: number;
    submissions: number;
    assignmentsCompleted: number;
    totalAssignments: number;
  };
}

export interface WritingDraftDto {
  content: string;
  wordCount: number;
  charCount: number;
  updatedAt: string | null;
}

export interface WritingProgressDto {
  assignmentId: string;
  status: "in-progress" | "completed";
  draftsCount: number;
  submissionsCount: number;
  bestScore: number;
  lastScore: number;
  completedAt: string | null;
}

export interface WritingSubmissionDto {
  id: string;
  version: number;
  content: string;
  wordCount: number;
  overall: number;
  scores: Record<string, number>;
  issueCount: number;
  passed: boolean;
  createdAt: string;
}

export interface WritingAssignmentBundle {
  assignment: SafeWritingAssignment;
  draft: WritingDraftDto;
  progress: WritingProgressDto | null;
  submissions: WritingSubmissionDto[];
}

export interface GuidedItemResult {
  itemId: string;
  submitted: string;
  correct: boolean;
  feedback: string;
  explanation: string;
  reveal: string;
}

export interface GuidedSubmitResult {
  mode: "guided";
  results: GuidedItemResult[];
  correctCount: number;
  total: number;
  overall: number;
  passed: boolean;
  passThreshold: number;
  submission: WritingSubmissionDto;
  progress: WritingProgressDto;
}

export interface FreeSubmitResult {
  mode: "free";
  measured: WritingMeasured;
  issues: WritingIssue[];
  aiFeedback: WritingAiFeedback | null;
  overall: number;
  passed: boolean;
  passThreshold: number;
  submission: WritingSubmissionDto;
  comparison: WritingComparison | null;
  progress: WritingProgressDto;
  submissions: WritingSubmissionDto[];
}

// ---------------------------------------------------------------------------
// CMS (content management system)
// ---------------------------------------------------------------------------

import type {
  CmsAdminUserDto,
  CmsAssetDto,
  CmsAuditEntryDto,
  CmsCatalogueCourseDto,
  CmsCourseTreeDto,
  CmsExportBundle,
  CmsImportPreview,
  CmsLearnerCourseDto,
  CmsLearnerLessonDto,
  CmsLessonDetailDto,
  CmsQuestionDto,
  CmsStatsDto,
} from "@/data/cms/types";

export interface CmsAdminUserDetail extends CmsAdminUserDto {
  streakDays: number;
  recentActivity: { type: string; skill: string; isCorrect: boolean; createdAt: string }[];
}

export interface CmsQuestionFilter {
  status?: string;
  type?: string;
  skill?: string;
  search?: string;
}

async function cmsUpload(
  path: string,
  form: FormData,
): Promise<{ ok: true; data: { asset: CmsAssetDto } } | { ok: false; error: string; status: number }> {
  try {
    const res = await fetch(path, { method: "POST", body: form });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) {
      return {
        ok: false,
        error: typeof data?.error === "string" ? data.error : `Upload failed (${res.status}).`,
        status: res.status,
      };
    }
    return { ok: true, data };
  } catch {
    return { ok: false, error: "Network error. Is the server running?", status: 0 };
  }
}

export const cmsApi = {
  // -- Dashboard ----------------------------------------------------------
  stats: () => request<CmsStatsDto>("/api/cms/admin/stats"),

  // -- Curriculum ---------------------------------------------------------
  tree: () => request<CmsCourseTreeDto>("/api/cms/admin/courses"),
  createCourse: (body: { title: string; description?: string; levelId?: string | null }) =>
    request<{ course: { id: string; slug: string } }>("/api/cms/admin/courses", {
      method: "POST",
      body: JSON.stringify(body),
    }),
  updateCourse: (
    id: string,
    body: { title?: string; description?: string; levelId?: string | null },
  ) =>
    request<{ course: { id: string } }>(`/api/cms/admin/courses/${id}`, {
      method: "PATCH",
      body: JSON.stringify(body),
    }),
  deleteCourse: (id: string) =>
    request<{ ok: boolean }>(`/api/cms/admin/courses/${id}`, { method: "DELETE" }),
  courseAction: (id: string, action: string, note = "") =>
    request<{ course: { id: string; status: string; live: boolean } }>(
      `/api/cms/admin/courses/${id}/action`,
      { method: "POST", body: JSON.stringify({ action, note }) },
    ),

  createLevel: (body: { name: string; description?: string }) =>
    request<{ level: { id: string } }>("/api/cms/admin/levels", {
      method: "POST",
      body: JSON.stringify(body),
    }),
  updateLevel: (id: string, body: { name?: string; description?: string }) =>
    request<{ level: { id: string } }>(`/api/cms/admin/levels/${id}`, {
      method: "PATCH",
      body: JSON.stringify(body),
    }),
  deleteLevel: (id: string) =>
    request<{ ok: boolean }>(`/api/cms/admin/levels/${id}`, { method: "DELETE" }),

  createModule: (body: { courseId: string; title: string; description?: string }) =>
    request<{ module: { id: string; slug: string } }>("/api/cms/admin/modules", {
      method: "POST",
      body: JSON.stringify(body),
    }),
  updateModule: (id: string, body: { title?: string; description?: string }) =>
    request<{ module: { id: string } }>(`/api/cms/admin/modules/${id}`, {
      method: "PATCH",
      body: JSON.stringify(body),
    }),
  deleteModule: (id: string) =>
    request<{ ok: boolean }>(`/api/cms/admin/modules/${id}`, { method: "DELETE" }),

  createUnit: (body: { moduleId: string; title: string; description?: string }) =>
    request<{ unit: { id: string; slug: string } }>("/api/cms/admin/units", {
      method: "POST",
      body: JSON.stringify(body),
    }),
  updateUnit: (id: string, body: { title?: string; description?: string }) =>
    request<{ unit: { id: string } }>(`/api/cms/admin/units/${id}`, {
      method: "PATCH",
      body: JSON.stringify(body),
    }),
  deleteUnit: (id: string) =>
    request<{ ok: boolean }>(`/api/cms/admin/units/${id}`, { method: "DELETE" }),

  // -- Lessons ------------------------------------------------------------
  createLesson: (body: { unitId: string; title: string; description?: string }) =>
    request<{ lesson: { id: string; slug: string } }>("/api/cms/admin/lessons", {
      method: "POST",
      body: JSON.stringify(body),
    }),
  lesson: (id: string) => request<CmsLessonDetailDto>(`/api/cms/admin/lessons/${id}`),
  saveLesson: (
    id: string,
    body: {
      title?: string;
      description?: string;
      objectives?: string[];
      estimatedMinutes?: number;
      blocks?: unknown[];
      prerequisiteIds?: string[];
      changeNote?: string;
    },
  ) =>
    request<{ lesson: { id: string; version: number }; detail: CmsLessonDetailDto }>(
      `/api/cms/admin/lessons/${id}`,
      { method: "PATCH", body: JSON.stringify(body) },
    ),
  deleteLesson: (id: string) =>
    request<{ ok: boolean }>(`/api/cms/admin/lessons/${id}`, { method: "DELETE" }),
  lessonAction: (id: string, action: string, note = "") =>
    request<{ lesson: { id: string; status: string; live: boolean } }>(
      `/api/cms/admin/lessons/${id}/action`,
      { method: "POST", body: JSON.stringify({ action, note }) },
    ),
  restoreLessonVersion: (id: string, version: number) =>
    request<{ lesson: { id: string; version: number } }>(
      `/api/cms/admin/lessons/${id}/restore`,
      { method: "POST", body: JSON.stringify({ version }) },
    ),

  // -- Question bank ------------------------------------------------------
  questions: (filter: CmsQuestionFilter = {}) => {
    const params = new URLSearchParams();
    if (filter.status && filter.status !== "all") params.set("status", filter.status);
    if (filter.type && filter.type !== "all") params.set("type", filter.type);
    if (filter.skill && filter.skill !== "all") params.set("skill", filter.skill);
    if (filter.search) params.set("search", filter.search);
    const qs = params.toString();
    return request<{ questions: CmsQuestionDto[] }>(
      `/api/cms/admin/questions${qs ? `?${qs}` : ""}`,
    );
  },
  createQuestion: (body: Record<string, unknown>) =>
    request<{ question: { id: string; slug: string } }>("/api/cms/admin/questions", {
      method: "POST",
      body: JSON.stringify(body),
    }),
  updateQuestion: (id: string, body: Record<string, unknown>) =>
    request<{ question: { id: string; version: number } }>(`/api/cms/admin/questions/${id}`, {
      method: "PATCH",
      body: JSON.stringify(body),
    }),
  deleteQuestion: (id: string) =>
    request<{ ok: boolean }>(`/api/cms/admin/questions/${id}`, { method: "DELETE" }),
  questionAction: (id: string, action: string, note = "") =>
    request<{ question: { id: string; status: string } }>(
      `/api/cms/admin/questions/${id}/action`,
      { method: "POST", body: JSON.stringify({ action, note }) },
    ),

  // -- Media (audio manager) ----------------------------------------------
  assets: () => request<{ assets: CmsAssetDto[] }>("/api/cms/admin/assets"),
  uploadAsset: (form: FormData) => cmsUpload("/api/cms/admin/assets", form),
  updateAsset: (id: string, body: Record<string, unknown>) =>
    request<{ asset: CmsAssetDto }>(`/api/cms/admin/assets/${id}`, {
      method: "PATCH",
      body: JSON.stringify(body),
    }),
  deleteAsset: (id: string) =>
    request<{ ok: boolean }>(`/api/cms/admin/assets/${id}`, { method: "DELETE" }),

  // -- User management ----------------------------------------------------
  users: (search = "") =>
    request<{ users: CmsAdminUserDto[] }>(
      `/api/cms/admin/users${search ? `?search=${encodeURIComponent(search)}` : ""}`,
    ),
  updateUser: (id: string, body: { role?: string; status?: string }) =>
    request<{ user: { id: string; role?: string; status?: string } }>(
      `/api/cms/admin/users/${id}`,
      { method: "PATCH", body: JSON.stringify(body) },
    ),
  userProgress: (id: string) =>
    request<CmsAdminUserDetail>(`/api/cms/admin/users/${id}/progress`),

  // -- Import / export ----------------------------------------------------
  audit: () => request<{ entries: CmsAuditEntryDto[] }>("/api/cms/admin/audit"),
  importPreview: (bundle: unknown) =>
    request<{ mode: string; preview: CmsImportPreview }>("/api/cms/admin/import", {
      method: "POST",
      body: JSON.stringify({ bundle, mode: "validate" }),
    }),
  importCommit: (bundle: unknown) =>
    request<{ mode: string; preview: CmsImportPreview; courseSlug: string }>(
      "/api/cms/admin/import",
      { method: "POST", body: JSON.stringify({ bundle, mode: "commit" }) },
    ),
};

/** Download a course export bundle (returns raw JSON text for a file save). */
export async function cmsExportCourse(courseId: string): Promise<string | null> {
  try {
    const res = await fetch(`/api/cms/admin/export?courseId=${encodeURIComponent(courseId)}`);
    if (!res.ok) return null;
    return await res.text();
  } catch {
    return null;
  }
}

export const cmsLearnerApi = {
  catalogue: () => request<{ courses: CmsCatalogueCourseDto[] }>("/api/cms/courses"),
  course: (slug: string) => request<CmsLearnerCourseDto>(`/api/cms/courses/${slug}`),
  enrol: (slug: string) =>
    request<{ ok: boolean }>(`/api/cms/courses/${slug}/enrol`, { method: "POST" }),
  lesson: (slug: string) => request<CmsLearnerLessonDto>(`/api/cms/lessons/${slug}`),
  submitAssignment: (slug: string, blockId: string, text: string) =>
    request<{ submission: { id: string; wordCount: number } }>(
      `/api/cms/lessons/${slug}/assignment`,
      { method: "POST", body: JSON.stringify({ blockId, text }) },
    ),
  completeLesson: (slug: string) =>
    request<{ progress: { status: string; completedAt: string | null } }>(
      `/api/cms/lessons/${slug}/complete`,
      { method: "POST" },
    ),
};
