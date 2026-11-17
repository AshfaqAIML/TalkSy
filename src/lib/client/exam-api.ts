"use client";

/**
 * Client API for the International Exam Preparation Academy (Division C).
 * Thin wrappers around the shared `request` helper with typed responses.
 */

import { request } from "@/lib/client/api";
import type {
  AttemptResultDto,
  ExamProfileInput,
  RecommendationDto,
  SafeMockTest,
  SpecDto,
} from "@/lib/exams/types";
import type { ExamProfileDto } from "@/lib/exams/profile";
import type { PathwayDto } from "@/lib/exams/pathways";
import type { ExamDashboardDto } from "@/lib/exams/dashboard";
import type { ComparisonDto, HistoryDto } from "@/lib/exams/history";
import type {
  EvaluationComparisonDto,
  EvaluationOverviewDto,
  StoredEvaluationDto,
} from "@/lib/exams/evaluation/types";
import type {
  NotificationItemDto,
  NotificationPrefDto,
  PlannerNotificationsDto,
  PlannerPlanDto,
  PlannerStateDto,
  PlannerTaskDto,
  PlannerTaskStatus,
  PreviousAttempt,
} from "@/lib/exams/planner/types";
import type {
  GradedExercise,
  SafeBankExercise,
} from "@/lib/exams/listening-bank/service";
import type { ListeningPerformanceReport } from "@/lib/exams/listening-bank/performance";
import type { GradedReadingExercise, SafeReadingExercise } from "@/lib/exams/reading-bank/service";
import type { ReadingPerformanceReport } from "@/lib/exams/reading-bank/performance";
import type { ReadingGlossaryEntry } from "@/data/exams/ielts/reading-bank/types";
import type { SafeWritingTask, WritingDraftDto, WritingAttemptDto, WritingSubmissionResult } from "@/lib/exams/writing-bank/service";
import type { SafeSpeakingItem, SpeakingAttemptDto, SpeakingSubmissionResult } from "@/lib/exams/speaking-bank/service";
import type { SpeakingPerformanceReport } from "@/lib/exams/speaking-bank/performance";
import type { WritingPerformanceReport } from "@/lib/exams/writing-bank/performance";

/** PROMPT 54 — the unified question-bank record (public-safe projection). */
export type QuestionBankItemDto = {
  id: string;
  exam: "ielts" | "toefl";
  version: "academic" | "general-training" | "common" | "toefl-2026";
  section: "listening" | "reading" | "writing" | "speaking";
  questionType: string;
  questionTypeKey: string;
  difficulty: number;
  topic: string;
  topicDetail: string;
  instructions: string;
  summary: string;
  itemCount: number;
  answerModel: "keyed" | "rubric";
  hasExplanation: boolean;
  skills: string[];
  estimatedMinutes: number;
  reviewStatus: string;
  rubricCriteria?: string[];
  hasReferenceExample?: boolean;
  href: string;
  source: string;
};

export type QuestionBankFacetsDto = {
  exams: { value: string; label: string; count: number }[];
  versions: { value: string; label: string; count: number }[];
  sections: { value: string; label: string; count: number }[];
  questionTypes: { value: string; label: string; count: number }[];
  topics: { value: string; label: string; count: number }[];
  difficulties: { value: number; label: string; count: number }[];
  skills: { value: string; label: string; count: number }[];
};

export type QuestionBankResponse = {
  items: QuestionBankItemDto[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
  facets?: QuestionBankFacetsDto;
  stats?: {
    total: number;
    byExamSection: Record<string, number>;
    byTopic: Record<string, number>;
    byReviewStatus: Record<string, number>;
    keyed: number;
    rubric: number;
    sizeTargets: Record<string, number>;
  };
};

export type ExamCard = {
  examKey: "IELTS" | "TOEFL_IBT";
  examLabel: string;
  variant: string;
  variantLabel: string;
  name: string;
  specVersion: number;
  effectiveDate: string;
  lastReviewedAt: string;
  totalSections: number;
  sections: Array<{
    key: string;
    label: string;
    timingSec: number;
    questionCount: number;
    taskTypes: string[];
    adaptive: string | null;
    delivery: string | null;
    navigation: {
      withinSection: "free" | "forward_only";
      allowBackToSection: boolean;
      flagForReview: boolean;
      replayAudio: boolean;
    } | null;
  }>;
  scoringKind: "IELTS_BAND" | "TOEFL_BAND_1_6";
  maxSectionScore: number;
  validityMonths: number;
  transitionNote: string | null;
  mockCount: number;
  hasPathway: boolean;
  sourceRefs: Array<{ label: string; url: string; retrievedAt: string; note?: string }>;
};

export type UkviDeliveryInfo = {
  key: string;
  label: string;
  appliesTo: readonly string[];
  variants: readonly string[];
  sameFormatAsStandard: boolean;
  summary: string;
  guidance: readonly string[];
  sourceLabel: string;
  sourceUrl: string;
};

export const examApi = {
  overview: () => request<{ exams: ExamCard[]; ukvi: UkviDeliveryInfo | null; specs: SpecDto[] }>("/api/exams/overview"),

  /** PROMPT 54 — the unified, searchable original question-bank index. */
  questionBank: (params: string) =>
    request<QuestionBankResponse>(`/api/exams/bank${params ? (params.startsWith("?") ? params : `?${params}`) : ""}`),

  profile: () => request<{ profile: ExamProfileDto | null }>("/api/exams/profile"),

  saveProfile: (input: Partial<ExamProfileInput>) =>
    request<{ profile: ExamProfileDto }>("/api/exams/profile", {
      method: "PUT",
      body: JSON.stringify(input),
    }),

  dashboard: () => request<{ dashboard: ExamDashboardDto }>("/api/exams/dashboard"),

  pathway: (examKey: string, variant: string) =>
    request<{ pathway: PathwayDto }>(
      `/api/exams/pathway?exam=${encodeURIComponent(examKey)}&variant=${encodeURIComponent(variant)}`,
    ),

  markStep: (stepId: string) =>
    request<{ ok: true }>("/api/exams/pathway/step", {
      method: "POST",
      body: JSON.stringify({ stepId }),
    }),

  unmarkStep: (stepId: string) =>
    request<{ ok: true }>("/api/exams/pathway/step", {
      method: "DELETE",
      body: JSON.stringify({ stepId }),
    }),

  mocks: (examKey?: string) =>
    request<{
      mocks: Array<{
        id: string;
        examKey: "IELTS" | "TOEFL_IBT";
        variant: string;
        title: string;
        kind: string;
        lengthLabel: string;
        description: string | null;
        spec: { name: string; version: number };
        questionCount: number;
        attempts: Array<{ id: string; status: string; mode: string; modeLabel: string; timed: boolean; startedAt: string; scoreDisplay: string | null; submittedAt: string | null }>;
      }>;
    }>(`/api/exams/mocks${examKey ? `?exam=${encodeURIComponent(examKey)}` : ""}`),

  mock: (id: string) => request<{ mock: SafeMockTest }>(`/api/exams/mocks/${id}`),

  startAttempt: (mockId: string, mode?: string, timed?: boolean) =>
    request<{ attempt: { id: string; status: string; mode: string; modeLabel: string; timed: boolean; startedAt: string } }>(
      `/api/exams/mocks/${mockId}/attempts`,
      { method: "POST", body: JSON.stringify({ mode: mode ?? "full_mock", ...(timed !== undefined ? { timed } : {}) }) },
    ),

  attempt: (attemptId: string) =>
    request<{
      attempt: { id: string; mockTestId: string; status: string; mode: string; modeLabel: string; timed: boolean; startedAt: string; submittedAt: string | null };
      answers: Record<string, unknown>;
      flags: Record<string, boolean>;
      times: Record<string, number>;
    }>(`/api/exams/attempts/${attemptId}`),

  saveAnswer: (
    attemptId: string,
    questionId: string,
    answer?: unknown,
    meta?: { flagged?: boolean; timeDeltaSec?: number },
  ) =>
    request<{ ok: true }>(`/api/exams/attempts/${attemptId}`, {
      method: "PATCH",
      // `answer` is omitted when undefined: a flag/time-only save that must
      // not overwrite the stored answer.
      body: JSON.stringify({
        questionId,
        ...(answer !== undefined ? { answer } : {}),
        ...meta,
      }),
    }),

  revealAnswer: (attemptId: string, questionId: string) =>
    request<{
      reveal: {
        ok: true;
        verdict: "correct" | "incorrect";
        awarded: number;
        points: number;
        explanation: string | null;
        correctAnswer: string | null;
      };
    }>(`/api/exams/attempts/${attemptId}/reveal`, {
      method: "POST",
      body: JSON.stringify({ questionId }),
    }),

  submitAttempt: (attemptId: string) =>
    request<{ result: AttemptResultDto }>(`/api/exams/attempts/${attemptId}/submit`, {
      method: "POST",
    }),

  result: (attemptId: string) =>
    request<{ result: AttemptResultDto }>(`/api/exams/attempts/${attemptId}/result`),

  history: (examKey?: string, variant?: string) =>
    request<{ history: HistoryDto }>(
      `/api/exams/history${examKey ? `?exam=${encodeURIComponent(examKey)}${variant ? `&variant=${encodeURIComponent(variant)}` : ""}` : ""}`,
    ),

  compareAttempts: (idA: string, idB: string) =>
    request<{ comparison: ComparisonDto }>(
      `/api/exams/history/compare?ids=${encodeURIComponent(idA)},${encodeURIComponent(idB)}`,
    ),

  practiceSection: (input: { examKey: string; variant: string; section: string; count?: number; timed?: boolean }) =>
    request<{ mockId: string; itemCount: number; attempt: { id: string; mode: string; timed: boolean } }>(
      "/api/exams/practice/section",
      { method: "POST", body: JSON.stringify(input) },
    ),

  practiceCustom: (input: {
    examKey: string;
    variant: string;
    sections?: string[];
    types?: string[];
    difficultyMin?: number;
    difficultyMax?: number;
    count: number;
    minutes?: number;
    timed?: boolean;
  }) =>
    request<{ mockId: string; itemCount: number; attempt: { id: string; mode: string; timed: boolean } }>(
      "/api/exams/practice/custom",
      { method: "POST", body: JSON.stringify(input) },
    ),

  practiceMistakes: (input: { examKey?: string; variant?: string; limit?: number; timed?: boolean } = {}) =>
    request<{ mockId: string; itemCount: number; attempt: { id: string; mode: string; timed: boolean } }>(
      "/api/exams/practice/mistakes",
      { method: "POST", body: JSON.stringify(input) },
    ),

  // ----- PROMPT 51 practice modes: topic, weakness, diagnostic, adaptive -----

  practiceTopics: (examKey: string, variant: string) =>
    request<{
      topics: Array<{ skill: string; label: string; count: number; sections: string[] }>;
    }>(
      `/api/exams/practice/topic?exam=${encodeURIComponent(examKey)}&variant=${encodeURIComponent(variant)}`,
    ),

  practiceTopic: (input: { examKey: string; variant: string; topic: string; count?: number; timed?: boolean }) =>
    request<{ mockId: string; itemCount: number; attempt: { id: string; mode: string; timed: boolean } }>(
      "/api/exams/practice/topic",
      { method: "POST", body: JSON.stringify(input) },
    ),

  weaknessPreview: (examKey: string, variant: string) =>
    request<{
      profile: {
        evidenceItems: number;
        hasEnoughEvidence: boolean;
        skills: Array<{ skill: string; label: string; total: number; correct: number; accuracy: number }>;
        weakestSkills: Array<{ skill: string; label: string; total: number; correct: number; accuracy: number }>;
        weakestTasks: Array<{ type: string; label: string; total: number; correct: number; accuracy: number }>;
        weakestSections: Array<{ section: string; total: number; correct: number; accuracy: number }>;
      };
    }>(
      `/api/exams/practice/weakness?exam=${encodeURIComponent(examKey)}&variant=${encodeURIComponent(variant)}`,
    ),

  practiceWeakness: (input: { examKey: string; variant: string; count?: number }) =>
    request<{ mockId: string; itemCount: number; attempt: { id: string; mode: string; timed: boolean } }>(
      "/api/exams/practice/weakness",
      { method: "POST", body: JSON.stringify(input) },
    ),

  practiceDiagnostic: (input: { examKey: string; variant: string; perSection?: number }) =>
    request<{ mockId: string; itemCount: number; attempt: { id: string; mode: string; timed: boolean } }>(
      "/api/exams/practice/diagnostic",
      { method: "POST", body: JSON.stringify(input) },
    ),

  practiceAdaptive: (input: {
    examKey: string;
    variant: string;
    section?: string;
    count?: number;
    timed?: boolean;
    continueFromAttemptId?: string;
  }) =>
    request<{
      mockId: string;
      itemCount: number;
      attempt: { id: string; mode: string; timed: boolean };
      adaptiveNote: string;
    }>("/api/exams/practice/adaptive", {
      method: "POST",
      body: JSON.stringify(input),
    }),

  abandonAttempt: (attemptId: string) =>
    request<{ abandoned: true; savedResponses: number; note: string }>(
      `/api/exams/attempts/${encodeURIComponent(attemptId)}/abandon`,
      { method: "POST" },
    ),

  // ----- AI-assisted writing & speaking evaluation -----

  evaluate: (input: {
    attemptId?: string;
    questionId?: string;
    evaluatorKey?: string;
    taskPrompt?: string;
    text: string;
    transcriptSource?: "typed" | "browser-stt" | "server-stt" | "unknown";
    audioSec?: number;
  }) =>
    request<{ evaluation: StoredEvaluationDto }>("/api/exams/evaluate", {
      method: "POST",
      body: JSON.stringify(input),
    }),

  evaluations: (filter: { questionId?: string; attemptId?: string; evaluatorKey?: string }) =>
    request<{ evaluations: StoredEvaluationDto[] }>(
      `/api/exams/evaluations?${new URLSearchParams(
        Object.entries(filter).filter(([, value]) => Boolean(value)) as [string, string][],
      ).toString()}`,
    ),

  evaluationOverview: () =>
    request<EvaluationOverviewDto>("/api/exams/evaluations"),

  evaluationChain: (id: string) =>
    request<{ chain: StoredEvaluationDto[]; comparison: EvaluationComparisonDto | null }>(
      `/api/exams/evaluations/${encodeURIComponent(id)}`,
    ),

  reviseEvaluation: (
    id: string,
    input: { text: string; transcriptSource?: "typed" | "browser-stt" | "server-stt" | "unknown"; audioSec?: number },
  ) =>
    request<{ evaluation: StoredEvaluationDto; comparison: EvaluationComparisonDto }>(
      `/api/exams/evaluations/${encodeURIComponent(id)}/revise`,
      { method: "POST", body: JSON.stringify(input) },
    ),

  // ----- Personalized study planner -----

  planner: () => request<{ planner: PlannerStateDto }>("/api/exams/planner"),

  plannerGenerate: (input: {
    durationDays: number;
    startDate?: string;
    reminderTime?: string | null;
    reminderDays?: number[];
    strongestSection?: string | null;
    previousAttempts?: PreviousAttempt[];
  }) =>
    request<{ plan: PlannerPlanDto }>("/api/exams/planner/plan", {
      method: "POST",
      body: JSON.stringify(input),
    }),

  plannerArchive: () =>
    request<{ archived: boolean }>("/api/exams/planner/plan", {
      method: "DELETE",
    }),

  plannerTask: (taskId: string, status: PlannerTaskStatus) =>
    request<{ task: PlannerTaskDto }>("/api/exams/planner/task", {
      method: "POST",
      body: JSON.stringify({ taskId, status }),
    }),

  plannerAdapt: () =>
    request<{
      plan: PlannerPlanDto;
      changes: string[];
      noChangeReason: string | null;
      recommendedLessons: Array<{
        title: string;
        reason: string;
        href: string;
        minutes: number;
        section: string;
        previouslyRecommended: boolean;
      }>;
    }>("/api/exams/planner/adapt", { method: "POST" }),

  plannerReminder: (input: { reminderTime: string | null; reminderDays: number[] }) =>
    request<{ plan: PlannerPlanDto }>("/api/exams/planner/reminder", {
      method: "POST",
      body: JSON.stringify(input),
    }),

  // ----- Coach notifications (PROMPT 53) -----

  plannerNotifications: () =>
    request<{ notifications: PlannerNotificationsDto }>("/api/exams/planner/notifications"),

  plannerNotificationsSave: (prefs: NotificationPrefDto[]) =>
    request<{ notifications: PlannerNotificationsDto }>(
      "/api/exams/planner/notifications",
      {
        method: "PUT",
        body: JSON.stringify({ prefs }),
      },
    ),

  plannerNotificationsCollect: () =>
    request<{ collected: NotificationItemDto[] }>("/api/exams/planner/notifications", {
      method: "POST",
    }),

  // -----------------------------------------------------------------------
  // IELTS Listening Masterclass (PROMPT 44)
  // -----------------------------------------------------------------------

  listeningBank: () =>
    request<{
      exercises: Array<{
        slug: string;
        title: string;
        part: 1 | 2 | 3 | 4;
        difficulty: number;
        difficultyLabel: string;
        estimatedMinutes: number;
        accentLabels: string[];
        speakers: string[];
        questionTypes: string[];
        itemCount: number;
        source: string;
      }>;
    }>("/api/exams/listening/bank"),

  listeningExercise: (slug: string) =>
    request<{ exercise: SafeBankExercise }>(`/api/exams/listening/bank/${slug}`),

  listeningSubmit: (slug: string, body: {
    mode: "exam" | "practice";
    answers: Record<string, unknown>;
    timeSpentSec: number;
    perQuestionSec?: Record<string, number>;
  }) =>
    request<{
      attemptId: string;
      result: GradedExercise;
      transcript: { speakers: { id: string; name: string; role: string }[]; segments: { id: string; speakerId?: string; text: string }[]; note: string };
    }>(`/api/exams/listening/bank/${slug}/submit`, {
      method: "POST",
      body: JSON.stringify(body),
    }),

  listeningPerformance: () =>
    request<{ report: ListeningPerformanceReport }>("/api/exams/listening/performance"),

  // -----------------------------------------------------------------------
  // IELTS Reading Masterclass (PROMPT 45)
  // -----------------------------------------------------------------------

  readingBank: () =>
    request<{
      exercises: Array<{
        slug: string;
        title: string;
        variant: "academic" | "gt";
        section: number;
        subject: string;
        difficulty: number;
        difficultyLabel: string;
        estimatedMinutes: number;
        wordCount: number;
        objective: string;
        questionTypes: string[];
        itemCount: number;
        glossarySize: number;
        source: string;
      }>;
      simulations: Array<{
        slug: string;
        title: string;
        variant: "academic" | "gt";
        passageSlugs: string[];
        timeLimitSec: number;
        description: string;
        passages: number;
        questions: number;
      }>;
    }>("/api/exams/reading/bank"),

  readingExercise: (slug: string) =>
    request<{ exercise: SafeReadingExercise }>(`/api/exams/reading/bank/${slug}`),

  readingSubmit: (slug: string, body: {
    mode: "exam" | "practice";
    answers: Record<string, unknown>;
    timeSpentSec: number;
    perQuestionSec?: Record<string, number>;
    simRunId?: string;
    simSlug?: string;
    simPart?: number;
  }) =>
    request<{
      attemptId: string;
      result: GradedReadingExercise;
      glossary: ReadingGlossaryEntry[];
      exercise: SafeReadingExercise;
    }>(`/api/exams/reading/bank/${slug}/submit`, {
      method: "POST",
      body: JSON.stringify(body),
    }),

  readingPerformance: () =>
    request<{ report: ReadingPerformanceReport }>("/api/exams/reading/performance"),

  writingBank: () =>
    request<{
      tasks: Array<{
        slug: string;
        title: string;
        channel: "academic" | "gt";
        taskType: "task-1" | "task-2";
        family: string;
        register?: string;
        difficulty: number;
        difficultyLabel: string;
        estimatedMinutes: number;
        wordMinimum: number;
        timeLimitSec: number;
        hasVisual: boolean;
        hasLevelSamples: boolean;
        source: string;
      }>;
      stats: { total: number; academicTask1: number; academicTask2: number; gtTask1: number; gtTask2: number; withLevelSamples: number };
    }>("/api/exams/writing/bank"),

  writingTask: (slug: string) =>
    request<{ task: SafeWritingTask; draft: WritingDraftDto | null; attempts: WritingAttemptDto[] }>(`/api/exams/writing/bank/${slug}`),

  writingSaveDraft: (slug: string, content: string) =>
    request<{ draft: WritingDraftDto }>(`/api/exams/writing/bank/${slug}/draft`, {
      method: "POST",
      body: JSON.stringify({ content }),
    }),

  writingSubmit: (slug: string, body: { mode: "exam" | "practice"; content: string; timeSpentSec: number }) =>
    request<WritingSubmissionResult>(`/api/exams/writing/bank/${slug}/submit`, {
      method: "POST",
      body: JSON.stringify(body),
    }),

  writingPerformance: () =>
    request<{ report: WritingPerformanceReport }>("/api/exams/writing/performance"),

  // ---------------------------------------------------------------------------
  // PROMPT 47 — IELTS Speaking Masterclass
  // ---------------------------------------------------------------------------

  speakingBank: () =>
    request<{
      items: Array<{
        slug: string;
        title: string;
        kind: "part1" | "cue-card" | "practice-cue-card" | "part3";
        part: 1 | 2 | 3;
        family: string;
        difficulty: number;
        difficultyLabel: string;
        proficiency: string;
        skill: string;
        skillLabel: string;
        questionCount?: number;
        estimatedMinutes: number;
        source: string;
      }>;
      stats: {
        total: number;
        part1: number;
        part2Flagship: number;
        part2Practice: number;
        part3: number;
        topicsCovered: number;
        familiesCovered: number;
        byProficiency: Record<string, number>;
        bySkill: Record<string, number>;
      };
    }>("/api/exams/speaking/bank"),

  speakingItem: (slug: string) =>
    request<{
      item: SafeSpeakingItem;
      attempts: SpeakingAttemptDto[];
    }>(`/api/exams/speaking/bank/${slug}`),

  speakingSubmit: (
    slug: string,
    body: { mode: "simulation" | "practice"; answers: string[]; durationSec: number },
  ) =>
    request<SpeakingSubmissionResult>(`/api/exams/speaking/bank/${slug}/submit`, {
      method: "POST",
      body: JSON.stringify(body),
    }),

  speakingPerformance: () =>
    request<{ report: SpeakingPerformanceReport }>("/api/exams/speaking/performance"),

  speakingSimulation: (difficulty = 3) =>
    request<{
      bundle: { part1: SafeSpeakingItem; part2: SafeSpeakingItem; part3: SafeSpeakingItem };
      examiner: Record<"opening" | "part1Lead" | "part2Lead" | "part3Lead" | "closing", string>;
      attempts: { part1: SpeakingAttemptDto[]; part2: SpeakingAttemptDto[]; part3: SpeakingAttemptDto[] } | null;
      source: string;
    }>(`/api/exams/speaking/simulation?difficulty=${difficulty}`),

  readingReview: (attemptId: string) =>
    request<{
      attempt: {
        id: string;
        exerciseSlug: string;
        variant: string;
        section: number;
        mode: string;
        totalQuestions: number;
        correctCount: number;
        timeSpentSec: number;
        createdAt: string;
      };
      exercise: SafeReadingExercise;
      result: GradedReadingExercise;
      glossary: ReadingGlossaryEntry[];
    }>(`/api/exams/reading/review/${attemptId}`),
};
