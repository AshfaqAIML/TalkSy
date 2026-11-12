"use client";

/**
 * Learner side of the CMS: course catalogue → course outline (with
 * prerequisite locks) → published lesson player (blocks + exercises +
 * assignments + server-verified completion).
 */

import { useEffect, useMemo, useState } from "react";
import {
  ArrowLeft,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Clock,
  Lock,
  GraduationCap,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { toast } from "sonner";
import { cmsLearnerApi } from "@/lib/client/api";
import { CmsBlockView } from "@/components/app/cms/CmsBlockViews";
import type {
  CmsCatalogueCourseDto,
  CmsLearnerCourseDto,
  CmsLearnerLessonDto,
} from "@/data/cms/types";
import type { SafeExercise } from "@/data/curriculum/types";
import { cn } from "@/lib/utils";

// ---------------------------------------------------------------------------
// Catalogue
// ---------------------------------------------------------------------------

export function CoursesCatalogueView({ navigate }: { navigate: (to: { name: "course"; slug: string }) => void }) {
  const [courses, setCourses] = useState<CmsCatalogueCourseDto[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    void (async () => {
      const res = await cmsLearnerApi.catalogue();
      if (res.ok) setCourses(res.data.courses);
      else setError(res.error);
    })();
  }, []);

  const enrol = async (slug: string) => {
    const res = await cmsLearnerApi.enrol(slug);
    if (res.ok) {
      toast.success("You are enrolled. Have fun!");
      navigate({ name: "course", slug });
    } else toast.error(res.error);
  };

  return (
    <div className="mx-auto flex max-w-4xl flex-col gap-6 px-4 py-10 sm:px-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Courses</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Structured courses made by our teaching team. Enrol to track your progress.
        </p>
      </div>
      {error ? <p className="text-sm text-destructive">{error}</p> : null}
      {!courses ? (
        <p className="py-10 text-center text-sm text-muted-foreground">Loading courses…</p>
      ) : courses.length === 0 ? (
        <p className="py-10 text-center text-sm text-muted-foreground">
          No courses are published yet. Check back soon!
        </p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2">
          {courses.map((c) => (
            <Card key={c.slug} className="flex flex-col">
              <CardContent className="flex flex-1 flex-col gap-2 p-5">
                <div className="flex items-center gap-2">
                  <GraduationCap className="size-4 text-primary" aria-hidden />
                  {c.levelName ? <Badge variant="secondary">{c.levelName}</Badge> : null}
                </div>
                <h2 className="text-lg font-bold">{c.title}</h2>
                <p className="flex-1 text-sm text-muted-foreground">{c.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">
                    {c.lessonCount} lessons · {c.learnerCount} learners
                  </span>
                  {c.enrolled ? (
                    <Button size="sm" onClick={() => navigate({ name: "course", slug: c.slug })}>
                      Continue
                    </Button>
                  ) : (
                    <Button size="sm" variant="outline" onClick={() => enrol(c.slug)}>
                      Enrol
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Course outline
// ---------------------------------------------------------------------------

export function CourseOutlineView({
  slug,
  navigate,
}: {
  slug: string;
  navigate: (to: { name: "course-lesson"; slug: string } | { name: "courses" }) => void;
}) {
  const [course, setCourse] = useState<CmsLearnerCourseDto | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [reloadKey, setReloadKey] = useState(0);

  useEffect(() => {
    let active = true;
    (async () => {
      const res = await cmsLearnerApi.course(slug);
      if (!active) return;
      if (res.ok) setCourse(res.data);
      else setError(res.error);
    })();
    return () => {
      active = false;
    };
  }, [slug, reloadKey]);

  const reload = () => setReloadKey((k) => k + 1);

  const enrol = async () => {
    const res = await cmsLearnerApi.enrol(slug);
    if (res.ok) reload();
    else toast.error(res.error);
  };

  if (error) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-16 text-center">
        <p className="text-sm text-destructive">{error}</p>
        <Button className="mt-4" variant="outline" onClick={() => navigate({ name: "courses" })}>
          <ArrowLeft className="mr-1.5 size-4" /> Back to courses
        </Button>
      </div>
    );
  }
  if (!course) {
    return <p className="py-20 text-center text-sm text-muted-foreground">Loading course…</p>;
  }

  const pct = course.totalLessons > 0 ? (course.completedCount / course.totalLessons) * 100 : 0;

  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-5 px-4 py-10 sm:px-6">
      <div className="flex items-center gap-3">
        <Button variant="ghost" size="sm" onClick={() => navigate({ name: "courses" })} className="gap-1.5">
          <ArrowLeft className="size-4" /> Courses
        </Button>
        {course.levelName ? <Badge variant="secondary">{course.levelName}</Badge> : null}
      </div>
      <div>
        <h1 className="text-2xl font-bold tracking-tight">{course.title}</h1>
        <p className="mt-1 text-sm text-muted-foreground">{course.description}</p>
      </div>

      {course.enrolled ? (
        <Card>
          <CardContent className="flex flex-col gap-2 p-4">
            <div className="flex justify-between text-sm">
              <span className="font-medium">Your progress</span>
              <span className="text-muted-foreground">
                {course.completedCount} / {course.totalLessons} lessons
              </span>
            </div>
            <Progress value={pct} aria-label={`${Math.round(pct)}% complete`} />
          </CardContent>
        </Card>
      ) : (
        <Card className="border-primary/40">
          <CardContent className="flex flex-wrap items-center justify-between gap-3 p-4">
            <span className="text-sm text-muted-foreground">
              Enrol to open the lessons and track your progress.
            </span>
            <Button size="sm" onClick={enrol}>Enrol now</Button>
          </CardContent>
        </Card>
      )}

      <div className="flex flex-col gap-2">
        {course.lessons.map((l, i) => {
          const locked = l.locked && !l.completed;
          return (
            <button
              key={l.slug}
              type="button"
              disabled={locked || !course.enrolled}
              onClick={() => navigate({ name: "course-lesson", slug: l.slug })}
              className={cn(
                "flex items-center gap-3 rounded-xl border p-4 text-left transition-colors",
                locked || !course.enrolled
                  ? "cursor-not-allowed opacity-70"
                  : "hover:bg-secondary/50",
              )}
            >
              <span
                className={cn(
                  "flex size-8 shrink-0 items-center justify-center rounded-full text-sm font-bold",
                  l.completed
                    ? "bg-emerald-600 text-white"
                    : l.inProgress
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary",
                )}
                aria-hidden
              >
                {l.completed ? <CheckCircle2 className="size-4" /> : i + 1}
              </span>
              <span className="flex min-w-0 flex-1 flex-col">
                <span className="font-medium">{l.title}</span>
                <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Clock className="size-3" aria-hidden /> {l.estimatedMinutes} min
                  {l.completed ? " · completed" : l.inProgress ? " · in progress" : ""}
                </span>
                {locked && l.lockedBy.length > 0 ? (
                  <span className="mt-1 flex items-center gap-1 text-xs text-amber-700">
                    <Lock className="size-3" aria-hidden /> Complete “{l.lockedBy[0].title}” first
                  </span>
                ) : null}
              </span>
              {locked ? <Lock className="size-4 text-muted-foreground" aria-hidden /> : null}
            </button>
          );
        })}
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Lesson player (published snapshot)
// ---------------------------------------------------------------------------

export function CmsLessonPlayerView({
  slug,
  navigate,
}: {
  slug: string;
  navigate: (
    to:
      | { name: "courses" }
      | { name: "course"; slug: string }
      | { name: "course-lesson"; slug: string },
  ) => void;
}) {
  const [lesson, setLesson] = useState<CmsLearnerLessonDto | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [missing, setMissing] = useState<{ slug: string; title: string }[]>([]);
  const [completing, setCompleting] = useState(false);
  const [reloadKey, setReloadKey] = useState(0);

  useEffect(() => {
    void (async () => {
      const res = await cmsLearnerApi.lesson(slug);
      if (res.ok) {
        setLesson(res.data);
        setMissing([]);
      } else {
        setError(res.error);
        setMissing([]);
      }
    })();
  }, [slug, reloadKey]);

  const exercisesById = useMemo(() => {
    const map: Record<string, SafeExercise> = {};
    for (const ex of lesson?.exercises ?? []) map[ex.id] = ex;
    return map;
  }, [lesson]);

  const complete = async () => {
    setCompleting(true);
    const res = await cmsLearnerApi.completeLesson(slug);
    setCompleting(false);
    if (res.ok) {
      toast.success("Lesson completed. Well done!");
      setReloadKey((k) => k + 1);
    } else toast.error(res.error);
  };

  if (error) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-16 text-center">
        <p className="text-sm text-destructive">{error}</p>
        {missing.length > 0 ? (
          <p className="mt-2 text-sm text-muted-foreground">
            Finish “{missing[0].title}” first.
          </p>
        ) : null}
        <div className="mt-4 flex justify-center gap-2">
          {lesson ? (
            <Button
              variant="outline"
              onClick={() => navigate({ name: "course", slug: lesson.courseSlug })}
            >
              <ArrowLeft className="mr-1.5 size-4" /> Back to course
            </Button>
          ) : (
            <Button variant="outline" onClick={() => navigate({ name: "courses" })}>
              <ArrowLeft className="mr-1.5 size-4" /> Back to courses
            </Button>
          )}
        </div>
      </div>
    );
  }
  if (!lesson) {
    return <p className="py-20 text-center text-sm text-muted-foreground">Loading lesson…</p>;
  }

  const completed = lesson.progress.status === "completed";

  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-6 px-4 py-10 sm:px-6">
      {/* Header */}
      <div className="flex flex-wrap items-center gap-3">
        <Button
          variant="ghost"
          size="sm"
          className="gap-1.5"
          onClick={() => navigate({ name: "course", slug: lesson.courseSlug })}
        >
          <ArrowLeft className="size-4" /> {lesson.courseTitle}
        </Button>
        {completed ? <Badge className="bg-emerald-600">Completed</Badge> : null}
      </div>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-primary">{lesson.unitTitle}</p>
        <h1 className="text-2xl font-bold tracking-tight">{lesson.title}</h1>
        <p className="mt-1 text-sm text-muted-foreground">{lesson.description}</p>
      </div>

      {/* Objectives */}
      {lesson.objectives.length > 0 ? (
        <Card className="bg-secondary/40">
          <CardContent className="p-4 sm:p-5">
            <p className="mb-2 text-sm font-semibold">In this lesson you will learn to:</p>
            <ul className="list-disc pl-5 text-sm">
              {lesson.objectives.map((o, i) => (
                <li key={i}>{o}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ) : null}

      {/* Blocks */}
      <div className="flex flex-col gap-6">
        {lesson.blocks.map((b) => (
          <CmsBlockView
            key={b.id}
            block={{ ...b.block, id: b.id }}
            mode="learner"
            lessonSlug={lesson.slug}
            exercisesById={exercisesById}
            submittedBlockIds={lesson.submittedBlockIds}
            onSubmitted={() => setReloadKey((k) => k + 1)}
          />
        ))}
      </div>

      {/* Footer: complete + prev/next */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-t pt-4">
        {lesson.prevLessonSlug ? (
          <Button
            variant="outline"
            size="sm"
            className="gap-1.5"
            onClick={() => navigate({ name: "course-lesson", slug: lesson.prevLessonSlug! })}
          >
            <ChevronLeft className="size-4" /> Previous
          </Button>
        ) : (
          <span />
        )}
        {completed ? (
          lesson.nextLessonSlug ? (
            <Button size="sm" className="gap-1.5" onClick={() => navigate({ name: "course-lesson", slug: lesson.nextLessonSlug! })}>
              Next lesson <ChevronRight className="size-4" />
            </Button>
          ) : (
            <Button size="sm" className="gap-1.5" onClick={() => navigate({ name: "course", slug: lesson.courseSlug })}>
              Back to course <ChevronRight className="size-4" />
            </Button>
          )
        ) : (
          <Button onClick={complete} disabled={completing} className="gap-1.5">
            <CheckCircle2 className="size-4" />
            {completing ? "Checking…" : "Mark lesson complete"}
          </Button>
        )}
      </div>
    </div>
  );
}
