import { useState } from "react";

function App() {
  const [listening, setListening] = useState(false);

  function startListening() {
    setListening(true);
  }

  return (
    <div
      style={{
        height: "100vh",
        background: "#0f172a",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        fontFamily: "Arial",
      }}
    >
      <h1>🎤 Ho Gaya Sir</h1>

      <p>
        {listening ? "Okay Sir... Sun raha hoon 🎙️" : "Boliye Sir..."}
      </p>

      <button
        onClick={startListening}
        style={{
          padding: "15px 30px",
          fontSize: "18px",
          borderRadius: "10px",
          border: "none",
          cursor: "pointer",
          marginTop: "20px",
        }}
      >
        {listening ? "Listening..." : "Start Listening"}
      </button>
    </div>
  );
}

export default App;