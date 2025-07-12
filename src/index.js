import './tasks.js'
import './styles.css'
import {Project, projectArray} from './project.js'

let defaultProject = new Project("Household Tasks", "Daily and weekly chore list");

// handle form submission
document.getElementById('createTask').addEventListener('click', (event) => {
    event.preventDefault(); //  prevent form defaults
    defaultProject.addTask(); // defaultProject depends on current project
    document.querySelector('.newTaskForm').classList.add('hidden');
})
document.getElementById('createProject').addEventListener('click', (event) => {
    event.preventDefault(); //  prevent form defaults
    let projectName = document.getElementById('projectName').value;
    let projectDesc = document.getElementById('projectDesc').value;
    let newProject = new Project(projectName, projectDesc);
    projectArray.push(newProject);
    document.querySelector('.newProjectForm').classList.add('hidden');
})

// un-hide forms
document.getElementById('showForm').addEventListener('click', () => {
    document.querySelector('.newTaskForm').classList.remove('hidden');
})
document.getElementById('showProjectForm').addEventListener('click', () => {
    document.querySelector('.newProjectForm').classList.remove('hidden');
})