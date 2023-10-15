import Ship from "./Ship.js";
import { obj_arr } from "./Ship.js"

class gameBoard {
    attack(co) {
        console.log("object: ")
        let shipCo
        for (let i = 0; i < obj_arr.length; i++) {
            console.log(obj_arr[i].co_ordinates)
            if (JSON.stringify(obj_arr[i].co_ordinates) === JSON.stringify(co)) {
                shipCo = "Hit"
                break
            } else {
                shipCo = "Miss"
            }
        }
        console.log("shipStatus: " + shipCo)
    }
}

let player = new gameBoard()
player.attack([2, 2])