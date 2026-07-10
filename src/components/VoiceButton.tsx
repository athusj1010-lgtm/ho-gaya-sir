type VoiceButtonProps = {
  onClick: () => void;
};

function VoiceButton({ onClick }: VoiceButtonProps) {
  return (
    <button
      onClick={onClick}
      style={{
        background: "#2563EB",
        color: "white",
        border: "none",
        padding: "15px 35px",
        fontSize: "18px",
        borderRadius: "12px",
        cursor: "pointer",
        fontWeight: "bold",
        transition: "0.3s",
      }}
    >
      🎤 Start Listening
    </button>
  );
}

export default VoiceButton;