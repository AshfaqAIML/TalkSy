"use client";

/**
 * Listening Lab — the activity view: audio player + gated transcript +
 * exercise stepper. The transcript stays hidden while the activity assesses
 * listening comprehension (policy "locked") and unlocks on completion; the
 * per-exercise feedback reveals exactly the lines that were tested. When
 * speech synthesis is unavailable (e.g. headless browsers) the transcript is
 * shown as an accessibility fallback.
 */

import { useEffect, useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CircleCheck,
  Languages,
  Lock,
  Trophy,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import { api, type ListeningProgressDto, type ListeningActivityBundle } from "@/lib/client/api";
import { useAppStore } from "@/lib/client/store";
import type { AppRoute } from "@/hooks/use-hash-route";
import {
  AudioPlayer,
  useAudioSequencer,
  useSpeakerVoices,
  type PlayerSegment,
} from "./AudioPlayer";
import { ExerciseCard } from "./ExerciseViews";

export function ActivityView({
  slug,
  navigate,
}: {
  slug: string;
  navigate: (route: AppRoute) => void;
}) {
  const user = useAppStore((s) => s.user);
  const userLoaded = useAppStore((s) => s.userLoaded);
  const [bundle, setBundle] = useState<ListeningActivityBundle | null>(null);
  const [progress, setProgress] = useState<ListeningProgressDto | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [notFound, setNotFound] = useState(false);
  const [needsLogin, setNeedsLogin] = useState(false);
  const [currentExercise, setCurrentExercise] = useState(0);
  const [showTranscript, setShowTranscript] = useState(false);
  const [showTranslations, setShowTranslations] = useState(false);
  const [speed, setSpeed] = useState(1);
  const [volume, setVolume] = useState(1);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const response = await api.listeningActivity(slug);
      if (cancelled) return;
      if (response.ok) {
        setBundle(response.data);
        setProgress(response.data.progress);
        if (response.data.activity.transcriptPolicy === "open") {
          setShowTranscript(true);
        }
      } else if (response.status === 401) {
        setNeedsLogin(true);
      } else if (response.status === 404) {
        setNotFound(true);
      } else {
        setError(response.error);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [slug]);

  const activity = bundle?.activity ?? null;
  const segments = useMemo<PlayerSegment[]>(
    () =>
      (activity?.segments ?? []).map((segment) => ({
        id: segment.id,
        speakerId: segment.speakerId,
        text: segment.text,
      })),
    [activity],
  );
  const speakers = activity?.speakers ?? null;
  const voiceBySpeaker = useSpeakerVoices(speakers);
  const player = useAudioSequencer({
    segments,
    baseRate: activity?.audio.rate ?? 0.95,
    gapMs: activity?.audio.gapMs ?? 400,
    speed,
    volume,
    voiceBySpeaker,
  });

  const speakerNames = useMemo(() => {
    const map = new Map<string, string>();
    for (const speaker of speakers ?? []) map.set(speaker.id, speaker.name);
    return map;
  }, [speakers]);

  // ---------------------------------------------------------------------
  // Loading / error states
  // ---------------------------------------------------------------------
  if (needsLogin || (userLoaded && !user)) {
    return (
      <div className="mx-auto max-w-md px-4 py-20 text-center">
        <BookOpen className="mx-auto size-10 text-primary" aria-hidden />
        <h1 className="mt-3 text-xl font-bold">Listening Lab</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Log in to practise your listening and track your progress.
        </p>
        <Button className="mt-4" onClick={() => navigate({ name: "login" })}>
          Go to login
        </Button>
      </div>
    );
  }
  if (notFound) {
    return (
      <div className="mx-auto max-w-md px-4 py-20 text-center">
        <h1 className="text-xl font-bold">Activity not found</h1>
        <Button className="mt-4" variant="outline" onClick={() => navigate({ name: "listening" })}>
          Back to the Listening Lab
        </Button>
      </div>
    );
  }
  if (error) {
    return (
      <div className="mx-auto max-w-md px-4 py-20 text-center">
        <p className="text-sm text-destructive">{error}</p>
        <Button className="mt-4" variant="outline" onClick={() => window.location.reload()}>
          Try again
        </Button>
      </div>
    );
  }
  if (!bundle || !activity || !progress) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-16" aria-busy="true" aria-label="Loading activity">
        <div className="h-8 w-2/3 animate-pulse rounded-lg bg-secondary" />
        <div className="mt-6 h-36 animate-pulse rounded-2xl bg-secondary" />
        <div className="mt-4 h-64 animate-pulse rounded-2xl bg-secondary" />
      </div>
    );
  }

  const exercises = activity.exercises;
  const exercise = exercises[Math.min(currentExercise, exercises.length - 1)];
  const completedCount = progress.exercisesCompleted.length;
  const completed = progress.status === "completed";
  // Transcript visibility: unlocked when the policy is open, the activity is
  // completed, or audio is unavailable (accessibility fallback).
  const transcriptUnlocked =
    activity.transcriptPolicy === "open" || progress.transcriptUnlocked || !player.supported;

  const playExerciseSegments = (segmentIds: string[]) => {
    if (segmentIds.length === 0) {
      player.restart();
      return;
    }
    const indices = segmentIds
      .map((id) => segments.findIndex((s) => s.id === id))
      .filter((index) => index >= 0);
    if (indices.length === 0) {
      player.restart();
      return;
    }
    player.playRange(Math.min(...indices), Math.max(...indices));
  };

  return (
    <div className="mx-auto max-w-3xl px-4 py-6 sm:px-6">
      {/* Header */}
      <Button
        variant="ghost"
        size="sm"
        className="-ml-2 gap-1.5 text-muted-foreground"
        onClick={() => navigate({ name: "listening" })}
      >
        <ArrowLeft className="size-4" aria-hidden /> Listening Lab
      </Button>
      <div className="mt-1 flex flex-wrap items-start justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">{activity.title}</h1>
          <div className="mt-2 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
            <span className="rounded-full bg-secondary px-2 py-0.5 font-medium capitalize">
              {activity.stage}
            </span>
            <span>{activity.estimatedMinutes} min</span>
            <span>{activity.segments.length} audio parts</span>
            <span>{exercises.length} exercises</span>
            {completed ? (
              <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-2 py-0.5 font-semibold text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
                <CircleCheck className="size-3" aria-hidden /> Completed
              </span>
            ) : null}
          </div>
        </div>
        {completed ? (
          <div className="flex items-center gap-2 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-2 dark:border-emerald-900 dark:bg-emerald-950">
            <Trophy className="size-5 text-emerald-600" aria-hidden />
            <div className="text-xs">
              <p className="font-bold text-emerald-700 dark:text-emerald-300">
                {progress.scorePercent}% first-try
              </p>
              <p className="text-emerald-800 dark:text-emerald-200">all exercises solved</p>
            </div>
          </div>
        ) : null}
      </div>

      {/* Player */}
      <div className="mt-4">
        <AudioPlayer
          segments={segments}
          player={player}
          speed={speed}
          setSpeed={setSpeed}
          volume={volume}
          setVolume={setVolume}
        />
      </div>

      {/* Transcript */}
      <section className="mt-6 rounded-2xl border bg-card p-4 sm:p-5" aria-label="Transcript">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h2 className="text-sm font-semibold">Transcript</h2>
          {transcriptUnlocked ? (
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="sm"
                className={cn(
                  "h-8 gap-1.5 text-xs",
                  showTranslations && "text-primary",
                )}
                aria-pressed={showTranslations}
                onClick={() => setShowTranslations(!showTranslations)}
              >
                <Languages className="size-3.5" aria-hidden /> Translation
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="h-8 text-xs"
                aria-expanded={showTranscript}
                onClick={() => setShowTranscript(!showTranscript)}
              >
                {showTranscript ? "Hide" : "Show"}
              </Button>
            </div>
          ) : (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-2.5 py-1 text-[11px] font-medium text-muted-foreground">
              <Lock className="size-3" aria-hidden /> Locked until you finish the exercises
            </span>
          )}
        </div>

        {!transcriptUnlocked ? (
          <p className="mt-2 text-sm text-muted-foreground">
            This activity tests your listening, so the transcript stays hidden.
            Solve all {exercises.length} exercises to unlock it — after each
            exercise you&apos;ll see the exact lines you heard.
          </p>
        ) : showTranscript ? (
          <div className="mt-3 flex flex-col gap-1.5">
            {activity.segments.map((segment, index) => (
              <div
                key={segment.id}
                className={cn(
                  "flex items-start gap-2 rounded-xl p-2.5 transition-colors",
                  index === player.currentIndex && "bg-primary/5 ring-1 ring-primary/30",
                )}
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="mt-0.5 size-7 shrink-0 rounded-full"
                  aria-label={`Replay line ${index + 1}`}
                  onClick={() => player.playSegment(index)}
                >
                  <svg viewBox="0 0 24 24" className="size-3.5" aria-hidden>
                    <path d="M8 5v14l11-7z" fill="currentColor" />
                  </svg>
                </Button>
                <div className="flex-1">
                  {segment.speakerId && speakerNames.get(segment.speakerId) ? (
                    <p className="text-[11px] font-semibold uppercase tracking-wide text-primary">
                      {speakerNames.get(segment.speakerId)}
                    </p>
                  ) : (
                    <p className="text-[11px] font-medium text-muted-foreground">
                      Line {index + 1}
                    </p>
                  )}
                  <p className="text-sm">{segment.text}</p>
                  {showTranslations && segment.translation ? (
                    <p className="mt-0.5 text-sm italic text-muted-foreground">
                      {segment.translation}
                    </p>
                  ) : null}
                </div>
              </div>
            ))}
            {!player.supported ? (
              <p className="text-[11px] text-muted-foreground">
                (Audio unavailable in this browser — read-along transcript shown.)
              </p>
            ) : null}
          </div>
        ) : (
          <p className="mt-2 text-sm text-muted-foreground">
            The transcript is unlocked — show it to read along.
          </p>
        )}
      </section>

      {/* Exercises */}
      <section className="mt-6" aria-label="Exercises">
        <div className="flex items-center justify-between gap-2">
          <h2 className="text-sm font-semibold">Exercises</h2>
          <p className="text-xs text-muted-foreground" aria-live="polite">
            {completedCount}/{exercises.length} solved
          </p>
        </div>
        <Progress
          value={(completedCount / Math.max(1, exercises.length)) * 100}
          className="mt-2 h-1.5"
        />

        <div className="mt-4">
          <ExerciseCard
            key={exercise.id}
            slug={slug}
            exercise={exercise}
            index={Math.min(currentExercise, exercises.length - 1)}
            total={exercises.length}
            completed={progress.exercisesCompleted.includes(exercise.id)}
            onPlaySegments={playExerciseSegments}
            onResult={(_, correct, nextProgress) => {
              setProgress(nextProgress);
              if (correct && !nextProgress.exercisesCompleted.includes(exercise.id)) {
                // The server already added it — defensive no-op.
              }
            }}
          />
        </div>

        {/* Exercise stepper */}
        <div className="mt-4 flex items-center justify-between gap-2">
          <Button
            variant="outline"
            size="sm"
            className="gap-1.5"
            disabled={currentExercise === 0}
            onClick={() => setCurrentExercise(currentExercise - 1)}
          >
            <ArrowLeft className="size-4" aria-hidden /> Previous
          </Button>
          <div className="flex flex-wrap gap-1.5" role="group" aria-label="Go to exercise">
            {exercises.map((ex, index) => {
              const solved = progress.exercisesCompleted.includes(ex.id);
              return (
                <button
                  key={ex.id}
                  type="button"
                  onClick={() => setCurrentExercise(index)}
                  aria-label={`Exercise ${index + 1}${solved ? " (solved)" : ""}`}
                  className={cn(
                    "inline-flex size-8 items-center justify-center rounded-lg border text-xs font-semibold transition-colors",
                    index === currentExercise
                      ? "border-primary bg-primary text-primary-foreground"
                      : solved
                        ? "border-emerald-300 bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300"
                        : "bg-background text-muted-foreground hover:bg-secondary",
                  )}
                >
                  {solved ? <CircleCheck className="size-4" aria-hidden /> : index + 1}
                </button>
              );
            })}
          </div>
          <Button
            variant="outline"
            size="sm"
            className="gap-1.5"
            disabled={currentExercise >= exercises.length - 1}
            onClick={() => setCurrentExercise(currentExercise + 1)}
          >
            Next <ArrowRight className="size-4" aria-hidden />
          </Button>
        </div>
      </section>
    </div>
  );
}
