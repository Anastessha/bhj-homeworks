'use strict'

let taskControl = document.querySelector('.tasks__control')
let taskInput = document.getElementById('task__input');
let taskAdd = document.getElementById('tasks__add');
let taskList = document.getElementById('tasks__list');

function add () {
    
    taskList.insertAdjacentHTML('afterbegin', `
        <div class= "task">
            <div class="task__title">${taskInput.value}</div>
            <a href="#" class="task__remove">&times;</a>
        </div>
        `);
    taskList.querySelector('.task__remove').onclick = function name() {
        this.closest('.task').remove()
    }
    taskInput.value = '';
}

taskControl.addEventListener('keydown', (event) => {

    if (event.key === 'Enter' && taskInput.value) {
        event.preventDefault();
        add();
    }
})

taskAdd.addEventListener('click', (event) => {
    if (taskInput.value) {
        event.preventDefault();
        add();
    }
})