import {
  Plus,
  Search,
  MessageSquare,
  Clock,
  Star,
  Trash2
} from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <button className="new-chat-btn">
        <Plus size={18} />
        <span>New Chat</span>
      </button>

      <div className="search-box">
        <Search size={16} />
        <input
          type="text"
          placeholder="Search conversations..."
        />
      </div>

      <div className="sidebar-title">
        Recent Chats
      </div>

      <div className="chat-history">

        <button className="history-item active">
          <MessageSquare size={16} />
          <span>General Chat</span>
        </button>

        <button className="history-item">
          <Clock size={16} />
          <span>Yesterday</span>
        </button>

        <button className="history-item">
          <Star size={16} />
          <span>Important</span>
        </button>

      </div>

      <div className="sidebar-footer">

        <button className="history-item">
          <Trash2 size={16} />
          <span>Clear Chats</span>
        </button>

      </div>
    </aside>
  );
}