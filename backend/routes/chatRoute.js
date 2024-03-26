//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

import { GoogleGenerativeAI } from "@google/generative-ai";
import express from "express"

const router = express.Router();
const genAI = new GoogleGenerativeAI('AIzaSyB_sq06j-lTVXBZ-oElRomKqUGT3rlRwUc');

router.get('/ask-question', async (req, res) => {
  const model = genAI.getGenerativeModel({model: "gemini-pro"});

  const prompt = "write a essay on diwali";
  
  const result = await model.generateContent(prompt);

  const response = result.response;
  const text = response ? response.text() : null;
  res.json(text);
  console.log(text);
});


export default router;