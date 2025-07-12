// DOM display module
const displayTask = (taskArray) => {  // import task array
    for (let task of taskArray) {
        let taskDiv = document.createElement('div');
        taskDiv.id = `${task[title]}Card`; // set id equal to title of task object
        task.classList.add('task-card'); // add css styling
        let checkBox = document.createElement('input');
        checkBox.type = 'checkbox';
        let taskTitle = document.createElement('div');
        taskTitle.id =  task.titleID
    }
}