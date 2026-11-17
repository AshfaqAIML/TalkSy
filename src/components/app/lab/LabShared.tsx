"use client";

/**
 * Shared four-skill lab UI: curriculum connection chips and the band
 * recommendation banner. Used by all four laboratories.
 */

import { ArrowRight, BookOpen, GraduationCap, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { LabCurriculumLinkDto, LabBandRecommendationDto } from "@/lib/client/api";

/** Chapter + lesson chips linking into the Core English Programme. */
export function CurriculumLinks({
  links,
  navigate,
  compact = false,
}: {
  links: LabCurriculumLinkDto[];
  navigate: (route: { name: "course-lesson"; slug: string }) => void;
  compact?: boolean;
}) {
  if (links.length === 0) return null;
  return (
    <div className={cn("rounded-xl border bg-secondary/30", compact ? "p-2.5" : "p-4")}>
      <p className="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground">
        <GraduationCap className="size-3.5 text-primary" aria-hidden />
        {compact ? "Curriculum" : "Connected curriculum lessons"}
      </p>
      <ul className={cn(compact ? "mt-1.5 space-y-1" : "mt-3 space-y-2")}>
        {links.map((link) => (
          <li key={link.lessonSlug}>
            <button
              type="button"
              onClick={() => navigate({ name: "course-lesson", slug: link.lessonSlug })}
              className="group flex w-full items-start gap-2 rounded-lg px-1.5 py-1 text-left transition-colors hover:bg-secondary/60"
            >
              <Badge variant="secondary" className="mt-0.5 shrink-0 text-[10px] font-semibold">
                {`CH-${String(link.chapterNumber).padStart(2, "0")}`}
              </Badge>
              <span className="min-w-0">
                <span className="block truncate text-xs font-medium group-hover:text-primary">
                  {link.lessonTitle}
                </span>
                {!compact ? (
                  <span className="block text-[11px] leading-snug text-muted-foreground">
                    {link.reason}
                  </span>
                ) : null}
              </span>
            </button>
          </li>
        ))}
      </ul>
      {!compact ? (
        <p className="mt-2 flex items-center gap-1 text-[11px] text-muted-foreground">
          <BookOpen className="size-3 shrink-0" aria-hidden />
          Open the lesson to study the grammar and vocabulary this activity practises.
        </p>
      ) : null}
    </div>
  );
}

/** Compact CH-XX chip row for activity cards (hover title shows the reason). */
export function CurriculumChips({ links }: { links: LabCurriculumLinkDto[] }) {
  if (links.length === 0) return null;
  return (
    <p className="mt-2.5 flex flex-wrap items-center gap-1 text-[10px] text-muted-foreground">
      <GraduationCap className="size-3 shrink-0 text-primary/70" aria-hidden />
      {links.map((link) => (
        <span
          key={link.lessonSlug}
          className="rounded-full border bg-background px-1.5 py-0.5 font-semibold"
          title={`${link.chapterTitle} · ${link.lessonTitle} — ${link.reason}`}
        >
          {`CH-${String(link.chapterNumber).padStart(2, "0")}`}
        </span>
      ))}
    </p>
  );
}

const BAND_LABELS: Record<string, string> = {
  beginner: "Beginner",
  elementary: "Elementary",
  intermediate: "Intermediate",
  advanced: "Advanced",
};

/**
 * Footer shown at the end of every lab activity: the curriculum connection
 * (full reasons) and the recommended next item in the same laboratory.
 */
export function LabActivityFooter({
  links,
  next,
  onOpenNext,
  nextLabel,
}: {
  links: LabCurriculumLinkDto[] | undefined;
  next: { slug: string; title: string } | null | undefined;
  onOpenNext: () => void;
  nextLabel: string;
}) {
  if ((links ?? []).length === 0 && !next) return null;
  return (
    <div className="mt-8 space-y-4">
      {next ? (
        <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-primary/30 bg-primary/5 p-4">
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-wide text-primary">
              {nextLabel}
            </p>
            <p className="mt-0.5 truncate font-semibold">{next.title}</p>
          </div>
          <button
            type="button"
            onClick={onOpenNext}
            className="press inline-flex shrink-0 items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Continue <ArrowRight className="size-4" aria-hidden />
          </button>
        </div>
      ) : null}
      {links && links.length > 0 ? <CurriculumLinks links={links} navigate={onNavigateNoop} /> : null}
    </div>
  );
}

// The footer only opens the next lab item; curriculum links need a real
// navigate callback, injected via a required prop on CurriculumLinks. The
// lab activity views pass their own navigate through a wrapper component.
function onNavigateNoop(route: { name: "course-lesson"; slug: string }) {
  if (typeof window !== "undefined") {
    window.location.hash = `#/course-lesson/${route.slug}`;
  }
}

/** "Recommended for you" banner + per-band completion chips. */
export function BandRecommendationBanner({
  recommendation,
}: {
  recommendation: LabBandRecommendationDto;
}) {
  const bands = recommendation.bands ?? [];
  return (
    <section
      className="mt-6 rounded-2xl border border-primary/25 bg-primary/5 p-4"
      aria-label="Recommended level"
    >
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
        <p className="flex items-center gap-1.5 text-sm font-semibold">
          <Sparkles className="size-4 text-primary" aria-hidden />
          Recommended for you: {BAND_LABELS[recommendation.recommended] ?? recommendation.recommended}
        </p>
      </div>
      <p className="mt-1 text-xs text-muted-foreground">{recommendation.note}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {bands.map((band) => {
          const isRecommended = band.band === recommendation.recommended;
          const percent = band.total > 0 ? Math.round((band.completed / band.total) * 100) : 0;
          return (
            <span
              key={band.band}
              className={cn(
                "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-medium",
                isRecommended
                  ? "border-primary bg-primary text-primary-foreground"
                  : "bg-background text-muted-foreground",
              )}
            >
              {BAND_LABELS[band.band] ?? band.band}
              <span className="tabular-nums opacity-80">{`${band.completed}/${band.total}`}</span>
              {isRecommended && percent > 0 ? (
                <span className="tabular-nums opacity-80">{`${percent}%`}</span>
              ) : null}
            </span>
          );
        })}
      </div>
    </section>
  );
}
