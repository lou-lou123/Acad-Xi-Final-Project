// create task HTML
const createTaskHtml = (name, description, assignedTo, dueDate, status, id) => {
return `<li class="list-group-item" data-task-id=${id}>
    <div class="d-flex w-100 mt-2 justify-content-between align-items-center">
        <h5>${name}</h5>
        <span class="badge ${status === "TO DO" ? "badge-danger" : "badge-success"}">${status}</span>
    </div>
    <div class="d-flex w-100 mb-3 justify-content-between">
        <small>Assigned To: ${assignedTo}</small>
        <small>Due: ${dueDate}</small>
    </div>
    <p>${description}</p>
<button type="button" class="done-button ${status === "TO DO" ? "visible" : "invisible"}"> Mark As Done </button>
</li>
`};

// create taskmanager class
class TaskManager {
  constructor(currentId = 0) {
    this.tasks = [];
    this.currentId = currentId;
  }
  // save method
  save() {
    const tasksJSON = JSON.stringify(this.tasks);
    localStorage.setItem("tasks", tasksJSON);
    const currentId = String(this.currentId);
    localStorage.setItem("currentId", currentId);
  };

  //load method
  load() {
    if (localStorage.getItem("tasks")) {
      const tasksJSON = localStorage.getItem("tasks");
      this.tasks = JSON.parse(tasksJSON);
    }
    if (localStorage.getItem("currentId")) {
      const currentId = localStorage.getItem("currentId");
      this.currentId = Number(currentId);
    }
  };
  // method addTask
  addTask(name, description, assignedTo, dueDate, status, id) {
    const task = {
      name: name,
      description: description,
      assignedTo: assignedTo,
      dueDate: dueDate,
      status: "TO DO",
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
        currentTask.status,
        currentTask.id
      );
      // push task into array
      tasksHtmlList.push(taskHtml);
    }
    // variable to join tasks from array
    const tasksHtml = tasksHtmlList.join("\n");
    // select task element
    document.querySelector("#tasksList").innerHTML = tasksHtml;
  }
  // method get task IDs
  getTaskById(taskId) {
    // variable to store found tasks
    let foundTask;
    // loop for this tasks array
    for (let j = 0; j < this.tasks.length; j++) {
      //current task in loop
      const task = this.tasks[j];
      if (task.id === taskId) {
        foundTask = task;
      }
    }
    return foundTask;
  }
 }