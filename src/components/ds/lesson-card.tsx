"use client";

/**
 * LessonCard — one lesson row inside a unit. Status is communicated by
 * icon + label + colour (never colour alone): done (check, grove),
 * current (play, brand), locked (lock, muted).
 */

import { Check, Lock, Play } from "lucide-react";
import { Clock, Languages } from "lucide-react";
import { cn } from "@/lib/utils";

export type LessonStatus = "done" | "current" | "locked";

const statusIcon: Record<LessonStatus, React.ReactNode> = {
  done: <Check className="h-4 w-4" aria-hidden="true" />,
  current: <Play className="h-4 w-4" aria-hidden="true" />,
  locked: <Lock className="h-3.5 w-3.5" aria-hidden="true" />,
};
const statusRoundel: Record<LessonStatus, string> = {
  done: "bg-grove-600 text-white",
  current: "border-2 border-dashed border-primary text-primary",
  locked: "bg-sand-200 text-ink-400",
};
const statusLabel: Record<LessonStatus, string> = {
  done: "completed",
  current: "up next",
  locked: "locked",
};

export function LessonCard({
  index,
  title,
  subtitle,
  minutes,
  vocabCount,
  status,
  bestScore,
  onClick,
  className,
}: {
  index: number;
  title: string;
  subtitle?: string;
  minutes?: number;
  vocabCount?: number;
  status: LessonStatus;
  bestScore?: number | null;
  onClick?: () => void;
  className?: string;
}) {
  const locked = status === "locked";
  const Comp = locked ? "div" : "button";
  return (
    <Comp
      type={locked ? undefined : "button"}
      onClick={locked ? undefined : onClick}
      disabled={locked ? undefined : false}
      aria-label={`Lesson ${index}: ${title} (${statusLabel[status]})`}
      className={cn(
        "flex w-full items-center gap-4 border-b border-line px-4 py-3.5 text-left transition-colors duration-base last:border-b-0 sm:px-5",
        locked ? "cursor-not-allowed opacity-60" : "hover:bg-sand-100/70 focus-visible:bg-sand-100 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-ring",
        className
      )}
    >
      <span aria-hidden="true" className={cn("flex h-10 w-10 shrink-0 items-center justify-center rounded-full", statusRoundel[status])}>
        {statusIcon[status]}
      </span>
      <span className="min-w-0 flex-1">
        <span className={cn("flex flex-wrap items-center gap-2 font-semibold text-ink-900", locked && "text-ink-500")}>
          <span className="truncate">
            {index}. {title}
          </span>
          {status === "done" && typeof bestScore === "number" && (
            <span className="rounded-full border border-line bg-sand-50 px-2 py-0.5 text-caption font-semibold tabular-nums text-ink-600">
              Best {bestScore}%
            </span>
          )}
        </span>
        {subtitle && <span className="block truncate text-body-sm text-ink-500">{subtitle}</span>}
      </span>
      {(typeof minutes === "number" || typeof vocabCount === "number") && (
        <span className="hidden shrink-0 items-center gap-4 text-caption tabular-nums text-ink-500 sm:flex">
          {typeof minutes === "number" && (
            <span className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" aria-hidden="true" /> {minutes} min
            </span>
          )}
          {typeof vocabCount === "number" && (
            <span className="flex items-center gap-1">
              <Languages className="h-3.5 w-3.5" aria-hidden="true" /> {vocabCount}
            </span>
          )}
        </span>
      )}
    </Comp>
  );
}
