<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js">

gsap.from(".card", {
  duration: 1,
  opacity: 0,
  y: 50,
  ease: "power3.out"
});




</script>




const texts = {
  ru: {
    name: "Нил",
    bio: "Студент"
  },
  en: {
    name: "Nil",
    bio: "A student"
  },
  sr: {
    name: "Нил",
    bio: "Student"
  }
};

function setLang(lang) {
  localStorage.setItem('lang', lang);
  document.getElementById('name').textContent = texts[lang].name;
  document.getElementById('bio').textContent = texts[lang].bio;
}

const saved = localStorage.getItem('lang') || 'ru';
setLang(saved);
