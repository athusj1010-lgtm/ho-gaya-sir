export type UserRole =
  | "student"
  | "developer"
  | "business"
  | "employee"
  | "teacher"
  | "creator"
  | "other";

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