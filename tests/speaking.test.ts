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

  it("covers all 25 required activity kinds across the four bands", () => {
    const kinds = new Set(speakingActivities.map((a) => a.kind));
    for (const kind of REQUIRED_ACTIVITY_KINDS) {
      expect(kinds.has(kind)).toBe(true);
    }
    expect(speakingActivities).toHaveLength(25);

    const tiers = new Set(speakingActivities.map((a) => a.tier));
    expect([...tiers].sort()).toEqual([
      "advanced",
      "beginner",
      "elementary",
      "intermediate",
    ]);

    const perTier = {
      beginner: speakingActivities.filter((a) => a.tier === "beginner").length,
      elementary: speakingActivities.filter((a) => a.tier === "elementary").length,
      intermediate: speakingActivities.filter((a) => a.tier === "intermediate").length,
      advanced: speakingActivities.filter((a) => a.tier === "advanced").length,
    };
    expect(perTier.beginner).toBe(6);
    expect(perTier.elementary).toBe(5);
    expect(perTier.intermediate).toBe(7);
    expect(perTier.advanced).toBe(7);
  });

  it("maps the PROMPT 37 activity lists onto the four bands", () => {
    const kindsOf = (tier: string) =>
      new Set(speakingActivities.filter((a) => a.tier === tier).map((a) => a.kind));

    // BEGINNER: repeat words, repeat sentences, read aloud, introduce yourself,
    // describe family, discuss daily routines.
    for (const kind of [
      "repeat-word",
      "repeat-sentence",
      "read-aloud",
      "introduce-yourself",
      "talk-about-family",
      "daily-routine",
    ] as const) {
      expect(kindsOf("beginner").has(kind)).toBe(true);
    }
    // ELEMENTARY: describe objects, answer everyday questions, describe
    // experiences, talk about familiar places, role-play daily conversations.
    for (const kind of [
      "describe-object",
      "answer-questions",
      "describe-experiences",
      "familiar-places",
      "hold-conversation",
    ] as const) {
      expect(kindsOf("elementary").has(kind)).toBe(true);
    }
    // INTERMEDIATE: describe pictures, tell stories, express opinions,
    // explain experiences, discuss familiar topics.
    for (const kind of [
      "describe-picture",
      "tell-story",
      "express-opinions",
      "past-experiences",
      "discussion",
    ] as const) {
      expect(kindsOf("intermediate").has(kind)).toBe(true);
    }
    // ADVANCED: debate, interview simulations, presentations, negotiations,
    // spontaneous conversation.
    for (const kind of [
      "debate",
      "interview-simulation",
      "presentation",
      "negotiation",
      "impromptu",
    ] as const) {
      expect(kindsOf("advanced").has(kind)).toBe(true);
    }
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
