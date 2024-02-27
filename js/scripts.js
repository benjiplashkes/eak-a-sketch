const gridContainer = document.querySelector('#container')
const button = document.querySelector('button#newGrid')

function handleClick(){
    let gridSize = +prompt("Enter Grid Size - (Max 100)", 0)
    if (gridSize > 100) {
        gridSize = +prompt("Size too big!\nEnter Grid Size - (Max 100)", 0)
    }
    gridContainer.innerHTML = ""
    const grid = createGrid(gridSize)
    gridContainer.appendChild(grid)
}
function handleDraw(e){
    e.currentTarget.classList.toggle('full')
    
    function rndColor(){
        const r = Math.floor(Math.random() * 255)
        const g = Math.floor(Math.random() * 255)
        const b = Math.floor(Math.random() * 255)
        const color = `rgba(${r},${g},${b})`
   
        console.log({color})
        return color       
    }
    let element = e.currentTarget
    element.style.setProperty('--bg-color', rndColor())
}
function createGrid(gridSize){
    
    function createRow(){
        const row = document.createElement('div')
        row.classList.add('row')
        for(let i = 0; i < gridSize; i ++){
            let square = document.createElement('div')
            square.classList.add('square')
            square.style.width = (960 / gridSize) + "px"
            square.style.height = (960 / gridSize) + "px"
            square.addEventListener('mouseenter', handleDraw)
            row.appendChild(square)
        }
        return row
    }
    const grid = document.createElement('div')
    grid.classList.add('grid-wrapper')
    for(let i = 0; i < gridSize; i++){
        let row = createRow()
        grid.appendChild(row)
    }
    console.log(grid)
    return grid
}
//draw default grid
let newGrid = createGrid(16)
gridContainer.appendChild(newGrid)

//new grid button
button.addEventListener("click", handleClick)