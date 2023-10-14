let obj_arr = []
class Ship {
    constructor(name, length, co_ordinates, noHits = 0, isSunk = false) {
        this.name = name,
            this.length = length,
            this.noHits = noHits,
            this.isSunk = isSunk
        this.co_ordinates = co_ordinates
        let obj = {
            name: name,
            length: length,
            noHits: noHits,
            isSunk: isSunk,
            co_ordinates: co_ordinates
        }
        obj_arr.push(obj)
    }

    Sunk() {
        this.isSunk = true
        // console.log(obj_arr[this.name])
        const shipIndex = obj_arr.findIndex((ship) => ship.name === this.name);
        if (shipIndex !== -1) {
            obj_arr[shipIndex] = { ...obj_arr[shipIndex], isSunk: true };
        }
        // return this.isSunk
    }

    Hit() {
        this.noHits++
        if (this.noHits >= this.length) {
            this.Sunk()
        }
        const shipIndex = obj_arr.findIndex((ship) => ship.name === this.name);
        if (shipIndex !== -1) {
            obj_arr[shipIndex] = { ...obj_arr[shipIndex], noHits: this.noHits };
        }
        return this.noHits
    }

}

function obj_arr_display() {
    console.log(obj_arr)
}
let battleship = new Ship("battleship", 5, [[2, 3], [5, 6]])
let carrier = new Ship("carrier", 7, [[2, 3], [5, 6]], 6)
let submarine = new Ship("submarine", 3, [[2, 3], [5, 6]])
obj_arr_display()
carrier.Hit()
obj_arr_display()


module.exports = Ship