import { Configuration, OpenAIApi } from "openai";
import express from "express";
import * as dotenv from "dotenv";

dotenv.config();

const router = express.Router();

const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(config);

router.route("/").get((req, res) => {
  res.status(200).json({ message: "Hello from DALLLE route" });
});

router.route("/").post(async (req, res) => {
  const { prompt } = req.body;

  const response = await openai.createImage({
    prompt: { prompt },
    n: 1,
    size: "1024x1024",
    response_format: 'b64_hson'
  });
  image_url = response.data.data[0].b64_json;
});

export default router;
