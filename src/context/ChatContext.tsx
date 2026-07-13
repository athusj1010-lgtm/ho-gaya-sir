// src/context/ChatContext.tsx

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import type { Chat } from "../types/chat";

import {
  getChats,
  createChat as createChatStorage,
  saveChat,
  deleteChat,
  renameChat,
  pinChat,
  favoriteChat,
  archiveChat,
  lockChat,
  clearChats,
} from "../storage/chatStorage";

type ChatContextType = {
  chats: Chat[];

  currentChat: Chat | null;

  setCurrentChat: (chat: Chat | null) => void;

  refreshChats: () => void;

  createNewChat: (title?: string) => Chat;

  updateChat: (chat: Chat) => void;

  removeChat: (id: string) => void;

  renameCurrentChat: (
    id: string,
    title: string
  ) => void;

  pinCurrentChat: (id: string) => void;

  favoriteCurrentChat: (id: string) => void;

  archiveCurrentChat: (id: string) => void;

  lockCurrentChat: (id: string) => void;

  clearAllChats: () => void;
};

const ChatContext =
  createContext<ChatContextType | null>(null);

export function ChatProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [chats, setChats] = useState<Chat[]>([]);

  const [currentChat, setCurrentChat] =
    useState<Chat | null>(null);

  const refreshChats = () => {
    const data = getChats();

    setChats(data);

    if (
      currentChat &&
      !data.find(
        (chat) => chat.id === currentChat.id
      )
    ) {
      setCurrentChat(null);
    }
  };

  useEffect(() => {
    refreshChats();
  }, []);

  const createNewChat = (
    title?: string
  ): Chat => {
    const chat = createChatStorage({
      title,
    });

    refreshChats();

    setCurrentChat(chat);

    return chat;
  };

  const updateCurrentChat = (chat: Chat) => {
    saveChat(chat);

    refreshChats();

    setCurrentChat(chat);
  };

  const removeCurrentChat = (id: string) => {
    deleteChat(id);

    refreshChats();

    if (currentChat?.id === id) {
      setCurrentChat(null);
    }
  };

  const renameCurrent = (
    id: string,
    title: string
  ) => {
    renameChat(id, title);

    refreshChats();
  };

  const pinCurrent = (id: string) => {
    pinChat(id);

    refreshChats();
  };

  const favoriteCurrent = (id: string) => {
    favoriteChat(id);

    refreshChats();
  };

  const archiveCurrent = (id: string) => {
    archiveChat(id);

    refreshChats();
  };

  const lockCurrent = (id: string) => {
    lockChat(id);

    refreshChats();
  };

  const clearAll = () => {
    clearChats();

    setChats([]);

    setCurrentChat(null);
  };

  const value = useMemo(
    () => ({
      chats,

      currentChat,

      setCurrentChat,

      refreshChats,

      createNewChat,

      updateChat: updateCurrentChat,

      removeChat: removeCurrentChat,

      renameCurrentChat: renameCurrent,

      pinCurrentChat: pinCurrent,

      favoriteCurrentChat: favoriteCurrent,

      archiveCurrentChat: archiveCurrent,

      lockCurrentChat: lockCurrent,

      clearAllChats: clearAll,
    }),
    [chats, currentChat]
  );

  return (
    <ChatContext.Provider value={value}>
      {children}
    </ChatContext.Provider>
  );
}

export function useChat() {
  const context = useContext(ChatContext);

  if (!context) {
    throw new Error(
      "useChat must be used inside ChatProvider."
    );
  }

  return context;
}