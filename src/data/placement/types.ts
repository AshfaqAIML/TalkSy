/**
 * Placement assessment — item types.
 *
 * The bank is authored content, versioned in code like the curriculum
 * (content-as-code). Answer keys never leave the server: the API strips
 * `answerIndex` / `modelAnswer` / `targetText` when serialising items to
 * the client.
 *
 * Structure: six skills × three difficulty tiers.
 *   Tier 1 — Pre-A1/A1 basics (letters, first words, present simple)
 *   Tier 2 — A1/A2 everyday English (past simple, common situations)
 *   Tier 3 — A2/B1 stretch (present perfect, inference, opinions)
 *
 * Objective items are MCQ (fast to answer, trivial to grade server-side);
 * writing and speaking are free production, self-assessed against a model
 * or rubric — consistent with the platform principle that production is
 * practice, never a fake quiz score.
 */

export type PlacementSkill =
  | "vocabulary"
  | "grammar"
  | "reading"
  | "listening"
  | "writing"
  | "speaking";

export type PlacementTier = 1 | 2 | 3;

/** The four outcome states every skill can end in. */
export type SkillLevel = "not_assessed" | "beginner" | "developing" | "competent";

export interface ObjectiveItem {
  id: string;
  skill: PlacementSkill;
  tier: PlacementTier;
  /** What the item tests, shown in results ("Word meaning", "Tenses"…). */
  subskill: string;
  /** Simple-English instruction shown above the question. */
  instruction: string;
  prompt: string;
  options: string[];
  answerIndex: number;
  explanation: string;
  /** Listening items: the text spoken aloud (never shown before answering). */
  audioText?: string;
  /** Reading items: the passage shown above the question. */
  passage?: { title: string; text: string };
}

export interface WritingItem {
  id: string;
  skill: "writing";
  tier: PlacementTier;
  prompt: string;
  /** Short, friendly guidance shown with the prompt. */
  guidance: string;
  /** Revealed after the learner writes, for self-assessment. */
  modelAnswer: string;
  /** The three self-assessment choices, easiest → strongest. */
  rubric: [string, string, string];
}

export interface SpeakingItem {
  id: string;
  skill: "speaking";
  tier: PlacementTier;
  /** The sentence the learner reads and says aloud. */
  targetText: string;
  /** Shown while the microphone choice is made. */
  intro: string;
}

export type PlacementItem = ObjectiveItem | WritingItem | SpeakingItem;

export function isObjective(item: PlacementItem): item is ObjectiveItem {
  return item.skill === "vocabulary" || item.skill === "grammar" ||
    item.skill === "reading" || item.skill === "listening";
}

export function isWriting(item: PlacementItem): item is WritingItem {
  return item.skill === "writing";
}

export function isSpeaking(item: PlacementItem): item is SpeakingItem {
  return item.skill === "speaking";
}

/** Skills with objective MCQ ladders (adaptive tiering applies to these). */
export const OBJECTIVE_SKILLS: PlacementSkill[] = ["vocabulary", "grammar", "reading", "listening"];

/** The order skills are assessed in. Writing/speaking come last, informed by earlier results. */
export const SKILL_ORDER: PlacementSkill[] = [
  "vocabulary",
  "grammar",
  "reading",
  "listening",
  "writing",
  "speaking",
];

export const SKILL_LABELS: Record<PlacementSkill, string> = {
  vocabulary: "Vocabulary",
  grammar: "Grammar",
  reading: "Reading",
  listening: "Listening",
  writing: "Writing",
  speaking: "Speaking",
};

export const SKILL_LEVEL_LABELS: Record<SkillLevel, string> = {
  not_assessed: "Not assessed",
  beginner: "Beginner",
  developing: "Developing",
  competent: "Demonstrated competence",
};
