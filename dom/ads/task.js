document.addEventListener('DOMContentLoaded', function() {
  const rotators = document.querySelectorAll('.rotator');

  rotators.forEach(rotator => {
    const cases = rotator.querySelectorAll('.rotator__case');
    let currentIndex = 0;

    function rotate() {
      
      cases[currentIndex].classList.remove('rotator__case_active');

      
      currentIndex = (currentIndex + 1) % cases.length;

      
      cases[currentIndex].classList.add('rotator__case_active');

      
      updateRotationSpeed();
    }

    function updateRotationSpeed() {
      const currentCase = cases[currentIndex];
      const defaultSpeed = 1000; 

      
      const newSpeed = currentCase.dataset.speed
        ? parseInt(currentCase.dataset.speed, 10)
        : defaultSpeed;

      
      clearInterval(rotator.rotationInterval);
      rotator.rotationInterval = setInterval(rotate, newSpeed);
    }

    
    rotator.rotationInterval = setInterval(rotate, 1000); 
    updateRotationSpeed();
  });
});
