<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
<script>
  // --- Анимация появления карточки с GSAP ---
  gsap.from(".card", { duration: 1, opacity: 0, y: 50, ease: "power3.out" });

  // --- Многоязычность ---
  const texts = {
    ru: {
      name: "Нил Мистрюков",
      subtitle: "19 лет. Родился в Москве, Россия. В данный момент живу в Белграде, Сербия.",
      email: "Моя почта",
      github: "Мой GitHub",
      instagram: "Мой Instagram",
      telegram: "Мой Telegram"
    },
    en: {
      name: "Nil Mistriukov",
      subtitle: "I am 19 years old. Born in Moscow, Russia. Currently living in Belgrade, Serbia.",
      email: "My Email",
      github: "My GitHub",
      instagram: "My Instagram",
      telegram: "My Telegram"
    },
    sr: {
      name: "Нил Мистрјуков",
      subtitle: "19 година. Рођен у Москви, Русија. Тренутно живим у Београду, Србија.",
      email: "Moj mejl",
      github: "Moj GitHub",
      instagram: "Moj Instagram",
      telegram: "Moj Telegram"
    }
  };

  function setLang(lang) {
    localStorage.setItem('lang', lang);
    if (!texts[lang]) return;
    for (const key in texts[lang]) {
      const el = document.getElementById(key);
      if (el) el.textContent = texts[lang][key];
    }
    document.querySelectorAll('.lang-switch button').forEach(btn => btn.classList.remove('active'));
    document.getElementById('btn-' + lang).classList.add('active');
  }

  const savedLang = localStorage.getItem('lang') || 'ru';
  setLang(savedLang);

  // --- Параллакс при движении мыши ---
  const card = document.querySelector('.card');
  const avatar = document.querySelector('.avatar');
  const name = document.getElementById('name');
  const subtitle = document.getElementById('subtitle');
  const elementsToAnimate = [avatar, name, subtitle].filter(el => el !== null);

  if (card) {
    document.addEventListener('mousemove', (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 30;
      const y = (e.clientY / window.innerHeight - 0.5) * 30;

      gsap.to(card, { rotationY: x, rotationX: -y, transformPerspective: 500, transformOrigin: "center", duration: 0.5, ease: "power1.out" });
      gsap.to(elementsToAnimate, { x: x / 4, y: -y / 4, duration: 0.5, ease: "power1.out" });
    });

    document.addEventListener('mouseleave', () => {
      gsap.to(card, { rotationX: 0, rotationY: 0, duration: 0.5, ease: "power1.out" });
      gsap.to(elementsToAnimate, { x: 0, y: 0, duration: 0.5, ease: "power1.out" });
    });
  }

  // --- Тёмная/светлая тема ---


  // --- Мягкая анимация при наведении ---
  const hoverElems = [card, ...document.querySelectorAll('.contacts a')];
  hoverElems.forEach(el => {
    el.addEventListener('mouseenter', () => gsap.to(el, { scale: 1.03, duration: 0.4, ease: "power2.out" }));
    el.addEventListener('mouseleave', () => gsap.to(el, { scale: 1, duration: 0.4, ease: "power2.out" }));
  });

  // --- Мягкое появление контактов ---
  const contacts = document.querySelectorAll('.contacts a');
  contacts.forEach((el, i) => {
    gsap.from(el, { opacity: 0, y: 10, duration: 0.8, delay: 0.2 * i, ease: "power2.out" });
  });
</script>