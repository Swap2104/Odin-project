//* ship placement
function ship_placement() {
    let content = document.getElementById('content')
    let placement = document.createElement('div')
    placement.id = "placement"
    content.appendChild(placement)
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

}

ship_placement()