let start = Date.now();
import { obj1, obj2, obj3, obj4, obj5 } from "./compPlacement.js";

let player_grid = document.getElementById('player-grid')
let comp_grid = document.getElementById('comp-grid')
let ships=[obj1, obj2, obj3, obj4, obj5]

for (let i = 0; i < 100; i++) {
    let player_div = document.createElement('div')
    player_div.className = "player-div"
    player_div.id = i
    let comp_div = document.createElement('div')
    comp_div.className = "comp-div"
    player_grid.appendChild(player_div)
    comp_grid.appendChild(comp_div)
}

let objects_arr = JSON.parse(localStorage.getItem("data"))
let player_div_color = document.getElementsByClassName('player-div')


//! 19 millisecond
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

// ? the `compShipPlacement` function generates all the objects for the ship and returns an array of all the objects.

//? this function displays computer's ship 
let random_index = Math.floor(Math.random() * ships.length);
let computer = JSON.parse(ships[random_index])
let comp_div_color = document.getElementsByClassName('comp-div')
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

let timeTaken = Date.now() - start;
console.log("Total time taken : " + timeTaken + " milliseconds");