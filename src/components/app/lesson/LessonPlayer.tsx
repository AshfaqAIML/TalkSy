"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Bookmark,
  CheckCircle2,
  Circle,
  ClipboardCheck,
  Languages,
  ListTree,
  NotebookPen,
  Sparkles,
  Trophy,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Progress } from "@/components/ui/progress";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import {
  api,
  type CompletionDto,
  type LessonBundle,
  type LessonProgressDto,
} from "@/lib/client/api";
import { useAppStore } from "@/lib/client/store";
import { speak } from "@/hooks/use-speech";
import type { SafeExercise } from "@/data/curriculum/types";
import { BlockRenderer } from "./blocks/BlockRenderer";
import { AssessmentFlow } from "./AssessmentFlow";

export function LessonPlayer({
  slug,
  onNavigateLesson,
}: {
  slug: string;
  onNavigateLesson: (slug: string) => void;
}) {
  const user = useAppStore((s) => s.user);
  const showTranslations = useAppStore((s) => s.showTranslations);
  const toggleTranslations = useAppStore((s) => s.toggleTranslations);
  const speechRate = useAppStore((s) => s.speechRate);
  const setSpeechRate = useAppStore((s) => s.setSpeechRate);

  const [bundle, setBundle] = useState<LessonBundle | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [progress, setProgress] = useState<LessonProgressDto | null>(null);
  const [completion, setCompletion] = useState<CompletionDto | null>(null);
  const [sectionIndex, setSectionIndex] = useState(0);
  const [notes, setNotes] = useState<Record<string, string>>({});
  const [notesOpen, setNotesOpen] = useState(false);
  const [noteDraft, setNoteDraft] = useState("");
  const [assessmentMode, setAssessmentMode] = useState(false);
  const saveTimer = useRef<number | null>(null);

  const load = useCallback(async () => {
    const response = await api.lesson(slug);
    if (!response.ok) {
      setError(response.error);
      return;
    }
    const data = response.data;
    setBundle(data);
    setProgress(data.progress);
    setCompletion(data.completion);
    setNotes(Object.fromEntries(data.notes.map((n) => [n.sectionId, n.content])));
    // Resume at the saved position (never past the last real section).
    if (data.progress?.lastSectionId) {
      const idx = data.lesson.sections.findIndex(
        (s) => s.id === data.progress!.lastSectionId,
      );
      if (idx >= 0) setSectionIndex(idx);
    }
  }, [slug]);

  // Load on mount (and after assessment completion via onFinished). The
  // component is keyed by lesson slug, so this runs once per lesson.
  useEffect(() => {
    // All setState calls inside `load` happen after `await`, so this does not
    // trigger the cascading-render pattern the rule guards against.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    void load();
  }, [load]);

  const lesson = bundle?.lesson ?? null;

  // Save the current position whenever the section changes (debounced).
  useEffect(() => {
    if (!user || !lesson || !lesson.sections[sectionIndex]) return;
    if (saveTimer.current) window.clearTimeout(saveTimer.current);
    const sectionId = lesson.sections[sectionIndex].id;
    saveTimer.current = window.setTimeout(async () => {
      const response = await api.lessonState(slug, {
        action: "position",
        sectionId,
      });
      if (response.ok) {
        setProgress(response.data.progress);
        setCompletion(response.data.completion);
      }
    }, 400);
    return () => {
      if (saveTimer.current) window.clearTimeout(saveTimer.current);
    };
  }, [sectionIndex, user, lesson, slug]);

  const completedSections = useMemo(
    () => new Set(progress?.sectionsCompleted ?? []),
    [progress],
  );

  const exercisesById = useMemo(() => {
    const map: Record<string, SafeExercise> = {};
    for (const exercise of bundle?.exercises ?? []) map[exercise.id] = exercise;
    return map;
  }, [bundle]);

  const totalSections = lesson?.sections.length ?? 0;
  const currentSection = lesson?.sections[sectionIndex] ?? null;
  const isSummaryView = Boolean(lesson) && sectionIndex === totalSections;
  const hasAssessment = Boolean(lesson?.assessment);

  const completeSection = async () => {
    if (!lesson || !currentSection) return;
    if (completedSections.has(currentSection.id)) {
      goNext();
      return;
    }
    const response = await api.lessonState(slug, {
      action: "complete-section",
      sectionId: currentSection.id,
    });
    if (!response.ok) {
      toast.error(response.error);
      return;
    }
    setProgress(response.data.progress);
    setCompletion(response.data.completion);
    toast.success("Section completed!");
    goNext();
  };

  const goNext = () => {
    if (!lesson) return;
    setSectionIndex((i) => Math.min(totalSections, i + 1));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goPrev = () => {
    if (!lesson) return;
    setAssessmentMode(false);
    setSectionIndex((i) => Math.max(0, i - 1));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleBookmark = async () => {
    const response = await api.lessonState(slug, {
      action: "bookmark",
      bookmarked: !(progress?.bookmarked ?? false),
    });
    if (!response.ok) {
      toast.error(response.error);
      return;
    }
    setProgress(response.data.progress);
    toast.success(
      response.data.progress.bookmarked ? "Lesson bookmarked." : "Bookmark removed.",
    );
  };

  const openNotes = () => {
    setNoteDraft(currentSection ? (notes[currentSection.id] ?? "") : "");
    setNotesOpen(true);
  };

  const saveNote = async () => {
    if (!currentSection) return;
    const response = await api.lessonState(slug, {
      action: "note",
      sectionId: currentSection.id,
      content: noteDraft.trim(),
    });
    if (!response.ok) {
      toast.error(response.error);
      return;
    }
    setNotes((prev) => ({
      ...prev,
      [currentSection.id]: noteDraft.trim(),
    }));
    setNotesOpen(false);
    toast.success("Note saved.");
  };

  if (error) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-16 text-center">
        <p className="text-lg font-semibold">Lesson not found</p>
        <p className="mt-1 text-sm text-muted-foreground">{error}</p>
        <Button className="mt-4" onClick={() => onNavigateLesson("")} variant="outline">
          Back to library
        </Button>
      </div>
    );
  }

  if (!bundle || !lesson) {
    return (
      <div className="mx-auto flex max-w-2xl flex-col items-center gap-3 px-4 py-24">
        <div
          className="size-10 animate-spin rounded-full border-4 border-primary/20 border-t-primary"
          role="status"
          aria-label="Loading lesson"
        />
        <p className="text-sm text-muted-foreground">Loading lesson…</p>
      </div>
    );
  }

  const outline = (
    <LessonOutline
      lesson={lesson}
      completedSections={completedSections}
      currentIndex={sectionIndex}
      onSelect={(index) => {
        setAssessmentMode(false);
        setSectionIndex(index);
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
    />
  );

  return (
    <div className="mx-auto max-w-6xl px-4 pb-16 pt-6 sm:px-6">
      {/* Lesson header */}
      <div className="flex flex-col gap-3">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="secondary" className="uppercase tracking-wide">
                {lesson.levelId === "pre-a1" ? "Pre-A1" : lesson.levelId === "a1" ? "A1" : "A2"}
              </Badge>
              <span className="text-xs text-muted-foreground">
                Unit {lesson.unit} · {lesson.estimatedMinutes} min ·{" "}
                {lesson.sections.length} sections
              </span>
            </div>
            <h1 className="mt-1 text-2xl font-bold tracking-tight sm:text-3xl">
              {lesson.title}
            </h1>
          </div>
          <div className="flex items-center gap-1.5">
            <Button
              size="sm"
              variant="ghost"
              onClick={toggleTranslations}
              aria-pressed={showTranslations}
              className={cn("gap-1.5", showTranslations && "bg-primary/10 text-primary")}
            >
              <Languages className="size-4" aria-hidden />
              <span className="hidden sm:inline">Translations</span>
            </Button>
            <Button
              size="sm"
              variant="ghost"
              onClick={toggleBookmark}
              aria-pressed={progress?.bookmarked ?? false}
              className={cn("gap-1.5", progress?.bookmarked && "bg-primary/10 text-primary")}
            >
              <Bookmark
                className={cn("size-4", progress?.bookmarked && "fill-current")}
                aria-hidden
              />
              <span className="hidden sm:inline">
                {progress?.bookmarked ? "Saved" : "Bookmark"}
              </span>
            </Button>
            <Button
              size="sm"
              variant="ghost"
              onClick={openNotes}
              className="gap-1.5"
              aria-label="Section notes"
            >
              <NotebookPen className="size-4" aria-hidden />
              <span className="hidden sm:inline">Notes</span>
            </Button>
            <Button size="sm" variant="ghost" className="gap-1.5" asChild>
              <a
                href={`#/tutor/lesson/lesson:${lesson.slug}`}
                aria-label="Ask the tutor about this lesson"
              >
                <Sparkles className="size-4" aria-hidden />
                <span className="hidden sm:inline">Ask tutor</span>
              </a>
            </Button>
            <Select value={String(speechRate)} onValueChange={(v) => setSpeechRate(Number(v))}>
              <SelectTrigger size="sm" className="h-8 w-[86px] text-xs" aria-label="Audio speed">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="0.6">🐢 Slow</SelectItem>
                <SelectItem value="0.9">Normal</SelectItem>
                <SelectItem value="1">Fast</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        {completion ? (
          <div className="flex items-center gap-3">
            <Progress
              value={(completion.sectionsDone / completion.sectionsTotal) * 100}
              className="h-2 flex-1"
              aria-label="Lesson progress"
            />
            <span className="text-xs text-muted-foreground">
              {completion.sectionsDone}/{completion.sectionsTotal} sections
              {completion.completed ? " · completed ✓" : ""}
            </span>
          </div>
        ) : null}
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-[240px_1fr]">
        {/* Outline — desktop sidebar */}
        <aside className="hidden lg:block">
          <div className="sticky top-6 max-h-[calc(100vh-3rem)] overflow-y-auto rounded-xl border bg-card p-3">
            {outline}
          </div>
        </aside>

        {/* Main column */}
        <div className="min-w-0">
          {/* Mobile outline trigger */}
          <div className="mb-4 lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" className="w-full gap-2">
                  <ListTree className="size-4" aria-hidden /> Lesson outline
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-72 overflow-y-auto">
                <SheetTitle className="px-1">Outline</SheetTitle>
                <div className="mt-4 px-1">{outline}</div>
              </SheetContent>
            </Sheet>
          </div>

          {assessmentMode ? (
            <AssessmentFlow
              lessonSlug={slug}
              onFinished={load}
              onBackToLesson={() => setAssessmentMode(false)}
            />
          ) : isSummaryView ? (
            <LessonSummaryView
              lesson={lesson}
              completion={completion}
              hasPassedAssessment={Boolean(bundle.bestAssessment?.passed)}
              onStartAssessment={() => setAssessmentMode(true)}
            />
          ) : currentSection ? (
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-2">
                {completedSections.has(currentSection.id) ? (
                  <CheckCircle2 className="size-5 text-primary" aria-hidden />
                ) : (
                  <Circle className="size-5 text-muted-foreground/50" aria-hidden />
                )}
                <h2 className="text-lg font-semibold">
                  <span className="text-muted-foreground">
                    {sectionIndex + 1}.{" "}
                  </span>
                  {currentSection.title}
                </h2>
              </div>
              {currentSection.blocks.map((block, i) => (
                <BlockRenderer
                  key={i}
                  block={block}
                  lessonSlug={slug}
                  exercisesById={exercisesById}
                />
              ))}

              {/* Section footer */}
              <div className="mt-2 flex flex-col gap-3 rounded-xl border bg-card p-4">
                <Button
                  onClick={completeSection}
                  className="gap-2"
                  variant={
                    completedSections.has(currentSection.id) ? "outline" : "default"
                  }
                >
                  <CheckCircle2 className="size-4" aria-hidden />
                  {completedSections.has(currentSection.id)
                    ? "Section completed — continue"
                    : "Mark section complete & continue"}
                </Button>
                <div className="flex items-center justify-between">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={goPrev}
                    disabled={sectionIndex === 0}
                    className="gap-1.5"
                  >
                    <ArrowLeft className="size-4" aria-hidden /> Previous
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={goNext}
                    className="gap-1.5"
                  >
                    Next <ArrowRight className="size-4" aria-hidden />
                  </Button>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>

      {/* Notes dialog */}
      <Dialog open={notesOpen} onOpenChange={setNotesOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>My notes</DialogTitle>
            <DialogDescription>
              Notes for “{currentSection?.title ?? lesson.title}”. Saved to your
              account — only you can see them.
            </DialogDescription>
          </DialogHeader>
          <Textarea
            value={noteDraft}
            onChange={(e) => setNoteDraft(e.target.value)}
            placeholder="Write what you want to remember…"
            rows={6}
          />
          <DialogFooter>
            <Button variant="ghost" onClick={() => setNotesOpen(false)}>
              Cancel
            </Button>
            <Button onClick={saveNote}>Save note</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

function LessonOutline({
  lesson,
  completedSections,
  currentIndex,
  onSelect,
}: {
  lesson: LessonBundle["lesson"];
  completedSections: Set<string>;
  currentIndex: number;
  onSelect: (index: number) => void;
}) {
  const total = lesson.sections.length;
  return (
    <nav aria-label="Lesson outline" className="flex flex-col gap-1">
      <p className="px-2 pb-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
        Outline
      </p>
      {lesson.sections.map((section, i) => {
        const done = completedSections.has(section.id);
        const active = i === currentIndex;
        return (
          <button
            key={section.id}
            type="button"
            onClick={() => onSelect(i)}
            aria-current={active ? "true" : undefined}
            className={cn(
              "flex items-center gap-2 rounded-lg px-2 py-2 text-left text-sm transition-colors",
              active ? "bg-primary/10 font-medium text-primary" : "hover:bg-secondary",
            )}
          >
            {done ? (
              <CheckCircle2 className="size-4 shrink-0 text-primary" aria-hidden />
            ) : (
              <Circle className="size-4 shrink-0 text-muted-foreground/40" aria-hidden />
            )}
            <span className="min-w-0 flex-1 truncate">
              {i + 1}. {section.title}
            </span>
          </button>
        );
      })}
      <button
        type="button"
        onClick={() => onSelect(total)}
        aria-current={currentIndex === total ? "true" : undefined}
        className={cn(
          "mt-1 flex items-center gap-2 rounded-lg px-2 py-2 text-left text-sm transition-colors",
          currentIndex === total
            ? "bg-primary/10 font-medium text-primary"
            : "hover:bg-secondary",
        )}
      >
        <ClipboardCheck className="size-4 shrink-0 text-muted-foreground/60" aria-hidden />
        <span>Lesson summary</span>
      </button>
      {lesson.assessment ? (
        <div className="mt-2 flex items-center gap-2 rounded-lg bg-accent/40 px-2 py-2 text-sm text-accent-foreground">
          <Trophy className="size-4 shrink-0" aria-hidden />
          <span>Final assessment</span>
        </div>
      ) : null}
    </nav>
  );
}

function LessonSummaryView({
  lesson,
  completion,
  hasPassedAssessment,
  onStartAssessment,
}: {
  lesson: LessonBundle["lesson"];
  completion: CompletionDto | null;
  hasPassedAssessment: boolean;
  onStartAssessment: () => void;
}) {
  return (
    <div className="flex flex-col gap-5">
      <Card className="border-primary/25 bg-primary/5">
        <CardContent className="flex flex-col gap-4 p-5 sm:p-6">
          <h2 className="text-xl font-semibold">🎉 Lesson summary</h2>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              Key points
            </p>
            <ul className="mt-2 flex flex-col gap-1.5">
              {lesson.summary.keyPoints.map((point, i) => (
                <li key={i} className="flex items-start gap-2 text-sm leading-relaxed">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
                  {point}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              Vocabulary to remember
            </p>
            <div className="mt-2 flex flex-wrap gap-2">
              {lesson.summary.vocabulary.map((word) => (
                <button
                  key={word}
                  type="button"
                  onClick={() => speak(word, {})}
                  className="rounded-full border border-primary/30 bg-background px-3.5 py-1.5 text-sm font-medium transition-colors hover:bg-primary/10"
                  title="Listen"
                >
                  🔊 {word}
                </button>
              ))}
            </div>
          </div>

          {completion ? (
            <div
              className={cn(
                "rounded-xl border px-4 py-3 text-sm",
                completion.completed
                  ? "border-primary/40 bg-primary/10 text-primary"
                  : "border-border bg-background",
              )}
            >
              {completion.completed
                ? "✅ Lesson completed — well done! Your progress is saved."
                : `Sections completed: ${completion.sectionsDone}/${completion.sectionsTotal}${
                    lesson.assessment && !hasPassedAssessment
                      ? " · pass the final assessment to complete the lesson"
                      : ""
                  }`}
            </div>
          ) : null}

          {lesson.assessment ? (
            <Button size="lg" onClick={onStartAssessment} className="gap-2 self-start">
              <Trophy className="size-4" aria-hidden />
              {hasPassedAssessment ? "Retake the final assessment" : "Take the final assessment"}
            </Button>
          ) : null}
        </CardContent>
      </Card>
    </div>
  );
}
