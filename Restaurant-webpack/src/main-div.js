function createMainDiv(){   
    let main=document.getElementById('content')
    let mainDiv= document.createElement("div")
    mainDiv.id="main"
    main.appendChild(mainDiv)
}

export { createMainDiv }