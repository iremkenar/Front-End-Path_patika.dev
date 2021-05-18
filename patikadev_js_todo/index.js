const addBtn = document.querySelector('#liveToastBtn');
const newTask = document.querySelector('#task');
const taskList = document.querySelector('#list');
const oldTask = taskList.querySelectorAll('li');

function addSpan(task) {
  const span = document.createElement('span');
  span.classList.add('close');
  span.innerHTML = 'x';
  task.appendChild(span);
}

function addClose(task) {
  task.forEach((task) => addSpan(task));
}

function addNewTask() {
  const taskInputValue = newTask.value;
  if (taskInputValue === '') {
    $('.error').toast('show');
  } else {
    $('.success').toast('show');
    const newTaskEl = document.createElement('li');
    localStorage.setItem('task', taskInputValue);
    newTaskEl.innerHTML = taskInputValue;
    taskList.appendChild(newTaskEl);
    addSpan(newTaskEl);
    newTask.value = '';
  }
}

function deleteTask(e) {
  if (e.target.tagName === 'LI') {
    e.target.classList.toggle('checked');
  } else if (e.target.tagName === 'SPAN') {
    e.target.parentElement.style.display = 'none';
  }
}

addBtn.addEventListener('click', addNewTask);
taskList.addEventListener('click', deleteTask);
addClose(oldTask);
