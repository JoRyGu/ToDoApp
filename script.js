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
    console.log(listElement.firstChild);
    listElement.firstChild.focus();
    addTaskButton.innerText = 'Add another task';
    taskBox = document.querySelectorAll('.task-box');
});

list.addEventListener('keypress', e => {
    let key = e.keyCode;
    if (key === 13) {
        let text = e.target.value;
        let listElement = e.target.parentNode;
        listElement.removeChild(e.target);
        let p = document.createElement('p');
        p.innerText = text;
        p.setAttribute('class', 'finished-task');
        listElement.prepend(p);
    }
})

