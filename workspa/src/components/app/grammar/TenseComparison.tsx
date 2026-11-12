"use client";

import { Volume2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { TenseData } from "@/data/grammar/types";
import { speak } from "@/hooks/use-speech";

/**
 * The side-by-side tense comparison tool: two tenses across all nine
 * aspects — meaning, structure, verb forms, helping verbs, affirmative,
 * negative, questions, WH-questions and time expressions.
 */
export function TenseComparison({
  left,
  right,
  title,
  note,
}: {
  left: TenseData;
  right: TenseData;
  title?: string;
  note?: string;
}) {
  const rows: { label: string; render: (tense: TenseData) => React.ReactNode }[] = [
    {
      label: "Meaning",
      render: (t) => <span className="font-medium">{t.meaning}</span>,
    },
    {
      label: "Structure",
      render: (t) => (
        <div className="flex flex-col gap-1 font-mono text-xs">
          <span>✓ {t.structure.affirmative}</span>
          <span>✗ {t.structure.negative}</span>
          <span>? {t.structure.question}</span>
        </div>
      ),
    },
    {
      label: "Verb form",
      render: (t) => t.verbForm,
    },
    {
      label: "Helping verbs",
      render: (t) => (
        <div className="flex flex-wrap gap-1">
          {t.helpingVerbs.map((v) => (
            <span
              key={v}
              className="rounded bg-orange-100 px-1.5 py-0.5 font-mono text-xs font-semibold text-orange-800"
            >
              {v}
            </span>
          ))}
        </div>
      ),
    },
    {
      label: "Affirmative",
      render: (t) => (
        <SpeakableList items={t.affirmative} />
      ),
    },
    {
      label: "Negative",
      render: (t) => <SpeakableList items={t.negative} />,
    },
    {
      label: "Yes/No question",
      render: (t) => <SpeakableList items={[t.questions.yesNo]} />,
    },
    {
      label: "WH-questions",
      render: (t) => (
        <SpeakableList items={t.questions.wh.map((q) => `${q.whWord}: ${q.question}`)} />
      ),
    },
    {
      label: "Time expressions",
      render: (t) => (
        <div className="flex flex-wrap gap-1">
          {t.timeExpressions.map((time) => (
            <span
              key={time}
              className="rounded-full bg-secondary px-2 py-0.5 text-xs text-secondary-foreground"
            >
              {time}
            </span>
          ))}
        </div>
      ),
    },
  ];

  return (
    <Card className="border-primary/25">
      {title ? <p className="px-4 pt-4 text-sm font-semibold sm:px-5">⚖️ {title}</p> : null}
      <CardContent className="p-3 sm:p-5">
        {note ? (
          <p className="mb-3 rounded-lg bg-accent/40 px-3 py-2 text-xs text-accent-foreground">
            💡 {note}
          </p>
        ) : null}
        <div className="overflow-x-auto rounded-xl border">
          <Table>
            <TableHeader>
              <TableRow className="bg-secondary/60 hover:bg-secondary/60">
                <TableHead className="w-32 font-semibold">Aspect</TableHead>
                <TableHead className="min-w-56 font-semibold text-primary">
                  {left.name}
                </TableHead>
                <TableHead className="min-w-56 font-semibold text-primary">
                  {right.name}
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.label}>
                  <TableCell className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    {row.label}
                  </TableCell>
                  <TableCell>{row.render(left)}</TableCell>
                  <TableCell>{row.render(right)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <div className="mt-3 grid gap-2 sm:grid-cols-2">
          {left.tip ? (
            <p className="rounded-lg bg-primary/5 px-3 py-2 text-xs leading-relaxed">
              💡 <span className="font-semibold">{left.name}:</span> {left.tip}
            </p>
          ) : null}
          {right.tip ? (
            <p className="rounded-lg bg-primary/5 px-3 py-2 text-xs leading-relaxed">
              💡 <span className="font-semibold">{right.name}:</span> {right.tip}
            </p>
          ) : null}
        </div>
      </CardContent>
    </Card>
  );
}

function SpeakableList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-1">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-1.5 text-sm">
          <span className="min-w-0 flex-1">{item}</span>
          <button
            type="button"
            aria-label={`Listen: ${item}`}
            className="mt-0.5 shrink-0 text-muted-foreground transition-colors hover:text-primary"
            onClick={() => speak(item.replace(/^[^:]+:\s*/, ""), {})}
          >
            <Volume2 className="size-3.5" aria-hidden />
          </button>
        </li>
      ))}
    </ul>
  );
}
