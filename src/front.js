import {completedTasks} from './completed.js';

let todaysTasks = [];

let frontPageContent = `<div id="page-header"><p class="mainfield-header">Today's Tasks</p></div>
                        <div id="task-handler"></div>
                        <div id="add-task-field"><div id="new-task"><i class="fas fa-plus"></i> Add new task</div></div>`

const loadFrontPageContent = () => {
    document.getElementById('main-field').innerHTML = frontPageContent;
}

// Shows form to add new tasks
const showForm = () => {
    document.getElementById('add-task-field').innerHTML = 
    `<input class="input" type="text" id="description-input">
     <button class="add-button" id="add-task-button">Add Task</button>
     <button class="cancel-button" id="cancel-add-task-button">Cancel</button>`
}

// Constructor to create new task objects
function Task (description) {
    this.description = description;
}

// Adds task to todaysTasks
const createTask = () => {
    const newTask = new Task (document.getElementById('description-input').value);
    todaysTasks.push(newTask)
}

// Shows add-task-field again
const showAddTask = () => {
    document.getElementById('add-task-field').innerHTML = 
    `<div id="add-task-field"><div id="new-task"><i class="fas fa-plus"></i> Add new task</div></div>`
}

// Function to populate display from Array 
const displayTasks = () => {
    document.getElementById('task-handler').innerHTML = '';
    for (let i = 0; i < todaysTasks.length; i++) {
        document.getElementById('task-handler').innerHTML += `<div id=${i} class="task-displayed">
                                                                <p id="description">${todaysTasks[i].description}</p>
                                                                <button id="complete-task">Complete</button>
                                                                <button id="edit-task">Edit</button>
                                                                <button id="delete-task">Delete</button>
                                                              </div>`
    }
};

// Deletes task. Each items from todaysTasks is assigned a number through its parent div. 
const deleteTask = () => {
    todaysTasks.pop(event.target.closest('div').getAttribute('id'))
}

// Pushes task to completedTasks array
const completeTask = () => {
    completedTasks.push(todaysTasks[event.target.closest('div').getAttribute('id')]);
}

// Edits task. This one needs to show the existing text in the input before making the edit. 
const showEditField = () => {
    event.target.closest('div').innerHTML = 
    `<input type="text" id="description-input" value='${todaysTasks[event.target.closest('div').getAttribute('id')].description}'>
     <button id="save-edit">Save</button>
     <button id="cancel-edit">Cancel</button>`
}

// Saves edits
const saveEdit = () => {
    todaysTasks[event.target.closest('div').getAttribute('id')].description = 
    document.getElementById('description-input').value;
}

export {
    loadFrontPageContent, showForm, createTask, showAddTask, displayTasks, deleteTask, completeTask, showEditField, saveEdit
}
