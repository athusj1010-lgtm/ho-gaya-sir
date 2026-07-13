// REPLACE ENTIRE FILE
// src/components/sidebar/SidebarItem.tsx

import type { ReactNode } from "react";

type SidebarItemProps = {
  icon: ReactNode;
  label: string;
  active?: boolean;
  badge?: string | number;
  onClick?: () => void;
};

export default function SidebarItem({
  icon,
  label,
  active = false,
  badge,
  onClick,
}: SidebarItemProps) {
  return (
    <button
      type="button"
      className={`sidebar-item ${active ? "active" : ""}`}
      onClick={onClick}
    >
      <div className="sidebar-item-left">
        <span className="sidebar-icon">{icon}</span>
        <span className="sidebar-label">{label}</span>
      </div>

      {badge !== undefined && (
        <span className="sidebar-badge">
          {badge}
        </span>
      )}
    </button>
  );
}