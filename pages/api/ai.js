import axios from "axios";

export default async function handler(req, res) {
  if (req.method !== "POST")
    return res.status(405).json({ message: "Method not allowed" });

  const { userInput } = req.body;
  console.log("User Input:", userInput);

  // prompt buat AI
  const prompt = `Tolong jawab pertanyaan berikut dalam bahasa Indonesia, gunakan bahasa normal, hilangkan semua tanda **, buat ordered list jika ada daftar, dan rapikan agar mudah dibaca:\n\n${userInput}`;

  try {
    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: "gpt-4o-mini",
        messages: [{ role: "user", content: prompt }],
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.AI_KEY}`,
          "Content-Type": "application/json",
        },
      },
    );

    console.log("API Response:", response.data);

    const output =
      response.data?.choices?.[0]?.message?.content || "Tidak ada output";
    res.status(200).json({ output });
  } catch (err) {
    console.error("API ERROR:", err.response?.data || err.message);
    res.status(500).json({ output: "Error: AI tidak bisa merespon." });
  }
}
