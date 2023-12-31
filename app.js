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
const colorpicker = document.querySelector(".colorpicker");


// Slider Configuration
const slider = document.querySelector(".slider");
const sliderValue = document.createElement("div");
sliderValue.classList.add("slider-value");
slider.addEventListener("input", () =>{
  sliderValue.innerText = slider.value + " x " + slider.value;
  gameOptions.insertBefore(sliderValue,slider);
  clearGrid()
  createGrid(slider.value);
  colorCells(DEFAULT_COLOR);
})


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

function colorCells (toggle) {
  const allCells = document.querySelectorAll(".cell");
  allCells.forEach((cell) => {
    cell.addEventListener("mouseover",() =>{
      if (toggle == "rainbow") {
        cell.style.background = "#" + Math.floor(Math.random()*16777215).toString(16);
      }
      else if (toggle == "color") {
        currentColor = colorpicker.value;
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
colorBtn.addEventListener("click",() => {
  colorCells("color");
})

rainbowBtn.addEventListener("click",() => {
  colorCells("rainbow");
})

eraserBtn.addEventListener("click",() => {
  colorCells("white");
})

clrBtn.addEventListener("click",() => {
  clearGrid();
  createGrid(DEFAULT_SIZE);
  colorCells(DEFAULT_COLOR);
})


// Default Load
window.addEventListener("load", () => {
  createGrid(DEFAULT_SIZE);
  colorCells(DEFAULT_COLOR);
})