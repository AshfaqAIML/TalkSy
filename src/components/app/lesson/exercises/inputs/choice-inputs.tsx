"use client";

import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import type { SafeExercise, SafeOf } from "@/data/curriculum/types";
import type { AttemptResult } from "@/lib/client/api";

export interface InputProps<T extends SafeExercise> {
  exercise: T;
  value: unknown;
  onChange: (answer: unknown) => void;
  disabled: boolean;
  result: AttemptResult | null;
}

/** Shared option-button styling. */
function optionClasses(selected: boolean): string {
  return cn(
    "flex w-full items-center gap-3 rounded-xl border px-4 py-3 text-left text-sm transition-all",
    "min-h-[44px] hover:border-primary/50",
    selected
      ? "border-primary bg-primary/10 font-medium"
      : "border-border bg-background",
  );
}

// ---------------------------------------------------------------------------
// 1. MCQ
// ---------------------------------------------------------------------------

export function McqInput({
  exercise,
  value,
  onChange,
  disabled,
  result,
}: InputProps<SafeOf<"mcq">>) {
  const selectedId =
    value && typeof value === "object" && "optionId" in value
      ? String((value as { optionId: unknown }).optionId)
      : null;

  return (
    <div className="flex flex-col gap-2" role="radiogroup" aria-label="Options">
      {exercise.options.map((option) => {
        const selected = selectedId === option.id;
        return (
          <button
            key={option.id}
            type="button"
            role="radio"
            aria-checked={selected}
            disabled={disabled}
            className={optionClasses(selected)}
            onClick={() => onChange({ optionId: option.id })}
          >
            <span
              className={cn(
                "flex size-5 shrink-0 items-center justify-center rounded-full border-2",
                selected ? "border-primary bg-primary" : "border-muted-foreground/40",
              )}
              aria-hidden
            >
              {selected ? <Check className="size-3 text-primary-foreground" /> : null}
            </span>
            <span className="flex-1">
              {option.text}
              {option.translation ? (
                <span className="block text-xs text-muted-foreground">
                  {option.translation}
                </span>
              ) : null}
            </span>
            {result && !result.invalid && selected ? (
              <span
                className={cn(
                  "text-xs font-semibold",
                  result.correct ? "text-primary" : "text-destructive",
                )}
              >
                {result.correct ? "✓" : "✗"}
              </span>
            ) : null}
          </button>
        );
      })}
    </div>
  );
}

// ---------------------------------------------------------------------------
// 13. Read and answer — passage card + MCQ
// ---------------------------------------------------------------------------

export function ReadAnswerInput(props: InputProps<SafeOf<"read-answer">>) {
  const { exercise } = props;
  return (
    <div className="flex flex-col gap-3">
      <div className="rounded-xl border border-border bg-secondary/30 p-4">
        <p className="mb-1.5 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
          📄 {exercise.passageTitle ?? "Reading"}
        </p>
        <p className="whitespace-pre-line text-sm leading-relaxed">
          {exercise.passage}
        </p>
      </div>
      <p className="text-sm font-medium">{exercise.question}</p>
      <McqInput
        {...props}
        exercise={exercise as unknown as SafeOf<"mcq">}
      />
    </div>
  );
}

// ---------------------------------------------------------------------------
// 2. Multiple select
// ---------------------------------------------------------------------------

export function MultiSelectInput({
  exercise,
  value,
  onChange,
  disabled,
  result,
}: InputProps<SafeOf<"multi-select">>) {
  const selectedIds =
    value &&
    typeof value === "object" &&
    "optionIds" in value &&
    Array.isArray((value as { optionIds: unknown }).optionIds)
      ? (value as { optionIds: unknown[] }).optionIds.filter(
          (id): id is string => typeof id === "string",
        )
      : [];

  const toggle = (id: string) => {
    const next = selectedIds.includes(id)
      ? selectedIds.filter((s) => s !== id)
      : [...selectedIds, id];
    onChange({ optionIds: next });
  };

  return (
    <div className="flex flex-col gap-2">
      <p className="text-xs text-muted-foreground">
        Select all correct answers — more than one can be right.
      </p>
      <div className="flex flex-col gap-2" role="group" aria-label="Options">
        {exercise.options.map((option) => {
          const selected = selectedIds.includes(option.id);
          return (
            <button
              key={option.id}
              type="button"
              role="checkbox"
              aria-checked={selected}
              disabled={disabled}
              className={optionClasses(selected)}
              onClick={() => toggle(option.id)}
            >
              <span
                className={cn(
                  "flex size-5 shrink-0 items-center justify-center rounded-md border-2",
                  selected ? "border-primary bg-primary" : "border-muted-foreground/40",
                )}
                aria-hidden
              >
                {selected ? <Check className="size-3 text-primary-foreground" /> : null}
              </span>
              <span className="flex-1">{option.text}</span>
              {result && !result.invalid && selected ? (
                <span
                  className={cn(
                    "text-xs font-semibold",
                    result.correct ? "text-primary" : "text-destructive",
                  )}
                >
                  {result.correct ? "✓" : "✗"}
                </span>
              ) : null}
            </button>
          );
        })}
      </div>
    </div>
  );
}
