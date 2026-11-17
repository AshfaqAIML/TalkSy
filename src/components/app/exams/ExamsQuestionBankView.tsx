"use client";

/**
 * TALK SY Original Examination Question Bank — the searchable browser
 * (PROMPT 54).
 *
 * One surface over every practice item in both examinations: 950 original,
 * machine-validated items across the eight content banks, organised by
 * examination, version, section, official task family, difficulty and the
 * twelve unified topic domains, with free-text search and deep links into
 * every item's real player.
 *
 * Writing and Speaking items show their scoring-rubric criteria and
 * reference-example markers — they are never presented as ordinary
 * multiple-choice questions. Everything on this page is labelled TalkSy
 * original practice content; no official paper or commercial question bank
 * is reproduced anywhere.
 */

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowLeft,
  BookOpenCheck,
  ChevronLeft,
  ChevronRight,
  Clock3,
  FileSearch,
  FlaskConical,
  ListChecks,
  Search,
  Sparkles,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import type { AppRoute } from "@/hooks/use-hash-route";
import {
  examApi,
  type QuestionBankFacetsDto,
  type QuestionBankItemDto,
  type QuestionBankResponse,
} from "@/lib/client/exam-api";

type Stats = NonNullable<QuestionBankResponse["stats"]>;

const EXAM_FILTERS = [
  { value: "", label: "All exams" },
  { value: "ielts", label: "IELTS" },
  { value: "toefl", label: "TOEFL" },
] as const;

const SECTION_FILTERS = [
  { value: "", label: "All sections" },
  { value: "listening", label: "Listening" },
  { value: "reading", label: "Reading" },
  { value: "writing", label: "Writing" },
  { value: "speaking", label: "Speaking" },
] as const;

const VERSION_LABELS: Record<string, string> = {
  academic: "Academic",
  "general-training": "General Training",
  common: "Both variants",
  "toefl-2026": "TOEFL 2026",
};

const TOPIC_LABELS: Record<string, string> = {
  science: "Science",
  technology: "Technology",
  education: "Education",
  environment: "Environment",
  culture: "Culture",
  society: "Society",
  history: "History",
  health: "Health",
  economics: "Economics",
  everyday: "Everyday communication",
  university: "University life",
  workplace: "Workplace situations",
};

const SECTION_ICONS: Record<string, string> = {
  listening: "text-sky-300",
  reading: "text-cyan-300",
  writing: "text-violet-300",
  speaking: "text-teal-300",
};

function bankLabel(key: string): string {
  const [exam, section] = key.split("/");
  return `${exam === "ielts" ? "IELTS" : "TOEFL"} ${section[0].toUpperCase()}${section.slice(1)}`;
}

export function ExamsQuestionBankView({ navigate }: { navigate: (r: AppRoute) => void }) {
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [exam, setExam] = useState("");
  const [version, setVersion] = useState("");
  const [section, setSection] = useState("");
  const [topic, setTopic] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [type, setType] = useState("");
  const [page, setPage] = useState(1);

  const [items, setItems] = useState<QuestionBankItemDto[]>([]);
  const [total, setTotal] = useState(0);
  const [pages, setPages] = useState(1);
  const [facets, setFacets] = useState<QuestionBankFacetsDto | null>(null);
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const reqId = useRef(0);

  // Debounce the free-text query.
  useEffect(() => {
    const t = setTimeout(() => setDebouncedQuery(query), 250);
    return () => clearTimeout(t);
  }, [query]);

  const params = useMemo(() => {
    const p = new URLSearchParams();
    if (debouncedQuery.trim()) p.set("q", debouncedQuery.trim());
    if (exam) p.set("exam", exam);
    if (version) p.set("version", version);
    if (section) p.set("section", section);
    if (topic) p.set("topic", topic);
    if (difficulty) p.set("difficulty", difficulty);
    if (type) p.set("type", type);
    p.set("facets", "1");
    if (!stats) p.set("stats", "1");
    return p;
  }, [debouncedQuery, exam, version, section, topic, difficulty, type, stats]);

  const load = useCallback(
    async (targetPage: number) => {
      const id = ++reqId.current;
      // Yield first so no state update happens synchronously inside a
      // React effect's call stack (react-hooks/set-state-in-effect).
      await Promise.resolve();
      if (id !== reqId.current) return;
      setLoading(true);
      const p = new URLSearchParams(params);
      p.set("page", String(targetPage));
      try {
        const response = await examApi.questionBank(p.toString());
        if (id !== reqId.current) return;
        if (!response.ok) throw new Error(response.error);
        const res = response.data;
        setItems(res.items);
        setTotal(res.total);
        setPages(res.pages);
        setPage(res.page);
        if (res.facets) setFacets(res.facets);
        if (res.stats) setStats(res.stats);
        setError(null);
      } catch (e) {
        if (id !== reqId.current) return;
        setError(e instanceof Error ? e.message : "The question bank could not be loaded.");
      } finally {
        if (id === reqId.current) setLoading(false);
      }
    },
    [params],
  );

  // Any filter change resets to page 1.
  useEffect(() => {
    void load(1);
  }, [load]);

  const activeFilters =
    Boolean(debouncedQuery) || Boolean(exam) || Boolean(version) || Boolean(section) || Boolean(topic) || Boolean(difficulty) || Boolean(type);

  const clearAll = () => {
    setQuery("");
    setExam("");
    setVersion("");
    setSection("");
    setTopic("");
    setDifficulty("");
    setType("");
  };

  const versionOptions = useMemo(() => {
    if (!facets) return [];
    return facets.versions.filter((v) => {
      if (!exam) return true;
      return v.value.startsWith(exam === "ielts" ? "" : "toefl");
    });
  }, [facets, exam]);

  return (
    <div className="min-h-[calc(100vh-8rem)] bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        {/* Header */}
        <div>
          <button
            className="mb-4 inline-flex items-center gap-1.5 text-xs text-slate-400 transition-colors hover:text-slate-200"
            onClick={() => navigate({ name: "exams" })}
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Exam Academy
          </button>
          <Badge variant="outline" className="border-amber-500/40 text-amber-300">
            IELTS &amp; TOEFL · Original Question Bank
          </Badge>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Every original practice item, in one searchable bank.
          </h1>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-400">
            {stats
              ? `${stats.total.toLocaleString()} original, machine-validated practice items across eight content banks — organised by examination, version, section, official task family, difficulty and twelve topic domains. Writing and Speaking assignments carry their scoring rubrics and reference examples, not multiple-choice keys. `
              : "Loading the bank… "}
            Every item is TalkSy original practice material, written in the style of the test — no official paper or commercial question bank is reproduced.
          </p>
        </div>

        {/* Stats strip */}
        {stats ? (
          <div className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-4">
            {Object.entries(stats.byExamSection).map(([key, count]) => {
              const n = Number(count);
              const target = stats.sizeTargets[key] ?? 0;
              const active = exam
                ? key.startsWith(exam) && (!section || key.endsWith(`/${section}`))
                : !section || key.endsWith(`/${section}`);
              return (
                <button
                  key={key}
                  className={cn(
                    "rounded-lg border px-3 py-2 text-left transition-colors",
                    active ? "border-amber-500/40 bg-amber-500/10" : "border-slate-800 bg-slate-900/60 hover:border-slate-700",
                  )}
                  onClick={() => {
                    const [e, s] = key.split("/");
                    setExam(e);
                    setSection(s);
                  }}
                >
                  <p className="text-[11px] uppercase tracking-wide text-slate-500">{bankLabel(key)}</p>
                  <p className="mt-0.5 text-lg font-bold text-white tabular-nums">
                    {n.toLocaleString()}
                    <span className="ml-1 text-[11px] font-normal text-slate-500">/ {target} target</span>
                  </p>
                </button>
              );
            })}
          </div>
        ) : null}

        {/* Search + filters */}
        <Card className="mt-6 border-slate-800 bg-slate-900/60">
          <CardContent className="space-y-3 p-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search 950 items — try “matching headings”, “cue card”, “email”, “beavers”, “band 7”…"
                className="border-slate-700 bg-slate-950 pl-9 text-slate-100 placeholder:text-slate-600"
              />
            </div>

            <div className="flex flex-wrap items-center gap-1.5">
              {EXAM_FILTERS.map((f) => (
                <button
                  key={f.value || "all"}
                  onClick={() => {
                    setExam(f.value);
                    setVersion("");
                  }}
                  className={cn(
                    "rounded-full border px-3 py-1 text-xs transition-colors",
                    exam === f.value
                      ? "border-amber-500/50 bg-amber-500/15 text-amber-200"
                      : "border-slate-700 bg-slate-900 text-slate-300 hover:border-slate-600",
                  )}
                >
                  {f.label}
                </button>
              ))}
              <span className="mx-1 h-4 w-px bg-slate-700" />
              {SECTION_FILTERS.map((f) => (
                <button
                  key={f.value || "all"}
                  onClick={() => setSection(f.value)}
                  className={cn(
                    "rounded-full border px-3 py-1 text-xs transition-colors",
                    section === f.value
                      ? "border-sky-500/50 bg-sky-500/15 text-sky-200"
                      : "border-slate-700 bg-slate-900 text-slate-300 hover:border-slate-600",
                  )}
                >
                  {f.label}
                </button>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-1.5">
              <select
                value={version}
                onChange={(e) => setVersion(e.target.value)}
                className="rounded-full border border-slate-700 bg-slate-900 px-3 py-1 text-xs text-slate-300"
                aria-label="Filter by examination version"
              >
                <option value="">All versions</option>
                {versionOptions.map((v) => (
                  <option key={v.value} value={v.value}>
                    {v.label} ({v.count})
                  </option>
                ))}
              </select>
              <select
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                className="rounded-full border border-slate-700 bg-slate-900 px-3 py-1 text-xs text-slate-300"
                aria-label="Filter by topic domain"
              >
                <option value="">All 12 topics</option>
                {(facets?.topics ?? []).map((t) => (
                  <option key={t.value} value={t.value}>
                    {t.label} ({t.count})
                  </option>
                ))}
              </select>
              <select
                value={difficulty}
                onChange={(e) => setDifficulty(e.target.value)}
                className="rounded-full border border-slate-700 bg-slate-900 px-3 py-1 text-xs text-slate-300"
                aria-label="Filter by difficulty"
              >
                <option value="">All difficulties</option>
                {(facets?.difficulties ?? []).map((d) => (
                  <option key={d.value} value={String(d.value)}>
                    {d.label} ({d.count})
                  </option>
                ))}
              </select>
              <select
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="max-w-[220px] rounded-full border border-slate-700 bg-slate-900 px-3 py-1 text-xs text-slate-300"
                aria-label="Filter by task family"
              >
                <option value="">All task families</option>
                {(facets?.questionTypes ?? []).slice(0, 40).map((t) => (
                  <option key={t.value} value={t.value}>
                    {t.label} ({t.count})
                  </option>
                ))}
              </select>
              {activeFilters ? (
                <button
                  onClick={clearAll}
                  className="rounded-full border border-slate-700 bg-slate-900 px-3 py-1 text-xs text-slate-400 transition-colors hover:border-slate-500 hover:text-slate-200"
                >
                  Clear all
                </button>
              ) : null}
            </div>
          </CardContent>
        </Card>

        {/* Result count */}
        <div className="mt-6 flex items-center justify-between">
          <p className="text-xs text-slate-400">
            {loading ? "Searching…" : `${total.toLocaleString()} item${total === 1 ? "" : "s"} found`}
            {activeFilters ? " · filters active" : ""}
          </p>
          <p className="text-[11px] text-slate-500">Every item: answer key or rubric held server-side · post-submission explanations</p>
        </div>

        {/* Results */}
        {error ? (
          <Card className="mt-4 border-red-900/60 bg-red-950/30">
            <CardContent className="p-5 text-sm text-red-200">{error}</CardContent>
          </Card>
        ) : null}

        {loading && items.length === 0 ? (
          <div className="mt-4 space-y-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <Skeleton key={i} className="h-28 rounded-xl bg-slate-900" />
            ))}
          </div>
        ) : (
          <div className="mt-4 space-y-3">
            {items.map((item) => (
              <Card key={item.id} className="border-slate-800 bg-slate-900/60 transition-colors hover:border-slate-700">
                <CardContent className="p-4 sm:p-5">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-1.5">
                        <Badge
                          variant="outline"
                          className={cn("border-slate-700", SECTION_ICONS[item.section] ?? "text-slate-300")}
                        >
                          {item.exam === "ielts" ? "IELTS" : "TOEFL"} · {item.section}
                        </Badge>
                        <Badge variant="outline" className="border-slate-700 text-slate-400">
                          {VERSION_LABELS[item.version] ?? item.version}
                        </Badge>
                        <Badge variant="outline" className="border-slate-700 text-slate-400">
                          Difficulty {item.difficulty}
                        </Badge>
                        <Badge variant="outline" className="border-amber-500/30 bg-amber-500/5 text-amber-300/90">
                          {TOPIC_LABELS[item.topic] ?? item.topic}
                        </Badge>
                        {item.answerModel === "rubric" ? (
                          <Badge variant="outline" className="border-violet-500/40 bg-violet-500/10 text-violet-300">
                            <Sparkles className="mr-1 h-3 w-3" /> Rubric-assessed
                          </Badge>
                        ) : (
                          <Badge variant="outline" className="border-slate-700 text-slate-500">
                            Answer-keyed
                          </Badge>
                        )}
                      </div>
                      <h3 className="mt-2 text-sm font-bold text-white">
                        <span className="font-mono text-[11px] font-normal text-slate-500">{item.id}</span>
                        <span className="mx-2 text-slate-600">·</span>
                        {item.questionType}
                      </h3>
                      <p className="mt-1.5 text-xs leading-relaxed text-slate-400">{item.summary}</p>
                      <div className="mt-2.5 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-[11px] text-slate-500">
                        <span className="inline-flex items-center gap-1">
                          <ListChecks className="h-3 w-3" />
                          {item.itemCount} item{item.itemCount === 1 ? "" : "s"}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <Clock3 className="h-3 w-3" />
                          {item.estimatedMinutes} min
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <BookOpenCheck className="h-3 w-3" />
                          {item.reviewStatus === "human-reviewed" ? "Human-reviewed" : "AI-reviewed"}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <FlaskConical className="h-3 w-3" />
                          {item.skills.slice(0, 4).join(" · ")}
                          {item.skills.length > 4 ? " …" : ""}
                        </span>
                      </div>
                      {item.rubricCriteria?.length ? (
                        <p className="mt-2 text-[11px] text-slate-500">
                          Rubric: {item.rubricCriteria.join(" · ")}
                          {item.hasReferenceExample ? " · reference example revealed after submission" : ""}
                        </p>
                      ) : null}
                    </div>
                    <Button
                      size="sm"
                      className="shrink-0 border-amber-500/40 bg-amber-500/10 text-amber-200 hover:bg-amber-500/20 hover:text-amber-100"
                      variant="outline"
                      onClick={() => {
                        window.location.hash = item.href.slice(1);
                      }}
                    >
                      Open practice <ChevronRight className="ml-0.5 h-3.5 w-3.5" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}

            {!loading && items.length === 0 && !error ? (
              <Card className="border-slate-800 bg-slate-900/60">
                <CardContent className="flex flex-col items-center gap-3 p-10 text-center">
                  <FileSearch className="h-8 w-8 text-slate-600" />
                  <p className="text-sm text-slate-300">No items match those filters.</p>
                  <p className="text-xs text-slate-500">Try clearing a filter or searching a different topic.</p>
                  <Button size="sm" variant="outline" className="border-slate-700 text-slate-300" onClick={clearAll}>
                    Clear all filters
                  </Button>
                </CardContent>
              </Card>
            ) : null}
          </div>
        )}

        {/* Pagination */}
        {pages > 1 ? (
          <div className="mt-6 flex items-center justify-center gap-2">
            <Button
              size="sm"
              variant="outline"
              disabled={page <= 1 || loading}
              className="border-slate-700 text-slate-300"
              onClick={() => void load(page - 1)}
            >
              <ChevronLeft className="h-3.5 w-3.5" /> Previous
            </Button>
            <span className="text-xs text-slate-400 tabular-nums">
              Page {page} of {pages}
            </span>
            <Button
              size="sm"
              variant="outline"
              disabled={page >= pages || loading}
              className="border-slate-700 text-slate-300"
              onClick={() => void load(page + 1)}
            >
              Next <ChevronRight className="h-3.5 w-3.5" />
            </Button>
          </div>
        ) : null}

        <p className="mt-10 text-center text-[11px] leading-relaxed text-slate-600">
          All questions are original TalkSy practice content written in the style of the examinations. TalkSy is not
          affiliated with IELTS, ETS or any official test publisher; automated scores and band estimates are educational
          estimates only.
        </p>
      </div>
    </div>
  );
}
