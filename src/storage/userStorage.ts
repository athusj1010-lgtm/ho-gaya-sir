// src/storage/userStorage.ts

import {
  DEFAULT_USER_PREFERENCES,
  type UserProfile,
  type UserPreferences,
  type UserSession,
} from "../types/user";

const PROFILE_KEY = "hgs_user_profile";

const PREFERENCES_KEY = "hgs_user_preferences";

const SESSION_KEY = "hgs_user_session";

export function getUserProfile(): UserProfile | null {
  try {
    const data = localStorage.getItem(PROFILE_KEY);

    if (!data) return null;

    return JSON.parse(data) as UserProfile;
  } catch {
    return null;
  }
}

export function saveUserProfile(
  profile: UserProfile
) {
  localStorage.setItem(
    PROFILE_KEY,
    JSON.stringify(profile)
  );
}

export function updateUserProfile(
  updates: Partial<UserProfile>
): UserProfile | null {
  const profile = getUserProfile();

  if (!profile) return null;

  const updated = {
    ...profile,
    ...updates,
  };

  saveUserProfile(updated);

  return updated;
}

export function removeUserProfile() {
  localStorage.removeItem(PROFILE_KEY);
}

export function getUserPreferences(): UserPreferences {
  try {
    const data = localStorage.getItem(
      PREFERENCES_KEY
    );

    if (!data) {
      return DEFAULT_USER_PREFERENCES;
    }

    return {
      ...DEFAULT_USER_PREFERENCES,
      ...JSON.parse(data),
    };
  } catch {
    return DEFAULT_USER_PREFERENCES;
  }
}

export function saveUserPreferences(
  preferences: UserPreferences
) {
  localStorage.setItem(
    PREFERENCES_KEY,
    JSON.stringify(preferences)
  );
}

export function updateUserPreferences(
  updates: Partial<UserPreferences>
): UserPreferences {
  const preferences = {
    ...getUserPreferences(),
    ...updates,
  };

  saveUserPreferences(preferences);

  return preferences;
}

export function getUserSession(): UserSession | null {
  try {
    const data = localStorage.getItem(
      SESSION_KEY
    );

    if (!data) return null;

    return JSON.parse(data) as UserSession;
  } catch {
    return null;
  }
}

export function saveUserSession(
  session: UserSession
) {
  localStorage.setItem(
    SESSION_KEY,
    JSON.stringify(session)
  );
}

export function clearUserSession() {
  localStorage.removeItem(SESSION_KEY);
}

export function clearUserStorage() {
  localStorage.removeItem(PROFILE_KEY);

  localStorage.removeItem(PREFERENCES_KEY);

  localStorage.removeItem(SESSION_KEY);
}