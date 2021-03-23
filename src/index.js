import {displayTasks, createTask, loadFrontPageContent, showAddTask,
        showForm, deleteTask, completeTask, showEditField, saveEdit} from './front.js';
import {displayCompletedTasksAllTime, loadCompleted, makeActiveButtonBlue,
        makeInactiveButtonsGrey} from './completed.js';
import {createProject, showAddProject, showProjectForm, displayProjects, showProjectPage, projects, createProjectArray} from './projects.js';

loadFrontPageContent();

// Loads completed tasks content
document.getElementById('completed').addEventListener('click', loadCompleted)

// Loads Today's tasks elements
document.getElementById('today').addEventListener('click', () => {
    loadFrontPageContent();
    displayTasks();
})

// Activate showForm function upon click on new task
document.querySelector('body').addEventListener('click', event => {
    if (event.target.matches('#new-task')) {
        showForm();
    }
});

// Activate function upon click on add task
document.querySelector('body').addEventListener('click', event => {
    if (event.target.matches('#add-task-button')) {
        createTask();
        showAddTask();
        displayTasks();
    }
});

// Cancels task creation
document.querySelector('body').addEventListener('click', event => {
    if (event.target.matches('#cancel-add-task-button')) {
        showAddTask();
    }
});

// Deletes task
document.querySelector('body').addEventListener('click', event => {
    if (event.target.matches('#delete-task')) {
        deleteTask();
        displayTasks();
    }
});

// Completes task. Thereafter deletes from today's tasks and from current display.
document.querySelector('body').addEventListener('click', event => {
    if (event.target.matches('#complete-task')) {
        completeTask();
        deleteTask();
        displayTasks();
    }
});

// Shows edit field
document.querySelector('body').addEventListener('click', event => {
    if (event.target.matches('#edit-task')) {
        showEditField();
    }
});

// Cancels edit
document.querySelector('body').addEventListener('click', event => {
    if (event.target.matches('#cancel-edit')) {
        displayTasks();
    }
});

// Saves edit
document.querySelector('body').addEventListener('click', event => {
    if (event.target.matches('#save-edit')) {
        saveEdit();
        displayTasks();
    }
});

// COMPLETED TASKS

// Displays completed tasks all-time
document.querySelector('body').addEventListener('click', event => {
    if (event.target.matches('#time-stamp-all-time')) {
        makeInactiveButtonsGrey();
        makeActiveButtonBlue('all-time');
        displayCompletedTasksAllTime();
    }
});

// Displays completed tasks today
document.querySelector('body').addEventListener('click', event => {
    if (event.target.matches('#time-stamp-today')) {
        makeInactiveButtonsGrey();
        makeActiveButtonBlue('today');
    }
});

// Displays completed tasks week
document.querySelector('body').addEventListener('click', event => {
    if (event.target.matches('#time-stamp-week')) {
        makeInactiveButtonsGrey();
        makeActiveButtonBlue('week');
    }
});

// Displays completed tasks month
document.querySelector('body').addEventListener('click', event => {
    if (event.target.matches('#time-stamp-month')) {
        makeInactiveButtonsGrey();
        makeActiveButtonBlue('month');
    }
});

// Displays completed tasks year
document.querySelector('body').addEventListener('click', event => {
    if (event.target.matches('#time-stamp-year')) {
        makeInactiveButtonsGrey();
        makeActiveButtonBlue('year');
    }
});

// PROJECTS

// Shows form to add new project
document.querySelector('body').addEventListener('click', event => {
    if (event.target.matches('#new-project')) {
        showProjectForm();
    }
});

// Creates project. Adds project to project array, resets add project and displays projects
document.querySelector('body').addEventListener('click', event => {
    if (event.target.matches('#add-project-button') || event.target.matches('#project-check')) {
        createProject();
        showAddProject();
        displayProjects();
        setProjectLoaderListeners();
        createProjectArray();
    }
});

// Cancels project creation
document.querySelector('body').addEventListener('click', event => {
    if (event.target.matches('#cancel-add-project-button') || event.target.matches('#project-X')) {
        showAddProject();
    }
});

// Shows project page when project is clicked
const setProjectLoaderListeners = () => {
    for (let i = 0; i < projects.length; i++) {
        document.querySelector('body').addEventListener('click', event => {
            if (event.target.matches(`#project-${i}`)) {
                showProjectPage();
            }
        });
    }
}