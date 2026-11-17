"use client";

/**
 * Writing feedback panel — the two-layer report, exactly as specified:
 *
 *  - MEASURED rubric: the 10-dimension deterministic scores + stats,
 *    labeled "computed by fixed rules".
 *  - MEASURED issues: every issue teaches with the six-field contract
 *    (original, correction, explanation, concept, example, exercise) —
 *    never a rewritten paragraph.
 *  - AI COACH notes: clearly labeled language-model output with its
 *    disclaimer, always separate from scores.
 *  - REVISION comparison: version n vs. version n-1, dimension by dimension.
 */

import { useState } from "react";
import {
  Bot,
  CheckCircle2,
  ChevronDown,
  GraduationCap,
  Lightbulb,
  Ruler,
  Sparkles,
  TrendingDown,
  TrendingUp,
  Minus,
} from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  DIMENSION_LABELS,
  type WritingAiFeedback,
  type WritingComparison,
  type WritingIssue,
  type WritingMeasured,
} from "@/data/writing/types";
import type { WritingSubmissionDto } from "@/lib/client/api";

function DeltaBadge({ delta }: { delta: number }) {
  if (delta === 0) {
    return (
      <span className="inline-flex items-center gap-0.5 text-xs text-muted-foreground">
        <Minus className="size-3" aria-hidden /> 0
      </span>
    );
  }
  const up = delta > 0;
  return (
    <span
      className={cn(
        "inline-flex items-center gap-0.5 text-xs font-semibold",
        up ? "text-emerald-600 dark:text-emerald-400" : "text-red-600 dark:text-red-400",
      )}
    >
      {up ? <TrendingUp className="size-3" aria-hidden /> : <TrendingDown className="size-3" aria-hidden />}
      {up ? "+" : ""}
      {delta}
    </span>
  );
}

export function WritingFeedbackPanel({
  measured,
  issues,
  aiFeedback,
  overall,
  passed,
  passThreshold,
  comparison,
  submissions,
  onRevise,
}: {
  measured: WritingMeasured;
  issues: WritingIssue[];
  aiFeedback: WritingAiFeedback | null;
  overall: number;
  passed: boolean;
  passThreshold: number;
  comparison: WritingComparison | null;
  submissions: WritingSubmissionDto[];
  onRevise: () => void;
}) {
  const [showCompare, setShowCompare] = useState(false);
  const [openIssue, setOpenIssue] = useState<string | null>(null);
  const dimensions = Object.keys(measured.scores) as (keyof typeof DIMENSION_LABELS)[];

  return (
    <div className="mt-6 space-y-4">
      {/* Verdict */}
      <div
        className={cn(
          "flex flex-wrap items-center gap-3 rounded-xl border p-4",
          passed
            ? "border-emerald-300 bg-emerald-50 dark:border-emerald-800 dark:bg-emerald-950/40"
            : "border-amber-300 bg-amber-50 dark:border-amber-800 dark:bg-amber-950/40",
        )}
      >
        {passed ? (
          <CheckCircle2 className="size-6 text-emerald-600 dark:text-emerald-400" aria-hidden />
        ) : (
          <Lightbulb className="size-6 text-amber-600 dark:text-amber-400" aria-hidden />
        )}
        <div className="flex-1">
          <p className="font-semibold">
            {passed
              ? "Passed — this piece meets the rubric threshold."
              : `Not yet — ${passThreshold}% needed to complete. Revise and resubmit; your scores are compared.`}
          </p>
          <p className="text-sm text-muted-foreground">
            <span className="font-bold text-foreground">{`Overall rubric score: ${overall}/100`}</span>
            {` · ${measured.wordCount} words · ${measured.sentenceCount} sentences · ${measured.paragraphCount} paragraph${measured.paragraphCount === 1 ? "" : "s"}`}
          </p>
        </div>
        <Button onClick={onRevise} className="gap-2">
          <Sparkles className="size-4" aria-hidden /> Revise this piece
        </Button>
      </div>

      {/* Revision comparison */}
      {comparison ? (
        <section className="rounded-xl border bg-card p-4 sm:p-5">
          <button
            type="button"
            className="flex w-full items-center justify-between gap-2"
            onClick={() => setShowCompare((v) => !v)}
            aria-expanded={showCompare}
          >
            <h3 className="text-sm font-bold uppercase tracking-wide">
              Version {comparison.previousVersion} → {comparison.newVersion}
            </h3>
            <ChevronDown
              className={cn("size-5 text-muted-foreground transition-transform", showCompare && "rotate-180")}
              aria-hidden
            />
          </button>
          <div className="mt-2 flex flex-wrap items-center gap-4 text-sm">
            <span className="flex items-center gap-2">
              Overall <DeltaBadge delta={comparison.overallDelta} />
            </span>
            <span className="flex items-center gap-2">
              Words <DeltaBadge delta={comparison.wordCountDelta} />
            </span>
          </div>
          {showCompare ? (
            <div className="mt-4 space-y-2">
              {comparison.scoreDeltas.map((item) => (
                <div key={item.dimension} className="flex items-center gap-3 text-sm">
                  <span className="w-36 shrink-0 text-muted-foreground sm:w-44">
                    {DIMENSION_LABELS[item.dimension]}
                  </span>
                  <span className="tabular-nums text-muted-foreground">{item.from}</span>
                  <span aria-hidden>→</span>
                  <span className="font-semibold tabular-nums">{item.to}</span>
                  <DeltaBadge delta={item.delta} />
                </div>
              ))}
              {/* Side-by-side texts */}
              <div className="mt-4 grid gap-3 md:grid-cols-2">
                {[...submissions].reverse().slice(0, 2).reverse().map((sub) => (
                  <div key={sub.id} className="rounded-lg border bg-secondary/30 p-3">
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                      {`Version ${sub.version} · ${sub.overall}/100`}
                    </p>
                    <p className="mt-1.5 max-h-40 overflow-y-auto whitespace-pre-wrap text-sm">
                      {sub.content}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ) : null}
        </section>
      ) : null}

      {/* MEASURED rubric */}
      <section aria-labelledby="rubric-heading" className="rounded-xl border bg-card p-4 sm:p-5">
        <h3
          id="rubric-heading"
          className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide"
        >
          <Ruler className="size-4 text-primary" aria-hidden /> Writing rubric
          <span className="ml-auto rounded-full bg-secondary px-2 py-0.5 text-[11px] font-medium normal-case tracking-normal text-muted-foreground">
            computed from your text by fixed rules — not AI
          </span>
        </h3>
        <div className="mt-4 space-y-2.5">
          {dimensions.map((dimension) => (
            <div key={dimension} className="flex items-center gap-3">
              <span className="w-36 shrink-0 text-sm text-muted-foreground sm:w-44">
                {DIMENSION_LABELS[dimension]}
              </span>
              <Progress value={measured.scores[dimension] ?? 0} className="h-2 flex-1" />
              <span className="w-9 text-right text-sm font-semibold tabular-nums">
                {measured.scores[dimension] ?? 0}
              </span>
            </div>
          ))}
        </div>

        {/* Measured stats */}
        <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-4">
          {[
            { label: "Words", value: measured.wordCount },
            { label: "Sentences", value: measured.sentenceCount },
            { label: "Avg words/sentence", value: measured.avgSentenceWords },
            { label: "Longest sentence", value: `${measured.longestSentenceWords}w` },
            { label: "Unique words", value: `${Math.round(measured.uniqueWordRatio * 100)}%` },
            { label: "Connectors", value: measured.connectorCount },
            { label: "Checklist covered", value: `${Math.round(measured.checklistCoverage * 100)}%` },
            { label: "Topic keywords", value: measured.topicKeywordHits.length },
          ].map((chip) => (
            <div key={chip.label} className="rounded-lg bg-secondary/60 p-2.5 text-center">
              <p className="text-lg font-bold leading-tight">{chip.value}</p>
              <p className="text-[11px] text-muted-foreground">{chip.label}</p>
            </div>
          ))}
        </div>

        {/* Checklist detail */}
        {measured.checklistCovered.length > 0 ? (
          <ul className="mt-4 space-y-1.5">
            {measured.checklistCovered.map((point) => (
              <li key={point.id} className="flex items-start gap-2 text-sm">
                <CheckCircle2
                  className={cn(
                    "mt-0.5 size-4 shrink-0",
                    point.covered ? "text-emerald-600 dark:text-emerald-400" : "text-muted-foreground",
                  )}
                  aria-hidden
                />
                <span className={point.covered ? "" : "text-muted-foreground"}>{point.label}</span>
              </li>
            ))}
          </ul>
        ) : null}
      </section>

      {/* MEASURED issues — the six-field teaching contract */}
      {issues.length > 0 ? (
        <section aria-labelledby="issues-heading" className="rounded-xl border bg-card p-4 sm:p-5">
          <h3 id="issues-heading" className="text-sm font-bold uppercase tracking-wide">
            Issues that teach ({issues.length})
          </h3>
          <p className="mt-1 text-xs text-muted-foreground">
            Each issue shows the rule, not a rewrite — open one to learn the concept,
            an extra example and a practice exercise.
          </p>
          <ul className="mt-3 space-y-2">
            {issues.map((issue) => {
              const open = openIssue === issue.id;
              return (
                <li key={issue.id} className="overflow-hidden rounded-lg border">
                  <button
                    type="button"
                    className="flex w-full items-start justify-between gap-3 p-3 text-left"
                    onClick={() => setOpenIssue(open ? null : issue.id)}
                    aria-expanded={open}
                  >
                    <div className="min-w-0">
                      <Badge variant="secondary" className="mr-2 align-middle text-[10px]">
                        {DIMENSION_LABELS[issue.dimension]}
                      </Badge>
                      <span className="break-words text-sm text-muted-foreground line-through">
                        {issue.original}
                      </span>
                      <span className="mx-1.5 text-muted-foreground" aria-hidden>→</span>
                      <span className="break-words text-sm font-semibold">{issue.correction}</span>
                    </div>
                    <ChevronDown
                      className={cn("mt-1 size-4 shrink-0 text-muted-foreground transition-transform", open && "rotate-180")}
                      aria-hidden
                    />
                  </button>
                  {open ? (
                    <div className="border-t bg-secondary/30 p-3 text-sm">
                      <p><span className="font-semibold">Why:</span> {issue.explanation}</p>
                      <p className="mt-1.5 flex items-start gap-1.5">
                        <GraduationCap className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
                        <span><span className="font-semibold">Concept:</span> {issue.concept}</span>
                      </p>
                      <p className="mt-1.5"><span className="font-semibold">Another example:</span> {issue.example}</p>
                      <p className="mt-1.5 flex items-start gap-1.5">
                        <Lightbulb className="mt-0.5 size-4 shrink-0 text-amber-500" aria-hidden />
                        <span><span className="font-semibold">Practise it:</span> {issue.exercise}</span>
                      </p>
                      {issue.lessonSlug ? (
                        <a
                          href={`#/lesson/${issue.lessonSlug}`}
                          className="mt-2 inline-block text-sm font-medium text-primary underline underline-offset-2"
                        >
                          Open the recommended Grammar School lesson →
                        </a>
                      ) : null}
                    </div>
                  ) : null}
                </li>
              );
            })}
          </ul>
        </section>
      ) : (
        <p className="flex items-center gap-2 rounded-xl border bg-card p-4 text-sm text-emerald-700 dark:text-emerald-400">
          <CheckCircle2 className="size-4" aria-hidden /> No rule-based issues found — clean writing.
        </p>
      )}

      {/* AI COACH */}
      {aiFeedback ? (
        <section
          aria-labelledby="ai-writing-heading"
          className="rounded-xl border border-primary/30 bg-primary/5 p-4 sm:p-5"
        >
          <h3
            id="ai-writing-heading"
            className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide"
          >
            <Bot className="size-4 text-primary" aria-hidden /> AI writing coach
            <span className="ml-auto rounded-full bg-background px-2 py-0.5 text-[11px] font-medium normal-case tracking-normal text-muted-foreground">
              AI-generated — ideas, not measurements
            </span>
          </h3>
          <p className="mt-2 text-xs text-muted-foreground">{aiFeedback.disclaimer}</p>

          {aiFeedback.strengths.length > 0 ? (
            <div className="mt-3">
              <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700 dark:text-emerald-400">
                What works
              </p>
              <ul className="mt-1.5 space-y-1 text-sm">
                {aiFeedback.strengths.map((point, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Sparkles className="mt-0.5 size-4 shrink-0 text-emerald-600" aria-hidden />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          {aiFeedback.issues.length > 0 ? (
            <ul className="mt-3 space-y-2">
              {aiFeedback.issues.map((issue) => (
                <li key={issue.id} className="rounded-lg border bg-background p-3 text-sm">
                  <Badge variant="secondary" className="mr-2 align-middle text-[10px]">
                    {DIMENSION_LABELS[issue.dimension]}
                  </Badge>
                  <p className="mt-1 text-muted-foreground line-through">{issue.original}</p>
                  <p className="font-semibold">{issue.correction}</p>
                  <p className="mt-1 text-muted-foreground">{issue.explanation}</p>
                  <p className="mt-1.5 text-xs">
                    <span className="font-semibold">Concept:</span> {issue.concept} ·{" "}
                    <span className="font-semibold">Example:</span> {issue.example}
                  </p>
                  <p className="mt-1 text-xs">
                    <span className="font-semibold">Practise:</span> {issue.exercise}
                  </p>
                </li>
              ))}
            </ul>
          ) : null}

          {aiFeedback.notes.length > 0 ? (
            <ul className="mt-3 space-y-1.5 text-sm">
              {aiFeedback.notes.map((note, index) => (
                <li key={index} className="flex items-start gap-2">
                  <Lightbulb className="mt-0.5 size-4 shrink-0 text-amber-500" aria-hidden />
                  {note}
                </li>
              ))}
            </ul>
          ) : null}
        </section>
      ) : null}
    </div>
  );
}
