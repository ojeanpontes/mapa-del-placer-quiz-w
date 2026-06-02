const MEMBERS_STORAGE_KEY = "mdpm-members-area-v6";

window.funnelAnalytics?.trackOnce("members_view");

function createVturbEmbed(playerId) {
  return `<vturb-smartplayer id="vid-${playerId}" style="display: block; margin: 0 auto; width: 100%;"></vturb-smartplayer> <script type="text/javascript"> var s=document.createElement("script"); s.src="https://scripts.converteai.net/078ca594-053b-427b-a22f-58f182182f25/players/${playerId}/v4/player.js", s.async=!0,document.head.appendChild(s); </script>`;
}

const defaultState = {
  role: "member",
  adminTab: "lessons",
  product: {
    name: "Mapa del Placer Masculino",
    subtitle: "Metodo completo para mujeres",
    description:
      "Una biblioteca practica para mujeres que quieren estudiar el metodo completo, acceder a los entregables en orden y aplicar cada tecnica con mas claridad.",
    welcomeTitle: "Tu entregable ya esta organizado por modulos.",
    welcomeText:
      "Aqui encuentras el contenido separado por modulos para facilitar el consumo. Empieza por el bloque de teoria y avanza en secuencia hasta el explicito para mantener contexto, entendimiento y aplicacion alineados.",
    nextStep:
      "Empieza por el Modulo 1 · Teoria y avanza en orden por las clases numeradas. Despues sigue al Modulo 2 · Explicito para profundizar la aplicacion visual.",
    logoSrc: "./assets/mapa-do-prazer-logo.jpeg",
    bannerSrc: "./assets/mapa-do-prazer-banner.svg",
  },
  modules: [
    {
      id: "mod-1",
      eyebrow: "Modulo 1",
      title: "Teoria",
      description:
        "Primer bloque del entregable con la base teorica y las tecnicas en secuencia para estudiar en orden.",
      progress: 0.64,
      lessons: [
        {
          id: "lesson-1",
          title: "Clase 1 · Tradicional",
          description:
            "Primera tecnica de la ruta teorica, usada como base para entender el movimiento y la logica de aplicacion.",
          duration: "Clase gravada",
          status: "Liberada",
          coverLabel: "Teoria",
          coverTag: "Tecnica 1 del entregable",
          coverTheme: "ember",
          coverImage: "",
          videoUrl: "#",
          materialUrl: "#",
          embedCode: createVturbEmbed("69c672b03a29b825b3ae10f2"),
        },
        {
          id: "lesson-2",
          title: "Clase 2 · Bombinha",
          description:
            "Segunda tecnica del modulo teorico, profundizando lectura de ritmo y continuidad de aplicacion.",
          duration: "Clase gravada",
          status: "Liberada",
          coverLabel: "Teoria",
          coverTag: "Tecnica 2 del entregable",
          coverTheme: "noir",
          coverImage: "",
          videoUrl: "#",
          materialUrl: "#",
          embedCode: createVturbEmbed("69c672a5a78f10ae44d2563b"),
        },        
        {
          id: "lesson-3",
          title: "Clase 3 · Tradicional Giratoria",
          description:
            "Variacion de la tecnica tradicional con enfasis en continuidad, angulo y mantenimiento del estimulo.",
          duration: "Clase gravada",
          status: "Liberada",
          coverLabel: "Teoria",
          coverTag: "Tecnica 3 del entregable",
          coverTheme: "blush",
          coverImage: "",
          videoUrl: "#",
          materialUrl: "#",
          embedCode: createVturbEmbed("69c672cec602028f65baaecb"),
        },
        {
          id: "lesson-4",
          title: "Clase 4 · Anel",
          description:
            "Cuarta tecnica del modulo, enfocada en encaje, control y percepcion del movimiento.",
          duration: "Clase gravada",
          status: "Liberada",
          coverLabel: "Teoria",
          coverTag: "Tecnica 4 del entregable",
          coverTheme: "gold",
          coverImage: "",
          videoUrl: "#",
          materialUrl: "#",
          embedCode: createVturbEmbed("69c672b794d36cec1173be10"),
        },        
        {
          id: "lesson-5",
          title: "Clase 5 · Mano Doble",
          description:
            "Tecnica que trabaja coordinacion y control con las dos manos dentro de la misma secuencia.",
          duration: "Clase gravada",
          status: "Liberada",
          coverLabel: "Teoria",
          coverTag: "Tecnica 5 del entregable",
          coverTheme: "ember",
          coverImage: "",
          videoUrl: "#",
          materialUrl: "#",
          embedCode: createVturbEmbed("69c672696983e3eba6d455a7"),
        },
        {
          id: "lesson-6",
          title: "Clase 6 · Carnivora",
          description:
            "Sexta tecnica del modulo teorico, profundizando intensidad, variacion y sostenimiento del estimulo.",
          duration: "Clase gravada",
          status: "Liberada",
          coverLabel: "Teoria",
          coverTag: "Tecnica 6 del entregable",
          coverTheme: "noir",
          coverImage: "",
          videoUrl: "#",
          materialUrl: "#",
          embedCode: createVturbEmbed("69c672716983e3eba6d455c2"),
        },        
        {
          id: "lesson-7",
          title: "Clase 7 · Invertida",
          description:
            "Tecnica de inversion enfocada en adaptacion del movimiento y lectura del tiempo de respuesta.",
          duration: "Clase gravada",
          status: "Liberada",
          coverLabel: "Teoria",
          coverTag: "Tecnica 7 del entregable",
          coverTheme: "gold",
          coverImage: "",
          videoUrl: "#",
          materialUrl: "#",
          embedCode: createVturbEmbed("69c672795610b6167ac08b13"),
        },
        {
          id: "lesson-8",
          title: "Clase 8 · Invertida Succion",
          description:
            "Combinacion de variacion invertida con succion, destacando precision y continuidad de la tecnica.",
          duration: "Clase gravada",
          status: "Liberada",
          coverLabel: "Teoria",
          coverTag: "Tecnica 8 del entregable",
          coverTheme: "blush",
          coverImage: "",
          videoUrl: "#",
          materialUrl: "#",
          embedCode: createVturbEmbed("69c6729cc602028f65baae44"),
        },
        {
          id: "lesson-9",
          title: "Clase 9 · Chuveirinho",
          description:
            "Tecnica orientada a cadencia y constancia, con variacion de toque dentro de la misma propuesta.",
          duration: "Clase gravada",
          status: "Liberada",
          coverLabel: "Teoria",
          coverTag: "Tecnica 9 del entregable",
          coverTheme: "ember",
          coverImage: "",
          videoUrl: "#",
          materialUrl: "#",
          embedCode: createVturbEmbed("69c672945493e88bf0fef577"),
        },        
        {
          id: "lesson-10",
          title: "Clase 10 · Chuveirinho Rotacion",
          description:
            "Variacion con rotacion para profundizar control del movimiento y consistencia de ejecucion.",
          duration: "Clase gravada",
          status: "Liberada",
          coverLabel: "Teoria",
          coverTag: "Tecnica 10 del entregable",
          coverTheme: "noir",
          coverImage: "",
          videoUrl: "#",
          materialUrl: "#",
          embedCode: createVturbEmbed("69c6728dc602028f65baadf6"),
        },
        {
          id: "lesson-11",
          title: "Clase 11 · Ordenar",
          description:
            "Tecnica con enfasis en presion y fluidez, manteniendo lectura corporal durante toda la aplicacion.",
          duration: "Clase gravada",
          status: "Liberada",
          coverLabel: "Teoria",
          coverTag: "Tecnica 11 del entregable",
          coverTheme: "gold",
          coverImage: "",
          videoUrl: "#",
          materialUrl: "#",
          embedCode: createVturbEmbed("69c6728794d36cec1173bda8"),
        },
        {
          id: "lesson-12",
          title: "Clase 12 · Conchita",
          description:
            "Cierre del bloque teorico con una tecnica de lectura, comodidad y continuidad del toque.",
          duration: "Clase gravada",
          status: "Liberada",
          coverLabel: "Teoria",
          coverTag: "Tecnica 12 del entregable",
          coverTheme: "blush",
          coverImage: "",
          videoUrl: "#",
          materialUrl: "#",
          embedCode: createVturbEmbed("69c6727f96fd2c2d9b24f45b"),
        },
      ],
    },
    {
      id: "mod-2",
      eyebrow: "Modulo 2",
      title: "Explicito",
      description:
        "Segundo bloque del entregable con la parte explicita, organizado en secuencia para profundizar la visualizacion practica de las tecnicas.",
      progress: 0.72,
      lessons: [
        {
          id: "lesson-13",
          title: "Clase 1 · Tradicional",
          description:
            "Primera clase del bloque explicito, presentando la version visual de la tecnica tradicional en aplicacion directa.",
          duration: "Clase gravada",
          status: "Liberada",
          coverLabel: "Explicito",
          coverTag: "Tecnica 1 del modulo explicito",
          coverTheme: "gold",
          coverImage: "",
          videoUrl: "#",
          materialUrl: "#",
          embedCode: createVturbEmbed("69c670d33a29b825b3ae0bbd"),
        },
        {
          id: "lesson-14",
          title: "Clase 2 · Invertida",
          description:
            "Continuacion de la ruta explicita con foco en la ejecucion visual de la tecnica invertida.",
          duration: "Clase gravada",
          status: "Liberada",
          coverLabel: "Explicito",
          coverTag: "Tecnica 2 del modulo explicito",
          coverTheme: "ember",
          coverImage: "",
          videoUrl: "#",
          materialUrl: "#",
          embedCode: createVturbEmbed("69c670cf6d9878c16e72f4ee"),
        },
        {
          id: "lesson-15",
          title: "Clase 3 · Invertida con Succion",
          description:
            "Variacion explicita de la invertida con succion, destacando continuidad, ritmo y aplicacion visual.",
          duration: "Clase gravada",
          status: "Liberada",
          coverLabel: "Explicito",
          coverTag: "Tecnica 3 del modulo explicito",
          coverTheme: "blush",
          coverImage: "",
          videoUrl: "#",
          materialUrl: "#",
          embedCode: createVturbEmbed("69c670b3c602028f65baaa10"),
        },
        {
          id: "lesson-16",
          title: "Clase 4 · EGG",
          description:
            "Cuarta tecnica del modulo explicito, enfocada en la demostracion practica del encaje y la conduccion.",
          duration: "Clase gravada",
          status: "Liberada",
          coverLabel: "Explicito",
          coverTag: "Tecnica 4 del modulo explicito",
          coverTheme: "noir",
          coverImage: "",
          videoUrl: "#",
          materialUrl: "#",
          embedCode: createVturbEmbed("69c670aa5493e88bf0fef0f4"),
        },
        {
          id: "lesson-17",
          title: "Clase 5 · Conchita",
          description:
            "Demostracion explicita de la tecnica conchita, destacando comodidad, continuidad y posicionamiento.",
          duration: "Clase gravada",
          status: "Liberada",
          coverLabel: "Explicito",
          coverTag: "Tecnica 5 del modulo explicito",
          coverTheme: "gold",
          coverImage: "",
          videoUrl: "#",
          materialUrl: "#",
          embedCode: createVturbEmbed("69c670b95610b6167ac086a0"),
        },
        {
          id: "lesson-18",
          title: "Clase 6 · Chuveirinho",
          description:
            "Aplicacion explicita de la tecnica chuveirinho, con lectura visual de cadencia y constancia del movimiento.",
          duration: "Clase gravada",
          status: "Liberada",
          coverLabel: "Explicito",
          coverTag: "Tecnica 6 del modulo explicito",
          coverTheme: "ember",
          coverImage: "",
          videoUrl: "#",
          materialUrl: "#",
          embedCode: createVturbEmbed("69c670ca6d9878c16e72f4dc"),
        },
        {
          id: "lesson-19",
          title: "Clase 7 · Chuveirinho con Rotacion",
          description:
            "Variacion explicita con rotacion para profundizar la percepcion visual del movimiento y del control.",
          duration: "Clase gravada",
          status: "Liberada",
          coverLabel: "Explicito",
          coverTag: "Tecnica 7 del modulo explicito",
          coverTheme: "blush",
          coverImage: "",
          videoUrl: "#",
          materialUrl: "#",
          embedCode: createVturbEmbed("69c670c06983e3eba6d45173"),
        },
        {
          id: "lesson-20",
          title: "Clase 8 · Carnivora",
          description:
            "Octava tecnica del modulo explicito, mostrando intensidad, variacion y ritmo en aplicacion practica.",
          duration: "Clase gravada",
          status: "Liberada",
          coverLabel: "Explicito",
          coverTag: "Tecnica 8 del modulo explicito",
          coverTheme: "noir",
          coverImage: "",
          videoUrl: "#",
          materialUrl: "#",
          embedCode: createVturbEmbed("69c670c6a78f10ae44d2514a"),
        },
        {
          id: "lesson-21",
          title: "Clase 9 · Bombinha",
          description:
            "Demostracion visual de la tecnica bombinha, con atencion a repeticion, presion y consistencia.",
          duration: "Clase gravada",
          status: "Liberada",
          coverLabel: "Explicito",
          coverTag: "Tecnica 9 del modulo explicito",
          coverTheme: "gold",
          coverImage: "",
          videoUrl: "#",
          materialUrl: "#",
          embedCode: createVturbEmbed("69c670bd6d9878c16e72f4bd"),
        },
        {
          id: "lesson-22",
          title: "Clase 10 · Anel Vibrador",
          description:
            "Aplicacion explicita de la tecnica con anillo vibrador, destacando encaje, adaptacion y ritmo.",
          duration: "Clase gravada",
          status: "Liberada",
          coverLabel: "Explicito",
          coverTag: "Tecnica 10 del modulo explicito",
          coverTheme: "ember",
          coverImage: "",
          videoUrl: "#",
          materialUrl: "#",
          embedCode: createVturbEmbed("69c66f5a94d36cec1173b5e2"),
        },
        {
          id: "lesson-23",
          title: "Clase 11 · Anel",
          description:
            "Variacion explicita con anillo, reforzando lectura visual del movimiento, ajuste y conduccion de la tecnica.",
          duration: "Clase gravada",
          status: "Liberada",
          coverLabel: "Explicito",
          coverTag: "Tecnica 11 del modulo explicito",
          coverTheme: "blush",
          coverImage: "",
          videoUrl: "#",
          materialUrl: "#",
          embedCode: createVturbEmbed("69c66f5296fd2c2d9b24ece7"),
        },
        {
          id: "lesson-24",
          title: "Clase 12 · Ordena",
          description:
            "Demostracion explicita de la tecnica ordena, con foco en fluidez, presion y lectura corporal.",
          duration: "Clase gravada",
          status: "Liberada",
          coverLabel: "Explicito",
          coverTag: "Tecnica 12 del modulo explicito",
          coverTheme: "gold",
          coverImage: "",
          videoUrl: "#",
          materialUrl: "#",
          embedCode: createVturbEmbed("69c66f553a29b825b3ae08ab"),
        },
        {
          id: "lesson-25",
          title: "Clase 13 · Mano Doble",
          description:
            "Cierre del modulo explicito con la tecnica mano doble en version visual, profundizando coordinacion y control.",
          duration: "Clase gravada",
          status: "Liberada",
          coverLabel: "Explicito",
          coverTag: "Tecnica 13 del modulo explicito",
          coverTheme: "noir",
          coverImage: "",
          videoUrl: "#",
          materialUrl: "#",
          embedCode: createVturbEmbed("69c66f4e6983e3eba6d44dde"),
        },
      ],
    },
  ],
  materials: [
    {
      id: "material-1",
      title: "Secuencia completa de las 12 tecnicas",
      description:
        "Resumen del primer modulo para revisar el orden de las clases y visualizar rapidamente las tecnicas liberadas en teoria.",
      type: "PDF",
      badge: "Essencial",
      link: "#",
    },
    {
      id: "material-2",
      title: "Checklist de estudio del modulo Teoria",
      description:
        "Material de apoyo para seguir las clases en orden y marcar lo que ya fue estudiado dentro del primer entregable.",
      type: "Checklist",
      badge: "Suporte",
      link: "#",
    },
    {
      id: "material-3",
      title: "Secuencia completa del modulo Explicito",
      description:
        "Resumen del segundo modulo para visualizar el orden de las 13 clases explicitas y seguir el avance en el entregable.",
      type: "PDF",
      badge: "Explicito",
      link: "#",
    },
  ],
};

let state = loadState();
let selectedLessonId = getAllLessons(state.modules)[0]?.id || null;
let selectedMaterialId = state.materials[0]?.id || null;

const app = document.getElementById("members-app");

function loadState() {
  try {
    const saved = localStorage.getItem(MEMBERS_STORAGE_KEY);
    if (!saved) {
      return structuredClone(defaultState);
    }

    return mergeState(JSON.parse(saved));
  } catch {
    return structuredClone(defaultState);
  }
}

function mergeState(savedState) {
  const fallback = structuredClone(defaultState);

  return {
    ...fallback,
    ...savedState,
    product: {
      ...fallback.product,
      ...(savedState?.product || {}),
    },
    modules: Array.isArray(savedState?.modules) && savedState.modules.length > 0
      ? savedState.modules
      : fallback.modules,
    materials: Array.isArray(savedState?.materials) && savedState.materials.length > 0
      ? savedState.materials
      : fallback.materials,
  };
}

function persistState() {
  localStorage.setItem(MEMBERS_STORAGE_KEY, JSON.stringify(state));
}

function getAllLessons(modules) {
  return modules.flatMap((module) =>
    module.lessons.map((lesson) => ({
      ...lesson,
      moduleId: module.id,
      moduleTitle: module.title,
      moduleEyebrow: module.eyebrow,
    })),
  );
}

function getSelectedLesson() {
  return getAllLessons(state.modules).find((lesson) => lesson.id === selectedLessonId) || null;
}

function getSelectedMaterial() {
  return state.materials.find((material) => material.id === selectedMaterialId) || null;
}

function getNextLesson() {
  return getAllLessons(state.modules)[0] || null;
}

function getFeaturedLesson() {
  return getAllLessons(state.modules)[0] || null;
}

function buildEmbedDocument(embedCode) {
  return `
    <!doctype html>
    <html lang="es">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <style>
          html, body {
            margin: 0;
            padding: 0;
            background: #050304;
            min-height: 100%;
          }

          body {
            display: flex;
            align-items: stretch;
            justify-content: center;
          }

          .lesson-embed-shell {
            width: 100%;
            min-height: 100vh;
            display: flex;
            align-items: stretch;
            justify-content: center;
          }

          vturb-smartplayer {
            width: 100% !important;
            display: block !important;
            margin: 0 auto !important;
          }
        </style>
      </head>
      <body>
        <div class="lesson-embed-shell">
          ${embedCode}
        </div>
      </body>
    </html>
  `;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function renderRoleSwitch() {
  return `
    <div class="role-switch" role="tablist" aria-label="Perfiles">
      <button
        class="role-switch__button"
        type="button"
        data-action="set-role"
        data-role="member"
        aria-pressed="${state.role === "member"}"
      >
        Vista de miembro
      </button>
      <button
        class="role-switch__button"
        type="button"
        data-action="set-role"
        data-role="admin"
        aria-pressed="${state.role === "admin"}"
      >
        Vista de admin
      </button>
    </div>
  `;
}

function renderMasthead() {
  const lessons = getAllLessons(state.modules);

  return `
    <header class="members-topbar">
      <div class="members-topbar__left">
        <img
          class="members-topbar__logo"
          src="${escapeHtml(state.product.logoSrc)}"
          alt="Logo del producto ${escapeHtml(state.product.name)}"
        />
        <div class="members-topbar__brand">
          <p class="members-topbar__eyebrow">${escapeHtml(state.product.subtitle)}</p>
          <h1 class="members-topbar__title">${escapeHtml(state.product.name)}</h1>
        </div>
        <nav class="members-topbar__nav" aria-label="Navegacion principal">
          <a class="members-topbar__link" href="#featured">Inicio</a>
          <a class="members-topbar__link" href="#continuar">Continuar</a>
          <a class="members-topbar__link" href="#modulos">Clases</a>
          <a class="members-topbar__link" href="#materiales">Materiales</a>
        </nav>
      </div>
      <div class="members-topbar__right">
        <div class="members-topbar__meta">
          <span class="pill">${state.modules.length} modulos</span>
          <span class="pill">${lessons.length} clases</span>
          <span class="pill">${state.materials.length} materiales</span>
          <span class="pill pill--accent">${state.role === "admin" ? "Admin" : "Miembro"}</span>
        </div>
        ${renderRoleSwitch()}
      </div>
    </header>
  `;
}

function renderMemberHero() {
  const featuredLesson = getFeaturedLesson();
  const totalLessons = getAllLessons(state.modules).length;
  const heroBackground = state.product.bannerSrc
    ? `style="background-image: linear-gradient(90deg, rgba(10, 5, 6, 0.92) 0%, rgba(10, 5, 6, 0.72) 42%, rgba(10, 5, 6, 0.36) 100%), url('${escapeHtml(state.product.bannerSrc)}')"`
    : "";

  return `
    <section class="members-billboard" id="featured" ${heroBackground}>
      <div class="members-billboard__content">
        <p class="members-billboard__eyebrow">Serie original</p>
        <h2 class="members-billboard__title">${escapeHtml(state.product.welcomeTitle)}</h2>
        <p class="members-billboard__subtitle">${escapeHtml(state.product.welcomeText)}</p>
        <div class="members-billboard__meta">
          <span class="pill">${totalLessons} clases na biblioteca</span>
          ${
            featuredLesson
              ? `
                <span class="pill">${escapeHtml(featuredLesson.duration)}</span>
                <span class="pill pill--accent">${escapeHtml(featuredLesson.status)}</span>
              `
              : ""
          }
        </div>
        <div class="members-billboard__actions">
          <button class="primary-link" type="button" data-action="watch-lesson" data-lesson-id="${escapeHtml(featuredLesson?.id || "")}">
            Empezar ahora
          </button>
          <button class="ghost-link" type="button" data-action="set-role" data-role="admin">Abrir panel admin</button>
        </div>
      </div>
      <div class="members-billboard__spotlight">
        <div class="members-billboard__info">
          <span class="members-billboard__badge">Destacado ahora</span>
          <strong class="members-billboard__focus">${escapeHtml(featuredLesson?.title || "Primera clase de la ruta")}</strong>
          <p class="members-billboard__caption">${escapeHtml(featuredLesson?.description || state.product.nextStep)}</p>
        </div>
      </div>
    </section>
  `;
}

function renderQuickBand() {
  return renderShelf(
    "Continua desde donde paraste",
    state.product.nextStep,
    getAllLessons(state.modules).slice(0, 6),
    "shelf-row--continue",
    "continuar",
  );
}

function renderLessonCard(lesson) {
  const isPlayable = Boolean(lesson.embedCode || (lesson.videoUrl && lesson.videoUrl !== "#"));
  const coverStyle = lesson.coverImage
    ? `style="background-image: linear-gradient(180deg, rgba(10, 5, 6, 0.1), rgba(10, 5, 6, 0.35)), url('${escapeHtml(lesson.coverImage)}')"`
    : "";
  const coverClass = lesson.coverImage
    ? "lesson-cover lesson-cover--custom"
    : `lesson-cover lesson-cover--${escapeHtml(lesson.coverTheme || "ember")}`;

  return `
    <article class="lesson-card lesson-card--poster">
      <div class="${coverClass}" ${coverStyle}>
        <span class="lesson-cover__eyebrow">${escapeHtml(lesson.coverLabel || "Clase")}</span>
        <h4 class="lesson-cover__title">${escapeHtml(lesson.title)}</h4>
        <span class="lesson-cover__tag">${escapeHtml(lesson.coverTag || lesson.description)}</span>
      </div>
      <div class="lesson-card__body">
        <h4>${escapeHtml(lesson.title)}</h4>
        <p>${escapeHtml(lesson.description)}</p>
        <div class="lesson-card__meta">
          <span class="pill">${escapeHtml(lesson.duration)}</span>
          <span class="pill pill--accent">${escapeHtml(lesson.status)}</span>
        </div>
      </div>
      <div class="lesson-card__actions">
        <button class="primary-link" type="button" data-action="watch-lesson" data-lesson-id="${escapeHtml(lesson.id)}">
          ${isPlayable ? "Ver clase" : "Muy pronto"}
        </button>
      </div>
    </article>
  `;
}

function renderLessonPlayer() {
  const lesson = getSelectedLesson() || getFeaturedLesson();
  const canRenderEmbed = Boolean(lesson?.embedCode);
  const canRenderLink = Boolean(lesson?.videoUrl && lesson.videoUrl !== "#");
  const moduleLabel = lesson ? `${lesson.moduleEyebrow} · ${lesson.moduleTitle}` : "Biblioteca";

  return `
    <section class="members-card lesson-player-panel" id="player">
      <div class="lesson-player-panel__meta">
        <div>
          <p class="members-kicker">${escapeHtml(moduleLabel)}</p>
          <h2 class="content-block__title">${escapeHtml(lesson?.title || "Selecciona una clase")}</h2>
          <p class="content-block__subtitle">${escapeHtml(lesson?.description || state.product.nextStep)}</p>
        </div>
        <div class="lesson-player-panel__chips">
          <span class="pill">${escapeHtml(lesson?.duration || "Biblioteca")}</span>
          <span class="pill pill--accent">${escapeHtml(lesson?.status || "Disponible")}</span>
        </div>
      </div>

      <div class="lesson-player-panel__stage">
        ${
          canRenderEmbed
            ? `
              <iframe
                class="lesson-player-frame"
                title="${escapeHtml(lesson.title)}"
                srcdoc="${escapeHtml(buildEmbedDocument(lesson.embedCode))}"
                allow="autoplay; fullscreen; picture-in-picture; encrypted-media"
                allowfullscreen
                loading="eager"
              ></iframe>
            `
            : canRenderLink
              ? `
                <div class="lesson-player-empty">
                  <strong>Esta clase esta lista para abrir por enlace.</strong>
                  <p>El player embebido aun no fue configurado para este item, pero el acceso ya puede hacerse por el enlace de la clase.</p>
                  <a class="primary-link" href="${escapeHtml(lesson.videoUrl)}" target="_blank" rel="noreferrer">
                    Abrir clase
                  </a>
                </div>
              `
              : `
                <div class="lesson-player-empty">
                  <strong>Player aun no configurado.</strong>
                  <p>Esta clase ya existe en la biblioteca, pero el embed aun no fue conectado. Cuando envies el resto, lo encajo aqui.</p>
                </div>
              `
        }
      </div>

      <div class="lesson-player-panel__footer">
        ${
          lesson?.materialUrl && lesson.materialUrl !== "#"
            ? `<a class="ghost-link" href="${escapeHtml(lesson.materialUrl)}" target="_blank" rel="noreferrer">Abrir material complementario</a>`
            : `<span class="lesson-player-panel__hint">Usa las tarjetas de abajo para cambiar rapidamente de clase dentro de la misma area.</span>`
        }
      </div>
    </section>
  `;
}

function renderShelf(title, subtitle, lessons, shelfTone = "", shelfId = "") {
  return `
    <section class="members-shelf"${shelfId ? ` id="${escapeHtml(shelfId)}"` : ""}>
      <div class="members-shelf__top">
        <div>
          <h2 class="content-block__title">${escapeHtml(title)}</h2>
          <p class="content-block__subtitle">${escapeHtml(subtitle)}</p>
        </div>
      </div>
      <div class="shelf-row ${shelfTone}">
        ${lessons.map(renderLessonCard).join("")}
      </div>
    </section>
  `;
}

function renderModules() {
  return `
    ${state.modules
      .map((module, index) =>
        renderShelf(
          `${module.eyebrow} · ${module.title}`,
          module.description,
          module.lessons,
          "shelf-row--posters",
          index === 0 ? "modulos" : "",
        ),
      )
      .join("")}
  `;
}

function renderMaterials() {
  return `
    <section class="members-shelf" id="materiales">
      <div class="members-shelf__top">
        <div>
          <h2 class="content-block__title">Materiales de apoio</h2>
          <p class="content-block__subtitle">PDFs, guias y bonus para acompanar las clases sin perder claridad en la aplicacion.</p>
        </div>
        <span class="pill">${state.materials.length} items</span>
      </div>

      <div class="shelf-row shelf-row--materials">
        ${state.materials
          .map(
            (material) => `
              <article class="material-card">
                <div class="material-card__body">
                  <span class="material-card__type">${escapeHtml(material.type)}</span>
                  <h4>${escapeHtml(material.title)}</h4>
                  <p>${escapeHtml(material.description)}</p>
                  <div class="material-card__meta">
                    <span class="pill">${escapeHtml(material.badge)}</span>
                  </div>
                </div>
                <div class="lesson-card__actions">
                  <a class="ghost-link" href="${escapeHtml(material.link || "#")}">Abrir material</a>
                </div>
              </article>
            `,
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderMemberView() {
  return `
    <section class="members-main">
      ${renderMemberHero()}
      ${renderLessonPlayer()}
      ${renderQuickBand()}
      ${renderModules()}
      ${renderMaterials()}
    </section>
  `;
}

function renderAdminTabs() {
  const tabs = [
    { id: "product", label: "Producto" },
    { id: "lessons", label: "Clases" },
    { id: "materials", label: "Materiales" },
  ];

  return `
    <div class="admin-tab-row" role="tablist" aria-label="Secciones del admin">
      ${tabs
        .map(
          (tab) => `
            <button
              class="admin-tab${state.adminTab === tab.id ? " is-active" : ""}"
              type="button"
              data-action="set-admin-tab"
              data-tab="${tab.id}"
            >
              ${escapeHtml(tab.label)}
            </button>
          `,
        )
        .join("")}
    </div>
  `;
}

function renderProductForm() {
  return `
    <section class="members-card admin-form-card">
      <div class="admin-form-card__header">
        <div>
          <h2 class="content-block__title">Configuracion del producto</h2>
          <p class="content-block__subtitle">Edita nombre, subtitulo, mensaje principal y posicionamiento del area de miembros.</p>
        </div>
        <button class="outline-button" type="button" data-action="restore-defaults">
          Restaurar contenido original
        </button>
      </div>

      <form class="admin-form" data-form="product">
        <div class="admin-form__row">
          <div class="admin-field">
            <label for="product-name">Nombre del producto</label>
            <input id="product-name" name="name" value="${escapeHtml(state.product.name)}" />
          </div>
          <div class="admin-field">
            <label for="product-subtitle">Subtitulo</label>
            <input id="product-subtitle" name="subtitle" value="${escapeHtml(state.product.subtitle)}" />
          </div>
        </div>
        <div class="admin-field">
          <label for="product-description">Descripcion</label>
          <textarea id="product-description" name="description">${escapeHtml(state.product.description)}</textarea>
        </div>
        <div class="admin-field">
          <label for="product-welcome-title">Titulo de bienvenida</label>
          <input id="product-welcome-title" name="welcomeTitle" value="${escapeHtml(state.product.welcomeTitle)}" />
        </div>
        <div class="admin-field">
          <label for="product-welcome-text">Texto principal</label>
          <textarea id="product-welcome-text" name="welcomeText">${escapeHtml(state.product.welcomeText)}</textarea>
        </div>
        <div class="admin-field">
          <label for="product-next-step">Texto lateral</label>
          <textarea id="product-next-step" name="nextStep">${escapeHtml(state.product.nextStep)}</textarea>
        </div>
        <div class="admin-field">
          <label for="product-logo-src">Logo</label>
          <input id="product-logo-src" name="logoSrc" value="${escapeHtml(state.product.logoSrc)}" />
          <p class="admin-form__help">Puede ser una ruta local del proyecto o una URL publica.</p>
        </div>
        <div class="admin-field">
          <label for="product-banner-src">Banner principal</label>
          <input id="product-banner-src" name="bannerSrc" value="${escapeHtml(state.product.bannerSrc || "")}" />
          <p class="admin-form__help">Arte principal del area de miembros, estilo catalogo.</p>
        </div>
        <div class="admin-form__actions">
          <button type="submit">Guardar producto</button>
        </div>
      </form>
    </section>
  `;
}

function renderLessonEditor() {
  const lessons = getAllLessons(state.modules);
  const selectedLesson = getSelectedLesson();

  return `
    <section class="admin-grid">
      <aside class="members-card admin-list">
        <div class="admin-list__header">
          <div>
            <h2 class="content-block__title">Clases</h2>
            <p class="content-block__subtitle">Selecciona una tarjeta para editar portada, titulo, descripcion y enlaces.</p>
          </div>
          <button class="admin-action" type="button" data-action="add-lesson">
            Nueva clase
          </button>
        </div>
        <div class="admin-list__items">
          ${lessons
            .map(
              (lesson) => `
                <button
                  class="admin-list__item${lesson.id === selectedLessonId ? " is-active" : ""}"
                  type="button"
                  data-action="select-lesson"
                  data-lesson-id="${escapeHtml(lesson.id)}"
                >
                  <h3 class="admin-list__item-title">${escapeHtml(lesson.title)}</h3>
                  <p class="admin-list__item-copy">${escapeHtml(lesson.moduleTitle)} · ${escapeHtml(lesson.duration)} · ${escapeHtml(lesson.status)}</p>
                </button>
              `,
            )
            .join("")}
        </div>
      </aside>

      <section class="members-card admin-form-card">
        <div class="admin-form-card__header">
          <div>
            <h2 class="content-block__title">Editor de clase</h2>
            <p class="content-block__subtitle">Mantiene el visual y la copy alineados al producto mientras organizas la biblioteca.</p>
          </div>
          ${
            selectedLesson
              ? `<button class="outline-button" type="button" data-action="delete-lesson" data-lesson-id="${escapeHtml(selectedLesson.id)}">Eliminar clase</button>`
              : ""
          }
        </div>

        ${
          selectedLesson
            ? `
              <form class="admin-form" data-form="lesson">
                <input type="hidden" name="id" value="${escapeHtml(selectedLesson.id)}" />
                <div class="admin-form__row">
                  <div class="admin-field">
                    <label for="lesson-module">Modulo</label>
                    <select id="lesson-module" name="moduleId">
                      ${state.modules
                        .map(
                          (module) => `
                            <option value="${escapeHtml(module.id)}"${module.id === selectedLesson.moduleId ? " selected" : ""}>
                              ${escapeHtml(module.eyebrow)} · ${escapeHtml(module.title)}
                            </option>
                          `,
                        )
                        .join("")}
                    </select>
                  </div>
                  <div class="admin-field">
                    <label for="lesson-duration">Duracion</label>
                    <input id="lesson-duration" name="duration" value="${escapeHtml(selectedLesson.duration)}" />
                  </div>
                </div>
                <div class="admin-form__row">
                  <div class="admin-field">
                    <label for="lesson-status">Status</label>
                    <input id="lesson-status" name="status" value="${escapeHtml(selectedLesson.status)}" />
                  </div>
                  <div class="admin-field">
                    <label for="lesson-theme">Tema de portada</label>
                    <select id="lesson-theme" name="coverTheme">
                      ${["ember", "noir", "blush", "gold"]
                        .map(
                          (theme) => `
                            <option value="${theme}"${selectedLesson.coverTheme === theme ? " selected" : ""}>
                              ${theme}
                            </option>
                          `,
                        )
                        .join("")}
                    </select>
                  </div>
                </div>
                <div class="admin-field">
                  <label for="lesson-title">Titulo</label>
                  <input id="lesson-title" name="title" value="${escapeHtml(selectedLesson.title)}" />
                </div>
                <div class="admin-field">
                  <label for="lesson-description">Descripcion</label>
                  <textarea id="lesson-description" name="description">${escapeHtml(selectedLesson.description)}</textarea>
                </div>
                <div class="admin-form__row">
                  <div class="admin-field">
                    <label for="lesson-cover-label">Texto corto de portada</label>
                    <input id="lesson-cover-label" name="coverLabel" value="${escapeHtml(selectedLesson.coverLabel)}" />
                  </div>
                  <div class="admin-field">
                    <label for="lesson-cover-tag">Apoyo de portada</label>
                    <input id="lesson-cover-tag" name="coverTag" value="${escapeHtml(selectedLesson.coverTag)}" />
                  </div>
                </div>
                <div class="admin-field">
                  <label for="lesson-cover-image">Imagen de portada</label>
                  <input id="lesson-cover-image" name="coverImage" value="${escapeHtml(selectedLesson.coverImage || "")}" />
                  <p class="admin-form__help">Si lo dejas vacio, la tarjeta usa el gradiente tematico.</p>
                </div>
                <div class="admin-field">
                  <label for="lesson-embed-code">Embed de la clase</label>
                  <textarea id="lesson-embed-code" name="embedCode">${escapeHtml(selectedLesson.embedCode || "")}</textarea>
                  <p class="admin-form__help">Pega aqui el embed completo de VTurb cuando quieras abrir la clase dentro del area de miembros.</p>
                </div>
                <div class="admin-form__row">
                  <div class="admin-field">
                    <label for="lesson-video-url">Enlace de la clase</label>
                    <input id="lesson-video-url" name="videoUrl" value="${escapeHtml(selectedLesson.videoUrl || "#")}" />
                  </div>
                  <div class="admin-field">
                    <label for="lesson-material-url">Enlace del material</label>
                    <input id="lesson-material-url" name="materialUrl" value="${escapeHtml(selectedLesson.materialUrl || "#")}" />
                  </div>
                </div>
                <div class="admin-form__actions">
                  <button type="submit">Guardar clase</button>
                </div>
              </form>
            `
            : `<p class="admin-empty">Agrega una clase para empezar a editar.</p>`
        }
      </section>
    </section>
  `;
}

function renderMaterialEditor() {
  const selectedMaterial = getSelectedMaterial();

  return `
    <section class="admin-grid">
      <aside class="members-card admin-list">
        <div class="admin-list__header">
          <div>
            <h2 class="content-block__title">Materiales</h2>
            <p class="content-block__subtitle">Organiza PDFs, guias, bonus y enlaces de apoyo para la alumna.</p>
          </div>
          <button class="admin-action" type="button" data-action="add-material">
            Nuevo material
          </button>
        </div>
        <div class="admin-list__items">
          ${state.materials
            .map(
              (material) => `
                <button
                  class="admin-list__item${material.id === selectedMaterialId ? " is-active" : ""}"
                  type="button"
                  data-action="select-material"
                  data-material-id="${escapeHtml(material.id)}"
                >
                  <h3 class="admin-list__item-title">${escapeHtml(material.title)}</h3>
                  <p class="admin-list__item-copy">${escapeHtml(material.type)} · ${escapeHtml(material.badge)}</p>
                </button>
              `,
            )
            .join("")}
        </div>
      </aside>

      <section class="members-card admin-form-card">
        <div class="admin-form-card__header">
          <div>
            <h2 class="content-block__title">Editor de material</h2>
            <p class="content-block__subtitle">Actualiza nombre, descripcion, categoria y enlace de acceso.</p>
          </div>
          ${
            selectedMaterial
              ? `<button class="outline-button" type="button" data-action="delete-material" data-material-id="${escapeHtml(selectedMaterial.id)}">Eliminar material</button>`
              : ""
          }
        </div>

        ${
          selectedMaterial
            ? `
              <form class="admin-form" data-form="material">
                <input type="hidden" name="id" value="${escapeHtml(selectedMaterial.id)}" />
                <div class="admin-form__row">
                  <div class="admin-field">
                    <label for="material-type">Tipo</label>
                    <input id="material-type" name="type" value="${escapeHtml(selectedMaterial.type)}" />
                  </div>
                  <div class="admin-field">
                    <label for="material-badge">Badge</label>
                    <input id="material-badge" name="badge" value="${escapeHtml(selectedMaterial.badge)}" />
                  </div>
                </div>
                <div class="admin-field">
                  <label for="material-title">Titulo</label>
                  <input id="material-title" name="title" value="${escapeHtml(selectedMaterial.title)}" />
                </div>
                <div class="admin-field">
                  <label for="material-description">Descripcion</label>
                  <textarea id="material-description" name="description">${escapeHtml(selectedMaterial.description)}</textarea>
                </div>
                <div class="admin-field">
                  <label for="material-link">Link</label>
                  <input id="material-link" name="link" value="${escapeHtml(selectedMaterial.link || "#")}" />
                </div>
                <div class="admin-form__actions">
                  <button type="submit">Guardar material</button>
                </div>
              </form>
            `
            : `<p class="admin-empty">Agrega un material para empezar a editar.</p>`
        }
      </section>
    </section>
  `;
}

function renderAdminView() {
  return `
    <section class="members-main admin-shell">
      <section class="members-billboard members-billboard--admin">
        <div class="admin-shell__top">
          <div>
            <p class="members-kicker">Workspace admin</p>
            <h2 class="members-billboard__title">Edita la biblioteca con clima de catalogo premium.</h2>
            <p class="members-billboard__subtitle">
              Esta vista fue creada para que cambies portadas, titulos, descripciones, enlaces y materiales rapidamente, manteniendo la experiencia de la alumna coherente con el producto.
            </p>
          </div>
          ${renderAdminTabs()}
        </div>
        <div class="admin-note">
          <strong>Importante:</strong> esta primera version usa almacenamiento local del navegador para simular la operacion de admin y miembro sin backend. El proximo paso, si quieres, es conectarlo a autenticacion y base de datos reales.
        </div>
      </section>

      ${
        state.adminTab === "product"
          ? renderProductForm()
          : state.adminTab === "materials"
            ? renderMaterialEditor()
            : renderLessonEditor()
      }

      ${renderModules()}
      ${renderMaterials()}
    </section>
  `;
}

function renderApp() {
  app.innerHTML = `${renderMasthead()}${state.role === "admin" ? renderAdminView() : renderMemberView()}`;
}

function setRole(role) {
  state.role = role;
  persistState();
  renderApp();
}

function setAdminTab(tab) {
  state.adminTab = tab;
  persistState();
  renderApp();
}

function saveProduct(formData) {
  state.product = {
    ...state.product,
    name: formData.get("name")?.trim() || state.product.name,
    subtitle: formData.get("subtitle")?.trim() || state.product.subtitle,
    description: formData.get("description")?.trim() || state.product.description,
    welcomeTitle: formData.get("welcomeTitle")?.trim() || state.product.welcomeTitle,
    welcomeText: formData.get("welcomeText")?.trim() || state.product.welcomeText,
    nextStep: formData.get("nextStep")?.trim() || state.product.nextStep,
    logoSrc: formData.get("logoSrc")?.trim() || state.product.logoSrc,
    bannerSrc: formData.get("bannerSrc")?.trim() || state.product.bannerSrc,
  };

  persistState();
  renderApp();
}

function saveLesson(formData) {
  const lessonId = formData.get("id");
  const targetModuleId = formData.get("moduleId");

  const updatedLesson = {
    id: lessonId,
    title: formData.get("title")?.trim() || "Nueva clase",
    description: formData.get("description")?.trim() || "",
    duration: formData.get("duration")?.trim() || "00 min",
    status: formData.get("status")?.trim() || "Liberada",
    coverLabel: formData.get("coverLabel")?.trim() || "Clase",
    coverTag: formData.get("coverTag")?.trim() || "",
    coverTheme: formData.get("coverTheme")?.trim() || "ember",
    coverImage: formData.get("coverImage")?.trim() || "",
    embedCode: formData.get("embedCode")?.trim() || "",
    videoUrl: formData.get("videoUrl")?.trim() || "#",
    materialUrl: formData.get("materialUrl")?.trim() || "#",
  };

  state.modules = state.modules.map((module) => ({
    ...module,
    lessons: module.lessons.filter((lesson) => lesson.id !== lessonId),
  }));

  state.modules = state.modules.map((module) =>
    module.id === targetModuleId
      ? {
          ...module,
          lessons: [...module.lessons, updatedLesson],
        }
      : module,
  );

  selectedLessonId = lessonId;
  persistState();
  renderApp();
}

function saveMaterial(formData) {
  const materialId = formData.get("id");

  state.materials = state.materials.map((material) =>
    material.id === materialId
      ? {
          ...material,
          title: formData.get("title")?.trim() || "Nuevo material",
          description: formData.get("description")?.trim() || "",
          type: formData.get("type")?.trim() || "PDF",
          badge: formData.get("badge")?.trim() || "Novo",
          link: formData.get("link")?.trim() || "#",
        }
      : material,
  );

  persistState();
  renderApp();
}

function addLesson() {
  const firstModule = state.modules[0];

  if (!firstModule) {
    return;
  }

  const lessonId = `lesson-${Date.now()}`;
  firstModule.lessons = [
    {
      id: lessonId,
      title: "Nueva clase",
      description: "Describe aqui el objetivo de la clase.",
      duration: "00 min",
      status: "Rascunho",
      coverLabel: "Nova capa",
      coverTag: "Defina a promessa visual",
      coverTheme: "ember",
      coverImage: "",
      embedCode: "",
      videoUrl: "#",
      materialUrl: "#",
    },
    ...firstModule.lessons,
  ];

  selectedLessonId = lessonId;
  persistState();
  renderApp();
}

function addMaterial() {
  const materialId = `material-${Date.now()}`;

  state.materials = [
    {
      id: materialId,
      title: "Nuevo material",
      description: "Describe el objetivo del material.",
      type: "PDF",
      badge: "Novo",
      link: "#",
    },
    ...state.materials,
  ];

  selectedMaterialId = materialId;
  persistState();
  renderApp();
}

function deleteLesson(lessonId) {
  let removed = false;

  state.modules = state.modules.map((module) => {
    const filteredLessons = module.lessons.filter((lesson) => lesson.id !== lessonId);
    removed = removed || filteredLessons.length !== module.lessons.length;

    return {
      ...module,
      lessons: filteredLessons,
    };
  });

  if (!removed) {
    return;
  }

  selectedLessonId = getAllLessons(state.modules)[0]?.id || null;
  persistState();
  renderApp();
}

function deleteMaterial(materialId) {
  state.materials = state.materials.filter((material) => material.id !== materialId);
  selectedMaterialId = state.materials[0]?.id || null;
  persistState();
  renderApp();
}

function restoreDefaults() {
  state = structuredClone(defaultState);
  selectedLessonId = getAllLessons(state.modules)[0]?.id || null;
  selectedMaterialId = state.materials[0]?.id || null;
  persistState();
  renderApp();
}

app.addEventListener("click", (event) => {
  const target = event.target.closest("[data-action]");

  if (!target) {
    return;
  }

  const { action } = target.dataset;

  if (action === "set-role") {
    setRole(target.dataset.role);
  }

  if (action === "set-admin-tab") {
    setAdminTab(target.dataset.tab);
  }

  if (action === "select-lesson") {
    selectedLessonId = target.dataset.lessonId;
    renderApp();
  }

  if (action === "select-material") {
    selectedMaterialId = target.dataset.materialId;
    renderApp();
  }

  if (action === "add-lesson") {
    addLesson();
  }

  if (action === "add-material") {
    addMaterial();
  }

  if (action === "delete-lesson") {
    deleteLesson(target.dataset.lessonId);
  }

  if (action === "delete-material") {
    deleteMaterial(target.dataset.materialId);
  }

  if (action === "restore-defaults") {
    restoreDefaults();
  }

  if (action === "watch-lesson") {
    if (!target.dataset.lessonId) {
      return;
    }

    selectedLessonId = target.dataset.lessonId;
    renderApp();

    window.requestAnimationFrame(() => {
      document.getElementById("player")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }
});

app.addEventListener("submit", (event) => {
  const form = event.target.closest("[data-form]");

  if (!form) {
    return;
  }

  event.preventDefault();

  const formData = new FormData(form);
  const { form: formType } = form.dataset;

  if (formType === "product") {
    saveProduct(formData);
  }

  if (formType === "lesson") {
    saveLesson(formData);
  }

  if (formType === "material") {
    saveMaterial(formData);
  }
});

renderApp();
