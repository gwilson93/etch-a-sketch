// Set Default Values
DEFAULT_COLOR = "black";
DEFAULT_SIZE = 16;

// Initial DOM Retrieval and Manipulation
const container = document.querySelector(".game-board");
const gameOptions = document.querySelector(".game-options");
const colorBtn = document.querySelector(".color-select");
const rainbowBtn = document.querySelector(".rainbow-select");
const eraserBtn = document.querySelector(".eraser");
const clrBtn = document.querySelector(".clear");


// Slider Configuration
const slider = document.querySelector(".slider");
const sliderValue = document.createElement("div");
sliderValue.classList.add("slider-value");
sliderValue.innerText = slider.value;
gameOptions.insertBefore(sliderValue,slider);


// Helper Functions
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

function colorCells (toggle,currentColor) {
  const allCells = document.querySelectorAll(".cell");
  allCells.forEach((cell) => {
    cell.addEventListener("mouseover",() =>{
      if (toggle == "rainbow") {
        cell.style.background = "#" + Math.floor(Math.random()*16777215).toString(16);
      }
      else if (toggle == "color") {
        cell.style.background = currentColor;
      }
      else {
        cell.style.background = toggle;
      }
    })
  })
}

function clearGrid () {
    while (container.firstChild) {
      container.removeChild(container.lastChild);
    }
}


// Event Listeners
rainbowBtn.addEventListener("click",() => {
  colorCells("rainbow");
})

eraserBtn.addEventListener("click",() => {
  colorCells("white");
})

clrBtn.addEventListener("click",() => {
  clearGrid();
  createGrid(16);
  colorCells("black");
})



createGrid(16);
colorCells("black");