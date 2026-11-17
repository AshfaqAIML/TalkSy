"use client";

/**
 * AI-assisted evaluation panel (writing & speaking).
 *
 * Shown under every evaluation-eligible answer in the mock result view.
 * Runs the evaluation, then displays the full shared report (see
 * evaluation/EvaluationReport.tsx): overall estimate, per-criterion
 * feedback with quoted evidence, verified checks & rule-based findings
 * (sentence structure, punctuation, repetition, pace), grammar
 * corrections, vocabulary upgrades, sentence-level notes, off-task
 * content, model response, weaknesses mapped to EnglishPath lessons, the
 * revision exercise — and the revision loop: revise → re-evaluate →
 * tracked improvement.
 *
 * Every number is labeled with its provenance (VERIFIED / RULE_BASED /
 * AI_GENERATED / ESTIMATED / HUMAN_REVIEWED) and the report carries the
 * safeguard notes: practice estimates, never official IELTS or ETS
 * scores; accents are never errors; high-stakes preparation deserves a
 * human teacher.
 */

import { useCallback, useEffect, useState } from "react";
import {
  Brain,
  ChevronDown,
  RefreshCw,
  RotateCcw,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { examApi } from "@/lib/client/exam-api";
import type {
  EvaluationComparisonDto,
  StoredEvaluationDto,
} from "@/lib/exams/evaluation/types";
import {
  ComparisonReport,
  EvaluationReport,
  ProvenanceLegend,
} from "./evaluation/EvaluationReport";

// ---------------------------------------------------------------------------
// Panel
// ---------------------------------------------------------------------------

export function EvaluationPanel({
  attemptId,
  questionId,
  section,
  responseText,
}: {
  attemptId: string;
  questionId: string;
  section: string;
  responseText: string | null;
}) {
  const [evaluation, setEvaluation] = useState<StoredEvaluationDto | null>(null);
  const [chain, setChain] = useState<StoredEvaluationDto[]>([]);
  const [comparison, setComparison] = useState<EvaluationComparisonDto | null>(null);
  const [loading, setLoading] = useState(true);
  const [busy, setBusy] = useState(false);
  const [revisionOpen, setRevisionOpen] = useState(false);
  const [revisionText, setRevisionText] = useState("");
  const [legendOpen, setLegendOpen] = useState(false);

  const loadChainInto = useCallback(async (evaluationId: string) => {
    const response = await examApi.evaluationChain(evaluationId);
    if (response.ok) {
      setChain(response.data.chain);
      setComparison(response.data.comparison);
    }
  }, []);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const response = await examApi.evaluations({ questionId });
      if (cancelled) return;
      if (response.ok && response.data.evaluations.length > 0) {
        const latest = response.data.evaluations[0];
        setEvaluation(latest);
        setRevisionText(latest.inputText);
        await loadChainInto(latest.id);
      }
      setLoading(false);
    })();
    return () => {
      cancelled = true;
    };
  }, [questionId, loadChainInto]);

  const runEvaluation = async () => {
    if (!responseText || responseText.trim().length === 0) return;
    setBusy(true);
    const response = await examApi.evaluate({
      attemptId,
      questionId,
      text: responseText,
      transcriptSource: section === "speaking" ? "unknown" : "typed",
    });
    setBusy(false);
    if (!response.ok) {
      toast.error(response.error);
      return;
    }
    setEvaluation(response.data.evaluation);
    setRevisionText(response.data.evaluation.inputText);
    await loadChainInto(response.data.evaluation.id);
  };

  const submitRevision = async () => {
    if (!evaluation || revisionText.trim().length === 0) return;
    setBusy(true);
    const response = await examApi.reviseEvaluation(evaluation.id, {
      text: revisionText,
      transcriptSource: "typed",
    });
    setBusy(false);
    if (!response.ok) {
      toast.error(response.error);
      return;
    }
    setEvaluation(response.data.evaluation);
    setComparison(response.data.comparison);
    setRevisionOpen(false);
    toast.success("Revision evaluated — improvement tracked against the same rubric.");
    await loadChainInto(response.data.evaluation.id);
  };

  if (loading) {
    return (
      <div className="mt-2 rounded-lg border border-violet-500/20 bg-violet-500/5 p-2.5 text-xs text-slate-400">
        Loading evaluations…
      </div>
    );
  }

  if (!responseText || responseText.trim().length === 0) {
    return (
      <div className="mt-2 rounded-lg border border-slate-800 bg-slate-950 p-2.5 text-xs text-slate-500">
        <Brain className="mr-1.5 inline size-3.5 text-violet-400" aria-hidden />
        AI writing &amp; speaking evaluation is available for this task once you answer it.
      </div>
    );
  }

  return (
    <div className="mt-2 space-y-3 rounded-lg border border-violet-500/30 bg-violet-500/5 p-3">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-1.5 text-xs font-semibold text-violet-300">
          <Brain className="size-4" aria-hidden /> AI evaluation
          {evaluation ? (
            <>
              <Badge
                variant="outline"
                className={cn(
                  "ml-1 px-1.5 py-0 text-[9px]",
                  evaluation.status === "complete"
                    ? "border-emerald-500/40 text-emerald-300"
                    : evaluation.status === "partial"
                      ? "border-amber-500/40 text-amber-300"
                      : "border-rose-500/40 text-rose-300",
                )}
              >
                {evaluation.status === "complete"
                  ? "AI + verified checks"
                  : evaluation.status === "partial"
                    ? "checks only — AI unavailable"
                    : "too short to evaluate"}
              </Badge>
              {evaluation.review.status === "human_reviewed" ? (
                <Badge variant="outline" className="ml-1 border-teal-500/40 px-1.5 py-0 text-[9px] text-teal-300">
                  human-reviewed
                </Badge>
              ) : null}
            </>
          ) : null}
        </div>
        <div className="flex items-center gap-2">
          {evaluation ? (
            <Button
              variant="outline"
              size="sm"
              className="h-7 border-slate-700 bg-transparent px-2 text-[11px] text-slate-300 hover:bg-slate-900"
              disabled={busy}
              onClick={() => void runEvaluation()}
            >
              <RefreshCw className={cn("mr-1 size-3", busy && "animate-spin")} aria-hidden />
              {busy ? "Evaluating…" : "Re-evaluate"}
            </Button>
          ) : (
            <Button
              size="sm"
              className="h-7 bg-violet-500 px-3 text-[11px] text-white hover:bg-violet-400"
              disabled={busy}
              onClick={() => void runEvaluation()}
            >
              <Brain className="mr-1 size-3" aria-hidden />
              {busy ? "Evaluating…" : "Get AI evaluation"}
            </Button>
          )}
        </div>
      </div>

      {evaluation ? (
        <>
          <p className="text-[10px] leading-relaxed text-slate-500">
            Rubric applied: {evaluation.result.taskLabel} — {evaluation.result.taskTitle}
          </p>
          <EvaluationReport result={evaluation.result} review={evaluation.review} />

          {/* Revision history */}
          {chain.length > 1 ? (
            <div className="flex flex-wrap items-center gap-1.5 text-[10px] text-slate-500">
              <span className="uppercase tracking-wide">Revisions:</span>
              {chain.map((item, index) => (
                <span
                  key={item.id}
                  className={cn(
                    "rounded-full border px-1.5 py-0.5",
                    item.id === evaluation.id
                      ? "border-violet-500/50 bg-violet-500/10 text-violet-300"
                      : "border-slate-700 text-slate-500",
                  )}
                >
                  v{index + 1}
                  {item.result.overall ? ` · ${item.result.overall.score.toFixed(1)}` : ""}
                </span>
              ))}
            </div>
          ) : null}

          {/* Revision flow */}
          {evaluation.result.revisionGuidance || evaluation.result.revisionExercise ? (
            <div className="rounded-lg border border-slate-800 bg-slate-950 p-2.5">
              <button
                type="button"
                onClick={() => setRevisionOpen((open) => !open)}
                className="flex w-full items-center justify-between gap-2 text-left"
                aria-expanded={revisionOpen}
              >
                <span className="flex items-center gap-1.5 text-xs font-medium text-violet-300">
                  <RotateCcw className="size-3.5" aria-hidden /> Revise this response
                </span>
                <ChevronDown className={cn("size-3.5 text-slate-500 transition-transform", revisionOpen && "rotate-180")} aria-hidden />
              </button>
              {!revisionOpen ? (
                <p className="mt-1 text-[11px] leading-relaxed text-slate-500">
                  {evaluation.result.revisionExercise
                    ? `${evaluation.result.revisionExercise.title}: ${evaluation.result.revisionExercise.steps.length} steps. Open to work through them and submit your revision.`
                    : evaluation.result.revisionGuidance}
                </p>
              ) : (
                <div className="mt-2 space-y-2">
                  {evaluation.result.revisionGuidance ? (
                    <p className="text-[11px] leading-relaxed text-slate-500">{evaluation.result.revisionGuidance}</p>
                  ) : null}
                  <Textarea
                    value={revisionText}
                    onChange={(event) => setRevisionText(event.target.value)}
                    rows={Math.min(12, Math.max(5, Math.ceil(revisionText.length / 90)))}
                    className="border-slate-700 bg-slate-900 text-xs text-slate-200"
                    aria-label="Revised response"
                  />
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[10px] text-slate-600">
                      {revisionText.trim().split(/\s+/).filter(Boolean).length} words
                    </span>
                    <Button
                      size="sm"
                      className="h-7 bg-violet-500 px-3 text-[11px] text-white hover:bg-violet-400"
                      disabled={busy || revisionText.trim().length === 0}
                      onClick={() => void submitRevision()}
                    >
                      {busy ? "Re-evaluating…" : "Submit revision for re-evaluation"}
                    </Button>
                  </div>
                </div>
              )}
              {comparison ? <div className="mt-2"><ComparisonReport comparison={comparison} /></div> : null}
            </div>
          ) : null}
        </>
      ) : (
        <p className="text-[11px] leading-relaxed text-slate-400">
          Get examiner-style feedback on this response: criterion estimates with evidence from your own words,
          grammar corrections, vocabulary upgrades, verified task checks, a model response, a revision exercise —
          and a revision loop that tracks your improvement. Practice feedback only — never an official IELTS or ETS score.
        </p>
      )}

      {/* Provenance legend */}
      <div className="border-t border-slate-800/60 pt-2">
        <button
          type="button"
          onClick={() => setLegendOpen((open) => !open)}
          className="flex w-full items-center justify-between text-[10px] uppercase tracking-wide text-slate-500"
          aria-expanded={legendOpen}
        >
          How to read these labels
          <ChevronDown className={cn("size-3 transition-transform", legendOpen && "rotate-180")} aria-hidden />
        </button>
        {legendOpen ? <div className="mt-1.5"><ProvenanceLegend /></div> : null}
      </div>
    </div>
  );
}
