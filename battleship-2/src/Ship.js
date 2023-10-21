let objects = []
function Ship(name, length, startCo, horizontal) {
    this.name = name
    this.length = length
    this.startCo = startCo
    this.horizontal = horizontal
    this.noHits = 0
    this.isSunk
    this.position = [this.startCo]
    this.sunkShips = []


    if (this.horizontal) this.endCo = [startCo[0], startCo[1] + length - 1]
    else this.endCo = [startCo[0] + length - 1, startCo[1]]


    for (let i = 1; i < length; i++) {
        if (this.horizontal) this.position.splice(i, 0, [startCo[0], startCo[1] + i]);
        else this.position.splice(i, 0, [startCo[0] + i, startCo[1]]);
    }

    let sunk = () => {
        console.log(`${this.name} has sunk`)
        this.isSunk = true
        this.sunkShips.push(this)
        console.log(`Ships Destroyed: `)
        console.log(this.sunkShips)
    }

    this.hit = () => {
        this.noHits++
        if (this.noHits >= this.length) sunk()
        return this.noHits
    }
}

// objects.push(new Ship('boat', 2, [5, 5]))
// objects.push(new Ship('submarine', 3, [1, 8]))
// objects.push(new Ship('battleship', 5, [3, 9]))
// objects.push(new Ship('carrier', 7, [5, 5]))

// console.log(objects)

export { Ship, objects }