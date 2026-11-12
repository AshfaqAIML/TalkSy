"use client";

import { useCallback, useEffect, useRef, useState } from "react";

/**
 * Voice recorder hook — the learner's microphone, managed safely.
 *
 * Design rules (from the Speaking Lab requirements):
 * - Recording starts ONLY from an explicit start() call — never automatically.
 * - Pause/resume where the browser supports MediaRecorder.pause().
 * - A hard max-duration auto-stop prevents runaway recordings.
 * - Every stream is fully released on stop/reset; errors are typed so the
 *   UI can react to permission denial vs missing microphone vs unsupported.
 */

export type RecorderState =
  | "idle"
  | "recording"
  | "paused"
  | "recorded"
  | "unsupported";

export type RecorderErrorKind =
  | "permission-denied"
  | "no-microphone"
  | "unsupported"
  | "unknown";

export interface RecorderError {
  kind: RecorderErrorKind;
  message: string;
}

function pickMimeType(): string | undefined {
  if (typeof MediaRecorder === "undefined") return undefined;
  const candidates = [
    "audio/webm;codecs=opus",
    "audio/webm",
    "audio/mp4",
    "audio/ogg;codecs=opus",
  ];
  return candidates.find((type) => MediaRecorder.isTypeSupported(type));
}

export function recorderSupported(): boolean {
  return (
    typeof window !== "undefined" &&
    typeof MediaRecorder !== "undefined" &&
    typeof navigator !== "undefined" &&
    navigator.mediaDevices?.getUserMedia !== undefined
  );
}

export function pauseSupported(): boolean {
  return (
    typeof MediaRecorder !== "undefined" &&
    typeof MediaRecorder.prototype.pause === "function"
  );
}

export interface UseRecorderResult {
  state: RecorderState;
  supported: boolean;
  canPause: boolean;
  durationMs: number;
  level: number; // 0–1 input level while recording
  error: RecorderError | null;
  audioUrl: string | null;
  start: () => Promise<void>;
  pause: () => void;
  resume: () => void;
  stop: () => void;
  reset: () => void;
  getBlob: () => Blob | null;
}

export function useRecorder(maxSeconds = 180): UseRecorderResult {
  const supported = recorderSupported();
  const canPause = pauseSupported();

  const [state, setState] = useState<RecorderState>(supported ? "idle" : "unsupported");
  const [durationMs, setDurationMs] = useState(0);
  const [level, setLevel] = useState(0);
  const [error, setError] = useState<RecorderError | null>(null);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);

  const streamRef = useRef<MediaStream | null>(null);
  const recorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);
  const blobRef = useRef<Blob | null>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const rafRef = useRef<number | null>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const startedAtRef = useRef(0);
  const accumulatedRef = useRef(0);
  const stateRef = useRef<RecorderState>(state);
  const urlRef = useRef<string | null>(null);

  // Keep a render-safe mirror of the state for timers and animation frames.
  useEffect(() => {
    stateRef.current = state;
  }, [state]);

  const teardownAudioGraph = useCallback(() => {
    if (rafRef.current !== null) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
    if (audioCtxRef.current) {
      void audioCtxRef.current.close().catch(() => undefined);
      audioCtxRef.current = null;
      analyserRef.current = null;
    }
    streamRef.current?.getTracks().forEach((track) => track.stop());
    streamRef.current = null;
    setLevel(0);
  }, []);

  const stopTimer = useCallback(() => {
    if (timerRef.current !== null) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const cleanup = useCallback(() => {
    stopTimer();
    teardownAudioGraph();
    if (recorderRef.current && recorderRef.current.state !== "inactive") {
      recorderRef.current.onstop = null;
      recorderRef.current.stop();
    }
    recorderRef.current = null;
  }, [stopTimer, teardownAudioGraph]);

  useEffect(() => {
    return () => {
      cleanup();
      if (urlRef.current) URL.revokeObjectURL(urlRef.current);
    };
  }, [cleanup]);

  const finishRecording = useCallback(() => {
    const blob = new Blob(chunksRef.current, { type: recorderRef.current?.mimeType ?? "audio/webm" });
    blobRef.current = blob.size > 0 ? blob : null;
    if (urlRef.current) URL.revokeObjectURL(urlRef.current);
    if (blob.size > 0) {
      urlRef.current = URL.createObjectURL(blob);
      setAudioUrl(urlRef.current);
    } else {
      urlRef.current = null;
      setAudioUrl(null);
    }
    cleanup();
    setState("recorded");
  }, [cleanup]);

  const startLevelMeter = useCallback(() => {
    const tick = () => {
      const analyser = analyserRef.current;
      if (analyser && stateRef.current === "recording") {
        const data = new Uint8Array(analyser.fftSize);
        analyser.getByteTimeDomainData(data);
        let sum = 0;
        for (let i = 0; i < data.length; i++) {
          const value = (data[i] - 128) / 128;
          sum += value * value;
        }
        const rms = Math.sqrt(sum / data.length);
        setLevel((previous) => previous * 0.6 + Math.min(1, rms * 3) * 0.4);
        rafRef.current = requestAnimationFrame(tick);
      }
    };
    rafRef.current = requestAnimationFrame(tick);
  }, []);

  const start = useCallback(async () => {
    if (!supported) {
      setState("unsupported");
      setError({
        kind: "unsupported",
        message: "This browser cannot record audio. You can type your answers instead.",
      });
      return;
    }
    setError(null);
    setDurationMs(0);
    setAudioUrl(null);
    accumulatedRef.current = 0;
    chunksRef.current = [];
    blobRef.current = null;

    let stream: MediaStream;
    try {
      stream = await navigator.mediaDevices.getUserMedia({
        audio: { echoCancellation: true, noiseSuppression: true },
      });
    } catch (err) {
      const name = err instanceof DOMException ? err.name : "";
      if (name === "NotAllowedError" || name === "SecurityError") {
        setError({
          kind: "permission-denied",
          message:
            "Microphone access was blocked. Allow the microphone in your browser's address bar, or type your answers instead.",
        });
      } else if (name === "NotFoundError" || name === "OverconstrainedError") {
        setError({
          kind: "no-microphone",
          message: "No microphone was found on this device. You can type your answers instead.",
        });
      } else {
        setError({
          kind: "unknown",
          message: "The microphone could not be started. Try again or type your answer.",
        });
      }
      return;
    }

    const mimeType = pickMimeType();
    let recorder: MediaRecorder;
    try {
      recorder = mimeType ? new MediaRecorder(stream, { mimeType }) : new MediaRecorder(stream);
    } catch {
      stream.getTracks().forEach((track) => track.stop());
      setError({
        kind: "unsupported",
        message: "This browser cannot record audio. You can type your answers instead.",
      });
      return;
    }

    streamRef.current = stream;
    recorderRef.current = recorder;
    recorder.ondataavailable = (event) => {
      if (event.data.size > 0) chunksRef.current.push(event.data);
    };
    recorder.onstop = () => finishRecording();

    // Level meter through an AnalyserNode.
    try {
      const AudioCtx =
        window.AudioContext ??
        (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        const ctx = new AudioCtx();
        const source = ctx.createMediaStreamSource(stream);
        const analyser = ctx.createAnalyser();
        analyser.fftSize = 512;
        source.connect(analyser);
        audioCtxRef.current = ctx;
        analyserRef.current = analyser;
      }
    } catch {
      // Level meter is cosmetic — recording continues without it.
    }

    recorder.start(250);
    startedAtRef.current = Date.now();
    setState("recording");
    startLevelMeter();
    stopTimer();
    timerRef.current = setInterval(() => {
      if (stateRef.current === "recording") {
        const total = accumulatedRef.current + (Date.now() - startedAtRef.current);
        setDurationMs(total);
        if (total >= maxSeconds * 1000) {
          // Auto-stop at the recording limit.
          if (recorderRef.current && recorderRef.current.state !== "inactive") {
            recorderRef.current.stop();
          }
        }
      }
    }, 100);
  }, [supported, maxSeconds, startLevelMeter, stopTimer, finishRecording]);

  const pause = useCallback(() => {
    const recorder = recorderRef.current;
    if (!recorder || recorder.state !== "recording") return;
    try {
      recorder.pause();
      accumulatedRef.current += Date.now() - startedAtRef.current;
      setState("paused");
    } catch {
      // Pause not supported on this platform — ignore.
    }
  }, []);

  const resume = useCallback(() => {
    const recorder = recorderRef.current;
    if (!recorder || recorder.state !== "paused") return;
    try {
      recorder.resume();
      startedAtRef.current = Date.now();
      setState("recording");
    } catch {
      // Ignore.
    }
  }, []);

  const stop = useCallback(() => {
    const recorder = recorderRef.current;
    if (!recorder || recorder.state === "inactive") return;
    if (stateRef.current === "recording") {
      accumulatedRef.current += Date.now() - startedAtRef.current;
    }
    setDurationMs(accumulatedRef.current);
    recorder.stop(); // onstop → finishRecording
  }, []);

  const reset = useCallback(() => {
    cleanup();
    chunksRef.current = [];
    blobRef.current = null;
    if (urlRef.current) URL.revokeObjectURL(urlRef.current);
    urlRef.current = null;
    setAudioUrl(null);
    setDurationMs(0);
    setError(null);
    setState(supported ? "idle" : "unsupported");
  }, [cleanup, supported]);

  const getBlob = useCallback(() => blobRef.current, []);

  return {
    state,
    supported,
    canPause,
    durationMs,
    level,
    error,
    audioUrl,
    start,
    pause,
    resume,
    stop,
    reset,
    getBlob,
  };
}
