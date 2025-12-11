document.addEventListener('DOMContentLoaded', function() {
  const reveals = document.querySelectorAll('.reveal');


  function checkReveal() {
    const windowHeight = window.innerHeight;


    reveals.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const elementVisible = 150; // Отступ от верха экрана (в пикселях)


      if (elementTop < windowHeight - elementVisible) {
        element.classList.add('reveal_active');
      } else {
        element.classList.remove('reveal_active');
      }
    });
  }

  // Вызываем проверку при загрузке, прокрутке и изменении размера окна
  window.addEventListener('scroll', checkReveal);
  window.addEventListener('resize', checkReveal);
  checkReveal();
});
