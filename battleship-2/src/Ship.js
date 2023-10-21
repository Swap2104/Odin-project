let objects = []
function Ship(name, length, startCo, horizontal) {
    this.name = name
    this.length = length
    this.startCo = startCo
    this.horizontal = horizontal
    this.noHits = 0
    this.isSunk=false
    this.position = []
    this.sunkShips = []
    this.endCo = 0

    if (this.horizontal) {
        for (let i = 0; i < length; i++) {
            this.endCo = startCo++
            console.log(this.endCo)
        }
    } else {
        this.endCo = this.startCo
        for (let i = 1; i < length; i++) {
            this.endCo += 10
        }
        console.log("end Co-ordinate:" + this.endCo)
    }

    if (this.horizontal) {
        for (var i = this.startCo; i <= this.endCo; i++) {
            this.position.push(i);
        }
    }
    if (!this.horizontal) {
        for (var i = this.startCo; i <= this.endCo; i+=10) {
            this.position.push(i);
        }
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
export { Ship, objects }