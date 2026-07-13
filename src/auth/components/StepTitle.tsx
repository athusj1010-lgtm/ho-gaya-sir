// frontend/src/auth/components/StepTitle.tsx

type Props = {
  title: string;
  subtitle?: string;
};

export default function StepTitle({
  title,
  subtitle,
}: Props) {
  return (
    <div
      style={{
        marginBottom: 38,
        textAlign: "center",
      }}
    >
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          padding: "8px 16px",
          marginBottom: 18,
          borderRadius: 999,
          border: "1px solid rgba(255,255,255,.08)",
          background: "rgba(255,255,255,.05)",
          color: "#A5B4FC",
          fontSize: 13,
          fontWeight: 700,
          letterSpacing: 1.2,
        }}
      >
        HO GAYA SIR
      </div>

      <h1
        style={{
          margin: 0,
          color: "#fff",
          fontSize: 40,
          fontWeight: 800,
          lineHeight: 1.1,
          letterSpacing: "-0.03em",
        }}
      >
        {title}
      </h1>

      {subtitle && (
        <p
          style={{
            maxWidth: 420,
            margin: "16px auto 0",
            color: "#94A3B8",
            fontSize: 16,
            lineHeight: 1.75,
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}