import { ArrowRight, BookCheck, Flame, Languages, Target, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProgressRing, WeeklyBars, LessonCard } from "@/components/ds";
import { lessonPreview } from "@/lib/marketing/preview-data";
import { siteStats } from "@/lib/marketing/stats";
import { cn } from "@/lib/utils";

/**
 * Dashboard preview — the same components the real dashboard is built
 * from (ProgressRing, WeeklyBars, LessonCard), showing an illustrative
 * learner state on top of real product numbers (66 lessons, A1 · Unit 1).
 */
export function DashboardPreview({ className }: { className?: string }) {
  const stats = [
    { icon: Zap, label: "Total XP", value: "1,240", tone: "gold" as const },
    { icon: Flame, label: "Day streak", value: "6", tone: "clay" as const },
    { icon: BookCheck, label: `Lessons done`, value: `12/${siteStats.lessons}`, tone: "brand" as const },
    { icon: Languages, label: "Words learned", value: "84", tone: "grove" as const },
  ];
  const toneChip: Record<string, string> = {
    gold: "bg-sun-100 text-sun-700 dark:bg-sun-500/15 dark:text-sun-700",
    clay: "bg-clay-100 text-clay-700 dark:bg-clay-500/15 dark:text-clay-700",
    brand: "bg-brand-100 text-brand-800 dark:bg-brand-600/20 dark:text-brand-800",
    grove: "bg-grove-100 text-grove-900 dark:bg-grove-600/15 dark:text-grove-700",
  };

  return (
    <div className={cn("p-4 sm:p-6", className)}>
      {/* Greeting row — mirrors the real dashboard */}
      <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="overline-label mb-1 text-brand-700 dark:text-brand-600">Tuesday, 11 November</p>
          <h3 className="font-display text-heading-md text-ink-900">Good morning, Amira</h3>
        </div>
        <span className="flex items-center gap-1.5 rounded-full bg-sun-100 px-3 py-1 text-caption font-bold text-sun-700 dark:bg-sun-500/15">
          <Flame className="h-3.5 w-3.5" aria-hidden="true" /> 6-day streak — practised today
        </span>
      </div>

      {/* Stat cards */}
      <div className="mb-5 grid grid-cols-2 gap-3 lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="rounded-xl border border-line bg-card p-3.5 shadow-xs">
            <span className={cn("mb-2 flex h-8 w-8 items-center justify-center rounded-lg", toneChip[s.tone])}>
              <s.icon className="h-4 w-4" aria-hidden="true" />
            </span>
            <p className="text-body-sm font-bold tabular-nums text-ink-900">{s.value}</p>
            <p className="text-caption text-ink-500">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="grid gap-4 lg:grid-cols-5">
        {/* Daily goal */}
        <div className="flex items-center gap-4 rounded-xl border border-line bg-card p-4 shadow-xs lg:col-span-2">
          <ProgressRing value={68} size="md" label="Daily goal progress">
            <span className="flex flex-col items-center">
              <span className="text-lg font-bold tabular-nums leading-none">41</span>
              <span className="text-micro text-ink-500">/ 60 XP</span>
            </span>
          </ProgressRing>
          <div>
            <p className="flex items-center gap-1.5 text-body-sm font-semibold text-ink-900">
              <Target className="h-4 w-4 text-primary" aria-hidden="true" /> Today&apos;s goal
            </p>
            <p className="mt-1 text-caption leading-snug text-ink-500">
              10 minutes a day, set by you. The ring fills from practice the server records.
            </p>
          </div>
        </div>

        {/* Weekly activity */}
        <div className="rounded-xl border border-line bg-card p-4 shadow-xs lg:col-span-3">
          <p className="mb-1 text-body-sm font-semibold text-ink-900">This week</p>
          <p className="mb-2 text-caption text-ink-500">XP earned per day</p>
          <WeeklyBars
            data={[
              { label: "Mon", xp: 55 },
              { label: "Tue", xp: 30 },
              { label: "Wed", xp: 72 },
              { label: "Thu", xp: 0 },
              { label: "Fri", xp: 45 },
              { label: "Sat", xp: 88 },
              { label: "Sun", xp: 41 },
            ]}
            className="h-36 [&_.recharts-wrapper]_:!h-full"
          />
        </div>
      </div>

      {/* Continue your path — the real next lesson */}
      <div className="mt-5 overflow-hidden rounded-xl border border-line bg-card shadow-xs">
        <div className="border-b border-line px-4 py-3 sm:px-5">
          <p className="text-body-sm font-semibold text-ink-900">Continue your path</p>
          <p className="text-caption text-ink-500">A1 · Beginner — Unit 1 · First Words</p>
        </div>
        <LessonCard
          index={2}
          title={lessonPreview.nextLesson.title}
          subtitle={lessonPreview.nextLesson.subtitle}
          minutes={lessonPreview.nextLesson.minutes}
          status="current"
          vocabCount={12}
          bestScore={null}
        />
        <div className="flex justify-end px-4 py-3 sm:px-5">
          <Button className="gap-1.5" aria-hidden="true" tabIndex={-1}>
            Continue <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
