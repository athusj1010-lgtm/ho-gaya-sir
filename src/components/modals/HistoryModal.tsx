// src/components/modals/HistoryModal.tsx

type HistoryModalProps = {
  open: boolean;
  onClose: () => void;
};

export default function HistoryModal({
  open,
  onClose,
}: HistoryModalProps) {
  if (!open) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>History</h2>

        <p>Coming Soon...</p>

        <button onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}