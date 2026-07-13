// src/pages/SavedPage.tsx

import { SavedService } from "../services/saved";

export default function SavedPage() {
  const chats =
    SavedService.getAll();

  return (
    <div className="page">
      <h1>Saved Chats</h1>

      {chats.map((chat) => (
        <div key={chat.id}>
          {chat.title}
        </div>
      ))}
    </div>
  );
}