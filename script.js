// Attach Event Listeners:
document.addEventListener('DOMContentLoaded', () => {

  // Select DOM Elements:
  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  // Function to load tasks
  function loadTasks() {
    const storedTasks = localStorage.getItem('tasks'); // retrieves tasks from the local storage
    if (storedTasks) {
      const tasks = JSON.parse(storedTasks); // Parse JSON to array
      tasks.forEach((task) => addTaskToDOM(task)); // Add each task to the DOM
    }
  }

  // Function to add task to the DOM
  function addTaskToDOM(taskText) {
    const taskItem = document.createElement('li');
    taskItem.classList.add('task-item');
    taskItem.textContent = taskText;
    
    const removeBt = document.createElement('button');
    removeBt.textContent = "Remove";
    removeBt.className = "remove-btn";
    removeBt.addEventListener('click', () => {
      taskList.removeChild(taskItem);
      removeTaskFromLocalStorage(taskText); // Remove task from localStorage
    });

    taskItem.appendChild(removeBt);
    taskList.appendChild(taskItem);
  }

  // Function to remove task from Local Storage
  function removeTaskFromLocalStorage(taskText) {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const updatedTasks = tasks.filter((task) => task !== taskText); // Remove task from array
    localStorage.setItem('tasks', JSON.stringify(updatedTasks)); // Save updated array
  }

  // Function to add a task
  function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
      alert('Please enter a task');
      return;
    }

    // Add task to the DOM
    addTaskToDOM(taskText);

    // Save updated task list to Local Storage
    saveTask(taskText);

    // Clear the input field
    taskInput.value = "";
    taskInput.focus();
  }

  // Function to save tasks to Local Storage
  function saveTask(taskText) {
    const tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    tasks.push(taskText);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  // Load tasks when the page loads
  loadTasks();

  // Event listeners
  addButton.addEventListener('click', addTask);
  taskInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      addTask();
    }
  });

});