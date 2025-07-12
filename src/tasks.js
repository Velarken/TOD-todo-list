export class Task {
    constructor(title,description,dueDate,priority) {
        this.title = title; //  max 70 characters
        this.description = description; //  max 140 characters
        this.dueDate = dueDate; //  formatted mm-dd-yyyy
        this.priority = priority; //  scale {low, medium, high, asap}
        this.taskID = '';  //  generate with addTaskIDs()
        this.hasCheckList = false;  //  change to true when method called
        this.hasNotes = false;  //  change to true when method called
        
    }
    addTaskIDs(title) {
        // create storage code for unique IDs
        let lower = title.toLowerCase().split(' ');
        this.taskID = lower.map(word => word[0]).join('');
        // add id's to all elements
        this.titleID = `${this.taskID}Header`;
        this.descID = `${this.taskID}Desc`;
        this.dueID = `${this.taskID}DueDate`;
        this.priorityID = `${this.taskID}Priority`   
    }
    addNotes() {
        this.hasNotes = true;
    }
    removeNotes() {
        this.hasNotes = false;
    }
    addCheckList() {
        this.hasCheckList = true;
    }
    removeCheckList() {
        this.hasCheckList = false;
    }
}
let taskArray = [];
function createNewTask() {
    // get value from input
    let titleInput = document.getElementById('taskName');
    let descInput = document.getElementById('taskDesc');
    let dueDateInput = document.getElementById('dueDate');
    let priorityInput = document.getElementById('prioritySelect');
    let titleValue = titleInput.value;
    let descValue = descInput.value;
    let dueDateValue = dueDateInput.value;
    let priorityValue = priorityInput.value;
    // create task
    let task = new Task(titleValue,descValue,dueDateValue,priorityValue);
    task.addTaskIDs(titleValue);
    taskArray.push(task);
    console.table(taskArray)
    // use input eles to add notes or checklist
    if (document.getElementById('hasCheckList').checked) {
        task.addCheckList();
    }
    if (document.getElementById('hasNotes').checked) {
        task.addNotes();
    }
/* 
**** CURRENTLY BUGGED: ****
> createCheckList and createNotes <

Only works to update previous task entered in browser, task will be added to array and show incorrect booleans until a new task is added using the submit button  


*/

}
// prevent default submit button behavior, create task
document.getElementById('createTask').addEventListener('click', function(event) {
    event.preventDefault();
    createNewTask();
})

// console testing
const newTask = new Task('wash all laundry','wash all clothes','today','urgent')
taskArray.push(newTask) //put task in array
newTask.addTaskIDs(taskArray[0].title) // use index to find object.title to make ids
console.table(taskArray[0])