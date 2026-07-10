export async function sendMessage(message: string) {
  const res = await fetch("http://localhost:5000/chat", {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({
      message,
    }),
  });

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
}
