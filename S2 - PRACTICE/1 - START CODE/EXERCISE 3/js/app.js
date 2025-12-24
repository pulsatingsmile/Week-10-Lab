const COLORS = [
  "red",
  "blue",
  "green",
  "yellow",
  "orange",
  "purple",
  "pink",
  "black",
  "white",
  "gray",
];

//
// Get a random color among the list of available colors
//
function randomColor() {
  const randomIndex = Math.floor(Math.random() * COLORS.length);
  return COLORS[randomIndex];
}

//
// Create a new card
//
function createCard() {
  const card = document.createElement("div");
  const parent = document.querySelector(".container");
  card.classList.add("card");
  card.style.backgroundColor = randomColor();
  card.innerHTML = `
        <p>Description</p>
        <div class="card-footer">
          <button class="remove">Remove Card</button>
        </div>
`;

parent.appendChild(card);

  const btnRemove = card.querySelector(".remove");
  btnRemove.addEventListener("click", () => {
    card.remove();
  });

}


//--------------------------------------------------
// Code Start
//--------------------------------------------------

const btnCreate = document.querySelector("#create");
btnCreate.addEventListener("click", createCard);