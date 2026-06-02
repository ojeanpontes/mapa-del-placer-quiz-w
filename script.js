const FINAL_CTA_URL = "./pv.html";

const imageLibrary = {
  intro: {
    src: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=80&w=1200",
    alt: "Imagen generica de una mesa con cuaderno y anotaciones",
    credit: "Foto: Thought Catalog via Unsplash",
    position: "center 48%",
    layout: "single",
  },
  tension: {
    src: "https://images.unsplash.com/photo-1631609473077-67318e84b31c?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=80&w=1200",
    alt: "Pareja tomada de la mano en primer plano",
    credit: "Foto: Ozgur Avsar via Unsplash",
    position: "center 42%",
  },
  reflection: {
    src: "https://images.unsplash.com/photo-1669846691725-005aac248ef4?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=80&w=1200",
    alt: "Mujer mirando al frente con expresion seria",
    credit: "Foto: Folasade Adeniran via Unsplash",
    position: "center 30%",
  },
  promise: {
    src: "https://images.unsplash.com/photo-1694975348833-e923366e6f1d?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=80&w=1200",
    alt: "Pareja tomada de la mano con anillos en destaque",
    credit: "Foto: Lucas Sankey via Unsplash",
    position: "center 38%",
  },
  studyDesk: {
    src: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=80&w=1200",
    alt: "Mesa con cuaderno, papel y anotaciones",
    credit: "Foto: Thought Catalog via Unsplash",
    position: "center 48%",
  },
  studyPaper: {
    src: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=80&w=1200",
    alt: "Documento con texto y anotaciones sobre la mesa",
    credit: "Foto: Green Chameleon via Unsplash",
    position: "center 50%",
  },
  viniSolo: {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Vinicius%20Junior%20%282025%29.jpg",
    alt: "Vinicius Junior en retrato publico",
    credit: "Imagem: Wikimedia Commons",
    position: "center 18%",
  },
  viniVirginiaGift: {
    src: "https://s03.video.glbimg.com/x720/14352074.jpg",
    alt: "Virginia y Vini Jr en foto publicada en redes",
    credit: "Reproduccion/Instagram via gshow",
    position: "center 30%",
  },
  viniVirginiaStadium: {
    src: "https://s01.video.glbimg.com/x720/14420768.jpg",
    alt: "Virginia en Madrid acompanando el partido de Vini Jr",
    credit: "Reproduccion/Instagram via gshow",
    position: "center 35%",
  },
  viniVirginiaKiss: {
    src: "https://s01.video.glbimg.com/x720/14430756.jpg",
    alt: "Virginia y Vini Jr besandose en foto publicada en redes",
    credit: "Reproduccion/Instagram via gshow",
    position: "center 28%",
  },
  viniVirginiaTimeline: {
    src: "https://s02.video.glbimg.com/x720/14018449.jpg",
    alt: "Linea de tiempo de la relacion de Virginia y Vini Jr",
    credit: "gshow",
    position: "center 35%",
  },
  virginia: {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Virginia%20Fonseca%20at%20Lady%20Night%2C%20by%20Humor%20Multishow%2C%20in%202021.png",
    alt: "Virginia Fonseca en aparicion televisiva",
    credit: "Imagem: Humor Multishow via Wikimedia Commons",
    position: "center 24%",
  },
  zeFelipe: {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Z%C3%A9%20Felipe%20Lady%20Night%202021.png",
    alt: "Ze Felipe en aparicion televisiva",
    credit: "Imagem: Multishow via Wikimedia Commons",
    position: "center 24%",
  },
};

const steps = [
  {
    type: "intro",
    mood: {
      eyebrow: "Experiencia confidencial",
      title: "Directo al punto.",
      copy:
        "Una apertura corta, fuerte y pensada para que entres al quiz sin pensarlo dos veces.",
      visualLabel: "Test rapido",
      visualStat: "7 preguntas",
      visualCaption:
        "Sin vueltas. Sin exposicion. Solo lo que importa.",
      tags: ["confidencial", "rapido", "directo"],
      image: imageLibrary.intro,
    },
    kicker: "Test confidencial",
    title: "Descubre tu mapa de intimidad",
    subheadline:
      "con mas seguridad, comunicacion y presencia en la intimidad.",
    paragraphs: [
      "Responde el test de abajo y recibe una recomendacion educativa segun tu momento actual.",
    ],
    microcopy: "Toma menos de 2 minutos. 100% confidencial.",
    cta: "INICIAR TEST PERSONALIZADO",
    media: {
      ...imageLibrary.intro,
      alt: "Tarjeta visual de apertura",
    },
  },
  {
    type: "question",
    key: "status",
    index: 1,
    total: 7,
    mood: {
      eyebrow: "Pregunta 1",
      title: "Tu momento ahora.",
      copy:
        "Todo queda mas claro cuando empiezas desde el punto en el que realmente estas hoy.",
      visualLabel: "Situacion actual",
      visualStat: "personalizacion",
      visualCaption:
        "Tu respuesta ayuda a que el resultado sea mas alineado con tu realidad.",
      tags: ["momento actual", "claridad", "contexto"],
      image: imageLibrary.intro,
    },
    title: "Cual es tu situacion hoy?",
    subheadline: "Esto nos ayuda a personalizar tu resultado.",
    microcopy: "Toca la opcion que mas combina contigo.",
    options: [
      { value: "single", label: "Soltera" },
      { value: "dating", label: "En una relacion" },
      { value: "married", label: "Casada" },
      { value: "separated", label: "Separada / Divorciada" },
    ],
  },
  {
    type: "question",
    key: "intimateLife",
    index: 2,
    total: 7,
    mood: {
      eyebrow: "Pregunta 2",
      title: "Como esta eso entre ustedes.",
      copy:
        "Aqui no necesitas suavizar nada. Cuanto mas honesta seas, mas clara sera la lectura.",
      visualLabel: "Vida intima",
      visualStat: "sin filtro",
      visualCaption:
        "Las respuestas van desde lo que aun late hasta lo que ya pesa demasiado.",
      tags: ["intimidad", "verdad", "deseo"],
      image: imageLibrary.tension,
    },
    title: "Como esta tu vida intima hoy?",
    subheadline: "Se honesta. Aqui nadie te esta juzgando.",
    microcopy: "No existe respuesta equivocada, solo tu verdad.",
    options: [
      {
        value: "good",
        label: "Esta bien... pero se que podria ser mucho mejor",
      },
      {
        value: "routine",
        label: "Se enfrio. Se volvio rutina. Siempre lo mismo.",
      },
      {
        value: "rarely",
        label: "El casi ya no me busca.",
      },
      {
        value: "stopped",
        label: "Practicamente paro. Ya no se que hacer.",
      },
    ],
  },
  {
    type: "question",
    key: "painPoint",
    index: 3,
    total: 7,
    mood: {
      eyebrow: "Pregunta 3",
      title: "Lo que mas pesa hoy.",
      copy:
        "A veces lo que duele no es solo la distancia, es lo que esa distancia te hace sentir.",
      visualLabel: "Dolor central",
      visualStat: "lo que mas pesa",
      visualCaption:
        "Elige el punto que sientes en el cuerpo incluso antes de poder explicarlo.",
      tags: ["dor", "miedo", "autoestima"],
      image: imageLibrary.reflection,
    },
    title: "Que es lo que mas te incomoda hoy?",
    subheadline:
      "A veces cargamos esto solas durante tanto tiempo que ya ni sabemos como decirlo.",
    microcopy: "Respira. No estas sola en esto.",
    options: [
      {
        value: "desire",
        label: "Siento que el no me desea como antes, y eso duele mas de lo que admito",
      },
      {
        value: "replace",
        label: "Tenho miedo de ele perder o interesse de vez... ou me trocar",
      },
      {
        value: "surprise",
        label: "No se como sorprenderlo de verdad, y tengo miedo de intentar y fallar",
      },
      {
        value: "insecure",
        label: "Me siento insegura. Como si nunca fuera... suficiente.",
      },
    ],
  },
  {
    type: "brake",
    variant: "science",
    progressIndex: 3,
    progressTotal: 7,
    mood: {
      eyebrow: "Brake 1",
      title: "Lo que sientes no es imaginacion.",
      copy:
        "Hay cosas que se instalan en silencio y solo quedan claras cuando alguien finalmente las pone en palabras.",
      visualLabel: "Dato cientifico",
      visualStat: "senales silenciosas",
      visualCaption:
        "La distancia no siempre empieza en una pelea. Muchas veces empieza antes, mucho antes.",
      tags: ["validacion", "alerta", "urgencia"],
      image: imageLibrary.tension,
    },
    kicker: "Dato cientifico",
    title: "Antes de continuar, necesitas saber algo.",
    subheadline:
      "Lo que esta pasando entre ustedes no es aleatorio. E ignorarlo suele salir caro, poco a poco.",
    paragraphsTop: [
      "Muchas mujeres creen que el cambio de la nada.",
      "Pero casi nunca es de la nada.",
      "La mayoria de las veces, el frio empieza antes de la pelea. Empieza en el toque, en el deseo y en la forma en que el se va alejando poco a poco.",
      "Primero desaparece el interes. Luego desaparece el clima. Despues la relacion empieza a pesar.",
    ],
    galleryTop: [
      {
        image: imageLibrary.tension,
        label: "Distancia silenciosa",
        caption: "Hay parejas que siguen juntas, pero ya no se encuentran de verdad.",
      },
      {
        image: imageLibrary.studyDesk,
        label: "Investigacion y observacion",
        caption: "Cuando miras con calma, puedes ver que existe un patron.",
      },
    ],
    calloutTitle: "Y lo mas inquietante:",
    quote:
      "El hombre casi nunca lo dice todo con claridad. Solo se vuelve mas frio, mas pegado al celular, mas distante y con menos ganas.",
    paragraphsBottom: [
      "Pero el problema no eres tu.",
      "Existe un detalle que muchas mujeres nunca aprenden.",
      "No se trata de hacer mas. Se trata de saber como tocar lo correcto de la forma correcta.",
      "Quando isso acontece, o clima muda rapido. O olhar muda. O jeito dele muda.",
      "Y por eso lo que viene ahora importa tanto.",
    ],
    galleryBottom: [
      {
        image: imageLibrary.reflection,
        label: "El dolor aparece primero",
        caption: "Casi siempre quien siente esto primero es la mujer.",
      },
      {
        image: imageLibrary.studyPaper,
        label: "Hay un motivo",
        caption: "No es magia. No es suerte. Hay algo detras de ese cambio.",
      },
    ],
    microcopy:
      "No necesitas entender todo ahora. Solo necesitas no ignorarlo.",
    cta: "Entendi. Quiero continuar ->",
  },
  {
    type: "question",
    key: "effort",
    index: 4,
    total: 7,
    mood: {
      eyebrow: "Pregunta 4",
      title: "Todo lo que ya intentaste.",
      copy:
        "Hay cosas que ya hiciste. Cosas que quisiste hacer. Y cosas que te cansaste de intentar.",
      visualLabel: "Historial",
      visualStat: "lo que ya fue intentado",
      visualCaption:
        "Nada de eso significa que fallaste. Solo muestra cuanto te ha movido esto por dentro.",
      tags: ["intentos", "verguenza", "frustracion"],
      image: imageLibrary.reflection,
    },
    title: "Ya intentaste hacer algo diferente para reencender las cosas?",
    subheadline:
      "No te preocupes. La mayoria de las mujeres que llegan aqui ya intento de todo.",
    microcopy:
      "No importa lo que ya intentaste. Lo que vas a descubrir es diferente a todo eso.",
    options: [
      {
        value: "everything",
        label: "Ya intente de todo... lenceria, iniciativa, conversacion. Nada funciono de verdad.",
      },
      {
        value: "shy",
        label: "Queria tentar algo diferente, mas tenho verguenza de errar na hora.",
      },
      {
        value: "never",
        label: "Nunca lo intente. Sinceramente, ni se por donde empezar.",
      },
      {
        value: "readOnly",
        label: "Ya busque cosas en internet, pero nunca tuve valor para ponerlas en practica.",
      },
    ],
  },
  {
    type: "question",
    key: "desire",
    index: 5,
    total: 7,
    mood: {
      eyebrow: "Pregunta 5",
      title: "Lo que mas quieres recuperar.",
      copy:
        "Cuando dejas de pensar en el problema y piensas en lo que realmente quieres sentir, todo queda mas claro.",
      visualLabel: "Deseo central",
      visualStat: "lo que ella quiere",
      visualCaption:
        "Elegir esto por dentro cambia la forma en que llegas a la proxima pantalla.",
      tags: ["deseo", "proyeccion", "intensidad"],
      image: imageLibrary.promise,
    },
    title: "Si pudieras cambiar UNA cosa, cual seria?",
    subheadline:
      "Cierra los ojos por un segundo. Que quieres sentir de verdad?",
    microcopy:
      "Lo que acabas de elegir dice mucho sobre lo que falta. Y sobre lo que es posible.",
    options: [
      {
        value: "lookAgain",
        label: "Quiero que me mire como me miraba al principio, con esas ganas.",
      },
      {
        value: "pursueMe",
        label: "Quiero que me busque... sin tener que pedir, insinuar o rogar.",
      },
      {
        value: "loseControl",
        label: "Quiero sentir mas conexion, respuesta y presencia en la relacion.",
      },
      {
        value: "feelDesired",
        label: "Quiero sentirme deseada de verdad, no por obligacion, no por rutina. De verdad.",
      },
    ],
  },
  {
    type: "brake",
    variant: "story",
    progressIndex: 5,
    progressTotal: 7,
    mood: {
      eyebrow: "Brake 2",
      title: "Hay mujeres que dejan marca.",
      copy:
        "Algunas historias dejan claro que no se trata solo de belleza, suerte o timing. Hay algo mas ahi.",
      visualLabel: "Caso publico",
      visualStat: "posible en la vida real",
      visualCaption:
        "Cuando mucha gente no entiende por que un hombre quedo tan enganchado, es porque esta mirando al lugar equivocado.",
      tags: ["caso real", "curiosidad", "creencia"],
      image: imageLibrary.virginia,
    },
    kicker: "Caso real",
    title:
      "Que hace que un hombre que podria tener a cualquier mujer del mundo elija a una sola y se lo tome en serio",
    subheadline: "Esta historia se hizo publica. Y ayuda a entender muchas cosas.",
    duo: [
      {
        src: imageLibrary.viniSolo.src,
        alt: imageLibrary.viniSolo.alt,
        credit: imageLibrary.viniSolo.credit,
        name: "Vini Jr.",
        role:
          "Joven, famoso, rico y con acceso a practicamente cualquier mujer del mundo.",
      },
      {
        src: imageLibrary.virginia.src,
        alt: imageLibrary.virginia.alt,
        credit: imageLibrary.virginia.credit,
        name: "Virginia",
        role:
          "Hermosa, famosa y muy fuerte en Brasil, pero aun asi compitiendo con un mundo de opciones alrededor de el.",
      },
    ],
    comments: [
      "\"Ella es una mas.\"",
      "\"Dou 3 meses.\"",
      "\"El puede tener a cualquier mujer del mundo.\"",
    ],
    paragraphsTop: [
      "Virginia es bonita? Si. Tiene un nombre fuerte en Brasil? Si.",
      "Pero Vini Jr. es uno de los hombres mas deseados del mundo hoy.",
      "Rico, famoso, joven y rodeado de opciones.",
      "El podria estar con una modelo de Europa, actriz, influencer, quien quisiera.",
      "Aun asi, fue con ella que la historia avanzo.",
      "A finales de 2025, la relacion dejo de ser rumor y se volvio tema publico.",
      "En febrero de 2026, llegaron regalos, flores y declaraciones para que todos las vieran.",
      "En marzo de 2026, ella ya hablaba de pasar mas tiempo con el en Espana.",
    ],
    galleryBottom: [
      {
        image: imageLibrary.viniVirginiaGift,
        label: "17/02/2026",
        caption: "Regalo y mensaje carinoso antes de su estreno en Carnaval.",
      },
      {
        image: imageLibrary.viniVirginiaStadium,
        label: "03/03/2026",
        caption: "Madrid, partido y mas tiempo juntos en su rutina.",
      },
      {
        image: imageLibrary.viniVirginiaKiss,
        label: "14/03/2026",
        caption: "Beso e intercambio de 'te amo' en publico.",
      },
    ],
    calloutTitle: "Entonces la pregunta es simple:",
    quote:
      "Que hace que un hombre que puede tener a cualquier mujer del mundo elija a una sola y quiera mostrarlo?",
    paragraphsBottom: [
      "No es solo belleza.",
      "No es solo fama.",
      "Es lo que el siente cuando esta contigo.",
      "Cuando una mujer acierta en el lugar correcto, deja de perseguir.",
      "Se vuelve la mujer que se queda en su cabeza.",
      "Estas a 2 preguntas de descubrirlo.",
    ],
    microcopy:
      "Las imagenes y los hechos son publicos. Lo que casi nadie entiende es lo que pasa detras de eso.",
    cta: "Casi llegamos. Continuar ->",
  },
  {
    type: "question",
    key: "secrecy",
    index: 6,
    total: 7,
    mood: {
      eyebrow: "Pregunta 6",
      title: "Algunas cosas funcionan mejor en silencio.",
      copy:
        "Hay efectos que pierden fuerza cuando se vuelven tema de conversacion. Y hay efectos que crecen justamente porque quedan entre ustedes.",
      visualLabel: "Compromiso",
      visualStat: "esto queda entre ustedes",
      visualCaption:
        "Lo que es intimo de verdad no necesita publico.",
      tags: ["secreto", "exclusividad", "discrecion"],
      image: imageLibrary.promise,
    },
    title: "Si aprendes esta tecnica, puedes guardarla para ti?",
    subheadline:
      "Esto es serio. Lo que estas por descubrir no es para todo el mundo.",
    microcopy:
      "Las dos respuestas son validas. Pero ten presente: el efecto es dificil de esconder.",
    options: [
      {
        value: "secret",
        label: "Claro que si. Este sera mi secreto.",
      },
      {
        value: "notice",
        label: "Lo voy a intentar... pero cuando el empiece a actuar diferente, todos lo van a notar.",
      },
    ],
  },
  {
    type: "question",
    key: "readiness",
    index: 7,
    total: 7,
    mood: {
      eyebrow: "Pregunta 7",
      title: "Ya llegaste hasta aqui.",
      copy:
        "Solo falta una respuesta para cerrar el ciclo y abrir la proxima pantalla.",
      visualLabel: "Preparacion",
      visualStat: "linea de llegada",
      visualCaption:
        "Curiosidad y decision ya estan en el mismo lugar ahora.",
      tags: ["preparacion", "curiosidad", "decision"],
      image: imageLibrary.intro,
    },
    title: "Ultima pregunta.",
    subheadline:
      "Estas lista para aprender algo que puede cambiar completamente la forma en que el te ve y te desea?",
    microcopy: "Tu resultado se esta generando...",
    options: [
      {
        value: "ready",
        label: "Si. Quiero que me vea de una forma en que nunca me vio.",
      },
      {
        value: "curious",
        label: "Tengo curiosidad... quiero al menos saber que es esto.",
      },
    ],
  },
  {
    type: "result",
    mood: {
      eyebrow: "Pantalla final",
      title: "Tu acceso esta listo.",
      copy:
        "Llegaste hasta aqui. Ahora solo falta abrir lo que fue preparado para ti.",
      visualLabel: "Acceso liberado",
      visualStat: "mira ahora",
      visualCaption:
        "Una ultima decision entre tu y la clase.",
      tags: ["resultado", "acceso", "urgencia"],
      image: imageLibrary.reflection,
    },
    eyebrow: "Resultado analizado",
    title: "Tu resultado esta listo.",
    subheadline:
      "Con base en tus respuestas, estas entre las mujeres que mas pueden beneficiarse con esta tecnica.",
    intro: "Esto es lo que revela tu perfil:",
    offerIntro:
      "Lo que vas a ver ahora es una pagina oficial con acceso al contenido educativo preparado por una terapeuta con experiencia en intimidad y relaciones.",
    lessons: [
      "Como entender mejor zonas de sensibilidad masculina",
      "Como estudiar ritmo, presion y comunicacion con mas seguridad",
      "Errores comunes que pueden romper el clima y aumentar la inseguridad",
      "Como aplicar esto sin parecer forzado, raro o ensayado",
    ],
    warning:
      "Aviso: este contenido es educativo, privado y pensado para personas adultas que desean estudiar intimidad con mas conciencia.",
    footnote:
      "Acceso inmediato a la pagina oficial. Puedes continuar desde el celular.",
    cta: "VER PAGINA OFICIAL ->",
    secondary: "Rehacer el quiz",
  },
];

const state = {
  currentStep: 0,
  answers: {},
};

const elements = {
  quizApp: document.getElementById("quiz-app"),
  backButton: document.getElementById("back-button"),
  progressShell: document.getElementById("progress-shell"),
  progressFill: document.getElementById("progress-fill"),
  progressLabel: document.getElementById("progress-label"),
  progressValue: document.getElementById("progress-value"),
  moodEyebrow: document.getElementById("mood-eyebrow"),
  moodTitle: document.getElementById("mood-title"),
  moodCopy: document.getElementById("mood-copy"),
  visualLabel: document.getElementById("visual-label"),
  visualStat: document.getElementById("visual-stat"),
  visualCaption: document.getElementById("visual-caption"),
  visualImage: document.getElementById("visual-image"),
  visualCredit: document.getElementById("visual-credit"),
  moodTags: document.getElementById("mood-tags"),
};

function trackEvent(eventName, params = {}) {
  window.funnelAnalytics?.track(eventName, params);
}

function trackEventOnce(eventName, params = {}) {
  window.funnelAnalytics?.trackOnce(eventName, params);
}

function getStepEventName(step) {
  if (step.type === "intro") {
    return "quiz_entry_view";
  }

  if (step.type === "question") {
    return `quiz_step_${step.index}_view`;
  }

  if (step.type === "brake") {
    return step.variant === "science"
      ? "quiz_bridge_1_view"
      : "quiz_bridge_2_view";
  }

  return "quiz_result_view";
}

function trackCurrentStepView(step) {
  const eventName = getStepEventName(step);

  trackEventOnce(eventName, {
    step_type: step.type,
    step_index: step.index || step.progressIndex || state.currentStep + 1,
  });

  if (step.type === "result") {
    trackEventOnce("quiz_complete", {
      total_answers: Object.keys(state.answers).length,
    });
  }
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function buildFinalCtaUrl() {
  try {
    const finalUrl = new URL(FINAL_CTA_URL, window.location.href);
    const currentParams = new URLSearchParams(window.location.search);

    currentParams.forEach((value, key) => {
      if (!finalUrl.searchParams.has(key)) {
        finalUrl.searchParams.append(key, value);
      }
    });

    return finalUrl.toString();
  } catch (error) {
    return FINAL_CTA_URL;
  }
}

function renderParagraphs(paragraphs, className = "step__paragraph") {
  return paragraphs
    .map((paragraph) => `<p class="${className}">${escapeHtml(paragraph)}</p>`)
    .join("");
}

function renderInlineGallery(images, variant) {
  if (!images || images.length === 0) {
    return "";
  }

  return `
    <div class="inline-gallery ${variant}">
      ${images
        .map(
          (item) => `
            <figure class="inline-photo">
              <div class="inline-photo__media">
                <img
                  class="inline-photo__image"
                  src="${escapeHtml(item.image.src)}"
                  alt="${escapeHtml(item.image.alt)}"
                />
              </div>
              <figcaption class="inline-photo__body">
                <strong class="inline-photo__label">${escapeHtml(item.label)}</strong>
                <p class="inline-photo__caption">${escapeHtml(item.caption)}</p>
                <span class="inline-photo__credit">${escapeHtml(item.image.credit)}</span>
              </figcaption>
            </figure>
          `,
        )
        .join("")}
    </div>
  `;
}

function renderIntroMedia(media) {
  if (!media) {
    return "";
  }

  if (media.layout === "single") {
    return `
      <figure class="intro-teaser">
        <div class="intro-teaser__frame intro-teaser__frame--single">
          <img
            class="intro-teaser__single-image"
            src="${escapeHtml(media.src)}"
            alt="${escapeHtml(media.alt || "")}"
            style="object-position: ${escapeHtml(media.position || "center")};"
          />
        </div>
        <figcaption class="intro-teaser__credit">${escapeHtml(media.credit || "")}</figcaption>
      </figure>
    `;
  }

  return `
    <figure class="intro-teaser">
      <div class="intro-teaser__frame">
        <div
          class="intro-teaser__pane intro-teaser__pane--focus"
          style="background-image: url('${escapeHtml(media.src)}'); background-position: ${escapeHtml(media.position || "center")};"
        ></div>
        <div
          class="intro-teaser__pane intro-teaser__pane--blur"
          style="background-image: url('${escapeHtml(media.src)}'); background-position: ${escapeHtml(media.position || "center")};"
        ></div>
        <div class="intro-teaser__arrows" aria-hidden="true">
          <span class="intro-teaser__arrow"></span>
          <span class="intro-teaser__arrow intro-teaser__arrow--center"></span>
          <span class="intro-teaser__arrow"></span>
        </div>
      </div>
      <figcaption class="intro-teaser__credit">${escapeHtml(media.credit || "")}</figcaption>
    </figure>
  `;
}

function getProfileRevealBlocks() {
  const { status, effort, readiness } = state.answers;

  const firstText =
    status === "single" || status === "separated"
      ? "El patron de distancia que temes no nace solo de compatibilidad o suerte. Existe una dinamica de deseo que casi nadie te enseno a ver."
      : "El distanciamiento que sientes tiene un componente biologico, no solo emocional. Y muchas mujeres pasan anos culpandose sin darse cuenta.";

  let secondText =
    "No por falta de esfuerzo. Sino porque nadie te enseno donde esta la llave de su deseo.";

  if (effort === "everything") {
    secondText =
      "Intentaste, insististe y te desgastaste. Solo estabas usando caminos que parecen logicos, pero no activan lo que realmente cambia su respuesta.";
  } else if (effort === "shy") {
    secondText =
      "No fue falta de voluntad. Falto direccion, seguridad y un camino claro para actuar sin miedo a equivocarte.";
  } else if (effort === "never") {
    secondText =
      "No fallaste. Solo nunca te mostraron por donde empezar con claridad, seguridad y efecto real.";
  }

  const thirdText =
    readiness === "curious"
      ? "Tus respuestas muestran curiosidad real y apertura suficiente para entender el mecanismo antes de decidir como usarlo."
      : "Tus respuestas muestran una mujer que quiere un cambio de verdad, no por desesperacion, sino por determinacion.";

  return [
    {
      title: "El problema no eres tu.",
      text: firstText,
    },
    {
      title: "Ya intentaste resolverlo por el camino equivocado.",
      text: secondText,
    },
    {
      title: "Estas lista.",
      text: thirdText,
    },
  ];
}

function updateMoodPanel(step) {
  const mood = step.mood;
  const image = mood.image;

  elements.moodEyebrow.textContent = mood.eyebrow;
  elements.moodTitle.textContent = mood.title;
  elements.moodCopy.textContent = mood.copy;
  elements.visualLabel.textContent = mood.visualLabel;
  elements.visualStat.textContent = mood.visualStat;
  elements.visualCaption.textContent = mood.visualCaption;
  elements.visualImage.src = image.src;
  elements.visualImage.alt = image.alt;
  elements.visualImage.style.objectPosition = image.position || "center";
  elements.visualCredit.textContent = image.credit || "";
  elements.visualCredit.hidden = !image.credit;
  elements.moodTags.innerHTML = mood.tags
    .map((tag) => `<span class="mood-tag">${escapeHtml(tag)}</span>`)
    .join("");
}

function updateProgress(step) {
  if (step.type === "question") {
    const percentage = Math.round((step.index / step.total) * 100);
    elements.progressShell.hidden = false;
    elements.progressLabel.textContent = `Pregunta ${step.index} de ${step.total}`;
    elements.progressValue.textContent = `${percentage}%`;
    elements.progressFill.style.width = `${percentage}%`;
    return;
  }

  if (step.type === "brake") {
    const percentage = Math.round((step.progressIndex / step.progressTotal) * 100);
    elements.progressShell.hidden = false;
    elements.progressLabel.textContent = `Etapa especial • ${step.progressIndex} de ${step.progressTotal}`;
    elements.progressValue.textContent = `${percentage}%`;
    elements.progressFill.style.width = `${percentage}%`;
    return;
  }

  elements.progressShell.hidden = true;
}

function updateBackButton(step) {
  elements.backButton.hidden = state.currentStep === 0 || step.type === "result";
}

function renderIntro(step) {
  return `
    <article class="step">
      <p class="step__kicker">${escapeHtml(step.kicker)}</p>
      <p class="step__emotion">${escapeHtml(step.mood.title)}</p>
      <h2 class="step__title step__title--wide">${escapeHtml(step.title)}</h2>
      <p class="step__subheadline">${escapeHtml(step.subheadline)}</p>
      ${renderIntroMedia(step.media)}
      <div class="copy-stack">
        ${renderParagraphs(step.paragraphs)}
      </div>
      <p class="step__microcopy">${escapeHtml(step.microcopy)}</p>

      <div class="result-actions">
        <button class="primary-button" type="button" data-action="next">
          ${escapeHtml(step.cta)}
        </button>
      </div>
    </article>
  `;
}

function renderQuestion(step) {
  const currentAnswer = state.answers[step.key];
  const options = step.options
    .map((option, index) => {
      const bullet = String.fromCharCode(65 + index);
      const selectedClass = currentAnswer === option.value ? " is-selected" : "";

      return `
        <button
          class="choice${selectedClass}"
          type="button"
          data-action="answer"
          data-key="${escapeHtml(step.key)}"
          data-value="${escapeHtml(option.value)}"
        >
          <span class="choice__bullet">${bullet}</span>
          <span class="choice__text">${escapeHtml(option.label)}</span>
          <span class="choice__arrow">›</span>
        </button>
      `;
    })
    .join("");

  return `
    <article class="step">
      <p class="step__kicker">Pregunta ${step.index}/${step.total}</p>
      <p class="step__emotion">${escapeHtml(step.mood.title)}</p>
      <h2 class="step__title step__title--wide">${escapeHtml(step.title)}</h2>
      <p class="step__subheadline">${escapeHtml(step.subheadline)}</p>
      <div class="choice-list">${options}</div>
      <p class="step__microcopy">${escapeHtml(step.microcopy)}</p>
    </article>
  `;
}

function renderScienceBrake(step) {
  return `
    <article class="step">
      <p class="step__kicker">${escapeHtml(step.kicker)}</p>
      <p class="step__emotion">${escapeHtml(step.mood.title)}</p>
      <h2 class="step__title step__title--wide">${escapeHtml(step.title)}</h2>
      <p class="step__subheadline">${escapeHtml(step.subheadline)}</p>
      <div class="copy-stack">
        ${renderParagraphs(step.paragraphsTop)}
      </div>
      ${renderInlineGallery(step.galleryTop, "inline-gallery--duo")}
      <p class="story-banner">${escapeHtml(step.calloutTitle)}</p>
      <blockquote class="editorial-quote">${escapeHtml(step.quote)}</blockquote>
      <div class="copy-stack">
        ${renderParagraphs(step.paragraphsBottom)}
      </div>
      ${renderInlineGallery(step.galleryBottom, "inline-gallery--duo")}
      <p class="step__microcopy step__microcopy--emphasis">${escapeHtml(step.microcopy)}</p>

      <div class="result-actions">
        <button class="primary-button" type="button" data-action="next">
          ${escapeHtml(step.cta)}
        </button>
      </div>
    </article>
  `;
}

function renderStoryBrake(step) {
  const caseCards = step.duo
    .map(
      (person) => `
        <figure class="case-card">
          <img class="case-card__image" src="${escapeHtml(person.src)}" alt="${escapeHtml(person.alt)}" />
          <figcaption class="case-card__body">
            <strong class="case-card__name">${escapeHtml(person.name)}</strong>
            <p class="case-card__role">${escapeHtml(person.role)}</p>
            <span class="case-card__credit">${escapeHtml(person.credit)}</span>
          </figcaption>
        </figure>
      `,
    )
    .join("");

  const comments = step.comments
    .map((item) => `<span class="comment-pill">${escapeHtml(item)}</span>`)
    .join("");

  return `
    <article class="step">
      <p class="step__kicker">${escapeHtml(step.kicker)}</p>
      <p class="step__emotion">${escapeHtml(step.mood.title)}</p>
      <h2 class="step__title step__title--wide">${escapeHtml(step.title)}</h2>
      <p class="step__subheadline">${escapeHtml(step.subheadline)}</p>

      <div class="case-duo">
        ${caseCards}
      </div>

      <div class="comment-stack">
        ${comments}
      </div>

      <div class="copy-stack">
        ${renderParagraphs(step.paragraphsTop)}
      </div>
      ${renderInlineGallery(step.galleryTop, "inline-gallery--duo")}

      <p class="story-banner">${escapeHtml(step.calloutTitle)}</p>
      <blockquote class="editorial-quote editorial-quote--story">
        ${escapeHtml(step.quote)}
      </blockquote>

      <div class="copy-stack">
        ${renderParagraphs(step.paragraphsBottom)}
      </div>
      ${renderInlineGallery(step.galleryBottom, "inline-gallery--trio")}

      <p class="step__microcopy">${escapeHtml(step.microcopy)}</p>

      <div class="result-actions">
        <button class="primary-button" type="button" data-action="next">
          ${escapeHtml(step.cta)}
        </button>
      </div>
    </article>
  `;
}

function renderBrake(step) {
  if (step.variant === "science") {
    return renderScienceBrake(step);
  }

  return renderStoryBrake(step);
}

function renderResult(step) {
  const finalCtaUrl = buildFinalCtaUrl();
  const revealItems = getProfileRevealBlocks()
    .map(
      (item) => `
        <li>
          <strong>${escapeHtml(item.title)}</strong>
          <span>${escapeHtml(item.text)}</span>
        </li>
      `,
    )
    .join("");

  const lessons = step.lessons
    .map((item) => `<li>${escapeHtml(item)}</li>`)
    .join("");

  return `
    <article class="step">
      <div class="result-card result-card--final">
        <p class="result-card__eyebrow">${escapeHtml(step.eyebrow)}</p>
        <p class="step__emotion">${escapeHtml(step.mood.title)}</p>
        <h2 class="result-card__title">${escapeHtml(step.title)}</h2>
        <p class="result-card__subtitle">${escapeHtml(step.subheadline)}</p>
        <p class="result-card__text">${escapeHtml(step.intro)}</p>

        <ul class="result-list">${revealItems}</ul>

        <p class="result-card__text">${escapeHtml(step.offerIntro)}</p>

        <div class="offer-panel">
          <ul class="offer-list">${lessons}</ul>
        </div>

        <p class="warning-banner">${escapeHtml(step.warning)}</p>

        <div class="result-actions">
          <a class="result-button" href="${escapeHtml(finalCtaUrl)}" data-action="result-cta">
            ${escapeHtml(step.cta)}
          </a>
          <p class="result-actions__hint">${escapeHtml(step.footnote)}</p>
          <button class="secondary-button" type="button" data-action="restart">
            ${escapeHtml(step.secondary)}
          </button>
        </div>
      </div>
    </article>
  `;
}

function renderCurrentStep() {
  const step = steps[state.currentStep];
  updateMoodPanel(step);
  updateProgress(step);
  updateBackButton(step);

  if (step.type === "intro") {
    elements.quizApp.innerHTML = renderIntro(step);
    trackCurrentStepView(step);
    return;
  }

  if (step.type === "question") {
    elements.quizApp.innerHTML = renderQuestion(step);
    trackCurrentStepView(step);
    return;
  }

  if (step.type === "brake") {
    elements.quizApp.innerHTML = renderBrake(step);
    trackCurrentStepView(step);
    return;
  }

  elements.quizApp.innerHTML = renderResult(step);
  trackCurrentStepView(step);
}

function goToNextStep() {
  if (state.currentStep < steps.length - 1) {
    state.currentStep += 1;
    renderCurrentStep();
  }
}

function goToPreviousStep() {
  if (state.currentStep > 0) {
    state.currentStep -= 1;
    renderCurrentStep();
  }
}

function restartQuiz() {
  state.currentStep = 0;
  state.answers = {};
  renderCurrentStep();
}

function handleAnswer(button) {
  const { key, value } = button.dataset;
  state.answers[key] = value;

  const choices = elements.quizApp.querySelectorAll(".choice");
  choices.forEach((choice) => choice.classList.toggle("is-selected", choice === button));

  const currentStep = steps[state.currentStep];
  const delay = currentStep.key === "readiness" ? 320 : 180;

  trackEvent(`quiz_step_${currentStep.index}_answer`, {
    question_key: key,
    answer_value: value,
  });

  window.setTimeout(goToNextStep, delay);
}

elements.quizApp.addEventListener("click", (event) => {
  const target = event.target.closest("[data-action]");

  if (!target) {
    return;
  }

  const { action } = target.dataset;

  if (action === "next") {
    goToNextStep();
  }

  if (action === "answer") {
    handleAnswer(target);
  }

  if (action === "restart") {
    restartQuiz();
  }

  if (action === "result-cta") {
    trackEvent("quiz_vsl_click", {
      destination: target.href || buildFinalCtaUrl(),
    });
  }
});

elements.backButton.addEventListener("click", () => {
  goToPreviousStep();
});

renderCurrentStep();
