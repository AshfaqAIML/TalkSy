"use client";

import { useEffect, useMemo, useState } from "react";
import { BookOpen, ChevronDown, Play, Square } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { api } from "@/lib/client/api";
import { useAppStore } from "@/lib/client/store";
import { useSpeech } from "@/hooks/use-speech";
import type { VocabContextItem, VocabEntry } from "@/data/vocabulary/types";
import { cn } from "@/lib/utils";
import { ErrorText, HighlightedText, SectionHeading } from "./shared";

interface ContextsDto {
  items: (VocabContextItem & { wordCount?: number })[];
}

/**
 * Context learning: short dialogues and paragraphs with the target words
 * highlighted inline. Click a highlighted word for its meaning; play the
 * whole passage with TTS.
 */
export function ContextTab({
  focusItemId,
  onOpenWord,
}: {
  focusItemId?: string;
  onOpenWord: (wordId: string) => void;
}) {
  const showTranslations = useAppStore((s) => s.showTranslations);
  const toggleTranslations = useAppStore((s) => s.toggleTranslations);
  const speechRate = useAppStore((s) => s.speechRate);
  const { playing, play, stop } = useSpeech();
  const [items, setItems] = useState<VocabContextItem[]>([]);
  const [error, setError] = useState("");
  const [openId, setOpenId] = useState<string | null>(null);
  const [wordCache, setWordCache] = useState<Record<string, VocabEntry>>({});

  useEffect(() => {
    // Context data is static — import directly from the registry (content as code).
    (async () => {
      const mod = await import("@/data/vocabulary");
      setItems(mod.vocabContextItems);
      if (focusItemId) setOpenId(focusItemId);
      else if (mod.vocabContextItems.length > 0) setOpenId(mod.vocabContextItems[0].id);
    })();
  }, [focusItemId]);

  const openItem = items.find((i) => i.id === openId);
  const targetWords = useMemo(
    () => (openItem ? openItem.targetWordIds.map((id) => wordCache[id]).filter(Boolean) : []),
    [openItem, wordCache],
  );

  // Load the full entries for the open passage's target words.
  useEffect(() => {
    if (!openItem) return;
    (async () => {
      const missing = openItem.targetWordIds.filter((id) => !wordCache[id]);
      for (const id of missing) {
        const res = await api.vocabWord(id);
        if (res.ok) {
          setWordCache((prev) => ({ ...prev, [id]: res.data.word }));
        } else {
          setError(res.error);
        }
      }
    })();
  }, [openItem, wordCache]);

  const playPassage = () => {
    if (!openItem) return;
    const text =
      openItem.kind === "dialogue"
        ? (openItem.lines ?? []).map((l) => l.text).join(" ")
        : openItem.text ?? "";
    if (playing) stop();
    else play(text, speechRate * 0.95);
  };

  return (
    <div className="flex flex-col gap-5">
      <SectionHeading
        icon={<BookOpen className="size-5 text-primary" aria-hidden />}
        title="Context learning"
        description="Words stick when you meet them in real language — read, listen and tap the highlights."
      >
        <Button variant="outline" size="sm" onClick={toggleTranslations}>
          {showTranslations ? "Hide" : "Show"} translations
        </Button>
      </SectionHeading>

      <ErrorText>{error}</ErrorText>

      <div className="grid gap-5 lg:grid-cols-[260px_1fr]">
        {/* Passage list */}
        <nav aria-label="Context passages" className="flex flex-col gap-2">
          {items.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setOpenId(item.id)}
              aria-current={openId === item.id ? "true" : undefined}
              className={cn(
                "rounded-xl border p-3 text-left transition-all",
                openId === item.id
                  ? "border-primary bg-primary/10"
                  : "bg-card hover:border-primary/40",
              )}
            >
              <span className="flex items-center justify-between gap-2">
                <span className="text-sm font-semibold">{item.title}</span>
                <ChevronDown
                  className={cn(
                    "size-4 shrink-0 text-muted-foreground transition-transform",
                    openId === item.id && "rotate-180",
                  )}
                  aria-hidden
                />
              </span>
              <span className="mt-0.5 block text-xs capitalize text-muted-foreground">
                {item.kind} · {item.targetWordIds.length} words
              </span>
            </button>
          ))}
        </nav>

        {/* Reader */}
        {openItem ? (
          <Card>
            <CardContent className="flex flex-col gap-4 p-5 sm:p-6">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h3 className="text-lg font-bold">{openItem.title}</h3>
                  {openItem.scene ? (
                    <p className="mt-0.5 text-sm italic text-muted-foreground">{openItem.scene}</p>
                  ) : null}
                </div>
                <Button size="sm" variant="outline" className="gap-1.5" onClick={playPassage}>
                  {playing ? (
                    <>
                      <Square className="size-4" aria-hidden /> Stop
                    </>
                  ) : (
                    <>
                      <Play className="size-4" aria-hidden /> Listen
                    </>
                  )}
                </Button>
              </div>

              {openItem.kind === "dialogue" ? (
                <div className="flex flex-col gap-2.5">
                  {(openItem.lines ?? []).map((line, i) => (
                    <div
                      key={i}
                      className={cn(
                        "max-w-[92%] rounded-2xl border p-3",
                        i % 2 === 0 ? "self-start bg-secondary/40" : "self-end bg-primary/5",
                      )}
                    >
                      <p className="text-xs font-bold text-primary">{line.speaker}</p>
                      <p className="mt-0.5 text-[15px] leading-relaxed">
                        <HighlightedText text={line.text} words={targetWords} />
                      </p>
                      {showTranslations ? (
                        <p className="mt-1 text-xs text-muted-foreground">{line.translation}</p>
                      ) : null}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex flex-col gap-3">
                  <p className="text-[15px] leading-8">
                    <HighlightedText text={openItem.text ?? ""} words={targetWords} />
                  </p>
                  {showTranslations && openItem.translation ? (
                    <p className="rounded-xl border bg-secondary/30 p-3 text-sm leading-7 text-muted-foreground">
                      {openItem.translation}
                    </p>
                  ) : null}
                </div>
              )}

              {/* Target words of this passage */}
              <div className="border-t pt-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Words in this passage
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {openItem.targetWordIds.map((id) => {
                    const word = wordCache[id];
                    return (
                      <button
                        key={id}
                        type="button"
                        onClick={() => onOpenWord(id)}
                        className="group flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm font-medium transition-colors hover:border-primary/60"
                      >
                        {word ? (
                          <>
                            {word.word}
                            <span className="text-xs font-normal text-muted-foreground group-hover:hidden">
                              {word.translation}
                            </span>
                          </>
                        ) : (
                          id
                        )}
                      </button>
                    );
                  })}
                </div>
                {openItem.followUp ? (
                  <div className="mt-4 rounded-xl border border-dashed p-3 text-sm text-muted-foreground">
                    <span className="font-semibold text-foreground">Your turn: </span>
                    {openItem.followUp}
                  </div>
                ) : null}
              </div>
            </CardContent>
          </Card>
        ) : (
          <p className="text-sm text-muted-foreground">Loading passages…</p>
        )}
      </div>
      {targetWords.length > 0 ? (
        <p className="text-xs text-muted-foreground">
          Tip: tap a word chip to open its full Word Explorer card — every card has an audio
          button, and the Listen button reads the whole passage aloud.
        </p>
      ) : null}
    </div>
  );
}
