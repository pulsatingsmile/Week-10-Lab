// ----------------------------------------------------------------------------
// FUNCTIONS
// ----------------------------------------------------------------------------

let tasks = [];

function displayTasks(task) {
  const container = document.getElementById("taskList");
  container.innerHTML = "";
  for (let i = 0; i < task.length; i++) {
    let taskDiv = document.createElement("div");
    taskDiv.textContent = task[i].description;
    taskDiv.style.padding = "10px";
    taskDiv.style.marginBottom = "5px";
    taskDiv.style.color = "white";
    if (task[i].priority == 1) {
      taskDiv.style.backgroundColor = "red";
    } else {
      taskDiv.style.backgroundColor = "grey";
    }
    container.appendChild(taskDiv);
  }
}

function addItem() {
  const descInput = document.getElementById("description");
  const priInput = document.getElementById("priority");

  let priorityValue = 0;
  if (priInput.value === "High") {
    priorityValue = 1;
  } else {
    priorityValue = 0;
  }

  let newtask = {
    description: descInput.value,
    priority: priorityValue,
  };

  tasks.push(newtask);

  descInput.value = "";

  displayTasks(tasks);
}

function showHigh() {
  let importantTasks = tasks.filter((task) => task.priority === 1);
  displayTasks(importantTasks);
}

function showLow() {
  let notImportantTasks = tasks.filter((task) => task.priority === 0);
  displayTasks(notImportantTasks);
}

function showAll() {
  displayTasks(tasks);
}

// ----------------------------------------------------------------------------
// MAIN
// ----------------------------------------------------------------------------

// run the function addItem when you click on the button
let addButton = document.getElementById("addButton");
addButton.addEventListener("click", addItem);
let btnFilterHigh = document.getElementById("btnFilterHigh");
btnFilterHigh.addEventListener("click", showHigh);
let btnFilterLow = document.getElementById("btnFilterLow");
btnFilterLow.addEventListener("click", showLow);
let btnFilterAll = document.getElementById("btnFilterAll");
btnFilterAll.addEventListener("click", showAll);
