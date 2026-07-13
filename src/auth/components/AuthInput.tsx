// frontend/src/auth/components/AuthInput.tsx

import { InputHTMLAttributes } from "react";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
};

export default function AuthInput({
  label,
  error,
  style,
  ...props
}: Props) {
  return (
    <div
      style={{
        width: "100%",
        marginBottom: 24,
      }}
    >
      <label
        style={{
          display: "block",
          marginBottom: 10,
          color: "#F3F4F6",
          fontSize: 14,
          fontWeight: 600,
          letterSpacing: ".2px",
        }}
      >
        {label}
      </label>

      <input
        {...props}
        style={{
          width: "100%",
          height: 60,

          padding: "0 20px",

          borderRadius: 18,

          border: "1px solid rgba(255,255,255,.08)",

          background:
            "linear-gradient(180deg, rgba(255,255,255,.06), rgba(255,255,255,.03))",

          color: "#fff",

          fontSize: 15,

          outline: "none",

          backdropFilter: "blur(18px)",

          transition: "all .25s ease",

          boxShadow: "inset 0 1px 0 rgba(255,255,255,.03)",

          ...style,
        }}
        onFocus={(e) => {
          e.currentTarget.style.border =
            "1px solid rgba(99,102,241,.9)";

          e.currentTarget.style.boxShadow =
            "0 0 0 4px rgba(99,102,241,.18)";

          e.currentTarget.style.background =
            "rgba(255,255,255,.08)";
        }}
        onBlur={(e) => {
          e.currentTarget.style.border =
            "1px solid rgba(255,255,255,.08)";

          e.currentTarget.style.boxShadow =
            "none";

          e.currentTarget.style.background =
            "linear-gradient(180deg, rgba(255,255,255,.06), rgba(255,255,255,.03))";
        }}
      />

      {error && (
        <p
          style={{
            marginTop: 8,
            marginLeft: 4,
            color: "#ff7b7b",
            fontSize: 13,
            fontWeight: 500,
          }}
        >
          {error}
        </p>
      )}
    </div>
  );
}