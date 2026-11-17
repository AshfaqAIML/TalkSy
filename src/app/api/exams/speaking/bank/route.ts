import { json } from "@/lib/api-helpers";
import { SPEAKING_BANK, speakingBankStats } from "@/data/exams/ielts/speaking-bank";
import {
  SPEAKING_DIFFICULTY_LABELS,
  SPEAKING_SKILL_LABELS,
  speakingItemPart,
  type SpeakingBankItem,
  type SpeakingPart1Set,
  type SpeakingPart3Set,
  type SpeakingCueCard,
} from "@/data/exams/ielts/speaking-bank/types";

function familyKey(item: SpeakingBankItem): string {
  if (item.kind === "part1") return (item as SpeakingPart1Set).topic;
  if (item.kind === "part3") return (item as SpeakingPart3Set).theme;
  return (item as SpeakingCueCard).family;
}

/**
 * GET /api/exams/speaking/bank — the public practice-library index (PROMPT 47,
 * Part 8): every item's card metadata organised by part, topic, difficulty,
 * proficiency and skill. Model answers, guidance, analyses, requirement
 * keyword sets and vocabulary banks never travel in this payload.
 */
export async function GET(_req: Request) {
  return json({
    items: SPEAKING_BANK.map((item) => ({
      slug: item.slug,
      title: item.title,
      kind: item.kind,
      part: speakingItemPart(item),
      family: familyKey(item),
      difficulty: item.difficulty,
      difficultyLabel: SPEAKING_DIFFICULTY_LABELS[item.difficulty],
      proficiency: item.proficiency,
      skill: item.skill,
      skillLabel: SPEAKING_SKILL_LABELS[item.skill],
      questionCount: item.kind === "part1" || item.kind === "part3" ? item.questions.length : undefined,
      estimatedMinutes:
        item.kind === "part1" ? 5 : item.kind === "part3" ? 6 : 4,
      source: item.source,
    })),
    stats: speakingBankStats(),
  });
}
