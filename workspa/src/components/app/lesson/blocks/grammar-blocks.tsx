"use client";

import { Card, CardContent } from "@/components/ui/card";
import type {
  ChallengeBlock,
  PosModuleBlock,
  SafeExercise,
  SentenceAnatomyBlock,
  TenseComparisonBlock,
} from "@/data/curriculum/types";
import { getPosModule } from "@/data/grammar/parts-of-speech";
import { getTense } from "@/data/grammar/tenses";
import { PosModuleView } from "@/components/app/grammar/PosModuleView";
import { TenseComparison } from "@/components/app/grammar/TenseComparison";
import { SentenceAnatomy } from "@/components/app/grammar/SentenceAnatomy";
import { ChallengeRunner } from "../ChallengeRunner";

/**
 * Grammar School & Sentence Lab block views — rendered through the same
 * reusable BlockRenderer as every other lesson block.
 */

export function PosModuleBlockView({ block }: { block: PosModuleBlock }) {
  const modules = block.moduleIds
    .map((id) => getPosModule(id))
    .filter((m) => m !== undefined);
  return (
    <div className="flex flex-col gap-6">
      {modules.map((module) => (
        <PosModuleView key={module.id} module={module} />
      ))}
    </div>
  );
}

export function TenseComparisonBlockView({ block }: { block: TenseComparisonBlock }) {
  const [leftId, rightId] = block.tenseIds;
  const left = getTense(leftId);
  const right = getTense(rightId);
  if (!left || !right) return null;
  return (
    <TenseComparison
      left={left}
      right={right}
      title={block.title}
      note={block.note}
    />
  );
}

export function SentenceAnatomyBlockView({ block }: { block: SentenceAnatomyBlock }) {
  return (
    <SentenceAnatomy
      sentence={block.sentence}
      title={block.title}
      showLegend={block.showLabels !== false}
    />
  );
}

export function ChallengeBlockView({
  block,
  lessonSlug,
  exercisesById,
}: {
  block: ChallengeBlock;
  lessonSlug: string;
  exercisesById: Record<string, SafeExercise>;
}) {
  return (
    <ChallengeRunner
      block={block}
      lessonSlug={lessonSlug}
      exercisesById={exercisesById}
    />
  );
}

/** Unused helper to keep the Card import meaningful for future blocks. */
export function _BlockShell({ children }: { children: React.ReactNode }) {
  return (
    <Card>
      <CardContent className="p-5">{children}</CardContent>
    </Card>
  );
}
