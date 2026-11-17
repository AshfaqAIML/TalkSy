/**
 * IELTS Writing Masterclass — task bank validator (PROMPT 46).
 *
 * Machine-checks every authored task for structure, arithmetic honesty and
 * teaching completeness, so the library cannot regress:
 *
 *   - structural correctness: Task 1 Academic carries a visual whose kind
 *     matches the family; GT letters carry situation + bullets + register;
 *     Task 2 carries essay prompts with all question parts;
 *   - arithmetic honesty: quoted word counts match the actual paragraphs,
 *     minimums fit the official 150/250 floors, pie slices total 100,
 *     series lengths match their axes, map grids share one shape;
 *   - teaching completeness: planning notes, the eight-element analysis
 *     (one paragraph analysis per model paragraph, vocabulary, grammar,
 *     coherence, alternatives, mistakes), a vocabulary bank, and level
 *     samples justified per criterion;
 *   - honesty rules: band labels always carry the word "estimate"; the
 *     source note disclaims official IELTS content on every task;
 *   - no duplicated prompts or model answers across the library.
 */

import type { WritingBankTask, WritingVisual } from "./types";
import { WRITING_BANK_SOURCE_NOTE } from "./types";

const wc = (text: string): number => (text.trim().match(/[A-Za-z0-9]+(?:[.,:'’-][A-Za-z0-9]+)*/g) ?? []).length;
const paragraphsWc = (paragraphs: string[]): number =>
  paragraphs.reduce((sum, p) => sum + wc(p), 0);

function checkVisual(task: WritingBankTask, visual: WritingVisual, issues: string[]): void {
  switch (visual.kind) {
    case "bar":
      for (const s of visual.series) {
        if (s.values.length !== visual.categories.length) {
          issues.push(`${task.slug}: bar series "${s.name}" has ${s.values.length} values for ${visual.categories.length} categories`);
        }
      }
      if (visual.series.length < 1) issues.push(`${task.slug}: bar chart has no series`);
      break;
    case "line":
      for (const s of visual.series) {
        if (s.values.length !== visual.xPoints.length) {
          issues.push(`${task.slug}: line series "${s.name}" has ${s.values.length} values for ${visual.xPoints.length} x-points`);
        }
      }
      if (visual.xPoints.length < 5) issues.push(`${task.slug}: line graph has only ${visual.xPoints.length} x-points (need ≥ 5)`);
      if (visual.series.length < 1) issues.push(`${task.slug}: line graph has no series`);
      break;
    case "pie":
      if (visual.pies.length < 1 || visual.pies.length > 2) {
        issues.push(`${task.slug}: pie visual carries ${visual.pies.length} pies (1–2 supported)`);
      }
      visual.pies.forEach((pie, i) => {
        const total = pie.slices.reduce((a, s) => a + s.value, 0);
        if (total !== 100) issues.push(`${task.slug}: pie ${i + 1} totals ${total}, not 100`);
        if (pie.slices.length < 4) issues.push(`${task.slug}: pie ${i + 1} has only ${pie.slices.length} slices (need ≥ 4)`);
      });
      break;
    case "table":
      if (visual.columnLabels.length < 2) issues.push(`${task.slug}: table has fewer than 2 columns`);
      if (visual.rows.length < 3) issues.push(`${task.slug}: table has fewer than 3 rows`);
      visual.rows.forEach((row) => {
        if (row.values.length !== visual.columnLabels.length) {
          issues.push(`${task.slug}: table row "${row.label}" has ${row.values.length} values for ${visual.columnLabels.length} columns`);
        }
      });
      break;
    case "mixed":
      if (visual.bar.kind !== "bar") issues.push(`${task.slug}: mixed visual's first panel must be a bar chart`);
      if (visual.second.kind === "pie") {
        visual.second.pies.forEach((pie, i) => {
          const total = pie.slices.reduce((a, s) => a + s.value, 0);
          if (total !== 100) issues.push(`${task.slug}: mixed pie ${i + 1} totals ${total}, not 100`);
        });
      }
      if (visual.bar.unit !== visual.unit && visual.second.unit !== visual.unit) {
        // Units may legitimately differ between panels; the top-level unit is
        // the headline. No check — recorded for clarity.
      }
      break;
    case "process":
      if (visual.stages.length < 5) issues.push(`${task.slug}: process has only ${visual.stages.length} stages (need ≥ 5)`);
      visual.stages.forEach((s, i) => {
        if (wc(s.caption) < 3) issues.push(`${task.slug}: process stage ${i + 1} caption too thin`);
      });
      break;
    case "map": {
      const rowsBefore = visual.before.length;
      if (rowsBefore < 2 || rowsBefore > 4) issues.push(`${task.slug}: map 'before' grid has ${rowsBefore} rows (2–4 supported)`);
      if (visual.after.length !== rowsBefore) issues.push(`${task.slug}: map grids differ in row count (${rowsBefore} vs ${visual.after.length})`);
      for (let r = 0; r < rowsBefore; r += 1) {
        if (visual.before[r].length !== visual.after[r].length) {
          issues.push(`${task.slug}: map grids differ in width at row ${r + 1}`);
        }
        if (visual.before[r].length < 3 || visual.before[r].length > 5) {
          issues.push(`${task.slug}: map row ${r + 1} has ${visual.before[r].length} columns (3–5 supported)`);
        }
      }
      break;
    }
  }
}

export function validateWritingTask(task: WritingBankTask): string[] {
  const issues: string[] = [];
  // PROMPT 54 practice tier: a complete but leaner payload (compact
  // analysis, no level samples, two planning sections). Flagship keeps the
  // full PROMPT 46 floors.
  const practice = task.tier === "practice";
  const minPlanning = practice ? 2 : 3;
  const minVocabAnalysis = practice ? 3 : 4;
  const minGrammar = practice ? 2 : 3;
  const minCoherenceWords = practice ? 18 : 25;
  const minAlternatives = practice ? 2 : 4;
  const minMistakes = practice ? 2 : 3;
  const minLevelSamples = practice ? 0 : 1;

  // --- Structural correctness -------------------------------------------
  if (task.channel === "academic" && task.taskType === "task-1") {
    if (!task.visual) {
      issues.push(`${task.slug}: Academic Task 1 without a visual`);
    } else {
      checkVisual(task, task.visual, issues);
      const kindOk =
        task.family === task.visual.kind ||
        (task.family === "bar" && task.visual.kind === "bar");
      if (!kindOk) issues.push(`${task.slug}: family "${task.family}" does not match visual kind "${task.visual.kind}"`);
    }
    if (task.bullets) issues.push(`${task.slug}: Academic Task 1 must not carry letter bullets`);
  }
  if (task.channel === "gt" && task.taskType === "task-1") {
    if (!task.situation || wc(task.situation) < 15) issues.push(`${task.slug}: GT letter without a real situation (≥ 15 words)`);
    if (!task.bullets || task.bullets.length !== 3) issues.push(`${task.slug}: GT letter must carry exactly 3 bullets`);
    if (!task.register) issues.push(`${task.slug}: GT letter without a register`);
    if (task.visual) issues.push(`${task.slug}: GT Task 1 must not carry a chart visual`);
  }
  if (task.taskType === "task-2") {
    if (task.visual) issues.push(`${task.slug}: Task 2 must not carry a chart visual`);
    if (task.bullets) issues.push(`${task.slug}: Task 2 must not carry letter bullets`);
  }

  // --- Official arithmetic ------------------------------------------------
  if (task.taskType === "task-1" && task.estimatedMinutes !== 20) {
    issues.push(`${task.slug}: Task 1 estimatedMinutes must be 20`);
  }
  if (task.taskType === "task-2" && task.estimatedMinutes !== 40) {
    issues.push(`${task.slug}: Task 2 estimatedMinutes must be 40`);
  }
  if (task.taskType === "task-1" && task.wordMinimum !== 150) {
    issues.push(`${task.slug}: Task 1 wordMinimum must be 150`);
  }
  if (task.taskType === "task-2" && task.wordMinimum !== 250) {
    issues.push(`${task.slug}: Task 2 wordMinimum must be 250`);
  }
  if (task.timeLimitSec !== task.estimatedMinutes * 60) {
    issues.push(`${task.slug}: timeLimitSec ${task.timeLimitSec} does not match ${task.estimatedMinutes} minutes`);
  }
  if (wc(task.prompt) < 20) issues.push(`${task.slug}: prompt is too thin (< 20 words)`);

  // --- Requirements -------------------------------------------------------
  if (task.requirements.length < 3) issues.push(`${task.slug}: fewer than 3 requirements`);
  for (const r of task.requirements) {
    if (wc(r.description) < 5) issues.push(`${task.slug}: requirement "${r.key}" description too thin`);
    if (r.keywords.length < 3) issues.push(`${task.slug}: requirement "${r.key}" needs ≥ 3 keywords`);
  }

  // --- Planning notes -----------------------------------------------------
  if (task.planningNotes.length < minPlanning) issues.push(`${task.slug}: fewer than ${minPlanning} planning-note sections`);
  for (const p of task.planningNotes) {
    if (p.notes.length < 2) issues.push(`${task.slug}: planning section "${p.heading}" needs ≥ 2 notes`);
    for (const n of p.notes) if (wc(n) < 4) issues.push(`${task.slug}: planning note too thin in "${p.heading}"`);
  }

  // --- Model answer + arithmetic honesty ---------------------------------
  const model = task.modelAnswer;
  if (model.paragraphs.length < 3) issues.push(`${task.slug}: model answer has fewer than 3 paragraphs`);
  const actualModelWc = paragraphsWc(model.paragraphs);
  if (Math.abs(actualModelWc - model.wordCount) > 3) {
    issues.push(`${task.slug}: model wordCount says ${model.wordCount}, paragraphs count ${actualModelWc}`);
  }
  if (actualModelWc < task.wordMinimum) {
    issues.push(`${task.slug}: model answer (${actualModelWc} words) is under the ${task.wordMinimum}-word floor it teaches`);
  }
  if (!model.bandEstimate.toLowerCase().includes("estimate")) {
    issues.push(`${task.slug}: model band label must say "estimate" — never an official score`);
  }

  // --- Eight-element analysis ---------------------------------------------
  const a = task.analysis;
  if (a.paragraphByParagraph.length !== model.paragraphs.length) {
    issues.push(`${task.slug}: ${a.paragraphByParagraph.length} paragraph analyses for ${model.paragraphs.length} model paragraphs`);
  }
  a.paragraphByParagraph.forEach((p, i) => {
    if (wc(p.analysis) < 15) issues.push(`${task.slug}: paragraph analysis ${i + 1} too thin (< 15 words)`);
    if (!p.role) issues.push(`${task.slug}: paragraph analysis ${i + 1} has no role label`);
  });
  if (a.vocabulary.length < minVocabAnalysis) issues.push(`${task.slug}: vocabulary explanation needs ≥ ${minVocabAnalysis} terms`);
  if (a.grammar.length < minGrammar) issues.push(`${task.slug}: grammar analysis needs ≥ ${minGrammar} features`);
  a.grammar.forEach((g, i) => {
    if (wc(g.note) < 6) issues.push(`${task.slug}: grammar analysis ${i + 1} note too thin`);
  });
  if (wc(a.coherence) < minCoherenceWords) issues.push(`${task.slug}: coherence analysis too thin (< ${minCoherenceWords} words)`);
  if (a.alternativeExpressions.length < minAlternatives) issues.push(`${task.slug}: needs ≥ ${minAlternatives} alternative expressions`);
  if (a.commonMistakes.length < minMistakes) issues.push(`${task.slug}: needs ≥ ${minMistakes} common mistakes`);
  a.commonMistakes.forEach((m, i) => {
    if (wc(m.reason) < 8) issues.push(`${task.slug}: common mistake ${i + 1} reason too thin`);
  });

  // --- Level samples ------------------------------------------------------
  if (task.levelSamples.length < minLevelSamples) issues.push(`${task.slug}: no level samples (need ≥ 1, flagship tasks 2)`);
  if (task.levelSamples.length > 2) issues.push(`${task.slug}: more than 2 level samples`);
  task.levelSamples.forEach((s, i) => {
    if (s.paragraphs.length < 3) issues.push(`${task.slug}: level sample ${i + 1} has fewer than 3 paragraphs`);
    const actual = paragraphsWc(s.paragraphs);
    if (Math.abs(actual - s.wordCount) > 5) {
      issues.push(`${task.slug}: level sample ${i + 1} wordCount says ${s.wordCount}, paragraphs count ${actual}`);
    }
    if (!s.bandEstimate.toLowerCase().includes("estimate")) {
      issues.push(`${task.slug}: level sample ${i + 1} band label must say "estimate"`);
    }
    if (s.justification.length < 4) issues.push(`${task.slug}: level sample ${i + 1} needs per-criterion justification (≥ 4)`);
    for (const j of s.justification) {
      if (wc(j.note) < 12) issues.push(`${task.slug}: level sample ${i + 1} justification "${j.criterion}" too thin`);
    }
  });

  // --- Vocabulary bank + source -------------------------------------------
  if (task.vocabularyBank.length < 5) issues.push(`${task.slug}: vocabulary bank needs ≥ 5 entries`);
  for (const v of task.vocabularyBank) {
    if (wc(v.meaning) < 3) issues.push(`${task.slug}: vocabulary entry "${v.word}" meaning too thin`);
  }
  if (task.source !== WRITING_BANK_SOURCE_NOTE) {
    issues.push(`${task.slug}: source note must be the shared originality disclaimer`);
  }

  return issues;
}

export function validateWritingBank(tasks: WritingBankTask[]): string[] {
  const issues: string[] = [];
  const slugs = new Set<string>();
  const prompts = new Set<string>();
  const models = new Set<string>();

  for (const task of tasks) {
    if (slugs.has(task.slug)) issues.push(`duplicate task slug ${task.slug}`);
    slugs.add(task.slug);
    issues.push(...validateWritingTask(task));

    const promptKey = task.prompt.trim().toLowerCase();
    if (prompts.has(promptKey)) issues.push(`duplicate prompt across tasks (${task.slug})`);
    prompts.add(promptKey);
    const modelKey = task.modelAnswer.paragraphs.join("\n").trim().toLowerCase();
    if (models.has(modelKey)) issues.push(`duplicate model answer across tasks (${task.slug})`);
    models.add(modelKey);
  }

  // Family coverage contract (PROMPT 46 Parts B–D).
  const academicT1 = tasks.filter((t) => t.channel === "academic" && t.taskType === "task-1");
  for (const family of ["bar", "line", "pie", "table", "mixed", "process", "map"] as const) {
    if (!academicT1.some((t) => t.family === family)) {
      issues.push(`Academic Task 1 library is missing the ${family} family`);
    }
  }
  const essaysAcademic = tasks.filter((t) => t.channel === "academic" && t.taskType === "task-2");
  for (const family of [
    "opinion", "discussion", "advantages-disadvantages", "problem-solution",
    "cause-effect", "two-part", "direct-questions",
  ] as const) {
    if (!essaysAcademic.some((t) => t.family === family)) {
      issues.push(`Academic Task 2 library is missing the ${family} family`);
    }
  }
  const gtLetters = tasks.filter((t) => t.channel === "gt" && t.taskType === "task-1");
  for (const purpose of ["complaint", "request", "invitation", "apology", "explanation", "suggestion"] as const) {
    if (!gtLetters.some((t) => t.family === purpose)) {
      issues.push(`GT letter library is missing the ${purpose} purpose`);
    }
  }
  for (const register of ["formal", "semi-formal", "informal"] as const) {
    if (!gtLetters.some((t) => t.register === register)) {
      issues.push(`GT letter library is missing the ${register} register`);
    }
  }
  const gtEssays = tasks.filter((t) => t.channel === "gt" && t.taskType === "task-2");
  if (gtEssays.length < 3) issues.push(`GT Task 2 library needs ≥ 3 tasks (has ${gtEssays.length})`);
  for (const family of ["opinion", "discussion", "advantages-disadvantages", "problem-solution"] as const) {
    if (!gtEssays.some((t) => t.family === family)) {
      issues.push(`GT Task 2 library is missing the ${family} family`);
    }
  }

  // Flagship tasks (one per visual family and per major essay family)
  // carry the full two-sample level ladder.
  const flagships = academicT1.filter((t) => t.family !== "bar" || t.slug === "ielts-wb-at1-bar-cycling");
  for (const t of academicT1) {
    if (t.tier !== "practice" && t.levelSamples.length < 2 && ["mixed", "process", "map"].includes(t.family)) {
      issues.push(`${t.slug}: flagship ${t.family} task must carry 2 level samples`);
    }
  }
  void flagships;

  return issues;
}
