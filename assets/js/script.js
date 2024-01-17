
let tasks = [
    { id: 1, description: "Estudiar", completed: false },
    { id: 2, description: "Repasar", completed: false },
    { id: 3, description: "Investigar", completed: false }
  ];
  

  function addTask(description) {
    const newTask = {
      id: tasks.length + 1,
      description: description,
      completed: false
    };
    tasks.push(newTask);
    updateTasksList();
  }

  function deleteTask(taskId) {
    tasks = tasks.filter(task => task.id !== taskId);
    updateTasksList();
  }
  

  function toggleTaskCompleted(taskId) {
    const task = tasks.find(task => task.id === taskId);
    task.completed = !task.completed;
    updateTasksList();
  }
  

  function updateTasksList() {
    const tasksListElement = document.getElementById('tasksList');
    tasksListElement.innerHTML = '';
    tasks.forEach(task => {
      const taskElement = document.createElement('li');
      taskElement.textContent = task.description;
      if (task.completed) {
        taskElement.style.textDecoration = 'line-through';
      }
      tasksListElement.appendChild(taskElement);

      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.onclick = () => deleteTask(task.id);
      taskElement.appendChild(deleteButton);
      

      const toggleButton = document.createElement('input');
      toggleButton.setAttribute('type', 'checkbox');
      toggleButton.checked = task.completed;
      toggleButton.onchange = () => toggleTaskCompleted(task.id);
      taskElement.appendChild(toggleButton);
    });
    

    document.getElementById('totalTasks').textContent = tasks.length;
    document.getElementById('completedTasks').textContent = tasks.filter(task => task.completed).length;
  }

  updateTasksList();
  

  document.getElementById('addTaskForm').onsubmit = function(event) {
    event.preventDefault();
    const taskDescriptionInput = document.getElementById('taskDescription');
    addTask(taskDescriptionInput.value);
    taskDescriptionInput.value = ''; 
  };
  

  updateTasksList();
  