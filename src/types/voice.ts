// src/types/voice.ts

export type VoiceStatus =
  | "idle"
  | "listening"
  | "processing"
  | "speaking"
  | "paused"
  | "stopped"
  | "error";

export interface VoiceTranscript {
  id: string;

  text: string;

  final: boolean;

  createdAt: number;
}

export interface VoiceSettings {
  enabled: boolean;

  language: string;

  voice: string;

  rate: number;

  pitch: number;

  volume: number;

  autoSpeak: boolean;

  continuousListening: boolean;

  wakeWordEnabled: boolean;

  wakeWord: string;
}

export interface VoiceState {
  status: VoiceStatus;

  transcript: string;

  interimTranscript: string;

  isListening: boolean;

  isSpeaking: boolean;

  error?: string;

  startedAt?: number;
}

export const DEFAULT_VOICE_SETTINGS: VoiceSettings = {
  enabled: true,

  language: "en-IN",

  voice: "",

  rate: 1,

  pitch: 1,

  volume: 1,

  autoSpeak: true,

  continuousListening: false,

  wakeWordEnabled: false,

  wakeWord: "Ho Gaya Sir",
};