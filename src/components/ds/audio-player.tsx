"use client";

/**
 * AudioPlayer — the app's TTS control (Web Speech API via lib/speech).
 * Honest about capabilities: play/stop (not pause), replay, and a rate
 * toggle for learners who need slower speech. If the browser has no
 * speech synthesis, it says so.
 */

import { useEffect, useRef, useState } from "react";
import { RotateCcw, Square, Volume2 } from "lucide-react";
import { speechSupported, speak, stopSpeaking } from "@/lib/speech";
import { cn } from "@/lib/utils";

export function AudioPlayer({
  text,
  label = "Listen",
  rates = [0.75, 1],
  className,
}: {
  text: string;
  label?: string;
  /** selectable playback speeds; first entry is the default */
  rates?: number[];
  className?: string;
}) {
  const supported = speechSupported();
  const [speaking, setSpeaking] = useState(false);
  const [rateIndex, setRateIndex] = useState(0);
  const mounted = useRef(true);

  useEffect(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
      stopSpeaking();
    };
  }, []);

  if (!supported) {
    return (
      <p className={cn("rounded-lg bg-sand-100 px-3 py-2 text-caption text-ink-500", className)}>
        Audio is not supported in this browser.
      </p>
    );
  }

  function play() {
    speak(text, {
      rate: rates[rateIndex],
      onEnd: () => mounted.current && setSpeaking(false),
    });
    setSpeaking(true);
  }

  function stop() {
    stopSpeaking();
    setSpeaking(false);
  }

  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-line bg-card p-1.5 pl-2 shadow-xs",
        className
      )}
    >
      <button
        type="button"
        onClick={speaking ? stop : play}
        aria-label={speaking ? `Stop ${label.toLowerCase()}` : `${label}: ${text.slice(0, 40)}`}
        className={cn(
          "flex h-9 w-9 items-center justify-center rounded-full transition-colors",
          speaking ? "bg-clay-600 text-white hover:bg-clay-500" : "bg-primary text-primary-foreground hover:bg-brand-700"
        )}
      >
        {speaking ? <Square className="h-4 w-4" aria-hidden="true" /> : <Volume2 className="h-4 w-4" aria-hidden="true" />}
      </button>

      {/* speaking indicator — three bars; static under reduced motion */}
      <span className="flex h-5 items-end gap-[3px] px-1" aria-hidden="true">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className={cn(
              "w-[3px] rounded-full bg-primary",
              speaking ? "animate-pulse motion-reduce:animate-none" : "opacity-25"
            )}
            style={{
              height: speaking ? [10, 16, 7][i] : 8,
              animationDelay: `${i * 120}ms`,
              transition: "height 200ms",
            }}
          />
        ))}
      </span>

      <button
        type="button"
        onClick={() => {
          stop();
          setRateIndex((i) => (i + 1) % rates.length);
        }}
        aria-label={`Speech speed: ${rates[rateIndex]}×. Press to change.`}
        className="h-9 rounded-full px-3 text-caption font-semibold tabular-nums text-ink-600 transition-colors hover:bg-sand-100 hover:text-ink-800"
      >
        {rates[rateIndex]}×
      </button>

      <button
        type="button"
        onClick={() => {
          stop();
          setTimeout(play, 60);
        }}
        aria-label="Replay audio"
        className="flex h-9 w-9 items-center justify-center rounded-full text-ink-500 transition-colors hover:bg-sand-100 hover:text-ink-800"
      >
        <RotateCcw className="h-4 w-4" aria-hidden="true" />
      </button>
    </div>
  );
}
