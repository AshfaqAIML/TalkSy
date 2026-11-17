/**
 * IELTS Writing Masterclass — the task bank index (PROMPT 46, Part E;
 * expanded by PROMPT 54 to one hundred tasks).
 *
 * One hundred original tasks across the four separated channels:
 *
 *   Academic Task 1 (28)  — the eight PROMPT 46 flagship visual tasks plus
 *                          twenty practice-tier tasks (batches C–D)
 *   Academic Task 2 (25)  — one flagship per taught essay family plus
 *                          eighteen practice-tier essays (batches C–D)
 *   General Training Task 1 (26) — all six letter purposes across all
 *                          three registers, flagship plus twenty practice
 *   General Training Task 2 (21) — everyday essays from every family,
 *                          flagship plus seventeen practice
 *
 * Flagship tasks carry the full teaching payload (planning notes, model
 * answer, the eight-element analysis, level samples at different
 * proficiency levels with per-criterion justifications, a vocabulary
 * bank). PROMPT 54 practice-tier tasks carry the same model answer,
 * requirements and compact analysis but no level ladder — all revealed
 * only after submission. Nothing here is official IELTS examination
 * content.
 */

import { at1BarCycling, at1LineEnergy, at1PieSpending, at1TableCities, at1BarRecycling } from "./academic-t1-a";
import { at1MixedTourism, at1ProcessCider, at1MapHarbour } from "./academic-t1-b";
import { at2OpinionMuseums, at2DiscussionRemoteStudy, at2AdvantagesGigWork, at2ProblemSolutionFastFashion } from "./academic-t2-a";
import { at2CauseEffectSleep, at2TwoPartUrbanFarming, at2DirectQuestionsHeritage } from "./academic-t2-b";
import { gt1ComplaintHotel, gt1RequestCouncil, gt1ExplanationLandlord } from "./gt-t1-a";
import { gt1SuggestionCentre, gt1InvitationFriend, gt1ApologyNeighbour } from "./gt-t1-b";
import { gt2OpinionSundays, gt2DiscussionNeighbours, gt2AdvantagesCarFree, gt2ProblemSolutionLitter } from "./gt-t2";
import { at1CPracticeTasks } from "./at1-c";
import { at1DPracticeTasks } from "./at1-d";
import { at2CPracticeTasks } from "./at2-c";
import { at2DPracticeTasks } from "./at2-d";
import { gt1CPracticeTasks } from "./gt1-c";
import { gt1DPracticeTasks } from "./gt1-d";
import { gt2CPracticeTasks } from "./gt2-c";
import { gt2DPracticeTasks } from "./gt2-d";
import type { WritingBankTask } from "./types";

export const WRITING_BANK: WritingBankTask[] = [
  // Academic Task 1 — the seven visual families, plus a second bar chart.
  at1BarCycling, // bar, difficulty 2 — the exemplar
  at1LineEnergy, // line, difficulty 3
  at1PieSpending, // pie, difficulty 3
  at1TableCities, // table, difficulty 4
  at1BarRecycling, // bar (horizontal), difficulty 2
  at1MixedTourism, // mixed (bar + line), difficulty 4
  at1ProcessCider, // process, difficulty 3
  at1MapHarbour, // map, difficulty 4
  // Academic Task 2 — one per essay family.
  at2OpinionMuseums, // opinion, difficulty 3
  at2DiscussionRemoteStudy, // discussion, difficulty 3
  at2AdvantagesGigWork, // advantages-disadvantages, difficulty 4
  at2ProblemSolutionFastFashion, // problem-solution, difficulty 4
  at2CauseEffectSleep, // cause-effect, difficulty 3
  at2TwoPartUrbanFarming, // two-part, difficulty 4
  at2DirectQuestionsHeritage, // direct-questions, difficulty 4
  // General Training Task 1 — six purposes across three registers.
  gt1ComplaintHotel, // complaint, formal, difficulty 3
  gt1RequestCouncil, // request, formal, difficulty 2
  gt1ExplanationLandlord, // explanation, semi-formal, difficulty 3
  gt1SuggestionCentre, // suggestion, semi-formal, difficulty 3
  gt1InvitationFriend, // invitation, informal, difficulty 2
  gt1ApologyNeighbour, // apology, informal, difficulty 3
  // General Training Task 2 — everyday essays.
  gt2OpinionSundays, // opinion, difficulty 2
  gt2DiscussionNeighbours, // discussion, difficulty 3
  gt2AdvantagesCarFree, // advantages-disadvantages, difficulty 3
  gt2ProblemSolutionLitter, // problem-solution, difficulty 2
  // PROMPT 54 expansion — seventy-five practice-tier tasks across the
  // four channels (levelSamples omitted by design on this tier).
  ...at1CPracticeTasks,
  ...at1DPracticeTasks,
  ...at2CPracticeTasks,
  ...at2DPracticeTasks,
  ...gt1CPracticeTasks,
  ...gt1DPracticeTasks,
  ...gt2CPracticeTasks,
  ...gt2DPracticeTasks,
];

export function writingTaskBySlug(slug: string): WritingBankTask | undefined {
  return WRITING_BANK.find((t) => t.slug === slug);
}

export function writingBankStats(): {
  total: number;
  academicTask1: number;
  academicTask2: number;
  gtTask1: number;
  gtTask2: number;
  withLevelSamples: number;
} {
  return {
    total: WRITING_BANK.length,
    academicTask1: WRITING_BANK.filter((t) => t.channel === "academic" && t.taskType === "task-1").length,
    academicTask2: WRITING_BANK.filter((t) => t.channel === "academic" && t.taskType === "task-2").length,
    gtTask1: WRITING_BANK.filter((t) => t.channel === "gt" && t.taskType === "task-1").length,
    gtTask2: WRITING_BANK.filter((t) => t.channel === "gt" && t.taskType === "task-2").length,
    withLevelSamples: WRITING_BANK.filter((t) => t.levelSamples.length >= 2).length,
  };
}

export * from "./types";
export { validateWritingBank, validateWritingTask } from "./validate";
