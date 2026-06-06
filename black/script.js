const FINAL_CTA_URL = "../vsl.html";

const imageLibrary = {
  intro: {
    src: "./assets/intro-tantra-cropped.png",
    alt: "Imagen principal del sitio Tantra BC",
    credit: "Imagen: Tantra BC",
    position: "center 30%",
    layout: "single",
  },
  tension: {
    src: "./assets/quiz-distant-couple-bedroom.jpeg",
    alt: "Pareja distante en una habitación con él mirando el celular",
    credit: "Imagen: producción propia",
    position: "center 35%",
  },
  reflection: {
    src: "./assets/quiz-reflective-woman-bedroom.jpeg",
    alt: "Mujer pensativa sentada en la cama mirando el celular",
    credit: "Imagen: producción propia",
    position: "center 24%",
  },
  promise: {
    src: "./assets/quiz-red-carpet-couple.jpeg",
    alt: "Pareja elegante caminando en una alfombra roja con flashes",
    credit: "Imagen: producción propia",
    position: "center 34%",
  },
  studyDesk: {
    src: "./assets/quiz-investigation-board.jpeg",
    alt: "Panel de investigación con notas, fotos y líneas rojas",
    credit: "Imagen: producción propia",
    position: "center 45%",
  },
  studyPaper: {
    src: "./assets/quiz-confidential-writing.jpeg",
    alt: "Mano escribiendo una nota confidencial con pluma dorada",
    credit: "Imagen: producción propia",
    position: "center 40%",
  },
  malumaSolo: {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/2023-11-16%20Gala%20de%20los%20Latin%20Grammy%2C%2020%20%28Maluma%29.jpg",
    alt: "Maluma en el Latin Grammy 2023",
    credit: "Imagen: Wikimedia Commons",
    position: "center 18%",
  },
  susanaGomez: {
    src: "https://img.i-scmp.com/cdn-cgi/image/fit=contain,width=1024,format=auto/sites/default/files/d8/images/canvas/2024/03/15/657cbd11-a486-49a8-b42b-cc7c875d09cb_506046b4.jpg",
    alt: "Susana Gómez en registro público en Madrid",
    credit: "Foto: Europa Press vía SCMP",
    position: "center 18%",
  },
  malumaSusanaProcura: {
    src: "./assets/maluma-procura-announcement-2023.jpg",
    alt: "Maluma y Susana Gómez en frames del video Procura y del ultrasonido",
    credit: "Frame: Semana / YouTube Maluma",
    position: "center center",
  },
  malumaSusanaRedCarpet: {
    src: "./assets/maluma-susana-latin-grammy-2023.jpg",
    alt: "Maluma y Susana Gómez en la alfombra roja del Latin Grammy 2023",
    credit: "Foto: Reuters vía gshow",
    position: "center 28%",
  },
  malumaSusanaSecondBaby: {
    src: "./assets/maluma-second-baby-announcement-2026.jpg",
    alt: "Maluma y su hija Paris besando la barriga de Susana Gómez",
    credit: "Foto: Instagram vía Quién",
    position: "center 45%",
  },
};

const steps = [
  {
    type: "intro",
    mood: {
      eyebrow: "Experiencia confidencial",
      title: "Sin rodeos.",
      copy:
        "Una apertura corta, fuerte y pensada para que entres al quiz sin pensarlo dos veces.",
      visualLabel: "Test rápido",
      visualStat: "7 preguntas",
      visualCaption:
        "Sin vueltas. Sin exposición. Solo lo que importa.",
      tags: ["confidencial", "rápido", "directo"],
      image: imageLibrary.intro,
    },
    kicker: "Test confidencial",
    title: "Activa el Punto G Masculino",
    subheadline:
      "con tus dedos y haz que él quede enganchado contigo en menos de 30 minutos.",
    paragraphs: [
      "Responde el test de abajo y descubre si él puede quedar completamente conectado a ti.",
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
        "Todo se vuelve más claro cuando partes del punto en el que realmente estás hoy.",
      visualLabel: "Situación actual",
      visualStat: "personalización",
      visualCaption:
        "Tu respuesta ayuda a que el resultado quede más alineado con tu realidad.",
      tags: ["momento actual", "claridad", "contexto"],
      image: imageLibrary.reflection,
    },
    title: "¿Cuál es tu situación hoy?",
    subheadline: "Esto nos ayuda a personalizar tu resultado.",
    media: imageLibrary.reflection,
    microcopy: "Toca la opción que más va contigo.",
    options: [
      { value: "single", label: "Soltera" },
      { value: "dating", label: "Estoy saliendo con alguien" },
      { value: "married", label: "Casada" },
      { value: "separated", label: "Separada / Divorciada" },
    ],
  },
  {
    type: "question",
    key: "sexualLife",
    index: 2,
    total: 7,
    mood: {
      eyebrow: "Pregunta 2",
      title: "Cómo está eso entre ustedes.",
      copy:
        "Aquí no tienes que suavizar nada. Mientras más honesta seas, más clara queda la lectura.",
      visualLabel: "Vida sexual",
      visualStat: "sin filtro",
      visualCaption:
        "Las respuestas van desde lo que todavía vibra hasta lo que ya pesa demasiado.",
      tags: ["intimidad", "verdad", "deseo"],
      image: imageLibrary.tension,
    },
    title: "¿Cómo está tu vida sexual hoy?",
    subheadline: "Sé honesta. Aquí nadie te está juzgando.",
    microcopy: "No existe respuesta incorrecta, solo tu verdad.",
    options: [
      {
        value: "good",
        label: "Está bien... pero sé que podría ser mucho mejor",
      },
      {
        value: "routine",
        label: "Se enfrió. Se volvió rutina. Siempre lo mismo.",
      },
      {
        value: "rarely",
        label: "Él casi ya no me busca.",
      },
      {
        value: "stopped",
        label: "Prácticamente paró. Ya no sé qué hacer.",
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
      title: "Lo que más pesa hoy.",
      copy:
        "A veces lo que duele no es solo la distancia, sino lo que esa distancia te hace sentir.",
      visualLabel: "Dolor central",
      visualStat: "lo que más pesa",
      visualCaption:
        "Elige el punto que sientes en el cuerpo incluso antes de poder explicarlo.",
      tags: ["dolor", "miedo", "autoestima"],
      image: imageLibrary.reflection,
    },
    title: "¿Qué es lo que más te incomoda hoy?",
    subheadline:
      "A veces cargamos esto solas por tanto tiempo que ya ni sabemos cómo decirlo.",
    microcopy: "Respira. No estás sola en esto.",
    options: [
      {
        value: "desire",
        label: "Siento que él ya no me desea como antes - y eso duele más de lo que admito",
      },
      {
        value: "replace",
        label: "Me da miedo que pierda el interés del todo... o que me cambie por otra",
      },
      {
        value: "surprise",
        label: "No sé cómo sorprenderlo de verdad - y me da miedo intentar y embarrarla",
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
      eyebrow: "Pausa 1",
      title: "Lo que sientes no es imaginación.",
      copy:
        "Hay cosas que se instalan en silencio y solo se vuelven claras cuando alguien por fin las pone en palabras.",
      visualLabel: "Dato científico",
      visualStat: "señales silenciosas",
      visualCaption:
        "La distancia no siempre empieza en una pelea. Muchas veces empieza antes, mucho antes.",
      tags: ["validación", "alerta", "urgencia"],
      image: imageLibrary.tension,
    },
    kicker: "Dato científico",
    title: "Antes de continuar, necesitas saber algo.",
    subheadline:
      "Lo que está pasando entre ustedes no es aleatorio. E ignorarlo suele salir caro, poquito a poquito.",
    paragraphsTop: [
      "Muchas mujeres creen que él cambió de la nada.",
      "Pero casi nunca es de la nada.",
      "La mayoría de las veces, el frío empieza antes de la pelea. Empieza en el toque, en el deseo y en la forma en que él se va alejando despacio.",
      "Primero se pierde el interés. Después se pierde el ambiente. Después la relación empieza a pesar.",
    ],
    galleryTop: [
      {
        image: imageLibrary.tension,
        label: "Distancia silenciosa",
        caption: "Hay parejas que siguen juntas, pero ya no se encuentran de verdad.",
      },
      {
        image: imageLibrary.studyDesk,
        label: "Investigación y observación",
        caption: "Cuando miras con calma, se nota que hay un patrón.",
      },
    ],
    calloutTitle: "Y lo más inquietante:",
    quote:
      "El hombre casi nunca dice todo con claridad. Solo se va poniendo más frío, más pegado al celular, más distante, con menos ganas.",
    paragraphsBottom: [
      "Pero el problema no eres tú.",
      "Hay un detalle que muchas mujeres nunca aprenden.",
      "No se trata de hacer más. Se trata de saber cómo mover algo en él de la forma correcta.",
      "Cuando eso pasa, el ambiente cambia rápido. La mirada cambia. La forma en que él actúa cambia.",
      "Y por eso lo que viene ahora importa tanto.",
    ],
    galleryBottom: [
      {
        image: imageLibrary.reflection,
        label: "El dolor aparece primero",
        caption: "Casi siempre quien lo siente primero es la mujer.",
      },
      {
        image: imageLibrary.studyPaper,
        label: "Hay un motivo",
        caption: "No es magia. No es suerte. Hay algo detrás de ese cambio.",
      },
    ],
    microcopy:
      "No necesitas entenderlo todo ahora. Solo necesitas no ignorarlo.",
    cta: "Entendí. Quiero continuar ->",
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
      visualStat: "lo que ya intentaste",
      visualCaption:
        "Nada de eso significa que fallaste. Solo muestra cuánto ha tocado esto por dentro.",
      tags: ["intentos", "pena", "frustración"],
      image: imageLibrary.reflection,
    },
    title: "¿Ya intentaste hacer algo diferente para volver a prender las cosas?",
    subheadline:
      "No te preocupes. La mayoría de mujeres que llegan aquí ya intentó de todo.",
    microcopy:
      "No importa lo que ya intentaste. Lo que vas a descubrir es diferente a todo eso.",
    options: [
      {
        value: "everything",
        label: "Ya intenté de todo... lencería, iniciativa, hablarlo. Nada funcionó de verdad.",
      },
      {
        value: "shy",
        label: "Quisiera intentar algo diferente, pero me da pena equivocarme en el momento.",
      },
      {
        value: "never",
        label: "Nunca lo he intentado. Honestamente, ni sé por dónde empezar.",
      },
      {
        value: "readOnly",
        label: "Ya busqué cosas en internet, pero nunca tuve la seguridad para ponerlas en práctica.",
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
      title: "Lo que más quieres recuperar.",
      copy:
        "Cuando dejas de pensar solo en el problema y piensas en lo que de verdad quieres sentir, todo se aclara.",
      visualLabel: "Deseo central",
      visualStat: "lo que ella quiere",
      visualCaption:
        "Elegir esto por dentro cambia la forma en que llegas a la siguiente pantalla.",
      tags: ["deseo", "proyección", "intensidad"],
      image: imageLibrary.promise,
    },
    title: "Si pudieras cambiar UNA cosa, ¿cuál sería?",
    subheadline:
      "Cierra los ojos por un segundo. ¿Qué quieres sentir de verdad?",
    media: imageLibrary.promise,
    microcopy:
      "Lo que acabas de elegir dice mucho sobre lo que está faltando. Y sobre lo que es posible.",
    options: [
      {
        value: "lookAgain",
        label: "Quiero que me mire como me miraba al comienzo - con esas ganas.",
      },
      {
        value: "pursueMe",
        label: "Quiero que me busque... sin tener que pedirlo, insinuarlo o rogar.",
      },
      {
        value: "loseControl",
        label: "Quiero verlo perdiendo el control. Por mí. Sin poder resistirse.",
      },
      {
        value: "feelDesired",
        label: "Quiero sentirme deseada de verdad - no por obligación, no por rutina. De verdad.",
      },
    ],
  },
  {
    type: "brake",
    variant: "story",
    progressIndex: 5,
    progressTotal: 7,
    mood: {
      eyebrow: "Pausa 2",
      title: "Hay mujeres que dejan huella.",
      copy:
        "Algunas historias dejan claro que no se trata solo de belleza, suerte o timing. Ahí hay algo más.",
      visualLabel: "Caso público",
      visualStat: "posible en la vida real",
      visualCaption:
        "Cuando mucha gente no entiende por qué un hombre quedó tan conectado, es porque está mirando en el lugar equivocado.",
      tags: ["caso real", "curiosidad", "creencia"],
      image: imageLibrary.susanaGomez,
    },
    kicker: "Caso real",
    title:
      "Qué hace que un hombre con el mundo entero mirándolo construya una vida con una sola mujer",
    subheadline: "Esta historia se hizo pública en Colombia. Y ayuda a entender muchas cosas.",
    duo: [
      {
        src: imageLibrary.malumaSolo.src,
        alt: imageLibrary.malumaSolo.alt,
        credit: imageLibrary.malumaSolo.credit,
        name: "Maluma",
        role:
          "Paisa, famoso en el mundo entero, deseado por millones y rodeado de atención a donde llega.",
      },
      {
        src: imageLibrary.susanaGomez.src,
        alt: imageLibrary.susanaGomez.alt,
        credit: imageLibrary.susanaGomez.credit,
        name: "Susana Gómez",
        role:
          "Colombiana, discreta, elegante y mucho más reservada que el universo de fama a su alrededor.",
      },
    ],
    comments: [
      "\"Ella es una más.\"",
      "\"Eso no dura tres meses.\"",
      "\"Él puede tener a cualquier mujer del mundo.\"",
    ],
    paragraphsTop: [
      "¿Susana es bonita? Sí. ¿Elegante? También.",
      "Pero Maluma es uno de los hombres colombianos más deseados del mundo.",
      "Fama global, giras, plata, escenario, millones de mujeres mirando.",
      "Él podría vivir rodeado de modelos, actrices, influencers, de quien quisiera.",
      "Aun así, fue con una mujer de perfil discreto, de Medellín, que la historia se puso seria.",
      "En octubre de 2023, reveló en el video de Procura que los dos esperaban a su primera hija.",
      "En noviembre de 2023, apareció con Susana en la alfombra roja del Latin Grammy.",
      "En mayo de 2026, la familia volvió a ser noticia con el anuncio del segundo bebé.",
    ],
    galleryBottom: [
      {
        image: imageLibrary.malumaSusanaProcura,
        label: "19/10/2023",
        caption: "El anuncio del embarazo apareció dentro del video de Procura.",
      },
      {
        image: imageLibrary.malumaSusanaRedCarpet,
        label: "16/11/2023",
        caption: "Latin Grammy, alfombra roja y la relación asumida frente a las cámaras.",
      },
      {
        image: imageLibrary.malumaSusanaSecondBaby,
        label: "10/05/2026",
        caption: "La noticia del segundo bebé reforzó que aquello no era solo una etapa.",
      },
    ],
    calloutTitle: "Entonces la pregunta es simple:",
    quote:
      "¿Qué hace que un hombre rodeado de deseo, fama y opciones elija a una mujer y construya una vida con ella?",
    paragraphsBottom: [
      "No es solo belleza.",
      "No es solo fama.",
      "No es aparecer más.",
      "Es lo que él siente cuando está contigo.",
      "Cuando una mujer toca el punto correcto, deja de correr detrás.",
      "Se vuelve la mujer que se queda en la cabeza de él.",
      "Estás a 2 preguntas de descubrirlo.",
    ],
    microcopy:
      "Las imágenes y los hechos son públicos. Lo que casi nadie entiende es lo que pasa detrás de eso.",
    cta: "Ya casi. Continuar ->",
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
        "Hay efectos que pierden fuerza cuando se vuelven tema de conversación. Y hay efectos que crecen justo porque quedan entre ustedes.",
      visualLabel: "Compromiso",
      visualStat: "esto queda entre ustedes",
      visualCaption:
        "Lo que es íntimo de verdad no necesita público.",
      tags: ["secreto", "exclusividad", "discreción"],
      image: imageLibrary.promise,
    },
    title: "Si aprendes esta técnica, ¿puedes guardarla para ti?",
    subheadline:
      "Esto es serio. Lo que estás a punto de descubrir no es para todo el mundo.",
    microcopy:
      "Las dos respuestas son válidas. Pero ten presente algo: el efecto es difícil de esconder.",
    options: [
      {
        value: "secret",
        label: "Claro que sí. Este va a ser mi secreto.",
      },
      {
        value: "notice",
        label: "Voy a intentarlo... pero cuando él empiece a actuar diferente, todo el mundo lo va a notar.",
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
      title: "Ya llegaste hasta aquí.",
      copy:
        "Falta solo una respuesta para cerrar el ciclo y abrir la siguiente pantalla.",
      visualLabel: "Preparación",
      visualStat: "línea de llegada",
      visualCaption:
        "Curiosidad y decisión ya están en el mismo lugar ahora.",
      tags: ["lista", "curiosidad", "decisión"],
      image: imageLibrary.intro,
    },
    title: "Última pregunta.",
    subheadline:
      "¿Estás lista para aprender algo que puede cambiar por completo la forma en que él te ve - y te desea?",
    microcopy: "Tu resultado se está generando...",
    options: [
      {
        value: "ready",
        label: "Sí. Quiero que él me vea de una forma en la que nunca me ha visto.",
      },
      {
        value: "curious",
        label: "Me da curiosidad... quiero al menos saber qué es esto.",
      },
    ],
  },
  {
    type: "result",
    mood: {
      eyebrow: "Pantalla final",
      title: "Tu acceso está listo.",
      copy:
        "Llegaste hasta aquí. Ahora solo falta abrir lo que fue preparado para ti.",
      visualLabel: "Acceso liberado",
      visualStat: "míralo ahora",
      visualCaption:
        "Una última decisión entre tú y la clase.",
      tags: ["resultado", "acceso", "urgencia"],
      image: imageLibrary.reflection,
    },
    eyebrow: "Resultado analizado",
    title: "Tu resultado está listo.",
    subheadline:
      "Con base en tus respuestas, estás entre las mujeres que más pueden beneficiarse de esta técnica.",
    intro: "Esto es lo que revela tu perfil:",
    offerIntro:
      "Lo que vas a ver ahora es una clase corta y práctica grabada por una terapeuta con más de 10 años de experiencia en sexualidad femenina.",
    lessons: [
      "Dónde queda el Punto G Masculino",
      "Cómo tocarlo de la forma correcta usando solo las manos",
      "El error que daña el ambiente y hace que muchas mujeres crean que el problema es con ellas",
      "Cómo aplicarlo sin que se sienta forzado, raro o ensayado",
    ],
    warning:
      "Aviso: esta clase ya fue retirada de otras plataformas. El contenido incomoda a una industria que lucra con tu inseguridad.",
    footnote:
      "Acceso inmediato. Gratis. Puedes verlo por celular. Sin registro adicional.",
    cta: "LIBERAR MI ACCESO ->",
    secondary: "Volver a hacer el quiz",
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
                  style="object-position: ${escapeHtml(item.image.position || "center")};"
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

function renderQuestionMedia(media) {
  if (!media) {
    return "";
  }

  return `
    <figure class="question-media">
      <img
        class="question-media__image"
        src="${escapeHtml(media.src)}"
        alt="${escapeHtml(media.alt || "")}"
        style="object-position: ${escapeHtml(media.position || "center")};"
      />
      <figcaption class="question-media__credit">${escapeHtml(media.credit || "")}</figcaption>
    </figure>
  `;
}

function getProfileRevealBlocks() {
  const { status, effort, readiness } = state.answers;

  const firstText =
    status === "single" || status === "separated"
      ? "El patrón de distancia que temes no nace solo de compatibilidad o suerte. Existe una dinámica de deseo que casi nadie te enseñó a mirar."
      : "El distanciamiento que sientes tiene un componente biológico, no solo emocional. Y muchas mujeres pasan años culpándose sin darse cuenta de eso.";

  let secondText =
    "No por falta de esfuerzo. Sino porque nadie te enseñó dónde está la llave del deseo de él.";

  if (effort === "everything") {
    secondText =
      "Intentaste, insististe y te desgastaste. Solo estabas usando caminos que parecen lógicos, pero no activan lo que realmente cambia su respuesta.";
  } else if (effort === "shy") {
    secondText =
      "No fue falta de ganas. Faltó dirección, seguridad y un camino claro para actuar sin miedo a equivocarte.";
  } else if (effort === "never") {
    secondText =
      "No fallaste. Solo nunca te mostraron por dónde empezar con claridad, seguridad y efecto real.";
  }

  const thirdText =
    readiness === "curious"
      ? "Tus respuestas muestran curiosidad real y apertura suficiente para entender el mecanismo antes de decidir cómo usarlo."
      : "Tus respuestas muestran a una mujer que quiere un cambio de verdad, no por desespero, sino por determinación.";

  return [
    {
      title: "El problema no eres tú.",
      text: firstText,
    },
    {
      title: "Ya intentaste resolverlo por el camino equivocado.",
      text: secondText,
    },
    {
      title: "Estás lista.",
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
    elements.progressLabel.textContent = `Paso especial • ${step.progressIndex} de ${step.progressTotal}`;
    elements.progressValue.textContent = `${percentage}%`;
    elements.progressFill.style.width = `${percentage}%`;
    return;
  }

  elements.progressShell.hidden = true;
}

function updateBackButton(step) {
  elements.backButton.hidden = state.currentStep === 0 || step.type === "result";
}

function finishStepRender(step) {
  trackCurrentStepView(step);

  window.requestAnimationFrame(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  });
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
      ${renderQuestionMedia(step.media)}
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
          <a class="result-button" href="${FINAL_CTA_URL}" data-action="result-cta">
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
    finishStepRender(step);
    return;
  }

  if (step.type === "question") {
    elements.quizApp.innerHTML = renderQuestion(step);
    finishStepRender(step);
    return;
  }

  if (step.type === "brake") {
    elements.quizApp.innerHTML = renderBrake(step);
    finishStepRender(step);
    return;
  }

  elements.quizApp.innerHTML = renderResult(step);
  finishStepRender(step);
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
      destination: FINAL_CTA_URL,
    });
  }
});

elements.backButton.addEventListener("click", () => {
  goToPreviousStep();
});

renderCurrentStep();
