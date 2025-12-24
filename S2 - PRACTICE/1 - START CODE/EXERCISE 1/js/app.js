let container1 = document.getElementById("container1");
let container2 = document.getElementById("container2");
let container3 = document.getElementById("container3");

function move3(button){
    const lastChild = container1.lastElementChild;
    container2.appendChild(lastChild);
    button.remove();
}

function remove4(button){
    const firstChild = container2.firstElementChild;
    firstChild.remove();
    button.remove();
}

function add10(button){
    const newDiv = document.createElement("div");
    newDiv.textContent = "10"
    newDiv.className = "item"
    container3.appendChild(newDiv)
    button.remove();
}

function change(button){
    const blue = document.getElementsByClassName("containerBlue");
    for (let i = 0; i < blue.length; i++) {
        blue[i].style.color = "red";
    }
    button.remove();
}

//  2- Remove item 4
// YOUR CODE !!

   
// 3- Create a new item 10 and add it to container 3
// YOUR CODE !!


//  4- Set all items located in a blue container to red
// YOUR CODE !!