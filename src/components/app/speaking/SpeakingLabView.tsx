"use client";

/**
 * Speaking Lab — the hub for everything spoken: progressive practice
 * activities in three tiers, the conversation simulator with eleven
 * role-play scenarios, four pronunciation categories, and settings &
 * privacy.
 */

import { useEffect, useState } from "react";
import {
  ArrowRight,
  Bot,
  CheckCircle2,
  Mic,
  MessageCircle,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Skeleton } from "@/components/ui/skeleton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import {
  api,
  type SpeakingLibraryDto,
  type SpeakingSettingsDto,
} from "@/lib/client/api";
import { useAppStore } from "@/lib/client/store";
import type { AppRoute } from "@/hooks/use-hash-route";
import { TIER_META, SCENARIO_CATEGORY_LABELS, type SpeakingTier } from "@/data/speaking/types";
import { PronunciationPanel } from "./PronunciationPanel";
import { SettingsPanel } from "./SettingsPanel";

const TIERS: SpeakingTier[] = ["beginner", "intermediate", "advanced"];

export function SpeakingLabView({
  navigate,
  tab,
}: {
  navigate: (route: AppRoute) => void;
  tab?: string;
}) {
  const user = useAppStore((s) => s.user);
  const userLoaded = useAppStore((s) => s.userLoaded);
  const [library, setLibrary] = useState<SpeakingLibraryDto | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (userLoaded && user) {
      void api.speakingLibrary().then((response) => {
        if (response.ok) setLibrary(response.data);
        else setError(response.error);
      });
    }
  }, [user, userLoaded]);

  if (userLoaded && !user) {
    return (
      <div className="mx-auto max-w-md px-4 py-20 text-center">
        <Mic className="mx-auto size-10 text-primary" aria-hidden />
        <h1 className="mt-3 text-2xl font-bold">Speaking Lab</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Progressive speaking practice, real conversations with an AI partner,
          and pronunciation work — with your voice, your recordings and your
          privacy in your control. Log in to start.
        </p>
        <Button className="mt-4" onClick={() => navigate({ name: "login" })}>
          Go to login
        </Button>
      </div>
    );
  }

  const activeTab = ["practice", "conversations", "pronunciation", "settings"].includes(tab ?? "")
    ? (tab as string)
    : "practice";

  return (
    <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="flex items-center gap-2.5 text-3xl font-bold tracking-tight">
            <span className="inline-flex size-10 items-center justify-center rounded-xl bg-primary/10">
              <Mic className="size-5 text-primary" aria-hidden />
            </span>
            Speaking Lab
          </h1>
          <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
            Progressive speaking activities, role-play conversations with an AI
            partner, and pronunciation practice. Recordings start only when you
            press Record — your audio is never stored.
          </p>
        </div>
        {library ? (
          <div className="flex gap-3 text-center text-sm">
            <div className="rounded-xl border bg-card px-4 py-2">
              <p className="text-xl font-bold">{library.stats.attempts}</p>
              <p className="text-xs text-muted-foreground">takes</p>
            </div>
            <div className="rounded-xl border bg-card px-4 py-2">
              <p className="text-xl font-bold">{library.stats.conversationsCompleted}</p>
              <p className="text-xs text-muted-foreground">conversations</p>
            </div>
            <div className="rounded-xl border bg-card px-4 py-2">
              <p className="text-xl font-bold">{library.stats.pronunciationAttempts}</p>
              <p className="text-xs text-muted-foreground">pron. takes</p>
            </div>
          </div>
        ) : null}
      </div>

      {error ? <p className="mt-6 text-sm text-destructive">{error}</p> : null}

      <Tabs defaultValue={activeTab} className="mt-6" key={activeTab}>
        <TabsList className="grid h-auto w-full grid-cols-2 sm:grid-cols-4">
          <TabsTrigger value="practice" className="gap-1.5">
            <Sparkles className="size-4" aria-hidden /> Practice
          </TabsTrigger>
          <TabsTrigger value="conversations" className="gap-1.5">
            <Bot className="size-4" aria-hidden /> Conversations
          </TabsTrigger>
          <TabsTrigger value="pronunciation" className="gap-1.5">
            <Mic className="size-4" aria-hidden /> Pronunciation
          </TabsTrigger>
          <TabsTrigger value="settings" className="gap-1.5">
            <ShieldCheck className="size-4" aria-hidden /> Settings
          </TabsTrigger>
        </TabsList>

        {/* -------------------- Practice -------------------- */}
        <TabsContent value="practice" className="mt-6 space-y-8">
          {!library ? (
            [0, 1, 2].map((i) => <Skeleton key={i} className="h-44 rounded-2xl" />)
          ) : (
            TIERS.map((tier) => {
              const activities = library.activities.filter((a) => a.tier === tier);
              const completed = activities.filter(
                (a) => a.progress?.status === "completed",
              ).length;
              const meta = TIER_META[tier];
              return (
                <section key={tier} aria-labelledby={`tier-${tier}`}>
                  <div className="flex flex-wrap items-center gap-3">
                    <span
                      className={cn(
                        "inline-flex size-9 shrink-0 items-center justify-center rounded-full border-2 text-sm font-bold",
                        completed === activities.length && activities.length > 0
                          ? "border-emerald-400 bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300"
                          : "border-primary/30 bg-primary/5 text-primary",
                      )}
                      aria-hidden
                    >
                      {completed === activities.length && activities.length > 0 ? (
                        <CheckCircle2 className="size-4" />
                      ) : (
                        TIERS.indexOf(tier) + 1
                      )}
                    </span>
                    <div>
                      <h2 id={`tier-${tier}`} className="font-bold">
                        {meta.name}{" "}
                        <span className="ml-1 text-xs font-medium text-muted-foreground">
                          {meta.cefr}
                        </span>
                      </h2>
                      <p className="text-sm text-muted-foreground">{meta.tagline}</p>
                    </div>
                    <Badge variant="secondary" className="ml-auto shrink-0">
                      {completed}/{activities.length} completed
                    </Badge>
                  </div>

                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    {activities.map((activity) => (
                      <button
                        key={activity.id}
                        type="button"
                        onClick={() =>
                          navigate({ name: "speaking", view: "activity", slug: activity.slug })
                        }
                        className="group rounded-2xl border bg-card p-4 text-left transition-all hover:border-primary/50 hover:shadow-md"
                      >
                        <div className="flex items-center justify-between gap-2">
                          <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                            {`${activity.taskCount} ${activity.taskCount === 1 ? "task" : "tasks"} · ${activity.estimatedMinutes} min`}
                          </p>
                          {activity.progress?.status === "completed" ? (
                            <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                              <CheckCircle2 className="size-3.5" aria-hidden /> Done
                            </span>
                          ) : activity.progress ? (
                            <span className="text-xs text-muted-foreground">
                              {`${activity.progress.passedCount}/${activity.progress.totalTasks} passed`}
                            </span>
                          ) : (
                            <span className="text-xs text-muted-foreground">Not started</span>
                          )}
                        </div>
                        <h3 className="mt-1 font-semibold group-hover:text-primary">
                          {activity.title}
                        </h3>
                        <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">
                          {activity.description}
                        </p>
                        {activity.progress ? (
                          <Progress
                            value={
                              (activity.progress.passedCount / activity.progress.totalTasks) * 100
                            }
                            className="mt-2.5 h-1.5"
                          />
                        ) : null}
                      </button>
                    ))}
                  </div>
                </section>
              );
            })
          )}
        </TabsContent>

        {/* -------------------- Conversations -------------------- */}
        <TabsContent value="conversations" className="mt-6">
          {!library ? (
            <Skeleton className="h-44 rounded-2xl" />
          ) : (
            <div className="space-y-8">
              <p className="flex items-start gap-2 rounded-xl border border-primary/30 bg-primary/5 p-3 text-sm">
                <MessageCircle className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
                Pick a scenario and a difficulty. The AI partner plays their role
                without interrupting you; the coaching report arrives at the end.
                If the AI is unreachable, an authored script keeps the
                conversation alive.
              </p>
              {(["everyday", "services", "travel", "professional"] as const).map((category) => {
                const scenarios = library.scenarios.filter((s) => s.category === category);
                if (scenarios.length === 0) return null;
                return (
                  <section key={category}>
                    <h2 className="font-bold">{SCENARIO_CATEGORY_LABELS[category]}</h2>
                    <div className="mt-3 grid gap-3 sm:grid-cols-2">
                      {scenarios.map((scenario) => (
                        <button
                          key={scenario.id}
                          type="button"
                          onClick={() =>
                            navigate({
                              name: "speaking",
                              view: "conversation",
                              slug: scenario.slug,
                            })
                          }
                          className="group rounded-2xl border bg-card p-4 text-left transition-all hover:border-primary/50 hover:shadow-md"
                        >
                          <div className="flex items-start justify-between gap-2">
                            <h3 className="font-semibold group-hover:text-primary">
                              <span className="mr-1.5" aria-hidden>
                                {scenario.emoji}
                              </span>
                              {scenario.title}
                            </h3>
                            <Badge variant="secondary" className="shrink-0">
                              {scenario.levels.length} levels
                            </Badge>
                          </div>
                          <p className="mt-1 text-sm text-muted-foreground">
                            {scenario.description}
                          </p>
                          <p className="mt-2 flex items-center gap-1 text-xs font-medium text-primary">
                            {`Talk with ${scenario.partner.name}`}
                            <ArrowRight className="size-3.5" aria-hidden />
                          </p>
                        </button>
                      ))}
                    </div>
                  </section>
                );
              })}
            </div>
          )}
        </TabsContent>

        {/* -------------------- Pronunciation -------------------- */}
        <TabsContent value="pronunciation" className="mt-6 space-y-8">
          {!library || !library.settings ? (
            [0, 1, 2, 3].map((i) => <Skeleton key={i} className="h-36 rounded-2xl" />)
          ) : (
            library.pronunciation.categories.map((category) => (
              <section key={category.id} aria-labelledby={`pron-${category.id}`}>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-full border-2 border-primary/30 bg-primary/5 text-sm font-bold text-primary">
                    <Mic className="size-4" aria-hidden />
                  </span>
                  <div>
                    <h2 id={`pron-${category.id}`} className="font-bold">
                      {category.name}
                    </h2>
                    <p className="text-sm text-muted-foreground">{category.tagline}</p>
                  </div>
                  <Badge variant="secondary" className="ml-auto shrink-0">
                    {category.itemCount} items
                  </Badge>
                </div>
                <div className="mt-4">
                  <PronunciationPanel
                    items={library.pronunciation.items.filter(
                      (item) => item.category === category.id,
                    )}
                    category={category.id as "stress" | "sounds" | "rhythm" | "intonation"}
                    settings={library.settings}
                  />
                </div>
              </section>
            ))
          )}
        </TabsContent>

        {/* -------------------- Settings -------------------- */}
        <TabsContent value="settings" className="mt-6">
          {!library ? (
            <Skeleton className="h-64 rounded-2xl" />
          ) : (
            <SettingsPanel
              settings={library.settings}
              onChanged={(settings: SpeakingSettingsDto) =>
                setLibrary((previous) => (previous ? { ...previous, settings } : previous))
              }
            />
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}
