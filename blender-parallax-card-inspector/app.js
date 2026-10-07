(() => {
  const cards = [...document.querySelectorAll(".inspect-card")];
  const materialSamples = [...document.querySelectorAll(".material-sample")];
  const globalAutoButton = document.querySelector("#global-auto");
  const resetButton = document.querySelector("#reset-view");
  const tuningConsole = document.querySelector("[data-tuning-console]");
  const tuningTabs = document.querySelector("#tuning-tabs");
  const tuningFields = document.querySelector("#tuning-fields");
  const tuningResetCardButton = document.querySelector("#tuning-reset-card");
  const tuningResetAllButton = document.querySelector("#tuning-reset-all");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const cardData = {
    shengkai: {
      title: "圣凯布米龙",
      description: "拖动卡面，观察火焰、虫翼和主体层在角度变化中的错位。",
      state: "Blender GLB / 分层网页预览",
      // The source card preview uses roughly +/-0.38rad yaw and +/-0.12rad
      // pitch during its automatic inspection loop.
      amplitude: 21.8,
      pitch: 6.9,
      phase: 0.1,
    },
    fengbao: {
      title: "风暴酷拉",
      description: "拖动卡面，观察黄色电场、主体和文字层如何被视角拉开。",
      state: "Blender GLB / 分层网页预览",
      amplitude: 21.8,
      pitch: 6.9,
      phase: 1.7,
    },
    daermaodou: {
      title: "大耳帽兜家族",
      description: "拖动卡面，观察三种形态与冰晶糖纸背景在转动时的错位。",
      state: "4193 调校：整体 100% · 形态 116 / 100 / 94% · 位置 0%",
      amplitude: 21.5,
      pitch: 6.8,
      phase: 0,
    },
  };

  // TEMP TUNING CONSOLE: the defaults mirror the current 4193 draft.
  const tuningDefaults = {
    shengkai: {
      subjectScale: 1,
      subjectX: 0,
      subjectY: 0,
      // Values mirrored from the source card-config.json. They are kept out
      // of the temporary console for now so the requested scale/position
      // controls stay focused.
      subjectDepth: 0.34,
      backgroundDepth: -0.18,
      foilIntensity: 0.42,
    },
    fengbao: {
      subjectScale: 1,
      subjectX: 0,
      subjectY: 0,
      subjectDepth: 0.38,
      backgroundDepth: -0.22,
      foilIntensity: 0.48,
    },
    daermaodou: {
      subjectScale: 1,
      formOneScale: 1.16,
      formThreeScale: 1,
      formTwoScale: 0.94,
      formOneX: 0,
      formOneY: 0,
      formThreeX: 0,
      formThreeY: 0,
      formTwoX: 0,
      formTwoY: 0,
      subjectDepth: 1,
      backgroundDepth: -0.25,
      foilIntensity: 0.72,
      autoAngle: 1,
      iceFxIntensity: 1.05,
    },
  };

  const tuningStorageKey = "blender-parallax-card-inspector-tuning";
  let savedTuning = {};
  try {
    savedTuning = JSON.parse(localStorage.getItem(tuningStorageKey) || "{}") || {};
  } catch {
    savedTuning = {};
  }
  const cardTuning = Object.fromEntries(Object.entries(tuningDefaults).map(([id, defaults]) => [
    id,
    { ...defaults, ...(savedTuning[id] || {}) },
  ]));

  const materialCopy = {
    base: "基础卡作为最干净的对照面：让主体分层与视差本身先被看见。",
    holo: "彩色镭射卡把色彩带入角度变化：适合观察光泽、色散与主体之间的关系。",
    coating: "镀膜卡更像一层表面处理：先压住底图，再让高光沿着视线掠过。",
  };

  const states = new Map(cards.map((card) => [
    card.dataset.cardId,
    {
      yaw: 0,
      pitch: 0,
      targetYaw: 0,
      targetPitch: 0,
      autoHoldUntil: 0,
      previousYaw: 0,
      previousPitch: 0,
    },
  ]));

  let activeId = "shengkai";
  let autoMotion = !reducedMotion;
  let drag = null;
  let lastTime = performance.now();

  const clamp = (value, min, max) => Math.min(max, Math.max(min, value));
  const smooth01 = (start, end, value) => {
    if (end <= start) return value >= end ? 1 : 0;
    return clamp((value - start) / (end - start), 0, 1);
  };

  // TEMP TUNING CONSOLE: UI schema and local-only persistence.
  const tuningSchemas = {
    shengkai: [
      {
        title: "主体层",
        fields: [
          { key: "subjectScale", label: "主体大小", min: 0.7, max: 1.4, step: 0.01, format: "scale" },
          { key: "subjectX", label: "横向位置", min: -30, max: 30, step: 0.5, format: "position" },
          { key: "subjectY", label: "纵向位置", min: -30, max: 30, step: 0.5, format: "position" },
        ],
      },
    ],
    fengbao: [
      {
        title: "主体层",
        fields: [
          { key: "subjectScale", label: "主体大小", min: 0.7, max: 1.4, step: 0.01, format: "scale" },
          { key: "subjectX", label: "横向位置", min: -30, max: 30, step: 0.5, format: "position" },
          { key: "subjectY", label: "纵向位置", min: -30, max: 30, step: 0.5, format: "position" },
        ],
      },
    ],
    daermaodou: [
      {
        title: "整体主体",
        fields: [
          { key: "subjectScale", label: "整体大小", min: 0.82, max: 1.2, step: 0.01, format: "scale" },
        ],
      },
      {
        title: "左上形态",
        fields: [
          { key: "formOneScale", label: "主体大小", min: 0.7, max: 1.5, step: 0.01, format: "scale" },
          { key: "formOneX", label: "横向位置", min: -30, max: 30, step: 0.5, format: "position" },
          { key: "formOneY", label: "纵向位置", min: -30, max: 30, step: 0.5, format: "position" },
        ],
      },
      {
        title: "右中形态",
        fields: [
          { key: "formThreeScale", label: "主体大小", min: 0.7, max: 1.5, step: 0.01, format: "scale" },
          { key: "formThreeX", label: "横向位置", min: -30, max: 30, step: 0.5, format: "position" },
          { key: "formThreeY", label: "纵向位置", min: -30, max: 30, step: 0.5, format: "position" },
        ],
      },
      {
        title: "左下形态",
        fields: [
          { key: "formTwoScale", label: "主体大小", min: 0.7, max: 1.5, step: 0.01, format: "scale" },
          { key: "formTwoX", label: "横向位置", min: -30, max: 30, step: 0.5, format: "position" },
          { key: "formTwoY", label: "纵向位置", min: -30, max: 30, step: 0.5, format: "position" },
        ],
      },
    ],
  };

  function formatTuningValue(field, value) {
    const numericValue = Number(value);
    if (field.format === "scale") return `${Math.round(numericValue * 100)}%`;
    const sign = numericValue > 0 ? "+" : "";
    return `${sign}${numericValue.toFixed(1)}%`;
  }

  function getTuningSummary(id) {
    const tuning = cardTuning[id];
    if (id === "daermaodou") {
      return `整体 ${Math.round(tuning.subjectScale * 100)}% · 形态 ${Math.round(tuning.formOneScale * 100)} / ${Math.round(tuning.formThreeScale * 100)} / ${Math.round(tuning.formTwoScale * 100)}% · 位置 ${tuning.formOneX.toFixed(1)} / ${tuning.formOneY.toFixed(1)}%`;
    }
    return `主体 ${Math.round(tuning.subjectScale * 100)}% · 位置 ${tuning.subjectX.toFixed(1)} / ${tuning.subjectY.toFixed(1)}%`;
  }

  function saveTuning() {
    try {
      localStorage.setItem(tuningStorageKey, JSON.stringify(cardTuning));
    } catch {
      // Keep the console usable when browser storage is unavailable.
    }
  }

  function renderTuningConsole() {
    if (!tuningConsole || !tuningTabs || !tuningFields) return;

    tuningTabs.querySelectorAll("[data-tuning-tab]").forEach((tab) => {
      const isSelected = tab.dataset.tuningTab === activeId;
      tab.setAttribute("aria-selected", String(isSelected));
      tab.tabIndex = isSelected ? 0 : -1;
    });

    const data = cardData[activeId];
    const tuning = cardTuning[activeId];
    const groups = tuningSchemas[activeId] || [];
    tuningFields.innerHTML = `
      <div class="tuning-fields__meta">
        <strong>${data.title}</strong>
        <small>LOCAL PRESET · ${activeId}</small>
      </div>
      <div class="tuning-groups">
        ${groups.map((group) => `
          <section class="tuning-group">
            <div class="tuning-group__title">${group.title}</div>
            <div class="tuning-group__fields">
              ${group.fields.map((field) => `
                <label class="tuning-field">
                  <span class="tuning-field__label"><span>${field.label}</span><output data-tuning-output="${field.key}">${formatTuningValue(field, tuning[field.key])}</output></span>
                  <input data-tuning-input="${field.key}" type="range" min="${field.min}" max="${field.max}" step="${field.step}" value="${tuning[field.key]}" aria-label="${data.title} ${group.title} ${field.label}">
                </label>
              `).join("")}
            </div>
          </section>
        `).join("")}
      </div>
    `;

    tuningFields.querySelectorAll("[data-tuning-input]").forEach((input) => {
      input.addEventListener("input", () => {
        const key = input.dataset.tuningInput;
        cardTuning[activeId][key] = Number(input.value);
        const field = tuningSchemas[activeId].flatMap((group) => group.fields).find((item) => item.key === key);
        const output = tuningFields.querySelector(`[data-tuning-output="${key}"]`);
        if (field && output) output.textContent = formatTuningValue(field, input.value);
        saveTuning();
        renderCard(document.querySelector(`[data-card-id="${activeId}"]`), performance.now());
        updateInspector();
      });
    });
  }

  function resetTuning(id) {
    cardTuning[id] = { ...tuningDefaults[id] };
    saveTuning();
    renderTuningConsole();
    renderCard(document.querySelector(`[data-card-id="${id}"]`), performance.now());
    updateInspector();
  }

  // END TEMP TUNING CONSOLE

  function getViewLabel(yaw) {
    if (yaw > 10) return "RIGHT · 右侧角度";
    if (yaw < -10) return "LEFT · 左侧角度";
    if (Math.abs(yaw) > 3) return yaw > 0 ? "TURNING RIGHT · 向右" : "TURNING LEFT · 向左";
    return "FRONT · 正面";
  }

  function updateInspector() {
    const data = cardData[activeId];
    const state = states.get(activeId);
    document.querySelector("#inspect-title").textContent = data.title;
    document.querySelector("#inspect-description").textContent = data.description;
    document.querySelector("#inspect-state").textContent = `${data.state} · ${getTuningSummary(activeId)}`;
    document.querySelector("#view-state").textContent = getViewLabel(state.yaw);
  }

  function activateCard(id) {
    activeId = id;
    cards.forEach((card) => {
      const active = card.dataset.cardId === id;
      card.classList.toggle("is-active", active);
      card.setAttribute("aria-pressed", String(active));
    });
    updateInspector();
    renderTuningConsole();
  }

  function depthFor(layer, tuning) {
    if (layer.classList.contains("layer-background")) return tuning?.backgroundDepth ?? -0.13;
    if (layer.classList.contains("layer-atmosphere")) return 0.12;
    if (layer.classList.contains("layer-text")) return 0.23;
    if (layer.classList.contains("layer-family-one")) return 0.31;
    if (layer.classList.contains("layer-family-two")) return 0.26;
    if (layer.classList.contains("layer-family-three")) return 0.36;
    return tuning?.subjectDepth ?? 0.42;
  }

  function renderCard(card, timestamp) {
    const id = card.dataset.cardId;
    const state = states.get(id);

    if (id === "daermaodou") {
      renderFamilyCard(card, timestamp);
      return;
    }

    const data = cardData[id];
    const tuning = cardTuning[id];

    // The two GLB cards use the source project's real view-dependent material
    // runtime. Keep the old layered fallback below so the page remains useful
    // while the module is loading or when WebGL is unavailable.
    if (window.__cardRuntime?.update?.(id, {
      yaw: state.yaw,
      pitch: state.pitch,
      tuning,
      timestamp,
    })) {
      if (id === activeId) {
        document.querySelector("#view-state").textContent = getViewLabel(state.yaw);
      }
      card.style.setProperty("--motion-phase", String(timestamp * 0.001 + data.phase));
      return;
    }

    const parallax = card.querySelector(".parallax-card");
    const layers = card.querySelectorAll(".card-layer, .family-copy, .family-trait");
    const glint = card.querySelector(".card-glint");
    const normalizedYaw = clamp(state.yaw / 24, -1, 1);
    const normalizedPitch = clamp(state.pitch / 14, -1, 1);

    parallax.style.setProperty("--yaw", `${state.yaw.toFixed(2)}deg`);
    parallax.style.setProperty("--pitch", `${state.pitch.toFixed(2)}deg`);

    layers.forEach((layer) => {
      const depth = depthFor(layer, tuning);
      const isSubject = layer.classList.contains("layer-subject");
      const subjectX = isSubject ? card.clientWidth * tuning.subjectX * 0.01 : 0;
      const subjectY = isSubject ? card.clientHeight * tuning.subjectY * 0.01 : 0;
      const x = state.yaw * depth * 1.2 + subjectX;
      const y = state.pitch * depth * -0.86 + subjectY;
      const scale = layer.classList.contains("layer-background") ? 1.018 : isSubject ? tuning.subjectScale : 1;
      layer.style.transform = `translate3d(${x.toFixed(2)}px, ${y.toFixed(2)}px, 0) scale(${scale})`;
    });

    const sweep = -48 + ((normalizedYaw + 1) * 0.5) * 142;
    glint.style.transform = `translate3d(${sweep.toFixed(1)}%, ${(normalizedPitch * 5).toFixed(1)}%, 0) rotate(18deg)`;
    const foilIntensity = Number(tuning.foilIntensity ?? 0.65);
    glint.style.opacity = `${0.1 + foilIntensity * (0.17 + Math.abs(normalizedYaw) * 0.35) + (id === activeId ? 0.04 : 0)}`;

    if (id === activeId) {
      document.querySelector("#view-state").textContent = getViewLabel(state.yaw);
    }

    card.style.setProperty("--motion-phase", `${timestamp * 0.001 + data.phase}`);
  }

  function renderFamilyCard(card, timestamp) {
    const state = states.get("daermaodou");
    const data = cardData.daermaodou;
    const tuning = cardTuning.daermaodou;
    const parallax = card.querySelector(".family-parallax-card");
    const background = card.querySelector(".family-parallax-card .card-background");
    const characters = card.querySelectorAll(".family-character");
    const normalizedYaw = clamp(state.yaw / 21.5, -1, 1);
    const normalizedPitch = clamp(state.pitch / 10, -1, 1);
    const mx = state.yaw * 11;
    const my = state.pitch * -11;

    parallax.style.setProperty("--yaw", `${state.yaw.toFixed(2)}deg`);
    parallax.style.setProperty("--pitch", `${state.pitch.toFixed(2)}deg`);
    background.style.setProperty("--family-bg-x", `${(mx * tuning.backgroundDepth * 0.08).toFixed(2)}px`);
    background.style.setProperty("--family-bg-y", `${(my * tuning.backgroundDepth * 0.08).toFixed(2)}px`);

    characters.forEach((character) => {
      const depth = Number(character.dataset.depth || 1) * tuning.subjectDepth;
      const individualScale = Number(tuning[character.dataset.scaleKey] || 1);
      const positionX = Number(tuning[character.dataset.positionXKey] || 0);
      const positionY = Number(tuning[character.dataset.positionYKey] || 0);
      character.style.setProperty("--family-scale", (tuning.subjectScale * individualScale).toFixed(3));
      character.style.setProperty("--family-position-x", `${positionX.toFixed(1)}%`);
      character.style.setProperty("--family-position-y", `${positionY.toFixed(1)}%`);
      character.style.setProperty("--family-offset-x", `${(mx * depth * 0.055).toFixed(2)}px`);
      character.style.setProperty("--family-offset-y", `${(my * depth * 0.055).toFixed(2)}px`);
    });

    const movement = Math.hypot(
      state.yaw - state.previousYaw,
      state.pitch - state.previousPitch,
    );
    const yawSignal = Math.abs(state.yaw) / 21.5;
    const pitchSignal = Math.abs(state.pitch) / 10;
    const angleSignal = Math.min(1.15, yawSignal + pitchSignal * 0.18);
    const fadeIn = smooth01(0.08, 0.24, angleSignal);
    const fadeOut = 1 - smooth01(0.68, 0.98, angleSignal);
    const angleWindow = fadeIn * fadeOut;
    const motionPower = Math.min(1, movement * 12);
    const power = Math.min(1, tuning.iceFxIntensity * angleWindow * (0.18 + motionPower * 0.82));

    parallax.classList.toggle("is-turning", power > 0.025);
    parallax.style.setProperty("--family-ice-opacity", Math.min(0.72, power * 0.82).toFixed(3));
    parallax.style.setProperty("--family-ice-sweep-opacity", Math.min(0.46, power * 0.58).toFixed(3));
    parallax.style.setProperty("--family-ice-sweep-x", `${clamp(state.yaw * 3.4, -90, 90).toFixed(1)}%`);
    parallax.style.setProperty("--family-ice-tilt", `${(state.yaw * 0.28).toFixed(2)}deg`);
    parallax.style.setProperty("--family-ice-scale", (1 + power * 0.07).toFixed(3));
    parallax.style.setProperty("--family-glint", `${(48 + normalizedYaw * 28 - 50).toFixed(1)}%`);
    parallax.style.setProperty("--family-foil-opacity", Math.min(0.26, tuning.foilIntensity * 0.2).toFixed(3));
    parallax.style.setProperty("--family-edge-opacity", (0.36 + Math.min(1.2, tuning.foilIntensity) * 0.25).toFixed(3));

    if (activeId === "daermaodou") {
      document.querySelector("#view-state").textContent = getViewLabel(state.yaw);
    }

    card.style.setProperty("--motion-phase", `${timestamp * 0.001 + data.phase}`);
    state.previousYaw = state.yaw;
    state.previousPitch = state.pitch;
  }

  function resetCard(id) {
    const state = states.get(id);
    state.targetYaw = 0;
    state.targetPitch = 0;
    state.autoHoldUntil = performance.now() + 1000;
    state.previousYaw = state.yaw;
    state.previousPitch = state.pitch;
    renderCard(document.querySelector(`[data-card-id="${id}"]`), performance.now());
    updateInspector();
  }

  function toggleAuto(nextValue = !autoMotion) {
    autoMotion = nextValue;
    globalAutoButton.setAttribute("aria-pressed", String(autoMotion));
    if (autoMotion) {
      cards.forEach((card) => {
        const state = states.get(card.dataset.cardId);
        state.autoHoldUntil = performance.now();
      });
    }
  }

  function animate(timestamp) {
    const elapsed = Math.min(64, timestamp - lastTime);
    lastTime = timestamp;

    cards.forEach((card) => {
      const id = card.dataset.cardId;
      const state = states.get(id);
      const data = cardData[id];
      const isActive = id === activeId;

      if (autoMotion && !drag && timestamp >= state.autoHoldUntil) {
        const speed = isActive ? 1 : 0.6;
        const yawAmplitude = id === "daermaodou" ? 21.5 * cardTuning.daermaodou.autoAngle : data.amplitude;
        const pitchAmplitude = id === "daermaodou" ? 6.8 * cardTuning.daermaodou.autoAngle : data.pitch;
        state.targetYaw = Math.sin(timestamp * 0.00072 + data.phase) * yawAmplitude * speed;
        state.targetPitch = Math.cos(timestamp * 0.00049 + data.phase) * pitchAmplitude * speed;
      }

      // Match the source viewers' eased inspection motion instead of snapping
      // to each auto target. This keeps the video-like sway readable.
      const smoothing = 1 - Math.exp(-elapsed * 0.008);
      state.yaw += (state.targetYaw - state.yaw) * smoothing;
      state.pitch += (state.targetPitch - state.pitch) * smoothing;
      renderCard(card, timestamp);
    });

    requestAnimationFrame(animate);
  }

  cards.forEach((card) => {
    const id = card.dataset.cardId;

    card.addEventListener("click", () => activateCard(id));

    card.addEventListener("pointerdown", (event) => {
      activateCard(id);
      const state = states.get(id);
      drag = {
        id,
        pointerId: event.pointerId,
        startX: event.clientX,
        startY: event.clientY,
        startYaw: state.targetYaw,
        startPitch: state.targetPitch,
      };
      state.autoHoldUntil = performance.now() + 2600;
      card.classList.add("is-dragging");
      card.setPointerCapture(event.pointerId);
    });

    card.addEventListener("pointermove", (event) => {
      if (!drag || drag.id !== id || drag.pointerId !== event.pointerId) return;
      const state = states.get(id);
      state.targetYaw = clamp(drag.startYaw + (event.clientX - drag.startX) * 0.22, -24, 24);
      state.targetPitch = clamp(drag.startPitch - (event.clientY - drag.startY) * 0.2, -14, 14);
      state.autoHoldUntil = performance.now() + 2600;
    });

    const endDrag = (event) => {
      if (!drag || drag.id !== id || drag.pointerId !== event.pointerId) return;
      drag = null;
      card.classList.remove("is-dragging");
    };

    card.addEventListener("pointerup", endDrag);
    card.addEventListener("pointercancel", endDrag);
    card.addEventListener("lostpointercapture", endDrag);

    card.addEventListener("keydown", (event) => {
      const state = states.get(id);
      if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
        event.preventDefault();
        activateCard(id);
        state.targetYaw = clamp(state.targetYaw + (event.key === "ArrowRight" ? 3 : -3), -24, 24);
        state.autoHoldUntil = performance.now() + 2600;
      }
      if (event.key === "ArrowUp" || event.key === "ArrowDown") {
        event.preventDefault();
        activateCard(id);
        state.targetPitch = clamp(state.targetPitch + (event.key === "ArrowUp" ? 2 : -2), -14, 14);
        state.autoHoldUntil = performance.now() + 2600;
      }
      if (event.key.toLowerCase() === "r") {
        event.preventDefault();
        activateCard(id);
        resetCard(id);
      }
    });
  });

  globalAutoButton.addEventListener("click", () => toggleAuto());
  resetButton.addEventListener("click", () => resetCard(activeId));

  // TEMP TUNING CONSOLE: card tabs and reset actions.
  tuningTabs?.addEventListener("click", (event) => {
    const tab = event.target.closest("[data-tuning-tab]");
    if (!tab) return;
    activateCard(tab.dataset.tuningTab);
  });

  tuningResetCardButton?.addEventListener("click", () => resetTuning(activeId));
  tuningResetAllButton?.addEventListener("click", () => {
    Object.keys(tuningDefaults).forEach((id) => {
      cardTuning[id] = { ...tuningDefaults[id] };
    });
    saveTuning();
    renderTuningConsole();
    cards.forEach((card) => renderCard(card, performance.now()));
    updateInspector();
  });
  // END TEMP TUNING CONSOLE

  materialSamples.forEach((sample) => {
    sample.addEventListener("click", () => {
      materialSamples.forEach((item) => item.setAttribute("aria-pressed", String(item === sample)));
      document.querySelector("#material-description").textContent = materialCopy[sample.dataset.material];
    });
  });

  if (reducedMotion) toggleAuto(false);
  activateCard(activeId);
  requestAnimationFrame(animate);
})();
