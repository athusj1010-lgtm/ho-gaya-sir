// src/components/modals/SearchModal.tsx

type SearchModalProps = {
  open: boolean;
  onClose: () => void;
};

export default function SearchModal({
  open,
  onClose,
}: SearchModalProps) {
  if (!open) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Search</h2>

        <p>Coming Soon...</p>

        <button onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}