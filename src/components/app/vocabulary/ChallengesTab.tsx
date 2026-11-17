"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Check, Link2, Shuffle, Target, Trophy, Volume2, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { api, type VocabCategoriesDto } from "@/lib/client/api";
import { useAppStore } from "@/lib/client/store";
import { useSpeech } from "@/hooks/use-speech";
import { useAppStore as useStore } from "@/lib/client/store";
import type { AppRoute } from "@/hooks/use-hash-route";
import { CHALLENGE_KIND_INFO, type ChallengeKind } from "@/data/vocabulary/types";
import type {
  ChallengeItem,
  ChallengeRunDto,
  ChallengeStartDto,
  ChallengeSubmitDto,
  ItemResult,
} from "@/lib/vocab/dto";
import { ErrorText, LoginPrompt, SectionHeading } from "./shared";

type AnswerValue =
  | { type: "meaning" | "contextual-usage"; optionId: string }
  | { type: "spelling"; text: string }
  | { type: "arrangement"; tokens: string[] }
  | { type: "matching"; pairs: { leftId: string; rightId: string }[] };

/**
 * Vocabulary challenges: six kinds generated from the word database —
 * category quizzes, word meanings, spelling, word arrangement, contextual
 * usage and matching. Answers are graded server-side; every tested word
 * feeds the spaced-repetition scheduler.
 */
export function ChallengesTab({
  initialKind,
  navigate,
}: {
  initialKind?: string;
  navigate: (route: AppRoute) => void;
}) {
  const user = useAppStore((s) => s.user);
  const [kind, setKind] = useState<ChallengeKind>(
    initialKind && initialKind in CHALLENGE_KIND_INFO ? (initialKind as ChallengeKind) : "meaning",
  );
  const [category, setCategory] = useState("all");
  const [categories, setCategories] = useState<VocabCategoriesDto["categories"]>([]);
  const [size, setSize] = useState(10);
  const [run, setRun] = useState<ChallengeStartDto | null>(null);
  const [answers, setAnswers] = useState<Record<string, AnswerValue>>({});
  const [result, setResult] = useState<ChallengeSubmitDto | null>(null);
  const [history, setHistory] = useState<ChallengeRunDto[]>([]);
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const startedAt = useRef<number>(0);

  useEffect(() => {
    (async () => {
      const res = await api.vocabCategories();
      if (res.ok) setCategories(res.data.categories);
    })();
  }, []);

  useEffect(() => {
    if (user) {
      (async () => {
        const res = await api.vocabChallengeHistory();
        if (res.ok) setHistory(res.data.runs);
      })();
    }
  }, [user]);

  const start = async () => {
    setBusy(true);
    setError("");
    setResult(null);
    const res = await api.vocabStartChallenge({
      kind,
      categoryId: category !== "all" ? category : undefined,
      size,
    });
    if (res.ok) {
      setRun(res.data);
      setAnswers({});
      startedAt.current = Date.now();
    } else {
      setError(res.error);
    }
    setBusy(false);
  };

  const submit = async () => {
    if (!run) return;
    setBusy(true);
    const res = await api.vocabSubmitChallenge(
      run.runId,
      answers,
      Date.now() - startedAt.current,
    );
    if (res.ok) {
      setResult(res.data);
      setRun(null);
      const historyRes = await api.vocabChallengeHistory();
      if (historyRes.ok) setHistory(historyRes.data.runs);
      const score = Math.round(res.data.score * 100);
      if (score >= 80) toast.success(`Brilliant! ${res.data.correct}/${res.data.total} correct.`);
      else if (score >= 50) toast.info(`${res.data.correct}/${res.data.total} — good effort!`);
      else toast.info(`${res.data.correct}/${res.data.total} — every mistake schedules a review.`);
    } else {
      setError(res.error);
    }
    setBusy(false);
  };

  if (!user) {
    return (
      <LoginPrompt
        message="Challenges grade your answers and schedule every word you practise."
        navigate={navigate}
      />
    );
  }

  const answeredCount = run ? Object.keys(answers).length : 0;

  return (
    <div className="flex flex-col gap-5">
      <SectionHeading
        icon={<Trophy className="size-5 text-primary" aria-hidden />}
        title="Vocabulary challenges"
        description="Six game types, generated fresh from the word database every time. Correct answers grow your intervals; mistakes come back sooner."
      />

      {!run && !result ? (
        <>
          {/* Setup */}
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {(Object.keys(CHALLENGE_KIND_INFO) as ChallengeKind[]).map((k) => {
              const info = CHALLENGE_KIND_INFO[k];
              return (
                <button
                  key={k}
                  type="button"
                  onClick={() => setKind(k)}
                  className={cn(
                    "rounded-2xl border p-4 text-left transition-all",
                    kind === k ? "border-primary bg-primary/10" : "bg-card hover:border-primary/40",
                  )}
                >
                  <p className="font-semibold">{info.name}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {info.description}
                  </p>
                </button>
              );
            })}
          </div>

          <div className="flex flex-wrap items-center gap-3 rounded-2xl border bg-card p-4">
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger className="h-9 w-[200px]" aria-label="Choose a category">
                <SelectValue />
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
            <Select value={String(size)} onValueChange={(v) => setSize(Number(v))}>
              <SelectTrigger className="h-9 w-[140px]" aria-label="Number of questions">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="5">5 questions</SelectItem>
                <SelectItem value="10">10 questions</SelectItem>
                <SelectItem value="15">15 questions</SelectItem>
              </SelectContent>
            </Select>
            <Button className="ml-auto gap-1.5" onClick={start} disabled={busy}>
              <Shuffle className="size-4" aria-hidden /> {busy ? "Building…" : "Start challenge"}
            </Button>
          </div>
          <ErrorText>{error}</ErrorText>

          {/* History */}
          {history.length > 0 ? (
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Recent runs
              </h3>
              <div className="mt-2 flex flex-col gap-2">
                {history.slice(0, 6).map((h) => (
                  <div
                    key={h.id}
                    className="flex flex-wrap items-center justify-between gap-2 rounded-xl border px-4 py-2.5 text-sm"
                  >
                    <span className="font-semibold capitalize">
                      {CHALLENGE_KIND_INFO[h.kind as ChallengeKind]?.name ?? h.kind}
                    </span>
                    <span className="text-muted-foreground">
                      {h.correct}/{h.total} · {Math.round(h.score * 100)}%
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {h.completedAt ? new Date(h.completedAt).toLocaleDateString() : ""}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ) : null}
        </>
      ) : null}

      {/* Active run */}
      {run ? (
        <div className="flex flex-col gap-4">
          <div>
            <div className="mb-1 flex items-center justify-between text-xs text-muted-foreground">
              <span>
                {CHALLENGE_KIND_INFO[run.kind as ChallengeKind]?.name ?? run.kind}
                {run.categoryId
                  ? ` · ${categories.find((c) => c.id === run.categoryId)?.name ?? run.categoryId}`
                  : ""}
              </span>
              <span>
                {answeredCount}/{run.items.length} answered
              </span>
            </div>
            <Progress value={(answeredCount / run.items.length) * 100} aria-label="Challenge progress" />
          </div>

          <div className="flex flex-col gap-4">
            {run.items.map((item, index) => (
              <ChallengeItemCard
                key={item.id}
                item={item}
                index={index}
                answer={answers[item.id]}
                onAnswer={(answer) =>
                  setAnswers((prev) => ({ ...prev, [item.id]: answer }))
                }
              />
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Button size="lg" onClick={submit} disabled={busy || answeredCount === 0}>
              {busy ? "Grading…" : "Submit answers"}
            </Button>
            <Button variant="ghost" onClick={() => setRun(null)} disabled={busy}>
              Cancel
            </Button>
          </div>
          <ErrorText>{error}</ErrorText>
        </div>
      ) : null}

      {/* Results */}
      {result ? (
        <div className="flex flex-col gap-4">
          <Card className="border-primary/40">
            <CardContent className="flex flex-col items-center gap-2 p-8 text-center">
              <span className="inline-flex size-14 items-center justify-center rounded-full bg-primary/15">
                <Target className="size-7 text-primary" aria-hidden />
              </span>
              <p className="text-3xl font-bold">{Math.round(result.score * 100)}%</p>
              <p className="text-sm text-muted-foreground">
                {result.correct} of {result.total} correct — every word was scheduled: correct
                answers grow the interval, mistakes come back soon.
              </p>
              <div className="mt-3 flex flex-wrap justify-center gap-2">
                <Button onClick={start}>Play again</Button>
                <Button variant="outline" onClick={() => setResult(null)}>
                  Choose another challenge
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="flex flex-col gap-2">
            {result.results.map((r, i) => (
              <ResultCard key={r.itemId} index={i} result={r} />
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}

// ---------------------------------------------------------------------------
// One challenge question (client-side interaction, server-side grading)
// ---------------------------------------------------------------------------

function ChallengeItemCard({
  item,
  index,
  answer,
  onAnswer,
}: {
  item: ChallengeItem;
  index: number;
  answer?: AnswerValue;
  onAnswer: (answer: AnswerValue) => void;
}) {
  const speechRate = useStore((s) => s.speechRate);
  const { playing, play } = useSpeech();

  return (
    <Card>
      <CardContent className="flex flex-col gap-3 p-5">
        <p className="text-xs font-semibold text-muted-foreground">
          Question {index + 1} · <span className="capitalize">{item.type.replace("-", " ")}</span>
        </p>
        <p className="font-medium">{item.prompt}</p>

        {/* Option questions */}
        {item.type === "meaning" || item.type === "contextual-usage" ? (
          <>
            {item.type === "contextual-usage" ? (
              <p className="rounded-xl border bg-secondary/30 p-3 text-sm">{item.sentence}</p>
            ) : null}
            <div className="grid gap-2 sm:grid-cols-2">
              {item.options.map((option) => {
                const selected =
                  answer && "optionId" in answer ? answer.optionId === option.id : false;
                return (
                  <button
                    key={option.id}
                    type="button"
                    onClick={() => onAnswer({ type: item.type, optionId: option.id })}
                    aria-pressed={selected}
                    className={cn(
                      "min-h-[44px] rounded-xl border p-3 text-left text-sm transition-all",
                      selected
                        ? "border-primary bg-primary/10 font-semibold"
                        : "bg-card hover:border-primary/40",
                    )}
                  >
                    {option.text}
                  </button>
                );
              })}
            </div>
          </>
        ) : null}

        {/* Spelling */}
        {item.type === "spelling" ? (
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <Button
                type="button"
                variant="outline"
                size="sm"
                className="gap-1.5"
                onClick={() => !playing && play(item.audioText, speechRate * 0.9)}
                aria-label="Play the audio"
              >
                <Volume2 className="size-4" aria-hidden /> Play audio
              </Button>
              <span className="text-xs text-muted-foreground">
                Hint: {item.hintMeaning} ({item.hintTranslation})
              </span>
            </div>
            <Input
              value={answer && "text" in answer ? answer.text : ""}
              onChange={(e) => onAnswer({ type: "spelling", text: e.target.value })}
              placeholder="Type the word you hear…"
              aria-label="Type the word you hear"
              autoComplete="off"
              spellCheck={false}
            />
          </div>
        ) : null}

        {/* Arrangement */}
        {item.type === "arrangement" ? (
          <ArrangementInput
            item={item}
            answer={answer && "tokens" in answer ? answer.tokens : []}
            onChange={(tokens) => onAnswer({ type: "arrangement", tokens })}
          />
        ) : null}

        {/* Matching */}
        {item.type === "matching" ? (
          <MatchingInput
            item={item}
            answer={answer && "pairs" in answer ? answer.pairs : []}
            onChange={(pairs) => onAnswer({ type: "matching", pairs })}
          />
        ) : null}
      </CardContent>
    </Card>
  );
}

function ArrangementInput({
  item,
  answer,
  onChange,
}: {
  item: Extract<ChallengeItem, { type: "arrangement" }>;
  answer: string[];
  onChange: (tokens: string[]) => void;
}) {
  const remaining = useMemo(() => {
    const used = [...answer];
    return item.tokens.filter((token) => {
      const idx = used.indexOf(token);
      if (idx !== -1) {
        used.splice(idx, 1);
        return false;
      }
      return true;
    });
  }, [item.tokens, answer]);

  return (
    <div className="flex flex-col gap-3">
      <div className="flex min-h-[52px] flex-wrap items-center gap-1.5 rounded-xl border border-dashed p-2.5">
        {answer.length === 0 ? (
          <span className="px-1 text-sm text-muted-foreground">Tap the words in order…</span>
        ) : (
          answer.map((token, i) => (
            <button
              key={`${token}-${i}`}
              type="button"
              className="rounded-lg border bg-primary/10 px-2.5 py-1 text-sm font-medium"
              onClick={() => onChange(answer.filter((_, idx) => idx !== i))}
              aria-label={`Remove ${token}`}
            >
              {token}
            </button>
          ))
        )}
      </div>
      <div className="flex flex-wrap gap-1.5">
        {remaining.map((token, i) => (
          <button
            key={`${token}-pool-${i}`}
            type="button"
            className="rounded-lg border bg-card px-2.5 py-1 text-sm transition-colors hover:border-primary/50"
            onClick={() => onChange([...answer, token])}
          >
            {token}
          </button>
        ))}
      </div>
      {item.hintTranslation ? (
        <p className="text-xs text-muted-foreground">Idea: {item.hintTranslation}</p>
      ) : null}
    </div>
  );
}

function MatchingInput({
  item,
  answer,
  onChange,
}: {
  item: Extract<ChallengeItem, { type: "matching" }>;
  answer: { leftId: string; rightId: string }[];
  onChange: (pairs: { leftId: string; rightId: string }[]) => void;
}) {
  const [selectedLeft, setSelectedLeft] = useState<string | null>(null);
  const pairedRight = new Set(answer.map((p) => p.rightId));

  const assign = (leftId: string, rightId: string) => {
    onChange([
      ...answer.filter((p) => p.leftId !== leftId && p.rightId !== rightId),
      { leftId, rightId },
    ]);
    setSelectedLeft(null);
  };

  return (
    <div className="grid grid-cols-2 gap-3">
      <div className="flex flex-col gap-2">
        {item.left.map((word) => {
          const paired = answer.find((p) => p.leftId === word.id);
          const selected = selectedLeft === word.id;
          return (
            <button
              key={word.id}
              type="button"
              disabled={!!paired}
              aria-pressed={selected}
              onClick={() => setSelectedLeft(selected ? null : word.id)}
              className={cn(
                "min-h-[44px] rounded-xl border px-3 py-2 text-left text-sm transition-all",
                paired
                  ? "border-primary/50 bg-primary/10"
                  : selected
                    ? "border-primary ring-2 ring-primary/30"
                    : "bg-card hover:border-primary/50",
              )}
            >
              <span className="font-semibold">{word.text}</span>
              {paired ? (
                <span className="mt-1 flex items-center gap-1 text-xs text-primary">
                  <Link2 className="size-3" aria-hidden />
                  {item.right.find((r) => r.id === paired.rightId)?.text.slice(0, 28)}…
                </span>
              ) : null}
            </button>
          );
        })}
      </div>
      <div className="flex flex-col gap-2">
        {item.right.map((meaning) => {
          const paired = pairedRight.has(meaning.id);
          return (
            <button
              key={meaning.id}
              type="button"
              disabled={paired || !selectedLeft}
              onClick={() => selectedLeft && assign(selectedLeft, meaning.id)}
              className={cn(
                "min-h-[44px] rounded-xl border px-3 py-2 text-left text-xs transition-all",
                paired
                  ? "border-primary/50 bg-primary/10"
                  : selectedLeft
                    ? "bg-card hover:border-primary"
                    : "bg-card opacity-60",
              )}
            >
              {meaning.text}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function ResultCard({ index, result }: { index: number; result: ItemResult }) {
  return (
    <div
      className={cn(
        "flex flex-col gap-1.5 rounded-xl border p-4",
        result.correct ? "border-primary/40 bg-primary/5" : "border-destructive/40 bg-destructive/5",
      )}
    >
      <div className="flex items-start justify-between gap-2">
        <p className="text-sm font-semibold">
          {result.correct ? (
            <Check className="mr-1 inline size-4 text-primary" aria-hidden />
          ) : (
            <X className="mr-1 inline size-4 text-destructive" aria-hidden />
          )}
          Question {index + 1}
        </p>
        <span className="text-xs capitalize text-muted-foreground">
          {result.type.replace("-", " ")}
        </span>
      </div>
      <p className="text-sm">
        <span className="text-muted-foreground">You: </span>
        {result.submitted.length > 80 ? `${result.submitted.slice(0, 80)}…` : result.submitted}
      </p>
      {!result.correct ? (
        <p className="text-sm">
          <span className="text-muted-foreground">Answer: </span>
          <span className="font-semibold">{result.correctAnswer}</span>
        </p>
      ) : null}
      <p className="text-sm text-muted-foreground">{result.explanation}</p>
    </div>
  );
}
