import React, { useState } from "react";

const Translator = () => {
  const [inputText, setInputText] = useState(""); // Define inputText in state
  const [outputText, setOutputText] = useState(""); // State for translated text

  const handleTranslate = async () => {
    // Add logic for translation, e.g., API call
    const translatedText = `Translated version of: ${inputText}`; // Example
    setOutputText(translatedText);
  };

  return (
    <div>
      <h1>Translator</h1>
      <textarea
        value={inputText}
        onChange={(e) => setInputText(e.target.value)} // Update inputText
        placeholder="Enter text to translate"
      />
      <button onClick={handleTranslate}>Translate</button>
      <textarea
        value={outputText}
        readOnly
        placeholder="Translation will appear here"
      />
    </div>
  );
};

export default Translator;
