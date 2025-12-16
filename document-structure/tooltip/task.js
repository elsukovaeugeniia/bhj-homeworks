document.addEventListener('DOMContentLoaded', () => {
  const tooltip = Object.assign(document.createElement('div'), {
    className: 'tooltip'
  });
  document.body.append(tooltip);

  document.querySelectorAll('.has-tooltip').forEach(el => {
    el.addEventListener('click', e => {
      e.preventDefault();
      
      if (tooltip.textContent === el.title && tooltip.classList.contains('tooltip_active')) return;
      
      tooltip.textContent = el.title;
      const {top, left, width} = el.getBoundingClientRect();
      tooltip.style.cssText = `
        left: ${left + (width / 2) - (tooltip.offsetWidth / 2)}px;
        top: ${top + window.scrollY - tooltip.offsetHeight - 10}px;
      `;
      tooltip.classList.add('tooltip_active');
    });
  });

  
  document.addEventListener('click', e => 
    !e.target.closest('.has-tooltip') && tooltip.classList.remove('tooltip_active')
  );
  document.addEventListener('keydown', e =>
    e.key === 'Escape' && tooltip.classList.remove('tooltip_active')
  );
});
