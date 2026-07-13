// src/components/chat/ChatWindow.tsx

import MessageBubble from "./MessageBubble";

import type { Message } from "../../types/message";

type ChatWindowProps = {
  messages: Message[];
};

export default function ChatWindow({
  messages,
}: ChatWindowProps) {
  if (messages.length === 0) {
    return (
      <div className="chat-empty">
        <h2>Ho Gaya Sir</h2>

        <p>
          Start a new conversation...
        </p>
      </div>
    );
  }

  return (
    <div className="chat-window">
      {messages.map((message) => (
        <MessageBubble
          key={message.id}
          message={message}
        />
      ))}
    </div>
  );
}