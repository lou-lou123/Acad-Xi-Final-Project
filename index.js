// Create a JavaScript function called “validateTaskForm” that verifies that the inputs inserted by the user in the task form are correct

const formValidate = document.querySelector(".form-validate");
// AssignedTo -> Not Empty and longer than 8 characters
const formValidateAssignee = document.querySelector("#assignee");
// Description -> Not Empty and longer than 15 characters
const formValidateTaskDescription = document.querySelector("#taskDescription");
// Name -> Not Empty and longer than 8 characters
const formValidateTaskName = document.querySelector("#taskName");

formValidate.addEventListener("submit", (event) => {
  event.preventDefault();

  if (formValidateAssignee.value.length >= 8) {
    formValidateAssignee.classList.add("is-valid");
    formValidateAssignee.classList.remove("is-invalid");
  } else {
    formValidateAssignee.classList.add("is-invalid");
    formValidateAssignee.classList.remove("is-valid");
  }

  if (formValidateTaskDescription.value.length >= 15) {
    formValidateTaskDescription.classList.add("is-valid");
    formValidateTaskDescription.classList.remove("is-invalid");
  } else {
    formValidateTaskDescription.classList.add("is-invalid");
    formValidateTaskDescription.classList.remove("is-valid");
  }

  if (formValidateTaskName.value.length >= 8) {
    formValidateTaskName.classList.add("is-valid");
    formValidateTaskName.classList.remove("is-invalid");
  } else {
    formValidateTaskName.classList.add("is-invalid");
    formValidateTaskName.classList.remove("is-valid");
  }
});
