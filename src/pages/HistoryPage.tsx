// src/pages/HistoryPage.tsx

import { useChat } from "../hooks/useChat";

export default function HistoryPage() {
  const { chats } = useChat();

  return (
    <div className="page">
      <h1>History</h1>

      {chats.map((chat) => (
        <div key={chat.id}>
          {chat.title}
        </div>
      ))}
    </div>
  );
}