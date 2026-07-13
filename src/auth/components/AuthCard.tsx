// frontend/src/auth/components/AuthCard.tsx

import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function AuthCard({
  children,
}: Props) {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: 560,

        position: "relative",

        padding: "42px",

        borderRadius: 32,

        overflow: "hidden",

        background:
          "linear-gradient(180deg, rgba(18,24,45,.82), rgba(11,15,30,.82))",

        border:
          "1px solid rgba(255,255,255,.08)",

        backdropFilter: "blur(30px)",
        WebkitBackdropFilter: "blur(30px)",

        boxShadow:
          "0 35px 90px rgba(0,0,0,.45), inset 0 1px 0 rgba(255,255,255,.05)",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background:
            "linear-gradient(135deg, rgba(99,102,241,.08), transparent 45%, rgba(59,130,246,.05))",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 1,
        }}
      >
        {children}
      </div>
    </div>
  );
}