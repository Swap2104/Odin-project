import { Ship } from "./Ship.js"
import gameBoard from "./gameBoard.js"
let horizontal = true
let selected_ship = null
let length = 0
let e


function grid_creation() {
    let grid = document.getElementById('grid')

    for (let i = 0; i < 100; i++) {
        let div = document.createElement('div')
        grid.appendChild(div)
        div.className = "div"
    }
}
grid_creation()

console.log("hello")

let btn = document.getElementById('btn')

btn.addEventListener('click', () => {
    if (btn.textContent === "Vertical") {
        btn.textContent = "Horizontal";
        horizontal = true

    } else if (btn.textContent === "Horizontal") {
        btn.textContent = "Vertical";
        horizontal = false
    }
});


let boat = document.getElementById('boat')
let submarine = document.getElementById('submarine')
let battleship = document.getElementById('battleship')
let carrier = document.getElementById('carrier')


boat.addEventListener('click', () => {
    length = 2
    boat.style.backgroundColor = 'red'
    submarine.style.backgroundColor = ''
    battleship.style.backgroundColor = ''
    carrier.style.backgroundColor = ''
    selected_ship = boat
    e = 0

})

submarine.addEventListener('click', () => {
    submarine.style.backgroundColor = 'red'
    boat.style.backgroundColor = ''
    battleship.style.backgroundColor = ''
    carrier.style.backgroundColor = ''
    length = 3
    selected_ship = submarine
    e = 0

})

battleship.addEventListener('click', () => {
    boat.style.backgroundColor = ''
    submarine.style.backgroundColor = ''
    battleship.style.backgroundColor = 'red'
    carrier.style.backgroundColor = ''
    length = 5
    selected_ship = battleship
    e = 0

})

carrier.addEventListener('click', () => {
    boat.style.backgroundColor = ''
    submarine.style.backgroundColor = ''
    battleship.style.backgroundColor = ''
    carrier.style.backgroundColor = 'red'
    length = 7
    selected_ship = carrier
    e = 0

})

let divs = document.getElementsByClassName('div')
for (let i = 0; i < divs.length; i++) {
    divs[i].addEventListener('click', () => {
        if (e == 0) if (selected_ship) {
            divs[i].style.backgroundColor = 'red'
            e++
        }
    })
}
