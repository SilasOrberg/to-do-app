import {loadFront, showForm} from './front.js';
import {loadCompleted} from './completed.js';
import {loadProjects} from './projects.js';

loadFront();

document.getElementById('completed').addEventListener('click', loadCompleted)
document.getElementById('projects').addEventListener('click', loadProjects)
document.getElementById('today').addEventListener('click', loadFront)

// todaysTasks = []

// Should create new to-dos when called. 
const taskFactory = (description, dueDate) => {
    // Function edit goes here
    // Function to delete goes here
    return {description, dueDate}
} 

// Activate showForm function upon click on new task
document.querySelector('body').addEventListener('click', event => {
    if (event.target.matches('#new-task')) {
        showForm();
    }
});

// Activate function upon click on add task
document.querySelector('body').addEventListener('click', event => {
    if (event.target.matches('#new-task')) {
        showForm();
    }
});