"use client";

/**
 * Reading Room — reusable comprehension-question views.
 *
 * Three input formats (choice, sequence, short-text) shared by the practice
 * flow (instant server-graded feedback with retry) and the formal
 * comprehension check. All grading happens server-side via /api/reading/check.
 */

import { useMemo, useState } from "react";
import {
  ArrowDown,
  ArrowUp,
  BookOpenCheck,
  CircleCheck,
  Lightbulb,
  RotateCcw,
  XCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { api, type ReadingCheckResult } from "@/lib/client/api";
import type {
  SafeChoiceQuestion,
  SafeReadingQuestion,
  SafeSequenceQuestion,
  SafeShortTextQuestion,
} from "@/data/reading/types";

export const LETTERS = ["A", "B", "C", "D", "E", "F"];

// ---------------------------------------------------------------------------
// Input views
// ---------------------------------------------------------------------------

export function ChoiceInput({
  question,
  selected,
  onSelect,
  disabled,
}: {
  question: SafeChoiceQuestion;
  selected: string | null;
  onSelect: (optionId: string) => void;
  disabled?: boolean;
}) {
  return (
    <div className="flex flex-col gap-2" role="radiogroup" aria-label="Answer options">
      {question.options.map((option, index) => {
        const active = selected === option.id;
        return (
          <button
            key={option.id}
            type="button"
            role="radio"
            aria-checked={active}
            disabled={disabled}
            onClick={() => onSelect(option.id)}
            className={cn(
              "flex items-center gap-3 rounded-xl border p-3 text-left text-sm transition-colors",
              "hover:border-primary/50 hover:bg-secondary/50",
              active && "border-primary bg-primary/5 ring-1 ring-primary",
              disabled && "opacity-60",
            )}
          >
            <span
              className={cn(
                "inline-flex size-6 shrink-0 items-center justify-center rounded-full border text-xs font-bold",
                active ? "border-primary bg-primary text-primary-foreground" : "bg-secondary",
              )}
            >
              {LETTERS[index]}
            </span>
            <span>{option.text}</span>
          </button>
        );
      })}
    </div>
  );
}

export function SequenceInput({
  question,
  order,
  setOrder,
  disabled,
}: {
  question: SafeSequenceQuestion;
  order: string[];
  setOrder: (order: string[]) => void;
  disabled?: boolean;
}) {
  const itemsById = useMemo(
    () => new Map(question.events.map((e) => [e.id, e])),
    [question.events],
  );
  const move = (index: number, direction: -1 | 1) => {
    const next = [...order];
    const target = index + direction;
    if (target < 0 || target >= next.length) return;
    [next[index], next[target]] = [next[target], next[index]];
    setOrder(next);
  };

  return (
    <div className="flex flex-col gap-2">
      <p className="text-xs text-muted-foreground">
        Put the events in order with the arrows — the first event at the top.
      </p>
      <ol className="flex flex-col gap-2">
        {order.map((eventId, index) => {
          const event = itemsById.get(eventId);
          if (!event) return null;
          return (
            <li
              key={eventId}
              className="flex items-center gap-2 rounded-xl border bg-secondary/30 p-2.5"
            >
              <span className="inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                {index + 1}
              </span>
              <span className="flex-1 text-sm">{event.text}</span>
              <span className="flex shrink-0 flex-col gap-1">
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  className="size-7"
                  aria-label={`Move "${event.text}" up`}
                  disabled={disabled || index === 0}
                  onClick={() => move(index, -1)}
                >
                  <ArrowUp className="size-3.5" aria-hidden />
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  className="size-7"
                  aria-label={`Move "${event.text}" down`}
                  disabled={disabled || index === order.length - 1}
                  onClick={() => move(index, 1)}
                >
                  <ArrowDown className="size-3.5" aria-hidden />
                </Button>
              </span>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export function ShortTextInput({
  value,
  onChange,
  disabled,
  placeholder,
}: {
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
  placeholder?: string;
}) {
  return (
    <Input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      disabled={disabled}
      placeholder={placeholder ?? "Type your answer…"}
      aria-label="Your answer"
      className="max-w-xl"
    />
  );
}

// ---------------------------------------------------------------------------
// Practice flow: hint reveal → submit → feedback → retry
// ---------------------------------------------------------------------------

export type PracticeAnswer =
  | { format: "choice"; optionId: string }
  | { format: "sequence"; order: string[] }
  | { format: "short-text"; text: string };

function initialAnswer(question: SafeReadingQuestion): PracticeAnswer {
  switch (question.format) {
    case "choice":
      return { format: "choice", optionId: "" };
    case "sequence":
      return { format: "sequence", order: question.events.map((e) => e.id) };
    default:
      return { format: "short-text", text: "" };
  }
}

function answerReady(question: SafeReadingQuestion, answer: PracticeAnswer): boolean {
  switch (question.format) {
    case "choice":
      return answer.format === "choice" && answer.optionId !== "";
    case "sequence":
      return answer.format === "sequence" && answer.order.length > 0;
    default:
      return answer.format === "short-text" && answer.text.trim().length > 0;
  }
}

function toSubmitPayload(answer: PracticeAnswer): unknown {
  switch (answer.format) {
    case "choice":
      return { format: "choice", optionId: answer.optionId };
    case "sequence":
      return { format: "sequence", order: answer.order };
    default:
      return { format: "short-text", text: answer.text };
  }
}

export function PracticeQuestionCard({
  slug,
  question,
  index,
  onSolved,
}: {
  slug: string;
  question: SafeReadingQuestion;
  index: number;
  onSolved?: (questionId: string) => void;
}) {
  const [answer, setAnswer] = useState<PracticeAnswer>(() => initialAnswer(question));
  const [hintsShown, setHintsShown] = useState(0);
  const [result, setResult] = useState<ReadingCheckResult | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [startedAt] = useState(() => Date.now());

  const submit = async () => {
    setSubmitting(true);
    setError(null);
    const response = await api.readingCheck({
      slug,
      questionId: question.id,
      answer: toSubmitPayload(answer),
      durationMs: Date.now() - startedAt,
    });
    setSubmitting(false);
    if (!response.ok) {
      setError(response.error);
      return;
    }
    setResult(response.data);
    if (response.data.correct) onSolved?.(question.id);
  };

  const retry = () => {
    setResult(null);
    setError(null);
    setHintsShown(0);
    setAnswer(initialAnswer(question));
  };

  const answered = result !== null;

  return (
    <div className="rounded-2xl border bg-card p-4 sm:p-5">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <p className="text-sm font-semibold">
          {index + 1}. {question.prompt}
        </p>
        <span className="rounded-full bg-secondary px-2 py-0.5 text-[11px] font-medium capitalize text-muted-foreground">
          {question.skill.replace("-", " ")}
        </span>
      </div>

      <div className="mt-3">
        {question.format === "choice" && answer.format === "choice" ? (
          <ChoiceInput
            question={question}
            selected={answer.optionId}
            onSelect={(optionId) => setAnswer({ format: "choice", optionId })}
            disabled={answered && result?.correct}
          />
        ) : null}
        {question.format === "sequence" && answer.format === "sequence" ? (
          <SequenceInput
            question={question}
            order={answer.order}
            setOrder={(order) => setAnswer({ format: "sequence", order })}
            disabled={answered && result?.correct}
          />
        ) : null}
        {question.format === "short-text" && answer.format === "short-text" ? (
          <ShortTextInput
            value={answer.text}
            onChange={(text) => setAnswer({ format: "short-text", text })}
            disabled={answered && result?.correct}
          />
        ) : null}
      </div>

      {/* Hints */}
      {hintsShown < question.hints.length && !answered ? (
        <Button
          type="button"
          variant="ghost"
          size="sm"
          className="mt-3 gap-1.5 text-amber-600 hover:text-amber-700"
          onClick={() => setHintsShown(hintsShown + 1)}
        >
          <Lightbulb className="size-4" aria-hidden /> Show a hint ({hintsShown + 1}/
          {question.hints.length})
        </Button>
      ) : null}
      {question.hints.slice(0, hintsShown).map((hint, i) => (
        <p key={i} className="mt-2 rounded-lg bg-amber-50 p-2.5 text-xs text-amber-800 dark:bg-amber-950 dark:text-amber-200">
          <Lightbulb className="mr-1 inline size-3.5" aria-hidden /> {hint}
        </p>
      ))}

      {error ? <p className="mt-3 text-sm text-destructive">{error}</p> : null}

      {/* Actions */}
      {!answered ? (
        <Button
          type="button"
          className="mt-4"
          disabled={!answerReady(question, answer) || submitting}
          onClick={submit}
        >
          {submitting ? "Checking…" : "Check answer"}
        </Button>
      ) : result?.correct ? (
        <div className="mt-4 flex items-start gap-2 rounded-xl bg-emerald-50 p-3 text-sm dark:bg-emerald-950">
          <CircleCheck className="mt-0.5 size-4 shrink-0 text-emerald-600" aria-hidden />
          <div>
            <p className="font-semibold text-emerald-700 dark:text-emerald-300">Correct!</p>
            <p className="mt-1 text-emerald-800 dark:text-emerald-200">{result.feedback.explanation}</p>
          </div>
        </div>
      ) : (
        <div className="mt-4 rounded-xl bg-destructive/10 p-3 text-sm">
          <div className="flex items-start gap-2">
            <XCircle className="mt-0.5 size-4 shrink-0 text-destructive" aria-hidden />
            <div className="flex-1">
              <p className="font-semibold text-destructive">
                {result?.invalid ? "We couldn't read that answer." : "Not quite."}
              </p>
              <p className="mt-1">
                <span className="font-medium">Correct answer:</span>{" "}
                {result?.feedback.correctAnswer}
              </p>
              <p className="mt-1 text-muted-foreground">{result?.feedback.explanation}</p>
              {result?.feedback.whyWrong ? (
                <p className="mt-1 text-muted-foreground italic">{result.feedback.whyWrong}</p>
              ) : null}
            </div>
          </div>
          <Button type="button" variant="outline" size="sm" className="mt-3 gap-1.5" onClick={retry}>
            <RotateCcw className="size-3.5" aria-hidden /> Try again
          </Button>
        </div>
      )}
    </div>
  );
}

/** Small "practised" chip used by the reader next to solved practice questions. */
export function SolvedChip() {
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-2 py-0.5 text-[11px] font-semibold text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
      <BookOpenCheck className="size-3" aria-hidden /> Practised
    </span>
  );
}
