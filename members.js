const MEMBERS_STORAGE_KEY = "mdpm-members-area-es-v1";

window.funnelAnalytics?.trackOnce("members_view");

function createVturbEmbed(playerId) {
  return `<vturb-smartplayer id="vid-${playerId}" style="display: block; margin: 0 auto; width: 100%;"></vturb-smartplayer> <script type="text/javascript"> var s=document.createElement("script"); s.src="https://scripts.converteai.net/078ca594-053b-427b-a22f-58f182182f25/players/${playerId}/v4/player.js", s.async=!0,document.head.appendChild(s); </script>`;
}

const defaultState = {
  role: "member",
  adminTab: "lessons",
  product: {
    name: "Mapa del Placer Masculino",
    subtitle: "Método completo para mujeres",
    description:
      "Una biblioteca práctica para mujeres que quieren estudiar el método completo, acceder a los cursos y bonos en orden y aplicar cada técnica con más claridad.",
    welcomeTitle: "Tu biblioteca ya está organizada por cursos.",
    welcomeText:
      "Aquí encuentras el curso principal, Sentada Fatal y los bonos en áreas separadas para consumir cada ruta sin mezclar contenidos.",
    nextStep:
      "Empieza por el Mapa del Placer Masculino en orden. Después avanza hacia Sentada Fatal y los bonos conforme cada curso sea liberado.",
    logoSrc: "./assets/mapa-do-prazer-logo.jpeg",
    bannerSrc: "./assets/mapa-do-prazer-banner.svg",
  },
  courses: [
    {
      id: "mapa-do-prazer",
      label: "Curso principal",
      title: "Mapa del Placer Masculino",
      description:
        "Ruta principal con teoría y contenido explícito organizados en secuencia para empezar y avanzar sin perderte.",
      status: "Liberado",
      coverImage: "./assets/mapa-do-prazer-banner.svg",
    },
    {
      id: "sentada-fatal",
      label: "Curso",
      title: "Sentada Fatal",
      description:
        "Espacio separado para colocar las clases y materiales de Sentada Fatal cuando los embeds estén listos.",
      status: "En organización",
      coverImage: "",
    },
    {
      id: "bonus-1",
      label: "Bono 1",
      title: "Bono 1",
      description:
        "Área reservada para el primer curso bono. Después solo debes renombrarla y agregar las clases en el admin.",
      status: "Por configurar",
      coverImage: "",
    },
    {
      id: "bonus-2",
      label: "Bono 2",
      title: "Bono 2",
      description:
        "Área reservada para el segundo curso bono, con módulo propio para recibir clases y enlaces.",
      status: "Por configurar",
      coverImage: "",
    },
    {
      id: "bonus-3",
      label: "Bono 3",
      title: "Bono 3",
      description:
        "Área reservada para el tercer curso bono, lista para organizar nuevos contenidos.",
      status: "Por configurar",
      coverImage: "",
    },
  ],
  modules: [
    {
      id: "mod-1",
      courseId: "mapa-do-prazer",
      eyebrow: "Módulo 1",
      title: "Teoría",
      description:
        "Primer bloque del entregable con la base teórica y las técnicas en secuencia para estudiar en orden.",
      progress: 0.64,
      lessons: [
        {
          id: "lesson-1",
          title: "Clase 1 · Tradicional",
          description:
            "Primera técnica de la ruta teórica, usada como base para entender el movimiento y la lógica de aplicación.",
          duration: "Clase grabada",
          status: "Liberada",
          coverLabel: "Teoría",
          coverTag: "Técnica 1 del entregable",
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
            "Segunda técnica del módulo teórico, profundizando lectura de ritmo y continuidad de la aplicación.",
          duration: "Clase grabada",
          status: "Liberada",
          coverLabel: "Teoría",
          coverTag: "Técnica 2 del entregable",
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
            "Variación de la técnica tradicional con énfasis en continuidad, ángulo y mantenimiento del estímulo.",
          duration: "Clase grabada",
          status: "Liberada",
          coverLabel: "Teoría",
          coverTag: "Técnica 3 del entregable",
          coverTheme: "blush",
          coverImage: "",
          videoUrl: "#",
          materialUrl: "#",
          embedCode: createVturbEmbed("69c672cec602028f65baaecb"),
        },
        {
          id: "lesson-4",
          title: "Clase 4 · Anillo",
          description:
            "Cuarta técnica del módulo, con foco en encaje, control y percepción del movimiento.",
          duration: "Clase grabada",
          status: "Liberada",
          coverLabel: "Teoría",
          coverTag: "Técnica 4 del entregable",
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
            "Técnica que trabaja coordinación y control con ambas manos dentro de la misma secuencia.",
          duration: "Clase grabada",
          status: "Liberada",
          coverLabel: "Teoría",
          coverTag: "Técnica 5 del entregable",
          coverTheme: "ember",
          coverImage: "",
          videoUrl: "#",
          materialUrl: "#",
          embedCode: createVturbEmbed("69c672696983e3eba6d455a7"),
        },
        {
          id: "lesson-6",
          title: "Clase 6 · Carnívora",
          description:
            "Sexta técnica del módulo teórico, profundizando intensidad, variación y sostenimiento del estímulo.",
          duration: "Clase grabada",
          status: "Liberada",
          coverLabel: "Teoría",
          coverTag: "Técnica 6 del entregable",
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
            "Técnica de inversión con foco en adaptación del movimiento y lectura del tiempo de respuesta.",
          duration: "Clase grabada",
          status: "Liberada",
          coverLabel: "Teoría",
          coverTag: "Técnica 7 del entregable",
          coverTheme: "gold",
          coverImage: "",
          videoUrl: "#",
          materialUrl: "#",
          embedCode: createVturbEmbed("69c672795610b6167ac08b13"),
        },
        {
          id: "lesson-8",
          title: "Clase 8 · Invertida Succión",
          description:
            "Combinación de variación invertida con succión, destacando precisión y continuidad de la técnica.",
          duration: "Clase grabada",
          status: "Liberada",
          coverLabel: "Teoría",
          coverTag: "Técnica 8 del entregable",
          coverTheme: "blush",
          coverImage: "",
          videoUrl: "#",
          materialUrl: "#",
          embedCode: createVturbEmbed("69c6729cc602028f65baae44"),
        },
        {
          id: "lesson-9",
          title: "Clase 9 · Duchita",
          description:
            "Técnica orientada a cadencia y constancia, con variación de toque dentro de la misma propuesta.",
          duration: "Clase grabada",
          status: "Liberada",
          coverLabel: "Teoría",
          coverTag: "Técnica 9 del entregable",
          coverTheme: "ember",
          coverImage: "",
          videoUrl: "#",
          materialUrl: "#",
          embedCode: createVturbEmbed("69c672945493e88bf0fef577"),
        },        
        {
          id: "lesson-10",
          title: "Clase 10 · Duchita Rotación",
          description:
            "Variación con rotación para profundizar control del movimiento y consistencia de la ejecución.",
          duration: "Clase grabada",
          status: "Liberada",
          coverLabel: "Teoría",
          coverTag: "Técnica 10 del entregable",
          coverTheme: "noir",
          coverImage: "",
          videoUrl: "#",
          materialUrl: "#",
          embedCode: createVturbEmbed("69c6728dc602028f65baadf6"),
        },
        {
          id: "lesson-11",
          title: "Clase 11 · Ordeñar",
          description:
            "Técnica con énfasis en presión y fluidez, manteniendo lectura corporal durante toda la aplicación.",
          duration: "Clase grabada",
          status: "Liberada",
          coverLabel: "Teoría",
          coverTag: "Técnica 11 del entregable",
          coverTheme: "gold",
          coverImage: "",
          videoUrl: "#",
          materialUrl: "#",
          embedCode: createVturbEmbed("69c6728794d36cec1173bda8"),
        },
        {
          id: "lesson-12",
          title: "Clase 12 · Cucharita",
          description:
            "Cierre del bloque teórico con una técnica de lectura, comodidad y continuidad del toque.",
          duration: "Clase grabada",
          status: "Liberada",
          coverLabel: "Teoría",
          coverTag: "Técnica 12 del entregable",
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
      courseId: "mapa-do-prazer",
      eyebrow: "Módulo 2",
      title: "Explícito",
      description:
        "Segundo bloque del entregable con la parte explícita, organizado en secuencia para profundizar la visualización práctica de las técnicas.",
      progress: 0.72,
      lessons: [
        {
          id: "lesson-13",
          title: "Clase 1 · Tradicional",
          description:
            "Primera clase del bloque explícito, presentando la versión visual de la técnica tradicional en aplicación directa.",
          duration: "Clase grabada",
          status: "Liberada",
          coverLabel: "Explícito",
          coverTag: "Técnica 1 del módulo explícito",
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
            "Continuación de la ruta explícita con foco en la ejecución visual de la técnica invertida.",
          duration: "Clase grabada",
          status: "Liberada",
          coverLabel: "Explícito",
          coverTag: "Técnica 2 del módulo explícito",
          coverTheme: "ember",
          coverImage: "",
          videoUrl: "#",
          materialUrl: "#",
          embedCode: createVturbEmbed("69c670cf6d9878c16e72f4ee"),
        },
        {
          id: "lesson-15",
          title: "Clase 3 · Invertida con Succión",
          description:
            "Variación explícita de la invertida con succión, destacando continuidad, ritmo y aplicación visual.",
          duration: "Clase grabada",
          status: "Liberada",
          coverLabel: "Explícito",
          coverTag: "Técnica 3 del módulo explícito",
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
            "Cuarta técnica del módulo explícito, con foco en la demostración práctica del encaje y la conducción.",
          duration: "Clase grabada",
          status: "Liberada",
          coverLabel: "Explícito",
          coverTag: "Técnica 4 del módulo explícito",
          coverTheme: "noir",
          coverImage: "",
          videoUrl: "#",
          materialUrl: "#",
          embedCode: createVturbEmbed("69c670aa5493e88bf0fef0f4"),
        },
        {
          id: "lesson-17",
          title: "Clase 5 · Cucharita",
          description:
            "Demostración explícita de la técnica cucharita, destacando comodidad, continuidad y posicionamiento.",
          duration: "Clase grabada",
          status: "Liberada",
          coverLabel: "Explícito",
          coverTag: "Técnica 5 del módulo explícito",
          coverTheme: "gold",
          coverImage: "",
          videoUrl: "#",
          materialUrl: "#",
          embedCode: createVturbEmbed("69c670b95610b6167ac086a0"),
        },
        {
          id: "lesson-18",
          title: "Clase 6 · Duchita",
          description:
            "Aplicación explícita de la técnica duchita, con lectura visual de cadencia y constancia del movimiento.",
          duration: "Clase grabada",
          status: "Liberada",
          coverLabel: "Explícito",
          coverTag: "Técnica 6 del módulo explícito",
          coverTheme: "ember",
          coverImage: "",
          videoUrl: "#",
          materialUrl: "#",
          embedCode: createVturbEmbed("69c670ca6d9878c16e72f4dc"),
        },
        {
          id: "lesson-19",
          title: "Clase 7 · Duchita con Rotación",
          description:
            "Variación explícita con rotación para profundizar la percepción visual del movimiento y del control.",
          duration: "Clase grabada",
          status: "Liberada",
          coverLabel: "Explícito",
          coverTag: "Técnica 7 del módulo explícito",
          coverTheme: "blush",
          coverImage: "",
          videoUrl: "#",
          materialUrl: "#",
          embedCode: createVturbEmbed("69c670c06983e3eba6d45173"),
        },
        {
          id: "lesson-20",
          title: "Clase 8 · Carnívora",
          description:
            "Octava técnica del módulo explícito, mostrando intensidad, variación y ritmo en aplicación práctica.",
          duration: "Clase grabada",
          status: "Liberada",
          coverLabel: "Explícito",
          coverTag: "Técnica 8 del módulo explícito",
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
            "Demostración visual de la técnica bombita, con atención a la repetición, presión y consistencia.",
          duration: "Clase grabada",
          status: "Liberada",
          coverLabel: "Explícito",
          coverTag: "Técnica 9 del módulo explícito",
          coverTheme: "gold",
          coverImage: "",
          videoUrl: "#",
          materialUrl: "#",
          embedCode: createVturbEmbed("69c670bd6d9878c16e72f4bd"),
        },
        {
          id: "lesson-22",
          title: "Clase 10 · Anillo Vibrador",
          description:
            "Aplicación explícita de la técnica con anillo vibrador, destacando encaje, adaptación y ritmo.",
          duration: "Clase grabada",
          status: "Liberada",
          coverLabel: "Explícito",
          coverTag: "Técnica 10 del módulo explícito",
          coverTheme: "ember",
          coverImage: "",
          videoUrl: "#",
          materialUrl: "#",
          embedCode: createVturbEmbed("69c66f5a94d36cec1173b5e2"),
        },
        {
          id: "lesson-23",
          title: "Clase 11 · Anillo",
          description:
            "Variación explícita con anillo, reforzando lectura visual del movimiento, ajuste y conducción de la técnica.",
          duration: "Clase grabada",
          status: "Liberada",
          coverLabel: "Explícito",
          coverTag: "Técnica 11 del módulo explícito",
          coverTheme: "blush",
          coverImage: "",
          videoUrl: "#",
          materialUrl: "#",
          embedCode: createVturbEmbed("69c66f5296fd2c2d9b24ece7"),
        },
        {
          id: "lesson-24",
          title: "Clase 12 · Ordeño",
          description:
            "Demostración explícita de la técnica ordeño, con foco en fluidez, presión y lectura corporal.",
          duration: "Clase grabada",
          status: "Liberada",
          coverLabel: "Explícito",
          coverTag: "Técnica 12 del módulo explícito",
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
            "Cierre del módulo explícito con la técnica mano doble en versión visual, profundizando coordinación y control.",
          duration: "Clase grabada",
          status: "Liberada",
          coverLabel: "Explícito",
          coverTag: "Técnica 13 del módulo explícito",
          coverTheme: "noir",
          coverImage: "",
          videoUrl: "#",
          materialUrl: "#",
          embedCode: createVturbEmbed("69c66f4e6983e3eba6d44dde"),
        },
      ],
    },
    {
      id: "mod-sentada-fatal",
      courseId: "sentada-fatal",
      eyebrow: "Curso",
      title: "Sentada Fatal",
      description:
        "Módulo inicial para agregar las clases de Sentada Fatal y mantener este curso separado de la ruta principal.",
      progress: 0,
      lessons: [],
    },
    {
      id: "mod-bonus-1",
      courseId: "bonus-1",
      eyebrow: "Bono 1",
      title: "Bono 1",
      description:
        "Módulo reservado para el primer bono. Renómbralo cuando definas el nombre final del curso.",
      progress: 0,
      lessons: [],
    },
    {
      id: "mod-bonus-2",
      courseId: "bonus-2",
      eyebrow: "Bono 2",
      title: "Bono 2",
      description:
        "Módulo reservado para el segundo bono. Renómbralo cuando definas el nombre final del curso.",
      progress: 0,
      lessons: [],
    },
    {
      id: "mod-bonus-3",
      courseId: "bonus-3",
      eyebrow: "Bono 3",
      title: "Bono 3",
      description:
        "Módulo reservado para el tercer bono. Renómbralo cuando definas el nombre final del curso.",
      progress: 0,
      lessons: [],
    },
  ],
  materials: [
    {
      id: "material-1",
      title: "Secuencia completa de las 12 técnicas",
      description:
        "Resumen del primer módulo para revisar el orden de las clases y visualizar rápidamente las técnicas liberadas en la teoría.",
      type: "PDF",
      badge: "Esencial",
      link: "#",
    },
    {
      id: "material-2",
      title: "Checklist de estudio del módulo Teoría",
      description:
        "Material de apoyo para acompañar las clases en orden y marcar lo que ya fue estudiado dentro del primer entregable.",
      type: "Checklist",
      badge: "Soporte",
      link: "#",
    },
    {
      id: "material-3",
      title: "Secuencia completa del módulo Explícito",
      description:
        "Resumen del segundo módulo para visualizar el orden de las 13 clases explícitas y acompañar el avance en el entregable.",
      type: "PDF",
      badge: "Explícito",
      link: "#",
    },
  ],
};

let state = loadState();
let selectedLessonId = getAllLessons(state.modules)[0]?.id || null;
let selectedMaterialId = state.materials[0]?.id || null;
let selectedCourseId = state.courses[0]?.id || null;
let activeCourseId = null;
let lessonSearchQuery = "";
let lessonModuleFilter = "all";
let lessonStatusFilter = "all";
let isAdminAuthenticated = false;
let loginError = "";

const app = document.getElementById("members-app");

function isAdminEntry() {
  return window.location.pathname.startsWith("/admin") || window.location.hash === "#admin";
}

function getContentState() {
  return {
    product: state.product,
    courses: state.courses,
    modules: state.modules,
    materials: state.materials,
  };
}

function mergeContentState(content) {
  if (!content) {
    return;
  }

  state = mergeState({
    ...state,
    product: content.product || state.product,
    courses: content.courses || state.courses,
    modules: content.modules || state.modules,
    materials: content.materials || state.materials,
  });

  selectedLessonId = getAllLessons(state.modules)[0]?.id || null;
  selectedMaterialId = state.materials[0]?.id || null;
  selectedCourseId = state.courses[0]?.id || null;
}

async function fetchJson(url, options = {}) {
  const response = await fetch(url, {
    credentials: "same-origin",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
  });

  let payload = null;
  try {
    payload = await response.json();
  } catch {
    payload = null;
  }

  if (!response.ok) {
    throw new Error(payload?.error || "La solicitud falló.");
  }

  return payload;
}

async function loadServerContent() {
  try {
    const payload = await fetchJson("/api/content");
    mergeContentState(payload.content);
  } catch {
    // Static preview without the Node server keeps using the bundled content.
  }
}

async function checkAdminSession() {
  try {
    const payload = await fetchJson("/api/admin/session");
    isAdminAuthenticated = Boolean(payload.authenticated);
  } catch {
    isAdminAuthenticated = false;
  }

  if (!isAdminAuthenticated) {
    state.role = "member";
  }
}

async function saveContentToServer() {
  if (!isAdminAuthenticated) {
    return;
  }

  try {
    await fetchJson("/api/admin/content", {
      method: "POST",
      body: JSON.stringify({ content: getContentState() }),
    });
  } catch (error) {
    console.warn("No fue posible guardar en el servidor.", error);
  }
}

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
  const rawCourses = Array.isArray(savedState?.courses) && savedState.courses.length > 0
    ? savedState.courses
    : fallback.courses;
  const rawModules = Array.isArray(savedState?.modules) && savedState.modules.length > 0
    ? savedState.modules
    : fallback.modules;

  return {
    ...fallback,
    ...savedState,
    product: {
      ...fallback.product,
      ...(savedState?.product || {}),
    },
    courses: rawCourses.map((course) => ({
      ...(fallback.courses.find((item) => item.id === course.id) || {}),
      ...course,
    })),
    modules: rawModules.map((module) => ({
      ...module,
      courseId: module.courseId || "mapa-do-prazer",
      lessons: module.lessons || [],
    })),
    materials: Array.isArray(savedState?.materials) && savedState.materials.length > 0
      ? savedState.materials
      : fallback.materials,
  };
}

function persistState() {
  localStorage.setItem(MEMBERS_STORAGE_KEY, JSON.stringify(state));
  saveContentToServer();
}

function getAllLessons(modules) {
  return modules.flatMap((module) =>
    (module.lessons || []).map((lesson) => ({
      ...lesson,
      moduleId: module.id,
      moduleTitle: module.title,
      moduleEyebrow: module.eyebrow,
      courseId: module.courseId || "mapa-do-prazer",
    })),
  );
}

function getCourseById(courseId) {
  return state.courses.find((course) => course.id === courseId) || null;
}

function getCourseModules(courseId) {
  return state.modules.filter((module) => (module.courseId || "mapa-do-prazer") === courseId);
}

function getCourseLessons(courseId) {
  return getAllLessons(getCourseModules(courseId));
}

function getCourseStats(courseId) {
  const modules = getCourseModules(courseId);
  const lessons = getCourseLessons(courseId);
  const playableLessons = lessons.filter((lesson) => lesson.embedCode || (lesson.videoUrl && lesson.videoUrl !== "#"));
  const progress = lessons.length > 0 ? Math.round((playableLessons.length / lessons.length) * 100) : 0;

  return {
    modules,
    lessons,
    playableLessons,
    progress,
  };
}

function normalizeFilterText(value) {
  return String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

function getFilteredCourseLessons(course) {
  const normalizedSearch = normalizeFilterText(lessonSearchQuery);

  return getCourseLessons(course.id).filter((lesson) => {
    const matchesModule = lessonModuleFilter === "all" || lesson.moduleId === lessonModuleFilter;
    const matchesStatus = lessonStatusFilter === "all" || lesson.status === lessonStatusFilter;
    const searchableText = normalizeFilterText([
      lesson.title,
      lesson.description,
      lesson.moduleTitle,
      lesson.moduleEyebrow,
      lesson.coverTag,
      lesson.status,
    ].join(" "));
    const matchesSearch = !normalizedSearch || searchableText.includes(normalizedSearch);

    return matchesModule && matchesStatus && matchesSearch;
  });
}

function resetLessonFilters() {
  lessonSearchQuery = "";
  lessonModuleFilter = "all";
  lessonStatusFilter = "all";
}

function getModuleCourse(moduleId) {
  const module = state.modules.find((item) => item.id === moduleId);
  return getCourseById(module?.courseId || "mapa-do-prazer");
}

function getSelectedLesson() {
  return getAllLessons(state.modules).find((lesson) => lesson.id === selectedLessonId) || null;
}

function getSelectedMaterial() {
  return state.materials.find((material) => material.id === selectedMaterialId) || null;
}

function getSelectedCourse() {
  return state.courses.find((course) => course.id === selectedCourseId) || null;
}

function getActiveCourse() {
  return state.courses.find((course) => course.id === activeCourseId) || null;
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
  if (!isAdminAuthenticated) {
    return "";
  }

  return `
    <div class="role-switch" role="tablist" aria-label="Perfis">
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
      <button
        class="role-switch__button"
        type="button"
        data-action="logout-admin"
      >
        Salir
      </button>
    </div>
  `;
}

function renderMasthead() {
  const lessons = getAllLessons(state.modules);
  const activeCourse = getActiveCourse();

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
        <nav class="members-topbar__nav" aria-label="Navegación principal">
          <a class="members-topbar__link" href="#cursos"${activeCourse ? ` data-action="close-course"` : ""}>Cursos</a>
          ${
            activeCourse
              ? `
                <a class="members-topbar__link" href="#featured">Inicio</a>
                <a class="members-topbar__link" href="#modulos">Clases</a>
                ${activeCourse.id === "mapa-do-prazer" ? `<a class="members-topbar__link" href="#materiales">Materiales</a>` : ""}
              `
              : ""
          }
        </nav>
      </div>
      <div class="members-topbar__right">
        <div class="members-topbar__meta">
          <span class="pill">${state.modules.length} módulos</span>
          <span class="pill">${state.courses.length} cursos</span>
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
        <p class="members-billboard__eyebrow">Empieza por aquí</p>
        <h2 class="members-billboard__title">${escapeHtml(state.product.welcomeTitle)}</h2>
        <p class="members-billboard__subtitle">${escapeHtml(state.product.welcomeText)}</p>
        <div class="members-billboard__meta">
          <span class="pill">${totalLessons} clases en la biblioteca</span>
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
        </div>
      </div>
      <div class="members-billboard__spotlight">
        <div class="members-billboard__info">
          <span class="members-billboard__badge">Próxima clase</span>
          <strong class="members-billboard__focus">${escapeHtml(featuredLesson?.title || "Primera clase de la ruta")}</strong>
          <p class="members-billboard__caption">${escapeHtml(featuredLesson?.description || state.product.nextStep)}</p>
        </div>
      </div>
    </section>
  `;
}

function getCourseCoverStyle(course, overlay = "linear-gradient(180deg, rgba(5, 3, 4, 0.02), rgba(5, 3, 4, 0.72))") {
  return course.coverImage
    ? `style="background-image: ${overlay}, url('${escapeHtml(course.coverImage)}')"`
    : "";
}

function renderQuickBand() {
  return renderShelf(
    "Continue de onde parar",
    state.product.nextStep,
    getAllLessons(state.modules).slice(0, 6),
    "shelf-row--continue",
    "continuar",
  );
}

function renderCourseCatalog() {
  const totalLessons = getAllLessons(state.modules).length;
  const availableCourses = state.courses.filter((course) => getCourseLessons(course.id).length > 0).length;

  return `
    <section class="course-home" id="cursos">
      <div class="course-home__intro">
        <div>
          <p class="members-kicker">Área de miembros</p>
          <h2>Elige tu curso</h2>
          <p>Empieza por el curso principal y entra a cada bono desde una ruta separada, con módulos y clases visibles antes de abrir.</p>
        </div>
        <div class="course-home__summary" aria-label="Resumen de biblioteca">
          <span><strong>${state.courses.length}</strong> cursos</span>
          <span><strong>${availableCourses}</strong> con clases</span>
          <span><strong>${totalLessons}</strong> clases</span>
        </div>
      </div>

      <div class="course-poster-grid">
        ${state.courses
          .map((course) => {
            const stats = getCourseStats(course.id);
            const coverStyle = getCourseCoverStyle(course);
            const coverClass = course.coverImage
              ? "course-poster"
              : `course-poster course-poster--placeholder course-poster--${escapeHtml(course.id)}`;
            const nextLesson = stats.lessons[0];

            return `
              <button
                class="${coverClass}"
                type="button"
                data-action="open-course"
                data-course-id="${escapeHtml(course.id)}"
                ${coverStyle}
              >
                <span class="course-poster__shade"></span>
                <span class="course-poster__content">
                  <span class="course-poster__topline">
                    <span class="course-poster__label">${escapeHtml(course.label)}</span>
                    <span class="course-poster__status">${escapeHtml(course.status)}</span>
                  </span>
                  <strong>${escapeHtml(course.title)}</strong>
                  <span class="course-poster__description">${escapeHtml(course.description)}</span>
                  <span class="course-poster__meta">
                    <span>${stats.modules.length} módulo${stats.modules.length === 1 ? "" : "s"}</span>
                    <span>${stats.lessons.length} clase${stats.lessons.length === 1 ? "" : "s"}</span>
                    <span>${stats.progress}% listo</span>
                  </span>
                  <span class="course-progress" aria-hidden="true">
                    <span style="width: ${stats.progress}%"></span>
                  </span>
                  <span class="course-poster__next">${nextLesson ? `Siguiente: ${escapeHtml(nextLesson.title)}` : "Contenido en preparación"}</span>
                </span>
              </button>
            `;
          })
          .join("")}
      </div>
    </section>
  `;
}

function renderCourseDetailHero(course) {
  const { modules, lessons, playableLessons, progress } = getCourseStats(course.id);
  const coverStyle = getCourseCoverStyle(
    course,
    "linear-gradient(90deg, rgba(5, 3, 4, 0.94) 0%, rgba(5, 3, 4, 0.76) 48%, rgba(5, 3, 4, 0.2) 100%)",
  );

  return `
    <section class="course-detail-hero" id="featured" ${coverStyle}>
      <button class="ghost-link course-back" type="button" data-action="close-course">
        Volver a los cursos
      </button>
      <div class="course-detail-hero__content">
        <p class="members-kicker">${escapeHtml(course.label)}</p>
        <h2>${escapeHtml(course.title)}</h2>
        <p>${escapeHtml(course.description)}</p>
        <div class="members-billboard__meta">
          <span class="pill">${modules.length} módulo${modules.length === 1 ? "" : "s"}</span>
          <span class="pill">${lessons.length} clase${lessons.length === 1 ? "" : "s"}</span>
          <span class="pill">${playableLessons.length} disponibles</span>
          <span class="pill pill--accent">${escapeHtml(course.status)}</span>
        </div>
        <div class="course-detail-progress">
          <span class="course-progress" aria-label="${progress}% del curso listo">
            <span style="width: ${progress}%"></span>
          </span>
          <small>${progress}% listo para ver</small>
        </div>
        ${
          lessons.length > 0
            ? `<button class="primary-link" type="button" data-action="watch-lesson" data-lesson-id="${escapeHtml(lessons[0].id)}">Continuar curso</button>`
            : `<span class="pill">Las clases aún serán agregadas</span>`
        }
      </div>
    </section>
  `;
}

function renderAdminLogin() {
  return `
    <section class="members-main admin-login-shell">
      <section class="members-card admin-login-card">
        <div>
          <p class="members-kicker">Admin</p>
          <h2 class="content-block__title">Entrar al panel</h2>
          <p class="content-block__subtitle">La edición de cursos y clases queda protegida por login de administrador.</p>
        </div>
        ${loginError ? `<p class="admin-login-card__error">${escapeHtml(loginError)}</p>` : ""}
        <form class="admin-form" data-form="login">
          <div class="admin-field">
            <label for="admin-password">Contraseña</label>
            <input id="admin-password" name="password" type="password" autocomplete="current-password" required />
          </div>
          <div class="admin-form__actions">
            <button type="submit">Entrar</button>
          </div>
        </form>
      </section>
    </section>
  `;
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
          ${isPlayable ? "Ver clase" : "Próximamente"}
        </button>
      </div>
    </article>
  `;
}

function renderLessonPlayer() {
  const lesson = getSelectedLesson() || getFeaturedLesson();
  const canRenderEmbed = Boolean(lesson?.embedCode);
  const canRenderLink = Boolean(lesson?.videoUrl && lesson.videoUrl !== "#");
  const course = lesson ? getCourseById(lesson.courseId) : null;
  const moduleLabel = lesson
    ? `${course?.title || "Curso"} · ${lesson.moduleEyebrow} · ${lesson.moduleTitle}`
    : "Biblioteca";

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
                  <strong>Esta clase está lista para abrirse por enlace.</strong>
                  <p>El player embebido aún no fue configurado para este ítem, pero el acceso ya puede hacerse por el enlace de la clase.</p>
                  <a class="primary-link" href="${escapeHtml(lesson.videoUrl)}" target="_blank" rel="noreferrer">
                    Abrir clase
                  </a>
                </div>
              `
              : `
                <div class="lesson-player-empty">
                  <strong>Player aún no configurado.</strong>
                  <p>Esta clase ya existe en la biblioteca, pero el embed aún no fue conectado. Cuando tengas el resto, se puede encajar aquí.</p>
                </div>
              `
        }
      </div>

      <div class="lesson-player-panel__footer">
        ${
          lesson?.materialUrl && lesson.materialUrl !== "#"
            ? `<a class="ghost-link" href="${escapeHtml(lesson.materialUrl)}" target="_blank" rel="noreferrer">Abrir material complementario</a>`
            : `<span class="lesson-player-panel__hint">Usa las tarjetas de abajo para cambiar rápidamente de clase dentro de la misma área.</span>`
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

function renderLessonFilters(course) {
  const modules = getCourseModules(course.id);
  const lessons = getCourseLessons(course.id);
  const statuses = [...new Set(lessons.map((lesson) => lesson.status).filter(Boolean))];
  const filteredLessons = getFilteredCourseLessons(course);

  return `
    <section class="lesson-filter-panel" aria-label="Filtros de clases">
      <div class="lesson-filter-panel__top">
        <div>
          <p class="members-kicker">Biblioteca del curso</p>
          <h2 class="content-block__title">Encuentra la clase correcta</h2>
          <p class="content-block__subtitle">Filtra por módulo, estado o palabra clave para saltar directo a la clase que necesitas.</p>
        </div>
        <span class="pill pill--accent">${filteredLessons.length} de ${lessons.length} clases</span>
      </div>
      <div class="lesson-filters">
        <label class="lesson-filter-field">
          <span>Buscar</span>
          <input
            type="search"
            data-filter="lesson-search"
            value="${escapeHtml(lessonSearchQuery)}"
            placeholder="Nombre, técnica o tema"
            autocomplete="off"
          />
        </label>
        <label class="lesson-filter-field">
          <span>Módulo</span>
          <select data-filter="lesson-module">
            <option value="all"${lessonModuleFilter === "all" ? " selected" : ""}>Todos los módulos</option>
            ${modules
              .map(
                (module) => `
                  <option value="${escapeHtml(module.id)}"${lessonModuleFilter === module.id ? " selected" : ""}>
                    ${escapeHtml(`${module.eyebrow} · ${module.title}`)}
                  </option>
                `,
              )
              .join("")}
          </select>
        </label>
        <label class="lesson-filter-field">
          <span>Estado</span>
          <select data-filter="lesson-status">
            <option value="all"${lessonStatusFilter === "all" ? " selected" : ""}>Todos los estados</option>
            ${statuses
              .map(
                (status) => `
                  <option value="${escapeHtml(status)}"${lessonStatusFilter === status ? " selected" : ""}>${escapeHtml(status)}</option>
                `,
              )
              .join("")}
          </select>
        </label>
        <button class="ghost-link lesson-filter-reset" type="button" data-action="reset-lesson-filters">Limpiar</button>
      </div>
      <div class="lesson-results">
        ${
          filteredLessons.length > 0
            ? filteredLessons.map(renderLessonListItem).join("")
            : `<article class="lesson-results__empty">No encontramos clases con esos filtros.</article>`
        }
      </div>
    </section>
  `;
}

function renderLessonListItem(lesson) {
  const isActive = lesson.id === selectedLessonId;
  const isPlayable = Boolean(lesson.embedCode || (lesson.videoUrl && lesson.videoUrl !== "#"));

  return `
    <button
      class="lesson-result${isActive ? " is-active" : ""}"
      type="button"
      data-action="watch-lesson"
      data-lesson-id="${escapeHtml(lesson.id)}"
    >
      <span class="lesson-result__index">${escapeHtml(lesson.moduleEyebrow)}</span>
      <span class="lesson-result__body">
        <strong>${escapeHtml(lesson.title)}</strong>
        <small>${escapeHtml(lesson.moduleTitle)} · ${escapeHtml(lesson.duration)}</small>
      </span>
      <span class="lesson-result__status">${isPlayable ? "Ver ahora" : "Próximamente"}</span>
    </button>
  `;
}

function renderEmptyModule(module) {
  return `
    <article class="course-empty">
      <p class="course-card__label">${escapeHtml(module.eyebrow)}</p>
      <h3>${escapeHtml(module.title)}</h3>
      <p>${escapeHtml(module.description)}</p>
      <span class="pill">Sin clases agregadas todavía</span>
    </article>
  `;
}

function renderCourseSection(course) {
  const modules = getCourseModules(course.id);
  const lessons = getCourseLessons(course.id);
  const isActiveCourse = activeCourseId === course.id;

  return `
    <section class="course-section" id="course-${escapeHtml(course.id)}">
      <div class="course-section__top">
        <div>
          <p class="course-card__label">${escapeHtml(course.label)}</p>
          <h2 class="content-block__title">${escapeHtml(course.title)}</h2>
          <p class="content-block__subtitle">${escapeHtml(course.description)}</p>
        </div>
        <div class="course-section__stats">
          <span class="pill">${modules.length} módulo${modules.length === 1 ? "" : "s"}</span>
          <span class="pill">${lessons.length} clase${lessons.length === 1 ? "" : "s"}</span>
        </div>
      </div>

      <div class="course-section__body">
        ${isActiveCourse && lessons.length > 0 ? renderLessonFilters(course) : ""}
        ${
          modules.length > 0
            ? modules
                .map((module) =>
                  (module.lessons || []).length > 0
                    ? renderShelf(
                        `${module.eyebrow} · ${module.title}`,
                        module.description,
                        module.lessons,
                        "shelf-row--posters",
                      )
                    : renderEmptyModule(module),
                )
                .join("")
            : `<article class="course-empty"><p>Este curso aún no tiene módulos registrados.</p></article>`
        }
      </div>
    </section>
  `;
}

function renderModules() {
  const activeCourse = getActiveCourse();
  const courses = activeCourse ? [activeCourse] : state.courses;

  return `
    <section class="course-library" id="modulos">
      ${courses.map(renderCourseSection).join("")}
    </section>
  `;
}

function renderMaterials() {
  return `
    <section class="members-shelf" id="materiales">
      <div class="members-shelf__top">
        <div>
          <h2 class="content-block__title">Materiales de apoyo</h2>
          <p class="content-block__subtitle">PDFs, guías y bonos para acompañar las clases sin perder claridad en la aplicación.</p>
        </div>
        <span class="pill">${state.materials.length} materiales</span>
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
  const activeCourse = getActiveCourse();
  const courseLessons = activeCourse ? getCourseLessons(activeCourse.id) : [];

  if (!activeCourse) {
    return `
      <section class="members-main members-home">
        ${renderCourseCatalog()}
      </section>
    `;
  }

  return `
    <section class="members-main course-detail">
      ${renderCourseDetailHero(activeCourse)}
      ${courseLessons.length > 0 ? renderLessonPlayer() : ""}
      ${renderModules()}
      ${activeCourse.id === "mapa-do-prazer" ? renderMaterials() : ""}
    </section>
  `;
}

function renderAdminTabs() {
  const tabs = [
    { id: "product", label: "Producto" },
    { id: "courses", label: "Cursos" },
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
          <h2 class="content-block__title">Configuración del producto</h2>
          <p class="content-block__subtitle">Edita nombre, subtítulo, mensaje principal y posicionamiento del área de miembros.</p>
        </div>
        <button class="outline-button" type="button" data-action="restore-defaults">
          Restaurar contenido original
        </button>
      </div>

      <form class="admin-form" data-form="product">
        <div class="admin-form__row">
          <div class="admin-field">
            <label for="product-name">Nome do produto</label>
            <input id="product-name" name="name" value="${escapeHtml(state.product.name)}" />
          </div>
          <div class="admin-field">
            <label for="product-subtitle">Subtítulo</label>
            <input id="product-subtitle" name="subtitle" value="${escapeHtml(state.product.subtitle)}" />
          </div>
        </div>
        <div class="admin-field">
          <label for="product-description">Descripción</label>
          <textarea id="product-description" name="description">${escapeHtml(state.product.description)}</textarea>
        </div>
        <div class="admin-field">
          <label for="product-welcome-title">Título de bienvenida</label>
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
          <p class="admin-form__help">Puede ser una ruta local del proyecto o una URL pública.</p>
        </div>
        <div class="admin-field">
          <label for="product-banner-src">Banner principal</label>
          <input id="product-banner-src" name="bannerSrc" value="${escapeHtml(state.product.bannerSrc || "")}" />
          <p class="admin-form__help">Arte principal del área de miembros, en estilo catálogo.</p>
        </div>
        <div class="admin-form__actions">
          <button type="submit">Guardar producto</button>
        </div>
      </form>
    </section>
  `;
}

function renderCourseEditor() {
  const selectedCourse = getSelectedCourse();

  return `
    <section class="admin-grid">
      <aside class="members-card admin-list">
        <div class="admin-list__header">
          <div>
            <h2 class="content-block__title">Cursos</h2>
            <p class="content-block__subtitle">Renombra las rutas y organiza el curso principal, Sentada Fatal y los bonos.</p>
          </div>
          <button class="admin-action" type="button" data-action="add-course">
            Nuevo curso
          </button>
        </div>
        <div class="admin-list__items">
          ${state.courses
            .map((course) => {
              const modules = getCourseModules(course.id);
              const lessons = getCourseLessons(course.id);

              return `
                <button
                  class="admin-list__item${course.id === selectedCourseId ? " is-active" : ""}"
                  type="button"
                  data-action="select-course"
                  data-course-id="${escapeHtml(course.id)}"
                >
                  <h3 class="admin-list__item-title">${escapeHtml(course.title)}</h3>
                  <p class="admin-list__item-copy">${modules.length} módulo${modules.length === 1 ? "" : "s"} · ${lessons.length} clase${lessons.length === 1 ? "" : "s"} · ${escapeHtml(course.status)}</p>
                </button>
              `;
            })
            .join("")}
        </div>
      </aside>

      <section class="members-card admin-form-card">
        <div class="admin-form-card__header">
          <div>
            <h2 class="content-block__title">Editor de curso</h2>
            <p class="content-block__subtitle">Actualiza el nombre que aparece en la biblioteca y en las tarjetas de curso.</p>
          </div>
        </div>

        ${
          selectedCourse
            ? `
              <form class="admin-form" data-form="course">
                <input type="hidden" name="id" value="${escapeHtml(selectedCourse.id)}" />
                <div class="admin-form__row">
                  <div class="admin-field">
                    <label for="course-label">Categoria</label>
                    <input id="course-label" name="label" value="${escapeHtml(selectedCourse.label)}" />
                  </div>
                  <div class="admin-field">
                    <label for="course-status">Status</label>
                    <input id="course-status" name="status" value="${escapeHtml(selectedCourse.status)}" />
                  </div>
                </div>
                <div class="admin-field">
                  <label for="course-title">Nombre del curso</label>
                  <input id="course-title" name="title" value="${escapeHtml(selectedCourse.title)}" />
                </div>
                <div class="admin-field">
                  <label for="course-description">Descripción</label>
                  <textarea id="course-description" name="description">${escapeHtml(selectedCourse.description)}</textarea>
                </div>
                <div class="admin-field">
                  <label for="course-cover-image">Foto de capa</label>
                  <input id="course-cover-image" name="coverImage" value="${escapeHtml(selectedCourse.coverImage || "")}" />
                  <p class="admin-form__help">Usa una ruta de imagen del proyecto o una URL pública para aparecer como portada de la tarjeta.</p>
                </div>
                <div class="admin-form__actions">
                  <button type="submit">Guardar curso</button>
                </div>
              </form>
            `
            : `<p class="admin-empty">Selecciona un curso para editar.</p>`
        }
      </section>
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
            <p class="content-block__subtitle">Selecciona una tarjeta para editar portada, título, descripción y enlaces.</p>
          </div>
          <button class="admin-action" type="button" data-action="add-lesson">
            Nueva clase
          </button>
        </div>
        <div class="admin-list__items">
          ${lessons
            .map(
              (lesson) => {
                const course = getCourseById(lesson.courseId);

                return `
                  <button
                    class="admin-list__item${lesson.id === selectedLessonId ? " is-active" : ""}"
                    type="button"
                    data-action="select-lesson"
                    data-lesson-id="${escapeHtml(lesson.id)}"
                  >
                    <h3 class="admin-list__item-title">${escapeHtml(lesson.title)}</h3>
                    <p class="admin-list__item-copy">${escapeHtml(course?.title || "Curso")} · ${escapeHtml(lesson.moduleTitle)} · ${escapeHtml(lesson.duration)} · ${escapeHtml(lesson.status)}</p>
                  </button>
                `;
              },
            )
            .join("")}
        </div>
      </aside>

      <section class="members-card admin-form-card">
        <div class="admin-form-card__header">
          <div>
            <h2 class="content-block__title">Editor de clase</h2>
            <p class="content-block__subtitle">Mantén el visual y la copy alineados al producto mientras organizas la biblioteca.</p>
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
                    <label for="lesson-module">Módulo</label>
                    <select id="lesson-module" name="moduleId">
                      ${state.modules
                        .map(
                          (module) => {
                            const course = getCourseById(module.courseId || "mapa-do-prazer");

                            return `
                            <option value="${escapeHtml(module.id)}"${module.id === selectedLesson.moduleId ? " selected" : ""}>
                              ${escapeHtml(course?.title || "Curso")} · ${escapeHtml(module.eyebrow)} · ${escapeHtml(module.title)}
                            </option>
                          `;
                          },
                        )
                        .join("")}
                    </select>
                  </div>
                  <div class="admin-field">
                    <label for="lesson-duration">Duración</label>
                    <input id="lesson-duration" name="duration" value="${escapeHtml(selectedLesson.duration)}" />
                  </div>
                </div>
                <div class="admin-form__row">
                  <div class="admin-field">
                    <label for="lesson-status">Status</label>
                    <input id="lesson-status" name="status" value="${escapeHtml(selectedLesson.status)}" />
                  </div>
                  <div class="admin-field">
                    <label for="lesson-theme">Tema da capa</label>
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
                  <label for="lesson-title">Título</label>
                  <input id="lesson-title" name="title" value="${escapeHtml(selectedLesson.title)}" />
                </div>
                <div class="admin-field">
                  <label for="lesson-description">Descripción</label>
                  <textarea id="lesson-description" name="description">${escapeHtml(selectedLesson.description)}</textarea>
                </div>
                <div class="admin-form__row">
                  <div class="admin-field">
                    <label for="lesson-cover-label">Texto curto da capa</label>
                    <input id="lesson-cover-label" name="coverLabel" value="${escapeHtml(selectedLesson.coverLabel)}" />
                  </div>
                  <div class="admin-field">
                    <label for="lesson-cover-tag">Apoio da capa</label>
                    <input id="lesson-cover-tag" name="coverTag" value="${escapeHtml(selectedLesson.coverTag)}" />
                  </div>
                </div>
                <div class="admin-field">
                  <label for="lesson-cover-image">Imagem da capa</label>
                  <input id="lesson-cover-image" name="coverImage" value="${escapeHtml(selectedLesson.coverImage || "")}" />
                  <p class="admin-form__help">Si lo dejas vacío, la tarjeta usa el degradado temático.</p>
                </div>
                <div class="admin-field">
                  <label for="lesson-embed-code">Embed de la clase</label>
                  <textarea id="lesson-embed-code" name="embedCode">${escapeHtml(selectedLesson.embedCode || "")}</textarea>
                  <p class="admin-form__help">Pega aquí el embed completo de VTurb cuando quieras abrir la clase dentro del área de miembros.</p>
                </div>
                <div class="admin-form__row">
                  <div class="admin-field">
                    <label for="lesson-video-url">Enlace de la clase</label>
                    <input id="lesson-video-url" name="videoUrl" value="${escapeHtml(selectedLesson.videoUrl || "#")}" />
                  </div>
                  <div class="admin-field">
                    <label for="lesson-material-url">Link do material</label>
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
            <p class="content-block__subtitle">Organiza PDFs, guías, bonos y enlaces de apoyo para la alumna.</p>
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
            <p class="content-block__subtitle">Actualiza nombre, descripción, categoría y enlace de acceso.</p>
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
                  <label for="material-title">Título</label>
                  <input id="material-title" name="title" value="${escapeHtml(selectedMaterial.title)}" />
                </div>
                <div class="admin-field">
                  <label for="material-description">Descripción</label>
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
            <h2 class="members-billboard__title">Organiza cursos, bonos y clases en un solo lugar.</h2>
            <p class="members-billboard__subtitle">
              Usa los módulos para separar cada curso, renombra los bonos cuando tengas los nombres finales y encaja los embeds en la ruta correcta.
            </p>
          </div>
          ${renderAdminTabs()}
        </div>
        <div class="admin-note">
          <strong>Importante:</strong> esta primera versión usa almacenamiento local del navegador para simular la operación de admin y miembro sin backend. El próximo paso es conectarlo a autenticación y base de datos reales.
        </div>
      </section>

      ${
        state.adminTab === "product"
          ? renderProductForm()
          : state.adminTab === "courses"
            ? renderCourseEditor()
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
  if (isAdminEntry() && !isAdminAuthenticated) {
    app.innerHTML = `${renderMasthead()}${renderAdminLogin()}`;
    return;
  }

  if (!isAdminAuthenticated && state.role === "admin") {
    state.role = "member";
  }

  app.innerHTML = `${renderMasthead()}${state.role === "admin" && isAdminAuthenticated ? renderAdminView() : renderMemberView()}`;
}

function setRole(role) {
  if (role === "admin" && !isAdminAuthenticated) {
    window.history.pushState(null, "", "/admin");
    renderApp();
    return;
  }

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

function saveCourse(formData) {
  const courseId = formData.get("id");
  const previousCourse = getCourseById(courseId);
  const title = formData.get("title")?.trim() || previousCourse?.title || "Nuevo curso";
  const label = formData.get("label")?.trim() || previousCourse?.label || "Curso";
  const description = formData.get("description")?.trim() || previousCourse?.description || "";
  const status = formData.get("status")?.trim() || previousCourse?.status || "Por configurar";
  const coverImage = formData.get("coverImage")?.trim() || "";

  state.courses = state.courses.map((course) =>
    course.id === courseId
      ? {
          ...course,
          label,
          title,
          description,
          status,
          coverImage,
        }
      : course,
  );

  if (courseId !== "mapa-do-prazer") {
    state.modules = state.modules.map((module) =>
      module.courseId === courseId
        ? {
            ...module,
            eyebrow: label,
            title,
            description,
          }
        : module,
    );
  }

  selectedCourseId = courseId;
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
          badge: formData.get("badge")?.trim() || "Nuevo",
          link: formData.get("link")?.trim() || "#",
        }
      : material,
  );

  persistState();
  renderApp();
}

function addLesson() {
  const selectedLesson = getSelectedLesson();
  const firstModule =
    state.modules.find((module) => module.courseId === selectedCourseId) ||
    state.modules.find((module) => module.id === selectedLesson?.moduleId) ||
    state.modules[0];

  if (!firstModule) {
    return;
  }

  const lessonId = `lesson-${Date.now()}`;
  firstModule.lessons = [
    {
      id: lessonId,
      title: "Nueva clase",
      description: "Describe aquí el objetivo de la clase.",
      duration: "00 min",
      status: "Borrador",
      coverLabel: "Nueva portada",
      coverTag: "Define la promesa visual",
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

function addCourse() {
  const timestamp = Date.now();
  const courseId = `course-${timestamp}`;
  const moduleId = `mod-${timestamp}`;

  state.courses = [
    {
      id: courseId,
      label: "Nuevo curso",
      title: "Nuevo curso",
      description: "Describe la promesa y el orden de este curso.",
      status: "Por configurar",
      coverImage: "",
    },
    ...state.courses,
  ];

  state.modules = [
    {
      id: moduleId,
      courseId,
      eyebrow: "Módulo 1",
      title: "Empieza por aquí",
      description: "Primer módulo del nuevo curso.",
      progress: 0,
      lessons: [],
    },
    ...state.modules,
  ];

  selectedCourseId = courseId;
  activeCourseId = courseId;
  state.adminTab = "courses";
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
      badge: "Nuevo",
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
  selectedCourseId = state.courses[0]?.id || null;
  activeCourseId = null;
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

  if (action === "logout-admin") {
    fetchJson("/api/admin/logout", { method: "POST", body: "{}" }).catch(() => {});
    isAdminAuthenticated = false;
    state.role = "member";
    window.history.pushState(null, "", "/");
    renderApp();
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

  if (action === "select-course") {
    selectedCourseId = target.dataset.courseId;
    renderApp();
  }

  if (action === "open-course") {
    event.preventDefault();
    activeCourseId = target.dataset.courseId;
    resetLessonFilters();
    const firstLesson = getCourseLessons(activeCourseId)[0];
    selectedLessonId = firstLesson?.id || null;
    renderApp();

    window.requestAnimationFrame(() => {
      document.getElementById("featured")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }

  if (action === "close-course") {
    event.preventDefault();
    activeCourseId = null;
    resetLessonFilters();
    renderApp();

    window.requestAnimationFrame(() => {
      document.getElementById("cursos")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }

  if (action === "add-lesson") {
    addLesson();
  }

  if (action === "add-course") {
    addCourse();
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

  if (action === "reset-lesson-filters") {
    resetLessonFilters();
    renderApp();
  }

  if (action === "watch-lesson") {
    if (!target.dataset.lessonId) {
      return;
    }

    selectedLessonId = target.dataset.lessonId;
    const lesson = getSelectedLesson();
    activeCourseId = lesson?.courseId || activeCourseId;
    renderApp();

    window.requestAnimationFrame(() => {
      document.getElementById("player")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }
});

app.addEventListener("input", (event) => {
  const target = event.target.closest("[data-filter]");

  if (!target) {
    return;
  }

  if (target.dataset.filter === "lesson-search") {
    lessonSearchQuery = target.value;
    renderApp();

    window.requestAnimationFrame(() => {
      document.querySelector('[data-filter="lesson-search"]')?.focus();
    });
  }
});

app.addEventListener("change", (event) => {
  const target = event.target.closest("[data-filter]");

  if (!target) {
    return;
  }

  if (target.dataset.filter === "lesson-module") {
    lessonModuleFilter = target.value;
  }

  if (target.dataset.filter === "lesson-status") {
    lessonStatusFilter = target.value;
  }

  renderApp();
});

app.addEventListener("submit", async (event) => {
  const form = event.target.closest("[data-form]");

  if (!form) {
    return;
  }

  event.preventDefault();

  const formData = new FormData(form);
  const { form: formType } = form.dataset;

  if (formType === "login") {
    loginError = "";

    try {
      await fetchJson("/api/admin/login", {
        method: "POST",
        body: JSON.stringify({ password: formData.get("password") || "" }),
      });

      isAdminAuthenticated = true;
      state.role = "admin";
      renderApp();
    } catch (error) {
      loginError = error.message || "No fue posible entrar.";
      renderApp();
    }

    return;
  }

  if (formType === "product") {
    saveProduct(formData);
  }

  if (formType === "course") {
    saveCourse(formData);
  }

  if (formType === "lesson") {
    saveLesson(formData);
  }

  if (formType === "material") {
    saveMaterial(formData);
  }
});

async function bootstrapApp() {
  await loadServerContent();
  await checkAdminSession();

  if (isAdminEntry() && isAdminAuthenticated) {
    state.role = "admin";
  }

  renderApp();
}

bootstrapApp();
