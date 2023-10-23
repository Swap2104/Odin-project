import gameBoard from "./gameBoard.js"
const player = new gameBoard()

function comp() {
    let compX = Math.floor(Math.random() * 10)
    console.log(compX)
    let compY = Math.floor(Math.random() * 10)
    console.log(compY)
    player.attack([compX, compY])
}

comp()
exports=comp