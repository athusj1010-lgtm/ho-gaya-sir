// frontend/src/auth/utils/storage.ts

import type {
  AuthState,
  UserProfile,
} from "../types";

const AUTH_KEY = "hgs_auth_state";

const defaultState: AuthState = {
  loggedIn: false,
  profile: null,
};

export function getAuthState(): AuthState {
  try {
    const data = localStorage.getItem(AUTH_KEY);

    if (!data) return defaultState;

    return JSON.parse(data) as AuthState;
  } catch {
    return defaultState;
  }
}

export function saveAuthState(
  state: AuthState
) {
  localStorage.setItem(
    AUTH_KEY,
    JSON.stringify(state)
  );
}

export function getProfile():
  | UserProfile
  | null {
  return getAuthState().profile;
}

export function getUser():
  | UserProfile
  | null {
  return getProfile();
}

export function isLoggedIn() {
  return getAuthState().loggedIn;
}

export function login(
  profile: UserProfile
) {
  saveAuthState({
    loggedIn: true,
    profile,
  });

  if (profile.onboardingCompleted) {
    localStorage.setItem("page", "home");
  } else {
    localStorage.setItem(
      "page",
      "onboarding"
    );
  }

  window.dispatchEvent(
    new Event("page-change")
  );
}

export function finishOnboarding(
  profile: UserProfile
) {
  const updated: UserProfile = {
    ...profile,
    onboardingCompleted: true,
  };

  saveAuthState({
    loggedIn: true,
    profile: updated,
  });

  localStorage.setItem(
    "page",
    "home"
  );

  window.dispatchEvent(
    new Event("page-change")
  );
}

export function logout() {
  localStorage.removeItem(AUTH_KEY);

  localStorage.removeItem("hgs_chat");

  localStorage.setItem(
    "page",
    "login"
  );

  window.dispatchEvent(
    new Event("page-change")
  );
}