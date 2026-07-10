function cleanText(text: string) {
  return text
    .replace(/```[\s\S]*?```/g, "")
    .replace(/`([^`]*)`/g, "$1")
    .replace(/\*\*(.*?)\*\*/g, "$1")
    .replace(/\*(.*?)\*/g, "$1")
    .replace(/__(.*?)__/g, "$1")
    .replace(/_(.*?)_/g, "$1")
    .replace(/#+\s/g, "")
    .replace(/\[(.*?)\]\((.*?)\)/g, "$1")
    .replace(/https?:\/\/\S+/g, "")
    .replace(/<[^>]*>/g, "")
    .replace(
      /[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}\u{FE0F}]/gu,
      ""
    )
    .replace(/[•▪■▶►]/g, "")
    .replace(/\|/g, "")
    .replace(/\n+/g, ". ")
    .replace(/\s+/g, " ")
    .trim();
}

export function speak(
  text: string,
  gender: "male" | "female" = "male"
) {
  const finalText = cleanText(text);

  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(finalText);

  const voices = window.speechSynthesis.getVoices();

  let voice =
    voices.find(
      (v) =>
        /en-IN|hi-IN/i.test(v.lang) &&
        (gender === "male"
          ? /male|hemant|ravi|india/i.test(v.name)
          : /female|veena|kalpana|india/i.test(v.name))
    ) ||
    voices.find((v) => /en-IN|hi-IN/i.test(v.lang)) ||
    voices[0];

  utterance.voice = voice;
  utterance.rate = 1;
  utterance.pitch = 1;
  utterance.volume = 1;

  window.speechSynthesis.speak(utterance);
}