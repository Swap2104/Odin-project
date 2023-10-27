import { Ship } from "./Ship.js";
import { hit } from "./Ship.js";

//? game board object  contains the attack method.
function gameBoard() {
    this.players_ships = []
    this.computers_ships = []

    /** attack method is used to attack at any square of the grid.
     * The attack `method accepts a position from 0-99 to attack (default=0)` if it hits, the hit variable  of the ship is updated, and `${ShipName} is Hit` is returned.
     * If it's a miss it returns null */
    this.attack = (pos = 0, objects) => {
        for (let i = 0; i < objects.length; i++) {
            for (let k = 0; k < objects[i].position.length; k++) {
                if (JSON.stringify(objects[i].position[k]) === pos) {
                    // ? If the attack co-ordinate matches any of the ships position it calls the hit method
                    hit(objects[i])
                    // ? If all the ships have sunk it returns `1`
                    if (objects[0].isSunk == true && objects[1].isSunk == true && objects[2].isSunk == true && objects[3].isSunk == true) {
                        return 1
                    }
                    return `${objects[i].name} is Hit`
                }
            }
        }
        // ? If the attack co-ordinate does not match any of the ships position it calls the hit method
        return null
    }
}

export default gameBoard 