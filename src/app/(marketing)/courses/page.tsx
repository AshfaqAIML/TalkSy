import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, Clock, Headphones, Languages, Mic, PenLine } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { LevelChip, StatusBadge } from "@/components/ds";
import { PageHero } from "@/components/marketing/page-hero";
import { Reveal } from "@/components/marketing/reveal";
import { JsonLd } from "@/components/marketing/json-ld";
import { availableLevels } from "@/data/curriculum";
import { plannedLevels, siteStats } from "@/lib/marketing/stats";
import { absoluteUrl, pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Course levels & curriculum",
  description:
    "The complete TalkSy curriculum: Foundations (Pre-A1), Beginner (A1) and Elementary (A2) — 66 structured lessons across 18 units, with Intermediate (B1) to Advanced (C1) in development.",
  path: "/courses",
  ogTitle: "TalkSy course levels & curriculum",
});

const skillIcons: Record<string, React.ReactNode> = {
  listening: <Headphones className="h-3 w-3" aria-hidden="true" />,
  speaking: <Mic className="h-3 w-3" aria-hidden="true" />,
  reading: <BookOpen className="h-3 w-3" aria-hidden="true" />,
  writing: <PenLine className="h-3 w-3" aria-hidden="true" />,
};

function LessonRow({
  index,
  title,
  subtitle,
  minutes,
  skills,
}: {
  index: number;
  title: string;
  subtitle?: string;
  minutes?: number;
  skills: string[];
}) {
  return (
    <li className="flex items-center gap-3 border-b border-line px-4 py-3 last:border-b-0 sm:px-5">
      <span className="w-6 shrink-0 text-right font-display text-caption font-semibold tabular-nums text-ink-400">
        {index}
      </span>
      <span className="min-w-0 flex-1">
        <span className="block truncate font-semibold text-ink-900">{title}</span>
        {subtitle && <span className="block truncate text-caption text-ink-500">{subtitle}</span>}
      </span>
      <span className="hidden shrink-0 items-center gap-2.5 sm:flex" aria-label="Skills practised">
        {skills.map((s) => (
          <span key={s} className="text-ink-400" title={s}>
            {skillIcons[s] ?? <Languages className="h-3 w-3" aria-hidden="true" />}
            <span className="sr-only">{s}</span>
          </span>
        ))}
      </span>
      {typeof minutes === "number" && (
        <span className="flex shrink-0 items-center gap-1 text-caption tabular-nums text-ink-500">
          <Clock className="h-3.5 w-3.5" aria-hidden="true" /> {minutes}m
        </span>
      )}
    </li>
  );
}

export default function CoursesPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "TalkSy English courses",
          itemListElement: availableLevels.map((level, i) => ({
            "@type": "ListItem",
            position: i + 1,
            item: {
              "@type": "Course",
              name: `TalkSy ${level.name} (${level.cefrLabel})`,
              description: level.description,
              inLanguage: "en",
              educationalLevel: level.cefrLabel,
              isAccessibleForFree: true,
              provider: { "@type": "Organization", name: "TalkSy", url: absoluteUrl("/") },
              url: absoluteUrl("/courses"),
            },
          })),
        }}
      />
      <PageHero
        eyebrow="Course levels"
        title="One curriculum, from the alphabet to everyday English"
        lede={`Three complete levels are live today — ${siteStats.lessons} lessons across ${siteStats.units} units, every one practising listening, speaking, reading and writing. The CEFR ladder continues from there.`}
        breadcrumb="Courses"
      />

      {/* Available levels, in path order */}
      <div className="mx-auto max-w-6xl space-y-16 px-4 py-16 sm:px-6">
        {availableLevels.map((level) => {
          const lessonCount = level.units.reduce((sum, u) => sum + u.lessons.length, 0);
          const minutes = level.units.reduce(
            (sum, u) => sum + u.lessons.reduce((s, l) => s + (l.minutes ?? 0), 0),
            0
          );
          return (
            <section key={level.code} aria-labelledby={`level-${level.code}`}>
              <Reveal>
                <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <LevelChip code={level.code} size="lg" />
                    <div>
                      <h2 id={`level-${level.code}`} className="font-display text-heading-lg text-ink-900">
                        {level.name}
                      </h2>
                      <p className="text-body-sm font-medium text-brand-700 dark:text-brand-600">
                        {level.cefrLabel} — {level.tagline}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    <StatusBadge tone="success">{lessonCount} lessons</StatusBadge>
                    <StatusBadge tone="brand">{level.units.length} units</StatusBadge>
                    <StatusBadge tone="neutral">
                      ≈ {Math.round((minutes / 60) * 10) / 10} hours
                    </StatusBadge>
                  </div>
                </div>
                <p className="max-w-3xl text-body text-ink-600 dark:text-ink-500">{level.description}</p>
              </Reveal>

              <div className="mt-6 grid gap-5 lg:grid-cols-2">
                {level.units.map((unit, ui) => (
                  <Reveal key={unit.slug} delay={(ui % 2) * 0.06}>
                    <Card className="h-full overflow-hidden border-line shadow-xs">
                      <div className="border-b border-line bg-sand-100/70 px-4 py-3 dark:bg-sand-100/40 sm:px-5">
                        <h3 className="font-semibold text-ink-900">
                          <span className="mr-2 text-caption font-bold uppercase tracking-wide text-ink-400">
                            {level.code} · Unit {ui + 1}
                          </span>
                          {unit.title}
                        </h3>
                        <p className="mt-1 text-caption leading-relaxed text-ink-500">{unit.description}</p>
                      </div>
                      <ul className="divide-y divide-line">
                        {unit.lessons.map((lesson, li) => (
                          <LessonRow
                            key={lesson.slug}
                            index={li + 1}
                            title={lesson.title}
                            subtitle={lesson.subtitle}
                            minutes={lesson.minutes}
                            skills={lesson.skills}
                          />
                        ))}
                      </ul>
                    </Card>
                  </Reveal>
                ))}
              </div>
            </section>
          );
        })}

        {/* Roadmap levels */}
        <section aria-labelledby="roadmap-heading">
          <Reveal>
            <h2 id="roadmap-heading" className="font-display text-heading-lg text-ink-900">
              Next on the ladder
            </h2>
            <p className="mt-2 max-w-2xl text-body text-ink-600 dark:text-ink-500">
              Three more levels are in development — the roadmap is visible inside the app, and
              these pages will grow as each level ships.
            </p>
          </Reveal>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {plannedLevels.map((level, i) => (
              <Reveal key={level.code} delay={i * 0.07}>
                <Card className="h-full border-dashed opacity-80 shadow-xs">
                  <CardContent className="p-6">
                    <div className="mb-3 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="flex h-12 w-12 items-center justify-center rounded-lg border-2 border-dashed border-line-strong text-base font-bold text-ink-400">
                          {level.code}
                        </span>
                        <div>
                          <h3 className="font-semibold text-ink-600 dark:text-ink-500">{level.name}</h3>
                          <p className="text-caption text-ink-400">{level.cefrLabel}</p>
                        </div>
                      </div>
                      <StatusBadge tone="neutral">In development</StatusBadge>
                    </div>
                    <p className="text-body-sm leading-relaxed text-ink-500">{level.description}</p>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </section>
      </div>

      {/* CTA */}
      <section className="border-t bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-5 px-4 py-14 text-center sm:px-6">
          <Reveal>
            <h2 className="font-display text-heading-lg text-balance">
              Not sure where to start? Start at the beginning.
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-body text-primary-foreground/85">
              Lesson 1 assumes zero English — and if it feels easy, you can move ahead freely.
              Your path unlocks one solid step at a time.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/register">
                  Start Learning Free <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              >
                <Link href="/methodology">How lessons are built</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
