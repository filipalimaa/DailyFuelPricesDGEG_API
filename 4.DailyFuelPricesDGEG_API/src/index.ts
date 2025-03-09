import express from "express";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 4000;

const API_URL = "https://precoscombustiveis.dgeg.gov.pt/api/PrecoComb/ListarTopPostos?idsTiposComb=3201&qtdPorPagina=5";

app.get("/fuelPrices", async (req, res) => {
    try {
        const response = await axios.get(API_URL);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: "Error retrieving data." });
    }
});

app.listen(PORT, () => {
    console.log(`API a correr em http://localhost:${PORT}`);
});
