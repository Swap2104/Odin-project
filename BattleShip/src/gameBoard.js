import Ship from "./Ship.js";
import { obj_arr, obj_arr_display } from "./Ship.js"

class gameBoard {
    attack(co) {
        let shipCo
        for (let i = 0; i < obj_arr.length; i++) {
            for (let k = 0; k < obj_arr[i].position.length; k++) {
                shipCo = ""
                if (JSON.stringify(obj_arr[i].position[k]) === JSON.stringify(co)) {
                    shipCo = obj_arr[i].name + "hit"
                    console.log("Ship Status: " + obj_arr[i].name + " hit")
                    obj_arr[i].Hit()
                    break
                } else
                    shipCo = `${co} Miss`
                break
            }
        }
        console.log("shipStatus: " + shipCo)
    }
}

export default  gameBoard 