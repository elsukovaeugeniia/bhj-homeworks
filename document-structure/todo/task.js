document.addEventListener('DOMContentLoaded', function() {
  const taskInput = document.getElementById('task__input');
  const addButton = document.getElementById('tasks__add');
  const tasksList = document.getElementById('tasks__list');

  
  function addTask() {
    const taskText = taskInput.value.trim();
    
   
    if (taskText === '') return;
    
    
    const task = document.createElement('div');
    task.className = 'task';
    
    
    const title = document.createElement('div');
    title.className = 'task__title';
    title.textContent = taskText;
    
    
    const removeBtn = document.createElement('a');
    removeBtn.className = 'task__remove';
    removeBtn.href = '#';
    removeBtn.textContent = '×';
    
    
    removeBtn.addEventListener('click', function(e) {
      e.preventDefault();
      task.remove();
    });
    
    
    task.append(title);
    task.append(removeBtn);
    
    
    tasksList.append(task);
    
    
    taskInput.value = '';
  }

  
  taskInput.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
      addTask();
    }
  });

  
  addButton.addEventListener('click', function(e) {
    e.preventDefault();
    addTask();
  });
});
