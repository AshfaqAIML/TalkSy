"use client";

import { useEffect, useState } from "react";
import { Bookmark, CheckCircle2, ChevronRight, Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { api, type CurriculumDto, type ProgressItem } from "@/lib/client/api";
import { useAppStore } from "@/lib/client/store";

export function LibraryView({
  onOpenLesson,
}: {
  onOpenLesson: (slug: string) => void;
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
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-3 px-4 py-24">
        <div
          className="size-10 animate-spin rounded-full border-4 border-primary/20 border-t-primary"
          role="status"
          aria-label="Loading library"
        />
        <p className="text-sm text-muted-foreground">Loading the library…</p>
      </div>
    );
  }

  if (!curriculum) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-16 text-center text-sm text-muted-foreground">
        The library could not be loaded. Please refresh.
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
      <h1 className="text-3xl font-bold tracking-tight">Learning path</h1>
      <p className="mt-1.5 text-sm text-muted-foreground">
        {curriculum.totals.lessons} beginner lessons ·{" "}
        {curriculum.totals.blockTypes} lesson block types ·{" "}
        {curriculum.totals.exerciseTypes} exercise types
      </p>

      <div className="mt-8 flex flex-col gap-10">
        {curriculum.levels.map((level) => (
          <section key={level.id} aria-labelledby={`level-${level.id}`}>
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h2 id={`level-${level.id}`} className="text-xl font-semibold">
                {level.name}
              </h2>
              <p className="text-xs text-muted-foreground">{level.tagline}</p>
            </div>
            {level.units.length === 0 ? (
              <Card className="mt-4 border-dashed">
                <CardContent className="p-5 text-sm text-muted-foreground">
                  Coming soon — we are building A2 right now.
                </CardContent>
              </Card>
            ) : (
              level.units.map((unit) => (
                <div key={unit.number} className="mt-5">
                  <div className="flex items-baseline gap-2">
                    <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                      Unit {unit.number} · {unit.title}
                    </h3>
                  </div>
                  <div className="mt-3 grid gap-4 sm:grid-cols-2">
                    {unit.lessons.map((lesson) => {
                      const item = progress[lesson.slug];
                      const done = item?.completion.completed ?? false;
                      const sectionsDone = item?.completion.sectionsDone ?? 0;
                      return (
                        <Card
                          key={lesson.slug}
                          className={cn(
                            "group transition-all hover:border-primary/50 hover:shadow-md",
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
                            <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                              <span className="inline-flex items-center gap-1">
                                <Clock className="size-3.5" aria-hidden />
                                {lesson.estimatedMinutes} min
                              </span>
                              <span>· {lesson.sectionCount} sections</span>
                              {lesson.hasAssessment ? (
                                <Badge variant="outline" className="text-[10px]">
                                  assessment
                                </Badge>
                              ) : null}
                            </div>
                            {user && sectionsDone > 0 ? (
                              <div className="flex items-center gap-2">
                                <Progress
                                  value={
                                    (sectionsDone / lesson.sectionCount) * 100
                                  }
                                  className="h-1.5 flex-1"
                                />
                                <span className="text-[11px] text-muted-foreground">
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
