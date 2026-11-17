import { vocabularyItems } from "./vocabulary";
import { grammarItems } from "./grammar";
import { readingItems } from "./reading";
import { listeningItems } from "./listening";
import { writingItems, speakingItems } from "./production";
import type { PlacementItem, PlacementSkill, PlacementTier } from "./types";

/**
 * The placement bank, assembled. Content-as-code, like the curriculum:
 * versioned in git, validated by tests (tests/placement-bank.test.ts),
 * and the single source of truth for both the adaptive engine and the
 * player UI (through the API, which strips answer keys).
 */

export const placementBank: PlacementItem[] = [
  ...vocabularyItems,
  ...grammarItems,
  ...readingItems,
  ...listeningItems,
  ...writingItems,
  ...speakingItems,
];

export function itemsForSkill(skill: PlacementSkill): PlacementItem[] {
  return placementBank.filter((i) => i.skill === skill);
}

/** Objective items of one skill+tier (the adaptive ladder samples these). */
export function objectiveItems(skill: PlacementSkill, tier: PlacementTier) {
  return placementBank.filter(
    (i) => i.skill === skill && i.tier === tier && !isProductionItem(i)
  );
}

export function writingPromptForTier(tier: PlacementTier) {
  return writingItems.find((w) => w.tier === tier) ?? writingItems[0];
}

export function speakingPromptForTier(tier: PlacementTier) {
  return speakingItems.find((s) => s.tier === tier) ?? speakingItems[0];
}

export function isProductionItem(item: PlacementItem): boolean {
  return item.skill === "writing" || item.skill === "speaking";
}

export function findItem(itemId: string): PlacementItem | undefined {
  return placementBank.find((i) => i.id === itemId);
}

export * from "./types";
