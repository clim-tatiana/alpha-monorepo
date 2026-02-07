import { Hono } from "hono";
import { cors } from "hono/cors";

const app = new Hono();

// 1. Permitir que o teu Next.js (frontend) aceda à API
app.use("/api/*", cors());

app.get("/", (c) => c.text("Alpha API v1.0 - Deno + Hono"));

// 2. Rota para procurar ações
app.get("/api/stock/:symbol", async (c) => {
  const symbol = c.req.param("symbol").toUpperCase();
  const apiKey = Deno.env.get("ALPHA_VANTAGE_KEY");

  if (!apiKey) {
    return c.json({ error: "API Key não configurada no ficheiro .env" }, 500);
  }

  try {
    const response = await fetch(
      `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${apiKey}`
    );
    const data = await response.json();

    // Se a API da Alpha Vantage devolver erro de limite de taxa
    if (data["Note"]) {
      return c.json({ error: "Limite de chamadas da API atingido (25/dia)." }, 429);
    }

    return c.json(data);
  } catch (error) {
    return c.json({ error: "Erro ao comunicar com a Alpha Vantage" }, 500);
  }
});

// 3. Iniciar o servidor na porta 8000
Deno.serve({ port: 8000 }, app.fetch);