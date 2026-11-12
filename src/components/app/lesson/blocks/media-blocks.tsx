"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Pause, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useAppStore } from "@/lib/client/store";
import { speak, useSpeech } from "@/hooks/use-speech";
import { SpeakButton, Translation } from "./content-blocks";
import type {
  AudioBlock,
  DiagramBlock,
  DialogueBlock,
  VideoBlock,
} from "@/data/curriculum/types";

// ---------------------------------------------------------------------------
// Diagram block — three data-driven variants (steps / pyramid / compare)
// ---------------------------------------------------------------------------

export function DiagramBlockView({ block }: { block: DiagramBlock }) {
  return (
    <Card className="bg-card">
      {block.title ? (
        <p className="px-4 pt-4 text-sm font-semibold text-foreground sm:px-5">
          {block.title}
        </p>
      ) : null}
      <CardContent className="p-4 sm:p-5">
        {block.variant === "steps" && block.steps ? (
          <ol className="flex flex-col gap-2 md:flex-row md:items-stretch md:gap-0">
            {block.steps.map((step, i) => (
              <li key={i} className="flex flex-1 items-center gap-2 md:flex-col md:gap-1.5">
                <div className="flex w-full flex-col items-center rounded-xl border border-primary/25 bg-primary/5 px-3 py-3 text-center md:w-auto md:min-w-28 md:flex-1">
                  <span className="text-sm font-semibold text-primary">{step.label}</span>
                  {step.description ? (
                    <span className="mt-0.5 text-xs text-muted-foreground">
                      {step.description}
                    </span>
                  ) : null}
                </div>
                {i < block.steps!.length - 1 ? (
                  <ArrowRight
                    className="size-4 shrink-0 rotate-90 text-primary/50 md:rotate-0"
                    aria-hidden
                  />
                ) : null}
              </li>
            ))}
          </ol>
        ) : null}

        {block.variant === "pyramid" && block.levels ? (
          <div className="flex flex-col items-center gap-1.5">
            {[...block.levels].reverse().map((level, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center rounded-lg px-3 py-2 text-center text-primary-foreground"
                style={{
                  width: `${40 + (i / Math.max(1, block.levels!.length - 1)) * 60}%`,
                  backgroundColor: `oklch(${0.62 - i * 0.06} 0.09 165)`,
                  minWidth: "min(90%, 180px)",
                }}
              >
                <span className="text-sm font-semibold">{level.label}</span>
                {level.description ? (
                  <span className="text-xs opacity-90">{level.description}</span>
                ) : null}
              </div>
            ))}
          </div>
        ) : null}

        {block.variant === "compare" && block.columns ? (
          <div className="grid gap-3 sm:grid-cols-2">
            {block.columns.map((column, i) => (
              <div
                key={i}
                className={`rounded-xl border p-3.5 ${
                  i === 0
                    ? "border-primary/30 bg-primary/5"
                    : "border-accent bg-accent/30"
                }`}
              >
                <p className="text-sm font-semibold text-foreground">{column.title}</p>
                <ul className="mt-1.5 flex flex-col gap-1">
                  {column.items.map((item, j) => (
                    <li key={j} className="text-sm text-foreground/85">
                      • {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ) : null}

        {block.caption ? (
          <p className="mt-3 text-center text-xs text-muted-foreground">{block.caption}</p>
        ) : null}
      </CardContent>
    </Card>
  );
}

// ---------------------------------------------------------------------------
// Audio block — play/stop with slow & normal speed
// ---------------------------------------------------------------------------

export function AudioBlockView({ block }: { block: AudioBlock }) {
  const { playing, play, stop } = useSpeech();
  const speechRate = useAppStore((s) => s.speechRate);

  return (
    <Card className="bg-secondary/40">
      <CardContent className="flex flex-col gap-2 p-4 sm:p-5">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-sm font-medium">🎧 {block.label ?? "Listen"}</span>
          <span className="text-xs text-muted-foreground">
            {playing ? "Playing…" : ""}
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <Button
            size="sm"
            type="button"
            onClick={() => (playing ? stop() : play(block.text, block.rate ?? speechRate))}
            className="gap-1.5"
          >
            {playing ? <Pause className="size-4" /> : <Play className="size-4" />}
            {playing ? "Stop" : "Play"}
          </Button>
          <Button
            size="sm"
            variant="secondary"
            type="button"
            onClick={() => play(block.text, 0.6)}
          >
            🐢 Slow
          </Button>
          <Button
            size="sm"
            variant="secondary"
            type="button"
            onClick={() => play(block.text, 1)}
          >
            Normal
          </Button>
        </div>
        <p className="text-sm text-muted-foreground">“{block.text}”</p>
        {block.translation ? <Translation text={block.translation} /> : null}
      </CardContent>
    </Card>
  );
}

// ---------------------------------------------------------------------------
// Video block — scene player with narration, styled as a video
// ---------------------------------------------------------------------------

const SCENE_MS = 4200;

export function VideoBlockView({ block }: { block: VideoBlock }) {
  const [sceneIndex, setSceneIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const speechRate = useAppStore((s) => s.speechRate);

  useEffect(() => {
    if (!playing) return;
    const timer = window.setInterval(() => {
      setSceneIndex((prev) => {
        if (prev + 1 >= block.scenes.length) {
          setPlaying(false);
          return prev;
        }
        return prev + 1;
      });
    }, SCENE_MS);
    return () => window.clearInterval(timer);
  }, [playing, block.scenes.length]);

  const scene = block.scenes[sceneIndex];
  if (!scene) return null;

  return (
    <Card className="overflow-hidden p-0">
      <div className="relative flex aspect-video min-h-48 w-full flex-col items-center justify-center bg-gradient-to-br from-primary/90 via-primary to-emerald-800 text-center">
        {scene.emoji ? (
          <span className="text-4xl sm:text-5xl" aria-hidden>
            {scene.emoji}
          </span>
        ) : null}
        <p className="mt-3 max-w-md px-6 text-lg font-semibold text-primary-foreground sm:text-xl">
          {scene.heading}
        </p>
        <p className="mt-1 max-w-md px-6 text-sm text-primary-foreground/85">
          {scene.text}
        </p>
        <span className="absolute right-3 top-3 rounded bg-black/30 px-2 py-0.5 text-[11px] font-medium text-white">
          TalkSy mini-lesson
        </span>
      </div>
      <div className="flex flex-col gap-2 p-3 sm:p-4">
        <div className="flex items-center gap-2">
          <Button
            size="sm"
            type="button"
            className="gap-1.5"
            aria-label={playing ? "Pause video" : "Play video"}
            onClick={() => {
              if (playing) {
                setPlaying(false);
              } else {
                if (sceneIndex === block.scenes.length - 1) setSceneIndex(0);
                setPlaying(true);
              }
            }}
          >
            {playing ? <Pause className="size-4" /> : <Play className="size-4" />}
            {playing ? "Pause" : "Play"}
          </Button>
          <div className="flex flex-1 items-center gap-1" role="progressbar" aria-valuenow={sceneIndex + 1} aria-valuemin={1} aria-valuemax={block.scenes.length}>
            {block.scenes.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to scene ${i + 1}`}
                onClick={() => setSceneIndex(i)}
                className={`h-1.5 flex-1 rounded-full transition-colors ${
                  i <= sceneIndex ? "bg-primary" : "bg-border"
                }`}
              />
            ))}
          </div>
          <SpeakButton
            text={`${scene.heading}. ${scene.text}`}
            rate={speechRate}
            label="Narrate"
          />
        </div>
        <p className="text-xs text-muted-foreground">
          {block.title} · Scene {sceneIndex + 1} of {block.scenes.length}
          {block.description ? ` — ${block.description}` : ""}
        </p>
      </div>
    </Card>
  );
}

// ---------------------------------------------------------------------------
// Dialogue block — chat-style lines with per-line audio
// ---------------------------------------------------------------------------

export function DialogueBlockView({ block }: { block: DialogueBlock }) {
  const fullText = block.lines.map((l) => l.text).join(" ");
  return (
    <Card className="bg-card">
      <CardContent className="flex flex-col gap-3 p-4 sm:p-5">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <p className="text-sm font-semibold">💬 {block.title ?? "Dialogue"}</p>
          <SpeakButton text={fullText} label="Play all" />
        </div>
        {block.context ? (
          <p className="text-xs italic text-muted-foreground">{block.context}</p>
        ) : null}
        <div className="flex flex-col gap-2">
          {block.lines.map((line, i) => {
            const isA = i % 2 === 0;
            return (
              <div
                key={i}
                className={`flex max-w-[92%] flex-col gap-0.5 rounded-2xl px-4 py-2.5 ${
                  isA
                    ? "self-start rounded-tl-sm bg-secondary"
                    : "self-end rounded-tr-sm bg-primary/10"
                }`}
              >
                <span className="text-xs font-semibold text-primary">{line.speaker}</span>
                <div className="flex items-start gap-1.5">
                  <p className="text-sm leading-relaxed">{line.text}</p>
                  <button
                    type="button"
                    aria-label={`Listen to ${line.speaker}`}
                    className="mt-0.5 text-muted-foreground transition-colors hover:text-primary"
                    onClick={() => speak(line.text, {})}
                  >
                    🔊
                  </button>
                </div>
                {line.translation ? (
                  <p className="text-xs italic text-muted-foreground">{line.translation}</p>
                ) : null}
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
