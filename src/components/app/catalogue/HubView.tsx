"use client";

/**
 * Category hub pages (PROMPT 32 §2) — #/hub/<category>. One template, nine
 * hubs: attractive introduction, description, learning outcomes, featured
 * content, chapters & lessons from the hub's real source, recommended
 * resources and practice activities. All content pulled from
 * /api/catalogue/hub/<id> — never a duplicated frontend list.
 */

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Circle,
  Compass,
  Layers,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { EmptyState } from "@/components/ui/empty-state";
import { Skeleton, SkeletonCard } from "@/components/ui/skeleton";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion";
import { catalogueApi } from "@/lib/client/api";
import type { HubContent } from "@/lib/catalogue/service";
import { HUBS } from "@/lib/catalogue/hubs";
import { cn } from "@/lib/utils";
import { SKILL_TINTS } from "@/components/site/nav-icons";
import type { NavSkill } from "@/lib/navigation";
import { CatalogueCard, PathCard } from "./CatalogueCards";

function hubTint(skill: string): string {
  return SKILL_TINTS[skill as NavSkill] ?? SKILL_TINTS.general;
}

function ChapterList({ chapters }: { chapters: HubContent["chapters"] }) {
  const [openIndex, setOpenIndex] = useState(0);
  if (chapters.length === 0) return null;
  const chapter = chapters[openIndex];
  return (
    <div className="mt-4 grid gap-4 lg:grid-cols-[16rem_1fr]">
      <ol className="flex flex-col gap-1" aria-label="Chapters">
        {chapters.map((c, index) => (
          <li key={c.title}>
            <button
              type="button"
              aria-current={index === openIndex ? "true" : undefined}
              onClick={() => setOpenIndex(index)}
              className={cn(
                "flex w-full flex-col rounded-lg border px-3 py-2 text-left transition-colors",
                index === openIndex
                  ? "border-primary/50 bg-primary/5"
                  : "border-transparent hover:bg-secondary",
              )}
            >
              <span className="text-sm font-semibold leading-snug">{c.title}</span>
              <span className="mt-0.5 text-xs text-muted-foreground">
                {c.lessonCount} {c.lessonCount === 1 ? "item" : "items"}
              </span>
            </button>
          </li>
        ))}
      </ol>
      <div className="min-w-0 rounded-xl border bg-card p-4">
        <p className="text-sm leading-relaxed text-muted-foreground">
          {chapter.description}
        </p>
        <ul className="mt-3 flex flex-col gap-1.5">
          {chapter.lessons.map((lesson) => (
            <li
              key={lesson.slug}
              className="flex items-center gap-2.5 rounded-lg px-2 py-1.5 text-sm transition-colors hover:bg-secondary/60"
            >
              {lesson.completion === "completed" ? (
                <CheckCircle2 className="size-4 shrink-0 text-success" aria-label="Completed" />
              ) : (
                <Circle className="size-4 shrink-0 text-muted-foreground/50" aria-hidden />
              )}
              <span className="min-w-0 flex-1 truncate font-medium">{lesson.title}</span>
              {lesson.durationMinutes > 0 ? (
                <span className="shrink-0 text-xs text-muted-foreground">
                  {lesson.durationMinutes} min
                </span>
              ) : null}
            </li>
          ))}
        </ul>
        <p className="mt-3 border-t pt-2.5 text-xs text-muted-foreground">
          {chapter.lessons.length} of {chapter.lessonCount} shown — open the
          practice surface for the full list.
        </p>
      </div>
    </div>
  );
}

export function HubView({ hubId }: { hubId: string }) {
  const [content, setContent] = useState<HubContent | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;
    void (async () => {
      const res = await catalogueApi.hub(hubId);
      if (!active) return;
      if (res.ok) {
        setContent(res.data);
        setError(null);
      } else {
        setError(res.error);
        setContent(null);
      }
    })();
    return () => {
      active = false;
    };
  }, [hubId]);

  const hubDef = HUBS.find((h) => h.id === hubId);

  if (!hubDef) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-16">
        <EmptyState
          icon={Compass}
          title="Unknown category"
          description="This hub does not exist. Browse the catalogue instead."
          action={
            <Button asChild size="sm" className="mt-2">
              <Link href="#/courses">Open the catalogue</Link>
            </Button>
          }
        />
      </div>
    );
  }

  if (error) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-16">
        <EmptyState
          icon={Compass}
          title="This hub could not be loaded"
          description={error}
        />
      </div>
    );
  }

  if (!content) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6" aria-busy="true">
        <span className="sr-only" role="status">Loading the hub</span>
        <Skeleton className="h-6 w-40" />
        <Skeleton className="mt-4 h-10 w-full max-w-lg" />
        <Skeleton className="mt-2 h-5 w-full max-w-2xl" />
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {[0, 1, 2].map((i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      </div>
    );
  }

  const { hub, featured, chapters, resources, practice } = content;

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      {/* Hero */}
      <Reveal mode="mount" className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <span
            className={cn(
              "inline-flex size-12 items-center justify-center rounded-2xl",
              hubTint(hub.accentSkill),
            )}
          >
            <BookOpen className="size-6" aria-hidden />
          </span>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-wide text-primary">
              {hub.eyebrow}
            </p>
            <h1 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              {hub.title}
            </h1>
          </div>
        </div>
        <p className="max-w-2xl text-base font-medium leading-relaxed">
          {hub.tagline}
        </p>
        <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground">
          {hub.intro}
        </p>
      </Reveal>

      {/* Outcomes */}
      <Reveal mode="mount" className="mt-8">
        <div className="rounded-2xl border bg-secondary/30 p-5 sm:p-6">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-foreground/70">
            What you will be able to do
          </h2>
          <ul className="mt-3 grid gap-2.5 sm:grid-cols-2">
            {hub.outcomes.map((outcome) => (
              <li key={outcome} className="flex items-start gap-2.5 text-sm">
                <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-success" aria-hidden />
                <span className="leading-snug">{outcome}</span>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>

      {/* Featured */}
      {featured.length > 0 ? (
        <section aria-labelledby="hub-featured" className="mt-10">
          <h2 id="hub-featured" className="text-xl font-semibold">
            Featured in {hub.title}
          </h2>
          <StaggerGroup className="mt-4 grid gap-4 md:grid-cols-2">
            {featured.map((item, i) => (
              <StaggerItem key={item.id} index={i} className="h-full">
                {item.format === "path" ? <PathCard item={item} /> : <CatalogueCard item={item} />}
              </StaggerItem>
            ))}
          </StaggerGroup>
        </section>
      ) : null}

      {/* Description */}
      <Reveal mode="mount" className="mt-10">
        <h2 className="text-xl font-semibold">About this category</h2>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
          {hub.description}
        </p>
      </Reveal>

      {/* Chapters & lessons */}
      {chapters.length > 0 ? (
        <section aria-labelledby="hub-chapters" className="mt-10">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h2 id="hub-chapters" className="text-xl font-semibold">
              Chapters &amp; lessons
            </h2>
            <p className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
              <Layers className="size-3.5" aria-hidden />
              {chapters.length} chapters ·{" "}
              {chapters.reduce((sum, c) => sum + c.lessonCount, 0)} items
            </p>
          </div>
          <ChapterList chapters={chapters} />
        </section>
      ) : null}

      {/* Practice activities */}
      {practice.length > 0 ? (
        <section aria-labelledby="hub-practice" className="mt-10">
          <h2 id="hub-practice" className="text-xl font-semibold">
            Practice activities
          </h2>
          <StaggerGroup className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {practice.slice(0, 6).map((item, i) => (
              <StaggerItem key={item.id} index={i} className="h-full">
                <CatalogueCard item={item} />
              </StaggerItem>
            ))}
          </StaggerGroup>
        </section>
      ) : null}

      {/* Recommended resources */}
      {resources.length > 0 ? (
        <section aria-labelledby="hub-resources" className="mt-10">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h2 id="hub-resources" className="text-xl font-semibold">
              Recommended resources
            </h2>
            <Badge variant="secondary">{resources.length} items</Badge>
          </div>
          <StaggerGroup className="mt-4 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
            {resources.slice(0, 9).map((item, i) => (
              <StaggerItem key={item.id} index={Math.min(i, 8)}>
                <CatalogueCard item={item} />
              </StaggerItem>
            ))}
          </StaggerGroup>
          {resources.length > 9 ? (
            <Link
              href="#/courses"
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
            >
              Browse all {resources.length} resources in the catalogue
              <ArrowRight className="size-4" aria-hidden />
            </Link>
          ) : null}
        </section>
      ) : null}
    </div>
  );
}
