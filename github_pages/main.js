console.log("hello")
JSON_var = `[
    {
        "name": "Restaurant",
        "isSunk":"This is my restaurant page project built using webpack",
    },
    {
        "name":"Battleship",
        "Desc":"This is my Battleship game"
    }
]
`
JSON_var2 = `[
    {
        "name": "Restaurant",
        "isSunk":"This is my restaurant page project built using webpack",
    },
    {
        "name":"Battleship",
        "Desc":"This is my Battleship game"
    }
]`
JSON_var3 = `[
    {
        "name": "Restaurant",
        "isSunk":"This is my restaurant page project built using webpack",
    },
    {
        "name":"Battleship",
        "Desc":"This is my Battleship game"
    }
]`

let a=[JSON_var, JSON_var2, JSON_var3]

// console.log(JSON.parse(JSON_var))
console.log(typeof(JSON.parse(a[0])))