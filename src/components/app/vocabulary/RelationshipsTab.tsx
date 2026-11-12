"use client";

import { useEffect, useMemo, useState } from "react";
import { ArrowLeftRight, Link2, Quote, Search, Sparkles, Waypoints } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { api } from "@/lib/client/api";
import { useAppStore } from "@/lib/client/store";
import type { AppRoute } from "@/hooks/use-hash-route";
import type { WordDetailDto } from "@/lib/vocab/dto";
import { vocabWords } from "@/data/vocabulary";
import { DifficultyBadge, ErrorText, SectionHeading, SpeakButton } from "./shared";

/**
 * Word Relationships: pick a word and explore its web — synonyms, antonyms,
 * related library words, word family and collocations, all cross-linked.
 */
export function RelationshipsTab({
  focusWordId,
  onOpenWord,
  navigate,
}: {
  focusWordId?: string;
  onOpenWord: (wordId: string) => void;
  navigate: (route: AppRoute) => void;
}) {
  const user = useAppStore((s) => s.user);
  const showTranslations = useAppStore((s) => s.showTranslations);
  const [query, setQuery] = useState("");
  // Deep-linked word comes in via props; the parent remounts on param change.
  const [selectedId, setSelectedId] = useState<string>(focusWordId ?? "buy");
  const [detail, setDetail] = useState<WordDetailDto | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!selectedId) return;
    let cancelled = false;
    (async () => {
      const res = await api.vocabWord(selectedId);
      if (cancelled) return;
      if (res.ok) {
        setDetail(res.data);
        setError("");
      } else setError(res.error);
    })();
    return () => {
      cancelled = true;
    };
  }, [selectedId, user]);

  const suggestions = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return vocabWords
      .filter(
        (w) =>
          w.word.toLowerCase().includes(q) ||
          w.synonyms.some((s) => s.toLowerCase().includes(q)) ||
          w.antonyms.some((a) => a.toLowerCase().includes(q)),
      )
      .slice(0, 8);
  }, [query]);

  const word = detail?.word;

  return (
    <div className="flex flex-col gap-5">
      <SectionHeading
        icon={<Waypoints className="size-5 text-primary" aria-hidden />}
        title="Word relationships"
        description="Words live in networks: synonyms, opposites, families and word partners. Explore one word at a time."
      />

      {/* Word picker */}
      <div className="relative">
        <Search
          className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
          aria-hidden
        />
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Type a word to explore its relationships…"
          aria-label="Search a word for its relationships"
          className="max-w-md pl-9"
        />
        {suggestions.length > 0 ? (
          <div className="absolute z-10 mt-1 max-w-md rounded-xl border bg-popover p-1 shadow-md">
            {suggestions.map((s) => (
              <button
                key={s.id}
                type="button"
                onClick={() => {
                  setSelectedId(s.id);
                  setQuery("");
                }}
                className="flex w-full items-center justify-between gap-3 rounded-lg px-3 py-2 text-left text-sm hover:bg-secondary"
              >
                <span className="font-semibold">{s.word}</span>
                <span className="text-xs text-muted-foreground">{s.translation}</span>
              </button>
            ))}
          </div>
        ) : null}
      </div>

      <ErrorText>{error}</ErrorText>

      {!word ? (
        <div className="grid gap-3 sm:grid-cols-2">
          {Array.from({ length: 4 }).map((_, i) => (
            <Skeleton key={i} className="h-40 rounded-2xl" />
          ))}
        </div>
      ) : (
        <div className="flex flex-col gap-5">
          {/* Hero word */}
          <Card className="border-primary/30">
            <CardContent className="flex flex-col gap-4 p-5 sm:p-6">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-3xl font-bold">{word.word}</h3>
                  <SpeakButton text={word.word} label={`Listen to ${word.word}`} />
                </div>
                <DifficultyBadge difficulty={word.difficulty} />
              </div>
              <p className="text-sm text-muted-foreground">
                <span className="font-mono">{word.pronunciation}</span> ·{" "}
                <span className="italic">{word.partOfSpeech}</span> — {word.meaning}
              </p>

              <div className="grid gap-4 md:grid-cols-2">
                {/* Synonyms */}
                <div className="rounded-xl border p-4">
                  <h4 className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-muted-foreground">
                    <Sparkles className="size-3.5" aria-hidden /> Synonyms
                  </h4>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {word.synonyms.length > 0 ? (
                      word.synonyms.map((s) => (
                        <Badge key={s} variant="secondary" className="font-normal">{s}</Badge>
                      ))
                    ) : (
                      <span className="text-sm text-muted-foreground">
                        This word is one of a kind.
                      </span>
                    )}
                  </div>
                </div>

                {/* Antonyms */}
                <div className="rounded-xl border p-4">
                  <h4 className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-muted-foreground">
                    <ArrowLeftRight className="size-3.5" aria-hidden /> Antonyms
                  </h4>
                  <div className="mt-2 flex flex-wrap gap-1.5">
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
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Related words in the library */}
          <div>
            <h4 className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-muted-foreground">
              <Link2 className="size-3.5" aria-hidden /> Related words in this library
            </h4>
            <div className="mt-2 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {(detail?.relatedWords ?? []).map((related) => (
                <button
                  key={related.word.id}
                  type="button"
                  onClick={() => setSelectedId(related.word.id)}
                  className="rounded-2xl border bg-card p-4 text-left transition-all hover:border-primary/50 hover:shadow-sm"
                >
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-bold">{related.word.word}</span>
                    <SpeakButton
                      text={related.word.word}
                      label={`Listen to ${related.word.word}`}
                      className="size-7"
                    />
                  </div>
                  <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">
                    {related.word.meaning}
                  </p>
                  <div className="mt-2 flex flex-wrap gap-1">
                    {related.word.antonyms.slice(0, 2).map((a) => (
                      <span key={a} className="rounded-full bg-secondary px-2 py-0.5 text-[10px]">
                        ≠ {a}
                      </span>
                    ))}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Word family + collocations */}
          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wide text-muted-foreground">
                Word family
              </h4>
              <ul className="mt-2 divide-y rounded-xl border">
                {word.wordFamily.map((member) => (
                  <li key={member.term} className="px-3 py-2.5 text-sm">
                    <span className="font-semibold">{member.term}</span>{" "}
                    <span className="text-xs italic text-muted-foreground">
                      ({member.partOfSpeech})
                    </span>
                    <p className="mt-0.5 text-muted-foreground">{member.meaning}</p>
                    {showTranslations ? (
                      <p className="text-xs text-primary">{member.translation}</p>
                    ) : null}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wide text-muted-foreground">
                Common collocations
              </h4>
              <div className="mt-2 flex flex-col gap-2">
                {word.collocations.map((collocation) => (
                  <div
                    key={collocation.phrase}
                    className="flex items-center gap-2 rounded-xl border p-3"
                  >
                    <SpeakButton
                      text={collocation.phrase}
                      label={`Listen to ${collocation.phrase}`}
                      className="size-8"
                    />
                    <div>
                      <p className="text-sm font-semibold">{collocation.phrase}</p>
                      {showTranslations ? (
                        <p className="text-xs text-muted-foreground">
                          {collocation.translation}
                        </p>
                      ) : null}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Example + cross-links */}
          <div className="flex flex-col gap-3 rounded-xl border bg-secondary/30 p-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-2">
              <SpeakButton text={word.example.english} label="Listen to the example" className="mt-0.5" />
              <div>
                <p className="text-sm font-medium">
                  <Quote className="mr-1 inline size-3.5 text-muted-foreground" aria-hidden />
                  {word.example.english}
                </p>
                <p className="text-sm text-muted-foreground">{word.example.translation}</p>
              </div>
            </div>
            <div className="flex shrink-0 flex-wrap gap-2">
              <Button variant="outline" size="sm" onClick={() => onOpenWord(word.id)}>
                Full word card
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigate({ name: "vocabulary", tab: "sentences", param: word.id })}
              >
                Write a sentence
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
