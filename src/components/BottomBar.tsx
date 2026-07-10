// src/components/BottomBar.tsx

type Props = {
  listening?: boolean;
  onMicClick?: () => void;
};

export default function BottomBar({
  listening = false,
  onMicClick,
}: Props) {
  return (
    <footer className="bottom-bar">

      <button className="bottom-icon">
        🌐
      </button>

      <button className="bottom-icon">
        👨
      </button>

      <button className="bottom-icon">
        📎
      </button>

      <input
        className="chat-input"
        placeholder="Message Ho Gaya Sir..."
      />

      <button
        className={`mic-btn ${listening ? "active" : ""}`}
        onClick={onMicClick}
      >
        {listening ? "🎙" : "🎤"}
      </button>

      <button className="send-btn">
        ➜
      </button>

    </footer>
  );
}