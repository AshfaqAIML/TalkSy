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
import { Play, Pause, Volume2, FileText, Send } from "lucide-react";
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
      return (
        <div className="flex flex-col gap-6">
          {block.exerciseIds
            .filter((id) => exercisesById[id])
            .map((id, i) => (
              <ExerciseRunner
                key={id}
                exercise={exercisesById[id]}
                lessonSlug={lessonSlug}
                index={i + 1}
                total={block.exerciseIds.length}
              />
            ))}
          {block.exerciseIds.length === 0 ? (
            <p className="text-sm text-muted-foreground">No exercises attached yet.</p>
          ) : null}
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
          {done ? <Badge className="bg-emerald-600">Submitted</Badge> : null}
        </div>
        <p className="text-sm text-muted-foreground">{block.instructions}</p>
        {mode === "learner" ? (
          done ? (
            <p className="text-sm font-medium text-emerald-700">
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
                    words >= block.minWords ? "text-emerald-700" : "text-muted-foreground"
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
