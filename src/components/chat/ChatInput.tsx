// src/components/chat/ChatInput.tsx

import {
  useRef,
  useState,
} from "react";

import {
  Image,
  Paperclip,
  Send,
} from "lucide-react";

type ChatInputProps = {
  onSend: (text: string) => void;

  onImage?: () => void;

  onFile?: () => void;
};

export default function ChatInput({
  onSend,
  onImage,
  onFile,
}: ChatInputProps) {
  const [text, setText] = useState("");

  const inputRef =
    useRef<HTMLInputElement>(null);

  function send() {
    const value = text.trim();

    if (!value) return;

    onSend(value);

    setText("");

    inputRef.current?.focus();
  }

  return (
    <div className="chat-input">
      <button
        type="button"
        onClick={onImage}
      >
        <Image size={18} />
      </button>

      <button
        type="button"
        onClick={onFile}
      >
        <Paperclip size={18} />
      </button>

      <input
        ref={inputRef}
        value={text}
        placeholder="Message Ho Gaya Sir..."
        onChange={(e) =>
          setText(e.target.value)
        }
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            send();
          }
        }}
      />

      <button
        type="button"
        onClick={send}
      >
        <Send size={18} />
      </button>
    </div>
  );
}