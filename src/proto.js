/*
class Project {
    // creates an object that manages a number of tasks assigned to it
}
class Task {
    // creates a object that manages a number of properties:
        task title
        task description
        task due date
        task priority level
    // add id's for all object properties to use in DOM module
}
const taskNotes = () => {
    // functionality for user input notes.
        // limit to 280 characters
}
const taskChecklist = () => {
    // functionality for multiple user input sub-tasks    
}
const taskArray = []

// for tasks with notes:
{
    title: "...",
    description: "...",
    dueDate: "../../....",
    priority: "...",
    notes: "........."
}

// for tasks with checklists:
{
    title: "...",
    description: "...", // optional, default to none
    dueDate: "../../....",
    priority: "...",
    checklist: ["...", "...", "...", "..."]
}

// projects 
{
    title: "...",
    description: "..." // optional, default to none
    taskArray: [{...},{...},{...},{...}]
}
/* class Project {
    constructor(title,description,isDefault) {
        this.title = title; //70 characters
        this.description = description; //280 characters
        this.isDefault = isDefault; // boolean value
        this.taskList = [];
    }
    // adds a new task to current project
    addTaskToProject(task,project) {
        project.taskList.push(task);
    }
} */


// DOM manipulation to include
view all projects on one page
    click project to view list of tasks
view all todo's in each project
    include title and due date
    change color of title based on priority level
expand todo on click
    show details
    allow editing
delete a todo
delete a project

*/