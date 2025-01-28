import React from "react";

const Button = ({ label }) => {
  return (
    <button
      className="button"
      style={{
        padding: "10px 20px",
        backgroundColor: "#4CAF50",
        color: "#fff",
      }}
    >
      {label}
    </button>
  );
};

export default Button;
