const http = require("http");
const fs = require("fs");
const path = require("path");
const { spawn } = require("child_process");
const { randomUUID } = require("crypto");
const { URL } = require("url");

const projectRoot = __dirname;
const defaultPort = Number(process.env.PORT || 3002);
const videoDownloadsDir = path.join(projectRoot, "video-downloads");
const videoLibraryPath = path.join(projectRoot, "video-embeds.json");
const membersCommunityPath = path.join(projectRoot, "members-community.json");
const videoJobs = new Map();

const routeAliases = new Map([
  ["/quiz", "/index.html"],
  ["/curso", "/tsl.html"],
  ["/area-de-miembros", "/members.html"],
  ["/soporte", "/support.html"],
  ["/privacidad", "/privacy.html"],
  ["/terminos", "/terms.html"],
  ["/reembolsos", "/refund.html"],
]);

const mimeTypes = {
  ".css": "text/css; charset=utf-8",
  ".gif": "image/gif",
  ".html": "text/html; charset=utf-8",
  ".jpeg": "image/jpeg",
  ".jpg": "image/jpeg",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".m3u8": "application/vnd.apple.mpegurl",
  ".mov": "video/quicktime",
  ".mp4": "video/mp4",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".ts": "video/mp2t",
  ".webm": "video/webm",
  ".webp": "image/webp",
};

const allowedVideoHosts = [
  "converteai.net",
  "vturb.com",
];

function isAllowedVideoUrl(rawUrl) {
  try {
    const parsedUrl = new URL(rawUrl);
    const host = parsedUrl.hostname.toLowerCase();

    return (
      ["http:", "https:"].includes(parsedUrl.protocol) &&
      allowedVideoHosts.some((allowedHost) => host === allowedHost || host.endsWith(`.${allowedHost}`))
    );
  } catch (error) {
    return false;
  }
}

function sanitizeFileName(value) {
  const fallback = `vturb-video-${new Date().toISOString().slice(0, 19).replace(/[:T]/g, "-")}`;
  const baseName = String(value || fallback)
    .replace(/\.[a-z0-9]{2,5}$/i, "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-zA-Z0-9._-]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);

  return `${baseName || fallback}.mp4`;
}

function sanitizeSlug(value) {
  return String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 70);
}

function readVideoLibrary() {
  if (!fs.existsSync(videoLibraryPath)) {
    return {
      videos: [],
    };
  }

  try {
    const parsed = JSON.parse(fs.readFileSync(videoLibraryPath, "utf8"));

    if (!Array.isArray(parsed.videos)) {
      return {
        videos: [],
      };
    }

    return parsed;
  } catch (error) {
    return {
      videos: [],
    };
  }
}

function saveVideoLibrary(library) {
  fs.writeFileSync(videoLibraryPath, `${JSON.stringify(library, null, 2)}\n`);
}

const defaultCommunityPosts = [
  {
    id: "seed-1",
    name: "Camila",
    lessonId: "aula-1",
    message:
      "Hice el ejercicio de mirar sin pedir nada y se sintió raro al principio, pero él se quedó más tranquilo. Me sorprendió.",
    likes: 8,
    createdAt: "2026-06-04T16:20:00.000Z",
    comments: [
      {
        id: "seed-1-comment-1",
        name: "Sofia",
        message: "Ese es el punto: presencia sin presión. Vas muy bien.",
        createdAt: "2026-06-04T17:10:00.000Z",
      },
    ],
  },
  {
    id: "seed-2",
    name: "Valentina",
    lessonId: "aula-3",
    message:
      "La pregunta '¿qué necesitas de mí hoy?' me dio miedo, pero abrió una conversación muy bonita.",
    likes: 5,
    createdAt: "2026-06-04T18:32:00.000Z",
    comments: [],
  },
];

function readMembersCommunity() {
  if (!fs.existsSync(membersCommunityPath)) {
    return {
      posts: defaultCommunityPosts,
    };
  }

  try {
    const parsed = JSON.parse(fs.readFileSync(membersCommunityPath, "utf8"));

    return {
      posts: Array.isArray(parsed.posts) ? parsed.posts : defaultCommunityPosts,
    };
  } catch (error) {
    return {
      posts: defaultCommunityPosts,
    };
  }
}

function saveMembersCommunity(community) {
  fs.writeFileSync(membersCommunityPath, `${JSON.stringify(community, null, 2)}\n`);
}

function cleanCommunityText(value, maxLength = 420) {
  return String(value || "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, maxLength);
}

function applyMembersCommunityAction(body) {
  const community = readMembersCommunity();
  const action = String(body.action || "");

  if (action === "create-post") {
    const name = cleanCommunityText(body.name, 32) || "Anónima";
    const message = cleanCommunityText(body.message, 420);
    const lessonId = cleanCommunityText(body.lessonId, 24) || "aula-1";

    if (!message) {
      throw new Error("Escreva uma mensagem antes de publicar");
    }

    community.posts.unshift({
      id: randomUUID(),
      name,
      lessonId,
      message,
      likes: 0,
      createdAt: new Date().toISOString(),
      comments: [],
    });
  }

  if (action === "react-post") {
    const postId = String(body.postId || "");
    community.posts = community.posts.map((post) =>
      post.id === postId
        ? {
            ...post,
            likes: Number(post.likes || 0) + 1,
          }
        : post,
    );
  }

  if (action === "create-comment") {
    const postId = String(body.postId || "");
    const name = cleanCommunityText(body.name, 32) || "Anónima";
    const message = cleanCommunityText(body.message, 220);

    if (!message) {
      throw new Error("Escreva uma resposta antes de enviar");
    }

    community.posts = community.posts.map((post) =>
      post.id === postId
        ? {
            ...post,
            comments: [
              ...(post.comments || []),
              {
                id: randomUUID(),
                name,
                message,
                createdAt: new Date().toISOString(),
              },
            ],
          }
        : post,
    );
  }

  saveMembersCommunity(community);
  return community;
}

function readJsonBody(req) {
  return new Promise((resolve, reject) => {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk;

      if (body.length > 1024 * 1024) {
        reject(new Error("Payload muito grande"));
        req.destroy();
      }
    });

    req.on("end", () => {
      if (!body.trim()) {
        resolve({});
        return;
      }

      try {
        resolve(JSON.parse(body));
      } catch (error) {
        reject(new Error("JSON inválido"));
      }
    });
  });
}

function normalizeInputText(input) {
  return String(input || "")
    .replace(/&amp;/g, "&")
    .replace(/\\u002F/g, "/")
    .replace(/\\\//g, "/")
    .trim();
}

function cleanMatchedUrl(value) {
  return String(value || "")
    .replace(/\\\//g, "/")
    .replace(/&amp;/g, "&")
    .replace(/[),.;\]]+$/g, "");
}

function extractUrls(input) {
  const text = normalizeInputText(input);
  const matches = text.match(/https?:\/\/[^\s"'<>`]+/gi) || [];
  return [...new Set(matches.map(cleanMatchedUrl))];
}

function classifyVideoUrl(rawUrl) {
  const url = cleanMatchedUrl(rawUrl);
  const withoutQuery = url.split("?")[0].toLowerCase();

  if (/\/players\/[^/]+\/v\d+\/player\.js$/.test(withoutQuery)) {
    return "player-script";
  }

  if (withoutQuery.endsWith(".m3u8")) {
    return "hls";
  }

  if (/\.(mp4|mov|webm)$/.test(withoutQuery)) {
    return "file";
  }

  return "unknown";
}

function extractPlayerDetails(input) {
  const urls = extractUrls(input);
  const playerScript = urls.find((url) => classifyVideoUrl(url) === "player-script") || "";
  const playerId = playerScript.match(/\/players\/([^/]+)\/v\d+\/player\.js/i)?.[1] || "";

  return {
    playerScript,
    playerId,
  };
}

async function fetchRemoteText(remoteUrl) {
  if (!isAllowedVideoUrl(remoteUrl)) {
    throw new Error("URL fora dos domínios permitidos do VTurb/ConverteAI");
  }

  const response = await fetch(remoteUrl, {
    headers: {
      "User-Agent": "Mozilla/5.0 VTurb local preview downloader",
    },
  });

  if (!response.ok) {
    throw new Error(`Não consegui ler o player (${response.status})`);
  }

  return response.text();
}

async function resolveVideoSource(input) {
  const urls = extractUrls(input);
  const directCandidate = urls.find((url) => {
    const type = classifyVideoUrl(url);
    return type === "hls" || type === "file";
  });

  if (directCandidate) {
    if (!isAllowedVideoUrl(directCandidate)) {
      throw new Error("URL fora dos domínios permitidos do VTurb/ConverteAI");
    }

    return {
      sourceUrl: directCandidate,
      sourceType: classifyVideoUrl(directCandidate),
      sourceFrom: "direct",
      candidates: urls,
    };
  }

  const playerScript = urls.find((url) => classifyVideoUrl(url) === "player-script");

  if (!playerScript) {
    throw new Error("Cole um embed/script do VTurb, uma URL player.js ou uma URL main.m3u8");
  }

  if (!isAllowedVideoUrl(playerScript)) {
    throw new Error("URL fora dos domínios permitidos do VTurb/ConverteAI");
  }

  const scriptText = normalizeInputText(await fetchRemoteText(playerScript));
  const scriptUrls = extractUrls(scriptText);
  const videoUrl = scriptUrls.find((url) => {
    const type = classifyVideoUrl(url);
    return type === "hls" || type === "file";
  });

  if (!videoUrl) {
    throw new Error("Achei o player, mas não encontrei um vídeo baixável dentro dele");
  }

  return {
    sourceUrl: videoUrl,
    sourceType: classifyVideoUrl(videoUrl),
    sourceFrom: "player-script",
    playerScript,
    playerId: extractPlayerDetails(playerScript).playerId,
    candidates: [...new Set([...urls, ...scriptUrls])],
  };
}

async function createSavedVideo(payload) {
  const title = String(payload.title || "").trim() || "Vídeo VTurb";
  const fallbackSlug = sanitizeSlug(title) || `video-${Date.now()}`;
  const slug = sanitizeSlug(payload.slug) || fallbackSlug;
  const input = String(payload.input || "").trim();

  if (!input) {
    throw new Error("Cole um embed ou URL do VTurb antes de salvar");
  }

  const source = await resolveVideoSource(input);
  const directPlayer = extractPlayerDetails(input);
  const playerScript = source.playerScript || directPlayer.playerScript || "";
  const playerId = source.playerId || directPlayer.playerId || "";
  const now = new Date().toISOString();
  const library = readVideoLibrary();
  const previous = library.videos.find((video) => video.slug === slug);
  const video = {
    id: previous?.id || randomUUID(),
    slug,
    title,
    kind: playerScript && playerId ? "vturb-player" : source.sourceType,
    playerScript,
    playerId,
    sourceUrl: source.sourceUrl,
    sourceType: source.sourceType,
    updatedAt: now,
    createdAt: previous?.createdAt || now,
  };

  library.videos = [video, ...library.videos.filter((item) => item.slug !== slug)];
  saveVideoLibrary(library);

  return video;
}

function getFfmpegPath() {
  const preferredPath = process.env.FFMPEG_PATH || "/opt/homebrew/bin/ffmpeg";
  return fs.existsSync(preferredPath) ? preferredPath : "ffmpeg";
}

function startVideoDownloadJob(sourceUrl, fileName) {
  if (!isAllowedVideoUrl(sourceUrl)) {
    throw new Error("URL fora dos domínios permitidos do VTurb/ConverteAI");
  }

  fs.mkdirSync(videoDownloadsDir, {
    recursive: true,
  });

  const id = randomUUID();
  const safeFileName = sanitizeFileName(fileName);
  const outputPath = path.join(videoDownloadsDir, safeFileName);
  const relativeUrl = `/video-downloads/${encodeURIComponent(safeFileName)}`;
  const job = {
    id,
    status: "running",
    sourceUrl,
    fileName: safeFileName,
    outputPath,
    downloadUrl: relativeUrl,
    startedAt: Date.now(),
    finishedAt: null,
    progress: "Iniciando download...",
    logs: [],
  };

  videoJobs.set(id, job);

  const child = spawn(getFfmpegPath(), [
    "-hide_banner",
    "-y",
    "-i",
    sourceUrl,
    "-c",
    "copy",
    "-movflags",
    "+faststart",
    outputPath,
  ]);

  child.stderr.on("data", (chunk) => {
    const text = chunk.toString();
    const cleanText = text.replace(/\s+/g, " ").trim();

    if (cleanText) {
      job.logs.push(cleanText);
      job.logs = job.logs.slice(-24);
    }

    const timeMatch = text.match(/time=([0-9:.]+)/);
    const speedMatch = text.match(/speed=\s*([0-9.x]+)/);

    if (timeMatch) {
      job.progress = `Convertendo: ${timeMatch[1]}${speedMatch ? ` · ${speedMatch[1]}` : ""}`;
    }
  });

  child.on("error", (error) => {
    job.status = "failed";
    job.finishedAt = Date.now();
    job.error = error.message;
  });

  child.on("close", (code) => {
    job.finishedAt = Date.now();

    if (code === 0 && fs.existsSync(outputPath)) {
      job.status = "completed";
      job.progress = "Download pronto";
      job.size = fs.statSync(outputPath).size;
      return;
    }

    job.status = "failed";
    job.error = `ffmpeg finalizou com código ${code}`;
  });

  return job;
}

function serializeVideoJob(job) {
  if (!job) {
    return null;
  }

  return {
    id: job.id,
    status: job.status,
    progress: job.progress,
    fileName: job.fileName,
    downloadUrl: job.status === "completed" ? job.downloadUrl : null,
    size: job.size || null,
    error: job.error || null,
    logs: job.logs,
  };
}

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
  const cleanPath = urlPathname.length > 1 ? urlPathname.replace(/\/+$/, "") : urlPathname;
  const routedPath = routeAliases.get(cleanPath) || cleanPath;
  const requestedPath = decodeURIComponent(routedPath === "/" ? "/index.html" : routedPath);
  const normalizedPath = path.normalize(requestedPath).replace(/^(\.\.[/\\])+/, "");
  const absolutePath = path.join(projectRoot, normalizedPath);

  if (!absolutePath.startsWith(projectRoot)) {
    return null;
  }

  return absolutePath;
}

async function handleApi(req, res, requestUrl) {
  if (requestUrl.pathname === "/api/members-community") {
    if (req.method === "GET") {
      sendJson(res, 200, {
        ok: true,
        ...readMembersCommunity(),
      });
      return;
    }

    if (req.method === "POST") {
      try {
        const body = await readJsonBody(req);
        const community = applyMembersCommunityAction(body);

        sendJson(res, 200, {
          ok: true,
          ...community,
        });
      } catch (error) {
        sendJson(res, 400, {
          ok: false,
          error: error.message,
        });
      }

      return;
    }

    sendJson(res, 405, {
      ok: false,
      error: "Method not allowed",
    });
    return;
  }

  if (requestUrl.pathname === "/api/vturb-videos") {
    if (req.method === "GET") {
      const library = readVideoLibrary();
      const slug = sanitizeSlug(requestUrl.searchParams.get("slug") || "");
      const videos = slug
        ? library.videos.filter((video) => video.slug === slug)
        : library.videos;

      sendJson(res, 200, {
        ok: true,
        videos,
        video: videos[0] || null,
      });
      return;
    }

    if (req.method === "POST") {
      try {
        const body = await readJsonBody(req);
        const video = await createSavedVideo(body);

        sendJson(res, 200, {
          ok: true,
          video,
          publicUrl: `/video-online.html?slug=${encodeURIComponent(video.slug)}`,
        });
      } catch (error) {
        sendJson(res, 400, {
          ok: false,
          error: error.message,
        });
      }

      return;
    }

    sendJson(res, 405, {
      ok: false,
      error: "Method not allowed",
    });
    return;
  }

  if (requestUrl.pathname === "/api/video-probe") {
    if (req.method !== "POST") {
      sendJson(res, 405, {
        ok: false,
        error: "Method not allowed",
      });
      return;
    }

    try {
      const body = await readJsonBody(req);
      const source = await resolveVideoSource(body.input);

      sendJson(res, 200, {
        ok: true,
        source,
      });
    } catch (error) {
      sendJson(res, 400, {
        ok: false,
        error: error.message,
      });
    }

    return;
  }

  if (requestUrl.pathname === "/api/video-download") {
    if (req.method !== "POST") {
      sendJson(res, 405, {
        ok: false,
        error: "Method not allowed",
      });
      return;
    }

    try {
      const body = await readJsonBody(req);
      const source = await resolveVideoSource(body.input || body.sourceUrl);
      const job = startVideoDownloadJob(source.sourceUrl, body.fileName);

      sendJson(res, 200, {
        ok: true,
        job: serializeVideoJob(job),
        source,
      });
    } catch (error) {
      sendJson(res, 400, {
        ok: false,
        error: error.message,
      });
    }

    return;
  }

  if (requestUrl.pathname === "/api/video-download/status") {
    const job = videoJobs.get(requestUrl.searchParams.get("id"));

    if (!job) {
      sendJson(res, 404, {
        ok: false,
        error: "Download não encontrado",
      });
      return;
    }

    sendJson(res, 200, {
      ok: true,
      job: serializeVideoJob(job),
    });

    return;
  }

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
