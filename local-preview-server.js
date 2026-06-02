const http = require("http");
const fs = require("fs");
const path = require("path");
const { URL } = require("url");

const projectRoot = __dirname;
const defaultPort = Number(process.env.PORT || 3002);

const mimeTypes = {
  ".css": "text/css; charset=utf-8",
  ".gif": "image/gif",
  ".html": "text/html; charset=utf-8",
  ".jpeg": "image/jpeg",
  ".jpg": "image/jpeg",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
};

function loadEnvFile() {
  const envPath = path.join(projectRoot, ".env.local");

  if (!fs.existsSync(envPath)) {
    return;
  }

  const content = fs.readFileSync(envPath, "utf8");

  for (const rawLine of content.split(/\r?\n/)) {
    const line = rawLine.trim();

    if (!line || line.startsWith("#")) {
      continue;
    }

    const separatorIndex = line.indexOf("=");

    if (separatorIndex === -1) {
      continue;
    }

    const key = line.slice(0, separatorIndex).trim();
    let value = line.slice(separatorIndex + 1).trim();

    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }

    if (!process.env[key]) {
      process.env[key] = value;
    }
  }
}

function sendJson(res, statusCode, payload) {
  res.statusCode = statusCode;
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.end(JSON.stringify(payload));
}

function createApiResponse(res) {
  return {
    status(code) {
      res.statusCode = code;
      return this;
    },
    setHeader(name, value) {
      res.setHeader(name, value);
    },
    json(payload) {
      if (!res.getHeader("Content-Type")) {
        res.setHeader("Content-Type", "application/json; charset=utf-8");
      }

      res.end(JSON.stringify(payload));
    },
  };
}

function getSafeFilePath(urlPathname) {
  const requestedPath = decodeURIComponent(urlPathname === "/" ? "/index.html" : urlPathname);
  const normalizedPath = path.normalize(requestedPath).replace(/^(\.\.[/\\])+/, "");
  const absolutePath = path.join(projectRoot, normalizedPath);

  if (!absolutePath.startsWith(projectRoot)) {
    return null;
  }

  return absolutePath;
}

async function handleApi(req, res, requestUrl) {
  if (requestUrl.pathname !== "/api/ga4-funnel") {
    sendJson(res, 404, {
      ok: false,
      error: "API route not found",
    });
    return;
  }

  const handler = require(path.join(projectRoot, "api/ga4-funnel.js"));
  const apiReq = {
    method: req.method,
    query: Object.fromEntries(requestUrl.searchParams.entries()),
    url: req.url,
    headers: req.headers,
  };
  const apiRes = createApiResponse(res);

  try {
    await handler(apiReq, apiRes);
  } catch (error) {
    sendJson(res, 500, {
      ok: false,
      error: error.message,
    });
  }
}

function handleStatic(req, res, requestUrl) {
  let filePath = getSafeFilePath(requestUrl.pathname);

  if (!filePath) {
    sendJson(res, 403, {
      ok: false,
      error: "Forbidden path",
    });
    return;
  }

  if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
    filePath = path.join(filePath, "index.html");
  }

  if (!fs.existsSync(filePath)) {
    sendJson(res, 404, {
      ok: false,
      error: "File not found",
    });
    return;
  }

  const extension = path.extname(filePath).toLowerCase();
  const contentType = mimeTypes[extension] || "application/octet-stream";

  res.statusCode = 200;
  res.setHeader("Content-Type", contentType);
  fs.createReadStream(filePath).pipe(res);
}

loadEnvFile();

const server = http.createServer(async (req, res) => {
  const requestUrl = new URL(req.url, `http://${req.headers.host || "127.0.0.1"}`);

  if (requestUrl.pathname.startsWith("/api/")) {
    await handleApi(req, res, requestUrl);
    return;
  }

  handleStatic(req, res, requestUrl);
});

server.listen(defaultPort, "127.0.0.1", () => {
  console.log(`Local preview running at http://127.0.0.1:${defaultPort}`);
});
