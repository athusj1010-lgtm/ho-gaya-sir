// src/types/settings.ts

export type ThemeMode =
  | "dark"
  | "light"
  | "system";

export type AIModel =
  | "gemini"
  | "gpt"
  | "claude"
  | "deepseek"
  | "custom";

export interface AppSettings {
  theme: ThemeMode;

  language: string;

  aiModel: AIModel;

  voiceEnabled: boolean;

  voiceName: string;

  autoSpeak: boolean;

  autoSave: boolean;

  notifications: boolean;

  animations: boolean;

  sendWithEnter: boolean;

  fontSize: number;

  historyEnabled: boolean;

  imageGeneration: boolean;

  webSearch: boolean;
}

export const DEFAULT_SETTINGS: AppSettings = {
  theme: "dark",

  language: "en",

  aiModel: "deepseek",

  voiceEnabled: true,

  voiceName: "",

  autoSpeak: true,

  autoSave: true,

  notifications: true,

  animations: true,

  sendWithEnter: true,

  fontSize: 16,

  historyEnabled: true,

  imageGeneration: true,

  webSearch: true,
};
