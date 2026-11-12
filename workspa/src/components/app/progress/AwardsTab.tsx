"use client";

/**
 * Awards tab — milestones, achievements and certificates.
 * Every badge shows its verification rule ("Verified when…") so it is always
 * clear that awards come from real activity, never from opening content.
 */

import { useMemo } from "react";
import { Award, CheckCircle2, Lock, Sparkles, Trophy } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import type { AchievementView, ProgressOverviewDto } from "@/data/progress";
import { AchievementIconView, CertificateDialog, EmptyState, SectionCard } from "./bits";

function AchievementCard({ achievement }: { achievement: AchievementView }) {
  return (
    <div
      className={`flex flex-col gap-2 rounded-xl border p-4 ${achievement.unlocked ? "border-primary/40 bg-primary/5" : "opacity-80"}`}
    >
      <div className="flex items-start justify-between gap-2">
        <span
          className={`inline-flex size-10 items-center justify-center rounded-lg ${
            achievement.unlocked ? "bg-primary/15 text-primary" : "bg-muted text-muted-foreground"
          }`}
        >
          <AchievementIconView icon={achievement.icon} unlocked={achievement.unlocked} className="size-5" />
        </span>
        {achievement.unlocked ? (
          <Badge className="border-0 bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">
            <CheckCircle2 className="mr-1 size-3" aria-hidden />
            Earned
          </Badge>
        ) : (
          <Lock className="size-4 text-muted-foreground" aria-hidden />
        )}
      </div>
      <p className="text-sm font-semibold">{achievement.title}</p>
      <p className="text-xs text-muted-foreground">{achievement.description}</p>
      {achievement.progress ? (
        <div>
          <div className="flex items-center justify-between text-[11px] text-muted-foreground">
            <span>Progress</span>
            <span className="tabular-nums">
              {`${achievement.progress.current}/${achievement.progress.target}`}
            </span>
          </div>
          <Progress
            className="mt-1 h-1.5"
            value={(achievement.progress.current / achievement.progress.target) * 100}
          />
        </div>
      ) : null}
      <p className="mt-auto border-t pt-2 text-[11px] leading-relaxed text-muted-foreground">
        {achievement.requirement}
        {achievement.unlocked && achievement.unlockedAt
          ? ` Earned ${new Date(achievement.unlockedAt).toLocaleDateString()}.`
          : ""}
      </p>
    </div>
  );
}

export function AwardsTab({ overview }: { overview: ProgressOverviewDto }) {
  const { achievements, certificates } = overview;
  const milestones = useMemo(
    () => achievements.all.filter((a) => a.kind === "milestone"),
    [achievements],
  );
  const byCategory = useMemo(() => {
    const groups = new Map<string, AchievementView[]>();
    for (const achievement of achievements.all) {
      if (achievement.kind === "milestone") continue;
      const list = groups.get(achievement.category) ?? [];
      list.push(achievement);
      groups.set(achievement.category, list);
    }
    return [...groups.entries()];
  }, [achievements]);

  return (
    <div className="flex flex-col gap-6">
      <SectionCard
        title="Milestones"
        icon={Sparkles}
        action={
          <span className="text-xs text-muted-foreground">
            {achievements.milestoneCount.unlocked}/{achievements.milestoneCount.total} reached
          </span>
        }
      >
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {milestones.map((milestone) => (
            <AchievementCard key={milestone.id} achievement={milestone} />
          ))}
        </div>
      </SectionCard>

      {byCategory.map(([category, list]) => (
        <SectionCard
          key={category}
          title={category.charAt(0).toUpperCase() + category.slice(1)}
          icon={category === "streaks" ? Sparkles : Trophy}
          action={
            <span className="text-xs text-muted-foreground">
              {list.filter((a) => a.unlocked).length}/{list.length} earned
            </span>
          }
        >
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((achievement) => (
              <AchievementCard key={achievement.id} achievement={achievement} />
            ))}
          </div>
        </SectionCard>
      ))}

      <SectionCard title="Certificates" icon={Award}>
        {certificates.earned.length === 0 ? (
          <EmptyState
            title="No certificates yet"
            body="Complete every lesson in a course unit — for example “Pre-A1 · Unit 1 — Hello, World!” — and a verified certificate is issued automatically."
          />
        ) : (
          <div className="flex flex-col gap-3">
            {certificates.earned.map((cert) => (
              <div
                key={cert.id}
                className="flex items-center justify-between gap-3 rounded-xl border border-primary/30 bg-primary/5 p-4"
              >
                <div className="min-w-0">
                  <p className="truncate font-semibold">{cert.title}</p>
                  <p className="text-xs text-muted-foreground">
                    {cert.lessonsCompleted} lessons · issued{" "}
                    {new Date(cert.issuedAt).toLocaleDateString()} · {cert.code}
                  </p>
                </div>
                <CertificateDialog certificate={cert} learnerName={overview.learner.name} />
              </div>
            ))}
          </div>
        )}
        {certificates.inProgress.length > 0 ? (
          <div className="mt-4 flex flex-col gap-3 border-t pt-4">
            <p className="text-xs font-medium text-muted-foreground">Working towards</p>
            {certificates.inProgress.map((course) => (
              <div key={course.courseId}>
                <div className="flex items-center justify-between gap-2 text-sm">
                  <span className="truncate">{course.title}</span>
                  <span className="shrink-0 text-xs tabular-nums text-muted-foreground">
                    {`${course.lessonsCompleted}/${course.lessonsTotal} lessons`}
                  </span>
                </div>
                <Progress
                  className="mt-1.5 h-1.5"
                  value={(course.lessonsCompleted / course.lessonsTotal) * 100}
                />
              </div>
            ))}
          </div>
        ) : null}
      </SectionCard>
    </div>
  );
}
