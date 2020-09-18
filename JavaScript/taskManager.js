// create task HTML
const createTaskHtml = (name, description, assignedTo, dueDate, status) => `
<li class="list-group-item" id="listItem">
    <div class="d-flex w-100 mt-2 justify-content-between align-items-center">
        <h5>${name}</h5>
        <span class="badge badge-danger">${status}</span>
    </div>
    <div class="d-flex w-100 mb-3 justify-content-between">
        <small>Assigned To: ${assignedTo}</small>
        <small>Due: ${dueDate}</small>
    </div>
    <p>${description}</p>
</li>
<button type="button class="done-button> Mark As Done </button>
`;

// create taskmanager class
class TaskManager {
  constructor(currentId = 0) {
    this.tasks = [];
    this.currentId = currentId;
  }
  // method addTask
  addTask(name, description, assignedTo, dueDate, status, id) {
    const task = {
      name: name,
      description: description,
      assignedTo: assignedTo,
      dueDate: dueDate,
      status: "TODO",
      id: this.currentId++,
    };
    // push to array
    this.tasks.push(task);
  }
  // method render
  render() {
    const tasksHtmlList = [];
    // loop the current task
    for (let i = 0; i < this.tasks.length; i++) {
      const currentTask = this.tasks[i];
      // date variable
      const date = new Date(currentTask.dueDate);
      // formatted date variable in string
      const formattedDate =
        date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();
      // HTML variable
      const taskHtml = createTaskHtml(
        currentTask.name,
        currentTask.description,
        currentTask.assignedTo,
        formattedDate,
        currentTask.status
      );
      // push task into array
      tasksHtmlList.push(taskHtml);
    }
    // variable to join tasks from array
    const tasksHtml = tasksHtmlList.join("\n");
    // select task element
    document.querySelector("#tasksList").innerHTML = tasksHtml;
  }
}
