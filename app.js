// DOM Manipulation
const container = document.querySelector(".game-board");

function createGrid (size) {
  boxes = size ** 2;
  for (let i = 1; i <= boxes; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    container.appendChild(cell);
  }
}

createGrid(16);