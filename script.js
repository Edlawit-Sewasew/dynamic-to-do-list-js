document.addEventListener('DOMContentLoaded', function() {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    function addTask() {
        // Get and trim the input value
        const taskText = taskInput.value.trim();

        // Check if input is empty
        if (taskText === "") {
            alert("Please enter a task");
            return;
        }

        // Create a new list item
        const li = document.createElement('li');
        li.textContent = taskText; // set task text

        // Create a remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = "Remove";
        removeBtn.className = 'remove-btn';

        // Add event to remove the task when clicked
        removeBtn.addEventListener('click', function() {
            // Remove the li element from the taskList
            taskList.removeChild(li);
        });

        // Append remove button inside li
        li.appendChild(removeBtn);

        // Add li to the task list
        taskList.appendChild(li);

        // Clear the input field and focus it for convenience
        taskInput.value = "";
        taskInput.focus();
    }

    // Add task on button click
    addButton.addEventListener('click', addTask);

    // Add task on pressing Enter
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });