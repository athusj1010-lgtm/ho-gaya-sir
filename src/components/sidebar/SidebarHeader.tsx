// REPLACE ENTIRE FILE
// src/components/sidebar/SidebarHeader.tsx

import { Plus } from "lucide-react";

type Props = {
  onNewChat: () => void;
};

export default function SidebarHeader({
  onNewChat,
}: Props) {
  return (
    <div className="sidebar-top">
      <div className="sidebar-logo">
        <div className="logo-circle">
          HG
        </div>

        <div className="logo-text">
          <h3>Ho Gaya Sir</h3>
          <p>Your AI Workspace</p>
        </div>
      </div>

      <button
        type="button"
        className="new-btn"
        onClick={onNewChat}
      >
        <Plus size={18} />

        <span>New Chat</span>
      </button>
    </div>
  );
}