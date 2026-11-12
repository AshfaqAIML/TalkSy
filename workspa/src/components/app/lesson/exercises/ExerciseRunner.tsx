"use client";

import { useEffect, useRef, useState } from "react";
import {
  CheckCircle2,
  Lightbulb,
  RotateCcw,
  Send,
  XCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card";
import { api, type AttemptResult } from "@/lib/client/api";
import { useAppStore } from "@/lib/client/store";
import type { SafeExercise } from "@/data/curriculum/types";
import { toast } from "sonner";
import { McqInput, MultiSelectInput, ReadAnswerInput } from "./inputs/choice-inputs";
import {
  CompleteSentenceInput,
  CorrectMistakeInput,
  DictationInput,
  FillBlankInput,
  ListenAnswerInput,
  ShortAnswerInput,
  TranslateInput,
} from "./inputs/text-inputs";
import {
  DragDropInput,
  MatchInput,
  RearrangeInput,
} from "./inputs/interactive-inputs";
import {
  SpeakResponseInput,
  WriteResponseInput,
} from "./inputs/open-inputs";
import { SentenceBuildInput } from "./inputs/SentenceBuildInput";
import { SentenceAnatomy } from "@/components/app/grammar/SentenceAnatomy";

const DIFFICULTY_STYLE: Record<string, string> = {
  easy: "bg-primary/10 text-primary border-primary/30",
  medium: "bg-amber-500/10 text-amber-700 border-amber-500/30",
  hard: "bg-orange-500/10 text-orange-700 border-orange-500/30",
  challenge: "bg-destructive/10 text-destructive border-destructive/30",
};

const TYPE_LABEL: Record<string, string> = {
  mcq: "Multiple choice",
  "multi-select": "Multiple select",
  "fill-blank": "Fill in the blank",
  match: "Match the pairs",
  "drag-drop": "Drag and drop",
  rearrange: "Rearrange words",
  "sentence-build": "Sentence building",
  "complete-sentence": "Complete the sentence",
  "correct-mistake": "Correct the mistake",
  translate: "Translation",
  "short-answer": "Short answer",
  "listen-answer": "Listen and answer",
  dictation: "Dictation",
  "read-answer": "Read and answer",
  "write-response": "Writing",
  "speak-response": "Speaking",
};

export interface ExerciseRunnerProps {
  exercise: SafeExercise;
  lessonSlug: string;
  index?: number;
  total?: number;
  /** practice: full feedback loop. assessment: collect answers silently. */
  mode?: "practice" | "assessment";
  onAnswerChange?: (answer: unknown) => void;
  /** Called after each graded submission (used by ChallengeRunner). */
  onResult?: (result: AttemptResult) => void;
}

/**
 * Reusable exercise runner. One component drives all 15 exercise types:
 * hints are revealed progressively and counted, answers are graded on the
 * server, and the full feedback payload (correct answer, explanation,
 * why-wrong, grammar rule, similar example) is rendered below the exercise.
 */
export function ExerciseRunner({
  exercise,
  lessonSlug,
  index,
  total,
  mode = "practice",
  onAnswerChange,
  onResult,
}: ExerciseRunnerProps) {
  const user = useAppStore((s) => s.user);
  const [answer, setAnswer] = useState<unknown>(null);
  const [hintsUsed, setHintsUsed] = useState(0);
  const [result, setResult] = useState<AttemptResult | null>(null);
  const [checking, setChecking] = useState(false);
  const [attemptNumber, setAttemptNumber] = useState(0);
  const startedAt = useRef(Date.now());

  // Assessment mode: notify parent whenever the answer changes.
  useEffect(() => {
    if (mode === "assessment") onAnswerChange?.(answer);
  }, [answer]);

  // Reset when the exercise changes.
  useEffect(() => {
    setAnswer(null);
    setHintsUsed(0);
    setResult(null);
    setAttemptNumber(0);
    startedAt.current = Date.now();
  }, [exercise.id]);

  const locked = mode === "practice" && result !== null && result.correct;

  const handleAnswer = (next: unknown) => {
    if (locked) return;
    setAnswer(next);
  };

  const hasAnswer = (() => {
    if (answer === null || answer === undefined) return false;
    if (typeof answer === "object" && answer !== null) {
      if ("optionIds" in answer && Array.isArray((answer as { optionIds: unknown }).optionIds)) {
        return (answer as { optionIds: unknown[] }).optionIds.length > 0;
      }
      if ("pairs" in answer && Array.isArray((answer as { pairs: unknown }).pairs)) {
        return (answer as { pairs: unknown[] }).pairs.length > 0;
      }
      if ("placements" in answer && Array.isArray((answer as { placements: unknown }).placements)) {
        return (answer as { placements: unknown[] }).placements.length > 0;
      }
      if ("tokens" in answer && Array.isArray((answer as { tokens: unknown }).tokens)) {
        return (answer as { tokens: unknown[] }).tokens.length > 0;
      }
      if ("text" in answer) {
        return typeof (answer as { text?: unknown }).text === "string"
          && (answer as { text: string }).text.trim().length > 0;
      }
      if ("optionId" in answer) {
        return typeof (answer as { optionId?: unknown }).optionId === "string";
      }
    }
    return false;
  })();

  const check = async () => {
    if (!user) {
      toast.error("Please log in — your answers are saved to your account.");
      return;
    }
    if (!hasAnswer || checking) return;
    setChecking(true);
    const durationMs = Date.now() - startedAt.current;
    const response = await api.attempt({
      exerciseId: exercise.id,
      lessonSlug,
      answer,
      hintsUsed,
      durationMs,
    });
    setChecking(false);
    if (!response.ok) {
      toast.error(response.error);
      return;
    }
    setResult(response.data);
    setAttemptNumber((n) => n + 1);
    onResult?.(response.data);
  };

  const retry = () => {
    setResult(null);
    setAnswer(null);
    startedAt.current = Date.now();
  };

  const inputProps = {
    exercise,
    value: answer,
    onChange: handleAnswer,
    disabled: locked || checking,
    result,
  };

  return (
    <Card
      className={cn(
        "border-border/80",
        result && mode === "practice" && (result.correct
          ? "border-primary/40"
          : "border-destructive/40"),
      )}
      data-exercise-id={exercise.id}
    >
      <CardHeader className="flex flex-row flex-wrap items-center gap-2 pb-3">
        {index !== undefined ? (
          <span className="inline-flex size-7 items-center justify-center rounded-lg bg-primary text-sm font-bold text-primary-foreground">
            {index}
          </span>
        ) : null}
        <div className="min-w-0 flex-1">
          <p className="text-sm font-semibold leading-snug text-foreground">
            {exercise.prompt}
          </p>
          <div className="mt-1 flex flex-wrap items-center gap-1.5">
            <Badge variant="outline" className={cn("text-[11px]", DIFFICULTY_STYLE[exercise.difficulty])}>
              {exercise.difficulty}
            </Badge>
            <Badge variant="secondary" className="text-[11px] font-normal">
              {TYPE_LABEL[exercise.type] ?? exercise.type}
            </Badge>
            <span className="text-[11px] capitalize text-muted-foreground">
              {exercise.skill}
            </span>
            {total && total > 1 ? (
              <span className="text-[11px] text-muted-foreground">· {total} exercises</span>
            ) : null}
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col gap-3.5">
        {renderInput(exercise, inputProps)}

        {/* Hints */}
        {mode === "practice" && exercise.hints.length > 0 && !locked ? (
          <div className="flex flex-col gap-1.5">
            {hintsUsed > 0 ? (
              <ul className="flex flex-col gap-1">
                {exercise.hints.slice(0, hintsUsed).map((hint, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 rounded-lg bg-accent/50 px-3 py-1.5 text-sm text-accent-foreground"
                  >
                    <Lightbulb className="mt-0.5 size-3.5 shrink-0" aria-hidden />
                    {hint}
                  </li>
                ))}
              </ul>
            ) : null}
            {hintsUsed < exercise.hints.length ? (
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="h-7 gap-1.5 self-start text-muted-foreground"
                onClick={() => setHintsUsed((n) => n + 1)}
              >
                <Lightbulb className="size-3.5" aria-hidden />
                Show hint ({hintsUsed + 1}/{exercise.hints.length})
              </Button>
            ) : null}
          </div>
        ) : null}

        {/* Check / retry */}
        {mode === "practice" ? (
          <div className="flex flex-wrap items-center gap-2">
            {!result || !result.correct ? (
              <Button
                type="button"
                onClick={check}
                disabled={!hasAnswer || checking}
                className="gap-1.5"
              >
                <Send className="size-4" aria-hidden />
                {checking ? "Checking…" : result ? "Check again" : "Check answer"}
              </Button>
            ) : null}
            {result && !result.correct ? (
              <Button type="button" variant="outline" onClick={retry} className="gap-1.5">
                <RotateCcw className="size-4" aria-hidden />
                Try again
              </Button>
            ) : null}
            {result && result.correct ? (
              <span className="flex items-center gap-1.5 text-sm font-medium text-primary">
                <CheckCircle2 className="size-4" aria-hidden /> Correct · +{result.points} points
              </span>
            ) : null}
          </div>
        ) : null}

        {/* Feedback panel */}
        {mode === "practice" && result ? <FeedbackPanel result={result} attemptNumber={attemptNumber} /> : null}
      </CardContent>
    </Card>
  );
}

function renderInput(
  exercise: SafeExercise,
  props: {
    exercise: SafeExercise;
    value: unknown;
    onChange: (answer: unknown) => void;
    disabled: boolean;
    result: AttemptResult | null;
  },
) {
  switch (exercise.type) {
    case "mcq":
      return <McqInput {...props} exercise={exercise} />;
    case "multi-select":
      return <MultiSelectInput {...props} exercise={exercise} />;
    case "fill-blank":
      return <FillBlankInput {...props} exercise={exercise} />;
    case "match":
      return <MatchInput {...props} exercise={exercise} />;
    case "drag-drop":
      return <DragDropInput {...props} exercise={exercise} />;
    case "rearrange":
      return <RearrangeInput {...props} exercise={exercise} />;
    case "sentence-build":
      return <SentenceBuildInput {...props} exercise={exercise} />;
    case "complete-sentence":
      return <CompleteSentenceInput {...props} exercise={exercise} />;
    case "correct-mistake":
      return <CorrectMistakeInput {...props} exercise={exercise} />;
    case "translate":
      return <TranslateInput {...props} exercise={exercise} />;
    case "short-answer":
      return <ShortAnswerInput {...props} exercise={exercise} />;
    case "listen-answer":
      return <ListenAnswerInput {...props} exercise={exercise} />;
    case "dictation":
      return <DictationInput {...props} exercise={exercise} />;
    case "read-answer":
      return <ReadAnswerInput {...props} exercise={exercise} />;
    case "write-response":
      return <WriteResponseInput {...props} exercise={exercise} />;
    case "speak-response":
      return <SpeakResponseInput {...props} exercise={exercise} />;
    default:
      return null;
  }
}

function FeedbackPanel({
  result,
  attemptNumber,
}: {
  result: AttemptResult;
  attemptNumber: number;
}) {
  const { feedback, correct, invalid } = result;
  return (
    <div
      role="status"
      className={cn(
        "flex flex-col gap-3 rounded-xl border px-4 py-3.5",
        correct ? "border-primary/40 bg-primary/5" : "border-destructive/40 bg-destructive/5",
      )}
    >
      <div className="flex items-center gap-2">
        {correct ? (
          <CheckCircle2 className="size-5 text-primary" aria-hidden />
        ) : (
          <XCircle className="size-5 text-destructive" aria-hidden />
        )}
        <p className={cn("text-sm font-semibold", correct ? "text-primary" : "text-destructive")}>
          {invalid
            ? "We could not read that answer"
            : correct
              ? "Correct!"
              : "Not quite — check the correct answer below"}
        </p>
      </div>

      <div className="flex flex-col gap-2 text-sm">
        <p>
          <span className="font-semibold">Correct answer: </span>
          {feedback.correctAnswer}
        </p>
        <p>
          <span className="font-semibold">Why: </span>
          {feedback.explanation}
        </p>
        {feedback.whyWrong ? (
          <p className="text-muted-foreground">
            <span className="font-semibold text-foreground/70">Common mistake: </span>
            {feedback.whyWrong}
          </p>
        ) : null}
        {feedback.grammarRule ? (
          <div className="rounded-lg border border-primary/30 bg-primary/5 px-3 py-2">
            <p className="text-xs font-bold uppercase tracking-wide text-primary">
              Grammar rule · {feedback.grammarRule.title}
            </p>
            <p className="mt-0.5">{feedback.grammarRule.rule}</p>
          </div>
        ) : null}
        {feedback.similarExample ? (
          <p className="text-muted-foreground">
            <span className="font-semibold text-foreground/70">Similar example: </span>
            {feedback.similarExample.english} — {feedback.similarExample.translation}
          </p>
        ) : null}
      </div>

      {/* Sentence-build: inspect the structure of the canonical answer */}
      {result.structure ? (
        <div className="rounded-xl border border-border/70 bg-background p-3">
          <p className="mb-2 text-xs font-bold uppercase tracking-wide text-muted-foreground">
            🔬 Inspect the sentence structure
          </p>
          <SentenceAnatomy sentence={result.structure} compact showLegend />
        </div>
      ) : null}

      {!correct && attemptNumber >= 1 ? (
        <p className="text-xs text-muted-foreground">
          You can retry as many times as you like — every attempt is saved to your
          performance history.
        </p>
      ) : null}
    </div>
  );
}
