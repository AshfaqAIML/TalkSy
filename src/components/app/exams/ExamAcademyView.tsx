"use client";

/**
 * Division C landing — the International Exam Preparation Academy.
 * Deliberately distinct, premium visual identity (deep navy + gold)
 * versus the common app, so learners understand this is a dedicated
 * academy, not another module of ordinary lessons.
 */

import { useEffect, useState } from "react";
import {
  Award,
  BadgeCheck,
  CalendarDays,
  ChevronRight,
  Clock,
  FileCheck2,
  Globe2,
  GraduationCap,
  ListChecks,
  RefreshCw,
  ShieldCheck,
  Target,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { toast } from "sonner";
import type { AppRoute } from "@/hooks/use-hash-route";
import { useAppStore } from "@/lib/client/store";
import { examApi, type ExamCard, type UkviDeliveryInfo } from "@/lib/client/exam-api";

function formatMinutes(seconds: number): string {
  const minutes = Math.round(seconds / 60);
  return `${minutes} min`;
}

export function ExamAcademyView({ navigate }: { navigate: (route: AppRoute) => void }) {
  const user = useAppStore((s) => s.user);
  const [exams, setExams] = useState<ExamCard[] | null>(null);
  const [ukvi, setUkvi] = useState<UkviDeliveryInfo | null>(null);
  const [onboarded, setOnboarded] = useState<boolean | null>(null);

  useEffect(() => {
    (async () => {
      const [overview, profile] = await Promise.all([examApi.overview(), examApi.profile()]);
      if (overview.ok) {
        setExams(overview.data.exams);
        setUkvi(overview.data.ukvi);
      }
      if (profile.ok) setOnboarded(Boolean(profile.data.profile?.onboarded));
    })();
  }, []);

  const go = () => {
    if (!user) {
      navigate({ name: "register" });
      return;
    }
    navigate({ name: onboarded ? "exams-dashboard" : "exams-onboarding" });
  };

  return (
    <div className="min-h-[calc(100vh-8rem)] bg-slate-950 text-slate-100">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-amber-500/20">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(60% 50% at 50% 0%, rgba(245,158,11,0.18) 0%, transparent 70%)",
          }}
          aria-hidden
        />
        <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-5 px-4 py-16 text-center sm:px-6 sm:py-20">
          <span className="inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-amber-400/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-amber-300">
            <Globe2 className="size-3.5" aria-hidden />
            INTERNATIONAL EXAM PREPARATION ACADEMY
          </span>
          <h1 className="max-w-3xl bg-gradient-to-b from-white to-slate-400 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl">
            Your target score has a plan behind it.
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
            A dedicated division for IELTS and TOEFL iBT preparation: verified
            test formats, exam-specific pathways, timed mock tests with band
            scoring, and a personal dashboard tracking everything between you
            and test day.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button
              size="lg"
              className="gap-2 bg-amber-400 text-slate-950 hover:bg-amber-300"
              onClick={go}
            >
              {onboarded ? "Open my exam dashboard" : "Start my preparation"}
              <ChevronRight className="size-4" aria-hidden />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 border-slate-700 bg-transparent text-slate-200 hover:bg-slate-900 hover:text-white"
              onClick={() => navigate({ name: "exams-planner" })}
            >
              Study planner
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 border-sky-500/40 bg-sky-500/10 text-sky-300 hover:bg-sky-500/20 hover:text-sky-200"
              onClick={() => navigate({ name: "exams-listening" })}
            >
              Listening Masterclass
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 border-cyan-500/40 bg-cyan-500/10 text-cyan-300 hover:bg-cyan-500/20 hover:text-cyan-200"
              onClick={() => navigate({ name: "exams-reading" })}
            >
              Reading Masterclass
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 border-violet-500/40 bg-violet-500/10 text-violet-300 hover:bg-violet-500/20 hover:text-violet-200"
              onClick={() => navigate({ name: "exams-writing" })}
            >
              Writing Masterclass
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 border-teal-500/40 bg-teal-500/10 text-teal-300 hover:bg-teal-500/20 hover:text-teal-200"
              onClick={() => navigate({ name: "exams-speaking" })}
            >
              Speaking Masterclass
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 border-slate-700 bg-transparent text-slate-200 hover:bg-slate-900 hover:text-white"
              onClick={() => navigate({ name: "exams-mocks" })}
            >
              Browse mock tests
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 border-sky-500/40 bg-sky-500/10 text-sky-300 hover:bg-sky-500/20 hover:text-sky-200"
              onClick={() => navigate({ name: "exams-toefl-library" })}
            >
              TOEFL practice library
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 border-amber-500/40 bg-amber-500/10 text-amber-300 hover:bg-amber-500/20 hover:text-amber-200"
              onClick={() => navigate({ name: "exams-bank" })}
            >
              Original question bank
            </Button>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            {
              icon: Target,
              title: "Tell us your goal",
              text: "Exam, variant, target score, exam date and daily study time — the onboarding wizard takes two minutes.",
            },
            {
              icon: ListChecks,
              title: "Follow your pathway",
              text: "A phased course that reuses the common English curriculum and adds exam-technique drills on top.",
            },
            {
              icon: FileCheck2,
              title: "Sit timed mocks",
              text: "Official section timings and scoring rules, per question type — with rubric-graded writing and speaking.",
            },
          ].map((item) => (
            <Card key={item.title} className="border-slate-800 bg-slate-900/60 text-slate-200">
              <CardContent className="flex flex-col gap-2 p-5">
                <item.icon className="size-5 text-amber-400" aria-hidden />
                <h3 className="font-semibold text-white">{item.title}</h3>
                <p className="text-sm leading-relaxed text-slate-400">{item.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Available examinations */}
      <section className="mx-auto max-w-5xl px-4 pb-16 sm:px-6">
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-white">Available examinations</h2>
          <Badge variant="outline" className="border-amber-500/40 text-amber-300">
            formats verified {new Date().getFullYear()}
          </Badge>
        </div>
        {!exams ? (
          <div className="grid gap-4 md:grid-cols-3" aria-busy="true">
            <span className="sr-only" role="status">Loading examinations</span>
            {[0, 1, 2].map((i) => (
              <Skeleton key={i} className="h-64 rounded-xl bg-slate-900" />
            ))}
          </div>
        ) : (
          <div className="stagger-in grid gap-4 md:grid-cols-3">
            {exams.map((exam, i) => (
              <Card
                key={`${exam.examKey}-${exam.variant}`}
                style={{ "--stagger-i": i } as React.CSSProperties}
                className="card-interactive flex flex-col border-slate-800 bg-gradient-to-b from-slate-900 to-slate-950 text-slate-200 hover:border-amber-400/40 hover:shadow-lg"
              >
                <CardContent className="flex flex-1 flex-col gap-4 p-5">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-white">{exam.name}</h3>
                      <p className="text-xs text-slate-400">
                        Spec v{exam.specVersion} · effective {exam.effectiveDate}
                      </p>
                    </div>
                    <BadgeCheck className="size-5 shrink-0 text-amber-400" aria-hidden />
                  </div>
                  <ul className="flex-1 space-y-1.5 text-sm text-slate-300">
                    {exam.sections.map((section) => (
                      <li key={section.key} className="flex items-center justify-between gap-2">
                        <span>{section.label}</span>
                        <span className="flex items-center gap-1 text-xs text-slate-400">
                          <Clock className="size-3" aria-hidden />
                          {formatMinutes(section.timingSec)}
                          {section.questionCount > 0 ? ` · ${section.questionCount} q` : ""}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-1.5">
                    {exam.sections.some((s) => s.adaptive) ? (
                      <Badge className="bg-amber-400/15 text-amber-300 hover:bg-amber-400/15">
                        adaptive
                      </Badge>
                    ) : null}
                    <Badge variant="outline" className="border-slate-700 text-slate-300">
                      {exam.mockCount} mock{exam.mockCount === 1 ? "" : "s"}
                    </Badge>
                    {exam.hasPathway ? (
                      <Badge variant="outline" className="border-slate-700 text-slate-300">
                        pathway
                      </Badge>
                    ) : null}
                  </div>
                  <div className="flex gap-2">
                    <Button
                      className="flex-1 bg-amber-400 text-slate-950 hover:bg-amber-300"
                      onClick={() => navigate({ name: "exams-course", examKey: exam.examKey, variant: exam.variant })}
                    >
                      View course
                    </Button>
                    <Button
                      variant="outline"
                      className="border-slate-700 bg-transparent hover:bg-slate-900 hover:text-white"
                      onClick={() => {
                        if (!user) {
                          toast.info("Create a free account to start preparing.");
                          navigate({ name: "register" });
                          return;
                        }
                        navigate(onboarded ? { name: "exams-dashboard" } : { name: "exams-onboarding" });
                      }}
                    >
                      {onboarded ? "Dashboard" : "Prepare"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* IELTS for UKVI pathway */}
        {ukvi ? (
          <Card className="mt-4 border-amber-500/30 bg-gradient-to-b from-slate-900 to-slate-950 text-slate-200">
            <CardContent className="space-y-3 p-5">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-lg font-bold text-white">{ukvi.label}</h3>
                  <p className="mt-0.5 max-w-xl text-sm leading-relaxed text-slate-400">{ukvi.summary}</p>
                </div>
                <ShieldCheck className="size-5 shrink-0 text-amber-400" aria-hidden />
              </div>
              <ul className="grid gap-1.5 text-sm text-slate-300 sm:grid-cols-2">
                {ukvi.guidance.slice(0, 4).map((line, index) => (
                  <li key={index} className="flex gap-2">
                    <span className="mt-1 size-1.5 shrink-0 rounded-full bg-amber-400" aria-hidden />
                    {line}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs text-slate-500">
                  Same test, same specs, same mocks — your preparation does not change.
                </span>
                <Button
                  size="sm"
                  className="bg-amber-400 text-slate-950 hover:bg-amber-300"
                  onClick={() => {
                    if (!user) {
                      toast.info("Create a free account to start preparing.");
                      navigate({ name: "register" });
                      return;
                    }
                    navigate(onboarded ? { name: "exams-dashboard" } : { name: "exams-onboarding" });
                  }}
                >
                  {onboarded ? "Open dashboard" : "Prepare for UKVI"}
                </Button>
              </div>
            </CardContent>
          </Card>
        ) : null}

        {/* Trust strip */}
        <div className="mt-10 grid gap-3 text-xs text-slate-400 sm:grid-cols-3">
          <div className="flex items-center gap-2">
            <ShieldCheck className="size-4 shrink-0 text-amber-400" aria-hidden />
            Format data from official provider pages, versioned and review-dated.
          </div>
          <div className="flex items-center gap-2">
            <RefreshCw className="size-4 shrink-0 text-amber-400" aria-hidden />
            When a provider changes the test, administrators update the spec — the app follows.
          </div>
          <div className="flex items-center gap-2">
            <Award className="size-4 shrink-0 text-amber-400" aria-hidden />
            Mock writing and speaking graded against public band descriptors.
          </div>
        </div>

        <p className="mt-8 border-t border-slate-800 pt-4 text-[11px] leading-relaxed text-slate-500">
          IELTS is jointly owned by the British Council, IDP: IELTS Australia and
          Cambridge University Press &amp; Assessment. TOEFL and TOEFL iBT are
          registered trademarks of Educational Testing Service (ETS). This
          academy is not affiliated with, endorsed by or associated with any of
          them. All practice materials are original EnglishPath content.
        </p>
      </section>
    </div>
  );
}
