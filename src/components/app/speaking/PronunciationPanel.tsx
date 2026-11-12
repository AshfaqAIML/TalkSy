"use client";

/**
 * Pronunciation practice — word stress, sound differences, sentence rhythm
 * and intonation. Each item: explanation + visual cue, a TTS model to listen
 * to, record & replay your own take, an honest transcript-match signal when
 * a recogniser ran, and a self-rating after comparing by ear.
 */

import { useState } from "react";
import {
  ChevronDown,
  Ear,
  Mic,
  Play,
  RotateCcw,
  Square,
  Star,
  Trash2,
  Upload,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { useSpeech } from "@/hooks/use-speech";
import { useRecorder } from "@/hooks/use-recorder";
import { blobToWavBase64 } from "@/lib/speaking/wav";
import { api, type SpeakingPronunciationResult, type SpeakingSettingsDto } from "@/lib/client/api";
import { useAppStore } from "@/lib/client/store";
import type { PronunciationCategory, PronunciationItem } from "@/data/speaking/types";
import { ConsentDialog } from "./ConsentDialog";

export function PronunciationPanel({
  items,
  category,
  settings,
}: {
  items: PronunciationItem[];
  category: PronunciationCategory;
  settings: SpeakingSettingsDto;
}) {
  const user = useAppStore((s) => s.user);
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className="space-y-3">
      {items.map((item) => (
        <div key={item.id} className="overflow-hidden rounded-xl border bg-card">
          <button
            type="button"
            className="flex w-full items-center justify-between gap-3 p-4 text-left"
            onClick={() => setOpenId(openId === item.id ? null : item.id)}
            aria-expanded={openId === item.id}
          >
            <div>
              <p className="font-semibold">{item.title}</p>
              <p className="mt-0.5 text-sm text-muted-foreground">{item.explanation}</p>
            </div>
            <ChevronDown
              className={cn(
                "size-5 shrink-0 text-muted-foreground transition-transform",
                openId === item.id && "rotate-180",
              )}
              aria-hidden
            />
          </button>
          {openId === item.id ? (
            <div className="border-t p-4">
              <PronunciationItemPractice item={item} settings={settings} loggedIn={!!user} />
            </div>
          ) : null}
        </div>
      ))}
      <p className="text-xs text-muted-foreground">
        Category: {category}. The transcript match is not a pronunciation score
        — accents are not errors.
      </p>
    </div>
  );
}

function PronunciationItemPractice({
  item,
  settings,
  loggedIn,
}: {
  item: PronunciationItem;
  settings: SpeakingSettingsDto;
  loggedIn: boolean;
}) {
  const speech = useSpeech();
  const recorder = useRecorder(60);
  const [consentOpen, setConsentOpen] = useState(false);
  const [consented, setConsented] = useState(settings.consented);
  const [typedMode, setTypedMode] = useState(settings.provider === "manual" || !recorder.supported);
  const [typed, setTyped] = useState("");
  const [busy, setBusy] = useState(false);
  const [result, setResult] = useState<SpeakingPronunciationResult | null>(null);
  const [rating, setRating] = useState(0);
  const [error, setError] = useState<string | null>(null);

  const submit = async (payload: {
    transcript?: string;
    hadStt?: boolean;
    selfRating?: number;
  }) => {
    setBusy(true);
    setError(null);
    const response = await api.speakingPronunciation({
      itemId: item.id,
      ...payload,
    });
    setBusy(false);
    if (response.ok) setResult(response.data);
    else setError(response.error);
  };

  const transcribeAndSubmit = async () => {
    const blob = recorder.getBlob();
    if (!blob) return;
    setBusy(true);
    const base64 = await blobToWavBase64(blob);
    if (!base64) {
      setBusy(false);
      setError("This recording could not be converted — compare by ear instead.");
      setTypedMode(true);
      return;
    }
    const response = await api.speakingTranscribe(base64);
    setBusy(false);
    if (!response.ok) {
      setError(response.error);
      setTypedMode(true);
      return;
    }
    if (response.data.error || !response.data.transcript) {
      setError(
        response.data.message ?? "Transcription failed — compare by ear instead.",
      );
      setTypedMode(true);
      return;
    }
    await submit({
      transcript: response.data.transcript,
      hadStt: true,
      selfRating: rating,
    });
  };

  return (
    <div className="space-y-4">
      {/* Target + model audio */}
      <div className="rounded-lg border bg-secondary/40 p-3 text-center">
        <p className="text-lg font-semibold">{item.targetText}</p>
        <p className="mt-1 text-sm font-medium text-primary">{item.visualCue}</p>
        {item.tip ? (
          <p className="mt-1.5 text-xs text-muted-foreground">💡 {item.tip}</p>
        ) : null}
      </div>
      <Button
        variant="outline"
        size="sm"
        className="gap-2"
        onClick={() => (speech.playing ? speech.stop() : speech.play(item.targetText, 0.9))}
      >
        <Play className="size-4" aria-hidden />
        {speech.playing ? "Stop model" : "Hear the model (slow)"}
      </Button>

      {item.minimalPairs && item.minimalPairs.length > 0 ? (
        <ul className="space-y-1.5 text-sm">
          {item.minimalPairs.map((pair) => (
            <li key={pair.word} className="rounded-lg border bg-secondary/30 px-3 py-2">
              <span className="font-semibold">{pair.word}</span>
              <span className="text-muted-foreground"> — {pair.meaning}</span>
              <span className="block text-xs text-muted-foreground">{pair.contrast}</span>
            </li>
          ))}
        </ul>
      ) : null}

      {loggedIn ? (
        <>
          {/* Recorder */}
          {recorder.state === "recording" || recorder.state === "paused" ? (
            <div className="flex flex-col items-center gap-3 rounded-xl border-2 border-red-300 bg-red-50/50 p-4 dark:border-red-800 dark:bg-red-950/20">
              <p className="flex items-center gap-2 text-sm font-medium text-red-600 dark:text-red-400">
                <span className="inline-block size-2.5 animate-pulse rounded-full bg-red-500" aria-hidden />
                Recording… say the target clearly.
              </p>
              <Button onClick={recorder.stop} variant="outline" size="sm" className="gap-2">
                <Square className="size-4" aria-hidden /> Stop
              </Button>
            </div>
          ) : recorder.state === "recorded" ? (
            <div className="flex flex-col items-center gap-3">
              {recorder.audioUrl ? (
                <audio controls src={recorder.audioUrl} aria-label="Replay your take" />
              ) : null}
              {/* Self-rating before submit */}
              <div className="flex items-center gap-1.5">
                <span className="text-sm text-muted-foreground">Compare by ear:</span>
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    aria-label={`${star} star${star === 1 ? "" : "s"}`}
                    className="p-0.5"
                  >
                    <Star
                      className={cn(
                        "size-5",
                        rating >= star
                          ? "fill-amber-400 text-amber-400"
                          : "text-muted-foreground",
                      )}
                      aria-hidden
                    />
                  </button>
                ))}
              </div>
              <div className="flex flex-wrap justify-center gap-2">
                {settings.provider !== "browser" && !typedMode ? (
                  <Button onClick={transcribeAndSubmit} disabled={busy} className="gap-2">
                    <Upload className="size-4" aria-hidden />
                    {busy ? "Checking…" : "Check what I said"}
                  </Button>
                ) : null}
                <Button
                  variant="outline"
                  onClick={() => submit({ selfRating: rating })}
                  disabled={busy}
                  className="gap-2"
                >
                  <Ear className="size-4" aria-hidden /> Save self-assessed take
                </Button>
                <Button
                  variant="ghost"
                  onClick={() => {
                    recorder.reset();
                    setResult(null);
                  }}
                  className="gap-2"
                >
                  <RotateCcw className="size-4" aria-hidden /> Re-record
                </Button>
              </div>
            </div>
          ) : !typedMode ? (
            <div className="flex flex-col items-center gap-2">
              <Button
                className="gap-2"
                onClick={async () => {
                  if (!consented) {
                    setConsentOpen(true);
                    return;
                  }
                  setResult(null);
                  await recorder.start();
                }}
              >
                <Mic className="size-4" aria-hidden /> Record your take
              </Button>
              <Button variant="link" size="sm" className="text-muted-foreground" onClick={() => setTypedMode(true)}>
                Type what I said instead
              </Button>
            </div>
          ) : (
            <div className="space-y-2">
              <Textarea
                value={typed}
                onChange={(event) => setTyped(event.target.value)}
                placeholder="Type what you said…"
                rows={2}
                aria-label="Typed take"
              />
              <div className="flex gap-2">
                <Button
                  size="sm"
                  disabled={typed.trim().length === 0 || busy}
                  onClick={() => submit({ transcript: typed.trim(), hadStt: false, selfRating: rating })}
                  className="gap-2"
                >
                  <Trash2 className="hidden" aria-hidden />
                  Save typed take
                </Button>
                {recorder.supported ? (
                  <Button size="sm" variant="ghost" onClick={() => setTypedMode(false)}>
                    Use the microphone
                  </Button>
                ) : null}
              </div>
            </div>
          )}

          {error ? <p className="text-sm text-amber-600 dark:text-amber-400">{error}</p> : null}

          {/* Result */}
          {result ? (
            <div className="rounded-lg border bg-secondary/40 p-3 text-sm">
              {result.matchScore >= 0 ? (
                <p>
                  Transcript match:{" "}
                  <span className="font-bold">{Math.round(result.matchScore * 100)}%</span>
                  {result.heard ? (
                    <span className="text-muted-foreground"> — heard “{result.heard}”</span>
                  ) : null}
                </p>
              ) : (
                <p>Saved — self-assessed take.</p>
              )}
              <p className="mt-1 text-xs text-muted-foreground">{result.note}</p>
            </div>
          ) : null}
        </>
      ) : (
        <p className="text-sm text-muted-foreground">Log in to record and track your takes.</p>
      )}

      <ConsentDialog
        open={consentOpen}
        onOpenChange={setConsentOpen}
        onConsented={(next) => setConsented(next.consented)}
      />
    </div>
  );
}
