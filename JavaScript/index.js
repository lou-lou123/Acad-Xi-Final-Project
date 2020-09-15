
const formValidate = document.querySelector(".form-validate");

// variables for form fields
const formValidateAssignee = document.querySelector("#assignee");
const formValidateTaskDescription = document.querySelector("#taskDescription");
const formValidateTaskName = document.querySelector("#taskName");

// variables for object
let taskNameInput = 0;
let completedForm = {name:'', description:'', assignee: ''};
let completedFormArray = [];

// event listener for click on submit button
formValidate.addEventListener("submit", (event) => {
  event.preventDefault();

// AssignedTo -> Not Empty and longer than 8 characters
  if (formValidateAssignee.value.length >= 8) {
    formValidateAssignee.classList.add("is-valid");
    formValidateAssignee.classList.remove("is-invalid");
// store input value into variable - Assignee -> String
    completedForm.assignee = formValidateAssignee.value;
// error message for incorrect input
  } else {
    formValidateAssignee.classList.add("is-invalid");
    formValidateAssignee.classList.remove("is-valid");
  }

// Description -> Not Empty and longer than 15 characters
  if (formValidateTaskDescription.value.length >= 15) {
    formValidateTaskDescription.classList.add("is-valid");
    formValidateTaskDescription.classList.remove("is-invalid");
// store input value into variable - Description -> String
    completedForm.description = formValidateTaskDescription.value;
// error message for incorrect input
  } else {
    formValidateTaskDescription.classList.add("is-invalid");
    formValidateTaskDescription.classList.remove("is-valid");
  }

// Name -> Not Empty and longer than 8 characters
  if (formValidateTaskName.value.length >= 8) {
    formValidateTaskName.classList.add("is-valid");
    formValidateTaskName.classList.remove("is-invalid");
// store input value into variable - Name -> String
    completedForm.name = formValidateTaskName.value;
// error message for incorrect input
  } else {
    formValidateTaskName.classList.add("is-invalid");
    formValidateTaskName.classList.remove("is-valid");
  }

    console.log(completedForm);
});
