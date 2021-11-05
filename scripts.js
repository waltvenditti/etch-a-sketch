const mainContainer = document.querySelector('.main-container');
const GRID_DIMENSION = 16;
let startVar = 1;
if (startVar === 1) {
    makeNewGrid(GRID_DIMENSION);
    addHover();
    startVar = 0
}

function makeNewGrid(gridSize) {
    for (i=0; i<gridSize; i++) {
        let rowDiv = document.createElement('div');
        rowDiv.classList.add('row');
        mainContainer.appendChild(rowDiv);

        for (j=0; j<gridSize; j++) {
            let squareDiv = document.createElement('div');
            squareDiv.classList.add('square');
            rowDiv.appendChild(squareDiv);
        }
    }
}

function addHover() {
    squares = document.querySelectorAll('.square');
    squares.forEach((sqr) => {
        sqr.addEventListener('mouseover', () => {
            sqr.style['background-color'] = 'black';
        });
    });
}

function clearGrid() {
    rows = document.querySelectorAll('.row');
    rows.forEach((row) => {
        row.remove();
    });
};

btn = document.querySelector('button');
btn.addEventListener('click', () => {
    let newSize = prompt("Enter new grid size:", 16);
    clearGrid();
    if (newSize <= 100) {
        makeNewGrid(newSize);
    } else {
        alert("Grid too large. 100x100 grid made.")
        makeNewGrid(100);
    }
    addHover();
});