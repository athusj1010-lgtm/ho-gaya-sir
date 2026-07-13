// frontend/src/auth/pages/Signup.tsx

import { useState } from "react";
import { Sparkles } from "lucide-react";

import AuthLayout from "../components/AuthLayout";
import AuthCard from "../components/AuthCard";
import AuthInput from "../components/AuthInput";
import AuthButton from "../components/AuthButton";
import StepTitle from "../components/StepTitle";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function handleSignup() {
    if (!name.trim()) {
      alert("Enter your name");
      return;
    }

    if (!email.trim()) {
      alert("Enter your email");
      return;
    }

    alert("Signup backend will be connected next.");
  }

  return (
    <AuthLayout>
      <AuthCard>

        <StepTitle
          title="Create your workspace"
          subtitle="One account. Unlimited AI conversations."
        />

        <AuthInput
          label="Full Name"
          placeholder="Atharv Joshi"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <AuthInput
          label="Email Address"
          placeholder="you@example.com"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <AuthButton onClick={handleSignup}>
          <span
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 10,
            }}
          >
            <Sparkles size={18} />
            Create Account
          </span>
        </AuthButton>

      </AuthCard>
    </AuthLayout>
  );
}