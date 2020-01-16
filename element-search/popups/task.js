'use strict'

let modalMain = document.getElementById('modal_main');
modalMain.classList.add('modal_active');

let modalClose = document.getElementsByClassName('modal__close');

let successModal = document.getElementById('modal_success');
let successShow= document.getElementsByClassName('show-success');

for (let i = 0; i < modalClose.length; i++) {
    modalClose[i].onclick = function() {
        modal_main.className = 'modal';
        modal_success.className = 'modal';  
    }
}

for (let i = 0; i < modalClose.length; i++) {
    successShow[i].onclick = function() {
        modal_main.className = 'modal';
        modal_success.className = 'modal modal_active';
    }
}