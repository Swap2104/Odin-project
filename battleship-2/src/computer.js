import { Ship } from "./Ship.js"

//? function to calculate attack co-ordinate by computer 
function comp() {
    return Math.floor(Math.random() * 100)
}

//? function to calculate computer's ship placement
function compShipPlacement() {
    let comp_ship_array = [];
    let usedCoordinates = new Set();

    function generateUniqueCoordinate(length) {
        let coordinate;
        do {
            coordinate = Math.floor(Math.random() * 100);
        } while (usedCoordinates.has(coordinate) || usedCoordinates.has(coordinate + length - 1));

        for (let i = coordinate; i < coordinate + length; i++) {
            usedCoordinates.add(i);
        }

        return coordinate;
    }

    comp_ship_array.push(new Ship("Boat", 2, generateUniqueCoordinate(2), Math.random() < 0.5));
    comp_ship_array.push(new Ship("Submarine", 3, generateUniqueCoordinate(3), Math.random() < 0.5));
    comp_ship_array.push(new Ship("Battleship", 5, generateUniqueCoordinate(5), Math.random() < 0.5));
    comp_ship_array.push(new Ship("Carrier", 7, generateUniqueCoordinate(7), Math.random() < 0.5));

    return comp_ship_array;
}
export default comp
export { compShipPlacement }