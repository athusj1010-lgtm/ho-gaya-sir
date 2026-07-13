// src/components/modals/ProfileModal.tsx

type ProfileModalProps = {
  open: boolean;
  onClose: () => void;
};

export default function ProfileModal({
  open,
  onClose,
}: ProfileModalProps) {
  if (!open) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Profile</h2>

        <p>Coming Soon...</p>

        <button onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}