export async function getAIResponse(userInput) {
  try {
    const res = await fetch("/api/ai", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userInput }),
    });

    const data = await res.json();
    return data.output;
  } catch (err) {
    console.error(err);
    return "Error: AI tidak bisa merespon.";
  }
}
