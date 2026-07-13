// REPLACE ENTIRE FILE
// src/components/sidebar/ChatList.tsx

import ChatCard from "./ChatCard";
import type { Chat } from "../../types/chat";

type Props = {
  chats: Chat[];
  currentId?: string;
  onSelect: (chat: Chat) => void;
};

export default function ChatList({
  chats,
  currentId,
  onSelect,
}: Props) {
  return (
    <section className="chat-list">
      <div className="chat-list-header">
        <span>Recent Chats</span>

        <span>{chats.length}</span>
      </div>

      {chats.length === 0 ? (
        <div className="empty-chat-list">
          <p>No chats yet.</p>
          <span>Create your first conversation.</span>
        </div>
      ) : (
        chats.map((chat) => (
          <ChatCard
            key={chat.id}
            chat={chat}
            active={currentId === chat.id}
            onClick={() => onSelect(chat)}
          />
        ))
      )}
    </section>
  );
}