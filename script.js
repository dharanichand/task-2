const addBtn = document.getElementById('add-btn');
const taskInput = document.getElementById('new-task');
const taskList = document.getElementById('task-list');

addBtn.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  if (taskText === '') return;

  const li = document.createElement('li');
  li.textContent = taskText;

  const actions = document.createElement('div');
  actions.classList.add('actions');

  const completeBtn = document.createElement('button');
  completeBtn.textContent = '✔';
  completeBtn.title = 'Mark Complete';
  completeBtn.addEventListener('click', () => {
    li.classList.toggle('completed');
  });

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = '✖';
  deleteBtn.title = 'Delete Task';
  deleteBtn.addEventListener('click', () => {
    li.remove();
  });

  actions.appendChild(completeBtn);
  actions.appendChild(deleteBtn);

  li.appendChild(actions);
  taskList.appendChild(li);

  taskInput.value = '';
  taskInput.focus();
});

taskInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    addBtn.click();
  }
});
