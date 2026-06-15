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
      eyebrow: "Quiz educativo",
      title: "Mira cómo está el vínculo.",
      copy:
        "Una lectura breve para observar cómo está la comunicación y qué tipo de contenido puede servirte como punto de partida.",
      visualLabel: "Ruta breve",
      visualStat: "7 preguntas",
      visualCaption: "Privado, simple y pensado para relaciones adultas.",
      tags: ["comunicación", "presencia", "claridad"],
      image: imageLibrary.intro,
    },
    kicker: "Evaluación educativa",
    title: "¿Qué está pesando más en tu relación hoy?",
    subheadline:
      "Responde este quiz y recibe una orientación de contenido sobre diálogo, escucha y reconexión cotidiana.",
    paragraphs: [
      "Este quiz no promete cambiar una relación de un día para otro. Solo te ayuda a mirar el momento actual con más orden y a elegir un próximo paso educativo.",
    ],
    microcopy: "Toma menos de 2 minutos. Tus respuestas quedan en privado.",
    cta: "EMPEZAR MI EVALUACIÓN",
    media: imageLibrary.intro,
  },
  {
    type: "question",
    key: "status",
    index: 1,
    total: 7,
    mood: {
      eyebrow: "Pregunta 1",
      title: "Tu momento actual.",
      copy:
        "Toda orientación empieza mejor cuando parte de tu realidad, sin exagerar ni negar lo que está pasando.",
      visualLabel: "Contexto",
      visualStat: "punto de partida",
      visualCaption: "Tu situación ayuda a ordenar la recomendación final.",
      tags: ["momento", "realidad", "contexto"],
      image: imageLibrary.reflection,
    },
    title: "¿Qué tipo de relación quieres observar hoy?",
    subheadline: "Elige la opción que más se parece a tu momento actual.",
    media: imageLibrary.reflection,
    microcopy: "No hay respuesta correcta. Solo contexto.",
    options: [
      { value: "single", label: "Estoy soltera y quiero aprender sobre vínculos más sanos" },
      { value: "dating", label: "Estoy conociendo a alguien y quiero comunicarme mejor" },
      { value: "relationship", label: "Estoy en una relación y quiero cuidar el vínculo" },
      { value: "rebuilding", label: "Estoy en una etapa delicada y quiero mirar esto con calma" },
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
        "La distancia no siempre aparece de golpe. A veces se nota en detalles pequeños de la rutina.",
      visualLabel: "Conexión",
      visualStat: "señales diarias",
      visualCaption: "Los cambios pequeños suelen mostrar mucho.",
      tags: ["cercanía", "rutina", "atención"],
      image: imageLibrary.tension,
    },
    title: "¿Cómo está el diálogo entre ustedes?",
    subheadline: "El modo en que hablamos suele mostrar cuánto espacio emocional existe.",
    media: imageLibrary.tension,
    microcopy: "Marca lo que más se parece a tu experiencia.",
    options: [
      { value: "warm", label: "Todavía conversamos bien, pero falta profundidad" },
      { value: "routine", label: "Hablamos casi solo de lo necesario" },
      { value: "distant", label: "Las conversaciones se volvieron frías o cortas" },
      { value: "unclear", label: "Intentamos hablar, pero parece que no nos escuchamos de verdad" },
    ],
  },
  {
    type: "question",
    key: "painPoint",
    index: 3,
    total: 7,
    mood: {
      eyebrow: "Pregunta 3",
      title: "Lo que pesa más.",
      copy:
        "A veces el punto no es una pelea grande. Es no saber cómo volver a conversar sin tensión.",
      visualLabel: "Nudo central",
      visualStat: "lo que pesa",
      visualCaption: "Nombrarlo ayuda a dejar de cargarlo sola.",
      tags: ["claridad", "escucha", "comunicación"],
      image: imageLibrary.reflection,
    },
    title: "¿Sientes algún tipo de distancia emocional?",
    subheadline: "No siempre es distancia física. A veces aparece en el silencio, el tono o la rutina.",
    media: imageLibrary.reflection,
    microcopy: "Esto es una lectura, no un juicio.",
    options: [
      { value: "unseen", label: "Sí, a veces siento que ya no me escucha igual" },
      { value: "communication", label: "Sí, me cuesta hablar sin que pese el ambiente" },
      { value: "silence", label: "Sí, cuando aparece el silencio no sé cómo acercarme" },
      { value: "confidence", label: "A veces, y quiero cuidar mi calma antes de reaccionar" },
    ],
  },
  {
    type: "brake",
    progressIndex: 3,
    progressTotal: 7,
    mood: {
      eyebrow: "Pausa breve",
      title: "Esto se puede observar.",
      copy:
        "La desconexión cotidiana suele ser una suma de microdistancias, no una sola conversación difícil.",
      visualLabel: "Patrón",
      visualStat: "señales pequeñas",
      visualCaption: "Mirar el patrón permite actuar con más calma.",
      tags: ["patrón", "presencia", "reconexión"],
      image: imageLibrary.studyDesk,
    },
    kicker: "Antes de continuar",
    title: "Muchas mujeres intentan resolver distancia con más presión.",
    subheadline:
      "Preguntan más, explican más o se guardan todo. A veces lo que más ayuda es aprender a abrir una conversación en el momento correcto.",
    paragraphsTop: [
      "Una relación puede seguir funcionando por fuera y sentirse distante por dentro.",
      "Eso no siempre significa falta de cariño. A veces significa falta de lenguaje, falta de pausa o cansancio acumulado.",
      "Por eso un enfoque educativo puede ser útil: te da preguntas, rituales y formas de escuchar sin convertir todo en discusión.",
    ],
    galleryTop: [
      {
        image: imageLibrary.tension,
        label: "Distancia silenciosa",
        caption: "La rutina puede seguir andando mientras la comunicación pierde calidez.",
      },
      {
        image: imageLibrary.studyPaper,
        label: "Lectura privada",
        caption: "Cuando organizas lo que sientes, es más fácil hablar con serenidad.",
      },
    ],
    calloutTitle: "La idea clave:",
    quote:
      "No necesitas tener la frase perfecta. Necesitas un espacio seguro para empezar una conversación posible.",
    paragraphsBottom: [
      "Eso no significa callarte, agradar a toda costa ni cargar la relación sola.",
      "Significa aprender recursos simples para comunicarte con más claridad y menos desgaste.",
      "Las próximas preguntas ayudan a definir qué módulo puede servirte primero.",
    ],
    microcopy: "Vas bien. Ya miraste el patrón sin dramatizarlo.",
    cta: "CONTINUAR MI LECTURA",
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
        "Lo que haces cuando sientes distancia muestra qué herramienta práctica puede ayudarte más.",
      visualLabel: "Respuesta",
      visualStat: "patrón personal",
      visualCaption: "Tu reacción no te define. Solo muestra qué necesitas ordenar.",
      tags: ["reacción", "calma", "dirección"],
      image: imageLibrary.reflection,
    },
    title: "Cuando el clima se pone distante, ¿qué sueles hacer?",
    subheadline: "Elige tu reacción más común, incluso si no siempre te encanta admitirla.",
    media: imageLibrary.reflection,
    microcopy: "Esto ayuda a personalizar tu recomendación.",
    options: [
      { value: "insist", label: "Intento hablar de inmediato para resolverlo" },
      { value: "withdraw", label: "Me guardo lo que siento y espero que lo note" },
      { value: "overthink", label: "Empiezo a pensar demasiado y me canso por dentro" },
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
      title: "Lo que quieres cuidar.",
      copy:
        "Cuando sabes qué quieres fortalecer, dejas de reaccionar a todo y empiezas a elegir mejor tus acciones.",
      visualLabel: "Objetivo",
      visualStat: "lo que importa",
      visualCaption: "La recomendación final depende de lo que quieres trabajar primero.",
      tags: ["objetivo", "calidez", "complicidad"],
      image: imageLibrary.promise,
    },
    title: "Si pudieras cuidar una sola área esta semana, ¿cuál sería?",
    subheadline: "Piensa en lo que haría la relación más liviana y más clara.",
    media: imageLibrary.promise,
    microcopy: "Tu elección ayuda a ordenar la ruta del curso.",
    options: [
      { value: "attention", label: "Más atención y presencia en el día a día" },
      { value: "conversation", label: "Conversaciones más honestas y menos pesadas" },
      { value: "initiative", label: "Pequeños momentos de cuidado de ambos lados" },
      { value: "peace", label: "Más calma, respeto y confianza en la convivencia" },
    ],
  },
  {
    type: "brake",
    progressIndex: 5,
    progressTotal: 7,
    mood: {
      eyebrow: "Pausa 2",
      title: "Un curso no hace magia.",
      copy:
        "Pero una ruta clara puede ayudarte a practicar conversaciones más sanas y rituales pequeños de reconexión.",
      visualLabel: "Curso educativo",
      visualStat: "5 clases cortas",
      visualCaption: "Contenido simple para aplicar con responsabilidad en la vida real.",
      tags: ["curso", "práctica", "relación"],
      image: imageLibrary.studyDesk,
    },
    kicker: "Enfoque del curso",
    title: "La idea no es prometer un resultado. Es entregarte herramientas.",
    subheadline:
      "La relación depende de dos personas. Este contenido solo organiza tu parte: cómo observar, preguntar, escuchar, pedir y crear momentos de reconexión.",
    paragraphsTop: [
      "Hay contenido que vende soluciones rápidas. Esta ruta no va por ahí.",
      "El objetivo es educativo: darte un lenguaje más claro para hablar de lo que sientes sin convertir cada conversación en un choque.",
      "También vas a ver ejercicios breves para cuidar tu propia calma antes de intentar resolver todo afuera.",
    ],
    galleryTop: [
      {
        image: imageLibrary.studyDesk,
        label: "Ruta organizada",
        caption: "Aulas cortas, prácticas simples y ejercicios de reflexión.",
      },
      {
        image: imageLibrary.promise,
        label: "Relación real",
        caption: "Nada de fórmulas mágicas. Solo pasos pequeños para conversar mejor.",
      },
    ],
    calloutTitle: "Transparencia:",
    quote:
      "El curso no garantiza cambios en otra persona. Te ayuda a cuidar tu comunicación, tu presencia y tu forma de participar en el vínculo.",
    paragraphsBottom: [
      "Si tu relación vive violencia, amenaza, abuso o riesgo, este curso no reemplaza ayuda profesional ni red de apoyo.",
      "Si lo que buscas es contenido simple para mejorar conversaciones cotidianas, estás en el lugar correcto.",
      "Estás a dos preguntas de ver la recomendación final.",
    ],
    microcopy: "Contenido educativo para relaciones adultas y responsables.",
    cta: "VER LAS ÚLTIMAS PREGUNTAS",
  },
  {
    type: "question",
    key: "ritual",
    index: 6,
    total: 7,
    mood: {
      eyebrow: "Pregunta 6",
      title: "Tu apertura a practicar.",
      copy:
        "Una práctica útil no necesita ser intensa. Necesita ser clara, posible y repetible.",
      visualLabel: "Apertura",
      visualStat: "acción simple",
      visualCaption: "La constancia suele pesar más que un día perfecto.",
      tags: ["ritual", "acción", "aprendizaje"],
      image: imageLibrary.studyPaper,
    },
    title: "¿Qué tipo de práctica te parece más posible ahora?",
    subheadline: "Elige lo que sí podrías hacer en tu vida real.",
    media: imageLibrary.studyPaper,
    microcopy: "La idea no es hacer más. Es hacerlo con más intención.",
    options: [
      { value: "ready", label: "Una práctica diaria de 5 minutos" },
      { value: "careful", label: "Una conversación guiada una o dos veces por semana" },
      { value: "unsure", label: "Primero quiero entender mejor mi patrón" },
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
        "La última respuesta ayuda a liberar una recomendación educativa, no una promesa.",
      visualLabel: "Resultado",
      visualStat: "casi listo",
      visualCaption: "Tu lectura se organiza con base en tus respuestas.",
      tags: ["resultado", "claridad", "próximo paso"],
      image: imageLibrary.intro,
    },
    title: "Última pregunta.",
    subheadline:
      "¿Quieres ver el curso educativo que organiza estas herramientas en aulas cortas?",
    media: imageLibrary.intro,
    microcopy: "Tu resultado se está generando...",
    options: [
      { value: "ready", label: "Sí. Quiero ver el contenido del curso" },
      { value: "curious", label: "Sí. Quiero entender la propuesta antes de decidir" },
    ],
  },
  {
    type: "result",
    mood: {
      eyebrow: "Resultado",
      title: "Tu lectura está lista.",
      copy:
        "Tus respuestas indican qué tipo de contenido educativo puede servirte como punto de partida.",
      visualLabel: "Recomendación",
      visualStat: "ver ahora",
      visualCaption: "Una página corta presenta el curso y lo que incluye.",
      tags: ["resultado", "curso", "relación"],
      image: imageLibrary.reflection,
    },
    eyebrow: "Resultado educativo",
    title: "Tu resultado está listo.",
    subheadline:
      "Tus respuestas muestran que puede ser útil empezar por comunicación, escucha y un ritual simple de reconexión.",
    intro: "Esto es lo que tu perfil sugiere trabajar primero:",
    offerIntro:
      "Preparé una página corta para mostrarte El Mapa del Placer Masculino, un curso digital de 5 clases con guías de apoyo, ejercicios de reflexión y acceso a la comunidad privada.",
    lessons: [
      "Cómo bajar el ruido antes de una conversación importante",
      "La pregunta que abre espacio sin sonar a reclamo",
      "Cómo escuchar sin defenderte automáticamente",
      "Cómo crear un ritual de reconexión de 5 minutos",
      "Qué materiales de apoyo vas a recibir dentro del área de miembros",
    ],
    warning:
      "Importante: este contenido es educativo, no garantiza resultados y no sustituye orientación psicológica, médica, legal o terapia de pareja.",
    footnote:
      "Acceso digital. Puedes ver por celular. La página siguiente muestra precio, entrega, soporte y políticas.",
    cta: "VER EL CURSO EDUCATIVO",
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
    "La comunicación suele fluir mejor cuando hay una pausa real antes de responder y una pregunta más clara antes de interpretar.";

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
      title: "Puedes empezar por observar el patrón.",
      text: firstText,
    },
    {
      title: "Tu punto de cambio está en la forma de acercarte.",
      text: secondText,
    },
    {
      title: "Una rutina pequeña puede ayudar a ordenar el clima.",
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
