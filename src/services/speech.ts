// frontend/src/services/speech.ts

class SpeechService {
  private synth = window.speechSynthesis;

  private voice: SpeechSynthesisVoice | null =
    null;

  constructor() {
    if ("speechSynthesis" in window) {
      this.loadVoice();

      window.speechSynthesis.onvoiceschanged =
        () => this.loadVoice();
    }
  }

  private loadVoice() {
    const voices = this.synth.getVoices();

    this.voice =
      voices.find(
        (v) =>
          v.lang === "en-IN" &&
          /google|microsoft|india/i.test(v.name)
      ) ||
      voices.find((v) => v.lang === "en-IN") ||
      voices.find((v) => v.lang === "hi-IN") ||
      voices.find((v) => v.lang.startsWith("en")) ||
      voices[0] ||
      null;
  }

  speak(text: string): Promise<void> {
    return new Promise((resolve) => {
      if (!("speechSynthesis" in window)) {
        resolve();
        return;
      }

      this.stop();

      const clean = text
        .replace(/```[\s\S]*?```/g, "")
        .replace(/`/g, "")
        .replace(/[😀-🙏🌀-🛿🚀-🛿]/gu, "")
        .replace(/\s+/g, " ")
        .trim();

      if (!clean) {
        resolve();
        return;
      }

      const utterance =
        new SpeechSynthesisUtterance(clean);

      utterance.voice = this.voice;

      utterance.lang =
        this.voice?.lang || "en-IN";

      utterance.rate = 1;

      utterance.pitch = 1;

      utterance.volume = 1;

      utterance.onend = () => resolve();

      utterance.onerror = () => resolve();

      this.synth.speak(utterance);
    });
  }

  stop() {
    if (this.synth.speaking) {
      this.synth.cancel();
    }
  }

  isSpeaking() {
    return this.synth.speaking;
  }
}

export default new SpeechService();