"use client";

/**
 * RecorderPanel — the voice recording surface used by every speaking
 * exercise. Implements the full recording contract:
 *
 *   explicit start (never automatic) · recording state · pause/resume where
 *   supported · stop · replay · re-record · delete · submit · typed fallback
 *   · permission + privacy explanation · recording limits · failure handling
 *
 * The transcript source follows the learner's provider setting:
 *   server  → recording is converted to WAV and POSTed for transcription
 *   browser → live recognition while recording (where supported)
 *   manual  → the learner types what they said
 * and every mode also allows self-assessment (replay + confirm) as the
 * honest no-transcript fallback.
 */

import { useCallback, useEffect, useRef, useState } from "react";
import {
  AlertTriangle,
  Keyboard,
  Mic,
  Pause,
  Play,
  RotateCcw,
  Square,
  Trash2,
  Upload,
  Volume2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { useRecorder } from "@/hooks/use-recorder";
import { useSpeechRecognition } from "@/hooks/use-speech";
import { blobToWavBase64, formatDuration } from "@/lib/speaking/wav";
import { api, type SpeakingSettingsDto } from "@/lib/client/api";
import { ConsentDialog } from "./ConsentDialog";

/** What the panel hands to its parent — the parent adds slug + taskId. */
export interface SubmitPayload {
  mode: "transcript" | "self-assessed";
  provider: "server" | "browser" | "manual" | "self";
  transcript?: string;
  durationMs?: number;
}

export function RecorderPanel({
  settings,
  maxSeconds,
  targetSeconds,
  busy,
  onSubmitted,
  submitLabel = "Submit take",
}: {
  settings: SpeakingSettingsDto;
  maxSeconds: number;
  targetSeconds?: number;
  busy: boolean;
  onSubmitted: (payload: SubmitPayload) => void;
  submitLabel?: string;
}) {
  const recorder = useRecorder(maxSeconds);
  const recognition = useSpeechRecognition();
  const [consentOpen, setConsentOpen] = useState(false);
  /** Set to true only by the consent dialog; otherwise derived from settings. */
  const [consentOverride, setConsentOverride] = useState<boolean | null>(null);
  const [typedMode, setTypedMode] = useState(
    settings.provider === "manual" || !recorder.supported,
  );
  const [typedText, setTypedText] = useState("");
  const [transcribing, setTranscribing] = useState(false);
  const [transcribeError, setTranscribeError] = useState<string | null>(null);
  const [transcript, setTranscript] = useState<string | null>(null);
  const replayRef = useRef<HTMLAudioElement | null>(null);

  const consentGranted = consentOverride ?? settings.consented;

  // Live browser recognition runs alongside the recording when selected.
  useEffect(() => {
    if (
      settings.provider === "browser" &&
      recognition.supported &&
      recorder.state === "recording" &&
      !recognition.listening
    ) {
      recognition.start();
    }
    if (recorder.state !== "recording" && recognition.listening) {
      recognition.stop();
    }
  }, [recorder.state, settings.provider]);

  // Browser-provider transcript, derived at render (no state syncing).
  const effectiveTranscript =
    transcript ??
    (settings.provider === "browser" &&
    recorder.state === "recorded" &&
    recognition.transcript
      ? recognition.transcript
      : null);

  const requiresConsent = !consentGranted;

  const handleRecordClick = async () => {
    if (requiresConsent) {
      setConsentOpen(true);
      return;
    }
    if (recorder.state === "idle" || recorder.state === "recorded") {
      setTranscript(null);
      setTranscribeError(null);
      await recorder.start();
    }
  };

  /** Server transcription of the finished recording. */
  const submitWithServerTranscription = useCallback(async () => {
    const blob = recorder.getBlob();
    if (!blob) return;
    setTranscribing(true);
    setTranscribeError(null);
    const base64 = await blobToWavBase64(blob);
    if (!base64) {
      setTranscribing(false);
      setTranscribeError(
        "This recording could not be converted. You can type what you said instead.",
      );
      setTypedMode(true);
      return;
    }
    const response = await api.speakingTranscribe(base64);
    setTranscribing(false);
    if (!response.ok) {
      setTranscribeError(response.error);
      return;
    }
    if (response.data.error || !response.data.transcript) {
      setTranscribeError(
        response.data.message ?? "Transcription failed. You can type what you said instead.",
      );
      return;
    }
    setTranscript(response.data.transcript);
  }, [recorder]);

  const submit = (payload: SubmitPayload) => {
    onSubmitted(payload);
  };

  const providerLabel =
    settings.provider === "server"
      ? "Server transcription"
      : settings.provider === "browser"
        ? "In-browser recognition"
        : settings.provider === "manual"
          ? "Typed responses"
          : "Automatic";

  const recordingDisabled = busy || transcribing;

  return (
    <div className="rounded-xl border bg-card p-4 sm:p-5">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide">
          <Mic className="size-4 text-primary" aria-hidden /> Your take
        </h3>
        <span className="rounded-full bg-secondary px-2.5 py-0.5 text-xs text-muted-foreground">
          {providerLabel} · max {Math.floor(maxSeconds / 60)}:{String(maxSeconds % 60).padStart(2, "0")}
        </span>
      </div>

      {/* Permission / privacy note */}
      <p className="mt-2 text-xs text-muted-foreground">
        <Volume2 className="mr-1 inline size-3.5" aria-hidden />
        Recording starts only when you press Record. Audio is never stored —
        with server transcription it is converted to text once and discarded.
        {" "}
        <button
          type="button"
          className="underline underline-offset-2 hover:text-foreground"
          onClick={() => setConsentOpen(true)}
        >
          Privacy details
        </button>
      </p>

      {/* ---------------- Typed mode ---------------- */}
      {typedMode ? (
        <div className="mt-4 space-y-3">
          <div className="flex items-center gap-2 text-sm font-medium">
            <Keyboard className="size-4 text-primary" aria-hidden /> Type what you said
          </div>
          <p className="text-xs text-muted-foreground">
            Speak your answer out loud first — then type it here exactly as you
            said it. Everything is measured the same way.
          </p>
          <Textarea
            value={typedText}
            onChange={(event) => setTypedText(event.target.value)}
            placeholder="Type the words you just said…"
            rows={4}
            aria-label="Your spoken answer, typed"
            disabled={busy}
          />
          <div className="flex flex-wrap gap-2">
            <Button
              disabled={busy || typedText.trim().length === 0}
              onClick={() =>
                submit({
                  mode: "transcript",
                  provider: "manual",
                  transcript: typedText.trim(),
                  durationMs: recorder.durationMs,
                })
              }
            >
              <Upload className="size-4" aria-hidden /> {submitLabel}
            </Button>
            {recorder.supported ? (
              <Button variant="ghost" onClick={() => setTypedMode(false)} disabled={busy}>
                Use the microphone instead
              </Button>
            ) : null}
          </div>
        </div>
      ) : null}

      {/* ---------------- Recorder ---------------- */}
      {!typedMode ? (
        <div className="mt-4">
          {/* State: idle / recorded */}
          {(recorder.state === "idle" || recorder.state === "recorded") && (
            <div className="flex flex-col items-center gap-3 rounded-xl border-2 border-dashed py-8">
              {recorder.state === "recorded" ? (
                <>
                  <p className="text-sm text-muted-foreground">
                    Recorded {formatDuration(recorder.durationMs)}
                    {targetSeconds
                      ? ` · target ≈ ${targetSeconds}s`
                      : ""}
                  </p>
                  {/* Replay */}
                  {recorder.audioUrl ? (
                    <audio
                      ref={replayRef}
                      controls
                      src={recorder.audioUrl}
                      className="w-full max-w-sm"
                      aria-label="Replay your recording"
                    />
                  ) : null}

                  {/* Transcript flow */}
                  {effectiveTranscript !== null ? (
                    <div className="w-full max-w-xl rounded-lg border bg-secondary/40 p-3 text-sm">
                      <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                        Transcript for review
                      </p>
                      <p className="mt-1">{effectiveTranscript}</p>
                    </div>
                  ) : null}
                  {transcribeError ? (
                    <p className="flex items-center gap-2 text-sm text-amber-600 dark:text-amber-400">
                      <AlertTriangle className="size-4" aria-hidden /> {transcribeError}
                    </p>
                  ) : null}

                  <div className="flex flex-wrap items-center justify-center gap-2">
                    {/* Server transcription step */}
                    {settings.provider !== "browser" && effectiveTranscript === null ? (
                      <Button onClick={submitWithServerTranscription} disabled={transcribing}>
                        {transcribing ? "Transcribing…" : "Transcribe & review"}
                      </Button>
                    ) : null}
                    {/* Submit */}
                    {effectiveTranscript !== null ? (
                      <Button
                        disabled={recordingDisabled}
                        onClick={() =>
                          submit({
                            mode: "transcript",
                            provider:
                              settings.provider === "browser" ? "browser" : "server",
                            transcript: effectiveTranscript ?? undefined,
                            durationMs: recorder.durationMs,
                          })
                        }
                      >
                        <Upload className="size-4" aria-hidden /> {submitLabel}
                      </Button>
                    ) : null}
                    {/* Self-assessed fallback */}
                    <Button
                      variant="outline"
                      disabled={recordingDisabled}
                      onClick={() =>
                        submit({
                          mode: "self-assessed",
                          provider: "self",
                          durationMs: recorder.durationMs,
                        })
                      }
                    >
                      <Play className="size-4" aria-hidden /> Replay &amp; self-assess
                    </Button>
                    {/* Re-record / delete */}
                    <Button
                      variant="ghost"
                      onClick={() => recorder.reset()}
                      disabled={recordingDisabled}
                    >
                      <RotateCcw className="size-4" aria-hidden /> Re-record
                    </Button>
                    <Button
                      variant="ghost"
                      onClick={() => {
                        recorder.reset();
                        setTranscript(null);
                        setTypedText("");
                      }}
                      disabled={recordingDisabled}
                    >
                      <Trash2 className="size-4" aria-hidden /> Delete recording
                    </Button>
                  </div>
                </>
              ) : (
                <>
                  <Button
                    size="lg"
                    className="h-14 gap-2 rounded-full px-8 text-base"
                    onClick={handleRecordClick}
                    disabled={recordingDisabled}
                  >
                    <Mic className="size-5" aria-hidden /> Record
                  </Button>
                  <p className="text-xs text-muted-foreground">
                    {recorder.supported
                      ? "One tap starts the microphone — nothing records before you press this."
                      : "This browser cannot record audio; type your answer instead."}
                  </p>
                </>
              )}
            </div>
          )}

          {/* State: recording / paused */}
          {(recorder.state === "recording" || recorder.state === "paused") && (
            <div className="flex flex-col items-center gap-4 rounded-xl border-2 border-red-300 bg-red-50/50 py-8 dark:border-red-800 dark:bg-red-950/20">
              <div className="flex items-center gap-3">
                <span
                  className={cn(
                    "inline-block size-3 rounded-full",
                    recorder.state === "recording"
                      ? "animate-pulse bg-red-500"
                      : "bg-amber-500",
                  )}
                  aria-hidden
                />
                <p className="text-lg font-bold tabular-nums">
                  {formatDuration(recorder.durationMs)}
                </p>
                <span className="text-sm text-muted-foreground">
                  {recorder.state === "recording" ? "Recording" : "Paused"}
                  {targetSeconds ? ` · aim for ≈ ${targetSeconds}s` : ""}
                </span>
              </div>

              {/* Level meter */}
              <div className="flex h-8 w-48 items-end justify-center gap-1" aria-hidden>
                {[0.15, 0.35, 0.55, 0.75, 0.95].map((threshold) => (
                  <span
                    key={threshold}
                    className={cn(
                      "w-5 rounded-sm transition-all",
                      recorder.level >= threshold && recorder.state === "recording"
                        ? "bg-red-500"
                        : "bg-muted",
                    )}
                    style={{
                      height: `${Math.max(15, Math.min(100, recorder.level * 100 * (1 - threshold * 0.5) + 20))}%`,
                    }}
                  />
                ))}
              </div>

              {/* Live browser transcript */}
              {settings.provider === "browser" && recognition.listening ? (
                <p className="max-w-md px-4 text-center text-sm text-muted-foreground">
                  {recognition.transcript || "Listening…"}
                </p>
              ) : null}

              <div className="flex flex-wrap items-center justify-center gap-2">
                {recorder.canPause ? (
                  recorder.state === "recording" ? (
                    <Button variant="outline" onClick={recorder.pause}>
                      <Pause className="size-4" aria-hidden /> Pause
                    </Button>
                  ) : (
                    <Button variant="outline" onClick={recorder.resume}>
                      <Play className="size-4" aria-hidden /> Resume
                    </Button>
                  )
                ) : null}
                <Button onClick={recorder.stop} className="gap-2">
                  <Square className="size-4" aria-hidden /> Stop
                </Button>
                <Button
                  variant="ghost"
                  onClick={() => {
                    recorder.reset();
                    recognition.stop();
                  }}
                >
                  <Trash2 className="size-4" aria-hidden /> Cancel
                </Button>
              </div>
            </div>
          )}

          {/* Errors */}
          {recorder.error ? (
            <div className="mt-3 flex items-start gap-2 rounded-lg border border-amber-300 bg-amber-50 p-3 text-sm dark:border-amber-800 dark:bg-amber-950/40">
              <AlertTriangle className="mt-0.5 size-4 shrink-0 text-amber-600" aria-hidden />
              <div>
                <p>{recorder.error.message}</p>
                {recorder.error.kind === "permission-denied" ||
                recorder.error.kind === "no-microphone" ? (
                  <Button
                    size="sm"
                    variant="outline"
                    className="mt-2 gap-2"
                    onClick={() => setTypedMode(true)}
                  >
                    <Keyboard className="size-4" aria-hidden /> Type my answer instead
                  </Button>
                ) : null}
              </div>
            </div>
          ) : null}

          {/* Typed fallback link */}
          <div className="mt-3 text-center">
            <Button
              variant="link"
              size="sm"
              className="text-muted-foreground"
              onClick={() => setTypedMode(true)}
              disabled={busy}
            >
              <Keyboard className="size-4" aria-hidden /> Prefer to type what you said?
            </Button>
          </div>
        </div>
      ) : null}

      <ConsentDialog
        open={consentOpen}
        onOpenChange={setConsentOpen}
        onConsented={(next) => setConsentOverride(next.consented)}
      />
    </div>
  );
}
