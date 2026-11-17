"use client";

/**
 * TALKSY CARD LIBRARY — the nine standardised card experiences.
 *
 * Every card is presentational (data arrives via props), token-based (no
 * hardcoded hues) and honest: metadata shows only real fields (level,
 * lesson count, estimated time, difficulty, completion, skills) — never
 * fabricated ratings or counts.
 *
 * Shared hover contract: `.card-interactive` (lift + border + shadow,
 * 200ms) with a `press` settle. Focus-visible rings come from the base
 * layer. Interactive cards are real <button>/<a> elements, never
 * div-with-onClick.
 *
 * Metadata atoms (MetaRow, LevelBadge, DifficultyBadge, CompletionBadge,
 * SkillTag) are exported too — smaller surfaces reuse them directly.
 */

import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  BookMarked,
  BookOpen,
  CheckCircle2,
  CircleDot,
  Clock,
  Image as ImageIcon,
  Layers,
  Lock,
  Sparkles,
  Trophy,
} from "lucide-react";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

/* ================================================================== */
/* Metadata atoms                                                      */
/* ================================================================== */

export function MetaRow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn("flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground", className)}>
      {children}
    </div>
  );
}

export function MetaItem({
  icon: Icon,
  children,
  className,
}: {
  icon?: LucideIcon;
  children: ReactNode;
  className?: string;
}) {
  return (
    <span className={cn("inline-flex items-center gap-1 tabular-nums", className)}>
      {Icon ? <Icon className="size-3.5" aria-hidden /> : null}
      {children}
    </span>
  );
}

/** CEFR level chip — the one level recipe (no per-view hues). */
export function LevelBadge({ level, className }: { level: string; className?: string }) {
  return (
    <Badge variant="secondary" className={cn("text-[11px] font-medium", className)}>
      {level}
    </Badge>
  );
}

/** Difficulty chip on the semantic ramp: easy → challenge. */
export const DIFFICULTY_STYLES: Record<string, string> = {
  easy: "bg-success/10 text-success border-success/30",
  medium: "bg-warning/10 text-warning border-warning/30",
  hard: "bg-incorrect/10 text-incorrect border-incorrect/30",
  challenge: "bg-destructive/10 text-destructive border-destructive/30",
};

export function DifficultyBadge({ difficulty, className }: { difficulty: string; className?: string }) {
  return (
    <Badge
      variant="outline"
      className={cn("text-[11px] capitalize", DIFFICULTY_STYLES[difficulty] ?? "", className)}
    >
      {difficulty}
    </Badge>
  );
}

/** Completion status — completed / in-progress / not-started. */
export function CompletionBadge({
  status,
  className,
}: {
  status: "completed" | "in-progress" | "not-started";
  className?: string;
}) {
  if (status === "completed") {
    return (
      <span className={cn("inline-flex items-center gap-1 text-[11px] font-medium text-success", className)}>
        <CheckCircle2 className="size-3.5" aria-hidden /> Completed
      </span>
    );
  }
  if (status === "in-progress") {
    return (
      <span className={cn("inline-flex items-center gap-1 text-[11px] font-medium text-primary", className)}>
        <CircleDot className="size-3.5" aria-hidden /> In progress
      </span>
    );
  }
  return (
    <span className={cn("inline-flex items-center gap-1 text-[11px] text-muted-foreground", className)}>
      <CircleDot className="size-3.5" aria-hidden /> Not started
    </span>
  );
}

/** Skill tag on the skill palette (static map — Tailwind needs literal classes). */
const SKILL_CHIP: Record<string, string> = {
  reading: "bg-skill-reading/10 text-skill-reading",
  listening: "bg-skill-listening/10 text-skill-listening",
  speaking: "bg-skill-speaking/10 text-skill-speaking",
  writing: "bg-skill-writing/10 text-skill-writing",
  vocabulary: "bg-skill-vocabulary/10 text-skill-vocabulary",
  grammar: "bg-skill-grammar/10 text-skill-grammar",
};

export function SkillTag({
  skill,
  label,
  className,
}: {
  skill: SkillKey;
  label: string;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2 py-0.5 text-[11px] font-medium",
        SKILL_CHIP[skill],
        className,
      )}
    >
      {label}
    </span>
  );
}

/** Thin progress + fraction (n/total) — the card-level progress recipe.
    Pass `fraction` to override the counter text (e.g. "12 of 30 min" for
    duration-based achievements whose raw values are milliseconds). */
export function CardProgressBar({
  value,
  current,
  total,
  fraction,
  className,
  "aria-label": ariaLabel,
}: {
  value: number;
  current?: number;
  total?: number;
  fraction?: string;
  className?: string;
  "aria-label"?: string;
}) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <Progress value={value} className="h-1.5 flex-1" aria-label={ariaLabel ?? `${Math.round(value)}% complete`} />
      {fraction ? (
        <span className="text-[11px] tabular-nums text-muted-foreground">{fraction}</span>
      ) : typeof current === "number" && typeof total === "number" ? (
        <span className="text-[11px] tabular-nums text-muted-foreground">
          {current}/{total}
        </span>
      ) : null}
    </div>
  );
}

/* ================================================================== */
/* 1. FeaturedLearningCard — the hero of a grid: next lesson / top pick */
/* ================================================================== */

export function FeaturedLearningCard({
  eyebrow,
  title,
  description,
  meta,
  cta,
  onClick,
  icon: Icon = BookOpen,
  className,
}: {
  eyebrow: string;
  title: string;
  description: string;
  meta?: ReactNode;
  cta: string;
  onClick: () => void;
  icon?: LucideIcon;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "gradient-pan bg-gradient-deep relative flex flex-col gap-4 overflow-hidden rounded-2xl p-6 text-white shadow-lg sm:p-8",
        className,
      )}
    >
      <div className="pointer-events-none absolute -right-16 -top-16 size-48 rounded-full bg-brand-blue/25 blur-3xl" aria-hidden />
      <div className="pointer-events-none absolute -bottom-20 -left-10 size-44 rounded-full bg-brand-violet/20 blur-3xl" aria-hidden />
      <div className="relative flex flex-1 flex-col items-start gap-4">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-medium text-white/90">
          <Sparkles className="size-3.5 text-brand-gold" aria-hidden />
          {eyebrow}
        </span>
        <div className="flex items-start gap-3">
          <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-white/15 text-white">
            <Icon className="size-5" aria-hidden />
          </span>
          <div className="min-w-0">
            <h3 className="font-heading text-xl font-bold leading-snug sm:text-2xl">{title}</h3>
            {description ? (
              <p className="mt-1.5 text-sm leading-relaxed text-white/80">{description}</p>
            ) : null}
          </div>
        </div>
        {meta ? (
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-white/75 tabular-nums">
            {meta}
          </div>
        ) : null}
        <button
          type="button"
          onClick={onClick}
          className="press mt-auto inline-flex items-center gap-2 self-start rounded-lg bg-white px-4 py-2 text-sm font-semibold text-brand-navy shadow-md transition-shadow hover:shadow-lg"
        >
          {cta} <ArrowRight className="size-4" aria-hidden />
        </button>
      </div>
    </div>
  );
}

/* ================================================================== */
/* 2. CourseCard — standard course tile (catalogue, enrolments)         */
/* ================================================================== */

export function CourseCard({
  title,
  description,
  level,
  lessonCount,
  estimatedMinutes,
  learnerCount,
  enrolled,
  completedCount,
  totalLessons,
  cta,
  onClick,
  onCta,
  icon: Icon = BookOpen,
  className,
}: {
  title: string;
  description: string;
  level?: string;
  lessonCount: number;
  estimatedMinutes?: number;
  /** Real enrolment count from the server — never a fabricated figure. */
  learnerCount?: number;
  enrolled?: boolean;
  completedCount?: number;
  totalLessons?: number;
  cta: string;
  onClick: () => void;
  onCta?: () => void;
  icon?: LucideIcon;
  className?: string;
}) {
  const progress =
    enrolled && totalLessons && totalLessons > 0
      ? { value: ((completedCount ?? 0) / totalLessons) * 100, current: completedCount ?? 0, total: totalLessons }
      : null;
  return (
    <div
      className={cn(
        "card-interactive group flex flex-col gap-3 rounded-xl border bg-card p-5 shadow-xs hover:border-primary/40 hover:shadow-md",
        className,
      )}
    >
      <div className="flex items-start justify-between gap-2">
        <span className="inline-flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
          <Icon className="size-5" aria-hidden />
        </span>
        {level ? <LevelBadge level={level} /> : null}
      </div>
      <div>
        <h3 className="font-semibold leading-snug transition-colors group-hover:text-primary">{title}</h3>
        <p className="mt-1 line-clamp-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
      </div>
      <MetaRow className="mt-auto">
        <MetaItem icon={Layers}>{lessonCount} lessons</MetaItem>
        {typeof estimatedMinutes === "number" ? (
          <MetaItem icon={Clock}>{estimatedMinutes} min</MetaItem>
        ) : null}
        {typeof learnerCount === "number" ? (
          <MetaItem>{learnerCount} {learnerCount === 1 ? "learner" : "learners"}</MetaItem>
        ) : null}
        {enrolled && completedCount !== undefined ? (
          <CompletionBadge status={completedCount > 0 ? "in-progress" : "not-started"} />
        ) : null}
      </MetaRow>
      {progress ? <CardProgressBar {...progress} aria-label={`${title} progress`} /> : null}
      <div className="flex items-center justify-between gap-2">
        <button
          type="button"
          onClick={onCta ?? onClick}
          className="press inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-semibold text-primary transition-colors hover:bg-primary/10"
        >
          {cta} <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden />
        </button>
        <button
          type="button"
          onClick={onClick}
          className="text-xs font-medium text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
        >
          View outline
        </button>
      </div>
    </div>
  );
}

/* ================================================================== */
/* 3. CompactLessonCard — dense list row (course outline, playlists)    */
/* ================================================================== */

export function CompactLessonCard({
  index,
  title,
  estimatedMinutes,
  status,
  lockedReason,
  onClick,
  disabled,
  className,
}: {
  index?: number;
  title: string;
  estimatedMinutes?: number;
  status: "completed" | "in-progress" | "not-started";
  lockedReason?: string;
  onClick: () => void;
  disabled?: boolean;
  className?: string;
}) {
  const locked = Boolean(lockedReason) || disabled;
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={locked}
      aria-label={locked ? `${title} — locked` : title}
      className={cn(
        "card-interactive group flex w-full items-center gap-3 rounded-xl border bg-card p-4 text-left shadow-xs",
        locked
          ? "cursor-not-allowed opacity-70"
          : "hover:border-primary/40 hover:shadow-md",
        status === "completed" && "border-success/30",
        className,
      )}
    >
      <span
        aria-hidden
        className={cn(
          "flex size-8 shrink-0 items-center justify-center rounded-full text-sm font-bold tabular-nums",
          status === "completed"
            ? "bg-success text-success-foreground"
            : status === "in-progress"
              ? "bg-primary text-primary-foreground"
              : "bg-secondary text-secondary-foreground",
        )}
      >
        {status === "completed" ? <CheckCircle2 className="size-4" /> : (index ?? "–")}
      </span>
      <span className="flex min-w-0 flex-1 flex-col gap-0.5">
        <span className="truncate font-medium leading-snug">{title}</span>
        <span className="flex items-center gap-2 text-xs text-muted-foreground">
          {typeof estimatedMinutes === "number" ? (
            <MetaItem icon={Clock}>{estimatedMinutes} min</MetaItem>
          ) : null}
          <CompletionBadge status={status} />
        </span>
        {lockedReason ? (
          <span className="mt-0.5 flex items-center gap-1 text-xs text-warning">
            <Lock className="size-3" aria-hidden /> {lockedReason}
          </span>
        ) : null}
      </span>
      {locked ? (
        <Lock className="size-4 shrink-0 text-muted-foreground" aria-hidden />
      ) : (
        <ArrowRight
          className="size-4 shrink-0 text-muted-foreground transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-primary"
          aria-hidden
        />
      )}
    </button>
  );
}

/* ================================================================== */
/* 4. SkillCard — interactive entry to a skill environment             */
/* ================================================================== */

type SkillKey =
  "reading" | "listening" | "speaking" | "writing" | "vocabulary" | "grammar";

export function SkillCard({
  eyebrow,
  title,
  description,
  icon: Icon,
  skill,
  onClick,
  className,
}: {
  eyebrow?: string;
  title: string;
  description: string;
  icon: LucideIcon;
  skill: SkillKey;
  onClick: () => void;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "card-interactive group rounded-2xl border bg-card p-5 text-left shadow-xs hover:border-primary/40 hover:shadow-md",
        className,
      )}
    >
      <span
        className={cn(
          "inline-flex size-11 items-center justify-center rounded-xl transition-transform duration-200 group-hover:scale-105",
          SKILL_CHIP[skill],
        )}
      >
        <Icon className="size-5" aria-hidden />
      </span>
      {eyebrow ? (
        <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-primary">{eyebrow}</p>
      ) : null}
      <h3 className="mt-1 flex items-center gap-2 font-semibold">
        {title}
        <ArrowRight
          className="size-4 text-muted-foreground opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-primary group-hover:opacity-100"
          aria-hidden
        />
      </h3>
      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{description}</p>
    </button>
  );
}

/* ================================================================== */
/* 5. ProgressCard — one number with context (dashboards)              */
/* ================================================================== */

export function ProgressCard({
  label,
  value,
  display,
  sublabel,
  icon: Icon,
  ring,
  className,
}: {
  label: string;
  /** 0–100 for the ring/bar; not required for pure counters. */
  value?: number;
  /** Formatted value (defaults to the raw number). */
  display?: string;
  sublabel?: ReactNode;
  icon?: LucideIcon;
  /** Ring presentation instead of a bar. */
  ring?: boolean;
  className?: string;
}) {
  const content = (
    <>
      <p className={cn("font-heading font-bold tabular-nums", ring ? "text-2xl" : "text-3xl", display?.includes("%") && "text-primary")}>
        {display ?? value}
      </p>
      {sublabel ? <p className="mt-1 text-xs leading-snug text-muted-foreground">{sublabel}</p> : null}
      {!ring && typeof value === "number" ? (
        <Progress value={value} className="mt-3 h-1.5" aria-label={`${label}: ${Math.round(value)}%`} />
      ) : null}
    </>
  );
  return (
    <div className={cn("card-interactive rounded-xl border bg-card p-5 shadow-xs", className)}>
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1">{content}</div>
        {Icon ? (
          <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <Icon className="size-4.5" aria-hidden />
          </span>
        ) : null}
      </div>
      <p className="mt-3 text-xs font-medium uppercase tracking-wide text-muted-foreground">{label}</p>
    </div>
  );
}

/* ================================================================== */
/* 6. AiTutorCard — signature gradient tutor panel                     */
/* ================================================================== */

export function AiTutorCard({
  eyebrow,
  title,
  description,
  modes,
  cta,
  secondaryCta,
  onCta,
  onSecondaryCta,
  privacyNote,
  className,
}: {
  eyebrow: string;
  title: string;
  description: string;
  modes: string[];
  cta: string;
  secondaryCta?: string;
  onCta: () => void;
  onSecondaryCta?: () => void;
  privacyNote?: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "gradient-pan bg-gradient-deep relative overflow-hidden rounded-3xl p-6 text-white shadow-xl sm:p-10",
        className,
      )}
    >
      <div className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-brand-blue/30 blur-3xl" aria-hidden />
      <div className="pointer-events-none absolute -bottom-28 -left-16 size-64 rounded-full bg-brand-violet/25 blur-3xl" aria-hidden />
      <div className="relative max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-wide text-brand-gold">{eyebrow}</p>
        <h2 className="mt-1 font-heading text-2xl font-bold sm:text-3xl">{title}</h2>
        <p className="mt-3 text-sm leading-relaxed text-white/80 sm:text-base">{description}</p>
        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
          <button
            type="button"
            onClick={onCta}
            className="press inline-flex items-center justify-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-semibold text-brand-navy shadow-md transition-shadow hover:shadow-lg"
          >
            {cta} <ArrowRight className="size-4" aria-hidden />
          </button>
          {secondaryCta && onSecondaryCta ? (
            <button
              type="button"
              onClick={onSecondaryCta}
              className="press inline-flex items-center justify-center rounded-lg border border-white/30 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              {secondaryCta}
            </button>
          ) : null}
        </div>
        {modes.length > 0 ? (
          <div className="mt-5 flex flex-wrap gap-1.5">
            {modes.map((mode) => (
              <span
                key={mode}
                className="rounded-full border border-white/25 bg-white/5 px-2.5 py-1 text-[11px] font-medium text-white/85"
              >
                {mode}
              </span>
            ))}
          </div>
        ) : null}
        {privacyNote ? <p className="mt-4 text-xs text-white/70">{privacyNote}</p> : null}
      </div>
    </div>
  );
}

/* ================================================================== */
/* 7. RecommendedContentCard — "because you…" next-step suggestion      */
/* ================================================================== */

export function RecommendedContentCard({
  reason,
  title,
  action,
  purpose,
  onClick,
  className,
}: {
  /** WHY this is shown — must be a real, personalised reason. */
  reason: string;
  title: string;
  action: string;
  purpose?: string;
  onClick: () => void;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "card-interactive group flex w-full flex-col items-start gap-2 rounded-xl border bg-card p-4 text-left shadow-xs hover:border-primary/40 hover:shadow-md",
        className,
      )}
    >
      <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-2.5 py-1 text-[11px] font-medium text-primary">
        <Sparkles className="size-3" aria-hidden />
        {reason}
      </span>
      <p className="font-semibold leading-snug transition-colors group-hover:text-primary">{title}</p>
      {purpose ? <p className="text-xs leading-relaxed text-muted-foreground">{purpose}</p> : null}
      <span className="mt-1 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
        {action}
        <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden />
      </span>
    </button>
  );
}

/* ================================================================== */
/* 8. AchievementCard — medal tile with unlock state                   */
/* ================================================================== */

export function AchievementCard({
  title,
  description,
  unlocked,
  icon,
  progress,
  requirement,
  earnedAt,
  newlyUnlocked,
  className,
}: {
  title: string;
  description: string;
  unlocked: boolean;
  icon: ReactNode;
  /** current/target when still locked, plus an optional display fraction. */
  progress?: { current: number; target: number; fraction?: string };
  requirement?: string;
  earnedAt?: string;
  /** Triggers the gold unlock glow animation. */
  newlyUnlocked?: boolean;
  className?: string;
}) {
  const pct = progress && progress.target > 0 ? (progress.current / progress.target) * 100 : 0;
  return (
    <div
      className={cn(
        "card-interactive flex flex-col gap-2.5 rounded-xl border p-4",
        unlocked ? "border-primary/40 bg-primary/5" : "border-border bg-card opacity-80",
        className,
      )}
    >
      <div className="flex items-center justify-between gap-2">
        <span
          aria-hidden
          className={cn(
            "inline-flex size-9 items-center justify-center rounded-xl",
            unlocked ? "unlock-glow bg-gradient-warm text-brand-navy" : "bg-muted text-muted-foreground",
          )}
        >
          {unlocked ? icon : <Lock className="size-4" />}
        </span>
        {unlocked ? (
          <span className="inline-flex items-center gap-1 text-[11px] font-medium text-primary">
            <Trophy className="size-3.5" aria-hidden /> Earned
          </span>
        ) : null}
      </div>
      <p className="font-semibold leading-snug">{title}</p>
      <p className="text-xs leading-relaxed text-muted-foreground">{description}</p>
      {unlocked ? (
        earnedAt ? (
          <p className="text-[11px] text-muted-foreground tabular-nums">Earned {earnedAt}</p>
        ) : null
      ) : progress ? (
        <CardProgressBar
          value={pct}
          current={progress.current}
          total={progress.target}
          fraction={progress.fraction}
          aria-label={`${title} progress`}
        />
      ) : null}
      {!unlocked && requirement ? (
        <p className="text-[11px] text-muted-foreground">{requirement}</p>
      ) : null}
      {newlyUnlocked ? <span className="sr-only">Newly unlocked</span> : null}
    </div>
  );
}

/* ================================================================== */
/* 9. ResourceCard — library item (texts, audios, media)               */
/* ================================================================== */

export function ResourceCard({
  title,
  description,
  level,
  meta,
  completed,
  bookmarked,
  illustrated,
  onClick,
  className,
}: {
  title: string;
  description: string;
  level?: string;
  meta: ReactNode;
  completed?: boolean;
  bookmarked?: boolean;
  illustrated?: boolean;
  onClick: () => void;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "card-interactive group flex flex-col rounded-2xl border bg-card p-4 text-left shadow-xs hover:border-primary/50 hover:shadow-md",
        completed && "border-success/30",
        className,
      )}
    >
      <div className="flex items-start justify-between gap-2">
        {level ? <LevelBadge level={level} className="capitalize" /> : <span />}
        <span className="flex items-center gap-1 text-muted-foreground">
          {illustrated ? <ImageIcon className="size-4" aria-label="Illustrated" /> : null}
          {bookmarked ? <BookMarked className="size-4 fill-primary text-primary" aria-label="Bookmarked" /> : null}
          {completed ? (
            <CheckCircle2 className="size-4 text-success" aria-label="Completed" />
          ) : null}
        </span>
      </div>
      <h3 className="mt-2 font-semibold leading-snug transition-colors group-hover:text-primary">{title}</h3>
      <p className="mt-1 line-clamp-2 flex-1 text-sm leading-relaxed text-muted-foreground">{description}</p>
      <MetaRow className="mt-3">{meta}</MetaRow>
    </button>
  );
}

/** Card base props alias for consumers that spread onto <Card>. */
export type CardBaseProps = ComponentProps<"div">;
