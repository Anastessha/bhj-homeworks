'use strict'

let rotatorCase = document.querySelectorAll('.rotator__case');
let num = 0;

function changes() {
    rotatorCase[num].classList.remove('rotator__case_active');           
    num = (num === rotatorCase.length - 1) ? 0 : num + 1;
    rotatorCase[num].classList.add('rotator__case_active');
};

setInterval(changes, 1000);
