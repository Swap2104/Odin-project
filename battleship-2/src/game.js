let start = Date.now();
// import { objects } from "./index.js"
import { objects } from "./Ship.js"

let player_grid = document.getElementById('player-grid')
let comp_grid = document.getElementById('comp-grid')

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

//* working
//! 975 millisecond
// for (let k = 0; k < player_div_color.length; k++) {
    //     for (let i = 0; i < objects_arr.length; i++) {
        //         for (let j = 0; j < objects_arr[i].position.length; j++) {
            
            //             console.log(Number(player_div_color[k].id))
            //             console.log(objects_arr[i].position[j])
            //             if (Number(player_div_color[k].id) == objects_arr[i].position[j]) {
                //                 player_div_color[k].classList.add("ship")
                //                 break
                //             }
                
                //         }
                //     }
                // }
                
//! 19 millisecond
for (let i = 0; i < objects_arr.length; i++) {
    for (let j = 0; j < objects_arr[i].position.length; j++) {
        //? console.log(objects_arr[i].position[j])
        for (let k = 0; k < player_div_color.length; k++) {
            //? console.log(Number(player_div_color[k].id))
            if (Number(player_div_color[k].id) == objects_arr[i].position[j]) {
                player_div_color[k].classList.add("ship")
                break
            }
        }
    }
}

let timeTaken = Date.now() - start;
console.log("Total time taken : " + timeTaken + " milliseconds");