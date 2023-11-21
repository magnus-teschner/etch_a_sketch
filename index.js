//elements
const container = document.querySelector('.grid-container')
const slider = document.querySelector('#myRange');
const para = document.querySelector('.show-range');



//Variables
let isDrawing = false;
const DEFAULLT_SIZE = 16;
let currentColor = 'black';


function createGrid(size){
    clearGrid();
    oneSquareSize = 960 / size;
    console.log(oneSquareSize);
    for (let i = 0; i < size**2; i++){
        appendSquare(oneSquareSize);
    }
}


function clearGrid() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

function cleanUpGrid() {
    const allSquares = document.querySelectorAll('.in-grid');
    allSquares.forEach((square) => square.style.backgroundColor = "transparent")
}


function appendSquare(oneSquareSize){
    const new_div = document.createElement('div');
    new_div.classList.add("in-grid");
    new_div.style.width = `${oneSquareSize}px`;
    new_div.style.height = `${oneSquareSize}px`;
    container.appendChild(new_div)

}

function addContainerEventListener(){
    container.addEventListener('mousedown', (event) => {
        event.preventDefault();
        isDrawing = true});
    container.addEventListener('mouseup', (event) => {
        event.preventDefault();
        isDrawing = false});
}

function addSliderEventListener(){
    slider.addEventListener('change', () => {
        para.textContent = `${slider.value} x ${slider.value}`
        createGrid(+slider.value);
        addSquareEventListener();

    })
}

function addSquareEventListener(){
    const allSquares = document.querySelectorAll('.in-grid');
    allSquares.forEach(square => {square.addEventListener('mouseover', ()=> {
        if (isDrawing){
            console.log(currentColor);
            square.style.backgroundColor = currentColor;
        } 
        })   
    });
}

function addButtonEventListener(){
    eraserButton = document.querySelector('#eraser');
    eraserButton.addEventListener('click', () => currentColor = "transparent");
    drawButton = document.querySelector('#color');
    colorChooser = document.querySelector('#colorPickerInput')
    colorChooser.addEventListener('change', () => currentColor = colorChooser.value);
    drawButton.addEventListener('click', () => {
        currentColor = colorChooser.value});
    clearButton = document.querySelector('#clearButton');
    clearButton.addEventListener('click', cleanUpGrid);
}

window.onload = () => {
    createGrid(DEFAULLT_SIZE);
    addSquareEventListener();
    addContainerEventListener();
    addSliderEventListener();
    addButtonEventListener();
  }
