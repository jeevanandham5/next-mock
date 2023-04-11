"use client";
import React from "react";
import useSpeechToText from "react-hook-speech-to-text";
import styles from "../page.module.css";

export default function AnyComponent() {
  const {
    error,
    interimResult,
    isRecording,
    results,
    startSpeechToText,
    stopSpeechToText,
  } = useSpeechToText({
    continuous: true,
    useLegacyResults: false,
  });

  if (error) return <p>Web Speech API is not available in this browser 🤷‍</p>;

  return (
    <main className={styles.main}>
      <h1>Recording: {isRecording.toString()}</h1>
      <button onClick={isRecording ? stopSpeechToText : startSpeechToText}>
        {isRecording ? "Stop Recording" : "Start Recording"}
      </button>
      <ul>
        {results.map((result) => (
          <p key={result.timestamp}>{result.transcript}</p>
        ))}
        {interimResult && <li>{interimResult}</li>}
      </ul>
    </main>
  );
}
