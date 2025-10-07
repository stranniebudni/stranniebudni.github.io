  // GSAP
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
</script>
