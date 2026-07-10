type StatusCardProps = {
  status: string;
};

function StatusCard({ status }: StatusCardProps) {
  return (
    <div
      style={{
        background: "#1E293B",
        padding: "20px",
        borderRadius: "15px",
        margin: "20px 0",
        textAlign: "center",
        border: "1px solid #334155",
      }}
    >
      <h3
        style={{
          color: "#38BDF8",
          marginBottom: "10px",
        }}
      >
        🤖 Status
      </h3>

      <p
        style={{
          color: "white",
          fontSize: "20px",
          margin: 0,
        }}
      >
        {status}
      </p>
    </div>
  );
}

export default StatusCard;