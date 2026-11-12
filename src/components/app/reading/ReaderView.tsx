"use client";

/**
 * Reading Room — the reading interface.
 *
 * Adjustable text size & line spacing, paragraph navigation with auto
 * read-tracking, clickable words with dictionary lookup + pronunciation,
 * per-paragraph translation toggle, bookmarks (whole text + paragraphs),
 * reading progress, practice questions with instant feedback, and the formal
 * comprehension check.
 */

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  BookMarked,
  BookOpen,
  CircleCheck,
  BookA,
  Languages,
  Minus,
  Plus,
  Volume2,
  VolumeX,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { api, type ReadingProgressDto, type ReadingTextBundle } from "@/lib/client/api";
import { useSpeech } from "@/hooks/use-speech";
import type { AppRoute } from "@/hooks/use-hash-route";
import type { GlossaryEntry } from "@/data/reading/types";
import { PracticeQuestionCard } from "./QuestionViews";
import { ReadingRunner } from "./ReadingRunner";

// ---------------------------------------------------------------------------
// Reader settings (localStorage-persisted)
// ---------------------------------------------------------------------------

type TextSize = "sm" | "md" | "lg" | "xl";
type LineSpacing = "compact" | "normal" | "relaxed";

interface ReaderSettings {
  textSize: TextSize;
  lineSpacing: LineSpacing;
  showTranslation: boolean;
  highlightGlossary: boolean;
}

const DEFAULT_SETTINGS: ReaderSettings = {
  textSize: "md",
  lineSpacing: "normal",
  showTranslation: false,
  highlightGlossary: false,
};

const TEXT_SIZE_CLASSES: Record<TextSize, string> = {
  sm: "text-sm sm:text-base",
  md: "text-base sm:text-lg",
  lg: "text-lg sm:text-xl",
  xl: "text-xl sm:text-2xl",
};

const LINE_SPACING_CLASSES: Record<LineSpacing, string> = {
  compact: "leading-snug",
  normal: "leading-normal",
  relaxed: "leading-loose",
};

const SETTINGS_KEY = "talksy-reader-settings";

function loadSettings(): ReaderSettings {
  if (typeof window === "undefined") return DEFAULT_SETTINGS;
  try {
    const raw = window.localStorage.getItem(SETTINGS_KEY);
    if (raw) return { ...DEFAULT_SETTINGS, ...(JSON.parse(raw) as Partial<ReaderSettings>) };
  } catch {
    // ignore malformed storage
  }
  return DEFAULT_SETTINGS;
}

// ---------------------------------------------------------------------------
// Word tokenisation for clickable, highlightable text
// ---------------------------------------------------------------------------

interface WordToken {
  text: string;
  start: number;
}

function tokenize(text: string): { words: WordToken[]; parts: string[] } {
  const words: WordToken[] = [];
  const parts: string[] = [];
  const regex = /[\p{L}\p{N}'’]+/gu;
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) parts.push(text.slice(lastIndex, match.index));
    words.push({ text: match[0], start: parts.length });
    parts.push(match[0]);
    lastIndex = match.index + match[0].length;
  }
  if (lastIndex < text.length) parts.push(text.slice(lastIndex));
  return { words, parts };
}

function normalizeWordForm(word: string): string {
  return word
    .toLowerCase()
    .replace(/[’]/g, "'")
    .replace(/'s$/, "");
}

function findGlossaryEntry(glossary: GlossaryEntry[], word: string): GlossaryEntry | null {
  const target = normalizeWordForm(word);
  for (const entry of glossary) {
    if (normalizeWordForm(entry.term) === target) return entry;
  }
  // Plural/simple-inflection fallback: "keys" → "key", "walks" → "walk".
  if (target.endsWith("es")) {
    const singular = target.slice(0, -2);
    const hit = glossary.find((e) => normalizeWordForm(e.term) === singular);
    if (hit) return hit;
  }
  if (target.endsWith("s")) {
    const singular = target.slice(0, -1);
    const hit = glossary.find((e) => normalizeWordForm(e.term) === singular);
    if (hit) return hit;
  }
  return null;
}

// ---------------------------------------------------------------------------
// The view
// ---------------------------------------------------------------------------

export function ReaderView({
  slug,
  navigate,
}: {
  slug: string;
  navigate: (route: AppRoute) => void;
}) {
  const [bundle, setBundle] = useState<ReadingTextBundle | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [notFound, setNotFound] = useState(false);
  const [needsLogin, setNeedsLogin] = useState(false);
  // Lazy init from localStorage (SSR-safe: loadSettings checks window).
  const [settings, setSettings] = useState<ReaderSettings>(() => loadSettings());
  const [progress, setProgress] = useState<ReadingProgressDto | null>(null);
  const [paragraphBookmarks, setParagraphBookmarks] = useState<string[]>([]);
  const [currentParagraph, setCurrentParagraph] = useState(0);
  const [selectedWord, setSelectedWord] = useState<string | null>(null);
  const [runActive, setRunActive] = useState(false);
  const [runFinishedTick, setRunFinishedTick] = useState(0);
  const { play, stop, playing } = useSpeech();
  const paragraphRefs = useRef<(HTMLElement | null)[]>([]);

  // Load the text bundle.
  useEffect(() => {
    let cancelled = false;
    (async () => {
      const response = await api.readingText(slug);
      if (cancelled) return;
      if (response.ok) {
        setBundle(response.data);
        setProgress(response.data.progress);
        setParagraphBookmarks(response.data.paragraphBookmarks);
        const last = response.data.progress.lastParagraphId;
        const lastIndex = response.data.text.paragraphs.findIndex((p) => p.id === last);
        setCurrentParagraph(Math.max(0, lastIndex));
      } else if (response.status === 401) {
        setNeedsLogin(true);
      } else if (response.status === 404) {
        setNotFound(true);
      } else {
        setError(response.error);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [slug]);

  // Persisted settings.
  const updateSettings = (patch: Partial<ReaderSettings>) => {
    setSettings((prev) => {
      const next = { ...prev, ...patch };
      try {
        window.localStorage.setItem(SETTINGS_KEY, JSON.stringify(next));
      } catch {
        // storage may be unavailable — settings still apply for this session
      }
      return next;
    });
  };

  const paragraphs = bundle?.text.paragraphs ?? [];
  const glossaryTerms = useMemo(() => {
    const set = new Set<string>();
    for (const entry of bundle?.text.glossary ?? []) {
      set.add(normalizeWordForm(entry.term));
    }
    return set;
  }, [bundle]);

  const markParagraphRead = useCallback(
    async (paragraphId: string) => {
      if (!bundle) return;
      const response = await api.readingState(slug, {
        action: "paragraph-read",
        paragraphId,
      });
      if (response.ok) {
        setProgress(response.data.progress);
        setParagraphBookmarks(response.data.paragraphBookmarks);
      }
    },
    [bundle, slug],
  );

  const goToParagraph = useCallback(
    (index: number) => {
      if (index < 0 || index >= paragraphs.length) return;
      setCurrentParagraph(index);
      const paragraph = paragraphs[index];
      if (paragraph) void markParagraphRead(paragraph.id);
      // Instant scroll: a smooth animation leaves the target mid-flight
      // under the sticky header for rapid navigation and screen readers.
      paragraphRefs.current[index]?.scrollIntoView({ block: "start" });
    },
    [paragraphs, markParagraphRead],
  );

  const toggleTextBookmark = async () => {
    if (!bundle || !progress) return;
    const response = await api.readingState(slug, {
      action: "bookmark",
      bookmarked: !progress.bookmarked,
    });
    if (response.ok) {
      setProgress(response.data.progress);
      setParagraphBookmarks(response.data.paragraphBookmarks);
    }
  };

  const toggleParagraphBookmark = async (paragraphId: string) => {
    const response = await api.readingState(slug, {
      action: "paragraph-bookmark",
      paragraphId,
    });
    if (response.ok) {
      setProgress(response.data.progress);
      setParagraphBookmarks(response.data.paragraphBookmarks);
    }
  };

  // ---------------------------------------------------------------------
  // Loading / error states
  // ---------------------------------------------------------------------
  if (needsLogin) {
    return (
      <div className="mx-auto max-w-md px-4 py-20 text-center">
        <BookOpen className="mx-auto size-10 text-primary" aria-hidden />
        <h1 className="mt-3 text-xl font-bold">Reading Room</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Log in to read and track your progress.
        </p>
        <Button className="mt-4" onClick={() => navigate({ name: "login" })}>
          Go to login
        </Button>
      </div>
    );
  }
  if (notFound) {
    return (
      <div className="mx-auto max-w-md px-4 py-20 text-center">
        <h1 className="text-xl font-bold">Text not found</h1>
        <Button className="mt-4" variant="outline" onClick={() => navigate({ name: "reading" })}>
          Back to the Reading Room
        </Button>
      </div>
    );
  }
  if (error) {
    return (
      <div className="mx-auto max-w-md px-4 py-20 text-center">
        <p className="text-sm text-destructive">{error}</p>
        <Button className="mt-4" variant="outline" onClick={() => window.location.reload()}>
          Try again
        </Button>
      </div>
    );
  }
  if (!bundle || !progress) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-16" aria-busy="true" aria-label="Loading text">
        <div className="h-8 w-2/3 animate-pulse rounded-lg bg-secondary" />
        <div className="mt-6 space-y-3">
          {[0, 1, 2, 3, 4].map((i) => (
            <div key={i} className="h-4 animate-pulse rounded bg-secondary" />
          ))}
        </div>
      </div>
    );
  }

  const text = bundle.text;
  const readPercent =
    progress.totalParagraphs === 0
      ? 0
      : Math.round((progress.readCount / progress.totalParagraphs) * 100);
  const isCompleted = progress.status === "completed";

  return (
    <div className="mx-auto max-w-3xl px-4 py-6 sm:px-6">
      {/* Header */}
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <Button
            variant="ghost"
            size="sm"
            className="-ml-2 gap-1.5 text-muted-foreground"
            onClick={() => navigate({ name: "reading" })}
          >
            <ArrowLeft className="size-4" aria-hidden /> Reading Room
          </Button>
          <h1 className="mt-1 text-2xl font-bold tracking-tight sm:text-3xl">{text.title}</h1>
          <div className="mt-2 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
            <span className="rounded-full bg-secondary px-2 py-0.5 font-medium capitalize">
              {text.level}
            </span>
            <span className="rounded-full bg-secondary px-2 py-0.5 font-medium capitalize">
              {text.category.replace(/-/g, " ")}
            </span>
            <span>{text.estimatedMinutes} min read</span>
            {isCompleted ? (
              <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-2 py-0.5 font-semibold text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
                <CircleCheck className="size-3" aria-hidden /> Completed
              </span>
            ) : null}
          </div>
        </div>
        <Button
          variant="outline"
          size="sm"
          className={cn("gap-1.5", progress.bookmarked && "border-primary text-primary")}
          onClick={toggleTextBookmark}
          aria-pressed={progress.bookmarked}
        >
          <BookMarked
            className={cn("size-4", progress.bookmarked && "fill-primary")}
            aria-hidden
          />
          {progress.bookmarked ? "Bookmarked" : "Bookmark"}
        </Button>
      </div>

      {/* Reading settings toolbar */}
      <div className="mt-4 rounded-2xl border bg-secondary/40 p-3">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <div className="flex items-center gap-1" role="group" aria-label="Text size">
            <Button
              variant="outline"
              size="icon"
              className="size-8"
              aria-label="Smaller text"
              disabled={settings.textSize === "sm"}
              onClick={() =>
                updateSettings({
                  textSize:
                    settings.textSize === "xl"
                      ? "lg"
                      : settings.textSize === "lg"
                        ? "md"
                        : "sm",
                })
              }
            >
              <Minus className="size-3.5" aria-hidden />
            </Button>
            <span className="text-xs font-medium text-muted-foreground">Aa</span>
            <Button
              variant="outline"
              size="icon"
              className="size-8"
              aria-label="Larger text"
              disabled={settings.textSize === "xl"}
              onClick={() =>
                updateSettings({
                  textSize:
                    settings.textSize === "sm"
                      ? "md"
                      : settings.textSize === "md"
                        ? "lg"
                        : "xl",
                })
              }
            >
              <Plus className="size-3.5" aria-hidden />
            </Button>
          </div>

          <div className="flex items-center gap-1" role="group" aria-label="Line spacing">
            {(["compact", "normal", "relaxed"] as LineSpacing[]).map((spacing) => (
              <Button
                key={spacing}
                variant="outline"
                size="sm"
                className={cn(
                  "h-8 px-2.5 text-xs capitalize",
                  settings.lineSpacing === spacing && "border-primary bg-primary/5 text-primary",
                )}
                aria-pressed={settings.lineSpacing === spacing}
                onClick={() => updateSettings({ lineSpacing: spacing })}
              >
                {spacing}
              </Button>
            ))}
          </div>

          <Button
            variant="outline"
            size="sm"
            className={cn(
              "h-8 gap-1.5 text-xs",
              settings.showTranslation && "border-primary bg-primary/5 text-primary",
            )}
            aria-pressed={settings.showTranslation}
            onClick={() => updateSettings({ showTranslation: !settings.showTranslation })}
          >
            <Languages className="size-3.5" aria-hidden /> Translation
          </Button>
          <Button
            variant="outline"
            size="sm"
            className={cn(
              "h-8 gap-1.5 text-xs",
              settings.highlightGlossary && "border-primary bg-primary/5 text-primary",
            )}
            aria-pressed={settings.highlightGlossary}
            onClick={() => updateSettings({ highlightGlossary: !settings.highlightGlossary })}
          >
            <BookA className="size-3.5" aria-hidden /> Key words
          </Button>
        </div>
      </div>

      {/* Reading progress + paragraph navigation */}
      <div className="mt-4 rounded-2xl border bg-secondary/30 p-3 sm:p-4">
        <div className="flex items-center justify-between gap-3 text-xs">
          <p className="font-medium">
            Reading progress: {progress.readCount}/{progress.totalParagraphs} paragraphs
            {progress.runsCompleted > 0 ? (
              <span className="ml-2 text-muted-foreground">
                · best check {Math.round(progress.bestRunScore * 100)}%
              </span>
            ) : null}
          </p>
          <p className="text-muted-foreground">{readPercent}%</p>
        </div>
        <Progress value={readPercent} className="mt-2 h-2" />
        <div className="mt-3 flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            className="size-8"
            aria-label="Previous paragraph"
            disabled={currentParagraph === 0}
            onClick={() => goToParagraph(currentParagraph - 1)}
          >
            <ArrowLeft className="size-4" aria-hidden />
          </Button>
          <div className="flex flex-1 flex-wrap gap-1.5" role="group" aria-label="Jump to paragraph">
            {paragraphs.map((paragraph, index) => {
              const isRead = progress.paragraphsRead.includes(paragraph.id);
              const isCurrent = index === currentParagraph;
              return (
                <button
                  key={paragraph.id}
                  type="button"
                  onClick={() => goToParagraph(index)}
                  aria-label={`Paragraph ${index + 1}${isRead ? " (read)" : ""}`}
                  className={cn(
                    "inline-flex size-8 items-center justify-center rounded-lg border text-xs font-semibold transition-colors",
                    isCurrent && "border-primary bg-primary text-primary-foreground",
                    !isCurrent && isRead && "border-emerald-300 bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300",
                    !isCurrent && !isRead && "bg-background text-muted-foreground hover:bg-secondary",
                  )}
                >
                  {index + 1}
                </button>
              );
            })}
          </div>
          <Button
            variant="outline"
            size="icon"
            className="size-8"
            aria-label="Next paragraph"
            disabled={currentParagraph === paragraphs.length - 1}
            onClick={() => goToParagraph(currentParagraph + 1)}
          >
            <ArrowRight className="size-4" aria-hidden />
          </Button>
        </div>
      </div>

      {/* Illustration */}
      {text.illustration ? (
        <figure className="mt-6 overflow-hidden rounded-2xl border bg-secondary/30">
          <img
            src={text.illustration}
            alt={`Illustration for “${text.title}”`}
            className="h-auto w-full"
          />
          <figcaption className="p-2 text-center text-xs text-muted-foreground">
            Look at the picture while you read.
          </figcaption>
        </figure>
      ) : null}

      {/* Paragraphs */}
      <article
        className={cn(
          "mt-6 flex flex-col gap-6",
          TEXT_SIZE_CLASSES[settings.textSize],
          LINE_SPACING_CLASSES[settings.lineSpacing],
        )}
      >
        {paragraphs.map((paragraph, index) => (
          <section
            key={paragraph.id}
            ref={(el) => {
              paragraphRefs.current[index] = el;
            }}
            aria-label={`Paragraph ${index + 1}`}
            className={cn(
              "scroll-mt-40 rounded-2xl p-3 -mx-3 transition-colors sm:p-4 sm:-mx-4",
              index === currentParagraph && "bg-primary/5 ring-1 ring-primary/30",
            )}
          >
            <div className="mb-1.5 flex items-center justify-between gap-2">
              <span
                className={cn(
                  "inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[11px] font-semibold",
                  progress.paragraphsRead.includes(paragraph.id)
                    ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300"
                    : "bg-secondary text-muted-foreground",
                )}
              >
                {progress.paragraphsRead.includes(paragraph.id) ? (
                  <CircleCheck className="size-3" aria-hidden />
                ) : null}
                {index + 1}
              </span>
              <div className="flex items-center gap-1">
                <Button
                  variant="ghost"
                  size="icon"
                  className="size-8"
                  aria-label={`Listen to paragraph ${index + 1}`}
                  onClick={() =>
                    playing ? stop() : play(paragraph.text, 0.9)
                  }
                >
                  {playing ? (
                    <VolumeX className="size-4" aria-hidden />
                  ) : (
                    <Volume2 className="size-4" aria-hidden />
                  )}
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className={cn(
                    "size-8",
                    paragraphBookmarks.includes(paragraph.id) && "text-primary",
                  )}
                  aria-label={`Bookmark paragraph ${index + 1}`}
                  aria-pressed={paragraphBookmarks.includes(paragraph.id)}
                  onClick={() => toggleParagraphBookmark(paragraph.id)}
                >
                  <BookMarked
                    className={cn(
                      "size-4",
                      paragraphBookmarks.includes(paragraph.id) && "fill-primary",
                    )}
                    aria-hidden
                  />
                </Button>
              </div>
            </div>

            <p className="cursor-default">
              {tokenize(paragraph.text).parts.map((part, partIndex) => {
                const isWord = /^[\p{L}\p{N}'’]+$/u.test(part);
                if (!isWord) return <span key={partIndex}>{part}</span>;
                const normalized = normalizeWordForm(part);
                const isSelected = selectedWord !== null && normalized === normalizeWordForm(selectedWord);
                const isGlossary = glossaryTerms.has(normalized);
                return (
                  <span
                    key={partIndex}
                    role="button"
                    tabIndex={0}
                    aria-label={`Word: ${part}`}
                    onClick={() => setSelectedWord(part)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setSelectedWord(part);
                      }
                    }}
                    className={cn(
                      "rounded-[4px] px-px transition-colors hover:bg-primary/15",
                      isSelected && "bg-primary/25 font-medium",
                      !isSelected && isGlossary && settings.highlightGlossary && "underline decoration-primary/60 decoration-dotted underline-offset-4",
                    )}
                  >
                    {part}
                  </span>
                );
              })}
            </p>

            {settings.showTranslation ? (
              <p className="mt-2 border-l-2 border-primary/40 pl-3 text-sm italic text-muted-foreground">
                {paragraph.translation}
              </p>
            ) : null}
          </section>
        ))}
      </article>

      {/* Dictionary / word dialog */}
      <DictionaryDialog
        word={selectedWord}
        glossary={text.glossary}
        onClose={() => setSelectedWord(null)}
      />

      <Separator className="my-10" />

      {/* Glossary */}
      {text.glossary.length > 0 ? (
        <section aria-label="Glossary">
          <h2 className="flex items-center gap-2 text-lg font-bold">
            <BookA className="size-5 text-primary" aria-hidden /> Glossary
          </h2>
          <div className="mt-3 grid gap-2 sm:grid-cols-2">
            {text.glossary.map((entry) => (
              <div key={entry.term} className="rounded-xl border p-3">
                <div className="flex items-center justify-between gap-2">
                  <p className="font-semibold">
                    {entry.term}
                    {entry.partOfSpeech ? (
                      <span className="ml-1.5 text-xs font-normal italic text-muted-foreground">
                        {entry.partOfSpeech}
                      </span>
                    ) : null}
                  </p>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="size-7"
                    aria-label={`Listen: ${entry.term}`}
                    onClick={() => play(entry.term, 0.85)}
                  >
                    <Volume2 className="size-3.5" aria-hidden />
                  </Button>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">{entry.definition}</p>
                <p className="mt-1 text-sm font-medium text-primary">{entry.translation}</p>
                {entry.example ? (
                  <p className="mt-1 text-xs italic text-muted-foreground">“{entry.example}”</p>
                ) : null}
              </div>
            ))}
          </div>
        </section>
      ) : null}

      <Separator className="my-10" />

      {/* Comprehension */}
      <section aria-label="Comprehension">
        <h2 className="text-lg font-bold">Check your understanding</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Practise one question at a time with instant feedback, then take the
          formal comprehension check to complete this text.
        </p>

        {/* Practice questions step aside while a formal check is running. */}
        {!runActive ? (
          <div className="mt-4 flex flex-col gap-3">
            {text.questions.map((question, index) => (
              <PracticeQuestionCard key={question.id} slug={slug} question={question} index={index} />
            ))}
          </div>
        ) : (
          <p className="mt-4 rounded-xl bg-secondary/50 p-3 text-sm text-muted-foreground">
            The comprehension check is running — practice questions return
            after you finish it.
          </p>
        )}

        <div className="mt-8">
          <ReadingRunner
            slug={slug}
            passScorePercent={Math.round(text.passScore * 100)}
            onFinished={(result) => {
              // Refresh the reader's progress immediately (completed badge,
              // best score) without a page reload.
              setProgress(result.progress);
              setRunFinishedTick((t) => t + 1);
            }}
            onActiveChange={setRunActive}
          />
        </div>
      </section>

      {/* Next text shortcut */}
      <NextTextCard slug={slug} navigate={navigate} refreshTick={runFinishedTick} />
    </div>
  );
}

// ---------------------------------------------------------------------------
// Dictionary dialog
// ---------------------------------------------------------------------------

function DictionaryDialog({
  word,
  glossary,
  onClose,
}: {
  word: string | null;
  glossary: GlossaryEntry[];
  onClose: () => void;
}) {
  const { play, playing, stop } = useSpeech();
  const entry = word !== null ? findGlossaryEntry(glossary, word) : null;

  return (
    <Dialog open={word !== null} onOpenChange={(open) => (!open ? onClose() : undefined)}>
      <DialogContent className="max-w-sm">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            {word}
            <Button
              variant="outline"
              size="icon"
              className="size-8 rounded-full"
              aria-label={`Listen: ${word ?? ""}`}
              onClick={() => (playing ? stop() : play(word ?? "", 0.85))}
            >
              {playing ? (
                <VolumeX className="size-4" aria-hidden />
              ) : (
                <Volume2 className="size-4" aria-hidden />
              )}
            </Button>
          </DialogTitle>
        </DialogHeader>
        {entry ? (
          <div className="flex flex-col gap-2">
            {entry.partOfSpeech ? (
              <p className="text-xs italic text-muted-foreground">{entry.partOfSpeech}</p>
            ) : null}
            <p className="text-sm">{entry.definition}</p>
            <p className="text-sm font-semibold text-primary">{entry.translation}</p>
            {entry.example ? (
              <p className="rounded-lg bg-secondary p-2.5 text-sm italic">“{entry.example}”</p>
            ) : null}
          </div>
        ) : (
          <div className="flex flex-col gap-2">
            <p className="text-sm text-muted-foreground">
              This word is not in this text&apos;s glossary. Listen to the
              pronunciation, or find it in the glossary list below the text.
            </p>
            <Button
              variant="outline"
              size="sm"
              className="w-fit"
              onClick={() => (playing ? stop() : play(word ?? "", 0.8))}
            >
              <Volume2 className="mr-1.5 size-4" aria-hidden /> Hear it slowly
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}

// ---------------------------------------------------------------------------
// Next-text card (appears once the text is completed)
// ---------------------------------------------------------------------------

function NextTextCard({
  slug,
  navigate,
  refreshTick,
}: {
  slug: string;
  navigate: (route: AppRoute) => void;
  refreshTick: number;
}) {
  const [next, setNext] = useState<{ slug: string; title: string } | null>(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const response = await api.readingLibrary();
      if (!response.ok || cancelled) return;
      const texts = response.data.texts;
      const index = texts.findIndex((t) => t.slug === slug);
      if (index >= 0 && index < texts.length - 1) {
        setNext({ slug: texts[index + 1].slug, title: texts[index + 1].title });
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [slug, refreshTick]);

  if (!next) return null;
  return (
    <div className="mt-10 flex items-center justify-between gap-3 rounded-2xl border bg-secondary/30 p-4">
      <p className="text-sm font-medium">Up next in the Reading Room</p>
      <Button size="sm" className="gap-1.5" onClick={() => navigate({ name: "reading", slug: next.slug })}>
        {next.title} <ArrowRight className="size-4" aria-hidden />
      </Button>
    </div>
  );
}
