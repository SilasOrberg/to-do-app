let completedTasks = [];

const loadCompleted = () => {
    document.getElementById('main-field').innerHTML = 
       `<div id="page-header"><p class="mainfield-header">Completed Tasks</p></div>
        <div id="completed-time-stamps-container">
            <button id="time-stamp-today" class="time-stamp">Today</button>
            <button id="time-stamp-week" class="time-stamp">7 days</button>
            <button id="time-stamp-month" class="time-stamp">30 days</button>
            <button id="time-stamp-year" class="time-stamp">One year</button>
            <button id="time-stamp-all-time" class="time-stamp">All time</button>
        </div>
        <div id="task-handler"></div>`
}

const displayCompletedTasksAllTime = () => {
    document.getElementById('task-handler').innerHTML = '';
    for (let i = 0; i < completedTasks.length; i++) {
        document.getElementById('task-handler').innerHTML += `<div id=${i} class="task-displayed">
                                                                <p id="description">${i+1}. ${completedTasks[i].description}</p>
                                                              </div>`
    }
};

const makeActiveButtonBlue = (period) => {
    document.getElementById(`time-stamp-${period}`).style.backgroundColor = '#9edff0';
}

const makeInactiveButtonsGrey = () => {
    let buttons = document.getElementsByClassName("time-stamp");
        for(let i = 0; i < buttons.length; i++) {
            buttons[i].style.backgroundColor =  '#f7f5f5';
        }
}

export {
    loadCompleted, completedTasks, displayCompletedTasksAllTime, makeActiveButtonBlue, makeInactiveButtonsGrey
}