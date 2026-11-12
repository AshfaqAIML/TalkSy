"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { AlertCircle, CheckCircle2, Loader2, Send, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { api } from "@/lib/client/api";
import { useAppStore } from "@/lib/client/store";
import { GRAMMAR_CATEGORY_LABELS } from "@/data/grammar/types";
import type { GrammarErrorCategory } from "@/data/grammar/types";
import type { AppRoute } from "@/hooks/use-hash-route";

interface ClinicIssue {
  ruleId: string;
  category: string;
  original: string;
  suggestion: string;
  explanation: string;
  lessonSlug?: string;
}

interface ClinicCheck {
  original: string;
  corrected: string;
  clean: boolean;
  issues: ClinicIssue[];
  categories: string[];
}

interface ClinicHistory {
  submissions: {
    id: string;
    sentence: string;
    corrected: string;
    issues: ClinicIssue[];
    categories: string[];
    createdAt: string;
  }[];
  recurring: { category: string; count: number }[];
  recommendedLessons: {
    slug: string;
    title: string;
    description: string;
    estimatedMinutes: number;
  }[];
}

/**
 * The Grammar Error Clinic: submit a sentence, receive corrections with
 * explanations, and build up a profile of your recurring error categories
 * with recommended lessons.
 */
export function ErrorClinicView({
  navigate,
}: {
  navigate: (route: AppRoute) => void;
}) {
  const user = useAppStore((s) => s.user);
  const [sentence, setSentence] = useState("");
  const [checking, setChecking] = useState(false);
  const [result, setResult] = useState<ClinicCheck | null>(null);
  const [history, setHistory] = useState<ClinicHistory | null>(null);

  const loadHistory = useCallback(async () => {
    if (!user) return;
    const response = await api.clinicHistory();
    if (response.ok) setHistory(response.data);
  }, [user]);

  useEffect(() => {
    // setState calls inside loadHistory happen after `await`, so this does
    // not trigger the cascading-render pattern the rule guards against.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    void loadHistory();
  }, [loadHistory]);

  const check = async () => {
    if (!sentence.trim()) {
      toast.error("Write a sentence first!");
      return;
    }
    setChecking(true);
    const response = await api.clinicCheck({ sentence });
    setChecking(false);
    if (!response.ok) {
      toast.error(response.error);
      return;
    }
    setResult(response.data as unknown as ClinicCheck);
    void loadHistory();
  };

  const examples = [
    "i are very happy today",
    "She play the piano every day",
    "I have a apple for breakfast",
    "You are ready?",
    "He have 25 years",
  ];

  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
      <div className="flex items-center gap-3">
        <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-primary/10">
          <StethoscopeIcon className="size-6 text-primary" aria-hidden />
        </span>
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Grammar Error Clinic</h1>
          <p className="text-sm text-muted-foreground">
            Write an English sentence. Get instant corrections, explanations
            and practice recommendations.
          </p>
        </div>
      </div>

      {!user ? (
        <Card className="mt-8">
          <CardContent className="flex flex-col items-center gap-3 p-8 text-center">
            <p className="font-medium">Log in to use the Error Clinic</p>
            <p className="max-w-md text-sm text-muted-foreground">
              Your submissions and recurring error patterns are saved to your
              account and power the lesson recommendations.
            </p>
            <div className="flex gap-2">
              <Button onClick={() => navigate({ name: "login" })}>Log in</Button>
              <Button variant="outline" onClick={() => navigate({ name: "register" })}>
                Create a free account
              </Button>
            </div>
          </CardContent>
        </Card>
      ) : (
        <>
          {/* Submission form */}
          <Card className="mt-8">
            <CardContent className="flex flex-col gap-3 p-5 sm:p-6">
              <Textarea
                value={sentence}
                onChange={(e) => setSentence(e.target.value)}
                placeholder="Write your English sentence here… (e.g. 'She don't like the weather')"
                rows={3}
                maxLength={500}
                aria-label="Your sentence"
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    void check();
                  }
                }}
              />
              <div className="flex flex-wrap items-center gap-2">
                <Button onClick={check} disabled={checking} className="gap-2">
                  {checking ? (
                    <Loader2 className="size-4 animate-spin" aria-hidden />
                  ) : (
                    <Send className="size-4" aria-hidden />
                  )}
                  Check my sentence
                </Button>
                <span className="text-xs text-muted-foreground">
                  Try a classic mistake:{" "}
                  {examples.slice(0, 3).map((example, i) => (
                    <button
                      key={i}
                      type="button"
                      className="mx-0.5 rounded bg-secondary px-1.5 py-0.5 font-mono text-[11px] hover:bg-primary/10"
                      onClick={() => setSentence(example)}
                    >
                      {example}
                    </button>
                  ))}
                </span>
              </div>
            </CardContent>
          </Card>

          {/* Check result */}
          {result ? (
            <Card
              className={cn(
                "mt-5 border-2",
                result.clean ? "border-primary/40" : "border-amber-400/60",
              )}
            >
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-base">
                  {result.clean ? (
                    <>
                      <CheckCircle2 className="size-5 text-primary" aria-hidden />
                      Perfect — no problems found!
                    </>
                  ) : (
                    <>
                      <AlertCircle className="size-5 text-amber-600" aria-hidden />
                      Found {result.issues.length} issue
                      {result.issues.length === 1 ? "" : "s"}
                    </>
                  )}
                </CardTitle>
              </CardHeader>
              {!result.clean ? (
                <CardContent className="flex flex-col gap-4">
                  <div className="flex flex-col gap-1 rounded-xl bg-background p-3.5 text-base">
                    <p className="text-muted-foreground line-through decoration-destructive/50">
                      {result.original}
                    </p>
                    <p className="font-semibold text-primary">{result.corrected}</p>
                  </div>
                  <ol className="flex flex-col gap-2.5">
                    {result.issues.map((issue, i) => (
                      <li
                        key={i}
                        className="rounded-xl border border-border/70 bg-background px-3.5 py-3"
                      >
                        <div className="flex flex-wrap items-center gap-2">
                          <Badge variant="secondary" className="text-[11px]">
                            {GRAMMAR_CATEGORY_LABELS[
                              issue.category as GrammarErrorCategory
                            ] ?? issue.category}
                          </Badge>
                          <span className="font-mono text-xs text-muted-foreground">
                            {issue.original} → {issue.suggestion}
                          </span>
                        </div>
                        <p className="mt-1.5 text-sm leading-relaxed">
                          {issue.explanation}
                        </p>
                        {issue.lessonSlug ? (
                          <Link
                            href={`#/lesson/${issue.lessonSlug}`}
                            className="mt-1.5 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                          >
                            📖 Practise this: the recommended lesson
                          </Link>
                        ) : null}
                      </li>
                    ))}
                  </ol>
                </CardContent>
              ) : null}
            </Card>
          ) : null}

          {/* Recurring categories + recommendations */}
          {history && (history.recurring.length > 0 || history.recommendedLessons.length > 0) ? (
            <div className="mt-8 grid gap-5 lg:grid-cols-2">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-base">Your recurring errors</CardTitle>
                  <CardDescription>
                    Based on your last {history.submissions.length} clinic
                    submissions.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col gap-2">
                  {history.recurring.map((row) => (
                    <div key={row.category} className="flex items-center gap-2.5 text-sm">
                      <span className="w-44 shrink-0 truncate text-muted-foreground">
                        {GRAMMAR_CATEGORY_LABELS[
                          row.category as GrammarErrorCategory
                        ] ?? row.category}
                      </span>
                      <div className="h-2 flex-1 overflow-hidden rounded-full bg-secondary">
                        <div
                          className="h-full rounded-full bg-primary"
                          style={{
                            width: `${Math.min(
                              100,
                              (row.count /
                                Math.max(1, history.recurring[0].count)) *
                                100,
                            )}%`,
                          }}
                        />
                      </div>
                      <span className="w-6 text-right text-xs text-muted-foreground">
                        {row.count}
                      </span>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-base">
                    <Sparkles className="size-4 text-primary" aria-hidden />
                    Recommended for you
                  </CardTitle>
                  <CardDescription>
                    Lessons that target your most frequent error categories.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col gap-2">
                  {history.recommendedLessons.map((lesson) => (
                    <Link
                      key={lesson.slug}
                      href={`#/lesson/${lesson.slug}`}
                      className="rounded-xl border p-3 transition-colors hover:border-primary/50 hover:bg-primary/5"
                    >
                      <p className="text-sm font-semibold">{lesson.title}</p>
                      <p className="mt-0.5 text-xs text-muted-foreground">
                        {lesson.description}
                      </p>
                    </Link>
                  ))}
                </CardContent>
              </Card>
            </div>
          ) : null}

          {/* Submission history */}
          {history && history.submissions.length > 0 ? (
            <Card className="mt-5">
              <CardHeader className="pb-3">
                <CardTitle className="text-base">Recent submissions</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-2">
                {history.submissions.slice(0, 8).map((submission) => (
                  <div
                    key={submission.id}
                    className="flex flex-col gap-0.5 rounded-lg border border-border/60 px-3 py-2 text-sm"
                  >
                    <p className="text-muted-foreground line-through decoration-destructive/40">
                      {submission.sentence}
                    </p>
                    <p className="font-medium text-primary">{submission.corrected}</p>
                    {submission.categories.length > 0 ? (
                      <div className="mt-1 flex flex-wrap gap-1">
                        {submission.categories.map((category) => (
                          <Badge key={category} variant="outline" className="text-[10px]">
                            {GRAMMAR_CATEGORY_LABELS[
                              category as GrammarErrorCategory
                            ] ?? category}
                          </Badge>
                        ))}
                      </div>
                    ) : null}
                  </div>
                ))}
              </CardContent>
            </Card>
          ) : null}
        </>
      )}
    </div>
  );
}

function StethoscopeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M11 2v2" />
      <path d="M5 2v2" />
      <path d="M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1" />
      <path d="M8 15a6 6 0 0 0 12 0v-3" />
      <circle cx="20" cy="10" r="2" />
    </svg>
  );
}
