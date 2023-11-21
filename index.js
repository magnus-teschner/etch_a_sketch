//elements
const container = document.querySelector('.grid-container')
const slider = document.querySelector('#myRange');
const para = document.querySelector('.show-range');


//Variables
let isDrawing = false;
const DEFAULLT_SIZE = 16;


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


function appendSquare(oneSquareSize){
    const new_div = document.createElement('div');
    new_div.classList.add("in-grid");
    new_div.style.width = `${oneSquareSize}px`;
    new_div.style.height = `${oneSquareSize}px`;
    container.appendChild(new_div)

}

function addContainerEventListener(){
    container.addEventListener('mousedown', () => isDrawing = true);
    container.addEventListener('mouseup', () => isDrawing = false);
}

function addSliderEventListener(){
    slider.addEventListener('change', () => {
        para.textContent = `${slider.value} x ${slider.value}`
        createGrid(+slider.value);
        addSquareEventListener();

    })
}

function addSquareEventListener(){
    allSquares = document.querySelectorAll('.in-grid');
    allSquares.forEach(square)
    allSquares.forEach(square => {square.addEventListener('mouseover', ()=> {
        if (isDrawing){
            square.classList.add("colored-background")
        } 
        })   
    });
}


window.onload = () => {
    createGrid(DEFAULLT_SIZE);
    addSquareEventListener();
    containerEventListener();
    addSliderEventListener();
  }
