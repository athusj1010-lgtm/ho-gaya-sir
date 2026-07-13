// src/context/SettingsContext.tsx

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import type { AppSettings } from "../types/settings";

import {
  getSettings,
  saveSettings,
  updateSettings,
  resetSettings,
} from "../storage/settingsStorage";

type SettingsContextType = {
  settings: AppSettings;

  setSettings: (settings: AppSettings) => void;

  update: (
    updates: Partial<AppSettings>
  ) => void;

  reset: () => void;
};

const SettingsContext =
  createContext<SettingsContextType | null>(null);

export function SettingsProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [settings, setSettingsState] =
    useState<AppSettings>(getSettings());

  useEffect(() => {
    setSettingsState(getSettings());
  }, []);

  const setSettings = (
    value: AppSettings
  ) => {
    saveSettings(value);

    setSettingsState(value);
  };

  const update = (
    updates: Partial<AppSettings>
  ) => {
    const updated =
      updateSettings(updates);

    setSettingsState(updated);
  };

  const reset = () => {
    resetSettings();

    setSettingsState(getSettings());
  };

  const value = useMemo(
    () => ({
      settings,

      setSettings,

      update,

      reset,
    }),
    [settings]
  );

  return (
    <SettingsContext.Provider
      value={value}
    >
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettings() {
  const context =
    useContext(SettingsContext);

  if (!context) {
    throw new Error(
      "useSettings must be used inside SettingsProvider."
    );
  }

  return context;
}