// frontend/src/auth/types.ts

export type UserRole =
  | "student"
  | "developer"
  | "designer"
  | "business";

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  onboardingCompleted: boolean;
  createdAt: number;
}

export interface AuthState {
  loggedIn: boolean;
  profile: UserProfile | null;
}