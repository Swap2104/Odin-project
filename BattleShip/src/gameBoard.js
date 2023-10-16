import Ship from "./Ship.js";
import Hit from "./Ship.js"
import { obj_arr , shipNames} from "./Ship.js"

class gameBoard {
    attack(co) {
        let shipCo
        for (let i = 0; i < obj_arr.length; i++) {
            if (JSON.stringify(obj_arr[i].co_ordinates) === JSON.stringify(co)) {
                shipCo = "Hit"
                obj_arr[i].Hit()
                break
            } else {
                shipCo = "Miss"
            }
        }
        console.log("shipStatus: " + shipCo)
    }
}

let player = new gameBoard()
player.attack([2, 7])
player.attack([2, 5])
player.attack([2, 3])
