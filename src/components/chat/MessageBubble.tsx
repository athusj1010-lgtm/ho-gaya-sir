// src/components/chat/MessageBubble.tsx

import type { Message } from "../../types/message";

type MessageBubbleProps = {
  message: Message;
};

export default function MessageBubble({
  message,
}: MessageBubbleProps) {
  const isUser = message.role === "user";

  return (
    <div
      className={`message-bubble ${
        isUser ? "user" : "assistant"
      }`}
    >
      <div className="message-header">
        <strong>
          {isUser ? "You" : "Ho Gaya Sir"}
        </strong>

        <small>
          {new Date(
            message.createdAt
          ).toLocaleTimeString()}
        </small>
      </div>

      <div className="message-content">
        {message.content}
      </div>

      {message.attachments.length > 0 && (
        <div className="message-files">
          {message.attachments.map(
            (file) => (
              <div
                key={file.id}
                className="message-file"
              >
                📎 {file.name}
              </div>
            )
          )}
        </div>
      )}
    </div>
  );
}