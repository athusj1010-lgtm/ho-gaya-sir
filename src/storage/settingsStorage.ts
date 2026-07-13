// src/storage/settingsStorage.ts

import {
  DEFAULT_SETTINGS,
  type AppSettings,
} from "../types/settings";

const STORAGE_KEY = "hgs_settings";

export function getSettings(): AppSettings {
  try {
    const data = localStorage.getItem(STORAGE_KEY);

    if (!data) {
      return DEFAULT_SETTINGS;
    }

    return {
      ...DEFAULT_SETTINGS,
      ...JSON.parse(data),
    };
  } catch {
    return DEFAULT_SETTINGS;
  }
}

export function saveSettings(
  settings: AppSettings
) {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(settings)
  );
}

export function updateSettings(
  updates: Partial<AppSettings>
): AppSettings {
  const settings = {
    ...getSettings(),
    ...updates,
  };

  saveSettings(settings);

  return settings;
}

export function resetSettings() {
  saveSettings(DEFAULT_SETTINGS);
}

export function clearSettings() {
  localStorage.removeItem(STORAGE_KEY);
}
