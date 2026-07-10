import { Menu, Plus, User } from "lucide-react";

export default function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <button className="icon-btn">
          <Menu size={22} />
        </button>

        <div className="brand">
          <div className="brand-logo">H</div>

          <div className="brand-text">
            <h1>Ho Gaya Sir</h1>
            <span>AI Work Partner</span>
          </div>
        </div>
      </div>

      <div className="header-right">
        <button className="new-chat-btn">
          <Plus size={18} />
          <span>New Chat</span>
        </button>

        <button className="profile-btn">
          <User size={20} />
        </button>
      </div>
    </header>
  );
}