// src/components/Sidebar.tsx

import {
  Plus,
  MessageSquare,
  Image,
  Clock3,
  Settings,
} from "lucide-react";

import "./Sidebar.css";

type SidebarProps = {
  open: boolean;
};

export default function Sidebar({
  open,
}: SidebarProps) {
  return (
    <aside className={`sidebar ${open ? "show" : ""}`}>

      <div className="sidebar-top">

        <div className="sidebar-logo">

          <div className="logo-circle">
            HG
          </div>

          <div className="logo-text">

            <h3>
              Ho Gaya Sir
            </h3>

            <p>
              AI Workspace
            </p>

          </div>

        </div>

        <button
          className="new-btn"
          type="button"
        >
          <Plus size={18} />

          <span>
            New Chat
          </span>
        </button>

      </div>

      <nav className="sidebar-menu">

        <button
          className="sidebar-item active"
          type="button"
        >
          <MessageSquare size={18} />
          <span>Chats</span>
        </button>

        <button
          className="sidebar-item"
          type="button"
        >
          <Image size={18} />
          <span>Images</span>
        </button>

        <button
          className="sidebar-item"
          type="button"
        >
          <Clock3 size={18} />
          <span>History</span>
        </button>

        <button
          className="sidebar-item"
          type="button"
        >
          <Settings size={18} />
          <span>Settings</span>
        </button>

      </nav>

      <div className="sidebar-footer">
        <small>Ho Gaya Sir v1.0</small>
      </div>

    </aside>
  );
}