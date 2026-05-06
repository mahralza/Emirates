import express from "express";
import cors from "cors";
import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

app.post("/chat", async (req, res) => {
  const message = req.body.message;

  const response = await openai.chat.completions.create({
    model: "gpt-5-mini",
    messages: [
      { role: "system", content: "You are a travel assistant for SkyGuide AI." },
      { role: "user", content: message }
    ]
  });

  res.json({
    reply: response.choices[0].message.content
  });
});

app.listen(3000, () => console.log("Running on http://localhost:3000"));
