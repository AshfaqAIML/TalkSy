"use client";

/**
 * CourseCard — a CEFR level (TalkSy "course") in the curriculum and on the
 * dashboard. Shows identity (code chip), progress (ring + bar) and status.
 */

import { Hammer } from "lucide-react";
import { InteractiveCard } from "./cards";
import { ProgressBar } from "./progress";
import { LevelChip } from "./badges";
import { cn } from "@/lib/utils";

export function CourseCard({
  code,
  name,
  tagline,
  total,
  completed,
  status = "available",
  onClick,
  className,
}: {
  code: string;
  name: string;
  tagline: string;
  total: number;
  completed: number;
  status?: "available" | "development";
  onClick?: () => void;
  className?: string;
}) {
  const percent = Math.round((completed / Math.max(1, total)) * 100);
  const inDevelopment = status === "development";
  return (
    <InteractiveCard
      as={onClick && !inDevelopment ? "button" : "div"}
      onClick={inDevelopment ? undefined : onClick}
      className={cn("w-full p-5", inDevelopment && "border-dashed", className)}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex min-w-0 items-center gap-3.5">
          <LevelChip code={code} size="lg" className={inDevelopment ? "opacity-60" : undefined} />
          <div className="min-w-0">
            <h3 className={cn("font-semibold text-ink-900", inDevelopment && "text-ink-600")}>{name}</h3>
            <p className="truncate text-caption text-ink-500">{tagline}</p>
            <p className="mt-1 text-caption font-medium tabular-nums text-ink-500">
              {inDevelopment ? (
                <span className="inline-flex items-center gap-1">
                  <Hammer className="h-3 w-3" aria-hidden="true" /> In development
                </span>
              ) : (
                `${completed} of ${total} lessons · ${percent}%`
              )}
            </p>
          </div>
        </div>
      </div>
      {!inDevelopment && (
        <ProgressBar
          value={completed}
          max={total}
          size="sm"
          label={`${code} ${name} progress`}
          className="mt-4"
        />
      )}
    </InteractiveCard>
  );
}
