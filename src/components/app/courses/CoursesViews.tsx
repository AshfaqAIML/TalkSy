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
  Sparkles,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Skeleton, SkeletonListRow, SkeletonText } from "@/components/ui/skeleton";
import { CompactLessonCard } from "@/components/ui/cards";
import { toast } from "sonner";
import { cmsLearnerApi } from "@/lib/client/api";
import { useAppStore } from "@/lib/client/store";
import { PageBreadcrumbs } from "@/components/site/Breadcrumbs";
import { CmsBlockView } from "@/components/app/cms/CmsBlockViews";
import { REVIEW_STATUS_LABEL } from "@/data/cms/types";
import type {
  CmsCatalogueCourseDto,
  CmsLearnerCourseDto,
  CmsLearnerLessonDto,
} from "@/data/cms/types";
import type { SafeExercise } from "@/data/curriculum/types";
import { cn } from "@/lib/utils";

// ---------------------------------------------------------------------------
// Course outline
// ---------------------------------------------------------------------------

export function CourseOutlineView({
  slug,
  navigate,
}: {
  slug: string;
  navigate: (to: { name: "course-lesson"; slug: string } | { name: "courses" } | { name: "login" }) => void;
}) {
  const user = useAppStore((s) => s.user);
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
    if (!user) {
      // Anonymous visitors: enrolment needs an account — send them to the
      // login form (which offers registration) instead of a bare 401 toast.
      navigate({ name: "login" });
      return;
    }
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
    return (
      <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6" aria-busy="true">
        <span className="sr-only" role="status">Loading course</span>
        <Skeleton className="h-8 w-40" />
        <Skeleton className="mt-4 h-8 w-2/3" />
        <Skeleton className="mt-2 h-4 w-1/2" />
        <Skeleton className="mt-6 h-20 rounded-xl" />
        <div className="mt-6 flex flex-col gap-2">
          {[0, 1, 2, 3].map((i) => (
            <SkeletonListRow key={i} />
          ))}
        </div>
      </div>
    );
  }

  const pct = course.totalLessons > 0 ? (course.completedCount / course.totalLessons) * 100 : 0;

  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-5 px-4 py-10 sm:px-6">
      <div className="flex flex-wrap items-center gap-3">
        <PageBreadcrumbs items={[{ label: "Courses", href: "#/courses" }, { label: course.title }]} />
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
              {user
                ? "Enrol to open the lessons and track your progress."
                : "Create a free account to enrol, open the lessons and track your progress."}
            </span>
            <Button size="sm" onClick={enrol}>
              {user ? "Enrol now" : "Sign up free to enrol"}
            </Button>
          </CardContent>
        </Card>
      )}

      {/* Lessons grouped by chapter (CMS unit) — large programmes stay navigable. */}
      <div className="stagger-in flex flex-col gap-4">
        {Object.entries(
          course.lessons.reduce<Record<string, typeof course.lessons>>((groups, lesson) => {
            const key = `${String(lesson.unitOrder).padStart(2, "0")}|${lesson.unitTitle}`;
            (groups[key] ??= []).push(lesson);
            return groups;
          }, {}),
        )
          .sort(([a], [b]) => a.localeCompare(b))
          .map(([key, lessons]) => {
            const unitTitle = key.split("|").slice(1).join("|");
            return (
              <section key={key} className="flex flex-col gap-2">
                <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                  {unitTitle}
                  <span className="ml-2 font-normal normal-case text-muted-foreground/70">
                    {lessons.filter((l) => l.completed).length}/{lessons.length}
                  </span>
                </h2>
                {lessons.map((l, i) => {
                  const locked = l.locked && !l.completed;
                  const status = l.completed
                    ? "completed"
                    : l.inProgress
                      ? "in-progress"
                      : "not-started";
                  return (
                    <CompactLessonCard
                      key={l.slug}
                      index={i + 1}
                      title={l.title}
                      estimatedMinutes={l.estimatedMinutes}
                      status={status}
                      lockedReason={
                        locked && l.lockedBy.length > 0
                          ? `Complete “${l.lockedBy[0].title}” first`
                          : !course.enrolled
                            ? "Enrol to open lessons"
                            : undefined
                      }
                      disabled={!course.enrolled}
                      onClick={() => navigate({ name: "course-lesson", slug: l.slug })}
                    />
                  );
                })}
              </section>
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
      | { name: "course-lesson"; slug: string }
      | { name: "login" },
  ) => void;
}) {
  const user = useAppStore((s) => s.user);
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
    // Anonymous visitor deep-linking a lesson: the outline is public but
    // playback needs an account — offer a real login CTA, not a bare 401.
    const needsAuth = !user && /log ?in/i.test(error);
    return (
      <div className="mx-auto max-w-2xl px-4 py-16 text-center">
        <p className="text-sm text-destructive">{error}</p>
        {missing.length > 0 ? (
          <p className="mt-2 text-sm text-muted-foreground">
            Finish “{missing[0].title}” first.
          </p>
        ) : null}
        {needsAuth ? (
          <p className="mt-2 text-sm text-muted-foreground">
            Create a free account to enrol and open this lesson.
          </p>
        ) : null}
        <div className="mt-4 flex flex-wrap justify-center gap-2">
          {needsAuth ? (
            <Button onClick={() => navigate({ name: "login" })}>Log in or sign up</Button>
          ) : null}
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
    return (
      <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6" aria-busy="true">
        <span className="sr-only" role="status">Loading lesson</span>
        <Skeleton className="h-8 w-48" />
        <Skeleton className="mt-4 h-8 w-2/3" />
        <Skeleton className="mt-6 h-32 rounded-xl" />
        <div className="mt-6 space-y-4">
          <SkeletonText lines={4} />
          <SkeletonText lines={3} />
        </div>
      </div>
    );
  }

  const completed = lesson.progress.status === "completed";

  /** Honest provenance: AI-authored content is labelled as such until a
   * human reviewer promotes it. */
  const reviewBadge =
    lesson.reviewStatus === "ai-reviewed"
      ? {
          label: `${REVIEW_STATUS_LABEL[lesson.reviewStatus]} content`,
          title:
            "This lesson was written and checked with AI assistance and has not yet completed human review.",
          className: "border-border bg-secondary text-muted-foreground",
        }
      : lesson.reviewStatus === "human-reviewed" || lesson.reviewStatus === "approved"
        ? {
            label: REVIEW_STATUS_LABEL[lesson.reviewStatus],
            title: "This lesson has passed human educational review.",
            className: "border-success/40 bg-success/10 text-success",
          }
        : null;

  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-6 px-4 py-10 sm:px-6">
      {/* Breadcrumbs: course → chapter → this lesson */}
      <div className="flex flex-wrap items-center gap-3">
        <PageBreadcrumbs
          items={[
            { label: "Courses", href: "#/courses" },
            { label: lesson.courseTitle, href: `#/course/${lesson.courseSlug}` },
            { label: lesson.unitTitle },
            { label: lesson.title },
          ]}
        />
        {completed ? <Badge className="bg-success text-success-foreground">Completed</Badge> : null}
        {reviewBadge ? (
          <Badge
            variant="outline"
            className={reviewBadge.className}
            title={reviewBadge.title}
          >
            {reviewBadge.label}
          </Badge>
        ) : null}
        <Button variant="ghost" size="sm" className="ml-auto gap-1.5" asChild>
          <a
            href={`#/tutor/lesson/programme:${lesson.slug}`}
            aria-label="Ask the tutor about this lesson"
          >
            <Sparkles className="size-4" aria-hidden />
            <span className="hidden sm:inline">Ask tutor</span>
          </a>
        </Button>
      </div>
      <div>
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
          <Button onClick={complete} loading={completing} className="gap-1.5">
            <CheckCircle2 className="size-4" />
            {completing ? "Checking…" : "Mark lesson complete"}
          </Button>
        )}
      </div>
    </div>
  );
}
