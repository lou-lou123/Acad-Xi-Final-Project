// create task HTML
const createTaskHtml = (name, description, assignedTo, dueDate, status, id) => {
  return `<li class="list-group-item" data-task-id=${id}>
    <div class="d-flex w-100 mt-2 justify-content-between align-items-center">
        <h5>${name}</h5>
        <span class="badge ${
          status === "TO DO" ? "badge-danger" : "badge-success"
        }">${status}</span>
    </div>
    <div class="d-flex w-100 mb-3 justify-content-between">
        <small>Assigned To: ${assignedTo}</small>
        <small>Due: ${dueDate}</small>
    </div>
    <p>${description}</p>
<button type="button" class="btn-outline-success done-button ${
    status === "TO DO" ? "visible" : "invisible"
  }"> Mark As Done </button>
<button type="button" class="btn-outline-danger delete-button"> Delete </button>
</li>
`;
};

// create taskmanager class
class TaskManager {
  constructor(currentId = 0) {
    this.tasks = [];
    this.currentId = currentId;
  }

  // method add new task
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

  // method delete task
  deleteTask(taskId) {
    const newTasks = [];
    // loop over tasks
    for (let i = 0; i < this.tasks.length; i++) {
      // get current task
      const task = this.tasks[i];
      // check if current task id is not the task id passed in
      if (task.id !== taskId) {
        // push task to the new array
        newTasks.push(task);
      }
    }
    // set current task to new array
    this.tasks = newTasks;
  }

  // method get task ids
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

  // method save tasks as JSON
  save() {
    // create a JSON string of the tasks and store in new variable
    const tasksJson = JSON.stringify(this.tasks);
    // store the JSON string in localStorage
    localStorage.setItem("tasks", tasksJson);
    // convert task id to string
    const currentId = String(this.currentId);
    //store task id in localStorage
    localStorage.setItem("currentId", currentId);
  }

  // method load tasks from JSON
  load() {
    // check if any tasks are stored in localStorage
    if (localStorage.getItem("tasks")) {
      // if tasks are found, store in new variable
      const tasksJson = localStorage.getItem("tasks");
      this.tasks = JSON.parse(tasksJson);
    }
    // check if any ids are stored in localStorage
    if (localStorage.getItem("currentId")) {
      // if ids are found, store in new variable
      const currentId = localStorage.getItem("currentId");
      this.currentId = Number(currentId);
    }
  }
}
