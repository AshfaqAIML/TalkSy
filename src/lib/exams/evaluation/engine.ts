/**
 * The evaluation engine.
 *
 * Orchestrates one evaluation:
 *   1. resolve the task profile (exam type, section, task, rubric) — the
 *      caller does this via tasks.ts; nothing is evaluated blind;
 *   2. run the deterministic layer (verified facts + rule-based checks +
 *      the grammar rule engine);
 *   3. ask the AI layer for criterion estimates, evidence-quoted feedback
 *      and coaching — via the provider seam, so tests install a fake and
 *      serverless deployments without credentials degrade to a partial
 *      (checks-only) report instead of failing;
 *   4. merge the layers, enforcing the hard contracts: no score without
 *      an explanation, evidence quotes must exist verbatim in the response,
 *      scores clamped to the task's scale, limitations stated honestly;
 *   5. run the learning loop (weaknesses → lessons → revision guidance).
 */

import { getLlmProvider } from "@/lib/llm";
import { withUsageLogging } from "@/lib/llm/usage";
import type { ResolvedTask } from "./tasks";
import {
  matchAgainstTarget,
  minimumReliableWords,
  runDeterministicAnalysis,
  type MatchAnalysis,
} from "./checks";
import { buildEvaluationPrompt } from "./prompts";
import { buildRevisionExercise, buildRevisionGuidance, buildWeaknesses, compareEvaluations } from "./learning-loop";
import type {
  CriterionScore,
  EvaluationCheck,
  EvaluationConfidence,
  EvaluationResultDto,
  EvaluationStatus,
  GrammarCorrection,
  IrrelevantContentItem,
  ModelResponse,
  ProvenanceLabel,
  TranscriptSource,
  VocabularySuggestion,
} from "./types";
import {
  EVALUATION_ACCENT_NOTE,
  EVALUATION_HUMAN_REVIEW_NOTE,
  EVALUATION_SCORE_DISCLAIMER,
} from "./types";

// ---------------------------------------------------------------------------
// Input / output
// ---------------------------------------------------------------------------

export type EvaluationInput = {
  resolved: ResolvedTask;
  response: string;
  transcriptSource: TranscriptSource;
  audioSec?: number | null;
  /** Server-side answer key (objective items), used for match accuracy. */
  answerKey?: unknown;
  /** Revision context: the evaluation this response revises. */
  isRevision?: boolean;
  priorResult?: EvaluationResultDto | null;
  /** Optional rubric ladder text (loaded from ExamRubric by the service). */
  rubricText?: string | null;
};

export type EvaluationOutput = {
  result: EvaluationResultDto;
  status: EvaluationStatus;
};

// ---------------------------------------------------------------------------
// Score helpers
// ---------------------------------------------------------------------------

function clampToScale(value: number, min: number, max: number, step: number): number {
  if (!Number.isFinite(value)) return min;
  const stepped = Math.round(value / step) * step;
  return Math.min(max, Math.max(min, Math.round(stepped * 100) / 100));
}

function formatOverallLabel(score: number, scale: { kind: string; unit: string }): string {
  if (scale.kind === "BAND") return `Estimated band ${score.toFixed(1)}`;
  if (scale.kind === "TOEFL_LEVEL") return `Estimated task level ${score.toFixed(1)} / 5`;
  return `Sentence accuracy ${Math.round(score)}%`;
}

function extractJson(text: string): unknown {
  const fenced = text.match(/```(?:json)?\s*([\s\S]*?)```/);
  const candidate = fenced ? fenced[1] : text;
  const start = candidate.indexOf("{");
  const end = candidate.lastIndexOf("}");
  if (start === -1 || end === -1 || end <= start) return null;
  try {
    return JSON.parse(candidate.slice(start, end + 1));
  } catch {
    return null;
  }
}

/** A quote is valid evidence only if it appears verbatim in the response. */
function quoteInResponse(quote: string, response: string): boolean {
  const needle = quote.trim().toLowerCase().replace(/\s+/g, " ");
  if (needle.length < 3) return false;
  return response.toLowerCase().replace(/\s+/g, " ").includes(needle);
}

// ---------------------------------------------------------------------------
// Coercion of the AI reply (defensive — never trust the model blindly)
// ---------------------------------------------------------------------------

type AiReply = {
  overall: { score: number; explanation: string } | null;
  criteria: CriterionScore[];
  grammarCorrections: Array<{ original: string; corrected: string; explanation: string }>;
  vocabulary: VocabularySuggestion[];
  sentenceFeedback: Array<{ quote: string; comment: string; kind: "strength" | "issue" | "neutral" }>;
  irrelevantContent: IrrelevantContentItem[];
  missingRequirements: string[];
  organisation: Array<{ issue: string; suggestion: string }>;
  recommendations: string[];
  pronunciation: Array<{ aspect: string; note: string }>;
  developmentSuggestions: string[];
  modelResponse: { text: string; note: string } | null;
};

function coerceString(value: unknown, max = 500): string {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

function coerceAiReply(parsed: unknown, resolved: ResolvedTask, response: string): AiReply | null {
  if (typeof parsed !== "object" || parsed === null) return null;
  const p = parsed as Record<string, unknown>;
  const { profile } = resolved;

  // Criteria: keys must match the profile; scores need explanations.
  const criteria: CriterionScore[] = [];
  if (Array.isArray(p.criteria)) {
    for (const raw of p.criteria) {
      if (typeof raw !== "object" || raw === null) continue;
      const r = raw as Record<string, unknown>;
      const key = coerceString(r.key, 60);
      const definition = profile.criteria.find((c) => c.key === key);
      if (!definition) continue;
      const explanation = coerceString(r.explanation);
      const score = Number(r.score);
      if (!explanation || !Number.isFinite(score)) continue; // no score without an explanation
      const evidence = Array.isArray(r.evidence)
        ? r.evidence
            .map((e) => {
              if (typeof e !== "object" || e === null) return null;
              const entry = e as Record<string, unknown>;
              const quote = coerceString(entry.quote, 300);
              if (!quoteInResponse(quote, response)) return null; // evidence must exist in the response
              return { quote, note: coerceString(entry.note, 300) };
            })
            .filter((e): e is { quote: string; note: string } => e !== null)
            .slice(0, 3)
        : [];
      criteria.push({
        key: definition.key,
        name: definition.name,
        score: clampToScale(score, profile.scale.min, profile.scale.max, profile.scale.step),
        maxScore: profile.scale.max,
        unit: profile.scale.unit,
        explanation,
        evidence,
        provenance: "AI_GENERATED",
      });
    }
  }

  const list = <T>(value: unknown, coerce: (raw: unknown) => T | null, cap: number): T[] =>
    Array.isArray(value)
      ? value.map(coerce).filter((item): item is T => item !== null).slice(0, cap)
      : [];

  const overallRaw = typeof p.overall === "object" && p.overall !== null ? (p.overall as Record<string, unknown>) : null;
  const overall =
    overallRaw && Number.isFinite(Number(overallRaw.score)) && coerceString(overallRaw.explanation).length > 0
      ? {
          score: Number(overallRaw.score),
          explanation: coerceString(overallRaw.explanation, 800),
        }
      : null;

  const modelRaw = typeof p.modelResponse === "object" && p.modelResponse !== null ? (p.modelResponse as Record<string, unknown>) : null;
  const modelResponse =
    modelRaw && coerceString(modelRaw.text, 2600).length >= 40 && coerceString(modelRaw.note).length > 0
      ? { text: coerceString(modelRaw.text, 2600), note: coerceString(modelRaw.note, 400) }
      : null;

  return {
    overall,
    criteria: profile.scale.kind === "ACCURACY" ? [] : criteria,
    grammarCorrections: list(p.grammarCorrections, (raw) => {
      if (typeof raw !== "object" || raw === null) return null;
      const r = raw as Record<string, unknown>;
      const original = coerceString(r.original, 300);
      const corrected = coerceString(r.corrected, 400);
      const explanation = coerceString(r.explanation, 400);
      if (!original || !corrected || !explanation) return null;
      if (!quoteInResponse(original, response)) return null;
      return { original, corrected, explanation };
    }, 5),
    vocabulary: list(p.vocabulary, (raw) => {
      if (typeof raw !== "object" || raw === null) return null;
      const r = raw as Record<string, unknown>;
      const original = coerceString(r.original, 200);
      const suggestion = coerceString(r.suggestion, 200);
      const reason = coerceString(r.reason, 300);
      if (!original || !suggestion || !reason) return null;
      return { original, suggestion, reason };
    }, 4),
    sentenceFeedback: list(p.sentenceFeedback, (raw) => {
      if (typeof raw !== "object" || raw === null) return null;
      const r = raw as Record<string, unknown>;
      const quote = coerceString(r.quote, 400);
      const comment = coerceString(r.comment, 400);
      const kind = r.kind === "strength" || r.kind === "issue" ? r.kind : "neutral";
      if (!quote || !comment) return null;
      if (!quoteInResponse(quote, response)) return null;
      return { quote, comment, kind };
    }, 4),
    irrelevantContent: list(p.irrelevantContent, (raw) => {
      if (typeof raw !== "object" || raw === null) return null;
      const r = raw as Record<string, unknown>;
      const quote = coerceString(r.quote, 400);
      const note = coerceString(r.note, 400);
      if (!quote || !note) return null;
      if (!quoteInResponse(quote, response)) return null; // evidence must exist in the response
      return { quote, note };
    }, 4),
    missingRequirements: list(p.missingRequirements, (raw) => {
      const text = coerceString(raw, 300);
      return text || null;
    }, 5),
    organisation: list(p.organisation, (raw) => {
      if (typeof raw !== "object" || raw === null) return null;
      const r = raw as Record<string, unknown>;
      const issue = coerceString(r.issue, 300);
      const suggestion = coerceString(r.suggestion, 300);
      if (!issue || !suggestion) return null;
      return { issue, suggestion };
    }, 4),
    recommendations: list(p.recommendations, (raw) => {
      const text = coerceString(raw, 300);
      return text || null;
    }, 5),
    pronunciation: list(p.pronunciation, (raw) => {
      if (typeof raw !== "object" || raw === null) return null;
      const r = raw as Record<string, unknown>;
      const aspect = coerceString(r.aspect, 80);
      const note = coerceString(r.note, 400);
      if (!aspect || !note) return null;
      return { aspect, note };
    }, 4),
    developmentSuggestions: list(p.developmentSuggestions, (raw) => {
      const text = coerceString(raw, 300);
      return text || null;
    }, 4),
    modelResponse,
  };
}

// ---------------------------------------------------------------------------
// Overall estimate
// ---------------------------------------------------------------------------

function buildOverall(
  profile: ResolvedTask["profile"],
  criteria: CriterionScore[],
  aiOverall: AiReply["overall"],
  match: MatchAnalysis,
): EvaluationResultDto["overall"] {
  // ACCURACY tasks: the overall is machine-measured, not estimated.
  if (profile.scale.kind === "ACCURACY") {
    if (!match) return null;
    const score = Math.round(match.matchScore * 100);
    return {
      score,
      maxScore: 100,
      unit: "% accurate",
      label: `Sentence accuracy ${score}%`,
      explanation: `Machine-measured word match against the target sentence${
        match.missedWords.length ? ` — not recognised: ${match.missedWords.join(", ")}` : " — every target word was recognised"
      }. The AI feedback below adds coaching on top of this verified number.`,
      provenance: "VERIFIED",
    };
  }

  // Scored tasks: the overall is the mean of the criterion estimates — the
  // same derivation the real tests use — so the number is always
  // explainable from the criteria, never an unexplained black box. A single
  // surviving criterion is too thin to average: fall back to the AI's own
  // overall, or no overall at all.
  if (criteria.length < 2) {
    if (!aiOverall) return null;
    const clamped = clampToScale(aiOverall.score, profile.scale.min, profile.scale.max, profile.scale.step);
    return {
      score: clamped,
      maxScore: profile.scale.max,
      unit: profile.scale.unit,
      label: formatOverallLabel(clamped, profile.scale),
      explanation: aiOverall.explanation,
      provenance: "ESTIMATED",
    };
  }

  const mean = criteria.reduce((sum, c) => sum + c.score, 0) / criteria.length;
  const clamped = clampToScale(mean, profile.scale.min, profile.scale.max, profile.scale.step);
  return {
    score: clamped,
    maxScore: profile.scale.max,
    unit: profile.scale.unit,
    label: formatOverallLabel(clamped, profile.scale),
    explanation:
      aiOverall?.explanation ??
      `Derived from the criterion estimates (${criteria.map((c) => `${c.name} ${c.score.toFixed(1)}`).join(", ")}): the overall is their average, as on the real test.`,
    provenance: "ESTIMATED",
  };
}

// ---------------------------------------------------------------------------
// Limitations
// ---------------------------------------------------------------------------

function buildLimitations(input: EvaluationInput, aiAvailable: boolean, status: EvaluationStatus): string[] {
  const limitations: string[] = [];
  const { profile } = input.resolved;

  if (status === "insufficient") {
    limitations.push(
      `The response is too short for a reliable evaluation (minimum ${minimumReliableWords(profile.key)} meaningful words for this task type). Write a fuller response and evaluate again.`,
    );
    return limitations;
  }

  if (profile.section === "speaking") {
    if (input.transcriptSource === "typed") {
      limitations.push(
        "No speech recognition was used for this response, so pronunciation and fluency are judged from the written text only — treat those parts as indicative, not measured.",
      );
    } else if (input.transcriptSource === "unknown") {
      limitations.push(
        "The transcript's source was not recorded, so pronunciation guidance is based on the written text only — treat those parts as indicative, not measured.",
      );
    } else {
      limitations.push(
        "Pronunciation guidance is derived from the transcript only; individual sounds and audio quality were not analysed. Words the recogniser missed may have been unclear — or simply mis-recognised.",
      );
    }
    if (
      (profile.key === "IELTS_SPEAKING" || profile.key === "TOEFL_SPEAKING_INTERVIEW") &&
      !input.audioSec
    ) {
      limitations.push(
        "Pause and pace analysis needs the recording duration, which was not provided — pace was not measured for this response.",
      );
    }
  }

  if (!aiAvailable) {
    limitations.push(
      "The AI evaluation layer was unavailable for this attempt — the report contains verified checks and rule-based analysis only, with no criterion estimates. Try evaluating again in a moment.",
    );
  }

  return limitations;
}

// ---------------------------------------------------------------------------
// Confidence (never fabricated precision — the honest reliability signal)
// ---------------------------------------------------------------------------

function buildConfidence(input: {
  profile: ResolvedTask["profile"];
  criteria: CriterionScore[];
  wordCount: number;
  minWords: number | null;
  transcriptSource: TranscriptSource;
  aiAvailable: boolean;
  overallPresent: boolean;
}): EvaluationConfidence {
  const reasons: string[] = [];
  let level: EvaluationConfidence["level"] = "higher";

  const downgrade = (to: EvaluationConfidence["level"], reason: string) => {
    reasons.push(reason);
    const rank = { higher: 0, moderate: 1, lower: 2 } as const;
    if (rank[to] > rank[level]) level = to;
  };

  // 1. Criterion spread: when the dimensions disagree strongly, the overall
  // average is a compromise, not a measurement.
  if (input.criteria.length >= 2) {
    const scores = input.criteria.map((c) => c.score);
    const spread = Math.max(...scores) - Math.min(...scores);
    const threshold = input.profile.scale.kind === "BAND" ? 1.5 : 1.5;
    if (spread >= threshold + 0.01) {
      downgrade(
        "lower",
        `The dimension estimates disagree by ${spread.toFixed(1)} ${input.profile.scale.unit}s (from ${Math.min(...scores).toFixed(1)} to ${Math.max(...scores).toFixed(1)}) — the overall average is a compromise between them, which makes it less certain.`,
      );
    }
  }

  // 2. Thin responses are harder to judge.
  if (input.minWords !== null && input.wordCount > 0 && input.wordCount < input.minWords * 1.15) {
    downgrade(
      "moderate",
      `The response is close to the minimum length (${input.wordCount} words vs ${input.minWords} expected) — short responses give less evidence per criterion.`,
    );
  }

  // 3. Speaking judged from a typed or source-unknown transcript: pronunciation
  // and fluency are inferred from text, not measured from speech.
  if (
    input.profile.section === "speaking" &&
    (input.transcriptSource === "typed" || input.transcriptSource === "unknown")
  ) {
    downgrade(
      "moderate",
      "Pronunciation and fluency were judged from the written transcript only (no speech recognition was used).",
    );
  }

  // 4. Fewer surviving criteria than the profile defines.
  if (!input.aiAvailable) {
    downgrade("lower", "The AI layer was unavailable — this report contains verified checks and rule-based findings only, with no criterion estimates.");
  } else if (input.criteria.length > 0 && input.criteria.length < input.profile.criteria.length) {
    downgrade(
      "moderate",
      `Only ${input.criteria.length} of ${input.profile.criteria.length} criteria could be estimated for this response.`,
    );
  }

  if (reasons.length === 0) {
    reasons.push(
      "The verified checks, rule-based findings and AI feedback agree with each other, and the response is long enough to judge every criterion.",
    );
  }
  return { level, reasons };
}

// ---------------------------------------------------------------------------
// Model response (deterministic for accuracy tasks, AI for scored tasks)
// ---------------------------------------------------------------------------

function resolveModelResponse(
  profile: ResolvedTask["profile"],
  match: MatchAnalysis,
  aiModel: { text: string; note: string } | null,
): ModelResponse | null {
  // Build a Sentence / Listen and Repeat: the target sentence IS the model.
  // Machine-known, verbatim — no AI writing needed.
  if (profile.scale.kind === "ACCURACY") {
    if (match) {
      return {
        text: match.target,
        note: "The target sentence itself — the exact wording to build/repeat. Your version was compared word-by-word against it.",
        provenance: "VERIFIED",
      };
    }
    return null;
  }
  if (aiModel) {
    return { ...aiModel, provenance: "AI_GENERATED" };
  }
  return null;
}

// ---------------------------------------------------------------------------
// Main entry
// ---------------------------------------------------------------------------

export async function evaluateResponse(input: EvaluationInput): Promise<EvaluationOutput> {
  const { resolved, response } = input;
  const { profile } = resolved;
  const text = response.trim();

  const analysis = runDeterministicAnalysis(resolved, text, {
    audioSec: input.audioSec ?? null,
    transcriptSource: input.transcriptSource,
    answerKey: input.answerKey,
  });
  const match = matchAgainstTarget(resolved, text, input.answerKey);

  const isSpeaking = profile.section === "speaking";
  const disclaimers = [
    EVALUATION_SCORE_DISCLAIMER,
    ...(isSpeaking ? [EVALUATION_ACCENT_NOTE] : []),
    EVALUATION_HUMAN_REVIEW_NOTE,
  ];

  const base = {
    evaluatorKey: profile.key,
    examKey: profile.examKey,
    examLabel: profile.examLabel,
    section: profile.section,
    taskTitle: resolved.taskTitle,
    taskLabel: profile.taskLabel,
    createdAt: new Date().toISOString(),
    transcript: isSpeaking ? text : null,
    transcriptSource: input.transcriptSource,
    wordCount: analysis.metrics.wordCount,
  };

  // ---- Too short to evaluate reliably ----------------------------------
  if (analysis.metrics.wordCount < minimumReliableWords(profile.key)) {
    const result: EvaluationResultDto = {
      ...base,
      overall: null,
      criteria: [],
      checks: analysis.checks,
      grammarCorrections: analysis.grammar,
      vocabulary: [],
      sentenceFeedback: [],
      irrelevantContent: [],
      missingRequirements: [],
      organisation: [],
      recommendations: [],
      pronunciation: [],
      developmentSuggestions: [],
      weaknesses: [],
      revisionGuidance:
        "Write a complete response to the task prompt first — evaluation needs enough language to judge.",
      revisionExercise: null,
      modelResponse: null,
      confidence: {
        level: "lower",
        reasons: ["The response is too short to evaluate — no estimates were made."],
      },
      limitations: [],
      disclaimers,
      aiAvailable: false,
    };
    result.limitations = buildLimitations(input, false, "insufficient");
    return { result, status: "insufficient" };
  }

  // ---- AI layer ---------------------------------------------------------
  // Uses the provider seam: tests install a fake; serverless deployments
  // without credentials make the provider throw, which degrades to a
  // checks-only partial report (never a crash, never invented feedback).
  let ai: AiReply | null = null;
  try {
    const provider = withUsageLogging(getLlmProvider(), { feature: "exam-evaluation" });
    const { system, user } = buildEvaluationPrompt({
      resolved,
      response: text,
      analysis,
      match,
      transcriptSource: input.transcriptSource,
      audioSec: input.audioSec ?? null,
      rubricText: input.rubricText ?? null,
      isRevision: input.isRevision ?? false,
      priorWeaknesses: (input.priorResult?.weaknesses ?? []).map((w) => w.label),
    });
    const reply = await provider.complete({ system, messages: [{ role: "user", content: user }], timeoutMs: 45_000 });
    ai = coerceAiReply(extractJson(reply), resolved, text);
  } catch {
    ai = null; // provider unavailable / timeout / unparsable → partial report
  }

  // ---- Merge grammar (rule-based first, then AI, deduped) ---------------
  const grammar: GrammarCorrection[] = [...analysis.grammar];
  if (ai) {
    for (const correction of ai.grammarCorrections) {
      const duplicate = grammar.some(
        (existing) =>
          existing.original.toLowerCase().includes(correction.original.toLowerCase().slice(0, 20)) ||
          correction.original.toLowerCase().includes(existing.original.toLowerCase().slice(0, 20)),
      );
      if (!duplicate) grammar.push({ ...correction, provenance: "AI_GENERATED" });
    }
  }

  // ---- Criteria -----------------------------------------------------------
  const criteria: CriterionScore[] = [];
  if (profile.scale.kind === "ACCURACY") {
    if (match) {
      const definition = profile.criteria.find((c) => c.key === "sentence-accuracy") ?? profile.criteria[0];
      criteria.push({
        key: definition.key,
        name: definition.name,
        score: Math.round(match.matchScore * 100),
        maxScore: 100,
        unit: "% accurate",
        explanation: `Machine-measured: ${Math.round(match.matchScore * 100)}% of the target sentence's words were recognised in your response${
          match.missedWords.length ? `; missing: ${match.missedWords.join(", ")}` : ""
        }.`,
        evidence: text ? [{ quote: text.slice(0, 300), note: "Your full response, compared word-by-word with the target." }] : [],
        provenance: "VERIFIED",
      });
      const languageUse = ai?.criteria.find((c) => c.key === "language-use");
      // ACCURACY profiles never take AI scores — only verified accuracy.
      void languageUse;
    }
  } else if (ai && ai.criteria.length > 0) {
    criteria.push(...ai.criteria);
  }

  // ---- Overall -----------------------------------------------------------
  const overall = buildOverall(profile, criteria, ai?.overall ?? null, match);

  // ---- Weaknesses + revision guidance (learning loop) --------------------
  const irrelevantContent = ai?.irrelevantContent ?? [];
  const weaknesses = buildWeaknesses({
    profile,
    criteria,
    checks: analysis.checks,
    grammarCorrectionCount: grammar.length,
    vocabularyCount: ai?.vocabulary.length ?? 0,
    missingRequirements: ai?.missingRequirements ?? [],
    organisationCount: ai?.organisation.length ?? 0,
    irrelevantCount: irrelevantContent.length,
    wordCount: analysis.metrics.wordCount,
  });
  const revisionGuidance = buildRevisionGuidance(weaknesses);
  const revisionExercise = buildRevisionExercise({
    profile,
    weaknesses,
    grammarCorrections: grammar,
    checks: analysis.checks,
    language: analysis.language,
  });

  // ---- Confidence + model response ----------------------------------------
  const minWords =
    typeof (resolved.payload as Record<string, unknown>).minWords === "number"
      ? ((resolved.payload as Record<string, unknown>).minWords as number)
      : profile.minWordsDefault;
  const confidence = buildConfidence({
    profile,
    criteria,
    wordCount: analysis.metrics.wordCount,
    minWords,
    transcriptSource: input.transcriptSource,
    aiAvailable: ai !== null,
    overallPresent: overall !== null,
  });
  const modelResponse = resolveModelResponse(profile, match, ai?.modelResponse ?? null);

  const aiAvailable = ai !== null;
  const status: EvaluationStatus =
    aiAvailable && (profile.scale.kind === "ACCURACY" || criteria.length > 0)
      ? "complete"
      : aiAvailable
        ? "complete" // AI replied with coaching but no scores — still useful, criteria derived where possible
        : "partial";

  const result: EvaluationResultDto = {
    ...base,
    overall,
    criteria,
    checks: analysis.checks,
    grammarCorrections: grammar.slice(0, 8),
    vocabulary: ai?.vocabulary ?? [],
    sentenceFeedback: ai?.sentenceFeedback ?? [],
    irrelevantContent,
    missingRequirements: ai?.missingRequirements ?? [],
    organisation: ai?.organisation ?? [],
    recommendations: ai?.recommendations ?? [],
    pronunciation: ai?.pronunciation ?? [],
    developmentSuggestions: ai?.developmentSuggestions ?? [],
    weaknesses,
    revisionGuidance,
    revisionExercise,
    modelResponse,
    confidence,
    limitations: [],
    disclaimers,
    aiAvailable,
  };
  result.limitations = buildLimitations(input, aiAvailable, status);
  if (confidence.level === "lower") {
    result.limitations = [
      ...result.limitations,
      "Lower confidence: the signals in this report disagree more than usual. Treat the estimates as rough, and consider asking a qualified teacher to review this response before acting on the numbers.",
    ];
  }

  return { result, status };
}

export { compareEvaluations };
