import React from "react";
import Speech from "react-speech";

const TextToSpeech = ({ text }) => {
  return (
    <div>
      <h2>Text to Speech</h2>
      <Speech text={text} />
    </div>
  );
};

export default TextToSpeech;
