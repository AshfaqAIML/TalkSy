"use client";

/**
 * The course discovery catalogue (PROMPT 32) — replaces the old CMS-only
 * "Courses" page. Seven content formats, each with its own presentation,
 * real metadata, six filters and computed recommendations. All data comes
 * from /api/catalogue — there is no duplicated frontend content here.
 */

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Compass,
  Search,
  Sparkles,
  SearchX,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { EmptyState } from "@/components/ui/empty-state";
import { Skeleton, SkeletonCard } from "@/components/ui/skeleton";
import { StaggerGroup, StaggerItem } from "@/components/motion";
import { catalogueApi } from "@/lib/client/api";
import { useAppStore } from "@/lib/client/store";
import { cn } from "@/lib/utils";
import {
  CATALOGUE_FORMAT_ORDER,
  FORMAT_LABELS,
  type CatalogueItem,
  type CataloguePayload,
  type RecommendationCard,
} from "@/lib/catalogue/types";
import {
  CatalogueCard,
  CourseCatalogueCard,
  CompletionPill,
  PathCard,
} from "./CatalogueCards";
import {
  EMPTY_FILTERS,
  FilterBar,
  filterItems,
  type CatalogueFilters,
} from "./FilterBar";

/** #/courses/level/<slug> presets from the navigation. */
const LEVEL_PRESETS: Record<string, { level: string; label: string }> = {
  "a1-beginner": { level: "A1", label: "Beginner courses" },
  "ielts-preparation": { level: "B1+", label: "Exam preparation" },
  "pre-a1": { level: "Pre-A1", label: "English from Zero — Pre-A1" },
  "a1": { level: "A1", label: "Beginner English — A1" },
  "a2": { level: "A2", label: "Elementary English — A2" },
  "b1": { level: "B1", label: "Intermediate English — B1" },
  "b2": { level: "B2", label: "Upper-Intermediate English — B2" },
  "c1": { level: "C1", label: "Advanced Communication — C1" },
};

function formatDuration(minutes: number): string {
  if (minutes < 60) return `${minutes} min`;
  const hours = Math.floor(minutes / 60);
  const rest = minutes % 60;
  return rest === 0 ? `${hours} hr` : `${hours} hr ${rest} min`;
}

function RecommendationStrip({
  cards,
  anonymous,
}: {
  cards: RecommendationCard[];
  anonymous: boolean;
}) {
  if (cards.length === 0) return null;
  return (
    <section aria-labelledby="recommendations-heading" className="mt-8">
      <div className="flex items-baseline justify-between gap-2">
        <h2 id="recommendations-heading" className="text-xl font-semibold">
          {anonymous ? "Where to start" : "Recommended for you"}
        </h2>
        <p className="text-xs text-muted-foreground">
          {anonymous
            ? "Honest starting points — no popularity scores"
            : "From your level, progress and measured weaknesses"}
        </p>
      </div>
      <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
        {cards.map((card) => (
          <Link
            key={card.id}
            href={card.href}
            className="card-interactive group flex flex-col gap-2 rounded-xl border bg-card p-4 shadow-xs transition-all hover:border-primary/40 hover:shadow-md"
          >
            <p className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wide text-primary">
              <Sparkles className="size-3.5" aria-hidden /> {card.reason}
            </p>
            <p className="text-sm font-semibold leading-snug">{card.title}</p>
            <p className="line-clamp-2 text-xs leading-relaxed text-muted-foreground">
              {card.description}
            </p>
            <p className="mt-auto inline-flex items-center gap-2 text-xs text-muted-foreground">
              {card.level ? <Badge variant="secondary">{card.level}</Badge> : null}
              <span className="ml-auto inline-flex items-center gap-1 font-medium text-primary">
                Open <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden />
              </span>
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}

function CompletedSection({ payload }: { payload: CataloguePayload }) {
  const completed = payload.completed;
  if (!completed) return null;
  const total = completed.lessons.length + completed.courses.length;
  if (total === 0) {
    return (
      <section className="mt-12 rounded-xl border bg-secondary/30 p-5">
        <h2 className="text-lg font-semibold">Completed learning</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Nothing finished yet — completed lessons and courses will collect here for
          review. Your verified progress lives in{" "}
          <Link href="#/progress" className="font-medium text-primary hover:underline">
            My Progress
          </Link>
          .
        </p>
      </section>
    );
  }
  return (
    <section className="mt-12 rounded-xl border bg-secondary/30 p-5">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h2 className="text-lg font-semibold">Completed learning</h2>
        <p className="text-xs text-muted-foreground">
          {completed.lessons.length} lessons · {completed.courses.length} courses — open
          any of them again to review
        </p>
      </div>
      {completed.courses.length > 0 ? (
        <ul className="mt-4 flex flex-col gap-2">
          {completed.courses.map((course) => (
            <li key={course.slug}>
              <Link
                href={course.href}
                className="flex items-center gap-3 rounded-lg border bg-card p-3 transition-colors hover:border-primary/40"
              >
                <span className="text-sm font-semibold">{course.title}</span>
                <Badge className="gap-1 bg-success text-success-foreground">
                  {course.completedCount}/{course.totalLessons} lessons
                </Badge>
                <ArrowRight className="ml-auto size-4 text-muted-foreground" aria-hidden />
              </Link>
            </li>
          ))}
        </ul>
      ) : null}
      {completed.lessons.length > 0 ? (
        <div className="mt-4 flex flex-wrap gap-2">
          {completed.lessons.slice(0, 12).map((lesson) => (
            <Link
              key={lesson.slug}
              href={lesson.href}
              title={`${lesson.title} — ${lesson.source}`}
              className="inline-flex max-w-full items-center gap-2 rounded-full border bg-card px-3 py-1.5 text-xs font-medium transition-colors hover:border-primary/40"
            >
              <span className="min-w-0 truncate">{lesson.title}</span>
              <span className="shrink-0 text-muted-foreground">{lesson.source}</span>
            </Link>
          ))}
          {completed.lessons.length > 12 ? (
            <Link
              href="#/progress"
              className="inline-flex items-center gap-1 rounded-full border border-dashed px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              +{completed.lessons.length - 12} more in My Progress
            </Link>
          ) : null}
        </div>
      ) : null}
    </section>
  );
}

export function CatalogueView({
  navigate,
  levelPreset,
}: {
  navigate: (to: { name: "login" } | { name: "register" }) => void;
  /** From #/courses/level/<slug>. */
  levelPreset?: string;
}) {
  const user = useAppStore((s) => s.user);
  const userLoaded = useAppStore((s) => s.userLoaded);
  const [payload, setPayload] = useState<CataloguePayload | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [recommendations, setRecommendations] = useState<RecommendationCard[] | null>(null);
  const [anonymousRecs, setAnonymousRecs] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    let active = true;
    void (async () => {
      const res = await catalogueApi.catalogue();
      if (!active) return;
      if (res.ok) setPayload(res.data);
      else setError(res.error);
    })();
    return () => {
      active = false;
    };
  }, [user]);

  useEffect(() => {
    let active = true;
    void (async () => {
      const res = await catalogueApi.recommendations();
      if (!active) return;
      if (res.ok) {
        setRecommendations(res.data.cards);
        setAnonymousRecs(res.data.anonymous);
      }
    })();
    return () => {
      active = false;
    };
  }, [user]);

  // Navigation preset (#/courses/level/<slug>): applied as the initial
  // filter state — no effect, no cascading render.
  const preset = levelPreset ? LEVEL_PRESETS[levelPreset] : undefined;
  const [filters, setFilters] = useState<CatalogueFilters>(
    preset ? { ...EMPTY_FILTERS, level: preset.level } : { ...EMPTY_FILTERS },
  );

  const filtered = useMemo(() => {
    if (!payload) return [];
    const base = filterItems(payload.items, filters, Boolean(user));
    const trimmed = query.trim().toLowerCase();
    if (!trimmed) return base;
    return base.filter(
      (item) =>
        item.title.toLowerCase().includes(trimmed) ||
        item.description.toLowerCase().includes(trimmed) ||
        (item.subtitle ?? "").toLowerCase().includes(trimmed),
    );
  }, [payload, filters, query, user]);

  const byFormat = useMemo(() => {
    const map = new Map<string, CatalogueItem[]>();
    for (const format of CATALOGUE_FORMAT_ORDER) map.set(format, []);
    for (const item of filtered) {
      if (item.featured) continue; // featured items render inside their format's lead slot
      map.get(item.format)?.push(item);
    }
    return map;
  }, [filtered]);

  const presetLabel = levelPreset ? LEVEL_PRESETS[levelPreset]?.label : undefined;

  if (error) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-16">
        <EmptyState
          icon={Compass}
          title="The catalogue could not be loaded"
          description={error}
        />
      </div>
    );
  }

  if (!payload) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6" aria-busy="true">
        <span className="sr-only" role="status">Loading the catalogue</span>
        <Skeleton className="h-9 w-64" />
        <Skeleton className="mt-2 h-5 w-full max-w-xl" />
        <div className="mt-6"><Skeleton className="h-24 rounded-xl" /></div>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {[0, 1, 2, 3].map((i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      </div>
    );
  }

  const pathItems = payload.items.filter((i) => i.format === "path");
  const featuredPaths = pathItems.filter((i) => i.featured);

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      {/* Hero */}
      <div className="flex flex-col gap-3">
        <p className="inline-flex items-center gap-2 self-start rounded-full border border-primary/25 bg-primary/5 px-3.5 py-1.5 text-xs font-medium text-primary">
          <Compass className="size-3.5" aria-hidden /> Course discovery
        </p>
        <h1 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
          {presetLabel ?? "Find your next step in English"}
        </h1>
        <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Every learning format on TalkSy in one catalogue: long-form paths,
          complete courses, short lessons, reference guides, practice labs and
          conversation simulators — {payload.items.length} items, all real,
          all tracked when you sign in.
        </p>
      </div>

      {/* Recommendations */}
      {recommendations !== null ? (
        <RecommendationStrip cards={recommendations} anonymous={anonymousRecs} />
      ) : (
        <div className="mt-8" aria-busy="true">
          <span className="sr-only" role="status">Loading recommendations</span>
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {[0, 1, 2].map((i) => (
              <Skeleton key={i} className="h-28 rounded-xl" />
            ))}
          </div>
        </div>
      )}

      {/* Search + filters */}
      <div className="mt-10 flex flex-col gap-3">
        <div className="relative">
          <Search
            className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
            aria-hidden
          />
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search the catalogue — titles, descriptions, topics…"
            aria-label="Search the catalogue"
            className="h-10 w-full rounded-lg border bg-card pl-9 pr-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring"
          />
        </div>
        <FilterBar
          items={payload.items}
          filters={filters}
          onChange={setFilters}
          signedIn={Boolean(user)}
          resultCount={filtered.length}
          totalCount={payload.items.length}
        />
      </div>

      {/* Format sections */}
      {filtered.length === 0 ? (
        <div className="mt-10">
          <EmptyState
            icon={SearchX}
            title="Nothing matches these filters"
            description="Try clearing a filter or searching for something else — the catalogue only shows real content."
            action={
              <Button
                variant="outline"
                size="sm"
                className="mt-2"
                onClick={() => {
                  setQuery("");
                  setFilters({ ...EMPTY_FILTERS });
                }}
              >
                Clear search and filters
              </Button>
            }
          />
        </div>
      ) : (
        <div className="mt-10 flex flex-col gap-12">
          {/* A — Learning paths (featured presentation) */}
          <section aria-labelledby="format-path">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h2 id="format-path" className="text-xl font-semibold">
                {FORMAT_LABELS.path}
              </h2>
              <p className="text-xs text-muted-foreground">
                Long-form structured journeys — chapters, lessons and measured progress
              </p>
            </div>
            <StaggerGroup className="mt-4 grid gap-4 md:grid-cols-2">
              {(byFormat.get("path") ?? []).concat(featuredPaths).map((item, i) => (
                <StaggerItem key={item.id} index={i} className="h-full">
                  <PathCard item={item} />
                </StaggerItem>
              ))}
            </StaggerGroup>
          </section>

          {/* B — Complete courses */}
          <section aria-labelledby="format-course">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h2 id="format-course" className="text-xl font-semibold">
                {FORMAT_LABELS.course}
              </h2>
              <p className="text-xs text-muted-foreground">
                From our teaching team — enrol to track progress with prerequisite locks
              </p>
            </div>
            <StaggerGroup className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {(byFormat.get("course") ?? []).map((item, i) => (
                <StaggerItem key={item.id} index={i} className="h-full">
                  <CourseCatalogueCard item={item} />
                </StaggerItem>
              ))}
            </StaggerGroup>
          </section>

          {/* C — Short lessons */}
          <section aria-labelledby="format-lesson">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h2 id="format-lesson" className="text-xl font-semibold">
                {FORMAT_LABELS.lesson}
              </h2>
              <p className="text-xs text-muted-foreground">
                Focused lessons of manageable duration — one sitting each
              </p>
            </div>
            <StaggerGroup className="mt-4 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
              {(byFormat.get("lesson") ?? []).slice(0, 18).map((item, i) => (
                <StaggerItem key={item.id} index={Math.min(i, 8)}>
                  <CatalogueCard item={item} />
                </StaggerItem>
              ))}
            </StaggerGroup>
            {(byFormat.get("lesson") ?? []).length > 18 ? (
              <p className="mt-3 text-xs text-muted-foreground">
                Showing the first 18 of {byFormat.get("lesson")!.length} lessons — use
                the filters above to narrow by level, topic or duration.
              </p>
            ) : null}
          </section>

          {/* D — Grammar guides */}
          <section aria-labelledby="format-guide">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h2 id="format-guide" className="text-xl font-semibold">
                {FORMAT_LABELS.guide}
              </h2>
              <p className="text-xs text-muted-foreground">
                Reference-style resources — dip in, look it up
              </p>
            </div>
            <StaggerGroup className="mt-4 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
              {(byFormat.get("guide") ?? []).map((item, i) => (
                <StaggerItem key={item.id} index={i}>
                  <CatalogueCard item={item} />
                </StaggerItem>
              ))}
            </StaggerGroup>
          </section>

          {/* E — Practice labs */}
          <section aria-labelledby="format-lab">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h2 id="format-lab" className="text-xl font-semibold">
                {FORMAT_LABELS.lab}
              </h2>
              <p className="text-xs text-muted-foreground">
                Interactive activities — every attempt recorded and measured
              </p>
            </div>
            <StaggerGroup className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {(byFormat.get("lab") ?? []).map((item, i) => (
                <StaggerItem key={item.id} index={i} className="h-full">
                  <CatalogueCard item={item} />
                </StaggerItem>
              ))}
            </StaggerGroup>
          </section>

          {/* F — Conversation simulators */}
          <section aria-labelledby="format-simulator">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h2 id="format-simulator" className="text-xl font-semibold">
                {FORMAT_LABELS.simulator}
              </h2>
              <p className="text-xs text-muted-foreground">
                Practical speaking environments with an AI partner — three difficulty
                levels each
              </p>
            </div>
            <StaggerGroup className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {(byFormat.get("simulator") ?? []).map((item, i) => (
                <StaggerItem key={item.id} index={Math.min(i, 7)} className="h-full">
                  <CatalogueCard item={item} />
                </StaggerItem>
              ))}
            </StaggerGroup>
          </section>
        </div>
      )}

      {/* G — Completed learning */}
      {userLoaded && user ? <CompletedSection payload={payload} /> : null}

      {!user ? (
        <section className="mt-12 rounded-2xl border bg-gradient-deep p-6 text-white sm:p-8">
          <h2 className="font-heading text-xl font-bold tracking-tight">
            Sign in to track everything
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-white/85">
            Completed lessons, prerequisite locks, measured weaknesses and
            recommendations computed from your real progress — a free account
            unlocks all of it.
          </p>
          <div className="mt-4 flex flex-wrap gap-2.5">
            <Button variant="secondary" size="sm" onClick={() => navigate({ name: "register" })}>
              Create a free account
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white"
              onClick={() => navigate({ name: "login" })}
            >
              Sign in
            </Button>
          </div>
        </section>
      ) : null}
    </div>
  );
}
