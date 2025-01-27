// Select DOM elements
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const clearCompletedBtn = document.getElementById("clearCompletedBtn");
const clearAllBtn = document.getElementById("clearAllBtn"); // **New**

let tasks = [];

// Function to add a new task
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        tasks.push({ text: taskText, completed: false }); // Ensure 'completed' property is initialized
        taskInput.value = "";
        displayTasks();
    }
}

// Function to display all tasks
function displayTasks() {
    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        
        // Create checkbox for task completion
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.id = `task-${index}`;
        checkbox.checked = task.completed;
        checkbox.addEventListener("change", () => toggleTask(index));
        
        // Create label for the task
        const label = document.createElement("label");
        label.htmlFor = `task-${index}`;
        label.textContent = task.text;
        
        // Append checkbox and label to the list item
        li.appendChild(checkbox);
        li.appendChild(label);
        
        // Optionally, you can add styling for completed tasks
        if (task.completed) {
            label.style.textDecoration = "line-through";
        }
        
        taskList.appendChild(li);
    });
}

// Function to toggle the completion status of a task
function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    displayTasks();
}

// Function to clear completed tasks
function clearCompletedTasks() {
    tasks = tasks.filter(task => !task.completed);
    displayTasks();
}

// **New Function:** Function to clear all tasks
function clearAllTasks() {
    // Confirm with the user before clearing all tasks
    const confirmClear = confirm("Are you sure you want to clear all tasks?");
    if (confirmClear) {
        tasks = []; // Empty the tasks array
        displayTasks();
    }
}

// Event listeners
addTaskBtn.addEventListener("click", addTask);
clearCompletedBtn.addEventListener("click", clearCompletedTasks);
clearAllBtn.addEventListener("click", clearAllTasks); // **New**

/* Optional: Add event listener for pressing 'Enter' key to add task
taskInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});
*/

// Initial display
displayTasks();
