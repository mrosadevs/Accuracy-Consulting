(function () {
  const translations = {
    en: {
      nav_services: "Services",
      nav_solutions: "Solutions",
      nav_resources: "Resources",
      nav_contact: "Contact",
      theme_label: "Theme",
      day_label: "Light",
      night_label: "Dark",
      language_label: "Language",
      english_label: "English",
      spanish_label: "Spanish",
      hero_eyebrow: "Bilingual Accounting and Advisory",
      hero_title: "Sharper numbers. Better decisions. Less stress.",
      hero_body: "Accuracy Consulting Group helps business owners and families stay compliant, organized, and growth-ready with proactive accounting, tax, and consulting support.",
      hero_cta_primary: "Book a Consultation",
      hero_cta_secondary: "Explore Services",
      stat_1: "Years of Combined Experience",
      stat_2: "Client Retention Rate (%)",
      stat_3: "Response Window (Hours)",
      why_title: "Why clients choose us",
      why_item_1: "Clear monthly reporting and financial visibility",
      why_item_2: "Tax planning built around your real goals",
      why_item_3: "Consulting for in-house bookkeeping teams",
      why_item_4: "Secure document workflows and portal readiness",
      services_title: "Service Programs",
      services_sub: "Inspired by modern CPA firm structures, our services are grouped by outcome so you can choose exactly what your business needs right now.",
      tab_accounting: "Accounting",
      tab_tax: "Tax",
      tab_advisory: "Advisory",
      acc_0_title: "International Investor Accounting and Tax",
      acc_0_body: "Guidance for clients living outside the U.S. who invest or operate in the U.S., including cross-border bookkeeping and tax coordination.",
      acc_1_title: "Financial Statement Compilation",
      acc_1_body: "Monthly, quarterly, semi-annual, or annual reporting packages with clean, decision-ready numbers.",
      acc_2_title: "Sales Tax Reporting and Filing",
      acc_2_body: "On-time filing support to reduce penalty risk and keep your business compliant across periods.",
      acc_3_title: "Bookkeeping Process Optimization",
      acc_3_body: "Hands-on consulting to improve chart setup, reconciliations, month-end routines, and internal controls.",
      tax_1_title: "Tax Preparation",
      tax_1_body: "Individual and business tax return preparation aligned with current filings and documentation standards.",
      tax_2_title: "Tax Planning",
      tax_2_body: "Quarterly planning strategies to improve cash flow and reduce end-of-year surprises.",
      tax_3_title: "Tax Issue Resolution",
      tax_3_body: "Support for notices, non-filed years, payment plans, and audit documentation readiness.",
      adv_1_title: "1:1 Accounting Consulting",
      adv_1_body: "Direct sessions to solve accounting bottlenecks and improve internal workflows quickly.",
      adv_2_title: "Business Formation and Entity Setup",
      adv_2_body: "From scratch support: LLC or corporation decision guidance, formation filing support, EIN setup, and launch compliance planning.",
      adv_3_title: "Payroll and Compliance Advisory",
      adv_3_body: "Process design and filing workflows that help your team run payroll confidently and correctly.",
      solutions_title: "Interactive Planning Tools",
      estimator_title: "Monthly Revenue Forecast Simulator",
      estimator_sub: "Adjust monthly revenue to preview annual revenue, quarterly tax estimates, and advisory cadence.",
      estimator_label: "Monthly Revenue",
      estimator_annual_label: "Projected Annual Revenue:",
      estimator_tax_label: "Estimated Quarterly Tax Obligation:",
      estimator_cadence_label: "Recommended Advisory Cadence:",
      estimator_defaults_note: "Florida defaults: Personal income tax 0%, corporate income tax 5.5%, sales tax 6% (+ local surtax may apply).",
      cadence_monthly: "Monthly Advisory",
      cadence_quarterly: "Quarterly Advisory",
      timeline_title: "Simple Client Onboarding",
      timeline_1: "Discovery call and goals review",
      timeline_2: "Data access and bookkeeping assessment",
      timeline_3: "Cleanup, structure, and controls setup",
      timeline_4: "Reporting cadence and advisory cadence",
      resources_title: "Resource Center",
      resources_sub: "A lightweight hub for business strategy, tax guidance, and practical financial checklists.",
      filter_all: "All",
      filter_business: "Business",
      filter_tax: "Tax",
      filter_individual: "Individual",
      res_1_title: "Startup Accounting Checklist",
      res_1_body: "Core items to configure before your first quarter closes.",
      res_2_title: "Quarterly Tax Prep Planner",
      res_2_body: "A practical timeline to keep federal and state filings on track.",
      res_3_title: "Family Tax Document Guide",
      res_3_body: "What to gather before your annual personal return appointment.",
      res_4_title: "Cash Flow Controls",
      res_4_body: "Simple controls that prevent common bookkeeping and billing issues.",
      res_5_title: "IRS Tax Forms Directory",
      res_5_body: "Browse common tax forms, what they are used for, and direct IRS links to access each form.",
      faq_title: "Frequently Asked Questions",
      faq_q1: "Do you work with businesses that already have an internal bookkeeper?",
      faq_a1: "Yes. We review your internal process, close control gaps, and provide targeted advisory support.",
      faq_q2: "Can you help with back taxes and notices?",
      faq_a2: "Yes. We support notice response, filing catch-up, and payment strategy planning.",
      faq_q3: "Do you offer secure file exchange?",
      faq_a3: "Yes. We guide clients through secure digital document workflows and portal-based exchange options.",
      contact_title: "Let's Build Your Financial Clarity Plan",
      contact_body: "Share your priorities and we will reach out with a recommended service path.",
      form_name: "Name",
      form_email: "Email",
      form_interest: "Primary Need",
      form_select: "Select one",
      form_opt_1: "Accounting Support",
      form_opt_2: "Tax Planning/Prep",
      form_opt_3: "Business Advisory",
      form_submit: "Request Consultation",
      email_label: "Email:",
      phone_label: "Phone:",
      hours_label: "Hours:",
      hours_value: "Mon - Fri, 9:00 AM - 5:30 PM",
      footer_text: "© 2026 Accuracy Consulting Group. All rights reserved.",
      form_error: "Please complete all required fields.",
      form_success: "Your email app opened with a drafted consultation request. Please send it to complete submission.",
      tier_basic: "Starter",
      tier_growth: "Growth",
      tier_scale: "Scale"
    },
    es: {
      nav_services: "Servicios",
      nav_solutions: "Soluciones",
      nav_resources: "Recursos",
      nav_contact: "Contacto",
      theme_label: "Tema",
      day_label: "Dia",
      night_label: "Noche",
      language_label: "Idioma",
      english_label: "Ingles",
      spanish_label: "Espanol",
      hero_eyebrow: "Contabilidad y asesoria bilingue",
      hero_title: "Numeros mas claros. Mejores decisiones. Menos estres.",
      hero_body: "Accuracy Consulting Group ayuda a negocios y familias a mantenerse en cumplimiento, organizados y listos para crecer con servicios proactivos de contabilidad, impuestos y asesoria.",
      hero_cta_primary: "Agendar consulta",
      hero_cta_secondary: "Ver servicios",
      stat_1: "Anos de experiencia combinada",
      stat_2: "Retencion de clientes (%)",
      stat_3: "Ventana de respuesta (horas)",
      why_title: "Por que los clientes nos eligen",
      why_item_1: "Reportes mensuales claros y visibilidad financiera",
      why_item_2: "Planificacion fiscal segun tus objetivos reales",
      why_item_3: "Asesoria para equipos internos de contabilidad",
      why_item_4: "Flujos de documentos seguros y preparacion para portal",
      services_title: "Programas de servicio",
      services_sub: "Inspirados en estructuras modernas de firmas CPA, nuestros servicios se agrupan por resultados para que elijas lo que necesitas hoy.",
      tab_accounting: "Contabilidad",
      tab_tax: "Impuestos",
      tab_advisory: "Asesoria",
      acc_0_title: "Contabilidad e Impuestos para Inversionistas Internacionales",
      acc_0_body: "Asesoria para clientes que viven fuera de EE. UU. e invierten u operan en EE. UU., incluyendo contabilidad transfronteriza y coordinacion fiscal.",
      acc_1_title: "Compilacion de estados financieros",
      acc_1_body: "Paquetes mensuales, trimestrales, semestrales o anuales con numeros limpios para decisiones reales.",
      acc_2_title: "Reporte y presentacion de impuestos de ventas",
      acc_2_body: "Soporte de presentacion puntual para reducir riesgos y mantener cumplimiento.",
      acc_3_title: "Optimizacion de procesos contables",
      acc_3_body: "Asesoria practica para mejorar plan de cuentas, conciliaciones y procesos de cierre.",
      tax_1_title: "Preparacion de impuestos",
      tax_1_body: "Preparacion de declaraciones individuales y de negocios alineadas con requisitos actuales.",
      tax_2_title: "Planificacion fiscal",
      tax_2_body: "Estrategias trimestrales para mejorar flujo de caja y reducir sorpresas al cierre del ano.",
      tax_3_title: "Resolucion de temas fiscales",
      tax_3_body: "Apoyo para avisos, anos no declarados, planes de pago y documentacion para auditorias.",
      adv_1_title: "Consultoria contable 1:1",
      adv_1_body: "Sesiones directas para resolver cuellos de botella y mejorar procesos internos rapidamente.",
      adv_2_title: "Formacion de Negocio y Configuracion de Entidad",
      adv_2_body: "Apoyo desde cero: orientacion para elegir LLC o corporacion, apoyo con tramites de formacion, gestion del EIN y plan de cumplimiento inicial.",
      adv_3_title: "Asesoria de nomina y cumplimiento",
      adv_3_body: "Diseno de procesos y calendarios para operar nomina correctamente.",
      solutions_title: "Herramientas interactivas de planificacion",
      estimator_title: "Simulador de Proyeccion de Ingresos Mensuales",
      estimator_sub: "Ajusta los ingresos mensuales para ver ingresos anuales, impuestos trimestrales estimados y cadencia de asesoria.",
      estimator_label: "Ingresos Mensuales",
      estimator_annual_label: "Ingresos Anuales Proyectados:",
      estimator_tax_label: "Obligacion Fiscal Trimestral Estimada:",
      estimator_cadence_label: "Cadencia de Asesoria Recomendada:",
      estimator_defaults_note: "Valores predeterminados para Florida: impuesto personal 0%, impuesto corporativo 5.5%, impuesto sobre ventas 6% (+ puede aplicar recargo local).",
      cadence_monthly: "Asesoria Mensual",
      cadence_quarterly: "Asesoria Trimestral",
      timeline_title: "Integracion simple del cliente",
      timeline_1: "Llamada de descubrimiento y objetivos",
      timeline_2: "Acceso a datos y evaluacion contable",
      timeline_3: "Limpieza, estructura y controles",
      timeline_4: "Cadencia de reportes y asesoria",
      resources_title: "Centro de recursos",
      resources_sub: "Un hub ligero para estrategia empresarial, guia fiscal y listas practicas financieras.",
      filter_all: "Todo",
      filter_business: "Negocios",
      filter_tax: "Impuestos",
      filter_individual: "Individual",
      res_1_title: "Checklist contable para startups",
      res_1_body: "Elementos clave para configurar antes del primer cierre trimestral.",
      res_2_title: "Planificador fiscal trimestral",
      res_2_body: "Una linea de tiempo practica para mantener declaraciones al dia.",
      res_3_title: "Guia de documentos para impuestos familiares",
      res_3_body: "Que preparar antes de tu cita anual de declaracion personal.",
      res_4_title: "Controles de flujo de caja",
      res_4_body: "Controles simples para prevenir errores comunes de contabilidad y cobros.",
      res_5_title: "Directorio de Formularios del IRS",
      res_5_body: "Consulta formularios fiscales comunes, para que sirve cada uno y enlaces directos del IRS para obtenerlos.",
      faq_title: "Preguntas frecuentes",
      faq_q1: "Trabajan con negocios que ya tienen un contador interno?",
      faq_a1: "Si. Revisamos procesos internos, cerramos brechas y damos asesoria puntual.",
      faq_q2: "Pueden ayudar con impuestos atrasados y avisos?",
      faq_a2: "Si. Apoyamos respuesta a avisos, regularizacion de declaraciones y estrategia de pagos.",
      faq_q3: "Ofrecen intercambio seguro de archivos?",
      faq_a3: "Si. Guiamos flujos digitales seguros y opciones de intercambio mediante portal.",
      contact_title: "Construyamos tu plan de claridad financiera",
      contact_body: "Comparte tus prioridades y te contactaremos con una ruta de servicio recomendada.",
      form_name: "Nombre",
      form_email: "Correo",
      form_interest: "Necesidad principal",
      form_select: "Selecciona una opcion",
      form_opt_1: "Soporte contable",
      form_opt_2: "Planificacion/preparacion fiscal",
      form_opt_3: "Asesoria de negocio",
      form_submit: "Solicitar consulta",
      email_label: "Correo:",
      phone_label: "Telefono:",
      hours_label: "Horario:",
      hours_value: "Lun - Vie, 9:00 AM - 5:30 PM",
      footer_text: "© 2026 Accuracy Consulting Group. Todos los derechos reservados.",
      form_error: "Completa todos los campos requeridos.",
      form_success: "Se abrio tu aplicacion de correo con una solicitud de consulta. Enviala para completar el envio.",
      tier_basic: "Inicial",
      tier_growth: "Crecimiento",
      tier_scale: "Escala"
    }
  };

  let activeLanguage = "en";

  const themeToggle = document.getElementById("theme-toggle");
  const languageToggle = document.getElementById("language-toggle");
  const themeButton = document.getElementById("theme-btn");
  const languageButton = document.getElementById("language-btn");
  const descriptionTag = document.querySelector("meta[name='description']");
  const progressBar = document.getElementById("scroll-progress");
  const backToTop = document.getElementById("back-to-top");
  const formMessage = document.getElementById("form-message");
  const featuredReviews = [
    {
      quote:
        "They are very professional and knowledgeable, as well as very attentive. I recommend them without a doubt.",
      author: "Alessandro Khodari",
      stars: "★★★★★"
    },
    {
      quote:
        "I hired Arisleydis as my accountant for my corporate taxes. She was extremely attentive and detail-oriented. She asked all the right questions and requested the proper documentation to ensure our return was accurate. She is a great accountant and a great person.",
      author: "Hazel Guzman",
      stars: "★★★★★"
    },
    {
      quote:
        "Ari is very professional, knowledgeable, and detail-oriented. I've been doing my taxes with her for 3 years, and my experience has always been excellent.",
      author: "Eyra Little",
      stars: "★★★★★"
    },
    {
      quote:
        "I highly recommend this accountant. She solved an issue with my previous tax return and always completes my taxes on time. I consistently receive my refund within 5 days. Don't hesitate to contact them.",
      author: "Belkys Capriles",
      stars: "★★★★★"
    },
    {
      quote:
        "I want to recognize Ari at Accuracy for her professionalism, intuition, and attention to detail. It has been a pleasure having her handle our small business accounting and tax needs. You'll be in great hands!",
      author: "Jose Canales",
      stars: "★★★★★"
    },
    {
      quote:
        "Great service! We are more than happy having Arisleydis as our accountant. Thank you for helping us with our taxes every year - you're the best!",
      author: "Rachel San Jorge",
      stars: "★★★★★"
    },
    {
      quote:
        "Arisleydis is the best! She's very professional and attentive to my accounting needs. Highly recommend.",
      author: "Jenesis Gonzalez",
      stars: "★★★★★"
    },
    {
      quote:
        "Thank you for your patience and for taking the time to explain everything step-by-step for my new business.",
      author: "Carolina Fromm",
      stars: "★★★★★"
    },
    {
      quote: "Great service. Super professional and competitive.",
      author: "Damelys Dadiotis",
      stars: "★★★★★"
    },
    {
      quote:
        "Accuracy Consulting is an excellent company. Their services are efficient and 100% reliable. Even living outside the U.S., they handled all our accounting needs seamlessly. Highly recommended.",
      author: "Yohara Farray",
      stars: "★★★★★"
    },
    {
      quote:
        "It has been a pleasure working with Accuracy Consulting. They supported us in setting up our company, explained everything in detail, and were very attentive. Professional and highly recommended.",
      author: "Yusniel Fleitas",
      stars: "★★★★★"
    },
    {
      quote:
        "Excellent professional, highly recommended. I'm very happy with the preparation and filing of my taxes.",
      author: "Rene A. Fernandez",
      stars: "★★★★★"
    },
    {
      quote:
        "Thanks to Arisleydis for her professionalism and support. I was looking for a place where I could file my taxes with confidence and security - and I found it here. There's no better place.",
      author: "Yaima Barban",
      stars: "★★★★★"
    },
    {
      quote:
        "Excellent experience and personalized attention whenever you have questions. I recommend them for your taxes.",
      author: "Carlos Garcia",
      stars: "★★★★★"
    }
  ];

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function getAvatarColor(name) {
    const palette = ["#2f80ed", "#27ae60", "#f2994a", "#eb5757", "#9b51e0", "#00a3a3", "#2d9cdb", "#f2c94c"];
    const text = (name || "A").trim().toUpperCase();
    let hash = 0;
    for (let i = 0; i < text.length; i += 1) {
      hash = (hash << 5) - hash + text.charCodeAt(i);
      hash |= 0;
    }
    return palette[Math.abs(hash) % palette.length];
  }

  function getInitial(name) {
    const first = (name || "A").trim().charAt(0);
    return first ? first.toUpperCase() : "A";
  }

  function applyTheme(theme) {
    const normalizedTheme = theme === "night" ? "night" : "day";
    const isNight = normalizedTheme === "night";
    document.body.classList.toggle("night-mode", isNight);
    document.documentElement.classList.toggle("night-mode", isNight);
    if (themeToggle) {
      themeToggle.checked = isNight;
    }
    if (themeButton) {
      themeButton.setAttribute("aria-pressed", String(isNight));
      themeButton.textContent = isNight ? "Dark" : "Light";
    }
    localStorage.setItem("acg-theme", normalizedTheme);
    console.debug("[theme]", {
      requested: theme,
      applied: normalizedTheme,
      bodyNightMode: document.body.classList.contains("night-mode"),
      stored: localStorage.getItem("acg-theme")
    });
  }

  function applyLanguage(lang) {
    const dict = translations[lang] || translations.en;
    activeLanguage = lang;
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (dict[key]) {
        el.textContent = dict[key];
      }
    });

    if (descriptionTag && dict.hero_body) {
      descriptionTag.setAttribute("content", dict.hero_body);
    }

    if (languageToggle) {
      languageToggle.checked = lang === "es";
    }
    if (languageButton) {
      languageButton.setAttribute("aria-pressed", String(lang === "es"));
      languageButton.textContent = lang === "es" ? "ES" : "EN";
    }

    updateEstimator();
    localStorage.setItem("acg-language", lang);
  }

  function initSmoothAnchorScroll() {
    document.querySelectorAll("a[href^='#']").forEach((link) => {
      link.addEventListener("click", function (event) {
        const targetId = this.getAttribute("href");
        if (!targetId || targetId === "#") {
          return;
        }

        const target = document.querySelector(targetId);
        if (!target) {
          return;
        }

        event.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });
  }

  function initScrollReveal() {
    const revealTargets = document.querySelectorAll(".reveal");

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      revealTargets.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    revealTargets.forEach((el, index) => {
      el.style.transitionDelay = `${Math.min(index * 40, 240)}ms`;
      observer.observe(el);
    });
  }

  function initCounters() {
    const counters = document.querySelectorAll(".count");
    if (!counters.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const el = entry.target;
          const endValue = Number(el.getAttribute("data-count")) || 0;
          let current = 0;
          const step = Math.max(1, Math.ceil(endValue / 48));

          const timer = setInterval(() => {
            current += step;
            if (current >= endValue) {
              current = endValue;
              clearInterval(timer);
            }
            el.textContent = String(current);
          }, 16);

          observer.unobserve(el);
        });
      },
      { threshold: 0.5 }
    );

    counters.forEach((counter) => observer.observe(counter));
  }

  function initTabs() {
    const tabButtons = document.querySelectorAll(".tab-btn");
    const panels = document.querySelectorAll(".tab-panel");

    tabButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const selected = button.dataset.tab;

        tabButtons.forEach((btn) => {
          btn.classList.toggle("is-active", btn === button);
          btn.setAttribute("aria-selected", String(btn === button));
        });

        panels.forEach((panel) => {
          panel.classList.toggle("is-active", panel.dataset.panel === selected);
        });
      });
    });
  }

  function initResourceFilter() {
    const chips = document.querySelectorAll(".chip");
    const cards = document.querySelectorAll(".resource-card");

    chips.forEach((chip) => {
      chip.addEventListener("click", () => {
        const filter = chip.dataset.filter;
        chips.forEach((c) => c.classList.toggle("is-active", c === chip));

        cards.forEach((card) => {
          const cat = card.dataset.category;
          const show = filter === "all" || cat === filter;
          card.classList.toggle("is-hidden", !show);
        });
      });
    });
  }

  function initFaq() {
    document.querySelectorAll(".faq-item").forEach((item) => {
      const button = item.querySelector(".faq-question");
      button.addEventListener("click", () => {
        const open = item.classList.contains("is-open");
        item.classList.toggle("is-open", !open);
        button.setAttribute("aria-expanded", String(!open));
      });
    });
  }

  function updateEstimator() {
    const dict = translations[activeLanguage] || translations.en;
    const range = document.getElementById("volume-range");
    const monthlyRevenueOutput = document.getElementById("monthly-revenue-output");
    const annualRevenueOutput = document.getElementById("annual-revenue-output");
    const quarterlyTaxOutput = document.getElementById("quarterly-tax-output");
    const cadenceOutput = document.getElementById("cadence-output");

    if (!range || !monthlyRevenueOutput || !annualRevenueOutput || !quarterlyTaxOutput || !cadenceOutput) return;

    const monthlyRevenue = Number(range.value);
    const appliedRate = 5.5;
    const projectedAnnualRevenue = monthlyRevenue * 12;
    const estimatedQuarterlyTax = (projectedAnnualRevenue * appliedRate) / 100 / 4;
    const advisoryCadence =
      monthlyRevenue < 75000 ? dict.cadence_quarterly : dict.cadence_monthly;
    const usd = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0
    });

    monthlyRevenueOutput.textContent = usd.format(monthlyRevenue);
    annualRevenueOutput.textContent = usd.format(projectedAnnualRevenue);
    quarterlyTaxOutput.textContent = usd.format(estimatedQuarterlyTax);
    cadenceOutput.textContent = advisoryCadence;
  }

  function initMobileNav() {
    const navToggle = document.getElementById("nav-toggle");
    const navMenu = document.getElementById("primary-nav");
    if (!navToggle || !navMenu) return;

    const closeMenu = () => {
      navMenu.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    };

    navToggle.addEventListener("click", () => {
      const isOpen = navMenu.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });

    navMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeMenu);
    });

    document.addEventListener("click", (event) => {
      if (window.innerWidth > 860) return;
      const target = event.target;
      if (!(target instanceof Node)) return;
      if (!navMenu.contains(target) && !navToggle.contains(target)) {
        closeMenu();
      }
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 860) {
        closeMenu();
      }
    });
  }

  function initFeaturedReviews() {
    const container = document.getElementById("featured-reviews-list");
    if (!container) return;

    if (!featuredReviews.length) {
      container.innerHTML =
        '<div class="review-empty">Add featured reviews in <code>script.js</code> under <code>featuredReviews</code>.</div>';
      return;
    }

    const slidesMarkup = featuredReviews
      .map((review, index) => {
        const quote = escapeHtml((review.quote || "").trim());
        const author = escapeHtml((review.author || "Client").trim());
        const stars = escapeHtml((review.stars || "★★★★★").trim());
        const age = escapeHtml((review.age || "").trim());
        const avatarImage = (review.imageUrl || "").trim();
        const avatarColor = getAvatarColor(review.author);
        const avatarInitial = getInitial(review.author);
        const avatarMarkup = avatarImage
          ? `<img class="review-avatar review-avatar-image" src="${escapeHtml(avatarImage)}" alt="${author}" loading="lazy" />`
          : `<span class="review-avatar review-avatar-fallback" style="--avatar-bg:${avatarColor}">${avatarInitial}</span>`;
        const ageMarkup = age ? `<span class="review-age">${age}</span>` : "";
        return `<article class="review-slide${index === 0 ? " is-active" : ""}" data-review-index="${index}" aria-hidden="${index === 0 ? "false" : "true"}">
            <div class="review-header">
              ${avatarMarkup}
              <div class="review-meta">
                <strong class="review-author">${author}</strong>
                <span class="review-stars" aria-label="5 out of 5 stars">${stars}</span>
              </div>
              ${ageMarkup}
            </div>
            <p>"${quote}"</p>
            <footer>Google Review</footer>
          </article>`;
      })
      .join("");

    const dotsMarkup = featuredReviews
      .map(
        (_, index) =>
          `<button class="review-dot${index === 0 ? " is-active" : ""}" type="button" data-dot-index="${index}" aria-label="Go to review ${index + 1}" aria-pressed="${index === 0 ? "true" : "false"}"></button>`
      )
      .join("");

    container.innerHTML = `<div class="review-carousel">
        <div class="review-viewport">${slidesMarkup}</div>
        <div class="review-controls">
          <button class="review-nav" type="button" data-review-dir="prev" aria-label="Previous review">Prev</button>
          <div class="review-dots" aria-label="Review pagination">${dotsMarkup}</div>
          <button class="review-nav" type="button" data-review-dir="next" aria-label="Next review">Next</button>
        </div>
      </div>`;

    const slides = Array.from(container.querySelectorAll(".review-slide"));
    const dots = Array.from(container.querySelectorAll(".review-dot"));
    const prevButton = container.querySelector('[data-review-dir="prev"]');
    const nextButton = container.querySelector('[data-review-dir="next"]');
    let activeIndex = 0;

    const applyActiveReview = (index) => {
      activeIndex = (index + slides.length) % slides.length;
      slides.forEach((slide, slideIndex) => {
        const isActive = slideIndex === activeIndex;
        slide.classList.toggle("is-active", isActive);
        slide.setAttribute("aria-hidden", String(!isActive));
      });
      dots.forEach((dot, dotIndex) => {
        const isActive = dotIndex === activeIndex;
        dot.classList.toggle("is-active", isActive);
        dot.setAttribute("aria-pressed", String(isActive));
      });
    };

    prevButton?.addEventListener("click", () => applyActiveReview(activeIndex - 1));
    nextButton?.addEventListener("click", () => applyActiveReview(activeIndex + 1));
    dots.forEach((dot, dotIndex) => {
      dot.addEventListener("click", () => applyActiveReview(dotIndex));
    });

    if (slides.length > 1 && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setInterval(() => applyActiveReview(activeIndex + 1), 6500);
    }
  }

  function initEstimator() {
    const range = document.getElementById("volume-range");
    if (!range) return;

    range.addEventListener("input", updateEstimator);
    updateEstimator();
  }

  function initForm() {
    const form = document.getElementById("lead-form");
    if (!form || !formMessage) return;

    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const name = document.getElementById("lead-name");
      const email = document.getElementById("lead-email");
      const interest = document.getElementById("lead-interest");
      const dict = translations[activeLanguage] || translations.en;

      if (!name.value.trim() || !email.value.trim() || !interest.value) {
        formMessage.textContent = dict.form_error;
        return;
      }

      const selectedInterest =
        interest.options[interest.selectedIndex]?.textContent?.trim() || interest.value;

      const recipient = "info@accuracycg.com";
      const subject = encodeURIComponent("Consultation Request - Accuracy Consulting Group");
      const body = encodeURIComponent(
        [
          "New consultation request:",
          "",
          `Name: ${name.value.trim()}`,
          `Email: ${email.value.trim()}`,
          `Primary Need: ${selectedInterest}`
        ].join("\n")
      );

      window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
      formMessage.textContent = dict.form_success;
      form.reset();
      updateEstimator();
    });
  }

  function initScrollUI() {
    const onScroll = () => {
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const progress = height > 0 ? (window.scrollY / height) * 100 : 0;

      if (progressBar) {
        progressBar.style.width = `${progress}%`;
      }

      if (backToTop) {
        backToTop.classList.toggle("is-visible", window.scrollY > 500);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    if (backToTop) {
      backToTop.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }
  }

  if (themeToggle) {
    themeToggle.addEventListener("change", function () {
      applyTheme(this.checked ? "night" : "day");
    });
  }

  if (languageToggle) {
    languageToggle.addEventListener("change", function () {
      applyLanguage(this.checked ? "es" : "en");
    });
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
  initFeaturedReviews();
  initMobileNav();
  initSmoothAnchorScroll();
  initScrollReveal();
  initCounters();
  initTabs();
  initResourceFilter();
  initFaq();
  initEstimator();
  initForm();
  initScrollUI();
})();

