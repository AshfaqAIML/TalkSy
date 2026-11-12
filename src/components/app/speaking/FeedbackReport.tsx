"use client";

/**
 * Shared feedback rendering for speaking attempts — the honest two-layer
 * report: MEASURED results (deterministic, computed from the transcript)
 * clearly separated from AI COACH SUGGESTIONS (language-model text, labeled
 * with its disclaimer). Pronunciation claims stay at the level the
 * technology actually supports: transcript match, never phoneme accuracy.
 */

import { useState } from "react";
import {
  AlertTriangle,
  BarChart3,
  Bot,
  CheckCircle2,
  Circle,
  Ear,
  Lightbulb,
  Play,
  Ruler,
  XCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import { useSpeech } from "@/hooks/use-speech";
import {
  ACCENT_DISCLAIMER,
  DIMENSION_LABELS,
  type AiCoachSuggestions,
  type FeedbackDimension,
  type MeasuredFeedback,
} from "@/data/speaking/types";

function ScoreBadge({ value }: { value: number }) {
  const tone =
    value >= 80
      ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300"
      : value >= 60
        ? "bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300"
        : "bg-red-100 text-red-800 dark:bg-red-950 dark:text-red-300";
  return (
    <span className={cn("rounded-full px-2.5 py-0.5 text-xs font-bold", tone)}>{value}</span>
  );
}

export function FeedbackReport({
  measured,
  overall,
  passed,
  passThreshold,
  suggestions,
  modelAnswer,
  taskPrompt,
}: {
  measured: MeasuredFeedback;
  overall: number;
  passed: boolean;
  passThreshold: number;
  suggestions: AiCoachSuggestions | null;
  modelAnswer: { text: string; translation: string | null } | null;
  taskPrompt: string;
}) {
  const speech = useSpeech();
  const [showModelAnswer, setShowModelAnswer] = useState(false);

  const dimensions = Object.keys(measured.scores) as FeedbackDimension[];
  const hasIntelligibility = measured.intelligibility !== null;

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
          <AlertTriangle className="size-6 text-amber-600 dark:text-amber-400" aria-hidden />
        )}
        <div className="flex-1">
          <p className="font-semibold">
            {passed
              ? "Passed — well spoken!"
              : `Not yet — ${passThreshold}% needed to pass. Listen back and try again.`}
          </p>
          <p className="text-sm text-muted-foreground">
            Overall measured score: <span className="font-bold text-foreground">{overall}%</span>
            {measured.selfAssessed
              ? " · self-assessed take (no transcript was analysed)"
              : ""}
          </p>
        </div>
        {!measured.selfAssessed ? <ScoreBadge value={overall} /> : null}
      </div>

      {/* MEASURED RESULTS */}
      <section
        aria-labelledby="measured-heading"
        className="rounded-xl border bg-card p-4 sm:p-5"
      >
        <h3
          id="measured-heading"
          className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-foreground"
        >
          <Ruler className="size-4 text-primary" aria-hidden /> Measured results
          <span className="ml-auto rounded-full bg-secondary px-2 py-0.5 text-[11px] font-medium normal-case tracking-normal text-muted-foreground">
            computed from your transcript — no AI involved
          </span>
        </h3>

        {measured.selfAssessed ? (
          <p className="mt-3 text-sm text-muted-foreground">
            You replayed your own recording and confirmed the take. Self-assessment
            is an honest fallback when no speech recognition is available — nothing
            is scored.
          </p>
        ) : (
          <>
            {/* Metric chips */}
            <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
              {[
                { label: "Words", value: measured.wordCount },
                {
                  label: "Duration",
                  value: measured.durationMs > 0 ? `${Math.round(measured.durationMs / 1000)}s` : "—",
                },
                {
                  label: "Pace",
                  value:
                    measured.wordsPerMinute > 0 ? `${measured.wordsPerMinute} wpm` : "—",
                },
                {
                  label: "Fillers",
                  value:
                    measured.fillersPerMinute > 0
                      ? `${measured.fillerCount} (${measured.fillersPerMinute}/min)`
                      : `${measured.fillerCount}`,
                },
              ].map((chip) => (
                <div key={chip.label} className="rounded-lg bg-secondary/60 p-2.5 text-center">
                  <p className="text-lg font-bold leading-tight">{chip.value}</p>
                  <p className="text-[11px] text-muted-foreground">{chip.label}</p>
                </div>
              ))}
            </div>

            {/* Dimension scores */}
            {dimensions.length > 0 ? (
              <div className="mt-5 space-y-2.5">
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
            ) : null}

            {/* Checklist coverage */}
            {measured.checklistCovered.length > 0 ? (
              <div className="mt-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Required points ({Math.round(measured.checklistCoverage * 100)}% covered)
                </p>
                <ul className="mt-2 space-y-1.5">
                  {measured.checklistCovered.map((point) => (
                    <li key={point.id} className="flex items-start gap-2 text-sm">
                      {point.covered ? (
                        <CheckCircle2
                          className="mt-0.5 size-4 shrink-0 text-emerald-600 dark:text-emerald-400"
                          aria-hidden
                        />
                      ) : (
                        <Circle className="mt-0.5 size-4 shrink-0 text-muted-foreground" aria-hidden />
                      )}
                      <span className={point.covered ? "" : "text-muted-foreground"}>
                        {point.label}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            {/* Intelligibility (honest proxy) */}
            {hasIntelligibility && measured.intelligibility ? (
              <div className="mt-5 rounded-lg border border-dashed p-3">
                <p className="flex items-center gap-2 text-sm font-semibold">
                  <Ear className="size-4 text-primary" aria-hidden /> What the recogniser heard
                </p>
                <p className="mt-1.5 text-sm italic text-muted-foreground">
                  &ldquo;{measured.intelligibility.heard}&rdquo;
                </p>
                {measured.intelligibility.available ? (
                  <p className="mt-2 text-sm">
                    Transcript match:{" "}
                    <span className="font-bold">
                      {Math.round(measured.intelligibility.matchScore * 100)}%
                    </span>{" "}
                    of the target words.
                  </p>
                ) : null}
                <p className="mt-1.5 text-xs text-muted-foreground">
                  {measured.intelligibility.note}
                </p>
                <p className="mt-1 text-xs text-muted-foreground">{ACCENT_DISCLAIMER}</p>
              </div>
            ) : null}

            {/* Grammar issues */}
            {measured.grammarIssues.length > 0 ? (
              <div className="mt-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Grammar the rules found
                </p>
                <ul className="mt-2 space-y-2">
                  {measured.grammarIssues.map((issue, index) => (
                    <li
                      key={`${issue.original}-${index}`}
                      className="rounded-lg border bg-secondary/40 p-2.5 text-sm"
                    >
                      <p className="flex flex-wrap items-center gap-2">
                        <XCircle className="size-3.5 shrink-0 text-red-500" aria-hidden />
                        <span className="text-muted-foreground line-through">{issue.original}</span>
                        <span className="font-semibold">{issue.corrected}</span>
                      </p>
                      <p className="mt-1 text-xs text-muted-foreground">{issue.explanation}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <p className="mt-4 flex items-center gap-2 text-sm text-emerald-700 dark:text-emerald-400">
                <CheckCircle2 className="size-4" aria-hidden /> No grammar issues found by the
                rule checker.
              </p>
            )}

            {/* Fluency extras */}
            {measured.repeatedPhrases.length > 0 ? (
              <p className="mt-4 text-sm text-muted-foreground">
                <BarChart3 className="mr-1.5 inline size-4" aria-hidden />
                Repeated phrases: {measured.repeatedPhrases.map((p) => `“${p}”`).join(", ")}
              </p>
            ) : null}
          </>
        )}
      </section>

      {/* AI COACH SUGGESTIONS */}
      {suggestions ? (
        <section
          aria-labelledby="ai-heading"
          className="rounded-xl border border-primary/30 bg-primary/5 p-4 sm:p-5"
        >
          <h3
            id="ai-heading"
            className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide"
          >
            <Bot className="size-4 text-primary" aria-hidden /> AI coach suggestions
            <span className="ml-auto rounded-full bg-background px-2 py-0.5 text-[11px] font-medium normal-case tracking-normal text-muted-foreground">
              AI-generated — ideas, not measurements
            </span>
          </h3>
          <p className="mt-2 text-xs text-muted-foreground">{suggestions.disclaimer}</p>

          {suggestions.betterExpressions.length > 0 ? (
            <ul className="mt-3 space-y-2">
              {suggestions.betterExpressions.map((item, index) => (
                <li
                  key={index}
                  className="rounded-lg border bg-background p-2.5 text-sm"
                >
                  {item.instead ? (
                    <p className="text-muted-foreground">Instead of: “{item.instead}”</p>
                  ) : null}
                  <p className="font-semibold">Try: “{item.say}”</p>
                </li>
              ))}
            </ul>
          ) : null}

          {suggestions.notes.length > 0 ? (
            <ul className="mt-3 space-y-1.5">
              {suggestions.notes.map((note, index) => (
                <li key={index} className="flex items-start gap-2 text-sm">
                  <Lightbulb className="mt-0.5 size-4 shrink-0 text-amber-500" aria-hidden />
                  {note}
                </li>
              ))}
            </ul>
          ) : null}
        </section>
      ) : null}

      {/* Model answer */}
      {modelAnswer ? (
        <section className="rounded-xl border bg-card p-4 sm:p-5">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h3 className="text-sm font-bold uppercase tracking-wide">Model answer</h3>
            <Button
              size="sm"
              variant={showModelAnswer ? "ghost" : "outline"}
              onClick={() => setShowModelAnswer((v) => !v)}
            >
              {showModelAnswer ? "Hide" : "Show model answer"}
            </Button>
          </div>
          {showModelAnswer ? (
            <div className="mt-3">
              <p className="text-sm leading-relaxed">{modelAnswer.text}</p>
              {modelAnswer.translation ? (
                <p className="mt-2 text-sm text-muted-foreground">{modelAnswer.translation}</p>
              ) : null}
              <Button
                size="sm"
                variant="ghost"
                className="mt-2 gap-2"
                onClick={() =>
                  speech.playing ? speech.stop() : speech.play(modelAnswer.text)
                }
              >
                <Play className="size-4" aria-hidden />
                {speech.playing ? "Stop" : "Listen to the model"}
              </Button>
            </div>
          ) : (
            <p className="mt-2 text-sm text-muted-foreground">
              Try once more before revealing it — the model is most useful after
              your own attempt. Task: {taskPrompt}
            </p>
          )}
        </section>
      ) : null}
    </div>
  );
}
