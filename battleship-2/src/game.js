let player_grid = document.getElementById('player-grid')
let comp_grid = document.getElementById('comp-grid')

for (let i = 0; i < 100; i++) {
    let player_div = document.createElement('div')
    player_div.className = "player-div"
    let comp_div = document.createElement('div')
    comp_div.className = "comp-div"
    player_grid.appendChild(player_div)
    comp_grid.appendChild(comp_div)
}
