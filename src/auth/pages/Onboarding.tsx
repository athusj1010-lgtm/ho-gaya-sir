// frontend/src/auth/pages/Onboarding.tsx

import { useState } from "react";

import AuthLayout from "../components/AuthLayout";
import AuthCard from "../components/AuthCard";
import StepTitle from "../components/StepTitle";
import ProgressBar from "../components/ProgressBar";
import RoleCard from "../components/RoleCard";
import AuthButton from "../components/AuthButton";

import { ROLES } from "../data/roles";
import {
  finishOnboarding,
  getProfile,
} from "../utils/storage";

import type { UserRole } from "../types";

export default function Onboarding() {
  const profile = getProfile();

  const [role, setRole] =
    useState<UserRole>("student");

  function finish() {
    if (!profile) return;

    finishOnboarding({
      ...profile,
      role,
    });
  }

  return (
    <AuthLayout>
      <AuthCard>

        <ProgressBar
          current={1}
          total={4}
        />

        <StepTitle
          title="What do you do?"
          subtitle="Choose one option. We'll personalize the entire app for you."
        />

        <div
          style={{
            display: "grid",
            gap: 16,
            marginBottom: 28,
            maxHeight: 420,
            overflowY: "auto",
          }}
        >
          {ROLES.map((item) => (
            <RoleCard
              key={item.id}
              role={item}
              selected={role === item.id}
              onClick={() =>
                setRole(item.id)
              }
            />
          ))}
        </div>

        <AuthButton
          onClick={finish}
        >
          Continue →
        </AuthButton>

      </AuthCard>
    </AuthLayout>
  );
}