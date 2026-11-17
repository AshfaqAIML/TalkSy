/**
 * IELTS Speaking Masterclass — practice bank index (PROMPT 47, Parts 6–8;
 * expanded by PROMPT 54 to one hundred and fifty items).
 *
 * One hundred and fifty original items across the three speaking parts:
 *
 *   Part 1  (38) — one flagship interview round per taught topic plus a
 *                  second unseen round on every topic (PROMPT 54), five
 *                  examiner questions each with guidance, model answers
 *                  and weak-versus-improved pairs
 *   Part 2  (72) — eleven flagship cue cards, one per description family,
 *                  each carrying the full seven-element teaching payload,
 *                  plus sixty-one practice cue cards for unseen
 *                  simulation rounds (prompt, vocabulary hints,
 *                  rounding-off questions — no model: independent
 *                  practice)
 *   Part 3  (40) — progressively difficult discussion sets: four questions
 *                  each, escalating from accessible to abstract to
 *                  speculative
 *
 * Every item is organised by speaking part, topic or family, difficulty,
 * proficiency, skill and (since PROMPT 54) the unified question-bank
 * topic domain. Teaching content — models, guidance, analyses,
 * requirement keyword sets — never leaves the server before submission;
 * the practice library and simulator serve safe projections only.
 */

import { speakingBankPart1SetsA } from "./part1-a";
import { speakingBankPart1SetsB } from "./part1-b";
import { speakingBankCueCardsA } from "./cue-cards-a";
import { speakingBankCueCardsB } from "./cue-cards-b";
import { speakingBankPracticeCueCards } from "./cue-cards-practice";
import { speakingBankPart3Sets } from "./part3-sets";
import { part1SecondSets } from "./part1-seconds";
import { practiceCardsB } from "./practice-cards-b";
import { practiceCardsC } from "./practice-cards-c";
import { part3MoreSetsA } from "./part3-more-a";
import { part3MoreSetsB } from "./part3-more-b";
import type { SpeakingBankItem } from "./types";
import {
  SPEAKING_PART1_TOPICS,
  SPEAKING_CUE_FAMILIES,
} from "./types";

export const SPEAKING_PART1_SETS = [...speakingBankPart1SetsA, ...speakingBankPart1SetsB, ...part1SecondSets];
export const SPEAKING_CUE_CARDS = [...speakingBankCueCardsA, ...speakingBankCueCardsB];
export const SPEAKING_PRACTICE_CUE_CARDS = [...speakingBankPracticeCueCards, ...practiceCardsB, ...practiceCardsC];
export const SPEAKING_PART3_SETS = [...speakingBankPart3Sets, ...part3MoreSetsA, ...part3MoreSetsB];

export const SPEAKING_BANK: SpeakingBankItem[] = [
  ...SPEAKING_PART1_SETS,
  ...SPEAKING_CUE_CARDS,
  ...SPEAKING_PRACTICE_CUE_CARDS,
  ...SPEAKING_PART3_SETS,
];

export function speakingItemBySlug(slug: string): SpeakingBankItem | undefined {
  return SPEAKING_BANK.find((i) => i.slug === slug);
}

/** Simulation bundle: one Part 1 round + one cue card (practice layer) + one
 * Part 3 set, matched so the three parts tell one coherent session. */
export function buildSimulationBundle(preferredDifficulty = 3): {
  part1: string;
  part2: string;
  part3: string;
} {
  const diff = (d: number) => Math.abs(d - preferredDifficulty);
  const part1 = [...SPEAKING_PART1_SETS].sort((a, b) => diff(a.difficulty) - diff(b.difficulty))[0];
  const cue = [...SPEAKING_PRACTICE_CUE_CARDS, ...SPEAKING_CUE_CARDS].sort(
    (a, b) => diff(a.difficulty) - diff(b.difficulty),
  )[0];
  const part3 = [...SPEAKING_PART3_SETS].sort((a, b) => diff(a.difficulty) - diff(b.difficulty))[0];
  return { part1: part1.slug, part2: cue.slug, part3: part3.slug };
}

export function speakingBankStats(): {
  total: number;
  part1: number;
  part2Flagship: number;
  part2Practice: number;
  part3: number;
  topicsCovered: number;
  familiesCovered: number;
  byProficiency: Record<string, number>;
  bySkill: Record<string, number>;
} {
  const byProficiency: Record<string, number> = {};
  const bySkill: Record<string, number> = {};
  for (const item of SPEAKING_BANK) {
    byProficiency[item.proficiency] = (byProficiency[item.proficiency] ?? 0) + 1;
    bySkill[item.skill] = (bySkill[item.skill] ?? 0) + 1;
  }
  return {
    total: SPEAKING_BANK.length,
    part1: SPEAKING_PART1_SETS.length,
    part2Flagship: SPEAKING_CUE_CARDS.length,
    part2Practice: SPEAKING_PRACTICE_CUE_CARDS.length,
    part3: SPEAKING_PART3_SETS.length,
    topicsCovered: new Set(SPEAKING_PART1_SETS.map((s) => s.topic)).size,
    familiesCovered: new Set([...SPEAKING_CUE_CARDS, ...SPEAKING_PRACTICE_CUE_CARDS].map((c) => c.family)).size,
    byProficiency,
    bySkill,
  };
}

// Contract helpers used by the validator and tests -------------------------

export function speakingTopicCoverage(): { missingTopics: string[]; duplicateTopics: string[] } {
  // PROMPT 54: every taught topic may carry its flagship round plus one
  // second interview round — a topic appearing three or more times breaks
  // the bank's variety contract.
  const counts = new Map<string, number>();
  for (const set of SPEAKING_PART1_SETS) {
    counts.set(set.topic, (counts.get(set.topic) ?? 0) + 1);
  }
  return {
    missingTopics: SPEAKING_PART1_TOPICS.filter((t) => !counts.has(t)),
    duplicateTopics: [...counts.entries()].filter(([, n]) => n > 2).map(([t]) => t),
  };
}

export function speakingFamilyCoverage(): {
  missingFlagship: string[];
  missingPractice: string[];
  duplicateFlagship: string[];
} {
  const flagship = new Set<string>();
  const duplicates: string[] = [];
  for (const card of SPEAKING_CUE_CARDS) {
    if (flagship.has(card.family)) duplicates.push(card.family);
    flagship.add(card.family);
  }
  const practice = new Set(SPEAKING_PRACTICE_CUE_CARDS.map((c) => c.family));
  return {
    missingFlagship: SPEAKING_CUE_FAMILIES.filter((f) => !flagship.has(f)),
    missingPractice: SPEAKING_CUE_FAMILIES.filter((f) => !practice.has(f)),
    duplicateFlagship: duplicates,
  };
}

export * from "./types";
export { validateSpeakingItem, type SpeakingBankIssue } from "./validate";
import { validateSpeakingBank as validateBank } from "./validate";

export function validateSpeakingBank() {
  return validateBank(SPEAKING_PART1_SETS, SPEAKING_CUE_CARDS, SPEAKING_PRACTICE_CUE_CARDS, SPEAKING_PART3_SETS);
}
