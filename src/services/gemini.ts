import { speak } from "./speech";

const CHAT_ID = "main";

export async function askGemini(
  prompt: string,
  gender: "male" | "female" = "male"
): Promise<string> {
  try {
    const response = await fetch("http://localhost:5000/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt,
        chatId: CHAT_ID,
      }),
    });

    const data = await response.json();

    let reply = data.reply ?? "No response";

    reply = reply
      .replace(/[#*_`>-]/g, "")
      .replace(/\[(.*?)\]\((.*?)\)/g, "$1")
      .replace(/https?:\/\/\S+/g, "")
      .replace(
        /[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}]/gu,
        ""
      )
      .replace(/\n{2,}/g, "\n")
      .trim();

    speak(reply, gender);

    return reply;
  } catch (err) {
    console.error(err);
    return "Backend Error";
  }
}