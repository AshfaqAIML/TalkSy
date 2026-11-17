"use client";

/**
 * Catalogue cards (PROMPT 32 §3) — every format gets a distinct, purposeful
 * presentation, and every value shown is real metadata computed by the
 * catalogue service. No popularity counters, no review scores, no invented
 * figures.
 *
 * Presentation tiers:
 *  · FEATURED  — learning paths (gradient hero treatment, progress ring)
 *  · STANDARD  — courses (rich two-column metadata: chapters, lessons,
 *                duration, level, completion, prerequisites)
 *  · COMPACT   — short lessons & guides (dense rows with duration + level)
 *  · LAB       — practice labs (count-forward, skill-tinted)
 *  · SIMULATOR — role-plays (partner + levels)
 */

import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Clock,
  FlaskConical,
  GraduationCap,
  Layers,
  ListChecks,
  Lock,
  MessageCircle,
  Route,
  Sparkles,
  Users,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import {
  SKILL_TINTS,
} from "@/components/site/nav-icons";
import type { CatalogueItem } from "@/lib/catalogue/types";
import type { NavSkill } from "@/lib/navigation";

function skillTint(skill: string | undefined): string {
  return SKILL_TINTS[(skill ?? "general") as NavSkill] ?? SKILL_TINTS.general;
}

function formatDuration(minutes: number | null): string {
  if (minutes === null || minutes === 0) return "";
  if (minutes < 60) return `${minutes} min`;
  const hours = Math.floor(minutes / 60);
  const rest = minutes % 60;
  return rest === 0 ? `${hours} hr` : `${hours} hr ${rest} min`;
}

export function CompletionPill({ status }: { status: string | null }) {
  if (!status) return null;
  if (status === "completed") {
    return (
      <Badge className="gap-1 bg-success text-success-foreground">
        <CheckCircle2 className="size-3" aria-hidden /> Completed
      </Badge>
    );
  }
  if (status === "in-progress") {
    return <Badge className="bg-primary/15 text-primary">In progress</Badge>;
  }
  return null;
}

/* ------------------------------------------------------------------ */
/* FEATURED — learning paths                                           */
/* ------------------------------------------------------------------ */

export function PathCard({ item }: { item: CatalogueItem }) {
  const progress = item.progress;
  const pct = progress && progress.total > 0 ? (progress.completed / progress.total) * 100 : null;
  return (
    <Link
      href={item.href}
      className="card-interactive group relative flex flex-col gap-3 overflow-hidden rounded-2xl border bg-card p-5 shadow-xs transition-all hover:border-primary/40 hover:shadow-md sm:p-6"
    >
      <div className="gradient-pan pointer-events-none absolute inset-0 bg-gradient-deep opacity-[0.04]" aria-hidden />
      <div className="flex items-start justify-between gap-3">
        <span className="inline-flex size-11 items-center justify-center rounded-xl bg-gradient-deep text-white shadow-sm">
          <Route className="size-5" aria-hidden />
        </span>
        <div className="flex flex-wrap items-center justify-end gap-1.5">
          <CompletionPill status={item.completion} />
          {item.level ? <Badge variant="secondary">{item.level}</Badge> : null}
        </div>
      </div>
      <div>
        <p className="text-[11px] font-semibold uppercase tracking-wide text-primary">
          Learning path
        </p>
        <h3 className="mt-0.5 font-heading text-lg font-bold leading-snug tracking-tight">
          {item.title}
        </h3>
        <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
          {item.description}
        </p>
      </div>
      <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-muted-foreground">
        <span className="inline-flex items-center gap-1.5">
          <Layers className="size-3.5" aria-hidden />
          {item.chapterCount} {item.chapterCount === 1 ? "chapter" : "chapters"}
        </span>
        <span className="inline-flex items-center gap-1.5">
          <ListChecks className="size-3.5" aria-hidden />
          {item.lessonCount} lessons
        </span>
        {item.durationMinutes ? (
          <span className="inline-flex items-center gap-1.5">
            <Clock className="size-3.5" aria-hidden />
            {formatDuration(item.durationMinutes)}
          </span>
        ) : null}
        <span className="ml-auto inline-flex items-center gap-1 text-sm font-medium text-primary">
          Open path
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
        </span>
      </div>
      {pct !== null ? (
        <div className="flex items-center gap-2">
          <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-primary/15">
            <div
              className="h-full rounded-full bg-primary transition-transform duration-500"
              style={{ transform: `scaleX(${Math.min(pct / 100, 1)})`, transformOrigin: "left" }}
            />
          </div>
          <span className="text-[11px] tabular-nums text-muted-foreground">
            {progress!.completed}/{progress!.total}
          </span>
        </div>
      ) : null}
      {item.prerequisites.length > 0 ? (
        <p className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
          <Lock className="size-3.5 shrink-0" aria-hidden />
          After {item.prerequisites.join(" · ")}
        </p>
      ) : null}
    </Link>
  );
}

/* ------------------------------------------------------------------ */
/* STANDARD — complete courses                                         */
/* ------------------------------------------------------------------ */

export function CourseCatalogueCard({ item }: { item: CatalogueItem }) {
  return (
    <Link
      href={item.href}
      className="card-interactive group flex flex-col gap-3 rounded-xl border bg-card p-5 shadow-xs transition-all hover:border-primary/40 hover:shadow-md"
    >
      <div className="flex items-start justify-between gap-3">
        <span className="inline-flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
          <GraduationCap className="size-5" aria-hidden />
        </span>
        <div className="flex flex-wrap items-center justify-end gap-1.5">
          <CompletionPill status={item.completion} />
          {item.level ? <Badge variant="secondary">{item.level}</Badge> : null}
        </div>
      </div>
      <div>
        <p className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
          Course
        </p>
        <h3 className="mt-0.5 font-semibold leading-snug">{item.title}</h3>
        <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
          {item.description}
        </p>
      </div>
      <dl className="mt-auto grid grid-cols-2 gap-x-4 gap-y-1.5 border-t pt-3 text-xs">
        <div className="flex items-center gap-1.5 text-muted-foreground">
          <Layers className="size-3.5 shrink-0" aria-hidden />
          <dt className="sr-only">Chapters</dt>
          <dd>
            <span className="font-semibold text-foreground">{item.chapterCount}</span>{" "}
            {item.chapterCount === 1 ? "chapter" : "chapters"}
          </dd>
        </div>
        <div className="flex items-center gap-1.5 text-muted-foreground">
          <ListChecks className="size-3.5 shrink-0" aria-hidden />
          <dt className="sr-only">Lessons</dt>
          <dd>
            <span className="font-semibold text-foreground">{item.lessonCount}</span>{" "}
            {item.lessonCount === 1 ? "lesson" : "lessons"}
          </dd>
        </div>
        <div className="flex items-center gap-1.5 text-muted-foreground">
          <Clock className="size-3.5 shrink-0" aria-hidden />
          <dt className="sr-only">Duration</dt>
          <dd>{formatDuration(item.durationMinutes) || "Self-paced"}</dd>
        </div>
        <div className="flex items-center gap-1.5 text-muted-foreground">
          <Sparkles className="size-3.5 shrink-0" aria-hidden />
          <dt className="sr-only">Skills</dt>
          <dd className="capitalize">{item.skills.join(", ")}</dd>
        </div>
      </dl>
      {item.progress ? (
        <div className="flex items-center gap-2">
          <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-primary/15">
            <div
              className="h-full rounded-full bg-primary transition-transform duration-500"
              style={{
                transform: `scaleX(${Math.min(item.progress.completed / Math.max(item.progress.total, 1), 1)})`,
                transformOrigin: "left",
              }}
            />
          </div>
          <span className="text-[11px] tabular-nums text-muted-foreground">
            {item.progress.completed}/{item.progress.total}
          </span>
        </div>
      ) : (
        <p className="text-xs text-muted-foreground">No prerequisites — enrol anytime.</p>
      )}
    </Link>
  );
}

/* ------------------------------------------------------------------ */
/* COMPACT — short lessons & grammar guides                            */
/* ------------------------------------------------------------------ */

export function CompactCatalogueCard({ item }: { item: CatalogueItem }) {
  const isGuide = item.format === "guide";
  const Icon = isGuide ? BookOpen : Clock;
  return (
    <Link
      href={item.href}
      className="card-interactive group flex min-w-0 items-start gap-3 rounded-lg border bg-card p-3.5 shadow-xs transition-all hover:border-primary/40 hover:shadow-sm"
    >
      <span
        className={cn(
          "mt-0.5 inline-flex size-8 shrink-0 items-center justify-center rounded-lg",
          skillTint(item.skills[0]),
        )}
      >
        {isGuide ? <BookOpen className="size-4" aria-hidden /> : <Icon className="size-4" aria-hidden />}
      </span>
      <span className="flex min-w-0 flex-1 flex-col gap-1">
        <span className="flex min-w-0 flex-wrap items-center gap-x-2 gap-y-1">
          <span className="line-clamp-1 text-sm font-semibold leading-tight">{item.title}</span>
          <CompletionPill status={item.completion} />
        </span>
        <span className="line-clamp-2 text-xs leading-snug text-muted-foreground">
          {item.description}
        </span>
        <span className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] text-muted-foreground">
          {item.level ? <span className="font-medium">{item.level}</span> : null}
          {item.durationMinutes ? (
            <span className="inline-flex items-center gap-1">
              <Clock className="size-3" aria-hidden /> {item.durationMinutes} min
            </span>
          ) : null}
          {item.subtitle ? <span className="line-clamp-1">{item.subtitle}</span> : null}
        </span>
        {item.prerequisites.length > 0 ? (
          <span className="inline-flex items-center gap-1 text-[11px] text-muted-foreground">
            <Lock className="size-3" aria-hidden /> Needs “{item.prerequisites[0]}”
            {item.prerequisites.length > 1 ? ` +${item.prerequisites.length - 1}` : ""}
          </span>
        ) : null}
      </span>
    </Link>
  );
}

/* ------------------------------------------------------------------ */
/* LAB — practice labs                                                 */
/* ------------------------------------------------------------------ */

export function LabCard({ item }: { item: CatalogueItem }) {
  return (
    <Link
      href={item.href}
      className="card-interactive group flex flex-col gap-2.5 rounded-xl border bg-card p-4 shadow-xs transition-all hover:border-primary/40 hover:shadow-md"
    >
      <div className="flex items-center justify-between gap-2">
        <span
          className={cn(
            "inline-flex size-9 items-center justify-center rounded-lg",
            skillTint(item.skills[0]),
          )}
        >
          <FlaskConical className="size-4.5" aria-hidden />
        </span>
        {item.level ? <Badge variant="secondary">{item.level}</Badge> : null}
      </div>
      <div>
        <h3 className="text-sm font-semibold leading-snug">{item.title}</h3>
        <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-muted-foreground">
          {item.description}
        </p>
      </div>
      <p className="mt-auto inline-flex items-center gap-1.5 text-xs font-medium text-primary">
        {item.activityCount ? (
          <>
            {item.activityCount} {item.lessonCount === null ? "activities" : "items"} ·
          </>
        ) : null}
        Start practising
        <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden />
      </p>
    </Link>
  );
}

/* ------------------------------------------------------------------ */
/* SIMULATOR — conversation role-plays                                 */
/* ------------------------------------------------------------------ */

export function SimulatorCard({ item }: { item: CatalogueItem }) {
  return (
    <Link
      href={item.href}
      className="card-interactive group flex flex-col gap-2 rounded-xl border bg-card p-4 shadow-xs transition-all hover:border-primary/40 hover:shadow-md"
    >
      <div className="flex items-center justify-between gap-2">
        <span
          className={cn(
            "inline-flex size-9 items-center justify-center rounded-lg",
            skillTint(item.skills[0]),
          )}
        >
          <MessageCircle className="size-4.5" aria-hidden />
        </span>
        <Badge variant="secondary">Beg · Int · Adv</Badge>
      </div>
      <div>
        <h3 className="text-sm font-semibold leading-snug">{item.title}</h3>
        <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-muted-foreground">
          {item.description}
        </p>
      </div>
      {item.partner ? (
        <p className="mt-auto inline-flex items-center gap-1.5 text-xs text-muted-foreground">
          <Users className="size-3.5" aria-hidden /> AI partner: {item.partner}
        </p>
      ) : null}
    </Link>
  );
}

/** Dispatch a card by format. */
export function CatalogueCard({ item }: { item: CatalogueItem }) {
  switch (item.format) {
    case "path":
      return <PathCard item={item} />;
    case "course":
      return <CourseCatalogueCard item={item} />;
    case "lab":
      return <LabCard item={item} />;
    case "simulator":
      return <SimulatorCard item={item} />;
    default:
      return <CompactCatalogueCard item={item} />;
  }
}
