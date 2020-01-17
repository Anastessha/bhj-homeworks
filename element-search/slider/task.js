'use strict'

let next = document.querySelector('.slider__arrow_next');
let prev = document.querySelector('.slider__arrow_prev');
let slides = Array.from(document.querySelectorAll('.slider__item'));

let count = 0;

function right() {
	
	if(count >= 0) {

		slides[count].classList.remove('slider__item_active');

        if(count === slides.length - 1) {
            slides[4].classList.remove('slider__item_active');
            count = 0;
            slides[count].classList.add('slider__item_active');

        } else {
            count += 1;
            slides[count].classList.add('slider__item_active');
            let num = count - 1;
            slides[num].classList.remove('slider__item_active');
        }
    }
}

function left() {
	
	if (count === 0) {
		slides[count].classList.remove('slider__item_active');
		count = 4;
		slides[count].classList.add('slider__item_active');

	} else {
		count -= 1;
		slides[count].classList.add('slider__item_active');
		let num = count + 1;
		slides[num].classList.remove('slider__item_active');
	}
}

next.onclick = right;
prev.onclick = left;
