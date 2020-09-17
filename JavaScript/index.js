// Initialize a new TaskManager with currentId set to 0
const taskManager = new TaskManager(0);

// Select the New Task Form
const formValidate = document.querySelector(".form-validate1");

// variables for form fields
const formAssignee = document.querySelector("#assignee");
const formTaskDescription = document.querySelector("#taskDescription");
const formTaskName = document.querySelector("#taskName");
const formDueDate = document.querySelector("#dueDate");
const formStatus = document.querySelector("#taskStatus");

// variables for object
let completedForm = { name: "", description: "", assignee: "", dueDate: "", status: ""};

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

  // set min date as today
  let today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth()+1;
  let yyyy = today.getFullYear();
  if(dd<10){
          dd='0'+dd
      } 
      if(mm<10){
          mm='0'+mm
      } 

  today.setUTCHours(0, 0, 0, 0);

  if (formDueDate.valueAsNumber < today.getTime()) {
    alert("Date is in the past");
  } else {
    completedForm.dueDate = formDueDate.value;
    formDueDate.classList.add("is-valid");
    formDueDate.classList.remove("is-invalid");
  }
  
  // store input value into variable - status -> String
  completedForm.status = formStatus.value;

  // Add the task to the task manager
  taskManager.addTask(
    completedForm.name,
    completedForm.description,
    completedForm.assignee,
    completedForm.dueDate,
    completedForm.status
  );

  // render the tasks
  taskManager.render();
  console.log(taskManager);

// Form reset
  formReset = () => {
    formValidate.reset();
    completedForm = { name: "", description: "", assignee: "", dueDate: "", status: ""};
  };
  formReset()

  formValidate.submit(function() {
    const modal = document.querySelector("#myModal");
    modal.modal("hide");
  });

});

