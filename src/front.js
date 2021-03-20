const loadFront = () => {
    document.getElementById('main-field').innerHTML = 
        `<p class="mainfield-header">Today's Tasks</p>
        <div id="new-task">
            <i class="fas fa-plus"></i> Add new task
        </div>`;
    // document.getElementById('new-task').innerHTML = 
    //     `<i class="fas fa-plus"></i> Add new task`;
}

const showForm = () => {
    document.getElementById('new-task').innerHTML = 
    `<input type="text" id="description-input">
     <button id="add-task-button">Add Task</button>
     <button id="cancel-add-task-button">Cancel</button>`
}

export {
    loadFront, showForm
}