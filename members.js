const MEMBERS_STORAGE_KEY = "mdpm-members-area-v8";

window.funnelAnalytics?.trackOnce("members_view");

function createVturbEmbed(playerId) {
  return `<vturb-smartplayer id="vid-${playerId}" style="display: block; margin: 0 auto; width: 100%;"></vturb-smartplayer> <script type="text/javascript"> var s=document.createElement("script"); s.src="https://scripts.converteai.net/078ca594-053b-427b-a22f-58f182182f25/players/${playerId}/v4/player.js", s.async=!0,document.head.appendChild(s); </script>`;
}

const defaultState = {
  role: "member",
  adminTab: "lessons",
  product: {
    name: "Mapa do Prazer Masculino",
    subtitle: "Método completo para mulheres",
    description:
      "Uma biblioteca prática para mulheres que querem estudar o método completo, acessar os cursos e bônus em ordem e aplicar cada técnica com mais clareza.",
    welcomeTitle: "Sua biblioteca já está organizada por cursos.",
    welcomeText:
      "Aqui você encontra o curso principal, o Sentada Fatal e os bônus em áreas separadas para facilitar o consumo e evitar mistura entre as trilhas.",
    nextStep:
      "Comece pelo Mapa do Prazer Masculino em ordem. Depois avance para Sentada Fatal e para os bônus conforme cada curso for liberado.",
    logoSrc: "./assets/mapa-do-prazer-logo.jpeg",
    bannerSrc: "./assets/mapa-do-prazer-banner.svg",
  },
  courses: [
    {
      id: "mapa-do-prazer",
      label: "Curso principal",
      title: "Mapa do Prazer Masculino",
      description:
        "Trilha principal com teoria e explícito organizados em sequência para começar e avançar sem se perder.",
      status: "Liberado",
      coverImage: "./assets/mapa-do-prazer-banner.svg",
    },
    {
      id: "sentada-fatal",
      label: "Curso",
      title: "Sentada Fatal",
      description:
        "Espaço separado para colocar as aulas e materiais do Sentada Fatal quando os embeds estiverem prontos.",
      status: "Em organização",
      coverImage: "",
    },
    {
      id: "bonus-1",
      label: "Bônus 1",
      title: "Bônus 1",
      description:
        "Área reservada para o primeiro curso bônus. Depois é só renomear e adicionar as aulas no admin.",
      status: "A configurar",
      coverImage: "",
    },
    {
      id: "bonus-2",
      label: "Bônus 2",
      title: "Bônus 2",
      description:
        "Área reservada para o segundo curso bônus, com módulo próprio para receber aulas e links.",
      status: "A configurar",
      coverImage: "",
    },
    {
      id: "bonus-3",
      label: "Bônus 3",
      title: "Bônus 3",
      description:
        "Área reservada para o terceiro curso bônus, pronta para organizar novos conteúdos.",
      status: "A configurar",
      coverImage: "",
    },
  ],
  modules: [
    {
      id: "mod-1",
      courseId: "mapa-do-prazer",
      eyebrow: "Módulo 1",
      title: "Teoria",
      description:
        "Primeiro bloco do entregável com a base teórica e as técnicas em sequência para estudar em ordem.",
      progress: 0.64,
      lessons: [
        {
          id: "lesson-1",
          title: "Aula 1 · Tradicional",
          description:
            "Primeira técnica da trilha teórica, usada como base para entender o movimento e a lógica da aplicação.",
          duration: "Aula gravada",
          status: "Liberada",
          coverLabel: "Teoria",
          coverTag: "Técnica 1 do entregável",
          coverTheme: "ember",
          coverImage: "",
          videoUrl: "#",
          materialUrl: "#",
          embedCode: createVturbEmbed("69c672b03a29b825b3ae10f2"),
        },
        {
          id: "lesson-2",
          title: "Aula 2 · Bombinha",
          description:
            "Segunda técnica do módulo teórico, aprofundando leitura de ritmo e continuidade da aplicação.",
          duration: "Aula gravada",
          status: "Liberada",
          coverLabel: "Teoria",
          coverTag: "Técnica 2 do entregável",
          coverTheme: "noir",
          coverImage: "",
          videoUrl: "#",
          materialUrl: "#",
          embedCode: createVturbEmbed("69c672a5a78f10ae44d2563b"),
        },        
        {
          id: "lesson-3",
          title: "Aula 3 · Tradicional Giratória",
          description:
            "Variação da técnica tradicional com ênfase em continuidade, ângulo e manutenção do estímulo.",
          duration: "Aula gravada",
          status: "Liberada",
          coverLabel: "Teoria",
          coverTag: "Técnica 3 do entregável",
          coverTheme: "blush",
          coverImage: "",
          videoUrl: "#",
          materialUrl: "#",
          embedCode: createVturbEmbed("69c672cec602028f65baaecb"),
        },
        {
          id: "lesson-4",
          title: "Aula 4 · Anel",
          description:
            "Quarta técnica do módulo, com foco em encaixe, controle e percepção do movimento.",
          duration: "Aula gravada",
          status: "Liberada",
          coverLabel: "Teoria",
          coverTag: "Técnica 4 do entregável",
          coverTheme: "gold",
          coverImage: "",
          videoUrl: "#",
          materialUrl: "#",
          embedCode: createVturbEmbed("69c672b794d36cec1173be10"),
        },        
        {
          id: "lesson-5",
          title: "Aula 5 · Mão Dupla",
          description:
            "Técnica que trabalha coordenação e controle com as duas mãos dentro da mesma sequência.",
          duration: "Aula gravada",
          status: "Liberada",
          coverLabel: "Teoria",
          coverTag: "Técnica 5 do entregável",
          coverTheme: "ember",
          coverImage: "",
          videoUrl: "#",
          materialUrl: "#",
          embedCode: createVturbEmbed("69c672696983e3eba6d455a7"),
        },
        {
          id: "lesson-6",
          title: "Aula 6 · Carnívora",
          description:
            "Sexta técnica do módulo teórico, aprofundando intensidade, variação e sustentação do estímulo.",
          duration: "Aula gravada",
          status: "Liberada",
          coverLabel: "Teoria",
          coverTag: "Técnica 6 do entregável",
          coverTheme: "noir",
          coverImage: "",
          videoUrl: "#",
          materialUrl: "#",
          embedCode: createVturbEmbed("69c672716983e3eba6d455c2"),
        },        
        {
          id: "lesson-7",
          title: "Aula 7 · Invertida",
          description:
            "Técnica de inversão com foco em adaptação do movimento e leitura do tempo de resposta.",
          duration: "Aula gravada",
          status: "Liberada",
          coverLabel: "Teoria",
          coverTag: "Técnica 7 do entregável",
          coverTheme: "gold",
          coverImage: "",
          videoUrl: "#",
          materialUrl: "#",
          embedCode: createVturbEmbed("69c672795610b6167ac08b13"),
        },
        {
          id: "lesson-8",
          title: "Aula 8 · Invertida Sucção",
          description:
            "Combinação de variação invertida com sucção, destacando precisão e continuidade da técnica.",
          duration: "Aula gravada",
          status: "Liberada",
          coverLabel: "Teoria",
          coverTag: "Técnica 8 do entregável",
          coverTheme: "blush",
          coverImage: "",
          videoUrl: "#",
          materialUrl: "#",
          embedCode: createVturbEmbed("69c6729cc602028f65baae44"),
        },
        {
          id: "lesson-9",
          title: "Aula 9 · Chuveirinho",
          description:
            "Técnica voltada para cadência e constância, com variação de toque dentro da mesma proposta.",
          duration: "Aula gravada",
          status: "Liberada",
          coverLabel: "Teoria",
          coverTag: "Técnica 9 do entregável",
          coverTheme: "ember",
          coverImage: "",
          videoUrl: "#",
          materialUrl: "#",
          embedCode: createVturbEmbed("69c672945493e88bf0fef577"),
        },        
        {
          id: "lesson-10",
          title: "Aula 10 · Chuveirinho Rotação",
          description:
            "Variação com rotação para aprofundar controle do movimento e consistência da execução.",
          duration: "Aula gravada",
          status: "Liberada",
          coverLabel: "Teoria",
          coverTag: "Técnica 10 do entregável",
          coverTheme: "noir",
          coverImage: "",
          videoUrl: "#",
          materialUrl: "#",
          embedCode: createVturbEmbed("69c6728dc602028f65baadf6"),
        },
        {
          id: "lesson-11",
          title: "Aula 11 · Ordenhar",
          description:
            "Técnica com ênfase em pressão e fluidez, mantendo leitura corporal durante toda a aplicação.",
          duration: "Aula gravada",
          status: "Liberada",
          coverLabel: "Teoria",
          coverTag: "Técnica 11 do entregável",
          coverTheme: "gold",
          coverImage: "",
          videoUrl: "#",
          materialUrl: "#",
          embedCode: createVturbEmbed("69c6728794d36cec1173bda8"),
        },
        {
          id: "lesson-12",
          title: "Aula 12 · Conchinha",
          description:
            "Fechamento do bloco teórico com uma técnica de leitura, conforto e continuidade do toque.",
          duration: "Aula gravada",
          status: "Liberada",
          coverLabel: "Teoria",
          coverTag: "Técnica 12 do entregável",
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
        "Segundo bloco do entregável com a parte explícita, organizado em sequência para aprofundar a visualização prática das técnicas.",
      progress: 0.72,
      lessons: [
        {
          id: "lesson-13",
          title: "Aula 1 · Tradicional",
          description:
            "Primeira aula do bloco explícito, apresentando a versão visual da técnica tradicional em aplicação direta.",
          duration: "Aula gravada",
          status: "Liberada",
          coverLabel: "Explícito",
          coverTag: "Técnica 1 do módulo explícito",
          coverTheme: "gold",
          coverImage: "",
          videoUrl: "#",
          materialUrl: "#",
          embedCode: createVturbEmbed("69c670d33a29b825b3ae0bbd"),
        },
        {
          id: "lesson-14",
          title: "Aula 2 · Invertida",
          description:
            "Continuação da trilha explícita com foco na execução visual da técnica invertida.",
          duration: "Aula gravada",
          status: "Liberada",
          coverLabel: "Explícito",
          coverTag: "Técnica 2 do módulo explícito",
          coverTheme: "ember",
          coverImage: "",
          videoUrl: "#",
          materialUrl: "#",
          embedCode: createVturbEmbed("69c670cf6d9878c16e72f4ee"),
        },
        {
          id: "lesson-15",
          title: "Aula 3 · Invertida com Sucção",
          description:
            "Variação explícita da invertida com sucção, destacando continuidade, ritmo e aplicação visual.",
          duration: "Aula gravada",
          status: "Liberada",
          coverLabel: "Explícito",
          coverTag: "Técnica 3 do módulo explícito",
          coverTheme: "blush",
          coverImage: "",
          videoUrl: "#",
          materialUrl: "#",
          embedCode: createVturbEmbed("69c670b3c602028f65baaa10"),
        },
        {
          id: "lesson-16",
          title: "Aula 4 · EGG",
          description:
            "Quarta técnica do módulo explícito, com foco na demonstração prática do encaixe e da condução.",
          duration: "Aula gravada",
          status: "Liberada",
          coverLabel: "Explícito",
          coverTag: "Técnica 4 do módulo explícito",
          coverTheme: "noir",
          coverImage: "",
          videoUrl: "#",
          materialUrl: "#",
          embedCode: createVturbEmbed("69c670aa5493e88bf0fef0f4"),
        },
        {
          id: "lesson-17",
          title: "Aula 5 · Conchinha",
          description:
            "Demonstração explícita da técnica conchinha, destacando conforto, continuidade e posicionamento.",
          duration: "Aula gravada",
          status: "Liberada",
          coverLabel: "Explícito",
          coverTag: "Técnica 5 do módulo explícito",
          coverTheme: "gold",
          coverImage: "",
          videoUrl: "#",
          materialUrl: "#",
          embedCode: createVturbEmbed("69c670b95610b6167ac086a0"),
        },
        {
          id: "lesson-18",
          title: "Aula 6 · Chuveirinho",
          description:
            "Aplicação explícita da técnica chuveirinho, com leitura visual de cadência e constância do movimento.",
          duration: "Aula gravada",
          status: "Liberada",
          coverLabel: "Explícito",
          coverTag: "Técnica 6 do módulo explícito",
          coverTheme: "ember",
          coverImage: "",
          videoUrl: "#",
          materialUrl: "#",
          embedCode: createVturbEmbed("69c670ca6d9878c16e72f4dc"),
        },
        {
          id: "lesson-19",
          title: "Aula 7 · Chuveirinho com Rotação",
          description:
            "Variação explícita com rotação para aprofundar a percepção visual do movimento e do controle.",
          duration: "Aula gravada",
          status: "Liberada",
          coverLabel: "Explícito",
          coverTag: "Técnica 7 do módulo explícito",
          coverTheme: "blush",
          coverImage: "",
          videoUrl: "#",
          materialUrl: "#",
          embedCode: createVturbEmbed("69c670c06983e3eba6d45173"),
        },
        {
          id: "lesson-20",
          title: "Aula 8 · Carnívora",
          description:
            "Oitava técnica do módulo explícito, mostrando intensidade, variação e ritmo em aplicação prática.",
          duration: "Aula gravada",
          status: "Liberada",
          coverLabel: "Explícito",
          coverTag: "Técnica 8 do módulo explícito",
          coverTheme: "noir",
          coverImage: "",
          videoUrl: "#",
          materialUrl: "#",
          embedCode: createVturbEmbed("69c670c6a78f10ae44d2514a"),
        },
        {
          id: "lesson-21",
          title: "Aula 9 · Bombinha",
          description:
            "Demonstração visual da técnica bombinha, com atenção à repetição, pressão e consistência.",
          duration: "Aula gravada",
          status: "Liberada",
          coverLabel: "Explícito",
          coverTag: "Técnica 9 do módulo explícito",
          coverTheme: "gold",
          coverImage: "",
          videoUrl: "#",
          materialUrl: "#",
          embedCode: createVturbEmbed("69c670bd6d9878c16e72f4bd"),
        },
        {
          id: "lesson-22",
          title: "Aula 10 · Anel Vibrador",
          description:
            "Aplicação explícita da técnica com anel vibrador, destacando encaixe, adaptação e ritmo.",
          duration: "Aula gravada",
          status: "Liberada",
          coverLabel: "Explícito",
          coverTag: "Técnica 10 do módulo explícito",
          coverTheme: "ember",
          coverImage: "",
          videoUrl: "#",
          materialUrl: "#",
          embedCode: createVturbEmbed("69c66f5a94d36cec1173b5e2"),
        },
        {
          id: "lesson-23",
          title: "Aula 11 · Anel",
          description:
            "Variação explícita com anel, reforçando leitura visual do movimento, ajuste e condução da técnica.",
          duration: "Aula gravada",
          status: "Liberada",
          coverLabel: "Explícito",
          coverTag: "Técnica 11 do módulo explícito",
          coverTheme: "blush",
          coverImage: "",
          videoUrl: "#",
          materialUrl: "#",
          embedCode: createVturbEmbed("69c66f5296fd2c2d9b24ece7"),
        },
        {
          id: "lesson-24",
          title: "Aula 12 · Ordenha",
          description:
            "Demonstração explícita da técnica ordenha, com foco em fluidez, pressão e leitura corporal.",
          duration: "Aula gravada",
          status: "Liberada",
          coverLabel: "Explícito",
          coverTag: "Técnica 12 do módulo explícito",
          coverTheme: "gold",
          coverImage: "",
          videoUrl: "#",
          materialUrl: "#",
          embedCode: createVturbEmbed("69c66f553a29b825b3ae08ab"),
        },
        {
          id: "lesson-25",
          title: "Aula 13 · Mão Dupla",
          description:
            "Fechamento do módulo explícito com a técnica mão dupla em versão visual, aprofundando coordenação e controle.",
          duration: "Aula gravada",
          status: "Liberada",
          coverLabel: "Explícito",
          coverTag: "Técnica 13 do módulo explícito",
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
        "Módulo inicial para adicionar as aulas do Sentada Fatal e manter esse curso separado da trilha principal.",
      progress: 0,
      lessons: [],
    },
    {
      id: "mod-bonus-1",
      courseId: "bonus-1",
      eyebrow: "Bônus 1",
      title: "Bônus 1",
      description:
        "Módulo reservado para o primeiro bônus. Renomeie quando definir o nome final do curso.",
      progress: 0,
      lessons: [],
    },
    {
      id: "mod-bonus-2",
      courseId: "bonus-2",
      eyebrow: "Bônus 2",
      title: "Bônus 2",
      description:
        "Módulo reservado para o segundo bônus. Renomeie quando definir o nome final do curso.",
      progress: 0,
      lessons: [],
    },
    {
      id: "mod-bonus-3",
      courseId: "bonus-3",
      eyebrow: "Bônus 3",
      title: "Bônus 3",
      description:
        "Módulo reservado para o terceiro bônus. Renomeie quando definir o nome final do curso.",
      progress: 0,
      lessons: [],
    },
  ],
  materials: [
    {
      id: "material-1",
      title: "Sequência completa das 12 técnicas",
      description:
        "Resumo do primeiro módulo para revisar a ordem das aulas e visualizar rapidamente as técnicas liberadas na teoria.",
      type: "PDF",
      badge: "Essencial",
      link: "#",
    },
    {
      id: "material-2",
      title: "Checklist de estudo do módulo Teoria",
      description:
        "Material de apoio para acompanhar as aulas em ordem e marcar o que já foi estudado dentro do primeiro entregável.",
      type: "Checklist",
      badge: "Suporte",
      link: "#",
    },
    {
      id: "material-3",
      title: "Sequência completa do módulo Explícito",
      description:
        "Resumo do segundo módulo para visualizar a ordem das 13 aulas explícitas e acompanhar o avanço no entregável.",
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
    throw new Error(payload?.error || "A requisição falhou.");
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
    console.warn("Não foi possível salvar no servidor.", error);
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
    <html lang="pt-BR">
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
        Visão de membro
      </button>
      <button
        class="role-switch__button"
        type="button"
        data-action="set-role"
        data-role="admin"
        aria-pressed="${state.role === "admin"}"
      >
        Visão de admin
      </button>
      <button
        class="role-switch__button"
        type="button"
        data-action="logout-admin"
      >
        Sair
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
          alt="Logo do produto ${escapeHtml(state.product.name)}"
        />
        <div class="members-topbar__brand">
          <p class="members-topbar__eyebrow">${escapeHtml(state.product.subtitle)}</p>
          <h1 class="members-topbar__title">${escapeHtml(state.product.name)}</h1>
        </div>
        <nav class="members-topbar__nav" aria-label="Navegação principal">
          <a class="members-topbar__link" href="#cursos"${activeCourse ? ` data-action="close-course"` : ""}>Cursos</a>
          ${
            activeCourse
              ? `
                <a class="members-topbar__link" href="#featured">Início</a>
                <a class="members-topbar__link" href="#modulos">Aulas</a>
                ${activeCourse.id === "mapa-do-prazer" ? `<a class="members-topbar__link" href="#materiais">Materiais</a>` : ""}
              `
              : ""
          }
        </nav>
      </div>
      <div class="members-topbar__right">
        <div class="members-topbar__meta">
          <span class="pill">${state.modules.length} módulos</span>
          <span class="pill">${state.courses.length} cursos</span>
          <span class="pill">${lessons.length} aulas</span>
          <span class="pill">${state.materials.length} materiais</span>
          <span class="pill pill--accent">${state.role === "admin" ? "Admin" : "Membro"}</span>
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
        <p class="members-billboard__eyebrow">Comece por aqui</p>
        <h2 class="members-billboard__title">${escapeHtml(state.product.welcomeTitle)}</h2>
        <p class="members-billboard__subtitle">${escapeHtml(state.product.welcomeText)}</p>
        <div class="members-billboard__meta">
          <span class="pill">${totalLessons} aulas na biblioteca</span>
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
            Começar agora
          </button>
        </div>
      </div>
      <div class="members-billboard__spotlight">
        <div class="members-billboard__info">
          <span class="members-billboard__badge">Próxima aula</span>
          <strong class="members-billboard__focus">${escapeHtml(featuredLesson?.title || "Primeira aula da trilha")}</strong>
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
  return `
    <section class="course-home" id="cursos">
      <div class="course-home__intro">
        <p class="members-kicker">Área de membros</p>
        <h2>Escolha seu curso</h2>
        <p>Entre por uma capa e continue a trilha sem mistura entre curso principal, Sentada Fatal e bônus.</p>
      </div>

      <div class="course-poster-grid">
        ${state.courses
          .map((course) => {
            const coverStyle = getCourseCoverStyle(course);
            const coverClass = course.coverImage
              ? "course-poster"
              : `course-poster course-poster--placeholder course-poster--${escapeHtml(course.id)}`;

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
                  <span class="course-poster__label">${escapeHtml(course.label)}</span>
                  <strong>${escapeHtml(course.title)}</strong>
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
  const modules = getCourseModules(course.id);
  const lessons = getCourseLessons(course.id);
  const coverStyle = getCourseCoverStyle(
    course,
    "linear-gradient(90deg, rgba(5, 3, 4, 0.94) 0%, rgba(5, 3, 4, 0.76) 48%, rgba(5, 3, 4, 0.2) 100%)",
  );

  return `
    <section class="course-detail-hero" id="featured" ${coverStyle}>
      <button class="ghost-link course-back" type="button" data-action="close-course">
        Voltar aos cursos
      </button>
      <div class="course-detail-hero__content">
        <p class="members-kicker">${escapeHtml(course.label)}</p>
        <h2>${escapeHtml(course.title)}</h2>
        <p>${escapeHtml(course.description)}</p>
        <div class="members-billboard__meta">
          <span class="pill">${modules.length} módulo${modules.length === 1 ? "" : "s"}</span>
          <span class="pill">${lessons.length} aula${lessons.length === 1 ? "" : "s"}</span>
          <span class="pill pill--accent">${escapeHtml(course.status)}</span>
        </div>
        ${
          lessons.length > 0
            ? `<button class="primary-link" type="button" data-action="watch-lesson" data-lesson-id="${escapeHtml(lessons[0].id)}">Continuar curso</button>`
            : `<span class="pill">Aulas ainda serão adicionadas</span>`
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
          <h2 class="content-block__title">Entrar no painel</h2>
          <p class="content-block__subtitle">A edição de cursos e aulas fica protegida por login de administrador.</p>
        </div>
        ${loginError ? `<p class="admin-login-card__error">${escapeHtml(loginError)}</p>` : ""}
        <form class="admin-form" data-form="login">
          <div class="admin-field">
            <label for="admin-password">Senha</label>
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
        <span class="lesson-cover__eyebrow">${escapeHtml(lesson.coverLabel || "Aula")}</span>
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
          ${isPlayable ? "Assistir aula" : "Em breve"}
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
          <h2 class="content-block__title">${escapeHtml(lesson?.title || "Selecione uma aula")}</h2>
          <p class="content-block__subtitle">${escapeHtml(lesson?.description || state.product.nextStep)}</p>
        </div>
        <div class="lesson-player-panel__chips">
          <span class="pill">${escapeHtml(lesson?.duration || "Biblioteca")}</span>
          <span class="pill pill--accent">${escapeHtml(lesson?.status || "Disponível")}</span>
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
                  <strong>Essa aula está pronta para abrir por link.</strong>
                  <p>O player embutido ainda não foi configurado para esse item, mas o acesso já pode ser feito pelo link da aula.</p>
                  <a class="primary-link" href="${escapeHtml(lesson.videoUrl)}" target="_blank" rel="noreferrer">
                    Abrir aula
                  </a>
                </div>
              `
              : `
                <div class="lesson-player-empty">
                  <strong>Player ainda não configurado.</strong>
                  <p>Essa aula já existe na biblioteca, mas o embed ainda não foi plugado. Quando você mandar o restante, eu encaixo aqui.</p>
                </div>
              `
        }
      </div>

      <div class="lesson-player-panel__footer">
        ${
          lesson?.materialUrl && lesson.materialUrl !== "#"
            ? `<a class="ghost-link" href="${escapeHtml(lesson.materialUrl)}" target="_blank" rel="noreferrer">Abrir material complementar</a>`
            : `<span class="lesson-player-panel__hint">Use os cards abaixo para trocar rapidamente de aula dentro da mesma área.</span>`
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

function renderEmptyModule(module) {
  return `
    <article class="course-empty">
      <p class="course-card__label">${escapeHtml(module.eyebrow)}</p>
      <h3>${escapeHtml(module.title)}</h3>
      <p>${escapeHtml(module.description)}</p>
      <span class="pill">Sem aulas adicionadas ainda</span>
    </article>
  `;
}

function renderCourseSection(course) {
  const modules = getCourseModules(course.id);
  const lessons = getCourseLessons(course.id);

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
          <span class="pill">${lessons.length} aula${lessons.length === 1 ? "" : "s"}</span>
        </div>
      </div>

      <div class="course-section__body">
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
            : `<article class="course-empty"><p>Esse curso ainda não tem módulos cadastrados.</p></article>`
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
    <section class="members-shelf" id="materiais">
      <div class="members-shelf__top">
        <div>
          <h2 class="content-block__title">Materiais de apoio</h2>
          <p class="content-block__subtitle">PDFs, guias e bônus para acompanhar as aulas sem perder clareza na aplicação.</p>
        </div>
        <span class="pill">${state.materials.length} itens</span>
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
    { id: "product", label: "Produto" },
    { id: "courses", label: "Cursos" },
    { id: "lessons", label: "Aulas" },
    { id: "materials", label: "Materiais" },
  ];

  return `
    <div class="admin-tab-row" role="tablist" aria-label="Seções do admin">
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
          <h2 class="content-block__title">Configuração do produto</h2>
          <p class="content-block__subtitle">Edite nome, subtítulo, mensagem principal e posicionamento da área de membros.</p>
        </div>
        <button class="outline-button" type="button" data-action="restore-defaults">
          Restaurar conteúdo original
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
          <label for="product-description">Descrição</label>
          <textarea id="product-description" name="description">${escapeHtml(state.product.description)}</textarea>
        </div>
        <div class="admin-field">
          <label for="product-welcome-title">Título de boas-vindas</label>
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
          <p class="admin-form__help">Pode ser um caminho local do projeto ou uma URL pública.</p>
        </div>
        <div class="admin-field">
          <label for="product-banner-src">Banner principal</label>
          <input id="product-banner-src" name="bannerSrc" value="${escapeHtml(state.product.bannerSrc || "")}" />
          <p class="admin-form__help">Arte principal da área de membros, no estilo catálogo.</p>
        </div>
        <div class="admin-form__actions">
          <button type="submit">Salvar produto</button>
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
            <p class="content-block__subtitle">Renomeie as trilhas e organize o curso principal, Sentada Fatal e os bônus.</p>
          </div>
          <button class="admin-action" type="button" data-action="add-course">
            Novo curso
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
                  <p class="admin-list__item-copy">${modules.length} módulo${modules.length === 1 ? "" : "s"} · ${lessons.length} aula${lessons.length === 1 ? "" : "s"} · ${escapeHtml(course.status)}</p>
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
            <p class="content-block__subtitle">Atualize o nome que aparece na biblioteca e nos cards de curso.</p>
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
                  <label for="course-title">Nome do curso</label>
                  <input id="course-title" name="title" value="${escapeHtml(selectedCourse.title)}" />
                </div>
                <div class="admin-field">
                  <label for="course-description">Descrição</label>
                  <textarea id="course-description" name="description">${escapeHtml(selectedCourse.description)}</textarea>
                </div>
                <div class="admin-field">
                  <label for="course-cover-image">Foto de capa</label>
                  <input id="course-cover-image" name="coverImage" value="${escapeHtml(selectedCourse.coverImage || "")}" />
                  <p class="admin-form__help">Use um caminho de imagem do projeto ou uma URL pública para aparecer como capa do card.</p>
                </div>
                <div class="admin-form__actions">
                  <button type="submit">Salvar curso</button>
                </div>
              </form>
            `
            : `<p class="admin-empty">Selecione um curso para editar.</p>`
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
            <h2 class="content-block__title">Aulas</h2>
            <p class="content-block__subtitle">Selecione um card para editar capa, título, descrição e links.</p>
          </div>
          <button class="admin-action" type="button" data-action="add-lesson">
            Nova aula
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
            <h2 class="content-block__title">Editor de aula</h2>
            <p class="content-block__subtitle">Mantenha o visual e a copy alinhados ao produto enquanto organiza a biblioteca.</p>
          </div>
          ${
            selectedLesson
              ? `<button class="outline-button" type="button" data-action="delete-lesson" data-lesson-id="${escapeHtml(selectedLesson.id)}">Excluir aula</button>`
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
                    <label for="lesson-duration">Duração</label>
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
                  <label for="lesson-description">Descrição</label>
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
                  <p class="admin-form__help">Se deixar vazio, o card usa o gradiente temático.</p>
                </div>
                <div class="admin-field">
                  <label for="lesson-embed-code">Embed da aula</label>
                  <textarea id="lesson-embed-code" name="embedCode">${escapeHtml(selectedLesson.embedCode || "")}</textarea>
                  <p class="admin-form__help">Cole aqui o embed completo da VTurb quando quiser abrir a aula dentro da área de membros.</p>
                </div>
                <div class="admin-form__row">
                  <div class="admin-field">
                    <label for="lesson-video-url">Link da aula</label>
                    <input id="lesson-video-url" name="videoUrl" value="${escapeHtml(selectedLesson.videoUrl || "#")}" />
                  </div>
                  <div class="admin-field">
                    <label for="lesson-material-url">Link do material</label>
                    <input id="lesson-material-url" name="materialUrl" value="${escapeHtml(selectedLesson.materialUrl || "#")}" />
                  </div>
                </div>
                <div class="admin-form__actions">
                  <button type="submit">Salvar aula</button>
                </div>
              </form>
            `
            : `<p class="admin-empty">Adicione uma aula para começar a editar.</p>`
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
            <h2 class="content-block__title">Materiais</h2>
            <p class="content-block__subtitle">Organize PDFs, guias, bônus e links de apoio para a aluna.</p>
          </div>
          <button class="admin-action" type="button" data-action="add-material">
            Novo material
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
            <p class="content-block__subtitle">Atualize nome, descrição, categoria e link de acesso.</p>
          </div>
          ${
            selectedMaterial
              ? `<button class="outline-button" type="button" data-action="delete-material" data-material-id="${escapeHtml(selectedMaterial.id)}">Excluir material</button>`
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
                  <label for="material-description">Descrição</label>
                  <textarea id="material-description" name="description">${escapeHtml(selectedMaterial.description)}</textarea>
                </div>
                <div class="admin-field">
                  <label for="material-link">Link</label>
                  <input id="material-link" name="link" value="${escapeHtml(selectedMaterial.link || "#")}" />
                </div>
                <div class="admin-form__actions">
                  <button type="submit">Salvar material</button>
                </div>
              </form>
            `
            : `<p class="admin-empty">Adicione um material para começar a editar.</p>`
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
            <h2 class="members-billboard__title">Organize cursos, bônus e aulas em um só lugar.</h2>
            <p class="members-billboard__subtitle">
              Use os módulos para separar cada curso, renomeie os bônus quando tiver os nomes finais e encaixe os embeds na trilha certa.
            </p>
          </div>
          ${renderAdminTabs()}
        </div>
        <div class="admin-note">
          <strong>Importante:</strong> essa primeira versão usa armazenamento local do navegador para simular a operação de admin e membro sem backend. O próximo passo, se você quiser, é ligar isso a autenticação e banco de dados reais.
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
  const title = formData.get("title")?.trim() || previousCourse?.title || "Novo curso";
  const label = formData.get("label")?.trim() || previousCourse?.label || "Curso";
  const description = formData.get("description")?.trim() || previousCourse?.description || "";
  const status = formData.get("status")?.trim() || previousCourse?.status || "A configurar";
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
    title: formData.get("title")?.trim() || "Nova aula",
    description: formData.get("description")?.trim() || "",
    duration: formData.get("duration")?.trim() || "00 min",
    status: formData.get("status")?.trim() || "Liberada",
    coverLabel: formData.get("coverLabel")?.trim() || "Aula",
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
          title: formData.get("title")?.trim() || "Novo material",
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
      title: "Nova aula",
      description: "Descreva aqui o objetivo da aula.",
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

function addCourse() {
  const timestamp = Date.now();
  const courseId = `course-${timestamp}`;
  const moduleId = `mod-${timestamp}`;

  state.courses = [
    {
      id: courseId,
      label: "Novo curso",
      title: "Novo curso",
      description: "Descreva a promessa e a ordem desse curso.",
      status: "A configurar",
      coverImage: "",
    },
    ...state.courses,
  ];

  state.modules = [
    {
      id: moduleId,
      courseId,
      eyebrow: "Módulo 1",
      title: "Comece por aqui",
      description: "Primeiro módulo do novo curso.",
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
      title: "Novo material",
      description: "Descreva o objetivo do material.",
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
      loginError = error.message || "Não foi possível entrar.";
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
