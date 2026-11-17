/**
 * Speech-to-text provider adapters (server side).
 *
 * The learner configures which provider runs (settings). Server-side we own
 * exactly one real provider — the z-ai ASR service reached through
 * z-ai-web-dev-sdk. Audio arrives base64-encoded, is held in memory only for
 * the duration of the request, and is never written to disk or the database.
 * The browser provider (Web Speech API) and the typed manual mode run
 * entirely client-side and never reach this file.
 */

import ZAI from "z-ai-web-dev-sdk";

export interface TranscribeSuccess {
  ok: true;
  transcript: string;
}

export interface TranscribeFailure {
  ok: false;
  error: "too-large" | "bad-format" | "empty" | "unavailable" | "timeout";
  message: string;
}

export type TranscribeResult = TranscribeSuccess | TranscribeFailure;

/** 8 MB of base64 ≈ 6 MB of audio ≈ several minutes — well above our caps. */
const MAX_BASE64_LENGTH = 8 * 1024 * 1024;
const TIMEOUT_MS = 45_000;

/**
 * Transcribe a base64 audio payload. Audio formats follow what browsers
 * record (webm/opus, mp4) plus classic wav; the service handles common
 * containers, and anything it rejects surfaces as a bad-format error that
 * the client turns into a typed fallback.
 */
export async function transcribeWithServer(
  base64Audio: string,
): Promise<TranscribeResult> {
  const trimmed = base64Audio.trim();
  if (trimmed.length === 0) {
    return { ok: false, error: "empty", message: "No audio was submitted." };
  }
  if (trimmed.length > MAX_BASE64_LENGTH) {
    return {
      ok: false,
      error: "too-large",
      message: "The recording is too long to transcribe. Try a shorter take.",
    };
  }

  try {
    const zai = await ZAI.create();
    const response = await Promise.race([
      zai.audio.asr.create({ file_base64: trimmed }),
      new Promise<never>((_, reject) =>
        setTimeout(() => reject(new Error("stt-timeout")), TIMEOUT_MS),
      ),
    ]);
    const text = (response?.text ?? "").replace(/\s+/g, " ").trim();
    if (!text) {
      return {
        ok: false,
        error: "empty",
        message: "No speech was detected in the recording. Speak a little louder and closer to the microphone.",
      };
    }
    return { ok: true, transcript: text };
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    if (message.includes("stt-timeout")) {
      return {
        ok: false,
        error: "timeout",
        message: "Transcription took too long. You can retry or type what you said.",
      };
    }
    if (/format|unsupported|decode|media/i.test(message)) {
      return {
        ok: false,
        error: "bad-format",
        message: "This audio could not be decoded. You can retry or type what you said.",
      };
    }
    return {
      ok: false,
      error: "unavailable",
      message: "The transcription service is unavailable right now. You can type what you said instead.",
    };
  }
}

/** Provider capability descriptor sent to the client (library route). */
export function sttCapabilities(): {
  serverTranscription: boolean;
  maxRecordingSeconds: number;
} {
  return { serverTranscription: true, maxRecordingSeconds: 180 };
}
