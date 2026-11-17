/**
 * AI prompt construction for the evaluation engine.
 *
 * One prompt per evaluator profile. The prompts encode the feedback-quality
 * and safeguard rules as hard instructions:
 *   - never a score without an explanation;
 *   - every evidence quote copied verbatim from the learner's response;
 *   - regional accents and World English varieties are never errors;
 *   - verified/rule-based results are given as facts the AI must respect;
 *   - reply with a JSON object only, in the documented shape.
 */

import type { ResolvedTask } from "./tasks";
import type { DeterministicAnalysis, MatchAnalysis } from "./checks";

export const ACCENT_RULE =
  "Accents are not errors. Regional accents and all World English varieties (Indian, British, American, Australian, Nigerian, Chinese, and others) must never be marked down or 'corrected'. Only note pronunciation features that genuinely affect intelligibility for a listener.";

export const VARIETY_RULE =
  "Treat regional language varieties (British/American/Indian/Australian and others) as correct; do not 'correct' spelling or usage that belongs to a variety.";

export const EVIDENCE_RULE =
  "Every judgement needs evidence: quote the learner's own words VERBATIM in 'quote' fields. Never invent, paraphrase or polish a quote — copy it exactly from the response. If evidence for a point is thin, say so in the explanation instead of inventing a quote.";

export const EXPLANATION_RULE =
  "Never give a score without an explanation. Every criterion score and the overall score MUST carry a concrete explanation citing what in the response supports it.";

export const IRRELEVANCE_RULE =
  "Flag content that does not serve the task (memorised chunks, off-topic sentences, opinions in a data report) in 'irrelevantContent', quoting the learner's words verbatim and saying why the content is off-task. Use an empty array when everything is on-task — never invent irrelevance. Accent, regional variety and spelling differences are NEVER irrelevant content.";

export const MODEL_RESPONSE_RULE =
  "Write one short model response for this exact task in 'modelResponse'. Pitch it one small step above the learner's level, follow the task rules yourself (word counts, tone, structure), and keep the note to one sentence on what to learn from it. It is a study example, never 'the correct answer' — if the task allows many valid answers, say so in the note.";

const JSON_SHAPE_SCORED = `{
  "overall": { "score": <number>, "explanation": "<2-3 sentences: what drives the level, with specifics>" },
  "criteria": [ { "key": "<criterion key>", "score": <number>, "explanation": "<2-3 sentences with evidence>", "evidence": [ { "quote": "<verbatim quote>", "note": "<why this quote matters>" } ] } ],
  "grammarCorrections": [ { "original": "<quote with the error>", "corrected": "<fixed version>", "explanation": "<the rule in one or two sentences>" } ],
  "vocabulary": [ { "original": "<word/phrase used>", "suggestion": "<better option for this task>", "reason": "<why it fits the task better>" } ],
  "sentenceFeedback": [ { "quote": "<one sentence, verbatim>", "comment": "<what works or what to change>", "kind": "strength" | "issue" | "neutral" } ],
  "irrelevantContent": [ { "quote": "<verbatim off-task content>", "note": "<why it does not serve the task>" } ],
  "missingRequirements": ["<task requirement the response fails to meet>"],
  "organisation": [ { "issue": "<organisation problem with location>", "suggestion": "<how to fix it>" } ],
  "recommendations": ["<specific, actionable next step>"],
  "developmentSuggestions": ["<how to extend or deepen the response>"],
  "modelResponse": { "text": "<a full model response: IELTS Task 1 ≈ 150-180 words; IELTS Task 2 ≈ 250-280 words; TOEFL email ≈ 80-120 words; TOEFL discussion ≈ 100-130 words>", "note": "<one sentence: what to learn from this example>" }
}`;

const JSON_SHAPE_ACCURACY = `{
  "grammarCorrections": [ { "original": "<quote with the error>", "corrected": "<fixed version>", "explanation": "<the rule>" } ],
  "vocabulary": [ { "original": "<word used>", "suggestion": "<better option>", "reason": "<why>" } ],
  "sentenceFeedback": [ { "quote": "<verbatim>", "comment": "<what to change>", "kind": "issue" | "strength" | "neutral" } ],
  "irrelevantContent": [ { "quote": "<verbatim off-task content>", "note": "<why it does not serve the task>" } ],
  "missingRequirements": ["<anything missing from the required response>"],
  "recommendations": ["<specific next step>"],
  "pronunciation": [ { "aspect": "<e.g. word stress, endings, clarity>", "note": "<guidance grounded in the transcript; accents are never errors>" } ]
}`;

const JSON_SHAPE_SPEAKING_SCORED = `{
  "overall": { "score": <number>, "explanation": "<2-3 sentences>" },
  "criteria": [ { "key": "<criterion key>", "score": <number>, "explanation": "<2-3 sentences with quoted evidence>", "evidence": [ { "quote": "<verbatim quote>", "note": "<why it matters>" } ] } ],
  "grammarCorrections": [ { "original": "<quote>", "corrected": "<fixed>", "explanation": "<the rule>" } ],
  "vocabulary": [ { "original": "<word/phrase used>", "suggestion": "<better option>", "reason": "<why>" } ],
  "sentenceFeedback": [ { "quote": "<verbatim>", "comment": "<what works or what to change>", "kind": "strength" | "issue" | "neutral" } ],
  "missingRequirements": ["<missing part of the task>"],
  "organisation": [ { "issue": "<structure problem>", "suggestion": "<fix>" } ],
  "recommendations": ["<specific next step>"],
  "developmentSuggestions": ["<how to develop the response further>"],
  "pronunciation": [ { "aspect": "<e.g. word stress, sentence rhythm, endings>", "note": "<guidance grounded in the transcript; accents are never errors>" } ],
  "modelResponse": { "text": "<a spoken-style model answer of 80-140 words for this question>", "note": "<one sentence: what to learn from it>" }
}`;

export type PromptContext = {
  resolved: ResolvedTask;
  /** The learner's response text (writing) or transcript (speaking). */
  response: string;
  analysis: DeterministicAnalysis;
  match: MatchAnalysis;
  transcriptSource: string;
  audioSec: number | null;
  rubricText: string | null;
  isRevision: boolean;
  priorWeaknesses: string[];
};

function criteriaList(resolved: ResolvedTask): string {
  return resolved.profile.criteria
    .map((c) => `- ${c.key} — ${c.name}: ${c.description}\n    strong: ${c.anchors.high}\n    mid: ${c.anchors.mid}\n    weak: ${c.anchors.low}`)
    .join("\n");
}

function deterministicSummary(context: PromptContext): string {
  const { analysis, match, audioSec } = context;
  const lines: string[] = [];
  lines.push(`Measured word count: ${analysis.metrics.wordCount}`);
  lines.push(`Sentences: ${analysis.metrics.sentenceCount}; paragraphs: ${analysis.metrics.paragraphCount}`);
  if (audioSec) lines.push(`Recording length: ${Math.round(audioSec)}s; speaking pace: ${analysis.metrics.wordsPerMinute ?? "?"} wpm`);
  if (analysis.metrics.fillerCount > 0) {
    lines.push(`Fillers detected: ${analysis.metrics.fillerCount} (${analysis.metrics.fillersFound.slice(0, 6).join(", ")})`);
  }
  if (analysis.language.hesitationMarkers > 0) {
    lines.push(`Hesitation markers in the transcript (ellipsis/um/uh clusters): ${analysis.language.hesitationMarkers}`);
  }
  if (analysis.language.sentenceStructure.check) {
    const ss = analysis.language.sentenceStructure;
    lines.push(
      `Sentence-structure facts: longest sentence ${ss.longestSentenceWords} words; ${ss.fragmentCount} fragment candidate(s); ${ss.runOnCount} run-on candidate(s); complex-sentence share ${ss.complexSentenceRatio !== null ? Math.round(ss.complexSentenceRatio * 100) + "%" : "n/a"}.`,
    );
  }
  if (analysis.language.punctuation.check && !analysis.language.punctuation.check.passed) {
    lines.push(
      `Punctuation rule findings (authoritative): missing terminal punctuation ${analysis.language.punctuation.missingTerminal}; lowercase starts ${analysis.language.punctuation.lowercaseStarts}; comma-splice candidates ${analysis.language.punctuation.commaSplices}; missing apostrophes: ${analysis.language.punctuation.missingApostrophes.join(", ") || "none"}.`,
    );
  }
  if (analysis.language.repetition.check && !analysis.language.repetition.check.passed) {
    lines.push(
      `Repetition rule findings (authoritative): repeated phrases ${analysis.language.repetition.repeatedPhrases.join("; ") || "none"}; over-used words ${analysis.language.repetition.overusedWords.map((w) => `${w.word}×${w.count}`).join(", ") || "none"}.`,
    );
  }
  if (match) {
    lines.push(
      `Machine-checked match against the target: ${Math.round(match.matchScore * 100)}%` +
        (match.missedWords.length ? `; not recognised: ${match.missedWords.join(", ")}` : "") +
        (match.extraWords.length ? `; extra words: ${match.extraWords.join(", ")}` : ""),
    );
  }
  if (analysis.checks.length > 0) {
    lines.push("Deterministic checks (authoritative — respect these):");
    for (const check of analysis.checks) {
      lines.push(`  - [${check.passed ? "PASS" : "FAIL"}] ${check.label}: ${check.detail}`);
    }
  }
  if (analysis.grammar.length > 0) {
    lines.push(`Rule-engine grammar findings (authoritative): ${analysis.grammar.map((g) => `"${g.original}" → "${g.corrected}"`).join("; ")}`);
  }
  return lines.join("\n");
}

export function buildEvaluationPrompt(context: PromptContext): { system: string; user: string } {
  const { resolved } = context;
  const profile = resolved.profile;
  const isSpeaking = profile.section === "speaking";
  const isAccuracy = profile.scale.kind === "ACCURACY";

  const system = [
    `You are a certified, experienced examiner for the ${profile.examLabel} ${isSpeaking ? "speaking" : "writing"} test, giving honest practice feedback to one learner.`,
    `TASK TYPE: ${profile.framing}`,
    `WHAT A STRONG RESPONSE DOES: ${profile.strongResponse}`,
    "",
    `SCORE SCALE: ${isAccuracy ? "no AI scores for this task — accuracy is machine-measured" : `score from ${profile.scale.min} to ${profile.scale.max} in steps of ${profile.scale.step} (${profile.scale.unit})`}.`,
    isAccuracy ? "" : `CRITERIA (score every one, keys exactly as given):\n${criteriaList(resolved)}`,
    context.rubricText ? `OFFICIAL-STYLE BAND LADDER:\n${context.rubricText}` : "",
    "",
    "ABSOLUTE RULES:",
    `1. ${EXPLANATION_RULE}`,
    `2. ${EVIDENCE_RULE}`,
    `3. ${isSpeaking ? ACCENT_RULE : VARIETY_RULE}`,
    `4. ${IRRELEVANCE_RULE}`,
    ...(isAccuracy ? [] : [`5. ${MODEL_RESPONSE_RULE}`]),
    "6. Do not contradict the measured facts and checks provided — they are machine-verified. You may add interpretation, never overwrite facts.",
    "7. Be fair but honest. No praise inflation: strengths must be as specific as weaknesses. Judge the response, never the writer.",
    "8. Do not rewrite the whole response. Teach with small, specific corrections and suggestions. (The model response is a separate study example, not a rewrite of this learner's text.)",
    `9. Maximum 5 grammar corrections, 4 vocabulary suggestions, 4 sentence feedback items, 4 recommendations. Choose the most instructive.`,
    `10. This is practice feedback, NOT an official score. Never claim to predict the official result exactly.`,
    "11. Reply with ONLY a JSON object in this exact shape:",
    isAccuracy ? JSON_SHAPE_ACCURACY : isSpeaking ? JSON_SHAPE_SPEAKING_SCORED : JSON_SHAPE_SCORED,
  ]
    .filter(Boolean)
    .join("\n");

  const user = [
    `TASK: ${resolved.taskTitle} (${profile.taskLabel})`,
    context.isRevision
      ? `This is a REVISED response. The previous evaluation identified these weaknesses: ${context.priorWeaknesses.join("; ") || "—"}. Acknowledge what improved where you can.`
      : "",
    "",
    "TASK PROMPT GIVEN TO THE LEARNER:",
    resolved.promptText,
    "",
    `RESPONSE SOURCE: ${isSpeaking ? `speech transcript (${context.transcriptSource})` : "typed writing"}.`,
    "",
    "MEASURED / RULE-BASED ANALYSIS:",
    deterministicSummary(context),
    "",
    "LEARNER RESPONSE (evaluate this text):",
    '"""',
    context.response,
    '"""',
  ]
    .filter(Boolean)
    .join("\n");

  return { system, user };
}
