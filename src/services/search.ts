// src/services/search.ts

import type { Chat } from "../types/chat";

export function searchChats(
  chats: Chat[],
  query: string
): Chat[] {
  const q = query.trim().toLowerCase();

  if (!q) return chats;

  return chats.filter((chat) => {
    if (
      chat.title.toLowerCase().includes(q)
    ) {
      return true;
    }

    return chat.messages.some((message) =>
      message.content
        .toLowerCase()
        .includes(q)
    );
  });
}