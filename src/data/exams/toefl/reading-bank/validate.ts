/**
 * TOEFL Reading Practice Library — integrity validator (PROMPT 49).
 *
 * Machine-checks every authored exercise BEFORE it can ship:
 *
 *   1. Solvability — every masked token appears exactly once in its passage
 *      and the keyed restoration genuinely completes the visible stem; every
 *      MCQ evidence quote is a verbatim substring of the paragraph it cites;
 *      every keyed completion answer is derivable from context (explanation
 *      depth floor).
 *   2. Rubric honesty — question numbering runs 1..N continuously; MCQ items
 *      carry exactly four distinct options with one key in range; lures are
 *      never the key; the seven-dimension skill vocabulary is respected
 *      (1–2 skills per question, drawn from the tracked list only).
 *   3. Teaching depth — explanations meet their word floors (20 for masked
 *      words, 25 for MCQ); every masked word carries a grammar observation;
 *      every exercise carries a vocabulary glossary whose words really occur
 *      in the text (or are the masked answers themselves).
 *   4. Substance — passages meet their task-type word bands; daily-life sets
 *      carry 1–3 blocks; academic passages carry 4–6 paragraphs.
 *   5. Originality — no normalised 8-word window repeats anywhere in the
 *      bank (all exercises are distinct originals).
 *   6. Variety (bank level) — the three task types each carry 30+ exercises;
 *      every difficulty tier 1–5 is represented in every task type; topics,
 *      text kinds and academic subjects stay varied.
 */

import { LIBRARY_SKILLS, isLibrarySkill } from "../library-skills";
import type { ToeflReadingExercise, ToeflReadingQuestion, McqQuestion, WordsQuestion } from "./types";
import { TOEFL_READING_TASK_LABELS } from "./types";

const norm = (s: string): string =>
  (s ?? "")
    .toLowerCase()
    .replace(/[’]/g, "'")
    .replace(/[^a-z0-9' ]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();

const words = (s: string): string[] => (norm(s).match(/[a-z0-9']+/g) ?? []);

const wordCount = (s: string): number => (s.match(/[A-Za-z]+(?:-[A-Za-z]+)*|\d+(?:[.,:]\d+)*/g) ?? []).length;

/** Full exercise text (passage or all blocks), for glossary and originality checks. */
export function exerciseText(ex: ToeflReadingExercise): string {
  if (ex.taskType === "complete-words") return ex.passage;
  if (ex.taskType === "daily-life") return ex.blocks.flatMap((b) => [b.heading, ...b.paragraphs]).join(" ");
  return [ex.passage.heading, ...ex.passage.paragraphs].join(" ");
}

function paragraphText(ex: ToeflReadingExercise, block: number, paragraph: number): string | null {
  if (ex.taskType === "daily-life") return ex.blocks[block]?.paragraphs[paragraph] ?? null;
  if (ex.taskType === "academic-passage") {
    if (block !== 0) return null;
    return ex.passage.paragraphs[paragraph] ?? null;
  }
  return null;
}

function checkSkills(list: unknown, tag: string, issues: string[]): void {
  if (!Array.isArray(list) || list.length === 0) {
    issues.push(`${tag}: no tested skill declared.`);
    return;
  }
  if (list.length > 2) {
    issues.push(`${tag}: declares ${list.length} skills — at most 2 of the seven tracked dimensions per question.`);
  }
  for (const s of list) {
    if (typeof s !== "string" || !isLibrarySkill(s)) {
      issues.push(`${tag}: skill "${String(s)}" is outside the seven tracked library dimensions.`);
    }
  }
}

// ---------------------------------------------------------------------------
// Per-exercise validation
// ---------------------------------------------------------------------------

export function validateToeflReadingExercise(ex: ToeflReadingExercise): string[] {
  const issues: string[] = [];
  const slug = ex.slug;
  const text = norm(exerciseText(ex));
  const totalWords = wordCount(exerciseText(ex));

  if (ex.difficulty < 1 || ex.difficulty > 5) issues.push(`${slug}: difficulty must be 1–5.`);
  if (ex.estimatedMinutes < 2 || ex.estimatedMinutes > 15) issues.push(`${slug}: estimatedMinutes out of range.`);
  if (wordCount(ex.title) < 2) issues.push(`${slug}: title is too thin.`);

  // --- task-type substance -------------------------------------------------
  if (ex.taskType === "complete-words") {
    if (totalWords < 85) issues.push(`${slug}: passage is ${totalWords} words — below the 85-word floor.`);
    if (totalWords > 130) issues.push(`${slug}: passage is ${totalWords} words — above the 130-word ceiling.`);
    if (ex.questions.length < 8) issues.push(`${slug}: only ${ex.questions.length} masked words — the 8–10 band is the contract.`);
    if (ex.questions.length > 10) issues.push(`${slug}: ${ex.questions.length} masked words — above the 10-word ceiling.`);
    if (wordCount(ex.topic) < 1) issues.push(`${slug}: no topic label.`);
    if (ex.vocabulary.length < 5) issues.push(`${slug}: glossary has fewer than 5 entries.`);
  } else if (ex.taskType === "daily-life") {
    if (totalWords < 90) issues.push(`${slug}: text set is ${totalWords} words — below the 90-word floor.`);
    if (totalWords > 230) issues.push(`${slug}: text set is ${totalWords} words — above the 230-word ceiling.`);
    if (ex.blocks.length < 1 || ex.blocks.length > 3) issues.push(`${slug}: daily-life sets carry 1–3 blocks.`);
    if (ex.questions.length < 4) issues.push(`${slug}: fewer than 4 questions — not a realistic set.`);
    if (ex.questions.length > 6) issues.push(`${slug}: more than 6 questions — outside the set band.`);
    if (ex.vocabulary.length < 4) issues.push(`${slug}: glossary has fewer than 4 entries.`);
    if (wordCount(ex.textKind) < 1 || wordCount(ex.scene) < 2) issues.push(`${slug}: textKind/scene labels missing.`);
    for (const [bi, b] of (ex as { blocks: { heading: string; paragraphs: string[] }[] }).blocks.entries()) {
      if (words(b.heading).length < 1) issues.push(`${slug}: block ${bi} heading is empty.`);
      if (b.paragraphs.length === 0) issues.push(`${slug}: block ${bi} has no paragraphs.`);
      for (const [pi, p] of b.paragraphs.entries()) {
        if (wordCount(p) < 12) issues.push(`${slug}: block ${bi} paragraph ${pi} is too thin to be a real text.`);
      }
    }
    for (const [gi, g] of (ex.grammar ?? []).entries()) {
      if (wordCount(g) < 10) issues.push(`${slug}: grammar observation ${gi + 1} is too thin to teach anything.`);
    }
  } else {
    if (totalWords < 300) issues.push(`${slug}: academic passage is ${totalWords} words — below the 300-word floor.`);
    if (totalWords > 430) issues.push(`${slug}: academic passage is ${totalWords} words — above the 430-word ceiling.`);
    if (ex.passage.paragraphs.length < 4) issues.push(`${slug}: academic passages carry 4–6 paragraphs.`);
    if (ex.passage.paragraphs.length > 6) issues.push(`${slug}: academic passages carry 4–6 paragraphs (found ${ex.passage.paragraphs.length}).`);
    if (ex.questions.length < 5) issues.push(`${slug}: fewer than 5 questions — not a realistic set.`);
    if (ex.questions.length > 6) issues.push(`${slug}: more than 6 questions — outside the set band.`);
    if (ex.vocabulary.length < 6) issues.push(`${slug}: glossary has fewer than 6 entries.`);
    if (wordCount(ex.subject) < 1) issues.push(`${slug}: no subject label.`);
    for (const [pi, p] of ex.passage.paragraphs.entries()) {
      if (wordCount(p) < 40) issues.push(`${slug}: paragraph ${pi} is too thin for academic prose.`);
    }
    for (const [gi, g] of (ex.grammar ?? []).entries()) {
      if (wordCount(g) < 10) issues.push(`${slug}: grammar observation ${gi + 1} is too thin to teach anything.`);
    }
  }

  // --- glossary -------------------------------------------------------------
  const maskedAnswers = ex.taskType === "complete-words" ? ex.questions.map((q) => norm(q.answer)) : [];
  for (const g of ex.vocabulary) {
    if (words(g.definition).length < 3) issues.push(`${slug}: glossary entry "${g.word}" has no real definition.`);
    if (!g.partOfSpeech) issues.push(`${slug}: glossary entry "${g.word}" has no part of speech.`);
    const w = norm(g.word).replace(/^the /, "");
    const inText = text.includes(w);
    const isMaskedAnswer = maskedAnswers.some((a) => a === w || a.startsWith(w) || w.startsWith(a));
    if (!inText && !isMaskedAnswer) {
      issues.push(`${slug}: glossary word "${g.word}" occurs neither in the text nor as a masked answer.`);
    }
  }

  // --- questions ------------------------------------------------------------
  let expected = 1;
  const seenMasked = new Set<string>();
  for (const q of ex.questions) {
    if (q.no !== expected) {
      issues.push(`${slug}: question numbering breaks at ${q.no} (expected ${expected}).`);
      break;
    }
    expected += 1;

    if (q.kind === "words") {
      issues.push(...validateWordsItem(q, ex as Extract<ToeflReadingExercise, { taskType: "complete-words" }>, text, seenMasked));
    } else {
      issues.push(...validateMcqItem(q, ex, text));
    }
  }

  return issues;
}

function validateWordsItem(q: WordsQuestion, ex: ToeflReadingExercise & { taskType: "complete-words" }, _text: string, seenMasked: Set<string>): string[] {
  const issues: string[] = [];
  const tag = `${ex.slug}#${q.no}`;
  const stem = q.masked.replace(/_+$/, "");
  if (!/^[A-Za-z]{3,}___$/.test(q.masked)) {
    issues.push(`${tag}: masked token "${q.masked}" must be a 3+ letter stem followed by ___ (suffix-mask contract).`);
  }
  if (seenMasked.has(q.masked)) issues.push(`${tag}: masked token "${q.masked}" is reused.`);
  seenMasked.add(q.masked);
  if (!ex.passage.includes(q.masked)) {
    issues.push(`${tag}: masked token "${q.masked}" does not appear in the passage.`);
  } else {
    // Standalone occurrences only: "produc___" must not match inside "reproduc___".
    const boundary = new RegExp(`(?<![A-Za-z])${q.masked.replace(/_/g, "_+")}(?![A-Za-z])`, "g");
    const occurrences = (ex.passage.match(boundary) ?? []).length;
    if (occurrences !== 1) issues.push(`${tag}: masked token "${q.masked}" appears ${occurrences} times — exactly once is the contract.`);
  }
  const answerN = norm(q.answer);
  const stemN = norm(stem);
  if (!answerN.startsWith(stemN) || answerN === stemN) {
    issues.push(`${tag}: answer "${q.answer}" does not complete the visible stem "${stem}".`);
  }
  if (answerN.length > stemN.length + 8) {
    issues.push(`${tag}: answer "${q.answer}" adds ${answerN.length - stemN.length} letters — completions stay within 8.`);
  }
  if (words(q.meta.explanation).length < 20) {
    issues.push(`${tag}: explanation is thinner than 20 words — teaching depth floor.`);
  }
  if (wordCount(q.meta.grammarNote) < 8) {
    issues.push(`${tag}: grammar observation is too thin — morphology is the task, teach it.`);
  }
  checkSkills(q.meta.skills, tag, issues);
  for (const l of q.lure ?? []) {
    if (norm(l) === answerN) issues.push(`${tag}: lure "${l}" equals the answer.`);
    if (!norm(l).startsWith(stemN)) issues.push(`${tag}: lure "${l}" does not complete the stem — it cannot be typed into the blank.`);
  }
  for (const a of q.alternatives ?? []) {
    if (norm(a) === answerN) issues.push(`${tag}: alternative "${a}" duplicates the answer.`);
    if (!norm(a).startsWith(stemN)) issues.push(`${tag}: alternative "${a}" does not complete the stem.`);
  }
  return issues;
}

function validateMcqItem(q: McqQuestion, ex: ToeflReadingExercise, _text: string): string[] {
  const issues: string[] = [];
  const tag = `${ex.slug}#${q.no}`;
  if (q.options.length !== 4) issues.push(`${tag}: must carry exactly four options.`);
  const optionNorms = q.options.map((o) => norm(o));
  if (new Set(optionNorms).size !== 4) issues.push(`${tag}: duplicate options.`);
  if (q.correct < 0 || q.correct > 3) issues.push(`${tag}: correct index out of range.`);
  if (q.lure !== undefined && q.lure === q.correct) issues.push(`${tag}: lure equals the correct option.`);
  if (wordCount(q.stem) < 3) issues.push(`${tag}: stem is too thin.`);
  if (words(q.meta.explanation).length < 20) {
    issues.push(`${tag}: explanation is thinner than 20 words — the platform teaching-depth floor.`);
  }
  if (q.meta.evidence.length === 0) {
    issues.push(`${tag}: no text evidence — the review system has nothing to point at.`);
  }
  checkSkills(q.meta.skills, tag, issues);
  for (const [ei, ev] of q.meta.evidence.entries()) {
    const p = paragraphText(ex, ev.block, ev.paragraph);
    if (p === null) {
      issues.push(`${tag}: evidence ${ei + 1} cites block ${ev.block} paragraph ${ev.paragraph} — out of range.`);
    } else if (!norm(p).includes(norm(ev.quote))) {
      issues.push(`${tag}: evidence quote "${ev.quote.slice(0, 50)}…" is not verbatim in block ${ev.block} paragraph ${ev.paragraph}.`);
    }
  }
  if (q.meta.trap) {
    if (wordCount(q.meta.trap.note) < 8) issues.push(`${tag}: trap note is too thin.`);
    if (!q.meta.trap.family) issues.push(`${tag}: trap carries no family.`);
  }
  for (const ww of q.meta.whyWrong ?? []) {
    if (wordCount(ww) < 6) issues.push(`${tag}: why-wrong note is too thin.`);
  }
  return issues;
}

// ---------------------------------------------------------------------------
// Bank-level validation
// ---------------------------------------------------------------------------

/** No normalised 8-word window repeats across the whole bank. */
export function validateToeflReadingOriginality(exercises: ToeflReadingExercise[]): string[] {
  const issues: string[] = [];
  const seen = new Map<string, string>();
  for (const ex of exercises) {
    const sentences = exerciseText(ex)
      .split(/(?<=[.!?])\s+/);
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
  return issues;
}

export function validateToeflReadingBank(exercises: ToeflReadingExercise[]): string[] {
  const issues: string[] = [];
  const slugs = new Set<string>();
  for (const ex of exercises) {
    if (slugs.has(ex.slug)) issues.push(`duplicate slug: ${ex.slug}`);
    slugs.add(ex.slug);
    issues.push(...validateToeflReadingExercise(ex));
  }
  issues.push(...validateToeflReadingOriginality(exercises));

  // --- distribution targets (the meaningful initial bank, not padding) ----
  const byType = new Map<string, ToeflReadingExercise[]>();
  for (const ex of exercises) {
    const list = byType.get(ex.taskType) ?? [];
    list.push(ex);
    byType.set(ex.taskType, list);
  }
  for (const [taskType, list] of byType) {
    if (list.length < 30) {
      issues.push(`distribution: ${TOEFL_READING_TASK_LABELS[taskType as keyof typeof TOEFL_READING_TASK_LABELS]} carries only ${list.length} exercises — 30+ per task type is the target.`);
    }
    const tiers = new Set(list.map((e) => e.difficulty));
    for (const d of [1, 2, 3, 4, 5] as const) {
      if (!tiers.has(d)) issues.push(`distribution: ${taskType} never reaches difficulty ${d} — progressive difficulty is required.`);
    }
  }
  // --- variety ---------------------------------------------------------------
  const wordsTopics = new Set(exercises.filter((e) => e.taskType === "complete-words").map((e) => norm(e.topic)));
  const dailyKinds = new Set(exercises.filter((e) => e.taskType === "daily-life").map((e) => norm(e.textKind)));
  const acadSubjects = new Set(exercises.filter((e) => e.taskType === "academic-passage").map((e) => norm(e.subject)));
  if (wordsTopics.size < 15) issues.push(`variety: only ${wordsTopics.size} distinct Complete-the-Words topics — passages must not feel generated.`);
  if (dailyKinds.size < 12) issues.push(`variety: only ${dailyKinds.size} distinct daily-life text kinds.`);
  if (acadSubjects.size < 15) issues.push(`variety: only ${acadSubjects.size} distinct academic subjects.`);

  return issues;
}
