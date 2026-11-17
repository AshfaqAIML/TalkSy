import { describe, test, expect } from "bun:test";
import { computeStreak, isActivityDay, todayKey, XP_PER_CORRECT_EXERCISE, XP_LESSON_BONUS } from "../src/lib/progress";

function day(offset: number): string {
  const d = new Date();
  d.setUTCDate(d.getUTCDate() - offset);
  return d.toISOString().slice(0, 10);
}

function activity(offset: number, lessons = 1, exercises = 0) {
  return { date: day(offset), lessonsCompleted: lessons, exercisesCompleted: exercises };
}

describe("isActivityDay", () => {
  test("a day with at least one completed lesson counts", () => {
    expect(isActivityDay({ lessonsCompleted: 1, exercisesCompleted: 0 })).toBe(true);
  });

  test("a day with 3+ completed exercises counts", () => {
    expect(isActivityDay({ lessonsCompleted: 0, exercisesCompleted: 3 })).toBe(true);
    expect(isActivityDay({ lessonsCompleted: 0, exercisesCompleted: 5 })).toBe(true);
  });

  test("a day with fewer than 3 exercises and no lessons does not count", () => {
    expect(isActivityDay({ lessonsCompleted: 0, exercisesCompleted: 0 })).toBe(false);
    expect(isActivityDay({ lessonsCompleted: 0, exercisesCompleted: 2 })).toBe(false);
  });
});

describe("computeStreak", () => {
  test("empty activity gives a zero streak", () => {
    const result = computeStreak([]);
    expect(result.current).toBe(0);
    expect(result.activeToday).toBe(false);
  });

  test("consecutive days including today count", () => {
    const result = computeStreak([activity(0), activity(1), activity(2)]);
    expect(result.current).toBe(3);
    expect(result.activeToday).toBe(true);
  });

  test("yesterday's activity keeps the streak alive but not active today", () => {
    const result = computeStreak([activity(1), activity(2)]);
    expect(result.current).toBe(2);
    expect(result.activeToday).toBe(false);
  });

  test("a gap breaks the streak", () => {
    const result = computeStreak([activity(0), activity(2), activity(3)]);
    // today is active, yesterday was not → streak = 1
    expect(result.current).toBe(1);
  });

  test("weak days (only 2 exercises) do not extend the streak", () => {
    const result = computeStreak([
      activity(0),
      { date: day(1), lessonsCompleted: 0, exercisesCompleted: 2 },
      activity(2),
    ]);
    expect(result.current).toBe(1);
  });

  test("today's XP alone (no lesson, <3 exercises) is not a streak day", () => {
    const result = computeStreak([
      { date: day(0), lessonsCompleted: 0, exercisesCompleted: 2 },
      activity(1),
    ]);
    expect(result.current).toBe(1); // yesterday only
    expect(result.activeToday).toBe(false);
  });
});

describe("xp constants", () => {
  test("XP rules are the documented values", () => {
    expect(XP_PER_CORRECT_EXERCISE).toBe(10);
    expect(XP_LESSON_BONUS).toBe(20);
  });
});

describe("todayKey", () => {
  test("returns an ISO date string (YYYY-MM-DD)", () => {
    expect(todayKey()).toMatch(/^\d{4}-\d{2}-\d{2}$/);
  });
});
