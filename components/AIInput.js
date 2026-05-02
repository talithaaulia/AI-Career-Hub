// USER INPUT

import { useState } from "react";

export default function AIInput({ onSubmit }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    onSubmit(input);
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "flex", gap: "10px", marginTop: "20px" }}
    >
      <input
        type="text"
        placeholder="Masukkan skill atau goal-mu"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{
          flex: 1,
          padding: "12px 16px",
          borderRadius: "8px",
          border: "2px solid #c4b3e5",
          outline: "none",
          fontSize: "16px",
          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        }}
      />
      <button
        type="submit"
        style={{
          padding: "12px 20px",
          backgroundColor: "#5e35b1",
          color: "#fff",
          fontWeight: "bold",
          borderRadius: "8px",
          border: "none",
          cursor: "pointer",
          transition: "background-color 0.2s",
        }}
        onMouseEnter={(e) => (e.target.style.backgroundColor = "#4527a0")}
        onMouseLeave={(e) => (e.target.style.backgroundColor = "#5e35b1")}
      >
        Tanyakan
      </button>
    </form>
  );
}
