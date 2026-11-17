"use client";

/**
 * Browser speech utilities for TalkSy.
 *
 * - speak(): real text-to-speech via the Web Speech API (SpeechSynthesis),
 *   used for dialogues, listening exercises and word audio.
 * - listenOnce(): speech recognition via SpeechRecognition (Chrome/Edge/Arc),
 *   used for speaking practice. Feature-detected; callers must handle the
 *   "unsupported" case with an honest fallback (self-assessment).
 */

export interface SpeakOptions {
  rate?: number;
  pitch?: number;
  /** when provided, tries to pick a distinct voice (dialogue speakers) */
  voiceIndex?: number;
  onEnd?: () => void;
}

let cachedVoices: SpeechSynthesisVoice[] = [];

function loadVoices(): SpeechSynthesisVoice[] {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) return [];
  if (cachedVoices.length === 0) {
    cachedVoices = window.speechSynthesis.getVoices();
  }
  return cachedVoices;
}

if (typeof window !== "undefined" && "speechSynthesis" in window) {
  // Voices load asynchronously in most browsers.
  window.speechSynthesis.onvoiceschanged = () => {
    cachedVoices = window.speechSynthesis.getVoices();
  };
}

function pickEnglishVoice(index?: number): SpeechSynthesisVoice | undefined {
  const voices = loadVoices().filter((v) => v.lang.toLowerCase().startsWith("en"));
  if (voices.length === 0) return undefined;
  if (typeof index === "number") return voices[index % voices.length];
  // Prefer a high-quality natural voice if present.
  const preferred =
    voices.find((v) => /natural|google uk english female|samantha|serena/i.test(v.name)) ??
    voices.find((v) => v.lang === "en-GB") ??
    voices.find((v) => v.lang === "en-US") ??
    voices[0];
  return preferred;
}

export function speechSupported(): boolean {
  return typeof window !== "undefined" && "speechSynthesis" in window;
}

export function speak(text: string, options: SpeakOptions = {}): void {
  if (!speechSupported()) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "en-GB";
  utterance.rate = options.rate ?? 0.92;
  utterance.pitch = options.pitch ?? 1;
  const voice = pickEnglishVoice(options.voiceIndex);
  if (voice) utterance.voice = voice;
  if (options.onEnd) utterance.onend = options.onEnd;
  window.speechSynthesis.speak(utterance);
}

export function stopSpeaking(): void {
  if (speechSupported()) window.speechSynthesis.cancel();
}

/* ------------------------------------------------------------------ */
/* Speech recognition                                                  */
/* ------------------------------------------------------------------ */

interface SpeechRecognitionLike {
  lang: string;
  interimResults: boolean;
  maxAlternatives: number;
  continuous: boolean;
  start(): void;
  stop(): void;
  onresult: ((event: any) => void) | null;
  onerror: ((event: any) => void) | null;
  onend: (() => void) | null;
}

function getRecognitionCtor(): (new () => SpeechRecognitionLike) | null {
  if (typeof window === "undefined") return null;
  const w = window as any;
  return w.SpeechRecognition ?? w.webkitSpeechRecognition ?? null;
}

export function recognitionSupported(): boolean {
  return getRecognitionCtor() !== null;
}

export interface RecognitionResult {
  transcript: string;
}

/** Starts a one-shot recognition; resolves with the heard transcript. */
export function listenOnce(timeoutMs = 12000): Promise<RecognitionResult> {
  return new Promise((resolve, reject) => {
    const Ctor = getRecognitionCtor();
    if (!Ctor) {
      reject(new Error("Speech recognition is not supported in this browser."));
      return;
    }
    const recognition = new Ctor();
    recognition.lang = "en-GB";
    recognition.interimResults = false;
    recognition.maxAlternatives = 3;
    recognition.continuous = false;

    let settled = false;
    let timer: ReturnType<typeof setTimeout> | null = null;
    const finish = (fn: () => void) => {
      if (settled) return;
      settled = true;
      if (timer) clearTimeout(timer);
      try {
        recognition.stop();
      } catch {
        // already stopped
      }
      fn();
    };

    // Safety timeout: never leave the learner stuck on a silent microphone.
    timer = setTimeout(
      () =>
        finish(() =>
          reject(
            new Error(
              "We couldn't hear anything. Check your microphone and try again, or assess yourself below."
            )
          )
        ),
      timeoutMs
    );

    recognition.onresult = (event: any) => {
      const transcript: string = event.results?.[0]?.[0]?.transcript ?? "";
      finish(() => resolve({ transcript }));
    };
    recognition.onerror = (event: any) => {
      finish(() => reject(new Error(event?.error ?? "Recognition failed.")));
    };
    recognition.onend = () => {
      finish(() => reject(new Error("No speech detected. Try again or assess yourself below.")));
    };
    recognition.start();
  });
}

/* ------------------------------------------------------------------ */
/* Answer matching — pure functions live in src/lib/text-match.ts so   */
/* server code (exercise evaluation) can share them without importing */
/* a client module. Re-exported here for existing callers/tests.      */
/* ------------------------------------------------------------------ */

export { textMatches, similarity, speechPassed } from "@/lib/text-match";
