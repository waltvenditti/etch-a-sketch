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
            style = window.getComputedStyle(sqr);
            currentColor = style.getPropertyValue('background-color');

            if (currentColor == 'rgb(255, 255, 255)') {
            const colors = genRandomColor();
            sqr.style['background-color'] = `rgba(${colors[0]}, ${colors[1]}, ${colors[2]}, 0.1`;
            } else {
                alpha = currentColor.slice(-2, -1);
                console.log(alpha);
                alpha++;
                newColor = currentColor.slice(0, -2);
                newColor = newColor + alpha + ')';
                console.log(newColor);
                sqr.style['background-color'] = newColor;
            };
        });
    });
}

function clearGrid() {
    rows = document.querySelectorAll('.row');
    rows.forEach((row) => {
        row.remove();
    });
}

function genRandomColor() {
    let red = Math.floor((Math.random() * 255) +1);
    let grn = Math.floor((Math.random() * 255) +1);
    let blu = Math.floor((Math.random() * 255) +1);
    const colors = [red, grn, blu];
    return colors;
}

/*
function testColor () {
    x = 1;
    while (x) {
        let colors = genRandomColor();
        for (i=0; i<3; i++) {
            if (colors[i] === 255) {
                console.log(colors);
                x = 0;
            };
        };
    };
}
*/

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