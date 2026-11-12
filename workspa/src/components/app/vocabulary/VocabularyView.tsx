"use client";

import { useCallback, useEffect, useState } from "react";
import {
  BookOpen,
  CalendarDays,
  Layers,
  LibraryBig,
  MessagesSquare,
  PenLine,
  Puzzle,
  Trophy,
  Waypoints,
} from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { api } from "@/lib/client/api";
import { useAppStore } from "@/lib/client/store";
import type { AppRoute } from "@/hooks/use-hash-route";
import type { WordListDto } from "@/lib/vocab/dto";
import { vocabWords } from "@/data/vocabulary";
import { TodayTab } from "./TodayTab";
import { ExploreTab } from "./ExploreTab";
import { FlashcardsTab } from "./FlashcardsTab";
import { ContextTab } from "./ContextTab";
import { RelationshipsTab } from "./RelationshipsTab";
import { SentencesTab } from "./SentencesTab";
import { ChallengesTab } from "./ChallengesTab";
import { ListsTab } from "./ListsTab";

const TABS = [
  { id: "today", label: "Today", icon: CalendarDays },
  { id: "explore", label: "Word Explorer", icon: LibraryBig },
  { id: "flashcards", label: "Flashcards", icon: Layers },
  { id: "context", label: "Context", icon: BookOpen },
  { id: "relationships", label: "Relationships", icon: Waypoints },
  { id: "sentences", label: "Sentences", icon: PenLine },
  { id: "challenges", label: "Challenges", icon: Trophy },
  { id: "lists", label: "My Lists", icon: MessagesSquare },
] as const;

export type VocabTabId = (typeof TABS)[number]["id"];

export function VocabularyView({
  route,
  navigate,
}: {
  route: { tab?: string; param?: string };
  navigate: (route: AppRoute) => void;
}) {
  const user = useAppStore((s) => s.user);
  const showTranslations = useAppStore((s) => s.showTranslations);
  const toggleTranslations = useAppStore((s) => s.toggleTranslations);
  const [lists, setLists] = useState<WordListDto[]>([]);

  const activeTab: VocabTabId = (TABS.some((t) => t.id === route.tab)
    ? route.tab
    : "today") as VocabTabId;

  // Shared word lists (used by the detail sheet's "Add to list" and the lists tab).
  const refreshLists = useCallback(async () => {
    if (!user) return;
    const res = await api.vocabLists();
    if (res.ok) setLists(res.data.lists);
  }, [user]);

  // Load lists on mount / login (inline async — project pattern).
  useEffect(() => {
    let cancelled = false;
    (async () => {
      if (!user) return;
      const res = await api.vocabLists();
      if (!cancelled && res.ok) setLists(res.data.lists);
    })();
    return () => {
      cancelled = true;
    };
  }, [user]);

  const openWord = useCallback(
    (wordId: string) => navigate({ name: "vocabulary", tab: "explore", param: wordId }),
    [navigate],
  );

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
      {/* Header */}
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Word World</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Explore {vocabWords.length}+ words, learn them in context, and remember them with
            smart spaced repetition.
          </p>
        </div>
        <div className="flex items-center gap-2 rounded-full border bg-card px-3 py-1.5">
          <Switch
            id="vocab-translations"
            checked={showTranslations}
            onCheckedChange={toggleTranslations}
            aria-label="Toggle support-language translations"
          />
          <Label
            htmlFor="vocab-translations"
            className="cursor-pointer text-xs font-medium text-muted-foreground"
          >
            Español
          </Label>
        </div>
      </div>

      {/* Tab bar */}
      <nav
        className="mt-6 flex gap-1.5 overflow-x-auto pb-1"
        aria-label="Vocabulary modes"
      >
        {TABS.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => navigate({ name: "vocabulary", tab: tab.id })}
            aria-current={activeTab === tab.id ? "page" : undefined}
            className={cn(
              "inline-flex shrink-0 items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors",
              activeTab === tab.id
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-card text-foreground hover:border-primary/50",
            )}
          >
            <tab.icon className="size-4" aria-hidden />
            {tab.label}
          </button>
        ))}
      </nav>

      {/* Active tab */}
      <div className="mt-6">
        {activeTab === "today" ? (
          <TodayTab navigate={navigate} onOpenWord={openWord} />
        ) : null}
        {activeTab === "explore" ? (
          <ExploreTab
            key={`explore-${route.param ?? ""}`}
            navigate={navigate}
            focusParam={route.tab === "explore" ? route.param : undefined}
            lists={lists}
            onListsChanged={refreshLists}
          />
        ) : null}
        {activeTab === "flashcards" ? (
          <FlashcardsTab
            initialStudy={route.tab === "flashcards" ? route.param : undefined}
            navigate={navigate}
          />
        ) : null}
        {activeTab === "context" ? (
          <ContextTab
            focusItemId={route.tab === "context" ? route.param : undefined}
            onOpenWord={openWord}
          />
        ) : null}
        {activeTab === "relationships" ? (
          <RelationshipsTab
            key={`rel-${route.param ?? ""}`}
            focusWordId={route.tab === "relationships" ? route.param : undefined}
            onOpenWord={openWord}
            navigate={navigate}
          />
        ) : null}
        {activeTab === "sentences" ? (
          <SentencesTab
            key={`sent-${route.param ?? ""}`}
            initialWordId={route.tab === "sentences" ? route.param : undefined}
            navigate={navigate}
          />
        ) : null}
        {activeTab === "challenges" ? (
          <ChallengesTab
            initialKind={route.tab === "challenges" ? route.param : undefined}
            navigate={navigate}
          />
        ) : null}
        {activeTab === "lists" ? (
          <ListsTab
            lists={lists}
            onListsChanged={refreshLists}
            navigate={navigate}
          />
        ) : null}
      </div>
    </div>
  );
}
