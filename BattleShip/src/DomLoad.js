//* ship placement
function ship_placement() {
    let content = document.getElementById('content')
    let placement = document.createElement('div')
    let ship = document.createElement('div')
    placement.id = "placement"
    ship.id = "ship"
    content.appendChild(placement)
    content.appendChild(ship)
    //* creating grid
    for (let i = 0, j = 0; i < 100; i++) {
        let div = document.createElement('div')
        placement.appendChild(div)
        div.className = "div"
        //* assigning id as co-ordinates to divs
        div.id = `${[i]},${[j]}`
        j++
        div.addEventListener('click', () => {
            console.log(div.id)
        })
    }

    //*ship to drag and drop
    let boat = document.createElement("div")
    let submarine = document.createElement("div")
    let battleship = document.createElement("div")
    let carrier = document.createElement("div")
    ship.appendChild(boat).id = "boat"
    ship.appendChild(submarine).id = "submarine"
    ship.appendChild(battleship).id = "battleship"
    ship.appendChild(carrier).id = "carrier"

    //*boat
    let boat1 = document.createElement("div")
    let boat2 = document.createElement("div")
    boat.appendChild(boat1).className="boat"
    boat.appendChild(boat2).className="boat"
    
    //*battleship
    let battleship1 = document.createElement("div")
    let battleship2 = document.createElement("div")
    let battleship3 = document.createElement("div")
    let battleship4 = document.createElement("div")
    let battleship5 = document.createElement("div")
    battleship.appendChild(battleship1).className="battleship"
    battleship.appendChild(battleship2).className="battleship"
    battleship.appendChild(battleship3).className="battleship"
    battleship.appendChild(battleship4).className="battleship"
    battleship.appendChild(battleship5).className="battleship"

    //*battleship
    let carrier1 = document.createElement("div")
    let carrier2 = document.createElement("div")
    let carrier3 = document.createElement("div")
    let carrier4 = document.createElement("div")
    let carrier5 = document.createElement("div")
    let carrier6 = document.createElement("div")
    let carrier7 = document.createElement("div")
    carrier.appendChild(carrier1).className="carrier"
    carrier.appendChild(carrier2).className="carrier"
    carrier.appendChild(carrier3).className="carrier"
    carrier.appendChild(carrier4).className="carrier"
    carrier.appendChild(carrier5).className="carrier"
    carrier.appendChild(carrier6).className="carrier"
    carrier.appendChild(carrier7).className="carrier"

    //*submarine
    let submarine1 = document.createElement("div")
    let submarine2 = document.createElement("div")
    let submarine3 = document.createElement("div")
    submarine.appendChild(submarine1).className="submarine"
    submarine.appendChild(submarine2).className="submarine"
    submarine.appendChild(submarine3).className="submarine"

}

ship_placement()