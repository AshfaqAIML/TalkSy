"use client";

import { useCallback, useEffect, useRef, useState } from "react";

/**
 * Speech helpers built on the Web Speech API — zero external services.
 * TTS (speechSynthesis) powers audio blocks, dialogues, dictation and
 * listen-and-answer exercises. Speech recognition (where available) powers
 * speak-response exercises; a typed fallback keeps the exercise usable
 * everywhere (including headless browsers).
 */

type SpeechRecognitionLike = {
  lang: string;
  continuous: boolean;
  interimResults: boolean;
  start: () => void;
  stop: () => void;
  onresult: ((event: { results: ArrayLike<ArrayLike<{ transcript: string }>> }) => void) | null;
  onerror: ((event: { error?: string }) => void) | null;
  onend: (() => void) | null;
};

function getRecognitionCtor(): (new () => SpeechRecognitionLike) | null {
  if (typeof window === "undefined") return null;
  const w = window as unknown as {
    SpeechRecognition?: new () => SpeechRecognitionLike;
    webkitSpeechRecognition?: new () => SpeechRecognitionLike;
  };
  return w.SpeechRecognition ?? w.webkitSpeechRecognition ?? null;
}

export function ttsSupported(): boolean {
  return typeof window !== "undefined" && "speechSynthesis" in window;
}

export function recognitionSupported(): boolean {
  return getRecognitionCtor() !== null;
}

export interface SpeakOptions {
  rate?: number;
  onEnd?: () => void;
}

/** Speak text with an English voice. Returns false when unsupported. */
export function speak(text: string, options: SpeakOptions = {}): boolean {
  if (!ttsSupported()) {
    options.onEnd?.();
    return false;
  }
  const synth = window.speechSynthesis;
  synth.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "en-US";
  utterance.rate = options.rate ?? 1;
  const englishVoice = synth
    .getVoices()
    .find((v) => v.lang.toLowerCase().startsWith("en"));
  if (englishVoice) utterance.voice = englishVoice;
  if (options.onEnd) utterance.onend = () => options.onEnd?.();
  synth.speak(utterance);
  return true;
}

export function stopSpeaking(): void {
  if (ttsSupported()) window.speechSynthesis.cancel();
}

/** TTS button hook: tracks playing state and exposes play/stop. */
export function useSpeech() {
  const [playing, setPlaying] = useState(false);
  const mounted = useRef(true);

  useEffect(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
      stopSpeaking();
    };
  }, []);

  const play = useCallback((text: string, rate = 1) => {
    setPlaying(true);
    const ok = speak(text, {
      rate,
      onEnd: () => {
        if (mounted.current) setPlaying(false);
      },
    });
    if (!ok && mounted.current) setPlaying(false);
  }, []);

  const stop = useCallback(() => {
    stopSpeaking();
    setPlaying(false);
  }, []);

  return { playing, play, stop };
}

/** Speech recognition hook with graceful degradation. */
export function useSpeechRecognition() {
  const [listening, setListening] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [error, setError] = useState<string | null>(null);
  const recognitionRef = useRef<SpeechRecognitionLike | null>(null);
  const supported = recognitionSupported();

  const stop = useCallback(() => {
    recognitionRef.current?.stop();
    setListening(false);
  }, []);

  const start = useCallback(() => {
    const Ctor = getRecognitionCtor();
    if (!Ctor) {
      setError("Speech recognition is not available in this browser.");
      return;
    }
    setError(null);
    setTranscript("");
    const recognition = new Ctor();
    recognition.lang = "en-US";
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.onresult = (event) => {
      const results = event.results;
      let text = "";
      for (let i = 0; i < results.length; i++) {
        text += results[i][0]?.transcript ?? "";
      }
      setTranscript(text.trim());
    };
    recognition.onerror = (event) => {
      setError(
        event.error === "not-allowed"
          ? "Microphone permission was denied. You can type your answer instead."
          : "We could not hear you. Try again or type your answer.",
      );
      setListening(false);
    };
    recognition.onend = () => setListening(false);
    recognitionRef.current = recognition;
    recognition.start();
    setListening(true);
  }, []);

  useEffect(() => () => recognitionRef.current?.stop(), []);

  return { supported, listening, transcript, error, start, stop, setTranscript };
}
