// SECRET CODE  ---------------------------------------------------------
const SECRET_CODE = 1234;

// DOMS ELEMENTS  ---------------------------------------------------------
const passwordView = document.getElementById("passwordView");
const lostView = document.getElementById("lostView");
const wonView = document.getElementById("wonView");

const checkButton = document.getElementById("checkButton");
checkButton.addEventListener("click", handleCheck);

const tryAgainButton = document.getElementById("tryAgainButton");
tryAgainButton.addEventListener("click", showGame);


const passwordInput = document.getElementById("passwordInput");
passwordInput.addEventListener("keypress", handleEnterPassword);

const instructionLabel = document.getElementById("instructionLabel");

let chance = 3;
 
// Hide a given element
function hide(element) {
  element.style.display = "none";
}

// Show a given element
function show(element) {
  element.style.display = "block";
}

function showGame() {
  if (chance == 3) {
    hide(lostView);
    hide(wonView);
    show(passwordView);
    instructionLabel.innerText = "ENTER YOUR CODE (YOU CAN TRY 3 TIMES ONLY!)";
    passwordInput.value = "";
  } else if (chance == 2) {
    hide(lostView);
    hide(wonView);
    show(passwordView);
    instructionLabel.innerText = "ENTER YOUR CODE (YOU CAN TRY 2 TIMES ONLY!)";
    passwordInput.value = "";
  }else if (chance == 1){
    hide(lostView);
    hide(wonView);
    show(passwordView);
    instructionLabel.innerText = "ENTER YOUR CODE (YOU CAN TRY 1 TIME ONLY!)";
    passwordInput.value = "";
  }else{
    hide(passwordView);
    hide(wonView);
    show(lostView);
  }
}

function showWin() {
  hide(passwordView);
  hide(lostView);
  show(wonView);
}
function showLost() {
  hide(passwordView);
  hide(wonView);
  show(lostView);
}

 
function handleCheck() {
    let passwordEntered = passwordInput.value;
    if(passwordEntered == SECRET_CODE){
      showWin();
    }else{
      showLost();
    }
    chance--;
}


function handleEnterPassword(event) {
  if (event.key === "Enter") {
    handleCheck();
  }
}


 