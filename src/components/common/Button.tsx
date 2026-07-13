// src/components/common/Button.tsx

import type {
  ButtonHTMLAttributes,
} from "react";

type Props =
  ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  children,
  className = "",
  ...props
}: Props) {
  return (
    <button
      className={`hgs-btn ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}