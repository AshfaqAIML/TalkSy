"use client";

import {
  BookOpen,
  Briefcase,
  Headphones,
  HelpCircle,
  Library,
  MessagesSquare,
  PenLine,
  PenTool,
  Sparkles,
  SpellCheck,
  type LucideIcon,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import type { SafeTutorMode } from "@/data/tutor/types";

export const MODE_ICONS: Record<string, LucideIcon> = {
  "spell-check": SpellCheck,
  library: Library,
  "pen-tool": PenTool,
  "messages-square": MessagesSquare,
  "pen-line": PenLine,
  headphones: Headphones,
  "book-open": BookOpen,
  briefcase: Briefcase,
  "help-circle": HelpCircle,
};

export function ModeIcon({
  icon,
  className,
}: {
  icon: string;
  className?: string;
}) {
  const Component = MODE_ICONS[icon] ?? Sparkles;
  return <Component className={className} aria-hidden />;
}

/**
 * The nine teaching modes, as cards. When a lesson reference is linked
 * (deep link from a lesson), the Doubt Solver is highlighted as the natural
 * mode for it — the learner can still pick any other.
 */
export function ModePicker({
  modes,
  lessonTitle,
  onPick,
  busy,
}: {
  modes: SafeTutorMode[];
  lessonTitle: string | null;
  onPick: (mode: SafeTutorMode) => void;
  busy: boolean;
}) {
  return (
    <div className="flex flex-col gap-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold sm:text-3xl">Choose your tutor</h2>
        <p className="mx-auto mt-2 max-w-xl text-sm text-muted-foreground">
          Nine teachers, one goal: your English. Each mode teaches differently —
          pick the one that fits what you need right now.
        </p>
      </div>

      {lessonTitle ? (
        <Card className="border-primary/40 bg-primary/5">
          <CardContent className="flex items-center gap-3 p-4">
            <ModeIcon icon="help-circle" className="size-5 shrink-0 text-primary" />
            <div>
              <p className="text-sm font-semibold">
                Asking about: {lessonTitle}
              </p>
              <p className="text-xs text-muted-foreground">
                The Doubt Solver will read this lesson to answer your questions
                about it.
              </p>
            </div>
          </CardContent>
        </Card>
      ) : null}

      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {modes.map((mode) => {
          const highlighted = lessonTitle !== null && mode.id === "doubt";
          return (
            <button
              key={mode.id}
              type="button"
              disabled={busy}
              onClick={() => onPick(mode)}
              className={
                "group flex flex-col items-start gap-2 rounded-2xl border bg-card p-4 text-left transition-all hover:border-primary/50 hover:shadow-md disabled:cursor-wait disabled:opacity-60 " +
                (highlighted ? "border-primary/60 ring-1 ring-primary/30" : "")
              }
            >
              <span className="inline-flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <ModeIcon icon={mode.icon} className="size-5" />
              </span>
              <span className="font-semibold leading-tight">{mode.label}</span>
              <span className="text-sm leading-snug text-muted-foreground">
                {mode.tagline}
              </span>
            </button>
          );
        })}
      </div>

      <p className="text-center text-xs text-muted-foreground">
        The tutor sees your level and learning record (you can turn that off in
        any conversation). AI replies are teaching suggestions, not verified
        facts — your tutor says so when it is unsure.
      </p>
    </div>
  );
}
