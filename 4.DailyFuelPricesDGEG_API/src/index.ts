import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.json({ boas: "pessoal" });
});

app.listen(PORT, () => {
  console.log(`API a correr em http://localhost:${PORT}`);
});