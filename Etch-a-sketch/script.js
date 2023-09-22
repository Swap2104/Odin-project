let mouseColor = 'black'
let gridBox = document.getElementsByClassName('gridBox')
console.log(gridBox.length)
for (let i = 0; i < gridBox.length; i++) {
    gridBox[i].addEventListener('mouseover', (e) => {
        gridBox[i].style.background = mouseColor;
        console.log(e.target)
        console.log(e.type)
    })
}


let clear = document.getElementById('clear')
clear.addEventListener('click', () => {
    for (let i = 0; i < gridBox.length; i++) {
        gridBox[i].style.background = "white";
    }
})


let eraser = document.getElementById('eraser')
eraser.addEventListener('click', () => {
    mouseColor = "white"
})

let normal = document.getElementById('normal')
normal.addEventListener('click', () => {
    mouseColor = "black"
})

let colorPicker = document.getElementById('colorPicker')
colorPicker.addEventListener('change', () => {
    mouseColor = colorPicker.value
})

