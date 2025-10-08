<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>

<script>
  // Анимация появления карточки
  gsap.from(".card", {
    duration: 1,
    opacity: 0,
    y: 50,
    ease: "power3.out"
  });

  // Многоязычность
  const texts = {
    ru: { name: "Нил", bio: "Студент" },
    en: { name: "Nil", bio: "A student" },
    sr: { name: "Нил", bio: "Student" }
  };

  function setLang(lang) {
    localStorage.setItem('lang', lang);
    document.getElementById('name').textContent = texts[lang].name;
    document.getElementById('bio').textContent = texts[lang].bio;
  }

  const saved = localStorage.getItem('lang') || 'ru';
  setLang(saved);

  // --- Параллакс при движении мыши ---
  const card = document.querySelector('.card');
  const avatar = document.querySelector('.avatar');
  const name = document.getElementById('name');
  const bio = document.getElementById('bio');

  document.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 30; // ±15deg
    const y = (e.clientY / window.innerHeight - 0.5) * 30;

    // Поворот карточки
    gsap.to(card, {
      rotationY: x,
      rotationX: -y,
      transformPerspective: 500,
      transformOrigin: "center",
      duration: 0.5,
      ease: "power1.out"
    });

    // Лёгкое смещение текста и аватара
    gsap.to([avatar, name, bio], {
      x: x / 4,
      y: -y / 4,
      duration: 0.5,
      ease: "power1.out"
    });
  });

  // Сброс при уходе мыши с окна
  document.addEventListener('mouseleave', () => {
    gsap.to(card, { rotationX: 0, rotationY: 0, duration: 0.5, ease: "power1.out" });
    gsap.to([avatar, name, bio], { x: 0, y: 0, duration: 0.5, ease: "power1.out" });
  });
</script>
