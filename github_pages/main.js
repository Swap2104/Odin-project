import { Navbar } from "./navabar.js"
// ! not needed any more
// import { odin_recipes } from "./project_data.js"
// ? import project data
import { data } from "./project_data.js"

//? drawing navbar on the screen

Navbar()

console.log(data)

const head=document.getElementsByClassName('heading')
const para=document.getElementsByClassName('para')

head[0].textContent=data.TicTacToe.name
head[1].textContent=data.Weather_app.name
head[2].textContent=data.Restaurant.name
head[3].textContent=data.battleship.name

para[0].textContent=data.TicTacToe.desc
para[1].textContent=data.Weather_app.desc
para[2].textContent=data.Restaurant.desc
para[3].textContent=data.battleship.desc
