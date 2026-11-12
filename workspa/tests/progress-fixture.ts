/**
 * Synthetic ProgressFacts builder for pure engine tests (no database).
 * Dates are fixed so scheduler/recommender output is deterministic.
 */

import type { ProgressFacts } from "@/data/progress";

const NOW = new Date("2026-06-15T12:00:00.000Z"); // a Monday

export const TEST_NOW = NOW;

type FactsOverrides = Partial<ProgressFacts>;

export function daysAgo(n: number): Date {
  return new Date(NOW.getTime() - n * 86_400_000);
}

export function makeFacts(overrides: FactsOverrides = {}): ProgressFacts {
  const base: ProgressFacts = {
    userId: "test-user",
    now: NOW,
    lessons: [],
    lessonsCompletedCount: 0,
    exerciseAttempts: [],
    assessmentsPassed: [],
    assessmentResults: [],
    vocabWords: [],
    vocabGradedReviews: [],
    vocabSentences: [],
    vocabChallenges: [],
    clinicSentences: [],
    readingProgress: [],
    readingRunsPassed: [],
    readingAttempts: [],
    listeningProgress: [],
    listeningAttempts: [],
    speakingProgress: [],
    speakingAttempts: [],
    conversationsCompleted: [],
    pronunciationAttempts: [],
    writingProgress: [],
    writingSubmissions: [],
    sentenceConstructions: [],
    goals: { dailyPoints: 30, weeklyPoints: 150 },
    confidence: {},
    events: [],
    pointsTotal: 0,
    pointsToday: 0,
    pointsThisWeek: 0,
    pointsByDay: {},
    dailyActivity: [],
    weekly: [],
    streak: { current: 0, longest: 0, activeDays: 0, lastActiveDay: null },
  };
  return { ...base, ...overrides };
}
