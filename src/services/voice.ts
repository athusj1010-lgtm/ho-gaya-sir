// frontend/src/services/voice.ts

declare global {
  interface Window {
    SpeechRecognition: any;
    webkitSpeechRecognition: any;
  }
}

class VoiceService {
  private recognition: any = null;

  private listening = false;

  onResult?: (text: string) => void;
  onStart?: () => void;
  onEnd?: () => void;

  constructor() {
    const SpeechRecognition =
      window.SpeechRecognition ||
      window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      console.warn(
        "Speech Recognition is not supported."
      );
      return;
    }

    this.recognition = new SpeechRecognition();

    this.recognition.lang = "en-IN";
    this.recognition.continuous = true;
    this.recognition.interimResults = true;
    this.recognition.maxAlternatives = 1;

    this.recognition.onstart = () => {
      this.listening = true;
      this.onStart?.();
    };

    this.recognition.onend = () => {
      this.listening = false;
      this.onEnd?.();
    };

    this.recognition.onerror = (e: any) => {
      console.error(
        "Speech Recognition Error:",
        e
      );

      this.listening = false;
    };

    this.recognition.onresult = (
      event: any
    ) => {
      let transcript = "";

      for (
        let i = event.resultIndex;
        i < event.results.length;
        i++
      ) {
        transcript +=
          event.results[i][0].transcript;
      }

      this.onResult?.(
        transcript.trim()
      );
    };
  }

  start() {
    if (!this.recognition) return;

    if (this.listening) return;

    try {
      this.recognition.start();
    } catch {}
  }

  stop() {
    if (!this.recognition) return;

    if (!this.listening) return;

    try {
      this.recognition.stop();
    } catch {}
  }

  restart() {
    this.stop();

    setTimeout(() => {
      this.start();
    }, 300);
  }

  isListening() {
    return this.listening;
  }
}

export default new VoiceService();