import { Check, RotateCcw, Volume2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { PhaseBadge } from "@/components/ds";
import { lessonPreview } from "@/lib/marketing/preview-data";
import { cn } from "@/lib/utils";

/**
 * Practice-centre preview — the real quick-practice layout with a real
 * multiple-choice item from Lesson 1 (the greetings question), shown in
 * its answered-and-correct state with the real explanation.
 */
export function PracticePreview({ className }: { className?: string }) {
  const quiz = lessonPreview.quiz;
  if (!quiz) return null;
  const chosen = quiz.answerIndex;

  return (
    <div className={cn("p-4 sm:p-6", className)}>
      <div className="mb-5 flex items-center justify-between gap-3">
        <div>
          <p className="overline-label mb-1 text-brand-700 dark:text-brand-600">Quick practice</p>
          <h3 className="font-display text-heading-md text-ink-900">Weakest words first</h3>
        </div>
        <span className="text-caption tabular-nums text-ink-500">4 / 10</span>
      </div>
      <Progress value={40} aria-label="Practice progress" />

      <div className="mt-5 rounded-xl border-2 border-line bg-card p-5 shadow-sm sm:p-6">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
          <PhaseBadge phase="guided" />
          <button
            className="flex items-center gap-1.5 rounded-full border border-line bg-sand-50 px-3 py-1 text-caption font-medium text-ink-600"
            aria-label="Listen to the question"
          >
            <Volume2 className="h-3.5 w-3.5" aria-hidden="true" /> Listen
          </button>
        </div>

        <p className="mb-5 text-lg font-bold leading-snug text-ink-900">{quiz.prompt}</p>

        <div className="space-y-2.5">
          {quiz.options.map((option, i) => {
            const isChosen = i === chosen;
            const isAnswer = i === quiz.answerIndex;
            return (
              <div
                key={option}
                className={cn(
                  "flex items-center justify-between gap-3 rounded-lg border-2 px-4 py-3 text-body font-medium",
                  isAnswer
                    ? "border-grove-600 bg-grove-50 text-grove-900 dark:bg-grove-600/10 dark:text-grove-700"
                    : "border-line bg-card text-ink-700"
                )}
              >
                <span>{option}</span>
                {isAnswer && (
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-grove-600 text-white">
                    <Check className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                )}
                {!isAnswer && isChosen === false && (
                  <span
                    aria-hidden="true"
                    className="h-5 w-5 rounded-full border-2 border-line-strong"
                  />
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-5 rounded-lg bg-sand-100 p-3.5 dark:bg-sand-200/40">
          <p className="text-caption leading-relaxed text-ink-600">
            <span className="font-bold">Why:</span> {quiz.explanation}
          </p>
        </div>

        <div className="mt-5 flex items-center justify-between">
          <Button variant="ghost" className="gap-1.5" aria-hidden="true" tabIndex={-1}>
            <RotateCcw className="h-4 w-4" /> Retry (free)
          </Button>
          <Button aria-hidden="true" tabIndex={-1}>
            Next word
          </Button>
        </div>
      </div>

      <p className="mt-4 text-center text-caption text-ink-500">
        Practice sorts your words by strength — weakest and least-recently-reviewed first.
      </p>
    </div>
  );
}
