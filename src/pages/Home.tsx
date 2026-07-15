// REPLACE ENTIRE FILE
// src/pages/Home.tsx

import { useState } from "react";

import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Hero from "../components/Hero";
import PromptCards from "../components/PromptCards";
import BottomBar from "../components/BottomBar";

import ChatPage from "./ChatPage";

import { useChat } from "../hooks/useChat";

import "./Home.css";

type HomeProps = {
  sidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<
    React.SetStateAction<boolean>
  >;

  privateMode: boolean;
  setPrivateMode: React.Dispatch<
    React.SetStateAction<boolean>
  >;

  setCurrentPage: React.Dispatch<
  React.SetStateAction<
    "home" | "vault" | "voice"
  >
>;
};

export default function Home({
  sidebarOpen,
  setSidebarOpen,
  privateMode,
  setPrivateMode,
  setCurrentPage,
}: HomeProps) {
  const { currentChat } = useChat();

  const [showLanding, setShowLanding] =
    useState(true);

  return (
    <main className="home">
      <Header
    onMenuClick={() =>
      setSidebarOpen(!sidebarOpen)
    }
    privateMode={privateMode}
    onVoiceClick={() =>
      setCurrentPage("voice")
    }
/>
      <Sidebar
        open={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        setPrivateMode={setPrivateMode}
        privateMode={privateMode}
        setCurrentPage={setCurrentPage}
      />

      {sidebarOpen && (
        <div
          className="sidebar-overlay"
          onClick={() =>
            setSidebarOpen(false)
          }
        />
      )}

      <section className="home-content">
        {!currentChat && showLanding ? (
          <>
            <Hero />

            <PromptCards />

            <BottomBar />
          </>
        ) : (
          <ChatPage />
        )}
      </section>
    </main>
  );
}