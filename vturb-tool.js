const form = document.querySelector("[data-video-form]");
const probeButton = document.querySelector("[data-probe-button]");
const previewBox = document.querySelector("[data-preview-box]");
const statusTitle = document.querySelector("[data-status-title]");
const statusDetail = document.querySelector("[data-status-detail]");
const downloadLink = document.querySelector("[data-download-link]");

let currentSource = null;
let hlsLoaderPromise = null;
let hlsInstance = null;

function setStatus(title, detail, options = {}) {
  statusTitle.textContent = title;
  statusDetail.textContent = detail;
  downloadLink.hidden = !options.downloadUrl;

  if (options.downloadUrl) {
    downloadLink.href = options.downloadUrl;
    downloadLink.download = options.fileName || "";
  }
}

function setBusy(isBusy) {
  probeButton.disabled = isBusy;
  form.querySelector(".primary-button").disabled = isBusy;
}

function getFormPayload() {
  const formData = new FormData(form);

  return {
    input: String(formData.get("input") || "").trim(),
    fileName: String(formData.get("fileName") || "").trim(),
  };
}

async function postJson(url, payload) {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  const data = await response.json();

  if (!response.ok || !data.ok) {
    throw new Error(data.error || "Não foi possível concluir a ação");
  }

  return data;
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

async function renderPreview(source) {
  currentSource = source;

  if (hlsInstance) {
    hlsInstance.destroy();
    hlsInstance = null;
  }

  previewBox.innerHTML = "";
  const video = document.createElement("video");
  video.controls = true;
  video.playsInline = true;
  video.preload = "metadata";
  previewBox.appendChild(video);

  if (source.sourceType === "file") {
    video.src = source.sourceUrl;
    setStatus("Vídeo detectado", "Preview pronto. Você já pode baixar o MP4.");
    return;
  }

  if (video.canPlayType("application/vnd.apple.mpegurl")) {
    video.src = source.sourceUrl;
    setStatus("Stream HLS detectado", "Preview pronto. Você já pode baixar em MP4.");
    return;
  }

  try {
    const Hls = await loadHlsJs();

    if (!Hls?.isSupported?.()) {
      setStatus("Stream detectado", "Seu navegador não abriu o preview HLS, mas o download ainda pode funcionar.");
      return;
    }

    hlsInstance = new Hls();
    hlsInstance.loadSource(source.sourceUrl);
    hlsInstance.attachMedia(video);
    setStatus("Stream HLS detectado", "Preview pronto. Você já pode baixar em MP4.");
  } catch (error) {
    setStatus("Stream detectado", `${error.message}. O download ainda pode funcionar.`);
  }
}

async function probeVideo() {
  const payload = getFormPayload();

  if (!payload.input) {
    setStatus("Cole um link primeiro", "Use o embed do VTurb, player.js ou main.m3u8.");
    return null;
  }

  setBusy(true);
  setStatus("Detectando vídeo...", "Lendo o embed e procurando o stream baixável.");

  try {
    const data = await postJson("/api/video-probe", payload);
    await renderPreview(data.source);
    return data.source;
  } catch (error) {
    currentSource = null;
    previewBox.innerHTML = `
      <div class="preview-empty">
        <strong>Não consegui detectar o vídeo.</strong>
        <span>${error.message}</span>
      </div>
    `;
    setStatus("Falha na detecção", error.message);
    return null;
  } finally {
    setBusy(false);
  }
}

async function pollJob(jobId) {
  const response = await fetch(`/api/video-download/status?id=${encodeURIComponent(jobId)}`);
  const data = await response.json();

  if (!response.ok || !data.ok) {
    throw new Error(data.error || "Não consegui consultar o download");
  }

  const job = data.job;

  if (job.status === "completed") {
    setBusy(false);
    setStatus("Download pronto", "O MP4 foi gerado com sucesso.", {
      downloadUrl: job.downloadUrl,
      fileName: job.fileName,
    });
    return;
  }

  if (job.status === "failed") {
    setBusy(false);
    setStatus("Download falhou", job.error || "O ffmpeg não conseguiu finalizar.");
    return;
  }

  setStatus("Baixando e convertendo...", job.progress || "Processando stream.");
  window.setTimeout(() => pollJob(jobId).catch((error) => {
    setBusy(false);
    setStatus("Erro no acompanhamento", error.message);
  }), 1200);
}

probeButton.addEventListener("click", probeVideo);

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const payload = getFormPayload();

  if (!payload.input) {
    setStatus("Cole um link primeiro", "Use o embed do VTurb, player.js ou main.m3u8.");
    return;
  }

  setBusy(true);
  setStatus("Preparando download...", "Resolvendo o vídeo e iniciando o ffmpeg.");

  try {
    const data = await postJson("/api/video-download", payload);
    currentSource = data.source;
    await renderPreview(data.source);
    setBusy(true);
    setStatus("Baixando e convertendo...", data.job.progress || "Processando stream.");
    await pollJob(data.job.id);
  } catch (error) {
    setBusy(false);
    setStatus("Falha no download", error.message);
  }
});
