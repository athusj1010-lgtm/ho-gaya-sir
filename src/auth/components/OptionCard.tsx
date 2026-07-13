// frontend/src/auth/components/OptionCard.tsx

type Props = {
  title: string;
  subtitle?: string;
  selected: boolean;
  onClick: () => void;
};

export default function OptionCard({
  title,
  subtitle,
  selected,
  onClick,
}: Props) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        width: "100%",
        padding: 18,
        marginBottom: 14,
        borderRadius: 18,
        cursor: "pointer",
        textAlign: "left",
        transition: ".25s",

        border: selected
          ? "2px solid #7B61FF"
          : "1px solid rgba(255,255,255,.08)",

        background: selected
          ? "rgba(123,97,255,.18)"
          : "rgba(255,255,255,.04)",
      }}
    >
      <div
        style={{
          color: "#fff",
          fontSize: 17,
          fontWeight: 700,
        }}
      >
        {title}
      </div>

      {subtitle && (
        <div
          style={{
            marginTop: 6,
            color: "#9CA3AF",
            fontSize: 14,
          }}
        >
          {subtitle}
        </div>
      )}
    </button>
  );
}