"use client";

/**
 * Listening Lab — exercise views for all eight formats.
 *
 * choice-shaped: listen-select, speaker-identify, specific-info,
 * overall-meaning. Plus listen-complete (blanks), listen-arrange (order) and
 * listen-answer / dictation (text). Every submission is graded by
 * /api/listening/check; the feedback reveals the exact audio lines the
 * exercise was based on.
 */

import { useState } from "react";
import {
  ArrowDown,
  ArrowUp,
  CircleCheck,
  Lightbulb,
  Play,
  RotateCcw,
  Volume2,
  XCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { api, type ListeningCheckResult } from "@/lib/client/api";
import { useSpeech } from "@/hooks/use-speech";
import { FORMAT_LABELS } from "@/data/listening/types";
import type {
  SafeChoiceListeningExercise,
  SafeListeningExercise,
} from "@/data/listening/types";
import { LETTERS } from "@/components/app/reading/QuestionViews";

const CHOICE_FORMATS = ["listen-select", "speaker-identify", "specific-info", "overall-meaning"];

function isChoiceExercise(
  exercise: SafeListeningExercise,
): exercise is SafeChoiceListeningExercise {
  return CHOICE_FORMATS.includes(exercise.format);
}

// ---------------------------------------------------------------------------
// Answer state (one of four shapes)
// ---------------------------------------------------------------------------

type ExerciseAnswer =
  | { format: "choice"; optionId: string }
  | { format: "complete"; blanks: Record<string, string> }
  | { format: "arrange"; order: string[] }
  | { format: "text"; text: string };

function initialAnswer(exercise: SafeListeningExercise): ExerciseAnswer {
  switch (exercise.format) {
    case "listen-select":
    case "speaker-identify":
    case "specific-info":
    case "overall-meaning":
      return { format: "choice", optionId: "" };
    case "listen-complete":
      return {
        format: "complete",
        blanks: Object.fromEntries(exercise.blanks.map((b) => [b.id, ""])),
      };
    case "listen-arrange":
      return { format: "arrange", order: exercise.items.map((i) => i.id) };
    default:
      return { format: "text", text: "" };
  }
}

function answerReady(exercise: SafeListeningExercise, answer: ExerciseAnswer): boolean {
  switch (answer.format) {
    case "choice":
      return answer.optionId !== "";
    case "complete":
      return Object.values(answer.blanks).some((value) => value.trim().length > 0);
    case "arrange":
      return answer.order.length > 0;
    default:
      return answer.text.trim().length > 0;
  }
}

function toPayload(answer: ExerciseAnswer): unknown {
  switch (answer.format) {
    case "choice":
      return { format: "choice", optionId: answer.optionId };
    case "complete":
      return { format: "complete", blanks: answer.blanks };
    case "arrange":
      return { format: "arrange", order: answer.order };
    default:
      return { format: "text", text: answer.text };
  }
}

// ---------------------------------------------------------------------------
// The exercise card
// ---------------------------------------------------------------------------

export function ExerciseCard({
  slug,
  exercise,
  index,
  total,
  completed,
  onResult,
  onPlaySegments,
}: {
  slug: string;
  exercise: SafeListeningExercise;
  index: number;
  total: number;
  completed: boolean;
  onResult: (exerciseId: string, correct: boolean, progress: ListeningCheckResult["progress"]) => void;
  onPlaySegments: (segmentIds: string[]) => void;
}) {
  const [answer, setAnswer] = useState<ExerciseAnswer>(() => initialAnswer(exercise));
  const [hintsShown, setHintsShown] = useState(0);
  const [result, setResult] = useState<ListeningCheckResult | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [startedAt] = useState(() => Date.now());
  const { play, playing, stop } = useSpeech();

  const isChoiceFormat = isChoiceExercise(exercise);

  const listen = () => onPlaySegments(exercise.segmentIds);

  const submit = async () => {
    setSubmitting(true);
    setError(null);
    const response = await api.listeningCheck({
      slug,
      exerciseId: exercise.id,
      answer: toPayload(answer),
      hintsUsed: hintsShown,
      durationMs: Date.now() - startedAt,
    });
    setSubmitting(false);
    if (!response.ok) {
      setError(response.error);
      return;
    }
    setResult(response.data);
    onResult(exercise.id, response.data.correct, response.data.progress);
  };

  const retry = () => {
    setResult(null);
    setError(null);
    setHintsShown(0);
    setAnswer(initialAnswer(exercise));
  };

  const solved = completed || result?.correct === true;

  return (
    <div className="rounded-2xl border bg-card p-4 sm:p-5">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <p className="text-xs font-semibold uppercase tracking-wide text-primary">
          Exercise {index + 1} of {total} · {FORMAT_LABELS[exercise.format]}
        </p>
        {solved ? (
          <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-2 py-0.5 text-[11px] font-semibold text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
            <CircleCheck className="size-3" aria-hidden /> Solved
          </span>
        ) : null}
      </div>

      <p className="mt-2 font-semibold">{exercise.prompt}</p>

      {/* Listen button for this exercise's audio */}
      <Button type="button" variant="outline" size="sm" className="mt-3 gap-2" onClick={listen}>
        <Play className="size-4" aria-hidden />
        {exercise.segmentIds.length === 0
          ? "Play the full audio"
          : exercise.segmentIds.length === 1
            ? "Play the audio"
            : `Play the audio (${exercise.segmentIds.length} parts)`}
      </Button>

      <div className="mt-4">
        {/* Choice formats */}
        {isChoiceFormat && answer.format === "choice" ? (
          <div className="flex flex-col gap-2" role="radiogroup" aria-label="Answer options">
            {exercise.options.map((option, optionIndex) => {
              const active = answer.optionId === option.id;
              return (
                <button
                  key={option.id}
                  type="button"
                  role="radio"
                  aria-checked={active}
                  disabled={solved}
                  onClick={() => setAnswer({ format: "choice", optionId: option.id })}
                  className={cn(
                    "flex items-center gap-3 rounded-xl border p-3 text-left text-sm transition-colors",
                    "hover:border-primary/50 hover:bg-secondary/50",
                    active && "border-primary bg-primary/5 ring-1 ring-primary",
                    solved && "opacity-60",
                  )}
                >
                  <span
                    className={cn(
                      "inline-flex size-6 shrink-0 items-center justify-center rounded-full border text-xs font-bold",
                      active ? "border-primary bg-primary text-primary-foreground" : "bg-secondary",
                    )}
                  >
                    {LETTERS[optionIndex]}
                  </span>
                  {option.icon ? <span aria-hidden>{option.icon}</span> : null}
                  <span>{option.text}</span>
                </button>
              );
            })}
          </div>
        ) : null}

        {/* Listen and complete */}
        {exercise.format === "listen-complete" && answer.format === "complete" ? (
          <CompleteInput
            exercise={exercise}
            answer={answer}
            setAnswer={setAnswer}
            disabled={solved}
          />
        ) : null}

        {/* Listen and arrange */}
        {exercise.format === "listen-arrange" && answer.format === "arrange" ? (
          <ArrangeInput
            exercise={exercise}
            answer={answer}
            setAnswer={setAnswer}
            disabled={solved}
          />
        ) : null}

        {/* Listen and answer / dictation */}
        {(exercise.format === "listen-answer" || exercise.format === "dictation") &&
        answer.format === "text" ? (
          <Textarea
            value={answer.text}
            onChange={(e) => setAnswer({ format: "text", text: e.target.value })}
            disabled={solved}
            placeholder={
              exercise.format === "dictation"
                ? "Type exactly what you hear…"
                : "Type your answer…"
            }
            aria-label="Your answer"
            className="min-h-20"
          />
        ) : null}
      </div>

      {/* Hints */}
      {hintsShown < exercise.hints.length && !solved ? (
        <Button
          type="button"
          variant="ghost"
          size="sm"
          className="mt-3 gap-1.5 text-amber-600 hover:text-amber-700"
          onClick={() => setHintsShown(hintsShown + 1)}
        >
          <Lightbulb className="size-4" aria-hidden /> Show a hint ({hintsShown + 1}/
          {exercise.hints.length})
        </Button>
      ) : null}
      {exercise.hints.slice(0, hintsShown).map((hint, i) => (
        <p
          key={i}
          className="mt-2 rounded-lg bg-amber-50 p-2.5 text-xs text-amber-800 dark:bg-amber-950 dark:text-amber-200"
        >
          <Lightbulb className="mr-1 inline size-3.5" aria-hidden /> {hint}
        </p>
      ))}

      {error ? <p className="mt-3 text-sm text-destructive">{error}</p> : null}

      {/* Actions / feedback */}
      {!result ? (
        <Button
          type="button"
          className="mt-4"
          disabled={!answerReady(exercise, answer) || submitting || solved}
          onClick={submit}
        >
          {submitting ? "Checking…" : "Check answer"}
        </Button>
      ) : result.correct ? (
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
                {result.invalid ? "We couldn't read that answer." : "Not quite — listen again."}
              </p>
              <p className="mt-1">
                <span className="font-medium">Correct answer:</span> {result.feedback.correctAnswer}
              </p>
              <p className="mt-1 text-muted-foreground">{result.feedback.explanation}</p>
              {result.feedback.whyWrong ? (
                <p className="mt-1 text-muted-foreground italic">{result.feedback.whyWrong}</p>
              ) : null}
            </div>
          </div>
          <Button type="button" variant="outline" size="sm" className="mt-3 gap-1.5" onClick={retry}>
            <RotateCcw className="size-3.5" aria-hidden /> Try again
          </Button>
        </div>
      )}

      {/* What you heard — revealed after the exercise is completed */}
      {result ? (
        <div className="mt-4 rounded-xl border border-dashed p-3">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            What you heard
          </p>
          <div className="mt-2 flex flex-col gap-1.5">
            {result.feedback.revealSegments.map((line, i) => (
              <div key={i} className="flex items-center gap-2 text-sm">
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="size-7 shrink-0 rounded-full"
                  aria-label={`Listen: ${line}`}
                  onClick={() => (playing ? stop() : play(line, 0.9))}
                >
                  <Volume2 className="size-3.5" aria-hidden />
                </Button>
                <span>{line}</span>
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Listen-and-complete input: template with inline blanks
// ---------------------------------------------------------------------------

function CompleteInput({
  exercise,
  answer,
  setAnswer,
  disabled,
}: {
  exercise: Extract<SafeListeningExercise, { format: "listen-complete" }>;
  answer: Extract<ExerciseAnswer, { format: "complete" }>;
  setAnswer: (answer: ExerciseAnswer) => void;
  disabled?: boolean;
}) {
  const parts = exercise.template.split(/(\{\d+\})/g);
  return (
    <div className="flex flex-col gap-2">
      <p className="text-xs text-muted-foreground">
        Fill every blank with the word(s) you hear.
      </p>
      <p className="flex flex-wrap items-center gap-1.5 text-base leading-relaxed">
        {parts.map((part, index) => {
          const match = part.match(/^\{(\d+)\}$/);
          if (!match) return <span key={index}>{part}</span>;
          const blankIndex = Number(match[1]) - 1;
          const blank = exercise.blanks[blankIndex];
          if (!blank) return <span key={index}>{part}</span>;
          return (
            <Input
              key={index}
              value={answer.blanks[blank.id] ?? ""}
              disabled={disabled}
              onChange={(e) =>
                setAnswer({
                  format: "complete",
                  blanks: { ...answer.blanks, [blank.id]: e.target.value },
                })
              }
              aria-label={`Blank ${blankIndex + 1}`}
              className="inline-block h-9 w-28 text-center"
              placeholder={`(${blankIndex + 1})`}
            />
          );
        })}
      </p>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Listen-and-arrange input: order the items
// ---------------------------------------------------------------------------

function ArrangeInput({
  exercise,
  answer,
  setAnswer,
  disabled,
}: {
  exercise: Extract<SafeListeningExercise, { format: "listen-arrange" }>;
  answer: Extract<ExerciseAnswer, { format: "arrange" }>;
  setAnswer: (answer: ExerciseAnswer) => void;
  disabled?: boolean;
}) {
  const itemsById = new Map(exercise.items.map((i) => [i.id, i.text]));
  const move = (index: number, direction: -1 | 1) => {
    const next = [...answer.order];
    const target = index + direction;
    if (target < 0 || target >= next.length) return;
    [next[index], next[target]] = [next[target], next[index]];
    setAnswer({ format: "arrange", order: next });
  };

  return (
    <div className="flex flex-col gap-2">
      <p className="text-xs text-muted-foreground">
        Arrange what you hear in order — the first thing you heard at the top.
      </p>
      <ol className="flex flex-col gap-2">
        {answer.order.map((itemId, index) => (
          <li
            key={itemId}
            className="flex items-center gap-2 rounded-xl border bg-secondary/30 p-2.5"
          >
            <span className="inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
              {index + 1}
            </span>
            <span className="flex-1 text-sm">{itemsById.get(itemId) ?? itemId}</span>
            <span className="flex shrink-0 flex-col gap-1">
              <Button
                type="button"
                variant="outline"
                size="icon"
                className="size-7"
                aria-label="Move up"
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
                aria-label="Move down"
                disabled={disabled || index === answer.order.length - 1}
                onClick={() => move(index, 1)}
              >
                <ArrowDown className="size-3.5" aria-hidden />
              </Button>
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}
