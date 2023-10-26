import gameBoard from "./gameBoard.js";

let start = Date.now();//! to measure the time took to execute the
//? The objects that contain the ship placement for computer (stored in computerPlacement.js)

import { obj1, obj2, obj3, obj4, obj5 } from "./compPlacement.js";
let ships = [obj1, obj2, obj3, obj4, obj5] //? storing the objects in array to randomize selection.

let player_grid = document.getElementById('player-grid') //? div that contains the player grid
let comp_grid = document.getElementById('comp-grid') //? div that contains the computer grid

// ? inserting the grid elements in the computer's and the player's grid
for (let i = 0; i < 100; i++) {
    let player_div = document.createElement('div')
    let comp_div = document.createElement('div')

    player_div.className = "player-div"
    player_div.id = i

    comp_div.className = "comp-div"
    comp_div.id = i

    player_grid.appendChild(player_div)
    comp_grid.appendChild(comp_div)
}

// ? selecting the div elements from the grid to display the ships 
let player_div_color = document.getElementsByClassName('player-div')
let comp_div_color = document.getElementsByClassName('comp-div')


let comp_head = document.getElementById('comp-head')
let player_head = document.getElementById('player-head')

// !important
// ? getting the users's ship object from the local storage.
let objects_arr = JSON.parse(localStorage.getItem("data"))
console.log(objects_arr)

//! 19 millisecond
//? display's the user's ship 
for (let i = 0; i < objects_arr.length; i++) {
    for (let j = 0; j < objects_arr[i].position.length; j++) {
        for (let k = 0; k < player_div_color.length; k++) {
            if (Number(player_div_color[k].id) == objects_arr[i].position[j]) {
                player_div_color[k].classList.add("ship")
                break
            }
        }
    }
}

//? this function displays computer's ship 
let random_index = Math.floor(Math.random() * ships.length); //? generating a random index to select a ship object
const computer = JSON.parse(ships[random_index]) //?  selecting computer's ship placement object using the the random index
// console.log(computer) //? Prints the computer's ship placement object 
for (let i = 0; i < computer.length; i++) {
    for (let j = 0; j < computer[i].position.length; j++) {
        for (let k = 0; k < player_div_color.length; k++) {
            if (Number(player_div_color[k].id) == computer[i].position[j]) {
                comp_div_color[k].classList.add("comp-ship")
                break
            }
        }
    }
}

// ? Event listener for the user to attack
let comp_grid_divs = document.getElementsByClassName('comp-div') //* re-selecting with a different name. 
let player_grid_divs = document.getElementsByClassName('player-div') //* re-selecting with a different name. 
let usedIndex = []

for (let x = 0; x < comp_grid_divs.length; x++) {
    comp_grid_divs[x].addEventListener('click', () => {
        let attackPos = 0

        let player_board = new gameBoard()
        let computer_board = new gameBoard()

        let player_result = computer_board.attack(comp_grid_divs[x].id, computer) //? player will attack on computer's board (uses computer's  object)

        if (player_result) {
            console.log(player_result)
            player_head.textContent = "Hit"
            comp_grid_divs[x].classList.add('hit')
        }

        if (!player_result) {
            player_head.textContent = "Miss"
            console.log("Player Missed")
            comp_grid_divs[x].classList.add('miss')

        }

        do {
            attackPos = Math.floor(Math.random() * 100)
        } while (usedIndex.indexOf(attackPos) != -1);
        usedIndex.push(attackPos)
        console.log(usedIndex)

        let comp_result = player_board.attack(player_grid_divs[attackPos].id, objects_arr) //? computer will attack on player's board (uses user's ship object)
        if (comp_result != null) {
            comp_head.textContent = "Hit"
            console.log(comp_result)
            player_grid_divs[attackPos].classList.add('hit')
        }

        if (!comp_result) {
            comp_head.textContent = "Miss"
            console.log("Computer Missed")
            player_grid_divs[attackPos].classList.add('miss')
        }

    })
}

//! to measure the time took to execute the
let timeTaken = Date.now() - start;
console.log("Total time taken : " + timeTaken + " milliseconds");