// frontend/src/auth/data/roles.ts

import type { UserRole } from "../types";

export interface RoleItem {
  id: UserRole;
  title: string;
  subtitle: string;
  emoji: string;
  color: string;
}

export const ROLES: RoleItem[] = [
  {
    id: "student",
    title: "Student",
    subtitle: "School, College & Competitive Exams",
    emoji: "🎓",
    color: "#5B8CFF",
  },
  {
    id: "developer",
    title: "Developer",
    subtitle: "Code, AI, Projects & Debugging",
    emoji: "💻",
    color: "#7B61FF",
  },
  {
    id: "business",
    title: "Business",
    subtitle: "Growth, Sales & Productivity",
    emoji: "💼",
    color: "#16C47F",
  },
  {
    id: "employee",
    title: "Employee",
    subtitle: "Office, Documents & Meetings",
    emoji: "🏢",
    color: "#FF8A00",
  },
  {
    id: "teacher",
    title: "Teacher",
    subtitle: "Teaching & Content Creation",
    emoji: "👨‍🏫",
    color: "#00B8D9",
  },
  {
    id: "creator",
    title: "Creator",
    subtitle: "YouTube, Instagram & Design",
    emoji: "🎨",
    color: "#FF4DA6",
  },
  {
    id: "other",
    title: "Other",
    subtitle: "Customize your experience",
    emoji: "✨",
    color: "#8B8B8B",
  },
];