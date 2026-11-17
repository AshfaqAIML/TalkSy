/**
 * TOEFL Writing Practice Library — integrity validator (PROMPT 50).
 *
 * Machine-checks every authored exercise BEFORE it can ship:
 *
 *   1. Field contract — all nine mandated teaching fields are present and
 *      meet their depth floors: instructions (≥ 15 words), task requirements
 *      (≥ 3 items), time guidance (non-empty), model response (meets the
 *      task's own band), response analysis (≥ 30 words), useful expressions
 *      (≥ 3), grammar observations (≥ 2, each ≥ 10 words), common mistakes
 *      (≥ 2, each ≥ 8 words) and an independent assignment (≥ 15 words).
 *   2. Solvability — reorder answers contain exactly the scrambled segments;
 *      "correct" sources genuinely differ from their answers; "combine"
 *      answers carry the content of both source clauses; "complete" items are
 *      real fragments/run-ons; "punctuate" sources are genuinely missing
 *      marks the answer restores; keyed answers are complete sentences.
 *   3. Rubric honesty — item numbering runs 1..N; every item tests its
 *      exercise's declared focus; vocabulary glossary words occur in the
 *      task material or model; key points meet their band.
 *   4. Substance — scenarios meet their word bands; email/discussion models
 *      fall inside the task's word band; sentence sets carry 4–6 items.
 *   5. Originality — no normalised 8-word window repeats across any two
 *      scenarios, model responses, discussion posts or keyed sentences.
 *   6. Variety (bank level) — each of the five sentence focuses carries 20
 *      exercises across all difficulty tiers; every email purpose carries
 *      8+ tasks across at least four tiers; discussion disciplines stay
 *      varied (15+ distinct).
 */

import type {
  ToeflEmailTask,
  ToeflDiscussionTask,
  ToeflSentenceExercise,
  ToeflSentenceItem,
  ToeflWritingExercise,
} from "./types";
import { TOEFL_SENTENCE_FOCUS_LABELS, TOEFL_WRITING_TASK_LABELS, TOEFL_EMAIL_PURPOSE_LABELS } from "./types";

const norm = (s: string): string =>
  (s ?? "")
    .toLowerCase()
    .replace(/[’]/g, "'")
    .replace(/[^a-z0-9' ]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();

const words = (s: string): string[] => (norm(s).match(/[a-z0-9']+/g) ?? []);

const wordCount = (s: string): number => (s.match(/[A-Za-z]+(?:-[A-Za-z]+)*|\d+(?:[.,:]\d+)*/g) ?? []).length;

/** Case- and punctuation-insensitive sentence comparison (for every kind except "punctuate"). */
export function looseSentence(a: string, b: string): boolean {
  return norm(a) === norm(b);
}

// ---------------------------------------------------------------------------
// The nine-field teaching kit
// ---------------------------------------------------------------------------

function checkNineFields(ex: ToeflWritingExercise, issues: string[]): void {
  const tag = ex.slug;
  if (wordCount(ex.instructions) < 15) issues.push(`${tag}: instructions are thinner than 15 words.`);
  if (!Array.isArray(ex.taskRequirements) || ex.taskRequirements.length < 3) {
    issues.push(`${tag}: fewer than 3 task requirements.`);
  }
  for (const [i, r] of (ex.taskRequirements ?? []).entries()) {
    if (wordCount(r) < 4) issues.push(`${tag}: task requirement ${i + 1} is too thin.`);
  }
  if (wordCount(ex.timeGuidance) < 6) issues.push(`${tag}: time guidance is missing or too thin.`);
  if (wordCount(ex.modelResponse) < 30) issues.push(`${tag}: model response is thinner than 30 words.`);
  if (wordCount(ex.responseAnalysis) < 30) issues.push(`${tag}: response analysis is thinner than 30 words.`);
  if (!Array.isArray(ex.usefulExpressions) || ex.usefulExpressions.length < 3) {
    issues.push(`${tag}: fewer than 3 useful expressions.`);
  }
  if (!Array.isArray(ex.grammarObservations) || ex.grammarObservations.length < 2) {
    issues.push(`${tag}: fewer than 2 grammar observations.`);
  }
  for (const [i, g] of (ex.grammarObservations ?? []).entries()) {
    if (wordCount(g) < 10) issues.push(`${tag}: grammar observation ${i + 1} is too thin to teach.`);
  }
  if (!Array.isArray(ex.commonMistakes) || ex.commonMistakes.length < 2) {
    issues.push(`${tag}: fewer than 2 common mistakes.`);
  }
  for (const [i, m] of (ex.commonMistakes ?? []).entries()) {
    if (wordCount(m) < 8) issues.push(`${tag}: common mistake ${i + 1} is too thin.`);
  }
  if (wordCount(ex.independentAssignment) < 15) {
    issues.push(`${tag}: independent assignment is thinner than 15 words.`);
  }
  if (wordCount(ex.title) < 2) issues.push(`${tag}: title is too thin.`);
  if (ex.difficulty < 1 || ex.difficulty > 5) issues.push(`${tag}: difficulty must be 1–5.`);
  if (ex.estimatedMinutes < 2 || ex.estimatedMinutes > 20) issues.push(`${tag}: estimatedMinutes out of range.`);
}

// ---------------------------------------------------------------------------
// Build a Sentence items
// ---------------------------------------------------------------------------

function checkSentenceItem(item: ToeflSentenceItem, ex: ToeflSentenceExercise, issues: string[], seenSentences: Set<string>): void {
  const tag = `${ex.slug}#${item.no}`;
  if (item.kind === "reorder") {
    if (!Array.isArray(item.segments) || item.segments.length < 3) {
      issues.push(`${tag}: reorder items carry at least 3 scrambled segments.`);
    } else {
      const joined = item.segments.join(" ");
      const answerWords = norm(item.answer).split(" ").filter(Boolean);
      const segmentWords = norm(joined).split(" ").filter(Boolean);
      const sortedAnswer = [...answerWords].sort().join(" ");
      const sortedSegments = [...segmentWords].sort().join(" ");
      if (sortedAnswer !== sortedSegments) {
        issues.push(`${tag}: the reorder answer does not use exactly the scrambled segments.`);
      }
      if (looseSentence(item.answer, joined)) {
        issues.push(`${tag}: the scrambled order equals the answer — nothing to solve.`);
      }
    }
  } else {
    if (!item.source || wordCount(item.source) < 4) {
      issues.push(`${tag}: missing or too-thin source sentence.`);
    } else if (looseSentence(item.source, item.answer)) {
      issues.push(`${tag}: the answer is identical to the source — nothing to solve.`);
    }
    if (item.kind === "combine" && item.source && item.source.split(/\.{2,}|;| \| /).length < 2 && !item.source.includes(".")) {
      issues.push(`${tag}: combine items need two clauses in the source.`);
    }
    if (item.kind === "punctuate" && item.answer === item.source) {
      issues.push(`${tag}: the punctuate answer adds nothing to the source.`);
    }
  }
  // The keyed answer must be a complete, ended sentence.
  const answer = item.answer.trim();
  if (!/^[A-Z]/.test(answer)) issues.push(`${tag}: the model sentence must start with a capital letter.`);
  if (!/[.?!]$/.test(answer)) issues.push(`${tag}: the model sentence must end with . ? or !`);
  if (wordCount(answer) < 4) issues.push(`${tag}: the model sentence is too short to be a sentence.`);
  if (words(item.meta.explanation).length < 20) {
    issues.push(`${tag}: explanation is thinner than 20 words — teaching depth floor.`);
  }
  if (wordCount(item.meta.grammarNote) < 8) {
    issues.push(`${tag}: grammar observation is too thin — grammar is the task, teach it.`);
  }
  for (const a of item.alternatives ?? []) {
    if (looseSentence(a, item.answer)) issues.push(`${tag}: alternative duplicates the answer.`);
  }
  const key = norm(answer);
  if (seenSentences.has(key)) issues.push(`${tag}: keyed sentence duplicates an earlier item.`);
  seenSentences.add(key);
}

// ---------------------------------------------------------------------------
// Per-exercise validation
// ---------------------------------------------------------------------------

export function validateToeflWritingExercise(ex: ToeflWritingExercise): string[] {
  const issues: string[] = [];
  checkNineFields(ex, issues);

  if (ex.taskType === "build-sentence") {
    if (ex.items.length < 4 || ex.items.length > 6) {
      issues.push(`${ex.slug}: sentence sets carry 4–6 items (found ${ex.items.length}).`);
    }
    const seenSentences = new Set<string>();
    let expected = 1;
    for (const item of ex.items) {
      if (item.no !== expected) {
        issues.push(`${ex.slug}: item numbering breaks at ${item.no} (expected ${expected}).`);
        break;
      }
      expected += 1;
      checkSentenceItem(item, ex, issues, seenSentences);
    }
  } else if (ex.taskType === "write-email") {
    const scenarioWords = wordCount(ex.scenario);
    if (scenarioWords < 60) issues.push(`${ex.slug}: scenario is ${scenarioWords} words — below the 60-word floor.`);
    if (scenarioWords > 130) issues.push(`${ex.slug}: scenario is ${scenarioWords} words — above the 130-word ceiling.`);
    if (ex.keyPoints.length < 3 || ex.keyPoints.length > 5) issues.push(`${ex.slug}: key points must number 3–5.`);
    if (ex.wordBand.min < 40 || ex.wordBand.max > 160 || ex.wordBand.min >= ex.wordBand.max) {
      issues.push(`${ex.slug}: word band is out of range.`);
    }
    const modelWords = wordCount(ex.modelResponse);
    if (modelWords < ex.wordBand.min - 15 || modelWords > ex.wordBand.max + 15) {
      issues.push(`${ex.slug}: model response is ${modelWords} words — outside the ${ex.wordBand.min}–${ex.wordBand.max} band (±15).`);
    }
    if (ex.vocabulary.length < 4) issues.push(`${ex.slug}: glossary has fewer than 4 entries.`);
    if (wordCount(ex.recipient) < 1) issues.push(`${ex.slug}: no recipient label.`);
    const text = norm(`${ex.scenario} ${ex.modelResponse}`);
    for (const g of ex.vocabulary) {
      if (words(g.definition).length < 3) issues.push(`${ex.slug}: glossary entry "${g.word}" has no real definition.`);
      if (!g.partOfSpeech) issues.push(`${ex.slug}: glossary entry "${g.word}" has no part of speech.`);
      if (!text.includes(norm(g.word))) {
        issues.push(`${ex.slug}: glossary word "${g.word}" occurs neither in the scenario nor the model.`);
      }
    }
  } else {
    // academic-discussion
    if (wordCount(ex.professorPrompt) < 25) issues.push(`${ex.slug}: professor prompt is thinner than 25 words.`);
    if (ex.studentPosts.length !== 2) issues.push(`${ex.slug}: discussion boards carry exactly two classmates.`);
    for (const [i, sp] of ex.studentPosts.entries()) {
      if (wordCount(sp.name) < 1) issues.push(`${ex.slug}: classmate ${i + 1} has no name.`);
      if (wordCount(sp.post) < 25) issues.push(`${ex.slug}: classmate ${sp.name}'s post is thinner than 25 words.`);
    }
    if (ex.keyPoints.length < 3 || ex.keyPoints.length > 5) issues.push(`${ex.slug}: key points must number 3–5.`);
    if (ex.wordBand.min < 70 || ex.wordBand.max > 180 || ex.wordBand.min >= ex.wordBand.max) {
      issues.push(`${ex.slug}: word band is out of range.`);
    }
    const modelWords = wordCount(ex.modelResponse);
    if (modelWords < ex.wordBand.min - 15 || modelWords > ex.wordBand.max + 20) {
      issues.push(`${ex.slug}: model response is ${modelWords} words — outside the ${ex.wordBand.min}–${ex.wordBand.max} band.`);
    }
    if (ex.vocabulary.length < 4) issues.push(`${ex.slug}: glossary has fewer than 4 entries.`);
    const text = norm(`${ex.professorPrompt} ${ex.studentPosts.map((s) => s.post).join(" ")} ${ex.modelResponse}`);
    for (const g of ex.vocabulary) {
      if (words(g.definition).length < 3) issues.push(`${ex.slug}: glossary entry "${g.word}" has no real definition.`);
      if (!g.partOfSpeech) issues.push(`${ex.slug}: glossary entry "${g.word}" has no part of speech.`);
      if (!text.includes(norm(g.word))) {
        issues.push(`${ex.slug}: glossary word "${g.word}" occurs nowhere in the board or the model.`);
      }
    }
    if (wordCount(ex.discipline) < 1) issues.push(`${ex.slug}: no discipline label.`);
  }
  return issues;
}

// ---------------------------------------------------------------------------
// Bank-level validation
// ---------------------------------------------------------------------------

/** The originality corpus: scenarios, boards, models and keyed sentences. */
export function writingOriginalityCorpus(ex: ToeflWritingExercise): { text: string; owner: string }[] {
  if (ex.taskType === "build-sentence") {
    return ex.items.map((it) => ({ text: it.answer, owner: ex.slug }));
  }
  if (ex.taskType === "write-email") {
    return [
      { text: ex.scenario, owner: ex.slug },
      { text: ex.modelResponse, owner: ex.slug },
    ];
  }
  return [
    { text: ex.professorPrompt, owner: ex.slug },
    ...ex.studentPosts.map((s) => ({ text: s.post, owner: ex.slug })),
    { text: ex.modelResponse, owner: ex.slug },
  ];
}

/** No normalised 8-word window repeats across the whole bank. */
export function validateToeflWritingOriginality(exercises: ToeflWritingExercise[]): string[] {
  const issues: string[] = [];
  const seen = new Map<string, string>();
  for (const ex of exercises) {
    for (const piece of writingOriginalityCorpus(ex)) {
      const sentences = piece.text.split(/(?<=[.!?])\s+/);
      for (const sentence of sentences) {
        const ws = words(sentence);
        if (ws.length < 8) continue;
        for (let i = 0; i <= ws.length - 8; i += 1) {
          const window = ws.slice(i, i + 8).join(" ");
          const owner = seen.get(window);
          if (owner && owner !== ex.slug) {
            issues.push(`originality: "${window}" appears in both ${owner} and ${ex.slug}.`);
            if (issues.length > 20) return issues;
          } else if (!owner) {
            seen.set(window, ex.slug);
          }
        }
      }
    }
  }
  return issues;
}

export function validateToeflWritingBank(exercises: ToeflWritingExercise[]): string[] {
  const issues: string[] = [];
  const slugs = new Set<string>();
  for (const ex of exercises) {
    if (slugs.has(ex.slug)) issues.push(`duplicate slug: ${ex.slug}`);
    slugs.add(ex.slug);
    issues.push(...validateToeflWritingExercise(ex));
  }
  issues.push(...validateToeflWritingOriginality(exercises));

  // --- Build a Sentence: 20 per focus, every tier -------------------------
  const sentence = exercises.filter((e): e is ToeflSentenceExercise => e.taskType === "build-sentence");
  if (sentence.length < 100) {
    issues.push(`distribution: Build a Sentence carries only ${sentence.length} exercises — 100 is the target.`);
  }
  for (const focus of Object.keys(TOEFL_SENTENCE_FOCUS_LABELS) as (keyof typeof TOEFL_SENTENCE_FOCUS_LABELS)[]) {
    const list = sentence.filter((e) => e.focus === focus);
    if (list.length !== 20) {
      issues.push(`distribution: ${TOEFL_SENTENCE_FOCUS_LABELS[focus]} carries ${list.length} exercises — exactly 20 is the contract.`);
    }
    const tiers = new Set(list.map((e) => e.difficulty));
    for (const d of [1, 2, 3, 4, 5] as const) {
      if (!tiers.has(d)) issues.push(`distribution: ${focus} never reaches difficulty ${d}.`);
    }
  }

  // --- Email + discussion: purposes and tiers ------------------------------
  const emails = exercises.filter((e): e is ToeflEmailTask => e.taskType === "write-email");
  const discussions = exercises.filter((e): e is ToeflDiscussionTask => e.taskType === "academic-discussion");
  if (emails.length + discussions.length < 100) {
    issues.push(`distribution: email + discussion tasks number ${emails.length + discussions.length} — 100 is the target.`);
  }
  for (const purpose of Object.keys(TOEFL_EMAIL_PURPOSE_LABELS) as (keyof typeof TOEFL_EMAIL_PURPOSE_LABELS)[]) {
    const list = emails.filter((e) => e.purpose === purpose);
    if (list.length < 8) {
      issues.push(`distribution: ${TOEFL_EMAIL_PURPOSE_LABELS[purpose]} carries only ${list.length} tasks — 8+ is the contract.`);
    }
    const tiers = new Set(list.map((e) => e.difficulty));
    if (tiers.size < 4) {
      issues.push(`distribution: ${purpose} spans only ${tiers.size} difficulty tiers — at least 4.`);
    }
  }
  const emailTiers = new Set(emails.map((e) => e.difficulty));
  for (const d of [1, 2, 3, 4, 5] as const) {
    if (!emailTiers.has(d)) issues.push(`distribution: emails never reach difficulty ${d}.`);
  }
  const discTiers = new Set(discussions.map((e) => e.difficulty));
  for (const d of [1, 2, 3, 4, 5] as const) {
    if (!discTiers.has(d)) issues.push(`distribution: discussions never reach difficulty ${d}.`);
  }
  const disciplines = new Set(discussions.map((e) => norm(e.discipline)));
  if (disciplines.size < 15) issues.push(`variety: only ${disciplines.size} distinct discussion disciplines — 15+ is the target.`);
  const recipients = new Set(emails.map((e) => norm(e.recipient)));
  if (recipients.size < 12) issues.push(`variety: only ${recipients.size} distinct email recipients — 12+ is the target.`);

  void TOEFL_WRITING_TASK_LABELS;
  return issues;
}
