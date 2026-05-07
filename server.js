const express = require("express");
const cors = require("cors");
const OpenAI = require("openai");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

app.post("/api/chat", async (req, res) => {
  try {
    const { message } = req.body;

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: "You are SkyGuide AI, a helpful and friendly travel assistant from Abu Dhabi. Help users with flight information, prices, destinations, and travel tips. Be clear and concise."
        },
        { role: "user", content: message }
      ],
      max_tokens: 300
    });

    res.json({ reply: completion.choices[0].message.content });
  } catch (error) {
    console.error(error);
    res.json({ reply: "Sorry, I'm having trouble connecting right now. Please try again." });
  }
});

app.listen(3000, () => {
  console.log("✅ SkyGuide AI Server running on http://localhost:3000");
});
