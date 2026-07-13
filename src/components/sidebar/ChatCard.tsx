// REPLACE ENTIRE FILE
// src/components/sidebar/ChatCard.tsx

import { MessageSquare } from "lucide-react";
import type { Chat } from "../../types/chat";

type Props = {
  chat: Chat;
  active?: boolean;
  onClick?: () => void;
};

export default function ChatCard({
  chat,
  active = false,
  onClick,
}: Props) {
  return (
    <button
      type="button"
      className={`chat-card ${active ? "active" : ""}`}
      onClick={onClick}
    >
      <div className="chat-card-icon">
        <MessageSquare size={16} />
      </div>

      <div className="chat-card-content">
        <strong>{chat.title}</strong>

        <small>
          {new Date(chat.updatedAt).toLocaleDateString()}
        </small>
      </div>
    </button>
  );
}