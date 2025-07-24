import "./tasks.js";
import "./styles.css";
import { Project, projectArray } from "./project.js";
import { Task } from "./tasks.js";

let defaultProject = [];

// handle form submission & hide forms
document.getElementById("createTask").addEventListener("click", (event) => {
  let taskForm = document.querySelector(".newTaskForm")
  event.preventDefault(); //  prevent form defaults
  createTask(); // create task object from inputs
  displayTasks(defaultProject); // render task elements to DOM
  taskForm.reset(); // clear form
  taskForm.classList.add("hidden"); // hide form
});
document.getElementById("createProject").addEventListener("click", (event) => {
  event.preventDefault(); //  prevent form defaults
  let projectName = document.getElementById("projectName").value;
  let projectDesc = document.getElementById("projectDesc").value;
  let newProject = new Project(projectName, projectDesc);
  projectArray.push(newProject);
  document.querySelector(".newProjectForm").classList.add("hidden");
});

// un-hide forms
document.getElementById("showForm").addEventListener("click", () => {
  document.querySelector(".newTaskForm").classList.remove("hidden");
});
document.getElementById("showProjectForm").addEventListener("click", () => {
  document.querySelector(".newProjectForm").classList.remove("hidden");
});

function createTask() {
    let taskName = document.getElementById("taskName").value;
    let taskDesc = document.getElementById("taskDesc").value;
    let taskDueDate = document.getElementById("dueDate").value;
    let priorityLevel = document.getElementById("prioritySelect").value;
    let hasChecklist = document.getElementById("hasCheckList").value;
    let hasNotes = document.getElementById("hasNotes").value;
    const newTask = new Task(taskName,taskDesc,taskDueDate,priorityLevel,hasChecklist,hasNotes);
    defaultProject.push(newTask);
}
const displayTasks = (taskArray) => {
    let taskModule = document.getElementById('taskModule');
    let taskContainer = document.getElementById('taskContainer');
    taskModule.appendChild(taskContainer);
    taskContainer.innerHTML = ``;
    // import task array
    for (let task of taskArray) {
        task.addTaskIDs(task.title);
      // create individual task container
        // use innerHTML to set all containers and ids
        // append to main task container
      let newTaskContainer = document.createElement('div');
      newTaskContainer.className = "task";
      newTaskContainer.id = `${task.titleID}`;
      newTaskContainer.innerHTML = `
        <div class="title" id="${task.titleID}Title">${task.title}</div>
        <div class="desc" id="${task.descID}Desc">${task.desc}</div>
        <div class="taskInfo">
            <div class="due" id="${task.dueID}Due">${task.dueDate}</div>
            <div class="priority" id="${task.priorityID}Priority">${task.priority}</div>
        </div>
      `;
      taskContainer.appendChild(newTaskContainer);
    }
  };