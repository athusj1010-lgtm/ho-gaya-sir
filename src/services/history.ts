import type { ChatMessage } from "./chat";

export type ChatHistory = {
  id: string;
  title: string;
  createdAt: number;
  messages: ChatMessage[];
};

const KEY = "hgs_history";

export function getHistory(): ChatHistory[] {
  const data = localStorage.getItem(KEY);
  return data ? JSON.parse(data) : [];
}

export function saveHistory(
  messages: ChatMessage[]
) {
  if (messages.length === 0) return;

  const history = getHistory();

  history.unshift({
    id: crypto.randomUUID(),
    title:
      messages[0]?.content.slice(0, 40) ||
      "New Chat",
    createdAt: Date.now(),
    messages,
  });

  localStorage.setItem(
    KEY,
    JSON.stringify(history)
  );
}

export function deleteHistory(id: string) {
  const history = getHistory().filter(
    (c) => c.id !== id
  );

  localStorage.setItem(
    KEY,
    JSON.stringify(history)
  );
}

export function renameHistory(
  id: string,
  title: string
) {
  const history = getHistory();

  const chat = history.find(
    (c) => c.id === id
  );

  if (chat) {
    chat.title = title;
  }

  localStorage.setItem(
    KEY,
    JSON.stringify(history)
  );
}