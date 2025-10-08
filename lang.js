// Инициализация AOS
AOS.init({ duration: 1000, once: true });

// GSAP: анимация карточки при загрузке
gsap.from(".card", { duration: 1, opacity: 0, y: 50, ease: "power3.out" });

// --- Многоязычность ---
const texts = {
  ru: { name: "Нил Мистрюков", subtitle: "19 лет. Родился в Москве, Россия. В данный момент живу в Белграде, Сербия.", email: "Моя почта", github: "Мой GitHub", instagram: "Мой Instagram", telegram: "Мой Telegram" },
  en: { name: "Nil Mistriukov", subtitle: "I am 19 years old. Born in Moscow, Russia. Currently living in Belgrade, Serbia.", email: "My Email", github: "My GitHub", instagram: "My Instagram", telegram: "My Telegram" },
  sr: { name: "Нил Мистрјуков", subtitle: "19 година. Рођен у Москви, Русија. Тренутно живим у Београду, Србија.", email: "Moj mejl", github: "Moj GitHub", instagram: "Moj Instagram", telegram: "Moj Telegram" }
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

const saved = localStorage.getItem('lang') || 'ru';
setLang(saved);

// --- Параллакс движения мыши ---
const card = document.querySelector('.card');
const avatar = document.querySelector('.avatar');
const nameEl = document.getElementById('name');
const subtitleEl = document.getElementById('subtitle');

document.addEventListener('mousemove', e => {
  const x = (e.clientX / window.innerWidth - 0.5) * 20;
  const y = (e.clientY / window.innerHeight - 0.5) * 20;

  gsap.to(card, { rotationY: x, rotationX: -y, duration: 0.5, ease: "power1.out", transformPerspective: 500 });
  gsap.to([avatar, nameEl, subtitleEl], { x: x/3, y: -y/3, duration: 0.5, ease: "power1.out" });
});

document.addEventListener('mouseleave', () => {
  gsap.to(card, { rotationX: 0, rotationY: 0, duration: 0.5, ease: "power1.out" });
  gsap.to([avatar, nameEl, subtitleEl], { x: 0, y: 0, duration: 0.5, ease: "power1.out" });
});

// --- Canvas фон с частицами ---
const canvas = document.getElementById('background');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];
for(let i=0; i<70; i++){
  particles.push({
    x: Math.random()*canvas.width,
    y: Math
