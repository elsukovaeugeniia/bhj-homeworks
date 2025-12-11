document.addEventListener('DOMContentLoaded', function() {
  
  const rotators = document.querySelectorAll('.rotator');


  rotators.forEach(rotator => {
    
    const cases = rotator.querySelectorAll('.rotator__case');
    let currentIndex = 0;

    
    function rotate() {
      
      cases[currentIndex].classList.remove('rotator__case_active');


      
      currentIndex = (currentIndex + 1) % cases.length;


      
      cases[currentIndex].classList.add('rotator__case_active');
    }


    
    const defaultSpeed = 1000;
    let speed = defaultSpeed;


    
    if (cases[currentIndex] && cases[currentIndex].dataset.speed) {
      speed = parseInt(cases[currentIndex].dataset.speed, 10);
    }

   
    let intervalId = setInterval(rotate, speed);


    
    rotator.addEventListener('rotationSpeedUpdate', () => {
      clearInterval(intervalId);
      speed = cases[currentIndex].dataset.speed
        ? parseInt(cases[currentIndex].dataset.speed, 10)
        : defaultSpeed;
      intervalId = setInterval(rotate, speed);
    });

    
    rotator.rotationInterval = intervalId;
  });
});
