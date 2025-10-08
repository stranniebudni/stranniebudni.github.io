<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>

<script>
  // ================= Многоязычность =================
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

  const savedLang = localStorage.getItem('lang') || 'ru';
  setLang(savedLang);

  // ================= GSAP-анимации =================
  const card = document.querySelector('.card');
  const avatar = document.querySelector('.avatar');
  const nameEl = document.getElementById('name');
  const subtitleEl = document.getElementById('subtitle');
  const elementsToAnimate = [avatar, nameEl, subtitleEl].filter(el => el !== null);

  // Появление карточки
  gsap.from(".card", { duration: 1, opacity: 0, y: 50, ease: "power3.out" });

  // Параллакс при движении мыши
  if(card) {
    document.addEventListener('mousemove', e => {
      const x = (e.clientX / window.innerWidth - 0.5) * 30;
      const y = (e.clientY / window.innerHeight - 0.5) * 30;

      gsap.to(card, { rotationY: x, rotationX: -y, transformPerspective: 500, transformOrigin: "center", duration: 0.5, ease: "power1.out" });
      if(elementsToAnimate.length)
        gsap.to(elementsToAnimate, { x: x/4, y: -y/4, duration: 0.5, ease: "power1.out" });
    });

    document.addEventListener('mouseleave', () => {
      gsap.to(card, { rotationX:0, rotationY:0, duration:0.5, ease:"power1.out" });
      if(elementsToAnimate.length)
        gsap.to(elementsToAnimate, { x:0, y:0, duration:0.5, ease:"power1.out" });
    });
  }

  // ================= Динамический фон =================
  const body = document.body;
  document.addEventListener('mousemove', e => {
    const xPercent = e.clientX / window.innerWidth;
    const yPercent = e.clientY / window.innerHeight;

    // Меняем угол градиента плавно
    body.style.background = `linear-gradient(${135 + xPercent*50}deg, rgba(15,32,39,1), rgba(32,58,67,1), rgba(44,83,100,1))`;
  });

  // ================= Canvas для эффектов (пункт 9) =================
  const canvas = document.createElement('canvas');
  canvas.id = 'effectCanvas';
  document.body.appendChild(canvas);
  const ctx = canvas.getContext('2d');
  let particles = [];

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();

  class Particle {
    constructor() {
      this.reset();
    }
    reset() {
      this.x = Math.random()*canvas.width;
      this.y = Math.random()*canvas.height;
      this.size = Math.random()*3 + 1;
      this.speedX = (Math.random()-0.5)*1;
      this.speedY = (Math.random()-0.5)*1;
      this.color = `rgba(0,255,255,${Math.random()*0.5+0.2})`;
    }
    update() {
      this.x += this.speedX;
      this.y += this.speedY;
      if(this.x<0 || this.x>canvas.width || this.y<0 || this.y>canvas.height) this.reset();
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI*2);
      ctx.fillStyle = this.color;
      ctx.fill();
    }
  }

  for(let i=0;i<150;i++) particles.push(new Particle());

  function animateParticles() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    particles.forEach(p => { p.update(); p.draw(); });
    requestAnimationFrame(animateParticles);
  }
  animateParticles();
</script>
