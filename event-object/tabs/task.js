document.addEventListener('DOMContentLoaded', function() {
    
    const tabContainers = document.querySelectorAll('.tabs');

    
    tabContainers.forEach(function(container) {
        
        const tabNavigation = container.querySelector('.tab__navigation');
        const tabs = tabNavigation.querySelectorAll('.tab');
        const tabContents = container.querySelectorAll('.tab__content');

        
        tabs.forEach(function(tab, index) {
            tab.addEventListener('click', function() {
                
                tabs.forEach(tab => tab.classList.remove('tab_active'));
                tabContents.forEach(content => content.classList.remove('tab__content_active'));

                
                tab.classList.add('tab_active');
                tabContents[index].classList.add('tab__content_active');
            });
        });
    });
});
