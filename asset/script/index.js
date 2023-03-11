'use strict';

/*
    JavaScript basics
    Ayomide Boye-Ogundiya

    My To Do List

*/

const form = document.querySelector('form');
const taskList = document.querySelector('#task-list');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const newTask = document.querySelector('#new-task').value;

    if (newTask !== '') {
        addTask(newTask);
    }
    
    document.querySelector('#new-task').value = '';
});

function addTask(task) {
    const li = document.createElement('li');
    const span = document.createElement('span');
    span.textContent = task;
    const button = document.createElement('button');
    button.textContent = 'Delete';

    button.addEventListener('click', () => {
        li.remove();
    });

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
        span.classList.add('completed');
        } else {
        span.classList.remove('completed');
        }
    });

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(button);
    taskList.appendChild(li);
}
