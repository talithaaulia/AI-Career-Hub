// pages/index.js
import { useState } from "react";
import AIInput from "../components/AIInput";
import AIOutput from "../components/AIOutput";
import Character from "../components/Character";
import { getAIResponse } from "../lib/ai";

export default function Home() {
  const [response, setResponse] = useState("");

  const handleAIQuery = async (input) => {
    const aiResult = await getAIResponse(input);
    setResponse(aiResult);
  };

  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "40px auto",
        padding: "0 20px",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <h1 style={{ textAlign: "center", color: "#5e35b1" }}>AI Career Hub</h1>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
      >
        <Character />
      </div>
      <div
        style={{
          textAlign: "center",
          marginTop: "20px",
          fontSize: "16px",
          color: "#666",
        }}
      >
        <text>
          Masukkan skill yang kamu miliki dan tujuan karier yang ingin dicapai.
        </text>
        <br />
        <text>
          Contoh: "Karir apa yang cocok untuk yang suka design dan teknologi"
        </text>
      </div>
      <AIInput onSubmit={handleAIQuery} />
      {response && <AIOutput response={response} />}
    </div>
  );
}
