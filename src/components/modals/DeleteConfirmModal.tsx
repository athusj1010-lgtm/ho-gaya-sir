// src/components/modals/DeleteConfirmModal.tsx

type DeleteConfirmModalProps = {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
};

export default function DeleteConfirmModal({
  open,
  onClose,
  onConfirm,
}: DeleteConfirmModalProps) {
  if (!open) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Delete Chat?</h2>

        <button onClick={onConfirm}>
          Delete
        </button>

        <button onClick={onClose}>
          Cancel
        </button>
      </div>
    </div>
  );
}