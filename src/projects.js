let projects = [];

// Shows form to add new tasks
const showProjectForm = () => {
    document.getElementById('new-project').innerHTML = 
    `<div id="project-buttons-container">
     <input type="text" id="description-input-project">
     <button class="add-button" id="add-project-button"><i id="project-check" class="fas fa-check"></i></button>
     <button class="cancel-button" id="cancel-add-project-button"><i id="project-X" class="fas fa-times"></i></button>
     </div>`
}

// Constructor to create new projects
function Project (description) {
    this.description = description;
}

// Adds project to projects array
const createProject = () => {
    const newProject = new Project (document.getElementById('description-input-project').value);
    projects.push(newProject);
}

// Shows add-task-field again
const showAddProject = () => {
    document.getElementById('new-project').innerHTML = 
    `<i class="fas fa-plus"></i> New Project`
}

// Function to populate display from projects Array
const displayProjects = () => {
    document.getElementById('project-display').innerHTML = '';
    for (let i = 0; i < projects.length; i++) {
        document.getElementById('project-display').innerHTML += 
            `<div value=${i} id='project-${i}' class="single-project-header">
                <i class="fas fa-columns"></i> ${projects[i].description}
            </div>`
    }
};

// Function to display project page
const showProjectPage = () => {
    document.getElementById('main-field').innerHTML = 
       `<p class="mainfield-header">${projects[event.target.closest('div').getAttribute('value')].description}</p>
        <div id="add-task-field"><div id="new-task"><i class="fas fa-plus"></i> Add new task</div></div>`;
}

// Every time a new project is created, a new array to store tasks has to be created. How to do that?

const createProjectArray = () => {
    let newProjectArray = [];
    newProjectArray.push('1');
    console.log(newProjectArray);
};

// Name array based on name of project


export {
    showProjectForm, createProject, showAddProject, displayProjects, showProjectPage, projects, createProjectArray, 
}
