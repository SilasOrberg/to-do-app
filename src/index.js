import {loadFront} from './front.js';
import {loadCompleted} from './completed.js';
import {loadProjects} from './projects.js';

loadFront();

document.getElementById('completed').addEventListener('click', loadCompleted)
document.getElementById('projects').addEventListener('click', loadProjects)
document.getElementById('today').addEventListener('click', loadFront)

todaysTasks = []

// Should create new to-dos when called. 
const taskFactory = (description, dueDate) => {
    // Function edit goes here
    // Function to delete goes here
    return {description, dueDate}
} 

// Releases function to create form
document.querySelector('body').addEventListener('click', showForm )