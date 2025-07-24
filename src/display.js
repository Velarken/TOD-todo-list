// DOM display module
const displayTasks = (taskArray) => {  // import task array
    for (let task of taskArray) {
        let taskDiv = document.createElement('div');
        taskDiv.id = `${task[title]}Card`; // set id equal to title of task object
        task.classList.add('task-card'); // add css styling
        let checkBox = document.createElement('input');
        checkBox.type = 'checkbox';
        let taskTitle = document.createElement('div');
        taskTitle.id =  task.titleID
        if (task.hasNotes) {
            let notesDiv = document.createElement('div');
            notesDiv.classList.add('taskNote')
        }else if (task.hasCheckList) {
            let checkDiv = document.createElement('div');
            checkDiv.classList.add('taskChecklist');
            let checklistItem = document.createElement('div');
            checklistItem.classList.add('checklistItem');
            checkDiv.appendChild(checklistItem);
            let taskCheck = document.createElement('input');
            taskCheck.type = 'checkbox';
            let taskCheckText = document.createElement('input');
            taskCheckText.type = 'text';
            checklistItem.appendChild(taskCheck);
            checklistItem.appendChild(taskCheckText);
        }
    }
}

/* 
IIFE Module that automatically runs
    - when task.hasNotes or task.hasChecklist is true:
        * auto display the related sections and its info
*/