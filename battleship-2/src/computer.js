import { Ship } from "./Ship.js"

//? function to calculate attack co-ordinate by computer 
function comp() {
    return Math.floor(Math.random() * 100)
}

//? function to calculate computer's ship placement
function compShipPlacement() {
    let comp_ship_array = []
    let compBoatCoOrdinates = Math.floor(Math.random() * 100)
    comp_ship_array.push(new Ship("boat", 2, compBoatCoOrdinates, Math.floor(Math.random() * 2) < 0.5))

    let compSubmarineCoOrdinates = Math.floor(Math.random() * 100)
    comp_ship_array.push(new Ship("Submarine", 3, compSubmarineCoOrdinates, Math.floor(Math.random() * 2) < 0.5))

    let compBattleshipCoOrdinates = Math.floor(Math.random() * 100)
    comp_ship_array.push(new Ship("Battleship", 5, compBattleshipCoOrdinates, Math.floor(Math.random() * 2) < 0.5))

    let compCarrierCoOrdinates = Math.floor(Math.random() * 100)
    comp_ship_array.push(new Ship("Carrier", 7, compCarrierCoOrdinates, Math.floor(Math.random() * 2) < 0.5))
}

exports = {comp, compShipPlacement}