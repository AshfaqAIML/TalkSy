"use client";

import { Fragment, type ReactNode } from "react";
import {
  Activity,
  BookMarked,
  Briefcase,
  CircleCheck,
  GraduationCap,
  Heart,
  Home,
  MessageCircle,
  Monitor,
  Plane,
  ShoppingCart,
  Sparkles,
  Sun,
  Utensils,
  Users,
  Volume2,
  VolumeX,
  type LucideIcon,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useSpeech } from "@/hooks/use-speech";
import { useAppStore } from "@/lib/client/store";
import type { AppRoute } from "@/hooks/use-hash-route";
import type { VocabCategoryIcon, VocabEntry } from "@/data/vocabulary/types";
import type { Difficulty } from "@/data/curriculum/types";
import type { WordProgressDto } from "@/lib/vocab/dto";
import { inflectedForms } from "@/lib/vocab/sentences";
import { describeDue } from "@/lib/vocab/srs";

// ---------------------------------------------------------------------------
// Category icons (data files store icon keys, not components)
// ---------------------------------------------------------------------------

const CATEGORY_ICONS: Record<VocabCategoryIcon, LucideIcon> = {
  sun: Sun,
  home: Home,
  "graduation-cap": GraduationCap,
  plane: Plane,
  utensils: Utensils,
  users: Users,
  heart: Heart,
  briefcase: Briefcase,
  monitor: Monitor,
  "shopping-cart": ShoppingCart,
  activity: Activity,
  "message-circle": MessageCircle,
};

export function CategoryIcon({
  icon,
  className,
}: {
  icon: string;
  className?: string;
}) {
  const Icon = CATEGORY_ICONS[icon as VocabCategoryIcon] ?? Sparkles;
  return <Icon className={className} aria-hidden />;
}

// ---------------------------------------------------------------------------
// Audio (TTS via the browser's speech synthesis — zero external services)
// ---------------------------------------------------------------------------

export function SpeakButton({
  text,
  rate,
  label,
  className,
}: {
  text: string;
  rate?: number;
  label?: string;
  className?: string;
}) {
  const { playing, play, stop } = useSpeech();
  const globalRate = useAppStore((s) => s.speechRate);
  const active = playing;

  return (
    <Button
      type="button"
      variant="outline"
      size="icon"
      aria-label={label ?? `Listen: ${text}`}
      className={cn("size-9 shrink-0 rounded-full", active && "border-primary", className)}
      onClick={() => (active ? stop() : play(text, rate ?? globalRate))}
    >
      {active ? <VolumeX className="size-4" aria-hidden /> : <Volume2 className="size-4" aria-hidden />}
    </Button>
  );
}

// ---------------------------------------------------------------------------
// Badges
// ---------------------------------------------------------------------------

const DIFFICULTY_STYLES: Record<Difficulty, string> = {
  easy: "bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300",
  medium: "bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300",
  hard: "bg-orange-100 text-orange-800 dark:bg-orange-950 dark:text-orange-300",
  challenge: "bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300",
};

export function DifficultyBadge({ difficulty }: { difficulty: Difficulty }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2 py-0.5 text-[11px] font-semibold capitalize",
        DIFFICULTY_STYLES[difficulty],
      )}
    >
      {difficulty}
    </span>
  );
}

export function StatusBadge({ status }: { status: string }) {
  const styles: Record<string, string> = {
    new: "bg-secondary text-secondary-foreground",
    learning: "bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300",
    reviewing: "bg-teal-100 text-teal-800 dark:bg-teal-950 dark:text-teal-300",
    mastered: "bg-primary/15 text-primary",
  };
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[11px] font-semibold capitalize",
        styles[status] ?? styles.new,
      )}
    >
      {status === "mastered" ? <CircleCheck className="size-3" aria-hidden /> : null}
      {status}
    </span>
  );
}

export function ProgressInfo({ progress }: { progress: WordProgressDto | null }) {
  if (!progress) {
    return <span className="text-[11px] font-medium text-muted-foreground">New word</span>;
  }
  return (
    <span className="inline-flex flex-wrap items-center gap-1.5">
      <StatusBadge status={progress.status} />
      {progress.isDifficult ? (
        <Badge variant="destructive" className="px-1.5 py-0 text-[10px]">difficult</Badge>
      ) : null}
      <span className="text-[11px] text-muted-foreground">
        {describeDue(progress.dueAt ? new Date(progress.dueAt) : null)}
      </span>
    </span>
  );
}

// ---------------------------------------------------------------------------
// Word card (compact, used in lists & search results)
// ---------------------------------------------------------------------------

export function WordCard({
  word,
  bookmarked,
  progress,
  onOpen,
  onBookmark,
  showTranslation,
}: {
  word: VocabEntry;
  bookmarked?: boolean;
  progress?: WordProgressDto | null;
  onOpen?: () => void;
  onBookmark?: () => void;
  showTranslation?: boolean;
}) {
  const translationsOn = useAppStore((s) => s.showTranslations);
  const showEs = showTranslation ?? translationsOn;

  return (
    <div
      role={onOpen ? "button" : undefined}
      tabIndex={onOpen ? 0 : undefined}
      onClick={onOpen}
      onKeyDown={(e) => {
        if (onOpen && (e.key === "Enter" || e.key === " ")) {
          e.preventDefault();
          onOpen();
        }
      }}
      className={cn(
        "group rounded-2xl border bg-card p-4 transition-all",
        onOpen && "cursor-pointer hover:border-primary/50 hover:shadow-md",
      )}
    >
      <div className="flex items-start justify-between gap-2">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <h3 className="text-base font-bold leading-tight">{word.word}</h3>
            <span className="font-mono text-xs text-muted-foreground">{word.pronunciation}</span>
            <DifficultyBadge difficulty={word.difficulty} />
          </div>
          <p className="mt-0.5 text-xs italic text-muted-foreground">{word.partOfSpeech}</p>
        </div>
        <div className="flex shrink-0 items-center gap-1">
          {onBookmark ? (
            <Button
              type="button"
              variant="ghost"
              size="icon"
              aria-label={bookmarked ? "Remove bookmark" : "Bookmark this word"}
              className="size-8"
              onClick={(e) => {
                e.stopPropagation();
                onBookmark();
              }}
            >
              <BookMarked
                className={cn("size-4", bookmarked ? "text-primary" : "text-muted-foreground")}
                aria-hidden
              />
            </Button>
          ) : null}
          <SpeakButton
            text={word.word}
            label={`Listen to the word ${word.word}`}
            className="size-8"
          />
        </div>
      </div>
      <p className="mt-2 line-clamp-2 text-sm text-foreground/90">{word.meaning}</p>
      {showEs ? (
        <p className="mt-0.5 line-clamp-1 text-sm text-muted-foreground">{word.translation}</p>
      ) : null}
      {progress !== undefined ? (
        <div className="mt-2.5">
          <ProgressInfo progress={progress ?? null} />
        </div>
      ) : null}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Target-word highlighting for context passages
// ---------------------------------------------------------------------------

/** Split text into segments, marking inflected occurrences of the target words. */
export function highlightTargets(
  text: string,
  words: VocabEntry[],
): { text: string; word?: VocabEntry }[] {
  const segments: { text: string; word?: VocabEntry }[] = [];
  const patterns = words.map((word) => ({ word, forms: inflectedForms(word.word) }));
  let buffer = "";
  let i = 0;
  const lower = text.toLowerCase();

  const flush = () => {
    if (buffer) {
      segments.push({ text: buffer });
      buffer = "";
    }
  };

  outer: while (i < text.length) {
    for (const { word, forms } of patterns) {
      for (const form of forms) {
        const candidate = lower.slice(i, i + form.length);
        if (candidate === form) {
          const before = i === 0 ? "" : lower[i - 1];
          const after = lower[i + form.length] ?? "";
          const boundary = (c: string) => !c || !/[\p{L}]/u.test(c);
          if (boundary(before) && boundary(after)) {
            flush();
            segments.push({ text: text.slice(i, i + form.length), word });
            i += form.length;
            continue outer;
          }
        }
      }
    }
    buffer += text[i];
    i += 1;
  }
  flush();
  return segments;
}

export function HighlightedText({
  text,
  words,
  className,
}: {
  text: string;
  words: VocabEntry[];
  className?: string;
}) {
  const showTranslation = useAppStore((s) => s.showTranslations);
  void showTranslation;
  const segments = highlightTargets(text, words);
  return (
    <span className={className}>
      {segments.map((segment, i) =>
        segment.word ? (
          <mark
            key={i}
            title={`${segment.word.word} — ${segment.word.meaning}`}
            className="rounded bg-primary/15 px-0.5 font-semibold text-primary"
          >
            {segment.text}
          </mark>
        ) : (
          <Fragment key={i}>{segment.text}</Fragment>
        ),
      )}
    </span>
  );
}

// ---------------------------------------------------------------------------
// Misc
// ---------------------------------------------------------------------------

export function LoginPrompt({
  message,
  navigate,
}: {
  message: string;
  navigate: (route: AppRoute) => void;
}) {
  return (
    <div className="mx-auto max-w-md rounded-2xl border bg-card p-8 text-center">
      <Sparkles className="mx-auto size-10 text-primary" aria-hidden />
      <h2 className="mt-3 text-lg font-semibold">Log in to keep your words</h2>
      <p className="mt-1 text-sm text-muted-foreground">{message}</p>
      <div className="mt-5 flex flex-col justify-center gap-2 sm:flex-row">
        <Button onClick={() => navigate({ name: "login" })}>Log in</Button>
        <Button variant="outline" onClick={() => navigate({ name: "register" })}>
          Create a free account
        </Button>
      </div>
    </div>
  );
}

export function SectionHeading({
  icon,
  title,
  description,
  children,
}: {
  icon?: ReactNode;
  title: string;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-3">
      <div>
        <h2 className="flex items-center gap-2 text-xl font-bold tracking-tight">
          {icon}
          {title}
        </h2>
        {description ? (
          <p className="mt-1 text-sm text-muted-foreground">{description}</p>
        ) : null}
      </div>
      {children}
    </div>
  );
}

export function ErrorText({ children }: { children: ReactNode }) {
  if (!children) return null;
  return <p className="text-sm font-medium text-destructive">{children}</p>;
}
