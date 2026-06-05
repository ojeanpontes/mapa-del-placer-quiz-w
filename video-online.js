const titleElement = document.querySelector("[data-video-title]");
const playerBox = document.querySelector("[data-player-box]");

let hlsLoaderPromise = null;
let hlsInstance = null;

function getSlug() {
  const params = new URLSearchParams(window.location.search);
  return params.get("slug") || params.get("v") || "";
}

function setEmpty(title, detail) {
  titleElement.textContent = title;
  playerBox.innerHTML = `
    <div class="player-empty">
      <strong>${title}</strong>
      <span>${detail}</span>
    </div>
  `;
}

async function loadLibrary() {
  const response = await fetch(`./video-embeds.json?v=${Date.now()}`);

  if (!response.ok) {
    throw new Error("Não consegui carregar video-embeds.json");
  }

  const library = await response.json();
  return Array.isArray(library.videos) ? library.videos : [];
}

function loadHlsJs() {
  if (window.Hls) {
    return Promise.resolve(window.Hls);
  }

  if (!hlsLoaderPromise) {
    hlsLoaderPromise = new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = "https://cdn.jsdelivr.net/npm/hls.js@latest";
      script.async = true;
      script.onload = () => resolve(window.Hls);
      script.onerror = () => reject(new Error("Não consegui carregar o preview HLS"));
      document.head.appendChild(script);
    });
  }

  return hlsLoaderPromise;
}

async function renderHlsVideo(video) {
  playerBox.innerHTML = "";
  const videoElement = document.createElement("video");
  videoElement.controls = true;
  videoElement.playsInline = true;
  videoElement.preload = "metadata";
  playerBox.appendChild(videoElement);

  if (video.sourceType === "file" || videoElement.canPlayType("application/vnd.apple.mpegurl")) {
    videoElement.src = video.sourceUrl;
    return;
  }

  const Hls = await loadHlsJs();

  if (!Hls?.isSupported?.()) {
    throw new Error("Este navegador não suporta preview HLS");
  }

  if (hlsInstance) {
    hlsInstance.destroy();
  }

  hlsInstance = new Hls();
  hlsInstance.loadSource(video.sourceUrl);
  hlsInstance.attachMedia(videoElement);
}

function renderVturbPlayer(video) {
  playerBox.innerHTML = `<vturb-smartplayer id="vid-${video.playerId}" style="display:block;margin:0 auto;width:100%;"></vturb-smartplayer>`;
  const script = document.createElement("script");
  script.src = video.playerScript;
  script.async = true;
  document.head.appendChild(script);
}

async function bootVideoPage() {
  const slug = getSlug();

  if (!slug) {
    setEmpty("Escolha um vídeo", "Abra esta página com ?slug=nome-do-video.");
    return;
  }

  try {
    const videos = await loadLibrary();
    const video = videos.find((item) => item.slug === slug);

    if (!video) {
      setEmpty("Vídeo não encontrado", "Volte no gerenciador e salve esse slug.");
      return;
    }

    titleElement.textContent = video.title;
    document.title = `${video.title} | Vídeo Online`;

    if (video.kind === "vturb-player" && video.playerScript && video.playerId) {
      renderVturbPlayer(video);
      return;
    }

    await renderHlsVideo(video);
  } catch (error) {
    setEmpty("Não consegui abrir o vídeo", error.message);
  }
}

bootVideoPage();
