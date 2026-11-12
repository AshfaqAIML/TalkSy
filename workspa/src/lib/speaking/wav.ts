/**
 * Client-side audio utilities: convert a recorded blob into a 16 kHz mono
 * WAV, base64-encoded, for server transcription. Runs entirely in the
 * browser with standard Web APIs.
 */

const TARGET_SAMPLE_RATE = 16_000;

function encodeWav(samples: Float32Array, sampleRate: number): ArrayBuffer {
  const buffer = new ArrayBuffer(44 + samples.length * 2);
  const view = new DataView(buffer);

  const writeString = (offset: number, text: string) => {
    for (let i = 0; i < text.length; i++) view.setUint8(offset + i, text.charCodeAt(i));
  };

  writeString(0, "RIFF");
  view.setUint32(4, 36 + samples.length * 2, true);
  writeString(8, "WAVE");
  writeString(12, "fmt ");
  view.setUint32(16, 16, true);
  view.setUint16(20, 1, true); // PCM
  view.setUint16(22, 1, true); // mono
  view.setUint32(24, sampleRate, true);
  view.setUint32(28, sampleRate * 2, true);
  view.setUint16(32, 2, true);
  view.setUint16(34, 16, true);
  writeString(36, "data");
  view.setUint32(40, samples.length * 2, true);

  let offset = 44;
  for (let i = 0; i < samples.length; i++, offset += 2) {
    const sample = Math.max(-1, Math.min(1, samples[i]));
    view.setInt16(offset, sample < 0 ? sample * 0x8000 : sample * 0x7fff, true);
  }
  return buffer;
}

/**
 * Decode a recorded blob, downmix to mono, resample to 16 kHz and return
 * base64 WAV. Returns null when the browser cannot decode the recording
 * (the caller falls back to typed input).
 */
export async function blobToWavBase64(blob: Blob): Promise<string | null> {
  try {
    const arrayBuffer = await blob.arrayBuffer();
    const AudioCtx =
      window.AudioContext ??
      (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!AudioCtx) return null;

    const decodeCtx = new AudioCtx();
    const decoded = await decodeCtx.decodeAudioData(arrayBuffer.slice(0));
    await decodeCtx.close();

    // Downmix to mono.
    const mono = new Float32Array(decoded.length);
    for (let channel = 0; channel < decoded.numberOfChannels; channel++) {
      const data = decoded.getChannelData(channel);
      for (let i = 0; i < data.length; i++) mono[i] += data[i] / decoded.numberOfChannels;
    }

    // Resample via OfflineAudioContext.
    const OfflineCtx =
      window.OfflineAudioContext ??
      (window as unknown as { webkitOfflineAudioContext?: typeof OfflineAudioContext })
        .webkitOfflineAudioContext;
    let outputSamples = mono;
    let outputRate = decoded.sampleRate;
    if (OfflineCtx && decoded.sampleRate !== TARGET_SAMPLE_RATE) {
      const length = Math.ceil((mono.length * TARGET_SAMPLE_RATE) / decoded.sampleRate);
      const offline = new OfflineCtx(1, length, TARGET_SAMPLE_RATE);
      const source = offline.createBufferSource();
      const buffer = offline.createBuffer(1, mono.length, decoded.sampleRate);
      buffer.copyToChannel(mono, 0);
      source.buffer = buffer;
      source.connect(offline.destination);
      source.start();
      const rendered = await offline.startRendering();
      outputSamples = rendered.getChannelData(0);
      outputRate = TARGET_SAMPLE_RATE;
    }

    const wav = encodeWav(outputSamples, outputRate);
    // Chunked base64 to avoid call-stack limits on long recordings.
    const bytes = new Uint8Array(wav);
    let binary = "";
    const chunk = 0x8000;
    for (let i = 0; i < bytes.length; i += chunk) {
      binary += String.fromCharCode(...bytes.subarray(i, i + chunk));
    }
    return btoa(binary);
  } catch {
    return null;
  }
}

/** Human-readable duration "0:07" / "1:23". */
export function formatDuration(ms: number): string {
  const totalSeconds = Math.floor(ms / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
}
