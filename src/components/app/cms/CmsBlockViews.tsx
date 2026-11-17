"use client";

/**
 * Shared renderer for CMS lesson blocks.
 *
 * Most block kinds reuse the curriculum BlockRenderer (identical content
 * shapes). The CMS adds three kinds that need dedicated views: asset-backed
 * audio, assignments (with learner submission) and exercise sets backed by
 * question-bank questions (interactive via the shared ExerciseRunner).
 */

import { useState } from "react";
import { Play, Pause, Volume2, FileText, Send, Network, ExternalLink, Table2, BookOpenText, Sparkle, Captions } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { useSpeech } from "@/hooks/use-speech";
import { useAppStore } from "@/lib/client/store";
import { cmsLearnerApi } from "@/lib/client/api";
import { BlockRenderer } from "@/components/app/lesson/blocks/BlockRenderer";
import { ExerciseRunner } from "@/components/app/lesson/exercises/ExerciseRunner";
import type { CmsBlock } from "@/data/cms/types";
import type { SafeExercise } from "@/data/curriculum/types";

export interface CmsBlockViewProps {
  block: CmsBlock & { id: string };
  /** "learner" makes exercises and assignments interactive. */
  mode: "preview" | "learner";
  lessonSlug?: string;
  exercisesById?: Record<string, SafeExercise>;
  /** Assignment blocks the learner already submitted (learner mode). */
  submittedBlockIds?: string[];
  onSubmitted?: () => void;
}

export function CmsBlockView({
  block,
  mode,
  lessonSlug = "",
  exercisesById = {},
  submittedBlockIds = [],
  onSubmitted,
}: CmsBlockViewProps) {
  const blockId: string = block.id;
  if (block.type === "audio") {
    return <CmsAudioView block={block} />;
  }
  if (block.type === "grammar-table") {
    return <CmsGrammarTableView block={block} />;
  }
  if (block.type === "passage") {
    return <CmsPassageView block={block} />;
  }
  if (block.type === "model-answer") {
    return <CmsModelAnswerView block={block} />;
  }
  if (block.type === "transcript") {
    return <CmsTranscriptView block={block} />;
  }
  if (block.type === "sentence-diagram") {
    return <CmsSentenceDiagramView block={block} />;
  }
  if (block.type === "video") {
    return <CmsVideoView block={block} />;
  }
  if (block.type === "assignment") {
    return (
      <CmsAssignmentView
        block={block}
        blockId={blockId}
        mode={mode}
        lessonSlug={lessonSlug}
        submitted={submittedBlockIds.includes(blockId)}
        onSubmitted={onSubmitted}
      />
    );
  }
  if (block.type === "practice") {
    if (mode === "learner") {
      const exercises = block.exerciseIds
        .map((id) => exercisesById[id])
        .filter((ex): ex is SafeExercise => Boolean(ex));
      return (
        <div className="flex flex-col gap-4">
          {(block.title || block.variant || block.note) && exercises.length > 0 ? (
            <div className="flex flex-col gap-1">
              <div className="flex flex-wrap items-center gap-2">
                {block.title ? (
                  <span className="text-base font-semibold">{block.title}</span>
                ) : null}
                {block.variant === "guided" ? (
                  <Badge variant="secondary" className="font-normal">
                    Guided — hints available
                  </Badge>
                ) : block.variant === "independent" ? (
                  <Badge variant="secondary" className="font-normal">
                    Independent — no hints
                  </Badge>
                ) : null}
              </div>
              {block.note ? (
                <p className="text-sm text-muted-foreground">{block.note}</p>
              ) : null}
            </div>
          ) : null}
          <div className="flex flex-col gap-6">
            {exercises.map((ex, i) => (
              <ExerciseRunner
                key={ex.id}
                exercise={ex}
                lessonSlug={lessonSlug}
                index={i + 1}
                total={block.exerciseIds.length}
              />
            ))}
            {block.exerciseIds.length === 0 ? (
              <p className="text-sm text-muted-foreground">No exercises attached yet.</p>
            ) : null}
          </div>
        </div>
      );
    }
    return <CmsPracticePreview block={block} exercisesById={exercisesById} />;
  }
  // All other block kinds share the curriculum renderer shapes.
  return (
    <BlockRenderer
      block={block as never}
      lessonSlug={lessonSlug}
      exercisesById={exercisesById}
    />
  );
}

// ---------------------------------------------------------------------------
// Sentence diagram: a sentence split into labelled parts on a line
// ---------------------------------------------------------------------------

function CmsSentenceDiagramView({
  block,
}: {
  block: Extract<CmsBlock, { type: "sentence-diagram" }>;
}) {
  const parts = block.parts.filter((p) => p.label || p.text);
  return (
    <Card className="bg-secondary/40">
      <CardContent className="flex flex-col gap-3 p-4 sm:p-5">
        <div className="flex items-center gap-2">
          <Network className="size-4 text-primary" aria-hidden />
          <span className="text-sm font-medium">Sentence diagram</span>
        </div>
        {parts.length >= 2 ? (
          <div aria-label="Sentence diagram">
            <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
              {parts.map((part, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center gap-1 rounded-lg border bg-card px-3 pb-3 pt-2 text-center"
                >
                  <span className="text-[11px] font-semibold uppercase tracking-wide text-primary">
                    {part.label}
                  </span>
                  <span className="text-sm font-medium leading-snug">
                    {part.text || "—"}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-2 h-0.5 w-full rounded bg-primary/40" aria-hidden />
            <p className="mt-2 text-sm font-medium">{block.sentence}</p>
            {block.translation ? (
              <p className="text-xs text-muted-foreground">{block.translation}</p>
            ) : null}
          </div>
        ) : (
          <p className="text-sm text-muted-foreground">
            This diagram needs at least two labelled parts before it can render.
          </p>
        )}
      </CardContent>
    </Card>
  );
}

// ---------------------------------------------------------------------------
// Video: external link; YouTube/Vimeo embed, anything else a safe link card
// ---------------------------------------------------------------------------

function embedUrlFor(url: string): string | null {
  try {
    const parsed = new URL(url);
    const host = parsed.hostname.replace(/^www\./, "");
    if (host === "youtube.com" || host === "m.youtube.com") {
      const v = parsed.searchParams.get("v");
      return v ? `https://www.youtube-nocookie.com/embed/${v}` : null;
    }
    if (host === "youtu.be") {
      const id = parsed.pathname.replace(/^\//, "");
      return id ? `https://www.youtube-nocookie.com/embed/${id}` : null;
    }
    if (host === "vimeo.com") {
      const id = parsed.pathname.replace(/^\//, "").split("/")[0];
      return id ? `https://player.vimeo.com/video/${id}` : null;
    }
    return null;
  } catch {
    return null;
  }
}

function CmsVideoView({ block }: { block: Extract<CmsBlock, { type: "video" }> }) {
  const embed = embedUrlFor(block.url);
  if (!block.url) {
    return (
      <Card className="bg-secondary/40">
        <CardContent className="p-4 sm:p-5 text-sm text-muted-foreground">
          This video block has no URL yet.
        </CardContent>
      </Card>
    );
  }
  if (embed) {
    return (
      <Card className="overflow-hidden">
        <div className="flex items-center gap-2 border-b bg-secondary/40 px-4 py-2.5">
          <ExternalLink className="size-4 text-primary" aria-hidden />
          <span className="text-sm font-medium">{block.title || "Video"}</span>
        </div>
        <div className="aspect-video w-full">
          <iframe
            src={embed}
            title={block.title || "Embedded video"}
            className="size-full"
            allow="accelerometer; encrypted-media; picture-in-picture"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            loading="lazy"
          />
        </div>
        {block.note ? (
          <p className="px-4 py-2 text-sm text-muted-foreground">{block.note}</p>
        ) : null}
      </Card>
    );
  }
  return (
    <Card>
      <CardContent className="flex flex-col gap-1 p-4 sm:p-5">
        <a
          href={block.url}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
        >
          <ExternalLink className="size-4" aria-hidden />
          {block.title || "Watch this video"}
        </a>
        {block.note ? (
          <p className="text-sm text-muted-foreground">{block.note}</p>
        ) : null}
        <p className="text-xs text-muted-foreground">Opens externally — {block.url}</p>
      </CardContent>
    </Card>
  );
}

// ---------------------------------------------------------------------------
// Grammar table (PROMPT 55): conjugation/pattern table with a teaching note
// ---------------------------------------------------------------------------

function CmsGrammarTableView({
  block,
}: {
  block: Extract<CmsBlock, { type: "grammar-table" }>;
}) {
  const headers = block.headers.filter(Boolean);
  const rows = block.rows.filter((row) => row.some((cell) => cell.trim()));
  if (headers.length < 2 || rows.length === 0) {
    return (
      <Card className="bg-secondary/40">
        <CardContent className="p-4 sm:p-5 text-sm text-muted-foreground">
          This grammar table needs headers and at least one filled row before it can render.
        </CardContent>
      </Card>
    );
  }
  return (
    <Card>
      <CardContent className="flex flex-col gap-3 p-4 sm:p-5">
        <div className="flex items-center gap-2">
          <Table2 className="size-4 text-primary" aria-hidden />
          <span className="text-sm font-semibold">{block.title || "Grammar table"}</span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b text-left">
                {headers.map((header, i) => (
                  <th key={i} className="px-3 py-2 font-semibold">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={i} className="border-b last:border-0">
                  {headers.map((_, j) => (
                    <td key={j} className="px-3 py-2 align-top">
                      {row[j] || "—"}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {block.note ? <p className="text-sm text-muted-foreground">{block.note}</p> : null}
      </CardContent>
    </Card>
  );
}

// ---------------------------------------------------------------------------
// Reading passage (PROMPT 55): exam-style text with source line + word count
// ---------------------------------------------------------------------------

function CmsPassageView({ block }: { block: Extract<CmsBlock, { type: "passage" }> }) {
  const paragraphs = block.paragraphs.filter((p) => p.trim());
  const words = paragraphs.join(" ").split(/\s+/).filter((w) => /[\p{L}\p{N}]/u.test(w)).length;
  if (!block.title || paragraphs.length === 0) {
    return (
      <Card className="bg-secondary/40">
        <CardContent className="p-4 sm:p-5 text-sm text-muted-foreground">
          This reading passage needs a title and at least one paragraph.
        </CardContent>
      </Card>
    );
  }
  return (
    <Card className="border-primary/30">
      <CardContent className="flex flex-col gap-3 p-4 sm:p-5">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <BookOpenText className="size-4 text-primary" aria-hidden />
            <span className="font-semibold">{block.title}</span>
          </div>
          <Badge variant="secondary" className="font-normal">{words} words</Badge>
        </div>
        <div className="flex flex-col gap-3 text-[15px] leading-7">
          {paragraphs.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
        {block.source ? (
          <p className="text-xs text-muted-foreground">Source: {block.source}</p>
        ) : null}
        {block.note ? <p className="text-sm text-muted-foreground">{block.note}</p> : null}
      </CardContent>
    </Card>
  );
}

// ---------------------------------------------------------------------------
// Model answer (PROMPT 55): labelled reference response with annotations
// ---------------------------------------------------------------------------

function CmsModelAnswerView({
  block,
}: {
  block: Extract<CmsBlock, { type: "model-answer" }>;
}) {
  const body = block.body.filter((p) => p.trim());
  if (!block.label || body.length === 0) {
    return (
      <Card className="bg-secondary/40">
        <CardContent className="p-4 sm:p-5 text-sm text-muted-foreground">
          This model answer needs a level label and the response text.
        </CardContent>
      </Card>
    );
  }
  return (
    <Card className="bg-secondary/40">
      <CardContent className="flex flex-col gap-3 p-4 sm:p-5">
        <div className="flex flex-wrap items-center gap-2">
          <Sparkle className="size-4 text-primary" aria-hidden />
          <span className="text-sm font-semibold">{block.label}</span>
          <Badge variant="secondary" className="font-normal">Model answer</Badge>
        </div>
        <div className="flex flex-col gap-3 text-[15px] leading-7">
          {body.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
        {block.annotations && block.annotations.length > 0 ? (
          <div className="flex flex-col gap-1 rounded-lg border bg-card p-3">
            <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Why this response works
            </span>
            <ul className="list-disc space-y-1 pl-5 text-sm">
              {block.annotations.filter(Boolean).map((annotation, i) => (
                <li key={i}>{annotation}</li>
              ))}
            </ul>
          </div>
        ) : null}
        <p className="text-xs text-muted-foreground">
          A reference example for study — never an answer key for live questions.
        </p>
      </CardContent>
    </Card>
  );
}

// ---------------------------------------------------------------------------
// Transcript (PROMPT 55): verbatim recording script for follow-along
// ---------------------------------------------------------------------------

function CmsTranscriptView({
  block,
}: {
  block: Extract<CmsBlock, { type: "transcript" }>;
}) {
  const lines = block.lines.filter((l) => l.text.trim());
  if (lines.length === 0) {
    return (
      <Card className="bg-secondary/40">
        <CardContent className="p-4 sm:p-5 text-sm text-muted-foreground">
          This transcript has no lines yet.
        </CardContent>
      </Card>
    );
  }
  const words = lines.map((l) => l.text).join(" ").split(/\s+/).filter(Boolean).length;
  return (
    <Card className="bg-secondary/40">
      <CardContent className="flex flex-col gap-3 p-4 sm:p-5">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <Captions className="size-4 text-primary" aria-hidden />
            <span className="text-sm font-semibold">{block.title || "Transcript"}</span>
          </div>
          <Badge variant="secondary" className="font-normal">{words} words</Badge>
        </div>
        <div className="flex flex-col gap-2 text-[15px] leading-7">
          {lines.map((line, i) => (
            <p key={i}>
              {line.speaker ? <span className="font-semibold">{line.speaker}: </span> : null}
              {line.text}
            </p>
          ))}
        </div>
        <p className="text-xs text-muted-foreground">
          Read along after listening — transcripts are study material, not answer keys.
        </p>
      </CardContent>
    </Card>
  );
}

// ---------------------------------------------------------------------------
// Audio: uploaded asset or spoken text
// ---------------------------------------------------------------------------

function CmsAudioView({ block }: { block: Extract<CmsBlock, { type: "audio" }> }) {
  const { playing, play, stop } = useSpeech();
  const speechRate = useAppStore((s) => s.speechRate);

  return (
    <Card className="bg-secondary/40">
      <CardContent className="flex flex-col gap-2 p-4 sm:p-5">
        <div className="flex items-center gap-2">
          <Volume2 className="size-4 text-primary" aria-hidden />
          <span className="text-sm font-medium">{block.label ?? "Listen"}</span>
        </div>
        {block.mode === "asset" && block.audioAssetId ? (
          <audio
            controls
            preload="metadata"
            src={`/api/cms/assets/${block.audioAssetId}/file`}
            className="w-full"
          >
            Your browser does not support audio playback.
          </audio>
        ) : (
          <div className="flex flex-wrap items-center gap-2">
            <Button
              size="sm"
              type="button"
              onClick={() =>
                playing ? stop() : play(block.text ?? "", block.rate ?? speechRate)
              }
              className="gap-1.5"
            >
              {playing ? <Pause className="size-4" /> : <Play className="size-4" />}
              {playing ? "Stop" : "Play"}
            </Button>
            <Button size="sm" variant="secondary" type="button" onClick={() => play(block.text ?? "", 0.6)}>
              🐢 Slow
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

// ---------------------------------------------------------------------------
// Assignment: free-writing task with server-side word-count validation
// ---------------------------------------------------------------------------

function CmsAssignmentView({
  block,
  blockId,
  mode,
  lessonSlug,
  submitted,
  onSubmitted,
}: {
  block: Extract<CmsBlock, { type: "assignment" }>;
  blockId: string;
  mode: "preview" | "learner";
  lessonSlug: string;
  submitted: boolean;
  onSubmitted?: () => void;
}) {
  const [text, setText] = useState("");
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(submitted);

  const words = text.split(/\s+/).filter((w) => /[\p{L}\p{N}]/u.test(w)).length;
  const canSubmit = mode === "learner" && !done && words >= block.minWords && !sending;

  const submit = async () => {
    setSending(true);
    const res = await cmsLearnerApi.submitAssignment(lessonSlug, blockId, text);
    setSending(false);
    if (res.ok) {
      setDone(true);
      toast.success("Assignment submitted.");
      onSubmitted?.();
    } else {
      toast.error(res.error);
    }
  };

  return (
    <Card className="border-primary/30">
      <CardContent className="flex flex-col gap-3 p-4 sm:p-5">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <FileText className="size-4 text-primary" aria-hidden />
            <span className="font-semibold">{block.title}</span>
            <Badge variant="secondary">Assignment</Badge>
          </div>
          {done ? <Badge className="bg-success text-success-foreground">Submitted</Badge> : null}
        </div>
        <p className="text-sm text-muted-foreground">{block.instructions}</p>
        {mode === "learner" ? (
          done ? (
            <p className="text-sm font-medium text-success">
              Your writing for this assignment has been saved.
            </p>
          ) : (
            <>
              <Textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Write your answer here…"
                rows={7}
                aria-label={`Assignment: ${block.title}`}
              />
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span
                  className={`text-xs font-medium ${
                    words >= block.minWords ? "text-success" : "text-muted-foreground"
                  }`}
                >
                  {words} / {block.minWords}–{block.maxWords} words
                </span>
                <Button size="sm" type="button" disabled={!canSubmit} onClick={submit} className="gap-1.5">
                  <Send className="size-4" /> {sending ? "Submitting…" : "Submit"}
                </Button>
              </div>
            </>
          )
        ) : (
          <p className="text-xs text-muted-foreground">
            Learners write {block.minWords}–{block.maxWords} words and submit before completing the
            lesson.
          </p>
        )}
      </CardContent>
    </Card>
  );
}

// ---------------------------------------------------------------------------
// Practice preview (admin): prompts + options + marked correct answers
// ---------------------------------------------------------------------------

function CmsPracticePreview({
  block,
  exercisesById,
}: {
  block: Extract<CmsBlock, { type: "practice" }>;
  exercisesById: Record<string, SafeExercise>;
}) {
  const found = block.exerciseIds.map((id) => exercisesById[id]).filter(Boolean);
  return (
    <Card className="bg-secondary/40">
      <CardContent className="flex flex-col gap-3 p-4 sm:p-5">
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold">
            {block.title ?? "Exercise set"} ({found.length})
          </span>
          <Badge variant="secondary">Exercises</Badge>
        </div>
        {found.length === 0 ? (
          <p className="text-sm text-muted-foreground">No questions attached yet.</p>
        ) : (
          <ol className="flex list-decimal flex-col gap-2 pl-5 text-sm">
            {found.map((ex, i) => (
              <li key={ex.id} className="flex flex-col gap-1">
                <span className="font-medium">{ex.prompt}</span>
                <span className="text-xs text-muted-foreground">
                  {ex.type} · {ex.difficulty} · {ex.skill}
                </span>
              </li>
            ))}
          </ol>
        )}
        <p className="text-xs text-muted-foreground">
          Editors see the full questions (with answers) in the question bank; learners get the
          interactive exercises.
        </p>
      </CardContent>
    </Card>
  );
}
