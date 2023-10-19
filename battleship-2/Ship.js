function Ship(name, length, startCo = [0][0]) {
    this.name = name,
        this.length = length,
        this.startCo = startCo,
        this.horizontal = true,
        this.noHits = 0
        this.isSunk, 
        this.position = [this.startCo]

    if (this.horizontal) this.endCo = [startCo[0], startCo[1] + length - 1]
    else this.endCo = [startCo[0] + length - 1, startCo[1]]


    for (let i = 1; i < length; i++) {
        if (this.horizontal) this.position.splice(i, 0, [startCo[0], startCo[1] + i]);
        else this.position.splice(i, 0, [startCo[0] + i, startCo[1]]);
    }

    let sunk=()=>{
        this.isSunk = true
        console.log(`${this.name} has sunk`)
    }

    this.hit = () => {
        this.noHits++
        if (this.noHits >= this.length) sunk()
        return this.noHits
    }
}

let boat = new Ship('boat', 2, [2, 4])
let submarine = new Ship('submarine', 3, [2, 4])
let battleship = new Ship('battleship', 5, [2, 4])
let carrier = new Ship('carrier', 7, [2, 4])

console.log(boat)
console.log(battleship)
console.log(submarine)