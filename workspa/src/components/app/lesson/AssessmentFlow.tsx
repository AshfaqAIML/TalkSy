"use client";

import { useState } from "react";
import {
  Award,
  ChevronLeft,
  ChevronRight,
  RotateCcw,
  Trophy,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  api,
  type AssessmentSubmitResult,
  type StartAssessmentResult,
} from "@/lib/client/api";
import type { SafeExercise } from "@/data/curriculum/types";
import { toast } from "sonner";
import { ExerciseRunner } from "./exercises/ExerciseRunner";

type Phase = "intro" | "running" | "submitting" | "result";

export function AssessmentFlow({
  lessonSlug,
  onFinished,
  onBackToLesson,
}: {
  lessonSlug: string;
  /** Called after a submitted assessment (lesson completion may change). */
  onFinished: () => void;
  onBackToLesson: () => void;
}) {
  const [phase, setPhase] = useState<Phase>("intro");
  const [run, setRun] = useState<StartAssessmentResult | null>(null);
  const [answers, setAnswers] = useState<Record<string, unknown>>({});
  const [questionIndex, setQuestionIndex] = useState(0);
  const [result, setResult] = useState<AssessmentSubmitResult | null>(null);
  const [loading, setLoading] = useState(false);

  const start = async () => {
    setLoading(true);
    const response = await api.startAssessment(lessonSlug);
    setLoading(false);
    if (!response.ok) {
      toast.error(response.error);
      return;
    }
    setRun(response.data);
    setAnswers({});
    setQuestionIndex(0);
    setResult(null);
    setPhase("running");
  };

  const submit = async () => {
    if (!run) return;
    setPhase("submitting");
    const response = await api.submitAssessment(
      run.assessmentId,
      run.questions.map((q) => ({ exerciseId: q.id, answer: answers[q.id] ?? null })),
    );
    if (!response.ok) {
      toast.error(response.error);
      setPhase("running");
      return;
    }
    setResult(response.data);
    setPhase("result");
    onFinished();
  };

  if (phase === "intro") {
    return (
      <Card className="border-primary/30 bg-primary/5">
        <CardContent className="flex flex-col items-center gap-4 p-6 text-center sm:p-10">
          <span className="inline-flex size-14 items-center justify-center rounded-2xl bg-primary/15">
            <Trophy className="size-7 text-primary" aria-hidden />
          </span>
          <div>
            <h3 className="text-xl font-semibold">Final assessment</h3>
            <p className="mx-auto mt-1 max-w-md text-sm text-muted-foreground">
              A short test drawn from this lesson&apos;s approved question bank.
              You need 70% to pass and complete the lesson. Hints are off —
              this one counts!
            </p>
          </div>
          <Button size="lg" onClick={start} disabled={loading} className="gap-2">
            <Award className="size-4" aria-hidden />
            {loading ? "Preparing questions…" : "Start assessment"}
          </Button>
        </CardContent>
      </Card>
    );
  }

  if (phase === "running" && run) {
    const questions: SafeExercise[] = run.questions;
    const question = questions[questionIndex];
    const answeredCount = questions.filter((q) => answers[q.id] != null).length;
    const isLast = questionIndex === questions.length - 1;
    const allAnswered = answeredCount === questions.length;

    return (
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between text-sm">
            <span className="font-medium">
              Question {questionIndex + 1} of {questions.length}
            </span>
            <span className="text-muted-foreground">
              {answeredCount}/{questions.length} answered
            </span>
          </div>
          <Progress value={((questionIndex + 1) / questions.length) * 100} aria-label="Assessment progress" />
        </div>

        <ExerciseRunner
          key={question.id}
          exercise={question}
          lessonSlug={lessonSlug}
          mode="assessment"
          onAnswerChange={(answer) =>
            setAnswers((prev) => ({ ...prev, [question.id]: answer }))
          }
        />

        <div className="flex items-center justify-between gap-2">
          <Button
            type="button"
            variant="outline"
            onClick={() => setQuestionIndex((i) => Math.max(0, i - 1))}
            disabled={questionIndex === 0}
            className="gap-1.5"
          >
            <ChevronLeft className="size-4" aria-hidden /> Previous
          </Button>
          {isLast ? (
            <Button
              type="button"
              onClick={submit}
              disabled={loading}
              className="gap-1.5"
            >
              Submit assessment
            </Button>
          ) : (
            <Button
              type="button"
              onClick={() => setQuestionIndex((i) => i + 1)}
              className="gap-1.5"
            >
              Next <ChevronRight className="size-4" aria-hidden />
            </Button>
          )}
        </div>
        {isLast && !allAnswered ? (
          <p className="text-center text-xs text-muted-foreground">
            {questions.length - answeredCount} question
            {questions.length - answeredCount === 1 ? "" : "s"} still unanswered.
            Unanswered questions count as incorrect.
          </p>
        ) : null}
      </div>
    );
  }

  if (phase === "submitting") {
    return (
      <Card>
        <CardContent className="flex flex-col items-center gap-3 p-10 text-center">
          <div className="size-10 animate-spin rounded-full border-4 border-primary/20 border-t-primary" role="status" aria-label="Grading" />
          <p className="text-sm text-muted-foreground">Grading your assessment…</p>
        </CardContent>
      </Card>
    );
  }

  if (phase === "result" && result) {
    const { summary, review } = result;
    return (
      <div className="flex flex-col gap-5">
        <Card
          className={cn(
            "border-2",
            summary.passed ? "border-primary/50 bg-primary/5" : "border-destructive/40 bg-destructive/5",
          )}
        >
          <CardContent className="flex flex-col items-center gap-4 p-6 text-center sm:p-8">
            <span className="text-5xl font-bold text-foreground">
              {summary.scorePercent}%
            </span>
            <div>
              <p
                className={cn(
                  "text-lg font-semibold",
                  summary.passed ? "text-primary" : "text-destructive",
                )}
              >
                {summary.passed ? "🎉 You passed!" : "Not passed — yet"}
              </p>
              <p className="text-sm text-muted-foreground">
                {summary.correct} of {summary.total} correct · pass mark{" "}
                {summary.passMarkPercent}%
              </p>
            </div>
            <p className="max-w-lg text-sm leading-relaxed">{summary.recommendation}</p>
          </CardContent>
        </Card>

        <div className="grid gap-4 sm:grid-cols-2">
          <Card>
            <CardContent className="p-4 sm:p-5">
              <p className="text-sm font-semibold">By difficulty</p>
              <div className="mt-2 flex flex-col gap-2">
                {summary.byDifficulty.map((row) => (
                  <div key={row.difficulty} className="flex items-center gap-2 text-sm">
                    <span className="w-20 capitalize text-muted-foreground">{row.difficulty}</span>
                    <Progress value={(row.correct / row.attempts) * 100} className="h-2 flex-1" />
                    <span className="w-12 text-right text-xs text-muted-foreground">
                      {row.correct}/{row.attempts}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 sm:p-5">
              <p className="text-sm font-semibold">By skill</p>
              <div className="mt-2 flex flex-col gap-2">
                {summary.bySkill.map((row) => (
                  <div key={row.skill} className="flex items-center gap-2 text-sm">
                    <span className="w-20 capitalize text-muted-foreground">{row.skill}</span>
                    <Progress value={(row.correct / row.attempts) * 100} className="h-2 flex-1" />
                    <span className="w-12 text-right text-xs text-muted-foreground">
                      {row.correct}/{row.attempts}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardContent className="p-4 sm:p-5">
            <p className="text-sm font-semibold">Question review</p>
            <ol className="mt-3 flex flex-col divide-y divide-border">
              {review.map((item, i) => (
                <li key={item.exerciseId} className="flex flex-col gap-1.5 py-3">
                  <div className="flex items-start gap-2">
                    <span
                      className={cn(
                        "mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full text-[11px] font-bold text-white",
                        item.correct ? "bg-primary" : "bg-destructive",
                      )}
                      aria-hidden
                    >
                      {item.correct ? "✓" : "✗"}
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-medium">
                        {i + 1}. {item.prompt}
                      </p>
                      <p className="mt-0.5 text-xs text-muted-foreground">
                        Your answer:{" "}
                        {item.submitted == null
                          ? "—"
                          : typeof item.submitted === "object"
                            ? JSON.stringify(item.submitted)
                            : String(item.submitted)}
                      </p>
                      <p className="text-xs text-primary">
                        Correct: {item.feedback.correctAnswer}
                      </p>
                      <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                        {item.feedback.explanation}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </CardContent>
        </Card>

        <div className="flex flex-wrap items-center justify-center gap-2">
          <Button variant="outline" onClick={start} className="gap-1.5">
            <RotateCcw className="size-4" aria-hidden /> Retake assessment
          </Button>
          <Button onClick={onBackToLesson}>Back to lesson</Button>
        </div>
      </div>
    );
  }

  return null;
}
