function createTaskElement() {
    let li = document.createElement('li');
    li.setAttribute('class', 'task-box');
    let taskInput = document.createElement('input');
    taskInput.setAttribute('type', 'text');
    taskInput.setAttribute('id', 'add-task');
    taskInput.setAttribute('placeholder', 'Add a task...');
    li.appendChild(taskInput);
    let editButton = document.createElement('button');
    editButton.innerText = 'I';
    editButton.setAttribute('id', 'edit');
    li.appendChild(editButton);
    let deleteButton = document.createElement('button');
    deleteButton.innerText = 'X';
    deleteButton.setAttribute('id', 'delete');
    li.appendChild(deleteButton);
    return li;
}

const addTaskButton = document.getElementById('start');
const taskListContainer = document.getElementById('list');
let taskBox = document.querySelectorAll('.task-box');

addTaskButton.addEventListener('click', () => {
    let listElement = createTaskElement();
    taskListContainer.appendChild(listElement);
    addTaskButton.innerText = 'Add another task';
    taskBox = document.querySelectorAll('.task-box');
});

