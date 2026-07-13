// src/components/common/Input.tsx

import type {
  InputHTMLAttributes,
} from "react";

type Props =
  InputHTMLAttributes<HTMLInputElement>;

export default function Input({
  className = "",
  ...props
}: Props) {
  return (
    <input
      className={`hgs-input ${className}`}
      {...props}
    />
  );
}