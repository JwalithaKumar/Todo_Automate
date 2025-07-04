function addTask() {
  const taskInput = document.getElementById("taskInput");
  const deadlineInput = document.getElementById("deadlineInput");
  const taskList = document.getElementById("taskList");

  const taskText = taskInput.value.trim();
  const deadlineText = deadlineInput.value;

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  const li = document.createElement("li");
  li.innerHTML = `
    <span>${taskText}</span>
    <span class="deadline">⏰ ${deadlineText ? deadlineText : "No deadline"}</span>
  `;

  taskList.appendChild(li);

  taskInput.value = "";
  deadlineInput.value = "";
}
