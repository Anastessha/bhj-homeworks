'use strict'

let tooltip = document.createElement('div');
tooltip.setAttribute('class', 'tooltip');
document.body.appendChild(tooltip);

document.body.addEventListener('click', (event) => {
    let target = event.target;
    
    if (target.className != 'has-tooltip') return;
    
    event.preventDefault();
    
    tooltip.innerText = target.getAttribute('title');
    
    tooltip.classList.toggle('tooltip_active');
    
    let place = target.getBoundingClientRect();
    tooltip.style.left = place.left + "px";
    tooltip.style.top = place.top + 20 + "px";
    
    target.addEventListener('blur', () => {
        tooltip.classList.remove('tooltip_active');
    });
});