// REPLACE ENTIRE FILE
// src/pages/ChatPage.tsx

import { useState } from "react";

import ChatWindow from "../components/chat/ChatWindow";
import ChatInput from "../components/chat/ChatInput";
import TypingIndicator from "../components/chat/TypingIndicator";

import { useChat } from "../hooks/useChat";

import {
  sendMessage,
  type ChatMessage,
} from "../services/chat";

import type { Message } from "../types/message";

export default function ChatPage() {
  const {
    currentChat,
    updateChat,
  } = useChat();

  const [loading, setLoading] =
    useState(false);

  if (!currentChat) {
    return (
      <ChatWindow messages={[]} />
    );
  }

  async function handleSend(
    text: string
  ) {
    const userMessage: Message = {
      id: crypto.randomUUID(),

      role: "user",

      content: text,

      attachments: [],

      copied: false,

      edited: false,

      error: false,

      regenerated: false,

      createdAt: Date.now(),
    };

    const updatedChat = {
      ...currentChat,

      messages: [
        ...currentChat.messages,
        userMessage,
      ],

      lastMessage: text,

      lastMessageAt: Date.now(),

      updatedAt: Date.now(),
    };

    updateChat(updatedChat);

    setLoading(true);

    try {
      const history: ChatMessage[] =
        updatedChat.messages.map(
          (message) => ({
            role: message.role as
              | "user"
              | "assistant",
            content: message.content,
          })
        );

      const response =
        await sendMessage(
          text,
          history
        );

      const aiMessage: Message = {
        id: crypto.randomUUID(),

        role: "assistant",

        content: response.reply,

        attachments: [],

        copied: false,

        edited: false,

        error: false,

        regenerated: false,

        createdAt: Date.now(),
      };

      updateChat({
        ...updatedChat,

        messages: [
          ...updatedChat.messages,
          aiMessage,
        ],

        lastMessage: response.reply,

        lastMessageAt: Date.now(),

        updatedAt: Date.now(),
      });
    } catch (error) {
      const aiMessage: Message = {
        id: crypto.randomUUID(),

        role: "assistant",

        content:
          error instanceof Error
            ? error.message
            : "Something went wrong.",

        attachments: [],

        copied: false,

        edited: false,

        error: true,

        regenerated: false,

        createdAt: Date.now(),
      };

      updateChat({
        ...updatedChat,

        messages: [
          ...updatedChat.messages,
          aiMessage,
        ],

        lastMessage:
          aiMessage.content,

        lastMessageAt: Date.now(),

        updatedAt: Date.now(),
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <ChatWindow
        messages={
          currentChat.messages
        }
      />

      {loading && (
        <TypingIndicator />
      )}

      <ChatInput
        onSend={handleSend}
      />
    </>
  );
}