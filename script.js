addButton = document.querySelector('#add-task');
taskList = document.querySelector('ul');

addButton.addEventListener('click', () => {
    let newTask = document.createElement('li');
    taskList.insertBefore(newTask, addButton);
    newTask.setAttribute('class', 'task-box');
    
});