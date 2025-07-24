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
class TaskChecklist extends Task {

}
class TaskNotes extends Task {

}