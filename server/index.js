// server/index.js
import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const server = createServer(app);

  const isProduction = process.env.NODE_ENV === "production";
  const publicPath = path.resolve(__dirname, "..", "dist", "public");

  console.log(`Serving: ${publicPath}`);

  // Только статика — express сам отдаёт index.html
  app.use(express.static(publicPath));

  // УДАЛИ ВСЁ НИЖЕ — express.static уже всё делает
  // app.get("*", ...) — НЕ НУЖНО

  const PORT = process.env.PORT || 3000;

  server.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
    console.log(`Mode: ${isProduction ? "Production" : "Development"}`);
  });
}

startServer().catch(console.error);