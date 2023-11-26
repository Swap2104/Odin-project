import { Navbar } from "./navabar.js"
// ! not needed any more
// import { odin_recipes } from "./project_data.js"
// ? import project data
import { data } from "./project_data.js"

//? drawing navbar on the screen

Navbar()

let img = document.getElementsByClassName('img')
let img_id = document.getElementById('img-id')


const project_0 = document.getElementById('project0')
const project_1 = document.getElementById('project1')
const project_2 = document.getElementById('project2')
const project_3 = document.getElementById('project3')
console.log(data.TicTacToe.name)
console.log(project_0)



project_0.textContent = data.TicTacToe.name
project_1.textContent = data.Weather_app.name
project_2.textContent = data.Restaurant.name
project_3.textContent = data.battleship.name




// for (let i = 0; i < data.length; i++) {
//     console.log(data[i].img)
//     console.log({ i })
//     console.log(img[i])
//     img[i].style.backgroundImage = "url(" + data[i].img + ")"
//     // img[1].style.backgroundImage = "url(" + data[1].img + ")"
// }
// console.log(data.length)
