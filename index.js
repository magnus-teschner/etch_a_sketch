const container = document.querySelector('.grid-container')

function appendSquare(oneSquareSize){
    const new_div = document.createElement('div');
    new_div.classList.add("in-grid");
    new_div.style.width = `${oneSquareSize}px`;
    new_div.style.height = `${oneSquareSize}px`;
    container.appendChild(new_div)

}


function clearGrid() {
    // Remove all child elements (squares) from the container
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

function createGrid(size){
    clearGrid();
    oneSquareSize = 960 / size;
    console.log(oneSquareSize);
    for (let i = 0; i < size**2; i++){
        appendSquare(oneSquareSize);
    }


}


createGrid(45);
addSquareEventListener();


let isDrawing = false;

container.addEventListener('mousedown', () => isDrawing = true);
container.addEventListener('mouseup', () => isDrawing = false);

const slider = document.querySelector('#myRange');
const para = document.querySelector('.show-range');
slider.addEventListener('change', () => {
    para.textContent = `${slider.value} x ${slider.value}`
    createGrid(+slider.value);
    addSquareEventListener();

})


function addSquareEventListener(){
    allSquares = document.querySelectorAll('.in-grid');
    allSquares.forEach(square => {square.addEventListener('mouseover', ()=> {
        if (isDrawing){
            square.classList.add("colored-background")
        } 
    })   
    });
}
