document.addEventListener('DOMContentLoaded', function() {
  const book = document.getElementById('book');
  const fontSizeControls = document.querySelectorAll('.font-size');

  
  function updateBookFontSize(size) {
    
    book.classList.remove('book_fs-small', 'book_fs-big');
    
    
    if (size === 'small') {
      book.classList.add('book_fs-small');
    } else if (size === 'big') {
      book.classList.add('book_fs-big');
    }
    
    
    fontSizeControls.forEach(control => {
      if (control.dataset.size === size) {
        control.classList.add('font-size_active');
      } else {
        control.classList.remove('font-size_active');
      }
    });
  }

  
  fontSizeControls.forEach(control => {
    control.addEventListener('click', function(event) {
      event.preventDefault(); 
      
      const size = this.dataset.size; 
      updateBookFontSize(size);
    });
  });

  
  fontSizeControls.forEach(control => {
    if (control.classList.contains('font-size_active')) {
      const size = control.dataset.size || ''; 
      updateBookFontSize(size);
    }
  });
});
