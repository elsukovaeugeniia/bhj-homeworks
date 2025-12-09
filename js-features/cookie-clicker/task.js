document.addEventListener('DOMContentLoaded', function() {
    
    const cookie = document.getElementById('cookie');
    const counter = document.getElementById('clicker__counter');
    
    
    const initialWidth = 200;
    const initialHeight = 200; 
    
    
    let isLarge = false; 
    
    
    cookie.addEventListener('click', function() {
        
        let currentCount = parseInt(counter.textContent);
        counter.textContent = currentCount + 1;
        
       
        if (isLarge) {
           
            cookie.style.width = `${initialWidth}px`;
            cookie.style.height = `${initialHeight}px`;
            isLarge = false;
        } else {
            
            const newWidth = initialWidth * 1.2;
            const newHeight = initialHeight * 1.2;
            cookie.style.width = `${newWidth}px`;
            cookie.style.height = `${newHeight}px`;
            isLarge = true;
        }
    });
});