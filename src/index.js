document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const taskInput = document.getElementById("new-task-description");
    const taskText = taskInput.value;

    if (taskText.trim() !== "") {
      // Create a new task element
      const taskItem = document.createElement("li");
      taskItem.innerText = taskText;

      // Create a delete button
      const deleteButton = document.createElement("button");
      deleteButton.innerText = "Delete";
      deleteButton.addEventListener("click", () => {
        // Remove the task when the delete button is clicked
        taskList.removeChild(taskItem);
      });

      // Append the delete button to the task
      taskItem.appendChild(deleteButton);

      // Append the task to the task list
      taskList.appendChild(taskItem);

      // Clear the input field
      taskInput.value = "";
    }
  });
});
