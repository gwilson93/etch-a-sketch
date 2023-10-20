// Initial DOM Retrieval and Manipulation
const container = document.querySelector(".game-board");
const gameOptions = document.querySelector(".game-options")
const clrBtn = document.querySelector(".clear");


const slider = document.querySelector(".slider");
const sliderValue = document.createElement("div");
sliderValue.classList.add("slider-value");
sliderValue.innerText = slider.value;
gameOptions.insertBefore(sliderValue,slider);



function createGrid (size) {
  boxes = size ** 2;
  for (let i = 1; i <= boxes; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell","reset");
    cell.style.minHeight = 500 / size + "px";
    cell.style.minWidth = 500 / size + "px";
    container.appendChild(cell);
  }
}

function colorCells (color) {
  const allCells = document.querySelectorAll(".cell");
  allCells.forEach((cell) => {
    cell.addEventListener("mouseover",() =>{
      cell.style.background = color;
    })
  })
}


function clearGrid() {
    while (container.firstChild) {
      container.removeChild(container.lastChild);
    }

}

// Event Listeners
clrBtn.addEventListener("click",() => {
  clearGrid();
  createGrid(16);
})

createGrid(16);
colorCells("black");