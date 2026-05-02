import axios from "axios";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { userInput } = req.body;
    console.log("User Input:", userInput);

    try {
      const response = await axios.post(
        "https://api.openrouter.ai/v1/chat/completions",
        {
          model: "gpt-4o-mini",
          messages: [{ role: "user", content: userInput }],
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_AI_KEY}`,
            "Content-Type": "application/json",
          },
        },
      );

      console.log("API Response:", response.data);

      res
        .status(200)
        .json({ output: response.data.choices[0].message.content });
    } catch (err) {
      console.error("API ERROR:", err.response?.data || err.message);
      res.status(500).json({ output: "Error: AI tidak bisa merespon." });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
