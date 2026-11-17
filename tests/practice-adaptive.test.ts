/// <reference types="bun-types" />
import { describe, expect, it } from "bun:test";
import {
  assessDifficultyTrend,
  applyDifficultyPreference,
  dominantDifficulty,
  isDifficulty,
  DIFFICULTY_LADDER,
} from "@/lib/practice/trend";

function attempt(isCorrect: boolean, difficulty: string) {
  return { isCorrect, difficulty };
}

describe("assessDifficultyTrend (PROMPT 38 §7 — never one attempt)", () => {
  it("suggests nothing with zero attempts", () => {
    const result = assessDifficultyTrend([]);
    expect(result.suggestion).toBeNull();
    expect(result.recentAccuracy).toBeNull();
    expect(result.reason).toContain("No graded practice yet");
  });

  it("refuses to judge from fewer than five attempts — and says so", () => {
    const four = [1, 2, 3, 4].map(() => attempt(true, "medium"));
    const result = assessDifficultyTrend(four);
    expect(result.suggestion).toBeNull();
    expect(result.reason).toContain("too few to judge a level fairly");
    expect(result.reason).toContain("suggestion appears from five attempts");
  });

  it("maintains the band on steady mid accuracy (5–7 attempts)", () => {
    const six = [
      attempt(true, "medium"),
      attempt(true, "medium"),
      attempt(true, "medium"),
      attempt(false, "medium"),
      attempt(true, "medium"),
      attempt(true, "medium"),
    ]; // 83% — above the up threshold but below the up sample size
    const result = assessDifficultyTrend(six);
    expect(result.suggestion).toBe("medium");
    expect(result.reason).toContain("83% accuracy over 6 attempts at Medium");
    expect(result.reason).toContain("staying at this level");
  });

  it("steps up only with a real sample AND a non-worsening trend", () => {
    const strong = Array.from({ length: 10 }, () => attempt(true, "medium"));
    expect(assessDifficultyTrend(strong).suggestion).toBe("hard");

    // Strong overall (80%) but the recent half got worse (100% → 60%) → no
    // step up: the trend check refuses to promote a worsening learner.
    const worsening: { isCorrect: boolean; difficulty: string }[] = [];
    for (let i = 0; i < 10; i += 1) worsening.push(attempt(i < 8, "medium"));
    const result = assessDifficultyTrend(worsening);
    expect(result.suggestion).toBe("medium");
    expect(result.reason).toContain("staying at this level");
  });

  it("steps down below half accuracy", () => {
    const weak = Array.from({ length: 6 }, (_, i) => attempt(i < 2, "medium")); // 33%
    const result = assessDifficultyTrend(weak);
    expect(result.suggestion).toBe("easy");
    expect(result.reason).toContain("stepping down to Easy");
  });

  it("bases the suggestion on the band actually practised (dominant difficulty)", () => {
    const mixed = [
      ...Array.from({ length: 6 }, () => attempt(true, "hard")),
      attempt(false, "easy"),
      attempt(false, "easy"),
    ]; // 75% overall, dominant hard
    const result = assessDifficultyTrend(mixed);
    expect(result.suggestion).toBe("hard");
    expect(result.reason).toContain("at Hard");

    expect(dominantDifficulty([attempt(true, "easy"), attempt(true, "hard"), attempt(true, "hard")])).toBe("hard");
    expect(dominantDifficulty([])).toBeNull();
  });
});

describe("applyDifficultyPreference (preference, never a constraint)", () => {
  const pool = [
    { exercise: { difficulty: "easy" }, id: "q1" },
    { exercise: { difficulty: "easy" }, id: "q2" },
    { exercise: { difficulty: "medium" }, id: "q3" },
    { exercise: { difficulty: "hard" }, id: "q4" },
    { exercise: { difficulty: "hard" }, id: "q5" },
    { exercise: { difficulty: "hard" }, id: "q6" },
    { exercise: { difficulty: "hard" }, id: "q7" },
  ] as { exercise: { difficulty: string }; id: string }[];

  it("filters to the preferred bands when enough remain", () => {
    const hard = applyDifficultyPreference(pool, ["hard"]);
    expect(hard.map((q) => q.id)).toEqual(["q4", "q5", "q6", "q7"]);
  });

  it("falls back to the whole pool when the preference would starve the draw", () => {
    const challengeOnly = applyDifficultyPreference(pool, ["challenge"]);
    expect(challengeOnly).toHaveLength(7); // full pool, honestly
  });

  it("treats an empty preference as no preference", () => {
    expect(applyDifficultyPreference(pool, [])).toHaveLength(7);
  });
});

describe("difficulty ladder helpers", () => {
  it("validates difficulty names", () => {
    for (const name of DIFFICULTY_LADDER) expect(isDifficulty(name)).toBe(true);
    expect(isDifficulty("impossible")).toBe(false);
    expect(isDifficulty("EASY")).toBe(false);
  });
});
