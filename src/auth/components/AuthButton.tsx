// frontend/src/auth/components/AuthButton.tsx

import { ButtonHTMLAttributes } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  fullWidth?: boolean;
};

export default function AuthButton({
  children,
  fullWidth = true,
  style,
  ...props
}: Props) {
  return (
    <button
      {...props}
      style={{
        width: fullWidth ? "100%" : undefined,

        height: 58,

        border: "none",

        borderRadius: 18,

        cursor: "pointer",

        color: "#fff",

        fontSize: 16,

        fontWeight: 700,

        letterSpacing: ".3px",

        background:
          "linear-gradient(135deg,#6366F1,#3B82F6)",

        boxShadow:
          "0 18px 40px rgba(99,102,241,.35)",

        transition: "all .25s ease",

        ...style,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform =
          "translateY(-3px) scale(1.01)";

        e.currentTarget.style.boxShadow =
          "0 24px 50px rgba(99,102,241,.45)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform =
          "translateY(0) scale(1)";

        e.currentTarget.style.boxShadow =
          "0 18px 40px rgba(99,102,241,.35)";
      }}
      onMouseDown={(e) => {
        e.currentTarget.style.transform =
          "scale(.98)";
      }}
      onMouseUp={(e) => {
        e.currentTarget.style.transform =
          "translateY(-3px) scale(1.01)";
      }}
    >
      {children}
    </button>
  );
}