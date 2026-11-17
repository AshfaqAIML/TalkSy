"use client";

/**
 * The per-exam course architecture page: the exam's blueprint (sections,
 * timing, task types, scoring — straight from the active test
 * specification, never hardcoded) and the pathway phases whose steps
 * reference the common English curriculum.
 */

import { useEffect, useState } from "react";
import {
  ArrowRight,
  BookOpenCheck,
  CheckCircle2,
  ChevronRight,
  Clock,
  ExternalLink,
  GraduationCap,
  ListChecks,
  Target,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { cmsLearnerApi } from "@/lib/client/api";
import type { AppRoute } from "@/hooks/use-hash-route";
import { examApi, type ExamCard } from "@/lib/client/exam-api";
import type { PathwayDto } from "@/lib/exams/pathways";

const SECTION_TINTS: Record<string, string> = {
  listening: "text-sky-300",
  reading: "text-emerald-300",
  writing: "text-violet-300",
  speaking: "text-rose-300",
};

type AcademyCourse = {
  slug: string;
  title: string;
  description: string | null;
  lessonCount: number;
  enrolled: boolean;
};

export function ExamCourseView({
  examKey,
  variant,
  navigate,
}: {
  examKey: string;
  variant?: string;
  navigate: (route: AppRoute) => void;
}) {
  const [exam, setExam] = useState<ExamCard | null>(null);
  const [pathway, setPathway] = useState<PathwayDto | null>(null);
  const [loading, setLoading] = useState(true);
  const [academyCourses, setAcademyCourses] = useState<AcademyCourse[] | null>(null);

  const [reloadKey, setReloadKey] = useState(0);

  const academySlugs =
    examKey === "IELTS"
      ? [
          "ielts-academy-core",
          variant === "GENERAL_TRAINING" ? "ielts-academy-general-training" : "ielts-academy-academic",
        ]
      : examKey === "TOEFL_IBT"
        ? ["toefl-ibt-academy"]
        : [];

  useEffect(() => {
    void (async () => {
      if (academySlugs.length === 0) {
        setAcademyCourses([]);
        return;
      }
      const response = await cmsLearnerApi.catalogue();
      if (response.ok) {
        setAcademyCourses(
          response.data.courses
            .filter((c) => academySlugs.includes(c.slug))
            .map((c) => ({
              slug: c.slug,
              title: c.title,
              description: c.description,
              lessonCount: c.lessonCount,
              enrolled: c.enrolled,
            })),
        );
      } else {
        setAcademyCourses([]);
      }
    })();
  }, [examKey, variant ?? "", reloadKey]);

  const enrol = async (slug: string) => {
    const response = await cmsLearnerApi.enrol(slug);
    if (response.ok) {
      toast.success("Enrolled — every pathway lesson link now opens.");
      setReloadKey((key) => key + 1);
    } else {
      toast.error(response.error);
    }
  };

  useEffect(() => {
    void (async () => {
      const overview = await examApi.overview();
      if (overview.ok) {
        const match =
          overview.data.exams.find((e) => e.examKey === examKey && e.variant === (variant ?? e.variant)) ??
          overview.data.exams.find((e) => e.examKey === examKey) ??
          null;
        setExam(match);
        if (match) {
          const pathwayResponse = await examApi.pathway(match.examKey, match.variant);
          if (pathwayResponse.ok) setPathway(pathwayResponse.data.pathway);
        }
      }
      setLoading(false);
    })();
  }, [examKey, variant, reloadKey]);

  const toggleStep = async (stepId: string, completed: boolean) => {
    const response = completed
      ? await examApi.unmarkStep(stepId)
      : await examApi.markStep(stepId);
    if (response.ok) {
      setReloadKey((key) => key + 1);
    } else {
      toast.error(response.error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-[calc(100vh-8rem)] bg-slate-950 px-4 py-10">
        <div className="mx-auto max-w-5xl space-y-4">
          <Skeleton className="h-10 w-1/2 rounded-lg bg-slate-900" />
          <Skeleton className="h-40 rounded-xl bg-slate-900" />
          <Skeleton className="h-64 rounded-xl bg-slate-900" />
        </div>
      </div>
    );
  }

  if (!exam) {
    return (
      <div className="flex min-h-[calc(100vh-8rem)] flex-col items-center justify-center gap-4 bg-slate-950 px-4 text-center">
        <h2 className="text-2xl font-bold text-white">Examination not found</h2>
        <Button
          variant="outline"
          className="border-slate-700 bg-transparent text-slate-200 hover:bg-slate-900"
          onClick={() => navigate({ name: "exams" })}
        >
          Back to the Academy
        </Button>
      </div>
    );
  }

  const isToefl = exam.examKey === "TOEFL_IBT";

  return (
    <div className="min-h-[calc(100vh-8rem)] bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-5xl space-y-6 px-4 py-8 sm:px-6">
        {/* Header */}
        <div>
          <button
            onClick={() => navigate({ name: "exams" })}
            className="mb-4 text-sm text-slate-400 transition-colors hover:text-amber-300"
          >
            ← Academy
          </button>
          <div className="flex flex-wrap items-center gap-2">
            <h1 className="text-3xl font-bold text-white">{exam.name} course</h1>
            <Badge variant="outline" className="border-amber-500/40 text-amber-300">
              spec v{exam.specVersion} · effective {exam.effectiveDate}
            </Badge>
          </div>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-400">
            A dedicated preparation architecture — separate blueprint, task types,
            timing and scoring from every other exam — built on top of the common
            English curriculum. Nothing here duplicates Division A or B: every step
            links into the platform you already use.
          </p>
        </div>

        {/* Academy courses: enrolment unlocks every pathway lesson link */}
        {academyCourses && academyCourses.length > 0 ? (
          <Card className="border-slate-800 bg-slate-900/60">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-base text-white">
                <GraduationCap className="size-4 text-amber-400" aria-hidden /> Academy courses
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-xs leading-relaxed text-slate-500">
                {examKey === "TOEFL_IBT"
                  ? "Enrol once: every “Lesson” step of the pathway below deep-links into this course — seven modules covering the 2026 format end to end, from the adaptive Reading and Listening sections to the mock cycle."
                  : "Enrol once: every “Lesson” step of the pathway below deep-links into these courses. Listening and Speaking live in the Core course (identical test across variants); Reading and Writing live in your variant's own track."}
              </p>
              {academyCourses.map((course) => (
                <div
                  key={course.slug}
                  className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-slate-800 bg-slate-950 p-4"
                >
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-semibold text-white">{course.title}</span>
                      {course.enrolled ? (
                        <Badge variant="outline" className="border-emerald-500/40 text-emerald-300">
                          enrolled
                        </Badge>
                      ) : null}
                    </div>
                    <p className="mt-0.5 text-xs text-slate-500">
                      {course.lessonCount} lessons ·{" "}
                      {course.slug === "toefl-ibt-academy"
                        ? "the complete 2026-format programme: fundamentals, all four sections, language craft and the full-practice cycle"
                        : "Listening & Speaking craft, the band ladder, exam strategies and the mock system live in the Core course"}
                    </p>
                  </div>
                  {course.enrolled ? (
                    <Button
                      size="sm"
                      className="gap-1.5 bg-amber-400 text-slate-950 hover:bg-amber-300"
                      onClick={() => navigate({ name: "course", slug: course.slug })}
                    >
                      Open course <ChevronRight className="size-4" aria-hidden />
                    </Button>
                  ) : (
                    <Button size="sm" variant="outline" className="border-emerald-500/40 text-emerald-300 hover:bg-emerald-500/10" onClick={() => enrol(course.slug)}>
                      Enrol
                    </Button>
                  )}
                </div>
              ))}
            </CardContent>
          </Card>
        ) : null}

        {/* Exam blueprint */}
        <Card className="border-slate-800 bg-slate-900/60">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-base text-white">
              <ListChecks className="size-4 text-amber-400" aria-hidden /> Examination blueprint
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-3 md:grid-cols-2">
              {exam.sections.map((section) => (
                <div key={section.key} className="rounded-xl border border-slate-800 bg-slate-950 p-4">
                  <div className="flex items-center justify-between">
                    <span className={cn("font-semibold", SECTION_TINTS[section.key] ?? "text-white")}>
                      {section.label}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-slate-400">
                      <Clock className="size-3" aria-hidden />
                      {Math.round(section.timingSec / 60)} min
                      {section.questionCount > 0 ? ` · ${section.questionCount} items` : ""}
                    </span>
                  </div>
                  {section.adaptive ? (
                    <div className="mt-2 rounded-md bg-amber-400/10 px-2 py-1 text-xs text-amber-300">
                      {section.adaptive}
                    </div>
                  ) : null}
                  <ul className="mt-2 space-y-1 text-xs leading-relaxed text-slate-400">
                    {section.taskTypes.map((type) => (
                      <li key={type}>· {type}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl border border-slate-800 bg-slate-950 p-4">
                <div className="text-xs font-medium uppercase tracking-wide text-slate-500">
                  Scoring system
                </div>
                <p className="mt-1.5 text-sm text-slate-300">
                  {isToefl
                    ? "Each section 1.0–6.0 in half bands; overall = average of the four sections, rounded to the nearest half band."
                    : "Each section 0–9 in half bands; overall = average of the four sections, rounded to the nearest half band (0.25 rounds up)."}{" "}
                  Scores valid {exam.validityMonths} months.
                </p>
                {exam.transitionNote ? (
                  <p className="mt-1.5 text-xs text-amber-300/80">{exam.transitionNote}</p>
                ) : null}
              </div>
              <div className="rounded-xl border border-slate-800 bg-slate-950 p-4">
                <div className="text-xs font-medium uppercase tracking-wide text-slate-500">
                  Format sources (official)
                </div>
                <ul className="mt-1.5 space-y-1">
                  {exam.sourceRefs.map((ref) => (
                    <li key={ref.url}>
                      <a
                        href={ref.url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-xs text-sky-300 hover:text-sky-200"
                      >
                        {ref.label} <ExternalLink className="size-3" aria-hidden />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Pathway */}
        <Card className="border-slate-800 bg-slate-900/60">
          <CardHeader className="pb-3">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <CardTitle className="flex items-center gap-2 text-base text-white">
                <Target className="size-4 text-amber-400" aria-hidden />
                {pathway ? pathway.title : "Preparation pathway"}
              </CardTitle>
              {pathway ? (
                <div className="flex items-center gap-3">
                  <Progress value={pathway.completion.percent} className="h-2 w-32 bg-slate-800" />
                  <span className="text-sm text-slate-300">
                    {pathway.completion.completedSteps}/{pathway.completion.totalSteps} steps
                  </span>
                </div>
              ) : null}
            </div>
          </CardHeader>
          <CardContent>
            {pathway ? (
              <div className="space-y-5">
                <p className="text-sm leading-relaxed text-slate-400">{pathway.summary}</p>
                {pathway.modules.map((module) => (
                  <div key={module.id} className="rounded-xl border border-slate-800 bg-slate-950">
                    <div className="border-b border-slate-800 p-4">
                      <div className="font-semibold text-white">{module.title}</div>
                      <div className="mt-0.5 text-xs text-slate-500">{module.goal}</div>
                    </div>
                    <div className="divide-y divide-slate-800/60">
                      {module.steps.map((step) => (
                        <div key={step.id} className="flex items-center gap-3 p-3.5">
                          <button
                            onClick={() => toggleStep(step.id, step.completed)}
                            aria-label={step.completed ? "Mark step as not done" : "Mark step as done"}
                            className="shrink-0"
                          >
                            <CheckCircle2
                              className={cn(
                                "size-5 transition-colors",
                                step.completed
                                  ? "text-emerald-400"
                                  : "text-slate-600 hover:text-amber-300",
                              )}
                              aria-hidden
                            />
                          </button>
                          <div className="min-w-0 flex-1">
                            <div className="flex items-center gap-2">
                              <a
                                href={step.href}
                                className={cn(
                                  "truncate text-sm font-medium hover:text-amber-300",
                                  step.completed ? "text-slate-500 line-through" : "text-slate-100",
                                )}
                              >
                                {step.label}
                              </a>
                              {step.examSection ? (
                                <Badge
                                  variant="outline"
                                  className="shrink-0 border-slate-700 text-[10px] text-slate-400"
                                >
                                  {step.examSection}
                                </Badge>
                              ) : null}
                            </div>
                            {step.focus ? (
                              <div className="truncate text-xs text-slate-500">{step.focus}</div>
                            ) : null}
                          </div>
                          <span className="shrink-0 text-xs text-slate-500">{step.minutes}m</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
                <p className="text-xs leading-relaxed text-slate-500">
                  Steps link into the common curriculum (Grammar School, Word World, Sentence
                  Lab, Reading Room, Listening Lab, Writing Studio, Speaking Lab, AI Tutor) —
                  the academy adds exam technique on top instead of duplicating lessons.
                </p>
              </div>
            ) : (
              <p className="text-sm text-slate-500">
                No pathway published for this exam yet. Ask an administrator to publish one.
              </p>
            )}
          </CardContent>
        </Card>

        <div className="flex gap-3">
          <Button
            className="gap-1.5 bg-amber-400 text-slate-950 hover:bg-amber-300"
            onClick={() => navigate({ name: "exams-onboarding" })}
          >
            Set my target for {exam.examLabel} <ArrowRight className="size-4" aria-hidden />
          </Button>
          <Button
            variant="outline"
            className="gap-1.5 border-slate-700 bg-transparent text-slate-200 hover:bg-slate-900 hover:text-white"
            onClick={() => navigate({ name: "exams-mocks" })}
          >
            <BookOpenCheck className="size-4" aria-hidden /> Mock tests for this exam
          </Button>
        </div>
      </div>
    </div>
  );
}
