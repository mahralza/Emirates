const express = require("express");
const cors = require("cors");
const OpenAI = require("openai");

const app = express();
app.use(cors());
app.use(express.json());

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY // Set this in your .env file
});

app.post("/api/chat", async (req, res) => {
  const message = req.body.message || "";

  const systemPrompt = `You are SkyGuide AI, a travel assistant for flights from Abu Dhabi.
  Available destinations: London (7h30m, AED 2850), Paris (7h10m, AED 3150), Bangkok (6h45m, AED 2450), 
  Dubai (1h, AED 500), New York (14h, AED 4200), Istanbul (5h, AED 1800).
  
  Answer briefly and helpfully. Always mention flight time and price when possible.`;

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: message }
      ],
      max_tokens: 150
    });

    const reply = completion.choices[0].message.content;
    res.json({ reply });
  } catch (error) {
    console.error("OpenAI error:", error);
    res.status(500).json({ reply: "Sorry, I'm having trouble connecting right now." });
  }
});

app.listen(3000, () => {
  console.log("🚀 SkyGuide AI server running on http://localhost:3000");
});
