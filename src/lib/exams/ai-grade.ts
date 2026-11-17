/**
 * AI rubric grading for constructed-response tasks (writing, speaking).
 *
 * Uses the provider-independent LlmProvider contract (same seam as the AI
 * tutor and Writing Studio), so tests install a fake and serverless
 * deployments without credentials degrade to "pending review" instead of
 * crashing. The rubric text comes from ExamRubric rows seeded from the
 * providers' public band descriptors.
 */

import { db } from "@/lib/db";
import { getLlmProvider } from "@/lib/llm";
import { withUsageLogging } from "@/lib/llm/usage";
import type { ScoringModel } from "./types";

export type AiGrade = {
  score: number;
  criteria: Array<{ name: string; score: number; comment: string }>;
  summary: string;
};

function clampScore(value: number, min: number, max: number): number {
  if (Number.isNaN(value)) return min;
  return Math.min(max, Math.max(min, Math.round(value * 2) / 2));
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

export type GradeRequest = {
  examName: string;
  taskKey: string;
  taskTitle: string;
  prompt: string;
  response: string;
  model: ScoringModel;
  minWords?: number;
};

/**
 * Grade one constructed response against its rubric. Returns null when the
 * provider is unavailable — callers mark the response pending review.
 */
export async function gradeConstructedResponse(req: GradeRequest): Promise<AiGrade | null> {
  const rubricRow = await db.examRubric.findUnique({
    where: { examKey_taskKey: { examKey: req.model.kind === "IELTS_BAND" ? "IELTS" : "TOEFL_IBT", taskKey: req.taskKey } },
  });
  let rubricText = "";
  if (rubricRow) {
    try {
      const scale = JSON.parse(rubricRow.scale) as Array<{
        score: number;
        criteria: Array<{ name: string; descriptor: string }>;
      }>;
      rubricText = scale
        .map(
          (level) =>
            `Score ${level.score}:\n` +
            level.criteria.map((c) => `  - ${c.name}: ${c.descriptor}`).join("\n"),
        )
        .join("\n");
    } catch {
      rubricText = "";
    }
  }

  const min = req.model.minSectionScore;
  const max = req.model.maxSectionScore;

  const system = [
    `You are a certified ${req.examName} examiner grading a practice response.`,
    `Score the response on the exam's scale from ${min} to ${max} in 0.5 steps, using this official-style rubric:`,
    rubricText || `Use the standard ${req.examName} assessment criteria for this task type.`,
    `The task was: ${req.taskTitle}.`,
    req.minWords ? `The expected minimum length is ${req.minWords} words; note significant under-length.` : "",
    "Be fair but honest — do not inflate. Reply with ONLY a JSON object:",
    `{"score": <number ${min}-${max}>, "criteria": [{"name": "<criterion>", "score": <number>, "comment": "<one sentence>"}], "summary": "<two sentences of actionable feedback>"}`,
  ]
    .filter(Boolean)
    .join("\n");

  try {
    const provider = withUsageLogging(getLlmProvider(), { feature: "exam-grade" });
    const reply = await provider.complete({
      system,
      messages: [{ role: "user", content: `TASK PROMPT:\n${req.prompt}\n\nLEARNER RESPONSE:\n${req.response}` }],
      timeoutMs: 45_000,
    });
    const parsed = extractJson(reply) as AiGrade | null;
    if (!parsed || typeof parsed.score !== "number") return null;
    return {
      score: clampScore(parsed.score, min, max),
      criteria: Array.isArray(parsed.criteria)
        ? parsed.criteria
            .filter((c) => c && typeof c.name === "string")
            .map((c) => ({
              name: String(c.name),
              score: clampScore(Number(c.score) || min, min, max),
              comment: String(c.comment ?? ""),
            }))
        : [],
      summary: typeof parsed.summary === "string" ? parsed.summary : "",
    };
  } catch {
    return null;
  }
}
