import { Configuration, OpenAIApi } from "openai";
import express from "express";
import * as dotenv from "dotenv";

dotenv.config();

const router = express.Router();

const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(config);

router.get("/", (req, res) => {
  res.status(200).json({ message: "Hello from Dalle route" });
});

export default router;
