import { Ship } from "./Ship.js"

//? function to calculate attack co-ordinate by computer 
function comp() {
    return Math.floor(Math.random() * 100)
}

//? function to calculate computer's ship placement
function compShipPlacement(ship_length, ship_number) {
    let ship_placement = [] //? to stores the orientation and  unique starting co ordinate for each ship
    let comp_ship_array = []; //? The array that stores all the ship objects.
    let usedCoordinates = [] //? array to store used Co-Ordinates
    let position = [] //? array to store all the positions

    //? function to generate a unique random number for the ship, So that they do not overlap.

    function uniqueCoOrdinates(length, i) {
        let endCo
        //? `i` is used to count the number of the ship
        let dir = Math.random() < 0.5; //? generates true or false for the orientation.
        while (usedCoordinates.length < i) {
            var r = Math.floor(Math.random() * 100);
            if (usedCoordinates.indexOf(r) === -1) usedCoordinates.push(r);
        }
        let startCo = usedCoordinates[i - 1] //? initializing the start co-ordinate 

        //? calculating the end co-ordinate used to calculate all the position occupied by the ship.
        if (dir) {
            for (let j = 0; j < length; j++) {
                endCo = startCo++ //? `i-1` because we count i from 1
            }
        }
        if (!dir) {
            endCo = startCo
            for (let j = 1; j < length; j++) {
                endCo += 10
            }
        }

        // ? calculating all the position occupied by the ship. 
        if (dir) {
            for (let k = usedCoordinates[i - 1]; k <= endCo; k++) {
                position.push(k);
            }
        }
        if (!dir) {
            for (let k = startCo; k <= endCo; k += 10) {
                position.push(k);
            }
        }

        return { position, dir }
    }

    let ship_object = uniqueCoOrdinates(ship_length, ship_number)

    return ship_object;
}


// ? this function creates the ship objects
function AIShips() {
    let b = [2, 3, 5, 7]
    let a = [1, 2, 3, 4]
    let comp_ship_array = []

    let ship_object = compShipPlacement(b[0], a[0])
    comp_ship_array.push(new Ship("Boat", b[0], ship_object.position[0], ship_object.dir));
    console.log(comp_ship_array)

    ship_object = compShipPlacement(b[1], a[1])
    comp_ship_array.push(new Ship("Submarine", b[1], ship_object.position[0], ship_object.dir));
    console.log(comp_ship_array)

    ship_object = compShipPlacement(b[2], a[2])
    comp_ship_array.push(new Ship("Battleship", b[2], ship_object.position[0], ship_object.dir));
    console.log(comp_ship_array)

    ship_object = compShipPlacement(b[3], a[3])
    comp_ship_array.push(new Ship("Carrier", b[3], ship_object.position[0], ship_object.dir));
    console.log(comp_ship_array)    
    return comp_ship_array
}

export default comp
export { AIShips }