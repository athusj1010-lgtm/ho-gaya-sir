// src/types/chat.ts

import type { Message } from "./message";

export type ChatStatus =
  | "idle"
  | "typing"
  | "generating"
  | "completed"
  | "error";

export interface Chat {
  id: string;

  title: string;

  messages: Message[];

  pinned: boolean;

  favorite: boolean;

  archived: boolean;

  deleted: boolean;

  locked: boolean;

  folderId?: string;

  tags: string[];

  createdAt: number;

  updatedAt: number;

  lastMessage?: string;

  lastMessageAt?: number;

  status: ChatStatus;
}

export interface CreateChatPayload {
  title?: string;
}

export interface UpdateChatPayload {
  title?: string;

  pinned?: boolean;

  favorite?: boolean;

  archived?: boolean;

  deleted?: boolean;

  locked?: boolean;

  tags?: string[];
}

export interface ChatFolder {
  id: string;

  name: string;

  color?: string;

  createdAt: number;
}

export interface ChatSearchResult {
  chatId: string;

  messageId?: string;

  title: string;

  preview: string;
}