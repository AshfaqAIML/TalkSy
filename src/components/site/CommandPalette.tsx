"use client";

/**
 * The TalkSy command palette (Ctrl/Cmd + K) — global search and quick
 * navigation in one surface.
 *
 * Contents, all real:
 *  · Quick actions: continue learning (from real lesson progress), open
 *    dashboard, grammar, vocabulary, speaking practice, AI tutor.
 *  · Recent pages and recent searches (localStorage).
 *  · Full-text search across every course, lesson, exercise, grammar topic,
 *    word, practice activity, tutor mode and page — grouped by category,
 *    with filters, highlighting, loading and empty states.
 *
 * Keyboard: ↑/↓ move, ↵ open, Esc close (cmdk). Filter chips are standard
 * buttons reachable with Tab/Shift-Tab.
 */

import { useEffect, useMemo, useState } from "react";
import {
  ArrowRight,
  BookOpen,
  Brain,
  Clock,
  CornerDownLeft,
  FileText,
  History,
  LayoutDashboard,
  Loader2,
  Mic,
  Search,
  SearchX,
  Sparkles,
  SpellCheck,
} from "lucide-react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { api } from "@/lib/client/api";
import type { SessionUser } from "@/lib/client/api";
import { fetchSearchIndex } from "@/lib/client/search-client";
import {
  clearRecentSearches,
  getRecentPages,
  getRecentSearches,
  recordRecentPage,
  recordRecentSearch,
  type RecentPage,
} from "@/lib/client/recents";
import {
  FIRST_LESSON_SLUG,
  HUB_TITLES,
} from "@/lib/navigation";
import { getHub } from "@/lib/catalogue/hubs";
import { getPathDef } from "@/lib/catalogue/paths";
import { searchEntries, type SearchMatch } from "@/lib/search/match";
import {
  SEARCH_FILTER_GROUPS,
  type SearchCategory,
  type SearchEntry,
  type SearchFilterId,
} from "@/lib/search/types";
import type { AppRoute } from "@/hooks/use-hash-route";
import { routeToHash } from "@/hooks/use-hash-route";
import { cn } from "@/lib/utils";
import { SEARCH_CATEGORY_ICONS } from "./nav-icons";

interface ContinueTarget {
  href: string;
  title: string;
  meta: string;
}

/** Title with matched substrings marked. */
function HighlightedTitle({ title, ranges }: { title: string; ranges: [number, number][] }) {
  if (ranges.length === 0) return <>{title}</>;
  const parts: React.ReactNode[] = [];
  let cursor = 0;
  ranges.forEach(([start, end], i) => {
    if (start > cursor) parts.push(title.slice(cursor, start));
    parts.push(
      <mark key={i} className="rounded-sm bg-primary/15 px-0.5 text-foreground">
        {title.slice(start, end)}
      </mark>,
    );
    cursor = end;
  });
  if (cursor < title.length) parts.push(title.slice(cursor));
  return <>{parts}</>;
}

function ResultItem({
  match,
  onSelect,
}: {
  match: SearchMatch;
  onSelect: (entry: SearchEntry) => void;
}) {
  const Icon = SEARCH_CATEGORY_ICONS[match.entry.category];
  return (
    <CommandItem
      value={`${match.entry.title} ${match.entry.subtitle ?? ""}`}
      onSelect={() => onSelect(match.entry)}
      className="gap-3 py-2.5"
    >
      <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-lg bg-secondary text-muted-foreground">
        <Icon className="size-4" aria-hidden />
      </span>
      <span className="flex min-w-0 flex-col gap-0.5">
        <span className="truncate text-sm font-medium">
          <HighlightedTitle title={match.entry.title} ranges={match.titleRanges} />
        </span>
        <span className="truncate text-xs text-muted-foreground">
          {match.entry.description ?? match.entry.subtitle ?? match.entry.category}
        </span>
      </span>
      <span className="ml-auto flex shrink-0 items-center gap-1.5">
        {match.entry.difficulty ? (
          <Badge variant="secondary" className="px-1.5 py-0 text-[10px] font-semibold uppercase">
            {match.entry.difficulty}
          </Badge>
        ) : null}
        <span className="hidden text-[10px] uppercase tracking-wide text-muted-foreground sm:inline">
          {match.entry.category}
        </span>
      </span>
    </CommandItem>
  );
}

export function CommandPalette({
  open,
  onOpenChange,
  user,
  route,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  user: SessionUser | null;
  route: AppRoute;
}) {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<SearchFilterId>("all");
  const [index, setIndex] = useState<SearchEntry[] | null>(null);
  const [continueTo, setContinueTo] = useState<ContinueTarget | "loading" | null>(null);
  const [recentPages, setRecentPages] = useState<RecentPage[]>([]);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);

  // Record hub pages the user visits (also outside the palette).
  useEffect(() => {
    let title: string | undefined;
    if (route.name === "hub") {
      title = getHub(route.hubId)?.title;
    } else if (route.name === "paths") {
      title = route.slug ? getPathDef(route.slug)?.title : HUB_TITLES.paths;
    } else {
      title = HUB_TITLES[route.name];
    }
    if (title) {
      recordRecentPage({ title, href: routeToHash(route) });
    }
  }, [route]);

  // Load the search index when the palette is first opened.
  useEffect(() => {
    if (!open || index) return;
    void (async () => {
      const entries = await fetchSearchIndex();
      setIndex(entries);
    })();
  }, [open, index]);

  // Continue-learning target: the most recent in-progress lesson.
  // Anonymous visitors get lesson 1 (computed, no fetch needed).
  const anonymousTarget: ContinueTarget = useMemo(
    () => ({
      href: `#/lesson/${FIRST_LESSON_SLUG}`,
      title: "Start learning — Lesson 1",
      meta: "Hello! Everyday Greetings",
    }),
    [],
  );
  useEffect(() => {
    if (!open || !user) return;
    let active = true;
    void (async () => {
      setContinueTo("loading");
      const res = await api.progress();
      if (!active) return;
      if (!res.ok) {
        setContinueTo(null);
        return;
      }
      const inProgress = res.data.items.find(
        (item) => item.status === "in-progress" && !item.completion.completed,
      );
      if (inProgress) {
        setContinueTo({
          href: `#/lesson/${inProgress.lessonSlug}`,
          title: `Continue: ${inProgress.lessonTitle}`,
          meta: "Pick up where you left off",
        });
      } else {
        const anyCompleted = res.data.items.find((item) => item.completion.completed);
        setContinueTo(
          anyCompleted
            ? {
                href: "#/progress",
                title: "Review your progress",
                meta: "All started lessons are complete",
              }
            : {
                href: `#/lesson/${FIRST_LESSON_SLUG}`,
                title: "Start learning — Lesson 1",
                meta: "Hello! Everyday Greetings",
              },
        );
      }
    })();
    return () => {
      active = false;
    };
  }, [open, user]);

  // Refresh recents whenever the palette opens (async tick — the effect
  // body itself stays free of synchronous setState).
  useEffect(() => {
    if (!open) return;
    let active = true;
    void (async () => {
      await Promise.resolve();
      if (!active) return;
      setRecentPages(getRecentPages());
      setRecentSearches(getRecentSearches());
    })();
    return () => {
      active = false;
    };
  }, [open]);

  const trimmed = query.trim();
  // What to show as the continue-learning action: fetched progress for
  // signed-in learners, lesson 1 for everyone else.
  const continueTarget: ContinueTarget | "loading" | null = user
    ? continueTo
    : anonymousTarget;
  const results = useMemo(
    () => (index && trimmed ? searchEntries(index, trimmed, { filter }) : new Map()),
    [index, trimmed, filter],
  );
  const orderedGroups = useMemo(() => {
    const groups = [...results.entries()] as [SearchCategory, SearchMatch[]][];
    groups.sort((a, b) => b[1][0].score - a[1][0].score);
    return groups;
  }, [results]);
  const totalResults = useMemo(
    () => [...results.values()].reduce((sum, list) => sum + list.length, 0),
    [results],
  );

  const navigateTo = (href: string, title: string) => {
    recordRecentPage({ title, href });
    if (trimmed) recordRecentSearch(trimmed);
    window.location.hash = href.replace(/^#/, "");
    setQuery("");
    setFilter("all");
    onOpenChange(false);
  };

  const quickActions = [
    { icon: BookOpen, label: "Grammar School", href: "#/grammar" },
    { icon: Brain, label: "Word World (vocabulary)", href: "#/vocabulary" },
    { icon: Mic, label: "Start a speaking activity", href: "#/speaking" },
    { icon: Sparkles, label: "Open AI Tutor", href: "#/tutor" },
    { icon: FileText, label: "Open My Progress (full analytics)", href: "#/progress" },
    { icon: LayoutDashboard, label: "Open my dashboard", href: "#/dashboard" },
  ];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="top-[12%] translate-y-0 gap-0 overflow-hidden p-0 sm:max-w-xl"
        showCloseButton={false}
      >
        <DialogHeader className="sr-only">
          <DialogTitle>Search TalkSy</DialogTitle>
          <DialogDescription>
            Search courses, lessons, grammar, vocabulary and practice activities, or jump
            to a page.
          </DialogDescription>
        </DialogHeader>
        <Command shouldFilter={false} className="[&_[cmdk-group-heading]]:px-2">
          <CommandInput
            placeholder="Search lessons, grammar, words, courses…"
            value={query}
            onValueChange={setQuery}
          />

          {/* Filter chips (visible once there is a query) */}
          {trimmed ? (
            <div
              className="flex flex-wrap items-center gap-1.5 border-b px-3 py-2"
              role="group"
              aria-label="Filter results by category"
            >
              {SEARCH_FILTER_GROUPS.map((group) => (
                <button
                  key={group.id}
                  type="button"
                  aria-pressed={filter === group.id}
                  onClick={() => setFilter(group.id)}
                  className={cn(
                    "rounded-full border px-2.5 py-1 text-xs font-medium transition-colors",
                    filter === group.id
                      ? "border-primary bg-primary text-primary-foreground"
                      : "bg-background text-muted-foreground hover:bg-secondary hover:text-foreground",
                  )}
                >
                  {group.label}
                </button>
              ))}
            </div>
          ) : null}

          <CommandList className="max-h-[min(24rem,60vh)]">
            {trimmed ? (
              <>
                {/* Courses still loading: skeleton under their group */}
                {index === null ? (
                  <div className="flex flex-col gap-2 px-3 py-3" aria-busy="true">
                    <span className="sr-only" role="status">
                      Loading the search index
                    </span>
                    <Skeleton className="h-11 w-full" />
                    <Skeleton className="h-11 w-full" />
                    <Skeleton className="h-11 w-full" />
                  </div>
                ) : null}

                {orderedGroups.map(([category, matches]) => (
                  <CommandGroup key={category} heading={category}>
                    {matches.map((match) => (
                      <ResultItem
                        key={match.entry.id}
                        match={match}
                        onSelect={(entry) => navigateTo(entry.href, entry.title)}
                      />
                    ))}
                  </CommandGroup>
                ))}

                {index !== null && totalResults === 0 ? (
                  <CommandEmpty>
                    <span className="mt-2 inline-flex size-10 items-center justify-center rounded-full bg-secondary">
                      <SearchX className="size-5 text-muted-foreground" aria-hidden />
                    </span>
                    <span className="mt-3 block text-sm font-medium">
                      No results for “{trimmed}”
                    </span>
                    <span className="mt-1 block text-xs text-muted-foreground">
                      Try fewer words, or browse Grammar School, Word World and the
                      Reading Room from the Actions below.
                    </span>
                  </CommandEmpty>
                ) : null}
              </>
            ) : (
              <>
                <CommandGroup heading="Actions">
                  {continueTarget === "loading" ? (
                    <div className="flex items-center gap-3 px-2 py-2.5 text-sm text-muted-foreground" aria-busy="true">
                      <span className="sr-only" role="status">Loading your progress</span>
                      <Loader2 className="size-4 animate-spin" aria-hidden />
                      Finding where you left off…
                    </div>
                  ) : continueTarget ? (
                    <CommandItem
                      value={`continue ${continueTarget.title}`}
                      onSelect={() => navigateTo(continueTarget.href, continueTarget.title)}
                      className="gap-3 py-2.5"
                    >
                      <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <CornerDownLeft className="size-4" aria-hidden />
                      </span>
                      <span className="flex min-w-0 flex-col gap-0.5">
                        <span className="truncate text-sm font-semibold text-primary">
                          {continueTarget.title}
                        </span>
                        <span className="truncate text-xs text-muted-foreground">
                          {continueTarget.meta}
                        </span>
                      </span>
                    </CommandItem>
                  ) : null}
                  {quickActions.map((action) => (
                    <CommandItem
                      key={action.href}
                      value={action.label}
                      onSelect={() => navigateTo(action.href, action.label)}
                      className="gap-3 py-2.5"
                    >
                      <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-lg bg-secondary text-muted-foreground">
                        <action.icon className="size-4" aria-hidden />
                      </span>
                      <span className="text-sm">{action.label}</span>
                    </CommandItem>
                  ))}
                </CommandGroup>

                {recentPages.length > 0 ? (
                  <CommandGroup heading="Recent pages">
                    {recentPages.slice(0, 5).map((page) => (
                      <CommandItem
                        key={page.href}
                        value={`recent page ${page.title}`}
                        onSelect={() => navigateTo(page.href, page.title)}
                        className="gap-3 py-2"
                      >
                        <History className="size-4 shrink-0 text-muted-foreground" aria-hidden />
                        <span className="truncate text-sm">{page.title}</span>
                      </CommandItem>
                    ))}
                  </CommandGroup>
                ) : null}

                {recentSearches.length > 0 ? (
                  <CommandGroup
                    heading={
                      <span className="flex w-full items-center justify-between">
                        Recent searches
                        <button
                          type="button"
                          onClick={(event) => {
                            event.stopPropagation();
                            clearRecentSearches();
                            setRecentSearches([]);
                          }}
                          className="rounded px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-muted-foreground transition-colors hover:text-foreground"
                        >
                          Clear
                        </button>
                      </span>
                    }
                  >
                    {recentSearches.slice(0, 5).map((term) => (
                      <CommandItem
                        key={term}
                        value={`search ${term}`}
                        onSelect={() => setQuery(term)}
                        className="gap-3 py-2"
                      >
                        <Search className="size-4 shrink-0 text-muted-foreground" aria-hidden />
                        <span className="truncate text-sm">{term}</span>
                        <span className="ml-auto text-[10px] uppercase tracking-wide text-muted-foreground">
                          Search again
                        </span>
                      </CommandItem>
                    ))}
                  </CommandGroup>
                ) : null}

                <CommandGroup heading="Browse">
                  {[
                    { label: "Learning path", href: "#/library" },
                    { label: "Reading Room", href: "#/reading" },
                    { label: "Listening Lab", href: "#/listening" },
                    { label: "Writing Studio", href: "#/writing" },
                    { label: "Courses", href: "#/courses" },
                    { label: "Exam Academy (IELTS & TOEFL)", href: "#/exams" },
                    { label: "Learning Tips", href: "#/tips" },
                  ].map((dest) => (
                    <CommandItem
                      key={dest.href}
                      value={dest.label}
                      onSelect={() => navigateTo(dest.href, dest.label)}
                      className="gap-3 py-2"
                    >
                      <ArrowRight className="size-4 shrink-0 text-muted-foreground" aria-hidden />
                      <span className="text-sm">{dest.label}</span>
                    </CommandItem>
                  ))}
                </CommandGroup>
              </>
            )}
          </CommandList>

          <div className="flex items-center justify-between gap-3 border-t px-3 py-2 text-[11px] text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <kbd className="rounded border bg-secondary px-1 font-mono">↑</kbd>
              <kbd className="rounded border bg-secondary px-1 font-mono">↓</kbd>
              navigate
              <kbd className="ml-1 rounded border bg-secondary px-1 font-mono">↵</kbd>
              open
              <kbd className="ml-1 rounded border bg-secondary px-1 font-mono">esc</kbd>
              close
            </span>
            <span className="flex items-center gap-1">
              <Clock className="size-3" aria-hidden /> recents stay on this device
            </span>
          </div>
        </Command>
      </DialogContent>
    </Dialog>
  );
}
