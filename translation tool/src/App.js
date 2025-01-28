import React, { useState, useEffect } from "react";
import axios from "axios";
import Translator from "./components/Translator";
import SpeechRecognitionComponent from "./components/SpeechRecognitionComponent";
import TextToSpeech from "./components/TextToSpeech";

const App = () => {
  const [translatedText, setTranslatedText] = useState("");
  const [language, setLanguage] = useState("en"); // Default language: English
  const [inputText, setInputText] = useState("");

  // Handle text translation
  const translateText = async (text) => {
    const apiKey = "YOUR_GOOGLE_TRANSLATE_API_KEY"; // Get API Key from Google Cloud
    const url = `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`;

    try {
      const response = await axios.post(url, {
        q: text,
        target: language,
      });
      setTranslatedText(response.data.data.translations[0].translatedText);
    } catch (error) {
      console.error("Error in translation:", error);
    }
  };

  useEffect(() => {
    if (inputText) {
      translateText(inputText);
    }
  }, [inputText, language]);

  return (
    <div className="App">
      <h1>Translation Tool</h1>
      <div className="translator">
        <textarea
          placeholder="Enter text to translate"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <select onChange={(e) => setLanguage(e.target.value)}>
          <option value="en">English</option>
          <option value="es">Spanish</option>
          <option value="fr">French</option>
          <option value="de">German</option>
          {/* Add more languages */}
        </select>
        <button onClick={() => translateText(inputText)}>Translate</button>
        <div className="translated-text">
          <h3>Translated Text:</h3>
          <p>{translatedText}</p>
        </div>
      </div>

      <SpeechRecognitionComponent setInputText={setInputText} />
      <TextToSpeech text={translatedText} />
    </div>
  );
};

export default App;
