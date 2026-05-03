"use client";
import { useEffect, useRef, useState } from "react";

type UseSpeechToTextOptions = {
  continuous?: boolean;
  interimResults?: boolean;
  lang?: string;
  onStop?: ()=>void
};

export function useSpeechToText(options?: UseSpeechToTextOptions) {
  const {
    continuous = true,
    interimResults = true,
    lang = "en-US",
    onStop
  } = options || {};

  const recognitionRef = useRef<any>(null);

  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [interimTranscript, setInterimTranscript] = useState("");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const SpeechRecognition =
      (window as any).SpeechRecognition ||
      (window as any).webkitSpeechRecognition;

    if (!SpeechRecognition) {
      setError("Speech Recognition not supported in this browser");
      return;
    }

    const recognition = new SpeechRecognition();

    recognition.continuous = continuous;
    recognition.interimResults = interimResults;
    recognition.lang = lang;

    recognition.onstart = () => {
      setIsListening(true);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognition.onerror = (event: any) => {
      setError(event.error);
    };

    recognition.onresult = (event: SpeechRecognitionEvent) => {
      let finalTranscript = "";
      let interim = "";

      for (let i = event.resultIndex; i < event.results.length; i++) {
        const result = event.results[i];
        const text = result[0].transcript;

        if (result.isFinal) {
          finalTranscript += text + " ";
        } else {
          interim += text;
        }
      }

      if (finalTranscript) {
        setTranscript((prev) => prev + finalTranscript);
      }

      setInterimTranscript(interim);
    };

    recognitionRef.current = recognition;

    return () => {
      recognition.stop();
    };
  }, [continuous, interimResults, lang]);

  const startListening = () => {
    if (!recognitionRef.current) return;
    setError(null);
    recognitionRef.current.start();
  };

  const stopListening = () => {
    recognitionRef.current?.stop();
    onStop?.();
  };

  const resetTranscript = () => {
    setTranscript("");
    setInterimTranscript("");
  };

  return {
    isListening,
    transcript,
    interimTranscript,
    error,
    startListening,
    stopListening,
    resetTranscript,
  };
}
