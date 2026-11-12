"use client";

import { BookOpenCheck, ClipboardList } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type {
  HomeworkBlock,
  LessonBlock,
  PracticeBlock,
  SafeExercise,
} from "@/data/curriculum/types";
import {
  DefinitionBlockView,
  ExampleBlockView,
  GrammarRuleBlockView,
  HeadingBlockView,
  ImageBlockView,
  NoteBlockView,
  TableBlockView,
  TextBlockView,
  VocabularyListBlockView,
  WarningBlockView,
} from "./content-blocks";
import {
  AudioBlockView,
  DiagramBlockView,
  DialogueBlockView,
  VideoBlockView,
} from "./media-blocks";
import {
  ChallengeBlockView,
  PosModuleBlockView,
  SentenceAnatomyBlockView,
  TenseComparisonBlockView,
} from "./grammar-blocks";
import { ExerciseRunner } from "../exercises/ExerciseRunner";

/**
 * The reusable lesson renderer: every structured block type is dispatched to
 * one view component with a consistent interface. Adding a lesson means
 * adding data — never a new page.
 */

export function PracticeBlockView({
  block,
  lessonSlug,
  exercisesById,
}: {
  block: PracticeBlock;
  lessonSlug: string;
  exercisesById: Record<string, SafeExercise>;
}) {
  const exercises = block.exerciseIds
    .map((id) => exercisesById[id])
    .filter((ex): ex is SafeExercise => Boolean(ex));
  return (
    <Card className="border-primary/25 bg-primary/[0.03]">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-base">
          <BookOpenCheck className="size-4 text-primary" aria-hidden />
          {block.title ?? "Practice"}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-5">
        {exercises.map((exercise, index) => (
          <ExerciseRunner
            key={exercise.id}
            exercise={exercise}
            lessonSlug={lessonSlug}
            index={index + 1}
            total={exercises.length}
          />
        ))}
      </CardContent>
    </Card>
  );
}

export function HomeworkBlockView({ block }: { block: HomeworkBlock }) {
  return (
    <Card className="border-dashed bg-accent/20">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-2 text-base">
          <ClipboardList className="size-4 text-accent-foreground" aria-hidden />
          {block.title ?? "Homework"}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ol className="flex flex-col gap-2">
          {block.tasks.map((task, i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm leading-relaxed">
              <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-accent text-[11px] font-bold text-accent-foreground">
                {i + 1}
              </span>
              {task}
            </li>
          ))}
        </ol>
      </CardContent>
    </Card>
  );
}

export function BlockRenderer({
  block,
  lessonSlug,
  exercisesById,
}: {
  block: LessonBlock;
  lessonSlug: string;
  exercisesById: Record<string, SafeExercise>;
}) {
  switch (block.type) {
    case "text":
      return <TextBlockView block={block} />;
    case "heading":
      return <HeadingBlockView block={block} />;
    case "definition":
      return <DefinitionBlockView block={block} />;
    case "example":
      return <ExampleBlockView block={block} />;
    case "table":
      return <TableBlockView block={block} />;
    case "grammar-rule":
      return <GrammarRuleBlockView block={block} />;
    case "vocabulary-list":
      return <VocabularyListBlockView block={block} />;
    case "image":
      return <ImageBlockView block={block} />;
    case "diagram":
      return <DiagramBlockView block={block} />;
    case "audio":
      return <AudioBlockView block={block} />;
    case "video":
      return <VideoBlockView block={block} />;
    case "dialogue":
      return <DialogueBlockView block={block} />;
    case "note":
      return <NoteBlockView block={block} />;
    case "warning":
      return <WarningBlockView block={block} />;
    case "practice":
      return (
        <PracticeBlockView
          block={block}
          lessonSlug={lessonSlug}
          exercisesById={exercisesById}
        />
      );
    case "homework":
      return <HomeworkBlockView block={block} />;
    case "pos-module":
      return <PosModuleBlockView block={block} />;
    case "tense-comparison":
      return <TenseComparisonBlockView block={block} />;
    case "sentence-anatomy":
      return <SentenceAnatomyBlockView block={block} />;
    case "challenge":
      return (
        <ChallengeBlockView
          block={block}
          lessonSlug={lessonSlug}
          exercisesById={exercisesById}
        />
      );
    default:
      return null;
  }
}
