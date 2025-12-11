document.addEventListener('DOMContentLoaded', function() {
  const reveals = document.querySelectorAll('.reveal');


  function checkReveal() {
    const windowHeight = window.innerHeight;


    reveals.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const elementVisible = 150; 


      if (elementTop < windowHeight - elementVisible) {
        element.classList.add('reveal_active');
      } else {
        element.classList.remove('reveal_active');
      }
    });
  }

  
  window.addEventListener('scroll', checkReveal);
  window.addEventListener('resize', checkReveal);
  checkReveal();
});
