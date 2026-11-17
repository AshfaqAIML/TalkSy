"use client";

/**
 * MicControl — speech-recording control with the full state machine:
 * idle → recording (pulsing ring) → processing → result / denied.
 * Uses lib/speech listenOnce (feature-detected). When recognition is
 * unavailable the component degrades honestly to a self-assessment
 * prompt — the same policy the lesson player uses.
 */

import { useState } from "react";
import { Mic, MicOff } from "lucide-react";
import { listenOnce, recognitionSupported } from "@/lib/speech";
import { cn } from "@/lib/utils";

type MicState = "idle" | "recording" | "processing" | "denied";

export function MicControl({
  prompt,
  onResult,
  className,
}: {
  /** what the learner is asked to say */
  prompt: string;
  onResult?: (transcript: string) => void;
  className?: string;
}) {
  const supported = recognitionSupported();
  const [state, setState] = useState<MicState>("idle");
  const [transcript, setTranscript] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  if (!supported) {
    return (
      <div className={cn("rounded-xl border border-dashed border-line bg-sand-50 p-4 text-center", className)}>
        <MicOff className="mx-auto mb-2 h-6 w-6 text-ink-400" aria-hidden="true" />
        <p className="text-body-sm font-medium text-ink-700">Speech recognition isn&apos;t available in this browser.</p>
        <p className="mt-1 text-caption text-ink-500">
          Say the phrase out loud, then judge yourself honestly — did it sound clear?
        </p>
      </div>
    );
  }

  async function record() {
    setState("recording");
    setError(null);
    try {
      const result = await listenOnce();
      setState("processing");
      setTranscript(result.transcript);
      onResult?.(result.transcript);
      setTimeout(() => setState("idle"), 600);
    } catch (err) {
      setState("denied");
      setError((err as Error).message);
    }
  }

  const recording = state === "recording";

  return (
    <div className={cn("flex flex-col items-center gap-3", className)}>
      <span className="relative inline-flex">
        {recording && (
          <>
            <span className="absolute inset-0 animate-ping rounded-full bg-clay-500/25 motion-reduce:animate-none" aria-hidden="true" />
            <span
              className="absolute inset-0 animate-ping rounded-full bg-clay-500/20 motion-reduce:animate-none"
              style={{ animationDelay: "300ms" }}
              aria-hidden="true"
            />
          </>
        )}
        <button
          type="button"
          onClick={recording ? undefined : record}
          aria-label={recording ? "Listening — say the phrase" : `Record yourself saying: ${prompt}`}
          aria-pressed={recording}
          className={cn(
            "relative flex h-16 w-16 items-center justify-center rounded-full transition-colors",
            recording
              ? "bg-clay-600 text-white"
              : state === "denied"
                ? "bg-clay-100 text-clay-700"
                : "bg-primary text-primary-foreground hover:bg-brand-700"
          )}
        >
          <Mic className="h-7 w-7" aria-hidden="true" />
        </button>
      </span>
      <p className="text-caption font-medium text-ink-600" aria-live="polite">
        {state === "recording"
          ? "Listening…"
          : state === "processing"
            ? "Got it!"
            : state === "denied"
              ? "Let's try that again"
              : "Tap and speak"}
      </p>
      {transcript && state !== "denied" && (
        <p className="rounded-lg bg-sand-100 px-3 py-1.5 text-body-sm text-ink-700">
          We heard: <span className="font-semibold">“{transcript}”</span>
        </p>
      )}
      {error && <p className="text-caption text-clay-700">{error}</p>}
    </div>
  );
}
