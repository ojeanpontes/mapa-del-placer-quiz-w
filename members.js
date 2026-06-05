const MEMBERS_PROGRESS_KEY = "mdpm-white-course-progress-v1";
const MEMBERS_COMMUNITY_FALLBACK_KEY = "mdpm-white-course-community-v1";
const VTURB_ACCOUNT_ID = "078ca594-053b-427b-a22f-58f182182f25";

window.funnelAnalytics?.trackOnce("members_view");

function createVturbEmbed(playerId) {
  if (!playerId) {
    return "";
  }

  return `
    <script type="text/javascript">
      var s=document.createElement("script");
      s.src="https://scripts.converteai.net/lib/js/smartplayer-wc/v4/sdk.js";
      s.async=true;
      document.head.appendChild(s);
    </script>
    <div id="ifr_${playerId}_wrapper" style="margin:0 auto;width:100%;max-width:400px;">
      <div style="position:relative;padding:177.77777777777777% 0 0 0;" id="ifr_${playerId}_aspect">
        <iframe frameborder="0" allowfullscreen src="about:blank" id="ifr_${playerId}" style="position:absolute;top:0;left:0;width:100%;height:100%;" referrerpolicy="origin" onload="this.onload=null,this.src='https://scripts.converteai.net/${VTURB_ACCOUNT_ID}/players/${playerId}/v4/embed.html' +(location.search||'?') +'&vl=' +encodeURIComponent(location.href)"></iframe>
      </div>
    </div>
  `;
}

const lessons = [
  {
    id: "aula-1",
    number: 1,
    title: "Lo Que Él Nunca Te Va a Pedir",
    duration: "2:00",
    theme: "Necesidades emocionales que él casi nunca verbaliza",
    objective:
      "Entender cómo darle seguridad emocional sin exigir una conversación pesada.",
    description:
      "Sofia explica por qué muchos hombres no piden admiración, validación o presencia, aunque lo necesiten profundamente. La práctica central es aprender a mirarlo sin demanda y crear un espacio donde él pueda bajar la guardia.",
    practice:
      "Hoy, escoge un momento tranquilo. Míralo por unos segundos sin pedir nada, sin corregir nada y sin abrir una conversación. Solo presencia.",
    support: [
      "Mapa rápido: admiración, seguridad y presencia.",
      "Ejercicio de observación silenciosa de 60 segundos.",
      "Diario: qué cambió en su energía cuando no le pediste nada.",
    ],
    reflection: "¿Dónde puedo hacerlo sentir visto sin convertirlo en una obligación?",
    playerId: "6a222e865a6879aa0f5db5a0",
    embedCode: "",
  },
  {
    id: "aula-2",
    number: 2,
    title: "El Lenguaje Que Él Sí Entiende",
    duration: "2:00",
    theme: "Contacto cotidiano como señal de cercanía emocional",
    objective:
      "Usar presencia física simple y cotidiana para comunicar cariño de una forma que él registra rápido.",
    description:
      "Esta clase muestra cómo muchas veces las palabras no alcanzan, y cómo un gesto pequeño, natural y no dramático puede comunicar pertenencia, calma y conexión.",
    practice:
      "Durante siete días, haz un gesto breve e inesperado de cercanía: una mano en el hombro, un roce al pasar o un abrazo corto sin explicación.",
    support: [
      "Lista de 12 gestos simples de cercanía.",
      "Calendario de una semana para probar contacto sin motivo.",
      "Señales para observar si él empieza a acercarse más.",
    ],
    reflection: "¿Qué gesto pequeño puedo repetir sin que se sienta forzado?",
    playerId: "6a222e8e59dfa274ad7c0443",
    embedCode: "",
  },
  {
    id: "aula-3",
    number: 3,
    title: "La Pregunta Que Cambia Todo",
    duration: "2:00",
    theme: "Abrir espacio emocional sin interrogatorio",
    objective:
      "Aprender a hacer la pregunta correcta cuando él está distante: ¿Qué necesitas de mí hoy?",
    description:
      "Sofia enseña por qué esta pregunta cambia la dinámica de la relación: deja de sonar a reclamo y se convierte en una puerta abierta para que él pida, hable o simplemente sepa que no está solo.",
    practice:
      "Cuando notes distancia real, dile con calma: 'Oye, ¿qué necesitas de mí hoy?' Después guarda silencio. No completes la respuesta por él.",
    support: [
      "Guía de tono: cómo preguntar sin sonar preocupada o molesta.",
      "Errores comunes: preguntar y después llenar el silencio.",
      "Plan de seguimiento si él responde 'nada'.",
    ],
    reflection: "¿Puedo sostener el silencio sin intentar controlar su respuesta?",
    playerId: "6a222e965a6879aa0f5db5b2",
    embedCode: "",
  },
  {
    id: "aula-4",
    number: 4,
    title: "Cómo Él Te Ve Cuando No Te Das Cuenta",
    duration: "2:00",
    theme: "Seguridad propia como magnetismo natural",
    objective:
      "Reconocer que una vida propia, viva y completa genera una atracción que no necesita perseguir.",
    description:
      "La cuarta clase trabaja la idea de que él también te observa cuando no estás intentando agradar. Ahí aparece una seguridad más auténtica: proyectos, intereses, conversaciones y presencia propia.",
    practice:
      "Elige una cosa tuya que no dependa de él y dedícale 20 minutos esta semana: leer, caminar, estudiar, crear, escribir o retomar un proyecto.",
    support: [
      "Inventario de mundo propio: intereses, planes y energía personal.",
      "Ejercicio: una decisión por día que refuerza tu seguridad.",
      "Frases para dejar de perseguir y volver a tu centro.",
    ],
    reflection: "¿Qué parte de mi mundo quiero volver a encender?",
    playerId: "6a222e76b81005e97a39660f",
    embedCode: "",
  },
  {
    id: "aula-5",
    number: 5,
    title: "El Secreto de las Parejas Que Duran",
    duration: "2:00",
    theme: "Crear un ritual diario de reconexión",
    objective:
      "Diseñar un ritual corto y realista para que la relación tenga un punto de encuentro constante.",
    description:
      "Sofia cierra la ruta mostrando que las parejas duraderas no son las que nunca tienen problemas, sino las que saben volver a encontrarse con un ritual simple, constante y humano.",
    practice:
      "Define un ritual de 5 minutos: sin celular, sin televisión, sin logística. Solo una pregunta real y contacto visual.",
    support: [
      "Plantilla para crear tu ritual de reconexión.",
      "Tres formatos: café, cama sin celular o mensaje consciente.",
      "Checklist semanal para medir constancia, no perfección.",
    ],
    reflection: "¿Cuál es el momento del día más fácil para volver a encontrarnos?",
    playerId: "6a222e7eb81005e97a396626",
    embedCode: "",
  },
];

const seedCommunityPosts = [
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

let state = {
  selectedLessonId: lessons[0].id,
  completed: readProgress(),
  community: seedCommunityPosts,
  communityLoaded: false,
};

function readProgress() {
  try {
    const parsed = JSON.parse(localStorage.getItem(MEMBERS_PROGRESS_KEY) || "{}");
    return Array.isArray(parsed.completed) ? parsed.completed : [];
  } catch (error) {
    return [];
  }
}

function saveProgress() {
  localStorage.setItem(
    MEMBERS_PROGRESS_KEY,
    JSON.stringify({
      completed: state.completed,
    }),
  );
}

function getSelectedLesson() {
  return lessons.find((lesson) => lesson.id === state.selectedLessonId) || lessons[0];
}

function getProgressPercent() {
  return Math.round((state.completed.length / lessons.length) * 100);
}

function escapeHtml(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function formatDate(value) {
  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return "Ahora";
  }

  return new Intl.DateTimeFormat("es-CO", {
    day: "2-digit",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
}

function renderPlayerPlaceholder(lesson) {
  return `
    <div class="player-placeholder">
      <span>Clase ${lesson.number}</span>
      <strong>Embed pendiente</strong>
      <p>
        Pega aquí el embed VTurb de esta clase cuando lo tengas.
        El contenedor ya está preparado en vertical 9:16.
      </p>
    </div>
  `;
}

function renderApp() {
  const lesson = getSelectedLesson();
  const isCompleted = state.completed.includes(lesson.id);
  const nextLesson = lessons.find((item) => !state.completed.includes(item.id)) || lessons[lessons.length - 1];

  document.getElementById("members-app").innerHTML = `
    <header class="members-hero">
      <div class="members-hero__copy">
        <p class="members-kicker">Área privada</p>
        <h1>El Mapa del Placer Masculino</h1>
        <p>
          Una ruta blanca, simple y emocional para entender lo que fortalece
          la conexión: presencia, comunicación, seguridad y rituales diarios.
        </p>
      </div>
      <div class="progress-card">
        <span>Tu progreso</span>
        <strong>${getProgressPercent()}%</strong>
        <div class="progress-track" aria-label="Progreso del curso">
          <i style="width:${getProgressPercent()}%"></i>
        </div>
        <p>Próximo paso: ${escapeHtml(nextLesson.title)}</p>
      </div>
    </header>

    <section class="members-layout">
      <aside class="lesson-rail" aria-label="Ruta de clases">
        <div class="rail-head">
          <p class="members-kicker">Ruta completa</p>
          <h2>5 clases · 10 minutos</h2>
        </div>
        <div class="lesson-list">
          ${lessons.map(renderLessonButton).join("")}
        </div>
      </aside>

      <main class="lesson-space">
        <section class="lesson-player-card">
          <div class="lesson-meta">
            <div>
              <p class="members-kicker">Clase ${lesson.number} de 5 · ${lesson.duration}</p>
              <h2>${escapeHtml(lesson.title)}</h2>
            </div>
            <button class="complete-button" data-action="toggle-complete" aria-pressed="${isCompleted}">
              ${isCompleted ? "Clase completada" : "Marcar como completada"}
            </button>
          </div>

          <div class="vertical-player" data-player-stage>
            ${renderPlayerPlaceholder(lesson)}
          </div>
        </section>

        <section class="lesson-detail-grid">
          <article class="detail-card detail-card--wide">
            <p class="members-kicker">Objetivo</p>
            <h3>${escapeHtml(lesson.objective)}</h3>
            <p>${escapeHtml(lesson.description)}</p>
          </article>
          <article class="detail-card">
            <p class="members-kicker">Práctica de hoy</p>
            <p>${escapeHtml(lesson.practice)}</p>
          </article>
          <article class="detail-card">
            <p class="members-kicker">Pregunta guía</p>
            <p>${escapeHtml(lesson.reflection)}</p>
          </article>
        </section>

        <section class="support-card">
          <div class="support-card__head">
            <div>
              <p class="members-kicker">Material de apoyo</p>
              <h3>Guía imprimible de la clase ${lesson.number}</h3>
            </div>
            <button class="ghost-button" data-action="download-material">
              Descargar guía
            </button>
          </div>
          <div class="support-list">
            ${lesson.support.map((item) => `<span>${escapeHtml(item)}</span>`).join("")}
          </div>
        </section>
      </main>
    </section>

    <section class="community-section" id="community">
      <div class="community-head">
        <div>
          <p class="members-kicker">Comunidad privada</p>
          <h2>Comparte avances, dudas y pequeñas victorias.</h2>
        </div>
        <span>${state.communityLoaded ? "En vivo" : "Cargando..."}</span>
      </div>

      <form class="community-composer" data-community-form>
        <input name="name" type="text" placeholder="Tu nombre" maxlength="32" required />
        <select name="lessonId" aria-label="Clase relacionada">
          ${lessons.map((item) => `<option value="${item.id}" ${item.id === lesson.id ? "selected" : ""}>Clase ${item.number}</option>`).join("")}
        </select>
        <textarea name="message" rows="3" placeholder="Comparte algo con la comunidad..." maxlength="420" required></textarea>
        <button type="submit">Publicar</button>
      </form>

      <div class="community-feed">
        ${state.community.map(renderCommunityPost).join("")}
      </div>
    </section>
  `;

  mountSelectedPlayer();
}

function renderLessonButton(lesson) {
  const selected = lesson.id === state.selectedLessonId;
  const completed = state.completed.includes(lesson.id);

  return `
    <button class="lesson-button" type="button" data-lesson-id="${lesson.id}" aria-current="${selected ? "true" : "false"}">
      <span class="lesson-button__index">${completed ? "✓" : lesson.number}</span>
      <span>
        <strong>${escapeHtml(lesson.title)}</strong>
        <small>${lesson.duration} · ${escapeHtml(lesson.theme)}</small>
      </span>
    </button>
  `;
}

function renderCommunityPost(post) {
  const lesson = lessons.find((item) => item.id === post.lessonId);

  return `
    <article class="community-post" data-post-id="${post.id}">
      <div class="post-head">
        <span class="post-avatar">${escapeHtml((post.name || "A").slice(0, 1).toUpperCase())}</span>
        <div>
          <strong>${escapeHtml(post.name || "Anónima")}</strong>
          <small>${lesson ? `Clase ${lesson.number}` : "Comunidad"} · ${formatDate(post.createdAt)}</small>
        </div>
      </div>
      <p>${escapeHtml(post.message)}</p>
      <div class="post-actions">
        <button type="button" data-action="react-post" data-post-id="${post.id}">
          Me ayudó · ${Number(post.likes || 0)}
        </button>
      </div>
      <div class="comment-list">
        ${(post.comments || []).map(renderComment).join("")}
      </div>
      <form class="comment-form" data-comment-form data-post-id="${post.id}">
        <input name="name" type="text" placeholder="Nombre" maxlength="32" required />
        <input name="message" type="text" placeholder="Responder..." maxlength="220" required />
        <button type="submit">Enviar</button>
      </form>
    </article>
  `;
}

function renderComment(comment) {
  return `
    <div class="comment-item">
      <strong>${escapeHtml(comment.name || "Anónima")}</strong>
      <span>${escapeHtml(comment.message)}</span>
    </div>
  `;
}

function extractScriptSources(embedCode) {
  const code = String(embedCode || "");
  const sources = new Set();
  const patterns = [
    /<script\b[^>]*\bsrc=["']([^"']+)["'][^>]*>/gi,
    /\bs\.src\s*=\s*["']([^"']+)["']/gi,
  ];

  patterns.forEach((pattern) => {
    let match = pattern.exec(code);

    while (match) {
      sources.add(match[1]);
      match = pattern.exec(code);
    }
  });

  return [...sources];
}

function appendScriptOnce(src) {
  if (!src) {
    return;
  }

  const absoluteSrc = new URL(src, window.location.href).href;
  const alreadyLoaded = Array.from(document.scripts).some((script) => script.src === absoluteSrc);

  if (alreadyLoaded) {
    return;
  }

  const script = document.createElement("script");
  script.src = absoluteSrc;
  script.async = true;
  document.head.appendChild(script);
}

function mountSelectedPlayer() {
  const lesson = getSelectedLesson();
  const stage = document.querySelector("[data-player-stage]");

  if (!stage) {
    return;
  }

  const embedCode = lesson.embedCode || createVturbEmbed(lesson.playerId);

  if (!embedCode.trim()) {
    stage.innerHTML = renderPlayerPlaceholder(lesson);
    return;
  }

  extractScriptSources(embedCode).forEach(appendScriptOnce);
  stage.innerHTML = embedCode.replace(/<script[\s\S]*?<\/script>/gi, "");
}

function toggleSelectedComplete() {
  const lesson = getSelectedLesson();
  const completed = new Set(state.completed);

  if (completed.has(lesson.id)) {
    completed.delete(lesson.id);
  } else {
    completed.add(lesson.id);
  }

  state.completed = [...completed];
  saveProgress();
  renderApp();
}

function downloadSelectedMaterial() {
  const lesson = getSelectedLesson();
  const content = [
    `El Mapa del Placer Masculino`,
    `Guía de apoyo · Clase ${lesson.number}`,
    ``,
    lesson.title,
    ``,
    `Objetivo: ${lesson.objective}`,
    ``,
    `Práctica: ${lesson.practice}`,
    ``,
    `Material:`,
    ...lesson.support.map((item) => `- ${item}`),
    ``,
    `Pregunta guía: ${lesson.reflection}`,
  ].join("\n");
  const blob = new Blob([content], {
    type: "text/plain;charset=utf-8",
  });
  const link = document.createElement("a");

  link.href = URL.createObjectURL(blob);
  link.download = `guia-clase-${lesson.number}-mapa-del-placer.txt`;
  link.click();
  URL.revokeObjectURL(link.href);
}

async function fetchCommunity() {
  try {
    const response = await fetch("/api/members-community");

    if (!response.ok) {
      throw new Error("API offline");
    }

    const data = await response.json();
    state.community = data.posts || seedCommunityPosts;
    state.communityLoaded = true;
  } catch (error) {
    const stored = localStorage.getItem(MEMBERS_COMMUNITY_FALLBACK_KEY);
    state.community = stored ? JSON.parse(stored) : seedCommunityPosts;
    state.communityLoaded = true;
  }

  renderApp();
}

async function sendCommunityAction(payload) {
  try {
    const response = await fetch("/api/members-community", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error("API offline");
    }

    const data = await response.json();
    state.community = data.posts || state.community;
  } catch (error) {
    applyCommunityFallback(payload);
    localStorage.setItem(MEMBERS_COMMUNITY_FALLBACK_KEY, JSON.stringify(state.community));
  }

  state.communityLoaded = true;
  renderApp();
}

function applyCommunityFallback(payload) {
  if (payload.action === "create-post") {
    state.community = [
      {
        id: `local-${Date.now()}`,
        name: payload.name,
        lessonId: payload.lessonId,
        message: payload.message,
        likes: 0,
        createdAt: new Date().toISOString(),
        comments: [],
      },
      ...state.community,
    ];
  }

  if (payload.action === "react-post") {
    state.community = state.community.map((post) =>
      post.id === payload.postId
        ? {
            ...post,
            likes: Number(post.likes || 0) + 1,
          }
        : post,
    );
  }

  if (payload.action === "create-comment") {
    state.community = state.community.map((post) =>
      post.id === payload.postId
        ? {
            ...post,
            comments: [
              ...(post.comments || []),
              {
                id: `local-comment-${Date.now()}`,
                name: payload.name,
                message: payload.message,
                createdAt: new Date().toISOString(),
              },
            ],
          }
        : post,
    );
  }
}

document.addEventListener("click", (event) => {
  const lessonButton = event.target.closest("[data-lesson-id]");
  const actionButton = event.target.closest("[data-action]");

  if (lessonButton) {
    state.selectedLessonId = lessonButton.dataset.lessonId;
    renderApp();
    document.querySelector(".lesson-player-card")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    return;
  }

  if (!actionButton) {
    return;
  }

  if (actionButton.dataset.action === "toggle-complete") {
    toggleSelectedComplete();
  }

  if (actionButton.dataset.action === "download-material") {
    downloadSelectedMaterial();
  }

  if (actionButton.dataset.action === "react-post") {
    sendCommunityAction({
      action: "react-post",
      postId: actionButton.dataset.postId,
    });
  }
});

document.addEventListener("submit", (event) => {
  const communityForm = event.target.closest("[data-community-form]");
  const commentForm = event.target.closest("[data-comment-form]");

  if (communityForm) {
    event.preventDefault();
    const formData = new FormData(communityForm);
    sendCommunityAction({
      action: "create-post",
      name: formData.get("name"),
      lessonId: formData.get("lessonId"),
      message: formData.get("message"),
    });
  }

  if (commentForm) {
    event.preventDefault();
    const formData = new FormData(commentForm);
    sendCommunityAction({
      action: "create-comment",
      postId: commentForm.dataset.postId,
      name: formData.get("name"),
      message: formData.get("message"),
    });
  }
});

renderApp();
fetchCommunity();
