// src/storage/savedStorage.ts

import type { Chat } from "../types/chat";

const STORAGE_KEY = "hgs_saved_chats";

function read(): Chat[] {
  try {
    const data = localStorage.getItem(STORAGE_KEY);

    if (!data) return [];

    return JSON.parse(data) as Chat[];
  } catch {
    return [];
  }
}

function write(chats: Chat[]) {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(chats)
  );
}

export function getSavedChats(): Chat[] {
  return read().sort(
    (a, b) => b.updatedAt - a.updatedAt
  );
}

export function saveChat(chat: Chat) {
  const chats = read();

  const index = chats.findIndex(
    (item) => item.id === chat.id
  );

  if (index === -1) {
    chats.unshift(chat);
  } else {
    chats[index] = {
      ...chat,
      updatedAt: Date.now(),
    };
  }

  write(chats);
}

export function removeSavedChat(id: string) {
  write(
    read().filter(
      (chat) => chat.id !== id
    )
  );
}

export function isSaved(id: string): boolean {
  return read().some(
    (chat) => chat.id === id
  );
}

export function clearSavedChats() {
  localStorage.removeItem(STORAGE_KEY);
}

export function exportSavedChats(): Chat[] {
  return read();
}

export function importSavedChats(
  chats: Chat[]
) {
  write(chats);
}