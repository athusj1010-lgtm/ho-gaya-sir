// src/types/user.ts

export type UserPlan =
  | "free"
  | "pro"
  | "premium"
  | "enterprise";

export interface UserProfile {
  id: string;

  name: string;

  email: string;

  avatar?: string;

  bio?: string;

  country?: string;

  language: string;

  plan: UserPlan;

  joinedAt: number;

  lastLoginAt: number;
}

export interface UserPreferences {
  theme: "dark" | "light" | "system";

  language: string;

  notifications: boolean;

  autoSave: boolean;
}

export interface UserSession {
  isLoggedIn: boolean;

  token?: string;

  expiresAt?: number;
}

export interface UserState {
  profile: UserProfile | null;

  preferences: UserPreferences;

  session: UserSession;
}

export const DEFAULT_USER_PREFERENCES: UserPreferences = {
  theme: "dark",

  language: "en",

  notifications: true,

  autoSave: true,
};