"use client";

/**
 * Student dashboard (PROMPT 33) — the personal learning workspace at
 * #/dashboard. Answers, in one screen: what have I learned, what am I
 * learning now, what should I learn next, where am I making mistakes, and
 * how can I improve. Every value is computed server-side from verified
 * activity; nothing is invented. Deep analytics live on in My Progress.
 */

import { useEffect, useState } from "react";
import { BarChart3, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { api } from "@/lib/client/api";
import { useAppStore } from "@/lib/client/store";
import type { AppRoute } from "@/hooks/use-hash-route";
import type { DashboardDto } from "@/data/progress/dashboard";
import {
  ActivitySection,
  ContinueSection,
  DashboardHero,
  MilestonesSection,
  NextStepsSection,
  PathSection,
  SkillsSection,
  TodayPlanSection,
} from "./sections";

function go(href: string) {
  // Hash-route navigation: setting location.hash triggers the app router.
  window.location.hash = href.startsWith("#") ? href.slice(1) : href;
}

export function StudentDashboardView({
  navigate,
}: {
  navigate: (route: AppRoute) => void;
}) {
  const user = useAppStore((s) => s.user);
  const [dashboard, setDashboard] = useState<DashboardDto | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const applyResponse = (response: Awaited<ReturnType<typeof api.dashboard>>) => {
    setLoading(false);
    if (response.ok) {
      setDashboard(response.data);
      setError(null);
    } else {
      setError(response.error);
    }
  };

  useEffect(() => {
    if (!user) return;
    void api.dashboard().then(applyResponse);
  }, [user]);

  const refresh = () => {
    setLoading(true);
    void api.dashboard().then(applyResponse);
  };

  const markNotificationsSeen = () => {
    // Visiting the notification targets marks achievements seen; a light
    // refresh keeps the strip honest without blocking the click-through.
    if (dashboard && dashboard.achievements.unseen > 0) {
      void api.markAchievementsSeen(
        dashboard.milestones
          .filter((m) => m.unlocked && !m.seen)
          .map((m) => m.id),
      );
    }
  };

  if (!user) return null;

  if (loading && !dashboard) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
        <Skeleton className="h-44 rounded-2xl" />
        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          <Skeleton className="h-48 lg:col-span-3" />
          <Skeleton className="h-72 lg:col-span-2" />
          <Skeleton className="h-72" />
        </div>
      </div>
    );
  }

  if (error || !dashboard) {
    return (
      <div className="mx-auto max-w-md px-4 py-20 text-center">
        <p className="font-semibold">Could not load your dashboard.</p>
        <p className="mt-1 text-sm text-muted-foreground">
          {error ?? "Please try again."}
        </p>
        <Button className="mt-4" onClick={refresh}>
          <RefreshCw className="mr-2 size-4" aria-hidden /> Try again
        </Button>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl space-y-6 px-4 py-8 sm:px-6">
      {/* §1 Header — welcome, level, streak, daily target, notifications, profile */}
      <DashboardHero
        dashboard={dashboard}
        onNotificationsSeen={markNotificationsSeen}
      />

      {/* §2 Continue learning — resume exactly where the learner left off */}
      <ContinueSection
        target={dashboard.continue}
        nextUp={dashboard.nextUp}
        navigate={go}
      />

      {/* §3 Personal learning path — visual progression */}
      <PathSection path={dashboard.path} />

      {/* §4 + §5 Today's plan and skill performance */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <TodayPlanSection dashboard={dashboard} onRefresh={refresh} />
        </div>
        <div className="lg:col-span-7">
          <SkillsSection skills={dashboard.skills} />
        </div>
      </div>

      {/* §6 + §7 Activity and recommendations */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <ActivitySection dashboard={dashboard} />
        </div>
        <div className="lg:col-span-5">
          <NextStepsSection dashboard={dashboard} />
        </div>
      </div>

      {/* §8 Milestones */}
      <MilestonesSection dashboard={dashboard} />

      {/* Bridge to the deep analytics workspace */}
      <div className="flex flex-col items-center justify-between gap-3 rounded-2xl border border-dashed p-5 sm:flex-row">
        <div>
          <p className="text-sm font-semibold">Want the full picture?</p>
          <p className="mt-0.5 text-sm text-muted-foreground">
            My Progress has weekly charts, the revision scheduler, certificates
            and every award.
          </p>
        </div>
        <Button
          variant="outline"
          className="shrink-0 gap-2"
          onClick={() => navigate({ name: "progress" })}
        >
          <BarChart3 className="size-4" aria-hidden /> Open My Progress
        </Button>
      </div>
    </div>
  );
}
