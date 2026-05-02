// USER INPUT

import { useState } from "react";

export default function AIInput({ onSubmit }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(input);
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Masukkan skill & goal-mu"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">Ask AI</button>
    </form>
  );
}
