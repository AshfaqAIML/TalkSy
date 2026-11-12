/// <reference types="bun-types" />
import { describe, expect, it } from "bun:test";
import {
  speakingActivities,
  conversationScenarios,
  pronunciationItems,
  validateSpeakingContent,
  getSpeakingActivity,
  toSafeSpeakingActivity,
  REQUIRED_ACTIVITY_KINDS,
} from "@/data/speaking";
import { REQUIRED_SCENARIO_SLUGS } from "@/data/speaking/scenarios";
import type { OpenSpeakingTask } from "@/data/speaking/types";

describe("speaking content integrity", () => {
  it("passes every integrity rule", () => {
    expect(validateSpeakingContent()).toEqual([]);
  });

  it("covers all 22 required activity kinds across the three tiers", () => {
    const kinds = new Set(speakingActivities.map((a) => a.kind));
    for (const kind of REQUIRED_ACTIVITY_KINDS) {
      expect(kinds.has(kind)).toBe(true);
    }
    expect(speakingActivities).toHaveLength(22);

    const tiers = new Set(speakingActivities.map((a) => a.tier));
    expect([...tiers].sort()).toEqual(["advanced", "beginner", "intermediate"]);

    const perTier = {
      beginner: speakingActivities.filter((a) => a.tier === "beginner").length,
      intermediate: speakingActivities.filter((a) => a.tier === "intermediate").length,
      advanced: speakingActivities.filter((a) => a.tier === "advanced").length,
    };
    expect(perTier.beginner).toBe(8);
    expect(perTier.intermediate).toBe(7);
    expect(perTier.advanced).toBe(7);
  });

  it("sanitises activities: no model answers or grading keywords reach the client", () => {
    for (const activity of speakingActivities) {
      const safe = toSafeSpeakingActivity(activity);
      for (const task of safe.tasks) {
        expect("modelAnswer" in task).toBe(false);
        if (task.type === "open") {
          for (const point of task.checklist) {
            expect("anyOf" in point).toBe(false);
          }
        }
      }
    }
  });

  it("keeps authoring data complete for grading", () => {
    for (const activity of speakingActivities) {
      for (const task of activity.tasks) {
        if (task.type === "open") {
          const open = task as OpenSpeakingTask;
          expect(open.checklist.length).toBeGreaterThan(0);
          expect(open.modelAnswer.length).toBeGreaterThan(0);
          expect(open.topicKeywords.length).toBeGreaterThan(0);
          expect(open.minWords).toBeGreaterThan(0);
        }
      }
    }
  });

  it("looks activities up by slug", () => {
    expect(getSpeakingActivity("daily-routine")?.kind).toBe("daily-routine");
    expect(getSpeakingActivity("nope")).toBeNull();
  });

  it("ships all eleven required conversation scenarios with three difficulty levels each", () => {
    const slugs = new Set(conversationScenarios.map((s) => s.slug));
    for (const slug of REQUIRED_SCENARIO_SLUGS) {
      expect(slugs.has(slug)).toBe(true);
    }
    expect(conversationScenarios).toHaveLength(11);
    for (const scenario of conversationScenarios) {
      const levels = scenario.levels.map((l) => l.level);
      expect(levels.sort()).toEqual(["advanced", "beginner", "intermediate"]);
      for (const spec of scenario.levels) {
        expect(spec.fallbackTurns.length).toBeGreaterThanOrEqual(4);
        expect(spec.suggestedPhrases.length).toBeGreaterThan(0);
        expect(spec.opening.length).toBeGreaterThan(0);
      }
    }
  });

  it("covers the four pronunciation categories with targets to say", () => {
    const categories = new Set(pronunciationItems.map((i) => i.category));
    expect([...categories].sort()).toEqual(["intonation", "rhythm", "sounds", "stress"]);
    expect(pronunciationItems.length).toBeGreaterThanOrEqual(24);
    for (const item of pronunciationItems) {
      expect(item.targetText.trim().length).toBeGreaterThan(0);
      expect(item.visualCue.trim().length).toBeGreaterThan(0);
    }
  });
});
