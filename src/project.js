import {Task} from './tasks.js';

export let projectArray = [];

export class Project {
    constructor(title,desc) {
        this.title = title;
        this.desc = desc;
        this.taskArray = [];
    }
    addTask() {
    // get value from input
    let titleInput = document.getElementById('taskName').value;
    let descInput = document.getElementById('taskDesc').value;
    let dueDateInput = document.getElementById('dueDate').value;
    let priorityInput = document.getElementById('prioritySelect').value;
    let notes = document.getElementById('hasNotes').checked
    let checklist = document.getElementById('hasCheckList').checked
    // create task
    let task = new Task(titleInput,descInput,dueDateInput,priorityInput,notes,checklist); // init new task object
    task.addTaskIDs(titleInput); // set id values in object
    this.taskArray.push(task); //  add current task to array
    console.table(this.taskArray)
    }
    removeTask() {
        // wip
    }
}

/* 
above houseDuties variable should be removed.
    - on load, project creation form shows
    - input form this form is used to create the default project object
    - add project to project array
    - if all projects are removed, project creation form shows
add logic to determine the current project, save as currentProject variable 
*/