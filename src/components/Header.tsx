// src/components/Header.tsx

import { AlignJustify, User, Mic, Shield } from "lucide-react";
import "./Header.css";

type Props = {
  onMenuClick: () => void;
  privateMode: boolean;
  onVoiceClick: () => void;
};

export default function Header({
  onMenuClick,
  privateMode,
  onVoiceClick,
}: Props) {
  return (
    <header className="header">

      <div className="header-left">

        <button
          className="menu-btn"
          type="button"
          onClick={onMenuClick}
        >
          <AlignJustify size={22} strokeWidth={2.3} />
        </button>

        <div className="header-logo">

          <div className="logo-circle">
            H
          </div>

          <div className="logo-text">
            <h2>Ho Gaya Sir</h2>
            <span>AI Workspace</span>
          </div>

        </div>

        {privateMode && (
          <div className="private-badge">
            <Shield size={14} />
            <span>Private Chat</span>
          </div>
        )}

      </div>

      <div className="header-right">

        <button
          className="voice-btn"
          type="button"
          onClick={onVoiceClick}
        >
          <Mic size={16} strokeWidth={2.3} />
          <span>Voice Mode</span>
        </button>

        <button
          className="profile-btn"
          type="button"
        >
          <div className="profile-avatar">
            <User size={18} />
          </div>
        </button>

      </div>

    </header>
  );
}