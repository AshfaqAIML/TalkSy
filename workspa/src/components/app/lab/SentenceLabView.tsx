"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { CheckCircle2, ChevronRight, FlaskConical, Timer } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { api, type ProgressItem } from "@/lib/client/api";
import { useAppStore } from "@/lib/client/store";
import { getLesson } from "@/data/curriculum";

/**
 * Sentence Construction Laboratory hub: the seven progressive stages with
 * live progress from the learner's LessonProgress records.
 */

const STAGES = [
  {
    slug: "lab-1-word-recognition",
    stage: 1,
    title: "Word Recognition",
    subtitle: "Subjects, verbs, objects & modifiers",
  },
  {
    slug: "lab-2-basic-structure",
    stage: 2,
    title: "Basic Structure",
    subtitle: "S+V · S+V+O · S+V+C",
  },
  {
    slug: "lab-3-sentence-types",
    stage: 3,
    title: "Sentence Types",
    subtitle: "Declarative · Interrogative · Imperative · Exclamatory",
  },
  {
    slug: "lab-4-polarity",
    stage: 4,
    title: "Sentence Polarity",
    subtitle: "Affirmative ↔ negative · statement ↔ question",
  },
  {
    slug: "lab-5-expansion",
    stage: 5,
    title: "Sentence Expansion",
    subtitle: '"I read." → "I read an interesting book every evening."',
  },
  {
    slug: "lab-6-combination",
    stage: 6,
    title: "Sentence Combination",
    subtitle: "Conjunctions and clauses",
  },
  {
    slug: "lab-7-transformation",
    stage: 7,
    title: "Sentence Transformation",
    subtitle: "Simple/compound/complex · active/passive · direct/indirect",
  },
];

export function SentenceLabView() {
  const user = useAppStore((s) => s.user);
  const [progress, setProgress] = useState<Record<string, ProgressItem>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    (async () => {
      if (!user) {
        setLoading(false);
        return;
      }
      const response = await api.progress();
      if (!active) return;
      if (response.ok) {
        setProgress(
          Object.fromEntries(
            response.data.items.map((item) => [item.lessonSlug, item]),
          ),
        );
      }
      setLoading(false);
    })();
    return () => {
      active = false;
    };
  }, [user]);

  const totalDone = STAGES.filter(
    (stage) => progress[stage.slug]?.completion.completed,
  ).length;

  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
      <div className="flex items-center gap-3">
        <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-primary/10">
          <FlaskConical className="size-6 text-primary" aria-hidden />
        </span>
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Sentence Construction Laboratory
          </h1>
          <p className="text-sm text-muted-foreground">
            Seven stages that take you from recognising words to transforming
            complex sentences.
          </p>
        </div>
      </div>

      {user && !loading ? (
        <div className="mt-5 flex items-center gap-3">
          <Progress value={(totalDone / STAGES.length) * 100} className="h-2 flex-1" />
          <span className="text-xs text-muted-foreground">
            {totalDone}/{STAGES.length} stages completed
          </span>
        </div>
      ) : null}

      <div className="mt-8 flex flex-col gap-4">
        {STAGES.map((stage) => {
          const item = progress[stage.slug];
          const lesson = getLesson(stage.slug);
          const done = item?.completion.completed ?? false;
          const sectionsDone = item?.completion.sectionsDone ?? 0;
          const sectionsTotal = item?.completion.sectionsTotal ?? lesson?.sections.length ?? 0;
          const timedChallenge = lesson?.sections.some((s) =>
            s.blocks.some((b) => b.type === "challenge" && b.timed),
          );

          return (
            <Card
              key={stage.slug}
              className={cn(
                "group transition-all hover:border-primary/40 hover:shadow-md",
                done && "border-primary/40",
              )}
            >
              <CardContent className="flex flex-col gap-3 p-5 sm:flex-row sm:items-center">
                <span
                  className={cn(
                    "inline-flex size-12 shrink-0 items-center justify-center rounded-2xl text-lg font-bold",
                    done
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground",
                  )}
                  aria-hidden
                >
                  {done ? <CheckCircle2 className="size-6" /> : stage.stage}
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h2 className="font-semibold">
                      Stage {stage.stage} · {stage.title}
                    </h2>
                    {timedChallenge ? (
                      <Badge variant="outline" className="gap-1 text-[10px]">
                        <Timer className="size-3" aria-hidden /> timed challenge
                      </Badge>
                    ) : null}
                  </div>
                  <p className="mt-0.5 text-sm text-muted-foreground">
                    {stage.subtitle}
                  </p>
                  {user && sectionsDone > 0 ? (
                    <div className="mt-2 flex items-center gap-2">
                      <Progress
                        value={(sectionsDone / Math.max(1, sectionsTotal)) * 100}
                        className="h-1.5 max-w-48"
                      />
                      <span className="text-[11px] text-muted-foreground">
                        {sectionsDone}/{sectionsTotal} sections
                      </span>
                    </div>
                  ) : null}
                </div>
                <Button asChild variant={done ? "outline" : "default"} size="sm" className="gap-1.5">
                  <Link href={`#/lesson/${stage.slug}`}>
                    {done ? "Review" : sectionsDone > 0 ? "Continue" : "Start"}
                    <ChevronRight className="size-4" aria-hidden />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
