import "./Composer.css";

import {
  Paperclip,
  Mic,
  SendHorizontal,
} from "lucide-react";

export default function Composer() {
  return (
    <div className="composer">

      <textarea
        placeholder="Ask anything..."
      />

      <div className="composer-bottom">

        <div className="composer-tools">

          <button className="tool-btn">
            <Paperclip size={22} />
          </button>

          <button className="tool-btn">
            <Mic size={22} />
          </button>

        </div>

        <button className="send-btn">
          <SendHorizontal size={22} />
        </button>

      </div>

      <div className="privacy-tag">
        🛡 Your data is private and secure
      </div>

    </div>
  );
}