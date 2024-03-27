import { GoogleGenerativeAI } from "@google/generative-ai";
import express from "express"
import dotenv from "dotenv";
dotenv.config();


const router = express.Router();
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GENERATIVE_AI_API_KEY);

router.post('/ask-question', async (req, res) => {
  const model = genAI.getGenerativeModel({model: "gemini-pro"});

  if (typeof req.body.question !== 'string') {
    res.status(400).json({ error: 'Question must be a string' });
    return;
  }

  const prompt = req.body.question;
  
  try {
    const result = await model.generateContent(prompt);
    const response = result.response;
    const text = response ? response.text() : null;
    if (response) {
      res.json(text);
      console.log(text);
    } else {
      res.json(null);
      console.log(null);
    }
  } catch (error) {
    // Handle the error here
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

export default router;