

// Generate a random hexadecimal color
function getRandomHexColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function display(){
    const background = document.querySelector(".main-text");
    const letter = document.getElementById("result-color");
    const color = getRandomHexColor();
    letter.innerHTML = color;
    background.style.backgroundColor = color;
}


// When clicking on the RANDOM COLOR button:
// -	Generate a random color
// -	Set the body background color with this color
// -	Set the color label with the value of this color
 

