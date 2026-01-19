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
    "nav.highlights": "Дополнительная информация",
    "nav.links": "Ссылки",

    "ui.languageLabel": "Язык",
    "ui.themeLight": "Светлая",
    "ui.themeDark": "Тёмная",
    "ui.themeToggle": "Тема: {mode}",

    "hero.name": "Нил Мистрюков",
    "hero.subtitle": "Data Science",
    "hero.desc":
      "Нил Мистрюков, {age} лет. Студент Католического университета Айхштетт-Ингольштадт, направление Data Science. Живу в Германии.",
    "hero.ctaPrimary": "Открыть ссылки",
    "hero.ctaSecondary": "Скопировать ссылку на страницу",

    "about.title": "Обо мне",
    "about.text": "",
    "about.cards.c1.title": "Учёба",
    "about.cards.c1.text": "Katholische Universität Eichstätt-Ingolstadt (KU), бакалавриат, Data Science.",
    "about.cards.c2.title": "Работа",
    "about.cards.c2.text": "Пока нет.",
    "about.cards.c3.title": "Интересы",
    "about.cards.c3.text":
      "Спорт: горные лыжи, скалолазание, футбол, волейбол, водные лыжи. Математика, ML, анализ данных, программирование.",

    "high.title": "Дополнительная информация",
    "high.text": "",
    "high.a1.title": "Школа",
    "high.a1.text":
      "Закончил Белградскую девятую гимназию «Михајло Петровић Алас», природно-математическое направление.",
    "high.a2.title": "Личные проекты",
    "high.a2.text":
      "Сейчас активен один проект: Telegram-бот, который анализирует с помощью искусственного интеллекта комментарии под видео на YouTube и выводит статистику. Юзернейм: @yt_analyser_bot.",
    "high.a3.title": "Планы",
    "high.a3.text": "Планирую закончить бакалавриат и поступить в магистратуру.",

    "links.title": "Ссылки",
    "links.text": "Профили и контакты.",
    "links.open": "Открыть",
    "links.note": "Пишите - буду рад ответить.",

    "footer.left": "Сайт-визитка",
  },

  en: {
    brand: "Nil Mistriukov",
    "nav.about": "About",
    "nav.highlights": "More information",
    "nav.links": "Links",

    "ui.languageLabel": "Language",
    "ui.themeLight": "Light",
    "ui.themeDark": "Dark",
    "ui.themeToggle": "Theme: {mode}",

    "hero.name": "Nil Mistriukov",
    "hero.subtitle": "Data Science",
    "hero.desc":
      "Nil Mistriukov, {age} years old. Student at the Catholic University of Eichstätt-Ingolstadt, Data Science program. I live in Germany.",
    "hero.ctaPrimary": "Open links",
    "hero.ctaSecondary": "Copy page link",

    "about.title": "About",
    "about.text": "",
    "about.cards.c1.title": "Studies",
    "about.cards.c1.text": "Katholische Universität Eichstätt-Ingolstadt (KU), bachelor’s degree, Data Science.",
    "about.cards.c2.title": "Work",
    "about.cards.c2.text": "Not yet.",
    "about.cards.c3.title": "Interests",
    "about.cards.c3.text":
      "Sports: alpine skiing, climbing, football, volleyball, water skiing. Math, ML, data analysis, programming.",

    "high.title": "Additional information",
    "high.text": "",
    "high.a1.title": "School",
    "high.a1.text":
      "Graduated from the Ninth Belgrade Gymnasium “Mihajlo Petrović Alas”, science and mathematics track.",
    "high.a2.title": "Personal projects",
    "high.a2.text":
      "Currently, one project is active: a Telegram bot that uses artificial intelligence to analyze comments under YouTube videos and outputs statistics. Username: @yt_analyser_bot.",
    "high.a3.title": "Plans",
    "high.a3.text": "I plan to finish my bachelor’s degree and apply for a master’s program.",

    "links.title": "Links",
    "links.text": "Profiles and contacts.",
    "links.open": "Open",
    "links.note": "Message me - I’ll be glad to reply.",

    "footer.left": "Personal landing page",
  },

  de: {
    brand: "Nil Mistriukov",
    "nav.about": "Über mich",
    "nav.highlights": "Zusätzliche Informationen",
    "nav.links": "Links",

    "ui.languageLabel": "Sprache",
    "ui.themeLight": "Hell",
    "ui.themeDark": "Dunkel",
    "ui.themeToggle": "Thema: {mode}",

    "hero.name": "Nil Mistriukov",
    "hero.subtitle": "Data Science",
    "hero.desc":
      "Nil Mistriukov, {age} Jahre alt. Student an der Katholischen Universität Eichstätt-Ingolstadt, Studiengang Data Science. Ich lebe in Deutschland.",
    "hero.ctaPrimary": "Links öffnen",
    "hero.ctaSecondary": "Seitenlink kopieren",

    "about.title": "Über mich",
    "about.text": "",
    "about.cards.c1.title": "Studium",
    "about.cards.c1.text": "Katholische Universität Eichstätt-Ingolstadt (KU), Bachelor, Data Science.",
    "about.cards.c2.title": "Arbeit",
    "about.cards.c2.text": "Noch nicht.",
    "about.cards.c3.title": "Interessen",
    "about.cards.c3.text":
      "Sport: Alpinski, Klettern, Fußball, Volleyball, Wasserski. Mathematik, ML, Datenanalyse, Programmierung.",

    "high.title": "Zusätzliche Informationen",
    "high.text": "",
    "high.a1.title": "Schule",
    "high.a1.text":
      "Absolvent des Neunten Belgrader Gymnasiums „Mihajlo Petrović Alas“, naturwissenschaftlich-mathematischer Zweig.",
    "high.a2.title": "Eigene Projekte",
    "high.a2.text":
      "Aktuell ist ein Projekt aktiv: ein Telegram-Bot, der mithilfe künstlicher Intelligenz Kommentare unter YouTube-Videos analysiert und Statistiken ausgibt. Username: @yt_analyser_bot.",
    "high.a3.title": "Pläne",
    "high.a3.text": "Ich plane, den Bachelor abzuschließen und mich für ein Masterstudium zu bewerben.",

    "links.title": "Links",
    "links.text": "Profile und Kontakte.",
    "links.open": "Öffnen",
    "links.note": "Schreib mir - ich antworte gern.",

    "footer.left": "Visitenkarten-Website",
  },

  // Serbian (Cyrillic)
  sr: {
    brand: "Нил Мистрјуков",
    "nav.about": "О мени",
    "nav.highlights": "Додатне информације",
    "nav.links": "Линкови",

    "ui.languageLabel": "Језик",
    "ui.themeLight": "Светла",
    "ui.themeDark": "Тамна",
    "ui.themeToggle": "Тема: {mode}",

    "hero.name": "Нил Мистрјуков",
    "hero.subtitle": "Data Science",
    "hero.desc":
      "Нил Мистрјуков, {age} година. Студент Католичког универзитета Ајхштет-Инголштат, смер Data Science. Живим у Немачкој.",
    "hero.ctaPrimary": "Отвори линкове",
    "hero.ctaSecondary": "Копирај линк странице",

    "about.title": "О мени",
    "about.text": "",
    "about.cards.c1.title": "Студије",
    "about.cards.c1.text": "Katholische Universität Eichstätt-Ingolstadt (KU), основне студије, Data Science.",
    "about.cards.c2.title": "Посао",
    "about.cards.c2.text": "Још не.",
    "about.cards.c3.title": "Интересовања",
    "about.cards.c3.text":
      "Спорт: алпско скијање, пењање, фудбал, одбојка, водне скије. Математика, ML, анализа података, програмирање.",

    "high.title": "Додатне информације",
    "high.text": "",
    "high.a1.title": "Школа",
    "high.a1.text":
      "Завршио Девету београдску гимназију „Михајло Петровић Алас“, природно-математички смер.",
    "high.a2.title": "Лични пројекти",
    "high.a2.text":
      "Тренутно је активан један пројекат: Telegram-бот који уз помоћ вештачке интелигенције анализира коментаре испод YouTube видеа и приказује статистику. Корисничко име: @yt_analyser_bot.",
    "high.a3.title": "Планови",
    "high.a3.text": "Планирам да завршим бакалавријат и упишем мастер.",

    "links.title": "Линкови",
    "links.text": "Профили и контакти.",
    "links.open": "Отвори",
    "links.note": "Пишите - радо ћу одговорити.",

    "footer.left": "Сајт-визитка",
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
