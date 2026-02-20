(function () {
  const tool = document.body.dataset.tool || "";
  let activeLanguage = localStorage.getItem("acg-language") || "en";

  const themeButton = document.getElementById("theme-btn");
  const languageButton = document.getElementById("language-btn");

  function saveState(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
  }

  function loadState(key, fallback) {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch {
      return fallback;
    }
  }

  function applyTheme(theme) {
    const normalizedTheme = theme === "night" ? "night" : "day";
    const isNight = normalizedTheme === "night";
    document.body.classList.toggle("night-mode", isNight);
    document.documentElement.classList.toggle("night-mode", isNight);
    if (themeButton) {
      themeButton.setAttribute("aria-pressed", String(isNight));
      themeButton.textContent = isNight ? "Dark" : "Light";
    }
    localStorage.setItem("acg-theme", normalizedTheme);
  }

  function applyLanguage(lang) {
    activeLanguage = lang;
    document.documentElement.lang = lang;

    document.querySelectorAll("[data-en][data-es]").forEach((el) => {
      el.textContent = lang === "es" ? el.dataset.es : el.dataset.en;
    });

    document.querySelectorAll("[data-en-ph][data-es-ph]").forEach((el) => {
      el.setAttribute("placeholder", lang === "es" ? el.dataset.esPh : el.dataset.enPh);
    });

    if (languageButton) {
      languageButton.setAttribute("aria-pressed", String(lang === "es"));
      languageButton.textContent = lang === "es" ? "ES" : "EN";
    }

    localStorage.setItem("acg-language", lang);
    refreshDynamicText();
  }

  function refreshDynamicText() {
    if (tool === "startup" || tool === "family-tax") {
      updateChecklistProgress();
    }
    if (tool === "quarterly-tax") {
      calculateTax();
    }
    if (tool === "cashflow") {
      calculateCashflow();
    }
  }

  function updateChecklistProgress() {
    const boxes = Array.from(document.querySelectorAll("[data-check-id]"));
    const fill = document.querySelector(".progress-fill");
    const text = document.getElementById("progress-text");
    if (!boxes.length) return;

    const total = boxes.length;
    const done = boxes.filter((b) => b.checked).length;
    const percent = total === 0 ? 0 : Math.round((done / total) * 100);

    if (fill) fill.style.width = `${percent}%`;
    if (text) {
      text.textContent =
        activeLanguage === "es"
          ? `${done}/${total} completado (${percent}%)`
          : `${done}/${total} completed (${percent}%)`;
    }
  }

  function initChecklistTool(storageKey) {
    const boxes = Array.from(document.querySelectorAll("[data-check-id]"));
    const markAll = document.getElementById("mark-all");
    const clearAll = document.getElementById("clear-all");
    if (!boxes.length) return;

    const saved = loadState(storageKey, []);
    boxes.forEach((box) => {
      box.checked = saved.includes(box.dataset.checkId);
      box.addEventListener("change", () => {
        saveState(storageKey, boxes.filter((b) => b.checked).map((b) => b.dataset.checkId));
        updateChecklistProgress();
      });
    });

    if (markAll) {
      markAll.addEventListener("click", () => {
        boxes.forEach((b) => (b.checked = true));
        saveState(storageKey, boxes.map((b) => b.dataset.checkId));
        updateChecklistProgress();
      });
    }

    if (clearAll) {
      clearAll.addEventListener("click", () => {
        boxes.forEach((b) => (b.checked = false));
        saveState(storageKey, []);
        updateChecklistProgress();
      });
    }

    updateChecklistProgress();
  }

  function calculateTax() {
    const form = document.getElementById("tax-calc");
    const result = document.getElementById("tax-result");
    if (!form || !result) return;

    const profit = Number(document.getElementById("annual-profit").value) || 0;
    const ratePercent = Number(document.getElementById("effective-rate")?.value) || 0;
    const rate = ratePercent / 100;
    const withheld = Number(document.getElementById("tax-withheld").value) || 0;
    const paid = Number(document.getElementById("tax-paid").value) || 0;

    const annualTax = Math.max(0, profit * rate);
    const remaining = Math.max(0, annualTax - withheld - paid);
    const quarterPay = remaining / 4;

    result.textContent =
      activeLanguage === "es"
        ? `Tasa aplicada: ${ratePercent.toFixed(1)}% | Impuesto anual estimado: $${annualTax.toFixed(2)} | Restante: $${remaining.toFixed(2)} | Pago trimestral sugerido: $${quarterPay.toFixed(2)}`
        : `Applied rate: ${ratePercent.toFixed(1)}% | Estimated annual tax: $${annualTax.toFixed(2)} | Remaining: $${remaining.toFixed(2)} | Suggested quarterly payment: $${quarterPay.toFixed(2)}`;
  }

  function initTaxPlanner() {
    const form = document.getElementById("tax-calc");
    if (!form) return;

    const dueRows = document.querySelectorAll("[data-due-check]");
    const dueKey = "acg-tool-quarterly-due";
    const savedDue = loadState(dueKey, []);

    dueRows.forEach((c) => {
      c.checked = savedDue.includes(c.dataset.dueCheck);
      c.addEventListener("change", () => {
        saveState(
          dueKey,
          Array.from(dueRows)
            .filter((x) => x.checked)
            .map((x) => x.dataset.dueCheck)
        );
      });
    });

    form.addEventListener("input", calculateTax);
    calculateTax();
  }

  function initFamilyChecklist() {
    initChecklistTool("acg-tool-family-checks");

    const customInput = document.getElementById("custom-doc");
    const addBtn = document.getElementById("add-custom-doc");
    const customList = document.getElementById("custom-doc-list");
    const key = "acg-tool-family-custom";

    if (!customInput || !addBtn || !customList) return;

    function render(items) {
      customList.innerHTML = "";
      items.forEach((item, index) => {
        const row = document.createElement("div");
        row.className = "result";
        row.style.display = "flex";
        row.style.justifyContent = "space-between";
        row.style.alignItems = "center";
        row.innerHTML = `<span>${item}</span>`;
        const del = document.createElement("button");
        del.type = "button";
        del.textContent = activeLanguage === "es" ? "Quitar" : "Remove";
        del.addEventListener("click", () => {
          const next = loadState(key, []).filter((_, i) => i !== index);
          saveState(key, next);
          render(next);
        });
        row.appendChild(del);
        customList.appendChild(row);
      });
    }

    render(loadState(key, []));

    addBtn.addEventListener("click", () => {
      const value = customInput.value.trim();
      if (!value) return;
      const next = [...loadState(key, []), value];
      saveState(key, next);
      customInput.value = "";
      render(next);
    });
  }

  function calculateCashflow() {
    const runway = document.getElementById("runway-result");
    const collect = document.getElementById("collections-result");
    if (!runway || !collect) return;

    const start = Number(document.getElementById("starting-cash").value) || 0;
    const inflow = Number(document.getElementById("monthly-inflow").value) || 0;
    const outflow = Number(document.getElementById("monthly-outflow").value) || 0;
    const net = inflow - outflow;
    let months = activeLanguage === "es" ? "Estable" : "Stable";
    if (net < 0) {
      months = `${(start / Math.abs(net)).toFixed(1)} ${activeLanguage === "es" ? "meses" : "months"}`;
    }

    runway.textContent =
      activeLanguage === "es"
        ? `Flujo neto mensual: $${net.toFixed(2)} | Proyeccion de liquidez: ${months}`
        : `Net monthly cash flow: $${net.toFixed(2)} | Estimated runway: ${months}`;

    const cur = Number(document.getElementById("ar-current").value) || 0;
    const d30 = Number(document.getElementById("ar-30").value) || 0;
    const d60 = Number(document.getElementById("ar-60").value) || 0;
    const d90 = Number(document.getElementById("ar-90").value) || 0;
    const rate = (Number(document.getElementById("collection-rate").value) || 0) / 100;

    const expected = (cur + d30 + d60 + d90) * rate;
    collect.textContent =
      activeLanguage === "es"
        ? `Cobro esperado (proximos 30 dias): $${expected.toFixed(2)}`
        : `Expected collections (next 30 days): $${expected.toFixed(2)}`;
  }

  function initCashflowCalculator() {
    const form = document.getElementById("cashflow-calc");
    if (!form) return;
    form.addEventListener("input", calculateCashflow);
    calculateCashflow();
  }

  if (themeButton) {
    themeButton.addEventListener("click", () => {
      const currentTheme = localStorage.getItem("acg-theme") === "day" ? "day" : "night";
      applyTheme(currentTheme === "night" ? "day" : "night");
    });
  }

  if (languageButton) {
    languageButton.addEventListener("click", () => {
      applyLanguage(activeLanguage === "en" ? "es" : "en");
    });
  }

  const savedTheme = localStorage.getItem("acg-theme") || "night";
  const savedLanguage = localStorage.getItem("acg-language") || "en";
  applyTheme(savedTheme);
  applyLanguage(savedLanguage);

  if (tool === "startup") {
    initChecklistTool("acg-tool-startup-checks");
  }
  if (tool === "quarterly-tax") {
    initTaxPlanner();
  }
  if (tool === "family-tax") {
    initFamilyChecklist();
  }
  if (tool === "cashflow") {
    initCashflowCalculator();
  }
})();
