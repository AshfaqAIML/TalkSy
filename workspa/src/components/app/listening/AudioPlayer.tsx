"use client";

/**
 * Listening Lab — the audio player.
 *
 * A segment sequencer built on the browser's speech synthesis: segments are
 * spoken one after another (with authored pauses), giving play/pause,
 * restart, per-segment replay, play-from-here, speed and volume control, and
 * segment-level progress. Multi-speaker activities use different English
 * voices per speaker when the browser provides them. All audio is original
 * TalkSy content synthesised on-device — zero external services.
 */

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  ChevronsLeft,
  ChevronsRight,
  Pause,
  Play,
  RotateCcw,
  Square,
  Volume2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";
import { ttsSupported } from "@/hooks/use-speech";

export interface PlayerSegment {
  id: string;
  speakerId: string | null;
  text: string;
}

export type PlayerStatus = "idle" | "playing" | "paused";

const SPEEDS = [
  { label: "0.75×", value: 0.75 },
  { label: "1×", value: 1 },
  { label: "1.25×", value: 1.25 },
] as const;

/**
 * The sequencer hook. `baseRate` is the authored speech rate; the user speed
 * is a multiplier on top of it.
 */
export function useAudioSequencer(options: {
  segments: PlayerSegment[];
  baseRate: number;
  gapMs: number;
  speed: number;
  volume: number;
  /** speakerId → preferred voice index (assigned round-robin over en voices). */
  voiceBySpeaker: Map<string, SpeechSynthesisVoice | undefined>;
}) {
  const { segments, baseRate, gapMs, speed, volume, voiceBySpeaker } = options;
  const [status, setStatus] = useState<PlayerStatus>("idle");
  const [currentIndex, setCurrentIndex] = useState(0);

  const indexRef = useRef(0);
  const modeRef = useRef<"sequence" | "single">("sequence");
  /** null = play to the natural end of the segment list. */
  const endIndexRef = useRef<number | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const mountedRef = useRef(true);
  // Self-reference for sequential playback (assigned after the callback below).
  const speakRef = useRef<(index: number) => void>(() => undefined);

  const clearTimer = () => {
    if (timeoutRef.current !== null) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  const speakSegment = useCallback(
    (index: number) => {
      const synth = typeof window !== "undefined" ? window.speechSynthesis : undefined;
      const segment = segments[index];
      if (!synth || !segment) {
        setStatus("idle");
        return;
      }
      synth.cancel();
      const utterance = new SpeechSynthesisUtterance(segment.text);
      utterance.lang = "en-US";
      utterance.rate = Math.max(0.5, Math.min(2, baseRate * speed));
      utterance.volume = volume;
      if (segment.speakerId) {
        const voice = voiceBySpeaker.get(segment.speakerId);
        if (voice) utterance.voice = voice;
      } else {
        const anyVoice = [...voiceBySpeaker.values()][0];
        if (anyVoice) utterance.voice = anyVoice;
      }
      utterance.onend = () => {
        if (!mountedRef.current) return;
        const end = endIndexRef.current ?? segments.length - 1;
        if (modeRef.current === "single" || indexRef.current >= end) {
          setStatus("idle");
          return;
        }
        // Natural pause, then the next segment.
        timeoutRef.current = setTimeout(() => {
          if (!mountedRef.current || modeRef.current !== "sequence") return;
          indexRef.current = index + 1;
          setCurrentIndex(indexRef.current);
          speakRef.current(indexRef.current);
        }, gapMs);
      };
      utterance.onerror = () => {
        if (!mountedRef.current) return;
        setStatus("idle");
      };
      setStatus("playing");
      synth.speak(utterance);
    },
    [segments, baseRate, speed, volume, voiceBySpeaker, gapMs],
  );

  // Keep the recursion ref pointing at the latest implementation.
  useEffect(() => {
    speakRef.current = speakSegment;
  }, [speakSegment]);

  const stop = useCallback(() => {
    clearTimer();
    if (ttsSupported()) window.speechSynthesis.cancel();
    setStatus("idle");
  }, []);

  const play = useCallback(() => {
    if (!ttsSupported() || segments.length === 0) return;
    modeRef.current = "sequence";
    endIndexRef.current = null;
    speakSegment(indexRef.current);
  }, [segments, speakSegment]);

  const pause = useCallback(() => {
    if (!ttsSupported()) return;
    clearTimer();
    window.speechSynthesis.pause();
    setStatus("paused");
  }, []);

  const resume = useCallback(() => {
    if (!ttsSupported()) return;
    const synth = window.speechSynthesis;
    if (synth.paused && synth.speaking) {
      synth.resume();
      setStatus("playing");
    } else {
      // Fallback (some engines cancel on pause): replay the current segment.
      modeRef.current = "sequence";
      speakSegment(indexRef.current);
    }
  }, [speakSegment]);

  const toggle = useCallback(() => {
    if (status === "playing") pause();
    else if (status === "paused") resume();
    else play();
  }, [status, pause, resume, play]);

  const restart = useCallback(() => {
    stop();
    indexRef.current = 0;
    setCurrentIndex(0);
    if (ttsSupported() && segments.length > 0) {
      modeRef.current = "sequence";
      endIndexRef.current = null;
      // Let the cancel settle before speaking again.
      setTimeout(() => {
        if (mountedRef.current) speakSegment(0);
      }, 120);
    }
  }, [stop, segments, speakSegment]);

  const playFrom = useCallback(
    (index: number) => {
      if (index < 0 || index >= segments.length) return;
      stop();
      indexRef.current = index;
      setCurrentIndex(index);
      if (ttsSupported()) {
        modeRef.current = "sequence";
        endIndexRef.current = null;
        setTimeout(() => {
          if (mountedRef.current) speakSegment(index);
        }, 120);
      }
    },
    [segments.length, stop, speakSegment],
  );

  const playSegment = useCallback(
    (index: number) => {
      if (index < 0 || index >= segments.length) return;
      stop();
      indexRef.current = index;
      setCurrentIndex(index);
      if (ttsSupported()) {
        modeRef.current = "single";
        endIndexRef.current = index;
        setTimeout(() => {
          if (mountedRef.current) speakSegment(index);
        }, 120);
      }
    },
    [segments.length, stop, speakSegment],
  );

  /** Play a consecutive range of segments (used by exercises). */
  const playRange = useCallback(
    (startIndex: number, endIndex: number) => {
      if (startIndex < 0 || startIndex >= segments.length) return;
      stop();
      indexRef.current = startIndex;
      setCurrentIndex(startIndex);
      if (ttsSupported()) {
        modeRef.current = "sequence";
        endIndexRef.current = Math.min(endIndex, segments.length - 1);
        setTimeout(() => {
          if (mountedRef.current) speakSegment(startIndex);
        }, 120);
      }
    },
    [segments.length, stop, speakSegment],
  );
  const jump = useCallback(
    (direction: -1 | 1) => {
      const next = indexRef.current + direction;
      if (next < 0 || next >= segments.length) return;
      playFrom(next);
    },
    [segments.length, playFrom],
  );

  // Reset when the segment list changes (e.g. activity data arrives):
  // state returns to idle at paragraph zero; refs are already neutral.

  // Cancel speech on unmount.
  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
      clearTimer();
      if (ttsSupported()) window.speechSynthesis.cancel();
    };
  }, []);

  // Changing speed/volume mid-playback: restart the current segment.
  const settingsRef = useRef({ speed, volume });
  useEffect(() => {
    const changed =
      settingsRef.current.speed !== speed || settingsRef.current.volume !== volume;
    settingsRef.current = { speed, volume };
    if (changed && status === "playing") {
      modeRef.current = "single";
      endIndexRef.current = indexRef.current;
      speakSegment(indexRef.current);
    }
  }, [speed, volume, status, speakSegment]);

  return {
    status,
    currentIndex,
    supported: ttsSupported(),
    toggle,
    play,
    pause,
    resume,
    stop,
    restart,
    playFrom,
    playSegment,
    playRange,
    jump,
  };
}

/** Assign different English voices to speakers (round-robin). */
export function useSpeakerVoices(speakers: { id: string }[] | null) {
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  useEffect(() => {
    if (!ttsSupported()) return;
    const load = () => {
      const english = window.speechSynthesis
        .getVoices()
        .filter((v) => v.lang.toLowerCase().startsWith("en"));
      setVoices(english);
    };
    load();
    window.speechSynthesis.addEventListener("voiceschanged", load);
    return () => window.speechSynthesis.removeEventListener("voiceschanged", load);
  }, []);

  return useMemo(() => {
    const map = new Map<string, SpeechSynthesisVoice | undefined>();
    if (!speakers || voices.length === 0) return map;
    speakers.forEach((speaker, i) => {
      map.set(speaker.id, voices[i % voices.length]);
    });
    return map;
  }, [speakers, voices]);
}

// ---------------------------------------------------------------------------
// The player UI — presentational; the sequencer is owned by the activity view
// so exercises can trigger playback of their own audio ranges.
// ---------------------------------------------------------------------------

export type Sequencer = ReturnType<typeof useAudioSequencer>;

export function AudioPlayer({
  segments,
  player,
  speed,
  setSpeed,
  volume,
  setVolume,
}: {
  segments: PlayerSegment[];
  player: Sequencer;
  speed: number;
  setSpeed: (speed: number) => void;
  volume: number;
  setVolume: (volume: number) => void;
}) {
  const playedPercent =
    segments.length === 0
      ? 0
      : Math.round(((player.currentIndex + (player.status === "idle" ? 0 : 1)) / segments.length) * 100);

  return (
    <div className="rounded-2xl border-2 border-primary/20 bg-card p-4 sm:p-5">
      <div className="flex items-center justify-between gap-2">
        <p className="text-xs font-semibold uppercase tracking-wide text-primary">
          Audio player
        </p>
        <p className="text-xs text-muted-foreground" aria-live="polite">
          {player.status === "playing"
            ? `Playing segment ${player.currentIndex + 1} of ${segments.length}`
            : player.status === "paused"
              ? `Paused at segment ${player.currentIndex + 1} of ${segments.length}`
              : `Segment ${Math.min(player.currentIndex + 1, segments.length)} of ${segments.length}`}
        </p>
      </div>

      {!player.supported ? (
        <p className="mt-3 rounded-xl bg-amber-50 p-3 text-xs text-amber-800 dark:bg-amber-950 dark:text-amber-200">
          Audio playback is not available in this browser, so the transcript is
          shown below instead. In a normal browser every line is spoken aloud.
        </p>
      ) : null}

      {/* Progress */}
      <div
        className="mt-3 h-2 overflow-hidden rounded-full bg-secondary"
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={segments.length}
        aria-valuenow={player.currentIndex + 1}
        aria-label="Audio progress by segment"
      >
        <div
          className="h-full rounded-full bg-primary transition-all"
          style={{ width: `${playedPercent}%` }}
        />
      </div>

      {/* Controls */}
      <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-3">
        <div className="flex items-center gap-1.5">
          <Button
            type="button"
            variant="outline"
            size="icon"
            className="size-9"
            aria-label="Previous segment"
            disabled={player.currentIndex === 0}
            onClick={() => player.jump(-1)}
          >
            <ChevronsLeft className="size-4" aria-hidden />
          </Button>
          <Button
            type="button"
            size="icon"
            className="size-11 rounded-full"
            aria-label={player.status === "playing" ? "Pause" : "Play"}
            onClick={player.toggle}
          >
            {player.status === "playing" ? (
              <Pause className="size-5" aria-hidden />
            ) : (
              <Play className="size-5" aria-hidden />
            )}
          </Button>
          <Button
            type="button"
            variant="outline"
            size="icon"
            className="size-9"
            aria-label="Next segment"
            disabled={player.currentIndex >= segments.length - 1}
            onClick={() => player.jump(1)}
          >
            <ChevronsRight className="size-4" aria-hidden />
          </Button>
          <Button
            type="button"
            variant="outline"
            size="icon"
            className="size-9"
            aria-label="Replay from the start"
            onClick={player.restart}
          >
            <RotateCcw className="size-4" aria-hidden />
          </Button>
          <Button
            type="button"
            variant="outline"
            size="icon"
            className="size-9"
            aria-label="Stop"
            disabled={player.status === "idle"}
            onClick={player.stop}
          >
            <Square className="size-4" aria-hidden />
          </Button>
        </div>

        {/* Speed */}
        <div className="flex items-center gap-1" role="group" aria-label="Playback speed">
          {SPEEDS.map((option) => (
            <Button
              key={option.value}
              type="button"
              variant="outline"
              size="sm"
              className={cn(
                "h-8 px-2.5 text-xs",
                speed === option.value && "border-primary bg-primary/5 text-primary",
              )}
              aria-pressed={speed === option.value}
              onClick={() => setSpeed(option.value)}
            >
              {option.label}
            </Button>
          ))}
        </div>

        {/* Volume */}
        <div className="flex min-w-36 flex-1 items-center gap-2 sm:max-w-48">
          <Volume2 className="size-4 shrink-0 text-muted-foreground" aria-hidden />
          <Slider
            value={[volume]}
            min={0}
            max={1}
            step={0.05}
            aria-label="Volume"
            onValueChange={(value) => setVolume(value[0] ?? 1)}
          />
          <span className="w-8 shrink-0 text-right text-xs text-muted-foreground">
            {Math.round(volume * 100)}%
          </span>
        </div>
      </div>

      {/* Segment markers (replay selected sections) */}
      <div className="mt-4 flex flex-wrap gap-1.5" aria-label="Replay a section">
        {segments.map((segment, index) => (
          <button
            key={segment.id}
            type="button"
            onClick={() => player.playSegment(index)}
            className={cn(
              "inline-flex size-7 items-center justify-center rounded-lg border text-[11px] font-semibold transition-colors",
              index === player.currentIndex
                ? "border-primary bg-primary text-primary-foreground"
                : "bg-background text-muted-foreground hover:bg-secondary",
            )}
            aria-label={`Replay segment ${index + 1}`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
