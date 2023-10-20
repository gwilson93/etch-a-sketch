// Initial Grid Creation
const container = document.querySelector(".game-board");

createGrid(16);
colorCells("black");

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