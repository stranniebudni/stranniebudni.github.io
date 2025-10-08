// Подключаем GSAP
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>

<script>
  // Анимация появления карточки
  gsap.from(".card", {
    duration: 1,
    opacity: 0,
    y: 50,
    ease: "power3.out"
  });

  // --- Многоязычность ---

  // Объект с текстами. Легко можно добавить новые поля, например, "button: 'Связаться'"
  const texts = {
    ru: { name: "Нил", bio: "Студент" },
    en: { name: "Nil", bio: "A student" },
    sr: { name: "Нил", bio: "Student" }
  };

  /**
   * Устанавливает язык на странице.
   * Функция автоматически находит элементы, чьи `id` совпадают с ключами в объекте `texts`.
   * @param {string} lang - Язык для установки ('ru', 'en', 'sr').
   */
  function setLang(lang) {
    // Сохраняем выбор пользователя
    localStorage.setItem('lang', lang);

    // Проверяем, существует ли такой язык в нашем объекте
    if (!texts[lang]) {
      console.error(`Язык "${lang}" не найден в объекте texts.`);
      return;
    }

    // Проходимся циклом по всем ключам (name, bio и т.д.)
    for (const key in texts[lang]) {
      const element = document.getElementById(key);
      // Проверяем, существует ли элемент на странице, прежде чем менять его текст
      if (element) {
        element.textContent = texts[lang][key];
      }
    }
  }

  // При загрузке страницы устанавливаем сохранённый язык или русский по умолчанию
  const savedLang = localStorage.getItem('lang') || 'ru';
  setLang(savedLang);


  // --- Параллакс при движении мыши ---

  // Находим все нужные элементы в DOM
  const card = document.querySelector('.card');
  const avatar = document.querySelector('.avatar');
  const name = document.getElementById('name');
  const bio = document.getElementById('bio');

  // Главная проверка: если на странице нет элемента .card, то весь код ниже не выполняется
  if (card) {
    // Собираем в массив только те элементы, которые реально существуют на странице
    const elementsToAnimate = [avatar, name, bio].filter(element => element !== null);

    // Обработчик движения мыши
    document.addEventListener('mousemove', (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 30;
      const y = (e.clientY / window.innerHeight - 0.5) * 30;

      // Анимация поворота карточки
      gsap.to(card, {
        rotationY: x,
        rotationX: -y,
        transformPerspective: 500,
        transformOrigin: "center",
        duration: 0.5,
        ease: "power1.out"
      });

      // Анимация смещения внутренних элементов (если они существуют)
      if (elementsToAnimate.length > 0) {
        gsap.to(elementsToAnimate, {
          x: x / 4,
          y: -y / 4,
          duration: 0.5,
          ease: "power1.out"
        });
      }
    });

    // Обработчик ухода мыши с окна для сброса анимации
    document.addEventListener('mouseleave', () => {
      gsap.to(card, { rotationX: 0, rotationY: 0, duration: 0.5, ease: "power1.out" });
      
      if (elementsToAnimate.length > 0) {
        gsap.to(elementsToAnimate, { x: 0, y: 0, duration: 0.5, ease: "power1.out" });
      }
    });
  }
</script>