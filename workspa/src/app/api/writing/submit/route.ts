import { getSessionUser } from "@/lib/auth";
import { json, jsonError, readJson } from "@/lib/api-helpers";
import { getWritingAssignment } from "@/data/writing";
import { analyzeWriting, gradeGuidedItem } from "@/lib/writing/analyze";
import { aiWritingFeedback } from "@/lib/writing/ai";
import {
  applySubmission,
  createSubmission,
  listSubmissions,
} from "@/lib/writing/service";
import type { WritingDimension } from "@/data/writing/types";

/**
 * POST /api/writing/submit — submit a writing task.
 *
 * Body:
 *  { slug, taskId, mode: "guided", answers: Record<itemId, string> }  or
 *  { slug, taskId, mode: "free", content, durationMs? }
 *
 * Guided tasks are graded deterministically per item. Free tasks run the
 * deterministic 10-dimension rubric + the AI coach layer (labeled, optional).
 * Every submission is stored as the next VERSION, enabling revision
 * comparison. Writing scores never touch the general UserStats counters.
 */
export async function POST(req: Request) {
  const user = await getSessionUser(req);
  if (!user) return jsonError("Please log in.", 401);

  const body = await readJson<{
    slug?: string;
    taskId?: string;
    mode?: string;
    answers?: Record<string, string>;
    content?: string;
    durationMs?: number;
  }>(req);
  if (
    !body ||
    typeof body.slug !== "string" ||
    typeof body.taskId !== "string" ||
    (body.mode !== "guided" && body.mode !== "free")
  ) {
    return jsonError("Invalid request body.", 400);
  }

  const assignment = getWritingAssignment(body.slug);
  if (!assignment) return jsonError("Writing assignment not found.", 404);
  const task = assignment.tasks.find((t) => t.id === body.taskId);
  if (!task) return jsonError("Task not found.", 404);

  const durationMs = Math.max(0, Math.min(3_600_000, Math.round(body.durationMs ?? 0)));

  // ------------------------------------------------------------------ guided
  if (body.mode === "guided" && task.type === "guided") {
    const answers = body.answers ?? {};
    const results = task.items.map((item) => {
      const submitted = typeof answers[item.id] === "string" ? answers[item.id] : "";
      const result = gradeGuidedItem(item.acceptedAnswers, submitted);
      return {
        itemId: item.id,
        submitted,
        correct: result.correct,
        feedback: result.feedback,
        explanation: result.correct ? item.explanation : "",
        // The explanation (teaching payload) is revealed after grading.
        reveal: item.explanation,
      };
    });
    const correctCount = results.filter((r) => r.correct).length;
    const scorePct = Math.round((correctCount / task.items.length) * 100);
    const passed = scorePct >= assignment.passThreshold;

    const submission = await createSubmission({
      userId: user.id,
      assignmentId: assignment.id,
      content: results.map((r) => r.submitted).filter(Boolean).join("\n"),
      wordCount: results.reduce((sum, r) => sum + r.submitted.split(/\s+/).filter(Boolean).length, 0),
      durationMs,
      overall: scorePct,
      scores: { relevance: scorePct } as Record<WritingDimension, number>,
      measured: {
        wordCount: 0,
        charCount: 0,
        sentenceCount: 0,
        paragraphCount: 0,
        avgSentenceWords: 0,
        longestSentenceWords: 0,
        sentenceLengthVariety: 0,
        uniqueWordRatio: 0,
        connectorCount: 0,
        connectorVariety: 0,
        checklistCovered: [],
        checklistCoverage: scorePct / 100,
        conventionsCovered: [],
        conventionsCoverage: 1,
        topicKeywordHits: [],
        targetWordsUsed: [],
        repeatedWords: [],
        scores: { relevance: scorePct } as Record<WritingDimension, number>,
        overall: scorePct,
      },
      issues: [],
      aiFeedback: null,
      passed,
    });
    const progress = await applySubmission(user.id, assignment.id, assignment.tier, {
      overall: scorePct,
      passed,
    });

    return json({
      mode: "guided",
      results,
      correctCount,
      total: task.items.length,
      overall: scorePct,
      passed,
      passThreshold: assignment.passThreshold,
      submission,
      progress,
    });
  }

  // --------------------------------------------------------------------- free
  if (body.mode === "free" && task.type === "free") {
    const content = (body.content ?? "").slice(0, 20_000);
    if (content.trim().length === 0) {
      return jsonError("The submission is empty.", 400);
    }

    const priorSubmissions = await listSubmissions(user.id, assignment.id);
    const isRevision = priorSubmissions.length > 0;

    // Layer 1: deterministic analysis (rubric + teaching issues).
    const analysis = analyzeWriting(content, task);

    // Layer 2: AI coach — labeled, optional, never in scores.
    const ai = await aiWritingFeedback(task, content, isRevision);

    const passed = analysis.measured.overall >= assignment.passThreshold;

    const submission = await createSubmission({
      userId: user.id,
      assignmentId: assignment.id,
      content,
      wordCount: analysis.measured.wordCount,
      durationMs,
      overall: analysis.measured.overall,
      scores: analysis.measured.scores,
      measured: analysis.measured,
      issues: analysis.issues,
      aiFeedback: ai,
      passed,
    });
    const progress = await applySubmission(user.id, assignment.id, assignment.tier, {
      overall: analysis.measured.overall,
      passed,
    });

    // Revision comparison: the previous version, if any.
    const previous = isRevision ? priorSubmissions[priorSubmissions.length - 1] : null;
    const comparison = previous
      ? {
          previousVersion: previous.version,
          newVersion: submission.version,
          wordCountDelta: submission.wordCount - previous.wordCount,
          overallDelta: submission.overall - previous.overall,
          scoreDeltas: (Object.keys(analysis.measured.scores) as WritingDimension[])
            .filter((d) => previous.scores[d] !== undefined)
            .map((d) => ({
              dimension: d,
              from: previous.scores[d],
              to: analysis.measured.scores[d],
              delta: analysis.measured.scores[d] - previous.scores[d],
            })),
        }
      : null;

    return json({
      mode: "free",
      measured: analysis.measured,
      issues: analysis.issues,
      aiFeedback: ai,
      overall: analysis.measured.overall,
      passed,
      passThreshold: assignment.passThreshold,
      submission,
      comparison,
      progress,
      submissions: await listSubmissions(user.id, assignment.id),
    });
  }

  return jsonError("Mode does not match the task type.", 400);
}
