// HOMEPAGE

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
    <div>
      <h1>AI Career Hub</h1>
      <Character />
      <AIInput onSubmit={handleAIQuery} />
      <AIOutput response={response} />
    </div>
  );
}
