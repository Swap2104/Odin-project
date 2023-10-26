var objects=[]
function Ship(name, length, startCo, horizontal) {
    this.name = name
    this.length = length
    this.startCo = startCo
    this.horizontal = horizontal
    this.noHits = 0
    this.isSunk = false
    this.position = []
    this.sunkShips = []
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
        ship.sunkShips.push(ship)
        // console.log(`${} Destroyed: `)
        // console.log(ship.sunkShips)
    }

    function hit(ship){
        ship.noHits++
        if (ship.noHits >= ship.length) sunk(ship)
        return ship.noHits
    }
export { Ship, objects , hit}