var objects = [] //? The user's ship objects are pushed into objects variable in `index.js`

/**
 * @summary
 * Ship Object stores the details of the ship
 * @description
 * Data stored in the objects
 * - Name
 * - Length
 * - Orientation
 * - Number of hits
 * - Ship status: sunk or not
 * - and all the co-ordinates of the ship (startCo, endCo, position[])
 * - The positions in `position[]` are calculated using the `startCo` and the `orientation`
 * @param
 * - `name`: Name of the ship 
 * - `length`: length of the ship
 * - `startCo` : The starting co-ordinate of the ship (selected by the user when ship is placed)
 * - `horizontal`: The orientation of the ship
 */
function Ship(name, length, startCo, horizontal) {
    this.name = name
    this.length = length
    this.startCo = startCo
    this.horizontal = horizontal
    this.noHits = 0
    this.isSunk = false
    this.position = []
    this.endCo = 0

    if (this.horizontal) {
        for (let i = 0; i < length; i++) {
            this.endCo = startCo++
        }
    } else {
        this.endCo = this.startCo
        for (let i = 1; i < length; i++) {
            this.endCo += 10
        }
    }

    if (this.horizontal) {
        for (var i = this.startCo; i <= this.endCo; i++) {
            this.position.push(i);
        }
    }
    if (!this.horizontal) {
        for (var i = this.startCo; i <= this.endCo; i += 10) {
            this.position.push(i);
        }
    }
}

let sunk = (ship) => {
    console.log(`${ship.name} has sunk`)
    ship.isSunk = true
    // console.log(sunkShips)
    return ship.name
}

/** 
 * @summary
 * The `hit()` function increments the number of hits of the ship being hit.
 * - If the number of hits is more then the length of the ship, the `sunk()` function is called to sink the ship */
function hit(ship) {
    ship.noHits++
    if (ship.noHits >= ship.length) {
        let sunkShip = sunk(ship)
        return sunkShip
    }
}
export { Ship, objects, hit }