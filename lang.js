document.addEventListener('DOMContentLoaded', () => {
  const hasGSAP = typeof gsap !== 'undefined';
  if (typeof AOS !== 'undefined') AOS.init({ duration: 700, once: true }); // только для аватара

  // i18n
  const texts = {
    ru:{name:'Нил Мистрюков',subtitle:'19 лет. Родился в Москве, Россия. В данный момент живу в Белграде, Сербия.',email:'Моя почта',github:'Мой GitHub',instagram:'Мой Instagram',telegram:'Мой Telegram'},
    en:{name:'Nil Mistriukov',subtitle:'I am 19 years old. Born in Moscow, Russia. Currently living in Belgrade, Serbia.',email:'My Email',github:'My GitHub',instagram:'My Instagram',telegram:'My Telegram'},
    sr:{name:'Нил Мистрјуков',subtitle:'19 година. Рођен у Москви, Русија. Тренутно живим у Београду, Србија.',email:'Moj mejl',github:'Moj GitHub',instagram:'Moj Instagram',telegram:'Moj Telegram'}
  };
  window.setLang = function setLang(lang){
    localStorage.setItem('lang', lang);
    const pack = texts[lang] || texts.ru;
    Object.keys(pack).forEach(k=>{
      const el = document.getElementById(k);
      if (el) el.textContent = pack[k];
    });
    document.querySelectorAll('.lang-switch button').forEach(b=>{
      const active = b.id === 'btn-'+lang;
      b.classList.toggle('active', active);
      b.setAttribute('aria-pressed', active ? 'true':'false');
    });
  };
  window.setLang(localStorage.getItem('lang') || 'ru');

  // Входная анимация — один GSAP timeline (без AOS на тексте)
  if (hasGSAP){
    const tl = gsap.timeline({ defaults:{ ease:'power3.out' }});
    tl.from('.card', { opacity:0, y:24, duration:0.6 })
      .from('#name', { opacity:0, y:14, duration:0.45 }, '-=0.15')
      .from('#subtitle', { opacity:0, y:12, duration:0.45 }, '-=0.25')
      .from('.contacts a', { opacity:0, y:10, stagger:0.08, duration:0.35 }, '-=0.10');
  }

  // --- Параллакс (быстрый и лёгкий) ---
const card = document.querySelector('.card');
const avatar = document.querySelector('.avatar');
const nameEl = document.getElementById('name');
const subtitleEl = document.getElementById('subtitle');
const elems = [avatar, nameEl, subtitleEl].filter(Boolean);

const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Настройки чувствительности
const PARALLAX_MAX = 12;  // было ~30 — теперь движение слабее
const ELEM_DIV = 6;       // элементы двигаются ещё мягче
const DURATION = 0.15;    // минимальная длительность → без «задержки»
const EASING = 'none';    // без плавности, чтобы не казалось тормозным

if (card && typeof gsap !== 'undefined' && !reduced) {
  // Сразу включим 3D-контекст
  gsap.set(card, { transformPerspective: 500, transformOrigin: 'center' });

  const onMove = (e) => {
    const nx = (e.clientX / window.innerWidth - 0.5) * 2; // -1..1
    const ny = (e.clientY / window.innerHeight - 0.5) * 2; // -1..1

    const rotY = nx * PARALLAX_MAX;
    const rotX = -ny * PARALLAX_MAX;

    const dx = (nx * PARALLAX_MAX) / ELEM_DIV;
    const dy = (-ny * PARALLAX_MAX) / ELEM_DIV;

    // Очень короткие анимации с overwrite → «липнет» к курсору
    gsap.to(card, { rotationY: rotY, rotationX: rotX, duration: DURATION, ease: EASING, overwrite: 'auto' });
    gsap.to(elems, { x: dx, y: dy, duration: DURATION, ease: EASING, overwrite: 'auto' });
  };

  // pointermove лучше mousemove (тачпад/перо/тач)
  window.addEventListener('pointermove', onMove, { passive: true });

  window.addEventListener('pointerleave', () => {
    gsap.to(card, { rotationX: 0, rotationY: 0, duration: 0.18, ease: EASING, overwrite: 'auto' });
    gsap.to(elems, { x: 0, y: 0, duration: 0.18, ease: EASING, overwrite: 'auto' });
  });
}


  // Тема
  const btn = document.getElementById('themeToggle');
  const saved = localStorage.getItem('theme') || 'dark';
  if (saved==='light') document.body.classList.add('light');
  btn.addEventListener('click', ()=>{
    document.body.classList.toggle('light');
    localStorage.setItem('theme', document.body.classList.contains('light') ? 'light':'dark');
  });
});
