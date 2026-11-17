import { describe, test, expect } from "bun:test";
import {
  initialSrsState,
  scheduleReview,
  isMastered,
  vocabItemKey,
  MIN_EASE,
  MAX_EASE,
} from "../src/server/core/srs";

/**
 * SM-2-lite revision scheduling tests.
 * Properties: growing intervals on success, reset on lapse, ease bounds,
 * mastery heuristic, stable item keys.
 */

describe("srs — initial state", () => {
  test("fresh item is due in 1 day with default ease", () => {
    const state = initialSrsState();
    expect(state.intervalDays).toBe(1);
    expect(state.easeFactor).toBe(2.5);
    expect(state.repetitions).toBe(0);
    expect(state.lapses).toBe(0);
  });

  test("vocab item keys are namespaced and stable", () => {
    expect(vocabItemKey("p1-1-1-w1")).toBe("vocab:p1-1-1-w1");
  });
});

describe("srs — successful reviews", () => {
  test("first success: interval 1 day, repetition counted", () => {
    const next = scheduleReview(initialSrsState(), true);
    expect(next.repetitions).toBe(1);
    expect(next.intervalDays).toBe(1);
    expect(next.dueAt.getTime()).toBeGreaterThan(Date.now());
  });

  test("second success: interval 3 days (SM-2 schedule)", () => {
    const next = scheduleReview({ intervalDays: 1, easeFactor: 2.5, repetitions: 1, lapses: 0 }, true);
    expect(next.repetitions).toBe(2);
    expect(next.intervalDays).toBe(3);
  });

  test("third success: interval grows by ease factor", () => {
    const next = scheduleReview({ intervalDays: 3, easeFactor: 2.55, repetitions: 2, lapses: 0 }, true);
    expect(next.repetitions).toBe(3);
    expect(next.intervalDays).toBeGreaterThanOrEqual(7); // 3 * 2.55 ≈ 7.65
  });

  test("ease grows slowly and is capped", () => {
    let state = initialSrsState();
    for (let i = 0; i < 50; i += 1) state = scheduleReview(state, true);
    expect(state.easeFactor).toBeLessThanOrEqual(MAX_EASE);
    expect(state.intervalDays).toBeGreaterThan(100);
  });

  test("intervals are monotonically increasing across a success streak", () => {
    let state = initialSrsState();
    let last = 0;
    for (let i = 0; i < 8; i += 1) {
      state = scheduleReview(state, true);
      expect(state.intervalDays).toBeGreaterThan(last);
      last = state.intervalDays;
    }
  });
});

describe("srs — lapses", () => {
  test("failure resets repetitions and interval, counts a lapse", () => {
    const next = scheduleReview({ intervalDays: 30, easeFactor: 2.6, repetitions: 4, lapses: 0 }, false);
    expect(next.repetitions).toBe(0);
    expect(next.intervalDays).toBe(1);
    expect(next.lapses).toBe(1);
  });

  test("ease drops on failure but never below the floor", () => {
    let state = { intervalDays: 30, easeFactor: 2.6, repetitions: 4, lapses: 0 };
    for (let i = 0; i < 20; i += 1) state = scheduleReview(state, false);
    expect(state.easeFactor).toBe(MIN_EASE);
  });

  test("recovery after a lapse follows the standard ladder again", () => {
    const lapsed = scheduleReview({ intervalDays: 30, easeFactor: 2.6, repetitions: 4, lapses: 0 }, false);
    const recovering = scheduleReview(lapsed, true);
    expect(recovering.repetitions).toBe(1);
    expect(recovering.intervalDays).toBe(1);
  });
});

describe("srs — mastery heuristic", () => {
  test("four consecutive successes with a long interval is mastered", () => {
    expect(isMastered({ intervalDays: 21, easeFactor: 2.6, repetitions: 4, lapses: 1 })).toBe(true);
  });

  test("fewer repetitions or a short interval is not mastered", () => {
    expect(isMastered({ intervalDays: 21, easeFactor: 2.6, repetitions: 3, lapses: 0 })).toBe(false);
    expect(isMastered({ intervalDays: 7, easeFactor: 2.6, repetitions: 4, lapses: 0 })).toBe(false);
  });
});
