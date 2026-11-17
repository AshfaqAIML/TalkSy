/**
 * IELTS Speaking Masterclass — bank integrity validator (PROMPT 47).
 *
 * Enforces the authored contracts mechanically:
 *  - slugs unique; every prompt, question, model answer and sample unique
 *    across the bank (originality — no recycled exam material)
 *  - Part 1: exactly one set per taught topic, five questions each, every
 *    question carrying guidance, a model answer, a weak-versus-improved
 *    pair and expected keyword stems; the improved answer must be longer
 *    and richer than the weak one
 *  - Part 2 flagship: one card per family with the FULL seven-element
 *    payload (prompt, planning notes, vocabulary suggestions, natural
 *    sample response, response analysis, alternative approaches,
 *    follow-up practice); the transcript's wordCount field must equal its
 *    actual word count; band labels always read as estimates; duration
 *    estimates inside the official one-to-two-minute window
 *  - Part 2 practice: one card per family, prompt + vocabulary hints +
 *    rounding-off questions, and NO model answer (independent practice)
 *  - Part 3: four questions per set, escalating accessible → abstract →
 *    speculative without going backwards; every question analysed
 *  - accent neutrality: nothing in the bank ties a national accent to a
 *    higher score (the taught stance is intelligibility)
 *  - every item carries its part, topic or family, difficulty, proficiency
 *    and skill — the practice-library dimensions
 */

import type {
  SpeakingBankItem,
  SpeakingCueCard,
  SpeakingPart1Set,
  SpeakingPart3Set,
  SpeakingPracticeCueCard,
} from "./types";
import { SPEAKING_BANK_SOURCE_NOTE, SPEAKING_PART1_TOPICS, SPEAKING_CUE_FAMILIES } from "./types";

const WORD_RE = /[A-Za-z0-9]+(?:[.,:'’-][A-Za-z0-9]+)*/g;

export function countWords(text: string): number {
  return (text.trim().match(WORD_RE) ?? []).length;
}

// Accent-hierarchy patterns the bank must never contain (Part 5 stance).
const ACCENT_CLAIM_RE =
  /british accent[^.?!]*?(better|higher|best|more|superior|prefer|need|requir)|american accent[^.?!]*?(better|higher|best|more|superior|prefer|need|requir)|(learn|imitate|copy|adopt)[^.?!]*?(accent)[^.?!]*?(score|band|higher|better)/gi;

export type SpeakingBankIssue = { item: string; problem: string };

export function validateSpeakingItem(item: SpeakingBankItem): SpeakingBankIssue[] {
  const issues: SpeakingBankIssue[] = [];
  const push = (problem: string) => issues.push({ item: item.slug, problem });

  if (item.source !== SPEAKING_BANK_SOURCE_NOTE) push("source note missing");
  if (!item.slug.startsWith("ielts-sb-")) push(`unexpected slug prefix: ${item.slug}`);

  const accentScan = JSON.stringify(item);
  if (ACCENT_CLAIM_RE.test(accentScan)) push("content ties a national accent to scoring — the bank is accent-neutral");

  if (item.kind === "part1") validatePart1Set(item, push);
  else if (item.kind === "cue-card") validateCueCard(item, push);
  else if (item.kind === "practice-cue-card") validatePracticeCard(item, push);
  else validatePart3Set(item, push);

  return issues;
}

function validatePart1Set(set: SpeakingPart1Set, push: (p: string) => void): void {
  if (set.questions.length !== 5) push(`Part 1 set must carry exactly 5 questions (found ${set.questions.length})`);
  for (const [i, q] of set.questions.entries()) {
    if (countWords(q.question) < 4) push(`question ${i + 1}: examiner wording too short`);
    if (countWords(q.guidance) < 20) push(`question ${i + 1}: guidance under 20 words`);
    const modelWords = countWords(q.modelAnswer);
    if (modelWords < 35 || modelWords > 75) push(`question ${i + 1}: model answer ${modelWords} words (expected 35–75)`);
    if (countWords(q.weak) < 2 || countWords(q.weak) > 12) push(`question ${i + 1}: weak answer should be a thin 2–12 words`);
    if (countWords(q.improved) < 20 || countWords(q.improved) > 50) push(`question ${i + 1}: improved answer ${countWords(q.improved)} words (expected 20–50)`);
    if (countWords(q.improved) <= countWords(q.weak)) push(`question ${i + 1}: improved answer must outgrow the weak one`);
    if (!Array.isArray(q.expected) || q.expected.length < 3) push(`question ${i + 1}: needs ≥ 3 expected keyword stems`);
    if (q.expected.some((k) => k !== k.toLowerCase())) push(`question ${i + 1}: expected stems must be lowercase`);
  }
  if (set.vocabulary.length < 6) push("vocabulary bank under 6 entries");
  for (const v of set.vocabulary) {
    if (!v.word || !v.partOfSpeech || !v.meaning || countWords(v.example) < 4) push(`vocabulary entry "${v.word}" incomplete`);
  }
}

function validateCueCard(card: SpeakingCueCard, push: (p: string) => void): void {
  // The seven-element payload.
  if (card.bullets.length !== 3) push("cue card must carry exactly 3 'You should say' bullets");
  if (!/^and explain/i.test(card.extension)) push(`extension line should open "and explain" (found: "${card.extension.slice(0, 24)}…")`);
  if (card.prepSec !== 60 || card.speakMinSec !== 60 || card.speakMaxSec !== 120) push("official Part 2 timings must be 60/60/120 seconds");
  if (card.planningNotes.length < 3) push("planning notes need ≥ 3 headings (element 2)");
  for (const note of card.planningNotes) {
    if (note.notes.length < 2) push(`planning note "${note.heading}" too thin`);
    for (const fragment of note.notes) {
      if (countWords(fragment) > 12) push(`planning fragment too sentence-like: "${fragment.slice(0, 40)}…"`);
    }
  }
  if (card.vocabularySuggestions.length < 8) push("vocabulary suggestions need ≥ 8 entries (element 3)");
  const transcriptWords = countWords(card.sampleResponse.transcript);
  if (transcriptWords < 220 || transcriptWords > 360) push(`sample response ${transcriptWords} words (expected 220–360)`);
  if (card.sampleResponse.wordCount !== transcriptWords) {
    push(`wordCount field ${card.sampleResponse.wordCount} ≠ actual transcript words ${transcriptWords}`);
  }
  const duration = card.sampleResponse.durationEstimateSec;
  if (duration < 80 || duration > 150) push(`duration estimate ${duration}s outside the plausible 80–150s window`);
  const wpm = (transcriptWords / duration) * 60;
  if (wpm < 100 || wpm > 180) push(`implied pace ${Math.round(wpm)} wpm outside 100–180`);
  if (!/estimate/i.test(card.sampleResponse.bandEstimate)) push("band label must say estimate");
  if (card.responseAnalysis.length < 5) push("response analysis needs ≥ 5 rows (element 5)");
  if (card.alternativeApproaches.length < 3) push("alternative approaches need ≥ 3 entries (element 6)");
  if (card.followUp.roundingQuestions.length < 2) push("follow-up practice needs ≥ 2 rounding-off questions (element 7)");
  if (card.followUp.practice.length < 2) push("follow-up practice needs ≥ 2 independent practice ideas (element 7)");
  if (card.requirements.length < 5) push("evaluator requirements need ≥ 5 entries");
  for (const r of card.requirements) {
    if (r.keywords.length < 3) push(`requirement "${r.key}" needs ≥ 3 keyword stems`);
  }
  // The card's own sample must satisfy its own requirements (the engine's
  // calibration contract depends on this).
  const sample = card.sampleResponse.transcript.toLowerCase();
  for (const r of card.requirements) {
    const hit = r.keywords.some((k) => sample.includes(k.toLowerCase()));
    if (!hit) push(`requirement "${r.key}" unmatched by the card's own sample response`);
  }
}

function validatePracticeCard(card: SpeakingPracticeCueCard, push: (p: string) => void): void {
  if (card.bullets.length !== 3) push("practice card must carry exactly 3 bullets");
  if (!/^and explain/i.test(card.extension)) push("extension line should open 'and explain'");
  if (card.vocabularyHints.length < 6) push("vocabulary hints need ≥ 6 entries");
  if (card.roundingQuestions.length < 2) push("needs ≥ 2 rounding-off questions");
  if ("sampleResponse" in card || "modelAnswer" in card) push("practice layer must not carry a model answer");
}

const LEVEL_ORDER = { accessible: 0, abstract: 1, speculative: 2 } as const;

function validatePart3Set(set: SpeakingPart3Set, push: (p: string) => void): void {
  if (set.questions.length !== 4) push(`Part 3 set must carry exactly 4 questions (found ${set.questions.length})`);
  let previous = -1;
  for (const [i, q] of set.questions.entries()) {
    const level = LEVEL_ORDER[q.level];
    if (level < previous) push(`question ${i + 1}: difficulty went backwards (${q.level} after a harder question)`);
    previous = Math.max(previous, level);
    if (countWords(q.modelAnswer) < 40 || countWords(q.modelAnswer) > 95) {
      push(`question ${i + 1}: model answer ${countWords(q.modelAnswer)} words (expected 40–95)`);
    }
    if (countWords(q.analysis) < 15) push(`question ${i + 1}: analysis under 15 words`);
    if (!Array.isArray(q.expected) || q.expected.length < 3) push(`question ${i + 1}: needs ≥ 3 expected keyword stems`);
  }
  // The last question must be speculative — the escalation endpoint.
  const last = set.questions[set.questions.length - 1];
  if (last && last.level !== "speculative") push("the set's final question must reach the speculative level");
  if (set.vocabulary.length < 6) push("vocabulary bank under 6 entries");
}

export function validateSpeakingBank(
  part1Sets: SpeakingPart1Set[],
  cueCards: SpeakingCueCard[],
  practiceCueCards: SpeakingPracticeCueCard[],
  part3Sets: SpeakingPart3Set[],
): SpeakingBankIssue[] {
  const all: SpeakingBankItem[] = [...part1Sets, ...cueCards, ...practiceCueCards, ...part3Sets];
  const issues: SpeakingBankIssue[] = [];
  const slugs = new Set<string>();
  const prompts = new Set<string>();
  const models = new Set<string>();

  for (const item of all) {
    for (const issue of validateSpeakingItem(item)) issues.push(issue);
    if (slugs.has(item.slug)) issues.push({ item: item.slug, problem: "duplicate slug" });
    slugs.add(item.slug);

    // Originality: no duplicated prompts, questions or answers anywhere.
    const collectPrompts = (it: SpeakingBankItem): string[] => {
      if (it.kind === "part1") return [it.framing, ...it.questions.map((q) => q.question)];
      if (it.kind === "part3") return it.questions.map((q) => q.question);
      return [it.task];
    };
    for (const p of collectPrompts(item)) {
      const key = p.trim().toLowerCase();
      if (prompts.has(key)) issues.push({ item: item.slug, problem: `duplicated prompt: "${p.slice(0, 60)}…"` });
      prompts.add(key);
    }
    const collectModels = (it: SpeakingBankItem): string[] => {
      if (it.kind === "part1") return [...it.questions.map((q) => q.modelAnswer), ...it.questions.map((q) => q.improved)];
      if (it.kind === "cue-card") return [it.sampleResponse.transcript];
      if (it.kind === "part3") return it.questions.map((q) => q.modelAnswer);
      return [];
    };
    for (const m of collectModels(item)) {
      const key = m.trim().toLowerCase();
      if (models.has(key)) issues.push({ item: item.slug, problem: `duplicated model text: "${m.slice(0, 60)}…"` });
      models.add(key);
    }
  }

  // Coverage contracts (PROMPT 54: every Part 1 topic may now carry its
  // flagship round plus ONE second interview round — 1–2 sets per topic,
  // never three; flagship cue-card families stay exactly once; practice
  // cue-card families stay covered at least once, any number of cards).
  const topicCounts = new Map<string, number>();
  for (const set of part1Sets) {
    topicCounts.set(set.topic, (topicCounts.get(set.topic) ?? 0) + 1);
  }
  const duplicateTopics = [...topicCounts.entries()]
    .filter(([, n]) => n > 2)
    .map(([t]) => t);
  const flagship = new Set<string>();
  const duplicateFlagship: string[] = [];
  for (const card of cueCards) {
    if (flagship.has(card.family)) duplicateFlagship.push(card.family);
    flagship.add(card.family);
  }
  const practice = new Set(practiceCueCards.map((c) => c.family));
  const missingTopics = SPEAKING_PART1_TOPICS.filter((t) => !topicCounts.has(t));
  const missingFlagship = SPEAKING_CUE_FAMILIES.filter((f) => !flagship.has(f));
  const missingPractice = SPEAKING_CUE_FAMILIES.filter((f) => !practice.has(f));
  for (const t of missingTopics) issues.push({ item: "bank", problem: `Part 1 topic not covered: ${t}` });
  for (const t of duplicateTopics) issues.push({ item: "bank", problem: `Part 1 topic appears more than twice: ${t}` });
  for (const f of missingFlagship) issues.push({ item: "bank", problem: `flagship cue-card family missing: ${f}` });
  for (const f of missingPractice) issues.push({ item: "bank", problem: `practice cue-card family missing: ${f}` });
  for (const f of duplicateFlagship) issues.push({ item: "bank", problem: `flagship cue-card family duplicated: ${f}` });

  return issues;
}
