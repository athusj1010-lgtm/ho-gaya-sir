// frontend/src/auth/components/RoleCard.tsx

import type { RoleItem } from "../data/roles";

type Props = {
  role: RoleItem;
  selected: boolean;
  onClick: () => void;
};

export default function RoleCard({
  role,
  selected,
  onClick,
}: Props) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        width: "100%",
        padding: 20,
        borderRadius: 22,
        cursor: "pointer",
        textAlign: "left",

        border: selected
          ? `2px solid ${role.color}`
          : "1px solid rgba(255,255,255,.08)",

        background: selected
          ? "rgba(255,255,255,.08)"
          : "rgba(255,255,255,.04)",

        transition: ".25s",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 16,
        }}
      >
        <div
          style={{
            width: 58,
            height: 58,
            borderRadius: 18,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 28,
            background: role.color,
          }}
        >
          {role.emoji}
        </div>

        <div>
          <h3
            style={{
              margin: 0,
              color: "#fff",
              fontSize: 18,
              fontWeight: 700,
            }}
          >
            {role.title}
          </h3>

          <p
            style={{
              marginTop: 6,
              marginBottom: 0,
              color: "#9CA3AF",
              fontSize: 14,
            }}
          >
            {role.subtitle}
          </p>
        </div>
      </div>
    </button>
  );
}