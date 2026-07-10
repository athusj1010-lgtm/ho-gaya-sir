import { useState } from "react";
import { ArrowUp, Mic, Paperclip, Sparkles } from "lucide-react";
import { sendMessage } from "../services/chat";

type Message = {
  role: "user" | "assistant";
  content: string;
};

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSend() {
    if (!input.trim() || loading) return;

    const userMessage: Message = {
      role: "user",
      content: input,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const data = await sendMessage(userMessage.content);

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: data.reply,
        },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Something went wrong.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="chat">
      {messages.length === 0 ? (
        <section className="hero">
          <div className="hero-icon">
            <Sparkles size={34} />
          </div>

          <div className="hero-badge">
            HO GAYA SIR
          </div>

          <h1>
            Your AI that
            <br />
            actually gets work done.
          </h1>

          <p>
            Code. Study. Research. Build.
            <br />
            One AI for everything.
          </p>
        </section>
      ) : (
        <section className="messages">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`message ${msg.role}`}
            >
              {msg.content}
            </div>
          ))}

          {loading && (
            <div className="message assistant">
              Thinking...
            </div>
          )}
        </section>
      )}

      <section className="composer">
        <textarea
          placeholder="Ask anything..."
          rows={1}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              handleSend();
            }
          }}
        />

        <div className="composer-footer">
          <div className="tools">
            <button className="tool-btn">
              <Paperclip size={18} />
            </button>

            <button className="tool-btn">
              <Mic size={18} />
            </button>
          </div>

          <button
            className="send-btn"
            onClick={handleSend}
            disabled={loading}
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </section>
    </main>
  );
}