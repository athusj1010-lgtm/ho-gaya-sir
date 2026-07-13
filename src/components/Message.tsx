import { memo, useEffect, useMemo, useState } from "react";

type Props = {
  role: "user" | "assistant";
  content: string;
  streaming?: boolean;
};

function Message({
  role,
  content,
  streaming = false,
}: Props) {
  const [display, setDisplay] = useState(
    streaming ? "" : content
  );

  useEffect(() => {
    if (!streaming) {
      setDisplay(content);
      return;
    }

    let i = 0;

    setDisplay("");

    const id = setInterval(() => {
      i++;

      setDisplay(content.slice(0, i));

      if (i >= content.length) {
        clearInterval(id);
      }
    }, 12);

    return () => clearInterval(id);
  }, [content, streaming]);

  const text = useMemo(
    () => (streaming ? display : content),
    [streaming, display, content]
  );

  return (
    <div
      className={`message ${role}`}
    >
      <div className="message-content">
        {text}

        {streaming &&
          display.length < content.length && (
            <span className="typing-cursor">
              ▍
            </span>
          )}
      </div>
    </div>
  );
}

export default memo(Message);