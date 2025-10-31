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

  // В продакшене — dist/public
  // В dev — тоже dist/public (Vite dev не использует этот сервер)
  const publicPath = path.resolve(__dirname, "..", "dist", "public");

  console.log(`Serving: ${publicPath}`);

  app.use(express.static(publicPath));

  app.get("*", (req, res) => {
    const indexPath = path.join(publicPath, "index.html");
    res.sendFile(indexPath, (err) => {
      if (err) {
        console.error("File not found:", indexPath);
        res.status(404).send("Page not found");
      }
    });
  });

  const PORT = process.env.PORT || 3000;

  server.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
    console.log(`Mode: ${isProduction ? "Production" : "Development"}`);
  });
}

startServer().catch(console.error);