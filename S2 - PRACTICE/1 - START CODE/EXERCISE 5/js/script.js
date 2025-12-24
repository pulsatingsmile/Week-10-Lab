// ----------------------------------------------------------------------------
// FUNCTIONS
// ----------------------------------------------------------------------------

function addItem() {
  let newtask = {};

  const desc = document.getElementById("description");
  newtask["description"] = desc.value;

  const pri = document.getElementById("priority");
  if(newtask["priority"] == "High"){
    newtask["priority"] = 1;
  }
  else{
    newtask["priority"] = 0;
  }

  tasks.push(newtask);

  desc.value = "";

  console.log(tasks);
}

// ----------------------------------------------------------------------------
// MAIN
// ----------------------------------------------------------------------------

let tasks = [];

// run the function addItem when you click on the button
let addButton = document.getElementById("addButton");
addButton.addEventListener("click", addItem);
