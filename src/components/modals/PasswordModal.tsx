// src/components/modals/PasswordModal.tsx

import { useState } from "react";

type PasswordModalProps = {
  open: boolean;
  onClose: () => void;
  onSubmit: (password: string) => void;
};

export default function PasswordModal({
  open,
  onClose,
  onSubmit,
}: PasswordModalProps) {
  const [password, setPassword] =
    useState("");

  if (!open) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Private Vault</h2>

        <input
          type="password"
          value={password}
          placeholder="Password"
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        <button
          onClick={() => {
            onSubmit(password);

            onClose();
          }}
        >
          Unlock
        </button>

        <button onClick={onClose}>
          Cancel
        </button>
      </div>
    </div>
  );
}