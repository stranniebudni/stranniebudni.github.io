<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>

<script>
  // --- Инициализация AOS ---
  AOS.init({ duration: 1000, once: true });

  // --- GSAP анимация появления карточки ---
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
    for (const key in texts[lang]) {
      const el = document.getElementById(key);
      if(el) el.textContent = texts[lang][key];
    }
    document.querySelectorAll('.lang-switch button').forEach(btn => btn.classList.remove('active'));
    document.getElementById('btn-' + lang).classList.add('active');
  }

  // Устанавливаем язык при загрузке
  setLang(localStorage.getItem('lang') || 'ru');

  // --- Параллакс движения мыши для карточки и элементов ---
  const card = document.querySelector('.card');
  const avatar = document.querySelector('.avatar');
  const name = document.getElementById('name');
  const subtitle = document.getElementById('subtitle');

  if(card) {
    const elems = [avatar, name, subtitle].filter(e => e !== null);

    document.addEventListener('mousemove', e => {
      const x = (e.clientX / window.innerWidth - 0.5) * 30;
      const y = (e.clientY / window.innerHeight - 0.5) * 30;

      gsap.to(card, { rotationY: x, rotationX: -y, transformPerspective: 500, transformOrigin: "center", duration: 0.5, ease: "power1.out" });
      gsap.to(elems, { x: x/4, y: -y/4, duration: 0.5, ease: "power1.out" });
    });

    document.addEventListener('mouseleave', () => {
      gsap.to(card, { rotationX:0, rotationY:0, duration:0.5, ease:"power1.out" });
      gsap.to(elems, { x:0, y:0, duration:0.5, ease:"power1.out" });
    });
  }

  // --- Пункт 9: интерактивные линии между курсором и элементами ---
  const linesContainer = document.createElement('canvas');
  linesContainer.classList.add('lines-canvas');
  document.body.appendChild(linesContainer);
  const ctx = linesContainer.getContext('2d');

  function resizeCanvas() {
    linesContainer.width = window.innerWidth;
    linesContainer.height = window.innerHeight;
  }
  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();

  let mouse = { x: 0, y: 0 };
  document.addEventListener('mousemove', e => mouse = { x: e.clientX, y: e.clientY });

  function drawLines() {
    ctx.clearRect(0, 0, linesContainer.width, linesContainer.height);

    const cards = [card];
    cards.forEach(c => {
      if(!c) return;
      const rect = c.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;

      const dx = mouse.x - cx;
      const dy = mouse.y - cy;
      const dist = Math.sqrt(dx*dx + dy*dy);

      if(dist < 300) {
        ctx.beginPath();
        ctx.moveTo(mouse.x, mouse.y);
        ctx.lineTo(cx, cy);
        ctx.strokeStyle = `rgba(0,255,255,${1 - dist/300})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }
    });

    requestAnimationFrame(drawLines);
  }
  drawLines();
</script>
