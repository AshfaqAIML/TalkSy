/**
 * Speaking Laboratory registry + integrity rules.
 *
 * Every export here is pure data lookup — the API routes and tests rely on
 * these invariants, so validateSpeakingContent() re-checks them at test time.
 */

import { beginnerSpeakingActivities } from "./activities-beginner";
import { intermediateSpeakingActivities } from "./activities-intermediate";
import { advancedSpeakingActivities } from "./activities-advanced";
import { conversationScenarios, REQUIRED_SCENARIO_SLUGS } from "./scenarios";
import { pronunciationItems } from "./pronunciation";
import type {
  ConversationLevel,
  ConversationScenario,
  PronunciationCategory,
  PronunciationItem,
  SafeSpeakingActivity,
  SpeakingActivity,
  SpeakingTask,
  SpeakingTaskKind,
  SpeakingTier,
  SttProviderSetting,
} from "./types";

export const speakingActivities: SpeakingActivity[] = [
  ...beginnerSpeakingActivities,
  ...intermediateSpeakingActivities,
  ...advancedSpeakingActivities,
];

export const speakingActivitySlugs = new Set(speakingActivities.map((a) => a.slug));
export const speakingActivityIds = new Set(speakingActivities.map((a) => a.id));

export function getSpeakingActivity(slug: string): SpeakingActivity | null {
  return speakingActivities.find((a) => a.slug === slug) ?? null;
}

export function getSpeakingTask(
  activity: SpeakingActivity,
  taskId: string,
): SpeakingTask | null {
  return activity.tasks.find((t) => t.id === taskId) ?? null;
}

// ---------------------------------------------------------------------------
// Client-safe sanitisation (model answers + grading keywords stripped)
// ---------------------------------------------------------------------------

export function toSafeSpeakingActivity(activity: SpeakingActivity): SafeSpeakingActivity {
  return {
    ...activity,
    tasks: activity.tasks.map((task) => {
      if (task.type === "match") return task;
      // Strip the model answer + grading keywords; keep the guidance.
      const {
        modelAnswer: _modelAnswer,
        modelAnswerTranslation: _modelAnswerTranslation,
        checklist,
        ...rest
      } = task;
      return {
        ...rest,
        checklist: checklist.map(({ id, label }) => ({ id, label })),
      };
    }),
  };
}

// ---------------------------------------------------------------------------
// Scenarios
// ---------------------------------------------------------------------------

export const scenarioSlugs = new Set(conversationScenarios.map((s) => s.slug));

/** Look up a scenario by slug OR by id (sessions store the id). */
export function getConversationScenario(slugOrId: string): ConversationScenario | null {
  return (
    conversationScenarios.find((s) => s.slug === slugOrId || s.id === slugOrId) ?? null
  );
}

export function getScenarioLevelSpec(
  scenario: ConversationScenario,
  level: ConversationLevel,
) {
  return scenario.levels.find((spec) => spec.level === level) ?? scenario.levels[0];
}

// ---------------------------------------------------------------------------
// Pronunciation
// ---------------------------------------------------------------------------

export const pronunciationItemIds = new Set(pronunciationItems.map((i) => i.id));

export const PRONUNCIATION_CATEGORIES: PronunciationCategory[] = [
  "stress",
  "sounds",
  "rhythm",
  "intonation",
];

export function getPronunciationItem(itemId: string): PronunciationItem | null {
  return pronunciationItems.find((i) => i.id === itemId) ?? null;
}

export function pronunciationByCategory(category: PronunciationCategory): PronunciationItem[] {
  return pronunciationItems.filter((i) => i.category === category);
}

// ---------------------------------------------------------------------------
// Providers
// ---------------------------------------------------------------------------

export const STT_PROVIDERS: SttProviderSetting[] = ["auto", "server", "browser", "manual"];

export function normalizeProvider(value: string): SttProviderSetting {
  return STT_PROVIDERS.includes(value as SttProviderSetting)
    ? (value as SttProviderSetting)
    : "auto";
}

// ---------------------------------------------------------------------------
// Integrity rules (re-asserted by tests)
// ---------------------------------------------------------------------------

export const REQUIRED_ACTIVITY_KINDS: SpeakingTaskKind[] = [
  "repeat-word",
  "repeat-sentence",
  "read-aloud",
  "introduce-yourself",
  "answer-questions",
  "describe-object",
  "talk-about-family",
  "daily-routine",
  "describe-picture",
  "past-experiences",
  "explain-preferences",
  "tell-story",
  "hold-conversation",
  "give-directions",
  "express-opinions",
  "discussion",
  "debate",
  "interview-simulation",
  "presentation",
  "impromptu",
  "storytelling",
  "professional-communication",
];

export interface IntegrityIssue {
  scope: string;
  message: string;
}

export function validateSpeakingContent(): IntegrityIssue[] {
  const issues: IntegrityIssue[] = [];

  // Activities: ids, slugs, tiers and all 22 required kinds.
  const seenSlugs = new Set<string>();
  const seenIds = new Set<string>();
  const seenKinds = new Set<SpeakingTaskKind>();
  for (const activity of speakingActivities) {
    if (seenSlugs.has(activity.slug)) {
      issues.push({ scope: "activities", message: `Duplicate slug ${activity.slug}` });
    }
    if (seenIds.has(activity.id)) {
      issues.push({ scope: "activities", message: `Duplicate id ${activity.id}` });
    }
    seenSlugs.add(activity.slug);
    seenIds.add(activity.id);
    seenKinds.add(activity.kind);

    if (activity.tasks.length === 0) {
      issues.push({ scope: "activities", message: `${activity.slug} has no tasks` });
    }
    const taskIds = new Set<string>();
    for (const task of activity.tasks) {
      if (taskIds.has(task.id)) {
        issues.push({
          scope: "activities",
          message: `${activity.slug} has duplicate task id ${task.id}`,
        });
      }
      taskIds.add(task.id);
      if (task.type === "match" && task.targetText.trim().length === 0) {
        issues.push({
          scope: "activities",
          message: `${activity.slug}/${task.id} match task has empty target`,
        });
      }
      if (task.type === "open") {
        if (task.checklist.length === 0) {
          issues.push({
            scope: "activities",
            message: `${activity.slug}/${task.id} open task has no checklist`,
          });
        }
        if (task.modelAnswer.trim().length === 0) {
          issues.push({
            scope: "activities",
            message: `${activity.slug}/${task.id} open task has no model answer`,
          });
        }
        if (task.minWords <= 0) {
          issues.push({
            scope: "activities",
            message: `${activity.slug}/${task.id} open task minWords must be positive`,
          });
        }
        for (const point of task.checklist) {
          if (point.anyOf.length === 0) {
            issues.push({
              scope: "activities",
              message: `${activity.slug}/${task.id} checklist point ${point.id} has no keywords`,
            });
          }
        }
      }
      if (task.maxSeconds <= 0 || task.targetSeconds <= 0) {
        issues.push({
          scope: "activities",
          message: `${activity.slug}/${task.id} has invalid second limits`,
        });
      }
    }
  }
  for (const kind of REQUIRED_ACTIVITY_KINDS) {
    if (!seenKinds.has(kind)) {
      issues.push({ scope: "activities", message: `Missing required activity kind ${kind}` });
    }
  }

  // Scenarios: 11 required, unique ids/slugs, three levels each.
  const scenarioSlugsSeen = new Set<string>();
  for (const scenario of conversationScenarios) {
    if (scenarioSlugsSeen.has(scenario.slug)) {
      issues.push({ scope: "scenarios", message: `Duplicate slug ${scenario.slug}` });
    }
    scenarioSlugsSeen.add(scenario.slug);
    if (scenario.levels.length !== 3) {
      issues.push({
        scope: "scenarios",
        message: `${scenario.slug} must have exactly three level variants`,
      });
    }
    const levels = new Set(scenario.levels.map((l) => l.level));
    if (
      scenario.levels.length === 3 &&
      (!levels.has("beginner") || !levels.has("intermediate") || !levels.has("advanced"))
    ) {
      issues.push({
        scope: "scenarios",
        message: `${scenario.slug} levels must cover beginner/intermediate/advanced`,
      });
    }
    for (const spec of scenario.levels) {
      if (!spec.opening.trim()) {
        issues.push({
          scope: "scenarios",
          message: `${scenario.slug}/${spec.level} has no opening line`,
        });
      }
      if (spec.fallbackTurns.length < 4) {
        issues.push({
          scope: "scenarios",
          message: `${scenario.slug}/${spec.level} needs at least 4 fallback turns`,
        });
      }
      if (spec.acknowledgments.length === 0) {
        issues.push({
          scope: "scenarios",
          message: `${scenario.slug}/${spec.level} needs acknowledgments`,
        });
      }
      if (spec.turnsTarget < 4) {
        issues.push({
          scope: "scenarios",
          message: `${scenario.slug}/${spec.level} turnsTarget must be at least 4`,
        });
      }
    }
    if (scenario.goalKeywords.length === 0) {
      issues.push({
        scope: "scenarios",
        message: `${scenario.slug} has no goal keywords`,
      });
    }
  }
  for (const slug of REQUIRED_SCENARIO_SLUGS) {
    if (!scenarioSlugsSeen.has(slug)) {
      issues.push({ scope: "scenarios", message: `Missing required scenario ${slug}` });
    }
  }

  // Pronunciation: unique ids, all four categories covered, targets present.
  const pronIds = new Set<string>();
  const pronCategories = new Set<string>();
  for (const item of pronunciationItems) {
    if (pronIds.has(item.id)) {
      issues.push({ scope: "pronunciation", message: `Duplicate id ${item.id}` });
    }
    pronIds.add(item.id);
    pronCategories.add(item.category);
    if (!item.targetText.trim()) {
      issues.push({
        scope: "pronunciation",
        message: `${item.id} has no target text`,
      });
    }
  }
  for (const category of PRONUNCIATION_CATEGORIES) {
    if (!pronCategories.has(category)) {
      issues.push({
        scope: "pronunciation",
        message: `Missing category ${category}`,
      });
    }
  }

  return issues;
}

export { pronunciationItems } from "./pronunciation";
export { conversationScenarios, REQUIRED_SCENARIO_SLUGS } from "./scenarios";
