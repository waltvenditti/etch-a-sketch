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
            const currentRGBsArray = convertColorToArray(currentColor);
            if (sqr.textContent === '') {
                const colors = genRandomColor();
                sqr.style['background-color'] = `rgb(${colors[0]}, ${colors[1]}, ${colors[2]}`;
                sqr.textContent = `${colors[0]}, ${colors[1]}, ${colors[2]}`;
                sqr.style['font-size'] = 0;
            } 
             else {
                let colorString = sqr.textContent;
                const subtrahends = getSubtrahends(colorString);
                let newRed = currentRGBsArray[0] - subtrahends[0];
                let newGrn = currentRGBsArray[1] - subtrahends[1];
                let newBlu = currentRGBsArray[2] - subtrahends[2];
                console.log(newRed, newGrn, newBlu);
                sqr.style['background-color'] = `rgb(${newRed}, ${newGrn}, ${newBlu}`;
            }
        });
    });
}

function convertColorToArray(colorString) {
    let RGBs = colorString.slice(3);
    RGBs = RGBs.slice(1, -1);
    const RGBArray = RGBs.split(',');
    return RGBArray;
}

// a subtrahend is the number being subtracted in a 
// subtraction calculation 
function getSubtrahends (colorString) {
    const colors = colorString.split(',');
    let reduceRedBy = colors[0] * .1;
    let reduceGrnBy = colors[1] * .1;
    let reduceBluBy = colors[2] * .1;
    const subtrahends = [reduceRedBy, reduceGrnBy, reduceBluBy];
    return subtrahends;
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