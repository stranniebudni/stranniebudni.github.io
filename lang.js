// Весь JS запускаем после загрузки DOM и подключённых (defer) скриптов
document.addEventListener('DOMContentLoaded', () => {
  // Безопасные проверки на наличие библиотек
  const hasGSAP = typeof window.gsap !== 'undefined';
  const hasAOS = typeof window.AOS !== 'undefined';

  // Инициализация AOS
  if (hasAOS) AOS.init({ duration: 1000, once: true });

  // Входная анимация карточки (не дублируем с AOS на .card)
  if (hasGSAP) {
    gsap.from('.card', { duration: 1, opacity: 0, y: 50, ease: 'power3.out' });
  }

  // --- Многоязычность ---
  const texts = {
    ru: {
      name: 'Нил Мистрюков',
      subtitle: '19 лет. Родился в Москве, Россия. В данный момент живу в Белграде, Сербия.',
      email: 'Моя почта',
      github: 'Мой GitHub',
      instagram: 'Мой Instagram',
      telegram: 'Мой Telegram'
    },
    en: {
      name: 'Nil Mistriukov',
      subtitle: 'I am 19 years old. Born in Moscow, Russia. Currently living in Belgrade, Serbia.',
      email: 'My Email',
      github: 'My GitHub',
      instagram: 'My Instagram',
      telegram: 'My Telegram'
    },
    sr: {
      name: 'Нил Мистрјуков',
      subtitle: '19 година. Рођен у Москви, Русија. Тренутно живим у Београду, Србија.',
      email: 'Moj mejl',
      github: 'Moj GitHub',
      instagram: 'Moj Instagram',
      telegram: 'Moj Telegram'
    }
  };

  // Делаем setLang доступной из HTML (onclick)
  window.setLang = function setLang(lang) {
    localStorage.setItem('lang', lang);
    if (!texts[lang]) return;

    for (const key in texts[lang]) {
      const el = document.getElementById(key);
      if (el) el.textContent = texts[lang][key];
    }

    // Визуально и семантически обновляем состояние кнопок
    document.querySelectorAll('.lang-switch button').forEach(btn => {
      btn.classList.remove('active');
      btn.setAttribute('aria-pressed', 'false');
    });
    const active = document.getElementById('btn-' + lang);
    if (active) {
      active.classList.add('active');
      active.setAttribute('aria-pressed', 'true');
    }
  };

  // Применяем сохранённый язык или по умолчанию RU
  window.setLang(localStorage.getItem('lang') || 'ru');

  // --- Параллакс при движении мыши ---
  const card = document.querySelector('.card');
  const avatar = document.querySelector('.avatar');
  const nameEl = document.getElementById('name');
  const subtitleEl = document.getElementById('subtitle');
  const elementsToAnimate = [avatar, nameEl, subtitleEl].filter(Boolean);

  if (card && hasGSAP) {
    document.addEventListener('mousemove', e => {
      // Учитываем prefers-reduced-motion: приоритет — меньше движения
      const mediaReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const scale = mediaReduced ? 0 : 1;

      const x = (e.clientX / window.innerWidth - 0.5) * 30 * scale;
      const y = (e.clientY / window.innerHeight - 0.5) * 30 * scale;

      gsap.to(card, {
        rotationY: x,
        rotationX: -y,
        transformPerspective: 500,
        transformOrigin: 'center',
        duration: 0.5,
        ease: 'power1.out'
      });
      gsap.to(elementsToAnimate, { x: x / 4, y: -y / 4, duration: 0.5, ease: 'power1.out' });
    });

    window.addEventListener('mouseleave', () => {
      gsap.to(card, { rotationX: 0, rotationY: 0, duration: 0.5, ease: 'power1.out' });
      gsap.to(elementsToAnimate, { x: 0, y: 0, duration: 0.5, ease: 'power1.out' });
    });
  }

  // --- Мягкая анимация hover для карточки и ссылок ---
  if (hasGSAP) {
    const hoverElems = [card, ...document.querySelectorAll('.contacts a')].filter(Boolean);
    hoverElems.forEach(el => {
      el.addEventListener('mouseenter', () => gsap.to(el, { scale: 1.03, duration: 0.4, ease: 'power2.out' }));
      el.addEventListener('mouseleave', () => gsap.to(el, { scale: 1.0, duration: 0.4, ease: 'power2.out' }));
    });

    // Плавное появление ссылок контактов
    document.querySelectorAll('.contacts a').forEach((el, i) => {
      gsap.from(el, { opacity: 0, y: 10, duration: 0.8, delay: 0.15 * i, ease: 'power2.out' });
    });
  }

  // --- Тёмная/светлая тема ---
  const themeBtn = document.createElement('button');
  themeBtn.textContent = 'Тема';
  themeBtn.className = 'theme-toggle';
  document.body.appendChild(themeBtn);

  const savedTheme = localStorage.getItem('theme') || 'dark';
  if (savedTheme === 'light') document.body.classList.add('light');

  themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('light');
    const theme = document.body.classList.contains('light') ? 'light' : 'dark';
    localStorage.setItem('theme', theme);
  });
});
