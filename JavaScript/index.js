// Initialize a new TaskManager with currentId set to 0
const taskManager = new TaskManager(0);

// Select the New Task Form
const formValidate = document.querySelector(".form-validate");

// variables for form fields
const formAssignee = document.querySelector("#assignee");
const formTaskDescription = document.querySelector("#taskDescription");
const formTaskName = document.querySelector("#taskName");
const formDueDate = document.querySelector("#dueDate");

// variables for object
let completedForm = { name: "", description: "", assignee: "" };

// event listener for click on submit button
formValidate.addEventListener("submit", (event) => {
  // Prevent default action
  event.preventDefault();

  // AssignedTo -> Not Empty and longer than 8 characters
  if (formAssignee.value.length >= 8) {
    formAssignee.classList.add("is-valid");
    formAssignee.classList.remove("is-invalid");
    // store input value into variable - Assignee -> String
    completedForm.assignee = formAssignee.value;
    // error message for incorrect input
  } else {
    formAssignee.classList.add("is-invalid");
    formAssignee.classList.remove("is-valid");
  }

  // Description -> Not Empty and longer than 15 characters
  if (formTaskDescription.value.length >= 15) {
    formTaskDescription.classList.add("is-valid");
    formTaskDescription.classList.remove("is-invalid");
    // store input value into variable - Description -> String
    completedForm.description = formTaskDescription.value;
    // error message for incorrect input
  } else {
    formTaskDescription.classList.add("is-invalid");
    formTaskDescription.classList.remove("is-valid");
  }

  // Name -> Not Empty and longer than 8 characters
  if (formTaskName.value.length >= 8) {
    formTaskName.classList.add("is-valid");
    formTaskName.classList.remove("is-invalid");
    // store input value into variable - Name -> String
    completedForm.name = formTaskName.value;
    // error message for incorrect input
  } else {
    formTaskName.classList.add("is-invalid");
    formTaskName.classList.remove("is-valid");
  }

  // Add the task to the task manager
  taskManager.addTask(
    completedForm.name,
    completedForm.description,
    completedForm.assignee
  );

  // Form reset
  formReset = () => {
    formValidate.reset();
    completedForm = { name: "", description: "", assignee: "" };
  };
  formReset();
});
