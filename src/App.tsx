// REPLACE ENTIRE FILE
// src/App.tsx

import Home from "./pages/Home";
import PrivateVault from "./pages/PrivateVault";

import { ChatProvider } from "./context/ChatContext";
import { SettingsProvider } from "./context/SettingsContext";
import { VoiceProvider } from "./context/VoiceContext";

import { useState } from "react";

import "./styles/global.css";

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [privateMode, setPrivateMode] = useState(false);

  const [currentPage, setCurrentPage] = useState<
    "home" | "vault"
  >("home");

  return (
    <SettingsProvider>
      <VoiceProvider>
        <ChatProvider>
          {currentPage === "vault" ? (
            <PrivateVault />
          ) : (
            <Home
              sidebarOpen={sidebarOpen}
              setSidebarOpen={setSidebarOpen}
              privateMode={privateMode}
              setPrivateMode={setPrivateMode}
              setCurrentPage={setCurrentPage}
            />
          )}
        </ChatProvider>
      </VoiceProvider>
    </SettingsProvider>
  );
}