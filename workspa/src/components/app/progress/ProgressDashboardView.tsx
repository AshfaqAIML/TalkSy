"use client";

/**
 * My Progress — the analytics dashboard of the Learning Progression System.
 *
 * Everything on this page is computed from VERIFIED activity: graded answers,
 * reviews, submissions, passed runs and completions. Opening content never
 * counts, and no number is invented: missing data shows as "not started"
 * rather than a misleading 0%.
 */

import { useEffect, useRef, useState } from "react";
import {
  Activity,
  BarChart3,
  CalendarClock,
  LayoutDashboard,
  RefreshCw,
  Trophy,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";
import { api } from "@/lib/client/api";
import { useAppStore } from "@/lib/client/store";
import type { ProgressOverviewDto } from "@/data/progress";
import { OverviewTab } from "./OverviewTab";
import { SkillsTab } from "./SkillsTab";
import { ActivityTab } from "./ActivityTab";
import { RevisionTab } from "./RevisionTab";
import { AwardsTab } from "./AwardsTab";

const VALID_TABS = ["overview", "skills", "activity", "revision", "awards"] as const;
type ProgressTab = (typeof VALID_TABS)[number];

export function ProgressDashboardView({
  tab,
  navigate,
}: {
  tab?: string;
  navigate: (route: { name: "progress"; tab?: string }) => void;
}) {
  const user = useAppStore((s) => s.user);
  const [overview, setOverview] = useState<ProgressOverviewDto | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const announcedUnlocks = useRef(false);

  const activeTab: ProgressTab = (VALID_TABS as readonly string[]).includes(tab ?? "")
    ? (tab as ProgressTab)
    : "overview";

  const fetchOverview = (response: Awaited<ReturnType<typeof api.progressionOverview>>) => {
    setLoading(false);
    if (response.ok) {
      setOverview(response.data);
      setError(null);
    } else {
      setError(response.error);
    }
  };

  useEffect(() => {
    if (!user) return;
    void api.progressionOverview().then(fetchOverview);
  }, [user]);

  const refresh = () => {
    setLoading(true);
    void api.progressionOverview().then(fetchOverview);
  };

  // Announce newly unlocked achievements exactly once per visit, then mark
  // them seen so the badge highlights don't nag.
  useEffect(() => {
    if (!overview || announcedUnlocks.current) return;
    const unseen = overview.achievements.all.filter((a) => a.unlocked && !a.seen);
    if (unseen.length === 0) return;
    announcedUnlocks.current = true;
    for (const achievement of unseen) {
      toast.success(`Achievement unlocked: ${achievement.title}`);
    }
    void api.markAchievementsSeen(unseen.map((a) => a.id));
  }, [overview]);

  if (!user) return null;

  if (loading) {
    return (
      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
        <Skeleton className="h-9 w-64" />
        <Skeleton className="mt-2 h-5 w-96" />
        <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {[...Array(4)].map((_, i) => (
            <Skeleton key={i} className="h-28" />
          ))}
        </div>
        <Skeleton className="mt-6 h-64" />
      </div>
    );
  }

  if (error || !overview) {
    return (
      <div className="mx-auto max-w-md px-4 py-20 text-center">
        <p className="font-semibold">Could not load your progress.</p>
        <p className="mt-1 text-sm text-muted-foreground">{error ?? "Please try again."}</p>
        <Button className="mt-4" onClick={refresh}>
          <RefreshCw className="mr-2 size-4" aria-hidden /> Try again
        </Button>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">My Progress</h1>
          <p className="mt-1.5 text-sm text-muted-foreground">
            Built from your verified activity — every point comes from something you actually did.
          </p>
        </div>
        <Button
          variant="outline"
          size="sm"
          className="gap-1.5"
          onClick={refresh}
          disabled={loading}
        >
          <RefreshCw className={`size-4 ${loading ? "animate-spin" : ""}`} aria-hidden />
          Refresh
        </Button>
      </div>

      <Tabs
        value={activeTab}
        onValueChange={(value) => navigate({ name: "progress", tab: value })}
        className="mt-8"
      >
        <TabsList className="flex h-auto w-full flex-wrap justify-start gap-1 p-1">
          <TabsTrigger value="overview" className="gap-1.5">
            <LayoutDashboard className="size-4" aria-hidden /> Overview
          </TabsTrigger>
          <TabsTrigger value="skills" className="gap-1.5">
            <BarChart3 className="size-4" aria-hidden /> Skills
          </TabsTrigger>
          <TabsTrigger value="activity" className="gap-1.5">
            <Activity className="size-4" aria-hidden /> Charts
          </TabsTrigger>
          <TabsTrigger value="revision" className="gap-1.5">
            <CalendarClock className="size-4" aria-hidden /> Revision
            {overview.revision.counts.due > 0 ? (
              <Badge className="ml-1 border-0 bg-rose-500/15 px-1.5 text-[10px] text-rose-600 dark:text-rose-400">
                {overview.revision.counts.due}
              </Badge>
            ) : null}
          </TabsTrigger>
          <TabsTrigger value="awards" className="gap-1.5">
            <Trophy className="size-4" aria-hidden /> Awards
            {overview.achievements.unseenCount > 0 ? (
              <Badge className="ml-1 border-0 bg-primary/15 px-1.5 text-[10px] text-primary">
                {overview.achievements.unseenCount}
              </Badge>
            ) : null}
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="mt-6">
          <OverviewTab overview={overview} onRefresh={refresh} />
        </TabsContent>
        <TabsContent value="skills" className="mt-6">
          <SkillsTab overview={overview} />
        </TabsContent>
        <TabsContent value="activity" className="mt-6">
          <ActivityTab overview={overview} />
        </TabsContent>
        <TabsContent value="revision" className="mt-6">
          <RevisionTab overview={overview} onRefresh={refresh} />
        </TabsContent>
        <TabsContent value="awards" className="mt-6">
          <AwardsTab overview={overview} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
