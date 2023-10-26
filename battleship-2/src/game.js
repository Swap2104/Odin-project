let start = Date.now();//! to measure the time took to execute the
//? The objects that contain the ship placement for computer (stored in computerPlacement.js)
import { obj1, obj2, obj3, obj4, obj5 } from "./compPlacement.js";
let ships=[obj1, obj2, obj3, obj4, obj5] //? storing the objects in array to randomize selection.

let player_grid = document.getElementById('player-grid') //? div that contains the player grid
let comp_grid = document.getElementById('comp-grid') //? div that contains the computer grid

// ? inserting the grid elements in the computer's and the player's grid
for (let i = 0; i < 100; i++) {
    let player_div = document.createElement('div')
    player_div.className = "player-div"
    player_div.id = i
    let comp_div = document.createElement('div')
    comp_div.className = "comp-div"
    player_grid.appendChild(player_div)
    comp_grid.appendChild(comp_div)
}

// ? selecting the div elements from the grid to display the ships 
let player_div_color = document.getElementsByClassName('player-div')
let comp_div_color = document.getElementsByClassName('comp-div')


// !important
// ? getting the users's ship object from the local storage.
let objects_arr = JSON.parse(localStorage.getItem("data"))

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
let random_index = Math.floor(Math.random() * ships.length);
let computer = JSON.parse(ships[random_index])
console.log(computer)
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

//! to measure the time took to execute the
let timeTaken = Date.now() - start;
console.log("Total time taken : " + timeTaken + " milliseconds");