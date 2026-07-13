// frontend/src/auth/components/AuthLayout.tsx

import { ReactNode } from "react";
import { Sparkles } from "lucide-react";
import "../styles/auth.css";

type Props = {
  children: ReactNode;
};

export default function AuthLayout({
  children,
}: Props) {
  return (
    <div className="auth-layout">

      <div className="auth-bg-grid" />

      <div className="auth-gradient auth-gradient-1" />
      <div className="auth-gradient auth-gradient-2" />
      <div className="auth-gradient auth-gradient-3" />

      <div className="auth-noise" />

      <div className="auth-glow" />

      <div className="auth-brand">

        <div className="auth-brand-logo">
          <Sparkles size={28}/>
        </div>

        <h1>Ho Gaya Sir</h1>

        <p>
          Your Personal AI Workspace
        </p>

      </div>

      <div className="auth-container">

        {children}

      </div>

    </div>
  );
}