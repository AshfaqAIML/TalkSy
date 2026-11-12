"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Filter, LibraryBig, Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import { api, type VocabCategoriesDto } from "@/lib/client/api";
import { getVocabWord } from "@/data/vocabulary";
import { useAppStore } from "@/lib/client/store";
import type { AppRoute } from "@/hooks/use-hash-route";
import type { AnnotatedWord, WordListDto } from "@/lib/vocab/dto";
import { ErrorText, SectionHeading, WordCard } from "./shared";
import { WordDetailSheet } from "./WordDetailSheet";

const PAGE_SIZE = 24;

/**
 * Word Explorer: full-text search (English + Spanish + synonyms +
 * collocations), category/subcategory/difficulty/status filters, sorting and
 * pagination over the whole word database.
 */
export function ExploreTab({
  navigate,
  focusParam,
  lists,
  onListsChanged,
}: {
  navigate: (route: AppRoute) => void;
  focusParam?: string;
  lists: WordListDto[];
  onListsChanged: () => void;
}) {
  const user = useAppStore((s) => s.user);
  // Deep-link focus: a word id opens the word sheet, a category id filters.
  const focusWord = focusParam ? getVocabWord(focusParam) : undefined;
  const [query, setQuery] = useState("");
  const [debouncedQ, setDebouncedQ] = useState("");
  const [category, setCategory] = useState(focusWord ? "all" : focusParam ?? "all");
  const [sub, setSub] = useState("all");
  const [difficulty, setDifficulty] = useState("all");
  const [status, setStatus] = useState("all");
  const [sort, setSort] = useState("relevance");
  const [offset, setOffset] = useState(0);
  const [openWordId, setOpenWordId] = useState<string | null>(focusWord?.id ?? null);
  const [categories, setCategories] = useState<VocabCategoriesDto["categories"]>([]);
  const [result, setResult] = useState<{
    key: string;
    words: AnnotatedWord[];
    total: number;
    error: string;
  } | null>(null);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    (async () => {
      const res = await api.vocabCategories();
      if (res.ok) setCategories(res.data.categories);
    })();
  }, []);

  // Debounce the search box.
  useEffect(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      setDebouncedQ(query.trim());
      setOffset(0);
    }, 250);
    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, [query]);

  const activeCategory = useMemo(
    () => categories.find((c) => c.id === category),
    [categories, category],
  );

  // Derived loading: a request is in flight when the loaded result doesn't
  // match the current filter key. (No synchronous setState in effects.)
  const requestKey = JSON.stringify([
    debouncedQ,
    category,
    sub,
    difficulty,
    status,
    sort,
    offset,
    user?.id ?? "guest",
  ]);
  const loading = result?.key !== requestKey;
  const words = loading ? [] : (result?.words ?? []);
  const total = loading ? 0 : (result?.total ?? 0);
  const error = loading ? "" : (result?.error ?? "");

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const res = await api.vocabWords({
        q: debouncedQ || undefined,
        category: category !== "all" ? category : undefined,
        sub: sub !== "all" ? sub : undefined,
        difficulty: difficulty !== "all" ? difficulty : undefined,
        status: status !== "all" && user ? status : undefined,
        sort,
        limit: PAGE_SIZE,
        offset,
      });
      if (cancelled) return;
      setResult({
        key: requestKey,
        words: res.ok ? res.data.words : [],
        total: res.ok ? res.data.total : 0,
        error: res.ok ? "" : res.error,
      });
    })();
    return () => {
      cancelled = true;
    };
  }, [debouncedQ, category, sub, difficulty, status, sort, offset, user, requestKey]);

  const toggleBookmark = async (wordId: string) => {
    if (!user) {
      navigate({ name: "login" });
      return;
    }
    const res = await api.vocabToggleBookmark(wordId);
    if (res.ok) {
      setResult((prev) =>
        prev
          ? {
              ...prev,
              words: prev.words.map((w) =>
                w.word.id === wordId ? { ...w, bookmarked: res.data.bookmarked } : w,
              ),
            }
          : prev,
      );
    }
  };

  const resetFilters = () => {
    setQuery("");
    setDebouncedQ("");
    setCategory("all");
    setSub("all");
    setDifficulty("all");
    setStatus("all");
    setSort("relevance");
    setOffset(0);
  };

  const page = Math.floor(offset / PAGE_SIZE) + 1;
  const pages = Math.max(1, Math.ceil(total / PAGE_SIZE));

  return (
    <div className="flex flex-col gap-5">
      <SectionHeading
        icon={<LibraryBig className="size-5 text-primary" aria-hidden />}
        title="Word Explorer"
        description="Search in English or Español — every word shows pronunciation, audio, meanings, family and collocations."
      />

      {/* Search & filters */}
      <div className="flex flex-col gap-3 rounded-2xl border bg-card p-4">
        <div className="flex flex-col gap-3 sm:flex-row">
          <div className="relative flex-1">
            <Search
              className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
              aria-hidden
            />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search a word, a meaning, una traducción…"
              aria-label="Search words"
              className="pl-9"
            />
            {query ? (
              <button
                type="button"
                aria-label="Clear search"
                onClick={() => setQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                <X className="size-4" aria-hidden />
              </button>
            ) : null}
          </div>
          <Button
            variant="ghost"
            size="sm"
            className="gap-1.5 self-start sm:hidden"
            onClick={resetFilters}
          >
            <Filter className="size-4" aria-hidden /> Reset
          </Button>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <Select value={category} onValueChange={(v) => { setCategory(v); setSub("all"); setOffset(0); }}>
            <SelectTrigger className="h-9 w-[160px]" aria-label="Filter by category">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All categories</SelectItem>
              {categories.map((c) => (
                <SelectItem key={c.id} value={c.id}>
                  {c.name} ({c.total})
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {activeCategory ? (
            <Select value={sub} onValueChange={(v) => { setSub(v); setOffset(0); }}>
              <SelectTrigger className="h-9 w-[170px]" aria-label="Filter by subcategory">
                <SelectValue placeholder="Subcategory" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All subcategories</SelectItem>
                {activeCategory.subcategories.map((s) => (
                  <SelectItem key={s.id} value={s.id}>
                    {s.name} ({s.total})
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          ) : null}

          <Select value={difficulty} onValueChange={(v) => { setDifficulty(v); setOffset(0); }}>
            <SelectTrigger className="h-9 w-[130px]" aria-label="Filter by difficulty">
              <SelectValue placeholder="Difficulty" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Any level</SelectItem>
              <SelectItem value="easy">Easy</SelectItem>
              <SelectItem value="medium">Medium</SelectItem>
              <SelectItem value="hard">Hard</SelectItem>
              <SelectItem value="challenge">Challenge</SelectItem>
            </SelectContent>
          </Select>

          {user ? (
            <Select value={status} onValueChange={(v) => { setStatus(v); setOffset(0); }}>
              <SelectTrigger className="h-9 w-[140px]" aria-label="Filter by learning status">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Any status</SelectItem>
                <SelectItem value="learning">Learning</SelectItem>
                <SelectItem value="reviewing">Reviewing</SelectItem>
                <SelectItem value="mastered">Mastered</SelectItem>
              </SelectContent>
            </Select>
          ) : null}

          <Select value={sort} onValueChange={(v) => { setSort(v); setOffset(0); }}>
            <SelectTrigger className="h-9 w-[160px]" aria-label="Sort words">
              <SelectValue placeholder="Sort" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="relevance">Best match</SelectItem>
              <SelectItem value="alphabetical">A → Z</SelectItem>
              <SelectItem value="difficulty">By level</SelectItem>
              {user ? <SelectItem value="recent">Recently studied</SelectItem> : null}
              {user ? <SelectItem value="due">Due soonest</SelectItem> : null}
            </SelectContent>
          </Select>

          <Button variant="ghost" size="sm" className="ml-auto hidden gap-1.5 sm:inline-flex" onClick={resetFilters}>
            Reset
          </Button>
        </div>
      </div>

      <ErrorText>{error}</ErrorText>

      {/* Results */}
      {loading ? (
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <Skeleton key={i} className="h-32 rounded-2xl" />
          ))}
        </div>
      ) : words.length === 0 ? (
        <div className="rounded-2xl border border-dashed p-10 text-center">
          <p className="font-semibold">No words match your search.</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Try another spelling, a Spanish word, or reset the filters.
          </p>
          <Button variant="outline" size="sm" className="mt-4" onClick={resetFilters}>
            Reset filters
          </Button>
        </div>
      ) : (
        <>
          <p className="text-sm text-muted-foreground" role="status">
            {total} word{total === 1 ? "" : "s"} found{debouncedQ ? ` for “${debouncedQ}”` : ""}
          </p>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {words.map((item) => (
              <WordCard
                key={item.word.id}
                word={item.word}
                bookmarked={item.bookmarked}
                progress={item.progress}
                onOpen={() => setOpenWordId(item.word.id)}
                onBookmark={() => toggleBookmark(item.word.id)}
              />
            ))}
          </div>

          {/* Pagination */}
          {pages > 1 ? (
            <div className="flex items-center justify-center gap-2">
              <Button
                variant="outline"
                size="sm"
                disabled={offset === 0}
                onClick={() => setOffset(Math.max(0, offset - PAGE_SIZE))}
                aria-label="Previous page"
              >
                <ChevronLeft className="size-4" aria-hidden /> Prev
              </Button>
              <span className="text-sm text-muted-foreground">
                Page {page} of {pages}
              </span>
              <Button
                variant="outline"
                size="sm"
                disabled={offset + PAGE_SIZE >= total}
                onClick={() => setOffset(offset + PAGE_SIZE)}
                aria-label="Next page"
              >
                Next <ChevronRight className="size-4" aria-hidden />
              </Button>
            </div>
          ) : null}
        </>
      )}

      <WordDetailSheet
        wordId={openWordId}
        lists={lists}
        onClose={() => {
          setOpenWordId(null);
          onListsChanged();
        }}
        onNavigate={navigate}
      />
    </div>
  );
}
