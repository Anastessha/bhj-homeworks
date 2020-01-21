'use strict'

const botMsg = ['Зачем сюда писать?',
'Никого нет, неужели не ясно?',
'Вот ведь непонятливые',
'Повезло же родиться таким недалеким..'];

let inputMessage = document.getElementById('chat-widget__input');
let chatMessages = document.querySelector('.chat-widget__messages');

let chatWidget = document.querySelector('.chat-widget');

chatWidget.addEventListener('click', function() {
  chatWidget.classList.add('chat-widget_active');
});

let date = new Date();

inputMessage.addEventListener('keydown', (event) => {

	if (event.code === "Enter" && inputMessage.value != '') {
		let i = Math.floor(Math.random() * botMsg.length);
		chatMessages.innerHTML += `
			<div class="message message_client">
				<div class="message__time">${date.getHours()}:${date.getMinutes()}</div>
				<div class="message__text">${inputMessage.value}</div>
			</div>  
			<div class="message">
				<div class="message__time">${date.getHours()}:${date.getMinutes()}</div>
				<div class="message__text">${botMsg[i]}</div>
			</div>`;
		inputMessage.value = '';
	}
});