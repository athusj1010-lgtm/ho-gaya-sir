// src/context/VoiceContext.tsx

import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import {
  DEFAULT_VOICE_SETTINGS,
  type VoiceSettings,
  type VoiceState,
} from "../types/voice";

type VoiceContextType = {
  voice: VoiceState;

  settings: VoiceSettings;

  setVoice: (
    value: Partial<VoiceState>
  ) => void;

  setVoiceSettings: (
    value: Partial<VoiceSettings>
  ) => void;

  resetVoice: () => void;
};

const defaultVoiceState: VoiceState = {
  status: "idle",

  transcript: "",

  interimTranscript: "",

  response: "",

  isListening: false,

  isSpeaking: false,

  error: "",
};
const VoiceContext =
  createContext<VoiceContextType | null>(
    null
  );

export function VoiceProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [voice, setVoiceState] =
    useState<VoiceState>(
      defaultVoiceState
    );

  const [settings, setSettings] =
    useState<VoiceSettings>(
      DEFAULT_VOICE_SETTINGS
    );

  const setVoice = (
    value: Partial<VoiceState>
  ) => {
    setVoiceState((prev) => ({
      ...prev,
      ...value,
    }));
  };

  const setVoiceSettings = (
    value: Partial<VoiceSettings>
  ) => {
    setSettings((prev) => ({
      ...prev,
      ...value,
    }));
  };

  const resetVoice = () => {
    setVoiceState(defaultVoiceState);

    setSettings(
      DEFAULT_VOICE_SETTINGS
    );
  };

  const contextValue = useMemo(
    () => ({
      voice,

      settings,

      setVoice,

      setVoiceSettings,

      resetVoice,
    }),
    [voice, settings]
  );

  return (
    <VoiceContext.Provider
      value={contextValue}
    >
      {children}
    </VoiceContext.Provider>
  );
}

export function useVoiceContext() {
  const context =
    useContext(VoiceContext);

  if (!context) {
    throw new Error(
      "useVoiceContext must be used inside VoiceProvider."
    );
  }

  return context;
}