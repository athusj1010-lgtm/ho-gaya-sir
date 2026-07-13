// REPLACE ENTIRE FILE
// src/components/Sidebar.tsx

import {
  MessageSquare,
  Image,
  Clock3,
  Settings,
  Shield,
} from "lucide-react";

import SidebarHeader from "./sidebar/SidebarHeader";
import SidebarFooter from "./sidebar/SidebarFooter";
import SidebarItem from "./sidebar/SidebarItem";
import ChatList from "./sidebar/ChatList";

import { useChat } from "../hooks/useChat";

import "./Sidebar.css";

type SidebarProps = {
  open: boolean;
  setSidebarOpen: React.Dispatch<
    React.SetStateAction<boolean>
  >;

  setPrivateMode: React.Dispatch<
    React.SetStateAction<boolean>
  >;

  privateMode: boolean;

  setCurrentPage: React.Dispatch<
    React.SetStateAction<"home" | "vault">
  >;
};

export default function Sidebar({
  open,
  setSidebarOpen,
  setPrivateMode,
  setCurrentPage,
}: SidebarProps) {
  const {
    chats,
    currentChat,
    setCurrentChat,
    createNewChat,
  } = useChat();

  function handleNewChat() {
    const chat = createNewChat("New Chat");

    setCurrentChat(chat);

    setSidebarOpen(false);
  }

  function handleSelectChat() {
    setSidebarOpen(false);
  }

  function openVault() {
    setPrivateMode(true);

    setCurrentPage("vault");

    setSidebarOpen(false);
  }

  function openHistory() {
    console.log("History");
  }

  function openImages() {
    console.log("Images");
  }

  function openSettings() {
    console.log("Settings");
  }

  return (
    <aside
      className={`sidebar ${
        open ? "show" : ""
      }`}
    >
      <SidebarHeader
        onNewChat={handleNewChat}
      />

      <nav className="sidebar-menu">
        <SidebarItem
          icon={<MessageSquare size={18} />}
          label="Chats"
          active
        />

        <SidebarItem
          icon={<Shield size={18} />}
          label="Private Vault"
          onClick={openVault}
        />

        <SidebarItem
          icon={<Image size={18} />}
          label="Images"
          onClick={openImages}
        />

        <SidebarItem
          icon={<Clock3 size={18} />}
          label="History"
          onClick={openHistory}
        />

        <SidebarItem
          icon={<Settings size={18} />}
          label="Settings"
          onClick={openSettings}
        />
      </nav>

      <ChatList
        chats={chats}
        currentId={currentChat?.id}
        onSelect={(chat) => {
          setCurrentChat(chat);

          handleSelectChat();
        }}
      />

      <SidebarFooter />
    </aside>
  );
}