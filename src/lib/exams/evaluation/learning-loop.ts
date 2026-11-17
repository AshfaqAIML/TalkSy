/**
 * The learning loop.
 *
 * After every evaluation this module:
 *   1. identifies the learner's major weaknesses (criterion levels, failed
 *      task-requirement checks, error density, missing requirements);
 *   2. maps each weakness onto EXISTING EnglishPath lessons via the shared
 *      bridge rules (src/lib/exams/recommend.ts) — the academy never
 *      duplicates curriculum content;
 *   3. recommends concrete practice;
 *   4. produces the revision instruction for the learner's next step;
 *   5. compares a revision against its base evaluation to track improvement.
 */

import { BRIDGE_RULES, EXAM_DRILLS } from "../recommend";
import type { LanguageAnalysis } from "./checks";
import type { ResolvedTask } from "./tasks";
import type {
  CriterionScore,
  EvaluationCheck,
  EvaluationComparisonDto,
  EvaluationResultDto,
  GrammarCorrection,
  LessonRef,
  RevisionExercise,
  WeaknessDto,
} from "./types";

// ---------------------------------------------------------------------------
// Lesson mapping (reuses the academy's bridge rules — no content duplication)
// ---------------------------------------------------------------------------

export function lessonRefsFor(section: "writing" | "speaking", tags: string[]): LessonRef[] {
  const refs: LessonRef[] = [];
  const seen = new Set<string>();
  for (const rule of BRIDGE_RULES) {
    if (rule.section !== section) continue;
    const matched = rule.tags.some((tag) => tags.includes(tag));
    if (!matched) continue;
    for (const ref of rule.refs) {
      if (seen.has(ref.href)) continue;
      seen.add(ref.href);
      refs.push({ title: ref.title, source: ref.source, href: ref.href, minutes: ref.minutes });
    }
  }
  return refs.slice(0, 3);
}

function practiceSuggestions(profileKey: string, examKey: string): string[] {
  const drill = EXAM_DRILLS[examKey];
  const out = [
    "Re-attempt this task type in Untimed learning mode first, then under the clock in Timed practice — the report tracks both.",
  ];
  if (drill) out.push(`${drill.title} (${drill.href}) — exam-technique repetition for ${examKey === "IELTS" ? "IELTS" : "TOEFL iBT"}.`);
  if (profileKey.includes("SPEAKING")) {
    out.push("Read your corrected sentences aloud twice — hearing the fix locks it in better than reading.");
  } else {
    out.push("Re-write only your weakest paragraph before revising the whole response — focused reps beat full rewrites.");
  }
  return out;
}

// ---------------------------------------------------------------------------
// Weakness identification
// ---------------------------------------------------------------------------

type WeaknessCandidate = {
  area: string;
  label: string;
  severity: "major" | "moderate" | "minor";
  evidence: string;
  tags: string[];
};

function criterionSeverity(score: number, scaleKind: string): "major" | "moderate" | "minor" | null {
  if (scaleKind === "BAND") {
    if (score < 5) return "major";
    if (score < 6.5) return "moderate";
    if (score < 7.5) return "minor";
    return null;
  }
  if (scaleKind === "TOEFL_LEVEL") {
    if (score < 2.5) return "major";
    if (score < 3.5) return "moderate";
    if (score < 4.5) return "minor";
    return null;
  }
  // ACCURACY (0–100)
  if (score < 60) return "major";
  if (score < 80) return "moderate";
  if (score < 95) return "minor";
  return null;
}

const CHECK_WEAKNESS_MAP: Record<string, { area: string; label: string; severity: "major" | "moderate" | "minor"; tags: string[] }> = {
  "word-count": { area: "task-requirements", label: "Task length", severity: "major", tags: ["task-response"] },
  "email-brevity": { area: "task-requirements", label: "Email length", severity: "minor", tags: ["task-response"] },
  overview: { area: "task-response", label: "Overview statement", severity: "moderate", tags: ["task-response", "structure"] },
  "data-reference": { area: "task-response", label: "Reporting the data", severity: "moderate", tags: ["task-response", "detail"] },
  position: { area: "task-response", label: "Stating your position", severity: "moderate", tags: ["task-response"] },
  paragraphing: { area: "coherence", label: "Paragraphing", severity: "moderate", tags: ["coherence", "structure", "organization"] },
  greeting: { area: "task-requirements", label: "Opening greeting", severity: "moderate", tags: ["task-response"] },
  signoff: { area: "task-requirements", label: "Closing sign-off", severity: "moderate", tags: ["task-response"] },
  purpose: { area: "task-requirements", label: "Purpose statement", severity: "moderate", tags: ["task-response"] },
  "discussion-engagement": { area: "task-response", label: "Engaging classmates", severity: "moderate", tags: ["task-response", "coherence"] },
  "sentence-match": { area: "sentence-accuracy", label: "Sentence accuracy", severity: "major", tags: ["sentence", "grammar"] },
  "repeat-match": { area: "sentence-accuracy", label: "Repetition accuracy", severity: "major", tags: ["sentence", "pronunciation"] },
  "spoken-length": { area: "response-development", label: "Response length", severity: "moderate", tags: ["fluency", "task-response"] },
  fillers: { area: "fluency", label: "Filler words", severity: "minor", tags: ["fluency"] },
  repetition: { area: "fluency", label: "Self-repetition", severity: "minor", tags: ["fluency"] },
  "run-on": { area: "sentence-construction", label: "Spoken sentence length", severity: "minor", tags: ["sentence", "grammar"] },
  // Language-analysis dimensions (PROMPT 52).
  "sentence-structure": { area: "sentence-construction", label: "Sentence structure", severity: "moderate", tags: ["sentence", "grammar", "structure"] },
  punctuation: { area: "punctuation", label: "Punctuation and mechanics", severity: "moderate", tags: ["punctuation", "grammar"] },
  "pace-pauses": { area: "fluency", label: "Pace and pauses", severity: "moderate", tags: ["fluency", "pronunciation"] },
};

function bulletWeaknessLabel(checkId: string): string | null {
  if (!checkId.startsWith("bullet-")) return null;
  return `Covering bullet ${checkId.replace("bullet-", "")}`;
}

export function buildWeaknesses(input: {
  profile: ResolvedTask["profile"];
  criteria: CriterionScore[];
  checks: EvaluationCheck[];
  grammarCorrectionCount: number;
  vocabularyCount: number;
  missingRequirements: string[];
  organisationCount: number;
  irrelevantCount: number;
  wordCount: number;
}): WeaknessDto[] {
  const { profile } = input;
  const candidates: WeaknessCandidate[] = [];

  // 1. Criterion levels
  for (const criterion of input.criteria) {
    const severity = criterionSeverity(criterion.score, profile.scale.kind);
    if (!severity) continue;
    candidates.push({
      area: criterion.key,
      label: criterion.name,
      severity,
      evidence: criterion.explanation.slice(0, 220),
      tags: profile.criteria.find((c) => c.key === criterion.key)?.tags ?? [criterion.key],
    });
  }

  // 2. Failed task-requirement checks
  for (const check of input.checks) {
    if (check.passed) continue;
    const bulletLabel = bulletWeaknessLabel(check.id);
    if (bulletLabel) {
      candidates.push({
        area: "task-requirements",
        label: bulletLabel,
        severity: "moderate",
        evidence: check.detail.slice(0, 220),
        tags: ["task-response"],
      });
      continue;
    }
    const mapped = CHECK_WEAKNESS_MAP[check.id];
    if (mapped) {
      candidates.push({
        area: mapped.area,
        label: mapped.label,
        severity: mapped.severity,
        evidence: check.detail.slice(0, 220),
        tags: mapped.tags,
      });
    }
  }

  // 3. Error density (grammar)
  if (input.grammarCorrectionCount > 0) {
    const per100 = (input.grammarCorrectionCount / Math.max(input.wordCount, 20)) * 100;
    const severity = per100 > 8 ? "major" : per100 > 4 ? "moderate" : "minor";
    candidates.push({
      area: "grammar-accuracy",
      label: "Grammar accuracy",
      severity,
      evidence: `${input.grammarCorrectionCount} correctable grammar points found in ${input.wordCount} words.`,
      tags: ["grammar", "accuracy", "sentence"],
    });
  }

  // 4. Vocabulary
  if (input.vocabularyCount >= 2) {
    candidates.push({
      area: "lexical-range",
      label: "Vocabulary range",
      severity: input.vocabularyCount >= 4 ? "moderate" : "minor",
      evidence: `${input.vocabularyCount} vocabulary upgrades suggested for this task.`,
      tags: ["vocabulary", "word-choice", "lexical"],
    });
  }

  // 5. Missing requirements / organisation / relevance (AI-identified)
  if (input.missingRequirements.length > 0) {
    candidates.push({
      area: "task-requirements",
      label: "Missing task requirements",
      severity: "major",
      evidence: input.missingRequirements.slice(0, 2).join(" ") .slice(0, 220),
      tags: ["task-response"],
    });
  }
  if (input.organisationCount >= 2) {
    candidates.push({
      area: "coherence",
      label: "Organisation",
      severity: "moderate",
      evidence: `${input.organisationCount} organisation issues flagged in the feedback.`,
      tags: ["coherence", "cohesion", "structure", "organization"],
    });
  }
  if (input.irrelevantCount > 0) {
    candidates.push({
      area: "relevance",
      label: "Off-task content",
      severity: input.irrelevantCount >= 2 ? "major" : "moderate",
      evidence: `${input.irrelevantCount} piece${input.irrelevantCount === 1 ? "" : "s"} of off-task content flagged — content that does not serve the task lowers the task-response score.`,
      tags: ["task-response", "coherence"],
    });
  }

  // Rank: major first, then moderate, then minor; dedupe by area keeping the worst.
  const rank = { major: 0, moderate: 1, minor: 2 } as const;
  const byArea = new Map<string, WeaknessCandidate>();
  for (const candidate of candidates) {
    const existing = byArea.get(candidate.area);
    if (!existing || rank[candidate.severity] < rank[existing.severity]) {
      byArea.set(candidate.area, candidate);
    }
  }

  const ordered = [...byArea.values()].sort((a, b) => rank[a.severity] - rank[b.severity]);
  const practice = practiceSuggestions(profile.key, profile.examKey);

  return ordered.slice(0, 5).map((candidate) => ({
    area: candidate.area,
    label: candidate.label,
    severity: candidate.severity,
    evidence: candidate.evidence,
    lessons: lessonRefsFor(profile.section, candidate.tags),
    practice,
  }));
}

// ---------------------------------------------------------------------------
// Revision guidance + structured revision exercise
// ---------------------------------------------------------------------------

export function buildRevisionGuidance(weaknesses: WeaknessDto[]): string | null {
  if (weaknesses.length === 0) return null;
  const top = weaknesses.slice(0, 3);
  const steps = top
    .map((weakness, index) => `${index + 1}) ${weakness.label} — ${weakness.evidence}`)
    .join(" ");
  return `Revise your response addressing these points: ${steps} Then submit the revision here — it will be re-evaluated against the same rubric and the improvement tracked.`;
}

/**
 * The structured revision exercise (PROMPT 52 feedback element 9).
 * Deterministic: every step is derived from THIS evaluation's findings —
 * failed checks, grammar corrections, over-used words and the model
 * response — so the exercise is always concrete and checkable.
 */
export function buildRevisionExercise(input: {
  profile: ResolvedTask["profile"];
  weaknesses: WeaknessDto[];
  grammarCorrections: GrammarCorrection[];
  checks: EvaluationCheck[];
  language: LanguageAnalysis;
}): RevisionExercise | null {
  const { profile, weaknesses, grammarCorrections, checks, language } = input;
  if (weaknesses.length === 0 && grammarCorrections.length === 0 && checks.every((c) => c.passed)) return null;

  const steps: string[] = [];

  // 1. Fix the exact grammar points found (rule-based first — they are facts).
  const ruleCorrections = grammarCorrections.filter((g) => g.provenance === "RULE_BASED");
  const chosen = (ruleCorrections.length > 0 ? ruleCorrections : grammarCorrections).slice(0, 3);
  if (chosen.length > 0) {
    steps.push(
      `Re-write these sentences correctly and say the rule to yourself as you fix them: ${chosen
        .map((c) => `"${c.original}" → "${c.corrected}"`)
        .join("; ")}.`,
    );
  }

  // 2. Failed task-requirement checks → concrete additions.
  const failed = checks.filter((c) => !c.passed).slice(0, 3);
  for (const check of failed) {
    switch (check.id) {
      case "overview":
        steps.push("Add one overview sentence starting 'Overall,' that states the main trend, difference or stage — not every detail.");
        break;
      case "position":
        steps.push("State your position explicitly in the introduction and echo it in the conclusion (e.g. 'In my opinion, …').");
        break;
      case "data-reference":
        steps.push("Add at least two precise figures or comparisons from the data (numbers, percentages, or 'twice as many as …').");
        break;
      case "paragraphing":
        steps.push("Split the response into clear paragraphs: one idea per paragraph, with an introduction and a conclusion.");
        break;
      case "greeting":
        steps.push("Open with an appropriate greeting for the reader (e.g. 'Dear Professor Klein,' or 'Hi Anna,').");
        break;
      case "signoff":
        steps.push("Close with a suitable sign-off ('Best regards,' / 'Yours faithfully,') followed by a name line.");
        break;
      case "purpose":
        steps.push("Add one sentence stating your purpose early (e.g. 'I am writing to ask about …').");
        break;
      case "word-count":
        steps.push(`Expand the response to at least ${profile.minWordsDefault ?? 150} words by developing the ideas you already have — not by repeating them.`);
        break;
      case "discussion-engagement":
        steps.push("Refer to at least one classmate by name and respond to their idea (agree and extend, or respectfully disagree)." );
        break;
      case "sentence-structure": {
        const ss = language.sentenceStructure;
        const bits: string[] = [];
        if (ss.runOnCount > 0) bits.push("split the longest sentence into two");
        if (ss.fragmentCount > 0) bits.push("give every fragment a subject and a finite verb");
        if (ss.repeatedOpenings) bits.push(`vary the sentence openings (several currently start with "${ss.repeatedOpenings}")`);
        steps.push(`Repair the sentence structure: ${bits.join("; ")}.`);
        break;
      }
      case "punctuation": {
        const bits: string[] = [];
        if (language.punctuation.missingTerminal > 0) bits.push("end every sentence with a full stop, question mark or exclamation mark");
        if (language.punctuation.lowercaseStarts > 0) bits.push("start every sentence with a capital letter");
        if (language.punctuation.commaSplices > 0) bits.push("repair every comma splice with a full stop, semicolon or conjunction");
        if (language.punctuation.missingApostrophes.length > 0) bits.push(`add the missing apostrophe(s): ${language.punctuation.missingApostrophes.slice(0, 4).join(", ")}`);
        steps.push(`Fix the punctuation: ${bits.join("; ")}.`);
        break;
      }
      case "repetition": {
        const words = language.repetition.overusedWords.map((w) => `"${w.word}" (×${w.count})`).slice(0, 3).join(", ");
        steps.push(
          words
            ? `Replace the over-used word${language.repetition.overusedWords.length === 1 ? "" : "s"} ${words} with precise alternatives (use a thesaurus, then check each choice in context).`
            : "Rewrite one repeated phrase so each idea is expressed freshly.",
        );
        break;
      }
      case "pace-pauses":
        steps.push("Rehearse the answer once more aiming for fewer silent gaps — mark on paper where a short breath is natural, and keep speaking through the rest.");
        break;
      default:
        if (check.id.startsWith("bullet-")) {
          steps.push(`Cover bullet ${check.id.replace("bullet-", "")} with at least one dedicated, specific sentence.`);
        }
        break;
    }
  }

  // 3. Vocabulary variation when repetition was flagged but no check failed.
  if (steps.length < 3 && language.repetition.overusedWords.length > 0) {
    steps.push(
      `Rewrite three sentences replacing "${language.repetition.overusedWords[0]?.word}" with a more precise alternative each time.`,
    );
  }

  // 4. Compare against the model response as a final step.
  steps.push(
    profile.section === "speaking"
      ? "Read the model answer aloud twice, then re-record your answer WITHOUT looking at it — compare structure, not wording."
      : "Read the model response once, close it, then rewrite your weakest paragraph from memory — compare structure and vocabulary, not wording.",
  );

  const focusAreas = weaknesses.slice(0, 3).map((w) => w.label);
  return {
    title: `Revision exercise — ${profile.taskLabel}`,
    instructions:
      "Work through every step below in order, editing your own response (do not copy the model). Then submit the revised response for re-evaluation against the same rubric — the improvement is tracked automatically.",
    steps: steps.slice(0, 6),
    focusAreas,
  };
}

// ---------------------------------------------------------------------------
// Improvement tracking
// ---------------------------------------------------------------------------

export function compareEvaluations(
  base: EvaluationResultDto,
  revised: EvaluationResultDto,
  ids: { baseId: string; revisedId: string } = { baseId: "", revisedId: "" },
): EvaluationComparisonDto {
  const unit = revised.criteria[0]?.unit ?? base.criteria[0]?.unit ?? "level";
  const criteriaDeltas = revised.criteria.map((criterion) => {
    const before = base.criteria.find((c) => c.key === criterion.key);
    return {
      key: criterion.key,
      name: criterion.name,
      before: before?.score ?? 0,
      after: criterion.score,
      delta: Math.round(((criterion.score - (before?.score ?? 0)) * 10)) / 10,
      unit: criterion.unit,
    };
  });

  const baseAreas = new Set(base.weaknesses.map((w) => w.area));
  const revisedAreas = new Set(revised.weaknesses.map((w) => w.area));
  const resolved = [...baseAreas].filter((area) => !revisedAreas.has(area));
  const remaining = [...revisedAreas];

  return {
    baseId: ids.baseId,
    revisedId: ids.revisedId,
    overallBefore: base.overall?.score ?? null,
    overallAfter: revised.overall?.score ?? null,
    overallDelta:
      base.overall && revised.overall
        ? Math.round((revised.overall.score - base.overall.score) * 10) / 10
        : null,
    unit,
    criteria: criteriaDeltas,
    resolvedWeaknesses: resolved,
    remainingWeaknesses: remaining,
    wordCountBefore: base.wordCount,
    wordCountAfter: revised.wordCount,
  };
}
