const fs = require("fs");
const path = require("path");
const readline = require("readline");

const DATA_FILE = path.join(__dirname, "todos.json");

// Initialize data file if it doesn't exist
if (!fs.existsSync(DATA_FILE)) {
    fs.writeFileSync(DATA_FILE, JSON.stringify([]));
}

// Function to load tasks from the file
function loadTasks() {
    const data = fs.readFileSync(DATA_FILE, "utf-8");
    return JSON.parse(data);
}

// Function to save tasks to the file
function saveTasks(tasks) {
    fs.writeFileSync(DATA_FILE, JSON.stringify(tasks, null, 2));
}

// CLI Interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Main Menu
function showMenu() {
    console.log("\n--- To-Do CLI Application ---");
    console.log("1. View Tasks");
    console.log("2. Add Task");
    console.log("3. Mark Task as Completed");
    console.log("4. Delete Task");
    console.log("5. Exit");
    rl.question("Choose an option: ", handleUserInput);
}

// Handle user input
function handleUserInput(option) {
    switch (option) {
        case "1":
            viewTasks();
            break;
        case "2":
            rl.question("Enter task description: ", addTask);
            break;
        case "3":
            rl.question("Enter task number to mark as completed: ", markTaskCompleted);
            break;
        case "4":
            rl.question("Enter task number to delete: ", deleteTask);
            break;
        case "5":
            console.log("Goodbye!");
            rl.close();
            break;
        default:
            console.log("Invalid option. Please try again.");
            showMenu();
    }
}

// View tasks
function viewTasks() {
    const tasks = loadTasks();
    if (tasks.length === 0) {
        console.log("\nNo tasks available.");
    } else {
        console.log("\n--- To-Do List ---");
        tasks.forEach((task, index) => {
            const status = task.completed ? "[✔]" : "[ ]";
            console.log(`${index + 1}. ${status} ${task.description}`);
        });
    }
    showMenu();
}

// Add a new task
function addTask(description) {
    const tasks = loadTasks();
    tasks.push({ description, completed: false });
    saveTasks(tasks);
    console.log("Task added successfully.");
    showMenu();
}

// Mark a task as completed
function markTaskCompleted(taskNumber) {
    const tasks = loadTasks();
    const index = parseInt(taskNumber, 10) - 1;

    if (index >= 0 && index < tasks.length) {
        tasks[index].completed = true;
        saveTasks(tasks);
        console.log("Task marked as completed.");
    } else {
        console.log("Invalid task number.");
    }
    showMenu();
}

// Delete a task
function deleteTask(taskNumber) {
    const tasks = loadTasks();
    const index = parseInt(taskNumber, 10) - 1;

    if (index >= 0 && index < tasks.length) {
        tasks.splice(index, 1);
        saveTasks(tasks);
        console.log("Task deleted successfully.");
    } else {
        console.log("Invalid task number.");
    }
    showMenu();
}

// Start the application
showMenu();
