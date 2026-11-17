"use client";

/**
 * Awards tab — milestones, achievements and certificates.
 * Every badge shows its verification rule ("Verified when…") so it is always
 * clear that awards come from real activity, never from opening content.
 */

import { useMemo } from "react";
import { Award, Sparkles, Trophy } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { AchievementCard as AchievementCardBase } from "@/components/ui/cards";
import { StaggerGroup, StaggerItem } from "@/components/motion";
import type { AchievementView, ProgressOverviewDto } from "@/data/progress";
import { AchievementIconView, CertificateDialog, EmptyState, SectionCard } from "./bits";

/** Duration-based achievements store milliseconds; show human units. */
function progressFraction(p: { current: number; target: number }): string | undefined {
  if (p.target >= 60_000) {
    const curMin = Math.floor(p.current / 60_000);
    const tgtMin = Math.round(p.target / 60_000);
    return `${curMin} of ${tgtMin} min`;
  }
  return undefined;
}

function AchievementCard({ achievement }: { achievement: AchievementView }) {
  return (
    <AchievementCardBase
      title={achievement.title}
      description={achievement.description}
      unlocked={achievement.unlocked}
      newlyUnlocked={achievement.unlocked && !achievement.seen}
      icon={
        <AchievementIconView
          icon={achievement.icon}
          unlocked={achievement.unlocked}
          className="size-4.5"
        />
      }
      progress={
        achievement.progress
          ? { ...achievement.progress, fraction: progressFraction(achievement.progress) }
          : undefined
      }
      requirement={achievement.requirement}
      earnedAt={
        achievement.unlocked && achievement.unlockedAt
          ? new Date(achievement.unlockedAt).toLocaleDateString()
          : undefined
      }
    />
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
        <StaggerGroup className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {milestones.map((milestone, i) => (
            <StaggerItem key={milestone.id} index={i}>
              <AchievementCard achievement={milestone} />
            </StaggerItem>
          ))}
        </StaggerGroup>
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
          <StaggerGroup className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((achievement, i) => (
              <StaggerItem key={achievement.id} index={i}>
                <AchievementCard achievement={achievement} />
              </StaggerItem>
            ))}
          </StaggerGroup>
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
