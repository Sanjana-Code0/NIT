import React from "react";

const Toolbar = () => {
  const downloadImage = () => {
    const canvas = document.querySelector("canvas");
    const link = document.createElement("a");
    link.download = "canvas-drawing.png";
    link.href = canvas.toDataURL();
    link.click();
  };

  return (
    <div style={{ display: "flex", padding: "10px", background: "#333", color: "white" }}>
      <button onClick={downloadImage} style={{ margin: "0 10px", cursor: "pointer" }}>
        Export PNG
      </button>
      <button style={{ margin: "0 10px", cursor: "pointer" }}>Undo</button>
      <button style={{ margin: "0 10px", cursor: "pointer" }}>Redo</button>
    </div>
  );
};

export default Toolbar;
