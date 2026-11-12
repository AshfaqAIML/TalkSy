"use client";

import { Volume2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { useAppStore } from "@/lib/client/store";
import { speak } from "@/hooks/use-speech";
import type {
  DefinitionBlock,
  ExampleBlock,
  GrammarRuleBlock,
  HeadingBlock,
  ImageBlock,
  NoteBlock,
  TableBlock,
  TextBlock,
  VocabularyListBlock,
  WarningBlock,
} from "@/data/curriculum/types";

/** Translation line shown only when the global toggle is on. */
export function Translation({ text }: { text: string }) {
  const show = useAppStore((s) => s.showTranslations);
  if (!show) return null;
  return (
    <p className="mt-1.5 text-sm italic text-muted-foreground border-l-2 border-accent pl-3">
      {text}
    </p>
  );
}

export function SpeakButton({
  text,
  rate,
  label,
  className,
}: {
  text: string;
  rate?: number;
  label?: string;
  className?: string;
}) {
  const speechRate = useAppStore((s) => s.speechRate);
  return (
    <Button
      variant="ghost"
      size="sm"
      aria-label={label ?? "Listen"}
      className={`h-8 gap-1.5 px-2 text-muted-foreground hover:text-primary ${className ?? ""}`}
      onClick={() => speak(text, { rate: rate ?? speechRate })}
      type="button"
    >
      <Volume2 className="size-4" aria-hidden />
      <span className="sr-only">Listen:</span>
      {label}
    </Button>
  );
}

export function TextBlockView({ block }: { block: TextBlock }) {
  return (
    <div>
      <p className="text-base leading-relaxed text-foreground/90">{block.text}</p>
      {block.translation ? <Translation text={block.translation} /> : null}
    </div>
  );
}

export function HeadingBlockView({ block }: { block: HeadingBlock }) {
  return (
    <div>
      <h3 className="text-xl font-semibold tracking-tight text-foreground">
        {block.text}
      </h3>
      {block.translation ? <Translation text={block.translation} /> : null}
    </div>
  );
}

export function DefinitionBlockView({ block }: { block: DefinitionBlock }) {
  return (
    <Card className="border-l-4 border-l-primary/70 bg-secondary/40">
      <CardContent className="flex flex-col gap-1.5 p-4 sm:p-5">
        <div className="flex flex-wrap items-baseline gap-2">
          <span className="text-lg font-semibold text-primary">{block.term}</span>
          {block.partOfSpeech ? (
            <span className="text-sm italic text-muted-foreground">
              ({block.partOfSpeech})
            </span>
          ) : null}
          <SpeakButton text={block.term} label="" className="ml-auto" />
        </div>
        <p className="text-sm leading-relaxed">{block.definition}</p>
        {block.translation ? <Translation text={block.translation} /> : null}
        {block.example ? (
          <p className="mt-1 rounded-md bg-background px-3 py-2 text-sm">
            “{block.example.english}”{" "}
            <span className="text-muted-foreground">— {block.example.translation}</span>
          </p>
        ) : null}
      </CardContent>
    </Card>
  );
}

export function ExampleBlockView({ block }: { block: ExampleBlock }) {
  return (
    <Card className="bg-card">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-2 text-base">
          Examples
          {block.title ? <span className="text-muted-foreground font-normal">· {block.title}</span> : null}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-2.5">
        {block.items.map((item, i) => (
          <div key={i} className="flex items-start gap-2.5">
            <span className="mt-1 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
              {i + 1}
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-medium leading-relaxed">{item.english}</p>
              <p className="text-sm text-muted-foreground">{item.translation}</p>
            </div>
            <SpeakButton text={item.english} label="" />
          </div>
        ))}
        {block.note ? (
          <p className="text-xs text-muted-foreground pt-1">ℹ {block.note}</p>
        ) : null}
      </CardContent>
    </Card>
  );
}

export function TableBlockView({ block }: { block: TableBlock }) {
  return (
    <Card>
      {block.title ? (
        <CardHeader className="pb-2">
          <CardTitle className="text-base">{block.title}</CardTitle>
        </CardHeader>
      ) : null}
      <CardContent className="overflow-x-auto p-0 sm:p-2">
        <Table>
          <TableHeader>
            <TableRow className="bg-secondary/50 hover:bg-secondary/50">
              {block.headers.map((header, i) => (
                <TableHead key={i} className="font-semibold">
                  {header}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {block.rows.map((row, i) => (
              <TableRow key={i}>
                {row.map((cell, j) => (
                  <TableCell key={j} className={j === 0 ? "font-medium" : ""}>
                    {cell}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
      {block.caption ? (
        <p className="px-4 pb-3 pt-1 text-xs text-muted-foreground sm:px-5">
          {block.caption}
        </p>
      ) : null}
    </Card>
  );
}

export function GrammarRuleBlockView({ block }: { block: GrammarRuleBlock }) {
  return (
    <Card className="border-primary/30 bg-primary/5">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-2 text-base">
          <span className="inline-flex size-6 items-center justify-center rounded-md bg-primary text-primary-foreground text-xs font-bold">
            ✓
          </span>
          {block.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        <p className="rounded-lg bg-background px-4 py-3 text-sm font-semibold leading-relaxed text-primary shadow-sm">
          {block.rule}
        </p>
        {block.explanation ? (
          <p className="text-sm leading-relaxed text-foreground/85">{block.explanation}</p>
        ) : null}
        <div className="flex flex-col gap-1.5">
          {block.examples.map((ex, i) => (
            <div key={i} className="flex items-center justify-between gap-2 text-sm">
              <span>
                {ex.english} <span className="text-muted-foreground">— {ex.translation}</span>
              </span>
              <SpeakButton text={ex.english} label="" />
            </div>
          ))}
        </div>
        {block.exceptions && block.exceptions.length > 0 ? (
          <div className="rounded-lg bg-accent/40 px-3 py-2">
            <p className="text-xs font-semibold uppercase tracking-wide text-accent-foreground">
              Exceptions
            </p>
            {block.exceptions.map((ex, i) => (
              <p key={i} className="text-sm text-accent-foreground">
                {ex}
              </p>
            ))}
          </div>
        ) : null}
      </CardContent>
    </Card>
  );
}

export function VocabularyListBlockView({ block }: { block: VocabularyListBlock }) {
  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-base">
          📖 {block.title ?? "Vocabulary"}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        {block.words.map((word) => (
          <div
            key={word.word}
            className="flex flex-col gap-0.5 rounded-lg border border-border/70 bg-background px-3.5 py-2.5"
          >
            <div className="flex flex-wrap items-baseline gap-2">
              <span className="font-semibold text-primary">{word.word}</span>
              <Badge variant="secondary" className="text-[11px] font-normal">
                {word.partOfSpeech}
              </Badge>
              <span className="text-sm text-muted-foreground">{word.translation}</span>
              <SpeakButton text={word.word} label="" className="ml-auto" />
            </div>
            <p className="text-sm leading-snug text-foreground/85">{word.definition}</p>
            {word.example ? (
              <p className="text-xs text-muted-foreground">
                “{word.example.english}” — {word.example.translation}
              </p>
            ) : null}
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

export function ImageBlockView({ block }: { block: ImageBlock }) {
  return (
    <figure className="flex flex-col items-center gap-2">
      <img
        src={block.src}
        alt={block.alt}
        className="max-h-80 w-full rounded-xl border border-border object-contain bg-background"
      />
      {block.caption ? (
        <figcaption className="text-center text-xs text-muted-foreground">
          {block.caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

export function NoteBlockView({ block }: { block: NoteBlock }) {
  return (
    <div className="rounded-xl border border-secondary bg-secondary/50 px-4 py-3.5">
      <p className="text-sm font-semibold text-secondary-foreground">
        💡 {block.title ?? "Note"}
      </p>
      <p className="mt-0.5 text-sm leading-relaxed text-foreground/85">{block.text}</p>
    </div>
  );
}

export function WarningBlockView({ block }: { block: WarningBlock }) {
  return (
    <div
      role="alert"
      className="rounded-xl border border-destructive/40 bg-destructive/5 px-4 py-3.5"
    >
      <p className="text-sm font-semibold text-destructive">
        ⚠️ {block.title ?? "Careful!"}
      </p>
      <p className="mt-0.5 text-sm leading-relaxed text-foreground/85">{block.text}</p>
    </div>
  );
}
