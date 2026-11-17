"use client";

/**
 * Student dashboard sections (PROMPT 33).
 *
 * Every section renders computed data only: continue-learning context,
 * learning-path progression, today's plan with verified done-states, skill
 * profiles (never confused with course completion), the activity feed,
 * explained recommendations and milestone progress. Design language: layered
 * surfaces, restrained gradients, skill-tinted indicators, balanced spacing.
 */

import { useState, type CSSProperties } from "react";
import {
  ArrowRight,
  BookOpen,
  Check,
  CheckCircle2,
  ChevronRight,
  Clock,
  Ear,
  Flame,
  History,
  Lightbulb,
  Library,
  Mic,
  Minus,
  PenLine,
  Play,
  Sparkles,
  SpellCheck,
  Target,
  Trophy,
  type LucideIcon,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";
import { api } from "@/lib/client/api";
import { cn } from "@/lib/utils";
import type {
  ContinueTarget,
  DashboardDto,
  DashboardPath,
  NextUpTarget,
  TodayPlanItem,
} from "@/data/progress/dashboard";
import type { ProgressSkill, SkillProfile } from "@/data/progress/types";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion";
import {
  AchievementIconView,
  SKILL_COLORS,
  StatusBadge,
  TrendBadge,
} from "@/components/app/progress/bits";

// ---------------------------------------------------------------------------
// Shared bits
// ---------------------------------------------------------------------------

export const SKILL_ICONS: Record<ProgressSkill, LucideIcon> = {
  grammar: SpellCheck,
  vocabulary: Library,
  reading: BookOpen,
  listening: Ear,
  speaking: Mic,
  writing: PenLine,
};

const PLAN_ICONS: Record<TodayPlanItem["category"], LucideIcon> = {
  continue: Play,
  vocabulary: Library,
  grammar: SpellCheck,
  reading: BookOpen,
  listening: Ear,
  speaking: Mic,
  writing: PenLine,
  revision: History,
};

export function timeAgo(iso: string): string {
  const seconds = Math.floor((Date.now() - new Date(iso).getTime()) / 1000);
  if (seconds < 60) return "just now";
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes} min ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours} h ago`;
  const days = Math.floor(hours / 24);
  return days === 1 ? "yesterday" : `${days} days ago`;
}

/** Skill-tinted progress bar (indicator colour via a scoped CSS variable). */
function TintedProgress({
  value,
  color,
  label,
  className,
}: {
  value: number;
  color: string;
  label: string;
  className?: string;
}) {
  return (
    <Progress
      value={value}
      className={cn("[&>div]:bg-[var(--skill-tint)]", className)}
      style={{ "--skill-tint": color } as CSSProperties}
      aria-label={label}
    />
  );
}

// ---------------------------------------------------------------------------
// §1 Hero — welcome, level, streak, daily target, notifications, profile
// ---------------------------------------------------------------------------

export function DashboardHero({
  dashboard,
  onNotificationsSeen,
}: {
  dashboard: DashboardDto;
  onNotificationsSeen: () => void;
}) {
  const name = dashboard.learner.name;
  const hour = new Date().getHours();
  const greeting =
    hour < 5
      ? "Burning the midnight oil"
      : hour < 12
        ? "Good morning"
        : hour < 18
          ? "Good afternoon"
          : "Good evening";
  const initials = (name ?? "L")
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  const targetPct = Math.min(
    100,
    Math.round(
      (dashboard.target.todayPoints / Math.max(1, dashboard.target.dailyPoints)) * 100,
    ),
  );

  return (
    <Reveal mode="mount">
      <div className="relative overflow-hidden rounded-2xl border bg-gradient-deep text-white">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(900px 320px at 8% -60%, rgba(30,136,229,0.4), transparent 60%), radial-gradient(700px 300px at 100% 140%, rgba(6,182,212,0.25), transparent 65%)",
          }}
          aria-hidden
        />
        <div className="relative flex flex-col gap-6 p-6 sm:p-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="min-w-0">
            <p className="text-sm font-medium text-white/70">{greeting}</p>
            <h1 className="mt-1 text-2xl font-bold tracking-tight sm:text-3xl">
              {name ? `${name}, ready to continue?` : "Ready to continue?"}
            </h1>
            <div className="mt-3 flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/90 ring-1 ring-white/15">
                <Sparkles className="size-3.5 text-brand-cyan" aria-hidden />
                {dashboard.level.label}
              </span>
              <span className="text-xs text-white/60">{dashboard.level.detail}</span>
            </div>
            <p className="mt-2 text-[11px] text-white/65">{dashboard.level.basis}</p>
          </div>

          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            {/* Learning streak */}
            <div className="flex items-center gap-2.5 rounded-xl bg-white/10 px-4 py-3 ring-1 ring-white/15">
              <Flame
                className={cn(
                  "size-5",
                  dashboard.streak.current > 0 ? "text-gold" : "text-white/40",
                )}
                aria-hidden
              />
              <div>
                <p className="text-lg font-bold leading-none tabular-nums">
                  {dashboard.streak.current}
                  <span className="ml-1 text-xs font-normal text-white/60">day streak</span>
                </p>
                <p className="mt-1 text-[10px] text-white/55">
                  {dashboard.streak.activeToday ? "active today" : "not yet today"}
                </p>
              </div>
            </div>

            {/* Daily learning target */}
            <div className="flex items-center gap-2.5 rounded-xl bg-white/10 px-4 py-3 ring-1 ring-white/15">
              <Target
                className={cn(
                  "size-5",
                  dashboard.target.metToday ? "text-brand-cyan" : "text-white/60",
                )}
                aria-hidden
              />
              <div>
                <p className="text-lg font-bold leading-none tabular-nums">
                  {dashboard.target.todayPoints}
                  <span className="text-xs font-normal text-white/60">
                    {" "}
                    / {dashboard.target.dailyPoints} pts
                  </span>
                </p>
                <div className="mt-1.5 h-1 w-24 overflow-hidden rounded-full bg-white/15">
                  <div
                    className="h-full rounded-full bg-gradient-warm transition-[width] duration-700"
                    style={{ width: `${targetPct}%` }}
                  />
                </div>
                <p className="mt-1 text-[10px] text-white/55">
                  {dashboard.target.metToday ? "daily target met" : "today's target"}
                </p>
              </div>
            </div>

            {/* Profile access */}
            <a
              href="#/progress"
              className="flex size-11 shrink-0 items-center justify-center rounded-full bg-gradient-warm text-sm font-bold text-brand-navy ring-2 ring-white/25 transition-transform hover:scale-105"
              aria-label="Open My Progress profile"
              title="My Progress"
            >
              {initials}
            </a>
          </div>
        </div>

        {/* Notifications — computed, never decorative */}
        {dashboard.notifications.length > 0 ? (
          <>
            <Separator className="bg-white/10" />
            <div className="relative flex items-center gap-2 overflow-x-auto px-6 py-3 sm:px-8">
              <span className="shrink-0 text-[10px] font-semibold uppercase tracking-widest text-white/50">
                For you
              </span>
              {dashboard.notifications.map((n) => (
                <a
                  key={n.id}
                  href={n.href}
                  onClick={onNotificationsSeen}
                  className="group flex shrink-0 items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 text-xs text-white/85 ring-1 ring-white/15 transition-colors hover:bg-white/20"
                >
                  {n.kind === "achievements" ? (
                    <Trophy className="size-3.5 text-gold" aria-hidden />
                  ) : n.kind === "revision" ? (
                    <History className="size-3.5 text-brand-cyan" aria-hidden />
                  ) : n.kind === "vocabulary" ? (
                    <Library className="size-3.5 text-brand-cyan" aria-hidden />
                  ) : (
                    <PenLine className="size-3.5 text-brand-cyan" aria-hidden />
                  )}
                  {n.title}
                </a>
              ))}
            </div>
          </>
        ) : null}
      </div>
    </Reveal>
  );
}

// ---------------------------------------------------------------------------
// §2 Continue learning — the most prominent card on the page
// ---------------------------------------------------------------------------

export function ContinueSection({
  target,
  nextUp,
  navigate,
}: {
  target: ContinueTarget | null;
  nextUp: NextUpTarget | null;
  navigate: (href: string) => void;
}) {
  if (!target && !nextUp) return null;

  if (!target && nextUp) {
    // Nothing in progress yet — the honest starting state.
    return (
      <Card className="overflow-hidden border-primary/25 bg-gradient-to-br from-primary/10 via-card to-card">
        <CardContent className="flex flex-col gap-5 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-7">
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">
              Start learning
            </p>
            <h3 className="mt-1.5 text-xl font-bold leading-snug sm:text-2xl">
              {nextUp.title}
            </h3>
            <p className="mt-1.5 max-w-xl text-sm text-muted-foreground">{nextUp.reason}</p>
          </div>
          <Button size="lg" className="shrink-0 gap-2" onClick={() => navigate(nextUp.href)}>
            <Play className="size-4" aria-hidden /> Start lesson
          </Button>
        </CardContent>
      </Card>
    );
  }

  const t = target!;
  return (
    <Card className="overflow-hidden border-primary/25">
      {/* Layered surface: deep brand gradient + subtle illumination */}
      <div className="relative bg-gradient-deep text-white">
        <div
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{
            background:
              "radial-gradient(720px 220px at 12% -40%, rgba(6,182,212,0.35), transparent 60%), radial-gradient(560px 200px at 95% 130%, rgba(124,58,237,0.28), transparent 60%)",
          }}
          aria-hidden
        />
        <CardContent className="relative flex flex-col gap-5 p-6 sm:p-7 lg:flex-row lg:items-center lg:justify-between">
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-cyan/90">
              Continue learning
            </p>
            <div className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-white/70">
              <a
                href={t.contextHref}
                className="font-medium text-brand-cyan/95 underline-offset-4 hover:underline"
              >
                {t.contextTitle}
              </a>
              <ChevronRight className="size-3.5" aria-hidden />
              <span className="truncate">{t.chapterTitle}</span>
            </div>
            <h3 className="mt-1.5 text-xl font-bold leading-snug text-white sm:text-2xl">
              {t.lessonTitle}
            </h3>
            <div className="mt-4 max-w-md">
              <div className="flex items-center justify-between gap-3 text-xs text-white/75">
                <span className="font-medium">{t.progressLabel}</span>
                {t.estimatedMinutes !== null ? (
                  <span className="inline-flex items-center gap-1">
                    <Clock className="size-3" aria-hidden />
                    {t.estimatedMinutes} min lesson
                  </span>
                ) : null}
              </div>
              <div className="mt-1.5 h-2 w-full overflow-hidden rounded-full bg-white/15">
                <div
                  className="h-full rounded-full bg-gradient-warm transition-[width] duration-700"
                  style={{ width: `${t.progressPct ?? 0}%` }}
                />
              </div>
            </div>
          </div>
          <div className="flex shrink-0 flex-col items-stretch gap-2 sm:flex-row lg:flex-col">
            <Button
              size="lg"
              variant="secondary"
              className="gap-2 bg-white text-brand-navy hover:bg-white/90"
              onClick={() => navigate(t.lessonHref)}
            >
              <Play className="size-4" aria-hidden /> Continue lesson
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="gap-1.5 text-white/80 hover:bg-white/10 hover:text-white"
              onClick={() => navigate(t.contextHref)}
            >
              {t.source === "cms" ? "Course outline" : "Level overview"}
              <ArrowRight className="size-3.5" aria-hidden />
            </Button>
          </div>
        </CardContent>
      </div>
    </Card>
  );
}

// ---------------------------------------------------------------------------
// §3 Personal learning path — visual progression with real completion
// ---------------------------------------------------------------------------

function pathNodeClasses(status: string) {
  switch (status) {
    case "completed":
      return "border-success bg-success/15 text-success";
    case "active":
      return "border-primary bg-primary/15 text-primary ring-4 ring-primary/15";
    case "optional":
      return "border-dashed border-muted-foreground/40 bg-muted/50 text-muted-foreground";
    default:
      return "border-muted bg-muted/40 text-muted-foreground";
  }
}

export function PathSection({ path }: { path: DashboardPath | null }) {
  if (!path) return null;
  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between space-y-0 pb-4">
        <div>
          <CardTitle className="flex items-center gap-2 text-base">
            <Sparkles className="size-4 text-primary" aria-hidden />
            Your learning path
          </CardTitle>
          <p className="mt-1 text-sm font-normal text-muted-foreground">
            {path.title} · {path.completedLessons} of {path.totalLessons} lessons ({path.pct}%)
          </p>
        </div>
        <Button variant="outline" size="sm" className="shrink-0 gap-1.5" asChild>
          <a href={path.href}>
            Full path <ArrowRight className="size-3.5" aria-hidden />
          </a>
        </Button>
      </CardHeader>
      <CardContent>
        <Progress value={path.pct} className="h-1.5" aria-label={`Path progress ${path.pct}%`} />
        <div className="relative">
          <ol className="mt-5 flex snap-x gap-3 overflow-x-auto pb-2 lg:grid lg:grid-cols-4 xl:grid-cols-8 lg:overflow-visible">
            {path.steps.map((step, index) => (
              <li
                key={step.id}
                className={cn(
                  "min-w-44 shrink-0 snap-start rounded-xl border p-3 transition-colors lg:min-w-0 lg:shrink",
                  step.status === "active" && "border-primary/40 bg-primary/5",
                  step.status === "completed" && "border-success/30",
                  step.status === "optional" && "border-dashed",
                )}
              >
                <a href={step.href} className="group block">
                  <div className="flex items-center gap-2">
                    <span
                      className={cn(
                        "inline-flex size-6 shrink-0 items-center justify-center rounded-full border text-[11px] font-bold",
                        pathNodeClasses(step.status),
                      )}
                      aria-hidden
                    >
                      {step.status === "completed" ? <Check className="size-3.5" /> : index + 1}
                    </span>
                    <span
                      className={cn(
                        "text-[10px] font-semibold uppercase tracking-wide",
                        step.status === "active" ? "text-primary" : "text-muted-foreground",
                      )}
                    >
                      {step.status === "completed"
                        ? "Completed"
                        : step.status === "active"
                          ? "You are here"
                          : step.optional
                            ? "Optional"
                            : "Upcoming"}
                    </span>
                  </div>
                <p className="mt-2 line-clamp-2 text-sm font-semibold leading-snug group-hover:text-primary">
                  {step.title}
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  {step.kind === "practice" ? (
                    "Practice reinforcement"
                  ) : (
                    <>
                      {step.completedLessons} of {step.totalLessons} lessons
                    </>
                  )}
                </p>
              </a>
            </li>
          ))}
          </ol>
          {/* Scroll affordance below lg: the row is a snap carousel —
              without an edge fade, cut-off cards read as a layout bug. */}
          <div
            className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-card to-transparent lg:hidden"
            aria-hidden
          />
        </div>
      </CardContent>
    </Card>
  );
}

// ---------------------------------------------------------------------------
// §4 Today's learning plan — actionable, verified done-states, adjustable
// ---------------------------------------------------------------------------

function TargetAdjuster({
  daily,
  weekly,
  onSaved,
}: {
  daily: number;
  weekly: number;
  onSaved: () => void;
}) {
  const [editing, setEditing] = useState(false);
  const [dailyValue, setDailyValue] = useState(String(daily));
  const [weeklyValue, setWeeklyValue] = useState(String(weekly));
  const [saving, setSaving] = useState(false);

  const save = async () => {
    const parsedDaily = Number(dailyValue);
    const parsedWeekly = Number(weeklyValue);
    if (!Number.isFinite(parsedDaily) || !Number.isFinite(parsedWeekly)) {
      toast.error("Targets must be numbers.");
      return;
    }
    setSaving(true);
    const response = await api.setProgressionGoals({
      dailyPoints: parsedDaily,
      weeklyPoints: parsedWeekly,
    });
    setSaving(false);
    if (response.ok) {
      toast.success("Daily target updated.");
      setEditing(false);
      onSaved();
    } else {
      toast.error(response.error);
    }
  };

  if (!editing) {
    return (
      <Button
        variant="ghost"
        size="sm"
        className="h-7 px-2 text-xs"
        onClick={() => setEditing(true)}
      >
        <Target className="mr-1 size-3.5" aria-hidden /> Adjust target
      </Button>
    );
  }
  return (
    <div className="flex flex-wrap items-center gap-2">
      <label className="flex items-center gap-1 text-xs text-muted-foreground">
        Daily pts
        <Input
          className="h-7 w-16 px-2 text-xs"
          type="number"
          min={10}
          max={200}
          value={dailyValue}
          onChange={(e) => setDailyValue(e.target.value)}
          aria-label="Daily point target"
        />
      </label>
      <label className="flex items-center gap-1 text-xs text-muted-foreground">
        Weekly pts
        <Input
          className="h-7 w-16 px-2 text-xs"
          type="number"
          min={50}
          max={1000}
          value={weeklyValue}
          onChange={(e) => setWeeklyValue(e.target.value)}
          aria-label="Weekly point target"
        />
      </label>
      <Button size="sm" className="h-7 px-3 text-xs" disabled={saving} onClick={save}>
        {saving ? "Saving…" : "Save"}
      </Button>
    </div>
  );
}

export function TodayPlanSection({
  dashboard,
  onRefresh,
}: {
  dashboard: DashboardDto;
  onRefresh: () => void;
}) {
  const doneCount = dashboard.plan.filter((p) => p.done).length;
  const targetPct = Math.min(
    100,
    Math.round(
      (dashboard.target.todayPoints / Math.max(1, dashboard.target.dailyPoints)) * 100,
    ),
  );
  return (
    <Card className="h-full">
      <CardHeader className="flex-row items-start justify-between space-y-0 pb-4">
        <div>
          <CardTitle className="flex items-center gap-2 text-base">
            <CheckCircle2 className="size-4 text-primary" aria-hidden />
            Today's plan
          </CardTitle>
          <p className="mt-1 text-sm font-normal text-muted-foreground">
            {doneCount} of {dashboard.plan.length} done · {dashboard.target.todayPoints} of{" "}
            {dashboard.target.dailyPoints} points today
          </p>
        </div>
        <TargetAdjuster
          daily={dashboard.target.dailyPoints}
          weekly={dashboard.target.weeklyPoints}
          onSaved={onRefresh}
        />
      </CardHeader>
      <CardContent>
        <Progress
          value={targetPct}
          className="h-1.5"
          aria-label={`Daily target progress: ${dashboard.target.todayPoints} of ${dashboard.target.dailyPoints} points`}
        />
        <ul className="mt-4 space-y-2">
          {dashboard.plan.map((item) => {
            const Icon = PLAN_ICONS[item.category];
            return (
              <li key={item.id}>
                <a
                  href={item.href}
                  className={cn(
                    "group flex items-start gap-3 rounded-xl border p-3 transition-colors hover:border-primary/40",
                    item.done
                      ? "border-success/25 bg-success/5"
                      : "border-border hover:bg-primary/5",
                  )}
                >
                  <span
                    className={cn(
                      "mt-0.5 inline-flex size-7 shrink-0 items-center justify-center rounded-lg",
                      item.done ? "bg-success/15 text-success" : "bg-primary/10 text-primary",
                    )}
                    aria-hidden
                  >
                    {item.done ? <Check className="size-4" /> : <Icon className="size-4" />}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span
                      className={cn(
                        "flex flex-wrap items-center gap-2 text-sm font-semibold",
                        item.done && "text-muted-foreground",
                      )}
                    >
                      <span className="truncate">{item.title}</span>
                      {item.estimatedMinutes !== null ? (
                        <span className="inline-flex items-center gap-1 rounded-full bg-muted px-2 py-0.5 text-[10px] font-medium text-muted-foreground">
                          <Clock className="size-2.5" aria-hidden />
                          {item.estimatedMinutes} min
                        </span>
                      ) : null}
                    </span>
                    <span className="mt-0.5 line-clamp-2 block text-xs text-muted-foreground">
                      {item.done && item.doneLabel ? `${item.doneLabel} — ${item.detail}` : item.detail}
                    </span>
                  </span>
                  <ChevronRight
                    className="mt-1 size-4 shrink-0 text-muted-foreground/60 transition-transform group-hover:translate-x-0.5 group-hover:text-primary"
                    aria-hidden
                  />
                </a>
              </li>
            );
          })}
        </ul>
        {dashboard.planNote ? (
          <p className="mt-4 rounded-lg bg-muted/60 p-3 text-xs text-muted-foreground">
            {dashboard.planNote}
          </p>
        ) : null}
      </CardContent>
    </Card>
  );
}

// ---------------------------------------------------------------------------
// §5 Skill performance — separate indicators, never course completion
// ---------------------------------------------------------------------------

function SkillTile({ profile }: { profile: SkillProfile }) {
  const color = SKILL_COLORS[profile.skill];
  const Icon = SKILL_ICONS[profile.skill];
  const completionPct = profile.completion
    ? Math.round(
        (profile.completion.done / Math.max(1, profile.completion.total)) * 100,
      )
    : null;
  return (
    <div className="flex flex-col gap-3 rounded-xl border p-4">
      <div className="flex items-center justify-between gap-2">
        <div className="flex min-w-0 items-center gap-2">
          <span
            className="inline-flex size-8 shrink-0 items-center justify-center rounded-lg"
            style={{
              background: `color-mix(in srgb, ${color} 12%, transparent)`,
              color,
            }}
            aria-hidden
          >
            <Icon className="size-4" />
          </span>
          <h3 className="truncate text-sm font-semibold">{profile.label}</h3>
        </div>
        <StatusBadge status={profile.status} />
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">
            Accuracy
          </p>
          {profile.accuracy ? (
            <p className="mt-0.5 text-xl font-bold tabular-nums leading-7">
              {profile.accuracy.pct}%
              <span className="ml-1 text-[10px] font-normal text-muted-foreground">
                {profile.accuracy.correct}/{profile.accuracy.total}
              </span>
            </p>
          ) : (
            <p className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
              <Minus className="size-3" aria-hidden /> not measurable yet
            </p>
          )}
        </div>
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">
            Completion
          </p>
          {profile.completion ? (
            <p className="mt-0.5 text-xl font-bold tabular-nums leading-7">
              {profile.completion.done}
              <span className="text-xs font-normal text-muted-foreground">
                {" "}
                / {profile.completion.total}
              </span>
            </p>
          ) : (
            <p className="mt-1 text-xs text-muted-foreground">open practice</p>
          )}
        </div>
      </div>
      <div className="flex items-center justify-between gap-2">
        <span className="text-[11px] text-muted-foreground">
          {profile.practiceEvents} practice event{profile.practiceEvents === 1 ? "" : "s"}
        </span>
        <TrendBadge trend={profile.trend} />
      </div>
      {profile.completion && completionPct !== null ? (
        <div>
          <TintedProgress
            value={completionPct}
            color={color}
            label={`${profile.completion.label}: ${profile.completion.done} of ${profile.completion.total}`}
            className="h-1"
          />
          <p className="mt-1 text-[10px] text-muted-foreground">
            {profile.completion.label}
          </p>
        </div>
      ) : null}
    </div>
  );
}

export function SkillsSection({ skills }: { skills: SkillProfile[] }) {
  return (
    <Card className="h-full">
      <CardHeader className="flex-row items-center justify-between space-y-0 pb-4">
        <div>
          <CardTitle className="text-base">Skill performance</CardTitle>
          <p className="mt-1 text-sm font-normal text-muted-foreground">
            Practice-based indicators — not course completion.
          </p>
        </div>
        <Button variant="ghost" size="sm" className="gap-1 text-xs" asChild>
          <a href="#/progress/skills">
            Details <ArrowRight className="size-3.5" aria-hidden />
          </a>
        </Button>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {skills.map((profile) => (
            <SkillTile key={profile.skill} profile={profile} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

// ---------------------------------------------------------------------------
// §6 Learning activity — recent verified events
// ---------------------------------------------------------------------------

export function ActivitySection({ dashboard }: { dashboard: DashboardDto }) {
  // Consecutive identical events (e.g. five exercises in one lesson) collapse
  // into one row with an honest ×N multiplier — same information, less noise.
  const grouped: {
    label: string;
    at: string;
    points: number;
    count: number;
    skill: DashboardDto["recentActivity"][number]["skill"];
  }[] = [];
  for (const item of dashboard.recentActivity.slice(0, 8)) {
    const last = grouped[grouped.length - 1];
    if (last && last.label === item.label) {
      last.count += 1;
      last.points += item.points;
    } else {
      grouped.push({
        label: item.label,
        at: item.at,
        points: item.points,
        count: 1,
        skill: item.skill,
      });
    }
  }
  return (
    <Card className="h-full">
      <CardHeader className="flex-row items-center justify-between space-y-0 pb-4">
        <CardTitle className="flex items-center gap-2 text-base">
          <History className="size-4 text-primary" aria-hidden />
          Recent learning activity
        </CardTitle>
        <Button variant="ghost" size="sm" className="gap-1 text-xs" asChild>
          <a href="#/progress/activity">
            All charts <ArrowRight className="size-3.5" aria-hidden />
          </a>
        </Button>
      </CardHeader>
      <CardContent>
        {grouped.length === 0 ? (
          <p className="rounded-xl border border-dashed p-6 text-center text-sm text-muted-foreground">
            Nothing yet — your completed lessons, exercises, submissions and
            conversations will appear here.
          </p>
        ) : (
          <ul className="space-y-1">
            {grouped.map((item, index) => {
              const Icon = item.skill ? SKILL_ICONS[item.skill] : Sparkles;
              const color = item.skill
                ? SKILL_COLORS[item.skill]
                : "var(--color-primary)";
              return (
                <li
                  key={`${item.at}-${index}`}
                  className="flex items-center gap-3 rounded-lg px-2 py-2"
                >
                  <span
                    className="inline-flex size-7 shrink-0 items-center justify-center rounded-lg"
                    style={{
                      background: `color-mix(in srgb, ${color} 12%, transparent)`,
                      color,
                    }}
                    aria-hidden
                  >
                    <Icon className="size-3.5" />
                  </span>
                  <span className="min-w-0 flex-1 truncate text-sm">{item.label}</span>
                  {item.count > 1 ? (
                    <Badge
                      variant="secondary"
                      className="shrink-0 border-0 bg-muted px-1.5 text-[10px] text-muted-foreground"
                    >
                      ×{item.count}
                    </Badge>
                  ) : null}
                  <span className="shrink-0 text-xs text-muted-foreground">
                    {timeAgo(item.at)}
                  </span>
                  <Badge
                    variant="secondary"
                    className="shrink-0 border-0 bg-primary/10 px-1.5 text-[10px] text-primary"
                  >
                    +{item.points}
                  </Badge>
                </li>
              );
            })}
          </ul>
        )}
      </CardContent>
    </Card>
  );
}

// ---------------------------------------------------------------------------
// §7 Recommended next steps — every card explains WHY
// ---------------------------------------------------------------------------

const RECOMMENDATION_REASONS: Record<string, string> = {
  "next-lesson": "Next on your path",
  revision: "Due for review",
  "grammar-practice": "From your error patterns",
  vocabulary: "Vocabulary practice",
  "speaking-challenge": "Speaking practice",
  "writing-assignment": "Writing practice",
  "skill-balance": "To balance your skills",
};

export function NextStepsSection({ dashboard }: { dashboard: DashboardDto }) {
  if (dashboard.recommendations.length === 0) return null;
  return (
    <Card className="h-full bg-gradient-to-b from-primary/5 to-transparent">
      <CardHeader className="flex-row items-center justify-between space-y-0 pb-4">
        <CardTitle className="flex items-center gap-2 text-base">
          <Lightbulb className="size-4 text-primary" aria-hidden />
          Recommended next
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3">
          {dashboard.recommendations.map((rec) => (
            <li key={rec.id}>
              <a
                href={rec.href}
                className="group flex flex-col gap-1.5 rounded-xl border bg-card p-3.5 transition-colors hover:border-primary/40"
              >
                <span className="flex items-center justify-between gap-2">
                  <Badge
                    variant="secondary"
                    className="border-0 bg-primary/10 text-[10px] font-medium text-primary"
                  >
                    {RECOMMENDATION_REASONS[rec.kind] ?? "For you"}
                  </Badge>
                  <ChevronRight
                    className="size-4 text-muted-foreground/60 transition-transform group-hover:translate-x-0.5 group-hover:text-primary"
                    aria-hidden
                  />
                </span>
                <span className="text-sm font-semibold leading-snug group-hover:text-primary">
                  {rec.title}
                </span>
                <span className="line-clamp-3 text-xs leading-relaxed text-muted-foreground">
                  {rec.purpose}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

// ---------------------------------------------------------------------------
// §8 Achievements — meaningful milestones with real progress
// ---------------------------------------------------------------------------

export function MilestonesSection({ dashboard }: { dashboard: DashboardDto }) {
  if (dashboard.milestones.length === 0) return null;
  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between space-y-0 pb-4">
        <div>
          <CardTitle className="flex items-center gap-2 text-base">
            <Trophy className="size-4 text-primary" aria-hidden />
            Milestones
          </CardTitle>
          <p className="mt-1 text-sm font-normal text-muted-foreground">
            {dashboard.achievements.unlocked} of {dashboard.achievements.total} achievements
            earned
          </p>
        </div>
        <Button variant="ghost" size="sm" className="gap-1 text-xs" asChild>
          <a href="#/progress/awards">
            All awards <ArrowRight className="size-3.5" aria-hidden />
          </a>
        </Button>
      </CardHeader>
      <CardContent>
        <StaggerGroup className="grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-6">
          {dashboard.milestones.map((m) => (
            <StaggerItem
              key={m.id}
              className={cn(
                "flex flex-col items-center gap-1.5 rounded-xl border p-3.5 text-center",
                m.unlocked
                  ? "border-gold/40 bg-gradient-to-b from-gold/10 to-transparent"
                  : "border-dashed",
              )}
            >
              <AchievementIconView
                icon={m.icon}
                unlocked={m.unlocked}
                className={cn("size-6", m.unlocked ? "text-gold" : "text-muted-foreground/50")}
              />
              <p
                className={cn(
                  "text-xs font-semibold leading-tight",
                  !m.unlocked && "text-muted-foreground",
                )}
              >
                {m.title}
              </p>
              {m.unlocked ? (
                <p className="text-[10px] text-muted-foreground">
                  {new Date(m.unlockedAt ?? "").toLocaleDateString()}
                </p>
              ) : m.progress ? (
                <div className="w-full">
                  <Progress
                    value={Math.round(
                      (m.progress.current / Math.max(1, m.progress.target)) * 100,
                    )}
                    className="h-1"
                    aria-label={`${m.title}: ${m.progress.current} of ${m.progress.target}`}
                  />
                  <p className="mt-1 text-[10px] tabular-nums text-muted-foreground">
                    {m.progress.current}/{m.progress.target}
                  </p>
                </div>
              ) : (
                <p className="text-[10px] text-muted-foreground/70">Locked</p>
              )}
            </StaggerItem>
          ))}
        </StaggerGroup>
      </CardContent>
    </Card>
  );
}
