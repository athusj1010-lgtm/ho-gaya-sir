// NEXT FILE

// frontend/src/auth/pages/Login.tsx

import { useState } from "react";

import AuthLayout from "../components/AuthLayout";
import AuthCard from "../components/AuthCard";
import AuthInput from "../components/AuthInput";
import AuthButton from "../components/AuthButton";
import StepTitle from "../components/StepTitle";

import { login } from "../utils/storage";

export default function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function continueLogin() {
    if (!name.trim()) {
      alert("Enter your name");
      return;
    }

    if (!email.trim()) {
      alert("Enter your email");
      return;
    }

    login({
      id: crypto.randomUUID(),
      name,
      email,
      role: "student",
      onboardingCompleted: false,
      createdAt: Date.now(),
    });
  }

  return (
    <AuthLayout>
      <AuthCard>

        <StepTitle
          title="Welcome 👋"
          subtitle="Let's personalize Ho Gaya Sir for you."
        />

        <AuthInput
          label="Full Name"
          placeholder="Atharv Joshi"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
        />

        <AuthInput
          label="Email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <AuthButton
          onClick={continueLogin}
        >
          Continue
        </AuthButton>

      </AuthCard>
    </AuthLayout>
  );
}