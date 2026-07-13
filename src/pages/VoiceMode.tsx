// frontend/src/pages/VoiceMode.tsx

import { useEffect, useState } from "react";
import {
  Mic,
  PhoneOff,
  MessageSquare,
  Sparkles,
} from "lucide-react";

import { openHome } from "../services/navigation";

import voice from "../services/voice";
import speech from "../services/speech";

import {
  sendMessage,
  type ChatMessage,
} from "../services/chat";

export default function VoiceMode() {
  const [status, setStatus] = useState<
    "Listening..." |
    "Thinking..." |
    "Speaking..." |
    "Stopped"
  >("Listening...");

  const [userText, setUserText] = useState("");

  const [aiText, setAiText] = useState(
    "I'm listening..."
  );

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    voice.onStart = () => {
      setStatus("Listening...");
    };

    voice.onEnd = () => {
      setStatus("Stopped");
    };

    voice.onResult = (text: string) => {
      setUserText(text);

      clearTimeout(timer);

      timer = setTimeout(async () => {
        if (!text.trim()) return;

        try {
          voice.stop();

          setStatus("Thinking...");

          const history: ChatMessage[] = [];

          const data = await sendMessage(
            text,
            history
          );

          setAiText(data.reply);

          setStatus("Speaking...");

          await speech.speak(data.reply);

          setStatus("Listening...");

          voice.start();
        } catch {
          setAiText(
            "Something went wrong."
          );

          setStatus("Listening...");

          voice.start();
        }
      }, 700);
    };

    voice.start();

    return () => {
      clearTimeout(timer);

      speech.stop();
      voice.stop();

      voice.onResult = undefined;
      voice.onStart = undefined;
      voice.onEnd = undefined;
    };
  }, []);

  return (
    <main
      style={{
        minHeight: "100vh",

        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        padding: 30,

        background:
          "radial-gradient(circle at top,#1A1D38,#060816)",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 760,

          borderRadius: 34,

          padding: 42,

          textAlign: "center",

          background:
            "rgba(255,255,255,.05)",

          border:
            "1px solid rgba(255,255,255,.08)",

          backdropFilter: "blur(24px)",
        }}
      >
        <div
          style={{
            display: "inline-flex",
            gap: 8,
            alignItems: "center",

            padding: "8px 18px",

            borderRadius: 999,

            background:
              "rgba(99,102,241,.12)",

            color: "#C7D2FE",

            fontWeight: 700,

            marginBottom: 26,
          }}
        >
          <Sparkles size={16} />
          VOICE MODE
        </div>

        <div
          style={{
            width: 170,
            height: 170,

            margin: "0 auto",

            borderRadius: "50%",

            display: "grid",
            placeItems: "center",

            background:
              "linear-gradient(135deg,#6366F1,#3B82F6)",

            boxShadow:
              "0 0 80px rgba(99,102,241,.45)",
          }}
        >
          <Mic size={56} color="#fff" />
        </div>

        <h1
          style={{
            marginTop: 34,
            color: "#fff",
            fontSize: 42,
          }}
        >
          {status}
        </h1>

        <p
          style={{
            color: "#94A3B8",
            marginTop: 12,
          }}
        >
          Speak naturally. Ho Gaya Sir is listening.
        </p>

        <div
          style={{
            marginTop: 36,

            textAlign: "left",

            padding: 22,

            borderRadius: 20,

            background:
              "rgba(255,255,255,.04)",
          }}
        >
          <strong
            style={{
              color: "#A5B4FC",
            }}
          >
            You
          </strong>

          <p
            style={{
              color: "#fff",
              marginTop: 10,
            }}
          >
            {userText || "..."}
          </p>
        </div>

        <div
          style={{
            marginTop: 18,

            textAlign: "left",

            padding: 22,

            borderRadius: 20,

            background:
              "rgba(255,255,255,.04)",
          }}
        >
          <strong
            style={{
              color: "#60A5FA",
            }}
          >
            Ho Gaya Sir
          </strong>

          <p
            style={{
              color: "#fff",
              marginTop: 10,
            }}
          >
            {aiText}
          </p>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 16,
            marginTop: 34,
            flexWrap: "wrap",
          }}
        >
          <button
            onClick={openHome}
            style={secondaryBtn}
          >
            <MessageSquare size={18} />
            Open Chat
          </button>

          <button
            onClick={() => {
              speech.stop();
              voice.stop();
              openHome();
            }}
            style={dangerBtn}
          >
            <PhoneOff size={18} />
            End Conversation
          </button>
        </div>
      </div>
    </main>
  );
}

const secondaryBtn: React.CSSProperties = {
  height: 54,
  padding: "0 24px",

  borderRadius: 16,

  border: "none",

  background: "#1F2937",

  color: "#fff",

  display: "flex",
  alignItems: "center",
  gap: 10,

  cursor: "pointer",

  fontWeight: 600,
};

const dangerBtn: React.CSSProperties = {
  ...secondaryBtn,

  background:
    "linear-gradient(135deg,#EF4444,#DC2626)",
};