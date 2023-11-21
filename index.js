const container = document.querySelector('.grid-container')

for (let i = 0; i < 256; i++){
    const new_div = document.createElement('div');
    new_div.classList.add("in-grid");
    container.appendChild(new_div)


}


let isDrawing = false;

container.addEventListener('mousedown', () => isDrawing = true);
container.addEventListener('mouseup', () => isDrawing = false);



allSquares = document.querySelectorAll('.in-grid');
allSquares.forEach(square => {square.addEventListener('mouseover', ()=> {
    if (isDrawing){
        square.style.backgroundColor = "black";
    } 
})   
});