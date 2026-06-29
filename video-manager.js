const managerForm = document.querySelector("[data-manager-form]");
const managerStatus = document.querySelector("[data-manager-status]");
const publicTitle = document.querySelector("[data-public-title]");
const publicUrl = document.querySelector("[data-public-url]");
const openPublic = document.querySelector("[data-open-public]");
const copyPublic = document.querySelector("[data-copy-public]");
const previewFrame = document.querySelector("[data-preview-frame]");
const videoList = document.querySelector("[data-video-list]");

function setManagerStatus(message) {
  managerStatus.textContent = message;
}

function getAbsolutePublicUrl(slug) {
  return `${window.location.origin}/video-online.html?slug=${encodeURIComponent(slug)}`;
}

function fillForm(video) {
  managerForm.elements.title.value = video.title || "";
  managerForm.elements.slug.value = video.slug || "";
  managerForm.elements.input.value = video.playerScript || video.sourceUrl || "";
}

function showPublicVideo(video) {
  const url = getAbsolutePublicUrl(video.slug);
  publicTitle.textContent = video.title;
  publicUrl.textContent = url;
  openPublic.hidden = false;
  copyPublic.hidden = false;
  openPublic.href = url;
  previewFrame.src = url;
}

function renderVideoList(videos) {
  if (!videos.length) {
    videoList.innerHTML = "<span>Nenhum vídeo salvo ainda.</span>";
    return;
  }

  videoList.innerHTML = videos
    .map(
      (video) => `
        <button type="button" data-video-slug="${video.slug}">
          <strong>${video.title}</strong>
          <span>/video-online.html?slug=${video.slug}</span>
        </button>
      `,
    )
    .join("");

  videoList.querySelectorAll("[data-video-slug]").forEach((button) => {
    button.addEventListener("click", () => {
      const video = videos.find((item) => item.slug === button.dataset.videoSlug);

      if (video) {
        fillForm(video);
        showPublicVideo(video);
      }
    });
  });
}

async function requestJson(url, options) {
  const response = await fetch(url, options);
  const data = await response.json();

  if (!response.ok || !data.ok) {
    throw new Error(data.error || "Não foi possível concluir");
  }

  return data;
}

async function loadVideos() {
  try {
    const data = await requestJson("/api/vturb-videos");
    renderVideoList(data.videos);

    if (data.videos[0]) {
      showPublicVideo(data.videos[0]);
    }
  } catch (error) {
    setManagerStatus(error.message);
  }
}

managerForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const payload = {
    title: managerForm.elements.title.value.trim(),
    slug: managerForm.elements.slug.value.trim(),
    input: managerForm.elements.input.value.trim(),
  };

  managerForm.querySelector(".save-button").disabled = true;
  setManagerStatus("Salvando embed e validando o vídeo...");

  try {
    const data = await requestJson("/api/vturb-videos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    showPublicVideo(data.video);
    setManagerStatus(`Salvo. Link público: ${getAbsolutePublicUrl(data.video.slug)}`);
    await loadVideos();
  } catch (error) {
    setManagerStatus(error.message);
  } finally {
    managerForm.querySelector(".save-button").disabled = false;
  }
});

copyPublic.addEventListener("click", async () => {
  const text = publicUrl.textContent.trim();

  if (!text || !navigator.clipboard) {
    return;
  }

  await navigator.clipboard.writeText(text);
  setManagerStatus("Link copiado.");
});

loadVideos();
