import '../style.css';

// import * as TODO from './app.js';
// import Task from './task.js';
import todos from './tasks.js';

let loadTaskList = () => {
  todos.forEach((task) => {
    console.log(task);
  });
};

window.onload = () => {
  const todoList = document.getElementById('todoList');
  const listItem = document.createElement('li');

  listItem.classList.add('list-item');
  // todoList.appendChild(listItem);

  todoList.appendChild(loadTaskList());
}


