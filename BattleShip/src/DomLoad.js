//* ship placement
function ship_placement() {
    let horizontal = true
    let content = document.getElementById('content')
    let placement = document.createElement('div')
    let ship = document.createElement('div')
    let header = document.createElement('div')
    let ship_header = document.createElement('div')
    let placement_header = document.createElement('div')
    let selectedPlace = null
    let noClickBoat = 0
    let noClickSubmarine = 0
    let noClickBattleship = 0
    let noClickCarrier = 0

    placement.id = "placement"
    ship.id = "ship"
    header.id="header"
    content.appendChild(header)
    content.appendChild(placement)
    content.appendChild(ship)
    placement_header.textContent = "Place Your Ships"
    ship_header.textContent = "Select Ships To Place"
    // header.appendChild(placement_header.textContent="Place Your Ships")
    // header.appendChild(ship_header.textContent="Select Ships To Place")
    header.appendChild(placement_header)
    header.appendChild(ship_header)

    //* creating grid
    for (let i = 0, j = 0; i < 100; i++) {
        let div = document.createElement('div')
        placement.appendChild(div)
        div.className = "div"

        //* assigning id as co-ordinates to divs
        div.id = `${[i]}${[j]}`
        j++
        div.addEventListener('click', () => {
            selectedPlace = Number(div.id)
            if (selectedShip > 0) {
                div.style.backgroundColor = "blue"
                selectedShip--
                let partOne = Number(div.id.slice(0, div.id.length / 2))
                let partTwo = Number(div.id.slice(div.id.length / 2, div.id.length))
                console.log(partOne)
                console.log(partTwo)
                if (horizontal) {
                    partOne++
                    partTwo++
                } else {
                    partOne = partOne + 10
                    partTwo = partTwo + 10
                }
                // let Div_id=Number(div.id)
                // Div_id.
                console.log(selectedPlace)
            }
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
    boat.appendChild(boat1).className = "boat"
    boat.appendChild(boat2).className = "boat"
    //*battleship
    let battleship1 = document.createElement("div")
    let battleship2 = document.createElement("div")
    let battleship3 = document.createElement("div")
    let battleship4 = document.createElement("div")
    let battleship5 = document.createElement("div")
    battleship.appendChild(battleship1).className = "battleship"
    battleship.appendChild(battleship2).className = "battleship"
    battleship.appendChild(battleship3).className = "battleship"
    battleship.appendChild(battleship4).className = "battleship"
    battleship.appendChild(battleship5).className = "battleship"

    //*battleship
    let carrier1 = document.createElement("div")
    let carrier2 = document.createElement("div")
    let carrier3 = document.createElement("div")
    let carrier4 = document.createElement("div")
    let carrier5 = document.createElement("div")
    let carrier6 = document.createElement("div")
    let carrier7 = document.createElement("div")
    carrier.appendChild(carrier1).className = "carrier"
    carrier.appendChild(carrier2).className = "carrier"
    carrier.appendChild(carrier3).className = "carrier"
    carrier.appendChild(carrier4).className = "carrier"
    carrier.appendChild(carrier5).className = "carrier"
    carrier.appendChild(carrier6).className = "carrier"
    carrier.appendChild(carrier7).className = "carrier"

    //*submarine
    let submarine1 = document.createElement("div")
    let submarine2 = document.createElement("div")
    let submarine3 = document.createElement("div")
    submarine.appendChild(submarine1).className = "submarine"
    submarine.appendChild(submarine2).className = "submarine"
    submarine.appendChild(submarine3).className = "submarine"

    let selectedShip = null
    let length = null

    if (noClickBoat < 1) {
        boat.addEventListener('click', () => {
            selectedShip = 2
            length = boat.childElementCount
            console.log(selectedShip)
            console.log(length)
        })
    }


    if (noClickCarrier < 1) {
        carrier.addEventListener('click', () => {
            selectedShip = 7
            length = carrier.childElementCount
            console.log(selectedShip)
            console.log(length)
        })
    }

    if (noClickBattleship < 1) {
        battleship.addEventListener('click', () => {
            selectedShip = 5
            length = battleship.childElementCount
            console.log(selectedShip)
            console.log(length)
        })
    }

    if (noClickSubmarine < 1) {
        submarine.addEventListener('click', () => {
            selectedShip = 3
            length = submarine.childElementCount
            console.log(selectedShip)
            console.log(length)
        })
    }

}

ship_placement()