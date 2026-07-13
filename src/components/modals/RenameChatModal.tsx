// src/components/modals/RenameChatModal.tsx

import { useState } from "react";

type RenameChatModalProps = {
  open: boolean;
  onClose: () => void;
  onSave: (title: string) => void;
};

export default function RenameChatModal({
  open,
  onClose,
  onSave,
}: RenameChatModalProps) {
  const [title, setTitle] = useState("");

  if (!open) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Rename Chat</h2>

        <input
          value={title}
          onChange={(e) =>
            setTitle(e.target.value)
          }
          placeholder="Chat name..."
        />

        <button
          onClick={() => {
            onSave(title);

            onClose();
          }}
        >
          Save
        </button>

        <button onClick={onClose}>
          Cancel
        </button>
      </div>
    </div>
  );
}