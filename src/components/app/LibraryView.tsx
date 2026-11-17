"use client";

import { useEffect, useState } from "react";
import { BookOpen, Bookmark, CheckCircle2, ChevronRight, Clock, GraduationCap, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { EmptyState } from "@/components/ui/empty-state";
import { Skeleton, SkeletonCard } from "@/components/ui/skeleton";
import { FeaturedLearningCard, MetaItem, MetaRow } from "@/components/ui/cards";
import { api, type CurriculumDto, type ProgressItem } from "@/lib/client/api";
import { useAppStore } from "@/lib/client/store";
import { PageBreadcrumbs } from "@/components/site/Breadcrumbs";

export function LibraryView({
  onOpenLesson,
  level,
}: {
  onOpenLesson: (slug: string) => void;
  /** Focus one level of the path (#/library/pre-a1 …); undefined = all. */
  level?: string;
}) {
  const user = useAppStore((s) => s.user);
  const [curriculum, setCurriculum] = useState<CurriculumDto | null>(null);
  const [progress, setProgress] = useState<Record<string, ProgressItem>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    (async () => {
      const [curriculumRes, progressRes] = await Promise.all([
        api.curriculum(),
        user ? api.progress() : Promise.resolve(null),
      ]);
      if (!active) return;
      if (curriculumRes.ok) setCurriculum(curriculumRes.data);
      if (progressRes?.ok) {
        setProgress(
          Object.fromEntries(
            progressRes.data.items.map((item) => [item.lessonSlug, item]),
          ),
        );
      }
      setLoading(false);
    })();
    return () => {
      active = false;
    };
  }, [user]);

  if (loading) {
    return (
      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6" aria-busy="true">
        <span className="sr-only" role="status">Loading the library</span>
        <Skeleton className="h-9 w-56" />
        <Skeleton className="mt-2 h-5 w-80" />
        <Skeleton className="mt-8 h-44 rounded-2xl" />
        <div className="mt-10 space-y-3">
          <Skeleton className="h-6 w-40" />
          <div className="grid gap-4 sm:grid-cols-2">
            {[0, 1, 2, 3].map((i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (!curriculum) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-16">
        <EmptyState
          icon={BookOpen}
          title="The library could not be loaded"
          description="Please refresh the page to try again."
        />
      </div>
    );
  }

  /* Featured card — the learner's actual next step, computed from real
     progress (in-progress lesson, else next uncompleted, else nothing). */
  const flatLessons = curriculum.levels.flatMap((level) =>
    level.units.flatMap((unit) =>
      unit.lessons.map((lesson) => ({ lesson, levelName: level.name })),
    ),
  );
  const inProgress = flatLessons.find(({ lesson }) => {
    const item = progress[lesson.slug];
    return item && !item.completion.completed && (item.completion.sectionsDone ?? 0) > 0;
  });
  const nextUp =
    inProgress ??
    flatLessons.find(({ lesson }) => !progress[lesson.slug]?.completion.completed);
  const featured = user ? nextUp : flatLessons[0];

  // Level focus (#/library/<level>): show one level plus a way back.
  const focusedLevel =
    level && curriculum.levels.some((l) => l.id === level)
      ? curriculum.levels.find((l) => l.id === level)!
      : null;
  const visibleLevels = focusedLevel ? [focusedLevel] : curriculum.levels;

  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
      {focusedLevel ? (
        <PageBreadcrumbs
          items={[
            { label: "Learning path", href: "#/library" },
            { label: focusedLevel.name },
          ]}
          className="mb-4"
        />
      ) : null}
      <h1 className="text-3xl font-bold tracking-tight">
        {focusedLevel ? focusedLevel.name : "Learning path"}
      </h1>
      <p className="mt-1.5 text-sm text-muted-foreground">
        {focusedLevel
          ? focusedLevel.tagline
          : `${curriculum.totals.lessons} beginner lessons · ${curriculum.totals.blockTypes} lesson block types · ${curriculum.totals.exerciseTypes} exercise types`}
      </p>

      {/* Featured: continue / start learning */}
      {featured ? (
        <div className="mt-8">
          <FeaturedLearningCard
            eyebrow={
              inProgress
                ? "Continue where you left off"
                : user
                  ? "Your next lesson"
                  : "Start your first lesson"
            }
            title={featured.lesson.title}
            description={featured.lesson.description}
            icon={inProgress ? BookOpen : Sparkles}
            cta={inProgress ? "Continue lesson" : "Start lesson"}
            onClick={() => onOpenLesson(featured.lesson.slug)}
            meta={
              <>
                <MetaItem>{featured.levelName}</MetaItem>
                <MetaItem icon={Clock}>{featured.lesson.estimatedMinutes} min</MetaItem>
                <MetaItem>{featured.lesson.sectionCount} sections</MetaItem>
                {inProgress ? (
                  <MetaItem>
                    {progress[featured.lesson.slug]?.completion.sectionsDone ?? 0}/
                    {featured.lesson.sectionCount} done
                  </MetaItem>
                ) : null}
              </>
            }
          />
        </div>
      ) : null}

      <div className="mt-10 flex flex-col gap-10">
        {visibleLevels.map((level) => (
          <section key={level.id} aria-labelledby={`level-${level.id}`}>
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h2 id={`level-${level.id}`} className="text-xl font-semibold">
                {level.name}
              </h2>
              <p className="text-xs text-muted-foreground">{level.tagline}</p>
            </div>
            {level.units.length === 0 ? (
              <div className="mt-4">
                <EmptyState
                  icon={GraduationCap}
                  title="A2 lives in the Core English Programme"
                  description="The complete A2 curriculum — past and future tenses, present perfect, modals, comparisons and connected writing — is taught in the 56-chapter programme."
                  className="py-8"
                />
                <div className="mt-2 flex justify-center">
                  <Button asChild variant="outline" size="sm">
                    <a href="#/courses/level/a2">
                      Open A2 — Elementary English (10 chapters)
                      <ChevronRight className="size-4" aria-hidden />
                    </a>
                  </Button>
                </div>
              </div>
            ) : (
              level.units.map((unit) => (
                <div key={unit.number} className="mt-5">
                  <div className="flex items-baseline gap-2">
                    <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                      Unit {unit.number} · {unit.title}
                    </h3>
                  </div>
                  <div className="stagger-in mt-3 grid gap-4 sm:grid-cols-2">
                    {unit.lessons.map((lesson, i) => {
                      const item = progress[lesson.slug];
                      const done = item?.completion.completed ?? false;
                      const sectionsDone = item?.completion.sectionsDone ?? 0;
                      return (
                        <Card
                          key={lesson.slug}
                          style={{ "--stagger-i": i } as React.CSSProperties}
                          className={cn(
                            "card-interactive hover:border-primary/50 hover:shadow-md",
                            done && "border-primary/40",
                          )}
                        >
                          <CardContent className="flex flex-col gap-3 p-5">
                            <div className="flex items-start justify-between gap-2">
                              <h4 className="font-semibold leading-snug">
                                {lesson.title}
                              </h4>
                              {item?.bookmarked ? (
                                <Bookmark
                                  className="size-4 shrink-0 fill-current text-primary"
                                  aria-label="Bookmarked"
                                />
                              ) : null}
                            </div>
                            <p className="text-sm leading-relaxed text-muted-foreground">
                              {lesson.description}
                            </p>
                            <MetaRow>
                              <MetaItem icon={Clock}>{lesson.estimatedMinutes} min</MetaItem>
                              <MetaItem>{lesson.sectionCount} sections</MetaItem>
                              {lesson.hasAssessment ? (
                                <Badge variant="outline" className="text-[10px]">
                                  assessment
                                </Badge>
                              ) : null}
                            </MetaRow>
                            {user && sectionsDone > 0 ? (
                              <div className="flex items-center gap-2">
                                <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-primary/15">
                                  <div
                                    className="h-full rounded-full bg-primary transition-transform duration-500 ease-out"
                                    style={{
                                      transform: `scaleX(${Math.min(sectionsDone / lesson.sectionCount, 1)})`,
                                      transformOrigin: "left",
                                    }}
                                  />
                                </div>
                                <span className="text-[11px] tabular-nums text-muted-foreground">
                                  {sectionsDone}/{lesson.sectionCount}
                                </span>
                              </div>
                            ) : null}
                            <Button
                              variant={done ? "outline" : "default"}
                              size="sm"
                              className="mt-1 justify-between"
                              onClick={() => onOpenLesson(lesson.slug)}
                            >
                              <span className="inline-flex items-center gap-1.5">
                                {done ? (
                                  <>
                                    <CheckCircle2 className="size-4" aria-hidden />
                                    Review lesson
                                  </>
                                ) : sectionsDone > 0 ? (
                                  "Continue lesson"
                                ) : (
                                  "Start lesson"
                                )}
                              </span>
                              <ChevronRight className="size-4" aria-hidden />
                            </Button>
                          </CardContent>
                        </Card>
                      );
                    })}
                  </div>
                </div>
              ))
            )}
          </section>
        ))}
      </div>
    </div>
  );
}
