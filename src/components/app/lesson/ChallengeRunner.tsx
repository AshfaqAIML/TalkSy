"use client";

import { useEffect, useMemo, useState } from "react";
import { ArrowRight, CheckCircle2, RotateCcw, Timer, XCircle, Zap } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import type { ChallengeBlock, SafeExercise } from "@/data/curriculum/types";
import { ExerciseRunner } from "./exercises/ExerciseRunner";
import type { AttemptResult } from "@/lib/client/api";

type Phase = "intro" | "running" | "done";

interface RoundResult {
  exerciseId: string;
  correct: boolean;
}

/**
 * Challenge mode: timed or untimed rounds of exercises. Accuracy and
 * comprehension are the score — the timer only adds focus, never punishment.
 */
export function ChallengeRunner({
  block,
  lessonSlug,
  exercisesById,
}: {
  block: ChallengeBlock;
  lessonSlug: string;
  exercisesById: Record<string, SafeExercise>;
}) {
  const exercises = useMemo(
    () =>
      block.exerciseIds
        .map((id) => exercisesById[id])
        .filter((ex): ex is SafeExercise => Boolean(ex)),
    [block.exerciseIds, exercisesById],
  );

  const [phase, setPhase] = useState<Phase>("intro");
  const [index, setIndex] = useState(0);
  const [results, setResults] = useState<RoundResult[]>([]);
  const [currentResult, setCurrentResult] = useState<AttemptResult | null>(null);
  const [timeLeft, setTimeLeft] = useState(block.seconds ?? 0);
  const [roundStart, setRoundStart] = useState(0);

  // Countdown for timed rounds.
  useEffect(() => {
    if (phase !== "running" || !block.timed) return;
    const timer = window.setInterval(() => {
      setTimeLeft((left) => {
        if (left <= 1) {
          window.clearInterval(timer);
          setPhase("done");
          return 0;
        }
        return left - 1;
      });
    }, 1000);
    return () => window.clearInterval(timer);
  }, [phase, block.timed]);

  const start = () => {
    setPhase("running");
    setIndex(0);
    setResults([]);
    setCurrentResult(null);
    setTimeLeft(block.seconds ?? 0);
    setRoundStart(Date.now());
  };

  const onResult = (result: AttemptResult) => {
    setCurrentResult(result);
    setResults((prev) => [
      ...prev.filter((r) => r.exerciseId !== result.exerciseId),
      { exerciseId: result.exerciseId, correct: result.correct },
    ]);
  };

  const next = () => {
    if (index + 1 >= exercises.length) {
      setPhase("done");
      return;
    }
    setIndex((i) => i + 1);
    setCurrentResult(null);
  };

  const answered = results.length;
  const correct = results.filter((r) => r.correct).length;
  const accuracy = answered > 0 ? Math.round((correct / answered) * 100) : 0;
  const secondsUsed = Math.round((Date.now() - roundStart) / 1000);

  // ---- Intro -------------------------------------------------------------
  if (phase === "intro" || exercises.length === 0) {
    return (
      <Card className="border-primary/30 bg-primary/5">
        <CardContent className="flex flex-col items-center gap-4 p-6 text-center sm:p-8">
          <span className="inline-flex size-14 items-center justify-center rounded-2xl bg-primary/15">
            {block.timed ? (
              <Timer className="size-7 text-primary" aria-hidden />
            ) : (
              <Zap className="size-7 text-primary" aria-hidden />
            )}
          </span>
          <div>
            <h3 className="text-lg font-semibold">
              {block.title ?? "Challenge round"}
            </h3>
            <p className="mx-auto mt-1 max-w-md text-sm text-muted-foreground">
              {block.description ??
                "A focused round of exercises — accuracy is what counts."}
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-2 text-xs">
            <span className="rounded-full bg-background px-3 py-1 font-medium">
              {exercises.length} questions
            </span>
            <span className="rounded-full bg-background px-3 py-1 font-medium">
              {block.timed ? `⏱ ${block.seconds}s limit` : "🧘 Untimed"}
            </span>
            <span className="rounded-full bg-background px-3 py-1 font-medium">
              🎯 Accuracy decides your score
            </span>
          </div>
          {block.timed ? (
            <p className="max-w-md text-xs text-muted-foreground">
              The timer is motivation, not punishment — read each question
              carefully before answering. Accuracy and comprehension first!
            </p>
          ) : null}
          <Button size="lg" onClick={start} disabled={exercises.length === 0} className="gap-2">
            {block.timed ? <Timer className="size-4" aria-hidden /> : <Zap className="size-4" aria-hidden />}
            Start challenge
          </Button>
        </CardContent>
      </Card>
    );
  }

  // ---- Done ---------------------------------------------------------------
  if (phase === "done") {
    return (
      <Card className={cn("border-2", accuracy >= 70 ? "border-primary/50 bg-primary/5" : "border-amber-400/60 bg-amber-50/50")}>
        <CardContent className="flex flex-col items-center gap-4 p-6 text-center sm:p-8">
          <span className="text-5xl font-bold">{accuracy}%</span>
          <div>
            <p className={cn("text-lg font-semibold", accuracy >= 70 ? "text-primary" : "text-amber-700")}>
              {accuracy === 100
                ? "Flawless round! 🏆"
                : accuracy >= 70
                  ? "Strong round! 🎉"
                  : "Good effort — review and try again"}
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              {correct} of {answered} correct
              {answered < exercises.length
                ? ` · ${exercises.length - answered} not reached`
                : ""}
              {" · "}
              {secondsUsed}s used
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {results.map((result, i) => (
              <span
                key={i}
                title={result.exerciseId}
                className={cn(
                  "inline-flex size-8 items-center justify-center rounded-full text-sm font-bold text-white",
                  result.correct ? "bg-primary" : "bg-destructive",
                )}
              >
                {result.correct ? "✓" : "✗"}
              </span>
            ))}
          </div>
          <p className="max-w-md text-xs text-muted-foreground">
            Every answer was saved to your performance history — accuracy
            beats speed in TalkSy challenges.
          </p>
          <Button variant="outline" onClick={start} className="gap-2">
            <RotateCcw className="size-4" aria-hidden /> Run it again
          </Button>
        </CardContent>
      </Card>
    );
  }

  // ---- Running -------------------------------------------------------------
  const exercise = exercises[index];
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between text-sm">
          <span className="font-medium">
            Question {index + 1} of {exercises.length}
          </span>
          {block.timed ? (
            <span
              className={cn(
                "inline-flex items-center gap-1.5 rounded-full px-3 py-1 font-mono text-sm font-bold",
                timeLeft <= 15
                  ? "animate-pulse bg-destructive/10 text-destructive"
                  : "bg-secondary text-secondary-foreground",
              )}
              role="timer"
              aria-label={`${timeLeft} seconds remaining`}
            >
              <Timer className="size-3.5" aria-hidden /> {timeLeft}s
            </span>
          ) : null}
        </div>
        <Progress
          value={((index + 1) / exercises.length) * 100}
          aria-label="Challenge progress"
        />
      </div>

      <ExerciseRunner
        key={exercise.id}
        exercise={exercise}
        lessonSlug={lessonSlug}
        index={index + 1}
        total={exercises.length}
        onResult={onResult}
      />

      {currentResult ? (
        <Button onClick={next} className="gap-2 self-end">
          {index + 1 >= exercises.length ? (
            "Finish challenge"
          ) : (
            <>
              Next question <ArrowRight className="size-4" aria-hidden />
            </>
          )}
        </Button>
      ) : null}
    </div>
  );
}
