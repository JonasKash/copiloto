import http from "node:http";
import { readFile, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { handleDiagnostics } from "../api/diagnostics-dev.mjs";
import { handleCheckout } from "../api/checkout-dev.mjs";
import { handlePaymentStatus } from "../api/payment-status-dev.mjs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
let port = Number(process.env.PORT || 3000);

const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".ico": "image/x-icon"
};

function send(res, status, body, headers = {}) {
  res.writeHead(status, { "Content-Type": "application/json; charset=utf-8", ...headers });
  res.end(JSON.stringify(body));
}

async function readBody(req) {
  const chunks = [];
  for await (const chunk of req) chunks.push(chunk);
  const text = Buffer.concat(chunks).toString("utf8");
  return text ? JSON.parse(text) : {};
}

async function serveFile(res, filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const contentType = mimeTypes[ext] || "application/octet-stream";
  const data = await readFile(filePath);
  const cacheControl = [".html", ".css", ".js"].includes(ext) ? "no-store" : "public, max-age=3600";
  res.writeHead(200, { "Content-Type": contentType, "Cache-Control": cacheControl });
  res.end(data);
}

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);

  try {
    if (url.pathname === "/api/diagnostics" && req.method === "POST") {
      const body = await readBody(req);
      return handleDiagnostics({ method: req.method, body, headers: req.headers }, res);
    }

    if (url.pathname === "/api/checkout" && req.method === "POST") {
      const body = await readBody(req);
      return handleCheckout({ method: req.method, body, headers: req.headers }, res);
    }

    if (url.pathname === "/api/payment-status" && req.method === "GET") {
      return handlePaymentStatus({ method: req.method, query: Object.fromEntries(url.searchParams), headers: req.headers }, res);
    }

    let requestPath = url.pathname === "/" ? "/index.html" : decodeURIComponent(url.pathname);
    const filePath = path.join(rootDir, requestPath);
    const normalized = path.normalize(filePath);

    if (!normalized.startsWith(rootDir)) {
      res.writeHead(403);
      return res.end("Forbidden");
    }

    try {
      const fileStats = await stat(normalized);
      if (fileStats.isFile()) return await serveFile(res, normalized);
    } catch {}

    res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("Not found");
  } catch (error) {
    console.error(error);
    send(res, 500, { error: "Internal server error" });
  }
});

server.on("error", error => {
  if (error.code === "EADDRINUSE" && !process.env.PORT && port < 3010) {
    const occupiedPort = port;
    port += 1;
    console.warn(`Porta ${occupiedPort} ocupada. Tentando ${port}...`);
    server.listen(port);
    return;
  }

  throw error;
});

server.listen(port, () => {
  console.log(`MVP local disponível em http://localhost:${port}`);
});
