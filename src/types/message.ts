// src/types/message.ts

export type MessageRole =
  | "user"
  | "assistant"
  | "system";

export type AttachmentType =
  | "image"
  | "pdf"
  | "doc"
  | "docx"
  | "txt"
  | "code"
  | "audio"
  | "video"
  | "other";

export interface Attachment {
  id: string;

  type: AttachmentType;

  name: string;

  url: string;

  size: number;

  mimeType: string;
}

export interface Message {
  id: string;

  role: MessageRole;

  content: string;

  attachments: Attachment[];

  copied: boolean;

  edited: boolean;

  error: boolean;

  regenerated: boolean;

  createdAt: number;

  updatedAt?: number;

  model?: string;

  tokens?: number;
}

export interface SendMessagePayload {
  content: string;

  attachments?: Attachment[];
}

export interface EditMessagePayload {
  content: string;
}