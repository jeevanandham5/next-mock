"use client";
import React, { useState } from "react";
import styles from "../page.module.css";
import { useSpeechSynthesis } from "react-speech-kit";
import { Button, Stack } from "@mui/material";

const Voice = () => {
  //for text to speech
  const [text, setText] = useState("");
  const { speak, cancel } = useSpeechSynthesis("");

  const handleonclick = () => {
    speak({ text: text });
  };
  const handleonclick2 = () => {
    if (speak) {
      cancel();
    }
  };
  //for speech to text

  return (
    <>
      <main className={styles.Voice}>
        <h1>Voice</h1>
        <textarea
          className={styles.input}
          label="Type your text here"
          onChange={(e) => {
            setText(e.target.value);
          }}
          sx={{ width: "400px", minHeight: "400px" }}
        ></textarea>

        <Stack direction={"row"} spacing={4}>
          <Button
            variant="contained"
            color="success"
            onClick={() => {
              handleonclick();
            }}
          >
            start
          </Button>
          <Button
            variant="contained"
            color="error"
            onClick={() => {
              handleonclick2();
            }}
          >
            stop
          </Button>
        </Stack>
      </main>
    </>
  );
};

export default Voice;
