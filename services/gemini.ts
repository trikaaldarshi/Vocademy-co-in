import { GoogleGenAI, Type, Modality } from "@google/genai";
import { WordAnalysis } from "../types";

/**
 * Analyzes a word specifically for competitive exam context using Gemini 3.
 */
export const analyzeWord = async (word: string): Promise<WordAnalysis> => {
  // Always use a new instance to ensure the latest API key is used
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `Analyze the English word "${word}" for a serious competitive exam aspirant (UPSC/SSC). Focus on The Hindu/Indian Express editorial usage. Include Hindi meaning and a high-level usage example.`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          word: { type: Type.STRING },
          pronunciation: { type: Type.STRING },
          meaningHindi: { type: Type.STRING },
          meaningEnglish: { type: Type.STRING },
          contextUsage: { type: Type.STRING },
          synonyms: { type: Type.ARRAY, items: { type: Type.STRING } },
          antonyms: { type: Type.ARRAY, items: { type: Type.STRING } },
          examRelevance: { type: Type.STRING, enum: ['High', 'Medium', 'Low'] },
        },
        required: ["word", "meaningHindi", "meaningEnglish", "contextUsage", "examRelevance"]
      }
    }
  });

  const text = response.text;
  if (!text) throw new Error("No response from AI");
  return JSON.parse(text);
};

/**
 * Generates audio for word pronunciation using Gemini TTS.
 * Returns the base64 encoded raw PCM data.
 */
export const generatePronunciation = async (word: string): Promise<string | undefined> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash-preview-tts",
    contents: [{ parts: [{ text: `Say clearly and with correct emphasis: ${word}` }] }],
    config: {
      responseModalities: [Modality.AUDIO],
      speechConfig: {
        voiceConfig: {
          prebuiltVoiceConfig: { voiceName: 'Kore' },
        },
      },
    },
  });

  return response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
};

/**
 * Audio decoding utility functions for raw PCM data.
 */
export function decodeBase64(base64: string) {
  const binaryString = atob(base64);
  const bytes = new Uint8Array(binaryString.length);
  for (let i = 0; i < binaryString.length; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes;
}

export async function decodeAudioData(
  data: Uint8Array,
  ctx: AudioContext,
  sampleRate: number = 24000,
  numChannels: number = 1,
): Promise<AudioBuffer> {
  const dataInt16 = new Int16Array(data.buffer);
  const frameCount = dataInt16.length / numChannels;
  const buffer = ctx.createBuffer(numChannels, frameCount, sampleRate);

  for (let channel = 0; channel < numChannels; channel++) {
    const channelData = buffer.getChannelData(channel);
    for (let i = 0; i < frameCount; i++) {
      channelData[i] = dataInt16[i * numChannels + channel] / 32768.0;
    }
  }
  return buffer;
}