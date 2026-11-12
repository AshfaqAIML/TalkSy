"use client";

/**
 * Overview tab — points, goals, streak, lessons, milestones, certificates
 * and a feed of recent VERIFIED activity.
 */

import { useState } from "react";
import {
  Award,
  BookOpen,
  CheckCircle2,
  Flame,
  History,
  Sparkles,
  Target,
  Zap,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";
import { api } from "@/lib/client/api";
import type { ProgressOverviewDto } from "@/data/progress";
import {
  CertificateDialog,
  EmptyState,
  ProgressRing,
  SectionCard,
  StatTile,
  SKILL_COLORS,
} from "./bits";

function timeAgo(iso: string): string {
  const seconds = Math.floor((Date.now() - new Date(iso).getTime()) / 1000);
  if (seconds < 60) return "just now";
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes} min ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours} h ago`;
  const days = Math.floor(hours / 24);
  return days === 1 ? "yesterday" : `${days} days ago`;
}

function GoalsEditor({
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
      toast.error("Goals must be numbers.");
      return;
    }
    setSaving(true);
    const response = await api.setProgressionGoals({
      dailyPoints: parsedDaily,
      weeklyPoints: parsedWeekly,
    });
    setSaving(false);
    if (response.ok) {
      toast.success("Goals updated.");
      setEditing(false);
      onSaved();
    } else {
      toast.error(response.error);
    }
  };

  if (!editing) {
    return (
      <Button variant="ghost" size="sm" className="h-7 px-2 text-xs" onClick={() => setEditing(true)}>
        Edit goals
      </Button>
    );
  }
  return (
    <div className="flex items-center gap-2">
      <label className="flex items-center gap-1 text-xs text-muted-foreground">
        Day
        <Input
          className="h-7 w-16 px-2 text-xs"
          type="number"
          min={10}
          max={200}
          value={dailyValue}
          onChange={(e) => setDailyValue(e.target.value)}
          aria-label="Daily point goal"
        />
      </label>
      <label className="flex items-center gap-1 text-xs text-muted-foreground">
        Week
        <Input
          className="h-7 w-16 px-2 text-xs"
          type="number"
          min={50}
          max={1000}
          value={weeklyValue}
          onChange={(e) => setWeeklyValue(e.target.value)}
          aria-label="Weekly point goal"
        />
      </label>
      <Button size="sm" className="h-7 px-3 text-xs" disabled={saving} onClick={save}>
        {saving ? "Saving…" : "Save"}
      </Button>
    </div>
  );
}

export function OverviewTab({
  overview,
  onRefresh,
}: {
  overview: ProgressOverviewDto;
  onRefresh: () => void;
}) {
  const { points, goals, streak, lessons, exercises, series, achievements, certificates, recentActivity } = overview;
  const milestones = achievements.all.filter((a) => a.kind === "milestone");

  return (
    <div className="flex flex-col gap-6">
      {/* Headline tiles */}
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <StatTile icon={Zap} label="Learning points" value={points.total.toLocaleString("en")} hint="from verified activity" />
        <StatTile
          icon={Target}
          label="Exercise accuracy"
          value={exercises.pct === null ? "—" : `${exercises.pct}%`}
          hint={exercises.total === 0 ? "no graded answers yet" : `${exercises.correct} of ${exercises.total} answers`}
        />
        <StatTile
          icon={Flame}
          label="Current streak"
          value={`${streak.current} day${streak.current === 1 ? "" : "s"}`}
          hint={`longest ${streak.longest} · ${streak.activeDays} active days`}
        />
        <StatTile
          icon={Award}
          label="Achievements"
          value={`${achievements.unlockedCount}/${achievements.totalCount}`}
          hint={`${achievements.milestoneCount.unlocked}/${achievements.milestoneCount.total} milestones`}
        />
      </div>

      {/* Recommended for you */}
      <SectionCard title="Recommended for you" icon={Sparkles}>
        {overview.recommendations.length === 0 ? (
          <EmptyState
            title="No recommendations yet"
            body="Recommendations appear as soon as you have some activity — each one explains why it is right for you."
          />
        ) : (
          <div className="flex flex-col gap-3">
            {overview.recommendations.map((recommendation) => (
              <a
                key={recommendation.id}
                href={recommendation.href}
                className="flex flex-col gap-1.5 rounded-xl border p-4 transition-colors hover:border-primary/50 hover:bg-primary/5"
              >
                <div className="flex items-center justify-between gap-3">
                  <p className="font-semibold">{recommendation.title}</p>
                  <span className="shrink-0 text-sm font-medium text-primary">Go →</span>
                </div>
                <p className="text-sm">{recommendation.action}</p>
                <p className="text-xs leading-relaxed text-muted-foreground">
                  <span className="font-semibold text-foreground">Why: </span>
                  {recommendation.purpose}
                </p>
              </a>
            ))}
          </div>
        )}
      </SectionCard>

      {/* Goals + streak */}
      <div className="grid gap-6 lg:grid-cols-2">
        <SectionCard title="Your goals" icon={Target} action={<GoalsEditor daily={goals.dailyPoints} weekly={goals.weeklyPoints} onSaved={onRefresh} />}>
          <div className="flex items-start justify-around gap-4">
            <ProgressRing value={goals.todayProgress} max={goals.dailyPoints} caption="Points today" />
            <ProgressRing value={goals.weekProgress} max={goals.weeklyPoints} caption="Points this week" color="#8b5cf6" />
          </div>
          <p className="mt-4 text-center text-xs text-muted-foreground">
            Goals are yours to set — they never affect your scores, and missing one changes nothing.
          </p>
        </SectionCard>

        <SectionCard title="Learning streak" icon={Flame}>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <div className="flex gap-1">
                {[...Array(7)].map((_, i) => {
                  const active = i < streak.current;
                  return (
                    <span
                      key={i}
                      className={`h-9 w-5 rounded-md ${active ? "bg-primary" : "bg-muted"}`}
                      aria-hidden
                    />
                  );
                })}
              </div>
              <div className="text-sm">
                <p className="font-semibold">
                  {streak.current} day{streak.current === 1 ? "" : "s"} in a row
                </p>
                <p className="text-xs text-muted-foreground">
                  Longest {streak.longest} · {streak.activeDays} total active days
                </p>
              </div>
            </div>
            <p className="rounded-lg bg-secondary p-3 text-xs leading-relaxed text-muted-foreground">
              {streak.streakNote}
            </p>
          </div>
        </SectionCard>
      </div>

      {/* Continue learning */}
      <SectionCard
        title={`Continue learning · ${lessons.completed}/${lessons.total} lessons completed`}
        icon={BookOpen}
      >
        {lessons.continueLesson ? (
          <a
            href={`#/lesson/${lessons.continueLesson.slug}`}
            className="flex items-center justify-between gap-3 rounded-xl border p-4 transition-colors hover:border-primary/50 hover:bg-primary/5"
          >
            <div>
              <p className="font-semibold">{lessons.continueLesson.title}</p>
              <p className="mt-1 text-xs text-muted-foreground">
                {lessons.continueLesson.sectionsDone}/{lessons.continueLesson.sectionsTotal} sections done
              </p>
              <Progress
                className="mt-2 h-1.5 max-w-64"
                value={(lessons.continueLesson.sectionsDone / Math.max(lessons.continueLesson.sectionsTotal, 1)) * 100}
              />
            </div>
            <span className="text-sm font-medium text-primary">Resume →</span>
          </a>
        ) : lessons.nextLesson ? (
          <a
            href={`#/lesson/${lessons.nextLesson.slug}`}
            className="flex items-center justify-between gap-3 rounded-xl border p-4 transition-colors hover:border-primary/50 hover:bg-primary/5"
          >
            <div>
              <p className="font-semibold">{lessons.nextLesson.title}</p>
              <p className="mt-1 text-xs text-muted-foreground">The next lesson on your learning path</p>
            </div>
            <span className="text-sm font-medium text-primary">Start →</span>
          </a>
        ) : (
          <EmptyState
            title="Learning path complete!"
            body="You have completed every lesson on the current path. Explore Word World, the Reading Room or the Speaking Lab to keep going."
          />
        )}
      </SectionCard>

      {/* Milestones */}
      <SectionCard title="Milestones" icon={Sparkles}>
        <div className="grid gap-3 sm:grid-cols-2">
          {milestones.map((milestone) => (
            <div
              key={milestone.id}
              className={`flex items-center justify-between gap-3 rounded-xl border p-3.5 ${milestone.unlocked ? "border-primary/40 bg-primary/5" : ""}`}
            >
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold">{milestone.title}</p>
                <p className="truncate text-xs text-muted-foreground">{milestone.description}</p>
                {milestone.progress ? (
                  <Progress
                    className="mt-2 h-1.5 max-w-44"
                    value={(milestone.progress.current / milestone.progress.target) * 100}
                  />
                ) : null}
              </div>
              {milestone.unlocked ? (
                <Badge className="shrink-0 border-0 bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">
                  <CheckCircle2 className="mr-1 size-3" aria-hidden />
                  Done
                </Badge>
              ) : milestone.progress ? (
                <span className="shrink-0 text-xs tabular-nums text-muted-foreground">
                  {`${milestone.progress.current}/${milestone.progress.target}`}
                </span>
              ) : null}
            </div>
          ))}
        </div>
      </SectionCard>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Recent verified activity */}
        <SectionCard title="Recent activity" icon={History}>
          {recentActivity.length === 0 ? (
            <EmptyState
              title="Nothing yet"
              body="Answer an exercise, review a word or submit some writing — every verified action shows up here."
            />
          ) : (
            <ul className="flex max-h-96 flex-col divide-y divide-border overflow-y-auto">
              {recentActivity.map((item, i) => (
                <li key={i} className="flex items-center justify-between gap-3 py-2.5 text-sm">
                  <div className="flex min-w-0 items-center gap-2.5">
                    <span
                      className="size-2 shrink-0 rounded-full"
                      style={{ background: item.skill ? SKILL_COLORS[item.skill] : "var(--muted-foreground)" }}
                      aria-hidden
                    />
                    <span className="truncate">{item.label}</span>
                  </div>
                  <div className="flex shrink-0 items-center gap-2 text-xs text-muted-foreground">
                    <span>{timeAgo(item.at)}</span>
                    <span className="font-semibold text-primary">+{item.points}</span>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </SectionCard>

        {/* Certificates */}
        <SectionCard title="Certificates" icon={Award}>
          {certificates.earned.length === 0 && certificates.inProgress.length === 0 ? (
            <EmptyState
              title="No certificates yet"
              body="Complete every lesson in a course — like “Pre-A1 · Unit 1” — to earn your first certificate."
            />
          ) : (
            <div className="flex flex-col gap-3">
              {certificates.earned.map((cert) => (
                <div key={cert.id} className="flex items-center justify-between gap-3 rounded-xl border border-primary/30 bg-primary/5 p-3.5">
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold">{cert.title}</p>
                    <p className="text-xs text-muted-foreground">
                      Issued {new Date(cert.issuedAt).toLocaleDateString()} · {cert.code}
                    </p>
                  </div>
                  <CertificateDialog certificate={cert} learnerName={overview.learner.name} />
                </div>
              ))}
              <Separator />
              {certificates.inProgress.map((course) => (
                <div key={course.courseId}>
                  <div className="flex items-center justify-between gap-2 text-sm">
                    <span className="truncate">{course.title}</span>
                    <span className="shrink-0 text-xs tabular-nums text-muted-foreground">
                      {`${course.lessonsCompleted}/${course.lessonsTotal}`}
                    </span>
                  </div>
                  <Progress
                    className="mt-1.5 h-1.5"
                    value={(course.lessonsCompleted / course.lessonsTotal) * 100}
                  />
                </div>
              ))}
              {series.vocabulary.dueNow > 0 ? (
                <p className="text-xs text-muted-foreground">
                  {series.vocabulary.dueNow} words are due for review — keeping reviews current is the
                  fastest way to protect everything on this page.
                </p>
              ) : null}
            </div>
          )}
        </SectionCard>
      </div>
    </div>
  );
}
