'use strict'

let ddLink = document.querySelectorAll('.dropdown__link');
let ddValue = document.querySelector('.dropdown__value');
let ddList = document.querySelector('.dropdown__list'); 

function activeStatus() {

    if (ddList.classList.contains('dropdown__list_active')){
        ddList.classList.remove('dropdown__list_active');
    } else {
        ddList.classList.add('dropdown__list_active');  
    }
}

ddValue.addEventListener('click', activeStatus);

for(let item of ddLink) {
    item.addEventListener('click', function(){
        if (ddList.classList.contains('dropdown__list_active')){
            event.preventDefault();
            document.querySelector('.dropdown__value').innerHTML = item.innerHTML;
        } 

        if(ddList.classList.contains('dropdown__list_active')){
            ddList.classList.remove('dropdown__list_active');
        } else {
            ddList.classList.add('dropdown__list_active'); 
        }
    })
}