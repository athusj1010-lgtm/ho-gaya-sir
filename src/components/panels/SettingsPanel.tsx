// frontend/src/components/panels/SettingsPanel.tsx

import {
  X,
  Moon,
  Languages,
  Volume2,
  Trash2,
  Shield,
  Info,
  ChevronRight,
} from "lucide-react";

type SettingsPanelProps = {
  open: boolean;
  onClose: () => void;
};

export default function SettingsPanel({
  open,
  onClose,
}: SettingsPanelProps) {
  if (!open) return null;

  return (
    <>
      <div
        className="sidebar-overlay"
        onClick={onClose}
      />

      <aside className="sidebar">

        <div className="sidebar-top">

          <div className="sidebar-logo">
            <Moon size={22} />
          </div>

          <div className="sidebar-title">
            <h2>Settings</h2>
            <span>Customize your workspace</span>
          </div>

          <button
            className="sidebar-close"
            onClick={onClose}
          >
            <X size={20} />
          </button>

        </div>

        <div className="sidebar-section">

          <button className="sidebar-item">
            <Moon size={18}/>
            <span>Appearance</span>
            <ChevronRight size={16}/>
          </button>

          <button className="sidebar-item">
            <Volume2 size={18}/>
            <span>Voice Settings</span>
            <ChevronRight size={16}/>
          </button>

          <button className="sidebar-item">
            <Languages size={18}/>
            <span>Language</span>
            <ChevronRight size={16}/>
          </button>

          <button className="sidebar-item">
            <Shield size={18}/>
            <span>Privacy</span>
            <ChevronRight size={16}/>
          </button>

          <button className="sidebar-item">
            <Trash2 size={18}/>
            <span>Clear Conversations</span>
            <ChevronRight size={16}/>
          </button>

          <button className="sidebar-item">
            <Info size={18}/>
            <span>About</span>
            <ChevronRight size={16}/>
          </button>

        </div>

      </aside>

    </>
  );
}