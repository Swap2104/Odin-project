import Ship from "./Ship.js";
// import Hit from "./Ship.js"
import { obj_arr, obj_arr_display } from "./Ship.js"

class gameBoard {
    attack(co) {
        let shipCo
        for (let i = 0; i < obj_arr.length; i++) {
            for (let k = 0; k < obj_arr[i].position.length; k++) {
                shipCo=""
                if (JSON.stringify(obj_arr[i].position[k]) === JSON.stringify(co)) {
                    shipCo = obj_arr[i].name + "hit"
                    console.log("Ship Status: " + obj_arr[i].name + " hit")
                    obj_arr[i].Hit()
                    break
                } else
                    shipCo = `${co} Miss`
                // console.log(shipCo)
                break
            }
        }
        console.log("shipStatus: " + shipCo)
    }
}

let player = new gameBoard()
player.attack([2, 7])
player.attack([2, 5])
player.attack([0, 0])
player.attack([2, 3])
player.attack([5, 3])
player.attack([4, 7])
obj_arr_display()