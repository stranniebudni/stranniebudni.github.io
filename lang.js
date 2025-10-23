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

  // Параллакс
  const card = document.querySelector('.card');
  const avatar = document.querySelector('.avatar');
  const nameEl = document.getElementById('name');
  const subtitleEl = document.getElementById('subtitle');
  const elems = [avatar, nameEl, subtitleEl].filter(Boolean);
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (card && hasGSAP && !reduced){
    document.addEventListener('mousemove', e=>{
      const x = (e.clientX / innerWidth - 0.5) * 30;
      const y = (e.clientY / innerHeight - 0.5) * 30;
      gsap.to(card, { rotationY:x, rotationX:-y, transformPerspective:500, transformOrigin:'center', duration:0.4, ease:'power1.out' });
      gsap.to(elems, { x:x/4, y:-y/4, duration:0.4, ease:'power1.out' });
    });
    window.addEventListener('mouseleave', ()=>{
      gsap.to(card, { rotationX:0, rotationY:0, duration:0.4 });
      gsap.to(elems, { x:0, y:0, duration:0.4 });
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
