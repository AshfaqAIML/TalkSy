"use client";

import { useEffect, useState } from "react";
import {
  ArrowLeftRight,
  BookMarked,
  BookOpen,
  Check,
  Flame,
  Link2,
  ListPlus,
  PenLine,
  Quote,
  Repeat,
  Sparkles,
} from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { api } from "@/lib/client/api";
import { useAppStore } from "@/lib/client/store";
import type { AppRoute } from "@/hooks/use-hash-route";
import type { WordDetailDto, WordListDto } from "@/lib/vocab/dto";
import type { VocabContextItem } from "@/data/vocabulary/types";
import {
  DifficultyBadge,
  ProgressInfo,
  SpeakButton,
  StatusBadge,
} from "./shared";

/**
 * Full Word Explorer record: every field of a word entry, audio everywhere,
 * quick study actions and links into the other vocabulary modes.
 */
export function WordDetailSheet({
  wordId,
  lists,
  onClose,
  onNavigate,
}: {
  wordId: string | null;
  lists: WordListDto[];
  onClose: () => void;
  onNavigate: (route: AppRoute) => void;
}) {
  const user = useAppStore((s) => s.user);
  const showTranslations = useAppStore((s) => s.showTranslations);
  const [detail, setDetail] = useState<{
    wordId: string;
    data: WordDetailDto;
  } | null>(null);
  const [error, setError] = useState("");
  const [bookmarked, setBookmarked] = useState(false);
  const [flagged, setFlagged] = useState(false);
  const [addingTo, setAddingTo] = useState("");

  useEffect(() => {
    if (!wordId) return;
    let cancelled = false;
    (async () => {
      const res = await api.vocabWord(wordId);
      if (cancelled) return;
      if (res.ok) {
        setDetail({ wordId, data: res.data });
        setBookmarked(res.data.bookmarked);
        setFlagged(res.data.progress?.isDifficult ?? false);
        setError("");
      } else {
        setError(res.error);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [wordId, user]);

  if (!wordId) return null;

  // Only use the loaded detail when it belongs to the currently open word.
  const current = detail?.wordId === wordId ? detail.data : null;
  const word = current?.word;

  const toggleBookmark = async () => {
    if (!word) return;
    const res = await api.vocabToggleBookmark(word.id);
    if (res.ok) {
      setBookmarked(res.data.bookmarked);
      toast.success(res.data.bookmarked ? "Added to bookmarks." : "Bookmark removed.");
    } else toast.error(res.error);
  };

  const toggleFlag = async () => {
    if (!word) return;
    const res = await api.vocabReview({
      action: "flag",
      wordId: word.id,
      difficult: !flagged,
      source: "explore",
    });
    if (res.ok) {
      setFlagged(!flagged);
      toast.success(
        !flagged
          ? "Marked as difficult — it will grow slower and come back sooner."
          : "Difficulty flag removed.",
      );
    } else toast.error(res.error);
  };

  const markKnown = async () => {
    if (!word) return;
    const res = await api.vocabReview({
      action: "known",
      wordId: word.id,
      source: "explore",
    });
    if (res.ok) {
      toast.success(`Nice! “${word.word}” is scheduled ${res.data.dueLabel}.`);
    } else toast.error(res.error);
  };

  const addToList = async (listId: string, listName: string) => {
    if (!word) return;
    setAddingTo(listId);
    const res = await api.vocabAddToList(listId, word.id);
    setAddingTo("");
    if (res.ok) toast.success(`Added to “${listName}”.`);
    else toast.error(res.error);
  };

  return (
    <Sheet open={!!wordId} onOpenChange={(open) => !open && onClose()}>
      <SheetContent
        side="right"
        className="w-full overflow-y-auto p-0 sm:max-w-xl"
      >
        {!word ? (
          <div className="p-10 text-center text-sm text-muted-foreground">
            {error || "Loading word…"}
          </div>
        ) : (
          <>
            <SheetHeader className="border-b bg-secondary/40 p-5">
              <SheetTitle className="text-left">
                <span className="flex flex-wrap items-center gap-2">
                  <span className="text-2xl font-bold">{word.word}</span>
                  <SpeakButton text={word.word} label={`Listen to ${word.word}`} />
                </span>
                <span className="mt-1 flex flex-wrap items-center gap-2 text-sm font-normal">
                  <span className="font-mono text-muted-foreground">{word.pronunciation}</span>
                  <span className="italic text-muted-foreground">{word.partOfSpeech}</span>
                  <DifficultyBadge difficulty={word.difficulty} />
                  {current?.progress ? <StatusBadge status={current.progress.status} /> : null}
                </span>
              </SheetTitle>
            </SheetHeader>

            <div className="flex flex-col gap-6 p-5">
              {/* Meanings */}
              <section aria-labelledby="w-meanings">
                <h3 className="text-xs font-bold uppercase tracking-wide text-muted-foreground">
                  Meanings
                </h3>
                <p className="mt-1.5 text-[15px] leading-relaxed">{word.meaning}</p>
                <p className="mt-1 text-[15px] font-medium text-primary">{word.translation}</p>
                {current?.progress ? (
                  <div className="mt-2">
                    <ProgressInfo progress={current.progress} />
                  </div>
                ) : null}
              </section>

              {/* Example */}
              <section aria-labelledby="w-example">
                <h3 className="text-xs font-bold uppercase tracking-wide text-muted-foreground">
                  Example
                </h3>
                <div className="mt-1.5 flex items-start gap-2 rounded-xl border bg-secondary/30 p-3">
                  <SpeakButton
                    text={word.example.english}
                    label="Listen to the example"
                    className="mt-0.5"
                  />
                  <div>
                    <p className="text-[15px] leading-relaxed">
                      <Quote className="mr-1 inline size-3.5 text-muted-foreground" aria-hidden />
                      {word.example.english}
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {word.example.translation}
                    </p>
                  </div>
                </div>
              </section>

              {/* Synonyms / antonyms */}
              <section className="grid gap-4 sm:grid-cols-2" aria-labelledby="w-rel">
                <div>
                  <h3 className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-muted-foreground">
                    <Sparkles className="size-3.5" aria-hidden /> Synonyms
                  </h3>
                  <div className="mt-1.5 flex flex-wrap gap-1.5">
                    {word.synonyms.length > 0 ? (
                      word.synonyms.map((s) => (
                        <Badge key={s} variant="secondary" className="font-normal">{s}</Badge>
                      ))
                    ) : (
                      <span className="text-sm text-muted-foreground">
                        One of a kind — no close synonym.
                      </span>
                    )}
                  </div>
                </div>
                <div>
                  <h3 className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-muted-foreground">
                    <ArrowLeftRight className="size-3.5" aria-hidden /> Antonyms
                  </h3>
                  <div className="mt-1.5 flex flex-wrap gap-1.5">
                    {word.antonyms.length > 0 ? (
                      word.antonyms.map((a) => (
                        <Badge key={a} variant="outline" className="font-normal">{a}</Badge>
                      ))
                    ) : (
                      <span className="text-sm text-muted-foreground">
                        {word.antonymNote ?? "No opposite."}
                      </span>
                    )}
                  </div>
                  {word.antonyms.length > 0 && word.antonymNote ? (
                    <p className="mt-1 text-xs text-muted-foreground">{word.antonymNote}</p>
                  ) : null}
                </div>
              </section>

              {/* Word family */}
              <section aria-labelledby="w-family">
                <h3 className="text-xs font-bold uppercase tracking-wide text-muted-foreground">
                  Word family
                </h3>
                <ul className="mt-1.5 divide-y rounded-xl border">
                  {word.wordFamily.map((member) => (
                    <li key={member.term} className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5 px-3 py-2 text-sm">
                      <span className="font-semibold">{member.term}</span>
                      <span className="text-xs italic text-muted-foreground">
                        {member.partOfSpeech}
                      </span>
                      <span className="text-muted-foreground">— {member.meaning}</span>
                      {showTranslations ? (
                        <span className="text-xs text-primary">{member.translation}</span>
                      ) : null}
                    </li>
                  ))}
                </ul>
              </section>

              {/* Collocations */}
              <section aria-labelledby="w-coll">
                <h3 className="text-xs font-bold uppercase tracking-wide text-muted-foreground">
                  Common collocations
                </h3>
                <div className="mt-1.5 flex flex-col gap-1.5">
                  {word.collocations.map((collocation) => (
                    <div
                      key={collocation.phrase}
                      className="flex items-center justify-between gap-2 rounded-xl border px-3 py-2"
                    >
                      <span className="flex items-center gap-2 text-sm font-medium">
                        <SpeakButton
                          text={collocation.phrase}
                          label={`Listen to ${collocation.phrase}`}
                          className="size-7"
                        />
                        {collocation.phrase}
                      </span>
                      {showTranslations ? (
                        <span className="text-xs text-muted-foreground">
                          {collocation.translation}
                        </span>
                      ) : null}
                    </div>
                  ))}
                </div>
              </section>

              {/* Related words */}
              {current?.relatedWords && current.relatedWords.length > 0 ? (
                <section aria-labelledby="w-related">
                  <h3 className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-muted-foreground">
                    <Link2 className="size-3.5" aria-hidden /> Related words
                  </h3>
                  <div className="mt-1.5 grid gap-2 sm:grid-cols-2">
                    {current.relatedWords.map((related) => (
                      <button
                        key={related.word.id}
                        type="button"
                        onClick={() => {
                          onNavigate({ name: "vocabulary", tab: "explore", param: related.word.id });
                        }}
                        className="rounded-xl border bg-card p-3 text-left transition-all hover:border-primary/50 hover:shadow-sm"
                      >
                        <span className="flex flex-wrap items-center gap-1.5">
                          <span className="text-sm font-bold">{related.word.word}</span>
                          <DifficultyBadge difficulty={related.word.difficulty} />
                        </span>
                        <span className="mt-0.5 line-clamp-1 block text-xs text-muted-foreground">
                          {related.word.meaning}
                        </span>
                      </button>
                    ))}
                  </div>
                </section>
              ) : null}

              {/* Context passages */}
              {current?.contextItems && current.contextItems.length > 0 ? (
                <section aria-labelledby="w-context">
                  <h3 className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-muted-foreground">
                    <BookOpen className="size-3.5" aria-hidden /> See it in context
                  </h3>
                  <div className="mt-1.5 flex flex-col gap-1.5">
                    {current.contextItems.map((item: VocabContextItem) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() =>
                          onNavigate({ name: "vocabulary", tab: "context", param: item.id })
                        }
                        className="flex items-center justify-between gap-2 rounded-xl border px-3 py-2 text-left text-sm transition-colors hover:border-primary/50"
                      >
                        <span className="font-medium">{item.title}</span>
                        <span className="text-xs capitalize text-muted-foreground">{item.kind}</span>
                      </button>
                    ))}
                  </div>
                </section>
              ) : null}

              <Separator />

              {/* Actions */}
              <section className="flex flex-wrap gap-2" aria-label="Word actions">
                {user ? (
                  <>
                    <Button
                      variant={bookmarked ? "default" : "outline"}
                      size="sm"
                      className="gap-1.5"
                      onClick={toggleBookmark}
                    >
                      <BookMarked className="size-4" aria-hidden />
                      {bookmarked ? "Bookmarked" : "Bookmark"}
                    </Button>
                    <Button
                      variant={flagged ? "destructive" : "outline"}
                      size="sm"
                      className="gap-1.5"
                      onClick={toggleFlag}
                    >
                      <Flame className="size-4" aria-hidden />
                      {flagged ? "Difficult" : "Mark difficult"}
                    </Button>
                    <Button variant="outline" size="sm" className="gap-1.5" onClick={markKnown}>
                      <Check className="size-4" aria-hidden /> I know this
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="gap-1.5"
                      onClick={() =>
                        onNavigate({ name: "vocabulary", tab: "sentences", param: word.id })
                      }
                    >
                      <PenLine className="size-4" aria-hidden /> Write a sentence
                    </Button>
                    {lists.length > 0 ? (
                      <div className="flex flex-wrap items-center gap-2">
                        <ListPlus className="size-4 text-muted-foreground" aria-hidden />
                        <select
                          aria-label="Add to word list"
                          value=""
                          disabled={!!addingTo}
                          onChange={(e) => e.target.value && addToList(e.target.value, lists.find((l) => l.id === e.target.value)?.name ?? "")}
                          className="h-8 rounded-lg border bg-background px-2 text-xs"
                        >
                          <option value="">Add to list…</option>
                          {lists.map((list) => (
                            <option key={list.id} value={list.id}>
                              {list.name}
                            </option>
                          ))}
                        </select>
                      </div>
                    ) : null}
                  </>
                ) : (
                  <p className="text-sm text-muted-foreground">
                    Log in to bookmark words, build lists and schedule reviews.
                  </p>
                )}
                <Button
                  variant="ghost"
                  size="sm"
                  className="gap-1.5"
                  onClick={() =>
                    onNavigate({ name: "vocabulary", tab: "relationships", param: word.id })
                  }
                >
                  <Repeat className="size-4" aria-hidden /> Word relationships
                </Button>
              </section>

              <p className={cn("text-xs text-muted-foreground")}>
                Tip: turn translations {showTranslations ? "off" : "on"} with the switch above to
                challenge yourself.
              </p>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
