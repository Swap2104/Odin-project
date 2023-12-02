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

//? event listeners for the button to select orientation
btn.addEventListener('click', () => {
    if (btn.textContent === 'Vertical ↓') {
        btn.textContent = 'Horizontal →'
        horizontal_dir = true

    } else if (btn.textContent === 'Horizontal →') {
        btn.textContent = 'Vertical ↓'
        horizontal_dir = false
    }
});

boat.addEventListener('click', () => {
    if (boat_count == 1) { //? checking the number of times the ship is placed. Must be equal to 1
        length = 2
        //? setting the background colors of all the buttons.
        boat.style.backgroundColor = '#B5B8BAff'
        submarine.style.backgroundColor = ''
        battleship.style.backgroundColor = ''
        carrier.style.backgroundColor = ''
        
        //? setting the text colors of all the buttons.
        boat.style.color = "#2C3849ff"
        submarine.style.color = ""
        battleship.style.color = ""
        carrier.style.color = ""
        
        selected_ship[0] = " boat" //? name for the ship object
        selected_ship[1] = length
        e = 0
        boat_count++ //? ensures that each ship is placed only once 
    }
})

submarine.addEventListener('click', () => {
    if (submarine_count == 1) {
        submarine.style.backgroundColor = '#B5B8BAff'
        boat.style.backgroundColor = ''
        battleship.style.backgroundColor = ''
        carrier.style.backgroundColor = ''
        boat.style.color = ""
        submarine.style.color = "#2C3849ff"
        battleship.style.color = ""
        carrier.style.color = ""
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
        battleship.style.backgroundColor = '#B5B8BAff'
        carrier.style.backgroundColor = ''
        boat.style.color = ""
        submarine.style.color = ""
        battleship.style.color = "#2C3849ff"
        carrier.style.color = ""
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
        carrier.style.backgroundColor = '#B5B8BAff'
        boat.style.color = ""
        submarine.style.color = ""
        battleship.style.color = ""
        carrier.style.color = "#2C3849ff"
        length = 7
        selected_ship[0] = "carrier"
        selected_ship[1] = length
        e = 0
        carrier_count++
    }
})

// ? When the finish button is clicked the data is stored in the local storage and the game page (game.html) is loaded.
document.getElementById("finish-button").addEventListener('click', () => {
    localStorage.setItem("data", JSON.stringify(objects))
    window.location = "game.html"
})

let ship_color ='#B5B8BAff'

// ? code to create ship object and display the ship for the user
let divs = document.getElementsByClassName('div')

// ? for loop adds event listeners to all the divs in the grid.
for (let i = 0; i < divs.length; i++) {
    divs[i].addEventListener('click', () => {
        // ? `e` is number of times a ship can be placed it must be 0 to place any ship.
        // ? every time a ship is selected `e` is set to 0

        if (e == 0) if (selected_ship) {
            divs[i].style.backgroundColor = ship_color
            // ? based on the orientation the ship are placed/ displayed, the orientation is also stored in the object.
            // ? every time a ship is placed `e` is incremented

            if (horizontal_dir) {
                objects.push(new Ship(selected_ship[0], selected_ship[1], Number(divs[i].id), horizontal_dir)) //? the data is stored in the object and 
                // ? setting colors all the divs occupied by the ship
                // ? if the ship is horizontal the co-ordinates and incremented by 1
                for (let j = 1; j < length; j++) {
                    divs[i + j].style.backgroundColor = ship_color
                }
                e++
            }

            if (!horizontal_dir) {
                objects.push(new Ship(selected_ship[0], selected_ship[1], Number(divs[i].id), horizontal_dir))
                // ? if the ship is vertical the co-ordinates and incremented by 10
                for (let j = 0; j < length * 10; j += 10) {
                    divs[i + j].style.backgroundColor = ship_color;
                }
                e++;
            }
        }
    })
}