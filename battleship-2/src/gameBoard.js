import { Ship } from "./Ship.js";
import { hit } from "./Ship.js";

//? game board object  contains the attack method.
function gameBoard() {
    /** attack method is used to attack at any square of the grid.
     * The attack `method accepts a position from 0-99 to attack (default=0)` if it hits, the hit variable  of the ship is updated, and `${ShipName} is Hit` is returned.
     * If it's a miss it returns null */
    this.attack = (pos = 0, objects) => {
        for (let i = 0; i < objects.length; i++) {
            for (let k = 0; k < objects[i].position.length; k++) {
                // console.log(JSON.stringify(objects[i].position[k]) === pos)
                if (JSON.stringify(objects[i].position[k]) === pos) {
                    hit(objects[i])
                    return `${objects[i].name} is Hit`
                }
            }
        }
        return null
    }
}

export default gameBoard 