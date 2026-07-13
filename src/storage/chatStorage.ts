// src/storage/chatStorage.ts

import type {
  Chat,
  CreateChatPayload,
  UpdateChatPayload,
} from "../types/chat";

const STORAGE_KEY = "hgs_chats";

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

export function getChats(): Chat[] {
  return read().sort(
    (a, b) => b.updatedAt - a.updatedAt
  );
}

export function getChat(id: string): Chat | undefined {
  return read().find((chat) => chat.id === id);
}

export function createChat(
  payload: CreateChatPayload = {}
): Chat {
  const chats = read();

  const now = Date.now();

  const chat: Chat = {
    id: crypto.randomUUID(),

    title: payload.title ?? "New Chat",

    messages: [],

    pinned: false,

    favorite: false,

    archived: false,

    deleted: false,

    locked: false,

    tags: [],

    createdAt: now,

    updatedAt: now,

    status: "idle",
  };

  chats.unshift(chat);

  write(chats);

  return chat;
}

export function updateChat(
  id: string,
  payload: UpdateChatPayload
): Chat | null {
  const chats = read();

  const index = chats.findIndex(
    (chat) => chat.id === id
  );

  if (index === -1) return null;

  chats[index] = {
    ...chats[index],
    ...payload,
    updatedAt: Date.now(),
  };

  write(chats);

  return chats[index];
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

export function deleteChat(id: string) {
  write(
    read().filter((chat) => chat.id !== id)
  );
}

export function clearChats() {
  localStorage.removeItem(STORAGE_KEY);
}

export function pinChat(id: string) {
  const chat = getChat(id);

  if (!chat) return;

  updateChat(id, {
    pinned: !chat.pinned,
  });
}

export function favoriteChat(id: string) {
  const chat = getChat(id);

  if (!chat) return;

  updateChat(id, {
    favorite: !chat.favorite,
  });
}

export function archiveChat(id: string) {
  const chat = getChat(id);

  if (!chat) return;

  updateChat(id, {
    archived: !chat.archived,
  });
}

export function lockChat(id: string) {
  const chat = getChat(id);

  if (!chat) return;

  updateChat(id, {
    locked: !chat.locked,
  });
}

export function renameChat(
  id: string,
  title: string
) {
  updateChat(id, {
    title,
  });
}