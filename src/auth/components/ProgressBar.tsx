// frontend/src/auth/components/ProgressBar.tsx

type Props = {
  current: number;
  total: number;
};

export default function ProgressBar({
  current,
  total,
}: Props) {
  const percentage = Math.min(
    100,
    Math.max(0, (current / total) * 100)
  );

  return (
    <div
      style={{
        width: "100%",
        marginBottom: 32,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 10,
          color: "#A1A1AA",
          fontSize: 13,
          fontWeight: 600,
        }}
      >
        <span>
          Step {current} of {total}
        </span>

        <span>
          {Math.round(percentage)}%
        </span>
      </div>

      <div
        style={{
          width: "100%",
          height: 10,
          borderRadius: 999,
          overflow: "hidden",
          background: "rgba(255,255,255,.08)",
        }}
      >
        <div
          style={{
            width: `${percentage}%`,
            height: "100%",
            borderRadius: 999,
            transition: ".35s ease",
            background:
              "linear-gradient(90deg,#7B61FF,#4ECDC4)",
          }}
        />
      </div>
    </div>
  );
}