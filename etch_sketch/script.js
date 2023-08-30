// make a 16x16 grid of square divs
const GRID_SIZE = 16
const container = document.getElementById('container');

function setCanvas(size) {
    // create a row
    // then in each row, print div div div
    for (let i = 0; i < size; i++) {
        const row = container.appendChild(document.createElement('div'))
        
        for (let j = 0; j < size; j++) {
            const pixel = document.createElement('div')
            pixel.classList.add("pixel")
            pixel.addEventListener("mouseover", changeColor)
            pixel.addEventListener("mousedown", changeColor)
            row.appendChild(pixel)
        }
    }
}
function changeColor(e) {
    e.target.style.backgroundColor = 'gray'
}

setCanvas(50)