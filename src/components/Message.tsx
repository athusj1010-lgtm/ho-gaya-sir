import { Bot, User } from "lucide-react";

type Props = {
  role: "user" | "assistant";
  text: string;
};

export default function Message({
  role,
  text,
}: Props) {
  const isUser = role === "user";

  return (
    <div className={`message ${isUser ? "user" : "assistant"}`}>
      {!isUser && (
        <div className="message-avatar ai">
          <Bot size={18} />
        </div>
      )}

      <div className="message-content">
        <div className="message-name">
          {isUser ? "You" : "Ho Gaya Sir"}
        </div>

        <div className="message-bubble">
          {text}
        </div>
      </div>

      {isUser && (
        <div className="message-avatar user">
          <User size={18} />
        </div>
      )}
    </div>
  );
}