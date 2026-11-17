"use client";

/**
 * The learning-path interface (PROMPT 32 deliverable): #/paths lists the
 * curated long-form journeys; #/paths/<id> shows one path's steps,
 * chapters, lessons, outcomes and real progress, with a continue CTA.
 */

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Circle,
  Clock,
  Compass,
  Layers,
  ListChecks,
  Lock,
  Route,
  Sparkles,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { EmptyState } from "@/components/ui/empty-state";
import { Skeleton, SkeletonCard } from "@/components/ui/skeleton";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion";
import { PageBreadcrumbs } from "@/components/site/Breadcrumbs";
import { catalogueApi } from "@/lib/client/api";
import { useAppStore } from "@/lib/client/store";
import { cn } from "@/lib/utils";
import type { CataloguePath, CataloguePathStep } from "@/lib/catalogue/types";

function formatDuration(minutes: number): string {
  if (minutes === 0) return "—";
  if (minutes < 60) return `${minutes} min`;
  const hours = Math.floor(minutes / 60);
  const rest = minutes % 60;
  return rest === 0 ? `${hours} hr` : `${hours} hr ${rest} min`;
}

/* ------------------------------------------------------------------ */
/* Path list (#/paths)                                                 */
/* ------------------------------------------------------------------ */

export function PathsView() {
  const [paths, setPaths] = useState<CataloguePath[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;
    void (async () => {
      const res = await catalogueApi.catalogue();
      if (!active) return;
      if (res.ok) setPaths(res.data.paths);
      else setError(res.error);
    })();
    return () => {
      active = false;
    };
  }, []);

  if (error) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-16">
        <EmptyState icon={Route} title="The paths could not be loaded" description={error} />
      </div>
    );
  }

  if (!paths) {
    return (
      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6" aria-busy="true">
        <span className="sr-only" role="status">Loading learning paths</span>
        <Skeleton className="h-9 w-64" />
        <Skeleton className="mt-2 h-5 w-full max-w-xl" />
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {[0, 1, 2, 3].map((i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
      <Reveal mode="mount" className="flex flex-col gap-3">
        <p className="inline-flex items-center gap-2 self-start rounded-full border border-primary/25 bg-primary/5 px-3.5 py-1.5 text-xs font-medium text-primary">
          <Route className="size-3.5" aria-hidden /> Learning paths
        </p>
        <h1 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
          Long-form journeys, structured end to end
        </h1>
        <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Each path chains real levels, courses and practice into one guided
          route with chapters, lessons, honest durations and measured progress.
          Start at your level — the path remembers what you finish.
        </p>
      </Reveal>

      <StaggerGroup className="mt-8 grid gap-4 md:grid-cols-2">
        {paths.map((path, i) => (
          <StaggerItem key={path.id} index={i} className="h-full">
            <PathSummaryCard path={path} />
          </StaggerItem>
        ))}
      </StaggerGroup>
    </div>
  );
}

export function PathSummaryCard({ path }: { path: CataloguePath }) {
  const pct =
    path.progress && path.progress.total > 0
      ? (path.progress.completed / path.progress.total) * 100
      : null;
  return (
    <Link
      href={path.href}
      className="card-interactive group flex h-full flex-col gap-3 rounded-2xl border bg-card p-5 shadow-xs transition-all hover:border-primary/40 hover:shadow-md"
    >
      <div className="flex items-start justify-between gap-3">
        <span className="inline-flex size-10 items-center justify-center rounded-xl bg-gradient-deep text-white shadow-sm">
          <Route className="size-5" aria-hidden />
        </span>
        <div className="flex flex-wrap items-center justify-end gap-1.5">
          {path.completion === "completed" ? (
            <Badge className="gap-1 bg-success text-success-foreground">
              <CheckCircle2 className="size-3" aria-hidden /> Completed
            </Badge>
          ) : path.completion === "in-progress" ? (
            <Badge className="bg-primary/15 text-primary">In progress</Badge>
          ) : null}
          <Badge variant="secondary">{path.level}</Badge>
        </div>
      </div>
      <div>
        <h2 className="font-heading text-lg font-bold leading-snug tracking-tight">
          {path.title}
        </h2>
        <p className="mt-1.5 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
          {path.description}
        </p>
      </div>
      <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-1.5 border-t pt-3 text-xs text-muted-foreground">
        <span className="inline-flex items-center gap-1.5">
          <Layers className="size-3.5" aria-hidden /> {path.chapterCount}{" "}
          {path.chapterCount === 1 ? "chapter" : "chapters"}
        </span>
        <span className="inline-flex items-center gap-1.5">
          <ListChecks className="size-3.5" aria-hidden /> {path.lessonCount}{" "}
          {path.lessonCount === 1 ? "lesson" : "lessons"}
        </span>
        <span className="inline-flex items-center gap-1.5">
          <Clock className="size-3.5" aria-hidden /> {formatDuration(path.durationMinutes)}
        </span>
        <span className="ml-auto inline-flex items-center gap-1 text-sm font-medium text-primary">
          Open <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
        </span>
      </div>
      {pct !== null ? (
        <div className="flex items-center gap-2">
          <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-primary/15">
            <div
              className="h-full rounded-full bg-primary"
              style={{ transform: `scaleX(${Math.min(pct / 100, 1)})`, transformOrigin: "left" }}
            />
          </div>
          <span className="text-[11px] tabular-nums text-muted-foreground">
            {path.progress!.completed}/{path.progress!.total}
          </span>
        </div>
      ) : null}
      {path.prerequisites.length > 0 ? (
        <p className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
          <Lock className="size-3.5 shrink-0" aria-hidden /> After{" "}
          {path.prerequisites.join(" · ")}
        </p>
      ) : null}
    </Link>
  );
}

/* ------------------------------------------------------------------ */
/* Path detail (#/paths/<id>)                                          */
/* ------------------------------------------------------------------ */

function StepSection({ step, index }: { step: CataloguePathStep; index: number }) {
  const [open, setOpen] = useState(index === 0);
  const completedCount =
    step.chapters?.reduce(
      (sum, c) => sum + c.lessons.filter((l) => l.completion === "completed").length,
      0,
    ) ?? 0;

  return (
    <div className="rounded-xl border bg-card">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="flex w-full flex-wrap items-center gap-3 p-4 text-left"
      >
        <span
          className={cn(
            "inline-flex size-8 shrink-0 items-center justify-center rounded-lg text-sm font-bold",
            step.optional ? "bg-secondary text-muted-foreground" : "bg-primary/10 text-primary",
          )}
        >
          {index + 1}
        </span>
        <span className="flex min-w-0 flex-1 flex-col">
          <span className="flex flex-wrap items-center gap-2">
            <span className="text-sm font-semibold leading-snug">{step.title}</span>
            {step.optional ? (
              <Badge variant="outline" className="text-[10px] uppercase">
                Optional practice
              </Badge>
            ) : null}
          </span>
          <span className="mt-0.5 line-clamp-1 text-xs text-muted-foreground">
            {step.description}
          </span>
        </span>
        <span className="ml-auto flex shrink-0 items-center gap-3 text-xs text-muted-foreground">
          {step.lessonCount > 0 ? <span>{step.lessonCount} lessons</span> : null}
          {step.durationMinutes > 0 ? <span>{formatDuration(step.durationMinutes)}</span> : null}
          {step.lessonCount > 0 && completedCount > 0 ? (
            <Badge className="bg-primary/15 text-primary">
              {completedCount}/{step.lessonCount}
            </Badge>
          ) : null}
        </span>
      </button>
      {open ? (
        <div className="border-t p-4">
          {step.chapters ? (
            <div className="flex flex-col gap-4">
              {step.chapters.map((chapter) => (
                <div key={chapter.title}>
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    {chapter.title}
                  </p>
                  <p className="mt-0.5 text-xs text-muted-foreground/80">
                    {chapter.description}
                  </p>
                  <ul className="mt-2 flex flex-col gap-1">
                    {chapter.lessons.map((lesson) => (
                      <li key={lesson.slug}>
                        <Link
                          href={
                            step.kind === "cms-course"
                              ? `#/course-lesson/${lesson.slug}`
                              : `#/lesson/${lesson.slug}`
                          }
                          className="flex items-center gap-2.5 rounded-lg px-2 py-1.5 text-sm transition-colors hover:bg-secondary/60"
                        >
                          {lesson.completion === "completed" ? (
                            <CheckCircle2 className="size-4 shrink-0 text-success" aria-label="Completed" />
                          ) : lesson.completion === "in-progress" ? (
                            <Circle className="size-4 shrink-0 fill-primary text-primary" aria-label="In progress" />
                          ) : (
                            <Circle className="size-4 shrink-0 text-muted-foreground/50" aria-hidden />
                          )}
                          <span className="min-w-0 flex-1 truncate font-medium">
                            {lesson.title}
                          </span>
                          <span className="shrink-0 text-xs text-muted-foreground">
                            {lesson.durationMinutes} min
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ) : (
            <Link
              href={step.href}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
            >
              Open {step.title} <ArrowRight className="size-4" aria-hidden />
            </Link>
          )}
        </div>
      ) : null}
    </div>
  );
}

export function PathDetailView({ slug }: { slug: string }) {
  const user = useAppStore((s) => s.user);
  const [paths, setPaths] = useState<CataloguePath[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;
    void (async () => {
      const res = await catalogueApi.catalogue();
      if (!active) return;
      if (res.ok) setPaths(res.data.paths);
      else setError(res.error);
    })();
    return () => {
      active = false;
    };
  }, [user]);

  const path = useMemo(
    () => paths?.find((p) => p.id === slug) ?? null,
    [paths, slug],
  );

  if (error) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-16">
        <EmptyState icon={Route} title="This path could not be loaded" description={error} />
      </div>
    );
  }

  if (!paths) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6" aria-busy="true">
        <span className="sr-only" role="status">Loading the path</span>
        <Skeleton className="h-5 w-40" />
        <Skeleton className="mt-4 h-10 w-2/3" />
        <Skeleton className="mt-6 h-24 rounded-xl" />
        {[0, 1].map((i) => (
          <Skeleton key={i} className="mt-4 h-16 rounded-xl" />
        ))}
      </div>
    );
  }

  if (!path) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-16">
        <EmptyState
          icon={Compass}
          title="Path not found"
          description="This learning path does not exist — browse all paths instead."
          action={
            <Button asChild size="sm" className="mt-2">
              <Link href="#/paths">All learning paths</Link>
            </Button>
          }
        />
      </div>
    );
  }

  const nextLesson = path.steps
    .flatMap((s) => s.chapters ?? [])
    .flatMap((c) => c.lessons)
    .find((l) => l.completion !== "completed");
  const continueHref = nextLesson
    ? path.steps.some((s) => s.kind === "cms-course" && s.chapters?.some((c) => c.lessons.some((l) => l.slug === nextLesson.slug)))
      ? `#/course-lesson/${nextLesson.slug}`
      : `#/lesson/${nextLesson.slug}`
    : path.href;
  const pct =
    path.progress && path.progress.total > 0
      ? (path.progress.completed / path.progress.total) * 100
      : null;

  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
      <PageBreadcrumbs
        items={[{ label: "Learning paths", href: "#/paths" }, { label: path.title }]}
      />

      <Reveal mode="mount" className="mt-4 flex flex-col gap-4">
        <div className="flex items-start justify-between gap-3">
          <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-gradient-deep text-white shadow-sm">
            <Route className="size-6" aria-hidden />
          </span>
          <div className="flex flex-wrap items-center justify-end gap-1.5">
            {path.completion === "completed" ? (
              <Badge className="gap-1 bg-success text-success-foreground">
                <CheckCircle2 className="size-3" aria-hidden /> Completed
              </Badge>
            ) : null}
            <Badge variant="secondary">{path.level}</Badge>
          </div>
        </div>
        <h1 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
          {path.title}
        </h1>
        <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
          {path.description}
        </p>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1.5">
            <Layers className="size-3.5" aria-hidden /> {path.chapterCount} chapters
          </span>
          <span className="inline-flex items-center gap-1.5">
            <ListChecks className="size-3.5" aria-hidden /> {path.lessonCount} lessons
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock className="size-3.5" aria-hidden /> {formatDuration(path.durationMinutes)}
          </span>
          {path.prerequisites.length > 0 ? (
            <span className="inline-flex items-center gap-1.5">
              <Lock className="size-3.5" aria-hidden /> After {path.prerequisites.join(" · ")}
            </span>
          ) : null}
        </div>
        {pct !== null ? (
          <div className="flex items-center gap-2">
            <div className="h-2 flex-1 overflow-hidden rounded-full bg-primary/15">
              <div
                className="h-full rounded-full bg-primary transition-transform duration-500"
                style={{ transform: `scaleX(${Math.min(pct / 100, 1)})`, transformOrigin: "left" }}
              />
            </div>
            <span className="text-xs font-medium tabular-nums text-muted-foreground">
              {path.progress!.completed}/{path.progress!.total} lessons
            </span>
          </div>
        ) : null}
        {nextLesson ? (
          <div>
            <Button asChild className="gap-1.5">
              <Link href={continueHref}>
                {path.progress && path.progress.completed > 0 ? "Continue" : "Start"}:{" "}
                {nextLesson.title}
                <ArrowRight className="size-4" aria-hidden />
              </Link>
            </Button>
          </div>
        ) : path.progress ? (
          <p className="inline-flex items-center gap-1.5 text-sm font-medium text-success">
            <Sparkles className="size-4" aria-hidden /> Every lesson in this path is
            complete — review any step below.
          </p>
        ) : null}
      </Reveal>

      {/* Outcomes */}
      <Reveal mode="mount" className="mt-8">
        <div className="rounded-2xl border bg-secondary/30 p-5">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-foreground/70">
            What you will be able to do
          </h2>
          <ul className="mt-3 grid gap-2.5 sm:grid-cols-2">
            {path.outcomes.map((outcome) => (
              <li key={outcome} className="flex items-start gap-2.5 text-sm">
                <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-success" aria-hidden />
                <span className="leading-snug">{outcome}</span>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>

      {/* Steps */}
      <section aria-labelledby="path-steps" className="mt-10">
        <h2 id="path-steps" className="text-xl font-semibold">
          The route, step by step
        </h2>
        <div className="mt-4 flex flex-col gap-3">
          {path.steps.map((step, index) => (
            <StepSection key={`${step.kind}-${step.title}-${index}`} step={step} index={index} />
          ))}
        </div>
      </section>
    </div>
  );
}
