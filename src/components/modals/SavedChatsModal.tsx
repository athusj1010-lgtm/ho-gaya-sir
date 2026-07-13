// src/components/modals/SavedChatsModal.tsx

type SavedChatsModalProps = {
  open: boolean;
  onClose: () => void;
};

export default function SavedChatsModal({
  open,
  onClose,
}: SavedChatsModalProps) {
  if (!open) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Saved Chats</h2>

        <p>Coming Soon...</p>

        <button onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}