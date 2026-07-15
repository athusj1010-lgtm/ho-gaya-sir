// src/pages/VoiceMode.tsx

import speech from "../services/speech";
import { useEffect, useRef, useState } from "react";
import {
  Mic,
  MicOff,
  MessageSquare,
  ChevronRight,
  X,
} from "lucide-react";

import "./VoiceMode.css";

import { openHome } from "../services/navigation";
import { useVoiceContext } from "../context/VoiceContext";
import { sendMessage } from "../services/chat";

export default function VoiceMode() {
  const {
    voice,
    setVoice,
    resetVoice,
  } = useVoiceContext();

  const recognitionRef =
    useRef<any>(null);

  const recognitionRunning =
    useRef(false);

  const shouldListen =
    useRef(true);

  const micEnabledRef =
    useRef(true);

  const [micEnabled, setMicEnabled] =
    useState(true);

  const [showChat, setShowChat] =
    useState(false);

  useEffect(() => {
    micEnabledRef.current =
      micEnabled;
  }, [micEnabled]);

  useEffect(() => {
    const SpeechRecognition =
      (window as any)
        .SpeechRecognition ||
      (window as any)
        .webkitSpeechRecognition;

    if (!SpeechRecognition) {
      setVoice({
        status: "error",
        error:
          "Speech Recognition is not supported.",
      });

      return;
    }

    const recognition =
      new SpeechRecognition();

    recognitionRef.current =
      recognition;

    recognition.lang = "en-IN";
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.maxAlternatives = 1;

    recognition.onstart = () => {
      recognitionRunning.current =
        true;

      setVoice({
        status: "listening",
        isListening: true,
        isSpeaking: false,
        error: "",
      });
    };

    recognition.onresult =
      async (event: any) => {
        let finalText = "";
        let interim = "";

        for (
          let i = event.resultIndex;
          i < event.results.length;
          i++
        ) {
          const result =
            event.results[i];

          if (result.isFinal) {
            finalText +=
              result[0].transcript + " ";
          } else {
            interim +=
              result[0].transcript;
          }
        }

        setVoice({
          transcript:
            finalText.trim(),
          interimTranscript:
            interim,
        });

        if (!finalText.trim())
          return;

        if (
          recognitionRunning.current
        ) {
          try {
            recognition.stop();
          } catch {}

          recognitionRunning.current =
            false;
        }

        setVoice({
          status: "processing",
          isListening: false,
        });

        try {
          const { reply } =
            await sendMessage(
              finalText.trim()
            );

          setVoice({
            status: "speaking",
            response: reply,
            isSpeaking: true,
          });

          await speech.speak(reply);
                    setVoice({
            status: "listening",
            transcript: "",
            interimTranscript: "",
            response: "",
            isSpeaking: false,
          });

          if (
            shouldListen.current &&
            micEnabledRef.current
          ) {
            setTimeout(() => {
              if (
                !recognitionRunning.current
              ) {
                try {
                  recognition.start();
                } catch {}
              }
            }, 150);
          }

        } catch (err: any) {

          setVoice({
            status: "error",
            error:
              err.message ??
              "Connection Error",
            isSpeaking: false,
          });

          setTimeout(() => {

            if (
              shouldListen.current &&
              micEnabledRef.current
            ) {

              setVoice({
                status: "listening",
                error: "",
              });

              if (
                !recognitionRunning.current
              ) {
                try {
                  recognition.start();
                } catch {}
              }

            }

          }, 1000);

        }

      };

      recognition.onerror = () => {

        recognitionRunning.current =
          false;

        setVoice({
          status: "error",
          isListening: false,
        });

      };
      // =======================
// PART 3 / 6
// =======================

      recognition.onend = () => {

        recognitionRunning.current =
          false;

        if (
          !shouldListen.current
        )
          return;

        if (
          !micEnabledRef.current
        )
          return;

        if (
          speech.isSpeaking()
        )
          return;

        setTimeout(() => {

          if (
            !recognitionRunning.current
          ) {
            try {
              recognition.start();
            } catch {}
          }

        }, 200);

      };

      try {
        recognition.start();
      } catch {}

      return () => {

        shouldListen.current =
          false;

        recognitionRunning.current =
          false;

        try {
          recognition.abort();
        } catch {}

        speech.stop();

        
        resetVoice();

      };

  }, []);

  function toggleMic() {

    const recognition =
      recognitionRef.current;

    if (!recognition) return;

    if (micEnabled) {

      shouldListen.current =
        false;

      micEnabledRef.current =
        false;

      setMicEnabled(false);

      try {
        recognition.abort();
      } catch {}

      speech.stop();

      setVoice({
        status: "idle",
        isListening: false,
        isSpeaking: false,
      });

      return;

    }

    shouldListen.current =
      true;

    micEnabledRef.current =
      true;

    setMicEnabled(true);

    setVoice({
      status: "listening",
      error: "",
    });

    try {
      recognition.start();
    } catch {}

  }
  // =======================
// PART 4 / 6
// =======================

  function endVoiceMode() {

    shouldListen.current =
      false;

    micEnabledRef.current =
      false;

    recognitionRunning.current =
      false;

    try {
      recognitionRef.current?.abort();
    } catch {}

    speech.stop();

    clearHistory();

    resetVoice();

    openHome();

  }

  const orbClass =
    voice.status === "listening"
      ? "listening"
      : voice.status === "processing"
      ? "thinking"
      : voice.status === "speaking"
      ? "speaking"
      : voice.status === "error"
      ? "error"
      : "";

  const statusText =
    !micEnabled
      ? "Microphone Off"
      : voice.status === "listening"
      ? "Listening..."
      : voice.status === "processing"
      ? "Thinking..."
      : voice.status === "speaking"
      ? "Speaking..."
      : voice.status === "error"
      ? "Connection Error"
      : "Ready";

  return (
    <main className="voice-mode">

      <button
        className="voice-close"
        onClick={endVoiceMode}
      >
        <X size={20} />
      </button>

      <div className="voice-content">

        <div
          className={`voice-orb ${orbClass}`}
        >
          <div className="orb-ring ring-1" />
          <div className="orb-ring ring-2" />
          <div className="orb-ring ring-3" />

          <div className="orb-core">
            <Mic size={54} />
          </div>
        </div>

        <h1>ORBITAL</h1>

        <p className="voice-status">
          {statusText}
        </p>
        

        <div className="voice-actions">

          <button
            className={`mic-toggle ${
              micEnabled
                ? "active"
                : "inactive"
            }`}
            onClick={toggleMic}
          >
            {micEnabled ? (
              <Mic size={18} />
            ) : (
              <MicOff size={18} />
            )}

            <span>
              {micEnabled
                ? "Mic ON"
                : "Mic OFF"}
            </span>

          </button>

          <button
            className="chat-toggle"
            onClick={() =>
              setShowChat(
                !showChat
              )
            }
          >
            <MessageSquare
              size={18}
            />

            <span>
              View Chat
            </span>

          </button>

        </div>

        {showChat && (

          <div className="chat-panel">

            <div className="chat-header">

              <h3>
                Conversation
              </h3>

              <button
                className="chat-close"
                onClick={() =>
                  setShowChat(
                    false
                  )
                }
              >
                <X size={18} />
              </button>

            </div>

            <div className="chat-body">

              {voice.transcript && (

                <div className="chat-user">

                  <strong>You</strong>

                  <p>
                    {voice.transcript}
                  </p>

                </div>

              )}

              {voice.response && (

                <div className="chat-ai">

                  <strong>ORBITAL</strong>

                  <p>
                    {voice.response}
                  </p>

                </div>

              )}

              {!voice.transcript &&
                !voice.response && (

                <div className="chat-empty">

                  Start talking to ORBITAL...

                </div>

              )}

            </div>

          </div>

        )}

        <button
          className="voice-end"
          onClick={endVoiceMode}
        >
          End Session
        </button>

      </div>

    </main>
  );
}