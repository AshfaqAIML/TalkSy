"use client";

/**
 * Reading Room — formal comprehension-check runner.
 *
 * Start → answer every question (no feedback during the run) → submit →
 * server-graded summary with per-skill breakdown and a full review with
 * feedback. Retry starts a fresh run. The pass mark comes from the text.
 */

import { useEffect, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Award,
  CircleCheck,
  ClipboardCheck,
  RotateCcw,
  XCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import { api, type ReadingRunResult, type ReadingRunStartDto } from "@/lib/client/api";
import type { SafeReadingQuestion } from "@/data/reading/types";
import { ChoiceInput, SequenceInput, ShortTextInput } from "./QuestionViews";

type RunAnswer =
  | { format: "choice"; optionId: string }
  | { format: "sequence"; order: string[] }
  | { format: "short-text"; text: string };

function initialRunAnswer(question: SafeReadingQuestion): RunAnswer {
  switch (question.format) {
    case "choice":
      return { format: "choice", optionId: "" };
    case "sequence":
      return { format: "sequence", order: question.events.map((e) => e.id) };
    default:
      return { format: "short-text", text: "" };
  }
}

function runAnswerReady(question: SafeReadingQuestion, answer: RunAnswer): boolean {
  switch (question.format) {
    case "choice":
      return answer.format === "choice" && answer.optionId !== "";
    case "sequence":
      return answer.format === "sequence" && answer.order.length > 0;
    default:
      return answer.format === "short-text" && answer.text.trim().length > 0;
  }
}

function toPayload(answer: RunAnswer): unknown {
  switch (answer.format) {
    case "choice":
      return { format: "choice", optionId: answer.optionId };
    case "sequence":
      return { format: "sequence", order: answer.order };
    default:
      return { format: "short-text", text: answer.text };
  }
}

export function ReadingRunner({
  slug,
  passScorePercent,
  onFinished,
  onActiveChange,
}: {
  slug: string;
  passScorePercent: number;
  onFinished?: (result: ReadingRunResult) => void;
  onActiveChange?: (active: boolean) => void;
}) {
  const [run, setRun] = useState<ReadingRunStartDto | null>(null);
  const [answers, setAnswers] = useState<Record<string, RunAnswer>>({});
  const [index, setIndex] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const [starting, setStarting] = useState(false);
  const [summary, setSummary] = useState<ReadingRunResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Tell the parent while a run (or its summary) is showing so the practice
  // list can step aside — one comprehension task at a time.
  const active = run !== null || summary !== null;
  useEffect(() => {
    onActiveChange?.(active);
  }, [active, onActiveChange]);

  const start = async () => {
    setStarting(true);
    setError(null);
    const response = await api.readingStartRun(slug);
    setStarting(false);
    if (!response.ok) {
      setError(response.error);
      return;
    }
    setRun(response.data);
    setIndex(0);
    const initial: Record<string, RunAnswer> = {};
    for (const question of response.data.questions) {
      initial[question.id] = initialRunAnswer(question);
    }
    setAnswers(initial);
  };

  const submit = async () => {
    if (!run) return;
    setSubmitting(true);
    setError(null);
    const payload: Record<string, unknown> = {};
    for (const question of run.questions) {
      payload[question.id] = toPayload(answers[question.id]);
    }
    const response = await api.readingSubmitRun(run.runId, payload);
    setSubmitting(false);
    if (!response.ok) {
      setError(response.error);
      return;
    }
    setSummary(response.data);
    onFinished?.(response.data);
  };

  // ------------------------------------------------------------------
  // Idle: offer the check
  // ------------------------------------------------------------------
  if (!run && !summary) {
    return (
      <div className="rounded-2xl border-2 border-dashed p-5 text-center">
        <ClipboardCheck className="mx-auto size-8 text-primary" aria-hidden />
        <h3 className="mt-2 font-semibold">Comprehension check</h3>
        <p className="mx-auto mt-1 max-w-md text-sm text-muted-foreground">
          Answer every question about the text in one go. Pass with{" "}
          {passScorePercent}% or more to complete this text. You can retry as
          many times as you like — only your best score counts.
        </p>
        <Button className="mt-4" onClick={start} disabled={starting}>
          {starting ? "Preparing…" : "Start the check"}
        </Button>
        {error ? <p className="mt-3 text-sm text-destructive">{error}</p> : null}
      </div>
    );
  }

  // ------------------------------------------------------------------
  // Summary + review
  // ------------------------------------------------------------------
  if (summary) {
    return (
      <div className="flex flex-col gap-4">
        <div
          className={cn(
            "rounded-2xl border-2 p-5",
            summary.summary.passed
              ? "border-emerald-300 bg-emerald-50 dark:bg-emerald-950"
              : "border-amber-300 bg-amber-50 dark:bg-amber-950",
          )}
        >
          <div className="flex items-center gap-3">
            {summary.summary.passed ? (
              <Award className="size-8 text-emerald-600" aria-hidden />
            ) : (
              <RotateCcw className="size-8 text-amber-600" aria-hidden />
            )}
            <div>
              <p className="text-lg font-bold">
                {summary.summary.scorePercent}% —{" "}
                {summary.summary.passed ? "Passed!" : "Not passed yet"}
              </p>
              <p className="text-sm text-muted-foreground">
                {summary.summary.correct} of {summary.summary.total} correct · pass mark{" "}
                {summary.summary.passMarkPercent}% · {summary.summary.pointsScored}/
                {summary.summary.pointsTotal} points
              </p>
            </div>
          </div>
          <p className="mt-3 text-sm">{summary.summary.recommendation}</p>
          {summary.summary.bySkill.length > 0 ? (
            <div className="mt-4 flex flex-col gap-1.5">
              {summary.summary.bySkill.map((skill) => (
                <div key={skill.skill} className="flex items-center gap-2 text-xs">
                  <span className="w-36 shrink-0 capitalize text-muted-foreground">
                    {skill.skill.replace("-", " ")}
                  </span>
                  <Progress
                    value={(skill.correct / Math.max(1, skill.attempts)) * 100}
                    className="h-2 flex-1"
                  />
                  <span className="w-10 shrink-0 text-right">
                    {skill.correct}/{skill.attempts}
                  </span>
                </div>
              ))}
            </div>
          ) : null}
          <Button
            variant="outline"
            className="mt-4 gap-1.5"
            onClick={() => {
              setSummary(null);
              setRun(null);
            }}
          >
            <RotateCcw className="size-4" aria-hidden /> Retry the check
          </Button>
        </div>

        {/* Review */}
        <div className="flex flex-col gap-3">
          <h4 className="font-semibold">Review your answers</h4>
          {summary.review.map((item, i) => (
            <div key={item.questionId} className="rounded-xl border p-4">
              <div className="flex items-start justify-between gap-2">
                <p className="text-sm font-medium">
                  {i + 1}. {item.prompt}
                </p>
                {item.correct ? (
                  <CircleCheck className="size-5 shrink-0 text-emerald-600" aria-hidden />
                ) : (
                  <XCircle className="size-5 shrink-0 text-destructive" aria-hidden />
                )}
              </div>
              <div className="mt-2 space-y-1 text-sm">
                {!item.correct ? (
                  <p className="text-muted-foreground">
                    Your answer:{" "}
                    <span className="font-medium text-destructive">
                      {item.submittedDescription}
                    </span>
                  </p>
                ) : null}
                <p className="text-muted-foreground">
                  Correct answer:{" "}
                  <span className="font-medium text-emerald-700 dark:text-emerald-400">
                    {item.feedback.correctAnswer}
                  </span>
                </p>
                <p className="text-muted-foreground">{item.feedback.explanation}</p>
                {item.feedback.whyWrong ? (
                  <p className="text-muted-foreground italic">{item.feedback.whyWrong}</p>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // ------------------------------------------------------------------
  // Running: one question at a time, no feedback
  // ------------------------------------------------------------------
  if (!run) return null;
  const question = run.questions[index];
  const answer = answers[question.id];
  const answeredCount = run.questions.filter((q) => runAnswerReady(q, answers[q.id])).length;
  const allAnswered = answeredCount === run.questions.length;

  return (
    <div className="rounded-2xl border-2 border-primary/30 bg-card p-4 sm:p-5">
      <div className="flex items-center justify-between gap-2">
        <p className="text-xs font-semibold uppercase tracking-wide text-primary">
          Comprehension check · question {index + 1} of {run.questions.length}
        </p>
        <p className="text-xs text-muted-foreground">
          {answeredCount}/{run.questions.length} answered
        </p>
      </div>
      <Progress value={((index + 1) / run.questions.length) * 100} className="mt-2 h-1.5" />

      <p className="mt-4 font-semibold">{question.prompt}</p>

      <div className="mt-3">
        {question.format === "choice" && answer?.format === "choice" ? (
          <ChoiceInput
            question={question}
            selected={answer.optionId}
            onSelect={(optionId) =>
              setAnswers({ ...answers, [question.id]: { format: "choice", optionId } })
            }
          />
        ) : null}
        {question.format === "sequence" && answer?.format === "sequence" ? (
          <SequenceInput
            question={question}
            order={answer.order}
            setOrder={(order) =>
              setAnswers({ ...answers, [question.id]: { format: "sequence", order } })
            }
          />
        ) : null}
        {question.format === "short-text" && answer?.format === "short-text" ? (
          <ShortTextInput
            value={answer.text}
            onChange={(text) =>
              setAnswers({ ...answers, [question.id]: { format: "short-text", text } })
            }
          />
        ) : null}
      </div>

      {error ? <p className="mt-3 text-sm text-destructive">{error}</p> : null}

      <div className="mt-5 flex items-center justify-between">
        <Button
          type="button"
          variant="outline"
          size="sm"
          className="gap-1.5"
          disabled={index === 0}
          onClick={() => setIndex(index - 1)}
        >
          <ArrowLeft className="size-4" aria-hidden /> Previous
        </Button>
        {index < run.questions.length - 1 ? (
          <Button type="button" size="sm" className="gap-1.5" onClick={() => setIndex(index + 1)}>
            Next <ArrowRight className="size-4" aria-hidden />
          </Button>
        ) : (
          <Button type="button" size="sm" onClick={submit} disabled={!allAnswered || submitting}>
            {submitting ? "Submitting…" : "Submit answers"}
          </Button>
        )}
      </div>
      {!allAnswered && index === run.questions.length - 1 ? (
        <p className="mt-2 text-xs text-muted-foreground">
          Answer every question to submit ({run.questions.length - answeredCount} left).
        </p>
      ) : null}
    </div>
  );
}
