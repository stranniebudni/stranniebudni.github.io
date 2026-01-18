(() => {
  "use strict";

  // Birthdate: 02.06.2006 (dd.mm.yyyy)
  const BIRTHDATE = new Date(2006, 5, 2);

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  const i18n = {
    ru: {
      brand: "Нил Мистрюков",
      "nav.about": "Обо мне",
      "nav.highlights": "Фокус",
      "nav.links": "Ссылки",

      "ui.languageLabel": "Язык",
      "ui.themeLight": "Светлая",
      "ui.themeDark": "Тёмная",
      "ui.themeToggle": "Тема: {mode}",

      "hero.name": "Нил Мистрюков",
      "hero.subtitle": "Data Science",
      "hero.desc": "Нил Мистрюков, {age} лет. Студент Католического университета Айхштетт-Ингольштадт, направление Data Science. Живу в Германии.",
      "hero.ctaPrimary": "Открыть ссылки",
      "hero.ctaSecondary": "Скопировать ссылку на страницу",

      "about.title": "Обо мне",
      "about.text": "Минималистичная визитка с интерактивными деталями: язык, тема, быстрые карточки и аккуратная навигация.",
      "about.cards.c1.title": "Учёба",
      "about.cards.c1.text": "Die Katholische Universität Eichstätt-Ingolstadt, бакалавриат, Data Science.",
      "about.cards.c2.title": "Подход",
      "about.cards.c2.text": "Люблю структурировать задачи, автоматизировать рутину и аккуратно оформлять результат.",
      "about.cards.c3.title": "Интересы",
      "about.cards.c3.text": "Анализ данных, визуализация, ML, инженерная сторона проектов.",

      "high.title": "Фокус",
      "high.text": "Небольшие интерактивные блоки вместо перегруженного резюме.",
      "high.a1.title": "Data Science как практика",
      "high.a1.text": "Ставлю акцент на понятных метриках, проверяемых гипотезах и воспроизводимости (данные - код - результат).",
      "high.a2.title": "Интерактивность без шума",
      "high.a2.text": "Неброские детали: подсветка секций, reveal при скролле, переключение языка и темы.",
      "high.a3.title": "Минимализм",
      "high.a3.text": "Оттенки серого, системные шрифты, чистая сетка и доступность (focus-visible, reduced motion).",

      "links.title": "Ссылки",
      "links.text": "Ниже - соцсети. Замени USERNAME на свои реальные профили.",
      "links.open": "Открыть",
      "links.note": "Совет: если хочешь, добавь ещё один пункт - например, портфолио или CV PDF (в assets).",

      "footer.left": "Сайт-визитка",
    },

    en: {
      brand: "Nil Mistryukov",
      "nav.about": "About",
      "nav.highlights": "Focus",
      "nav.links": "Links",

      "ui.languageLabel": "Language",
      "ui.themeLight": "Light",
      "ui.themeDark": "Dark",
      "ui.themeToggle": "Theme: {mode}",

      "hero.name": "Nil Mistryukov",
      "hero.subtitle": "Data Science",
      "hero.desc": "Nil Mistryukov, {age}. Data Science student at the Catholic University of Eichstätt-Ingolstadt. Based in Germany.",
      "hero.ctaPrimary": "Open links",
      "hero.ctaSecondary": "Copy page link",

      "about.title": "About",
      "about.text": "A minimal personal page with deliberate interactivity: language, theme, quick cards, and clean navigation.",
      "about.cards.c1.title": "Studies",
      "about.cards.c1.text": "Catholic University of Eichstätt-Ingolstadt, BSc, Data Science.",
      "about.cards.c2.title": "Approach",
      "about.cards.c2.text": "I like structured problem-solving, automation, and polished deliverables.",
      "about.cards.c3.title": "Interests",
      "about.cards.c3.text": "Data analysis, visualization, ML, and the engineering side of projects.",

      "high.title": "Focus",
      "high.text": "A few interactive blocks instead of an overloaded resume.",
      "high.a1.title": "Data Science in practice",
      "high.a1.text": "I focus on clear metrics, testable hypotheses, and reproducibility (data - code - results).",
      "high.a2.title": "Interactivity without noise",
      "high.a2.text": "Subtle details: section highlighting, scroll reveal, language and theme toggles.",
      "high.a3.title": "Minimalism",
      "high.a3.text": "Grayscale palette, system fonts, a clean grid, and accessibility (focus-visible, reduced motion).",

      "links.title": "Links",
      "links.text": "Social profiles are below. Replace USERNAME with your real handles.",
      "links.open": "Open",
      "links.note": "Tip: add one more item like a portfolio page or a CV PDF (in assets) if you want.",

      "footer.left": "Personal site",
    },

    de: {
      brand: "Nil Mistryukov",
      "nav.about": "Über mich",
      "nav.highlights": "Fokus",
      "nav.links": "Links",

      "ui.languageLabel": "Sprache",
      "ui.themeLight": "Hell",
      "ui.themeDark": "Dunkel",
      "ui.themeToggle": "Thema: {mode}",

      "hero.name": "Nil Mistryukov",
      "hero.subtitle": "Data Science",
      "hero.desc": "Nil Mistryukov, {age} Jahre alt. Data-Science-Student an der Katholischen Universität Eichstätt-Ingolstadt. Ich lebe in Deutschland.",
      "hero.ctaPrimary": "Links öffnen",
      "hero.ctaSecondary": "Seitenlink kopieren",

      "about.title": "Über mich",
      "about.text": "Eine minimalistische Visitenkarte mit gezielter Interaktivität: Sprache, Thema, Kurzinfos und klare Navigation.",
      "about.cards.c1.title": "Studium",
      "about.cards.c1.text": "Katholische Universität Eichstätt-Ingolstadt, Bachelor, Data Science.",
      "about.cards.c2.title": "Arbeitsweise",
      "about.cards.c2.text": "Ich mag strukturierte Problemlösung, Automatisierung und saubere Ergebnisse.",
      "about.cards.c3.title": "Interessen",
      "about.cards.c3.text": "Datenanalyse, Visualisierung, ML und Engineering in Projekten.",

      "high.title": "Fokus",
      "high.text": "Ein paar interaktive Blöcke statt eines überladenen Lebenslaufs.",
      "high.a1.title": "Data Science in der Praxis",
      "high.a1.text": "Fokus auf klare Metriken, testbare Hypothesen und Reproduzierbarkeit (Daten - Code - Ergebnis).",
      "high.a2.title": "Interaktiv ohne Lärm",
      "high.a2.text": "Dezente Details: Abschnitt-Markierung, Scroll-Reveal, Sprach- und Theme-Schalter.",
      "high.a3.title": "Minimalismus",
      "high.a3.text": "Graustufen, Systemschriften, ein sauberes Grid und Barrierefreiheit (focus-visible, reduced motion).",

      "links.title": "Links",
      "links.text": "Unten sind Social-Links. Ersetze USERNAME durch deine echten Profile.",
      "links.open": "Öffnen",
      "links.note": "Tipp: Du kannst noch einen Punkt ergänzen, z.B. Portfolio oder CV PDF (in assets).",

      "footer.left": "Visitenkarte",
    },

    // Serbian (Cyrillic)
    sr: {
      brand: "Нил Мистрјуков",
      "nav.about": "О мени",
      "nav.highlights": "Фокус",
      "nav.links": "Линкови",

      "ui.languageLabel": "Језик",
      "ui.themeLight": "Светла",
      "ui.themeDark": "Тамна",
      "ui.themeToggle": "Тема: {mode}",

      "hero.name": "Нил Мистрјуков",
      "hero.subtitle": "Data Science",
      "hero.desc": "Нил Мистрјуков, стар {age} година. Студент Католичког универзитета Ајхштет-Инголштат, смер Data Science. Живим у Немачкој.",
      "hero.ctaPrimary": "Отвори линкове",
      "hero.ctaSecondary": "Копирај линк странице",

      "about.title": "О мени",
      "about.text": "Минималистичка визитка са контролисаном интерактивношћу: језик, тема, кратке картице и чиста навигација.",
      "about.cards.c1.title": "Студије",
      "about.cards.c1.text": "Католички универзитет Ајхштет-Инголштат, основне студије, Data Science.",
      "about.cards.c2.title": "Приступ",
      "about.cards.c2.text": "Волим структуру, аутоматизацију рутине и уредан резултат.",
      "about.cards.c3.title": "Интересовања",
      "about.cards.c3.text": "Анализа података, визуализација, ML и инжењерски део пројеката.",

      "high.title": "Фокус",
      "high.text": "Неколико интерактивних блокова уместо преоптерећеног CV-а.",
      "high.a1.title": "Data Science у пракси",
      "high.a1.text": "Фокус на јасне метрике, проверљиве хипотезе и репродуктивност (подаци - код - резултат).",
      "high.a2.title": "Интерактивно без шума",
      "high.a2.text": "Суптилни детаљи: истицање секција, reveal при скролу, избор језика и теме.",
      "high.a3.title": "Минимализам",
      "high.a3.text": "Сиве нијансе, системски фонтови, чиста мрежа и приступачност (focus-visible, reduced motion).",

      "links.title": "Линкови",
      "links.text": "Испод су друштвене мреже. Замени USERNAME својим правим профилима.",
      "links.open": "Отвори",
      "links.note": "Савет: додај још једну ставку - портфолио или CV PDF (у assets), ако желиш.",

      "footer.left": "Визитка",
    },
  };

  const chipContent = {
    ds: {
      ru: { t: "Data Science", d: "Аналитика, постановка гипотез, метрики, проверка качества." },
      en: { t: "Data Science", d: "Analytics, hypotheses, metrics, and evaluation discipline." },
      de: { t: "Data Science", d: "Analyse, Hypothesen, Metriken und saubere Evaluation." },
      sr: { t: "Data Science", d: "Аналитика, хипотезе, метрике и провера квалитета." },
    },
    python: {
      ru: { t: "Python", d: "Быстрая разработка, автоматизация, данные, пайплайны." },
      en: { t: "Python", d: "Rapid development, automation, data work, pipelines." },
      de: { t: "Python", d: "Schnelle Entwicklung, Automatisierung, Daten, Pipelines." },
      sr: { t: "Python", d: "Брз развој, аутоматизација, подаци, пайплајни." },
    },
    ml: {
      ru: { t: "Machine Learning", d: "Базовые модели, валидация, переобучение, практическая применимость." },
      en: { t: "Machine Learning", d: "Core models, validation, overfitting control, practical use." },
      de: { t: "Machine Learning", d: "Modelle, Validierung, Overfitting-Kontrolle, Praxisbezug." },
      sr: { t: "Machine Learning", d: "Модели, валидација, overfitting, практична примена." },
    },
    viz: {
      ru: { t: "Visualization", d: "Графики, читаемость, смысловые акценты и аккуратная подача." },
      en: { t: "Visualization", d: "Charts, readability, meaningful emphasis, clean presentation." },
      de: { t: "Visualization", d: "Charts, Lesbarkeit, klare Aussagen, saubere Darstellung." },
      sr: { t: "Visualization", d: "Графици, читљивост, јасан смисао и чиста презентација." },
    },
  };

  function calcAge(birthDate, now = new Date()) {
    let age = now.getFullYear() - birthDate.getFullYear();
    const m = now.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && now.getDate() < birthDate.getDate())) age--;
    return age;
  }

  function format(str, vars) {
    return String(str).replace(/\{(\w+)\}/g, (_, k) => (vars[k] ?? `{${k}}`));
  }

  function pickInitialLang() {
    const saved = localStorage.getItem("lang");
    if (saved && i18n[saved]) return saved;

    const n = (navigator.language || "en").toLowerCase();
    if (n.startsWith("ru")) return "ru";
    if (n.startsWith("de")) return "de";
    if (n.startsWith("sr")) return "sr";
    return "en";
  }

  function applyLang(lang) {
    const dict = i18n[lang] || i18n.en;
    const age = calcAge(BIRTHDATE);

    document.documentElement.lang = lang;

    $$("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const raw = dict[key];
      if (!raw) return;
      el.textContent = format(raw, { age });
    });

    // Links "open" hints appear multiple times, update via i18n already.
    // Update theme label depends on current theme.
    updateThemeLabel(lang);

    // Update chip panel content to current language if open.
    syncChipPanel(lang);

    // Save lang
    localStorage.setItem("lang", lang);
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
    const btn = $("#themeToggle");
    if (btn) btn.setAttribute("aria-pressed", theme === "dark" ? "true" : "false");
  }

  function pickInitialTheme() {
    const saved = localStorage.getItem("theme");
    if (saved === "light" || saved === "dark") return saved;
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  function updateThemeLabel(lang) {
    const dict = i18n[lang] || i18n.en;
    const theme = document.documentElement.getAttribute("data-theme") || "light";
    const mode = theme === "dark" ? dict["ui.themeDark"] : dict["ui.themeLight"];
    const label = format(dict["ui.themeToggle"], { mode });
    const themeLabel = $("#themeLabel");
    if (themeLabel) themeLabel.textContent = label;
  }

  function toast(msg) {
    const el = $("#toast");
    if (!el) return;
    el.textContent = msg;
    el.style.opacity = "1";
    window.clearTimeout(toast._t);
    toast._t = window.setTimeout(() => {
      el.textContent = "";
    }, 2400);
  }

  function setupReveal() {
    const els = $$("[data-reveal]");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("is-visible");
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
  }

  function setupScrollProgress() {
    const bar = $("#scrollProgress");
    if (!bar) return;

    const update = () => {
      const doc = document.documentElement;
      const scrollTop = doc.scrollTop || document.body.scrollTop;
      const height = doc.scrollHeight - doc.clientHeight;
      const p = height > 0 ? (scrollTop / height) * 100 : 0;
      bar.style.width = `${p}%`;
    };

    window.addEventListener("scroll", update, { passive: true });
    update();
  }

  function setupScrollSpy() {
    const links = $$(".nav__link");
    const map = new Map();
    links.forEach((a) => {
      const id = a.getAttribute("href");
      if (!id || !id.startsWith("#")) return;
      const sec = $(id);
      if (sec) map.set(sec, a);
    });

    if (!map.size) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          const a = map.get(e.target);
          if (!a) return;
          if (e.isIntersecting) {
            links.forEach((x) => x.classList.remove("is-active"));
            a.classList.add("is-active");
          }
        });
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: 0.02 }
    );

    map.forEach((_, sec) => io.observe(sec));
  }

  function setupCopyLink(lang) {
    const btn = $("#copyPageLink");
    if (!btn) return;

    const msgs = {
      ru: "Ссылка скопирована",
      en: "Link copied",
      de: "Link kopiert",
      sr: "Линк је копиран",
    };

    btn.addEventListener("click", async () => {
      const url = window.location.href.split("#")[0];
      try {
        await navigator.clipboard.writeText(url);
        toast(msgs[lang] || msgs.en);
      } catch {
        // Fallback
        const tmp = document.createElement("textarea");
        tmp.value = url;
        document.body.appendChild(tmp);
        tmp.select();
        document.execCommand("copy");
        tmp.remove();
        toast(msgs[lang] || msgs.en);
      }
    });
  }

  function setupChips(lang) {
    const panel = $("#chipPanel");
    const title = $("#chipTitle");
    const text = $("#chipText");
    const close = $("#chipClose");

    if (!panel || !title || !text || !close) return;

    const openChip = (key) => {
      const c = chipContent[key];
      if (!c) return;
      const d = c[lang] || c.en;
      title.textContent = d.t;
      text.textContent = d.d;

      panel.dataset.openChip = key;
      panel.scrollIntoView({ behavior: "smooth", block: "nearest" });
    };

    $$(".chip").forEach((b) => {
      b.addEventListener("click", () => openChip(b.dataset.chip));
    });

    close.addEventListener("click", () => {
      title.textContent = "";
      text.textContent = "";
      panel.dataset.openChip = "";
    });
  }

  function syncChipPanel(lang) {
    const panel = $("#chipPanel");
    const key = panel?.dataset.openChip;
    if (!key) return;

    const title = $("#chipTitle");
    const text = $("#chipText");
    const c = chipContent[key];
    if (!c || !title || !text) return;

    const d = c[lang] || c.en;
    title.textContent = d.t;
    text.textContent = d.d;
  }

  function setupFooterYear() {
    const y = $("#year");
    if (y) y.textContent = String(new Date().getFullYear());
  }

  // Boot
  const lang = pickInitialLang();
  const theme = pickInitialTheme();

  applyTheme(theme);
  applyLang(lang);

  const langSelect = $("#langSelect");
  if (langSelect) {
    langSelect.value = lang;
    langSelect.addEventListener("change", () => {
      const next = langSelect.value;
      applyLang(next);
      setupCopyLink(next);
      setupChips(next);
    });
  }

  const themeToggle = $("#themeToggle");
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const cur = document.documentElement.getAttribute("data-theme") || "light";
      const next = cur === "dark" ? "light" : "dark";
      applyTheme(next);
      updateThemeLabel(localStorage.getItem("lang") || lang);
    });
  }

  setupReveal();
  setupScrollProgress();
  setupScrollSpy();
  setupFooterYear();
  setupCopyLink(lang);
  setupChips(lang);
})();
