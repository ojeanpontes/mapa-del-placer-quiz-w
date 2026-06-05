const FINAL_CTA_URL = "./tsl.html";

const imageLibrary = {
  intro: {
    src: "./assets/quiz-confidential-invitation.jpeg",
    alt: "Carta privada sobre una mesa elegante",
    credit: "Imagen: producción propia",
    position: "center 42%",
    layout: "single",
  },
  tension: {
    src: "./assets/quiz-distant-couple-bedroom.jpeg",
    alt: "Pareja distante en una habitación tranquila",
    credit: "Imagen: producción propia",
    position: "center 35%",
  },
  reflection: {
    src: "./assets/quiz-reflective-woman-bedroom.jpeg",
    alt: "Mujer pensativa mirando su celular en una habitación",
    credit: "Imagen: producción propia",
    position: "center 24%",
  },
  promise: {
    src: "./assets/quiz-red-carpet-couple.jpeg",
    alt: "Pareja elegante caminando con confianza",
    credit: "Imagen: producción propia",
    position: "center 34%",
  },
  studyDesk: {
    src: "./assets/quiz-investigation-board.jpeg",
    alt: "Panel con notas y observaciones sobre patrones de pareja",
    credit: "Imagen: producción propia",
    position: "center 45%",
  },
  studyPaper: {
    src: "./assets/quiz-confidential-writing.jpeg",
    alt: "Mano escribiendo una nota privada con pluma",
    credit: "Imagen: producción propia",
    position: "center 40%",
  },
};

const steps = [
  {
    type: "intro",
    mood: {
      eyebrow: "Quiz privado",
      title: "Empieza por aquí.",
      copy:
        "Una lectura rápida para entender qué está pasando entre ustedes y cuál es el siguiente paso más simple.",
      visualLabel: "Ruta breve",
      visualStat: "7 preguntas",
      visualCaption: "Privado, directo y pensado para mujeres adultas.",
      tags: ["conexión", "claridad", "presencia"],
      image: imageLibrary.intro,
    },
    kicker: "Evaluación privada",
    title: "Descubre qué puede estar debilitando la conexión con él.",
    subheadline:
      "Responde este quiz y recibe una lectura personalizada sobre comunicación, presencia y seguridad emocional.",
    paragraphs: [
      "No se trata de perseguir, insistir o adivinar lo que él piensa. Se trata de entender el patrón y recuperar un punto de encuentro real.",
    ],
    microcopy: "Toma menos de 2 minutos. Tus respuestas quedan en privado.",
    cta: "INICIAR QUIZ PERSONALIZADO",
    media: imageLibrary.intro,
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
        "Toda lectura empieza mejor cuando parte de tu realidad actual, sin exagerar ni suavizar.",
      visualLabel: "Contexto",
      visualStat: "punto de partida",
      visualCaption: "Tu situación ayuda a ordenar el resultado final.",
      tags: ["momento", "realidad", "contexto"],
      image: imageLibrary.reflection,
    },
    title: "¿Cuál es tu situación hoy?",
    subheadline: "Elige la opción que más se parece a tu momento actual.",
    media: imageLibrary.reflection,
    microcopy: "No hay respuesta correcta. Solo información para personalizar tu lectura.",
    options: [
      { value: "single", label: "Estoy soltera, pero quiero entender mejor a los hombres" },
      { value: "dating", label: "Estoy saliendo con alguien" },
      { value: "relationship", label: "Estoy en una relación" },
      { value: "rebuilding", label: "Estoy intentando reconstruir una conexión" },
    ],
  },
  {
    type: "question",
    key: "connection",
    index: 2,
    total: 7,
    mood: {
      eyebrow: "Pregunta 2",
      title: "Cómo se siente el vínculo.",
      copy:
        "La conexión no siempre desaparece de golpe. A veces solo empieza a sentirse más distante.",
      visualLabel: "Conexión",
      visualStat: "señales diarias",
      visualCaption: "Pequeños cambios suelen mostrar más que grandes conversaciones.",
      tags: ["cercanía", "atención", "rutina"],
      image: imageLibrary.tension,
    },
    title: "¿Cómo está la conexión entre ustedes hoy?",
    subheadline: "Piensa en los últimos días, no en cómo era al comienzo.",
    media: imageLibrary.tension,
    microcopy: "Marca lo que más se parece a tu experiencia.",
    options: [
      { value: "warm", label: "Hay cariño, pero siento que falta más presencia" },
      { value: "routine", label: "Todo está muy en automático, como si fuera pura rutina" },
      { value: "distant", label: "Lo noto más callado, frío o distraído" },
      { value: "unclear", label: "No sé exactamente qué pasa, pero algo cambió" },
    ],
  },
  {
    type: "question",
    key: "painPoint",
    index: 3,
    total: 7,
    mood: {
      eyebrow: "Pregunta 3",
      title: "Lo que más pesa.",
      copy:
        "A veces el problema no es una pelea. Es esa sensación de no saber cómo volver a entrar en el mundo del otro.",
      visualLabel: "Nudo central",
      visualStat: "lo que pesa",
      visualCaption: "Nombrarlo es el primer paso para dejar de cargarlo sola.",
      tags: ["claridad", "seguridad", "comunicación"],
      image: imageLibrary.reflection,
    },
    title: "¿Qué es lo que más te incomoda ahora?",
    subheadline: "Elige la frase que más se parece a lo que no dices en voz alta.",
    media: imageLibrary.reflection,
    microcopy: "Respira. Esto es solo una lectura, no un juicio.",
    options: [
      { value: "unseen", label: "Siento que ya no me mira con la misma atención" },
      { value: "communication", label: "Me cuesta hablar sin que parezca reclamo" },
      { value: "silence", label: "Cuando él se queda callado, no sé qué hacer" },
      { value: "confidence", label: "Quiero sentirme más segura conmigo y con la relación" },
    ],
  },
  {
    type: "brake",
    progressIndex: 3,
    progressTotal: 7,
    mood: {
      eyebrow: "Pausa breve",
      title: "Esto tiene explicación.",
      copy:
        "La desconexión casi nunca empieza en una gran discusión. Muchas veces empieza en microdistancias.",
      visualLabel: "Patrón",
      visualStat: "señales pequeñas",
      visualCaption: "El vínculo se enfría por acumulación, no por un solo día malo.",
      tags: ["patrón", "presencia", "reconexión"],
      image: imageLibrary.studyDesk,
    },
    kicker: "Antes de continuar",
    title: "La mayoría de mujeres intenta resolver la distancia por el camino más difícil.",
    subheadline:
      "Insisten más, explican más, preguntan más. Pero a veces lo que cambia el clima no es más conversación, sino una presencia mejor dirigida.",
    paragraphsTop: [
      "Un hombre puede estar cerca físicamente y aun así sentirse lejos.",
      "También puede querer cuidar la relación, pero no saber cómo expresar lo que le pesa.",
      "Por eso la seguridad emocional importa tanto. Cuando él siente que puede bajar la guardia sin ser juzgado, la comunicación cambia.",
    ],
    galleryTop: [
      {
        image: imageLibrary.tension,
        label: "Distancia silenciosa",
        caption: "La rutina puede seguir funcionando mientras la conexión se va apagando.",
      },
      {
        image: imageLibrary.studyPaper,
        label: "Lectura privada",
        caption: "Cuando observas las señales correctas, el patrón se vuelve más claro.",
      },
    ],
    calloutTitle: "La idea clave:",
    quote:
      "No necesitas controlar lo que él siente. Necesitas crear un espacio donde él pueda acercarse sin defenderse.",
    paragraphsBottom: [
      "Eso no significa callarte ni agradar a toda costa.",
      "Significa aprender a comunicar presencia, calma y dirección.",
      "Las próximas preguntas muestran qué tipo de reconexión puede funcionar mejor para ti.",
    ],
    microcopy: "Vas bien. Ya pasaste la parte más importante: mirar el patrón de frente.",
    cta: "Continuar mi lectura ->",
  },
  {
    type: "question",
    key: "response",
    index: 4,
    total: 7,
    mood: {
      eyebrow: "Pregunta 4",
      title: "Tu reacción automática.",
      copy:
        "Lo que haces cuando sientes distancia muestra mucho sobre la dinámica que se repite.",
      visualLabel: "Respuesta",
      visualStat: "patrón personal",
      visualCaption: "Tu reacción no te define. Solo revela qué necesitas ordenar.",
      tags: ["reacción", "calma", "dirección"],
      image: imageLibrary.reflection,
    },
    title: "Cuando él parece distante, ¿qué sueles hacer?",
    subheadline: "Elige tu reacción más común, incluso si no te encanta admitirla.",
    media: imageLibrary.reflection,
    microcopy: "Esto ayuda a identificar tu punto de ajuste.",
    options: [
      { value: "insist", label: "Intento hablar de inmediato para resolverlo" },
      { value: "withdraw", label: "Me cierro y espero que él note que algo pasa" },
      { value: "overthink", label: "Empiezo a pensar demasiado y me lleno de dudas" },
      { value: "calm", label: "Intento mantener la calma, pero no siempre sé qué decir" },
    ],
  },
  {
    type: "question",
    key: "desire",
    index: 5,
    total: 7,
    mood: {
      eyebrow: "Pregunta 5",
      title: "Lo que quieres recuperar.",
      copy:
        "Cuando sabes qué quieres sentir, dejas de pelear contra síntomas y empiezas a buscar dirección.",
      visualLabel: "Objetivo",
      visualStat: "lo que importa",
      visualCaption: "La respuesta final depende mucho de lo que estás buscando.",
      tags: ["objetivo", "calidez", "complicidad"],
      image: imageLibrary.promise,
    },
    title: "Si pudieras fortalecer una sola cosa, ¿cuál sería?",
    subheadline: "Piensa en lo que más extrañas de una relación con presencia.",
    media: imageLibrary.promise,
    microcopy: "Tu elección dice mucho sobre la pieza que falta ahora.",
    options: [
      { value: "attention", label: "Quiero sentir que me presta atención de verdad" },
      { value: "conversation", label: "Quiero conversaciones más ligeras y honestas" },
      { value: "initiative", label: "Quiero que él también se acerque sin que yo tenga que empujar" },
      { value: "peace", label: "Quiero sentir calma, seguridad y complicidad otra vez" },
    ],
  },
  {
    type: "brake",
    progressIndex: 5,
    progressTotal: 7,
    mood: {
      eyebrow: "Pausa 2",
      title: "El caso Vini Jr y Virginia.",
      copy:
        "Cuando un hombre con opciones presta atención, casi nunca se trata de una sola cosa. Hay señales emocionales que pesan más de lo que parece.",
      visualLabel: "Caso público",
      visualStat: "Vini Jr + Virginia",
      visualCaption: "La lectura no es copiar una historia pública. Es entender el patrón detrás de la percepción.",
      tags: ["caso público", "presencia", "estatus"],
      image: imageLibrary.promise,
    },
    kicker: "Caso de referencia",
    title: "Por qué el caso Vini Jr y Virginia llamó tanto la atención.",
    subheadline:
      "No por chisme. Por lo que revela sobre presencia, seguridad y el tipo de mujer que no abandona su propio mundo.",
    paragraphsTop: [
      "Vini Jr no es un hombre invisible. Tiene carrera internacional, exposición, estatus y atención alrededor de su nombre.",
      "Virginia tampoco entra a una sala como alguien que pide permiso. Tiene marca propia, vida pública, familia, negocios y una presencia que ya existe antes de cualquier hombre.",
      "Cuando la prensa y el público empezaron a comentar esa aproximación, mucha gente intentó reducir todo a belleza, fama o curiosidad.",
      "Pero la lectura más útil es otra: una mujer con mundo propio comunica algo que se siente distinto.",
    ],
    galleryTop: [
      {
        image: imageLibrary.promise,
        label: "Hombre con opciones",
        caption: "Cuando él puede mirar para muchos lados, la presencia pesa más que la insistencia.",
      },
      {
        image: imageLibrary.studyDesk,
        label: "Mujer con mundo propio",
        caption: "Ella no transmite necesidad de ser elegida. Transmite dirección, centro y vida propia.",
      },
    ],
    calloutTitle: "La lectura real:",
    quote:
      "La mujer que no abandona su centro comunica: no estoy aquí para perseguir, estoy aquí porque elijo estar.",
    paragraphsBottom: [
      "Eso no significa hacerse la difícil ni jugar con él.",
      "Significa sostener seguridad, comunicación y presencia sin convertir la relación en una persecución.",
      "Un hombre puede admirar belleza. Pero lo que lo hace prestar atención de otra forma suele ser la combinación entre calma, autoestima y una vida que no gira completamente alrededor de él.",
      "Estás a dos preguntas de recibir tu recomendación personalizada.",
    ],
    microcopy: "Mantén esta idea en mente: presencia no se ruega, se comunica.",
    cta: "Ver las últimas preguntas ->",
  },
  {
    type: "question",
    key: "ritual",
    index: 6,
    total: 7,
    mood: {
      eyebrow: "Pregunta 6",
      title: "Tu apertura al cambio.",
      copy:
        "Un cambio real no necesita ser complicado. Necesita ser claro y posible de repetir.",
      visualLabel: "Apertura",
      visualStat: "acción simple",
      visualCaption: "La constancia pesa más que la intensidad de un solo día.",
      tags: ["ritual", "acción", "confianza"],
      image: imageLibrary.studyPaper,
    },
    title: "¿Qué tan dispuesta estás a probar un ritual simple de reconexión?",
    subheadline: "Algo breve, discreto y fácil de aplicar en la vida real.",
    media: imageLibrary.studyPaper,
    microcopy: "La idea no es hacer más. Es hacer mejor lo que sí importa.",
    options: [
      { value: "ready", label: "Estoy lista para probar algo simple y constante" },
      { value: "careful", label: "Quiero probar, pero necesito que se sienta natural" },
      { value: "unsure", label: "No sé si él va a responder, pero quiero entenderlo" },
    ],
  },
  {
    type: "question",
    key: "readiness",
    index: 7,
    total: 7,
    mood: {
      eyebrow: "Pregunta 7",
      title: "Tu siguiente paso.",
      copy:
        "La última respuesta ayuda a cerrar tu perfil y liberar la recomendación.",
      visualLabel: "Resultado",
      visualStat: "casi listo",
      visualCaption: "Tu lectura está siendo organizada con base en tus respuestas.",
      tags: ["resultado", "claridad", "próximo paso"],
      image: imageLibrary.intro,
    },
    title: "Última pregunta.",
    subheadline:
      "¿Quieres ver una explicación corta sobre cómo fortalecer la conexión sin presionar ni perseguir?",
    media: imageLibrary.intro,
    microcopy: "Tu resultado se está generando...",
    options: [
      { value: "ready", label: "Sí. Quiero entender qué hacer de forma práctica" },
      { value: "curious", label: "Sí. Quiero ver la explicación antes de decidir" },
    ],
  },
  {
    type: "result",
    mood: {
      eyebrow: "Resultado",
      title: "Tu lectura está lista.",
      copy:
        "Tus respuestas muestran qué tipo de reconexión puede ayudarte más ahora.",
      visualLabel: "Acceso liberado",
      visualStat: "ver ahora",
      visualCaption: "Una clase breve fue preparada para continuar tu lectura.",
      tags: ["resultado", "acceso", "conexión"],
      image: imageLibrary.reflection,
    },
    eyebrow: "Resultado personalizado",
    title: "Tu resultado está listo.",
    subheadline:
      "Tus respuestas muestran que la conexión puede mejorar cuando hay presencia, comunicación y un ritual simple de regreso.",
    intro: "Esto es lo que tu perfil revela:",
    offerIntro:
      "Preparé una TSL corta para mostrarte cómo aplicar esto con calma, sin forzar conversación y sin perder tu seguridad.",
    lessons: [
      "La señal emocional que muchos hombres no verbalizan",
      "La pregunta que abre espacio sin parecer reclamo",
      "Cómo crear un ritual de reconexión de 5 minutos",
      "Cómo sostener presencia sin perseguir atención",
    ],
    warning:
      "Importante: este contenido es educativo y no sustituye orientación profesional, médica o psicológica.",
    footnote:
      "Acceso inmediato. Puedes ver por celular. Sin registro adicional.",
    cta: "VER MI TSL PRIVADA ->",
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
    return step.progressIndex === 3 ? "quiz_bridge_1_view" : "quiz_bridge_2_view";
  }

  return "quiz_result_view";
}

function trackCurrentStepView(step) {
  trackEventOnce(getStepEventName(step), {
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

  return "";
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
  const { connection, response, ritual } = state.answers;

  const firstText =
    connection === "distant" || connection === "unclear"
      ? "Tu perfil muestra una distancia silenciosa: no necesariamente falta cariño, pero sí falta un punto de encuentro más claro."
      : "Tu perfil muestra que todavía hay base emocional, pero la conexión necesita más presencia y menos piloto automático.";

  let secondText =
    "La comunicación mejora cuando dejas de empujar la conversación y empiezas a abrir espacio con más calma.";

  if (response === "insist") {
    secondText =
      "Cuando intentas resolver todo de inmediato, puedes terminar sonando más tensa de lo que quieres. Tu ajuste está en el tono y el momento.";
  } else if (response === "withdraw") {
    secondText =
      "Cuando te cierras, él puede no entender qué necesitas. Tu ajuste está en expresar sin convertirlo en pelea.";
  } else if (response === "overthink") {
    secondText =
      "Cuando piensas demasiado, la relación empieza a sentirse más pesada. Tu ajuste está en volver a acciones simples y observables.";
  }

  const thirdText =
    ritual === "ready"
      ? "Estás lista para una práctica corta y constante."
      : "Tu avance empieza con una práctica natural, sin presión y fácil de sostener.";

  return [
    {
      title: "No necesitas perseguir atención.",
      text: firstText,
    },
    {
      title: "Tu punto de cambio está en la forma de acercarte.",
      text: secondText,
    },
    {
      title: "Una rutina pequeña puede cambiar el clima.",
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

function renderBrake(step) {
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
      <p class="step__microcopy step__microcopy--emphasis">${escapeHtml(step.microcopy)}</p>

      <div class="result-actions">
        <button class="primary-button" type="button" data-action="next">
          ${escapeHtml(step.cta)}
        </button>
      </div>
    </article>
  `;
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
    trackEvent("quiz_tsl_click", {
      destination: FINAL_CTA_URL,
    });
  }
});

elements.backButton.addEventListener("click", () => {
  goToPreviousStep();
});

renderCurrentStep();
