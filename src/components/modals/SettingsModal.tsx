// src/components/modals/SettingsModal.tsx

type SettingsModalProps = {
  open: boolean;
  onClose: () => void;
};

export default function SettingsModal({
  open,
  onClose,
}: SettingsModalProps) {
  if (!open) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Settings</h2>

        <p>Coming Soon...</p>

        <button onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}