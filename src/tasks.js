export class Task {
    constructor(title,description,dueDate,priority,notes,checklist) {
        this.title = title; //  max 70 characters
        this.description = description; //  max 140 characters
        this.dueDate = dueDate; //  formatted mm-dd-yyyy
        this.priority = priority; //  scale {low, medium, high, asap}
        this.taskID = '';  //  generate with addTaskIDs()
        this.hasCheckList = checklist;  //  change to true when method called
        this.hasNotes = notes;  //  change to true when method called */
    }
    addTaskIDs(title) {
        // create storage code for unique IDs
        let lower = title.toLowerCase().split(' ');
        this.taskID = lower.map(word => word[0]).join('');
        // add id's for all elements
        this.titleID = `${this.taskID}Header`;
        this.descID = `${this.taskID}Desc`;
        this.dueID = `${this.taskID}DueDate`;
        this.priorityID = `${this.taskID}Priority`;
    }
    toggleNotes() {
        if (this.hasNotes === false) {
            this.hasNotes = true;
        } else {
            this.hasNotes = false;
        }
    }
    toggleChecklist() {
        if (this.hasCheckList === false) {
            this.hasCheckList = true;
        } else {
            this.hasCheckList = false;
        }
    }
}
let taskArray = [];

function createNewTask() {
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
    taskArray.push(task); //  add current task to array
    console.table(taskArray)
}

// prevent default submit button behavior, create task
document.getElementById('createTask').addEventListener('click', function(event) {
    event.preventDefault();
    createNewTask();
})

// console testing