import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(cors());

app.get("/proxy", async (req, res) => {
  const url = req.query.url;

  if (!url) return res.send("URL no proporcionada");

  try {
    const response = await fetch(url);
    const text = await response.text();

    res.send(text);
  } catch (error) {
    res.send("Error al obtener la página: " + error);
  }
});

app.listen(3000, () => console.log("Proxy activo en http://localhost:3000"));
