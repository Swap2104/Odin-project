import { Ship, objects } from "./Ship.js"

let horizontal_dir = true
let selected_ship = []
let length = 0
let e
let boat_count = 1, battleship_count = 1, submarine_count = 1, carrier_count = 1

// ? creating a grid of divs "10X10"
function grid_creation() {
    let grid = document.getElementById('grid')

    for (let i = 0; i < 100; i++) {
        let div = document.createElement('div')
        grid.appendChild(div)
        div.className = "div"
        div.id = `${i}`
    }
}
grid_creation()

let btn = document.getElementById('btn')
let boat = document.getElementById('boat')
let submarine = document.getElementById('submarine')
let battleship = document.getElementById('battleship')
let carrier = document.getElementById('carrier')

//? event listeners for all the buttons 
btn.addEventListener('click', () => {
    if (btn.textContent === "Vertical") {
        btn.textContent = "Horizontal";
        horizontal_dir = true

    } else if (btn.textContent === "Horizontal") {
        btn.textContent = "Vertical";
        horizontal_dir = false
    }
});

boat.addEventListener('click', () => {
    if (boat_count == 1) {
        length = 2
        boat.style.backgroundColor = 'red'
        submarine.style.backgroundColor = ''
        battleship.style.backgroundColor = ''
        carrier.style.backgroundColor = ''
        selected_ship[0] = " boat"
        selected_ship[1] = length
        e = 0
        boat_count++
    }
})

submarine.addEventListener('click', () => {
    if (submarine_count == 1) {
        submarine.style.backgroundColor = 'red'
        boat.style.backgroundColor = ''
        battleship.style.backgroundColor = ''
        carrier.style.backgroundColor = ''
        length = 3
        selected_ship[0] = "submarine"
        selected_ship[1] = length
        e = 0
        submarine_count++
    }
})

battleship.addEventListener('click', () => {
    if (battleship_count == 1) {
        boat.style.backgroundColor = ''
        submarine.style.backgroundColor = ''
        battleship.style.backgroundColor = 'red'
        carrier.style.backgroundColor = ''
        length = 5
        selected_ship[0] = "battleship"
        selected_ship[1] = length
        e = 0
        battleship_count++
    }
})

carrier.addEventListener('click', () => {
    if (carrier_count == 1) {
        boat.style.backgroundColor = ''
        submarine.style.backgroundColor = ''
        battleship.style.backgroundColor = ''
        carrier.style.backgroundColor = 'red'
        length = 7
        selected_ship[0] = "carrier"
        selected_ship[1] = length
        e = 0
        carrier_count++
    }
})

document.getElementById("finish-button").addEventListener('click', () => {
    localStorage.setItem("data", JSON.stringify(objects))
    console.log(objects)
    console.log(JSON.stringify(objects))
    console.log(JSON.parse(JSON.stringify(objects)))
    window.location ="http://127.0.0.1:5500/Odin-project/battleship-2/dist/game.html"
})


// ? code to create ship object and display the ship for the user
let divs = document.getElementsByClassName('div')
for (let i = 0; i < divs.length; i++) {
    divs[i].addEventListener('click', () => {
        if (e == 0) if (selected_ship) {
            divs[i].style.backgroundColor = 'red'
            if (horizontal_dir) {

                objects.push(new Ship(selected_ship[0], selected_ship[1], Number(divs[i].id), horizontal_dir))
                for (let j = 1; j < length; j++) {
                    divs[i + j].style.backgroundColor = 'red'
                }
                e++
            }
            if (!horizontal_dir) {
                objects.push(new Ship(selected_ship[0], selected_ship[1], Number(divs[i].id), horizontal_dir))
                for (let j = 0; j < length * 10; j += 10) {
                    divs[i + j].style.backgroundColor = 'red';
                }
                e++;
            }
        }

    })
}
