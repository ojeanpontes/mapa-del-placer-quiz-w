const CANVAS_WIDTH = 4900;
const CANVAS_HEIGHT = 1120;
const POSITION_STORAGE_KEY = "sv-dashboard-node-positions-v1";

const FLOW_NODES = [
  {
    key: "quiz_entry_view",
    tag: "Entrada",
    title: "Activa el Punto G Masculino",
    eventLabel: "quiz_entry_view",
    next: ["quiz_step_1_view"],
    kind: "entry",
    layouts: {
      horizontal: { x: 180, y: 210 },
      vertical: { x: 220, y: 160 },
    },
  },
  {
    key: "quiz_step_1_view",
    tag: "Pregunta 1",
    title: "Cual es tu situacion hoy?",
    eventLabel: "quiz_step_1_view",
    next: ["quiz_step_2_view"],
    layouts: {
      horizontal: { x: 500, y: 210 },
      vertical: { x: 220, y: 360 },
    },
  },
  {
    key: "quiz_step_2_view",
    tag: "Pregunta 2",
    title: "Como esta tu vida sexual hoy?",
    eventLabel: "quiz_step_2_view",
    next: ["quiz_step_3_view"],
    layouts: {
      horizontal: { x: 820, y: 210 },
      vertical: { x: 220, y: 560 },
    },
  },
  {
    key: "quiz_step_3_view",
    tag: "Pregunta 3",
    title: "Que es lo que mas te incomoda hoy?",
    eventLabel: "quiz_step_3_view",
    next: ["quiz_bridge_1_view"],
    layouts: {
      horizontal: { x: 1140, y: 210 },
      vertical: { x: 220, y: 760 },
    },
  },
  {
    key: "quiz_bridge_1_view",
    tag: "Pausa 1",
    title: "Antes de continuar, necesitas saber algo",
    eventLabel: "quiz_bridge_1_view",
    next: ["quiz_step_4_view"],
    layouts: {
      horizontal: { x: 1460, y: 210 },
      vertical: { x: 220, y: 960 },
    },
  },
  {
    key: "quiz_step_4_view",
    tag: "Pregunta 4",
    title: "Ya intentaste reencender las cosas?",
    eventLabel: "quiz_step_4_view",
    next: ["quiz_step_5_view"],
    layouts: {
      horizontal: { x: 1780, y: 210 },
      vertical: { x: 620, y: 960 },
    },
  },
  {
    key: "quiz_step_5_view",
    tag: "Pregunta 5",
    title: "Si pudieras cambiar UNA cosa...",
    eventLabel: "quiz_step_5_view",
    next: ["quiz_bridge_2_view"],
    layouts: {
      horizontal: { x: 2100, y: 210 },
      vertical: { x: 1020, y: 960 },
    },
  },
  {
    key: "quiz_bridge_2_view",
    tag: "Pausa 2",
    title: "Que hace que un hombre elija a una sola?",
    eventLabel: "quiz_bridge_2_view",
    next: ["quiz_step_6_view"],
    layouts: {
      horizontal: { x: 2420, y: 210 },
      vertical: { x: 1420, y: 960 },
    },
  },
  {
    key: "quiz_step_6_view",
    tag: "Pregunta 6",
    title: "Si aprendes, puedes guardarlo?",
    eventLabel: "quiz_step_6_view",
    next: ["quiz_step_7_view"],
    layouts: {
      horizontal: { x: 2740, y: 210 },
      vertical: { x: 1420, y: 760 },
    },
  },
  {
    key: "quiz_step_7_view",
    tag: "Pregunta 7",
    title: "Ultima pregunta",
    eventLabel: "quiz_step_7_view",
    next: ["quiz_result_view"],
    layouts: {
      horizontal: { x: 3060, y: 210 },
      vertical: { x: 1420, y: 560 },
    },
  },
  {
    key: "quiz_result_view",
    tag: "Resultado",
    title: "Tu resultado esta listo",
    eventLabel: "quiz_result_view",
    next: ["quiz_vsl_click"],
    layouts: {
      horizontal: { x: 3380, y: 210 },
      vertical: { x: 1420, y: 360 },
    },
  },
  {
    key: "quiz_vsl_click",
    tag: "Salida",
    title: "Click hacia la VSL",
    eventLabel: "quiz_vsl_click",
    next: ["vsl_view"],
    layouts: {
      horizontal: { x: 3700, y: 210 },
      vertical: { x: 1420, y: 160 },
    },
  },
  {
    key: "vsl_view",
    tag: "VSL",
    title: "Entrada en la VSL",
    eventLabel: "vsl_view",
    next: ["vsl_cta_visible"],
    layouts: {
      horizontal: { x: 4020, y: 210 },
      vertical: { x: 1820, y: 160 },
    },
  },
  {
    key: "vsl_cta_visible",
    tag: "Oferta",
    title: "CTA liberado en la VSL",
    eventLabel: "vsl_cta_visible",
    next: ["vsl_cta_click"],
    layouts: {
      horizontal: { x: 4340, y: 210 },
      vertical: { x: 2220, y: 160 },
    },
  },
  {
    key: "vsl_cta_click",
    tag: "Checkout",
    title: "Click en el checkout de la VSL",
    eventLabel: "vsl_cta_click",
    next: [],
    layouts: {
      horizontal: { x: 4660, y: 210 },
      vertical: { x: 2620, y: 160 },
    },
  },
];

const NODE_MAP = Object.fromEntries(FLOW_NODES.map((node) => [node.key, node]));
const TRACKED_EVENT_KEYS = FLOW_NODES.map((node) => node.key);

const DEMO_BASELINE = {
  quiz_entry_view: 1842,
  quiz_step_1_view: 1683,
  quiz_step_2_view: 1539,
  quiz_step_3_view: 1398,
  quiz_bridge_1_view: 1261,
  quiz_step_4_view: 1134,
  quiz_step_5_view: 1015,
  quiz_bridge_2_view: 918,
  quiz_step_6_view: 831,
  quiz_step_7_view: 774,
  quiz_result_view: 709,
  quiz_vsl_click: 614,
  vsl_view: 587,
  vsl_cta_visible: 338,
  vsl_cta_click: 201,
};

const elements = {
  flow: document.getElementById("analytics-flow"),
  viewport: document.getElementById("analytics-viewport"),
  connections: document.getElementById("analytics-connections"),
  refresh: document.getElementById("refresh-demo"),
  statusPrimary: document.getElementById("status-primary"),
  statusSecondary: document.getElementById("status-secondary"),
  zoomIn: document.getElementById("zoom-in"),
  zoomOut: document.getElementById("zoom-out"),
  zoomReset: document.getElementById("zoom-reset"),
  summaryEntry: document.getElementById("summary-entry"),
  summaryVsl: document.getElementById("summary-vsl"),
  summaryCta: document.getElementById("summary-cta"),
  summaryResult: document.getElementById("summary-result"),
  inspectorTitle: document.getElementById("inspector-title"),
  inspectorKey: document.getElementById("inspector-key"),
  inspectorViews: document.getElementById("inspector-views"),
  inspectorPass: document.getElementById("inspector-pass"),
  inspectorDrop: document.getElementById("inspector-drop"),
  inspectorBase: document.getElementById("inspector-base"),
  inspectorNext: document.getElementById("inspector-next"),
  worstTitle: document.getElementById("worst-step-title"),
  worstCopy: document.getElementById("worst-step-copy"),
  bestTitle: document.getElementById("best-step-title"),
  bestCopy: document.getElementById("best-step-copy"),
  focusNode: document.getElementById("focus-node"),
  resetNode: document.getElementById("reset-node"),
  layoutHorizontal: document.getElementById("layout-horizontal"),
  layoutVertical: document.getElementById("layout-vertical"),
  layoutReset: document.getElementById("layout-reset"),
};

const state = {
  zoom: 1,
  layout: "horizontal",
  snapshot: {},
  selectedKey: "quiz_step_1_view",
  positions: {},
  drag: null,
  pan: null,
};

function formatCount(value) {
  return new Intl.NumberFormat("es-419").format(Math.max(0, Math.round(value)));
}

function formatPercent(value) {
  return `${Math.max(0, value).toFixed(1).replace(".", ".")}%`;
}

function jitterValue(value, variance = 0.05) {
  const delta = 1 + (Math.random() * variance * 2 - variance);
  return Math.max(0, Math.round(value * delta));
}

function normalizeSnapshot(rawSnapshot = {}) {
  return Object.fromEntries(
    TRACKED_EVENT_KEYS.map((key) => [key, Number(rawSnapshot[key]) || 0]),
  );
}

function setStatus(primary, secondary) {
  if (elements.statusPrimary) {
    elements.statusPrimary.textContent = primary;
  }

  if (elements.statusSecondary) {
    elements.statusSecondary.textContent = secondary;
  }
}

function createDemoSnapshot() {
  const snapshot = {};

  Object.entries(DEMO_BASELINE).forEach(([key, value]) => {
    snapshot[key] = jitterValue(value);
  });

  const linearPath = [
    "quiz_entry_view",
    "quiz_step_1_view",
    "quiz_step_2_view",
    "quiz_step_3_view",
    "quiz_bridge_1_view",
    "quiz_step_4_view",
    "quiz_step_5_view",
    "quiz_bridge_2_view",
    "quiz_step_6_view",
    "quiz_step_7_view",
    "quiz_result_view",
    "quiz_vsl_click",
    "vsl_view",
    "vsl_cta_visible",
    "vsl_cta_click",
  ];

  for (let index = 1; index < linearPath.length; index += 1) {
    const currentKey = linearPath[index];
    const previousKey = linearPath[index - 1];
    snapshot[currentKey] = Math.min(snapshot[currentKey], snapshot[previousKey]);
  }

  return snapshot;
}

async function loadLiveSnapshot() {
  try {
    setStatus("Conectando GA4", "Buscando datos reales");

    const response = await fetch("/api/ga4-funnel?range=today", {
      cache: "no-store",
    });

    if (!response.ok) {
      let payload = null;

      try {
        payload = await response.json();
      } catch (error) {
        payload = null;
      }

      const details = payload?.required?.length
        ? `Faltam: ${payload.required.join(", ")}`
        : payload?.error || `GA4 unavailable (${response.status})`;

      throw new Error(details);
    }

    const payload = await response.json();

    if (!payload?.snapshot) {
      throw new Error("GA4 payload missing snapshot");
    }

    setStatus("GA4 conectado", payload.rangeLabel || "Hoy");
    return normalizeSnapshot(payload.snapshot);
  } catch (error) {
    const message = error.message || "";

    if (message.includes("GA4_")) {
      setStatus("GA4 pendiente", "Credenciales no configuradas");
    } else if (message.includes("SERVICE_DISABLED") || message.includes("Google Analytics Data API has not been used")) {
      setStatus("GA4 bloqueado", "Activa la Data API en Google Cloud");
    } else if (message.includes("PERMISSION_DENIED")) {
      setStatus("GA4 sin acceso", "Verifica el acceso de la service account");
    } else {
      setStatus("Preview local", "Datos demo");
    }

    return createDemoSnapshot();
  }
}

function getDefaultPositions(layoutName = "horizontal") {
  return Object.fromEntries(
    FLOW_NODES.map((node) => [node.key, { ...node.layouts[layoutName] }]),
  );
}

function loadPositions() {
  try {
    const rawValue = window.localStorage.getItem(POSITION_STORAGE_KEY);
    const parsed = rawValue ? JSON.parse(rawValue) : null;

    if (!parsed || typeof parsed !== "object") {
      return getDefaultPositions(state.layout);
    }

    const defaults = getDefaultPositions(state.layout);
    return Object.fromEntries(
      FLOW_NODES.map((node) => [
        node.key,
        {
          x: Number(parsed[node.key]?.x) || defaults[node.key].x,
          y: Number(parsed[node.key]?.y) || defaults[node.key].y,
        },
      ]),
    );
  } catch (error) {
    return getDefaultPositions(state.layout);
  }
}

function savePositions() {
  try {
    window.localStorage.setItem(POSITION_STORAGE_KEY, JSON.stringify(state.positions));
  } catch (error) {
    // Ignore persistence failures so the dashboard remains usable.
  }
}

function getNodePosition(nodeKey) {
  return state.positions[nodeKey] || NODE_MAP[nodeKey]?.layouts?.[state.layout] || { x: 0, y: 0 };
}

function getOutgoingTotal(node, snapshot) {
  if (!node.next || node.next.length === 0) {
    return 0;
  }

  return node.next.reduce((total, nextKey) => total + (snapshot[nextKey] || 0), 0);
}

function getNodeMetrics(node, snapshot) {
  const current = snapshot[node.key] || 0;
  const outgoing = getOutgoingTotal(node, snapshot);
  const passRate = node.next.length === 0
    ? 0
    : current > 0
      ? Math.min(100, (outgoing / current) * 100)
      : 0;
  const dropRate = node.next.length === 0 ? 0 : Math.max(0, 100 - passRate);
  const baseRate = snapshot.quiz_entry_view
    ? Math.min(100, (current / snapshot.quiz_entry_view) * 100)
    : 0;

  return {
    current,
    outgoing,
    passRate,
    dropRate,
    baseRate,
  };
}

function buildNodeMarkup(node, snapshot) {
  const metrics = getNodeMetrics(node, snapshot);
  const position = getNodePosition(node.key);
  const retention = node.next.length ? formatPercent(metrics.passRate) : formatPercent(metrics.baseRate);

  return `
    <article
      class="flow-node${node.kind === "entry" ? " flow-node--entry" : ""}"
      data-node-key="${node.key}"
      style="left:${position.x}px; top:${position.y}px;"
    >
      <span class="flow-node__dot flow-node__dot--left" aria-hidden="true"></span>
      <span class="flow-node__dot flow-node__dot--right" aria-hidden="true"></span>

      <div class="flow-node__header">
        <span class="flow-node__tag">${node.tag}</span>
        <strong class="flow-node__retention">${retention}</strong>
      </div>

      <h3 class="flow-node__title">${node.title}</h3>
      <p class="flow-node__event">${node.eventLabel}</p>

      <div class="flow-node__stats">
        <div class="flow-node__stat">
          <span>Visualizaciones</span>
          <strong>${formatCount(metrics.current)}</strong>
        </div>
        <div class="flow-node__stat">
          <span>Paso</span>
          <strong class="is-success">${node.next.length ? formatPercent(metrics.passRate) : "Final"}</strong>
        </div>
        <div class="flow-node__stat">
          <span>Salida</span>
          <strong class="is-danger">${node.next.length ? formatPercent(metrics.dropRate) : "—"}</strong>
        </div>
      </div>
    </article>
  `;
}

function renderNodes(snapshot) {
  elements.flow.innerHTML = FLOW_NODES.map((node) => buildNodeMarkup(node, snapshot)).join("");
}

function updateSelectedState() {
  elements.flow.querySelectorAll(".flow-node").forEach((element) => {
    element.classList.toggle(
      "flow-node--selected",
      element.dataset.nodeKey === state.selectedKey,
    );
  });
}

function getAnchorPoint(rect, direction) {
  if (direction === "right") {
    return { x: rect.left + rect.width, y: rect.top + rect.height / 2 };
  }

  if (direction === "left") {
    return { x: rect.left, y: rect.top + rect.height / 2 };
  }

  if (direction === "bottom") {
    return { x: rect.left + rect.width / 2, y: rect.top + rect.height };
  }

  return { x: rect.left + rect.width / 2, y: rect.top };
}

function getConnectionAnchors(sourceRect, targetRect) {
  if (targetRect.left >= sourceRect.left + sourceRect.width) {
    return {
      start: getAnchorPoint(sourceRect, "right"),
      end: getAnchorPoint(targetRect, "left"),
    };
  }

  if (targetRect.left + targetRect.width <= sourceRect.left) {
    return {
      start: getAnchorPoint(sourceRect, "left"),
      end: getAnchorPoint(targetRect, "right"),
    };
  }

  if (targetRect.top >= sourceRect.top) {
    return {
      start: getAnchorPoint(sourceRect, "bottom"),
      end: getAnchorPoint(targetRect, "top"),
    };
  }

  return {
    start: getAnchorPoint(sourceRect, "top"),
    end: getAnchorPoint(targetRect, "bottom"),
  };
}

function buildPath(start, end) {
  const deltaX = end.x - start.x;
  const deltaY = end.y - start.y;
  const curveX = Math.max(60, Math.abs(deltaX) * 0.45);
  const curveY = Math.max(40, Math.abs(deltaY) * 0.35);
  const control1 = {
    x: start.x + Math.sign(deltaX || 1) * curveX,
    y: start.y + (deltaY === 0 ? 0 : Math.sign(deltaY) * curveY),
  };
  const control2 = {
    x: end.x - Math.sign(deltaX || 1) * curveX,
    y: end.y - (deltaY === 0 ? 0 : Math.sign(deltaY) * curveY),
  };

  return `M ${start.x} ${start.y} C ${control1.x} ${control1.y}, ${control2.x} ${control2.y}, ${end.x} ${end.y}`;
}

function renderConnections() {
  const fragments = [];

  FLOW_NODES.forEach((node) => {
    const sourceElement = elements.flow.querySelector(`[data-node-key="${node.key}"]`);

    if (!sourceElement) {
      return;
    }

    const sourceRect = {
      left: sourceElement.offsetLeft,
      top: sourceElement.offsetTop,
      width: sourceElement.offsetWidth,
      height: sourceElement.offsetHeight,
    };

    node.next.forEach((nextKey) => {
      const targetElement = elements.flow.querySelector(`[data-node-key="${nextKey}"]`);

      if (!targetElement) {
        return;
      }

      const targetRect = {
        left: targetElement.offsetLeft,
        top: targetElement.offsetTop,
        width: targetElement.offsetWidth,
        height: targetElement.offsetHeight,
      };

      const anchors = getConnectionAnchors(sourceRect, targetRect);
      const isBranch = node.next.length > 1 || node.key.includes("decline");

      fragments.push(
        `<path class="analytics-link${isBranch ? " analytics-link--branch" : ""}" d="${buildPath(
          anchors.start,
          anchors.end,
        )}" />`,
      );
    });
  });

  elements.connections.innerHTML = fragments.join("");
}

function renderSummary(snapshot) {
  elements.summaryEntry.textContent = formatCount(snapshot.quiz_entry_view || 0);
  elements.summaryResult.textContent = formatCount(snapshot.quiz_result_view || 0);
  elements.summaryVsl.textContent = formatCount(snapshot.vsl_view || 0);
  elements.summaryCta.textContent = formatCount(snapshot.vsl_cta_click || 0);
}

function renderInspector(snapshot) {
  const node = NODE_MAP[state.selectedKey];

  if (!node) {
    return;
  }

  const metrics = getNodeMetrics(node, snapshot);
  const nextItems = node.next
    .map((nextKey) => {
      const nextNode = NODE_MAP[nextKey];
      const nextValue = snapshot[nextKey] || 0;

      return `
        <div class="inspector-next__item">
          <span>${nextNode?.title || nextKey}</span>
          <strong>${formatCount(nextValue)}</strong>
        </div>
      `;
    })
    .join("");

  elements.inspectorTitle.textContent = node.title;
  elements.inspectorKey.textContent = node.eventLabel;
  elements.inspectorViews.textContent = formatCount(metrics.current);
  elements.inspectorPass.textContent = node.next.length ? formatPercent(metrics.passRate) : "Final";
  elements.inspectorDrop.textContent = node.next.length ? formatPercent(metrics.dropRate) : "—";
  elements.inspectorBase.textContent = formatPercent(metrics.baseRate);
  elements.inspectorNext.innerHTML =
    nextItems || '<div class="inspector-next__item"><span>Sin proximo paso</span><strong>Final</strong></div>';
}

function renderInsights(snapshot) {
  const comparable = FLOW_NODES.filter((node) => node.next.length > 0).map((node) => ({
    node,
    ...getNodeMetrics(node, snapshot),
  }));

  const worst = comparable.reduce((previous, current) =>
    current.dropRate > previous.dropRate ? current : previous,
  );
  const best = comparable.reduce((previous, current) =>
    current.passRate > previous.passRate ? current : previous,
  );

  elements.worstTitle.textContent = worst.node.title;
  elements.worstCopy.textContent = `${formatPercent(worst.dropRate)} de salida en esta etapa. ${formatCount(
    worst.current,
  )} personas llegaron aqui.`;

  elements.bestTitle.textContent = best.node.title;
  elements.bestCopy.textContent = `${formatPercent(best.passRate)} de paso en esta etapa. ${formatCount(
    best.current,
  )} personas pasaron por este bloque.`;
}

function applyZoom() {
  elements.flow.style.transform = `scale(${state.zoom})`;
  elements.connections.style.transform = `scale(${state.zoom})`;
  elements.connections.style.transformOrigin = "top left";
}

function centerNodeInViewport(nodeKey) {
  const nodeElement = elements.flow.querySelector(`[data-node-key="${nodeKey}"]`);

  if (!nodeElement) {
    return;
  }

  const nodeCenterX = (nodeElement.offsetLeft + nodeElement.offsetWidth / 2) * state.zoom;
  const nodeCenterY = (nodeElement.offsetTop + nodeElement.offsetHeight / 2) * state.zoom;

  elements.viewport.scrollTo({
    left: Math.max(0, nodeCenterX - elements.viewport.clientWidth / 2),
    top: Math.max(0, nodeCenterY - elements.viewport.clientHeight / 2),
    behavior: "smooth",
  });
}

function renderDashboard(snapshot) {
  state.snapshot = snapshot;
  renderNodes(snapshot);
  updateSelectedState();
  renderSummary(snapshot);
  renderInspector(snapshot);
  renderInsights(snapshot);

  requestAnimationFrame(() => {
    renderConnections();
    applyZoom();
  });
}

function selectNode(nodeKey) {
  state.selectedKey = nodeKey;
  updateSelectedState();
  renderInspector(state.snapshot);
}

function updateNodePosition(nodeKey) {
  const nodeElement = elements.flow.querySelector(`[data-node-key="${nodeKey}"]`);
  const position = getNodePosition(nodeKey);

  if (!nodeElement || !position) {
    return;
  }

  nodeElement.style.left = `${position.x}px`;
  nodeElement.style.top = `${position.y}px`;
}

function clampPosition(position) {
  return {
    x: Math.max(20, Math.min(CANVAS_WIDTH - 280, position.x)),
    y: Math.max(30, Math.min(CANVAS_HEIGHT - 180, position.y)),
  };
}

function startNodeDrag(event, nodeElement) {
  const key = nodeElement.dataset.nodeKey;
  const position = getNodePosition(key);

  state.drag = {
    key,
    startX: event.clientX,
    startY: event.clientY,
    originX: position.x,
    originY: position.y,
  };

  nodeElement.classList.add("is-dragging");
  selectNode(key);
}

function updateNodeDrag(event) {
  if (!state.drag) {
    return;
  }

  const deltaX = (event.clientX - state.drag.startX) / state.zoom;
  const deltaY = (event.clientY - state.drag.startY) / state.zoom;
  const nextPosition = clampPosition({
    x: state.drag.originX + deltaX,
    y: state.drag.originY + deltaY,
  });

  state.positions[state.drag.key] = nextPosition;
  updateNodePosition(state.drag.key);
  renderConnections();
}

function finishNodeDrag() {
  if (!state.drag) {
    return;
  }

  const nodeElement = elements.flow.querySelector(`[data-node-key="${state.drag.key}"]`);
  nodeElement?.classList.remove("is-dragging");
  state.drag = null;
  savePositions();
}

function startPan(event) {
  state.pan = {
    startX: event.clientX,
    startY: event.clientY,
    scrollLeft: elements.viewport.scrollLeft,
    scrollTop: elements.viewport.scrollTop,
  };

  elements.viewport.classList.add("is-panning");
}

function updatePan(event) {
  if (!state.pan) {
    return;
  }

  const deltaX = event.clientX - state.pan.startX;
  const deltaY = event.clientY - state.pan.startY;

  elements.viewport.scrollLeft = state.pan.scrollLeft - deltaX;
  elements.viewport.scrollTop = state.pan.scrollTop - deltaY;
}

function finishPan() {
  state.pan = null;
  elements.viewport.classList.remove("is-panning");
}

function applyLayout(layoutName) {
  state.layout = layoutName;
  state.positions = getDefaultPositions(layoutName);
  savePositions();
  renderDashboard(state.snapshot);
  centerNodeInViewport(state.selectedKey);
}

function resetSelectedNode() {
  const node = NODE_MAP[state.selectedKey];

  if (!node) {
    return;
  }

  state.positions[state.selectedKey] = { ...node.layouts[state.layout] };
  updateNodePosition(state.selectedKey);
  renderConnections();
  savePositions();
  centerNodeInViewport(state.selectedKey);
}

function setupPointerInteractions() {
  elements.flow.addEventListener("pointerdown", (event) => {
    const nodeElement = event.target.closest("[data-node-key]");

    if (!nodeElement) {
      return;
    }

    event.preventDefault();
    startNodeDrag(event, nodeElement);
  });

  elements.viewport.addEventListener("pointerdown", (event) => {
    if (
      event.target.closest("[data-node-key]") ||
      event.target.closest(".floating-panel") ||
      event.target.closest(".zoom-controls")
    ) {
      return;
    }

    startPan(event);
  });

  window.addEventListener("pointermove", (event) => {
    updateNodeDrag(event);
    updatePan(event);
  });

  window.addEventListener("pointerup", () => {
    finishNodeDrag();
    finishPan();
  });

  elements.flow.addEventListener("click", (event) => {
    const nodeElement = event.target.closest("[data-node-key]");

    if (!nodeElement) {
      return;
    }

    selectNode(nodeElement.dataset.nodeKey);
  });
}

function setupZoomControls() {
  elements.zoomIn?.addEventListener("click", () => {
    state.zoom = Math.min(1.3, Number((state.zoom + 0.06).toFixed(2)));
    applyZoom();
    renderConnections();
  });

  elements.zoomOut?.addEventListener("click", () => {
    state.zoom = Math.max(0.72, Number((state.zoom - 0.06).toFixed(2)));
    applyZoom();
    renderConnections();
  });

  elements.zoomReset?.addEventListener("click", () => {
    state.zoom = 1;
    applyZoom();
    renderConnections();
    centerNodeInViewport(state.selectedKey);
  });

  elements.viewport.addEventListener(
    "wheel",
    (event) => {
      if (!(event.ctrlKey || event.metaKey)) {
        return;
      }

      event.preventDefault();
      const delta = event.deltaY < 0 ? 0.05 : -0.05;
      state.zoom = Math.max(0.72, Math.min(1.3, Number((state.zoom + delta).toFixed(2))));
      applyZoom();
      renderConnections();
    },
    { passive: false },
  );
}

function setupToolbarActions() {
  elements.refresh?.addEventListener("click", async () => {
    renderDashboard(await loadLiveSnapshot());
  });

  elements.focusNode?.addEventListener("click", () => {
    centerNodeInViewport(state.selectedKey);
  });

  elements.resetNode?.addEventListener("click", () => {
    resetSelectedNode();
  });

  elements.layoutHorizontal?.addEventListener("click", () => {
    applyLayout("horizontal");
  });

  elements.layoutVertical?.addEventListener("click", () => {
    applyLayout("vertical");
  });

  elements.layoutReset?.addEventListener("click", () => {
    applyLayout("horizontal");
  });
}

async function initDashboard() {
  state.positions = loadPositions();
  renderDashboard(await loadLiveSnapshot());
  setupPointerInteractions();
  setupZoomControls();
  setupToolbarActions();
  centerNodeInViewport(state.selectedKey);

  window.addEventListener("resize", () => {
    renderConnections();
  });
}

initDashboard();
