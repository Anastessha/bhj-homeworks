'use strict'

let count = document.getElementById('timer');

const counter = function (){
	
	count.textContent -= 1;
	
	if(count.textContent === '0'){
		clearInterval(time);
		setTimeout(() => {alert('Вы победили в конкурсе!');
        }, 100);
	}
}

let time = setInterval(counter, 1000); 


