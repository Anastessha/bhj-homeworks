'use strict'

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

taskInput.addEventListener('keyup', (event) => {
    event.preventDefault();
    if (event.key === 'Enter' && taskInput.value != '') {
        taskInput.value = taskInput.value;
        add(taskInput.value);
    }
})

taskAdd.addEventListener('click', (event) => {
    event.preventDefault();
    if (taskInput.value != '') {
        taskInput.value = taskInput.value;
        add(taskInput.value);
    }
})
