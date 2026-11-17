"use client";

/**
 * Mock-test result view: estimated overall and section scores, question
 * accuracy, timing, unanswered items, mistake analysis with per-answer
 * inspection (your answer vs the key + explanation), examiner-style
 * feedback, rubric detail for constructed responses, and improvement
 * recommendations bridging into the common curriculum.
 *
 * Every report carries the integrity note: this is an estimate from
 * practice material, never an official IELTS or ETS score.
 */

import { useEffect, useState } from "react";
import {
  ArrowLeft,
  Award,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Clock,
  Lightbulb,
  MessageSquare,
  RotateCcw,
  ScanSearch,
  Target,
  TrendingUp,
  XCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import type { AppRoute } from "@/hooks/use-hash-route";
import { examApi } from "@/lib/client/exam-api";
import type { AttemptResultDto } from "@/lib/exams/types";
import { isEvaluationEligibleType } from "@/lib/exams/evaluation/tasks";
import { EvaluationPanel } from "./EvaluationPanel";

function formatDuration(totalSeconds: number | null): string {
  if (totalSeconds === null) return "—";
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  if (minutes >= 60) {
    const hours = Math.floor(minutes / 60);
    return `${hours}h ${minutes % 60}m ${String(seconds).padStart(2, "0")}s`;
  }
  return `${minutes}m ${String(seconds).padStart(2, "0")}s`;
}

export function MockResultView({
  attemptId,
  navigate,
}: {
  attemptId: string;
  navigate: (route: AppRoute) => void;
}) {
  const [result, setResult] = useState<AttemptResultDto | null>(null);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState<Record<string, boolean>>({});
  const [retrying, setRetrying] = useState(false);
  const [continuing, setContinuing] = useState(false);

  useEffect(() => {
    (async () => {
      const response = await examApi.result(attemptId);
      if (response.ok) setResult(response.data.result);
      setLoading(false);
    })();
  }, [attemptId]);

  const practiceMistakes = async () => {
    setRetrying(true);
    const response = await examApi.practiceMistakes({
      examKey: result?.examKey,
      variant: result?.variant,
      limit: 20,
    });
    setRetrying(false);
    if (!response.ok) {
      toast.error(response.error);
      return;
    }
    toast.success(`Assembled a set of ${response.data.itemCount} items from your mistakes.`);
    navigate({ name: "exams-mock", attemptId: response.data.attempt.id });
  };

  /** PROMPT 51: continue adaptive practice, calibrated to this attempt. */
  const continueAdaptive = async () => {
    if (!result) return;
    setContinuing(true);
    const response = await examApi.practiceAdaptive({
      examKey: result.examKey,
      variant: result.variant,
      continueFromAttemptId: result.attemptId,
    });
    setContinuing(false);
    if (!response.ok) {
      toast.error(response.error);
      return;
    }
    navigate({ name: "exams-mock", attemptId: response.data.attempt.id });
  };

  if (loading) {
    return (
      <div className="min-h-[calc(100vh-8rem)] bg-slate-950 px-4 py-10">
        <div className="mx-auto max-w-4xl space-y-4">
          <Skeleton className="h-32 rounded-xl bg-slate-900" />
          <Skeleton className="h-64 rounded-xl bg-slate-900" />
        </div>
      </div>
    );
  }

  if (!result) {
    return (
      <div className="flex min-h-[calc(100vh-8rem)] flex-col items-center justify-center gap-4 bg-slate-950 px-4 text-center">
        <h2 className="text-2xl font-bold text-white">Result not found</h2>
        <Button
          variant="outline"
          className="border-slate-700 bg-transparent text-slate-200 hover:bg-slate-900"
          onClick={() => navigate({ name: "exams-mocks" })}
        >
          Back to mock tests
        </Button>
      </div>
    );
  }

  const correctCount = result.questionResults.filter((q) => q.correct === true).length;
  const objectiveTotal = result.questionResults.filter((q) => q.correct !== null).length;
  const maxScore = result.examKey === "TOEFL_IBT" ? 6 : 9;
  const wrongItems = result.questionResults.filter((q) => q.correct === false);

  return (
    <div className="min-h-[calc(100vh-8rem)] bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-4xl space-y-6 px-4 py-8 sm:px-6">
        <button
          onClick={() => navigate({ name: "exams-dashboard" })}
          className="inline-flex items-center gap-1.5 text-sm text-slate-400 transition-colors hover:text-amber-300"
        >
          <ArrowLeft className="size-4" aria-hidden /> Back to my dashboard
        </button>

        {/* Overall */}
        <Card className="border-slate-800 bg-gradient-to-b from-slate-900 to-slate-950">
          <CardContent className="flex flex-col items-center gap-2 p-8 text-center">
            <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-slate-400">
              <Award className="size-3.5 text-amber-400" aria-hidden /> Estimated overall result
            </div>
            <div className="text-5xl font-bold text-amber-300">{result.scoreDisplay ?? "—"}</div>
            <p className="text-sm text-slate-400">{result.mockTitle}</p>
            <p className="text-xs text-slate-500">
              {result.spec.name} · spec v{result.spec.version}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2">
              <Badge
                variant="outline"
                className={cn(timedColor(result.timed), "capitalize")}
              >
                {result.modeLabel} · {result.timed ? "timed" : "untimed"}
              </Badge>
              {result.status !== "scored" ? (
                <Badge variant="outline" className="border-amber-500/40 text-amber-300">
                  provisional — some responses awaiting review
                </Badge>
              ) : null}
            </div>
            <div className="mt-1 flex flex-wrap justify-center gap-x-4 text-xs text-slate-500">
              <span>
                <Clock className="mr-1 inline size-3" aria-hidden />
                {formatDuration(result.timeSpentSec)}
              </span>
              {objectiveTotal > 0 ? (
                <span>
                  {correctCount}/{objectiveTotal} objective correct
                </span>
              ) : null}
              {result.unansweredCount > 0 ? (
                <span className="text-rose-300">{result.unansweredCount} unanswered</span>
              ) : (
                <span className="text-emerald-300">all questions answered</span>
              )}
            </div>
            <p className="max-w-lg pt-1 text-xs leading-relaxed text-slate-500">
              {result.integrityNote}
              {!result.timed
                ? " This run was untimed — sit a timed mock before using the score as an exam-condition estimate."
                : ""}
            </p>
          </CardContent>
        </Card>

        {/* Adaptive-simulation routing card (TOEFL Stage 1) */}
        {result.mockTitle === "TOEFL Adaptive Simulation — Stage 1: Routing module" ? (
          <Card className="border-amber-500/30 bg-slate-900/60">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-base text-white">
                <Target className="size-4 text-amber-400" aria-hidden /> Your adaptive route
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {(() => {
                const raw = result.sectionScores.reduce((sum, s) => sum + s.raw, 0);
                const max = result.sectionScores.reduce((sum, s) => sum + s.max, 0);
                const percent = max > 0 ? Math.round((raw / max) * 100) : 0;
                const upper = percent >= 60;
                return (
                  <>
                    <p className="text-sm text-slate-300">
                      Routing score: <span className="font-bold text-amber-300">{raw}/{max} raw points ({percent}%)</span>{" "}
                      — continue with the{" "}
                      <span className={upper ? "font-semibold text-emerald-300" : "font-semibold text-sky-300"}>
                        {upper ? "Upper module" : "Lower module"}
                      </span>{" "}
                      of the adaptive simulation.
                    </p>
                    <p className="text-xs leading-relaxed text-slate-500">
                      TalkSy routes with a fixed 60% threshold — a practice adaptation of the official two-stage
                      design. ETS does not publish its routing algorithm, and in the real test both modules count
                      toward your section band.
                    </p>
                    <Button
                      size="sm"
                      className="bg-amber-500 text-slate-950 hover:bg-amber-400"
                      onClick={() => navigate({ name: "exams-mocks" })}
                    >
                      <TrendingUp className="size-4" aria-hidden />
                      Continue to Stage 2 — {upper ? "Upper" : "Lower"} module
                    </Button>
                  </>
                );
              })()}
            </CardContent>
          </Card>
        ) : null}

        {/* Section scores */}
        <Card className="border-slate-800 bg-slate-900/60">
          <CardHeader className="pb-2">
            <CardTitle className="text-base text-white">Section scores</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {result.sectionScores.map((section) => (
              <div key={section.section}>
                <div className="mb-1 flex items-center justify-between text-sm">
                  <span className="font-medium capitalize text-slate-200">{section.section}</span>
                  <span className="text-slate-300">
                    <span className="font-bold text-amber-300">{section.score.toFixed(1)}</span>
                    <span className="text-slate-500"> / {maxScore}</span>
                    {section.max > 0 ? (
                      <span className="ml-2 text-xs text-slate-500">
                        raw {section.raw}/{section.max}
                      </span>
                    ) : null}
                  </span>
                </div>
                <Progress value={(section.score / maxScore) * 100} className="h-2 bg-slate-800" />
              </div>
            ))}
          </CardContent>
        </Card>

        {/* PROMPT 51: diagnostic profile */}
        {result.diagnosticProfile ? (
          <Card className="border-amber-500/30 bg-slate-900/60">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-base text-white">
                <ScanSearch className="size-4 text-amber-400" aria-hidden /> Diagnostic profile
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-3 sm:grid-cols-2">
                {result.diagnosticProfile.sections.map((section) => (
                  <div key={section.section} className="rounded-lg border border-slate-800 bg-slate-950 p-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium capitalize text-slate-200">{section.section}</span>
                      {section.measurable ? (
                        <span className="text-sm font-bold text-amber-300">
                          {section.estimatedScore.toFixed(1)}
                          <span className="text-xs font-normal text-slate-500"> est. / {maxScore}</span>
                        </span>
                      ) : (
                        <Badge variant="outline" className="border-slate-700 text-slate-400">
                          rubric-graded only
                        </Badge>
                      )}
                    </div>
                    <p className="mt-1 text-xs text-slate-500">
                      {section.measurable
                        ? `raw ${section.raw}/${section.max} · ${Math.round(section.accuracy * 100)}% correct`
                        : "no objective estimate from this sample — see the rubric feedback below"}
                    </p>
                  </div>
                ))}
              </div>
              {result.diagnosticProfile.weakestSkills.length > 0 ? (
                <div>
                  <div className="mb-1.5 text-xs font-medium uppercase tracking-wide text-slate-500">Weakest skills</div>
                  <div className="flex flex-wrap gap-1.5">
                    {result.diagnosticProfile.weakestSkills.map((skill) => (
                      <Badge key={skill.skill} variant="outline" className="border-rose-500/40 text-rose-300">
                        {skill.label} · {skill.correct}/{skill.total}
                      </Badge>
                    ))}
                  </div>
                </div>
              ) : null}
              {result.diagnosticProfile.weakestTasks.length > 0 ? (
                <div>
                  <div className="mb-1.5 text-xs font-medium uppercase tracking-wide text-slate-500">Weakest task types</div>
                  <div className="flex flex-wrap gap-1.5">
                    {result.diagnosticProfile.weakestTasks.map((task) => (
                      <Badge key={task.type} variant="outline" className="border-amber-500/40 text-amber-300">
                        {task.label} · {task.correct}/{task.total}
                      </Badge>
                    ))}
                  </div>
                </div>
              ) : null}
              <p className="text-sm leading-relaxed text-slate-300">{result.diagnosticProfile.summary}</p>
            </CardContent>
          </Card>
        ) : null}

        {/* PROMPT 51: task-type performance */}
        {result.taskPerformance.length > 0 ? (
          <Card className="border-slate-800 bg-slate-900/60">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-base text-white">
                <Target className="size-4 text-amber-400" aria-hidden /> Performance by task type
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[480px] text-sm">
                  <thead>
                    <tr className="border-b border-slate-800 text-left text-xs uppercase tracking-wide text-slate-500">
                      <th className="pb-2 pr-3 font-medium">Task type</th>
                      <th className="pb-2 pr-3 font-medium">Accuracy</th>
                      <th className="pb-2 pr-3 font-medium">Points</th>
                      <th className="pb-2 font-medium">Avg time</th>
                    </tr>
                  </thead>
                  <tbody>
                    {result.taskPerformance.map((task) => (
                      <tr key={task.type} className="border-b border-slate-800/60 last:border-0">
                        <td className="py-2 pr-3">
                          <span className="text-slate-200">{task.label}</span>
                          <span className="ml-2 text-xs capitalize text-slate-500">{task.section}</span>
                        </td>
                        <td className="py-2 pr-3">
                          <span
                            className={cn(
                              "font-medium",
                              task.total > 0 && task.correct / task.total >= 0.7
                                ? "text-emerald-300"
                                : task.total > 0 && task.correct / task.total >= 0.4
                                  ? "text-amber-300"
                                  : "text-rose-300",
                            )}
                          >
                            {task.correct}/{task.total}
                          </span>
                        </td>
                        <td className="py-2 pr-3 text-slate-300">
                          {task.awarded}/{task.maxPoints}
                        </td>
                        <td className="py-2 text-slate-400">
                          {task.avgTimeSec > 0 ? `${task.avgTimeSec}s` : "—"}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        ) : null}

        {/* PROMPT 51: time utilisation */}
        {result.timeUtilisation.length > 0 ? (
          <Card className="border-slate-800 bg-slate-900/60">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-base text-white">
                <Clock className="size-4 text-amber-400" aria-hidden /> Time utilisation
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {result.timeUtilisation.map((row) => (
                <div key={row.section}>
                  <div className="mb-1 flex items-center justify-between text-sm">
                    <span className="font-medium capitalize text-slate-200">
                      {row.section}
                      <Badge
                        variant="outline"
                        className={cn(
                          "ml-2 text-[10px]",
                          row.pace === "over"
                            ? "border-rose-500/40 text-rose-300"
                            : row.pace === "on"
                              ? "border-emerald-500/40 text-emerald-300"
                              : "border-sky-500/40 text-sky-300",
                        )}
                      >
                        {row.pace === "over" ? "over the clock" : row.pace === "on" ? "on pace" : "under the clock"}
                      </Badge>
                    </span>
                    <span className="text-xs text-slate-400">
                      {formatDuration(row.trackedSec)} tracked / {formatDuration(row.allottedSec)} allotted
                    </span>
                  </div>
                  <Progress value={row.utilisation * 100} className="h-2 bg-slate-800" />
                </div>
              ))}
              <p className="text-xs leading-relaxed text-slate-500">
                Tracked time counts the seconds the player was open on each question. It is a
                pace indicator, not an exact record — pauses away from the page are not counted.
              </p>
            </CardContent>
          </Card>
        ) : null}

        {/* PROMPT 51: adaptive continue */}
        {result.mode === "adaptive" ? (
          <Card className="border-slate-800 bg-slate-900/60">
            <CardContent className="flex flex-col items-start gap-3 p-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-medium text-white">Continue adaptive practice</p>
                <p className="mt-1 max-w-md text-xs leading-relaxed text-slate-400">
                  The next set is calibrated to this run&apos;s accuracy and steers one difficulty
                  tier up or down. TalkSy&apos;s own heuristic — not ETS&apos;s adaptive algorithm.
                </p>
              </div>
              <Button
                className="gap-1.5 bg-amber-400 text-slate-950 hover:bg-amber-300"
                disabled={continuing}
                onClick={() => void continueAdaptive()}
              >
                {continuing ? "Calibrating…" : "Continue — difficulty adjusts"}
                <ChevronRight className="size-4" aria-hidden />
              </Button>
            </CardContent>
          </Card>
        ) : null}

        {/* Examiner-style feedback */}
        {result.feedback ? (
          <Card className="border-slate-800 bg-slate-900/60">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-base text-white">
                <MessageSquare className="size-4 text-amber-400" aria-hidden /> Mistake analysis
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              {result.feedback.strengths.length > 0 ? (
                <div>
                  <div className="mb-1 font-medium text-emerald-300">Strengths</div>
                  <ul className="space-y-1 text-slate-300">
                    {result.feedback.strengths.map((note, index) => (
                      <li key={index}>· {note}</li>
                    ))}
                  </ul>
                </div>
              ) : null}
              {result.feedback.weaknesses.length > 0 ? (
                <div>
                  <div className="mb-1 font-medium text-amber-300">Focus next</div>
                  <ul className="space-y-1 text-slate-300">
                    {result.feedback.weaknesses.map((note, index) => (
                      <li key={index}>· {note}</li>
                    ))}
                  </ul>
                </div>
              ) : null}
              {result.feedback.notes.map((note, index) => (
                <p key={index} className="text-xs text-slate-500">
                  {note}
                </p>
              ))}
            </CardContent>
          </Card>
        ) : null}

        {/* Improvement recommendations */}
        {result.recommendations.length > 0 ? (
          <Card className="border-slate-800 bg-slate-900/60">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-base text-white">
                <Lightbulb className="size-4 text-amber-400" aria-hidden /> Improvement recommendations
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {result.recommendations.map((rec, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => {
                    window.location.hash = rec.href.startsWith("#") ? rec.href.slice(1) : rec.href;
                  }}
                  className="flex w-full items-center justify-between gap-3 rounded-lg border border-slate-800 bg-slate-950 p-3 text-left transition-colors hover:border-amber-400/50"
                >
                  <span className="min-w-0">
                    <span className="block truncate text-sm font-medium text-slate-200">{rec.title}</span>
                    <span className="block text-xs text-slate-500">
                      {rec.source} · {rec.minutes} min · {rec.reason}
                    </span>
                  </span>
                  <TrendingUp className="size-4 shrink-0 text-amber-400" aria-hidden />
                </button>
              ))}
            </CardContent>
          </Card>
        ) : null}

        {/* Per-question inspection */}
        <Card className="border-slate-800 bg-slate-900/60">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-base text-white">
              <Target className="size-4 text-amber-400" aria-hidden /> Review each answer
              <span className="ml-1 text-xs font-normal text-slate-500">
                ({wrongItems.length} to review)
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {result.questionResults.map((question, index) => {
              const isOpen = open[question.questionId] ?? question.correct === false;
              return (
                <div
                  key={question.questionId}
                  className={cn(
                    "overflow-hidden rounded-lg border",
                    question.correct === true
                      ? "border-emerald-500/30 bg-emerald-500/5"
                      : question.correct === false
                        ? "border-rose-500/30 bg-rose-500/5"
                        : "border-slate-800 bg-slate-950",
                  )}
                >
                  <button
                    type="button"
                    onClick={() => setOpen((current) => ({ ...current, [question.questionId]: !isOpen }))}
                    className="flex w-full items-center justify-between gap-2 p-3 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="flex min-w-0 items-center gap-2 text-xs">
                      {question.correct === true ? (
                        <CheckCircle2 className="size-4 shrink-0 text-emerald-400" aria-hidden />
                      ) : question.correct === false ? (
                        <XCircle className="size-4 shrink-0 text-rose-400" aria-hidden />
                      ) : (
                        <span className="rounded bg-slate-800 px-1.5 py-0.5 text-[10px] text-slate-300">
                          rubric
                        </span>
                      )}
                      <span className="truncate text-slate-300">
                        Q{index + 1} · {question.type.replace(/_/g, " ").toLowerCase()}
                        <span className="ml-1 text-slate-500">({question.section})</span>
                      </span>
                    </span>
                    <span className="flex shrink-0 items-center gap-2 text-[10px] text-slate-500">
                      {question.flagged ? (
                        <span className="rounded-full bg-sky-400/20 px-1.5 py-0.5 text-sky-300">flagged</span>
                      ) : null}
                      <span>{question.timeSpentSec > 0 ? `${question.timeSpentSec}s` : ""}</span>
                      <ChevronDown
                        className={cn("size-3.5 transition-transform", isOpen && "rotate-180")}
                        aria-hidden
                      />
                    </span>
                  </button>
                  {isOpen ? (
                    <div className="space-y-2 border-t border-slate-800/60 p-3 text-xs leading-relaxed">
                      {question.givenAnswer ? (
                        <p className="text-slate-300">
                          <span className="text-slate-500">Your answer: </span>
                          <span className="text-slate-200">{clamp(question.givenAnswer)}</span>
                        </p>
                      ) : (
                        <p className="text-rose-300">No answer given.</p>
                      )}
                      {question.correctAnswer ? (
                        <p className="text-slate-300">
                          <span className="text-slate-500">Correct answer: </span>
                          <span className="text-emerald-300">{clamp(question.correctAnswer)}</span>
                        </p>
                      ) : null}
                      {question.explanation ? (
                        <p className="text-slate-400">{question.explanation}</p>
                      ) : null}
                      {question.skillGaps.length > 0 && question.correct !== true ? (
                        <p className="text-slate-500">Skills to drill: {question.skillGaps.join(", ")}</p>
                      ) : null}
                      {question.constructedFeedback ? (
                        <div className="mt-1 rounded-lg border border-violet-500/30 bg-violet-500/5 p-2.5">
                          <p className="text-violet-300">
                            Rubric score: {question.constructedFeedback.score.toFixed(1)} / {maxScore}
                          </p>
                          {question.constructedFeedback.criteria.map((criterion, cIndex) => (
                            <p key={cIndex} className="mt-1 text-slate-400">
                              <span className="text-slate-300">{criterion.name} ({criterion.score.toFixed(1)}): </span>
                              {criterion.comment}
                            </p>
                          ))}
                          {question.constructedFeedback.summary ? (
                            <p className="mt-1 text-slate-400">{question.constructedFeedback.summary}</p>
                          ) : null}
                        </div>
                      ) : null}
                      {isEvaluationEligibleType(question.type) ? (
                        <EvaluationPanel
                          attemptId={result.attemptId}
                          questionId={question.questionId}
                          section={question.section}
                          responseText={question.givenAnswer}
                        />
                      ) : null}
                    </div>
                  ) : null}
                </div>
              );
            })}
          </CardContent>
        </Card>

        <div className="flex flex-wrap gap-3 pb-6">
          <Button
            className="gap-1.5 bg-amber-400 text-slate-950 hover:bg-amber-300"
            onClick={() => navigate({ name: "exams-dashboard" })}
          >
            Back to my dashboard
          </Button>
          <Button
            variant="outline"
            className="gap-1.5 border-slate-700 bg-transparent text-slate-200 hover:bg-slate-900 hover:text-white"
            onClick={() => navigate({ name: "exams-history" })}
          >
            <TrendingUp className="size-4" aria-hidden /> History &amp; trends
          </Button>
          {wrongItems.length > 0 || result.unansweredCount > 0 ? (
            <Button
              variant="outline"
              className="gap-1.5 border-rose-500/40 bg-rose-500/10 text-rose-300 hover:bg-rose-500/20"
              disabled={retrying}
              onClick={() => void practiceMistakes()}
            >
              <RotateCcw className="size-4" aria-hidden />
              {retrying ? "Assembling…" : "Practice these mistakes"}
            </Button>
          ) : null}
        </div>
      </div>
    </div>
  );
}

function timedColor(timed: boolean): string {
  return timed ? "border-emerald-500/40 text-emerald-300" : "border-sky-500/40 text-sky-300";
}

function clamp(text: string, max = 260): string {
  const trimmed = text.trim();
  return trimmed.length > max ? `${trimmed.slice(0, max)}…` : trimmed;
}
