//? function to calculate attack co-ordinate by computer 
function comp() {
    return Math.floor(Math.random() * 100)
}

//? function to calculate computer's ship placement
function compShipPlacement() {
    let name = "boat"
    let compOrientation = Math.floor(Math.random()) < 0.5
    let compBoatCoOrdinates = Math.floor(Math.random() * 100)
    console.log({ name, compBoatCoOrdinates, compOrientation })

    name = "Submarine"
    let compSubmarineCoOrdinates = Math.floor(Math.random() * 100)
    compOrientation = Math.floor(Math.random()) < 0.5
    console.log({ name, compSubmarineCoOrdinates, compOrientation })

    name = "Battleship"
    let compBattleshipCoOrdinates = Math.floor(Math.random() * 100)
    compOrientation = Math.floor(Math.random()) < 0.5
    console.log({ name, compBattleshipCoOrdinates, compOrientation })


    let compCarrierCoOrdinates = Math.floor(Math.random() * 100)
    compOrientation = Math.floor(Math.random()) < 0.5
    name = "carrier"
    console.log({ name, compCarrierCoOrdinates, compOrientation })
}

compShipPlacement()


exports = comp