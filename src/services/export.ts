// src/services/export.ts

import type { Chat } from "../types/chat";

export function exportChatAsText(
  chat: Chat
) {
  const content = chat.messages
    .map(
      (m) =>
        `${m.role.toUpperCase()}\n${m.content}`
    )
    .join("\n\n");

  const blob = new Blob([content], {
    type: "text/plain",
  });

  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");

  a.href = url;

  a.download = `${chat.title}.txt`;

  a.click();

  URL.revokeObjectURL(url);
}