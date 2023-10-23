import { Ship, objects } from "./Ship.js";
function gameBoard() {
    this.attack = (pos) => {
        for (let i = 0; i < objects.length; i++) {
            for (let k = 0; k < objects[i].position.length; k++) {
                if (JSON.stringify(objects[i].position[k]) === JSON.stringify(pos)) {
                    objects[i].hit()
                    return `${objects[i].name} is Hit`
                }
            }
        }
        return null
    }
}

export default gameBoard 