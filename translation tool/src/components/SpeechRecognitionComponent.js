import React, { useEffect } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const SpeechRecognitionComponent = ({ setInputText }) => {
  const { transcript, resetTranscript, listening } = useSpeechRecognition();

  useEffect(() => {
    if (transcript) {
      setInputText(transcript);
    }
  }, [transcript, setInputText]);

  return (
    <div>
      <h2>Speech to Text</h2>
      <button onClick={() => SpeechRecognition.startListening()}>
        Start Listening
      </button>
      <button onClick={() => resetTranscript()}>Reset</button>
      <p>{listening ? "Listening..." : "Not Listening"}</p>
      <div>
        <h3>Transcript:</h3>
        <p>{transcript}</p>
      </div>
    </div>
  );
};

export default SpeechRecognitionComponent;
