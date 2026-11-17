"use client";

import { GraduationCap } from "lucide-react";
import { cn } from "@/lib/utils";
import type { TutorMessageDto } from "@/data/tutor/types";

/**
 * Strip stray markdown emphasis the model might emit despite the format
 * rules (the prompt bans markdown, but models drift — the UI stays clean).
 */
export function cleanTutorText(text: string): string {
  return text
    .replace(/\*\*/g, "")
    .replace(/^#{1,4}\s+/gm, "")
    .replace(/`/g, "");
}

export function ChatBubble({
  message,
  modeLabel,
  streaming,
}: {
  message: TutorMessageDto;
  modeLabel: string;
  streaming: boolean;
}) {
  const isLearner = message.role === "learner";
  const empty = message.content.trim().length === 0;

  return (
    <div className={cn("flex w-full gap-2.5", isLearner ? "justify-end" : "justify-start")}>
      {!isLearner ? (
        <span
          className="mt-1 inline-flex size-7 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary"
          aria-hidden
        >
          <GraduationCap className="size-4" />
        </span>
      ) : null}
      <div
        className={cn(
          "max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed sm:max-w-[75%]",
          isLearner
            ? "rounded-br-md bg-primary text-primary-foreground"
            : "rounded-bl-md border bg-card text-card-foreground",
        )}
      >
        {!isLearner ? (
          <p className="mb-1 text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
            {modeLabel}
          </p>
        ) : null}
        <p className="whitespace-pre-wrap break-words">
          {empty && streaming ? (
            <span className="inline-flex gap-1 py-1" aria-label="Tutor is typing">
              <span className="size-1.5 animate-pulse rounded-full bg-muted-foreground/60" />
              <span className="size-1.5 animate-pulse rounded-full bg-muted-foreground/60 [animation-delay:150ms]" />
              <span className="size-1.5 animate-pulse rounded-full bg-muted-foreground/60 [animation-delay:300ms]" />
            </span>
          ) : (
            <>
              {cleanTutorText(message.content)}
              {streaming ? (
                <span className="ml-0.5 inline-block h-4 w-1.5 animate-pulse bg-foreground/50 align-middle" />
              ) : null}
            </>
          )}
        </p>
        {message.greeting ? (
          <p className="mt-1.5 text-[11px] italic text-muted-foreground">
            Opening message — your conversation starts here.
          </p>
        ) : null}
      </div>
    </div>
  );
}
