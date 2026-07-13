// frontend/src/services/chat.ts

export type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

const API =
  import.meta.env.VITE_API_URL ||
  "http://localhost:5000";

export async function sendMessage(
  message: string,
  history: ChatMessage[] = [],
  file?: File | null
) {
  const formData = new FormData();

  formData.append(
    "message",
    message.trim()
  );

  formData.append(
    "history",
    JSON.stringify(history)
  );

  if (file) {
    formData.append("file", file);
  }

  let response: Response;

  try {
    response = await fetch(`${API}/chat`, {
      method: "POST",
      body: formData,
    });
  } catch {
    throw new Error(
      "Cannot connect to the server."
    );
  }

  let data: any = {};

  try {
    data = await response.json();
  } catch {}

  if (!response.ok) {
    throw new Error(
      data?.error ||
        data?.message ||
        "Request failed."
    );
  }

  return {
    reply:
      data.reply ??
      "No response received.",
  };
}