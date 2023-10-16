let obj_arr = []
let shipNames = []
class Ship {
    constructor(name, length, startCo = [0][0], horizontal = true, noHits = 0, isSunk = false) {
        this.name = name,
            this.length = length,
            this.noHits = noHits,
            this.isSunk = isSunk
        this.horizontal = horizontal
        this.startCo = startCo
        if (horizontal)
            this.endCo = [startCo[0], startCo[1] + length - 1]
        else
            this.endCo = [startCo[0] + length - 1, startCo[1]]

        this.position = [this.startCo]

        for (let i = 1; i < length; i++) {
            if (horizontal)
                this.position.splice(i, 0, [startCo[0], startCo[1] + i]);
            else
                this.position.splice(i, 0, [startCo[0] + i, startCo[1]]);
        }
    }

    Sunk() {
        this.isSunk = true
        const shipIndex = obj_arr.findIndex((ship) => ship.name === this.name);
        console.log(this.name+" Has Sunk")
        shipNames.push(this.name)
        if (shipIndex !== -1) {
            obj_arr[shipIndex] = { ...obj_arr[shipIndex], isSunk: true };
        }
        // console.log(shipNames)
    }

    Hit() {
        this.noHits++
        if (this.noHits >= this.length) {
            this.Sunk()
        }
        return this.noHits
    }
}

obj_arr.push(new Ship("Battleship", 5, [2, 3], false, 4))
obj_arr.push(new Ship("Carrier", 7, [2, 5], true))
obj_arr.push(new Ship("Submarine", 3, [2, 7], false, 2))
obj_arr.push(new Ship("Boat", 2, [5, 3], false))

function obj_arr_display() {
    console.log(obj_arr)
}

// obj_arr_display()

export default { Ship }
export { obj_arr, shipNames, obj_arr_display }