console.log("hello")
import { Navbar } from "./navabar.js"
Navbar()

let JSON_var = `[
    {
        "name": "Restaurant",
        "Desc":"This is my restaurant page project built using webpack"
    },
    {
        "name":"Battleship",
        "Desc":"This is my Battleship game"
    }
]`

let JSON_var2 = `[
    {
        "name": "Restaurant",
        "Desc":"This is my restaurant page project built using webpack"
    },
    {
        "name":"Battleship",
        "Desc":"This is my Battleship game"
    }
]`

let JSON_var3 = `[
    {
        "name": "Restaurant",
        "Desc":"This is my restaurant page project built using webpack"
    },
    {
        "name":"Battleship",
        "Desc":"This is my Battleship game"
    }
]`

let a=[JSON_var, JSON_var2, JSON_var3]

console.log(JSON.parse(a[0]))
console.log(JSON.parse(a[1]))
console.log(JSON.parse(a[2]))