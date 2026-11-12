"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  ArrowLeftRight,
  Check,
  Clock,
  Eye,
  Flame,
  Layers,
  RotateCcw,
  Settings2,
  Sparkles,
} from "lucide-react";
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
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { api } from "@/lib/client/api";
import { useAppStore } from "@/lib/client/store";
import type { AppRoute } from "@/hooks/use-hash-route";
import type { FlashcardDto, FlashcardSessionDto } from "@/lib/vocab/dto";
import type { SrsConfig } from "@/lib/vocab/srs";
import { describeInterval } from "@/lib/vocab/srs";
import { DifficultyBadge, ErrorText, LoginPrompt, SectionHeading, SpeakButton } from "./shared";

const STUDY_MODES = [
  { id: "queue", label: "Daily queue", hint: "Due reviews + new words" },
  { id: "bookmarks", label: "Bookmarks", hint: "Your saved words" },
  { id: "difficult", label: "Difficult", hint: "Words you flagged" },
  { id: "all", label: "Everything", hint: "The whole library" },
] as const;

const VALID_STUDY_MODES = ["queue", "bookmarks", "difficult", "all"];

/** Accepts queue/bookmarks/difficult/all plus category:<id> and list:<id>. */
function normalizeStudyMode(mode: string): string {
  if (mode.startsWith("category:") || mode.startsWith("list:")) return mode;
  return VALID_STUDY_MODES.includes(mode) ? mode : "queue";
}

/**
 * Flashcards: front = word (+ audio), back = meaning, pronunciation, example.
 * After reveal: Again / Hard / Known / Easy grading plus "Mark difficult" and
 * "Review later". Every grade feeds the spaced-repetition scheduler.
 */
export function FlashcardsTab({
  initialStudy,
  navigate,
}: {
  initialStudy?: string;
  navigate: (route: AppRoute) => void;
}) {
  const user = useAppStore((s) => s.user);
  const showTranslations = useAppStore((s) => s.showTranslations);
  const [study, setStudy] = useState(initialStudy ?? "queue");
  const [session, setSession] = useState<FlashcardSessionDto | null>(null);
  const [index, setIndex] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [config, setConfig] = useState<SrsConfig | null>(null);
  const [newPerDay, setNewPerDay] = useState(10);
  const [reviewsPerDay, setReviewsPerDay] = useState(40);
  const sessionStart = useRef(Date.now());

  const loadSession = useCallback(
    async (mode: string) => {
      if (!user) return;
      setLoading(true);
      setError("");
      const res = await api.vocabFlashcards(normalizeStudyMode(mode));
      if (res.ok) {
        setSession(res.data);
        setIndex(0);
        setRevealed(false);
        setDone(res.data.cards.length === 0);
        sessionStart.current = Date.now();
      } else {
        setError(res.error);
      }
      setLoading(false);
    },
    [user],
  );

  useEffect(() => {
    if (user) void loadSession(study);
  }, [user, study, loadSession]);

  useEffect(() => {
    if (user) {
      void (async () => {
        const res = await api.vocabSettings();
        if (res.ok) {
          setConfig(res.data.config);
          setNewPerDay(res.data.config.newPerDay);
          setReviewsPerDay(res.data.config.reviewsPerDay);
        }
      })();
    }
  }, [user]);

  if (!user) {
    return <LoginPrompt message="Flashcard sessions and spaced repetition are saved to your account." navigate={navigate} />;
  }

  const card: FlashcardDto | undefined = session?.cards[index];
  const totalCards = session?.cards.length ?? 0;

  const grade = async (rating: "again" | "hard" | "good" | "easy") => {
    if (!card) return;
    const res = await api.vocabReview({
      action: "grade",
      wordId: card.word.id,
      rating,
      source: "flashcard",
    });
    if (!res.ok) {
      toast.error(res.error);
      return;
    }
    if (rating === "again") {
      // Push the card to the end of this session for a second pass.
      setSession((prev) =>
        prev ? { ...prev, cards: [...prev.cards, card] } : prev,
      );
      toast.info(`“${card.word.word}” comes back ${res.data.dueLabel} — and later in this session.`);
    } else {
      toast.success(`“${card.word.word}” scheduled ${res.data.dueLabel}.`);
    }
    advance();
  };

  const snooze = async () => {
    if (!card) return;
    const res = await api.vocabReview({
      action: "snooze",
      wordId: card.word.id,
      source: "flashcard",
      hours: 4,
    });
    if (res.ok) {
      toast.info(`“${card.word.word}” will wait — review it later today.`);
      advance();
    } else toast.error(res.error);
  };

  const flagDifficult = async () => {
    if (!card) return;
    const next = !(card.progress?.isDifficult ?? false);
    const res = await api.vocabReview({
      action: "flag",
      wordId: card.word.id,
      difficult: next,
      source: "flashcard",
    });
    if (res.ok) {
      setSession((prev) =>
        prev
          ? {
              ...prev,
              cards: prev.cards.map((c, i) =>
                i === index ? { ...c, progress: res.data.progress } : c,
              ),
            }
          : prev,
      );
      toast.success(next ? "Flagged as difficult." : "Difficulty flag removed.");
    } else toast.error(res.error);
  };

  const advance = () => {
    setRevealed(false);
    if (index + 1 >= (session?.cards.length ?? 0)) setDone(true);
    else setIndex(index + 1);
  };

  const saveSettings = async () => {
    const res = await api.vocabUpdateSettings({ newPerDay, reviewsPerDay });
    if (res.ok) {
      setConfig(res.data.config);
      setSettingsOpen(false);
      toast.success("Study settings saved.");
      void loadSession(study);
    } else toast.error(res.error);
  };

  return (
    <div className="flex flex-col gap-5">
      <SectionHeading
        icon={<Layers className="size-5 text-primary" aria-hidden />}
        title="Flashcards"
        description="Front: the word. Back: everything you need. Grade yourself honestly — the scheduler remembers."
      >
        <Button variant="outline" size="sm" className="gap-1.5" onClick={() => setSettingsOpen(true)}>
          <Settings2 className="size-4" aria-hidden /> Study settings
        </Button>
      </SectionHeading>

      {/* Study mode picker */}
      <div className="flex flex-wrap gap-2">
        {STUDY_MODES.map((mode) => (
          <button
            key={mode.id}
            type="button"
            onClick={() => setStudy(mode.id)}
            className={cn(
              "rounded-xl border px-3.5 py-2 text-left transition-all",
              study === mode.id
                ? "border-primary bg-primary/10"
                : "bg-card hover:border-primary/40",
            )}
          >
            <span className="block text-sm font-semibold">{mode.label}</span>
            <span className="block text-xs text-muted-foreground">{mode.hint}</span>
          </button>
        ))}
      </div>

      <ErrorText>{error}</ErrorText>

      {loading ? (
        <p className="text-sm text-muted-foreground">Shuffling your deck…</p>
      ) : !session || session.cards.length === 0 ? (
        <div className="rounded-2xl border border-dashed p-10 text-center">
          <Sparkles className="mx-auto size-8 text-primary" aria-hidden />
          <p className="mt-2 font-semibold">
            {study === "queue" ? "All done for now!" : "Nothing to study here yet."}
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            {study === "queue"
              ? `Next new words arrive tomorrow (${config?.newPerDay ?? 10} per day). Come back when reviews are due.`
              : "Switch mode or explore the Word Explorer to find words."}
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-2">
            <Button variant="outline" size="sm" onClick={() => setStudy("all")}>
              Study the whole library
            </Button>
            <Button variant="ghost" size="sm" onClick={() => navigate({ name: "vocabulary", tab: "explore" })}>
              Explore words
            </Button>
          </div>
        </div>
      ) : done ? (
        <Card className="border-primary/40">
          <CardContent className="flex flex-col items-center gap-3 p-10 text-center">
            <span className="inline-flex size-14 items-center justify-center rounded-full bg-primary/15">
              <Check className="size-7 text-primary" aria-hidden />
            </span>
            <h3 className="text-xl font-bold">Session complete!</h3>
            <p className="max-w-md text-sm text-muted-foreground">
              You reviewed {totalCards} card{totalCards === 1 ? "" : "s"} in{" "}
              {Math.max(1, Math.round((Date.now() - sessionStart.current) / 60000))} min.
              Words you graded will come back exactly when you need them.
            </p>
            <div className="mt-2 flex flex-wrap justify-center gap-2">
              <Button size="sm" onClick={() => void loadSession(study)}>
                <RotateCcw className="mr-1.5 size-4" aria-hidden /> Another round
              </Button>
              <Button variant="outline" size="sm" onClick={() => navigate({ name: "vocabulary", tab: "challenges" })}>
                Take a challenge
              </Button>
            </div>
          </CardContent>
        </Card>
      ) : card ? (
        <div className="flex flex-col gap-4">
          {/* Progress */}
          <div>
            <div className="mb-1 flex items-center justify-between text-xs text-muted-foreground">
              <span>
                Card {index + 1} of {session.cards.length}
                {session.meta.dueReviews > 0 ? ` · ${session.meta.dueReviews} were due` : ""}
                {session.meta.newRemaining > 0 ? ` · ${session.meta.newRemaining} new left today` : ""}
              </span>
              {card.isNew ? <span className="font-semibold text-primary">new word</span> : null}
            </div>
            <Progress value={((index + 1) / session.cards.length) * 100} aria-label="Session progress" />
          </div>

          {/* The card */}
          <Card className="overflow-hidden">
            <CardContent className="flex min-h-[340px] flex-col items-center justify-center gap-4 p-6 text-center sm:p-10">
              <div className="flex flex-wrap items-center justify-center gap-2">
                <DifficultyBadge difficulty={card.word.difficulty} />
                <span className="rounded-full bg-secondary px-2.5 py-0.5 text-[11px] font-semibold capitalize text-secondary-foreground">
                  {card.word.partOfSpeech}
                </span>
                {card.progress?.isDifficult ? (
                  <span className="inline-flex items-center gap-1 rounded-full bg-rose-100 px-2.5 py-0.5 text-[11px] font-semibold text-rose-700 dark:bg-rose-950 dark:text-rose-300">
                    <Flame className="size-3" aria-hidden /> difficult
                  </span>
                ) : null}
              </div>

              <h3 className="text-4xl font-bold tracking-tight sm:text-5xl">{card.word.word}</h3>
              <p className="font-mono text-sm text-muted-foreground">{card.word.pronunciation}</p>
              <SpeakButton text={card.word.word} label={`Listen to ${card.word.word}`} />

              {revealed ? (
                <div className="flex w-full max-w-lg flex-col gap-3 border-t pt-5 text-left">
                  <p className="text-center text-lg font-medium">{card.word.meaning}</p>
                  <p className="text-center text-base text-primary">{card.word.translation}</p>
                  <div className="mt-2 flex items-start gap-2 rounded-xl border bg-secondary/30 p-3">
                    <SpeakButton text={card.word.example.english} label="Listen to the example" className="mt-0.5" />
                    <div>
                      <p className="text-sm font-medium">{card.word.example.english}</p>
                      <p className="mt-0.5 text-sm text-muted-foreground">
                        {card.word.example.translation}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap justify-center gap-1.5">
                    {card.word.synonyms.slice(0, 3).map((s) => (
                      <span key={s} className="rounded-full border px-2.5 py-0.5 text-xs">
                        ≈ {s}
                      </span>
                    ))}
                    {card.word.antonyms.slice(0, 2).map((a) => (
                      <span key={a} className="rounded-full border border-dashed px-2.5 py-0.5 text-xs">
                        ≠ {a}
                      </span>
                    ))}
                  </div>
                </div>
              ) : (
                <p className="text-sm text-muted-foreground">
                  Think of the meaning, say it out loud, then reveal.
                </p>
              )}
            </CardContent>
          </Card>

          {/* Controls */}
          {!revealed ? (
            <Button size="lg" className="gap-2" onClick={() => setRevealed(true)}>
              <Eye className="size-4" aria-hidden /> Reveal answer
            </Button>
          ) : (
            <div className="flex flex-col gap-3">
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                <Button
                  variant="destructive"
                  className="flex-col gap-0.5 py-3"
                  onClick={() => void grade("again")}
                >
                  <span className="text-sm font-bold">Again</span>
                  <span className="text-[11px] opacity-80">I forgot</span>
                </Button>
                <Button
                  variant="outline"
                  className="flex-col gap-0.5 border-amber-500/50 py-3 text-amber-700 dark:text-amber-300"
                  onClick={() => void grade("hard")}
                >
                  <span className="text-sm font-bold">Hard</span>
                  <span className="text-[11px] opacity-70">
                    {card.progress ? "sooner" : describeInterval(10)}
                  </span>
                </Button>
                <Button
                  className="flex-col gap-0.5 bg-primary py-3"
                  onClick={() => void grade("good")}
                >
                  <span className="text-sm font-bold">Known ✓</span>
                  <span className="text-[11px] opacity-80">I knew it</span>
                </Button>
                <Button
                  variant="outline"
                  className="flex-col gap-0.5 border-emerald-500/50 py-3 text-emerald-700 dark:text-emerald-300"
                  onClick={() => void grade("easy")}
                >
                  <span className="text-sm font-bold">Easy</span>
                  <span className="text-[11px] opacity-70">
                    {card.progress ? "much later" : describeInterval(60 * 26)}
                  </span>
                </Button>
              </div>
              <div className="flex flex-wrap justify-center gap-2">
                <Button variant="ghost" size="sm" className="gap-1.5" onClick={flagDifficult}>
                  <Flame className="size-4" aria-hidden />
                  {card.progress?.isDifficult ? "Unmark difficult" : "Mark as difficult"}
                </Button>
                <Button variant="ghost" size="sm" className="gap-1.5" onClick={snooze}>
                  <Clock className="size-4" aria-hidden /> Review later
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="gap-1.5"
                  onClick={() =>
                    navigate({ name: "vocabulary", tab: "relationships", param: card.word.id })
                  }
                >
                  <ArrowLeftRight className="size-4" aria-hidden /> Relationships
                </Button>
              </div>
            </div>
          )}
        </div>
      ) : null}

      {/* Study settings */}
      <Dialog open={settingsOpen} onOpenChange={setSettingsOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Spaced repetition settings</DialogTitle>
            <DialogDescription>
              Tune your daily rhythm. Advanced scheduling factors (ease, difficulty flags,
              performance history) adjust automatically.
            </DialogDescription>
          </DialogHeader>
          {config ? (
            <div className="flex flex-col gap-6 py-2">
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <Label htmlFor="new-per-day">New words per day</Label>
                  <span className="text-sm font-bold text-primary">{newPerDay}</span>
                </div>
                <Slider
                  id="new-per-day"
                  min={3}
                  max={30}
                  step={1}
                  value={[newPerDay]}
                  onValueChange={([v]) => setNewPerDay(v)}
                />
              </div>
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <Label htmlFor="reviews-per-day">Max reviews per day</Label>
                  <span className="text-sm font-bold text-primary">{reviewsPerDay}</span>
                </div>
                <Slider
                  id="reviews-per-day"
                  min={10}
                  max={120}
                  step={5}
                  value={[reviewsPerDay]}
                  onValueChange={([v]) => setReviewsPerDay(v)}
                />
              </div>
              <div className="flex items-center justify-between rounded-xl border p-3">
                <div>
                  <p className="text-sm font-medium">Translations on cards</p>
                  <p className="text-xs text-muted-foreground">Show Español on the card back</p>
                </div>
                <Switch checked={showTranslations} disabled aria-label="Translations" />
              </div>
              <p className="text-xs text-muted-foreground">
                Mastery rule: a word needs {config.masterRepetitions} successful reviews and a{" "}
                {config.masterIntervalDays}-day interval before it counts as mastered — never just
                one correct answer.
              </p>
            </div>
          ) : null}
          <DialogFooter>
            <Button variant="ghost" onClick={() => setSettingsOpen(false)}>Cancel</Button>
            <Button onClick={saveSettings}>Save</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
