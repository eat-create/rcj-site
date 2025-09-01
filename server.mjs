// Minimal dependency-free static server on http://localhost:5000
import { createServer } from "http";
import { readFile } from "fs/promises";
import { extname } from "path";
const port = 5000;
const mime = { ".html": "text/html; charset=utf-8", ".js": "text/javascript; charset=utf-8", ".css": "text/css; charset=utf-8" };

createServer(async (req, res) => {
  try{
    const url = new URL(req.url || "/", "http://localhost");
    const file = url.pathname === "/" ? "/public/index.html" : "/public" + url.pathname;
    const data = await readFile(new URL(file, import.meta.url));
    const type = mime[extname(file)] || "application/octet-stream";
    res.writeHead(200, { "content-type": type, "cache-control": "public, max-age=300" });
    res.end(data);
  }catch(err){
    res.writeHead(404); res.end("Not found");
  }
}).listen(port, () => console.log(`SpaceFlix demo on http://localhost:${port}`));