// create taskmanager class
class TaskManager {
  constructor(currentId = 0) {
    this.tasks = [];
    this.currentID = currentId;
  }
  // method addTask
  addTask(name, description, assignedTo, dueDate, status, id) {
    const task = {
      name: name,
      description: description,
      assignedTo: assignedTo,
      dueDate: dueDate,
      status: "TODO",
      id: this.currentID++,
    };
    // push to array
    this.tasks.push(task);
  }
}
