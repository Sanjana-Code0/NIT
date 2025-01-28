import React, { useState } from "react";

const TextInput = ({ onAddText }) => {
  const [text, setText] = useState("");

  const handleAddText = () => {
    onAddText(text);
    setText("");
  };

  return (
    <div style={{ margin: "10px 0" }}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text..."
        style={{ padding: "5px" }}
      />
      <button onClick={handleAddText} style={{ marginLeft: "5px", cursor: "pointer" }}>
        Add Text
      </button>
    </div>
  );
};

export default TextInput;

